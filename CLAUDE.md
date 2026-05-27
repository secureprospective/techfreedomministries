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
Local path: /mnt/storage/claudebox/techfreedomministries/

---

## Actual Repo Structure (Clean — as of session/full-code-audit)

techfreedomministries/
├── CLAUDE.md               — this file
├── .astro/                 — Astro build cache (gitignored)
├── dist/                   — build output (gitignored)
├── node_modules/           — dependencies (gitignored)
├── public/
│   ├── assets/             — logo files served at /assets/ (canonical location)
│   │   ├── tfm-logo-nearblack.png
│   │   ├── tfm-logo-on-dark.png
│   │   ├── tfm-logo-on-parchment.png
│   │   ├── tfm-logo-on-white.png
│   │   └── tfm-logo-on-white-zero.png  — mobile header logo mark
│   ├── fonts/              — self-hosted EB Garamond (4 variants only: Regular, Italic, Bold, BoldItalic)
│   └── _headers            — Cloudflare headers config (canonical location)
├── src/
│   ├── components/         — ALL JSX components (ES modules with named exports)
│   │   ├── About.jsx
│   │   ├── Atoms.jsx       — primitives: Eyebrow, Rule, Diamond, Proclamation, Button, GhostButton,
│   │   │                     LinkButton, LevelBadge, Brackets, Icon, Card, GiltCard, SectionEyebrow
│   │   ├── BrevoSignup.jsx — email capture widget (footer, every page — Brevo list 3)
│   │   ├── Donate.jsx      — give page: 6-section layout, TODO: STRIPE + TODO: 501C3 markers
│   │   ├── EventCard.jsx   — mobile className hooks in responsive.css: tfm-ec-grid, tfm-ec-date, tfm-ec-day, tfm-ec-action
│   │   ├── EventsList.jsx  — single Install Party placeholder (real data TBD)
│   │   ├── Hero.jsx        — two-column flex layout, dissolution hook (data-tfm-animate)
│   │   ├── Oath.jsx
│   │   ├── Roadmap.jsx     — mobile className hooks in responsive.css: tfm-rm-level-card, tfm-rm-level-name, tfm-rm-callout
│   │   ├── RsvpModal.jsx   — RSVP form UI (currently submits nowhere — see Open Items)
│   │   └── Vanguard.jsx    — application via mailto: vanguard@techfreedomministries.com
│   ├── env.d.ts
│   ├── layouts/
│   │   └── Layout.astro    — shell layout: nav + footer + all CSS imports + slot + single mobile breakpoint block
│   ├── pages/
│   │   ├── index.astro     — home page
│   │   ├── events.astro    — full events list
│   │   ├── roadmap.astro   — four level cards
│   │   ├── oath.astro      — Vanguard Oath (orphan — not yet in nav, see Open Items)
│   │   ├── about.astro     — TFM is/isn't (orphan — not yet in nav, see Open Items)
│   │   ├── vanguard.astro  — Vanguard recruit page
│   │   └── donate.astro    — Give page (button placeholder until EIN)
│   └── styles/
│       ├── fonts.css       — self-hosted @font-face rules (no CDN)
│       ├── tokens.css      — CSS custom properties (single source of truth)
│       ├── accents.css     — Gilded Spine accent system (ledger rule, ref mark, stamp, gilt edge)
│       └── responsive.css  — all component mobile breakpoints (loaded once, never injected in components)
├── astro.config.mjs        — Astro + @astrojs/react
├── package.json            — astro, @astrojs/react, react, react-dom
└── README.md

---

## Current Build State

- npm run build: CLEAN (7 pages built)
- Live site: CONFIRMED live at techfreedomministries.org
- Cloudflare Pages build config: CONFIRMED correct (npm run build / dist)
- Active branch: main (session/full-code-audit merged and deployed — May 25 2026)
- index.html: REMOVED — Astro is now the site
- Astro: ACTIVE — @astrojs/react wired, all components are ES modules

Phase 1 (site foundation): COMPLETE
Phase 2 (home page): COMPLETE
Phase 3 (events page): COMPLETE (Install Party placeholder — real data TBD)
Phase 4 (roadmap page): COMPLETE
Phase 5 (vanguard page): COMPLETE (Formspree form replaced by email CTA in Session 9)
Phase 6 (donate page): COMPLETE (donate button placeholder until EIN — TODO: STRIPE markers in Donate.jsx)
Phase 7 (integrations): COMPLETE — Brevo live; Formspree endpoint mvzyorgw no longer in Vanguard UI
Phase 8 (Gilded Spine theme): COMPLETE — see docs/TFM_11_BIBLE_THEME.md
Phase 9 (mobile responsiveness): COMPLETE — nav, hero, explainer, event card, roadmap, footer, Vanguard, Donate, About
Phase 10 (full code audit): COMPLETE — merged to main May 25 2026
- 14 dead files deleted, ~3.2MB unused fonts removed
- 5 duplicate tokens eliminated, all usages unified
- GiltCard + SectionEyebrow centralized in Atoms.jsx
- responsive.css created — mobile styles out of JS bundles
- About + Oath wired into footer nav
- _headers cleaned, RsvpModal disabled, filter chip fixed

## Hardware Donation Strategy — Read Before Any Donate or Events Work

The primary donation ask is hardware, not cash. This is a strategic decision, not a secondary note.

