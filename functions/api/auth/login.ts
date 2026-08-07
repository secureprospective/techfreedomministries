import { json, originAllowed, isJsonRequest, EMAIL_RE, type AuthEnv } from "../../_lib/http";
import { hashPassword, verifyPassword } from "../../_lib/password";
import { createSession, sessionCookie } from "../../_lib/session";

interface Env extends AuthEnv {}

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
  if (!EMAIL_RE.test(email as string) || typeof password !== "string" || !password) {
    return json({ error: "Invalid credentials." }, 401);
  }

  const user = await env.USERS_DB
    .prepare("SELECT id, password_hash, email_verified_at FROM users WHERE email = ?1")
    .bind(email)
    .first<{ id: string; password_hash: string; email_verified_at: string | null }>();

  if (!user) {
    await hashPassword(password); // burn the same CPU as a real verify: timing parity
    return json({ error: "Invalid credentials." }, 401);
  }

  const ok = await verifyPassword(password, user.password_hash);
  if (!ok) return json({ error: "Invalid credentials." }, 401);

  if (!user.email_verified_at) {
    // Deliberate exception to the "reveal nothing" rule: only reachable by
    // someone who already proved they know the correct password, so there
    // is nothing left to enumerate.
    return json({ error: "Please verify your email to continue.", needsVerification: true, email }, 403);
  }

  const raw = await createSession(env.USERS_DB, user.id);

  return new Response(JSON.stringify({ ok: true, user: { email } }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": sessionCookie(raw) },
  });
};
