---
name: Tech Freedom Ministries
description: Giving freedom with a fishing pole — a faith-backed digital-freedom nonprofit teaching Linux literacy through free Install Parties.
colors:
  parchment: "#F4F0E6"
  parchment-card: "#ECE6D6"
  parchment-edge: "#D9D0B8"
  near-black: "#1C1209"
  warm-brown: "#4A3F2F"
  warm-brown-soft: "#6E5F4A"
  gold-deep: "#8B6914"
  gold-bright: "#C4A84A"
  gold-muted: "#8B7355"
  leather: "#2A1F0E"
  leather-mid: "#1E160A"
  crimson: "#8B1A1A"
  crimson-deep: "#6B1212"
  level-1-bg: "#1D4D2A"
  level-1-text: "#A8D4B2"
  level-2-bg: "#5C4500"
  level-2-text: "#F0C85A"
  level-3-bg: "#5C1A1A"
  level-3-text: "#F0A8A8"
  level-4-bg: "#2C2C1A"
  level-4-text: "#C8C890"
typography:
  display:
    fontFamily: "'EB Garamond', Georgia, serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "'EB Garamond', Georgia, serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "'EB Garamond', Georgia, serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0.01em"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.20em"
  colophon:
    fontFamily: "'Cinzel', 'Trajan Pro', Georgia, serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: "0.20em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
components:
  button-primary:
    backgroundColor: "{colors.near-black}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-ghost-hover:
    textColor: "{colors.gold-deep}"
  card:
    backgroundColor: "{colors.parchment-card}"
    rounded: "{rounded.none}"
    padding: "{spacing.s6}"
  badge-vanguard:
    backgroundColor: "transparent"
    textColor: "{colors.gold-deep}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Tech Freedom Ministries

## Overview

**Creative North Star: "The Gilded Spine"**

TFM's visual language is a leather-bound Bible — a document of lasting consequence, handled repeatedly, passed from person to person. Every page is a page in that book: parchment ground, hand-tooled leather header, gilt page-edge on cards, a crimson ribbon bookmark, a gold spine strip running the full height of the viewport. The system reads as issued and earned, never sold — closer to a field manual or a credential than a product marketing site.

The voice this system carries is the **Sanctuary Voice** (see `PRODUCT.md` Brand Commitments): real threats named plainly, resolved to agency and ownership rather than left in dread. Visually this means the system can go dark and heavy (the leather header, the near-black CTA bands) without ever reading as menacing — the gold accents and parchment warmth are the sanctuary the dark sections resolve into.

Confirmed visual rejections: not modern tech (no blue, no rounded corners in UI, no gradients outside the Gilded Spine accent system itself), not evangelical megachurch (no neon, no bold sans headlines, no manufactured "excitement"), not activist poster (no stark black/white, no protest energy), not corporate nonprofit (no stock photography, no gradient banners).

**Key Characteristics:**
- Parchment-and-leather material world: warm off-white pages, dark leather surfaces, gold gilt accents, crimson as a single sparing highlight.
- Sharp corners everywhere except pill-shaped badges (the one deliberate exception — badges read as wax-seal-like credential marks, not UI chrome).
- Serif (EB Garamond) carries all weight-bearing text; sans (Inter) carries labels, body copy, and UI; Cinzel is reserved for the header wordmark only.
- The ◆ diamond is the system's recurring mark — reference anchor, section divider, list bullet substitute.
- Four Roadmap levels each carry their own bg/text color pair, distinct from the core parchment/leather/gold palette — these are the one place saturated, near-jewel-toned color appears.

## Colors

The palette reads as parchment and leather with gold as the only true accent; color is used to mark weight and authenticity, not to decorate.

### Primary
- **Gold Bright** (`#C4A84A`): the system's single accent. Rules, ◆ marks, gilt edges, active/hover states, the Vanguard credential border. Used sparingly — its rarity is what makes it read as gilt rather than decoration.
- **Gold Deep** (`#8B6914`): links, italic emphasis, hover states on dark surfaces, deeper accent role paired with Gold Bright.

