import React from 'react';
import { Eyebrow, Rule, Diamond, Proclamation, GiltCard, SectionEyebrow, Brackets } from './Atoms.jsx';

// ── Notes ─────────────────────────────────────────────────────────────────────
//
// Layout.astro renders the gold spine strip and hemp texture globally.
// This component does not re-render either.
//
// --tfm-leather (#2A1F0E) is defined in accents.css via the Gilded Spine theme
// (TFM_11). It is used here for the Loop and Close sections.
//
// Give button links are marked with TODO: STRIPE — swap when 501(c)(3) is
// confirmed and payment processor is connected.
//
// 501(c)(3) disclosure: pending EIN filing — see TODO: 501C3 below.

// ── Shared style tokens ───────────────────────────────────────────────────────

const LEATHER_BG   = "var(--tfm-leather)";    // #2A1F0E — accents.css
const DARK_BODY    = "rgba(244,240,230,0.72)"; // parchment at 72% on dark bg
const DARK_BODY_HI = "rgba(244,240,230,0.80)"; // parchment at 80%
const GOLD_DIM     = "rgba(196,168,74,0.20)";  // gold-bright at 20% — dividers
const GOLD_DIM_30  = "rgba(196,168,74,0.30)";  // gold-bright at 30%

const s = {
  section: {
    padding: "72px 64px 80px 72px",
    borderBottom: "1px solid var(--tfm-parchment-edge)",
  },

  sectionAlt: {
    padding: "72px 64px 80px 72px",
    backgroundColor: "var(--tfm-parchment-card)",
    borderBottom: "1px solid var(--tfm-parchment-edge)",
  },

  sectionDark: {
    padding: "72px 64px 80px 72px",
    backgroundColor: LEATHER_BG,
    borderBottom: `1px solid ${GOLD_DIM}`,
  },

  eyebrowRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  eyebrowRule: {
    display: "block",
    width: 40,
    height: 1,
    backgroundColor: "var(--tfm-gold-bright)",
    flexShrink: 0,
  },

  sectionRule: {
    width: "100%",
    height: 1,
    backgroundColor: "var(--tfm-parchment-edge)",
    margin: "20px 0 0",
  },

  bodyText: {
    fontFamily: "var(--tfm-sans)",
    fontSize: 15,
    lineHeight: 1.7,
    color: "var(--tfm-warm-brown)",
    margin: 0,
  },

  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--tfm-sans)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tfm-near-black)",
    backgroundColor: "var(--tfm-gold-bright)",
    padding: "13px 28px",
    borderRadius: 2,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  ctaGhost: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--tfm-sans)",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--tfm-parchment)",
    backgroundColor: "transparent",
    border: `1px solid ${GOLD_DIM_30}`,
    padding: "13px 28px",
    borderRadius: 2,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

// ── Section: Hero ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="give"
      className="tfm-dn-hero-section"
      style={{
        padding: "80px 36px",
        borderBottom: "1px solid var(--tfm-parchment-edge)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Brackets padding={40}>

          {/* Ref mark */}
          <div style={{
            textAlign: "center",
            color: "var(--tfm-gold-bright)",
            fontSize: 16,
            lineHeight: 1,
            marginBottom: 24,
          }}>◆</div>

          <h1 className="tfm-dn-hero-h1" style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 36,
            lineHeight: 1.3,
            margin: "0 0 24px",
            textAlign: "center",
          }}>
            <span style={{ fontWeight: 700, color: "var(--tfm-near-black)", display: "block" }}>
              We cannot give free laptops.
            </span>
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-deep)", display: "block", marginTop: 6 }}>
              We need the hardware you no longer use.
            </em>
          </h1>

          <Rule width="full" style={{ margin: "0 0 20px" }} />

          <p style={{ ...s.bodyText, fontSize: 16, textAlign: "center" }}>
            Every Install Party runs on donated machines. The laptop someone walks out with was a
            laptop someone else stopped using.{" "}
            <strong style={{ color: "var(--tfm-near-black)", fontWeight: 600 }}>
              What Big Tech calls end-of-life, we call a first computer.
            </strong>{" "}
            Give hardware if you have it. Give cash if you don't. Both extend the loop.
          </p>

        </Brackets>
      </div>
    </section>
  );
}

// ── Section: The Loop ─────────────────────────────────────────────────────────

