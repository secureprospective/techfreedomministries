import React from 'react';
import { Eyebrow, Rule, Diamond, Proclamation, Brackets, Icon, GiltCard, SectionEyebrow } from './Atoms.jsx';

// Vanguard roster — replace with real data when first members are confirmed.
// When this array is empty the roster section does not render.
const ROSTER = [];

// ── Shared style objects ──────────────────────────────────────────────────────

const s = {
  page: {
    fontFamily: "var(--tfm-sans)",
    backgroundColor: "var(--tfm-parchment)",
    position: "relative",
    zIndex: 0,
  },

  // Section padding shared across all light-background sections
  section: {
    padding: "72px 64px 72px 72px",
    borderBottom: "1px solid var(--tfm-parchment-edge)",
  },

  sectionAlt: {
    padding: "72px 64px 72px 72px",
    backgroundColor: "var(--tfm-parchment-card)",
    borderBottom: "1px solid var(--tfm-parchment-edge)",
  },

  sectionRule: {
    width: "100%",
    height: 1,
    backgroundColor: "var(--tfm-parchment-edge)",
    margin: "20px 0 36px",
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
};

// ── Section: Hero ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="tfm-vg-hero-section" style={{
      backgroundColor: "var(--tfm-near-black)",
      padding: "80px 64px 80px 72px",
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 64,
      alignItems: "center",
    }}>
      {/* Left: copy */}
      <div>
        <div style={{ ...s.eyebrowRow, marginBottom: 16 }}>
          <span style={s.eyebrowRule} aria-hidden="true" />
          <Eyebrow color="var(--tfm-gold-bright)" style={{ fontSize: 13 }}>Vanguard</Eyebrow>
        </div>

        <h1 className="tfm-vg-hero-h1" style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 36,
          lineHeight: 1.3,
          margin: "0 0 0",
        }}>
          <span style={{ fontWeight: 700, color: "var(--tfm-parchment)", display: "block" }}>
            You know what most people don't.
          </span>
          <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-bright)", display: "block", marginTop: 6 }}>
            That debt has a name.
          </em>
        </h1>

        {/* Ledger rule — muted gold, 16px below headline */}
        <div style={{ width: "100%", height: 1, backgroundColor: "var(--tfm-gold-muted)", margin: "16px 0 20px" }} />

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 16,
          lineHeight: 1.6,
          color: "var(--tfm-parchment)",
          maxWidth: "44ch",
          margin: "0 0 36px",
        }}>
          You installed the OS. You learned the terminal. You built the homestead. You know how
          surveillance works and how to walk away from it. Most people never get here. If they
          keep it, the loop stops with them — TFM stays one city, one org, one bottleneck. The
          ones who do have two choices. Keep it. Or give it away. Vanguard is the second choice.
        </p>

        <a
          className="tfm-vg-hero-cta"
          href="mailto:vanguard@techfreedomministries.com?subject=Vanguard%20Application&body=Hi%20TFM%2C%0D%0A%0D%0ACity%20I%27d%20cover%3A%20%0D%0ARoadmap%20level%3A%20%0D%0ARoom%20I%20can%20access%3A%20%0D%0A"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--tfm-near-black)",
            backgroundColor: "var(--tfm-gold-bright)",
            padding: "13px 28px",
            borderRadius: 2,
            textDecoration: "none",
          }}
        >
          Apply to Become a Vanguard
          <Icon name="arrow" size={13} color="var(--tfm-near-black)" />
        </a>
      </div>

      {/* Right: credential stamp */}
      <div className="tfm-vg-hero-stamp">
      <Brackets
        padding={28}
        style={{ borderColor: "var(--tfm-gold-bright)" }}
      >
        <div style={{
          border: "1px solid var(--tfm-gold-bright)",
          padding: "32px 28px",
          backgroundColor: "var(--tfm-parchment-card)",
        }}>
          {/* Cinzel wordmark — credential context only */}
          <div style={{
            fontFamily: "var(--tfm-cinzel)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "var(--tfm-near-black)",
            textAlign: "center",
            marginBottom: 20,
          }}>
            Tech Freedom Ministries
          </div>

          {/* Vanguard badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "var(--tfm-warm-brown)",
              border: "1px solid var(--tfm-gold-bright)",
              padding: "6px 18px",
            }}>
              Vanguard
            </span>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--tfm-parchment-edge)" }} />
            <Diamond size={9} color="var(--tfm-gold-bright)" />
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--tfm-parchment-edge)" }} />
          </div>

          {/* Oath */}
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 14,
            fontStyle: "italic",
            color: "var(--tfm-warm-brown)",
            lineHeight: 1.65,
            textAlign: "center",
            margin: "0 0 20px",
          }}>
            "I will teach the next person what I was taught."
          </p>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--tfm-parchment-edge)" }} />
            <Diamond size={9} color="var(--tfm-gold-bright)" />
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--tfm-parchment-edge)" }} />
          </div>

          <div style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--tfm-warm-brown)",
            textAlign: "center",
          }}>
            The Vanguard Oath
          </div>
        </div>
      </Brackets>
      </div>
    </section>
  );
}

