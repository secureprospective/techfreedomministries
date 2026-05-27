# TFM_10 — BUILD STATE
*Live project status. Read this at the start of every website build session. Update it at the end.*

For the target spec, see TFM_09_WEBSITE_BUILD.md.
For session start protocol and branch rules, see CLAUDE.md at the repo root.
Full session history is in git log.

---

## Current Build State

**Last updated:** 2026-05-24 — Session 9 (Studio component redesigns + mobile responsiveness)

**Live URL:** https://techfreedomministries.org
**Redirect:** techfreedomministries.com → techfreedomministries.org (301, all variants — naked + www)
**Repo:** https://github.com/secureprospective/techfreedomministries
**Active branch:** main
**Deployment:** Cloudflare Pages — auto-deploys on every push to main

---

## Stack (As of Session 9)

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
| Formspree | Vanguard application form | ⚠️ REPLACED — Vanguard now uses email CTA (vanguard@techfreedomministries.com). Formspree endpoint mvzyorgw no longer active in the UI. |
| Brevo | Email capture (footer) | Live — list ID 3, env vars in Cloudflare ✓ |
| Node version | Pinned | .nvmrc → 20 ✓ |
| Domain | techfreedomministries.org | .com redirects 301 to .org — all variants ✓ |

---

## Pages Built vs. Spec

| Page | TFM_09 Spec | Built | Route | Status |
|---|---|---|---|---|
| Home | ✓ | ✓ | `/` | Complete ✓ — mobile responsive |
| Events | ✓ | ✓ | `/events` | Placeholder ✓ — real data TBD |
| Roadmap | ✓ | ✓ | `/roadmap` | Complete ✓ — mobile responsive |
| Vanguard | ✓ | ✓ | `/vanguard` | Complete ✓ — Studio redesign, email CTA |
| Donate | ✓ | ✓ | `/donate` | Complete ✓ — Studio redesign, button placeholder until EIN |
| The Oath | Not in spec | ✓ | `/oath` | Built (not in nav) |
| About | Not in spec | ✓ | `/about` | Complete ✓ |

---

## Navigation (As Built)

`EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE` — per TFM_09 spec.

Mobile nav: logo mark (tfm-logo-on-white-zero.png) left, four links right, diamonds hidden, CTA hidden.

The Oath and About exist at `/oath` and `/about` but are not in the main nav.

---

## Session 9 — What Changed

**Studio component redesigns (two-AI loop: Claude.ai visual direction + Claude Code implementation):**

Hero.jsx — full replacement:
- Two-column flex layout: HeroLeft (copy) + HeroRight (dark bg, logo, Brackets scripture stamp)
- Eyebrow: gold rule span + mixed-case statement ("Your laptop. Their data. Not for long.")
- Logo: tfm-logo-on-dark.png, data-tfm-animate="dissolution" (Three.js hook — implementation deferred)
- MOBILE_STYLES const: flex-direction column, padding collapse, h1 → 32px, CTA buttons stacked

Vanguard.jsx — full replacement:
- Dark leather hero section with credential stamp (Brackets component)
- "What Vanguard Means" — three numbered gilt-edge cards
- "How You Get Here" — four numbered steps list
- Conditional roster grid (ROSTER array — hidden until populated)
- Dark leather Apply section with conditions list + email CTA
- **Formspree application form removed** — replaced by mailto: vanguard@techfreedomministries.com
- zIndex: 0 on s.page (stacking context fix for sticky header)

Donate.jsx — full replacement:
- Six-section layout: Hero, LoopSection, HardwareSection, CashSection, NotDoingSection, CloseSection
- Hardware-first hierarchy throughout all sections
- TODO: STRIPE markers on all three cash tier buttons
- TODO: 501C3 disclosure block pending EIN
- zIndex: 0 on outermost div (stacking context fix for sticky header)

EventCard.jsx — redesign with mobile className hooks:
- className="tfm-ec-grid" — three-column grid with mobile collapse
- className="tfm-ec-date" — date stamp with mobile horizontal reflow
- className="tfm-ec-day" — day number with mobile font-size override
- className="tfm-ec-action" — RSVP button full-width on mobile

