import { randomUUID } from "node:crypto";
import { json, originAllowed, isJsonRequest, EMAIL_RE, MIN_PASSWORD_LENGTH, type AuthEnv } from "../../_lib/http";
import { hashPassword, generateVerificationCode, sha256Hex } from "../../_lib/password";
import { sendVerificationCodeEmail } from "../../_lib/email";

interface Env extends AuthEnv {}

const CODE_TTL_MINUTES = 10;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!originAllowed(request)) return json({ error: "Forbidden origin." }, 403);
  if (!isJsonRequest(request)) return json({ error: "JSON body required." }, 415);

  let email: unknown, password: unknown;
  try {
    const body = (await request.json()) as Record<string, unknown>;
    email = body.email;
    password = body.password;
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  email = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email as string)) return json({ error: "A valid email is required." }, 400);
  if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH) {
    return json({ error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters.` }, 400);
  }

  const id = randomUUID();
  const passwordHash = await hashPassword(password);
  const now = new Date().toISOString();

  try {
    await env.USERS_DB
      .prepare("INSERT INTO users (id, email, password_hash, created_at) VALUES (?1, ?2, ?3, ?4)")
      .bind(id, email, passwordHash, now)
      .run();
  } catch {
    // UNIQUE(email) fired, or the DB is having issues. Same message either
    // way: an attacker probing "is x@y registered" learns nothing.
    return json({ error: "Could not create account." }, 409);
  }

  const code = generateVerificationCode();
  const codeHash = sha256Hex(code);
  const expiresAt = new Date(Date.now() + CODE_TTL_MINUTES * 60 * 1000).toISOString();

  await env.USERS_DB
    .prepare(
      "INSERT OR REPLACE INTO email_verification_codes (user_id, code_hash, attempts, created_at, expires_at) VALUES (?1, ?2, 0, ?3, ?4)",
    )
    .bind(id, codeHash, now, expiresAt)
    .run();

  const sent = await sendVerificationCodeEmail(env.BREVO_PRIVATE_API_KEY, email as string, code);

  return json({ ok: true, email, codeSent: sent.ok }, 201);
};
