---
target: roadmap page
total_score: 20
max_score: 32
na_heuristics: 5,9
p0_count: 2
p1_count: 2
timestamp: 2026-08-07T10-16-04Z
slug: src-pages-roadmap-astro
---
Method: dual-agent (A: ac20aef5a214886e9 · B: a3d4e552e163c0c28)

## Fix Verification (2026-08-06 claimed fixes) — read this first

- **`role="button"` on level cards** — CONFIRMED (`Roadmap.jsx:1543`).
- **`aria-expanded`** — CONFIRMED (`Roadmap.jsx:1545`), plus `tabIndex` and Enter/Space `onKeyDown` handling.
- **`focus-visible` styling** — CONFIRMED, lives in `src/styles/accents.css:192-195`, correctly scoped.
- **Collapsed-card copy order (plain language before mythology)** — CONFIRMED (`Roadmap.jsx:1559-1572`).
- **Top-of-panel Collapse control** — CONFIRMED, `TopCollapse` present and wired in all four detail panels.
- **`aria-hidden` on decorative ◆ glyphs "sitewide"** — **PARTIAL, not sitewide.** 12 of 19 ◆ instances in Roadmap.jsx are hidden; **7 remain unhidden** as literal text inside content (`Roadmap.jsx:268,569,758,1094,1283,1450`, plus the dynamic `"◆ Collapse"/"◆ Read more"` toggle label at line 1610 — read aloud by screen readers on every card open/close). This matches what the Oath-page critique independently found for `Layout.astro`'s nav/colophon diamonds (also unhidden) — the "sitewide" claim in CLAUDE.md should be corrected, not repeated.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "Read more"/"Collapse" label toggles correctly |
| 2 | Match System / Real World | 4 | Sanctuary Voice + mythology land well |
| 3 | User Control and Freedom | 2 | Collapse controls exist but drop focus on close |
| 4 | Consistency and Standards | 3 | All 4 detail panels share identical structure/CSS |
| 5 | Error Prevention | n/a | No forms/inputs on this page |
| 6 | Recognition Rather Than Recall | 2 | Screen-reader users get zero preview content before opening a card |
| 7 | Flexibility and Efficiency | 3 | Click-anywhere-on-card is generous |
| 8 | Aesthetic and Minimalist Design | 3 | Dense but intentional; each panel has 6+ distinct block types |
| 9 | Error Recovery | n/a | No error states present |
| 10 | Help and Documentation | 3 | "Click a card to expand it" hint present |
| **Total** | | **20/32** | **Acceptable (63%)** |

## Design Specificity Verdict

**LLM assessment**: Executed with real conviction — leather/parchment/gilt system, Sanctuary Voice copy, and scripture-anchored structure consistently applied across all four level mythologies (Exodus, Catechism, Homestead, Great Commission). Not a generic template. Where it falls short is accessibility-vs-content parity and page-level structure — both invisible when this component was reviewed only as a homepage section.

**Deterministic scan**: 7 advisory findings — 3x "side-tab accent border" pattern (accepted per CLAUDE.md as the documented "Marginalia Callout," not a bug), 4x pre-existing `Layout.astro` drift (font-sizes, undocumented `#fff`). No accessibility findings from the detector itself (it's static-analysis only, doesn't check ARIA/focus). No false positives.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The prior accessibility fix cycle mostly held and is real work, not cosmetic — role/aria-expanded/focus-visible all verified live. But reviewing the page standalone (rather than embedded in the homepage) surfaces two things the earlier pass couldn't see: a missing page-level `<h1>`, and a content-parity gap where the collapsed-card `aria-label` override hides the exact preview content sighted users get for free.

## What's Working

- P0 keyboard/ARIA fix from 2026-08-06 verified live and holding across all four cards.
- Collapsed-card copy order (blurb first, mythology name second) verified correctly implemented per the Sanctuary Voice Layer-2 rule.
- Strong peak-end structure per level (stakes → cost/change → milestones → scripture → send-off), Sanctuary Voice holds throughout — no threat left unresolved.

## Priority Issues

