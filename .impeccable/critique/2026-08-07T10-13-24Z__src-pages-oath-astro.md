---
target: oath page
total_score: 15
max_score: 24
na_heuristics: 1,5,7,9
p0_count: 0
p1_count: 3
timestamp: 2026-08-07T10-13-24Z
slug: src-pages-oath-astro
---
Method: dual-agent (A: a08815e2031fa8024 · B: aa404dc3ba051188a)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | Static page, no state |
| 2 | Match System / Real World | 4 | Oath/credential framing coherent and consistent with PRODUCT.md |
| 3 | User Control and Freedom | 1 | No back link, no nav context, no way to say "wait, what is this" |
| 4 | Consistency and Standards | 3 | Matches Atoms.jsx vocabulary; but the intro/orientation-sentence pattern every other page has is broken here |
| 5 | Error Prevention | n/a | No interactive input |
| 6 | Recognition Rather Than Recall | 2 | Assumes visitor already knows "Vanguard," "Level 4," "Roadmap card" — no gloss |
| 7 | Flexibility and Efficiency | n/a | No power-user path applicable |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely restrained, on-brand |
| 9 | Error Recovery | n/a | No errors possible |
| 10 | Help and Documentation | 1 | Nothing on-page explains what taking the Oath means or how a visitor gets there |
| **Total** | | **15/24** | **Acceptable (63%)** |

## Design Specificity Verdict

**LLM assessment**: Specific, not generic — the numbered-oath layout, italic serif line-numbers, and Brackets-framed credential card are unique to TFM's Gilded Spine vocabulary. But specificity in component choice doesn't cover specificity in page purpose: there's zero orienting copy, so a cold visitor can't tell this is meant to be a solemn credential artifact rather than random scripture.

**Deterministic scan**: 5 advisory findings, all pre-existing in `Layout.astro` (4x hardcoded font-size literals, 1x undocumented `#fff`). No findings in Oath.jsx/oath.astro itself. No false positives.

**Visual overlays**: Not available — no browser automation configured for this project.

**Correction to a prior session claim**: CLAUDE.md's 2026-08-06 notes state "`aria-hidden` on decorative ◆ glyphs sitewide" was fixed. Assessment B found this is not actually sitewide: `Layout.astro:50,59,94` — the colophon diamond and both nav-link diamond separators (header + footer) carry no `aria-hidden`, only `.tfm-spine`/`.tfm-ribbon` do. Screen readers announce "black diamond suit" 3+ times per page load on every page, including this one. Worth correcting the record rather than repeating the "sitewide" claim.

## Overall Impression

The oath text itself is genuinely strong Sanctuary Voice writing — five lines building sacrifice → teaching → ownership → grace → proof. But the page around it fails the people most likely to actually land here: it's reachable from every page's footer, has zero orientation copy, no exit CTA, and its last words are threat imagery ("yoke of slavery") rather than the resolution PRODUCT.md itself prescribes.

## What's Working

- The oath list (`Oath.jsx:20-26`) is well-written Sanctuary Voice — declarative, earned, no dread.
- Brackets + serif-numbered list is a distinctive, on-brand credential motif, not a generic pattern.
- Body oath-line text and citation contrast both pass AA comfortably (8.25:1 and higher).

## Priority Issues

**[P1] Page ends on threat language, not resolution**
- Why it matters: the closing quote line is "do not submit again to a yoke of slavery" — inverting PRODUCT.md's own Sanctuary Voice rule that scripture resolves, not threatens, and undercutting the agency the five oath lines just built. This is the peak-end moment of the page, and it lands on dread.
- Fix: either truncate the quote to the freedom clause only, or add one resolving beat after it pointing back to what the oath enables.
- Suggested command: `/impeccable polish`

**[P1] No orientation copy for a cold/secular visitor**
- Why it matters: nothing on the page states what the Oath is, who takes it, or that it's taken in person at Level 4. A visitor arriving via the footer link (present on every page) with zero Roadmap context lands directly in scripture-adjacent commitment language — highest risk on the site of reading as "this is a church site" rather than a tech-freedom nonprofit.
- Fix: one grounding sentence above or below the Proclamation, e.g. "Taken in person at Level 4, printed on your Roadmap card."
- Suggested command: `/impeccable clarify`

**[P1] Mobile Brackets padding has no responsive override**
- Why it matters: `Oath.jsx:19` sets `padding: 48px 56px` with no wrapping class/id, and responsive.css has no rule targeting it — every sibling page (Donate, About) drops bracket padding to 16px at ≤768px, Oath does neither. At a 375px viewport this leaves roughly 191px effective width for 19px italic serif oath lines.
- Fix: add an id/class to the Brackets wrap and a mobile padding override matching the established sitewide pattern.
- Suggested command: `/impeccable harden`

**[P2] Dead-end page, no exit CTA**
- Why it matters: no link back to `/roadmap` or `/vanguard` on the page itself, only the global footer nav — a motivated visitor who wants to know how to actually take the oath is stalled with no stated mechanism.
- Fix: a quiet text link under the Brackets card: "See the Roadmap that leads here."
- Suggested command: `/impeccable clarify`

**[P2] Sitewide decorative-glyph aria-hidden gap (correction to prior claim)**
- Why it matters: nav/colophon diamonds (`Layout.astro:50,59,94`) are not aria-hidden despite prior session notes claiming this was fixed sitewide — screen readers announce "black diamond suit" 3+ times per page load, on every page, not just Oath.
- Fix: add `aria-hidden="true"` to the colophon diamond and both nav-separator diamonds in Layout.astro.
- Suggested command: `/impeccable harden`

**[P3] Gold-deep numeral contrast (distinct from the tracked gold-muted issue)**
- Why it matters: `Oath.jsx:29` — oath line numerals in `--tfm-gold-deep` (#8B6914) on parchment-card (#ECE6D6) measure 4.08:1, failing AA's 4.5:1 threshold for this 18px italic regular-weight text (too small/light to qualify for the 3:1 large-text exception). This is a different token than the known gold-muted issue.
- Fix: darken the numeral color slightly or bump weight/size to qualify for the large-text threshold.

**[P3] Missing h1**
- Why it matters: page opens at `<Proclamation as="h2">`; no h1 anywhere in the render tree.
- Fix: promote to h1 or add a visually-hidden one matching `<title>`.

## Persona Red Flags

**Jordan (Secular First-Timer)**: Lands via the footer "The Oath" link with zero context, reads a five-line religious-adjacent commitment ending in "yoke of slavery," and has no stated next action — highest risk of feeling this is a church site rather than a tech-freedom nonprofit.

**The motivated near-Vanguard visitor**: gets no confirmation of *how* to actually take the oath — the page reads the oath but never states the in-person mechanism, so someone ready to commit is stalled with no next step.

## Minor Observations

Known sitewide gold-muted issue also present in the Eyebrow default here. No signing/acceptance mechanism exists on the page at all — it's purely static text framed as something to "take," which is intentional (in-person ritual) but worth confirming that's still the model.

## Questions to Consider

- Should the Galatians quote be trimmed to just the freedom clause, given the site's own stated rule that scripture must land at resolution, not threat?
- If a secular visitor is one footer-click away from this page on every single page of the site, does the three-layer brand model need an explicit rule for pages reachable from every layer?
- Is the "read it before you take it, in person" framing still the intended model, or should the page state the in-person mechanism explicitly?