**The conditional promise:**
TFM cannot guarantee a free laptop at every Install Party without a hardware supply.
The correct framing is: "We can't give free laptops without your generosity."
Never write copy that makes the free laptop a guarantee — it is a donation-enabled promise.

**The self-feeding loop:**
1. Donor gives obsolete hardware (what Big Tech deems obsolete = someone's first computer)
2. TFM runs an Install Party — "free laptop for your time and attention" is the hook
3. Student follows the Roadmap
4. Student becomes a Vanguard, runs their own events
5. Those events need hardware — the loop restarts

**Hardware feeds all four Roadmap levels — not just Level 1:**
- Level 1 (Exodus): The donated machine someone leaves with
- Level 2 (Catechism): The terminal they learn on
- Level 3 (Homestead): Home server built from donated SBCs or mini PCs
- Level 4 (Great Commission): Machines a Vanguard needs to run their own Exodus event

**The church/rural model:**
A church anywhere can host TFM events if TFM can supply the hardware.
The venue, community, and faith context are already there. TFM provides machines and model.
This is how TFM scales without a central org running everything.

**Hardware contact:** techfreedomministries@proton.me
**Accepted hardware tiers (in priority order):**
Laptops → Workstation PCs → Mini PCs → Old gaming desktops → Tablets → SBCs

**Voice rule:**
Lead with what is impossible without the donation. Then state what becomes possible with it.
Never lead with specs. Stakes first, specs second.

---

## Open Items — What Comes Next

### Blocked on external input
| Item | Blocked on | File |
|---|---|---|
| Install Party details | Christopher confirms date, venue, city | `src/components/EventsList.jsx` |
| Donate button | EIN arrives (501c3 filing in progress) | `src/components/Donate.jsx` |
| EIN in footer | 501c3 approved | `src/layouts/Layout.astro` |

### Ready to build (no external dependency)
| Item | Priority | Notes |
|---|---|---|
| Self-host Cinzel font | Low | Currently loaded from Google Fonts — inconsistent with EB Garamond self-hosting policy |

### Suggested next branch
`session/event-data` — once Install Party date/venue/city confirmed

---

## Session Start Protocol

Every session, in this order, before touching any file:

1. Read this file completely
2. Confirm current branch: git branch
3. If on main: git checkout -b session/description-of-work
4. Confirm clean working tree: git status
5. Run build to confirm starting state: npm run build
6. Report what passed and what failed before proceeding

---

## Branch Rules

- No work on main. Ever.
- Branch naming: session/short-description
- Clean build required before any merge to main
- No git --no-verify under any circumstances
- Merge to main only after Christopher confirms live site looks correct

---

## Troubleshooting Gate

Stage 0: Normal execution. Resolve on first attempt.

Stage 1: When Claude Code cannot diagnose from file contents alone,
stop and output exactly this format:

  TROUBLESHOOTING GATE — SCREENSHOT NEEDED
  Take a screenshot of: [specific element described]
  Take it to Claude.ai with this prompt: [exact prompt text]
  Bring the output back here.

Stage 2: If Stage 1 output does not resolve it, ask Christopher one
targeted question about what he can see. One question. Precise.

---

## Project Documents

All TFM planning and reference documents live in `docs/`. Read these at the start of any website build session:

- `docs/TFM_09_WEBSITE_BUILD.md` — technical spec and build sequence
- `docs/TFM_10_BUILD_STATE.md` — live project status, known issues, what comes next
- `docs/TFM_08_DESIGN_SYSTEM.md` — design tokens and visual rules (single source of truth)
- `docs/TFM_11_BIBLE_THEME.md` — Gilded Spine theme layer (tokens, elements, application)
- `docs/TFM_12_CREATIVE_BRIEF.md` — full brand/mission brief for design work, visual AI, print media
- `docs/TFM_13_DESIGN_STUDIO.md` — Claude.ai Design Studio master prompt (template system, logo rules, animation spec)
- `docs/TFM_14_DUAL_AI_WORKFLOW.md` — dual-AI design workflow: division of labor, verification gate, opening session prompt template, known failure modes
- `docs/TFM_05_WEBSITE_ARCHITECTURE.md` — page-by-page copy and content direction

Full document index is in `docs/TFM_01_MASTER_FRAMEWORK.md`.

---

## Design Constraints (Non-Negotiable)

- Framework: Astro + @astrojs/react for interactive islands. No other JS frameworks.
- Styling: CSS custom properties from src/styles/tokens.css only.
  No Tailwind. No component libraries.
- Fonts: EB Garamond (self-hosted) + Cinzel (Google Fonts — header colophon only).
- Border radius: 0px default. 2px on buttons and badges only.
- No glass effects. No dark mode.
- Gradients: permitted only for Gilded Spine theme elements (ribbon, spine, gilt edge, colophon rules, hemp texture). Not for general UI.
- Design reference: docs/TFM_08_DESIGN_SYSTEM.md
- Theme reference: docs/TFM_11_BIBLE_THEME.md

---

## Brand Rules

- Faith is the backbone. The front door is open to everyone.
- Never lead with scripture in secular contexts.
- Never lead with surveillance language in church contexts.
- Three-layer brand: Layer 1 (faith/church), Layer 2 (secular/privacy),
  Layer 3 (full TFM culture for members).

---

## Founder

Christopher Campbell. Address him as Christopher.
He directs. Claude Code executes. Verify before proceeding.
When in doubt, stop and ask. Never guess file paths or import structure.
