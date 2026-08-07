---
target: events page
total_score: 28
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T12-46-45Z
slug: src-pages-events-astro
---
Method: dual-agent (A: a48d317e68280874d · B: a9fd6da9baa6bba3f)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Filter chips highlight active state, RSVP submit shows "Sending…"; no skeleton for the list itself but n/a at this scale |
| 2 | Match System / Real World | 4 | "Install Party," dates, venue, duration all read like a real event listing |
| 3 | User Control and Freedom | 3 | Modal closes via X, Escape, backdrop click; no edit-after-submit path but low stakes |
| 4 | Consistency and Standards | 4 | Button/Card/Eyebrow/Icon atoms reused faithfully |
| 5 | Error Prevention | 2 | RSVP email field has no format validation before submit |
| 6 | Recognition Rather Than Recall | 3 | Event card shows all decision-relevant info without a click-through |
| 7 | Flexibility and Efficiency | 2 | Filter chips exist but untested with 2+ real cities |
| 8 | Aesthetic and Minimalist Design | 4 | Clean grid, no clutter, restrained color use |
| 9 | Error Recovery | 3 | Formspree/network failures surface distinct messages via `role="alert"` |
| 10 | Help and Documentation | n/a | Not needed at this scale |
| **Total** | | **28/36** | **Good (78%)** |

## Design Specificity Verdict

**LLM assessment**: Specific. The Gilded Spine grammar (gilt-edge cards, stamp corner brackets, ◆ diamonds, Proclamation strong/italic pairing) is applied consistently. The date-stamp/meta/action card grid is a real information-architecture decision, not filler.

**Deterministic scan**: `detect.mjs` returned zero findings across `events.astro`, `EventsList.jsx`, `EventCard.jsx`, `RsvpModal.jsx`.

**Visual overlays**: no text overflow, clipping, or overlap at either viewport. Both assessments independently confirmed the RSVP-suppression logic is correct and working: `EventCard.jsx:11`'s `isPlaceholder` check renders zero focusable elements when true, so no dead or misleading RSVP path exists in the current all-placeholder data state — verified by source, live screenshot, and a 25-stop keyboard tab trace (focus skips the card entirely, no trap, no loss). One claim from Assessment A was checked and **resolved as a non-issue**: A flagged uncertainty over whether the site's footer email-capture is visible on this page and suggested it might be a missing feature. It is not missing — `Layout.astro:80` renders `<BrevoSignup client:visible />` globally on every page including this one, and its copy is even scoped specifically to the no-events state: *"No events near you yet. Be first to know when that changes."* / "Notify me". This directly satisfies A's own provocative question about a "notify me when a date is set" mechanism — it already exists.

## Overall Impression

This is the site's most technically careful page — three independent mechanisms (filter suppression, RSVP swap, honest banner copy) all correctly key off the same real-vs-placeholder data with no contradictions, and the RsvpModal's accessibility work (real focus trap, `aria-modal`, focus restoration) is implemented, not decorative. The honest "no dates set yet" framing stays warm rather than reading as dead or embarrassing. The main risks are latent rather than live: an RSVP flow with real engineering investment that currently cannot be exercised against live data, and a duplicated placeholder-check that could silently diverge if event data entry is ever partial.

## What's Working

1. **TBD-suppression logic is layered correctly** — filter chips vanish, RSVP swaps for honest text, a soft notice appears, all three independently keyed to the same data condition without contradicting each other.
2. **RsvpModal's accessibility is genuinely implemented**: real focus trap, `aria-modal`, `aria-labelledby`, `role="alert"` on errors, focus restoration on close — confirmed via tab-order trace, not just source-read.
3. **The honest empty-state stays warm**: "No dates are set yet — the first Install Party is being planned. Check back soon" in EB Garamond italic, paired with a placeholder card that still carries the level badge and Proclamation title, reads as "a real thing that hasn't happened yet," not a dead page.

## Priority Issues

**[P1] RSVP email field has no format validation before submit**
Why it matters: a malformed address can silently succeed through Formspree with no visible correction path, and the entire RSVP promise depends on that email being right.
Fix: add a client-side email-format check before enabling submit, matching the existing name/email required-field pattern.
Suggested command: `/impeccable harden`

**[P1] Placeholder-detection logic is duplicated, not shared, between EventCard and EventsList**
Why it matters: `EventCard.jsx`'s `isPlaceholder` (`city === "TBD" || day === "TBD"`) and `EventsList.jsx`'s `allPlaceholder` (`every(e => e.city === "TBD")`) check different fields. A future event with a real city but still-TBD day would pass EventsList's "show the banner" check as false (looks like a real listing) while EventCard still blocks RSVP — a silent, confusing gap between "looks bookable" and "can't actually RSVP."
Fix: centralize the placeholder check into one shared function both components call.
Suggested command: `/impeccable harden`

**[P2] The RsvpModal flow (focus trap, .ics export) is currently unreachable and unverified against live data**
Why it matters: all engineering investment in the modal has only been tested against source/mocked conditions, not a real EventCard-triggered render, since every current event entry is a placeholder.
Fix: manually click through the full flow once any real event ships, rather than trusting the code read alone.
Suggested command: `/impeccable audit`

**[P2] No "edit RSVP" path after step-2 confirmation**
Why it matters: low stakes, but a visitor who notices a typo in name/email after submitting has no way back.
Fix: a one-line GhostButton back to step 1 would close this.
Suggested command: `/impeccable harden`

**[P3] `.ics` parsing depends on free-text date/time formats matching expected patterns**
Why it matters: a real event authored with a different format (e.g. "June" vs "Jun") could silently produce a calendar file with no DTSTART, with no error surfaced to the RSVP'd user.
Fix: validate or normalize the format at data-entry time, or add a parse-failure fallback.
Suggested command: `/impeccable harden`

## Persona Red Flags

**Sam (Accessibility-dependent)**: mechanically the RsvpModal is solid on paper (real focus trap, ARIA), but per the P2 above this path hasn't been interactively verified since the TBD-guard was added — a regression in the coupling between EventCard's placeholder check and the modal's mount condition could silently break Sam's only tested path with no visible signal (no console error, just a missing button).

**Riley (stress-tester)**: a real event with partial data (real city, still-TBD day) is the exact edge case the P1 duplication issue above would expose — worth a deliberate test once real event data exists.

## Minor Observations

- `RsvpModal`'s email input has no `autoComplete="email"` — small, free, no reason to omit it.
- Keyboard tab trace showed several `astro-dev-toolbar` stops after the footer links — confirmed dev-server-only artifact (Astro's overlay), not present in production, not a real defect.
- One assessment initially flagged uncertainty over whether an event-notify capture mechanism exists — verified it already does (`BrevoSignup.jsx`, sitewide via `Layout.astro`), scoped copy included. No action needed.

## Questions to Consider

1. Is "no dates set yet" the right emotional target long-term, or does the mission's credibility eventually need at least a projected timeframe ("first event planned for late 2026") if this state persists for months?
2. Given RsvpModal's real engineering investment sits behind a currently-unreachable data condition, should there be a dev-only preview route so this flow gets exercised regularly instead of silently rotting until the first real event ships?
