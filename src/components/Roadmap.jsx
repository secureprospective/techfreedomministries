import React, { useState } from 'react';
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

// ── Exodus expanded detail ────────────────────────────────────────────────────

function ExodusDetail({ onClose }) {
  const L = LEVELS[0];
  const COL_DIVIDER = "1px solid var(--tfm-parchment-edge)";

  const milestones = [
    { title: "The Clean Break",    desc: "Linux installed. Previous OS wiped or dual-booted. You made the call." },
    { title: "The Driver Conquest", desc: "Wi-Fi works. Sound works. Display works. You hit the wall and got over it." },
    { title: "The Tool Swap",      desc: "Big Tech apps replaced with tools you actually own. Open source. No subscriptions." },
    { title: "The Update Ritual",  desc: "You can update and maintain your system. You are the IT department now." },
    { title: "The First Week",     desc: "Seven straight days on Linux without going back. You proved it to yourself." },
  ];

  const movements = [
    {
      title: "The Plagues",
      body: "One by one, the systems they built to keep you dependent get dismantled. The operating system goes first. Then the apps. Then the accounts. Not all at once. Plague by plague. Until the grip breaks and the machine is yours again.",
    },
    {
      title: "The Red Sea",
      body: "The screen goes dark. The room holds its breath. Then it comes back. Faster. Cleaner. Yours. That moment — when the path through opens and you walk across — is not a metaphor. It happens on a Saturday afternoon in a church hall, and the person next to you feels it too.",
    },
    {
      title: "The Commandments",
      body: "When you finish, you don't get a certificate. You get a card. Printed on heavy stock. Four levels. Five milestones each. A covenant, not a trophy. It tells you exactly what a free person does to stay free — and it fits in your pocket.",
    },
  ];

  return (
    <div style={{ borderTop: "1px solid rgba(196,168,74,0.25)" }}>

      {/* ── Dark leather header ── */}
      <div style={{
        background: "var(--tfm-leather)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid rgba(196,168,74,0.35)",
      }}>
        {/* Diamond rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))" }} />
          <span style={{ color: "var(--tfm-gold-bright)", fontSize: 10 }}>◆</span>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to left, transparent, var(--tfm-gold-bright))" }} />
        </div>

        {/* Level badge — uses LEVELS[0] colors */}
        <div style={{
          display: "inline-block",
          background: L.bg,
          color: L.fg,
          fontFamily: "var(--tfm-sans)",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "4px 12px",
          marginBottom: 14,
        }}>
          Level 1 — The Exodus
        </div>

        <h2 style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 32,
          fontWeight: 700,
          color: "var(--tfm-parchment)",
          margin: "0 0 6px",
          lineHeight: 1.2,
        }}>
          Your screen was watching you back.
        </h2>
        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 17,
          fontStyle: "italic",
          color: "var(--tfm-gold-bright)",
          margin: 0,
          fontWeight: 400,
        }}>
          You already knew something was wrong.
        </p>
      </div>

      {/* ── Parchment body ── */}
      <div style={{ background: "var(--tfm-parchment)", padding: 32 }}>

        {/* Intro */}
        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 24px",
        }}>
          You didn't end up at a free event on a Saturday because you love computers. You came because something felt wrong. The ads that knew too much. The phone that listened. The laptop that got slower every year while someone else got richer. You couldn't name it exactly. But you weren't paranoid. You were right.
        </p>

        {/* The Eviction */}
        <div style={{
          borderLeft: "3px solid var(--tfm-gold-bright)",
          padding: "16px 20px",
          margin: "0 0 28px",
          background: "var(--tfm-parchment-card)",
        }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            color: "var(--tfm-gold-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}>
            The Eviction
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--tfm-near-black)",
            margin: 0,
          }}>
            You just kicked a massive corporate tenant out of your property. They moved in when you bought the machine. They never paid rent. They read your mail, logged your habits, and sold the reports. Saturday was the eviction notice. Now you manage the building.
          </p>
        </div>

        {/* The Three Movements */}
        <div style={{ margin: "0 0 28px" }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted)",
            margin: "0 0 16px",
          }}>
            The Three Movements
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {movements.map((m) => (
              <div key={m.title} style={{
                background: "var(--tfm-parchment-card)",
                border: COL_DIVIDER,
                borderRight: "2px solid var(--tfm-gold-bright)",
                padding: "16px 18px",
              }}>
                <p style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--tfm-gold-deep)",
                  margin: "0 0 6px",
                }}>
                  {m.title}
                </p>
                <p style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--tfm-warm-brown)",
                  margin: 0,
                }}>
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scripture bracket box */}
        <div style={{
          border: "1px solid var(--tfm-gold-bright)",
          padding: 24,
          margin: "0 0 28px",
          position: "relative",
        }}>
          <span className="tfm-stamp-tl" aria-hidden="true" />
          <span className="tfm-stamp-tr" aria-hidden="true" />
          <span className="tfm-stamp-bl" aria-hidden="true" />
          <span className="tfm-stamp-br" aria-hidden="true" />
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted)",
            margin: "0 0 10px",
          }}>
            ◆ Galatians 5:1
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 17,
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "var(--tfm-near-black)",
            margin: 0,
          }}>
            "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery."
          </p>
        </div>

        {/* What Exodus Costs You */}
        <div style={{ margin: "0 0 28px" }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted)",
            margin: "0 0 14px",
          }}>
            What Exodus Costs You
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "What it costs",   body: "The lazy comfort of the default setting. The illusion that convenience is free. The menu that used to be there." },
              { label: "What it changes", body: "Your relationship with tools. You stop being the product. You start being the operator. That shift does not reverse." },
            ].map((item) => (
              <div key={item.label} style={{
                background: "var(--tfm-parchment-card)",
                border: COL_DIVIDER,
                padding: "14px 16px",
              }}>
                <p style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 12,
                  color: "var(--tfm-gold-deep)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 6px",
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 14,
                  color: "var(--tfm-warm-brown)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Five Milestones */}
        <div style={{ margin: "0 0 28px" }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted)",
            margin: "0 0 14px",
          }}>
            The Five Milestones
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            {milestones.map((m) => (
              <div key={m.title} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "12px 16px",
                background: "var(--tfm-parchment-card)",
                border: COL_DIVIDER,
              }}>
                <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, marginTop: 2, flexShrink: 0 }}>◆</span>
                <div>
                  <p style={{
                    fontFamily: "var(--tfm-sans)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--tfm-near-black)",
                    margin: "0 0 2px",
                  }}>
                    {m.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--tfm-sans)",
                    fontSize: 13,
                    color: "var(--tfm-warm-brown)",
                    margin: 0,
                  }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark leather quote */}
        <div style={{
          background: "var(--tfm-leather)",
          padding: "24px 28px",
          margin: "0 0 24px",
        }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted)",
            margin: "0 0 10px",
          }}>
            What we tell every room before they start
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 20,
            fontStyle: "italic",
            color: "var(--tfm-parchment)",
            lineHeight: 1.5,
            margin: "0 0 6px",
          }}>
            "Freedom isn't a setting you turn on.
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 20,
            fontStyle: "italic",
            color: "var(--tfm-gold-bright)",
            lineHeight: 1.5,
            margin: 0,
          }}>
            It's a practice you look after every day."
          </p>
        </div>

        {/* CTAs */}
        <div style={{
          borderTop: COL_DIVIDER,
          paddingTop: 20,
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}>
          <a
            href="/events"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "var(--tfm-sans)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              background: "var(--tfm-near-black)",
              color: "var(--tfm-parchment)",
              border: "none",
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Find an event near you ↗
          </a>
          <button
            onClick={onClose}
            style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              background: "transparent",
              color: "var(--tfm-near-black)",
              border: "1px solid var(--tfm-near-black)",
              padding: "12px 24px",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            Close ↑
          </button>
        </div>

      </div>
    </div>
  );
}

