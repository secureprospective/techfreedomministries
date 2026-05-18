# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-18 — Session 4 (Vanguard + Donate pages)

**Live URL:** https://techfreedomministries.com
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** main (session/vanguard-donate merged — PR #2)
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Critical: Cloudflare Build Config

If not already done, update Cloudflare Pages settings before verifying the live site:
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: (leave blank)

Without this, Cloudflare serves the repo root instead of the Astro build output.

---

## Stack (As of Session 4)

| Item | Spec (TFM_09) | Actual |
|---|---|---|
| Framework | Astro | Astro ✓ — 7 pages built |
| CSS | tokens.css (custom built) | tokens.css — imported via Layout.astro ✓ |
| Fonts | Self-hosted EB Garamond | Self-hosted from /fonts/ ✓ |
| JS | Astro + React islands | @astrojs/react — client:load for interactive components |
| Routing | Astro pages | Real URL routing ✓ |
| Deployment | Astro build → dist/ | dist/ output ready |
| Build command | npm run build | ✓ — 7 pages, clean build |
| Build output dir | dist/ | dist/ ✓ |

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `/` | Complete ✓ |
| Events | ✓ | ✓ | `/events` | Complete ✓ (mock data) |
| Roadmap | ✓ | ✓ | `/roadmap` | Complete ✓ |
| Vanguard | ✓ | ✓ | `/vanguard` | Complete ✓ — form needs Formspree ID |
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
| Cloudflare build config | Critical | Verify build command + output dir are set in dashboard if not done yet. |
| Formspree endpoint not wired | High | Replace `PLACEHOLDER` in `src/components/Vanguard.jsx` line 7 with real form ID. |
| No EIN / donate button disabled | High | Swap placeholder in `src/components/Donate.jsx` for Stripe/PayPal link once 501(c)(3) filed. |
| No email capture | High | Brevo integration never completed. Add to footer or hero. |
| Mock event data | Medium | EventsList.jsx has placeholder events. Replace before first Install Party. |
| No real RSVP backend | Medium | RsvpModal form goes nowhere. Needs Formspree or equivalent. |
| No EIN in footer | Medium | Add real EIN to Layout.astro footer once 501(c)(3) is filed. |
| assets/ at repo root | Low | Canonical location is public/assets/. Root assets/ can be deleted once confirmed. |
| _headers at repo root | Low | Canonical location is public/_headers. Root _headers can be deleted once confirmed. |

---

## What Comes Next (In Order)

1. Verify live site at techfreedomministries.com (confirm Cloudflare config is set)
2. Wire Formspree: replace `PLACEHOLDER` in `src/components/Vanguard.jsx` line 7
3. Wire donate button: swap placeholder for Stripe/PayPal link once EIN arrives
4. Add email capture (Brevo integration) — footer or hero
5. Replace mock event data with real first event
6. Wire RsvpModal to Formspree
7. Add EIN to footer once 501(c)(3) is filed
8. Delete legacy files: root assets/, root _headers (after confirming live site is clean)

---

*Last updated: 2026-05-18 — Session 4*
*Built by: Christopher Campbell + Claude (Anthropic)*
