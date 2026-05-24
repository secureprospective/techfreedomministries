import React from 'react';
import { Eyebrow, Rule, Proclamation, Card, Diamond } from './Atoms.jsx';

const tiers = [
  {
    amount: "$25",
    label: "Equip",
    impact: "Puts a USB drive in someone's hand.",
    detail: "Every install starts with a bootable drive. That drive is how it begins.",
  },
  {
    amount: "$100",
    label: "Enable",
    impact: "Funds one event's materials.",
    detail: "Printed Roadmap cards, install media, and supplies for a full session.",
  },
  {
    amount: "$500",
    label: "Expand",
    impact: "Sponsors a full event for a new city.",
    detail: "Covers everything needed to run a TFM install party from scratch in a new location.",
  },
];

const hardwareTiers = [
  {
    rank: "01",
    name: "Laptops",
    note: "Best choice. Portable, self-contained, and ready to use at an event.",
    items: [
      "ThinkPad, Dell Latitude, HP EliteBook — 2015 or newer.",
      "4GB RAM minimum. 8GB preferred.",
      "Working display and keyboard required. Charger included if possible.",
    ],
  },
  {
    rank: "02",
    name: "Workstation PCs",
    note: "Good for lab stations. Runs anything. Takes up more space.",
    items: [
      "Dell Precision, HP Z-series, Lenovo ThinkStation — 2014 or newer.",
      "8GB RAM minimum.",
      "Include power cable and keyboard if possible.",
    ],
  },
  {
    rank: "03",
    name: "Mini PCs",
    note: "Excellent for home server builds. Low power, small footprint.",
    items: [
      "Intel NUC, Beelink, HP EliteDesk Mini — 2016 or newer.",
      "4GB RAM minimum. 8GB preferred.",
      "Include power adapter if you have it.",
    ],
  },
  {
    rank: "04",
    name: "Old Gaming Desktops",
    note: "Powerful and often donated when someone upgrades. Any tower works.",
    items: [
      "Any mid-tower or full tower from 2014 or newer.",
      "8GB RAM minimum.",
      "Dedicated GPU not required — onboard graphics is fine.",
    ],
  },
  {
    rank: "05",
    name: "Tablets",
    note: "Limited use. Can't run full Linux, but useful for basic training.",
    items: [
      "Android tablets from 2018 or newer preferred.",
      "iPad accepted — limited Linux compatibility, still useful.",
      "Include charger and any accessories.",
    ],
  },
];

const accessories = [
  "USB drives (8GB or larger).",
  "USB-to-Ethernet adapters.",
  "Power bricks and cables for common laptop models.",
];

const btnPrimary = {
  display: "inline-block",
  fontFamily: "var(--tfm-sans)",
  fontSize: 13,
  fontWeight: 500,
  padding: "12px 22px",
  background: "var(--tfm-near-black)",
  color: "var(--tfm-parchment)",
  textDecoration: "none",
  borderRadius: 2,
  letterSpacing: "0.01em",
};

const btnGhost = {
  display: "inline-block",
  fontFamily: "var(--tfm-sans)",
  fontSize: 13,
  fontWeight: 500,
  padding: "12px 22px",
  background: "transparent",
  color: "var(--tfm-near-black)",
  textDecoration: "none",
  border: "1px solid var(--tfm-parchment-edge)",
  borderRadius: 2,
  letterSpacing: "0.01em",
};

const divider = {
  width: "100%",
  height: 1,
  background: "var(--tfm-parchment-edge)",
  margin: "72px 0",
};