// ── LevelCard ─────────────────────────────────────────────────────────────────

function LevelCard({ level, isOpen, onToggle }) {
  const L = LEVELS[level - 1];
  const copy = LEVEL_COPY[level - 1];
  const COL_DIVIDER = "1px solid rgba(139, 115, 85, 0.30)";
  const hasDetail = level === 1;

  return (
    <div>
      <article
        className="tfm-rm-level-card tfm-gilt-edge"
        onClick={hasDetail ? onToggle : undefined}
        style={{
          position: "relative",
          background: L.bg,
          color: L.fg,
          padding: "44px 48px",
          display: "grid",
          gridTemplateColumns: "180px 1fr 1fr",
          gap: 0,
          alignItems: "start",
          cursor: hasDetail ? "pointer" : "default",
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
          {hasDetail && (
            <div style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: L.fg,
              opacity: 0.55,
              marginTop: 16,
            }}>
              {isOpen ? "◆ Collapse" : "◆ Read more"}
            </div>
          )}
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

      {/* Expanded detail — Exodus only for now */}
      {isOpen && level === 1 && (
        <ExodusDetail onClose={onToggle} />
      )}
    </div>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Roadmap() {
  const [openLevel, setOpenLevel] = useState(null);

  const handleToggle = (level) => {
    setOpenLevel(prev => prev === level ? null : level);
  };

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

          {/* Ledger rule */}
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
              <LevelCard
                level={n}
                isOpen={openLevel === n}
                onToggle={() => handleToggle(n)}
              />
            </React.Fragment>
          ))}
        </div>

        {/* Closing action bay */}
        <div style={{ maxWidth: 1100, margin: "48px auto 0", padding: "0 36px" }}>

          {/* Top rule */}
          <div style={{ height: 1, backgroundColor: "var(--tfm-gold-muted)" }} />

          <div style={{ padding: "40px 0", textAlign: "center" }}>
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
