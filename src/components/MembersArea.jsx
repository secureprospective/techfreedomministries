import React from 'react';
import { LEVELS, LevelBadge, Card, Button, Diamond, ExpandableCard } from './Atoms.jsx';

/* ─────────────────────────────────────────────────────────────────────────────
   MEMBERS AREA — three presentational building blocks for the member dashboard.

   Pure components: `member` is a prop the page passes in. No data fetching,
   no auth, no routing. House style mirrors Atoms.jsx — inline styles plus the
   existing global classes (.tfm-gilt-edge, .tfm-ink-link, the vault stamp
   corners). No new CSS files, no box-shadow, no gradients outside the gilt
   system, 0px card radius / 2px buttons / 999px pills.

   member shape: { name: string, level: 1|2|3|4, vanguard: boolean }
   ───────────────────────────────────────────────────────────────────────────── */

/* Buzz has no web client — it's a desktop app that connects to the relay
   address below. The Community card's expanded state walks the same three
   steps as the standalone instructions page (src/pages/members/community.astro,
   kept as a shareable/email-friendly copy); the raw relay URL only ever
   answers with NIP-11 relay-info JSON when opened in a browser. */
const COMMUNITY_INSTRUCTIONS_URL = "/members/community";
const BUZZ_RELAY_URL = "wss://tfm.communities.buzz.xyz";
const BUZZ_APP_DOWNLOAD_URL = "https://github.com/block/buzz/releases/download/desktop-v0.5.5/Buzz_0.5.5_amd64.AppImage";

/* Current-level detail copy. L1/L2/L4 are the goals from TFM_03 (kept to
   agency, never leaving the reader in dread). L3 is the peer-recognized case
   from TFM_15 — no checklist, no percentage. */
const CURRENT_DETAIL = {
  1: "You establish your own dwelling — a machine that is yours.",
  2: "You learn the language of the machine — the terminal.",
  3: "In progress — recognized by your community.",
  4: "You become the reason someone else gets out.",
};

/* ── Component 1: PersonalRoadmap ─────────────────────────────────────────────
   The four levels as a compact vertical list. Current level is highlighted and
   expanded with a short detail line; levels above are dimmed and marked
   not-yet; levels below are completed. Names and order are LOCKED (TFM_03). */
