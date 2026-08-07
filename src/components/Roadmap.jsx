import React, { useState, useId, useRef } from 'react';
import { Eyebrow, Proclamation, Diamond, Brackets, LEVELS } from './Atoms.jsx';

// Mobile overrides live in src/styles/responsive.css.
// Class name hooks: tfm-rm-level-card, tfm-rm-level-name, tfm-rm-callout.

// ── Shared: top-of-panel collapse control ───────────────────────────────────────
// Detail panels are long; the bottom "Close" button alone means a visitor who
// opens out of curiosity has no quick exit without a long scroll. This mirrors
// that control at the top of the leather header.

function TopCollapse({ onClose }) {
  return (
    <button
      type="button"
      onClick={onClose}
      style={{
        position: "absolute",
        top: 20,
        right: 24,
        background: "transparent",
        border: "1px solid rgba(196,168,74,0.4)",
        color: "var(--tfm-gold-bright)",
        fontFamily: "var(--tfm-sans)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "6px 12px",
        borderRadius: 2,
        cursor: "pointer",
      }}
    >
      Collapse ↑
    </button>
  );
}

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
      body: "The screen goes dark. The room holds its breath. Then it comes back. Faster. Cleaner. Yours. That moment, when the path through opens and you walk across, is not a metaphor. It happens on a Saturday afternoon in a church hall, and the person next to you feels it too.",
    },
    {
      title: "The Commandments",
      body: "When you finish, you don't get a certificate. You get a card. Printed on heavy stock. Four levels. Five milestones each. A covenant, not a trophy. It tells you exactly what a free person does to stay free. It fits in your pocket.",
    },
  ];

  return (
    <div style={{ borderTop: "1px solid rgba(196,168,74,0.25)" }}>

      {/* ── Dark leather header ── */}
      <div style={{
        position: "relative",
        background: "var(--tfm-leather)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid rgba(196,168,74,0.35)",
      }}>
        <TopCollapse onClose={onClose} />
        {/* Diamond rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))" }} />
          <span style={{ color: "var(--tfm-gold-bright)", fontSize: 10 }} aria-hidden="true">◆</span>
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
          Level 1: The Exodus
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
            color: "var(--tfm-gold-muted-on-light)",
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 16px",
          }}>
            The Three Movements
          </h3>
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
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 10px",
          }}>
            <span aria-hidden="true">◆</span> Galatians 5:1
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            What Exodus Costs You
          </h3>
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            The Five Milestones
          </h3>
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
                <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, marginTop: 2, flexShrink: 0 }} aria-hidden="true">◆</span>
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
            color: "var(--tfm-gold-muted-on-dark)",
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

// ── Catechism expanded detail ─────────────────────────────────────────────────

function CatechismDetail({ onClose }) {
  const L = LEVELS[1];
  const COL_DIVIDER = "1px solid var(--tfm-parchment-edge)";

  const movements = [
    {
      title: "The Fire",
      body: "Live sessions. Real time. The founder teaches something. The room asks questions. Someone tries something on air and it breaks. Someone else fixes it. The session gets recorded. The archive becomes the pillar of cloud, always visible, marking the path for anyone who comes later and needs to find their way. The fire is lit on a schedule. Don't sit in the dark alone.",
    },
    {
      title: "The Voice",
      body: "The terminal is not a tool for programmers. It is a direct line to your own machine. No interface designed to distract you. No menu built to serve someone else's agenda. Just you and the command and the response. You will feel clumsy at first. Typos will matter. That friction is the point. Katecheo does not work without repetition.",
    },
    {
      title: "The Still Small Voice",
      body: "At Level 2 you learn to build your own advisor. Not a corporate product. Not a data-harvesting cloud. A personal technical resource you construct yourself: context documents, agent frameworks, a tool that knows your machine because you taught it. At 11pm when the Wi-Fi drops and the house is quiet, you won't panic. You will listen, check the logs, and fix it yourself.",
    },
  ];

  const milestones = [
    { title: "The Basic Commands",  desc: "Navigate folders and move files without a mouse. The machine responds to your voice now." },
    { title: "Root Authority",       desc: "Understand what sudo means and when to use it carefully. You are the administrator. Act like it." },
    { title: "The Package Master",   desc: "Install software from the terminal. No app store. No permission slip. Direct command, direct result." },
    { title: "The Permission Slip",  desc: "Understand file permissions and ownership. Know exactly who can touch what on your machine." },
    { title: "The Scripting Spark",  desc: "Run or write a simple shell script to automate a task. The machine now does what you tell it, even when you are not watching." },
  ];

  return (
    <div style={{ borderTop: "1px solid rgba(196,168,74,0.25)" }}>

      {/* ── Dark leather header ── */}
      <div style={{
        position: "relative",
        background: "var(--tfm-leather)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid rgba(196,168,74,0.35)",
      }}>
        <TopCollapse onClose={onClose} />
        {/* Diamond rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))" }} />
          <span style={{ color: "var(--tfm-gold-bright)", fontSize: 10 }} aria-hidden="true">◆</span>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to left, transparent, var(--tfm-gold-bright))" }} />
        </div>

        {/* Level badge — uses LEVELS[1] colors */}
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
          Level 2: The Catechism
        </div>

        <h2 style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 32,
          fontWeight: 700,
          color: "var(--tfm-parchment)",
          margin: "0 0 6px",
          lineHeight: 1.2,
        }}>
          The Exodus was about leaving.
        </h2>
        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 17,
          fontStyle: "italic",
          color: "var(--tfm-gold-bright)",
          margin: 0,
          fontWeight: 400,
        }}>
          The Catechism is where we sit down together and learn how to stay free.
        </p>
      </div>

      {/* ── Parchment body ── */}
      <div style={{ background: "var(--tfm-parchment)", padding: 32 }}>

        {/* Katecheo block */}
        <div style={{
          borderLeft: "3px solid var(--tfm-gold-bright)",
          padding: "16px 20px",
          margin: "0 0 28px",
          background: "var(--tfm-parchment-card)",
        }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            color: "var(--tfm-gold-muted-on-light)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}>
            <span aria-hidden="true">◆</span> Katecheo
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--tfm-near-black)",
            margin: "0 0 12px",
          }}>
            Long before there were textbooks or schools, there was the human voice. The Greeks called it <em>katecheo</em>, to sound down into. To echo a truth until it resonates on its own. Until the student can answer without the teacher present.
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--tfm-near-black)",
            margin: 0,
          }}>
            The terminal screen is katecheo made digital. You type a command. The machine responds. You type again. It responds again. You repeat until your fingers know before your brain does. This is the oldest teaching method in human history running on the newest hardware in your house.
          </p>
        </div>

        {/* Intro paragraph */}
        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 28px",
        }}>
          Moses didn't teach the wilderness generation in a lecture hall. He taught them around fires, in tents, while they were still dirty from the road and figuring out how to live outside of Egypt. The learning happened in community, in real time, with the leader present and the questions coming from people who were actually lost. That is what this level is. You are not enrolling in a course. You are pulling up to the fire.
        </p>

        {/* The Three Movements */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 16px",
          }}>
            The Three Movements
          </h3>
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

        {/* What Catechism Costs You */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            What Catechism Costs You
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "What it costs",   body: "The safety of the mouse. Your impatience. The pride that keeps you from admitting in the room when something broke." },
              { label: "What it changes", body: "Your fallback network. You stop looking to corporate help desks. You start looking to the person next to you in the chat." },
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            The Five Milestones
          </h3>
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
                <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, marginTop: 2, flexShrink: 0 }} aria-hidden="true">◆</span>
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

        {/* Level 2 Send-Off bracket box */}
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
            color: "var(--tfm-gold-muted-on-dark)",
            margin: "0 0 10px",
          }}>
            <span aria-hidden="true">◆</span> The Level 2 Send-Off
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 20,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--tfm-near-black)",
            margin: "0 0 8px",
          }}>
            "You become a leader the first time you answer someone else's question in the chat."
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 16,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--tfm-gold-deep)",
            margin: 0,
          }}>
            You don't just belong to this community now. This community belongs to you.
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
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Join the community ↗
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