function LoopSection() {
  const steps = [
    {
      strong: "You give a laptop.",
      rest: " One you were going to retire. One the corporation already wrote off.",
    },
    {
      strong: "TFM runs an Install Party.",
      rest: " Free room. Free instruction. Free machine for anyone who shows up without one.",
    },
    {
      strong: "Someone leaves owning a machine",
      rest: " for the first time. They follow the Roadmap. They learn the terminal. They stop renting their data.",
    },
    {
      strong: "They become a Vanguard.",
      rest: " They find their city. They run their own Exodus. They put out the call for hardware.",
    },
    {
      strong: "New donors give hardware.",
      rest: " The loop restarts. No central org required. The Vanguard in the city is TFM in that city.",
    },
  ];

  return (
    <section className="tfm-dn-loop-section" style={s.sectionDark}>
      <SectionEyebrow dark>How It Works</SectionEyebrow>

      <h2 style={{
        fontFamily: "var(--tfm-serif)",
        fontSize: 34,
        lineHeight: 1.1,
        margin: "16px 0 8px",
      }}>
        <span style={{ fontWeight: 700, color: "var(--tfm-parchment)", display: "block" }}>
          Not a charity model.
        </span>
        <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-bright)", display: "block", marginTop: 6 }}>
          A closed loop.
        </em>
      </h2>

      <div style={{
        width: "100%",
        height: 1,
        backgroundColor: GOLD_DIM,
        margin: "20px 0 44px",
      }} />

      {/* Two-column: steps left, quote right */}
      <div className="tfm-dn-loop-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "start",
      }}>

        {/* Left: 5-step loop */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr",
                gap: 16,
                alignItems: "start",
              }}
            >
              <Diamond size={14} color="var(--tfm-gold-bright)" style={{ paddingTop: 3 }} />
              <div>
                <div style={{
                  fontFamily: "var(--tfm-serif)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--tfm-parchment)",
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}>
                  {step.strong}
                </div>
                <p style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "var(--tfm-gold-bright)",
                  margin: 0,
                }}>
                  {step.rest.trim()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: quote block in Brackets */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Brackets padding={36} style={{ width: "100%" }}>
            <p style={{
              fontFamily: "var(--tfm-serif)",
              fontSize: 24,
              fontStyle: "italic",
              color: "var(--tfm-parchment)",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "center",
            }}>
              One donated laptop can travel through{" "}
              <strong style={{ fontStyle: "normal", color: "var(--tfm-gold-bright)" }}>
                all four levels of the Roadmap
              </strong>{" "}
              before it retires. That is the return on a machine you were going to throw away.
            </p>
          </Brackets>
        </div>

      </div>
    </section>
  );
}

// ── Section: Hardware ─────────────────────────────────────────────────────────

function HardwareSection() {
  const priorities = [
    { n: "01", name: "Laptops",                    note: "Best choice. Self-contained. Event-ready." },
    { n: "02", name: "Workstation PCs",             note: "Lab stations. Powerful." },
    { n: "03", name: "Mini PCs",                   note: "Excellent for Level 3 home server builds." },
    { n: "04", name: "Old gaming desktops",         note: "Powerful. Often donated on upgrade." },
    { n: "05", name: "USB drives, cables, adapters", note: "8GB+. Always needed. Always used." },
  ];

  return (
    <section id="hardware-donation" className="tfm-dn-hw-section" style={s.section}>
      <SectionEyebrow>Hardware: The Primary Ask</SectionEyebrow>

      <Proclamation
        as="h2"
        size={28}
        strong="The machine you are done with"
        italic="is someone's first one."
        style={{ margin: "16px 0 0" }}
      />

      {/* Ledger rule — muted gold, 12px below headline */}
      <div style={{
        width: "100%",
        height: 1,
        backgroundColor: "var(--tfm-gold-muted)",
        margin: "12px 0 36px",
      }} />

      <div className="tfm-dn-hw-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
        alignItems: "start",
      }}>
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ ...s.bodyText, fontSize: 15, lineHeight: 1.6 }}>
            A ThinkPad from 2015 runs Linux beautifully. The corporation that retired it never
            knew that. It was going to a landfill. Instead it goes to a person who has never
            owned a machine that was actually theirs.
          </p>
          <p style={{ ...s.bodyText, fontSize: 15, lineHeight: 1.6 }}>
            Giving it to TFM is a vote against three things at once: planned obsolescence,
            surveillance capitalism, and the idea that ordinary people cannot own their tools.
          </p>
        </div>

        {/* Right: priority manifest in GiltCard */}
        <GiltCard>
          {/* Title with ref mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, lineHeight: 1 }}>◆</span>
            <div style={{
              fontFamily: "var(--tfm-serif)",
              fontSize: 20,
              fontWeight: 700,
              color: "var(--tfm-near-black)",
              lineHeight: 1.1,
            }}>
              Priority Order
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {priorities.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: 12,
                  alignItems: "baseline",
                  padding: "12px 0",
                  paddingTop: i === 0 ? 0 : 12,
                  borderBottom: i < priorities.length - 1
                    ? "1px solid var(--tfm-parchment-edge)"
                    : "none",
                }}
              >
                <span style={{
                  fontFamily: "var(--tfm-serif)",
                  fontSize: 13,
                  fontStyle: "italic",
                  color: "var(--tfm-gold-muted)",
                }}>
                  {p.n}
                </span>
                <div>
                  <div style={{
                    fontFamily: "var(--tfm-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--tfm-near-black)",
                  }}>
                    {p.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--tfm-sans)",
                    fontSize: 12,
                    color: "var(--tfm-warm-brown-soft)",
                    marginTop: 2,
                  }}>
                    {p.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GiltCard>
      </div>

      {/* Hardware CTA bar — top and bottom muted gold rules */}
      <div className="tfm-dn-hw-cta-bar" style={{
        marginTop: 40,
        padding: "28px 32px",
        borderTop: "1px solid var(--tfm-gold-muted)",
        borderBottom: "1px solid var(--tfm-gold-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--tfm-near-black)",
            marginBottom: 4,
          }}>
            Ready to donate hardware?
          </div>
          <p style={{ ...s.bodyText, fontSize: 14, margin: 0 }}>
            Email us. Tell us what you have and where you are. We will coordinate from there.
          </p>
        </div>
        <a
          href="mailto:techfreedomministries@proton.me?subject=Hardware%20Donation"
          className="tfm-dn-hw-btn"
          style={s.cta}
        >
          Email to donate &#8594;
        </a>
      </div>
    </section>
  );
}

