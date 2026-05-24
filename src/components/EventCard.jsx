import React from 'react';
import { Eyebrow, Proclamation, LevelBadge, Icon, Diamond, Button, Card } from './Atoms.jsx';

// ── Mobile styles ─────────────────────────────────────────────────────────────
//
// The desktop card uses a three-column grid: 104px date stamp | 1fr meta | auto button.
// On mobile this collapses to a single column: date stamp row on top, meta block
// below, RSVP button full width at the bottom.
// classNames used as hooks: tfm-ec-grid, tfm-ec-date, tfm-ec-meta, tfm-ec-action.

const MOBILE_STYLES = `
  @media (max-width: 768px) {

    /* Collapse three-column grid to single column */
    .tfm-ec-grid {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }

    /* Date stamp: remove right border, go horizontal —
       month / day / weekday+time in a single compact row */
    .tfm-ec-date {
      border-right: none !important;
      border-bottom: 1px solid var(--tfm-parchment-edge);
      padding-right: 0 !important;
      padding-bottom: 16px !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: baseline !important;
      gap: 10px !important;
    }

    /* Day number: smaller on mobile */
    .tfm-ec-day {
      font-size: 32px !important;
    }

    /* Action column: full-width button */
    .tfm-ec-action button,
    .tfm-ec-action a {
      width: 100%;
      justify-content: center;
    }
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function EventCard({ event, onRsvp }) {
  return (
    <>
      <style>{MOBILE_STYLES}</style>

      <Card style={{ padding: "22px 26px" }}>
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
              <span style={{ color: "var(--tfm-deep-gold)", fontWeight: 500 }}>Free</span>
            </div>
          </div>

          {/* Action */}
          <div className="tfm-ec-action">
            <Button onClick={() => onRsvp(event)}>RSVP</Button>
          </div>

        </div>
      </Card>
    </>
  );
}
