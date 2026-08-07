import React, { useState } from 'react';
import { Eyebrow, Rule, Proclamation } from './Atoms.jsx';
import EventCard from './EventCard.jsx';
import RsvpModal from './RsvpModal.jsx';

// TODO: Replace placeholder fields with real Install Party details before launch.
// Each field that needs a real value is marked with TODO.
export const EVENTS = [
  {
    id: 1,
    month: "TBD",       // TODO: e.g. "June"
    day: "TBD",         // TODO: e.g. 14
    dow: "Saturday",    // TODO: day of week
    time: "1pm",        // TODO: start time
    level: 1,
    city: "TBD",        // TODO: e.g. "St. Louis, MO"
    venue: "TBD",       // TODO: venue name
    duration: "3 hours",// TODO: duration
    titleStrong: "An Exodus Night.",
    titleItalic: "Install Linux.",
  },
];

/* preview=true shows first 3 events without filter chips or section header */
export default function EventsList({ preview }) {
  const [filter, setFilter] = useState("all");
  const [rsvpFor, setRsvpFor] = useState(null);

  // Only include cities with real data — exclude placeholder "TBD" values.
  // Filter chips are suppressed entirely when no real city data exists.
  const realCities = [...new Set(EVENTS.map(e => e.city).filter(c => c && c !== "TBD"))];
  const cities = ["all", ...realCities];
  const shown = preview
    ? EVENTS.slice(0, 3)
    : (filter === "all" ? EVENTS : EVENTS.filter(e => e.city === filter));
  const allPlaceholder = shown.length > 0 && shown.every(e => e.city === "TBD");

  return (
    <>
      <section style={{ padding: preview ? "0" : "64px 36px 96px", maxWidth: 1100, margin: "0 auto" }}>
        {!preview && (
          <>
            <Eyebrow>Upcoming Events</Eyebrow>
            <Rule style={{ margin: "14px 0 20px" }} />
            <Proclamation as="h2" size={42}
              className="tfm-ledger-rule"
              strong="Every event is free."
              italic="Every event is real."
            />
            <p style={{
              fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.65,
              color: "var(--tfm-warm-brown)", maxWidth: "60ch", marginTop: 18,
            }}>
              Three hours, in a real room, with a real person who has done this before. Bring a laptop and a USB stick. We supply the rest.
            </p>

            {/* Filter chips — only rendered when real city data exists */}
            {realCities.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "32px 0 24px" }}>
                {cities.map(c => (
                  <button key={c}
                    onClick={() => setFilter(c)}
                    style={{
                      fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
                      textTransform: "uppercase", padding: "8px 14px", borderRadius: 2,
                      border: `1px solid ${filter === c ? "var(--tfm-near-black)" : "var(--tfm-parchment-edge)"}`,
                      background: filter === c ? "var(--tfm-near-black)" : "transparent",
                      color: filter === c ? "var(--tfm-parchment)" : "var(--tfm-warm-brown)",
                      cursor: "pointer",
                      transition: "all 220ms cubic-bezier(.2,0,.2,1)",
                    }}
                  >
                    {c === "all" ? "All cities" : c}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {allPlaceholder && !preview && (
          <p style={{
            fontFamily: "var(--tfm-serif)",
            fontSize: 14,
            fontStyle: "italic",
            color: "var(--tfm-warm-brown-soft)",
            margin: "0 0 20px",
          }}>
            No dates are set yet — the first Install Party is being planned. Check back soon.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {shown.map(ev => <EventCard key={ev.id} event={ev} onRsvp={setRsvpFor} />)}
        </div>
      </section>

      {rsvpFor && <RsvpModal event={rsvpFor} onClose={() => setRsvpFor(null)} />}
    </>
  );
}
