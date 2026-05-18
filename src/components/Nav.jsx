/* Top navigation — logo + caps nav (◆ separators) + primary CTA. */

function Nav({ route, setRoute }) {
  const links = [
    { id: "events",  label: "Events" },
    { id: "roadmap", label: "Roadmap" },
    { id: "oath",    label: "The Oath" },
    { id: "about",   label: "About" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "rgba(244, 240, 230, 0.98)",
      borderBottom: "1px solid var(--tfm-parchment-edge)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "18px 36px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        {/* Wordmark */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); setRoute("home"); }}
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", borderBottom: 0 }}
        >
          <img
            src="../../assets/tfm-logo-on-parchment.png"
            alt=""
            style={{ width: 40, height: 22, objectFit: "contain" }}
          />
          <span style={{
            fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--tfm-near-black)", fontWeight: 500,
          }}>
            Tech Freedom Ministries
          </span>
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {links.map((l, i) => (
            <React.Fragment key={l.id}>
              {i > 0 && <Diamond size={8} />}
              <a
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); setRoute(l.id); }}
                style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 11,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: route === l.id ? "var(--tfm-near-black)" : "var(--tfm-muted-gold)",
                  textDecoration: "none",
                  borderBottom: 0,
                  fontWeight: route === l.id ? 500 : 400,
                  transition: "color 220ms cubic-bezier(.2,0,.2,1)",
                }}
              >
                {l.label}
              </a>
            </React.Fragment>
          ))}
        </nav>

        <Button onClick={() => setRoute("events")} style={{ padding: "10px 18px", fontSize: 12 }}>
          Find an event
        </Button>
      </div>
    </header>
  );
}

window.Nav = Nav;
