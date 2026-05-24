# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-24 — Session 8 (Gilded Spine theme + accent system)

**Live URL:** https://techfreedomministries.org
**Redirect:** techfreedomministries.com → techfreedomministries.org (301, all variants — naked + www)
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** main (session/styling-pass merged)
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Stack (As of Session 7)

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
| Node version | Pinned | .nvmrc → 20 ✓ |
| Domain | techfreedomministries.org | .com redirects 301 to .org — all variants ✓ |

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `/` | Complete ✓ — copy locked, narrative pass done |
| Events | ✓ | ✓ | `/events` | Placeholder ✓ — real data TBD |
| Roadmap | ✓ | ✓ | `/roadmap` | Complete ✓ — copy locked, narrative pass done |
| Vanguard | ✓ | ✓ | `/vanguard` | Complete ✓ — Formspree live, copy locked |
| Donate | ✓ | ✓ | `/donate` | Complete ✓ — hardware-first restructure, button placeholder until EIN |
| The Oath | Not in spec | ✓ | `/oath` | Built (not in nav) |
| About | Not in spec | ✓ | `/about` | Complete ✓ — copy locked |

---

## Navigation (As Built)

`EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE` — per TFM_09 spec.

The Oath and About exist at `/oath` and `/about` but are not in the main nav.

---

## Session 8 — What Changed

**Gilded Spine theme (two-AI loop: Claude.ai visual direction + Claude Code implementation):**

Accent system — `src/styles/accents.css` (new file):
- `.tfm-ledger-rule` — 1px parchment-edge rule under all section-opening H2s
- `.tfm-ref-mark` — ◆ glyph before doctrinal content (Galatians, Oath)
- `.tfm-stamp` / corner span system — 4-corner certification frame
- `.tfm-gilt-edge` — gold gradient right edge on all cards

Signature elements:
- Dark leather header (`#2A1F0E`) with crosshatch texture and gold seam border
- Colophon: fading gold rules ◆ rules + "TECH FREEDOM MINISTRIES" in Cinzel (20px)
- Crimson ribbon bookmark — fixed right edge, 216px, pointed bottom, scrolls fixed
- Gold spine strip — fixed left edge, full viewport height, gold gradient

Extended theme:
- Hemp page texture on body (barely-visible woven grid)
- Gilt edge on all Card components + Roadmap level articles
- Vanguard "What You Get" — Brackets component with gold border (credential frame)
- Roadmap level callouts — one per level, bold italic declarative copy in level color
- Roadmap + Atoms.jsx: `Proclamation` now accepts `className` prop

New tokens: `--tfm-leather`, `--tfm-leather-mid`, `--tfm-crimson`, `--tfm-crimson-deep`, `--tfm-gilt`, `--tfm-gilt-deep`, `--tfm-cinzel`

New doc: `docs/TFM_11_BIBLE_THEME.md` — canonical Gilded Spine theme record

---

## Session 7 — What Changed

**Copy rewrite (Claude.ai loop — one page, one commit):**
- Home: CTA button order, email capture headline, debug label removed
- About: new headline, body, both card lists (layer jargon removed, plain language)
- Roadmap: hero body split, Level 2 milestones rewritten as skills, Level 4 close tightened
- Vanguard: hero body, Level 3 gate moved to card, button label, cards cleaned
- Donate: full restructure — hardware-first hierarchy, 6-tier hardware list with specs, SBCs added, impact block, stakes-first body

**Narrative pass (hardware donation loop woven through all pages):**
- Home Step 1: "Bring your laptop" → conditional offer, hardware pool mentioned
- Home CTA band: body added (hardware-first ask), CTAs route to donate anchors
- Roadmap Level 1: donation chain acknowledged in the promise
- Roadmap Level 3: TFM hardware pool mentioned for home server builds
- Vanguard What You Get: hardware coordination support added as item 4

**Em dash purge:**
- 13 instances removed from visitor-facing copy across 6 files
- Left unchanged: Galatians attribution, What TFM Isn't bullet marker, page title tags

---

## Hardware Donation Strategy (Session 7 — Key Context)

The primary ask is hardware, not cash. Hardware enables the conditional promise:
"We can't give free laptops without your generosity."

The self-feeding loop:
1. Donor gives obsolete hardware
2. TFM runs Install Party — "free laptop for your time and attention"
3. Student follows the Roadmap
4. Student becomes a Vanguard, runs their own events
5. Those events need hardware — loop restarts

Hardware feeds all four Roadmap levels, not just Level 1:
- Level 1: The donated machine someone leaves with
- Level 2: The terminal they learn on
- Level 3: The home server built from donated SBCs/mini PCs
- Level 4: The machines a Vanguard needs to run their own Exodus event

Contact for hardware donations: techfreedomministries@proton.me

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

*Last updated: 2026-05-24 — Session 7*
*Built by: Christopher Campbell + Claude (Anthropic)*
