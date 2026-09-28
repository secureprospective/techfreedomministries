# HANDOFF

- **Baton:** Beelink (active) — 2026-09-28
- **Branch:** `main`  ·  upstream `origin/main`

## Where it stands

Live. Members login (register, email code, login, logout) runs on Pages Functions against the
`tfm-members-db` D1 (`USERS_DB`). Builds use pnpm. Impeccable skill is 4.3.1.

2026-09-28 preview lockdown: preview builds are off, `*.techfreedomministries.pages.dev` is behind
Cloudflare Access, and `[[env.preview.d1_databases]]` in `wrangler.toml` binds preview to the empty
`tfm-members-db-preview`. Proven with a throwaway preview deploy, then deleted.

## Next move

None queued. Feature worktrees (members-area-*) predate these changes; merge main into them first.

## Blocked on

Nothing recorded.

## Tried and rejected

Nothing recorded yet. **This is the expensive-to-rediscover section** — when you rule an approach
out, write it here with the reason, so the next session does not pay for it twice.

---
*Seeded 2026-08-30 when the handoff protocol was applied across every repo. Machine roles: the
Beelink is the active repository, CT105 is the active backup. Keep this file short — it is a
baton, not a log. Repo-relative paths only, no secrets.*
