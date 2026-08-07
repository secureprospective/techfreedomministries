---
target: events page
total_score: 22
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
timestamp: 2026-08-07T10-11-02Z
slug: src-pages-events-astro
---
Method: dual-agent (A: ad750fadd4d43d189 · B: abec327287624559e)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Submit shows "Sending…" correctly; no loading/empty state if EVENTS were empty |
| 2 | Match System / Real World | 1 | "RSVP · TBD" and "TBD TBD at TBD" reads like a bug, not a ministry |
| 3 | User Control and Freedom | 3 | Esc + backdrop-click close work; no undo after a successful RSVP submit |
| 4 | Consistency and Standards | 3 | Matches Atoms.jsx system consistently |
| 5 | Error Prevention | 1 | Nothing stops a real person from RSVPing to a fake/unscheduled event |
| 6 | Recognition Rather Than Recall | 3 | Event summary restated in modal |
| 7 | Flexibility and Efficiency | 2 | No calendar file despite an "Add to calendar" button promising one |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, on-brand |
| 9 | Error Recovery | 2 | Error messaging present but no `aria-live`, no field-level/focus-to-error handling |
| 10 | Help and Documentation | 2 | "We don't email you twice" reassurance present; no privacy link |
| **Total** | | **22/40** | **Acceptable (55%)** |

## Design Specificity Verdict

**LLM assessment**: Not a generic template — ledger-stamp corners, gilt card borders, Cinzel eyebrows, and Sanctuary Voice copy ("bring a laptop and a USB stick, we supply the rest") are specific to TFM's system, correctly pulled from tokens. The design execution is solid. The failure is factual, not visual: a fully-functional, real-commitment RSVP flow is wrapped around an event that does not exist yet.

**Deterministic scan**: 5 advisory findings, all pre-existing in `Layout.astro` (4x hardcoded font-size literals, 1x undocumented `#fff`) — nothing flagged in EventsList/EventCard/RsvpModal/events.astro. No false positives.

**Visual overlays**: Not available — no browser automation configured for this project.

## Overall Impression

The placeholder event data is honestly marked in code and in the visible "TBD" fields (unlike Donate's silently-dead buttons) — but the RSVP flow behind it is fully live: real Formspree submission, real success confirmation ("You're on the list"). A visitor can complete a genuine real-world commitment for an event with no date, city, or venue. Layered on top, the modal itself has real accessibility gaps (no dialog role, no focus trap, unassociated labels).

## What's Working

- Filter-chip suppression logic hides broken filtering rather than showing a fake "TBD" chip — a genuinely good placeholder-aware decision.
- RsvpModal's two-step flow (form → confirmation) with real Formspree POST, inline submit/error states, and Escape-to-close is solid, functional engineering.
- Copy voice is consistent and warm throughout.

## Priority Issues

**[P0] Functional RSVP flow live against a fake event**
- Why it matters: `EventsList.jsx` ships one event with every field "TBD," yet `RsvpModal` fully submits to a live Formspree endpoint and shows a success confirmation. A real visitor can complete a real commitment for an event with no date/city/venue — worse than "coming soon," it's a false promise, and it seeds Formspree with junk data that'll be hard to distinguish from real RSVPs later.
- Fix: gate the RSVP button behind real data (`city !== "TBD"`), or replace the card with an honest "No events scheduled yet — get notified" state routing to BrevoSignup instead of RsvpModal until real data lands.
- Suggested command: `/impeccable harden`

**[P1] Modal missing dialog semantics, focus trap, and label association**
- Why it matters: `RsvpModal.jsx` has no `role="dialog"`/`aria-modal="true"`, no focus trap (Tab moves focus out to the page behind it), no initial-focus/focus-return management, and all three form labels are unassociated siblings (no `htmlFor`/`id`) rather than programmatically linked to their inputs. A screen-reader user gets no announcement that a dialog opened.
- Fix: add `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, implement a focus trap with initial focus on open and return-focus on close, add `htmlFor`/`id` pairing to all three fields, add `aria-live="polite"` to the error message region.
- Suggested command: `/impeccable harden`

**[P1] Dead "Add to calendar" button**
- Why it matters: has a download icon and label but `onClick={onClose}` — no `.ics` generation. Breaks the promise-fulfillment heuristic at the peak emotional moment right after commitment.
- Fix: implement a real `.ics` blob download, or remove the button/icon until it's real.
- Suggested command: `/impeccable harden`

**[P2] Focus-visible relies on color alone in form fields**
- Why it matters: `Field` strips the native outline and substitutes only a 1px border-color shift — a weak, easily-missed focus signal, especially against parchment. Fails WCAG 2.4.11 minimum focus-indicator standard.
- Fix: add a `box-shadow`/2px outline focus-visible ring consistent with the Roadmap card fix already applied.
- Suggested command: `/impeccable harden`

**[P3] Known gold-muted contrast issue reappears in modal field labels**
- Why it matters: present on every field label in RsvpModal — already tracked, not new.

## Persona Red Flags

**Jordan (First-Timer)**: Opens the events page expecting a real date to plan around, sees "TBD" as the largest element on the card (44px numeral), and has no framing anywhere on the page that says "dates coming soon" — reads as a bug.

**Sam (Accessibility-Dependent)**: Modal has no dialog role, no focus trap, no announced open state — VoiceOver gives no signal a dialog opened, and keyboard focus can tab out to the page behind it.

**Riley (Stress-Tester)**: Will click "Add to calendar" expecting a file, get nothing, no error, no explanation — silently broken promise.

## Minor Observations

`EventCard.jsx` hardcodes "Free" in gold — fine today, no branch exists for a future paid event. No `<form>` element wraps the RSVP inputs, so the email field gets no native browser validation; validation is entirely the disabled-button gate. `dow`/`time`/`duration` fields are NOT marked TBD/TODO despite being equally unconfirmed, unlike the honestly-flagged venue/date/city — a minor honesty inconsistency.

## Questions to Consider

- Should the RSVP button even render before real event data exists, or is a disabled "Notify me" CTA the more honest MVP for this placeholder state?
- If a real person RSVPs to the current TBD event today, does anyone at TFM see that submission and know to follow up, or does it silently vanish into Formspree?
- Is "Add to calendar" a promised launch feature, or scope that should be cut from this pass entirely?
