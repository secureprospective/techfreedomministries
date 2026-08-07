// Shared HTTP helpers for the auth API. Import-only (the leading underscore
// on `_lib` keeps Pages Functions from exposing this directory as routes).
// Same house style as the existing functions/api/lead.ts.

export interface AuthEnv {
  USERS_DB: D1Database;
  // Private, server-side-only Brevo transactional-email key. Never prefixed
  // PUBLIC_, never committed, added as a Cloudflare Pages secret directly.
  BREVO_PRIVATE_API_KEY: string;
}

export function json(body: unknown, status = 200, extraHeaders?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

// Origin lock, same spirit as lead.ts. Empty Origin (curl, same-origin GETs)
// is allowed; a foreign Origin is rejected.
const ALLOWED_HOSTS = new Set([
  "techfreedomministries.org",
  "www.techfreedomministries.org",
]);

export function originAllowed(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return true;
  try {
    const h = new URL(origin).hostname;
    return ALLOWED_HOSTS.has(h) || h.endsWith(".pages.dev");
  } catch {
    return false;
  }
}

// CSRF complement to SameSite=Lax: state-changing calls must be JSON, which a
// hostile <form>/<img> cannot produce.
export function isJsonRequest(request: Request): boolean {
  return (request.headers.get("Content-Type") ?? "").startsWith("application/json");
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;