### Neutral
- **Parchment** (`#F4F0E6`): the default page background — warm off-white, never pure white.
- **Parchment Card** (`#ECE6D6`): card and panel surfaces, one step darker than the page.
- **Parchment Edge** (`#D9D0B8`): borders, hairline rules, dividers.
- **Near Black** (`#1C1209`): primary text color and the system's dark UI surface (buttons, CTA bands) — warm black, never a cool gray-black.
- **Warm Brown** (`#4A3F2F`): body copy color.
- **Warm Brown Soft** (`#6E5F4A`): secondary/de-emphasized text ("What TFM Isn't" list, footnotes).
- **Gold Muted** (`#8B7355`): eyebrows, reference marks — a desaturated gold for text that needs the gold family without competing with Gold Bright's accent role.

### Named Rules
**The Leather Rule.** Dark surfaces (`--tfm-leather` `#2A1F0E`) are reserved for header, footer, and section bands that mark a shift in register (the CTA band, expanded Roadmap detail headers, the Donate loop section) — never used as a default background.

**The Crimson Rule.** Crimson (`#8B1A1A`) appears only as the ribbon bookmark motif. It is not a general accent color and does not appear in buttons, links, or badges.

## Typography

**Display Font:** EB Garamond (with Georgia, serif fallback)
**Body/Label Font:** Inter (with system-ui, sans-serif fallback)
**Colophon Font:** Cinzel (with Trajan Pro, Georgia fallback) — header wordmark only

**Character:** EB Garamond carries every headline and any text meant to feel earned or historical (proclamations, credential copy, scripture); Inter carries everything functional (body paragraphs, labels, buttons, navigation). Cinzel appears in exactly one place — the header wordmark — for an embossed, engraved feel; it must never spread into body headlines.

### Hierarchy
- **Display (h1)** (700, 48px, 1.2): page-level proclamations, hero headlines.
- **Headline (h2)** (700, 36px, 1.2): major section openers.
- **Title (h3)** (700, 26px, 1.2): sub-section headers, Roadmap detail panel headers.
- **Body** (400, 15px, 1.65, letter-spacing 0.01em): all paragraph copy; the site favors medium-length lines rather than a hard ch-limit, but Hero/CTA copy blocks are typically capped near 44–62ch via inline `maxWidth`.
- **Label** (400, 11px, letter-spacing 0.20em, uppercase): eyebrows and reference marks.

### Named Rules
**The Proclamation Rule.** A heading pairs a bold, near-black declarative clause with an italic, gold-deep resolution clause on the line below (`strong` + `italic` in the `Proclamation` atom) — the visual form of the Sanctuary Voice's stakes-then-agency pattern.

## Layout

Content is constrained to a `1100px` max-width container with `36px` horizontal padding on most sections, widening to `64-72px` on full-bleed dark bands (Vanguard hero/apply, Donate loop/hardware sections). Spacing follows a 4px-based scale (`--s1` 4px through `--s9` 96px); section vertical padding typically runs `72-96px`, card internal padding `24-32px`. Roadmap level cards use a fixed `180px` first column (level number/name) against two flexible content columns. Below `768px`, multi-column grids (explainer steps, About cards, Roadmap card columns) collapse to a single column; see `src/styles/responsive.css` for the full breakpoint set (never inline in components).

## Elevation & Depth

Flat by default — no drop shadows anywhere in the system. Depth and hierarchy are conveyed through material shift (parchment → parchment-card → leather) and the **gilt edge**: a 2-3px gold gradient strip on the right side of a card, simulating a gilt page edge rather than a cast shadow. This is a functional signature, not decorative background noise.

### Named Rules
**The No-Shadow Rule.** Never add `box-shadow` for elevation. If a card or panel needs to read as "raised" or "important," use the gilt-edge treatment (`.tfm-gilt-edge`) or a `.tfm-stamp` corner-bracket frame instead.

## Shapes

