import React from 'react';
import { Eyebrow, Rule, Proclamation, Diamond, LEVELS } from './Atoms.jsx';

const LEVEL_COPY = [
  { steps: ["Install Linux on a real machine.", "Replace one cloud account.", "Leave the room with a working laptop."],
    blurb: "The first event. Three hours. You walk in with a phone that reports on you and walk out with a laptop you actually own." },
  { steps: ["Learn to navigate the terminal.", "Understand what sudo means and when to use it.", "Install software without a mouse."],
    blurb: "The why behind the how. Stewardship, sovereignty, surveillance, and the long arc of how we got here." },
  { steps: ["Stand up a home server.", "Self-host your photos and files.", "Cut your last consumer cloud account."],
    blurb: "You stop renting. You start owning. The Homestead is where the muscle memory becomes a way of life." },
  { steps: ["Run an Exodus event.", "Teach one full Catechism cycle.", "Take the Vanguard oath."],
    blurb: "The student becomes the teacher. The mission continues because of you." },
];

function LevelCard({ level }) {
  const L = LEVELS[level - 1];
  const copy = LEVEL_COPY[level - 1];
  return (
    <article style={{
      background: L.bg, color: L.fg,
      padding: "44px 48px",
      display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 48,
      alignItems: "start",
    }}>
      <div>
        <div style={{
          fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", opacity: 0.7,
        }}>
          Level 0{L.n}
        </div>
        <div style={{
          fontFamily: "var(--tfm-serif)", fontWeight: 700, fontSize: 36,
          lineHeight: 1.05, marginTop: 14,
        }}>
          {L.name}
        </div>
      </div>
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.7,
        opacity: 0.92, margin: 0, maxWidth: "44ch", color: "inherit",
      }}>
        {copy.blurb}
      </p>
      <ol style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "flex", flexDirection: "column", gap: 14,
      }}>
        {copy.steps.map((s, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 12, alignItems: "baseline" }}>
            <span style={{
              fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 14, opacity: 0.7,
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.55, opacity: 0.95 }}>
              {s}
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" style={{ padding: "64px 0 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px 40px" }}>
        <Eyebrow>The Member Journey</Eyebrow>
        <Rule style={{ margin: "14px 0 20px" }} />
        <Proclamation as="h2" size={42}
          strong="From Digital Subject"
          italic="to Digital Steward."
        />
        <p style={{
          fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.65,
          color: "var(--tfm-warm-brown)", maxWidth: "60ch", marginTop: 18,
        }}>
          Four levels. Each one earned, never bought. You move at your own pace. The physical card you take home from your first event tracks every milestone.
        </p>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px", display: "flex", flexDirection: "column" }}>
        {[1, 2, 3, 4].map((n, i) => (
          <React.Fragment key={n}>
            {i > 0 && (
              <div style={{
                display: "flex", justifyContent: "center", padding: "14px 0",
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
  );
}
