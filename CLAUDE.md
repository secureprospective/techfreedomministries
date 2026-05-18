# Tech Freedom Ministries — Claude Code Ground Truth
*Read this entire file before doing anything. If this file conflicts
with anything said in the session, this file wins.*

---

## What This Project Is

Tech Freedom Ministries (TFM) is a faith-backed digital freedom nonprofit.
Mission: Teach people to escape Big Tech surveillance through free community
events, hands-on Linux training, and a repeating growth model that turns
today's student into tomorrow's teacher.

Scriptural anchor: Galatians 5:1
Tagline: "Giving freedom with a fishing pole."
Domain: techfreedomministries.com (live — Cloudflare Pages, auto-deploy from main)
Repo: github.com/secureprospective/techfreedomministries
Local path: /mnt/storage/claudebox/techfreedomministries/

---

## Actual Repo Structure (Clean — as of session/vanguard-donate)

techfreedomministries/
├── CLAUDE.md               — this file
├── .astro/                 — Astro build cache (gitignored)
├── assets/                 — legacy logo location (kept; canonical is public/assets/)
├── dist/                   — build output (gitignored)
├── node_modules/           — dependencies (gitignored)
├── public/
│   ├── assets/             — logo files served at /assets/ (canonical location)
│   ├── fonts/              — self-hosted EB Garamond (canonical location)
│   └── _headers            — Cloudflare headers config (canonical location)
├── src/
│   ├── components/         — ALL JSX components (ES modules with named exports)
│   │   ├── About.jsx
│   │   ├── Atoms.jsx       — primitive components, exported as named exports
│   │   ├── Donate.jsx      — give page: three tiers + placeholder button
│   │   ├── EventCard.jsx
│   │   ├── EventsList.jsx  — includes RSVP modal state management
│   │   ├── Footer.jsx      — legacy, not used by Astro (nav/footer in Layout.astro)
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx         — legacy, not used by Astro (nav/footer in Layout.astro)
│   │   ├── Oath.jsx
│   │   ├── Roadmap.jsx
│   │   ├── RsvpModal.jsx
│   │   └── Vanguard.jsx    — recruit page: cards + application form (Formspree — needs ID)
│   ├── env.d.ts
│   ├── layouts/
│   │   └── Layout.astro    — shell layout: nav + footer + CSS import + slot
│   ├── pages/
│   │   ├── index.astro     — home page (Hero + events preview + Roadmap + CTA)
│   │   ├── events.astro    — full events list
│   │   ├── roadmap.astro   — four level cards
│   │   ├── oath.astro      — Vanguard Oath
│   │   ├── about.astro     — TFM is/isn't
│   │   ├── vanguard.astro  — Vanguard recruit page (real)
│   │   └── donate.astro    — Give page (real — button placeholder until EIN)
│   └── styles/
│       ├── fonts.css       — self-hosted @font-face rules (no CDN)
│       └── tokens.css      — CSS custom properties (single source of truth)
├── _headers                — legacy location (canonical is public/_headers)
├── astro.config.mjs        — Astro + @astrojs/react
├── package.json            — astro, @astrojs/react, react, react-dom
└── README.md

---

## Current Build State

- npm run build: CLEAN (7 pages built)
- Live site: on main — verify Cloudflare Pages build config is set (see TFM_10_BUILD_STATE.md)
- index.html: REMOVED — Astro is now the site
- Astro: ACTIVE — @astrojs/react wired, all components are ES modules

Phase 1 (site foundation): COMPLETE
Phase 2 (home page): COMPLETE
Phase 3 (events page): COMPLETE (mock data)
Phase 4 (roadmap page): COMPLETE
Phase 5 (vanguard page): COMPLETE (Formspree endpoint is a placeholder — wire before launch)
Phase 6 (donate page): COMPLETE (donate button is a placeholder — wire once EIN arrives)

## Next Session — Live Data + Integrations

Branch: session/integrations (suggested)

Prerequisites:
- Confirm live site is rendering correctly at techfreedomministries.com
- Christopher provides Formspree form ID for Vanguard application form

Goal (in priority order):
1. Wire Formspree: replace PLACEHOLDER in src/components/Vanguard.jsx line 7
2. Add Brevo email capture (footer or hero — email list for event announcements)
3. Replace mock event data in EventsList.jsx with first real Install Party details
4. Wire RsvpModal to Formspree (or same form as Vanguard, separate endpoint)

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
- `docs/TFM_05_WEBSITE_ARCHITECTURE.md` — page-by-page copy and content direction

Full document index is in `docs/TFM_01_MASTER_FRAMEWORK.md`.

---

## Design Constraints (Non-Negotiable)

- Framework: Astro + @astrojs/react for interactive islands. No other JS frameworks.
- Styling: CSS custom properties from src/styles/tokens.css only.
  No Tailwind. No component libraries.
- Fonts: EB Garamond. Self-hosted from public/fonts/ via @font-face in src/styles/fonts.css.
- Border radius: 0px default. 2px on buttons and badges only.
- No glass effects. No gradients. No dark mode.
- Design reference: docs/TFM_08_DESIGN_SYSTEM.md

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
