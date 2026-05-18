import React from 'react';
import { Eyebrow, Rule, Proclamation, Card } from './Atoms.jsx';

const tiers = [
  {
    amount: "$25",
    label: "Equip",
    impact: "Puts a USB drive in someone's hand.",
    detail: "Every install starts with a bootable drive. This is the first step.",
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
        Every event we run is free. Every tool we teach is free. If that's worth
        something to you — help us reach the next city.
      </p>

      {/* Giving Tiers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 56 }}>
        {tiers.map(tier => (
          <Card key={tier.amount} style={{ padding: "32px 28px" }}>
            <div style={{
              fontFamily: "var(--tfm-serif)",
              fontSize: 42,
              fontWeight: 700,
              color: "var(--tfm-near-black)",
              lineHeight: 1,
              marginBottom: 10,
            }}>
              {tier.amount}
            </div>
            <div style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 11,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "var(--tfm-gold-muted)",
              marginBottom: 18,
            }}>
              {tier.label}
            </div>
            <p style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 15,
              fontWeight: 500,
              color: "var(--tfm-near-black)",
              lineHeight: 1.4,
              margin: "0 0 10px",
            }}>
              {tier.impact}
            </p>
            <p style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 14,
              color: "var(--tfm-warm-brown)",
              lineHeight: 1.6,
              margin: 0,
            }}>
              {tier.detail}
            </p>
          </Card>
        ))}
      </div>

      {/* Placeholder donate button — swap action for Stripe/PayPal link when EIN arrives */}
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
        fontFamily: "var(--tfm-sans)",
        fontSize: 13,
        lineHeight: 1.7,
        color: "var(--tfm-warm-brown-soft)",
        maxWidth: "56ch",
        marginTop: 20,
        margin: "20px 0 0",
      }}>
        Tech Freedom Ministries is a 501(c)(3) nonprofit — filing in progress.
        Once approved, your donation will be tax-deductible. We don't sell data.
        We don't run ads. We teach people to protect themselves from the people who do.
      </p>
    </section>
  );
}