**[P0] Roadmap has no `<h1>` as a standalone page**
- Why it matters: `roadmap.astro` renders only `<Layout><Roadmap client:load /></Layout>`; Layout.astro contributes no h1; Roadmap's top proclamation is hard-coded `as="h2"`. Correct when nested under the homepage's hero h1, but as a standalone page this leaves zero h1 in the document — an SEO and screen-reader-navigation gap the homepage-only review couldn't have caught.
- Fix: pass `as="h1"` conditionally when Roadmap renders as a standalone page, or give `roadmap.astro` its own h1 wrapper.
- Suggested command: `/impeccable harden`

**[P0] Collapsed cards give screen-reader users no preview content**
- Why it matters: `aria-label` on the `article[role=button]` (line 1546) overrides the accessible name for the entire subtree, so the blurb, steps, and callout — all visible to sighted users before they click — are never exposed to AT users before committing to open the panel. Sighted and non-sighted users get materially different information at the same interaction point.
- Fix: drop the blanket `aria-label`; let the accessible name include the visible text, or add `aria-describedby` pointing at the blurb/callout.
- Suggested command: `/impeccable harden`

**[P1] Closing a detail panel drops focus**
- Why it matters: both `TopCollapse` and the bottom Close button unmount the element that held focus (`openLevel=null`) with no focus management — a keyboard user closing a panel loses their place entirely, focus resets to `<body>`.
- Fix: on close, programmatically focus the originating card ref.
- Suggested command: `/impeccable harden`

**[P1] 7 decorative ◆ glyphs remain unhidden (correction to "sitewide" claim)**
- Why it matters: `Roadmap.jsx:268,569,758,1094,1283,1450,1610` — the toggle label instance (1610) is especially bad, read aloud on every card open/close. Combined with the Oath-page finding on Layout.astro's nav diamonds, this means the fix needs a real sitewide sweep, not another page-by-page patch.
- Fix: audit and add `aria-hidden="true"` to all remaining ◆ instances across the codebase in one pass, including this file and Layout.astro.
- Suggested command: `/impeccable harden`

**[P2] Detail panels have no internal heading structure**
- Why it matters: "The Three Movements," "What It Costs You," "The Five Milestones" are styled `<p>` eyebrow labels, not real headings, in ~2000-word panels — forces screen-reader users into linear reading with no way to jump between sections.
- Fix: promote section labels to real `<h3>` headings.
- Suggested command: `/impeccable harden`

**[P2] Known gold-muted contrast issue also fails against dark backgrounds**
- Why it matters: verified `--tfm-gold-muted` on `--tfm-leather` (#2A1F0E) ≈ 3.60:1, same failure class as the known parchment cases, and used 25 times in this file alone. Confirms the pending token-level fix needs to cover dark-background usages too, not just parchment.
- Fix: deferred to the sitewide token decision.

## Persona Red Flags

**Sam (Accessibility-Dependent)**: the `aria-label` content-suppression is the sharpest hit — Sam cannot preview any level before opening it, unlike every sighted visitor. Focus loss on close compounds this into a genuinely disorienting flow: open a card, read nothing in advance, close it, lose your place.

**First-time skeptic**: the missing page-level `<h1>` undermines credibility signals (SEO, "is this a real page") before content is even reached when Roadmap is visited directly rather than via the homepage.

## Minor Observations

`TopCollapse` uses an inline `rgba(196,168,74,0.4)` instead of a token — minor drift from the tokens.css-only styling rule. Bracket-box scripture citations repeat the ◆ glyph as a plain-text prefix rather than a separate `aria-hidden` span, inconsistent with the pattern used correctly elsewhere in the same file.

## Questions to Consider

- Should the collapsed card even need an `aria-label` override, or was it added defensively during the prior fix without checking what content it would hide?
- Given each detail panel is ~2000 words, would a full navigable route (`/roadmap/exodus` etc.) serve both SEO and AT users better than in-page expand/collapse?
- Should the decorative-glyph `aria-hidden` sweep be done as one sitewide pass now, given it's already been "claimed fixed" once and found incomplete twice (Oath, Roadmap)?
