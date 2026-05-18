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

## Actual Repo Structure (Clean — as of session/structural-cleanup)

techfreedomministries/
├── CLAUDE.md               — this file
├── .astro/                 — Astro build cache (gitignored)
├── assets/                 — logo files (correct location)
│   ├── tfm-logo-nearblack.png
│   ├── tfm-logo-on-dark.png
│   ├── tfm-logo-on-parchment.png
│   └── tfm-logo-on-white.png
├── dist/                   — build output (gitignored)
├── node_modules/           — dependencies (gitignored)
├── public/                 — static assets served at root
│   └── fonts/              — self-hosted EB Garamond (correct location)
├── src/
│   ├── components/         — ALL JSX components live here
│   │   ├── About.jsx
│   │   ├── Atoms.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventsList.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx
│   │   ├── Oath.jsx
│   │   ├── Roadmap.jsx
│   │   └── RsvpModal.jsx
│   ├── env.d.ts
│   ├── layouts/
│   │   └── Layout.astro    — shell layout with header, footer, slot
│   ├── pages/
│   │   └── index.astro     — STUB — redirect to deleted file, needs real page
│   └── styles/
│       ├── fonts.css       — @font-face declarations
│       └── tokens.css      — CSS custom properties (single source of truth)
├── _headers                — Cloudflare headers config — DO NOT TOUCH
├── astro.config.mjs        — Astro config
├── index.html              — current live static page served by Cloudflare
├── package.json
└── README.md

---

## What Is Wrong (Priority Order)

1. index.astro is a redirect stub pointing to /tfm-site.html — that file is now deleted.
   The redirect is a dead link. Astro must be replaced with a real page.
2. The site currently works because index.html at root serves everything statically.
   Astro is being bypassed entirely for the live site.
3. JSX components in src/components/ are not imported or used by any Astro page yet.
4. TFM_09_WEBSITE_BUILD.md (design reference) is not in the repo — Christopher must
   supply it before any design or content work begins.

---

## Current Build State

- npm run build: CLEAN (1 page built — index.astro redirect stub only)
- Live site: WORKING at techfreedomministries.com (served via index.html, Astro bypassed)
- Astro telemetry: DISABLED
- node_modules: installed

Phase 0 (coming-soon): REPLACED by Phase 1 work — site is live with hero
Phase 1 (site foundation): Structure clean. Components exist. Astro page not yet built.
Phase 2-6: NOT started

---

## Next Session — Build Real Astro Page

Branch: session/astro-page-build

Prerequisites before starting:
- Christopher must provide TFM_09_WEBSITE_BUILD.md (design reference)
- Confirm which components from src/components/ are ready to use

Goal: Replace the index.astro redirect stub with a real Astro page that uses
Layout.astro and the components in src/components/. When this session is done,
the live site should serve via Astro, not index.html.

Steps (rough order — refine once TFM_09_WEBSITE_BUILD.md is in hand):

1. Review TFM_09_WEBSITE_BUILD.md for page structure and content requirements
2. Audit each component in src/components/ — what does it render, what props does it need
3. Rewrite src/pages/index.astro as a real page using Layout.astro
4. Wire in components one at a time, verify build after each
5. Confirm live site visual matches index.html before removing index.html
6. Remove index.html from repo root once Astro is serving correctly
7. Commit and push
8. Verify live site at techfreedomministries.com

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

- Framework: Astro (target). Live site currently runs browser-compiled React via index.html — migration is planned.
- Styling: CSS custom properties from src/styles/tokens.css only.
  No Tailwind. No component libraries.
- Fonts: EB Garamond. Self-hosted files in public/fonts/. Currently loading from Google CDN via src/styles/fonts.css — self-hosted wiring is a known pending item.
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
