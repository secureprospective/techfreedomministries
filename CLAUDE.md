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

## Actual Repo Structure (Current — Needs Cleanup)

techfreedomministries/
├── CLAUDE.md               — this file
├── .astro/                 — Astro build cache
├── assets/                 — logo files (correct location)
├── dist/                   — BUILD OUTPUT — should not be in repo
├── fonts/                  — DUPLICATE — belongs in public/fonts/ only
├── node_modules/           — should not be in repo
├── public/                 — static assets served at root
│   ├── About.jsx           — DUPLICATE — delete, belongs in src/components/
│   ├── Atoms.jsx           — DUPLICATE — delete, belongs in src/components/
│   ├── EventCard.jsx       — DUPLICATE — delete, belongs in src/components/
│   ├── EventsList.jsx      — DUPLICATE — delete, belongs in src/components/
│   ├── Footer.jsx          — DUPLICATE — delete, belongs in src/components/
│   ├── Hero.jsx            — DUPLICATE — delete, belongs in src/components/
│   ├── Nav.jsx             — DUPLICATE — delete, belongs in src/components/
│   ├── Oath.jsx            — DUPLICATE — delete, belongs in src/components/
│   ├── Roadmap.jsx         — DUPLICATE — delete, belongs in src/components/
│   ├── RsvpModal.jsx       — DUPLICATE — delete, belongs in src/components/
│   ├── assets/             — DUPLICATE logo files — delete
│   ├── colors_and_type.css — DUPLICATE — delete
│   ├── fonts/              — CORRECT LOCATION for font files
│   └── tfm-site.html       — old static fallback — delete after cleanup verified
├── src/
│   ├── About.jsx           — WRONG LEVEL — move to src/components/
│   ├── Atoms.jsx           — WRONG LEVEL — move to src/components/
│   ├── EventCard.jsx       — WRONG LEVEL — move to src/components/
│   ├── EventsList.jsx      — WRONG LEVEL — move to src/components/
│   ├── Footer.jsx          — WRONG LEVEL — move to src/components/
│   ├── Hero.jsx            — WRONG LEVEL — move to src/components/
│   ├── Nav.jsx             — WRONG LEVEL — move to src/components/
│   ├── Oath.jsx            — WRONG LEVEL — move to src/components/
│   ├── Roadmap.jsx         — WRONG LEVEL — move to src/components/
│   ├── RsvpModal.jsx       — WRONG LEVEL — move to src/components/
│   ├── env.d.ts
│   ├── index.html          — DUPLICATE of root index.html — delete
│   ├── layouts/
│   │   └── Layout.astro    — CORRECT
│   ├── pages/
│   │   └── index.astro     — CORRECT — currently a redirect stub
│   └── styles/
│       ├── fonts.css       — CORRECT
│       └── tokens.css      — CORRECT
├── About.jsx               — WRONG LOCATION — delete after src/components/ confirmed
├── Atoms.jsx               — WRONG LOCATION — delete after src/components/ confirmed
├── EventCard.jsx           — WRONG LOCATION — delete after src/components/ confirmed
├── EventsList.jsx          — WRONG LOCATION — delete after src/components/ confirmed
├── Footer.jsx              — WRONG LOCATION — delete after src/components/ confirmed
├── Hero.jsx                — WRONG LOCATION — delete after src/components/ confirmed
├── Nav.jsx                 — WRONG LOCATION — delete after src/components/ confirmed
├── Oath.jsx                — WRONG LOCATION — delete after src/components/ confirmed
├── Roadmap.jsx             — WRONG LOCATION — delete after src/components/ confirmed
├── RsvpModal.jsx           — WRONG LOCATION — delete after src/components/ confirmed
├── _headers                — Cloudflare headers config — DO NOT TOUCH
├── _redirects              — Cloudflare redirects config — DO NOT TOUCH
├── astro.config.mjs        — Astro config — review before cleanup
├── colors_and_type.css     — WRONG LOCATION — move to src/styles/
├── fonts/                  — WRONG LOCATION — content already in public/fonts/
│   └── EB_Garamond.zip     — DELETE — binary zip has no place in a git repo
├── index.html              — current live static page served by Cloudflare
├── package.json
└── README.md

---

## What Is Wrong (Priority Order)

1. dist/ and node_modules/ are not in .gitignore — they should never be committed
2. JSX components exist in four locations: repo root, public/, src/, src/components/ missing entirely
3. fonts/ at repo root duplicates public/fonts/ and includes a 7MB zip file
4. colors_and_type.css at repo root duplicates src/styles/tokens.css
5. index.astro is a redirect stub — not a real page
6. The site currently works because index.html at root serves everything statically
   Astro is being bypassed entirely for the live site

---

## Current Build State

- npm run build: CLEAN (1 page built — index.astro redirect stub only)
- Live site: WORKING at techfreedomministries.com
- Astro telemetry: DISABLED
- node_modules: installed

Phase 0 (coming-soon): REPLACED by Phase 1 work — site is live with hero
Phase 1 (site foundation): PARTIALLY built — structure is broken, content exists
Phase 2-6: NOT started

---

## Next Session — Structural Cleanup

Branch: session/structural-cleanup

Do these steps in exact order. Verify build after each move before proceeding.

1. Fix .gitignore — add dist/ and node_modules/
2. Create src/components/ directory
3. Move src/*.jsx files into src/components/
4. Update all import paths in Layout.astro and index.astro
5. Run build — verify clean
6. Delete duplicate JSX from repo root
7. Delete duplicate JSX from public/
8. Delete public/assets/ (logos already in assets/ at root)
9. Delete fonts/ at repo root (content already in public/fonts/)
10. Delete EB_Garamond.zip from public/fonts/
11. Delete colors_and_type.css at repo root
12. Delete public/colors_and_type.css
13. Delete src/index.html
14. Delete public/tfm-site.html
15. Run build — verify clean
16. Commit and push
17. Verify live site unchanged at techfreedomministries.com

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

## Design Constraints (Non-Negotiable)

- Framework: Astro only. No React, no Vue, no framework.
- Styling: CSS custom properties from src/styles/tokens.css only.
  No Tailwind. No component libraries.
- Fonts: EB Garamond self-hosted from public/fonts/. Georgia fallback.
- Border radius: 0px default. 2px on buttons and badges only.
- No glass effects. No gradients. No dark mode.
- Reference document: TFM_09_WEBSITE_BUILD.md for all design decisions.

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
