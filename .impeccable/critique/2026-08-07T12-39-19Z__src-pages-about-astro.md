---
target: about page
total_score: 18
max_score: 20
na_heuristics: 1,5,7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T12-39-19Z
slug: src-pages-about-astro
---
Method: dual-agent (A: a6c61cca617fdf4d7 · B: af958a436a173249d)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | n/a | Static content page, no state to report |
| 2 | Match System / Real World | 4 | Field-manual/credential metaphor consistent; Is/Isn't ledger format reads instantly |
| 3 | User Control and Freedom | 3 | Single exit link at bottom; no way back up except browser scroll — acceptable for a short page |
| 4 | Consistency and Standards | 4 | Reuses Atoms primitives exactly per DESIGN.md; no ad hoc styling |
| 5 | Error Prevention | n/a | No forms or destructive actions |
| 6 | Recognition Rather Than Recall | 3 | Roadmap/Vanguard/Great Commission fire cold with zero inline gloss until the closing line |
| 7 | Flexibility and Efficiency | n/a | Marketing/identity page, no power-user paths |
| 8 | Aesthetic and Minimalist Design | 4 | Is/Isn't card is the whole page's structural spine; nothing decorative added beyond it |
| 9 | Error Recovery | n/a | No error states present |
| 10 | Help and Documentation | n/a | Not that kind of interface |
| **Total** | | **18/20** | **Excellent (90%)** |

## Design Specificity Verdict

**LLM assessment**: Specific, not generic. Copy cites TFM's own vocabulary and Sanctuary Voice pattern rather than filler; the Is/Isn't ledger format is a confident, on-brand structural choice no template would produce by default.

**Deterministic scan**: `detect.mjs` on `src/pages/about.astro` + `About.jsx` returned zero findings, reconfirmed with `--no-config` to rule out suppression — genuinely clean by the automated rules.

**Visual overlays**: Playwright confirmed no horizontal scroll and no text clipping at desktop (1440x900) or mobile (390x844). A 3px `scrollWidth`/`clientWidth` delta on `.tfm-gilt-edge` is the documented gilt-edge bleed (DESIGN.md: the strip intentionally hangs 2-3px outside the card border to read as a separate material) — not a bug. **`.tfm-ink-link`'s underline draw-in was confirmed working via computed style**: `background-size` measured `0% 1px` at rest → `100% 1px` after hover, matching `accents.css:204-216` exactly.

One tooling caveat: both screenshots showed a small floating icon cluster near the mission paragraph, at an identical fixed position across both viewports — consistent with a browser-extension/devtools overlay in the automated session rather than a real page element (not present in the DOM overflow scan). Flagged as unverified, not treated as a site defect.

## Overall Impression

This is the strongest-scoring page in the pass so far (90%), and it earns it — the Is/Isn't card is TFM's identity boiled to its sharpest, most confident statement anywhere on the site. The main gap is that a page whose job is explaining TFM to strangers spends its entire length in resolution mode with no stakes clause, and drops three unglossed mythology terms before the one link that would let a confused reader recover.

## What's Working

1. **The Is/Isn't card** is the site's clearest identity statement — "A church. We work with churches. We are not one." is exactly the direct, unhedged voice PRODUCT.md asks for.
2. **Zero detector findings and zero DESIGN.md drift** — full component/token discipline, nothing here fights the system.
3. **The new ink-catch closing link lands well**: subtle, on-brand (ink bleeding into parchment fiber, not a modern link-hover), reuses the sitewide primitive rather than inventing new motion, and directly answers the negative "Isn't" framing with a forward path.

## Priority Issues

**[P1] Mythology vocabulary unglossed on the one page that should carry the glossary**
Why it matters: "Roadmap," "Vanguard," "Great Commission" fire cold with no inline definition or link until the very last line. A first-time visitor (PRODUCT.md's "entry point person") hits three unexplained proper nouns before any payoff.
Fix: link "four-level Roadmap" and "Vanguards" inline to `/roadmap` and `/vanguard` on first mention, or add one clause of plain-language gloss.
Suggested command: `/impeccable clarify`

**[P1] No stakes clause anywhere on the page**
Why it matters: Sanctuary Voice is stakes-then-resolution; this page is 100% resolution. It reads pleasant but skips the "name the real encroachment" work Brand Commitments requires of identity-defining pages, silently deferring that job to Hero/Roadmap — but About is often the second page a skeptical visitor reads.
Fix: one sentence in the opening paragraph naming what's actually being escaped (data harvesting, forced obsolescence) before pivoting to mission.
Suggested command: `/impeccable clarify`

**[P2] The single CTA is visually subordinate to the deflating content above it**
Why it matters: the link sits small (14px) under five negative-framed "Isn't" bullets — for the page's only forward action, that's a weak visual position.
Fix: consider mirroring a lighter-weight link under the "Is" card too, or give this link's type a slightly heavier step (still restrained, not a button).
Suggested command: `/impeccable layout`

**[P3] No visual transition cue from the mission block into the Is/Isn't grid**
Why it matters: four distinct blocks share matching gaps but nothing signals the grid is the payoff of the mission text above it.
Fix: minor, address opportunistically alongside other layout passes.
Suggested command: `/impeccable layout`

## Persona Red Flags

**Jordan (First-Timer / PRODUCT.md's "entry point person")**: "digital sovereignty is a stewardship question" lands as the second sentence — "stewardship" is Layer-1 (church) register leaking into what should be a neutral, Layer-2-safe front door. The page doesn't declare which audience layer it's speaking to and mixes registers.

**The "almost there" Linux user (PRODUCT.md persona)**: nothing on this page gives them a foothold — no terminal/self-hosting language at all; the page skews entirely toward newcomer framing.

## Minor Observations

- The "Isn't" list's fifth item ("Funded by donations from any platform we teach you to leave") is dense for a skim-reader; consider a plainer parallel like "We won't take money from Big Tech."
- One assessment flagged a "pending gold-muted contrast decision" from project CLAUDE.md as a risk on this page — **verified false**: `About.jsx` uses `--tfm-gold-deep` (#8B6914), not `--tfm-gold-muted`, and that token was already resolved project-wide in a prior session (split into `-on-light`/`-on-dark` variants). The project `CLAUDE.md`'s "Open, needs a decision" note is itself stale documentation that was never updated after the fix — worth a quick doc cleanup, not a page-level bug.

## Questions to Consider

1. Should About declare its brand layer (1/2/3) explicitly in its copy contract, since it currently free-mixes Layer 1 stewardship language into what's meant to be everyone's front door?
2. Is a single link at the bottom of the "Isn't" card enough resolution for a page that spends five bullets telling the visitor what TFM refuses to be — or does that negative framing need its own positive close, not just an escape hatch?
