---
target: roadmap page
total_score: 19
max_score: 28
na_heuristics: 5,9,10
p0_count: 1
p1_count: 0
timestamp: 2026-08-07T12-57-45Z
slug: src-pages-roadmap-astro
---
Method: dual-agent (A: a5b7769ea04e6ff40 · B: a8f707b31f432be84)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | `aria-expanded`, Read more/Collapse label, gilt hover, focus ring all present |
| 2 | Match System / Real World | 3 | Plain-language blurb leads before mythology name |
| 3 | User Control and Freedom | 2 | Close buttons top+bottom exist, but no Escape-key close and no click-outside-to-close — confirmed missing |
| 4 | Consistency and Standards | 4 | Identical panel structure (Movements/Costs/Milestones/scripture/CTA) across all 4 levels |
| 5 | Error Prevention | n/a | No inputs on this page |
| 6 | Recognition Rather Than Recall | 3 | Pattern repeats, learnable after level 1 |
| 7 | Flexibility and Efficiency | 2 | No deep-link to a specific level, no keyboard shortcut beyond Enter/Space |
| 8 | Aesthetic and Minimalist Design | 2 | Each expanded panel is very copy-dense — intentional per brand richness, real cost |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | n/a | Not applicable |
| **Total** | | **19/28** | **Acceptable (68%)** |

## Design Specificity Verdict

**LLM assessment**: Specific, not generic. The Gilded Spine system is applied with real discipline down to per-level detail panels with distinct copy, distinct scripture, distinct movement titles. This reads as authored, not templated.

**Deterministic scan**: `detect.mjs` returned 3 `side-tab` warnings on `Roadmap.jsx:179,559,1279` (`borderLeft: 3px solid`). **These are the same confirmed false positives found in the homepage pass** — DESIGN.md explicitly documents this exact pattern as the named "Marginalia Callout" component. No findings on `roadmap.astro`.

**Visual overlays**: this pass specifically re-verified the previously-fixed level-name bracket overflow bug across all 8 combinations (4 levels × 2 viewports), not just spot-checked. **Genuinely fixed at both breakpoints** — measured `scrollWidth === clientWidth` for every level name at both 1440px and 390px, with "The Great Commission" (the longest name) confirmed wrapping cleanly to two lines at mobile width without overflowing its bracket. The `.tfm-rm-unfurl` entrance animation was confirmed firing correctly on all 8 open actions. The gilt-edge hover shimmer was initially reported "inconclusive" by Assessment B because it checked the wrong pseudo-element (`::before` instead of `::after`) — **re-verified directly and confirmed working**: `filter: brightness(1)` at rest → `brightness(1.5)` on hover.

**Escape-key gap — confirmed by two independent methods, not just one.** Both a direct source-code check (`handleKeyDown` in `Roadmap.jsx:1551-1557` only handles `Enter`/`Space`; no `Escape` handling exists anywhere in the file) and a live behavioral Playwright test (panel `isVisible` state unchanged before/after pressing Escape, at both viewports) agree: pressing Escape while a panel is open does nothing.

## Overall Impression

The bracket-overflow fix from the prior session holds up under real scrutiny — this pass tested exactly the failure mode that broke twice before, at both viewports, and found it genuinely fixed rather than just less-bad. The site's real gap here is control, not content: five-section-long detail panels with no keyboard escape hatch is a real accessibility cost on the page with the site's densest reading material.

## What's Working

1. **The bracket fix is now verified solid, not just source-correct.** Two rounds of failed fixes in the prior session made this the single most scrutinized element on the site; this pass's 8-screenshot, both-viewport re-test found zero overflow anywhere.
2. **The emotional arc escalates correctly across all 4 levels, with one honest, deliberate dip.** L1 opens at real dread ("Your screen was watching you back") resolving to ownership; L2 intentionally steps down into warmth/community as post-crisis calm, not a flaw; L3 rebuilds into earned-status stakes; L4 peaks highest and shifts from personal to moral stakes — "Freedom kept to yourself is just a larger cell" is the strongest line on the page.
3. **AA-safe gold-muted variants are already correctly wired into the detail-panel labels** — the contrast issue noted as "open" in the project's own stale CLAUDE.md is confirmed resolved on this page specifically.

