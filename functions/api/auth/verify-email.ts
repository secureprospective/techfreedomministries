import { json, originAllowed, isJsonRequest, EMAIL_RE, type AuthEnv } from "../../_lib/http";
import { sha256Hex, timingSafeStringEqual } from "../../_lib/password";
import { createSession, sessionCookie } from "../../_lib/session";

interface Env extends AuthEnv {}

const MAX_ATTEMPTS = 5;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!originAllowed(request)) return json({ error: "Forbidden origin." }, 403);
  if (!isJsonRequest(request)) return json({ error: "JSON body required." }, 415);

  let email: unknown, code: unknown;
  try {
    const body = (await request.json()) as Record<string, unknown>;
    email = body.email;
    code = body.code;
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  email = typeof email === "string" ? email.trim().toLowerCase() : "";
  code = typeof code === "string" ? code.trim() : "";
  if (!EMAIL_RE.test(email as string) || !/^\d{6}$/.test(code as string)) {
    return json({ error: "Invalid code." }, 400);
  }

  const user = await env.USERS_DB
    .prepare("SELECT id, email_verified_at FROM users WHERE email = ?1")
    .bind(email)
    .first<{ id: string; email_verified_at: string | null }>();

  if (!user) return json({ error: "Invalid code." }, 400);
  if (user.email_verified_at) return json({ error: "This account is already verified. Try signing in." }, 400);

  const row = await env.USERS_DB
    .prepare("SELECT code_hash, attempts, expires_at FROM email_verification_codes WHERE user_id = ?1")
    .bind(user.id)
    .first<{ code_hash: string; attempts: number; expires_at: string }>();

  if (!row) return json({ error: "Code expired or invalid. Request a new one." }, 400);
  if (row.expires_at <= new Date().toISOString()) {
    await env.USERS_DB.prepare("DELETE FROM email_verification_codes WHERE user_id = ?1").bind(user.id).run();
    return json({ error: "Code expired or invalid. Request a new one." }, 400);
  }
  if (row.attempts >= MAX_ATTEMPTS) {
    return json({ error: "Too many attempts. Request a new code." }, 429);
  }

  const ok = timingSafeStringEqual(sha256Hex(code as string), row.code_hash);
  if (!ok) {
    await env.USERS_DB
      .prepare("UPDATE email_verification_codes SET attempts = attempts + 1 WHERE user_id = ?1")
      .bind(user.id)
      .run();
    return json({ error: "Invalid code." }, 400);
  }

  const now = new Date().toISOString();
  await env.USERS_DB.batch([
    env.USERS_DB.prepare("UPDATE users SET email_verified_at = ?1 WHERE id = ?2").bind(now, user.id),
    env.USERS_DB.prepare("DELETE FROM email_verification_codes WHERE user_id = ?1").bind(user.id),
  ]);

  // Verification succeeds straight into a session: seamless, no separate
  // "now go log in" step.
  const raw = await createSession(env.USERS_DB, user.id);

  return new Response(JSON.stringify({ ok: true, user: { email } }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": sessionCookie(raw) },
  });
};
