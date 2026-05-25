# TFM_14 — Dual-AI Design Workflow
*Read this at the start of any session that uses an external AI for visual design work.*

---

## What This Workflow Is

TFM runs two AI systems in tandem for front-end design work. They do not share a filesystem. Christopher is the sole transfer mechanism between them.

| Role | System | Scope |
|---|---|---|
| **Visual Architect** | External AI (browser) | Screenshot audits, layout recommendations, structured specs. Never writes code. |
| **Execution Engine** | Claude Code (terminal) | Codebase verification, implementation, build integrity. Never guesses from screenshots. |
| **Pilot and Bridge** | Christopher | Captures screenshots, relays context between systems, final approval on everything. |

**Why this works:** The external AI sees what the page looks like. Claude Code knows what the page actually is. Neither can do the other's job. Christopher's relay closes the loop.

---

## Session Start Protocol

### Claude Code — before accepting any design instruction

1. Read `CLAUDE.md` completely
2. Read the relevant component file(s) — know the actual structure before planning anything
3. Check `responsive.css` — know which className hooks already exist for the page
4. When external AI output arrives: cross-reference every suggestion against the actual code
5. State clearly what's already done vs. what is genuinely new work
6. Present a plan. Wait for Christopher's confirmation. Then implement.

### External AI — before reviewing any screenshots

Receive this context block from Christopher before any screenshot is submitted:

```
PAGE: [page name]
VIEWPORT: [375px mobile / 1440px desktop]

SECTIONS ON THIS PAGE (top to bottom):
1. [Section name] — [brief description]
2. [Section name] — [brief description]
...

ALREADY HANDLED (do not flag these):
- [className hook] → [what it covers]
...

NOT YET HANDLED (focus here):
- [Section name] — [what's not wired yet]
...

SYSTEM RULES (enforce every time):
- Gilded Spine design system — parchment, leather, gold tokens only
- EB Garamond (serif) + Inter (sans) + Cinzel (header colophon only)
- No rounded corners (0px default, 2px on buttons/badges only)
- No glass effects, no pill shapes, no dark mode, no gradients except Gilded Spine accents
- No Tailwind. No component libraries.
- Mobile breakpoint: 768px

YOUR OUTPUT FORMAT:
For each problem found:
1. Section name
2. What's wrong (visual description)
3. Suggested fix (layout/spacing only)
4. Priority: High / Medium / Low

Layout and spacing only. No copy changes. No code. Plain English.
```

---

## Claude Code's Verification Gate

Every external AI output passes through this filter before any code is written:

| Check | Action |
|---|---|
| Section described — does it exist in the component? | Read the file. Confirm. |
| Fix suggested — is it already implemented? | Check responsive.css and existing className hooks. |
| AI describes a section that doesn't exist | Flag to Christopher. Skip it. Do not implement. |
| AI suggests a copy change | Mark ⚠️ COPY FLAG. Original stays unless Christopher explicitly approves. |
| AI suggests something that violates CLAUDE.md constraints | Catch it here. Do not implement. State the conflict. |

**The gate exists because:** The external AI works from screenshots and context summaries. It does not see the actual code. It will occasionally describe things that are already built, reference elements that are hidden on the viewport being reviewed, or suggest design patterns that conflict with TFM's constraints. Claude Code catches all of this before a single line is written.

---

## Copy Change Protocol

The external AI will suggest copy changes. It will occasionally write good ones.

- Every copy suggestion gets flagged: **⚠️ COPY FLAG — AI-written copy**
- Original stays in place by default
- Change only when Christopher explicitly says to change it
- "The local AI guesses. Flag it — it could surprise me." — treat all AI copy as a suggestion, not a directive

---

## Known Failure Modes

From the external AI's own post-session notes:

**Screenshots without component context** — The AI invented sections or mis-described structure when it only had images and no component inventory. Fix: always include the section index and existing hooks before submitting screenshots.

**Over-application of decorative elements** — The AI recommended stamps and ledger rules on sections that were already balanced. Fix: Claude Code cross-references before planning. Already-done items get removed from the work list.

**Viewport bleed** — During a mobile audit, the AI described the gold spine strip (which is `display: none` on mobile). Fix: state the exact viewport in every prompt. The AI reasons from what it knows about the design system, not just what's in the screenshot.

From the Claude Code side:

**Implementing before reading the file** — Always read the component before planning. Never implement from the external AI description alone.

**Inline style vs. className specificity conflicts** — Inline styles in JSX override responsive.css class rules. When adding mobile overrides for elements with inline styles, use `!important` in responsive.css or check for conflicts.

**Brackets does not accept className** — Wrap in a div to apply responsive hooks. This is the established pattern.

---

## Design Constraints Quick Reference

The external AI operates within these. Claude Code enforces them.

| Token | Use |
|---|---|
| `--tfm-parchment` | Page background |
| `--tfm-parchment-card` | Elevated card surfaces |
| `--tfm-parchment-edge` | Borders, dividers |
| `--tfm-near-black` | Primary text, dark fills |
| `--tfm-gold-bright` | Active accent, corner brackets |
| `--tfm-gold-deep` | Italic headlines, quiet gold links |
| `--tfm-gold-muted` | Ledger rules, eyebrows |
| `--tfm-warm-brown` | Body text |
| `--tfm-leather` | Dark section backgrounds |

Full token source: `src/styles/tokens.css`
Full design rules: `docs/TFM_08_DESIGN_SYSTEM.md`
Gilded Spine theme: `docs/TFM_11_BIBLE_THEME.md`

---

## The Mobile Pattern

All mobile overrides follow this convention — no exceptions:

- className hooks on JSX elements (never inline breakpoints in components)
- All overrides written in `src/styles/responsive.css` inside `@media (max-width: 768px)`
- Hook naming pattern: `tfm-[page-prefix]-[section]-[element]`
  - Example: `tfm-dn-hw-cta-bar` → Donate / Hardware / CTA bar
- Use `!important` on overrides — inline styles in JSX have higher specificity than class rules

---

## Branching and Push Rules

- No work on main. Ever.
- Branch: `session/short-description`
- Clean build required before every merge (`npm run build` — 7 pages, no errors)
- Merge to main only after Christopher confirms the live site looks correct
- No `git --no-verify` under any circumstances

---

## What This Workflow Optimizes

The two-AI model exists for one reason: it reduces token spend on visual iteration while keeping code quality under a single verified execution layer.

The external AI does the visual reasoning cheaply from screenshots. Claude Code does the codebase reasoning from the actual source. Christopher decides what ships. No guessing from either AI. No visual work from Claude Code without screenshots. No code from the external AI, ever.

The result: faster iteration, lower cost, and a codebase that only gets touched when the change is verified and planned.

---

*Document created: May 2026*
*Built from: post-session notes from both AI systems + Christopher Campbell*
*Next doc: TFM_01_MASTER_FRAMEWORK.md for full project index*