export function PersonalRoadmap({ member }) {
  const { name, level } = member;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Personal header */}
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            fontFamily: "var(--tfm-serif)",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--tfm-near-black)",
            lineHeight: 1.2,
          }}
        >
          {name}&rsquo;s Roadmap
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 6,
          }}
        >
          <Diamond size={7} />
          <span
            style={{
              fontFamily: "var(--tfm-sans)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--tfm-gold-muted-on-light)",
            }}
          >
            The path from event to movement
          </span>
        </div>
      </div>

      {/* Level list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {LEVELS.map((L) => {
          const isPast = L.n < level;
          const isCurrent = L.n === level;
          const isAhead = L.n > level;

          if (isCurrent) {
            return (
              <div
                key={L.n}
                className="tfm-gilt-edge"
                style={{
                  background: "var(--tfm-parchment-card)",
                  border: "1px solid var(--tfm-gold-deep)",
                  padding: "18px 20px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <LevelBadge level={L.n} />
                  <span
                    style={{
                      fontFamily: "var(--tfm-serif)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--tfm-near-black)",
                      lineHeight: 1.2,
                    }}
                  >
                    {L.name}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--tfm-sans)",
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "var(--tfm-warm-brown)",
                    marginTop: 12,
                  }}
                >
                  {CURRENT_DETAIL[L.n]}
                </div>
              </div>
            );
          }

          return (
            <div
              key={L.n}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
                padding: "8px 6px",
                opacity: isAhead ? 0.5 : 1,
                borderBottom: "1px solid var(--tfm-parchment-edge)",
              }}
            >
              <LevelBadge level={L.n} />
              <span
                style={{
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: isAhead ? "var(--tfm-warm-brown-soft)" : "var(--tfm-near-black)",
                }}
              >
                {L.name}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--tfm-sans)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isAhead ? "var(--tfm-warm-brown-soft)" : "var(--tfm-gold-deep)",
                }}
              >
                {isAhead ? "Not yet" : "Completed"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Component 2: CommunityCard ───────────────────────────────────────────────
   Unlocked at Level 2+. When locked (Level 1) it stays visible and named — a
   dimmed surface stating plainly what opens it. No progress bar, no guilt.
   The headline and body line are LOCKED from TFM_15. */
export function CommunityCard({ member }) {
  const unlocked = member.level >= 2;

  if (!unlocked) {
    return (
      <Card hover={false} style={{ padding: "28px 24px", opacity: 0.72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Diamond size={9} color="var(--tfm-warm-brown-soft)" />
          <span
            style={{
              fontFamily: "var(--tfm-serif)",
              fontWeight: 700,
              fontSize: 20,
              color: "var(--tfm-near-black)",
              lineHeight: 1.2,
            }}
          >
            The Community
          </span>
        </div>
        <div
          style={{
            fontFamily: "var(--tfm-sans)",
            fontSize: 14,
            lineHeight: 1.55,
            color: "var(--tfm-warm-brown-soft)",
            marginTop: 14,
          }}
        >
          Unlocks at The Catechism (Level 2).
        </div>
        <div style={{ marginTop: 10 }}>
          <a href="/roadmap" className="tfm-ink-link" style={{ color: "var(--tfm-gold-deep)", fontSize: 13 }}>
            See what The Catechism asks of you →
          </a>
        </div>
      </Card>
    );
  }

  return (
    <ExpandableCard
      stamp
      title="The Community"
      openLabel="See how to join →"
      closeLabel="Collapse ↑"
      teaser={
        <span style={{ fontFamily: "var(--tfm-serif)", fontStyle: "italic", fontSize: 17, lineHeight: 1.5, color: "var(--tfm-warm-brown)", maxWidth: "36ch", display: "block" }}>
          You don&rsquo;t just belong to this community now. This community belongs to you.
        </span>
      }
    >
      <p
        style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 14,
          lineHeight: 1.6,
          color: "var(--tfm-warm-brown)",
          margin: "0 0 18px",
        }}
      >
        The community runs on <strong style={{ color: "var(--tfm-near-black)" }}>Buzz</strong>, a
        small, open-source app &mdash; not another website. Three steps in:
      </p>

      <ol style={{ listStyle: "none", margin: "0 0 18px", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        <li style={{ display: "flex", gap: 12 }}>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tfm-gold-deep)", flexShrink: 0, paddingTop: 2 }}>01</span>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--tfm-warm-brown)" }}>
            <a href={BUZZ_APP_DOWNLOAD_URL} className="tfm-ink-link" style={{ color: "var(--tfm-gold-deep)", fontWeight: 600 }}>Download Buzz</a> &mdash; free, open source, Linux only for now.
          </span>
        </li>
        <li style={{ display: "flex", gap: 12 }}>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tfm-gold-deep)", flexShrink: 0, paddingTop: 2 }}>02</span>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--tfm-warm-brown)" }}>
            Point it at our room:{" "}
            <code style={{ fontFamily: "monospace", fontSize: 13, background: "var(--tfm-parchment)", border: "1px solid var(--tfm-parchment-edge)", padding: "2px 6px" }}>{BUZZ_RELAY_URL}</code>
          </span>
        </li>
        <li style={{ display: "flex", gap: 12 }}>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 11, letterSpacing: "0.14em", color: "var(--tfm-gold-deep)", flexShrink: 0, paddingTop: 2 }}>03</span>
          <span style={{ fontFamily: "var(--tfm-sans)", fontSize: 14, lineHeight: 1.55, color: "var(--tfm-warm-brown)" }}>
            Buzz makes you a key on first connect &mdash; that&rsquo;s your identity, no password. You&rsquo;re in.
          </span>
        </li>
      </ol>

      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <Button onClick={() => { window.open(BUZZ_APP_DOWNLOAD_URL, "_blank", "noopener"); }}>
          Download Buzz
        </Button>
        <a href={COMMUNITY_INSTRUCTIONS_URL} className="tfm-ink-link" style={{ color: "var(--tfm-gold-deep)", fontSize: 13 }}>
          Full instructions →
        </a>
      </div>
    </ExpandableCard>
  );
}

/* ── Component 3: VanguardTeaser ───────────────────────────────────────────────
   Renders only at Level 3+. A small card that points at /vault — the existing
   (already built) Vanguard back-office page — without duplicating its content.
   Tone matches vault.astro: honest that the room is being built, and that being
   here early means you are exactly who it is being built for. */
export function VanguardTeaser({ member }) {
  if (member.level < 3) return null;

  return (
    <Card hover style={{ padding: "28px 26px", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <LevelBadge vanguard />
        <span
          style={{
            fontFamily: "var(--tfm-serif)",
            fontWeight: 700,
            fontSize: 20,
            color: "var(--tfm-near-black)",
            lineHeight: 1.2,
          }}
        >
          The Vanguard Track
        </span>
      </div>

      <div
        style={{
          fontFamily: "var(--tfm-serif)",
          fontSize: 17,
          fontStyle: "italic",
          lineHeight: 1.5,
          color: "var(--tfm-warm-brown)",
          marginTop: 14,
          maxWidth: "42ch",
        }}
      >
        You already know how to fix this stuff. Most people don&rsquo;t.
      </div>

      <p
        style={{
          fontFamily: "var(--tfm-sans)",
          fontSize: 14,
          lineHeight: 1.55,
          color: "var(--tfm-warm-brown-soft)",
          margin: "14px 0 0",
        }}
      >
        The Vault — the back office for those who completed the Roadmap — is being
        built. If you are here early, you are exactly who it is being built for.
      </p>

      <div style={{ marginTop: 18 }}>
        <a href="/vault" className="tfm-ink-link" style={{ color: "var(--tfm-gold-deep)" }}>
          Enter the Vault →
        </a>
      </div>
    </Card>
  );
}
