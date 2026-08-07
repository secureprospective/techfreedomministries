import React from 'react';
import { Eyebrow, Rule, Proclamation, Brackets } from './Atoms.jsx';

export default function Oath() {
  return (
    <section id="oath" style={{ padding: "96px 36px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <Eyebrow style={{ display: "inline-block" }}>The Vanguard Oath</Eyebrow>
      <div style={{ display: "flex", justifyContent: "center", margin: "16px 0 24px" }}>
        <Rule width={40} />
      </div>
      <Proclamation as="h1" size={36}
        strong="An oath, not a sign-up."
        italic="Read it before you take it."
        style={{ textAlign: "center" }}
      />
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.65,
        color: "var(--tfm-warm-brown)", maxWidth: "56ch", margin: "18px auto 0",
      }}>
        Taken in person, out loud, at Level 4 — after the Roadmap, not before it. It's printed
        on the back of every Vanguard's Roadmap card.
      </p>
      <div style={{ height: 28 }} />
      <div className="tfm-oath-brackets-wrap">
      <Brackets style={{ background: "var(--tfm-parchment-card)", padding: "48px 56px", textAlign: "left" }}>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 26 }}>
          {[
            "I will not sell what was given to me freely.",
            "I will teach the next person what I was taught.",
            "I will own the tools I use, and the data they produce.",
            "I will not speak ill of those still inside the system; I was inside it once.",
            "I will keep the Roadmap card on me. It is the proof and the promise.",
          ].map((line, i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 18, alignItems: "baseline" }}>
              <span style={{
                fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 19, fontWeight: 700,
                color: "var(--tfm-gold-deep)", textAlign: "right",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{
                fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 19,
                color: "var(--tfm-near-black)", lineHeight: 1.55,
              }}>
                {line}
              </span>
            </li>
          ))}
        </ol>
        <div style={{ height: 32 }} />
        <Rule width="full" />
        <div style={{ height: 18 }} />
        <p className="tfm-ref-mark" style={{
          fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 15,
          color: "var(--tfm-warm-brown)", margin: 0,
        }}>
          "For freedom Christ has set us free; stand firm, therefore."
          <span style={{ display: "block", marginTop: 6, fontStyle: "normal",
            fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
            textTransform: "uppercase", color: "var(--tfm-gold-deep)" }}>
            Galatians 5:1
          </span>
        </p>
      </Brackets>
      </div>
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 14, color: "var(--tfm-warm-brown-soft)",
        marginTop: 32,
      }}>
        <a href="/roadmap" className="tfm-ink-link" style={{ color: "inherit" }}>
          See the Roadmap that leads here →
        </a>
      </p>
    </section>
  );
}
