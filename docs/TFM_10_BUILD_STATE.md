# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-18 — Session 3 (Astro page build)

**Live URL:** https://techfreedomministries.com
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** session/astro-page-build (pending merge to main)
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Critical: Cloudflare Build Config Must Be Updated

The live site currently deploys from the repo root (no build command). Merging this branch to main will NOT break the live site immediately — Cloudflare will just serve the repo root, which no longer has an index.html.

**Before merging to main, update Cloudflare Pages settings:**
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: (leave blank)

Until Cloudflare is configured with the build command, the live site will serve a blank page after merge.

---

## Stack (As of Session 3)

| Item | Spec (TFM_09) | Actual |
|---|---|---|
| Framework | Astro | Astro ✓ — 7 pages built |
| CSS | tokens.css (custom built) | tokens.css — imported via Layout.astro ✓ |
| Fonts | Self-hosted EB Garamond | Self-hosted from /fonts/ ✓ |
| JS | Astro + React islands | @astrojs/react — client:load for interactive components |
| Routing | Astro pages | Real URL routing ✓ |
| Deployment | Astro build → dist/ | dist/ output ready — Cloudflare config pending |
| Build command | npm run build | ✓ — 7 pages, clean build |
| Build output dir | dist/ | dist/ ✓ |

---

## File Structure (As of Session 3)

### Repo Root

```
/ (repo root)
├── assets/                 ← Logo files — legacy location, kept for reference
│   └── *.png               ← Canonical location is now public/assets/
├── public/                 ← Astro static assets — copied to dist/ on build
│   ├── assets/             ← Logo files served at /assets/ ✓
│   ├── fonts/              ← EB Garamond TTF files served at /fonts/ ✓
│   └── _headers            ← Cloudflare headers config — served from dist/ ✓
├── src/
│   ├── components/         ← All JSX components — ES modules with named exports
│   ├── layouts/
│   │   └── Layout.astro    ← Shell layout with nav, footer, CSS import ✓
│   ├── pages/
│   │   ├── index.astro     ← Home page ✓
│   │   ├── events.astro    ← Events page ✓
│   │   ├── roadmap.astro   ← Roadmap page ✓
│   │   ├── oath.astro      ← The Oath page ✓
│   │   ├── about.astro     ← About page ✓
│   │   ├── vanguard.astro  ← Stub (Coming Soon) ✓
│   │   └── donate.astro    ← Stub (Coming Soon) ✓
│   └── styles/
│       ├── fonts.css       ← Self-hosted @font-face rules ✓
│       └── tokens.css      ← CSS custom properties + aliases ✓
├── _headers                ← Legacy location — canonical is now public/_headers
├── astro.config.mjs        ← Astro + @astrojs/react ✓
├── CLAUDE.md               ← Session ground truth
└── package.json            ← astro + @astrojs/react + react + react-dom
```

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `/` | Built — Astro ✓ |
| Events | ✓ | ✓ | `/events` | Built — Astro ✓ (mock data) |
| Roadmap | ✓ | ✓ | `/roadmap` | Built — Astro ✓ |
| Vanguard | ✓ | stub | `/vanguard` | Stub page |
| Donate | ✓ | stub | `/donate` | Stub page |
| The Oath | Not in spec | ✓ | `/oath` | Built — Astro ✓ (not in nav) |
| About | Not in spec | ✓ | `/about` | Built — Astro ✓ (not in nav) |

---

## Navigation (As Built)

`EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE` — per TFM_09 spec.

Note: The Oath and About exist as pages at `/oath` and `/about` but are not in the main nav.

---

## Known Issues

| Issue | Priority | Detail |
|---|---|---|
| Cloudflare build config not set | Critical | Must set build command + output dir before merge. See above. |
| assets/ at repo root | Low | Canonical location is now public/assets/. Old assets/ folder can be deleted once Cloudflare config confirmed working. |
| _headers at repo root | Low | Canonical location is now public/_headers. Old root _headers can be deleted once confirmed. |
| No Vanguard page | High | Stub exists. Per TFM_09 spec — build next session. |
| No Donate page | High | Stub exists. Per TFM_09 spec — build next session. |
| No email capture | High | Brevo integration never completed. Add to footer or hero. |
| Mock event data | Medium | EventsList.jsx has placeholder events. Replace before first Install Party. |
| No real RSVP backend | Medium | RsvpModal form goes nowhere. Needs Formspree or equivalent. |
| No EIN in footer | Medium | Add real EIN to Layout.astro footer once 501(c)(3) is filed. |
| No URL routing in Nav.jsx / Footer.jsx | Low | These legacy files are no longer used by Astro. Nav/Footer now live in Layout.astro. |

---

## What Comes Next (In Order)

1. Update Cloudflare Pages build config (build command + output dir) — Christopher does this in dashboard
2. Merge session/astro-page-build to main
3. Verify live site at techfreedomministries.com
4. Build Vanguard page (src/pages/vanguard.astro + Vanguard.jsx)
5. Build Donate page (src/pages/donate.astro + Donate.jsx + payment integration)
6. Add email capture to site (Brevo integration)
7. Replace mock event data with real first event
8. Wire RsvpModal to real form backend (Formspree)
9. Add EIN to footer once 501(c)(3) is filed
10. Delete legacy files: assets/ at root, _headers at root, Nav.jsx, Footer.jsx (if confirmed unused)

---

*Last updated: 2026-05-18 — Session 3*
*Built by: Christopher Campbell + Claude (Anthropic)*
