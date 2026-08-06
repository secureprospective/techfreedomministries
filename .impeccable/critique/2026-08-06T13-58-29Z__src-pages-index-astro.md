---
target: homepage (src/pages/index.astro)
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-06T13-58-29Z
slug: src-pages-index-astro
---
Method: dual-agent (A: a289005167f2fdf4d · B: a08efb2b1b4b1ff00)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "◆ Read more"/"◆ Collapse" is the only state cue, tucked in a narrow 180px column — easy to miss |
| 2 | Match System / Real World | 3 | Full Layer-3 vocabulary (Exodus/Catechism/Homestead) hits first-timers before any plain-language gloss |
| 3 | User Control and Freedom | 2 | Expanded Roadmap detail panels (~300+ lines) bury their only "Close" button at the very bottom |
| 4 | Consistency and Standards | 4 | Solid — movements/costs/milestones pattern, button styling, stamp-frame usage repeat identically |
| 5 | Error Prevention | 4 | Solid — the only interaction (expand/collapse) is non-destructive and reversible |
| 6 | Recognition Rather Than Recall | 3 | Diamond/gold/level-color system aids recognition; some low-confidence contrast risk on gold-muted labels |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode landing page, no repeat/expert workflow to accelerate |
| 8 | Aesthetic and Minimalist Design | 2 | Once expanded, Movements/Costs/Milestones sub-sections all share identical visual weight despite being different content types |
| 9 | Error Recovery | 4 | No form, no destructive action, no error state possible on this page |
| 10 | Help and Documentation | n/a | Nothing on the homepage needs in-context help; deeper pages serve that role |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict

**LLM assessment (Assessment A):** Mixed, leaning specific at the copy layer, generic at the structural layer. The sentence-level execution is genuinely TFM-specific and couldn't be lifted by another nonprofit — Galatians 5:1 in the bracket-stamp frame, the ◆ reference mark, per-level saturated badge colors, and callouts like *"Level 1 complete. You own the machine now. Nobody has root but you."* But the page's skeleton (split hero → 3-step explainer → stacked cards → dark CTA band) is a standard nonprofit/SaaS landing-page composition; strip the copy and palette and it's interchangeable. The one place composition and mission truly fuse is the Roadmap's click-to-expand level cards — the progressive-reveal interaction maps directly to "Four levels. Each one earned, never bought. You move at your own pace." That's the strongest specificity claim on the page; everything else is Gilded Spine skin over a generic frame.

