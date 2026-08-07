---
target: donate page
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 1
timestamp: 2026-08-07T09-58-30Z
slug: src-pages-donate-astro
---
Method: dual-agent (A: a260cc9bf7cf211fa · B: a1cd739b82e87efde)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | No affordance differentiates real hardware `mailto:` CTA from fake `#give-placeholder` cash CTAs — both look identically "live" |
| 2 | Match System / Real World | 4 | "Give what you have," ledger/priority-order framing lands cleanly |
| 3 | User Control and Freedom | 3 | No dead-end trap, but clicking Give gives zero feedback or escape path |
| 4 | Consistency and Standards | 3 | CTA styling consistent sitewide; one focus-visible gap |
| 5 | Error Prevention | 0 | Placeholder link is an unprevented error waiting to happen — donor commits intent, gets nothing |
| 6 | Recognition Rather Than Recall | 4 | Priority-order list, tier cards self-explanatory |
| 7 | Flexibility and Efficiency | 3 | Hardware and cash paths both reachable from hero and footer nav |
| 8 | Aesthetic and Minimalist Design | 4 | On-brand, no clutter |
| 9 | Error Recovery | 0 | No error state exists because the flow doesn't actually attempt anything — that's the problem |
| 10 | Help and Documentation | 2 | Hardware path has clear instructions; cash path has none once the button fails |
| **Total** | | **24/40** | **Acceptable (60%)** |

## Design Specificity Verdict

**LLM assessment**: Specific and disciplined — real tokens throughout, no invented colors, no placeholder Lorem. The GiltCard/Brackets/Proclamation vocabulary is used correctly. The hierarchy correctly subordinates cash to hardware per TFM_16 (hero opens "We cannot give free laptops," hardware CTA lands before the cash section) — the single most important brand-fit call on this page, made correctly. The core defect is functional, not stylistic.

**Deterministic scan**: Detector flagged only pre-existing `Layout.astro` issues (4x hardcoded font-size literals, 1x undocumented `#fff`) — nothing registered against `donate.astro`/`Donate.jsx` itself, despite it containing literal rgba/hex values that may be silently skipped by the detector's threshold. Not confirmed as a false negative, flagged for awareness.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The brand and hierarchy calls on this page are right. The defect is a real functional bug: the three cash "Give $X" buttons are dead links (`href="#give-placeholder"`) styled and labeled exactly like working payment buttons, with zero user-facing signal they don't work. This is the most consequential finding across the site so far — it's the kind of thing a real donor hits and walks away from, possibly assuming the whole org is unfinished/untrustworthy.

## What's Working

- Hierarchy correctly subordinates cash to hardware at every level (hero, section order).
- "For the Record" section (what the money is NOT doing) is a strong trust-building move for a young/unverified nonprofit — smart given no 501(c)(3) yet.
- Voice discipline holds under a money ask — no manipulative urgency, no guilt language.

## Priority Issues

**[P0] Fake-looking "Give $X" buttons with no incompleteness signal**
- Why it matters: `Donate.jsx:443,450,457` — `href="#give-placeholder"` on visually-primary black buttons. Indistinguishable from a working donate button; a real visitor could believe a transaction happened, or conclude the site is broken and leave. Confirmed no `aria-disabled`, no "coming soon" label, no visual de-emphasis.
- Fix: disable-style the buttons (reduced opacity + "Coming Soon" label + `aria-disabled="true"`) or swap to a `mailto:` fallback ("email to give — online giving coming soon"), matching the honest pattern already used for hardware.
- Suggested command: `/impeccable harden`

**[P1] No tax-deductibility disclosure rendered anywhere on the page**
- Why it matters: the 501(c)(3)-pending disclosure exists only as a code comment (`Donate.jsx:566-571`), never rendered. Silence on tax status at the exact moment someone decides to give reads as evasive — the opposite of Sanctuary Voice's "name the real thing plainly."
- Fix: render an honest interim line near the cash section: "TFM is pursuing 501(c)(3) status; donations are not yet tax-deductible."
- Suggested command: `/impeccable harden`

**[P2] The one working link in the flow terminates at three broken ones**
- Why it matters: CloseSection's "Financial gift" button correctly scrolls to `#give-financially`, landing on a section whose three buttons are all dead — compounds P0 by building trust then breaking it in the same click sequence.
- Fix: bundled with the P0 fix.
- Suggested command: `/impeccable harden`

**[P2] Known gold-muted contrast failure present here too**
- Why it matters: Priority Order tier numbers use gold-muted on parchment-card, measured 3.60:1, fails AA for the 13px italic text used. Same sitewide token issue, confirmed present on this page.
- Fix: deferred to the sitewide token decision.

**[P3] No focus-visible styling on any Donate CTA**
- Why it matters: keyboard users get only browser-default outline, which may clash against leather/near-black backgrounds.
- Fix: add a shared focus-visible rule using `--tfm-gold-bright`, matching the Roadmap card pattern.
- Suggested command: `/impeccable harden`

## Persona Red Flags

**Jordan (First-Timer)**: Clicks "Give $100" expecting Stripe/PayPal, gets silence — no error, no redirect, no explanation. Directly undermines first-visit trust before Jordan even understands hardware is the real ask.

**Riley (Stress-Tester)**: Will click all three Give buttons and the CloseSection "Financial gift" button back-to-back looking for the actual payment form, find none, and conclude the site is broken rather than "in progress."

**Sam (Accessibility-Dependent)**: No `aria-disabled`/role signal distinguishes the three fake buttons from the real hardware `mailto:` CTA — VoiceOver announces "link, Give $25" identically to a functioning one.

## Minor Observations

`NotDoingSection` items are strong copy but use div/span rather than semantic list markup, losing list semantics for AT users. No global `outline: none` reset was found, so keyboard users do at least keep the unstyled browser-default focus ring rather than losing focus indication entirely.

## Questions to Consider

- Is a visually-primary black button the right affordance for something that currently does nothing — or does honesty require it to look visually secondary until Stripe lands?
- Should the 501(c)(3)-pending disclosure be surfaced now (build trust through transparency) or withheld until confirmed?
- If hardware really is the primary ask, should the cash section be visually smaller/later than it currently is, given it still gets three full-width GiltCards vs. hardware's single CTA bar?
