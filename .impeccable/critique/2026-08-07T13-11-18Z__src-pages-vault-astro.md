---
target: vault page
total_score: 13
max_score: 20
na_heuristics: 2,3,5,7,9
p0_count: 0
p1_count: 1
timestamp: 2026-08-07T13-11-18Z
slug: src-pages-vault-astro
---
Method: dual-agent (A: a2d847cb78418702f · B: a53d3b7d5186f633c)

**Context note:** this page is an explicitly-labeled stub — `vault.astro:3-5`: "Ghost page — not linked in nav or footer. Purpose: Vanguard back office, documentation, communications. Current state: placeholder." Confirmed not linked anywhere in `Layout.astro`'s nav or footer. Findings below should be read against that pre-launch context, not as defects on a shipped page.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No auth state shown, no indication more content is coming beyond one sentence |
| 2 | Match System / Real World | n/a | No interactive model to match at this stage |
| 3 | User Control and Freedom | n/a | Single static link, no flows to escape |
| 4 | Consistency and Standards | 4 | Fully consistent with Gilded Spine system (stamp frames, leather, gilt, proclamation heading) |
| 5 | Error Prevention | n/a | No forms or inputs |
| 6 | Recognition Rather Than Recall | 3 | Card is self-explanatory (title + meta line) |
| 7 | Flexibility and Efficiency | n/a | Nothing to be efficient at yet |
| 8 | Aesthetic and Minimalist Design | 3 | Appropriately sparse for a one-asset stub, but header promise exceeds delivered content |
| 9 | Error Recovery | n/a | Not applicable |
| 10 | Help and Documentation | 1 | No indication of what's coming, no notify-me mechanism, no context for what "being built" means practically |
| **Total** | | **13/20** | **Acceptable (65%)** |

## Design Specificity Verdict

**LLM assessment**: Passes for what it is — correctly reuses system primitives (leather header, stamp-frame corners, gilt colors, Proclamation-style heading) rather than inventing new visual language for a one-off page. This should be read as a scaffold review, not a shipped-page review.

**Deterministic scan**: `detect.mjs` returned 7 advisory `design-system-font-size` findings (42px/22px/10px/20px/12px/32px/18px, `vault.astro:86,101,153,162,171,178,179`) — all genuinely off DESIGN.md's documented ramp, no false positives among them. No contrast, overflow, or a11y rules fired.

**Visual overlays**: no text overflow, clipping, or real overlap at either viewport (one screenshot showed the Astro dev toolbar over footer copy on mobile — confirmed a dev-only tooling artifact, not a page defect). **The single-card grid sparseness was confirmed with real measurement, not inferred**: `.vault-asset-grid`'s `repeat(auto-fill, minmax(240px, 1fr))` renders the lone card at ~325px width pinned left inside a 1100px container, leaving ~700px of empty space at desktop — a visually lonely floating card, exactly as expected for a single-item auto-fill grid but worth fixing before any real audience sees this page live. One contrast concern raised for `.vault-desc`'s `rgba(244,240,230,0.65)` text on the leather header was checked directly: composited against `--tfm-leather` (#2A1F0E), it measures **6.74:1**, comfortably passing AA — not a bug.

## Overall Impression

This is pre-content scaffolding, correctly built on the system's own vocabulary, being evaluated honestly as what it currently is rather than what it will become. The header copy already does real Sanctuary Voice work — turning "not built yet" into an invitation rather than an apology — but the one thing worth flagging before this page goes live for real Vanguards is the gap between what the header promises ("documentation, communications, the back office") and what it currently delivers (one static flyer link), plus the complete absence of any access gating on a page that explicitly addresses "those who completed the Roadmap."

## What's Working

1. **The header copy does real Sanctuary Voice work on a stub page** — "If you are here early, you are exactly who it is being built for" makes incompleteness feel like belonging, not an apology.
2. **Correct, disciplined reuse of the stamp-frame/gilt system** instead of ad hoc UI for a one-off page — no drift from DESIGN.md despite being unfinished.

## Priority Issues

**[P1] No access gating exists or is implied, despite the page addressing "those who completed the Roadmap"**
Why it matters: the page is unauthenticated and reachable by anyone with the URL. Product Principle 5 ("earned, never bought") is contradicted on inspection if this page's real content ever lands here without a gate — worth deciding before, not after, real documentation ships.
Fix: decide the access model (real auth, or "unlisted URL is sufficient for this threat model") before content beyond the current flyer link is added.
Suggested command: `/impeccable shape`

**[P2] Content/promise mismatch**
Why it matters: the header promises "Documentation. Communications. The back office," but delivers a single flyer download — a real gap for a Vanguard actually trying to run an event, if they land here expecting operational support.
Fix: either scope the header copy down to match current content, or treat this as an explicit known-gap until real content ships (acceptable for a stub, just worth tracking).
Suggested command: `/impeccable shape`

**[P2] Single-asset grid renders visually sparse/unfinished at desktop width**
Why it matters: confirmed via measurement — the lone card occupies ~325px inside a 1100px container, leaving ~700px empty. Fine for an internal WIP page no one is meant to find yet, but should be revisited before any real audience (a graduating Vanguard) sees it live.
Fix: constrain the grid's max-width to the actual card count until more assets exist, or add a visual "more coming" placeholder.
Suggested command: `/impeccable layout`

**[P3] No stated discovery path for how a real Vanguard is meant to arrive here**
Why it matters: intentionally unlisted for now, but there's no visible mechanism (completion email, link from the Oath/credential moment) for how this URL reaches its actual audience once real content ships.
Fix: worth deciding as part of the same scoping pass as the P1 gating question, not urgent pre-launch.
Suggested command: `/impeccable shape`

## Persona Red Flags

**The Vanguard (this page's actual named audience)**: gets no functional back-office value yet — just one flyer link, despite the header speaking directly to their completed-Roadmap status.

**A general visitor who stumbles onto `/vault`** (search index, shared link): reads "For those who completed the Roadmap," correctly concludes they don't belong here, but nothing redirects or explains what to do instead (no link back to Roadmap or Install Party).

## Minor Observations

- The `.vault-desc` contrast concern raised in initial review was checked directly and resolved: 6.74:1 against the leather header, comfortably passing AA — not an issue.
- 7 font-size advisories from the detector are genuine off-ramp values, not false positives, but consistent with this being early scaffolding rather than a finished, token-disciplined page.

## Questions to Consider

1. Is `/vault` meant to require real authentication before any documentation drops in, or does "unlisted URL" count as sufficient gating for this nonprofit's threat model?
2. What's the actual trigger that hands a graduating Vanguard this URL — is that flow built anywhere else in the funnel (Oath page, a completion email), or does this page currently have zero real entry point?
