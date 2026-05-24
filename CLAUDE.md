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
Domain: techfreedomministries.org (live — Cloudflare Pages, auto-deploy from main)
Redirect: techfreedomministries.com → techfreedomministries.org (301, all variants)
Repo: github.com/secureprospective/techfreedomministries
Local path: /mnt/storage/claudebox/techfreedomministries/

---

## Actual Repo Structure (Clean — as of session/integrations)

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
│   │   ├── BrevoSignup.jsx — email capture widget (footer, every page — Brevo list 3)
│   │   ├── Donate.jsx      — give page: three tiers + placeholder button
│   │   ├── EventCard.jsx
│   │   ├── EventsList.jsx  — single Install Party placeholder (real data TBD)
│   │   ├── Footer.jsx      — legacy, not used by Astro (nav/footer in Layout.astro)
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx         — legacy, not used by Astro (nav/footer in Layout.astro)
│   │   ├── Oath.jsx
│   │   ├── Roadmap.jsx
│   │   ├── RsvpModal.jsx
│   │   └── Vanguard.jsx    — recruit page: cards + application form (Formspree mvzyorgw — live)
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
- Live site: CONFIRMED live at techfreedomministries.com
- Cloudflare Pages build config: CONFIRMED correct (npm run build / dist)
- index.html: REMOVED — Astro is now the site
- Astro: ACTIVE — @astrojs/react wired, all components are ES modules

Phase 1 (site foundation): COMPLETE
Phase 2 (home page): COMPLETE
Phase 3 (events page): COMPLETE (Install Party placeholder — real data TBD)
Phase 4 (roadmap page): COMPLETE
Phase 5 (vanguard page): COMPLETE (Formspree mvzyorgw — live and confirmed)
Phase 6 (donate page): COMPLETE (donate button is a placeholder — wire once EIN arrives)
Phase 7 (integrations): COMPLETE — Formspree + Brevo live and confirmed

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

## Next Session — Real Event Data + RSVP

Branch: session/event-data (suggested)

Prerequisites:
- Christopher has confirmed date, venue, and city for the first Install Party

Goal (in priority order):
1. Replace TBD fields in src/components/EventsList.jsx with real Install Party details
2. Wire RsvpModal to Formspree (separate endpoint from Vanguard form)
3. Security upgrade session — move Brevo API key behind Cloudflare Pages Function

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