// ── Homestead expanded detail ─────────────────────────────────────────────────

function HomesteadDetail({ onClose }) {
  const L = LEVELS[2];
  const COL_DIVIDER = "1px solid var(--tfm-parchment-edge)";

  const movements = [
    {
      title: "The Land",
      body: "You stopped being a tenant. No renting from Amazon. No storing on Google. Physical hardware humming in a room you pay for, running services you control. Your digital life now has an address that does not end in a corporate domain name. You are rooted in your own house. The day a peer looks at your network layout and says you don't owe them anything anymore. That is the day you know you have land.",
    },
    {
      title: "The Harvest",
      body: "Proof of work made visible. You can show what you built. You can explain how it handles traffic and defend its configurations. If Microsoft or Apple changes their terms of service tomorrow, it does not change a single line of your life. The Homesteader does not just have a system. They can describe it, defend it, and hand the knowledge to someone else. That is what separates Level 3 from Level 2. Level 2 teaches you the language. Level 3 is what you build once you can speak it.",
    },
    {
      title: "The Stewardship",
      body: "Genesis 1:28 calls us to exercise responsible dominion. Not to conquer. To tend. A homestead that is not maintained gets overrun. When the service drops at 11pm you do not call a helpline. You check the logs. You fix it. You keep the garden fruitful. This is you subduing the telemetry, blocking the trackers, and accepting the daily weight of ownership over the digital land you have been given.",
    },
  ];

  const milestones = [
    { title: "The Hardware Sovereign", desc: "Troubleshoot your own hardware. Know your system specs. The machine has no mysteries left to hide from you." },
    { title: "The Local Backup",       desc: "Physical backup of data you control. Not a corporate cloud. Your files live where you can see them." },
    { title: "The Self-Host Pilot",    desc: "At least one local service running. Pi-Hole, Nextcloud, a local file share. Something real, something yours, something on." },
    { title: "The Hardened Heart",     desc: "Privacy settings audited. Unnecessary telemetry disabled. You know what is leaving your network and you stopped most of it." },
    { title: "The Daily Driver",       desc: "No Microsoft. No Apple. No Google desktop software. Your daily life runs entirely on what you control." },
  ];

  return (
    <div style={{ borderTop: "1px solid rgba(196,168,74,0.25)" }}>

      {/* ── Dark leather header ── */}
      <div style={{
        position: "relative",
        background: "var(--tfm-leather)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid rgba(196,168,74,0.35)",
      }}>
        <TopCollapse onClose={onClose} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))" }} />
          <span style={{ color: "var(--tfm-gold-bright)", fontSize: 10 }} aria-hidden="true">◆</span>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to left, transparent, var(--tfm-gold-bright))" }} />
        </div>
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
          Level 3: The Homestead
        </div>
        <h2 style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 32,
          fontWeight: 700,
          color: "var(--tfm-parchment)",
          margin: "0 0 6px",
          lineHeight: 1.2,
        }}>
          You don't get a certificate when you finish this level.
        </h2>
        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 17,
          fontStyle: "italic",
          color: "var(--tfm-gold-bright)",
          margin: 0,
          fontWeight: 400,
        }}>
          Nobody prints a badge. The room tells you when you've arrived.
        </p>
      </div>

      {/* ── Parchment body ── */}
      <div style={{ background: "var(--tfm-parchment)", padding: 32 }}>

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 16px",
        }}>
          There is a profound shift that happens when you pull your family's photos off a corporate cloud and put them on a drive spinning inside your own walls. It is the feeling of walking onto land you actually own. The Homestead is not a test you pass. It is the moment you stop acting like a digital tenant and start acting like a landlord.
        </p>

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 16px",
        }}>
          The midnight realization that your local DNS filter just blocked ten thousand corporate telemetry pings, and it did it because you built it that way. When you can show your system to another builder and walk them through your defense lines, you are a Homesteader. They will tell you you've arrived before you realize it yourself.
        </p>

        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 14,
          lineHeight: 1.65,
          color: "var(--tfm-gold-muted-on-light)",
          fontStyle: "italic",
          margin: "0 0 28px",
        }}>
          A Homestead can be built on a $35 single-board computer or an old desktop pulled from a closet. The work is what makes it a homestead. Not the budget.
        </p>

        {/* The Three Movements */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 16px",
          }}>
            The Three Movements
          </h3>
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

        {/* What Homestead Costs You */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            What Homestead Costs You
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "What it costs",   body: "The comfort of calling someone else when it breaks. The convenience of letting a corporation tend your land for you. The illusion that ownership without maintenance is possible." },
              { label: "What it changes", body: "Your standing in the room. You move from student to builder. From someone who escaped to someone who built something worth protecting." },
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            The Five Milestones
          </h3>
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
                <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, marginTop: 2, flexShrink: 0 }} aria-hidden="true">◆</span>
                <div>
                  <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, fontWeight: 700, color: "var(--tfm-near-black)", margin: "0 0 2px" }}>
                    {m.title}
                  </p>
                  <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "var(--tfm-warm-brown)", margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genesis 1:28 bracket box */}
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
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 10px",
          }}>
            <span aria-hidden="true">◆</span> Genesis 1:28
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 17,
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "var(--tfm-near-black)",
            margin: "0 0 16px",
          }}>
            "God didn't hand Adam a checklist for subduing the earth. He gave him a garden and let the work define the man. Put your hands on the tools. Let the room see what you can build."
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 18,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--tfm-gold-deep)",
            margin: 0,
          }}>
            You didn't pass a test. You earned the respect of the room.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ borderTop: COL_DIVIDER, paddingTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
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
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Start building ↗
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

