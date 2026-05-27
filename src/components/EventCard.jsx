import React from 'react';
import { Eyebrow, Proclamation, LevelBadge, Icon, Diamond, Button, Card } from './Atoms.jsx';

// ── Component ─────────────────────────────────────────────────────────────────
//
// Desktop layout: three-column grid — 104px date stamp | 1fr meta | auto button.
// Mobile overrides live in src/styles/responsive.css.
// Class name hooks: tfm-ec-grid, tfm-ec-date, tfm-ec-day, tfm-ec-action.

export default function EventCard({ event, onRsvp }) {
  return (
    <Card style={{ padding: "22px 26px", position: "relative" }}>
        <span className="tfm-stamp-tl" aria-hidden="true" />
        <span className="tfm-stamp-tr" aria-hidden="true" />
        <span className="tfm-stamp-bl" aria-hidden="true" />
        <span className="tfm-stamp-br" aria-hidden="true" />
        <div
          className="tfm-ec-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "104px 1fr auto",
            gap: 26,
            alignItems: "center",
          }}
        >

          {/* Date stamp */}
          <div
            className="tfm-ec-date"
            style={{ borderRight: "1px solid var(--tfm-parchment-edge)", paddingRight: 22 }}
          >
            <Eyebrow>{event.month}</Eyebrow>
            <div
              className="tfm-ec-day"
              style={{
                fontFamily: "var(--tfm-serif)",
                fontWeight: 700,
                fontSize: 44,
                color: "var(--tfm-near-black)",
                lineHeight: 1,
                marginTop: 6,
              }}
            >
              {event.day}
            </div>
            <div style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 12,
              color: "var(--tfm-warm-brown-soft)",
              marginTop: 6,
              letterSpacing: "0.04em",
            }}>
              {event.dow} · {event.time}
            </div>
          </div>

          {/* Meta */}
          <div className="tfm-ec-meta" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <LevelBadge level={event.level} />
              <Eyebrow>{event.city}</Eyebrow>
            </div>
            <Proclamation
              as="h3"
              size={22}
              strong={event.titleStrong}
              italic={event.titleItalic}
            />
            <div style={{
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
              fontFamily: "var(--tfm-sans)",
              fontSize: 13,
              color: "var(--tfm-warm-brown)",
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="pin" size={13} color="var(--tfm-warm-brown-soft)" />
                {event.venue}
              </span>
              <Diamond size={7} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Icon name="clock" size={13} color="var(--tfm-warm-brown-soft)" />
                {event.duration}
              </span>
              <Diamond size={7} />
              <span style={{ color: "var(--tfm-gold-deep)", fontWeight: 500 }}>Free</span>
            </div>
          </div>

          {/* Action */}
          <div className="tfm-ec-action">
            <Button onClick={() => onRsvp && onRsvp(event)}>RSVP</Button>
          </div>

        </div>
      </Card>
  );
}
