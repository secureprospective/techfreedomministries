// Transactional email (verification codes) via Brevo's HTTP API. Separate
// from the PUBLIC_BREVO_API_KEY used client-side for newsletter signups in
// src/components/BrevoSignup.jsx — that key is scoped to the contacts list
// API and is safe to expose in the browser. BREVO_PRIVATE_API_KEY here is a
// transactional-send credential and must stay server-side only: a Cloudflare
// Pages secret, never in src/, never committed, never logged.
//
// Request shape cross-checked against Nexus's live API research
// (tfm-members-area channel, 2026-08-07) before this went live.

// Uses the sender already verified in Brevo (Settings -> Senders) rather
// than a new no-reply@techfreedomministries.org, which would need its own
// domain DNS (SPF/DKIM/DMARC) or a real mailbox to receive Brevo's
// verification link — neither exists yet for this domain.
const SENDER = { name: "Tech Freedom Ministries", email: "techfreedomministries@proton.me" };

export async function sendVerificationCodeEmail(
  apiKey: string,
  toEmail: string,
  code: string,
): Promise<{ ok: boolean; status: number }> {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      sender: SENDER,
      to: [{ email: toEmail }],
      subject: `${code} is your Tech Freedom Ministries verification code`,
      htmlContent: `
        <div style="font-family:Georgia,serif;max-width:480px;margin:0 auto;padding:24px;color:#1C1209;">
          <p style="font-size:15px;line-height:1.6;">Here is your verification code:</p>
          <p style="font-size:32px;font-weight:700;letter-spacing:0.1em;margin:16px 0;">${code}</p>
          <p style="font-size:13px;line-height:1.6;color:#6E5F4A;">
            This code expires in 10 minutes. If you did not request this, you can
            ignore this email.
          </p>
        </div>
      `.trim(),
    }),
  });
  return { ok: res.ok, status: res.status };
}
