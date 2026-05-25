import React from 'react';
import { Eyebrow, Proclamation, Diamond, Brackets, LEVELS } from './Atoms.jsx';

// Mobile overrides live in src/styles/responsive.css.
// Class name hooks: tfm-rm-level-card, tfm-rm-level-name, tfm-rm-callout.

// ── Level copy ────────────────────────────────────────────────────────────────

const LEVEL_COPY = [
  {
    steps: [
      "Install Linux on a real machine.",
      "Replace one cloud account.",
      "Leave the room with a working laptop.",
    ],
    blurb: "The first event. Three hours. You walk in and walk out with a laptop you actually own. Made possible by people who donated machines so someone else could have a first one.",
    callout: "Level 1 complete. You own the machine now. Nobody has root but you.",
  },
  {
    steps: [
      "Learn to navigate the terminal.",
      "Understand what sudo means and when to use it.",
      "Install software without a mouse.",
    ],
    blurb: "The why behind the how. Stewardship, sovereignty, surveillance, and the long arc of how we got here.",
    callout: "Level 2 complete. You understand the machine now. That changes how you see every other one.",
  },
  {
    steps: [
      "Stand up a home server.",
      "Self-host your photos and files.",
      "Cut your last consumer cloud account.",
    ],
    blurb: "You stop renting. You start owning. The Homestead is where the muscle memory becomes a way of life. Donated hardware from the TFM pool is available for members building their first home server.",
    callout: "Level 3 complete. You stopped renting. Your data lives where you put it, and nowhere else.",
  },
  {
    steps: [
      "Run an Exodus event.",
      "Teach one full Catechism cycle.",
      "Take the Vanguard oath.",
    ],
    blurb: "The student becomes the teacher. The mission continues because of you.",
    callout: "Level 4 complete. Take the oath. Find your city. The next Exodus is yours to run.",
  },
];

// ── LevelCard ─────────────────────────────────────────────────────────────────

function LevelCard({ level }) {
  const L = LEVELS[level - 1];
  const copy = LEVEL_COPY[level - 1];
  const COL_DIVIDER = "1px solid rgba(139, 115, 85, 0.30)";

  return (
    <article
      className="tfm-rm-level-card tfm-gilt-edge"
      style={{
        position: "relative",
        background: L.bg,
        color: L.fg,
        padding: "44px 48px",
        display: "grid",
        gridTemplateColumns: "180px 1fr 1fr",
        gap: 0,
        alignItems: "start",
      }}
    >
      {/* Column 1: Level number + name in Brackets */}
      <div style={{ paddingRight: 32 }}>
        <div style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: 0.7,
          marginBottom: 14,
        }}>
          Level 0{L.n}
        </div>
        <Brackets padding={16}>
          <div
            className="tfm-rm-level-name"
            style={{
              fontFamily: "var(--tfm-serif)",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: 1.1,
              color: L.fg,
            }}
          >
            {L.name}
          </div>
        </Brackets>
      </div>

      {/* Column 2: Blurb */}
      <p style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 15,
        lineHeight: 1.7,
        opacity: 0.92,
        margin: 0,
        color: "inherit",
        borderLeft: COL_DIVIDER,
        paddingLeft: 32,
        paddingRight: 32,
      }}>
        {copy.blurb}
      </p>

      {/* Column 3: Steps */}
      <ol style={{
        listStyle: "none",
        padding: 0,
        paddingLeft: 32,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        borderLeft: COL_DIVIDER,
      }}>
        {copy.steps.map((s, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 12,
              alignItems: "baseline",
            }}
          >
            <span style={{ color: "var(--tfm-gold-bright)", fontSize: 12, lineHeight: 1.8 }}>◆</span>
            <span style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 14,
              lineHeight: 1.55,
              color: L.fg,
              opacity: 0.95,
            }}>
              {s}
            </span>
          </li>
        ))}
      </ol>

      {/* Bottom callout — full width */}
      <div
        className="tfm-rm-callout"
        style={{
          gridColumn: "1 / -1",
          marginTop: 20,
          paddingTop: 20,
          borderTop: COL_DIVIDER,
          display: "flex",
          alignItems: "baseline",
          gap: 12,
        }}
      >
        <span style={{
          color: "var(--tfm-gold-bright)",
          fontSize: 12,
          flexShrink: 0,
          paddingTop: 2,
        }}>◆</span>
        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 14,
          fontWeight: 700,
          color: L.fg,
          margin: 0,
          lineHeight: 1.55,
        }}>
          {copy.callout}
        </p>
      </div>
    </article>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Roadmap() {
  return (
    <section id="roadmap" style={{ padding: "64px 0 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px 0" }}>
          <Eyebrow color="var(--tfm-gold-deep)" style={{ fontSize: 13 }}>The Member Journey</Eyebrow>

          <Proclamation
            as="h2"
            size={38}
            strong="From Digital Subject"
            italic="to Digital Steward."
            style={{ margin: "16px 0 0", lineHeight: 1.3 }}
          />

          {/* Ledger rule — muted gold, 16px below headline, scoped to 640px */}
          <div style={{
            width: "100%",
            maxWidth: 640,
            height: 1,
            backgroundColor: "var(--tfm-gold-muted)",
            margin: "16px 0 28px",
          }} />

          {/* Intro paragraph in Brackets frame */}
          <Brackets padding={24} style={{ maxWidth: 640 }}>
            <p style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--tfm-warm-brown)",
              margin: 0,
            }}>
              Four levels. Each one earned, never bought. You move at your own pace. The physical
              card you take home from your first event tracks every milestone.
            </p>
          </Brackets>

          {/* Section transition divider */}
          <div style={{
            textAlign: "center",
            color: "var(--tfm-gold-bright)",
            fontSize: 18,
            lineHeight: 1,
            margin: "48px 0 0",
          }} aria-hidden="true">◆</div>
        </div>

        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 36px",
          display: "flex",
          flexDirection: "column",
        }}>
          {[1, 2, 3, 4].map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "14px 0",
                  background: "var(--tfm-parchment)",
                }}>
                  <Diamond size={14} />
                </div>
              )}
              <LevelCard level={n} />
            </React.Fragment>
          ))}
        </div>

        {/* Closing action bay */}
        <div style={{ maxWidth: 1100, margin: "48px auto 0", padding: "0 36px" }}>

          {/* Top rule */}
          <div style={{ height: 1, backgroundColor: "var(--tfm-gold-muted)" }} />

          <div style={{ padding: "40px 0", textAlign: "center" }}>

            {/* ⚠️ COPY FLAG: AI-written copy for new section */}
            <h2 style={{
              fontFamily: "var(--tfm-serif)",
              fontSize: 28,
              lineHeight: 1.3,
              margin: "0 0 28px",
            }}>
              <span style={{ fontWeight: 700, color: "var(--tfm-near-black)", display: "block" }}>
                The map is clear.
              </span>
              <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-deep)", display: "block", marginTop: 6 }}>
                The choice to step forward is yours.
              </em>
            </h2>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/oath"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--tfm-parchment)",
                  backgroundColor: "var(--tfm-near-black)",
                  padding: "13px 28px",
                  borderRadius: 2,
                  textDecoration: "none",
                }}
              >
                Take the Oath
              </a>
              <a
                href="/events"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--tfm-near-black)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--tfm-warm-brown)",
                  padding: "13px 28px",
                  borderRadius: 2,
                  textDecoration: "none",
                }}
              >
                Find an Event
              </a>
            </div>

          </div>

          {/* Bottom rule */}
          <div style={{ height: 1, backgroundColor: "var(--tfm-gold-muted)" }} />

        </div>
      </section>
  );
}
