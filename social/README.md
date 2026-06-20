# TFM Social Media Assets

Brand assets and copy for Tech Freedom Ministries' social channels (YouTube, LinkedIn, X).
Built 2026-06-20. All imagery derives from the TFM logo motif (cross on a dissolving
circuit mound), generated in **Gemini** and finished here (sized, composited, typeset)
on CT105 with Python/Pillow. Brand source of truth: `docs/TFM_12_CREATIVE_BRIEF.md`.

## Folders

| Folder | Contents |
|---|---|
| `_source/` | Raw Gemini generations + the clean text-free art base. Keep — everything else derives from these. |
| `shared/` | Assets used across multiple platforms (the profile avatar). |
| `youtube/` | YouTube channel assets. |
| `linkedin/` | LinkedIn company-page assets. |
| `x/` | X (Twitter) assets. |

## Finished deliverables (ready to upload)

| File | Spec | Where it goes |
|---|---|---|
| `youtube/youtube-banner-2048x1152.png` | 2048×1152, <6MB | YouTube channel banner |
| `shared/avatar-800x800.png` | 800×800, circle-safe | LinkedIn + X profile photo (same avatar on both, by design) |
| `x/x-header-1500x500.png` | 1500×500 | X header |

## Source files (`_source/`)

| File | What it is |
|---|---|
| `gemini-fav_his-prompt.png` | Christopher's favorite Gemini gen — the chosen base for all finals |
| `gemini-fav_claude-prompt.png` | Favorite from Claude's prompt (alternate) |
| `gemini-raw_his-prompt-v1.png` | Earlier Gemini gen (crossbar too high — superseded) |
| `gemini-raw_my-prompt.png` | Earlier Gemini gen (alternate) |
| `art-base-clean-2048x1152.png` | Text-free 16:9 crop of the chosen art — **reuse this** to make new covers |

## Pending

- **LinkedIn company cover** (1128×191) — not built yet. At ~5.9:1 the cross won't survive
  the crop; build wordmark-forward over the gold circuit band from `art-base-clean`.

## Key production notes

- YouTube all-device safe strip = center **1235×338** (~29% of height). Tall cross crossbar
  crops to a "post" on mobile, so the **wordmark** carries identity in the safe strip; art bleeds out.
- Legibility recipe (used on all banners): feathered dark elliptical scrim + heavy text stroke
  + double drop shadow; cream Cinzel title + brighter-gold EB Garamond italic tagline.
- Cinzel ships as woff2 only — convert to ttf with fontTools (`flavor=None`) to typeset.
- All final copy lives in `COPY.md` (same folder).