// ── Section: What Vanguard Means ─────────────────────────────────────────────

function MeansSection() {
  const cards = [
    {
      n: "01",
      title: "Run the Exodus",
      body: "You find the room. You get the word out. TFM backs you with materials and a Vanguard who has done it. The city is yours to run, not ours.",
    },
    {
      n: "02",
      title: "Teach the Catechism",
      body: "You take a cohort through Level 2. The why behind the how. Stewardship, sovereignty, surveillance. You pass on what changed the way you see everything.",
    },
    {
      n: "03",
      title: "Carry the credential",
      body: "The physical card. No level colors. Gold only. It marks you as the person in your city who can be called when someone is stuck.",
    },
  ];

  return (
    <section className="tfm-vg-means-section" style={s.section}>
      <SectionEyebrow>What Vanguard Means</SectionEyebrow>
      <Proclamation
        as="h2"
        size={32}
        strong="The levels were preparation."
        italic="This is the work."
        style={{ margin: "16px 0 0" }}
      />

      {/* Ledger rule — muted gold, 16px below headline */}
      <div style={{
        width: "100%",
        height: 1,
        backgroundColor: "var(--tfm-gold-muted)",
        margin: "16px 0 36px",
      }} />

      <div className="tfm-vg-means-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {cards.map((c) => (
          <GiltCard key={c.n} style={{ padding: 32, backgroundColor: "var(--tfm-parchment-card)" }}>
            {/* Ref mark + title */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ color: "var(--tfm-gold-bright)", fontSize: 14, lineHeight: 1, flexShrink: 0 }} aria-hidden="true">◆</span>
              <div style={{
                fontFamily: "var(--tfm-serif)",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--tfm-near-black)",
                lineHeight: 1.1,
              }}>
                {c.title}
              </div>
            </div>
            <p style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--tfm-warm-brown)",
              margin: 0,
            }}>
              {c.body}
            </p>
          </GiltCard>
        ))}
      </div>
    </section>
  );
}

// ── Section: How You Get Here ─────────────────────────────────────────────────

function PathSection() {
  const steps = [
    {
      n: "01",
      title: "Complete the Roadmap",
      body: (
        <>
          All four levels. The Exodus, the Catechism, the Homestead, the Great Commission. Each
          one earned at a real event, not checked off on a screen. Not sure where you stand?{" "}
          <a href="/roadmap" className="tfm-ink-link" style={{ color: "var(--tfm-gold-deep)" }}>
            Check the Roadmap.
          </a>
        </>
      ),
    },
    {
      n: "02",
      title: "Write to us",
      body: "One paragraph. Your city, your level status, whether you have access to a room. That is the whole application. We respond within a week.",
    },
    {
      n: "03",
      title: "Take the oath",
      body: "In person. At your first event as a Vanguard. The card is given then. Not before.",
    },
    {
      n: "04",
      title: "Run your first Exodus",
      body: "You are not alone the first time. A Vanguard from another city shadows the event. After that, the city is yours.",
    },
  ];

  return (
    <section className="tfm-vg-path-section" style={s.section}>
      <SectionEyebrow>How You Get Here</SectionEyebrow>
      <Proclamation
        as="h2"
        size={32}
        strong="The path is already behind you."
        italic="One step remains."
        style={{ margin: "16px 0 0" }}
      />

      {/* Ledger rule — muted gold, 16px below headline */}
      <div style={{
        width: "100%",
        maxWidth: 640,
        height: 1,
        backgroundColor: "var(--tfm-gold-muted)",
        margin: "16px 0 0",
      }} />

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        {steps.map((step, i) => (
          <div
            key={step.n}
            style={{
              display: "grid",
              gridTemplateColumns: "16px 1fr",
              gap: 16,
              padding: "24px 0",
              borderBottom: i < steps.length - 1
                ? "1px solid var(--tfm-gold-muted)"
                : "none",
            }}
          >
            <span style={{
              color: "var(--tfm-gold-bright)",
              fontSize: 12,
              lineHeight: 1.8,
              flexShrink: 0,
            }} aria-hidden="true">◆</span>
            <div>
              <div style={{
                fontFamily: "var(--tfm-serif)",
                fontSize: 20,
                fontWeight: 700,
                color: "var(--tfm-near-black)",
                lineHeight: 1.2,
                marginBottom: 8,
              }}>
                {step.n}. {step.title}
              </div>
              <p style={{
                fontFamily: "var(--tfm-sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--tfm-warm-brown)",
                margin: 0,
              }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Section: Vanguard Network (roster conditional) ────────────────────────────

function NetworkSection({ roster }) {
  return (
    <section style={s.sectionAlt}>
      <SectionEyebrow>The Vanguard Network</SectionEyebrow>
      <Proclamation
        as="h2"
        size={34}
        strong="No org chart."
        italic="No chapters. No hierarchy."
        style={{ margin: "16px 0 8px" }}
      />
      <div style={s.sectionRule} />

      <p style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--tfm-warm-brown)",
        maxWidth: "52ch",
        margin: 0,
      }}>
        Each Vanguard owns their city. They talk to each other because they want to. The
        network grows one Exodus at a time. When your city is ready, you will find it on
        this list.
      </p>

      {/* Roster grid — only renders when roster has entries */}
      {roster.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 2,
          marginTop: 36,
        }}>
          {roster.map((member) => (
            <GiltCard key={member.id}>
              <div style={{
                fontFamily: "var(--tfm-sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--tfm-near-black)",
                marginBottom: 4,
              }}>
                {member.name}
              </div>
              <div style={{
                fontFamily: "var(--tfm-sans)",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--tfm-gold-muted-on-light)",
              }}>
                {member.city}
              </div>
            </GiltCard>
          ))}
        </div>
      )}
    </section>
  );
}

