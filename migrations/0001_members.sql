-- migrations/0001_members.sql
-- TFM members system: identity, sessions, email verification.
-- This database (tfm-members-db) belongs to Tech Freedom Ministries ONLY.
-- It must never be shared with, or merged into, SecureProspective's data
-- store or any other business's data. See feedback_tfm_sp_data_separation
-- in the backbone memory: this is a nonnegotiable legal/compliance boundary
-- (501(c)(3) nonprofit vs. a separate for-profit business), not a technical
-- convenience call. Build PATTERNS may be reused elsewhere; this DATABASE
-- and its rows may not.

-- One row per human. Email is the login handle.
CREATE TABLE IF NOT EXISTS users (
  id                      TEXT PRIMARY KEY,          -- crypto.randomUUID()
  email                   TEXT NOT NULL UNIQUE,
  password_hash           TEXT NOT NULL,             -- scrypt: "scrypt$N$r$p$salt$hash"
  created_at              TEXT NOT NULL DEFAULT (datetime('now')),
  email_verified_at       TEXT,
  reset_token_hash        TEXT,
  reset_token_expires_at  TEXT
);

-- One row per live session. The token column holds a HASH of the session
-- token, never the token itself.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- One active row per user during registration: the emailed 6-digit code.
-- code_hash is sha256(code), never the raw code. A fresh registration
-- attempt (or a resend) overwrites the prior row for that user.
CREATE TABLE IF NOT EXISTS email_verification_codes (
  user_id      TEXT PRIMARY KEY,
  code_hash    TEXT NOT NULL,
  attempts     INTEGER NOT NULL DEFAULT 0,
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at   TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_sessions_user   ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expiry ON sessions(expires_at);
