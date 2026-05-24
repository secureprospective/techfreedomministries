import React, { useState } from 'react';
import { Eyebrow, Rule, Proclamation, Card, Diamond, Button } from './Atoms.jsx';

// Replace this with your Formspree form ID: https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzyorgw';

const inputStyle = {
  fontFamily: "var(--tfm-sans)",
  fontSize: 14,
  color: "var(--tfm-near-black)",
  background: "var(--tfm-parchment)",
  border: "1px solid var(--tfm-parchment-edge)",
  borderRadius: 0,
  padding: "10px 14px",
  width: "100%",
  outline: "none",
};

const labelStyle = {
  fontFamily: "var(--tfm-sans)",
  fontSize: 11,
  fontWeight: 400,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--tfm-gold-muted)",
  display: "block",
  marginBottom: 6,
};

const expected = [
  "Level 3: The Homestead. Complete.",
  "Minimum 2 events per year. Show up and teach.",
  "Complete the TFM Field Manual at your own pace.",
  "Be reachable between events for people in your city.",
];

const benefits = [
  "Your name on the Roadmap cards you hand out.",
  "A Vanguard credential card. Hard stock, gold accent.",
  "Early access to event intel and the Vanguard coordination channel.",
  "Hardware coordination support for the events you run. You do not source machines alone.",
  "First Vanguard in your city if no one else is there yet.",
];

export default function Vanguard() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [fields, setFields] = useState({ name: '', city: '', email: '', level: '' });

  function set(field) {
    return e => setFields(f => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  return (
    <section id="vanguard" style={{ padding: "96px 36px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Hero */}
      <Eyebrow>Vanguard</Eyebrow>
      <Rule style={{ margin: "14px 0 20px" }} />
      <Proclamation
        as="h1"
        size={48}
        strong="You already know how to fix this."
        italic="Most people don't."
      />
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.7,
        color: "var(--tfm-warm-brown)", maxWidth: "64ch", marginTop: 20,
      }}>
        A Vanguard is the person who has been where the new student is. And came back.
      </p>

      <div style={{ width: "100%", height: 1, background: "var(--tfm-parchment-edge)", margin: "60px 0" }} />

      {/* Expected / Benefits */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 60 }}>
        <Card hover={false} style={{ padding: "32px 36px" }}>
          <Eyebrow>What Is Expected</Eyebrow>
          <div style={{ height: 12 }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {expected.map((line, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "baseline" }}>
                <Diamond size={9} style={{ paddingTop: 2 }} />
                <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 15, color: "var(--tfm-near-black)", lineHeight: 1.55 }}>
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </Card>
        <Card hover={false} style={{ padding: "32px 36px" }}>
          <Eyebrow>What You Get</Eyebrow>
          <div style={{ height: 12 }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {benefits.map((line, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 12, alignItems: "baseline" }}>
                <Diamond size={9} style={{ paddingTop: 2 }} />
                <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 15, color: "var(--tfm-near-black)", lineHeight: 1.55 }}>
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Application Form */}
      <Eyebrow>Apply</Eyebrow>
      <Rule style={{ margin: "14px 0 20px" }} />
      <Proclamation
        as="h2"
        size={32}
        className="tfm-ledger-rule"
        strong="Ready to come back"
        italic="and help someone start?"
      />

      {submitted ? (
        <div style={{
          marginTop: 32,
          padding: "32px 36px",
          background: "var(--tfm-parchment-card)",
          border: "1px solid var(--tfm-gold-bright)",
        }}>
          <Proclamation as="h3" size={26} strong="Application received." italic="We'll be in touch." />
          <p style={{
            fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.65,
            color: "var(--tfm-warm-brown)", marginTop: 14,
          }}>
            Christopher will review your application and reach out by email. Thank you.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 20, maxWidth: 560 }}
        >
          <div>
            <label style={labelStyle}>Name</label>
            <input
              name="name"
              type="text"
              required
              value={fields.name}
              onChange={set('name')}
              style={inputStyle}
              placeholder="Your name"
            />
          </div>
          <div>
            <label style={labelStyle}>City</label>
            <input
              name="city"
              type="text"
              required
              value={fields.city}
              onChange={set('city')}
              style={inputStyle}
              placeholder="Where you're based"
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              name="email"
              type="email"
              required
              value={fields.email}
              onChange={set('email')}
              style={inputStyle}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label style={labelStyle}>Linux experience level</label>
            <select
              name="level"
              required
              value={fields.level}
              onChange={set('level')}
              style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
            >
              <option value="">Select one</option>
              <option value="new">New to Linux. Just getting started.</option>
              <option value="home">Used it at home for a while</option>
              <option value="daily">Daily driver for over a year</option>
              <option value="pro">I run servers or contribute to FOSS projects</option>
            </select>
          </div>
          <div>
            <Button type="submit">Apply to be a Vanguard</Button>
          </div>
          {error && (
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 13,
              color: "var(--tfm-warm-brown-soft)", margin: 0,
            }}>
              Something went wrong. Try again or email us directly.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
