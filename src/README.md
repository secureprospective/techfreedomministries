# TFM Marketing Site — UI Kit
*Layer-2 (public / secular) entry point.*

This is a high-fidelity recreation of how the **public-facing marketing site** should look and feel, built against the spec in `../../README.md` and `../../colors_and_type.css`.

## Run it
Open `index.html` — it boots a single-page React demo with mock routing between Home, Events, Roadmap, The Oath, and About. The RSVP button opens a modal flow.

## What's here
- `Atoms.jsx` — `Button`, `GhostButton`, `LinkButton`, `Eyebrow`, `Rule`, `Diamond`, `LevelBadge`, `Brackets`, `Icon`
- `Nav.jsx` — top nav (logo + caps + ◆ separators + primary CTA)
- `Hero.jsx` — Proclamation hero block (eyebrow → rule → two-tone headline → diamond → body → CTAs)
- `EventCard.jsx` — date + level pill + title + meta + RSVP
- `EventsList.jsx` — list view with city filter
- `LevelCard.jsx` — a single level block (level-color ground)
- `Roadmap.jsx` — the four levels stacked, diamond separators
- `Oath.jsx` — italic Georgia oath text with corner brackets
- `About.jsx` — "what TFM is / what TFM isn't" two-column doc
- `Footer.jsx` — small caps nav, Galatians 5:1, logo
- `RsvpModal.jsx` — RSVP flow with the form atoms

## Caveats
- No real backend — RSVPs and route changes are all in-memory state.
- Icons use **Lucide** from CDN (substitution flag — see `../../README.md` Iconography section).
- Photos are intentionally absent. Per the spec: leave a placeholder rather than insert stock photography.
- This kit obeys the spec; if anything has been built differently in production, the production version wins.