export default function Donate() {
  return (
    <section id="donate" style={{ padding: "96px 36px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Hero */}
      <Eyebrow>Give</Eyebrow>
      <Rule style={{ margin: "14px 0 20px" }} />
      <Proclamation
        as="h1"
        size={48}
        strong="Help us reach"
        italic="the next city."
      />
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.7,
        color: "var(--tfm-warm-brown)", maxWidth: "62ch", marginTop: 20,
      }}>
        The best donation is a working laptop. It becomes the reason someone shows up.
        If you have hardware to give, that is where to start. If you want to give
        financially, that works too.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
        <a href="#hardware-donation" style={btnPrimary}>Donate hardware</a>
        <a href="#give-financially" style={btnGhost}>Give financially</a>
      </div>

      <div style={divider} />

      {/* Hardware Donation */}
      <div id="hardware-donation">
        <Eyebrow>Donate Hardware</Eyebrow>
        <Rule style={{ margin: "14px 0 20px" }} />
        <Proclamation
          as="h2"
          size={36}
          strong="A working laptop"
          italic="is the best thing you can give."
        />
        <p style={{
          fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.7,
          color: "var(--tfm-warm-brown)", maxWidth: "62ch", marginTop: 20,
        }}>
          Every Install Party needs machines for people who show up without one.
          A refurbished ThinkPad or Dell from 2015 or newer runs Linux well.
          Wipe it or don't — we handle that on event day.
        </p>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 36 }}>
          {hardwareTiers.map((tier) => (
            <div key={tier.rank}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 6 }}>
                <span style={{
                  fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 13,
                  color: "var(--tfm-deep-gold)", lineHeight: 1, minWidth: 20,
                }}>
                  {tier.rank}
                </span>
                <span style={{
                  fontFamily: "var(--tfm-sans)", fontSize: 15, fontWeight: 600,
                  color: "var(--tfm-near-black)", letterSpacing: "0.01em",
                }}>
                  {tier.name}
                </span>
              </div>
              <p style={{
                fontFamily: "var(--tfm-sans)", fontStyle: "italic", fontSize: 13,
                color: "var(--tfm-warm-brown)", margin: "0 0 12px", paddingLeft: 34,
              }}>
                {tier.note}
              </p>
              <ul style={{ listStyle: "none", padding: "0 0 0 34px", margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {tier.items.map((item, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, alignItems: "baseline" }}>
                    <Diamond size={8} style={{ paddingTop: 2 }} />
                    <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, color: "var(--tfm-near-black)", lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accessories */}
        <div style={{ marginTop: 36 }}>
          <div style={{
            fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
            textTransform: "uppercase", color: "var(--tfm-gold-muted)", marginBottom: 14,
          }}>
            Also needed
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {accessories.map((item, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "baseline" }}>
                <Diamond size={8} style={{ paddingTop: 2 }} />
                <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, color: "var(--tfm-near-black)", lineHeight: 1.55 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hardware contact */}
        <div style={{ marginTop: 40 }}>
          <div style={{
            fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
            textTransform: "uppercase", color: "var(--tfm-gold-muted)", marginBottom: 14,
          }}>
            How to give hardware
          </div>
          <p style={{
            fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.7,
            color: "var(--tfm-warm-brown)", maxWidth: "56ch", margin: 0,
          }}>
            Email us at{" "}
            <a
              href="mailto:techfreedomministries@proton.me"
              style={{ color: "var(--tfm-deep-gold)", textDecoration: "none", borderBottom: "1px solid rgba(139,105,20,.35)" }}
            >
              techfreedomministries@proton.me
            </a>
            . Tell us what you have and where you are. We will coordinate pickup
            or a ship-to address for the next event in your area.
          </p>
        </div>
      </div>

      <div style={divider} />

      {/* Give Financially */}
      <div id="give-financially">
        <Eyebrow>Give Financially</Eyebrow>
        <Rule style={{ margin: "14px 0 20px" }} />
        <Proclamation
          as="h2"
          size={36}
          strong="Can't give hardware?"
          italic="Cash buys the drives."
        />
        <p style={{
          fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.7,
          color: "var(--tfm-warm-brown)", maxWidth: "62ch", marginTop: 20,
        }}>
          Your donation funds the materials, the drives, and the next room full of
          people who don't know yet that this is possible.
        </p>
      </div>

      {/* Giving Tiers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }}>
        {tiers.map(tier => (
          <Card key={tier.amount} style={{ padding: "32px 28px" }}>
            <div style={{
              fontFamily: "var(--tfm-serif)", fontSize: 42, fontWeight: 700,
              color: "var(--tfm-near-black)", lineHeight: 1, marginBottom: 10,
            }}>
              {tier.amount}
            </div>
            <div style={{
              fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
              textTransform: "uppercase", color: "var(--tfm-gold-muted)", marginBottom: 18,
            }}>
              {tier.label}
            </div>
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 15, fontWeight: 500,
              color: "var(--tfm-near-black)", lineHeight: 1.4, margin: "0 0 10px",
            }}>
              {tier.impact}
            </p>
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 14,
              color: "var(--tfm-warm-brown)", lineHeight: 1.6, margin: 0,
            }}>
              {tier.detail}
            </p>
          </Card>
        ))}
      </div>

      {/* Placeholder donate button — swap for Stripe/PayPal link when EIN arrives */}
      <div style={{ marginTop: 48 }}>
        <div style={{
          display: "inline-block",
          background: "var(--tfm-parchment-card)",
          border: "1px solid var(--tfm-parchment-edge)",
          padding: "14px 28px",
          fontFamily: "var(--tfm-sans)",
          fontSize: 13,
          letterSpacing: "0.04em",
          color: "var(--tfm-gold-muted)",
        }}>
          Donation processing coming soon — 501(c)(3) filing in progress.
        </div>
      </div>

      {/* Disclosure */}
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 13, lineHeight: 1.7,
        color: "var(--tfm-warm-brown-soft)", maxWidth: "56ch", margin: "20px 0 0",
      }}>
        Tech Freedom Ministries is a 501(c)(3) nonprofit — filing in progress.
        Once approved, your donation will be tax-deductible. We don't sell data.
        We don't run ads. We teach people to protect themselves from the people who do.
      </p>

    </section>
  );
}
