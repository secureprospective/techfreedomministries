---
target: vanguard page
total_score: 27
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T13-01-21Z
slug: src-pages-vanguard-astro
---
Method: dual-agent (A: a243dc5749f395222 · B: acb4e3ed10e45e0d7)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Mailto CTA gives zero on-page confirmation of what happens after click |
| 2 | Match System / Real World | 4 | "Write to us / one paragraph" plain-speaks the mythology-heavy CTA |
| 3 | User Control and Freedom | 3 | No modals, no traps; nothing to escape from |
| 4 | Consistency and Standards | 4 | Identical CTA copy/style in Hero and Apply; stamp/gilt/badge conventions all match DESIGN.md |
| 5 | Error Prevention | 3 | Mailto template pre-labels fields (City/Level/Room), reducing blank-email risk |
| 6 | Recognition Rather Than Recall | 4 | Apply section's 4-condition checklist removes guesswork about eligibility |
| 7 | Flexibility and Efficiency | n/a | No power-user paths on a static credential page |
| 8 | Aesthetic and Minimalist Design | 4 | No competing accents, no stock imagery, restrained gold use |
| 9 | Error Recovery | n/a | No error states exist to recover from |
| 10 | Help and Documentation | 3 | "Check the Roadmap" link addresses the one likely uncertainty (self-assessed level) |
| **Total** | | **27/32** | **Good (84%)** |

## Design Specificity Verdict

**LLM assessment**: Genuinely specific to Gilded Spine, not templated. Stamp frame, gilt cards, ◆ marks, the level-less gold badge, and the leather/parchment register shift between Hero→Means→Path→Apply are all correctly deployed per DESIGN.md.

**Deterministic scan**: `detect.mjs` returned zero findings on both `vanguard.astro` and `Vanguard.jsx`.

**Visual overlays**: no horizontal overflow at either viewport. Three specific structural claims were independently verified true by both direct source inspection and live Playwright measurement: **(1)** the empty-roster guard (`Vanguard.jsx:572`, `{roster.length > 0 && <NetworkSection roster={roster} />}`) correctly renders nothing rather than an awkward empty grid — confirmed absent from the live DOM, not just the source; **(2)** the credential-stamp quote is now byte-identical to Oath.jsx's real text, extracted live as `"I will teach the next person what I was taught."`; **(3)** both CTAs meet the 44px mobile touch-target floor — Hero CTA measured 72.2px, Apply CTA measured exactly 44.1px (right at the floor, still passing).

One recurring documentation issue surfaced again on this page: both independent assessments cited the project's own `CLAUDE.md` "open item" about `--tfm-gold-muted` failing WCAG AA project-wide. **This note is stale** — confirmed in the earlier homepage/About passes of this same critique run: the token was split into `-on-light`/`-on-dark` AA-safe variants in a prior session, and `CLAUDE.md` was simply never updated to reflect the fix. Worth a documentation cleanup pass so future critiques stop re-flagging a resolved issue.

## Overall Impression

This page's mechanics are the most solid of anything reviewed so far — every specific, checkable claim (roster guard, quote match, touch targets) came back verified true on the first check, not just plausible. The real gaps are in the hero's opening metaphor, which doesn't land clearly for a first-time reader, and a silent-failure risk on the one CTA that doesn't carry a visible-text fallback.

## What's Working

1. **Empty-roster handling is correct at both the component and the parent level**, verified live, not just in source — the Network section is genuinely absent, not rendered empty.
2. **Mobile touch-target fix is real, not cosmetic**: both CTAs measured at or above 44px live at 390px width, confirmed via computed styles rather than visual guess.
3. **The Apply section's 4-condition eligibility checklist removes real guesswork** — a Level-3 graduate reading it knows exactly whether they qualify without asking.

## Priority Issues

**[P1] Hero headline metaphor doesn't land for a first-time reader**
Why it matters: "You know what most people don't. / That debt has a name." — "debt" is never explained or resolved anywhere else on the page; no other copy uses debt/obligation framing. This cuts against Sanctuary Voice's mandate to "name the real encroachment plainly" — the thing actually being named here is the vaguest line on the page for a Level-3 reader with no prior context.
Fix: tie the hero line more directly to the concrete stakes clause already present lower on the page (the "bottleneck" idea) rather than an unexplained debt metaphor.
Suggested command: `/impeccable clarify`

**[P1] Hero CTA has a silent failure mode with no visible-text fallback**
Why it matters: clicking mailto on a device/browser with no configured mail client (Chromebooks, some mobile browsers, webmail-only setups) produces nothing visible — no error, no redirect. The Apply section CTA correctly mitigates this by printing the plain address below the button (`Vanguard.jsx:556`), but the Hero CTA has no equivalent fallback text at all — a visitor who reads the hero and clicks straight through gets nothing if mailto isn't handled.
Fix: add the plain-text `vanguard@techfreedomministries.com` fallback near the Hero CTA too, matching the Apply section's existing pattern.
Suggested command: `/impeccable harden`

**[P2] Hero H1 renders at 36px where DESIGN.md's Display spec (page-level proclamations, hero headlines) is 48px**
Why it matters: `Vanguard.jsx:73` sets `fontSize: 36`, a real deviation from the documented type ramp. Worth checking whether this is a standing pattern across other page heroes (intentional secondary-hero scale) or isolated drift.
Fix: confirm intent; snap to 48px or formally document a secondary hero-heading step if the smaller size is deliberate.
Suggested command: `/impeccable typeset`

**[P3] Two identical CTA strings with identical mailto payload on one page**
Why it matters: not wrong, but unmeasurable which CTA converts if funnel data ever matters later.
Fix: forward-looking only, no urgency — consider distinct UTM-style params if conversion tracking becomes a priority.
Suggested command: `/impeccable optimize`

## Persona Red Flags

**Level-3 graduate considering applying**: (1) the unexplained "debt" metaphor may make them second-guess whether this page is even about them before reaching the concrete asks; (2) no stated response-time expectation ("we respond within a week") for what happens after applying — matters more to someone about to commit unpaid teaching labor; (3) the empty Network section offers zero peer proof yet (no early-adopter quote, no "founding cohort" framing) — a first-mover has no signal the program has any operating history.

## Minor Observations

- `vanguard@techfreedomministries.com` (used in both mailto CTAs) is confirmed intentional and documented (`docs/TFM_10_BUILD_STATE.md`), distinct from the `techfreedomministries@proton.me` address used for hardware/cash donations — not a bug. Worth an operational check (not a code fix) that this address's mail delivery is actually configured, since the `.com` domain 301-redirects web traffic to `.org` — a redirect on the web layer doesn't guarantee MX records are set up for mail.
- Roster grid gap (`2px`, `Vanguard.jsx:419`) is unusually tight versus the `24px` gap used elsewhere (Means cards) — likely an intentional ledger/grid metaphor, worth a glance once real roster data exists to confirm it wasn't a typo.

## Questions to Consider

1. Does "debt has a name" survive contact with a first-time reader who has no prior TFM context, or does it only work for someone who already knows the mission?
2. When the first real Vanguard exists, does a roster of one look like momentum or like emptiness with an asterisk — is there a "founding cohort" framing ready for that transition point?
