import { json, originAllowed, isJsonRequest, EMAIL_RE, type AuthEnv } from "../../_lib/http";
import { generateVerificationCode, sha256Hex } from "../../_lib/password";
import { sendVerificationCodeEmail } from "../../_lib/email";

interface Env extends AuthEnv {}

const CODE_TTL_MINUTES = 10;
const RESEND_COOLDOWN_SECONDS = 30;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!originAllowed(request)) return json({ error: "Forbidden origin." }, 403);
  if (!isJsonRequest(request)) return json({ error: "JSON body required." }, 415);

  let email: unknown;
  try {
    const body = (await request.json()) as Record<string, unknown>;
    email = body.email;
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  email = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email as string)) return json({ error: "Invalid email." }, 400);

  // Always return {ok:true} regardless of what's found below: an attacker
  // probing "is x@y registered" learns nothing from this endpoint, same
  // discipline as register.ts and login.ts.
  const user = await env.USERS_DB
    .prepare("SELECT id, email_verified_at FROM users WHERE email = ?1")
    .bind(email)
    .first<{ id: string; email_verified_at: string | null }>();

  if (!user || user.email_verified_at) return json({ ok: true });

  const existing = await env.USERS_DB
    .prepare("SELECT created_at FROM email_verification_codes WHERE user_id = ?1")
    .bind(user.id)
    .first<{ created_at: string }>();

  if (existing) {
    const ageSeconds = (Date.now() - new Date(existing.created_at).getTime()) / 1000;
    if (ageSeconds < RESEND_COOLDOWN_SECONDS) return json({ ok: true }); // silent throttle
  }

  const code = generateVerificationCode();
  const codeHash = sha256Hex(code);
  const now = new Date().toISOString();
  const expiresAt = new Date(Date.now() + CODE_TTL_MINUTES * 60 * 1000).toISOString();

  await env.USERS_DB
    .prepare(
      "INSERT OR REPLACE INTO email_verification_codes (user_id, code_hash, attempts, created_at, expires_at) VALUES (?1, ?2, 0, ?3, ?4)",
    )
    .bind(user.id, codeHash, now, expiresAt)
    .run();

  await sendVerificationCodeEmail(env.BREVO_PRIVATE_API_KEY, email as string, code);

  return json({ ok: true });
};
