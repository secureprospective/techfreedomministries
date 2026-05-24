import React from 'react';
import { Eyebrow, Rule, Diamond, Proclamation, Button, GhostButton, Icon, Brackets } from './Atoms.jsx';

export default function Hero() {
  return (
    <section style={{
      padding: "96px 36px 64px",
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center",
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{
            display: "block", width: 40, height: 1,
            backgroundColor: "var(--tfm-gold-bright)", flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 13,
            fontWeight: 400,
            color: "var(--tfm-gold-muted)",
            letterSpacing: "0.04em",
          }}>
            Your laptop. Their data. Not for long.
          </span>
        </div>
        <Proclamation
          as="h1"
          size={56}
          strong="Break from the Digital Grid."
          italic="Own Your Machine."
        />
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
          <Diamond />
        </div>
        <p style={{
          fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.65,
          color: "var(--tfm-warm-brown)", maxWidth: "52ch", margin: 0,
        }}>
          Every device you own reports back. Google, Apple, Microsoft — the operating
          system is the product. We run free events that replace it. You bring a laptop.
          You leave owning it. No experience needed. No cost. Ever.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <Button onClick={() => window.location.href = '/events'}>
            Find an event near you <Icon name="arrow" size={14} />
          </Button>
          <GhostButton onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            See how it works
          </GhostButton>
        </div>
      </div>

      {/* Credential-style pull-out: logo + Galatians */}
      <Brackets style={{
        background: "var(--tfm-parchment-2)",
        padding: 44,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
          <img
            src="/assets/tfm-logo-on-dark.png"
            alt="TFM"
            data-tfm-animate="dissolution"
            style={{ width: 200, height: "auto" }}
          />
          <Rule width={40} />
          <p style={{
            fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 17,
            color: "var(--tfm-warm-brown)", lineHeight: 1.55, margin: 0, maxWidth: "32ch",
          }}>
            "For freedom Christ has set us free; stand firm, therefore, and do not submit again to a yoke of slavery."
          </p>
          <Eyebrow color="var(--tfm-deep-gold)">Galatians 5:1</Eyebrow>
        </div>
      </Brackets>
    </section>
  );
}
