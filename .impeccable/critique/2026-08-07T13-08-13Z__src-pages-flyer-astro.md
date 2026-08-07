---
target: flyer page
total_score: 14
max_score: 16
na_heuristics: 1,3,5,6,7,9
p0_count: 2
p1_count: 2
timestamp: 2026-08-07T13-08-13Z
slug: src-pages-flyer-astro
---
Method: dual-agent (A: a57652d123c39a9c7 · B: a839f00ce744b89d0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | Static print artifact, no live state beyond the one button |
| 2 | Match System / Real World | 4 | Leather/parchment/field-manual metaphor is coherent and intentional |
| 3 | User Control and Freedom | n/a | Not applicable to a print artifact |
| 4 | Consistency and Standards | 3 | Matches site's visual tokens but reimplements them as hardcoded hex rather than sharing `tokens.css` — see Priority Issues |
| 5 | Error Prevention | n/a | Not applicable |
| 6 | Recognition Rather Than Recall | n/a | Not applicable |
| 7 | Flexibility and Efficiency | n/a | Not applicable |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained, on-brand, no clutter |
| 9 | Error Recovery | n/a | Not applicable |
| 10 | Help and Documentation | 3 | `<noscript>` fallback correctly tells the user to use Ctrl/Cmd+P |
| **Total** | | **14/16** | **Good (88%)** |

## Design Specificity Verdict

**LLM assessment**: Specific and intentional. This isn't a webpage awkwardly repurposed as a printable — it's built as a physical artifact from the ground up: fixed-width card, print-preview chrome, `@page` rules, gilt spine, stamp frame, marginalia loop-block. Matches DESIGN.md's Gilded Spine vocabulary precisely.

**Deterministic scan**: `detect.mjs` returned 4 font-family warnings (Inter referenced at lines 57/70/78/104 — the file's own header comment documents this as an intentional system-fallback, likely a false positive given the documented intent) and ~20 advisory findings for undocumented colors and off-ramp font sizes. Most font-size advisories (9px/9.5px/8px micro-typography for eyebrow labels) read as a purpose-built print type scale never reconciled against DESIGN.md's documented ramp, rather than accidental drift.

**Visual overlays**: this is where the pass earned its keep. Two structural defects were found and independently confirmed, one by each assessment method:

**(1) Contrast failure, verified twice over.** `flyer.astro` is a standalone page — it does not import `tokens.css`, and hardcodes `#8B7355` directly at lines 128, 139, 146, 149, 153, 162, 166, 181 for every eyebrow label and hairline rule. This is the exact raw hex of the old `--tfm-gold-muted` token that was split into AA-safe `-on-light`/`-on-dark` variants sitewide in a prior session — but that fix touched component files importing the shared token, and never reached this standalone page. Independently computed twice (once via direct contrast math here, once via Assessment B's live computed-style measurement): `.eb` and `.p-eyebrow` measure **3.94:1** against the cream background, `.loop-eyebrow` measures **3.60:1** against the dark loop-block background — both genuinely fail WCAG AA (4.5:1) at 9-9.5px, the smallest text on the page.

**(2) Print page-count overflow.** Assessment B measured the `.flyer` element's bounding box under `page.emulateMedia({media:'print'})`: content height is 1022px against a printable area of 960px (US Letter minus the declared 0.5in `@page` margins) — a **62px overflow that will spill the flyer onto a second printed page**, with no print-specific height constraint anywhere in the `@media print` block to prevent it. This is a real, structural bug that undermines the entire point of a one-page handout, not a rendering artifact — width and height were measured identical between screen and print media states, ruling out a print-only fluke.

## Overall Impression

The print engineering fundamentals here are genuinely good — self-hosted fonts, correct `@page` rules, exact color reproduction, a real working QR code — which makes it more notable that two structural defects slipped through specifically because this page doesn't share the site's token system. It's the one surface on the whole site still running on hand-copied hex values instead of `tokens.css`, and that's exactly where the sitewide contrast fix and general print-fit QA didn't reach.

## What's Working

1. **The "closed loop" diagram** (give → party → own → restart) is the single best compression of PRODUCT.md's non-charity mission model found anywhere on the site.
2. **Real print engineering, not just a printable-looking page**: self-hosted EB Garamond, explicit `@page { size: letter; margin: 0.5in }`, `print-color-adjust: exact`, and a working `<noscript>` fallback — most "printable" web pages skip all of this.
3. **A genuinely working QR code**: confirmed rendering (not a broken-image icon), `2048×2560` source displayed cleanly at 82×82px inside a bordered box, `img.complete: true`.

## Priority Issues

**[P0] Flyer content overflows onto a second printed page**
Why it matters: confirmed via direct measurement — content height (1022px) exceeds the printable area (960px) by 62px under actual print-media emulation, not just visual estimate. A flyer meant to be a single-page handout will print as two pages, with no constraint anywhere in the `@media print` block to prevent it. This defeats the artifact's basic purpose.
Fix: either reduce content/spacing to fit within 960px printable height, or explicitly scale the flyer to the printable area with a print-specific size/transform.
Suggested command: `/impeccable audit`

**[P0] Every eyebrow-label and hairline-rule instance fails WCAG AA contrast, and this is the exact bug fixed everywhere else on the site**
Why it matters: `#8B7355` hardcoded 8 times in this file measures 3.60-3.94:1 against its backgrounds — genuinely fails AA, verified independently twice. This isn't a new issue; it's the previously-resolved sitewide `--tfm-gold-muted` contrast bug, missed here specifically because `flyer.astro` doesn't import `tokens.css` and reimplements colors as raw hex.
Fix: replace the 8 raw `#8B7355` instances with the already-correct `--tfm-gold-muted-on-light` (#796449, cream backgrounds) or `--tfm-gold-muted-on-dark` (#9A855F, the dark loop-block background) values used everywhere else — either by importing the shared tokens or hardcoding the corrected hex values directly, since this file is standalone.
Suggested command: `/impeccable harden`

**[P1] On-screen version has no self-identifying frame for a visitor arriving via a shared link**
Why it matters: the gray print-preview canvas + toolbar convention is correct for print production but assumes the visitor already understands they're looking at a printable. A visitor who lands on `/flyer` cold via a shared link with no context sees a gray screen and a small floating card with no explanation.
Fix: one line of static copy above the print toolbar ("Printable flyer — click Print or press Ctrl/Cmd+P").
Suggested command: `/impeccable clarify`

**[P1] Flyer card doesn't fill the printable page width**
Why it matters: the fixed `550px` card sits inside a 720px printable width (after 0.5in margins) — roughly 76% fill, leaving unexplained side whitespace with nothing (no border, frame, or trim mark) signaling this is a deliberate small-card design rather than an unfinished layout.
Fix: either scale the card to fill the printable width, or add a visual cue (trim marks, a border referencing the sheet edge) confirming the whitespace is intentional.
Suggested command: `/impeccable layout`

**[P3] Font-family and font-size detector findings are mostly intentional micro-typography, not drift**
Why it matters: the ~20 advisory findings for undocumented colors and off-ramp font sizes (9px/9.5px/8px eyebrow labels) represent a purpose-built print type scale that was never formally reconciled against DESIGN.md's documented ramp — likely fine as-is, but worth a deliberate "this is the flyer's own micro-scale" note somewhere so future detector runs don't re-flag it as unexamined.
Fix: low priority — document the flyer's print-specific type scale as an intentional exception.
Suggested command: `/impeccable document`

## Persona Red Flags

**The church host printing a run of handouts for a table**: the P0 page-count overflow means every single printed copy comes out as two sheets, not one — a real, multiplying cost across any real print run, discovered before this critique only by luck (no one had print-and-scan-tested it against actual paper dimensions).

**The entry-point person encountering this via a shared link on a phone**: gray canvas + tiny card + a Print button that does nothing meaningful without an attached printer — no fallback narrative for a phone-viewing use case, only the physical-print path.

## Minor Observations

- QR code aspect-ratio concern raised in initial review was checked and resolved: renders correctly at 82×82px with clean letterboxing inside its bordered box, `img.complete: true` — not a defect.
- `noscript` explicitly sets `display: none` in print media even though noscript content wouldn't appear there anyway — harmless redundancy, no action needed.
- `.flyer::before` texture grid uses fractional-pixel repeating gradients (39px/40px boundaries) that are fine on screen but unverified for moiré risk under actual print rasterization — can't confirm without a physical print proof.

## Questions to Consider

1. Given the fundamentals (fonts, `@page` rules, color-adjust) were built correctly, was print-and-scan testing against real paper ever done for this specific file, or only source-reviewed?
2. Now that the raw-hex contrast bug is confirmed to be the same sitewide issue fixed elsewhere, should `flyer.astro` import `tokens.css` directly instead of maintaining its own duplicated hex values, to prevent this kind of drift on future token changes?
