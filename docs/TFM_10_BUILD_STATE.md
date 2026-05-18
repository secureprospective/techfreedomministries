# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-18 — Session 2 (structural cleanup)

**Live URL:** https://techfreedomministries.com
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** main
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Critical: Actual Stack vs. Spec

TFM_09 specifies Astro as the framework. **The live site does not use Astro.** Read this section before touching anything.

| Item | Spec (TFM_09) | Actual Live Site |
|---|---|---|
| Framework | Astro | None — vanilla HTML + browser-compiled React |
| CSS | tokens.css (custom built) | colors_and_type.css (from Claude Design export) — file now deleted from repo, live via index.html |
| Fonts | Self-hosted EB Garamond | Self-hosted EB Garamond — files in `public/fonts/` |
| JS | Astro components | JSX files compiled by Babel in the browser at runtime |
| Routing | Astro pages | In-memory React state in index.html |
| Deployment | Astro build → dist/ | Cloudflare serves repo root directly, no build |
| Build command | npm run build | None set in Cloudflare |
| Build output dir | dist/ | None set — defaults to repo root |

### Why the Stack Differs

A Claude Design session built a complete working React UI kit before the Astro build was finished. Rather than rebuild what already existed, we extracted the Claude Design files, fixed their paths, and deployed them directly. Astro remains installed in the repo but is not part of the live site. Migration to a proper build pipeline is a future session item.

---

## Current File Structure

### Repo Root — What Cloudflare Serves

```
/ (repo root)
├── index.html              ← ENTRY POINT. Loads React, Babel, all JSX. Contains App + routing.
├── assets/                 ← Logo files served at /assets/
│   ├── tfm-logo-nearblack.png
│   ├── tfm-logo-on-dark.png
│   ├── tfm-logo-on-parchment.png
│   └── tfm-logo-on-white.png
├── _headers                ← Cloudflare headers config — DO NOT TOUCH
├── CLAUDE.md               ← Session ground truth — read every session
├── docs/                   ← All TFM project documents
└── public/fonts/           ← EB Garamond font files (canonical location)
```

### src/ — Astro Project (Installed, Not Serving Live)

```
src/
├── components/             ← All JSX components (single source of truth)
│   ├── About.jsx
│   ├── Atoms.jsx
│   ├── EventCard.jsx
│   ├── EventsList.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Nav.jsx
│   ├── Oath.jsx
│   ├── Roadmap.jsx
│   └── RsvpModal.jsx
├── env.d.ts
├── layouts/
│   └── Layout.astro        ← Shell layout — not used by live site
├── pages/
│   └── index.astro         ← Redirect stub — currently points to deleted file
└── styles/
    ├── fonts.css
    └── tokens.css
```

---

## How index.html Works

index.html at the repo root is the live site entry point. It:
1. Loads React 18.3.1, ReactDOM 18.3.1, and Babel standalone 7.29.0 from unpkg CDN
2. Loads each JSX component as `<script type="text/babel" src="/File.jsx">` — Babel compiles in-browser
3. Defines the App component, routing logic, and mounts React to `<div id="root">`

**Component load order matters** (files are loaded sequentially):
1. Atoms.jsx — base components, must be first
2. Nav.jsx
3. Hero.jsx
4. EventCard.jsx
5. EventsList.jsx
6. Roadmap.jsx
7. Oath.jsx
8. About.jsx
9. Footer.jsx
10. RsvpModal.jsx

**Note:** The live site currently loads JSX from the repo root via `src="/ComponentName.jsx"`. After the structural cleanup (Session 2), the JSX files were moved to `src/components/`. The index.html script tags have **not yet been updated** to reflect the new paths. This is the first item in Known Issues.

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `home` | Live |
| Events | ✓ | ✓ | `events` | Live — mock data only |
| Roadmap | ✓ | ✓ | `roadmap` | Live |
| Vanguard | ✓ | ✗ | — | Not built |
| Donate | ✓ | ✗ | — | Not built |
| The Oath | Not in spec | ✓ | `oath` | Live |
| About | Not in spec | ✓ | `about` | Live |

---

## Known Issues

| Issue | Priority | Detail |
|---|---|---|
| index.html script paths broken | Critical | JSX moved to src/components/ in Session 2. index.html still loads from root (e.g. `/Atoms.jsx`). Paths must be updated to `/src/components/Atoms.jsx` or files served differently. Verify and fix before next session proceeds. |
| index.astro redirect is dead | High | index.astro redirects to `/tfm-site.html` which was deleted in Session 2. Replace with real Astro page. |
| No Vanguard page | High | Per TFM_09 spec. Add Vanguard.jsx + route. |
| No Donate page | High | Per TFM_09 spec. Add Donate.jsx + route + payment integration. |
| No email capture | High | Brevo integration never completed. Site has no email capture. Add to footer or hero. |
| Nav logo unverified | High | Nav.jsx may have broken logo path. Verify with DevTools Network tab. |
| Mock event data | Medium | EventsList.jsx has placeholder events. Replace before first Install Party. |
| No real RSVP backend | Medium | RsvpModal form goes nowhere. Needs Formspree or equivalent. |
| No EIN in footer | Medium | Add real EIN to Footer.jsx once 501(c)(3) is filed. |
| Fonts loading unverified | Medium | Verify EB Garamond loading in DevTools Network tab. |
| Browser-side Babel | Low | Slower initial load. Acceptable for now. Address when migrating to build pipeline. |
| No URL routing | Low | Inner pages have no unique URLs. Back button and bookmarks do not work. |

---

## What Comes Next (In Order)

1. Verify live site after Session 2 structural cleanup — confirm index.html script paths still resolve
2. Fix any broken paths in index.html
3. Verify Nav.jsx logo path in DevTools
4. Verify fonts loading in DevTools Network tab
5. Add Vanguard page
6. Add Donate page with payment integration
7. Add email capture to site
8. Replace mock event data with real first event
9. Wire RsvpModal to real form backend (Formspree)
10. Add EIN to footer once 501(c)(3) is filed
11. Migrate to proper build pipeline (Astro or Vite) when content stabilizes

---

*Last updated: 2026-05-18 — Session 2*
*Built by: Christopher Campbell + Claude (Anthropic)*