// ── Section: Cash tiers ───────────────────────────────────────────────────────

function CashSection() {
  const tiers = [
    {
      amount: "$25",
      // TODO: STRIPE — replace href with Stripe/PayPal link when 501(c)(3) is confirmed
      href: "#give-placeholder",
      strong: "A bootable drive.",
      body: "Every Install Party needs USB sticks loaded with Linux installers. This is one of them. It goes in someone's hand at the door.",
    },
    {
      amount: "$100",
      // TODO: STRIPE — replace href with Stripe/PayPal link when 501(c)(3) is confirmed
      href: "#give-placeholder",
      strong: "One event's materials.",
      body: "Roadmap cards, drives, printed handouts. Everything handed to every person who walks in the door.",
    },
    {
      amount: "$500",
      // TODO: STRIPE — replace href with Stripe/PayPal link when 501(c)(3) is confirmed
      href: "#give-placeholder",
      strong: "A full event in a new city.",
      body: "Room, materials, and logistics for a Vanguard running their first Exodus from scratch. This is how TFM reaches a city it has never touched.",
    },
  ];

  return (
    <section id="give-financially" className="tfm-dn-cash-section" style={s.sectionAlt}>
      <SectionEyebrow>Financial Giving</SectionEyebrow>

      <Proclamation
        as="h2"
        size={32}
        strong="Hardware fills the room."
        italic="Cash makes the room possible."
        style={{ margin: "16px 0 0" }}
      />

      {/* Ledger rule — muted gold, 16px below headline */}
      <div style={{
        width: "100%",
        height: 1,
        backgroundColor: "var(--tfm-gold-muted)",
        margin: "16px 0 0",
      }} />

      <p style={{ ...s.bodyText, maxWidth: "52ch", margin: "18px 0 40px" }}>
        Money funds the USB drives loaded with Linux installers, the printed Roadmap cards
        handed out at every event, the room rental when a church cannot host for free, and the
        shipping when hardware needs to move between cities. It does not replace hardware. It
        makes hardware matter.
      </p>

      {/* Three tier cards */}
      <div className="tfm-dn-cash-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {tiers.map((tier) => (
          <GiltCard key={tier.amount} style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 32,
            backgroundColor: "var(--tfm-parchment-card)",
          }}>
            {/* Amount with ref mark */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <span style={{ color: "var(--tfm-gold-bright)", fontSize: 18, lineHeight: 1 }}>◆</span>
              <div style={{
                fontFamily: "var(--tfm-serif)",
                fontSize: 40,
                fontWeight: 700,
                color: "var(--tfm-near-black)",
                lineHeight: 1,
              }}>
                {tier.amount}
              </div>
            </div>

            {/* Impact */}
            <p style={{ ...s.bodyText, fontSize: 15, lineHeight: 1.5, flex: 1, margin: "4px 0 0" }}>
              <strong style={{ color: "var(--tfm-near-black)", fontWeight: 600, display: "block", marginBottom: 4 }}>
                {tier.strong}
              </strong>
              {tier.body}
            </p>

            {/* Give button — TODO: STRIPE swap */}
            <a
              className="tfm-dn-cash-btn"
              href={tier.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--tfm-sans)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--tfm-parchment)",
                backgroundColor: "var(--tfm-near-black)",
                border: "none",
                padding: "12px 18px",
                borderRadius: 2,
                textDecoration: "none",
                marginTop: 4,
              }}
            >
              Give {tier.amount}
            </a>
          </GiltCard>
        ))}
      </div>

      {/* No-subscription note */}
      <p style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 13,
        color: "var(--tfm-warm-brown-soft)",
        lineHeight: 1.6,
        maxWidth: "52ch",
        margin: "28px 0 0",
      }}>
        <strong style={{ color: "var(--tfm-warm-brown)" }}>
          No subscriptions. No recurring charges.
        </strong>{" "}
        Give once. Give what you have. TFM is not funded by any platform it teaches people
        to leave.
      </p>

      {/*
        TODO: 501C3 — This disclosure is pending EIN filing and 501(c)(3) confirmation.
        Update copy and consult a tax professional before publishing.
        Draft: "Tech Freedom Ministries is a 501(c)(3) nonprofit organization.
        Donations are tax-deductible to the extent permitted by law. EIN: [PENDING]."
      */}
    </section>
  );
}

