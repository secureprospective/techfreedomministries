# Tech Freedom Ministries — Claude Code Ground Truth
*Read this entire file before doing anything. If this file conflicts
with anything said in the session, this file wins.*

---

## What This Project Is

Tech Freedom Ministries (TFM) is a faith-backed digital freedom nonprofit.
Mission: Teach people to escape Big Tech surveillance through free community
events, hands-on Linux training, and a repeating growth model that turns
today's student into tomorrow's teacher.

Mission Statement (full):
People cannot escape Big Tech surveillance without hands-on training and
independent hardware. With faith as our backbone and an open door for everyone,
Tech Freedom Ministries runs free Install Parties where people walk out owning
a laptop that is actually theirs — at zero cost. Every student follows a
four-level Roadmap; the ones who go all the way become Vanguards — teachers
who take the mission to their own city and run their own events. We give freedom
with a fishing pole because Christ has set us free; what Big Tech calls
end-of-life, we call a first computer.

Scriptural anchor: Galatians 5:1
Tagline: "Giving freedom with a fishing pole."
Domain: techfreedomministries.org (live — Cloudflare Pages, auto-deploy from main)
Redirect: techfreedomministries.com → techfreedomministries.org (301, all variants)
Repo: github.com/secureprospective/techfreedomministries
Local path: /mnt/storage/claudebox/techfreedomministries/

---

## Repo Structure

techfreedomministries/
├── public/
│   ├── assets/          — logo files served at /assets/ (canonical location)
│   ├── fonts/           — self-hosted EB Garamond (4 variants) + Cinzel
│   └── _headers         — Cloudflare headers config (canonical location)
├── src/
│   ├── components/
│   │   ├── Atoms.jsx    — primitives: Eyebrow, Rule, Diamond, Proclamation, Button,
│   │   │                  GhostButton, LinkButton, LevelBadge, Brackets, Icon,
│   │   │                  Card, GiltCard, SectionEyebrow
│   │   ├── BrevoSignup.jsx  — email capture, footer on every page, Brevo list 3
│   │   ├── RsvpModal.jsx    — RSVP form, Formspree endpoint mvzyorgw
│   │   ├── Donate.jsx       — TODO: STRIPE + TODO: 501C3 markers
│   │   ├── EventsList.jsx   — Install Party placeholder (real data TBD)
│   │   └── About.jsx, EventCard.jsx, Hero.jsx, Oath.jsx, Roadmap.jsx, Vanguard.jsx
│   ├── layouts/Layout.astro — nav + footer + all CSS imports + mobile breakpoint block
│   ├── pages/           — index, events, roadmap, oath, about, vanguard, donate
│   └── styles/
│       ├── tokens.css       — CSS custom properties (single source of truth)
│       ├── fonts.css        — @font-face rules (no CDN)
│       ├── accents.css      — Gilded Spine accent system
│       └── responsive.css   — all mobile breakpoints (never injected in components)
│           EventCard hooks: tfm-ec-grid, tfm-ec-date, tfm-ec-day, tfm-ec-action
│           Roadmap hooks:   tfm-rm-level-card, tfm-rm-level-name, tfm-rm-callout
├── astro.config.mjs     — Astro + @astrojs/react
└── package.json         — astro, @astrojs/react, react, react-dom

---

## Open Items — Blocked on External Input

| Item | Blocked on | File |
|---|---|---|
| Install Party details | Christopher confirms date, venue, city | `src/components/EventsList.jsx` |
| Donate button | EIN arrives (501c3 filing in progress) | `src/components/Donate.jsx` |
| EIN in footer | 501c3 approved | `src/layouts/Layout.astro` |

**Load the TFM project segment before any session:** `/root/.claude/memory/segments/tfm-project.md`
Build state, hardware donation strategy, and next-branch recommendation live there.

---

## Design Constraints (Non-Negotiable)

- Framework: Astro + @astrojs/react for interactive islands. No other JS frameworks.
- Styling: CSS custom properties from src/styles/tokens.css only. No Tailwind. No component libraries.
- Fonts: EB Garamond (self-hosted) + Cinzel (self-hosted — header colophon only).
- Border radius: 0px default. 2px on buttons and badges only.
- No glass effects. No dark mode.
- Gradients: Gilded Spine elements only (ribbon, spine, gilt edge, colophon rules, hemp texture).
- Design reference: docs/TFM_08_DESIGN_SYSTEM.md
- Theme reference: docs/TFM_11_BIBLE_THEME.md

---

## Brand Rules

- Faith is the backbone. The front door is open to everyone.
- Never lead with scripture in secular contexts.
- Never lead with surveillance language in church contexts.
- Three-layer brand: Layer 1 (faith/church), Layer 2 (secular/privacy),
  Layer 3 (full TFM culture for members).
