---
target: homepage
total_score: 19
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 1
p1_count: 1
timestamp: 2026-08-07T12-35-17Z
slug: src-pages-index-astro
---
Method: dual-agent (A: af035b62ab9d21a5f · B: a27a8f768da93f30f)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | `aria-expanded` + Read more/Collapse label is solid; no other status needed on a static page |
| 2 | Match System / Real World | 4 | Leather/parchment/gilt metaphor is literal and airtight |
| 3 | User Control and Freedom | 3 | Good Collapse/Close on detail panels; no way to jump between levels without re-scrolling |
| 4 | Consistency and Standards | 3 | Gilt-edge hover `box-shadow` (accents.css) contradicts DESIGN.md's own No-Shadow Rule |
| 5 | Error Prevention | n/a | No forms or destructive actions on this page |
| 6 | Recognition Rather Than Recall | 4 | Blurb-first, mythology-name-second ordering in `LevelCard` is a deliberate correct fix |
| 7 | Flexibility and Efficiency | n/a | Marketing page, no power-user paths to optimize |
| 8 | Aesthetic and Minimalist Design | 2 | Full Roadmap detail content (4 panels, ~2000+ words) duplicated onto the homepage |
| 9 | Error Recovery | n/a | No error states present |
| 10 | Help and Documentation | n/a | Not that kind of interface |
| **Total** | | **19/24** | **Good (79%)** |

## Design Specificity Verdict

