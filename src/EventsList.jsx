/* Events list + city filter chips. */

const EVENTS = [
  { id: 1, month: "TBD", day: "tbd", dow: "Saturday", time: "1pm",
    level: 1, city: "St. Louis, MO",
    venue: "Tower Grove Library", duration: "3 hours",
    titleStrong: "An Exodus Night.", titleItalic: "Install Linux." },
  { id: 2, month: "TBD", day: "tbd", dow: "Sunday", time: "10am",
    level: 2, city: "Springfield, IL",
    venue: "First Presbyterian Hall", duration: "4 hours",
    titleStrong: "The Catechism, Part I.", titleItalic: "Why we left." },
  { id: 3, month: "TBD", day: "tbd", dow: "Saturday", time: "1pm",
    level: 3, city: "Bloomington, IN",
    venue: "Monroe County Makerspace", duration: "5 hours",
    titleStrong: "Homestead Lab.", titleItalic: "Self-host your photos." },
  { id: 4, month: "July", day: 19, dow: "Saturday", time: "9am",
    level: 4, city: "St. Louis, MO",
    venue: "Tower Grove Library", duration: "Full day",
    titleStrong: "Vanguard Workshop.", titleItalic: "Run your own Exodus." },
  { id: 5, month: "Aug", day: 2, dow: "Saturday", time: "1pm",
    level: 1, city: "Columbia, MO",
    venue: "Daniel Boone Regional", duration: "3 hours",
    titleStrong: "An Exodus Night.", titleItalic: "Install Linux." },
];

function EventsList({ onRsvp }) {
  const [filter, setFilter] = useState("all");
  const cities = ["all", ...new Set(EVENTS.map(e => e.city))];
  const shown = filter === "all" ? EVENTS : EVENTS.filter(e => e.city === filter);

  return (
    <section style={{ padding: "64px 36px 96px", maxWidth: 1100, margin: "0 auto" }}>
      <Eyebrow>Upcoming Events</Eyebrow>
      <Rule style={{ margin: "14px 0 20px" }} />
      <Proclamation as="h2" size={42}
        strong="Every event is free."
        italic="Every event is real."
      />
      <p style={{
        fontFamily: "var(--tfm-sans)", fontSize: 15, lineHeight: 1.65,
        color: "var(--tfm-warm-brown)", maxWidth: "60ch", marginTop: 18,
      }}>
        Three hours, in a real room, with a real person who has done this before. Bring a laptop and a USB stick. We supply the rest.
      </p>

      {/* Filter chips */}
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

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {shown.map(ev => <EventCard key={ev.id} event={ev} onRsvp={onRsvp} />)}
      </div>
    </section>
  );
}

window.EventsList = EventsList;
window.EVENTS = EVENTS;
