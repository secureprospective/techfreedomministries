---
target: vanguard page
total_score: 23
max_score: 32
na_heuristics: 7,9
p0_count: 1
p1_count: 1
timestamp: 2026-08-07T10-20-40Z
slug: src-pages-vanguard-astro
---
Method: dual-agent (A: af04324324abc4053 · B: a36fdce512bc5b947)

## Root cause found for the recurring ◆ aria-hidden inconsistency

Both prior pages (Oath, Roadmap) found unhidden ◆ glyphs; this page traces the actual cause. The shared `<Diamond>` component (`src/components/Atoms.jsx:39-53`) never sets `aria-hidden` itself — every page that uses `<Diamond>` (4 instances here: hero dividers L168/189/190, ApplySection condition bullets L499) inherits the gap, while hand-written `<span aria-hidden="true">◆</span>` instances (L256, L348) are correctly hidden. **The fix belongs in the `Diamond` component definition, not in per-page patches** — that single change would resolve this class of finding across Oath, Roadmap, and Vanguard at once.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No hover/focus state on the two mailto CTAs beyond browser default; arrow icon gives no signal it opens a mail client |
| 2 | Match System / Real World | 4 | "Write to us," "one paragraph," oath language reads human, matches ministry register |
| 3 | User Control and Freedom | 3 | Linear one-way page; no way to preview the application email content before it launches |
| 4 | Consistency and Standards | 2 | Same mailto action labeled two different ways ("Write to us" vs. "Email to apply") |
| 5 | Error Prevention | 2 | No confirmation the reader's mail client is configured, no copyable-address fallback near the hero CTA |
| 6 | Recognition Rather Than Recall | 4 | Roadmap terms briefly reintroduced without forcing a trip back to /roadmap |
| 7 | Flexibility and Efficiency | n/a | Static marketing/CTA page, no power-user path applicable |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained, on-brand, no clutter |
| 9 | Error Recovery | n/a | No form/errors on this page (mailto only) |
| 10 | Help and Documentation | 2 | "How You Get Here" implicitly documents the process, but no link back to /roadmap for self-assessment |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict

**LLM assessment**: Concrete and enforceable — every measurement traces to tokens.css and Atoms.jsx (correct border-radius, correct 2px buttons, EB Garamond/Inter split honored). A real, buildable spec matching the Gilded Spine system faithfully, not vague "make it feel premium" territory.

**Deterministic scan**: 5 advisory findings, all pre-existing `Layout.astro` drift (4x font-size literals, 1x undocumented `#fff`). Zero findings in vanguard.astro/Vanguard.jsx — the detector's static color/font-size checks don't catch inline `style={{}}` objects in JSX, a likely coverage gap rather than evidence of cleanliness.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The strongest page critiqued so far — a real single h1, a clean concrete "How You Get Here" ladder, and honest empty-roster handling (no fabricated data). The gaps are about landing the page's emotional weight (it should feel like the peak of a four-level arc, and the hero undersells that) and small consistency/reassurance issues around the one real action on the page: emailing to apply.

## What's Working

- The four-step "How You Get Here" ladder is the clearest, most concrete answer to the near-graduate's actual question on the page.
- Credential stamp card (Brackets + Oath text) is a strong physical-object metaphor consistent with "Earned, never bought."
- Empty-roster conditional render correctly avoids fabricating data, matching the site's evidence-on-hand constraint.

## Priority Issues

**[P0] `<Diamond>` component itself never sets `aria-hidden` — root cause of a recurring sitewide finding**
- Why it matters: 4 unhidden instances on this page alone (hero dividers, ApplySection condition bullets); screen readers announce "diamond" or the raw glyph before every one of the page's own conversion CTA conditions. Same root cause behind the Oath and Roadmap findings.
- Fix: add `aria-hidden="true"` inside the `Diamond` component definition (`Atoms.jsx:39-53`) so every current and future usage inherits it — one fix resolves the pattern across all three pages at once, instead of patching call sites individually.
- Suggested command: `/impeccable harden`

**[P1] Duplicate CTA copy for the identical action**
- Why it matters: "Write to us" (hero) and "Email to apply" (apply section) both fire the exact same mailto link — a scrolling user may think these are two different actions or be unsure which is "the" apply step.
- Fix: pick one label ("Apply to Become a Vanguard" reads stronger) and reuse verbatim in both places.
- Suggested command: `/impeccable harden`

**[P2] Hero doesn't carry a named stakes clause, undercutting the peak-end arc**
- Why it matters: as the top of a four-level arc, this page should feel like the heaviest ask and the biggest payoff. Instead it opens ambiguous ("that debt has a name") with no stated stakes to resolve — the Sanctuary Voice threat-then-resolution shape every other page uses is absent here.
- Fix: name the actual stakes plainly in the hero (e.g. what happens if nobody in a city ever becomes a Vanguard — the loop doesn't scale, TFM stays centralized), then resolve to the existing "Vanguard is the second choice" line.
- Suggested command: `/impeccable polish`

**[P2] Mailto CTA has no pre-filled body matching what's promised**
- Why it matters: the apply section describes exactly what to write ("one paragraph... city, level status, room access") but this isn't pre-filled into the `mailto:` `body=` parameter — the actual email that opens doesn't match what was promised, and the persona most likely to click is someone ready to act immediately.
- Fix: populate the mailto `body=` parameter with a template matching the three requested fields.
- Suggested command: `/impeccable harden`

**[P3] No link back to /roadmap for self-assessment**
- Why it matters: step 1 says "Complete the Roadmap. All four levels" but gives no way to check status or navigate back — exactly the thing a borderline-eligible near-graduate wants to verify before emailing.
- Fix: make "the Roadmap" in step 1's body copy an inline link to `/roadmap`.
- Suggested command: `/impeccable clarify`

## Persona Red Flags

**Motivated near-graduate**: reassurance gap on the mailto flow (clicking launches a blank-template mail client, not the promised content); the one gating condition ("completed all four Roadmap levels") isn't visually distinguished from the other three equal-weight bullets in the apply checklist; "we respond within a week" reassurance only appears in the Path section, not near either CTA button.

## Minor Observations

Hero CTA has no `min-height`/touch-target rule at mobile, unlike the apply CTA which gets 44px — worth the same treatment for parity. Gold-muted appears on the leather background in ApplySection (known sitewide issue, not new — mostly decorative-divider usage here rather than text, so borderline on the 3:1 non-text threshold rather than clearly failing 4.5:1). The Oath quote inside the credential card presumably duplicates the one in Oath.jsx — worth confirming it's byte-identical since it's treated as fixed liturgical text.

## Questions to Consider

- If the hero doesn't name a stakes clause, is Vanguard actually landing as the emotional peak of the Roadmap arc, or does it read as a quieter "logistics" page that happens to come last?
- Two CTAs, one mailto action — intentional redundancy for scroll depth, or did the hero and apply sections get built independently without cross-checking?
- Given the ◆ aria-hidden gap traces to the shared Diamond component, should a full sitewide grep-and-fix pass happen now rather than continuing to find it page by page?
