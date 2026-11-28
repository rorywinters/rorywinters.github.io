// ==========================================================
//  NOMAD SIM - PROGRAM 13 - certificate codes
//  P13 codes carry the score (10 minus hints used):
//  NOMAD-YYMMDD-SS-XXXX-XXXX. Old P12 codes (no SS) were all 10/10
//  and still check.
//  Shared by the simulator and the certificate checker page.
//  A code is NOMAD-YYMMDD-XXXX-XXXX, made from the student's
//  name and the date, so it can't be copied to another name.
//  (Not cheat-proof: it stops casual copying, not code-diggers.)
// ==========================================================
const SALT = 'groove-block-nomad-p12';
const ABC = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';   // no 0, 1, I or O

export function cleanName(name) {
  return String(name).toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function fnv(str, seed) {
  let h = seed >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function sig(name, ymd, score) {
  const s = cleanName(name) + '|' + ymd + '|' + SALT + (score === undefined ? '' : '|' + score);
  const a = fnv(s, 2166136261), b = fnv(s + '#', 3335476171);
  let out = '';
  for (let k = 0; k < 4; k++) out += ABC[(a >>> (k * 5)) & 31];
  for (let k = 0; k < 4; k++) out += ABC[(b >>> (k * 5)) & 31];
  return out.slice(0, 4) + '-' + out.slice(4);
}

// ymd is 'YYMMDD', score is 0-10
export function makeCode(name, ymd, score) {
  if (score === undefined) return 'NOMAD-' + ymd + '-' + sig(name, ymd);          // old P12 style
  const ss = String(score).padStart(2, '0');
  return 'NOMAD-' + ymd + '-' + ss + '-' + sig(name, ymd, score);
}

export function todayYMD(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return p(d.getFullYear() % 100) + p(d.getMonth() + 1) + p(d.getDate());
}

// Returns { ok, date, score } where date is a readable date string, or { ok:false, why }
export function checkCode(name, code) {
  const c = String(code).toUpperCase().replace(/\s+/g, '');
  const m = c.match(/^NOMAD-(\d{6})-(?:(\d{2})-)?([A-Z0-9]{4})-([A-Z0-9]{4})$/);
  if (!m) return { ok: false, why: 'That does not look like a certificate code (NOMAD-YYMMDD-SS-XXXX-XXXX).' };
  if (!cleanName(name)) return { ok: false, why: 'Type the name exactly as it is on the certificate.' };
  const ymd = m[1];
  const y = 2000 + +ymd.slice(0, 2), mo = +ymd.slice(2, 4), d = +ymd.slice(4, 6);
  const date = new Date(y, mo - 1, d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  const score = m[2] === undefined ? undefined : +m[2];
  if (score !== undefined && score > 10) return { ok: false, why: 'The score part of the code is not real.' };
  if (makeCode(name, ymd, score) === c) return { ok: true, date, score: score === undefined ? 10 : score };
  return { ok: false, why: 'The code does not match that name.' };
}