**Deterministic scan (Assessment B):** 15 detector findings (12 advisory, 3 warning, 0 error) across `index.astro`/`Layout.astro`/`Roadmap.jsx` — font-size and border-radius advisories, one off-token color, and 3 `side-tab` warnings (undocumented `borderLeft: 3px solid gold` callout blocks in Roadmap.jsx at lines 146/521/1231 — resembles a generic "AI slop" tell, not a named TFM signature component; needs a visual call on whether it's intentional). **Significant coverage gap found and disclosed by Assessment B itself**: the detector's regex only matches CSS-string literals in `.astro` files and completely misses numeric JSX inline-style values, so `Hero.jsx` returned zero findings not because it's clean but because its styling is 100% JSX inline objects the ruleset can't reach. Manual grep against DESIGN.md's documented 4px spacing scale found the *dominant* pattern in Hero.jsx/Roadmap.jsx padding/margin values (6, 14, 22, 28, 44, 56, 80px) falls outside the 9-step scale — read charitably, this means DESIGN.md's spacing section is likely incomplete relative to the real half-step rhythm actually in use, not that the code drifted from a correct spec. Also surfaced: a real doc conflict between DESIGN.md ("0px default, no button-radius exception") and this project's own root CLAUDE.md ("2px on buttons and badges only") — the six `borderRadius: 2` numeric occurrences in Hero.jsx/Roadmap.jsx are a violation of DESIGN.md as written but match CLAUDE.md's stated default; flagged as an unresolved doc conflict rather than called definitively right or wrong.

**Visual overlays:** Not available. No browser automation tool was configured this session, so live-rendered/injected overlay evidence could not be produced. This critique is source-level for both assessments; anywhere either assessment expressed lower confidence for that reason, it's marked as such above and in Priority Issues below.

## Overall Impression

The homepage's voice execution is the strongest thing about it — Sanctuary Voice mostly lands, and the Roadmap section is a genuine case of interaction matching message. But three real problems compound: the Roadmap's only interaction is currently keyboard/screen-reader inaccessible (P0), DESIGN.md's own spacing/radius documentation doesn't yet match a decade of half-step values actually used in the codebase (a documentation debt, not a code bug), and the homepage front-loads full insider vocabulary (Exodus/Catechism/Homestead) on the page most likely to greet a cold, confused first-timer. The single biggest opportunity: fix the accessibility gap first since it's an outright block for one persona, then decide deliberately whether the homepage should carry a lighter, Layer-2-leaning version of the Roadmap teaser and push full Layer-3 density to the dedicated `/roadmap` page.

## What's Working

- **The Roadmap's mechanic matches its message.** Click-to-expand cards, colored per level, directly enact "Four levels. Each one earned, not bought. You move at your own pace" — the interaction *is* the metaphor, not just a caption on it.
- **Sentence-level Sanctuary Voice execution is disciplined.** Callouts like *"Level 3 complete. You stopped renting. Your data lives where you put it, and nowhere else"* are concrete and specific — not generic inspirational copy — and the Exodus detail's "Eviction" metaphor names dread and resolves it in the same paragraph.
- **The system's own restraint rules hold up against real code.** Crimson appears exactly once (the ribbon), border-radius is 0 everywhere except pill badges in the CSS-token layer, and there is zero `box-shadow`/`boxShadow` across all four reviewed files — DESIGN.md's claims check out, not just asserted.

## Priority Issues

**[P0] Roadmap level cards are keyboard/screen-reader inaccessible.**
- **Why it matters:** `LevelCard`'s clickable `<article>` (`Roadmap.jsx` ~1492) has `onClick` and nothing else — no `role="button"`, no `tabIndex`, no `onKeyDown`, no `aria-expanded`. This is the homepage's only interactive mechanism and its richest content is completely unreachable by keyboard-only or screen-reader users.
- **Fix:** render the clickable region as a real `<button>` wrapping the card content, or add `role="button" tabIndex={0}` plus an `onKeyDown` handler for Enter/Space, and set `aria-expanded={isOpen}`.
- **Suggested command:** `/impeccable harden`

**[P1] Hero's stakes clause outscopes its resolution (Sanctuary Voice gap).**
- **Why it matters:** `Hero.jsx` line 106 names phone, computer, *and* car surveillance as stakes; the resolving sentence only addresses the computer. Per PRODUCT.md's own Sanctuary Voice rule ("never leave the reader sitting in the threat"), phone and car surveillance are named and then abandoned — nothing on the page or in the Roadmap resolves them.
- **Fix:** narrow the stakes clause to what the Install Party actually delivers, or add a bridging clause acknowledging scope (e.g. "We start with the machine in your hands").
- **Suggested command:** `/impeccable clarify`

**[P1] Likely contrast failure on gold-muted micro-copy inside dark panels.**
- **Why it matters:** `--tfm-gold-muted` (#8B7355) renders 10-14px uppercase labels against `--tfm-near-black` (#1C1209) throughout the expanded Roadmap detail panels. Hand-calculated contrast is roughly 3.5-4:1, likely under WCAG AA's 4.5:1 for text this size. Unverified live (no browser this session) — flagged as a real risk, not a confirmed fail.
- **Fix:** verify with a live contrast checker; if it fails, bump size past the 18px large-text threshold or use a lighter value for dark-surface instances specifically.
- **Suggested command:** `/impeccable audit`

**[P2] Expanded detail panels bury their only Close control.**
- **Why it matters:** `ExodusDetail`'s close button sits after roughly 300 lines of movements/scripture/costs/milestones content. A visitor who opens a level out of curiosity and finds it dense has no quick exit without a long scroll.
- **Fix:** add a lightweight "Collapse ↑" affordance near the level badge at the top of the open panel, in addition to the existing bottom button.
- **Suggested command:** `/impeccable layout`

**[P2] Full Layer-3 vocabulary front-loaded on the page most likely to greet a cold first-timer.**
- **Why it matters:** PRODUCT.md's own three-layer voice model reserves Exodus/Catechism/Homestead/Vanguard density for members who already know what they signed up for (Layer 3), yet the homepage Roadmap teaser leads with that vocabulary in its eyebrow/badges before the plain-language description ("Install Linux on a real machine...") — which sits in the third grid column, not first.
- **Fix:** consider leading each collapsed card with the plain-language blurb and pushing the mythology name (Exodus, Catechism, etc.) to a secondary position, reserving full density for the dedicated `/roadmap` page.
- **Suggested command:** `/impeccable clarify`

## Persona Red Flags

**Sam (accessibility-dependent user):** Blocked outright by the P0 above — cannot open a single Roadmap level with keyboard or screen reader. Additionally, decorative ◆ glyphs inside step/milestone lists have no `aria-hidden`, so a screen reader announces "diamond" before every one of 15+ list items on an open panel.

**Jordan (confused first-timer):** Hits "Exodus," "Catechism," "Homestead," "Great Commission," and "Vanguard" before any plain-language gloss — the actual plain description is the third column of a three-column grid, not the lead element. Also has no visual cue that cards are clickable at all (see next issue).

**Casey (distracted mobile user):** Opening any Roadmap level on mobile triggers a very long single-column scroll (five-plus stacked boxed sections) before reaching a CTA — real bounce risk on what's meant to be a homepage summary, not the full `/roadmap` detail experience.

## Minor Observations

- No hover feedback on clickable Roadmap cards (`cursor: pointer` set, but no border/background change) — weak discoverability, especially since touch users never see the cursor at all.
- "Find an event near you" / "Find an Event" appears verbatim three times in one scroll (Hero, Exodus detail CTA, closing action bay) — not wrong, but a missed chance for distinct CTA copy per context.
- `data-tfm-animate="dissolution"` (Hero.jsx) is an unimplemented Three.js hook; current experience is the static PNG fallback only.
- `Card` atom in `Atoms.jsx` carries a `boxShadow` — the one place in the codebase that appears to violate DESIGN.md's own No-Shadow Rule. Not used on the homepage directly, worth a pass if reused elsewhere.
- Level 2's badge color (#5C4500/#F0C85A, olive-gold) sits close in hue to the system's signature gold-bright accent — worth a live visual check on whether it muddies "gold is the one true accent" specifically on the Catechism card.
- Detector's `side-tab` warnings (Roadmap.jsx:146/521/1231) flag left-border callout blocks that match no named DESIGN.md signature component — plausibly intentional editorial styling, but genuinely undocumented; worth a deliberate call rather than leaving it ambiguous.
- DESIGN.md vs root CLAUDE.md conflict on button-radius exception (0px-only vs "2px on buttons and badges") should be resolved explicitly so future critiques don't keep flagging the same six lines.

## Questions to Consider

- If the homepage Roadmap section is most first-timers' first exposure to TFM's mythology, should it lead with Layer 2 plain language and let `/roadmap` carry full Layer 3 density?
- The click-to-expand Roadmap card is the homepage's only real interaction — what would it look like if the interaction itself taught the lesson (something evoking "you type, the machine responds") instead of being a generic accordion?
- At what scroll depth does a distracted mobile visitor reach the first fully-resolved sanctuary moment — would pulling one strong resolution beat above the fold change how many people bounce before reaching the Roadmap at all?
