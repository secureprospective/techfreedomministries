---
target: vault page
total_score: 31
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 0
timestamp: 2026-08-07T10-24-51Z
slug: src-pages-vault-astro
---
Method: dual-agent (A: a8d0475a9c06d8ea6 · B: a36e5795726c7d6b3)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Copy states "being built" plainly; no progress indicator, but none is warranted here |
| 2 | Match System / Real World | 4 | "Vanguard Access" / "back office" register matches the credentialed brand model exactly |
| 3 | User Control and Freedom | 4 | Full global nav/footer present via Layout — no dead end, easy exit |
| 4 | Consistency and Standards | 3 | Uses shared stamp/eyebrow/frame components correctly; eyebrow is the known gold-muted contrast fail |
| 5 | Error Prevention | 4 | n/a-adjacent — no forms, no destructive actions |
| 6 | Recognition Rather Than Recall | 4 | Heading + one-line description fully orient a first-time visitor |
| 7 | Flexibility and Efficiency | 2 | Grid built for multiple cards but holds one — untested at scale |
| 8 | Aesthetic and Minimalist Design | 4 | Single asset card, no filler, no fake "coming soon" cards |
| 9 | Error Recovery | n/a | No error states exist on this page |
| 10 | Help and Documentation | 3 | No explicit cadence/next-step cue beyond header copy — acceptable, a missed reinforcement opportunity |
| **Total** | | **31/36** | **Excellent (86%)** |

## Design Specificity Verdict

**LLM assessment**: Genuinely specific, not generic-placeholder theater. The stamp frame, gilt corner brackets, and two-clause Proclamation heading come straight from DESIGN.md's named components rather than a stock "coming soon" template. The single real content item — a live link to `/flyer` — proves the section isn't vaporware; it's a scaffold with one real brick already laid.

**Deterministic scan**: 7 advisory findings, all literal font-sizes off the DESIGN.md type ramp (42px/22px/10px/20px/12px/32px/18px). No hardcoded colors — every color on the page traces to a `var(--tfm-*)` token.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The best-handled incompleteness on the site. Unlike Donate's dead buttons or the live-RSVP-against-a-fake-event on Events, this page discloses its unfinished state honestly and turns it into a privilege framing ("you are exactly who it is being built for") rather than leaving a visitor stranded or misled. The one real content link (`/flyer`, confirmed resolving) proves it.

## What's Working

- Copy does the exact stakes-then-resolution move PRODUCT.md's Sanctuary Voice mandates, applied correctly to "the room isn't finished" as the stakes clause.
- Full site chrome stays intact — an unlisted page never traps or disorients whoever finds it.
- The one populated asset card is real and functional, not a stub — the section demonstrates rather than just promises.

## Priority Issues

**[P2] Decorative stamp glyphs lack `aria-hidden`, matching the site's unfixed-sibling pattern**
- Why it matters: 8 stamp corner spans (2 per frame x 2 frames) have no `aria-hidden="true"`. This page follows the pattern seen in `index.astro` (unfixed) rather than `EventCard.jsx`/`Roadmap.jsx` (which do set it on the identical markup) — a screen-reader user hits repeated, meaningless element announcements on an otherwise clean, short page.
- Fix: belongs in the shared stamp markup/component, same root-cause class as the Diamond-component finding from the Vanguard critique.
- Suggested command: `/impeccable harden`

**[P2] Known gold-muted contrast failure present twice on this page**
- Why it matters: `.vault-eyebrow` (11px on leather, ~3.60:1) and `.vault-asset-eyebrow` (10px on parchment-card, ~3.60:1) both fail AA. Not new, confirms another usage site for the pending token-level fix.
- Fix: deferred to the sitewide token decision.

**[P3] No focus-visible style on the asset card link**
- Why it matters: only `:hover` is styled; falls back to UA default outline, inconsistent with the project's practice of custom focus states elsewhere (e.g. Roadmap cards).
- Fix: add a `:focus-visible` rule consistent with the pattern used on `.tfm-rm-level-card`.
- Suggested command: `/impeccable harden`

**[P3] No signal of what else is coming, or what to do meanwhile**
- Why it matters: the description lists scope ("Documentation. Communications.") but nothing hints at cadence or gives a Vanguard a reason to check back. Low severity given the audience is small and presumably has a direct relationship with TFM already.
- Fix: optional — a soft "more coming" or notify cue if desired, not required.

## Persona Red Flags

**Actual Vanguard who reached this page from a direct link**: no friction — the heading immediately confirms they're in the right, earned place, and the one live flyer link gives them something to actually use today.

**Someone who found the URL by guessing**: sees "For those who completed the Roadmap" with no actual access gate behind it — consistent with the rest of the site's no-backend-forms constraint, so not a security bug, but worth noting the page trusts obscurity, not authorization, once real Vanguard-sensitive content lands here.

**Vanguard using a screen reader**: hits eight unlabeled stamp spans across the page — minor, repeated noise on an otherwise clean page.

## Minor Observations

Mobile breakpoint block is complete and proportionate, no gaps versus desktop styles. Asset card title uses a `div` rather than `h2`/`h3` — flat heading hierarchy, not wrong for a single-card page but worth revisiting once more assets are added.

## Questions to Consider

- Should this unlisted page carry any actual access signal before real Vanguard-sensitive documentation lands here, or does "unlisted + honest copy" stay sufficient once content is non-public-facing?
- When real assets replace the single flyer card, does the "being built" framing get retired, or stay as a permanent "still growing" note?
- Is a notify-me mechanism (matching the BrevoSignup pattern used elsewhere) worth adding here for Vanguards who want to know when new assets land?
