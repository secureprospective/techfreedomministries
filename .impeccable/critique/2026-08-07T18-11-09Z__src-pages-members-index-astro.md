---
target: members area (src/pages/members/index.astro + MembersArea.jsx)
total_score: 20
max_score: 28
na_heuristics: 5,7,9
p0_count: 1
p1_count: 2
timestamp: 2026-08-07T18-11-09Z
slug: src-pages-members-index-astro
---
Method: dual-agent (A: acd61c2460beeed98 · B: a7846b0f5008a2b4f)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No confirmation state on outbound "Open the Community" link, otherwise clear |
| 2 | Match System / Real World | 4 | Frames itself explicitly as a mirror of the physical card; correct mythology vocabulary throughout |
| 3 | User Control and Freedom | 3 | Read-only page, low stakes; no in-page nav between the three sections |
| 4 | Consistency and Standards | 1 | Two of three components render full-bleed with zero container — breaks the site's own 1100px/36px rule that the hero on the same page follows |
| 5 | Error Prevention | n/a | no inputs/destructive actions on this page |
| 6 | Recognition Rather Than Recall | 4 | Color-coded level badges, nothing to memorize |
| 7 | Flexibility and Efficiency | n/a | single-purpose read-only surface |
| 8 | Aesthetic and Minimalist Design | 2 | Individual blocks are clean; missing container + no vertical rhythm makes the whole read unplanned |
| 9 | Error Recovery | n/a | no error states exist |
| 10 | Help and Documentation | 3 | Hero paragraph functions as inline orientation |
| Total | | 20/28 | Acceptable (71%), dragged down hard by one structural bug |

## Design Specificity Verdict

Partially authored, undercut by a structural bug that reads as generic. The hero is unmistakably TFM. The Roadmap list's locked/current/completed states are well-executed. The Community card's resolution line is strong Sanctuary Voice. But past the hero, the page snaps into full-bleed, edge-to-edge rows with zero margin — the one thing that makes it feel like a generic dashboard template.

Deterministic scan: 1 advisory finding, design-system-font-size at members/index.astro:81 — mobile media-query H1 override at 34px, off the documented type ramp. Likely an intentional responsive step-down from 48px Display, not a real violation.

## Overall Impression

Copy team did their job; layout undermines it. Two of three components ignore the site's container convention entirely — the direct cause of the "messy" read. Fixing that one structural gap should move this from Acceptable to Good.

## What's Working

1. The hero's physical-card framing — writing only TFM could have produced.
2. Locked/current/completed Roadmap states — matches "earned, never bought" without becoming a nagging checklist.
3. CommunityCard's unlocked-state Brackets/stamp-frame treatment vs. locked state's plain Card — correct per DESIGN.md's own vocabulary.

## Priority Issues

[P0] No wrapping container on PersonalRoadmap/CommunityCard/VanguardTeaser — renders full-bleed, confirmed live at 1440px and 390px. Fix: wrap in a container matching .members-hero-inner, with proper section vertical padding. Suggested command: /impeccable layout

[P1] Locked Community card gives a "when" but no "how" — Level 1 member hits a dead end with no link to /roadmap. Fix: add "See what The Catechism asks of you →" link. Suggested command: /impeccable clarify

[P1] Shared Card atom still ships a boxShadow (Atoms.jsx:308), violating the No-Shadow Rule, live on this page's locked/teaser states. Pre-existing/sitewide. Fix: delete the boxShadow line. Suggested command: /impeccable polish

[P2] Page ends into the site-wide newsletter CTA written for a stranger, shown to an already-enrolled Level 2 member. Fix: suppress/swap footer block on /members route. Suggested command: /impeccable clarify

[P3] Current level isn't named until a full scroll down past the hero. Fix: one-line status near "Welcome, Alex Rivera". Suggested command: /impeccable clarify

## Persona Red Flags

First-timer (Level 1): locked Community card, no forward path — the exact moment this page could activate them, and instead it's a closed door.

Mobile user: zero-margin edge-to-edge Roadmap/Community sections, confirmed live at 390px — the clearest place the page visibly looks broken.

## Minor Observations

- LevelBadge formatting is consistent, no issue.
- Current-level detail copy is thinner than Roadmap.jsx's existing four-panel copy — missed reuse opportunity.
- The 34px mobile H1 override is likely intentional responsive scaling, not a real violation.

## Questions to Consider

- Should this page look like a compact dashboard at all, or read closer to roadmap.astro's proclamation-style register?
- Is "unlocks at Level 2, no detail" deliberate restraint or an oversight — does it clear the "useful" bar as-is?