## Priority Issues

**[P0] No Escape-key or click-outside close on expanded panels**
Why it matters: confirmed by both source inspection and live behavioral test — pressing Escape does nothing. Each panel is 5+ sub-sections long; the only exits are two Close buttons. A keyboard user who opens a panel by accident, or wants to back out mid-scroll without hunting for the Close button, has no fast escape. This is the same pattern RsvpModal on the Events page already solved correctly with a real focus trap and Escape handling — Roadmap's panels are the more content-heavy case and currently have less control, not more.
Fix: add a document-level Escape listener while a panel is open, matching RsvpModal's existing pattern.
Suggested command: `/impeccable harden`

**[P2] No deep-link to a specific level's detail panel**
Why it matters: level-open state lives in `useState`, not the URL. A Vanguard can't send someone a link straight to a specific level's detail — undercuts the site's own graduate-recruits-graduate loop, where a specific level's story is often the exact thing worth sharing.
Fix: sync open-level state to a URL hash or query param.
Suggested command: `/impeccable harden`

**[P2] Animation scale mismatch between panel length and entrance motion**
Why it matters: `.tfm-rm-unfurl` fires once for the entire panel — all five sub-sections arrive together in one 620ms settle. For a panel this long, a single uniform entrance reads as a small motion cue attached to a disproportionately large content block.
Fix: consider whether the settle should apply only to the panel's leading edge/header, with content beneath appearing without its own motion — untested judgment call, not a confirmed defect.
Suggested command: `/impeccable animate`

**[P3] Mobile level-name font-size (28px) is larger than the post-fix desktop size (20px), a numeric inconsistency though not a functional bug**
Why it matters: `responsive.css:95` sets `.tfm-rm-level-name { font-size: 28px !important; }` under 768px, while the desktop fix that resolved the original overflow bug reduced desktop to 20px. This was flagged as a possible re-regression risk, but direct measurement at 390px confirmed all 4 names — including "The Great Commission" — wrap and contain cleanly with no overflow. Downgraded from a functional concern to cosmetic: the two breakpoints simply use different, not obviously coordinated, sizes.
Fix: optional — align the mobile size closer to the desktop fix's ratio if a visual pass finds the jump jarring, but no urgency.
Suggested command: `/impeccable typeset`

**[P3] "Click a card to expand it ↴" hint has no per-card echo after first interaction**
Why it matters: minor, one-time onboarding nicety.
Fix: low priority.
Suggested command: `/impeccable delight`

## Persona Red Flags

**Entry-point/secular visitor**: this standalone page is scripture-dense (Galatians 5:1, Genesis 1:28, Matthew 28:19, "Katecheo") with no Layer 2 toggle. PRODUCT.md's own rule — "never lead with scripture in secular contexts" — is at risk if this URL is shared outside a church-context funnel (e.g., a privacy-forum link straight to `/roadmap`).

**Sam (Accessibility-dependent)**: the confirmed Escape-key gap directly costs this persona — a keyboard-only user has no fast way out of a five-section panel besides tabbing all the way to a Close button.

## Minor Observations

- Diamond dividers between cards give good page rhythm.
- "Read more"/"Collapse" microcopy is precise, not generic ("view more").
- The Marginalia Callout, Stamp Frame, and Gilt Edge are used correctly per DESIGN.md's own naming — no drift found on this page (contrast with Oath's page-level Brackets-symmetry finding, which is a different component).
- A floating dark pill-shaped icon widget appeared in two of Assessment B's screenshots overlapping "The Catechism" card — independently confirmed as a browser-extension/devtools overlay artifact in the automated session, not a page element.

## Questions to Consider

1. Should the standalone Roadmap URL carry a secular-safe (Layer 2) reading mode, given it's the page most likely to be shared cold outside TFM's own funnel?
2. Is "one card open at a time" the right constraint, or would a visitor comparing Homestead vs. Great Commission commitment want both open side by side?
