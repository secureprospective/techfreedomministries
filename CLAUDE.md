# Tech Freedom Ministries — Claude Code Ground Truth
*Read this entire file before doing anything. If this file conflicts
with anything said in the session, this file wins.*

---

## What This Project Is

Tech Freedom Ministries (TFM) is a faith-backed digital freedom nonprofit.
Mission: Teach people to escape Big Tech surveillance through free community
events, hands-on Linux training, and a repeating growth model that turns
today's student into tomorrow's teacher.

Mission Statement (full):
People cannot escape Big Tech surveillance without hands-on training and
independent hardware. With faith as our backbone and an open door for everyone,
Tech Freedom Ministries runs free Install Parties where people walk out owning
a laptop that is actually theirs — at zero cost. Every student follows a
four-level Roadmap; the ones who go all the way become Vanguards — teachers
who take the mission to their own city and run their own events. We give freedom
with a fishing pole because Christ has set us free; what Big Tech calls
end-of-life, we call a first computer.

Scriptural anchor: Galatians 5:1
Tagline: "Giving freedom with a fishing pole."
Domain: techfreedomministries.org (live — Cloudflare Pages, auto-deploy from main)
Redirect: techfreedomministries.com → techfreedomministries.org (301, all variants)
Repo: github.com/secureprospective/techfreedomministries
Local path: /mnt/storage/claudebox/projects/techfreedomministries/
Build command: `npm run build`

---

## Current Build State

- Last clean build: 9 pages, 2026-08-06
- Live: techfreedomministries.org (Cloudflare Pages, auto-deploy from main)
- Phases 1–12 complete. Last closed: copy and UX polish, May 27 2026.
- Brevo live; RsvpModal → Formspree mvzyorgw; Cinzel self-hosted; Google Fonts CDN removed

**Pending manual action:** Brevo env vars must be set in Cloudflare Pages before BrevoSignup works in production: `PUBLIC_BREVO_API_KEY` + `PUBLIC_BREVO_LIST_ID=3`

