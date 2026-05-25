import React from 'react';
import { Eyebrow, Rule, Proclamation, Card, Diamond, Brackets } from './Atoms.jsx';

export default function About() {
  const is = [
    "A faith-backed nonprofit.",
    "A free, in-person Linux event in your city.",
    "A four-level member journey. Earned, never bought.",
    "A community of teachers who were once students.",
    "Open to anyone, regardless of background or belief.",
  ];
  const isnt = [
    "A subscription service.",
    "A product that sells you something after the free part.",
    "An anti-tech grievance movement.",
    "A church. We work with churches. We are not one.",
    "Funded by donations from any platform we teach you to leave.",
  ];

  return (
    <section id="about" style={{ padding: "96px 36px", maxWidth: 1100, margin: "0 auto" }}>
      <Eyebrow>About TFM</Eyebrow>
      <Rule style={{ margin: "14px 0 20px" }} />
      <Proclamation as="h2" size={42}
        className="tfm-ledger-rule"
        strong="We teach people to own their machines."
        italic="Then we teach them to teach others."
      />
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.7,
        color: "var(--tfm-warm-brown)", maxWidth: "62ch", marginTop: 20,
      }}>
        TFM was founded on a simple conviction: digital sovereignty is a stewardship
        question, not a consumer question. We don't sell software. We don't sell
        anything. What we offer is three hours, a small room, and someone who will
        sit beside you while you install Linux on a real machine.
      </p>

      {/* Mission Statement */}
      <div style={{ marginTop: 48, marginBottom: 56 }}>
        <Eyebrow style={{ marginBottom: 16 }}>Mission Statement</Eyebrow>
        <Brackets padding={40} style={{ maxWidth: 760 }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--tfm-warm-brown)",
            margin: "0 0 20px",
          }}>
            People cannot escape Big Tech surveillance without hands-on training and
            independent hardware. With faith as our backbone and an open door for everyone,
            Tech Freedom Ministries runs free Install Parties where people walk out owning
            a laptop that is actually theirs — at zero cost. Every student follows a
            four-level Roadmap; the ones who go all the way become Vanguards — teachers
            who take the mission to their own city and run their own events.
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 20,
            lineHeight: 1.55,
            margin: 0,
          }}>
            <strong style={{ fontWeight: 700, color: "var(--tfm-near-black)" }}>
              We give freedom with a fishing pole because Christ has set us free;
            </strong>{" "}
            <em style={{ fontStyle: "italic", color: "var(--tfm-gold-deep)" }}>
              what Big Tech calls end-of-life, we call a first computer.
            </em>
          </p>
        </Brackets>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28,
      }}>
        <Card hover={false} style={{ padding: "32px 36px" }}>
          <Eyebrow>What TFM Is</Eyebrow>
          <div style={{ height: 12 }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {is.map((line, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "baseline" }}>
                <Diamond size={9} style={{ paddingTop: 2 }} />
                <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 15, color: "var(--tfm-near-black)", lineHeight: 1.55 }}>
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </Card>
        <Card hover={false} style={{ padding: "32px 36px" }}>
          <Eyebrow color="var(--tfm-warm-brown-soft)">What TFM Isn't</Eyebrow>
          <div style={{ height: 12 }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {isnt.map((line, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "baseline" }}>
                <span style={{ color: "var(--tfm-warm-brown-soft)", fontFamily: "var(--tfm-serif)", fontStyle: "italic" }}>—</span>
                <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 15, color: "var(--tfm-warm-brown)", lineHeight: 1.55 }}>
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
