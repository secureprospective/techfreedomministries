// Password hashing (scrypt) and generic secure-random helpers. This file and
// session.ts are the only code in the whole members system where a mistake
// is invisible: the site works, members log in, and nothing looks wrong
// until a database leaks. Read twice before touching.

import { scrypt, randomBytes, timingSafeEqual, createHash } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);

// N=16384, r=8, p=1: the standard "lowest acceptable" scrypt parameters,
// 64-byte output. The stored hash string is self-describing (PHC-style), so
// these can be raised later per-user without a schema migration.
const N = 16384, r = 8, p = 1, KEYLEN = 64;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const derived = (await scryptAsync(password, salt, KEYLEN, { N, r, p })) as Buffer;
  return `scrypt$${N}$${r}$${p}$${salt.toString("base64")}$${derived.toString("base64")}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false; // unknown format: fail closed
  const [, nStr, rStr, pStr, saltB64, hashB64] = parts;
  const derived = (await scryptAsync(
    password,
    Buffer.from(saltB64, "base64"),
    KEYLEN,
    { N: Number(nStr), r: Number(rStr), p: Number(pStr) },
  )) as Buffer;
  const expected = Buffer.from(hashB64, "base64");
  // timingSafeEqual: constant-time compare so response timing cannot leak
  // how close a guess was.
  return derived.length === expected.length && timingSafeEqual(derived, expected);
}

export function sha256Hex(input: string): string {
  return createHash("sha256").update(input).digest("hex");
}

// A 6-digit numeric verification code. randomBytes, never Math.random().
export function generateVerificationCode(): string {
  const n = randomBytes(4).readUInt32BE(0) % 1_000_000;
  return n.toString().padStart(6, "0");
}

export function timingSafeStringEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}