**2026-08-06 session — Impeccable installed, first critique run and fixed, merged to `main` (`966ccb1`) and pushed.** Full detail in memory `project_tfm`; summary:
- `PRODUCT.md` and `DESIGN.md` written for the first time (North Star "The Gilded Spine"), from the real live tokens/CSS plus a confirmed **Sanctuary Voice** brand commitment: name the real encroachment plainly, then resolve every passage to agency/ownership/community — never leave the reader in the threat. See PRODUCT.md's Brand Commitments for the full reasoning.
- First `/impeccable critique` on the homepage: 25/32 (Good), dual-agent, source-level (no browser automation configured for this project — snapshot at `.impeccable/critique/2026-08-06T13-58-29Z__src-pages-index-astro.md`).
- Fixed same session: P0 Roadmap level-card keyboard/screen-reader accessibility (real button semantics, `aria-expanded`, focus-visible, `aria-hidden` on decorative ◆ glyphs sitewide); P1 Hero stakes-clause scope gap (phone/car surveillance named but unresolved); P2 collapsed Roadmap cards reordered to lead with plain language over mythology vocabulary; P2 expanded detail panels got a top-of-panel Collapse control. Also corrected a real DESIGN.md-vs-CLAUDE.md button-radius conflict in favor of the live code (2px on buttons, confirmed in `Atoms.jsx`'s `btnBase`) and documented the left-border narrative callouts as a named component ("Marginalia Callout").

**⚠️ Open, needs a decision next session:** `--tfm-gold-muted` (#8B7355) fails WCAG AA contrast (4.5:1) against every background it's used on — 4.11:1 near-black, 3.94:1 parchment, 3.60:1 parchment-card, hand-calculated and verified. It's the site's standing eyebrow-label color (25+ uses in `Roadmap.jsx` alone, plus the global `.eyebrow` class in `tokens.css`) — a token-level decision, not fixed unilaterally. Options: redefine the token itself, or add a separate AA-safe color for small text specifically.

**⚠️ Functional/visual gate not yet performed:** the push to `main` was made and Cloudflare auto-deploy triggered, but Christopher has not yet confirmed the live result in-browser — session closed before that check per his explicit direction ("push to live, session-close after that... pick this up tonight"). Confirm live at techfreedomministries.org before treating this round of fixes as fully done.

**Next branch:** `session/event-data` — once Install Party date/venue/city confirmed. Pick up the gold-muted contrast decision and the live-site confirmation first when the session resumes.

---

## Social Media (started 2026-06-20)

New workstream: TFM channels on **YouTube, LinkedIn, X**. Assets + finalized copy live in
`social/` (see `social/README.md` for the tree and `social/COPY.md` for all copy). Imagery
is generated in **Gemini** (Christopher's account, limited tokens), then finished here on
CT105 with Python/Pillow. The TFM logo IS the cross-on-circuit-mound motif (no separate
wordmark glyph in the logo files).

**Shipped (ready to upload):**
- YouTube banner — `social/youtube/youtube-banner-2048x1152.png`
- Profile avatar (LinkedIn + X) — `social/shared/avatar-800x800.png`
- X header — `social/x/x-header-1500x500.png`
- All copy (YT description, LinkedIn overview+specialties, X bio/handle/pinned post) — `social/COPY.md`

**Pending:** LinkedIn company cover (1128×191); first-week post drafts; confirm @handle
availability on X; X Professional/Non-Profit account (gated until account ages + profile complete).

**Git:** finals + `README.md`/`COPY.md` are tracked; raw gens `social/_source/` are gitignored
(kept on disk). Committed on branch `session/social-launch-assets` (d4c1be5) — **not yet merged
to main**. Merging + pushing main triggers a Cloudflare rebuild (harmless: `social/` is outside the Astro build).

**Location note (2026-06-20):** project relocated from top-level to
`/mnt/storage/claudebox/projects/techfreedomministries/` to match the projects/ convention.
Build re-verified clean (9 pages) after the move.

---

## Repo Structure

techfreedomministries/
├── public/
│   ├── assets/          — logo files served at /assets/ (canonical location)
│   ├── fonts/           — self-hosted EB Garamond (4 variants) + Cinzel
│   └── _headers         — Cloudflare headers config (canonical location)
├── src/
│   ├── components/
│   │   ├── Atoms.jsx    — primitives: Eyebrow, Rule, Diamond, Proclamation, Button,
│   │   │                  GhostButton, LinkButton, LevelBadge, Brackets, Icon,
│   │   │                  Card, GiltCard, SectionEyebrow
│   │   ├── BrevoSignup.jsx  — email capture, footer on every page, Brevo list 3
│   │   ├── RsvpModal.jsx    — RSVP form, Formspree endpoint mvzyorgw
│   │   ├── Donate.jsx       — TODO: STRIPE + TODO: 501C3 markers
│   │   ├── EventsList.jsx   — Install Party placeholder (real data TBD)
│   │   └── About.jsx, EventCard.jsx, Hero.jsx, Oath.jsx, Roadmap.jsx, Vanguard.jsx
│   ├── layouts/Layout.astro — nav + footer + all CSS imports + mobile breakpoint block
│   ├── pages/           — index, events, roadmap, oath, about, vanguard, donate
│   └── styles/
│       ├── tokens.css       — CSS custom properties (single source of truth)
│       ├── fonts.css        — @font-face rules (no CDN)
│       ├── accents.css      — Gilded Spine accent system
│       └── responsive.css   — all mobile breakpoints (never injected in components)
│           EventCard hooks: tfm-ec-grid, tfm-ec-date, tfm-ec-day, tfm-ec-action
│           Roadmap hooks:   tfm-rm-level-card, tfm-rm-level-name, tfm-rm-callout
├── astro.config.mjs     — Astro + @astrojs/react
└── package.json         — astro, @astrojs/react, react, react-dom

---

## Open Items — Blocked on External Input

| Item | Blocked on | File |
|---|---|---|
| Install Party details | Christopher confirms date, venue, city | `src/components/EventsList.jsx` |
| Donate button | EIN arrives (501c3 filing in progress) | `src/components/Donate.jsx` |
| EIN in footer | 501c3 approved | `src/layouts/Layout.astro` |

---

## Hardware Donation Strategy

Primary ask is hardware, not cash. Never frame the free laptop as a guarantee — it is a
donation-enabled promise. Voice: stakes first, specs second.

Full strategy (self-feeding loop, Roadmap hardware mapping, church model, accepted-item
priority order, contact `techfreedomministries@proton.me`): `docs/TFM_16_HARDWARE_DONATION.md`.

---

## Reference Docs

| When working on | Load |
|---|---|
| Design / layout / visual system | `docs/TFM_08_DESIGN_SYSTEM.md` |
| Build spec / site structure | `docs/TFM_09_WEBSITE_BUILD.md` |
| Bible theme / Gilded Spine | `docs/TFM_11_BIBLE_THEME.md` |
| Creative brief / copy voice | `docs/TFM_12_CREATIVE_BRIEF.md` |
| Roadmap copy | `docs/TFM_15_ROADMAP_EXPANDED_COPY.md` |
| Hardware donation strategy | `docs/TFM_16_HARDWARE_DONATION.md` |
| Full framework index | `docs/TFM_01_MASTER_FRAMEWORK.md` |

---

## Design Constraints (Non-Negotiable)

- Framework: Astro + @astrojs/react for interactive islands. No other JS frameworks.
- Styling: CSS custom properties from src/styles/tokens.css only. No Tailwind. No component libraries.
- Fonts: EB Garamond (self-hosted) + Cinzel (self-hosted — header colophon only).
- Border radius: 0px default. 2px on buttons and badges only.
- No glass effects. No dark mode.
- Gradients: Gilded Spine elements only (ribbon, spine, gilt edge, colophon rules, hemp texture).
- Design reference: docs/TFM_08_DESIGN_SYSTEM.md
- Theme reference: docs/TFM_11_BIBLE_THEME.md

---

## Brand Rules

- Faith is the backbone. The front door is open to everyone.
- Never lead with scripture in secular contexts.
- Never lead with surveillance language in church contexts.
- Three-layer brand: Layer 1 (faith/church), Layer 2 (secular/privacy),
  Layer 3 (full TFM culture for members).