Roadmap.jsx — redesign with mobile className hooks:
- className="tfm-rm-level-card" — three-column grid with mobile single-column collapse
- className="tfm-rm-level-name" — level name with mobile font-size override
- className="tfm-rm-callout" — completion callout maintained full-width

**Mobile responsiveness pass:**

Layout.astro additions:
- Mobile nav CSS block: header fixed, logo mark shown, ornament/wordmark hidden, nav compact row, CTA hidden, body offset 48px
- `<img class="header-logo-mark" />` added as first child of .colophon-link
- Mobile logo: tfm-logo-on-white-zero.png (new asset, copied to public/assets/)
- Footer mobile CSS: single column, centered, tighter padding
- `overflow-x: hidden` moved from `body` to `html` (fixes position: sticky clipping on Vanguard/Donate)

index.astro:
- `.explainer-steps` — `grid-template-columns: 1fr` at max-width: 768px

New asset: `public/assets/tfm-logo-on-white-zero.png`

---

## Session 8 — What Changed

**Gilded Spine theme (two-AI loop: Claude.ai visual direction + Claude Code implementation):**

Accent system — `src/styles/accents.css` (new file):
- `.tfm-ledger-rule`, `.tfm-ref-mark`, `.tfm-stamp` / corner span system, `.tfm-gilt-edge`

Signature elements:
- Dark leather header, colophon (Cinzel 20px), crimson ribbon bookmark, gold spine strip

Extended theme: hemp texture, gilt card edges, Brackets credential frame, level callouts

New tokens: `--tfm-leather`, `--tfm-leather-mid`, `--tfm-crimson`, `--tfm-crimson-deep`, `--tfm-gilt`, `--tfm-gilt-deep`, `--tfm-cinzel`

New doc: `docs/TFM_11_BIBLE_THEME.md` — canonical Gilded Spine theme record

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

Hardware feeds all four Roadmap levels, not just Level 1.
Contact for hardware donations: techfreedomministries@proton.me

---

## Known Issues

| Issue | Priority | Detail |
|---|---|---|
| No EIN / donate button disabled | High | TODO: STRIPE markers in `src/components/Donate.jsx` — swap for Stripe/PayPal once 501(c)(3) filed. |
| Install Party details TBD | High | `src/components/EventsList.jsx` — replace TBD fields with real date, venue, city before launch. |
| Vanguard application — email only | High | Formspree form (mvzyorgw) removed in Studio redesign. Now mailto: vanguard@techfreedomministries.com. Re-wire to Formspree if form submission tracking is needed. |
| No real RSVP backend | ~~Medium~~ | COMPLETE — RsvpModal wired to Formspree endpoint mvzyorgw. Async POST, submitting/error states, step 2 on success. |
| Brevo API key exposed in bundle | ~~Medium~~ | CLOSED — Brevo working correctly in production. No further action. |
| No EIN in footer | Medium | Add real EIN to Layout.astro footer once 501(c)(3) is filed. |
| Mobile — remaining pages | ~~Medium~~ | COMPLETE — Vanguard and Donate mobile hooks wired in responsive.css (tfm-vg-*, tfm-dn-*). |
| Cinzel font (Google CDN) | ~~Low~~ | COMPLETE — Self-hosted. Cinzel v26 latin + latin-ext woff2 in public/fonts/. Google Fonts links removed from Layout.astro. |
| assets/ at repo root | Low | Canonical location is public/assets/. Root assets/ can be deleted once confirmed. |
| _headers at repo root | Low | Canonical location is public/_headers. Root _headers can be deleted once confirmed. |

---

## What Comes Next (In Order)

1. Fill in Install Party details in `src/components/EventsList.jsx` (date, venue, city)
2. ~~Mobile pass — Vanguard and Donate page sections~~ — COMPLETE
3. Re-wire Vanguard application to Formspree (or confirm email-only is intentional)
4. ~~Wire RsvpModal to Formspree~~ — COMPLETE (endpoint mvzyorgw)
5. Security upgrade session — move Brevo API key behind Cloudflare Pages Function
6. Wire donate button — swap TODO: STRIPE placeholders once EIN arrives
7. Add EIN to footer once 501(c)(3) is filed
8. Delete legacy files: root assets/, root _headers (after confirming live site is clean)

---

*Last updated: 2026-05-24 — Session 9*
*Built by: Christopher Campbell + Claude (Anthropic)*