// ── Great Commission expanded detail ─────────────────────────────────────────

function CommissionDetail({ onClose }) {
  const L = LEVELS[3];
  const COL_DIVIDER = "1px solid var(--tfm-parchment-edge)";

  const movements = [
    {
      title: "The Return",
      body: "You walk back into the room where you once sat scared. You stand in the back and scan the faces of the newcomers. You are looking for the person who is quietly staring at a black screen and has decided not to ask for help. You were that person once. You know exactly where they are sitting. Go find them.",
    },
    {
      title: "The Mirror",
      body: "You are the living proof that the mission works. When you explain the why of digital freedom to someone who has never heard of Linux, when you fix a Wi-Fi driver for someone who thought they were too old to learn, you are showing them that this is not for engineers. It is for anyone willing to do the work. Your presence in the room is the argument.",
    },
    {
      title: "The Commission",
      body: "Matthew 28:19. Go and make disciples. Not students. Disciples. People who become like their teacher and then go make more. You are only as free as the people around you. The person next to you at church, at work, at the dinner table, if they are still tracked and sold, your proximity to that system never fully ends. The fishing pole was never just for you.",
    },
  ];

  const milestones = [
    { title: "The Translator",       desc: "Can explain the why of TFM to someone who has never opened a terminal. The mission in plain language. No jargon required." },
    { title: "The Guide",            desc: "Has successfully helped one other person through their first Install Party. Not observed it. Done it. Start to finish." },
    { title: "The Troubleshooter",   desc: "Can fix a black screen or a Wi-Fi driver failure for a newcomer. Calmly. Without making them feel stupid for not knowing." },
    { title: "The Community Pillar", desc: "Active in the forums and live sessions. Answers the questions they used to ask. Keeps the fire lit for the person hitting the wall at midnight." },
    { title: "The Master Steward",   desc: "No longer a consumer of technology. A creator and protector of digital liberty. The Roadmap did not produce a graduate. It produced a Vanguard." },
  ];

  return (
    <div style={{ borderTop: "1px solid rgba(196,168,74,0.25)" }}>

      {/* ── Dark leather header ── */}
      <div style={{
        position: "relative",
        background: "var(--tfm-leather)",
        padding: "28px 32px 24px",
        borderBottom: "1px solid rgba(196,168,74,0.35)",
      }}>
        <TopCollapse onClose={onClose} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to right, transparent, var(--tfm-gold-bright))" }} />
          <span style={{ color: "var(--tfm-gold-bright)", fontSize: 10 }} aria-hidden="true">◆</span>
          <div style={{ height: 1, width: 36, background: "linear-gradient(to left, transparent, var(--tfm-gold-bright))" }} />
        </div>
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
          Level 4: The Great Commission
        </div>
        <h2 style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 32,
          fontWeight: 700,
          color: "var(--tfm-parchment)",
          margin: "0 0 6px",
          lineHeight: 1.2,
        }}>
          Freedom kept to yourself is just a larger cell.
        </h2>
        <p style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 17,
          fontStyle: "italic",
          color: "var(--tfm-gold-bright)",
          margin: 0,
          fontWeight: 400,
        }}>
          The Great Commission is not the end of the Roadmap. It is the beginning of someone else's Exodus.
        </p>
      </div>

      {/* ── Parchment body ── */}
      <div style={{ background: "var(--tfm-parchment)", padding: 32 }}>

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 16px",
        }}>
          Think back to your first Saturday. Your screen went black. You thought you ruined your computer. You were ready to walk out the door and give up. Someone leaned over your shoulder, typed three lines in the terminal, and handed your machine back to you. They didn't charge you. They didn't judge you.
        </p>

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 28px",
        }}>
          This level is about becoming that person for someone else. Not because you know every line of the Linux kernel. Because you remember what it felt like before someone showed up. That memory is the only qualification that matters.
        </p>

        {/* Luke 6:40 block */}
        <div style={{
          borderLeft: "3px solid var(--tfm-gold-bright)",
          padding: "16px 20px",
          margin: "0 0 28px",
          background: "var(--tfm-parchment-card)",
        }}>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            color: "var(--tfm-gold-muted-on-light)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: "0 0 8px",
          }}>
            <span aria-hidden="true">◆</span> Luke 6:40
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--tfm-near-black)",
            margin: "0 0 12px",
          }}>
            "A disciple is not above his teacher, but everyone when fully trained will be like his teacher."
          </p>
          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--tfm-warm-brown)",
            margin: 0,
          }}>
            You are not a superior with a title. You are a mirror turning around to show a newcomer exactly what they are about to become. The mission is only complete when the person you discipled finishes their Roadmap and turns around to disciple someone else. That is how TFM reaches cities the founder has never visited.
          </p>
        </div>

        {/* The Three Movements */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 16px",
          }}>
            The Three Movements
          </h3>
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

        {/* What The Great Commission Costs You */}
        <div style={{ margin: "0 0 28px" }}>
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            What The Great Commission Costs You
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { label: "What it costs",   body: "The comfort of being done. The satisfaction of finishing for yourself. The idea that your freedom is complete while the people around you are still inside." },
              { label: "What it changes", body: "Your name goes on the Roadmap card you hand out at the door. You stop being a graduate. You become the reason someone else graduates." },
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
          <h3 style={{
            fontWeight: 400,
            fontFamily: "var(--tfm-sans)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 14px",
          }}>
            The Five Milestones
          </h3>
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
                <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, marginTop: 2, flexShrink: 0 }} aria-hidden="true">◆</span>
                <div>
                  <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, fontWeight: 700, color: "var(--tfm-near-black)", margin: "0 0 2px" }}>
                    {m.title}
                  </p>
                  <p style={{ fontFamily: "var(--tfm-sans)", fontSize: 13, color: "var(--tfm-warm-brown)", margin: 0 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freeman's Commission bracket box */}
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
            color: "var(--tfm-gold-muted-on-light)",
            margin: "0 0 10px",
          }}>
            <span aria-hidden="true">◆</span> The Freeman's Commission
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 17,
            fontStyle: "italic",
            lineHeight: 1.7,
            color: "var(--tfm-near-black)",
            margin: "0 0 16px",
          }}>
            "You escaped the cage. Now go back for the others."
          </p>
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 18,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "var(--tfm-gold-deep)",
            margin: 0,
          }}>
            Your name is on that piece of paper because you are the living proof that the exit exists.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ borderTop: COL_DIVIDER, paddingTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/vanguard"
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
              padding: "12px 24px",
              borderRadius: 2,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Become a Vanguard ↗
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
  const hasDetail = true;
  const blurbId = useId();
  const articleRef = useRef(null);
  const wasOpen = useRef(false);

  React.useEffect(() => {
    if (wasOpen.current && !isOpen) {
      articleRef.current?.focus();
    }
    wasOpen.current = isOpen;
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (!hasDetail) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div>
      <article
        ref={articleRef}
        className="tfm-rm-level-card tfm-gilt-edge"
        onClick={hasDetail ? onToggle : undefined}
        onKeyDown={hasDetail ? handleKeyDown : undefined}
        role={hasDetail ? "button" : undefined}
        tabIndex={hasDetail ? 0 : undefined}
        aria-expanded={hasDetail ? isOpen : undefined}
        aria-label={hasDetail ? `Level ${L.n}: ${L.name}` : undefined}
        aria-describedby={hasDetail ? blurbId : undefined}
        style={{
          position: "relative",
          background: L.bg,
          color: L.fg,
          padding: "44px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 220px 1fr",
          gap: 0,
          alignItems: "start",
          cursor: hasDetail ? "pointer" : "default",
        }}
      >
        {/* Column 1: Blurb — plain language leads, per the Sanctuary Voice's
            Layer 2 rule: first-timers should meet the plain description
            before the mythology name. */}
        <p id={blurbId} style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          opacity: 0.92,
          margin: 0,
          color: "inherit",
          paddingRight: 32,
        }}>
          {copy.blurb}
        </p>

        {/* Column 2: Level number + name in Brackets — secondary, the mythology label */}
        <div style={{ borderLeft: COL_DIVIDER, paddingLeft: 20, paddingRight: 20 }}>
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
          <Brackets padding={14}>
            <div
              className="tfm-rm-level-name"
              style={{
                fontFamily: "var(--tfm-serif)",
                fontWeight: 700,
                fontSize: 20,
                lineHeight: 1.3,
                color: L.fg,
                whiteSpace: "normal",
                textAlign: "center",
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
              <span aria-hidden="true">◆</span> {isOpen ? "Collapse" : "Read more"}
            </div>
          )}
        </div>

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
              <span style={{ color: "var(--tfm-gold-bright)", fontSize: 12, lineHeight: 1.8 }} aria-hidden="true">◆</span>
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
          }} aria-hidden="true">◆</span>
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

      {/* Expanded detail */}
      {isOpen && (
        <div className="tfm-rm-unfurl">
          {level === 1 && <ExodusDetail onClose={onToggle} />}
          {level === 2 && <CatechismDetail onClose={onToggle} />}
          {level === 3 && <HomesteadDetail onClose={onToggle} />}
          {level === 4 && <CommissionDetail onClose={onToggle} />}
        </div>
      )}
    </div>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Roadmap({ standalone = false } = {}) {
  const [openLevel, setOpenLevel] = useState(null);

  const handleToggle = (level) => {
    setOpenLevel(prev => prev === level ? null : level);
  };

  return (
    <section id="roadmap" style={{ padding: "64px 0 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px 0" }}>
          <Eyebrow color="var(--tfm-gold-deep)" style={{ fontSize: 13 }}>The Member Journey</Eyebrow>

          <Proclamation
            as={standalone ? "h1" : "h2"}
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

          {/* Click hint */}
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 13,
            fontStyle: "italic",
            color: "var(--tfm-gold-muted-on-light)",
            letterSpacing: "0.02em",
            margin: "20px 0 0",
          }}>
            Click a card to expand it.{" "}
            <span style={{
              fontStyle: "normal",
              color: "var(--tfm-gold-bright)",
              fontSize: 20,
            }}>↴</span>
          </p>

          {/* Section transition divider */}
          <div style={{
            textAlign: "center",
            color: "var(--tfm-gold-bright)",
            fontSize: 18,
            lineHeight: 1,
            margin: "28px 0 0",
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
