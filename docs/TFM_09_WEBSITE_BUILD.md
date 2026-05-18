# TFM_09 — WEBSITE BUILD
*The technical build brief. Everything needed to build and deploy the TFM website.*

For page copy and content direction, see TFM_05_WEBSITE_ARCHITECTURE.md.
For design tokens and visual rules, see TFM_08_DESIGN_SYSTEM.md.

---

## Stack

- Framework: Astro (static site generator — fast, simple, Cloudflare-compatible)
- Styling: CSS custom properties — no Tailwind, no framework. Design tokens from TFM_08 only.
- Fonts: EB Garamond self-hosted (Regular 400, Italic 400, Bold 700, Bold Italic) — Georgia as fallback
- Animation: Reserved for future session (Three.js dissolution effect on hero logo)
- Deployment: Cloudflare Pages via GitHub — repo is github.com/secureprospective/techfreedomministries

---

## Design Tokens

All color, spacing, and font tokens are defined in TFM_08_DESIGN_SYSTEM.md. The CSS implementation lives in `src/styles/tokens.css`. Do not duplicate token values here — TFM_08 is the single source of truth.

---

## Typography Rules (Web Implementation)

These specify the web-specific sizes and properties for each type tier. Refer to TFM_08 for the underlying design rationale.

- Eyebrow: `var(--tfm-sans)`, 11px, 0.20em tracking, uppercase, `var(--tfm-gold-muted)`
- H1: `var(--tfm-serif)`, 48px, weight 700, `var(--tfm-near-black)` + gold italic second phrase
- H2: `var(--tfm-serif)`, 36px, same two-tone pattern
- H3: `var(--tfm-serif)`, 26px, same two-tone pattern
- H4: `var(--tfm-serif)`, 19px, same two-tone pattern
- Body: `var(--tfm-sans)`, 15px, line-height 1.65, `var(--tfm-warm-brown)`
- Lead italic: `var(--tfm-serif)`, 19px, italic, `var(--tfm-warm-brown)` — used for Galatians 5:1 and key callouts

---

## Components

### Buttons
- Primary: background `var(--tfm-near-black)`, text white, 0 border-radius, padding 12px 24px
- Ghost: background transparent, border 1px solid `var(--tfm-near-black)`, hover border-color `var(--tfm-gold-deep)`
- Link: color `var(--tfm-gold-deep)`, underline, no border

### Cards
- Background: `var(--tfm-parchment-card)`
- Border: 1px solid `var(--tfm-parchment-edge)`
- Border-radius: 0px default, 2px buttons/badges only
- Hover: border-color changes to `var(--tfm-gold-deep)`
- Shadow: paper shadow only — no glass effects

### Level Badges
- Pill shape (border-radius: 999px)
- All caps, 10px, 0.20em tracking
- Use level color pairs from TFM_08
- Never use level colors outside badge context

### Vanguard Badge
- Pill shape
- Outline only: border 1px solid `var(--tfm-gold-bright)`
- Text: `var(--tfm-gold-deep)`
- No fill

### Decorative Elements
- Diamond ◆: `var(--tfm-gold-bright)`, used between nav items and as section breaks
- Short rule: 40px, 1px, `var(--tfm-gold-bright)` — under eyebrow text
- Full rule: 100%, 1px, `var(--tfm-parchment-edge)` — between sections
- Corner brackets: `var(--tfm-gold-bright)`, 1px — credential contexts only

---

## Build Sequence

Build in this order. Verify each phase before starting the next.

### Phase 0 — Coming Soon (SHIPPED)
Single page. Live on techfreedomministries.com.
- Logo centered
- Headline: "Break from the Digital Grid. Own Your Machine."
- One line: "Free events. Real tools. Coming soon."
- Email capture field + submit button
- No navigation
- Galatians 5:1 in corner bracket card at bottom
- Brevo integration pending — separate session

### Phase 1 — Site Foundation (IN PROGRESS)
- Astro project initialized ✓
- CSS tokens file created ✓
- EB Garamond font files added and self-hosted ✓
- Base layout component with nav and footer ✓
- Navigation: EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE ✓
- Logo in header ✓
- index.astro is a redirect stub — needs to be replaced with real page

### Phase 2 — Home Page
Hero section:
- Eyebrow: "A FAITH-BACKED NONPROFIT · FREE LINUX EVENTS"
- H1: "Break from the Digital Grid. Own Your Machine."
- Diamond divider
- Body: "Your phone reports on you to people you've never met. We run a free three-hour event that ends with a working laptop you actually own. No fee. No upsell."
- Primary CTA: "Find an event near you →"
- Ghost CTA: "See how it works"
- Right column: Galatians 5:1 in corner bracket card with logo above

Events preview section:
- Eyebrow: "NEXT THREE EVENTS"
- H2: "The next three. Pick one."
- Three event cards (placeholder data)
- "See all events →" link

Explainer section (three steps):
- Step 1: Come to an Install Party
- Step 2: Follow the Roadmap
- Step 3: Become a Vanguard

Donation CTA section:
- "This event cost you nothing. Help us reach the next city."
- "Give Now" button → Donate page

### Phase 3 — Events Page
- Upcoming events listed chronologically
- Each event uses the event card component
- "No events near you?" email capture section
- Church/venue hosting inquiry link

### Phase 4 — Roadmap Page
- Four level cards using level color system
- Milestones listed under each level
- FOSS equivalents reference table
- Callout box: "The Roadmap isn't a course..."

### Phase 5 — Vanguard Page
- Hero: "You already know how to fix this stuff. Most people don't."
- What a Vanguard is
- What is expected
- What they get
- Simple application form

### Phase 6 — Donate Page
- Headline: "Help us reach the next city."
- Three giving tiers with impact statements
- Donate button (Stripe or PayPal Giving Fund)
- 501(c)(3) disclosure paragraph

---

## Cloudflare Deployment

- Repo: github.com/secureprospective/techfreedomministries
- Branch: main
- Auto-deploy: enabled — every push to main goes live
- Both techfreedomministries.com and www.techfreedomministries.com connected
- Build command: npm run build (Astro default)
- Output directory: dist

---

## Navigation (Final — Four Pages)

EVENTS ◆ ROADMAP ◆ VANGUARD ◆ GIVE

Note: THE OATH is not a standalone page in current scope. Oath content folds into the Vanguard page until community size justifies its own page.

---

## Logo Files

All logo files live in `assets/` at the repo root, served at `/assets/`.

- Primary (parchment/white backgrounds): `tfm-logo-nearblack.png`
- Accent (formal print): `tfm-logo-gold.png` (pending)
- Future: SVG version needed for animation — separate session

---

## What NOT to Build Yet

- Blog
- Forum
- Merch store
- Podcast page
- Member portal
- Dark mode
- THE OATH as standalone page

Build Phase 1 through 6 in order. Get the first event on the calendar. Then add.

---

*Last updated: 2026-05-18 — Session 2*
*Built by: Christopher Campbell + Claude (Anthropic)*
