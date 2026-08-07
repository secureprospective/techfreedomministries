---
target: oath page
total_score: 17
max_score: 20
na_heuristics: 1,3,5,7,9
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T12-52-09Z
slug: src-pages-oath-astro
---
Method: dual-agent (A: a2ae43aed60bec138 · B: a68f9e71bb661c022)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | Read/Experience-mode page, no state to report |
| 2 | Match System / Real World | 4 | Oath/credential language, in-person framing, printed-card callback |
| 3 | User Control and Freedom | n/a | One exit link, no traps |
| 4 | Consistency and Standards | 3 | Proclamation/Eyebrow/Rule correct; Brackets symmetry violates the documented Stamp Frame asymmetry rule |
| 5 | Error Prevention | n/a | No forms or destructive actions |
| 6 | Recognition Rather Than Recall | 3 | Grounding sentence answers "what is this" without forcing recall of prior pages |
| 7 | Flexibility and Efficiency | n/a | Not applicable to a ceremony/read page |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained, no decoration beyond the system's own vocabulary |
| 9 | Error Recovery | n/a | No error states possible |
| 10 | Help and Documentation | 3 | One explanatory link exists but sits after all the jargon, not before |
| **Total** | | **17/20** | **Good (85%)** |

## Design Specificity Verdict

**LLM assessment**: Specific, with one real system violation. `Proclamation`, `Eyebrow` (correctly on the AA-safe `-on-light` token), and the numbered-oath-as-credential layout are genuinely bespoke. But the `Brackets` component (`Atoms.jsx:220-241`) draws all four corners symmetrically — verified directly in code: each corner gets two bordered sides (top+left, top+right, bottom+left, bottom+right), a fully symmetric frame. DESIGN.md's Stamp Frame rule mandates diagonal asymmetry (top-left + bottom-right only) as "a deliberate, repeatable signature... do not make it symmetric." This is not unique to Oath — `Brackets` is used sitewide (Hero's Galatians quote box, Roadmap level-name boxes, Donate) — but Oath's central credential surface is the single place where the violation matters most, since it's the page most explicitly claiming to be a credential.

**Deterministic scan**: `detect.mjs` returned zero findings on both files, independently re-run and confirmed not a silent failure.

**Visual overlays**: no text overflow, clipping, or overlap at either viewport (confirmed via programmatic `scrollWidth` check across all `#oath` descendants). The `.tfm-ink-link` underline draw-in on the closing "See the Roadmap" link is confirmed functional via computed style (`backgroundSize` 0%→100% on hover). **The mobile-padding gap was independently confirmed by both assessments with hard measurements**: the outer `#oath` section keeps its desktop `96px 36px` padding unchanged at 390px width (`Oath.jsx:6`, no mobile override exists in `responsive.css`), while only the inner Brackets box drops from 28px to 16px padding. Measured effect: the Brackets box occupies 92% of section width at desktop but only 82% at mobile, causing extra line-wrapping in the oath text without overflow. One apparent visual overlap (sticky nav over oath line 04) was caught and correctly ruled out as a Playwright `fullPage` screenshot-stitching artifact, not a live bug — confirmed clean on a real in-viewport screenshot.

## Overall Impression

This page does the hardest job on the site — making a religious pledge read as dignified ceremony rather than either dread or kitsch — and it succeeds. The recent edits (grounding sentence, scripture trim, exit link) all land exactly as intended. The two real issues are structural, not tonal: a design-system inconsistency in the bracket component that undercuts the one moment the site most wants to feel like an issued credential, and a genuine gap where cold, secular visitors hit unglossed insider vocabulary (Vanguard, Level 4, Roadmap card) before the one link that could orient them.

## What's Working

1. **The grounding sentence does exactly its job**: plain, undramatic, answers "why am I reading a printed pledge" in one clause, placed before the oath rather than buried after.
2. **The oath text itself is genuinely earned-sounding**: "I will not speak ill of those still inside the system; I was inside it once" is Sanctuary Voice at its best — no dread, no sanctimony.
3. **The scripture trim was judged correctly**: cutting the "yoke of slavery" clause removes the one line that would have re-introduced threat language exactly where the page needs to land the reader in resolution.

## Priority Issues

**[P1] `Brackets` component is fully symmetric, violating the documented Stamp Frame asymmetry rule**
Why it matters: DESIGN.md explicitly calls the diagonal top-left/bottom-right asymmetry "a deliberate, repeatable signature — do not make it symmetric," and this is Oath's central credential surface, the page most explicitly claiming to be an issued document. Since `Brackets` is used sitewide, this is a system-level inconsistency, not an Oath-only bug.
Fix: either give `Brackets` the same diagonal-asymmetry logic as `.tfm-stamp`/`.tfm-stamp--light`, or swap Oath's credential box specifically to use the stamp classes instead.
Suggested command: `/impeccable polish`

**[P1] Jargon appears before the one link that could orient a cold visitor**
Why it matters: "Vanguard," "Level 4," and "Roadmap card" all appear in the h1/eyebrow/first paragraph before the explanatory exit link, which sits at the very bottom after the full oath. A secular/skeptical visitor arriving cold via search has no forward path until they've already read past every term they don't recognize.
Fix: consider a lightweight link or gloss near the top, not only at the bottom.
Suggested command: `/impeccable clarify`

**[P2] Outer `#oath` section has no mobile padding rule while the inner Brackets box does**
Why it matters: confirmed by measurement — at 390px width the section keeps 96px/36px padding unchanged while the inner box drops to 16px, so the credential box compresses disproportionately relative to its frame (92%→82% of section width), causing extra line-wrapping in the oath text. Visually the "important object" shrinks more than the space around it, weakening exactly the object that's supposed to read as issued/earned.
Fix: add a `#oath`-scoped rule in `responsive.css`'s mobile block, matching the pattern already used for About/Donate (`padding: 40px 16px !important` or similar), so outer and inner compression scale together.
Suggested command: `/impeccable adapt`

**[P3] Exit link copy front-loads "Roadmap" rather than framing it as "what this means"**
Why it matters: minor, but for the cold-visitor case above, even the escape hatch uses insider vocabulary.
Fix: low priority, consider alongside the P1 jargon fix.
Suggested command: `/impeccable clarify`

## Persona Red Flags

**Secular/skeptical cold visitor via search**: lands on a page titled "Vanguard Oath," reads "Level 4," "Roadmap card," and "Vanguard" before any link exists to explain the system. Real risk of bounce before the payoff paragraph.

**Mobile ceremony reader**: per the confirmed P2 above, the credential surface compresses disproportionately to its frame at mobile width — the object meant to read as most important shrinks more than the space around it.

**Someone who scrolls straight to the bottom**: the scripture-then-exit sequence assumes the reader arrived via the full read; skip-scrollers get scripture with zero setup and an exit link with zero framing.

## Minor Observations

- `Eyebrow`'s inline `style={{display:"inline-block"}}` is redundant since it's already block-centered by its parent's `text-align: center` — harmless, no action needed.
- Both assessments independently caught and correctly dismissed a false "overlap" finding caused by Playwright's `fullPage` screenshot-stitching interacting with the sticky header — good example of verifying a visual claim against a real in-viewport capture before reporting it as a bug.

## Questions to Consider

1. Should the "See the Roadmap" link (or a lighter version) also live near the top, so a cold visitor gets an out before committing to five oath lines they can't yet contextualize?
2. Is the symmetric `Brackets` component actually a second, intentional bracket language distinct from `.tfm-stamp` — or is it drift that should be unified sitewide, not just fixed locally on Oath?
