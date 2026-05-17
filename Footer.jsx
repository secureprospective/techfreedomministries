/* Footer — caps nav, Galatians, logo. */

function Footer({ setRoute }) {
  const links = [
    ["Events", "events"], ["Roadmap", "roadmap"], ["The Oath", "oath"], ["About", "about"],
  ];
  return (
    <footer style={{
      borderTop: "1px solid var(--tfm-parchment-edge)",
      background: "var(--tfm-parchment)",
      padding: "56px 36px 40px",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 48, alignItems: "start",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <img src="/assets/tfm-logo-nearblack.png" alt="" style={{ width: 80, height: "auto" }} />
          <Eyebrow>Tech Freedom Ministries</Eyebrow>
          <p style={{
            fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 14,
            color: "var(--tfm-warm-brown)", lineHeight: 1.55, margin: 0, maxWidth: "32ch",
          }}>
            For freedom Christ has set us free.
            <br />— Galatians 5:1
          </p>
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          {links.map(([label, id], i) => (
            <React.Fragment key={id}>
              {i > 0 && <Diamond size={8} />}
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); setRoute(id); window.scrollTo({ top: 0 }); }}
                style={{
                  fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.20em",
                  textTransform: "uppercase", color: "var(--tfm-muted-gold)",
                  textDecoration: "none", borderBottom: 0,
                }}
              >
                {label}
              </a>
            </React.Fragment>
          ))}
        </nav>

        <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 6 }}>
          <Eyebrow>Layer 2 — Public</Eyebrow>
          <span style={{ fontFamily: "var(--tfm-mono)", fontSize: 11, color: "var(--tfm-warm-brown-soft)" }}>
            v2026.05 · MMXXVI
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
