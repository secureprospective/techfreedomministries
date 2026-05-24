# TFM_11 — THE GILDED SPINE THEME
*Visual theme extension. Supplements TFM_08. These rules layer on top of the base design system — they do not replace it.*

---

## What This Theme Is

The Gilded Spine theme applies the visual language of a classic leather-bound Bible across the entire TFM website. The reference points are specific: hand-tooled dark leather, gilt-edged hemp pages, crimson ribbon bookmark, embossed gold spine notches.

This is not decoration. It is the physical object that the mission most resembles — a document of lasting consequence, handled repeatedly, passed from person to person.

---

## The Two Signature Elements (Non-Negotiable)

These two elements must appear on every page of the site. They are the theme's identity.

### 1. The Dark Header Band

The site navigation header is not parchment. It is dark leather.

- Background: `#2A1F0E` (deep tooled leather — darker than near-black, warmer)
- Minimum height: `56px`
- Subtle crosshatch texture overlay: repeating diagonal lines at 45deg and -45deg, `rgba(196,168,74,0.03)` — barely visible, gives the surface tactile weight
- Left and right edges: no border. The darkness is the boundary.
- Bottom edge: `1px solid rgba(196,168,74,0.35)` — a thin gold seam where leather meets page

**The centered diamond ornament:**
- Position: left side of header, flex-aligned with the nav on the right
- Character: `◆` at 10px, color `#C4A84A`
- Flanked by two horizontal rules: `width: 48px`, `height: 1px`, gradient fading outward to transparent
- The wordmark "TECH FREEDOM MINISTRIES" sits directly below in Cinzel, `10px`, `0.30em` letter-spacing, color `var(--tfm-gold-muted)`
- This ornament + wordmark pairing is the colophon. It does not move. It does not animate.

### 2. The Crimson Ribbon Bookmark

The ribbon is a persistent structural element, not a decorative flourish.

- Position: `fixed`, `right: 48px`, `top: 0` — hangs from the top of the viewport at all times
- Width: `18px`
- Visible length: `72px`
- Shape: rectangle with a pointed bottom — `clip-path: polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)`
- Color: `linear-gradient(180deg, #6B1212 0%, #8B1A1A 100%)`
- No shadow. No border. No hover state. Does not interact.
- On mobile (below 768px): hidden. Header band remains.
- z-index: 100 — above page content, below modal overlays

---

## Extended Theme Elements

### 3. The Gold Spine Strip

A fixed 6px strip on the far left edge of the viewport, always visible on desktop.

- `position: fixed; left: 0; top: 0; bottom: 0; width: 6px`
- `background: linear-gradient(180deg, #8B6914 0%, #C4A84A 35%, #8B6914 65%, #C4A84A 85%, #8B6914 100%)`
- z-index: 200
- Hidden on mobile (below 768px)

### 4. The Hemp Page Texture

The parchment background gains a subtle woven texture — directional line work, not noise.

```css
background-image:
  repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(180,160,100,0.06) 39px, rgba(180,160,100,0.06) 40px),
  repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(180,160,100,0.05) 27px, rgba(180,160,100,0.05) 28px);
```

Applied to `body`. If the grid is clearly visible at normal reading distance, reduce opacity until it disappears at a glance.

### 5. The Gilt Edge on Cards

A 2px gold gradient strip on the right edge of every card — simulates the gilt pages of a Bible.

- Implementation: `position: relative` on card + `::after` pseudo-element
- `::after`: `position: absolute; top: 0; right: -2px; width: 2px; height: 100%`
- `background: linear-gradient(180deg, #C4A84A, #8B6914, #C4A84A)`
- Applied via `.tfm-gilt-edge` class
- Applied to: event cards, Roadmap level cards, card components in Donate + About + Vanguard
- Not applied to: buttons, badges, inline elements

### 6. The Ledger Section Rule

Already implemented (Session 8). Under every major section-opening H2.
Class: `.tfm-ledger-rule`

### 7. The Marginal Reference Mark

Already implemented (Session 8). A `◆` glyph before key doctrinal content.
Class: `.tfm-ref-mark`

### 8. The Stamped Certification Frame

Already implemented (Session 8) via the `Brackets` component from Atoms.jsx.
Full 4-corner bracket treatment on Vanguard "What You Get" and Roadmap level callouts.

---

## Color Additions (New Tokens)

```css
--tfm-leather: #2A1F0E;
--tfm-leather-mid: #1E160A;
--tfm-crimson: #8B1A1A;
--tfm-crimson-deep: #6B1212;
--tfm-gilt: #C4A84A;      /* alias for --tfm-gold-bright */
--tfm-gilt-deep: #8B6914; /* alias for --tfm-gold-deep */
--tfm-cinzel: 'Cinzel', 'Trajan Pro', Georgia, serif;
```

## Typography Addition

Cinzel is used exclusively for the header colophon wordmark and credential-level labels.
Must not bleed into body copy or general eyebrow labels.

Loaded via Google Fonts (future: self-host alongside EB Garamond):
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
```

---

## Implementation Notes (Astro Architecture)

This site is Astro + @astrojs/react, NOT vanilla HTML. Translations:

| Theme Brief Reference | Actual File |
|---|---|
| `index.html` | `src/layouts/Layout.astro` |
| `colors_and_type.css` | `src/styles/tokens.css` + `src/styles/accents.css` |
| `Nav.jsx` | Nav section inside `Layout.astro` |
| `Footer.jsx` | Footer section inside `Layout.astro` |

Ribbon and spine go directly in `Layout.astro` `<body>` — no React root wrapper needed.
Gilt edge goes in `src/styles/accents.css`.
New tokens go in `src/styles/tokens.css`.

---

## Application by Page

| Page | Spine Strip | Ribbon | Header Band | Hemp Texture | Gilt Edge | Stamp Frame |
|---|---|---|---|---|---|---|
| Home | Yes | Yes | Yes | Yes | Event cards | No |
| Events | Yes | Yes | Yes | Yes | Event cards | No |
| Roadmap | Yes | Yes | Yes | Yes | Level cards | Level callouts |
| Vanguard | Yes | Yes | Yes | Yes | Credential card | What You Get |
| Donate | Yes | Yes | Yes | Yes | Tier cards | No |

---

*Last updated: 2026-05-24 — Session 8 (Gilded Spine implementation)*
*Built by: Christopher Campbell + Claude (Anthropic)*
