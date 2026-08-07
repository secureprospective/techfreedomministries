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

- Last clean build: 9 pages, 2026-08-07
- Live: techfreedomministries.org (Cloudflare Pages, auto-deploy from main), confirmed live and verified via direct fetch of the deployed bundle, not just a 200 check
- Phases 1–12 complete. Last closed: full-site Impeccable critique round 2 + P0 fix pass, 2026-08-07.
- Brevo live; RsvpModal → Formspree mvzyorgw; Cinzel self-hosted; Google Fonts CDN removed
- `--tfm-gold-muted` contrast issue **RESOLVED** (was open as of 2026-08-06): split into `--tfm-gold-muted-on-light` (#796449) and `--tfm-gold-muted-on-dark` (#9A855F), both AA-verified, all sitewide usages updated. Do not re-flag this as open — a prior version of this doc kept stating it as pending after the fix landed; if a critique or review references it as still-open, that's stale context, verify against `tokens.css` directly.

**Pending manual action:** Brevo env vars must be set in Cloudflare Pages before BrevoSignup works in production: `PUBLIC_BREVO_API_KEY` + `PUBLIC_BREVO_LIST_ID=3`

**2026-08-07 session — subtle site animations + full-site Impeccable critique round 2, both merged to `main` and confirmed live.**
- **Animation pass** (`session/animations`, merged `d6c2ae4`): one-time hemp-weave "light sweep" on page load (`body::before`, 5.1s, respects reduced-motion), Roadmap detail-panel `.tfm-rm-unfurl` entrance (620ms), `.tfm-gilt-edge` hover shimmer (brightness+width), `.tfm-ink-link` underline draw-in on narrative resolution links (About/Vanguard/Oath). Timing was tuned down twice live per direct feedback before landing.
- **Critique round 2** (`session/critique-round2`, merged `4f17b84`): dual-agent Impeccable critique across all 9 pages post-animation. Every sub-agent claim was independently verified against source/live measurement before being trusted (several turned out false — see `.impeccable/critique/` snapshots for the full record of what was checked and how). Found and fixed all 6 P0s:
  - Homepage no longer duplicates the full Roadmap page content (was rendering all 4 expanded detail panels in front of the CTA) — `Roadmap.jsx` now takes a `teaser` prop; homepage passes it, cards become simple links to `/roadmap` instead of expanding inline.
  - Roadmap detail panels now close on Escape (previously only had Close buttons, no keyboard escape hatch).
  - Gilt-edge hover shimmer's `box-shadow` was removed — it violated DESIGN.md's own No-Shadow Rule, introduced by the animation pass itself.
  - Donate's tax-deductibility disclosure moved above the cash-tier button grid (previously below it, easy to miss); buttons relabeled "Email to give $X" + "Opens your email app" microcopy so they read as email, not a payment checkout.
  - `flyer.astro` (a standalone page that never imports `tokens.css`) had a raw, unfixed `#8B7355` gold-muted hex on every eyebrow label — the exact contrast bug fixed everywhere else on the site, missed here because this page duplicates colors as hardcoded hex. Fixed to the correct on-light/on-dark values directly.
  - `flyer.astro` print output overflowed onto a second page (1022px content vs 960px printable height under real `@media print` emulation) — trimmed spacing, now fits at 910px.
- 13 P1/P2/P3 findings remain open by choice (not requested to fix this round) — full list in each page's `.impeccable/critique/*.md` snapshot. Notable ones: `Brackets` component (Atoms.jsx) is fully symmetric, contradicting DESIGN.md's diagonal Stamp Frame asymmetry rule, sitewide not just on Oath; Vanguard hero's "debt has a name" metaphor doesn't land for cold readers; About/Oath lack a stakes clause before their resolution copy.

**Next branch:** `session/event-data` — once Install Party date/venue/city confirmed.

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
| Members area (login + Buzz community front end) | Two decisions pending: (1) public Buzz URL — Christopher named `tfm.communities.buzz.xyz`, domain ownership unverified against CF inventory, needs confirmation; (2) TeamAi engagement scope for this build (full fleet build vs. grunt-work-only vs. Claude drafts specs for separate execution) | n/a, build not started |

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
