import React, { useState, useEffect } from 'react';
import { Eyebrow, Rule, Proclamation, Button, GhostButton, Icon } from './Atoms.jsx';

function Field({ label, type = "text", value, onChange, placeholder }) {
  const [focus, setFocus] = useState(false);
  const InputTag = type === "textarea" ? "textarea" : "input";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{
        fontFamily: "var(--tfm-sans)", fontSize: 10, letterSpacing: "0.20em",
        textTransform: "uppercase", color: "var(--tfm-gold-muted)",
      }}>{label}</label>
      <InputTag
        type={type === "textarea" ? undefined : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={type === "textarea" ? 3 : undefined}
        style={{
          fontFamily: "var(--tfm-sans)", fontSize: 14,
          padding: "11px 14px",
          background: "var(--tfm-parchment)",
          border: `1px solid ${focus ? "var(--tfm-gold-deep)" : "var(--tfm-parchment-edge)"}`,
          color: "var(--tfm-near-black)",
          borderRadius: 2, outline: "none",
          transition: "border-color 220ms cubic-bezier(.2,0,.2,1)",
          resize: type === "textarea" ? "vertical" : undefined,
        }}
      />
    </div>
  );
}

export default function RsvpModal({ event, onClose }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [why, setWhy] = useState("");

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!event) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(28,18,9,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, zIndex: 50,
        animation: "tfmFade 220ms cubic-bezier(.2,0,.2,1)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--tfm-parchment)",
          width: "min(560px, 100%)",
          padding: "36px 40px 32px",
          boxShadow: "0 24px 60px -28px rgba(28,18,9,0.4)",
          border: "1px solid var(--tfm-parchment-edge)",
          position: "relative",
          animation: "tfmRise 280ms cubic-bezier(.2,0,.2,1)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16,
            width: 32, height: 32, background: "transparent",
            border: 0, cursor: "pointer", color: "var(--tfm-warm-brown)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <Icon name="x" size={18} />
        </button>

        {step === 1 && (
          <>
            <Eyebrow>RSVP · {event.city}</Eyebrow>
            <Rule style={{ margin: "12px 0 18px" }} />
            <Proclamation as="h3" size={28}
              strong={event.titleStrong}
              italic={event.titleItalic}
            />
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.65,
              color: "var(--tfm-warm-brown)", margin: "16px 0 24px",
            }}>
              {event.month} {event.day} · {event.dow}, {event.time} · {event.venue}. Three hours, free, bring a laptop.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Field label="Your name"  value={name}  onChange={setName}  placeholder="Christopher Campbell" />
              <Field label="Email"      value={email} onChange={setEmail} placeholder="you@example.org" type="email" />
              <Field label="Why are you coming?" value={why} onChange={setWhy} type="textarea"
                placeholder="One or two sentences. Optional." />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28 }}>
              <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 12, color: "var(--tfm-warm-brown-soft)" }}>
                We don't email you twice. We don't sell anything.
              </span>
              <Button onClick={() => setStep(2)} disabled={!name || !email}>
                Reserve a seat <Icon name="arrow" size={13} />
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <div style={{ textAlign: "center", padding: "12px 0 6px" }}>
            <Eyebrow style={{ display: "inline-block" }}>Reserved</Eyebrow>
            <div style={{ display: "flex", justifyContent: "center", margin: "12px 0 22px" }}><Rule width={40} /></div>
            <Proclamation as="h3" size={30}
              strong="You're on the list."
              italic="We'll see you there."
            />
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.65,
              color: "var(--tfm-warm-brown)", margin: "20px auto 28px", maxWidth: "44ch",
            }}>
              {event.month} {event.day} at {event.venue}. Bring a laptop and a USB stick if you have one. If you don't, we have spares.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <GhostButton onClick={onClose}>Close</GhostButton>
              <Button onClick={onClose}>
                <Icon name="download" size={13} /> Add to calendar
              </Button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes tfmFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes tfmRise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
      `}</style>
    </div>
  );
}
