---
target: donate page
total_score: 21
max_score: 32
na_heuristics: 7,9
p0_count: 2
p1_count: 1
timestamp: 2026-08-07T12-43-05Z
slug: src-pages-donate-astro
---
Method: dual-agent (A: ab5b1ae1d1379fc49 · B: ad640e67ac16573ff)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Clicking a "Give $X" button silently hands off to the OS mail client with zero on-page acknowledgment |
| 2 | Match System / Real World | 4 | Plain, honest language throughout |
| 3 | User Control and Freedom | 3 | Static page, no traps |
| 4 | Consistency and Standards | 4 | Fully on-system, matches DESIGN.md |
| 5 | Error Prevention | 1 | mailto: is the only path for every donation type — no fallback for visitors without a configured mail client |
| 6 | Recognition Rather Than Recall | 3 | Amounts and hardware priority list are scannable |
| 7 | Flexibility and Efficiency | n/a | Marketing/donation page, no power-user paths |
| 8 | Aesthetic and Minimalist Design | 3 | Dense (6 full sections) but each stays on-brand |
| 9 | Error Recovery | n/a | No error states possible on a static page (the real gap is heuristic 5, not 9) |
| 10 | Help and Documentation | 1 | No visible plain-text email or phone fallback anywhere on the page |
| **Total** | | **21/32** | **Acceptable (66%)** |

## Design Specificity Verdict

**LLM assessment**: High. Every section uses TFM's actual vocabulary and mechanics (the Loop, GiltCard, Brackets, leather/parchment material shifts) correctly per DESIGN.md. Copy is Sanctuary Voice-compliant — stakes named, resolved to agency, no dread left hanging. Hero leads with "we cannot give free laptops... give the hardware you no longer use," setting the real ask honestly before any dollar figure appears.

**Deterministic scan**: `detect.mjs` returned zero findings on both `donate.astro` and `Donate.jsx`. All mailto hrefs confirmed correctly formed and live (`Donate.jsx:425,443,450,457,707` — `mailto:techfreedomministries@proton.me?subject=...`), not dead `#give-placeholder` anchors from the earlier session's fix.

**Visual overlays**: no text overflow, clipping, or overlap at either viewport. **One contrast claim from Assessment A was checked and corrected**: A stated the tax-deductibility disclosure "fails WCAG AA at 3.6-3.94:1," attributing that to `--tfm-warm-brown-soft` — likely confusing it with the unrelated, already-resolved `--tfm-gold-muted` issue from a prior session. Both this critique's own contrast math and Assessment B's independent Playwright measurement agree: `--tfm-warm-brown-soft` (#6E5F4A) on parchment-card measures **4.96:1**, which clears AA (4.5:1) by a real margin. The disclosure's problem is placement and prominence, not a contrast failure.

## Overall Impression

The mechanics here are honest and functional — real mailto links, a real (if under-weighted) tax disclosure, and hardware genuinely gets top billing in document order and button weight. The two real problems are about what happens at the moment of the click: the cash-tier buttons look exactly like a checkout flow with zero on-button signal that they open an email client instead, and the legal disclosure that should travel with every donation CTA instead lives in one footnote paragraph a scrolling visitor can easily skip past.

## What's Working

1. **Hardware-first framing is structurally honest**, not just stated: Hardware section comes before Cash in document order, and the Close section gives hardware the solid-gold button while cash gets the ghost/outline button.
2. **The tax-deductibility line exists at all** and states the truth plainly ("not yet tax-deductible") rather than staying silent or implying otherwise — the fix from the prior P0 session did the right thing, this pass just refines where it sits.
3. **Mailto mechanics are genuinely fixed and correctly formed** — confirmed live, not aspirational.

## Priority Issues

**[P0] Tax-deductibility disclosure isn't attached to the CTAs it needs to travel with**
Why it matters: it's the last of several stacked footnote-style paragraphs at 12px — the smallest text on the page — sitting below other notes, only inside the Cash section. A visitor who clicks a tier button from the Hero or Close section CTA never scrolls past it. This is a real informational gap for the church-host persona who most needs this fact surfaced before committing to fundraise on TFM's behalf.
Fix: attach the disclosure directly adjacent to (or inside) the tier cards/CTA buttons themselves, not as trailing fine print elsewhere on the page.
Suggested command: `/impeccable clarify`

**[P0] Cash-tier buttons give zero in-context signal that they open an email client**
Why it matters: "GIVE $25" / "GIVE $100" / "GIVE $500" on a solid black button, with no icon or adjacent microcopy, reads exactly like a payment-processing checkout button. The one explanatory line ("every tier below opens an email") sits in a separate paragraph 40-70px above the grid — easy to skip. A visitor who skips it and clicks straight through may distrust the site when a mail client launches instead of a payment flow.
Fix: put the mailto behavior on or immediately next to the button itself (e.g., "Email to give $25" or a small envelope icon), not only in a paragraph above the grid. `HardwareSection`'s CTA copy ("Email us. Tell us what you have...") is already more honest about this mechanic — backport that framing into the Cash CTAs.
Suggested command: `/impeccable clarify`

**[P1] Cash section visually rivals Hardware section for primacy despite hardware being the stated primary ask**
Why it matters: both sections use the same Proclamation headline treatment and GiltCard grids, and the Cash tier cards' 40px serif dollar numerals are the single largest, boldest visual elements on the page — larger than anything in the Hardware section. "Hardware is primary" is true in document order and Close-section button weight, but not obviously true to a visitor who scans rather than reads top to bottom.
Fix: dial back the Cash tier cards' visual weight (numeral size, card emphasis) relative to Hardware, or add a visual anchor to Hardware that matches Cash's scale.
Suggested command: `/impeccable layout`

**[P2] No non-email fallback anywhere on the page**
Why it matters: zero plain, copyable contact info exists outside the mailto hrefs. A visitor on a browser/device with no registered mail handler (common on mobile, common on locked-down work machines) has no way to donate from this page at all.
Fix: add a visible plain-text email address as a fallback near the CTAs.
Suggested command: `/impeccable clarify`

**[P3] "Exodus" appears in Loop-section body copy with no gloss**
Why it matters: minor jargon leak for a first-time visitor who hasn't read the Roadmap page yet.
Fix: light touch — one-word gloss or link to `/roadmap`.
Suggested command: `/impeccable clarify`

## Persona Red Flags

**The entry-point person** (PRODUCT.md's least tech-literate persona): may not know what "Exodus" means when it appears in the Loop steps ahead of any Roadmap context.

**The church community host**: nothing donate-specific breaks for them functionally, but the under-weighted tax-deductibility disclosure is the single fact this persona — fundraising on behalf of a congregation — most needs surfaced prominently, not buried in a footnote.

**Riley (stress-tester)**: a visitor with no mail client configured hits a dead end on every single donation path on this page — six CTAs, all mailto, zero fallback.

## Minor Observations

- Close section's two CTAs ("Donate hardware" solid / "Financial gift" ghost) correctly encode hierarchy — good pattern, worth extending to the Cash tier buttons' relationship to Hardware's CTA.
- The floating icon cluster both assessments independently noticed in screenshots near body copy is almost certainly dev-tooling/extension chrome in the automated browser session, not a real page element — flagging for completeness, not treating as a defect.

## Questions to Consider

1. If the tax-disclosure only lives in one footnote, is it actually a disclosure, or is it deniability?
2. Should every dollar-amount button literally say "Email to give $X" instead of "Give $X" — costing a little punch for a lot of honesty?
3. With six mailto CTAs on one page and no fallback, what happens to the donor with no configured mail client — is that person currently just gone?
