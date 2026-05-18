/* Hero — Proclamation block. Layer 2 (secular) tone. */

function Hero({ onFindEvent, onReadOath }) {
  return (
    <section style={{
      padding: "96px 36px 64px",
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center",
    }}>
      <div>
        <Eyebrow>A Faith-Backed Nonprofit · Free Linux Events</Eyebrow>
        <Rule style={{ margin: "16px 0 24px" }} />
        <Proclamation
          as="h1"
          size={56}
          strong="Break from the Digital Grid."
          italic="Own Your Machine."
        />
        <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
          <Diamond />
        </div>
        <p style={{
          fontFamily: "var(--tfm-sans)", fontSize: 16, lineHeight: 1.65,
          color: "var(--tfm-warm-brown)", maxWidth: "52ch", margin: 0,
        }}>
          Your phone reports on you to people you've never met. We run a free
          three-hour event that ends with a working laptop you actually own —
          no fee, no upsell, no follow-up emails. Bring a ten-year-old ThinkPad
          if you have one.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
          <Button onClick={onFindEvent}>
            Find an event near you <Icon name="arrow" size={14} />
          </Button>
          <GhostButton onClick={onReadOath}>Read the Oath</GhostButton>
        </div>
      </div>

      {/* Right column: a "credential-style" pull-out featuring the logo and Galatians */}
      <Brackets style={{
        background: "var(--tfm-parchment-2)",
        padding: 44,
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
          <img
            src="../../assets/tfm-logo-nearblack.png"
            alt="TFM"
            style={{ width: 200, height: "auto" }}
          />
          <Rule width={40} />
          <p style={{
            fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 17,
            color: "var(--tfm-warm-brown)", lineHeight: 1.55, margin: 0, maxWidth: "32ch",
          }}>
            "For freedom Christ has set us free; stand firm, therefore, and do not submit again to a yoke of slavery."
          </p>
          <Eyebrow color="var(--tfm-deep-gold)">Galatians 5:1</Eyebrow>
        </div>
      </Brackets>
    </section>
  );
}

window.Hero = Hero;
