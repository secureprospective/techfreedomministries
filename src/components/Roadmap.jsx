import React from 'react';
import { Eyebrow, Rule, Proclamation, Diamond, LEVELS } from './Atoms.jsx';

// ── Mobile styles ─────────────────────────────────────────────────────────────
//
// Desktop LevelCard uses gridTemplateColumns: "180px 1fr 1fr".
// On mobile: single column, all sections full width, padding collapses.
// classNames used as hooks:
//   tfm-rm-level-card   — the article grid
//   tfm-rm-callout      — the completion callout row

const MOBILE_STYLES = `
  @media (max-width: 768px) {

    /* Collapse three-column level card to single column */
    .tfm-rm-level-card {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
      padding: 24px 20px !important;
    }

    /* Level name: reduce size on mobile */
    .tfm-rm-level-name {
      font-size: 28px !important;
    }

    /* Completion callout: full width, already spans via grid-column
       but re-declared for single-column context */
    .tfm-rm-callout {
      grid-column: 1 / -1;
      margin-top: 8px;
    }
  }
`;

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
        gap: 48,
        alignItems: "start",
      }}
    >
      {/* Level number + name */}
      <div>
        <div style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          opacity: 0.7,
        }}>
          Level 0{L.n}
        </div>
        <div
          className="tfm-rm-level-name"
          style={{
            fontFamily: "var(--tfm-serif)",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 1.05,
            marginTop: 14,
          }}
        >
          {L.name}
        </div>
      </div>

      {/* Blurb */}
      <p style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 15,
        lineHeight: 1.7,
        opacity: 0.92,
        margin: 0,
        maxWidth: "44ch",
        color: "inherit",
      }}>
        {copy.blurb}
      </p>

      {/* Steps */}
      <ol style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}>
        {copy.steps.map((s, i) => (
          <li
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "28px 1fr",
              gap: 12,
              alignItems: "baseline",
            }}
          >
            <span style={{
              fontFamily: "var(--tfm-serif)",
              fontStyle: "italic",
              fontSize: 14,
              opacity: 0.7,
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 14,
              lineHeight: 1.55,
              opacity: 0.95,
            }}>
              {s}
            </span>
          </li>
        ))}
      </ol>

      {/* Level completion callout — full width, stamped */}
      <div
        className="tfm-rm-callout"
        style={{
          gridColumn: "1 / -1",
          marginTop: 36,
          paddingTop: 24,
          borderTop: `1px solid ${L.fg}`,
          display: "flex",
          alignItems: "baseline",
          gap: 12,
        }}
      >
        <span style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 9,
          color: L.fg,
          opacity: 0.6,
          letterSpacing: "0.05em",
          flexShrink: 0,
          paddingTop: 2,
        }}>
          ◆
        </span>
        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontStyle: "italic",
          fontSize: 16,
          color: L.fg,
          margin: 0,
          lineHeight: 1.55,
          opacity: 0.9,
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
    <>
      <style>{MOBILE_STYLES}</style>

      <section id="roadmap" style={{ padding: "64px 0 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px 40px" }}>
          <Eyebrow>The Member Journey</Eyebrow>
          <Rule style={{ margin: "14px 0 20px" }} />
          <Proclamation
            as="h2"
            size={42}
            className="tfm-ledger-rule"
            strong="From Digital Subject"
            italic="to Digital Steward."
          />
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--tfm-warm-brown)",
            maxWidth: "60ch",
            marginTop: 18,
          }}>
            Four levels. Each one earned, never bought. You move at your own pace. The physical
            card you take home from your first event tracks every milestone.
          </p>
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
      </section>
    </>
  );
}