**LLM assessment**: Authored, not generic, by a wide margin. The Roadmap detail panels use invented, load-bearing vocabulary tied to real product mechanics (Katecheo, the Eviction, the Red Sea, the Freeman's Commission) no template could produce by accident. The Gilded Spine system (gilt edges, stamp brackets, marginalia callouts, diamond marks) is applied consistently down to hover states.

**Deterministic scan**: `detect.mjs` on `src/pages/index.astro` found 4 `design-system-font-size` advisory findings — genuine off-ramp sizes not in DESIGN.md's documented 48/36/26/15/11px type scale: `.step-copy strong` (16px, line 145), `.cta-headline` (38px, line 178), `.cta-btn-primary`/`.cta-btn-ghost` (13px, lines 208/223). On `Hero.jsx`/`Roadmap.jsx`, 3 `side-tab` warnings for `borderLeft: 3px solid` (Roadmap.jsx:179,559,1279) are **false positives** — DESIGN.md explicitly documents this exact pattern as the named "Marginalia Callout" component; the detector's generic heuristic doesn't know the site-specific exception.

**Visual overlays**: Playwright confirmed no text overflow, clipping, or overlap at desktop (1440x900) or mobile (390x844). All four new animations were checked live: hemp-sweep confirmed firing (`animationName: tfm-hemp-sweep`, `5.1s`), gilt-edge hover glow confirmed strengthening on the Roadmap cards, `.tfm-rm-unfurl` confirmed firing correctly on card-open (`0.62s`, resolves clean). `.tfm-ink-link` could not be verified on this page — those elements only exist in Vanguard/Oath/About, none of which render on the homepage; not a defect, just untestable from this target.

## Overall Impression

The site's writing and visual system are genuinely distinctive — this doesn't read as an interchangeable nonprofit template. The one real structural problem is that the homepage has become a second copy of the Roadmap page: all four expanded detail panels, complete with scripture and milestone grids, render in full via `<Roadmap client:load />`. That's a lot of depth in front of a first-time visitor before they ever reach a CTA. The new animation pass lands well on its own merits, with one design-system rule violated in the process (a box-shadow where the system says never to use one).

## What's Working

1. **Roadmap mythology copy** is the site's best asset — Katecheo, the Eviction, the Freeman's Commission genuinely couldn't be reused by a competitor.
2. **Sanctuary Voice discipline holds** on this page: every stakes clause resolves to ownership/agency; no unresolved dread anywhere in the scroll.
3. **The new hemp-sweep and unfurl animations both land** — one-time, respects reduced-motion, doesn't compete with content, reads as "the cover catching light" rather than decoration.

## Priority Issues

**[P0] Homepage duplicates the full Roadmap page**
Why it matters: buries the CTA under ~2000+ words of optional-depth content (four expanded panels with scripture, milestones, cost/change grids) before a first-timer has decided to trust the org. Fails the cognitive-load "single focus" and "working memory" checks — a visitor is asked to hold four ~500-word mythologized narratives before reaching donate.
Fix: homepage shows collapsed cards only (or a 1-2 sentence teaser); full detail panels live solely on `/roadmap`.
Suggested command: `/impeccable distill`

**[P1] Gilt-edge hover shimmer uses `box-shadow`, violating the documented No-Shadow Rule**
Why it matters: DESIGN.md states this as non-negotiable ("Never add box-shadow for elevation... this system is flat by design"). The recent animation pass added `box-shadow: 0 0 8px rgba(196,168,74,0.55)` to `.tfm-gilt-edge:hover::after` in `accents.css` — a real, unintentional system drift, not an approved exception.
Fix: drop the box-shadow line, keep only `filter: brightness()` and the width change for the hover state.
Suggested command: `/impeccable polish`

**[P2] "How It Works" explainer reads generic next to the Roadmap section**
Why it matters: "Three steps. One direction." sits one scroll below the richly mythologized Roadmap section — a specificity gap on the same page.
Fix: cut the explainer (Roadmap already covers this ground) or tie its language to the Gilded Spine metaphor.
Suggested command: `/impeccable distill`

**[P2] Two near-black primary CTA buttons compete for attention**
Why it matters: Hero's "Find an event" and the CTA band's "Donate hardware" are both full-weight primary buttons, diluting which action matters most on a first visit.
Fix: demote one to ghost/secondary treatment based on which conversion the homepage should actually optimize for.
Suggested command: `/impeccable layout`

**[P3] Four off-ramp font sizes not in the documented type scale**
Why it matters: `.step-copy strong` (16px), `.cta-headline` (38px), `.cta-btn-primary`/`.cta-btn-ghost` (13px) all deviate from DESIGN.md's 48/36/26/15/11px ramp — minor system drift.
Fix: snap to the nearest documented step or formally add these as new ramp values if they're intentional.
Suggested command: `/impeccable typeset`

## Persona Red Flags

**Jordan (First-Timer)**: Risk of reading the site as more overtly religious/intense than intended before understanding the three-layer voice model — a homepage-embedded Genesis/Matthew/Luke-heavy panel set front-loads Layer 1/3 content onto what should be a Layer 2-safe entry point.

**Sam (Accessibility-Dependent)**: Mechanically well-served — real `role="button"`, `aria-expanded`, keyboard handlers, focus-visible ring all present. The real cost is the P0 above: a screen-reader user must traverse the longest content on the page to get past it before reaching the CTA.

**Casey (Mobile)**: Handled correctly — `responsive.css` collapses the level-card grid, hero, and explainer cleanly, confirmed via Playwright screenshot at 390x844 with no overflow. Flagging only because it proves the P0/P1 issues are content and system-discipline problems, not layout ones.

## Minor Observations

- `hasDetail = true` is hardcoded in `LevelCard` (Roadmap.jsx) — dead conditional, no functional issue, just leftover flexibility that's never exercised.
- The explainer section's `border-top` divider right after Hero, with no matching space above the Roadmap eyebrow, makes section rhythm slightly uneven.
- `.tfm-ink-link` (the new ink-catch underline) isn't reachable from the homepage at all — worth checking on About/Vanguard/Oath directly in this same critique pass.

## Questions to Consider

1. If the Roadmap detail panels are the site's richest writing, why are they buried behind a click on the homepage instead of being the reason someone stays on `/roadmap` longer?
2. Is embedding all four levels' full scripture-and-mythology narrative on the homepage actually serving Layer 2 (secular/privacy) visitors, or is it optimized for Layer 3 readers who already believe?
3. The No-Shadow Rule is stated as non-negotiable in DESIGN.md — was the gilt-edge hover glow an approved exception, or accidental drift that should be corrected before it spreads to other components?
