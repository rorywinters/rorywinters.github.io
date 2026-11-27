// ==========================================================
//  NOMAD SIM - PROGRAM 12 - certificate codes
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

function sig(name, ymd) {
  const s = cleanName(name) + '|' + ymd + '|' + SALT;
  const a = fnv(s, 2166136261), b = fnv(s + '#', 3335476171);
  let out = '';
  for (let k = 0; k < 4; k++) out += ABC[(a >>> (k * 5)) & 31];
  for (let k = 0; k < 4; k++) out += ABC[(b >>> (k * 5)) & 31];
  return out.slice(0, 4) + '-' + out.slice(4);
}

// ymd is 'YYMMDD'
export function makeCode(name, ymd) {
  return 'NOMAD-' + ymd + '-' + sig(name, ymd);
}

export function todayYMD(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return p(d.getFullYear() % 100) + p(d.getMonth() + 1) + p(d.getDate());
}

// Returns { ok, date } where date is a readable date string, or { ok:false, why }
export function checkCode(name, code) {
  const c = String(code).toUpperCase().replace(/\s+/g, '');
  const m = c.match(/^NOMAD-(\d{6})-([A-Z0-9]{4})-([A-Z0-9]{4})$/);
  if (!m) return { ok: false, why: 'That does not look like a certificate code (NOMAD-YYMMDD-XXXX-XXXX).' };
  if (!cleanName(name)) return { ok: false, why: 'Type the name exactly as it is on the certificate.' };
  const ymd = m[1];
  const y = 2000 + +ymd.slice(0, 2), mo = +ymd.slice(2, 4), d = +ymd.slice(4, 6);
  const date = new Date(y, mo - 1, d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  if (makeCode(name, ymd) === c) return { ok: true, date };
  return { ok: false, why: 'The code does not match that name.' };
}