Sharp, ledger-like geometry everywhere except one deliberate exception. Buttons and cards use `border-radius: 0`. Level badges and the Vanguard badge are the single exception at `border-radius: 999px` (full pill) — read as a wax-seal/credential mark, not a UI affordance, so the exception doesn't erode the sharp-corner rule elsewhere. Corner-bracket "stamp" frames (`.tfm-stamp` / `.tfm-stamp--light`) use diagonal asymmetry — bracket detail top-left and bottom-right only — deliberately reading as military coordinates/field-manual marks rather than a symmetric frame.

## Components

### Buttons
- **Shape:** square corners (0px radius), no exceptions.
- **Primary:** near-black background (`#1C1209`), white text, `12px 24px` padding, Inter 14px with `0.08em` letter-spacing.
- **Hover:** background shifts to Gold Deep (`#8B6914`).
- **Ghost:** transparent background, near-black text, `1px solid near-black` border; hover shifts border and text color to Gold Deep.

### Badges
- **Level badges (1-4):** pill-shaped (999px), each level has its own bg/text color pair (see Colors frontmatter `level-1` through `level-4`) — distinct from the core palette, the system's one place for saturated jewel-tone color.
- **Vanguard badge:** pill-shaped, transparent background, `1px solid` Gold Bright border, Gold Deep text — deliberately without a level color, since Vanguard sits outside the four-level system.

### Cards / Containers
- **Corner Style:** square (0px radius).
- **Background:** Parchment Card (`#ECE6D6`) on Parchment page background; hover state shifts border color to Gold Deep.
- **Shadow Strategy:** none — see Elevation & Depth. Depth comes from the gilt-edge accent or a `.tfm-stamp` bracket frame.
- **Border:** `1px solid` Parchment Edge (`#D9D0B8`) at rest.
- **Internal Padding:** `32px` typical (`--s6`).

### The Stamp Frame (signature component)
Two weights sharing one language: `.tfm-stamp` (full 1px border + four diagonal corner brackets, used for the Vanguard credential and Roadmap level callouts — reads as "issued") and `.tfm-stamp--light` (corner brackets only, no full border, used for Hero and CTA contexts — reads as "you are entering something" without full credential weight). Both use Gold Bright for the border/bracket color. The bracket asymmetry (detail only at top-left and bottom-right) is a deliberate, repeatable signature — do not make it symmetric.

### The Gilt Edge (signature component)
`.tfm-gilt-edge`: a 2-3px vertical gradient strip (Gilt Deep → Gilt → Gilt Deep → Gilt → Gilt Deep) on the right edge of a card, offset slightly outside the card's own border so it reads as a separate physical material (a book's page edge), not part of the card surface itself.

### Navigation
Header renders on a dark leather surface globally (via `Layout.astro`), with the gold spine strip and crimson ribbon bookmark as fixed global decoration. Nav link typography follows the Label spec (Inter, uppercase, wide letter-spacing).

## Do's and Don'ts

### Do:
- **Do** use EB Garamond for anything meant to feel earned, historical, or declarative (headlines, credential text, scripture, proclamations).
- **Do** use the ◆ diamond as the system's recurring mark for reference points, dividers, and list bullets — not a generic bullet glyph.
- **Do** reserve Cinzel exclusively for the header wordmark.
- **Do** use the gilt-edge or stamp-frame treatments for anything that needs to read as elevated or important — never a drop shadow.
- **Do** give Level badges their own saturated bg/text color pair per level; keep that saturation out of the rest of the palette.

### Don't:
- **Don't** add `box-shadow` anywhere for elevation — this system is flat by design (The No-Shadow Rule).
- **Don't** round corners on buttons or cards — 0px is the rule; pill badges are the one confirmed exception.
- **Don't** use blue, pastels, gradients (outside the Gilded Spine gilt/gold system), glassmorphism, or full-bleed stock photography — these read as generic modern-tech or corporate-nonprofit, both confirmed anti-references.
- **Don't** use crimson as a general accent — it is reserved for the ribbon-bookmark motif only.
- **Don't** let Sanctuary Voice's stakes language (see PRODUCT.md) go unresolved on a page — every dark/heavy visual passage (leather bands, expanded Roadmap detail headers) should carry copy that names a real threat and then resolves to agency, matching the visual resolution from leather back to parchment/gold.