// ── Section: Apply ────────────────────────────────────────────────────────────

function ApplySection() {
  const conditions = [
    "You have completed all four Roadmap levels",
    "You have a city in mind",
    "You can find a room: church, library, community center",
    "You are willing to teach, not just attend",
  ];

  return (
    <section className="tfm-vg-apply-section" style={{
      padding: "80px 64px 80px 72px",
      backgroundColor: "var(--tfm-leather)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center",
    }}>
      {/* Left: copy */}
      <div>
        <div style={{ ...s.eyebrowRow, marginBottom: 14 }}>
          <span style={s.eyebrowRule} aria-hidden="true" />
          <Eyebrow color="var(--tfm-gold-muted-on-dark)">Ready to Apply</Eyebrow>
        </div>

        <h2 style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 32,
          lineHeight: 1.15,
          margin: "0 0 20px",
        }}>
          <span style={{ fontWeight: 700, color: "var(--tfm-parchment)", display: "block" }}>
            Your city does not have this yet.
          </span>
          <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--tfm-gold-bright)", display: "block", marginTop: 6 }}>
            You could change that.
          </em>
        </h2>

        <p style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 15,
          lineHeight: 1.7,
          color: "rgba(244,240,230,0.72)",
          maxWidth: "42ch",
          margin: 0,
        }}>
          Write one paragraph. Your city, your level status, access to a room. We will take
          it from there.
        </p>
      </div>

      {/* Right: conditions + CTA */}
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 8 }}>
          {conditions.map((text, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, alignItems: "baseline" }}>
              <Diamond size={9} color="var(--tfm-gold-bright)" />
              <span style={{
                fontFamily: "var(--tfm-sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(244,240,230,0.80)",
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        <Rule
          width="full"
          color="rgba(196,168,74,0.2)"
          style={{ margin: "20px 0 20px" }}
        />

        <a
          className="tfm-vg-apply-cta"
          href="mailto:vanguard@techfreedomministries.com?subject=Vanguard%20Application&body=Hi%20TFM%2C%0D%0A%0D%0ACity%20I%27d%20cover%3A%20%0D%0ARoadmap%20level%3A%20%0D%0ARoom%20I%20can%20access%3A%20%0D%0A"
          style={{
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
          }}
        >
          Apply to Become a Vanguard
          <Icon name="arrow" size={13} color="var(--tfm-near-black)" />
        </a>

        <div style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 12,
          color: "rgba(244,240,230,0.40)",
          marginTop: 12,
          letterSpacing: "0.01em",
        }}>
          vanguard@techfreedomministries.com
        </div>
      </div>
    </section>
  );
}

// ── Default export ────────────────────────────────────────────────────────────

export default function Vanguard({ roster = ROSTER }) {
  return (
    <div style={s.page}>
      <HeroSection />
      <MeansSection />
      <PathSection />
      {/* NetworkSection only renders when roster has entries */}
      {roster.length > 0 && <NetworkSection roster={roster} />}
      <ApplySection />
    </div>
  );
}
