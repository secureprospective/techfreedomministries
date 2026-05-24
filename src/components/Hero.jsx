import React from 'react';
import { Rule, Diamond, Brackets } from './Atoms.jsx';

// ── Notes ─────────────────────────────────────────────────────────────────────
//
// Layout.astro renders the site header, gold spine strip, crimson ribbon, and
// hemp texture globally. This component renders only the hero section content.
//
// The eyebrow line "Your laptop. Their data. Not for long." is a statement, not
// a label. It renders at 13px mixed case — intentionally not the Eyebrow atom
// (which forces 11px all-caps). This is approved copy; do not convert to caps.
//
// The logo src path assumes the file is served from /assets/. Adjust if the
// Astro public directory structure differs.
//
// data-tfm-animate="dissolution" on the logo element is the Three.js hook.
// The animation implementation is a separate session. The static PNG renders
// as fallback when Three.js is absent or fails to load.

// ── Shared style constants ────────────────────────────────────────────────────

const DARK_BODY    = "rgba(244,240,230,0.75)"; // parchment at 75% on near-black
const GOLD_DIM_25  = "rgba(196,168,74,0.25)";  // gold-bright at 25% — seam line

// ── Sub-components ────────────────────────────────────────────────────────────

// ColophonOrnament: centered diamond flanked by fading rules.
// Matches the colophon in Layout.astro — used here only if the Hero is
// rendered standalone (e.g. Storybook). In production, Layout owns this.
function ColophonOrnament() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: 48,
        height: 1,
        background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))",
      }} />
      <Diamond size={10} color="var(--tfm-gold-bright)" />
      <div style={{
        width: 48,
        height: 1,
        background: "linear-gradient(to left, transparent, var(--tfm-gold-bright))",
      }} />
    </div>
  );
}

// ── Left column: copy ─────────────────────────────────────────────────────────

function HeroLeft() {
  return (
    <div style={{
      flex: "1.1",
      padding: "72px 48px 72px 56px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>

      {/* Eyebrow — statement, not label. Mixed case. Approved copy. */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
      }}>
        <span style={{
          display: "block",
          width: 40,
          height: 1,
          backgroundColor: "var(--tfm-gold-bright)",
          flexShrink: 0,
        }} aria-hidden="true" />
        <span style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 13,
          fontWeight: 400,
          color: "var(--tfm-gold-muted)",
          letterSpacing: "0.04em",
          // Not all-caps — this is a statement, not a label
        }}>
          Your laptop. Their data. Not for long.
        </span>
      </div>

      {/* H1 — Proclamation pattern, but as a raw h1 for correct semantics */}
      <h1 style={{
        fontFamily: "var(--tfm-serif)",
        fontSize: 46,
        lineHeight: 1.12,
        margin: "0 0 8px",
        letterSpacing: "-0.005em",
        textWrap: "pretty",
      }}>
        <span style={{ fontWeight: 700, color: "var(--tfm-near-black)", display: "block" }}>
          Break from the Digital Grid.
        </span>
        <em style={{
          fontWeight: 400,
          fontStyle: "italic",
          color: "var(--tfm-deep-gold)",
          display: "block",
          marginTop: 4,
        }}>
          Own Your Machine.
        </em>
      </h1>

      <Rule width="full" style={{ margin: "24px 0" }} />

      <p style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--tfm-warm-brown)",
        maxWidth: "420px",
        margin: "0 0 40px",
      }}>
        Every device you own reports back. Google, Apple, Microsoft —{" "}
        <strong style={{ color: "var(--tfm-near-black)", fontWeight: 600 }}>
          the operating system is the product.
        </strong>{" "}
        We run free events that replace it. You bring a laptop. You leave owning it. No
        experience needed. No cost. Ever.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <a
          href="/events"
          style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--tfm-parchment)",
            backgroundColor: "var(--tfm-near-black)",
            border: "1px solid var(--tfm-near-black)",
            padding: "13px 28px",
            borderRadius: 2,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Find an event near you
        </a>
        <a
          href="/#how-it-works"
          style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--tfm-deep-gold)",
            backgroundColor: "transparent",
            border: "1px solid var(--tfm-gold-bright)",
            padding: "13px 28px",
            borderRadius: 2,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          See how it works
        </a>
      </div>
    </div>
  );
}

// ── Right column: logo + scripture stamp ──────────────────────────────────────

function HeroRight() {
  return (
    <div style={{
      flex: "0.9",
      backgroundColor: "var(--tfm-near-black)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "56px 48px",
      gap: 32,
    }}>

      {/* Logo — data-tfm-animate is the Three.js dissolution hook */}
      <img
        src="/assets/tfm-logo-on-dark.png"
        alt="Tech Freedom Ministries — a cross rising from a dissolving circuit board hill"
        data-tfm-animate="dissolution"
        style={{ width: 450, height: "auto", display: "block" }}
      />

      {/* Galatians 5:1 in certification stamp frame */}
      <Brackets
        padding={20}
        style={{
          border: "1px solid var(--tfm-gold-bright)",
          maxWidth: 280,
          textAlign: "center",
        }}
      >
        <span style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 10,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--tfm-gold-bright)",
          display: "block",
          marginBottom: 8,
        }}>
          ◆ &nbsp; Galatians 5:1
        </span>

        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 14,
          fontStyle: "italic",
          color: "var(--tfm-gold-muted)",
          lineHeight: 1.6,
          margin: 0,
        }}>
          It is for freedom that Christ has set us free. Stand firm, then, and do not let
          yourselves be burdened again by a yoke of slavery.
          <span style={{
            display: "block",
            marginTop: 8,
            fontStyle: "normal",
            fontFamily: "var(--tfm-sans)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--tfm-deep-gold)",
          }}>
            Galatians 5:1
          </span>
        </p>
      </Brackets>
    </div>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      aria-label="Tech Freedom Ministries — Break from the Digital Grid. Own Your Machine."
      style={{
        display: "flex",
        minHeight: 536,
        position: "relative",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
