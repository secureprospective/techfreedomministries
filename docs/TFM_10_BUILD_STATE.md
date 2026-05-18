# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-18 — Session 5 (Formspree + Brevo integrations)

**Live URL:** https://techfreedomministries.com
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** main (session/integrations merged — PR #3)
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Stack (As of Session 5)

| Item | Spec (TFM_09) | Actual |
|---|---|---|
| Framework | Astro | Astro ✓ — 7 pages built |
| CSS | tokens.css (custom built) | tokens.css — imported via Layout.astro ✓ |
| Fonts | Self-hosted EB Garamond | Self-hosted from /fonts/ ✓ |
| JS | Astro + React islands | @astrojs/react — client:load for interactive components |
| Routing | Astro pages | Real URL routing ✓ |
| Deployment | Astro build → dist/ | dist/ output — Cloudflare config confirmed ✓ |
| Build command | npm run build | ✓ — 7 pages, clean build |
| Build output dir | dist/ | dist/ ✓ |
| Formspree | Vanguard application form | Live — endpoint mvzyorgw ✓ |
| Brevo | Email capture (footer) | Live — list ID 3, env vars in Cloudflare ✓ |

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `/` | Complete ✓ |
| Events | ✓ | ✓ | `/events` | Complete ✓ — Install Party placeholder (real data TBD) |
| Roadmap | ✓ | ✓ | `/roadmap` | Complete ✓ |
| Vanguard | ✓ | ✓ | `/vanguard` | Complete ✓ — Formspree live (mvzyorgw) |
| Donate | ✓ | ✓ | `/donate` | Complete ✓ — button placeholder until EIN |
| The Oath | Not in spec | ✓ | `/oath` | Built (not in nav) |
| About | Not in spec | ✓ | `/about` | Built (not in nav) |

---

## Navigation (As Built)

`EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE` — per TFM_09 spec.

The Oath and About exist at `/oath` and `/about` but are not in the main nav.

---

## Known Issues

| Issue | Priority | Detail |
|---|---|---|
| No EIN / donate button disabled | High | Swap placeholder in `src/components/Donate.jsx` for Stripe/PayPal link once 501(c)(3) filed. |
| Install Party details TBD | High | `src/components/EventsList.jsx` — replace TBD fields with real date, venue, city before launch. |
| No real RSVP backend | Medium | RsvpModal form goes nowhere. Needs Formspree endpoint (separate from Vanguard). |
| Brevo API key exposed in bundle | Medium | Key is not in repo but is visible in browser JS bundle. Deferred to security upgrade session. |
| No EIN in footer | Medium | Add real EIN to Layout.astro footer once 501(c)(3) is filed. |
| assets/ at repo root | Low | Canonical location is public/assets/. Root assets/ can be deleted once confirmed. |
| _headers at repo root | Low | Canonical location is public/_headers. Root _headers can be deleted once confirmed. |

---

## What Comes Next (In Order)

1. Fill in Install Party details in `src/components/EventsList.jsx` (date, venue, city)
2. Wire RsvpModal to Formspree (separate endpoint from Vanguard)
3. Security upgrade session — move Brevo API key behind Cloudflare Pages Function
4. Wire donate button — swap placeholder for Stripe/PayPal link once EIN arrives
5. Add EIN to footer once 501(c)(3) is filed
6. Delete legacy files: root assets/, root _headers (after confirming live site is clean)

---

*Last updated: 2026-05-18 — Session 5*
*Built by: Christopher Campbell + Claude (Anthropic)*
