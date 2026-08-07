import React, { useState, useRef, useEffect, useId } from 'react';
import { Button, Diamond } from './Atoms.jsx';

/* ─────────────────────────────────────────────────────────────────────────────
   AuthModal — the members Login/Register/Verify card, opened from the header's
   Login button (HeaderAuthButton.jsx). Wired directly to the real
   /api/auth/{register,login,verify-email,resend-code} endpoints (see
   functions/api/auth/*.ts and migrations/0001_members.sql). Small, tight
   (420px), corner-bracket "issued" treatment matching the Community card's
   unlocked state. Sanctuary Voice, but this is a functional surface — short
   and clear, not lyrical, closer to Donate's register than Roadmap's.
   ───────────────────────────────────────────────────────────────────────── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_COOLDOWN_SECONDS = 30;

const inputStyle = {
  width: "100%",
  fontFamily: "var(--tfm-sans)",
  fontSize: 15,
  padding: "10px 12px",
  background: "var(--tfm-parchment)",
  border: "1px solid var(--tfm-parchment-edge)",
  color: "var(--tfm-near-black)",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--tfm-sans)",
  fontSize: 11,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--tfm-gold-muted-on-light)",
  marginBottom: 6,
};

const Field = React.forwardRef(function Field({ id, label, style, ...inputProps }, ref) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input id={id} ref={ref} style={style || inputStyle} {...inputProps} />
    </div>
  );
});

function ErrorText({ children }) {
  if (!children) return null;
  return (
    <p role="alert" style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "#8B1A1A", margin: "0 0 14px" }}>
      {children}
    </p>
  );
}

async function postJson(path, body) {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login"); // login | register | verify
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const firstFieldRef = useRef(null);
  const cardRef = useRef(null);
  const headingId = useId();

  // Reset to a clean login state each time the modal is freshly opened.
  useEffect(() => {
    if (open) {
      setMode("login");
      setPassword("");
      setCode("");
      setError("");
      setBusy(false);
    }
  }, [open]);

  useEffect(() => {
    if (open) firstFieldRef.current?.focus();
  }, [open, mode]);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open, onClose]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  if (!open) return null;

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!EMAIL_RE.test(email) || !password) {
      setError("Enter your email and password.");
      return;
    }
    setBusy(true);
    const { ok, data } = await postJson("/api/auth/login", { email, password });
    setBusy(false);
    if (ok) {
      onClose();
      window.location.reload();
      return;
    }
    if (data.needsVerification) {
      setMode("verify");
      return;
    }
    setError(data.error || "Login failed. Try again.");
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setBusy(true);
    const { ok, data } = await postJson("/api/auth/register", { email, password });
    setBusy(false);
    if (ok) {
      setMode("verify");
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
      return;
    }
    setError(data.error || "Could not create account.");
  }

  async function handleVerify(e) {
    e.preventDefault();
    setError("");
    if (!/^\d{6}$/.test(code)) {
      setError("Enter the 6-digit code.");
      return;
    }
    setBusy(true);
    const { ok, data } = await postJson("/api/auth/verify-email", { email, code });
    setBusy(false);
    if (ok) {
      onClose();
      window.location.reload();
      return;
    }
    setError(data.error || "Invalid code.");
  }

  async function handleResend() {
    if (resendCooldown > 0) return;
    setResendCooldown(RESEND_COOLDOWN_SECONDS);
    await postJson("/api/auth/resend-code", { email });
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(28,18,9,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 500,
        padding: 20,
      }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          background: "var(--tfm-parchment-card)",
          padding: "32px 28px",
        }}
      >
        <span className="tfm-stamp-tl" aria-hidden="true"></span>
        <span className="tfm-stamp-tr" aria-hidden="true"></span>
        <span className="tfm-stamp-bl" aria-hidden="true"></span>
        <span className="tfm-stamp-br" aria-hidden="true"></span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "none",
            border: "none",
            fontSize: 18,
            lineHeight: 1,
            color: "var(--tfm-warm-brown-soft)",
            cursor: "pointer",
            padding: 4,
          }}
        >
          ✕
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <Diamond size={8} />
          <span
            id={headingId}
            style={{
              fontFamily: "var(--tfm-serif)",
              fontWeight: 700,
              fontSize: 22,
              color: "var(--tfm-near-black)",
              lineHeight: 1.2,
            }}
          >
            {mode === "login" && "Sign in"}
            {mode === "register" && "Create your account"}
            {mode === "verify" && "Check your email"}
          </span>
        </div>

        {mode === "login" && (
          <form onSubmit={handleLogin} noValidate>
            <Field
              id="auth-email"
              label="Email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={firstFieldRef}
            />
            <Field
              id="auth-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorText>{error}</ErrorText>
            <Button type="submit" disabled={busy} style={{ width: "100%", justifyContent: "center" }}>
              {busy ? "Signing in…" : "Sign in"}
            </Button>
            <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "var(--tfm-warm-brown)", marginTop: 16, textAlign: "center" }}>
              New here?{" "}
              <button type="button" className="tfm-ink-link" style={{ background: "none", border: "none", padding: 0, color: "var(--tfm-gold-deep)", fontFamily: "inherit", fontSize: "inherit", cursor: "pointer" }} onClick={() => { setMode("register"); setError(""); }}>
                Create an account
              </button>
            </p>
          </form>
        )}

        {mode === "register" && (
          <form onSubmit={handleRegister} noValidate>
            <Field
              id="auth-reg-email"
              label="Email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={firstFieldRef}
            />
            <Field
              id="auth-reg-password"
              label="Password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 12, color: "var(--tfm-warm-brown-soft)", margin: "-10px 0 16px" }}>
              At least 8 characters.
            </p>
            <ErrorText>{error}</ErrorText>
            <Button type="submit" disabled={busy} style={{ width: "100%", justifyContent: "center" }}>
              {busy ? "Creating account…" : "Create account"}
            </Button>
            <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "var(--tfm-warm-brown)", marginTop: 16, textAlign: "center" }}>
              Already have an account?{" "}
              <button type="button" className="tfm-ink-link" style={{ background: "none", border: "none", padding: 0, color: "var(--tfm-gold-deep)", fontFamily: "inherit", fontSize: "inherit", cursor: "pointer" }} onClick={() => { setMode("login"); setError(""); }}>
                Sign in
              </button>
            </p>
          </form>
        )}

        {mode === "verify" && (
          <form onSubmit={handleVerify} noValidate>
            <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--tfm-warm-brown)", margin: "0 0 18px" }}>
              We sent a 6-digit code to <strong style={{ color: "var(--tfm-near-black)" }}>{email}</strong>. Enter it below to finish setting up your account.
            </p>
            <Field
              id="auth-code"
              label="Verification code"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              autoComplete="one-time-code"
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              ref={firstFieldRef}
              style={{ ...inputStyle, fontSize: 24, letterSpacing: "0.3em", textAlign: "center" }}
            />
            <ErrorText>{error}</ErrorText>
            <Button type="submit" disabled={busy} style={{ width: "100%", justifyContent: "center" }}>
              {busy ? "Verifying…" : "Verify"}
            </Button>
            <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "var(--tfm-warm-brown)", marginTop: 16, textAlign: "center" }}>
              <button
                type="button"
                className="tfm-ink-link"
                disabled={resendCooldown > 0}
                style={{ background: "none", border: "none", padding: 0, color: resendCooldown > 0 ? "var(--tfm-warm-brown-soft)" : "var(--tfm-gold-deep)", fontFamily: "inherit", fontSize: "inherit", cursor: resendCooldown > 0 ? "default" : "pointer" }}
                onClick={handleResend}
              >
                {resendCooldown > 0 ? `Resend code (${resendCooldown}s)` : "Resend code"}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