// ── Section: For the Record ───────────────────────────────────────────────────

function NotDoingSection() {
  const items = [
    "Not selling anything after the free part",
    "Not funded by any platform it teaches people to leave",
    "Not asking for monthly subscriptions",
    "Not running ads",
    "Not building a central org that outlasts the Vanguards",
    "Not keeping hardware. It goes directly to people at events.",
  ];

  return (
    <section className="tfm-dn-nd-section" style={s.section}>
      <SectionEyebrow>For the Record</SectionEyebrow>

      <Proclamation
        as="h2"
        size={32}
        strong="What your money"
        italic="is not doing."
        style={{ margin: "16px 0 0" }}
      />

      {/* Ledger rule — muted gold, 16px below headline */}
      <div style={{
        width: "100%",
        height: 1,
        backgroundColor: "var(--tfm-gold-muted)",
        margin: "16px 0 0",
      }} />

      {/* Bracketed list container */}
      <div className="tfm-dn-nd-brackets-wrap">
      <Brackets padding={48}>
        <div className="tfm-dn-nd-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 40px",
        }}>
          {items.map((text, i) => (
            <div
              key={i}
              style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 14, alignItems: "start" }}
            >
              <span style={{ color: "var(--tfm-gold-bright)", fontSize: 12, lineHeight: 1.8 }}>◆</span>
              <span style={{
                fontFamily: "var(--tfm-serif)",
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 1.4,
                color: "var(--tfm-near-black)",
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </Brackets>
      </div>
    </section>
  );
}

// ── Section: Close ────────────────────────────────────────────────────────────

function CloseSection() {
  return (
    <section style={{
      backgroundColor: LEATHER_BG,
      padding: "0 36px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top rule */}
        <div style={{ height: 1, backgroundColor: "var(--tfm-gold-bright)" }} />

        {/* Action bay */}
        <div style={{ padding: "48px 0", textAlign: "center" }}>

          <h2 style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 26,
            lineHeight: 1.3,
            margin: "0 0 24px",
          }}>
            <span style={{ fontWeight: 700, color: "var(--tfm-parchment)", display: "block" }}>
              Give what you have.
            </span>
            <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-bright)", display: "block", marginTop: 6 }}>
              Either one reaches someone.
            </em>
          </h2>

          <p style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 15,
            lineHeight: 1.75,
            color: DARK_BODY,
            maxWidth: "48ch",
            margin: "0 auto 36px",
          }}>
            The machine you donate is the reason someone shows up. The cash you give is the drive
            in their hand when they leave. Both matter. We will not tell you which one is worth
            more. We already told you hardware is first.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="mailto:techfreedomministries@proton.me?subject=Hardware%20Donation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--tfm-sans)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--tfm-near-black)",
                backgroundColor: "var(--tfm-gold-bright)",
                padding: "13px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              Donate hardware &#8594;
            </a>
            <a
              href="#give-financially"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--tfm-sans)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--tfm-parchment)",
                backgroundColor: "transparent",
                border: "1px solid var(--tfm-parchment)",
                padding: "13px 28px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              Financial gift
            </a>
          </div>

        </div>

        {/* Bottom rule */}
        <div style={{ height: 1, backgroundColor: "var(--tfm-gold-bright)" }} />

      </div>
    </section>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Donate() {
  return (
    <div style={{ fontFamily: "var(--tfm-sans)", position: "relative", zIndex: 0 }}>
      <HeroSection />
      <LoopSection />
      <HardwareSection />
      <CashSection />
      <NotDoingSection />
      <CloseSection />
    </div>
  );
}
