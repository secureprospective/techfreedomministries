---
target: flyer page
total_score: 14
max_score: 16
na_heuristics: 1,5,7,9,10
p0_count: 1
p1_count: 1
timestamp: 2026-08-07T10-22-55Z
slug: src-pages-flyer-astro
---
Method: dual-agent (A: a98bacbec1e14956e · B: a7baf859dcdf21ad9)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | No async state; print() is fire-and-forget |
| 2 | Match System / Real World | 4 | "Give what you have," priority list — plain, concrete |
| 3 | User Control and Freedom | 2 | Back link present; Print button gives zero feedback |
| 4 | Consistency and Standards | 1 | CDN font load contradicts the sitewide self-hosted-font decision |
| 5 | Error Prevention | n/a | No inputs, no error states possible |
| 6 | Recognition Rather Than Recall | 4 | QR + email + URL all visible at once, no memorization needed |
| 7 | Flexibility and Efficiency | n/a | No power-user path on a single-purpose print page |
| 8 | Aesthetic and Minimalist Design | 3 | Composition disciplined; hairline texture risks moiré at print DPI |
| 9 | Error Recovery | n/a | No error surface exists |
| 10 | Help and Documentation | n/a | Self-explanatory single-action flyer |
| **Total** | | **14/16** | **Good (88% by score, but see P0 below)** |

## Design Specificity Verdict

**LLM assessment**: Specific, not generic — a purpose-built print artifact with its own layout logic (spine strip, stamp-frame priority list, loop block), not a reused template. Copy is lifted near-verbatim from TFM_16_HARDWARE_DONATION.md's conditional-promise framing, correctly. But the file breaks a documented sitewide decision, and print CSS is thin for a page whose entire job is surviving screen-to-paper.

**Deterministic scan**: 25 findings — 5 "overused-font" warnings (the Google Fonts CDN import itself, plus 4x Inter usage) and 20 design-system-color/font-size advisories off the documented ramp (9px/9.5px/8px/17px sizes, colors `#777`, `rgba(0,0,0,0.38)`, `rgba(180,160,100,0.06)`, `#fff`). By far the most detector findings of any page critiqued so far — expected, since this page is standalone with no shared token imports.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The strongest copy-fidelity of any page critiqued (pulls almost verbatim from the hardware-donation strategy doc) undermined by the fact that this standalone page silently reintroduces the Google Fonts CDN your team explicitly removed sitewide — and, being print-first, has real gaps in what actually survives onto paper.

## What's Working

- Copy fidelity to TFM_16_HARDWARE_DONATION.md is excellent — conditional-promise headline and priority order pulled correctly, not paraphrased loosely.
- Print-first thinking is present where it counts: `@media print` (lines 46-50) correctly hides the print-bar and back-link, strips the drop-shadow.
- QR code is real and correctly wired (`public/assets/qr-code.png` exists, 394KB, alt text present) — the comment claiming it needs to be "placed" is just stale documentation, not a broken asset.

## Priority Issues

**[P0] Google Fonts CDN load regresses a documented, completed sitewide decision**
- Why it matters: line 12 loads EB Garamond and Inter from `fonts.googleapis.com`. CLAUDE.md's Current Build State explicitly records "Google Fonts CDN removed" as completed sitewide work — this standalone page (no Layout wrapper, so it never inherits `fonts.css`) re-introduces exactly what was removed, and pulls in Inter, a typeface not in the documented EB Garamond + Cinzel stack at all.
- Fix: copy the relevant `@font-face` declarations from `src/styles/fonts.css` directly into this page's `<style>` block (it's already standalone) and drop the `<link>` entirely.
- Suggested command: `/impeccable harden`

**[P1] No forced print-color-adjust — the flyer's identity is entirely background color**
- Why it matters: no `print-color-adjust: exact` anywhere. The leather loop-block, gold spine gradient, and stamp brackets are all background-color/gradient driven — most browsers suppress background colors on print by default unless "background graphics" is manually enabled, which most people don't do. A donor printing this at home likely gets a flyer missing its dark band and gold spine entirely.
- Fix: add `* { print-color-adjust: exact; -webkit-print-color-adjust: exact; }` inside the `@media print` block.
- Suggested command: `/impeccable harden`

**[P2] No `@page` size/margin control for a fixed-width print artifact**
- Why it matters: `.flyer` is a hard `width: 550px` with no `@page` rule — without explicit margins, browser default print margins plus internal padding can push content close to non-printable edges on some printers.
- Fix: add `@page { size: letter; margin: 0.5in; }`, verify at both Letter and A4.
- Suggested command: `/impeccable harden`

**[P3] Only one contact channel for a physical-goods donation**
- Why it matters: line 202 offers email only; TFM_16 frames this as coordinating local drop-off, but no phone/address fallback exists — a reader without email access has no path forward at all.
- Fix: add a one-line fallback ("No email? Call/text [number]") or note that drop-off is arranged after email contact.
- Suggested command: `/impeccable clarify`

## Persona Red Flags

**A stranger with no TFM context, viewing this on paper**: the loop-block explains the mechanism well but never states what TFM actually is (nonprofit? church program?) — a cold reader taking this off a bulletin board has to infer the org from the footer scripture citation alone.

**Casey (Mobile), viewing before printing**: fixed 550px flyer block inside a flex-centered body with no responsive breakpoint — on a narrow phone this overflows horizontally, forcing pinch-zoom before Casey can even find the Print button.

**Sam (Accessibility), viewed on-screen**: two text blocks sit at 9.5px in the known-failing gold-muted color — likely fails AA against both parchment and leather backgrounds it's used on here.

## Minor Observations

The comment "place file at public/assets/qr-code.png" is stale — the file already exists and is correctly wired, just misleading documentation. `.flyer::before` is a 1px-pitch repeating gradient texture worth a real test print to confirm it doesn't moiré on typical inkjet/laser DPI. `onclick="window.print()"` has no fallback messaging if JS is disabled — the button becomes a dead click with no visible cue.

## Questions to Consider

- Has this flyer actually been test-printed on a home inkjet to confirm the leather block and gold spine survive without "print background graphics" enabled?
- Should this page inherit the shared `fonts.css` @font-face block via an Astro import instead of hand-duplicating a CDN `<link>`, so a future font update can't silently diverge again?
- Is email-only contact enough, given the audience skews toward people donating physical junk from a closet, not digital-native donors comfortable with email-only flows?
