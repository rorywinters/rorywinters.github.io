// ==========================================================
//  NOMAD SIM - PROGRAM 13 (browser version, Three.js)
//  P12 added the certificate for a clean run.
//  P13: separate ZERO X / ZERO Y / ZERO Z buttons, and a HINT
//  button. Each hint costs 1 point off the 10/10 certificate.
//  Ported from the Blender Program 9 scripts.
//  All sizes are in inches. Sim axes: X right, Y back, Z up.
//  Three.js axes: x = X, y = Z (up), z = -Y.
// ==========================================================
import * as THREE from 'three';
import { OrbitControls } from '../../assets/three/OrbitControls.js';
import { makeCode, todayYMD } from './certcode.js?v=20261128p13';

const BED_TOP = 1.5, SX = 4.0, SY = 3.0, STOCK_TOP = BED_TOP + 1.0;
const TIP_HOME = 4.0, TOOL_Y = -0.75, R_TOOL = 0.125, RES = 0.02, PAPER = 0.004;
const DRAG = 0.02, EPS = 1e-6, XY_OK = 0.02;   // certificate: zero XY within 0.02 in of the pencil cross
const NX = Math.round(SX / RES) + 1, NY = Math.round(SY / RES) + 1;
const X_MIN = -3.5, X_MAX = 3.5, Y_MIN = TOOL_Y - 2.0, Y_MAX = TOOL_Y + 2.5;
const HOME = [X_MAX, Y_MAX, TIP_HOME];          // back right, all the way up
const STEPS = { S1: 0.001, S2: 0.01, S3: 0.1, S4: 1.0 };
const MOVES = { 'X+': [1, 0, 0], 'X-': [-1, 0, 0], 'Y+': [0, 1, 0], 'Y-': [0, -1, 0], 'Z+': [0, 0, 1], 'Z-': [0, 0, -1] };

// ---------- scene ----------
const view = document.getElementById('view');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
view.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a2d31);
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 500);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
scene.add(new THREE.HemisphereLight(0xffffff, 0x404048, 1.6));
const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.position.set(6, 18, 12);
scene.add(sun);
const fill = new THREE.DirectionalLight(0xffffff, 0.8);
fill.position.set(-10, 8, -6);
scene.add(fill);

function resize() {
  const w = view.clientWidth, h = view.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---------- materials ----------
const std = (c, metal = 0, rough = 0.5, extra = {}) =>
  new THREE.MeshStandardMaterial(Object.assign({ color: c, metalness: metal, roughness: rough }, extra));
const glow = c => new THREE.MeshBasicMaterial({ color: c });
const MAT = {
  dark: std(0x1c1c20, 0.2, 0.6), accent: std(0xd9651a, 0.1, 0.4),
  glass: std(0x9aa6b4, 0, 0.05, { transparent: true, opacity: 0.12, depthWrite: false }),
  bed: std(0x6e6e74, 0.5, 0.45), alu: std(0xc9cdd2, 0.45, 0.35), steel: std(0xa0a0a6, 0.7, 0.25),
  motor: std(0x3a3a3e, 0.4, 0.4), carb: std(0xd9a640, 0.6, 0.3),
  led: glow(0xfff4dc), guide: new THREE.LineBasicMaterial({ color: 0xff2020 }),
  laser: glow(0xff0000), pencil: std(0x111114, 0.1, 0.7),
  paper: std(0xf4f4ee, 0, 0.9), pinch: std(0xffe600, 0, 0.6, { emissive: 0x665c00 }),
  torn: std(0x8a8a8a, 0, 0.9), chip: glow(0xffe9b0), hidden: new THREE.MeshBasicMaterial({ visible: false }),
};

// helpers: sizes and positions in sim inches
function box(w, d, h, x, y, z, m, parent = scene) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.position.set(x, z, -y);
  parent.add(o);
  return o;
}
function cyl(dia, len, x, y, z, m, parent = scene, axis = 'z') {
  const o = new THREE.Mesh(new THREE.CylinderGeometry(dia / 2, dia / 2, len, 32), m);
  if (axis === 'x') o.rotation.z = Math.PI / 2;
  if (axis === 'y') o.rotation.x = Math.PI / 2;
  o.position.set(x, z, -y);
  parent.add(o);
  return o;
}

// ---------- enclosure (a Nomad-like box, not a copy) ----------
box(14, 14, 1, 0, 0, 0.5, MAT.dark);
box(14, 0.5, 0.4, 0, -6.75, 1.2, MAT.accent);
box(14, 0.5, 10, 0, 6.75, 6, MAT.dark);
box(0.5, 13, 10, -6.75, 0, 6, MAT.glass);
box(0.5, 13, 10, 6.75, 0, 6, MAT.glass);
box(13, 0.25, 7.5, 0, -6.75, 6.25, MAT.glass);
box(13, 1.5, 1.5, 0, 1.5, 8.5, MAT.dark);
cyl(0.3, 13, 0, 0.65, 8.0, MAT.steel, scene, 'x');
cyl(0.3, 13, 0, 0.65, 9.0, MAT.steel, scene, 'x');
box(10, 0.2, 0.1, 0, 0.7, 7.6, MAT.led);
cyl(0.3, 13, -5, 0, 1.25, MAT.steel, scene, 'y');
cyl(0.3, 13, 5, 0, 1.25, MAT.steel, scene, 'y');

// ---------- Y axis: the bed and the 4 x 3 x 1 block (moves in Y like a Nomad) ----------
const bedG = new THREE.Group();
scene.add(bedG);
box(9, 9, 0.5, 0, 0, 1.25, MAT.bed, bedG);
// block sides (top face hidden: the cuttable top surface is a separate grid)
const sides = new THREE.Mesh(new THREE.BoxGeometry(SX, 1.0, SY),
  [MAT.alu, MAT.alu, MAT.hidden, MAT.alu, MAT.alu, MAT.alu]);
sides.position.set(0, BED_TOP + 0.5, 0);
bedG.add(sides);
// cuttable top: a grid of points every 0.02 in
const topPos = new Float32Array(NX * NY * 3);
for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
  const k = (j * NX + i) * 3;
  topPos[k] = -SX / 2 + i * RES; topPos[k + 1] = STOCK_TOP; topPos[k + 2] = -(-SY / 2 + j * RES);
}
const idx = [];
for (let j = 0; j < NY - 1; j++) for (let i = 0; i < NX - 1; i++) {
  const a = j * NX + i, b = a + 1, c = a + NX + 1, d = a + NX;
  idx.push(a, b, d, b, c, d);
}
const topGeo = new THREE.BufferGeometry();
topGeo.setAttribute('position', new THREE.BufferAttribute(topPos, 3));
topGeo.setIndex(idx);
const topCol = new Float32Array(NX * NY * 3).fill(1);   // cut metal shows darker
topGeo.setAttribute('color', new THREE.BufferAttribute(topCol, 3));
topGeo.computeVertexNormals();
bedG.add(new THREE.Mesh(topGeo, std(0xc9cdd2, 0.45, 0.35, { vertexColors: true })));
let topDirty = false;

function rr(w, h, r, n = 10) {          // rounded rectangle points
  const pts = [];
  for (const [cx, cy, a0] of [[w / 2 - r, h / 2 - r, 0], [-(w / 2 - r), h / 2 - r, 90],
                              [-(w / 2 - r), -(h / 2 - r), 180], [w / 2 - r, -(h / 2 - r), 270]])
    for (let k = 0; k <= n; k++) {
      const a = (a0 + 90 * k / n) * Math.PI / 180;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  return pts;
}
for (const pts of [rr(3.0, 2.0, 0.5), rr(2.0, 1.0, 0.0, 1)]) {
  const g = new THREE.BufferGeometry().setFromPoints(pts.map(([x, y]) => new THREE.Vector3(x, STOCK_TOP + 0.01, -y)));
  bedG.add(new THREE.LineLoop(g, MAT.guide));
}
box(1.2, 0.02, 0.004, 0, 0, STOCK_TOP + 0.003, MAT.pencil, bedG);
box(0.02, 1.2, 0.004, 0, 0, STOCK_TOP + 0.003, MAT.pencil, bedG);

// ---------- X carriage and Z spindle with the 1/4 in 2-flute end mill ----------
const carG = new THREE.Group();
scene.add(carG);
box(3, 0.5, 3, 0, 0.25, 8.5, MAT.dark, carG);
const zG = new THREE.Group();
carG.add(zG);
cyl(2, 3, 0, TOOL_Y, TIP_HOME + 3.75, MAT.motor, zG);
cyl(2.1, 0.25, 0, TOOL_Y, TIP_HOME + 2.5, MAT.accent, zG);
cyl(0.75, 0.5, 0, TOOL_Y, TIP_HOME + 2.0, MAT.steel, zG);
cyl(0.25, 1.0, 0, TOOL_Y, TIP_HOME + 1.25, MAT.steel, zG);
const flutes = cyl(0.25, 0.75, 0, TOOL_Y, TIP_HOME + 0.375, MAT.carb, zG);

// laser: beam under the cutter centre and a red cross on the block
const beam = cyl(0.012, 1.0, 0, TOOL_Y, STOCK_TOP + 0.5, MAT.laser, carG);
const crossX = box(0.6, 0.012, 0.002, 0, TOOL_Y, STOCK_TOP + 0.007, MAT.laser, carG);
const crossY = box(0.012, 0.6, 0.002, 0, TOOL_Y, STOCK_TOP + 0.007, MAT.laser, carG);

// paper strip and its torn halves
const paper = box(1.0, 3.0, PAPER, 0, TOOL_Y - 1.2, STOCK_TOP + PAPER / 2, MAT.paper);
const halves = [box(1.0, 1.4, PAPER, 0, 0, 0, MAT.torn), box(1.0, 1.4, PAPER, 0, 0, 0, MAT.torn)];

// ---------- machine state ----------
const S = {
  p: HOME.slice(), zero: HOME.slice(), zx: false, zy: false, zz: false, hints: 0, step: 0.1, stepKey: 'S3',
  paperIn: false, torn: false, tearShown: false, broken: false, running: false,
  path: [], msg: '', flash: 0, phase: 0, rain: [], debris: [],
  // certificate checks (cleared by RESET)
  zOK: false, gouged: false, xyOff: 0, zGap: 0,
};
const panel = document.getElementById('panel');
const $ = id => document.getElementById(id);

const over = () => Math.abs(S.p[0]) <= SX / 2 && Math.abs(S.p[1]) <= SY / 2;
const fmt = v => (v < 0 ? '-' : '+') + Math.abs(v).toFixed(3);
function error(msg) { S.msg = msg; S.flash = 1.4; }

function setStep(key) {
  S.stepKey = key; S.step = STEPS[key];
  document.querySelectorAll('button.step').forEach(b => b.classList.toggle('on', b.dataset.a === key));
}

function paperState() {
  if (!S.paperIn) return 'out';
  const z = S.p[2];
  if (over() && !S.torn && z < STOCK_TOP - EPS) S.torn = true;
  if (S.torn) return 'torn';
  if (over()) {
    const gap = z - STOCK_TOP;
    if (gap <= PAPER + EPS) return 'pinch';
    if (gap <= DRAG + EPS) return 'drag';
  }
  return 'free';
}

function cutDisc(sx, sy, tz) {
  const zc = Math.max(tz, BED_TOP);
  const i0 = Math.max(0, Math.ceil((sx - R_TOOL + SX / 2) / RES)), i1 = Math.min(NX - 1, Math.floor((sx + R_TOOL + SX / 2) / RES));
  const j0 = Math.max(0, Math.ceil((sy - R_TOOL + SY / 2) / RES)), j1 = Math.min(NY - 1, Math.floor((sy + R_TOOL + SY / 2) / RES));
  for (let j = j0; j <= j1; j++) {
    const dy = (-SY / 2 + j * RES) - sy;
    for (let i = i0; i <= i1; i++) {
      const dx = (-SX / 2 + i * RES) - sx;
      if (dx * dx + dy * dy <= R_TOOL * R_TOOL) {
        const k = (j * NX + i) * 3 + 1;
        if (topPos[k] > zc) { topPos[k] = zc; topCol[k - 1] = topCol[k] = topCol[k + 1] = 0.55; topDirty = true; if (!S.running) S.gouged = true; }
      }
    }
  }
}
function cutMove(p0, p1) {
  if (S.broken || Math.min(p0[2], p1[2]) >= STOCK_TOP) return;
  const d = Math.hypot(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);
  const n = Math.max(1, Math.floor(d / 0.01));
  for (let t = 0; t <= n; t++) {
    const f = t / n;
    cutDisc(p0[0] + (p1[0] - p0[0]) * f, p0[1] + (p1[1] - p0[1]) * f, p0[2] + (p1[2] - p0[2]) * f);
  }
}

const rnd = (a, b) => a + Math.random() * (b - a);
function debrisBox(w, d, h, x, y, z, m) {
  const o = box(w, d, h, x, y, z, m, bedG);
  o.rotation.set(rnd(0, 3), rnd(0, 3), rnd(0, 3));
  S.debris.push(o);
  return o;
}
function chips(count = 6) {
  for (let k = 0; k < count; k++) {
    const a = rnd(0, 2 * Math.PI), r = rnd(0.2, 0.9);
    debrisBox(0.05, 0.02, 0.01, S.p[0] + r * Math.cos(a), S.p[1] + r * Math.sin(a), STOCK_TOP + 0.01, MAT.chip);
  }
}
function shatter() {
  S.broken = true;
  flutes.visible = false;
  for (let k = 0; k < 8; k++) {
    const a = rnd(0, 2 * Math.PI), r = rnd(0.25, 1.3);
    const s = debrisBox(rnd(0.05, 0.14), rnd(0.03, 0.08), 0.03, S.p[0] + r * Math.cos(a), S.p[1] + r * Math.sin(a), STOCK_TOP + 0.02, MAT.carb);
    s.rotation.set(0, rnd(0, Math.PI), 0);
  }
  error('CUTTER BROKEN!');
}
function rainBits() {
  for (let k = 0; k < 14; k++) {
    const o = debrisBox(rnd(0.05, 0.12), rnd(0.04, 0.09), PAPER, S.p[0] + rnd(-0.8, 0.8), S.p[1] + rnd(-0.8, 0.8), STOCK_TOP + rnd(0.6, 2.5), MAT.paper);
    S.rain.push([o, rnd(1.3, 3.0)]);
  }
}

function jog(dx, dy, dz) {
  const s = S.step, cl = (v, lo, hi) => Math.max(lo, Math.min(hi, Math.round(v * 10000) / 10000));
  const p0 = S.p.slice();
  S.p = [cl(p0[0] + dx * s, X_MIN, X_MAX), cl(p0[1] + dy * s, Y_MIN, Y_MAX), cl(p0[2] + dz * s, BED_TOP, TIP_HOME)];
  if (S.broken) return;
  if (dz < 0 && s >= 0.1 && over() && S.p[2] < STOCK_TOP) { shatter(); return; }
  cutMove(p0, S.p);
  if (dz < 0 && over() && S.p[2] < STOCK_TOP - EPS && !S.paperIn) {
    chips();
    error("TOO DEEP: YOU'RE IN THE METAL! Page Up");
  }
}

function startRun() {
  if (S.broken) return error('REPLACE THE CUTTER FIRST (RESET)');
  if (!S.zx) return error('SET ZERO X FIRST');
  if (!S.zy) return error('SET ZERO Y FIRST');
  if (!S.zz) return error('SET ZERO Z FIRST');
  if (S.paperIn) return error('TAKE THE PAPER OUT FIRST (P)');
  if (S.p[2] - S.zero[2] < 0.2) return error('LIFT THE CUTTER UP FIRST');
  const zc = 0.2, pts = [];
  for (const d of [-0.03125, -0.0625])
    for (let lap of [rr(2.75, 1.75, 0.375), rr(2.25, 1.25, 0.125)]) {
      lap = lap.concat([lap[0]]);
      pts.push([[lap[0][0], lap[0][1], zc], true]);
      pts.push([[lap[0][0], lap[0][1], d], false]);
      for (const q of lap.slice(1)) pts.push([[q[0], q[1], d], false]);
      pts.push([[lap[0][0], lap[0][1], zc], true]);
    }
  S.path = pts.map(([p, r]) => [p.map((v, i) => v + S.zero[i]), r]);
  // finished: lift straight up, then go back to HOME (back right, top)
  const last = S.path[S.path.length - 1][0];
  S.path.push([[last[0], last[1], TIP_HOME], true]);
  S.path.push([HOME.slice(), true]);
  S.running = true;
  S.certRun = true;
}

function reset() {
  for (let k = 1; k < topPos.length; k += 3) topPos[k] = STOCK_TOP;
  topCol.fill(1);
  topDirty = true;
  S.debris.forEach(o => { bedG.remove(o); o.geometry.dispose(); });
  S.debris = []; S.rain = [];
  flutes.visible = true;
  S.broken = S.paperIn = S.torn = S.tearShown = false;
  // a new block needs a new zero
  S.zx = S.zy = S.zz = S.zOK = S.gouged = false;
  // a new block is a fresh try: hints start again
  S.hints = 0;
  showHint();
}

// ---------- hints (Program 13): each one costs 1 point ----------
const HINTS = [
  'Move X and Y so the end mill is over the centre of the part (the black pencil cross). From HOME, press 4 for 1 in steps and use \u2190 and \u2193.',
  'Fine tune: change the step size to 0.1 (key 3), then 0.01 (key 2), and nudge until the red laser cross is exactly on the black pencil cross. Top view (T) helps.',
  'Zero X and Y: click ZERO X, then ZERO Y. X and Y read +0.000.',
  'Bring the cutter head down with Page Down until it is getting close to the block, about 1/4 in above it. Step 0.1 (key 3).',
  'Slow down so it does not crash in: change the step size to 0.01 (key 2), then 0.001 (key 1) when it is very close.',
  'Use the paper to measure the gap: press P (PAPER) and keep coming down one press at a time.',
  'When the paper turns yellow and the panel says PINCHED, click ZERO Z.',
  'Everything is zeroed. Press P to take the paper out, then raise the cutter head with Page Up to Z +0.200 or more (step 0.1, key 3).',
  'Press RUN.',
];
const score = () => Math.max(0, 10 - S.hints);
function showHint() {
  const box = $('hintText');
  box.hidden = S.hints === 0;
  if (S.hints) box.innerHTML = '<b>Hint ' + S.hints + ' of ' + HINTS.length + ':</b> ' + HINTS[S.hints - 1];
  $('scoreText').textContent = 'Hints used: ' + S.hints + ' \u00b7 Certificate: ' + score() + ' / 10';
}
function hint() {
  if (S.hints >= HINTS.length) { showHint(); return; }   // no more hints: nothing more to lose
  S.hints++;
  showHint();
}

function act(a) {
  if (a === 'VTOP' || a === 'VFRONT' || a === 'V3D') return setView(a);
  if (S.running) return;
  if (a === 'HINT') return hint();
  S.msg = ''; S.flash = 0;
  if (a === 'RESET') reset();
  else if (a === 'RUN') startRun();
  else if (a === 'PAPER') {
    if (S.torn || !S.paperIn) { S.paperIn = true; S.torn = false; S.tearShown = false; }
    else S.paperIn = false;
  }
  else if (a === 'ZX') { S.zero[0] = S.p[0]; S.zx = true; }
  else if (a === 'ZY') { S.zero[1] = S.p[1]; S.zy = true; }
  else if (a === 'ZZ') {
    S.zero[2] = S.p[2]; S.zz = true;
    S.zGap = S.p[2] - STOCK_TOP; S.zOK = paperState() === 'pinch';
  }
  else if (STEPS[a]) setStep(a);
  else if (MOVES[a]) jog(...MOVES[a]);
}

// ---------- drawing the state ----------
function update() {
  // axes
  carG.position.x = S.p[0];
  bedG.position.z = -(TOOL_Y - S.p[1]);
  zG.position.y = S.p[2] - TIP_HOME;
  // laser
  const z = S.p[2], len = over() ? z - STOCK_TOP : z - BED_TOP;
  beam.visible = len >= 0.01;
  beam.scale.y = Math.max(len, 0.001);
  beam.position.y = z - len / 2;
  crossX.visible = crossY.visible = over();
  // paper
  const st = paperState();
  const torn = st === 'torn';
  paper.visible = S.paperIn && !torn;
  paper.position.x = S.p[0];
  paper.material = st === 'pinch' ? MAT.pinch : MAT.paper;
  if (st === 'pinch') { paper.position.z = -(TOOL_Y - 1.2); paper.rotation.y = 0; }
  halves.forEach((h, i) => {
    const s = i ? 1 : -1;
    h.visible = torn;
    if (torn) { h.position.set(S.p[0] + s * 0.15, STOCK_TOP + PAPER / 2, -(TOOL_Y - 1.2 + s * 0.9)); h.rotation.y = -s * 18 * Math.PI / 180; }
  });
  if (torn && !S.tearShown) { S.tearShown = true; rainBits(); error('PAPER TORN! Too low. Page Up, then P'); }
  // screen text
  let state;
  if (S.broken) state = 'CUTTER BROKEN! Too fast into metal. RESET';
  else if (S.msg) state = S.msg;
  else if (S.running) state = 'RUNNING PROGRAM... (Esc stops)';
  else if (st === 'torn') state = 'PAPER TORN - Page Up, then P for new paper';
  else if (st === 'pinch') state = "PINCHED - paper won't move. Set Z zero";
  else if (st === 'drag') state = 'paper dragging - go slow (key 1)';
  else if (over() && z < STOCK_TOP - EPS) state = 'IN THE METAL - Page Up!';
  else if (st === 'free') state = 'paper slides freely';
  else if (!S.zx && !S.zy) state = 'at HOME - jog to the block';
  else state = 'clear';
  $('rx').textContent = 'X ' + fmt(S.p[0] - S.zero[0]);
  $('ry').textContent = 'Y ' + fmt(S.p[1] - S.zero[1]);
  $('rz').textContent = 'Z ' + fmt(S.p[2] - S.zero[2]);
  $('state').textContent = state;
  return st;
}

// ---------- every frame ----------
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  // error flash
  if (S.flash > 0) {
    S.flash -= dt;
    if (S.flash <= 0) { S.flash = 0; S.msg = ''; }
  }
  panel.classList.toggle('err', S.flash > 0 && Math.floor(S.flash / 0.18) % 2 === 0);
  // running the program
  if (S.running) {
    let budget = (S.path.length && S.path[0][1] ? 10 : 2.5) * dt;
    while (S.running && budget > 0) {
      const [target, rapid] = S.path[0];
      const p = S.p, d = Math.hypot(target[0] - p[0], target[1] - p[1], target[2] - p[2]);
      let p1;
      if (d <= budget) { p1 = target.slice(); S.path.shift(); budget -= d; }
      else { p1 = p.map((v, i) => v + (target[i] - v) * budget / d); budget = 0; }
      cutMove(p, p1);
      S.p = p1;
      if (!S.path.length) { S.running = false; S.msg = 'PROGRAM DONE - back at HOME'; finished(); }
      else if (S.path[0][1] !== rapid) budget = budget * (S.path[0][1] ? 10 / 2.5 : 2.5 / 10);
    }
  }
  const st = update();
  // paper slides back and forth like a hand moving it; less as it drags, none when pinched
  if (S.paperIn && !S.torn && !S.running) {
    const amp = { free: 0.35, drag: 0.08 }[st] || 0;
    if (amp) {
      S.phase += dt * (st === 'free' ? 8 : 4);
      paper.position.z = -(TOOL_Y - 1.2 + amp * Math.sin(S.phase));
      paper.rotation.y = st === 'drag' ? rnd(-2, 2) * Math.PI / 180 : 0;
    }
  }
  // paper bits falling after a tear
  for (const r of S.rain) {
    const o = r[0];
    if (o.position.y > STOCK_TOP + 0.005) { o.position.y = Math.max(STOCK_TOP + 0.005, o.position.y - r[1] * dt); o.rotation.x += dt * 3; }
  }
  if (topDirty) { topGeo.attributes.position.needsUpdate = true; topGeo.attributes.color.needsUpdate = true; topGeo.computeVertexNormals(); topDirty = false; }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// ---------- certificate (Program 12, scored in Program 13) ----------
// A clean run: ZERO X and ZERO Y on the pencil cross, ZERO Z with the paper pinched,
// no cuts into the block before RUN, and the program ran to the end.
const cert = $('cert');
const certOpen = () => !cert.hidden;
function whyNot() {
  S.xyOff = Math.hypot(S.zero[0], S.zero[1]);
  if (S.xyOff > XY_OK + EPS) return 'ZERO X / ZERO Y was ' + S.xyOff.toFixed(3) + ' in off the pencil cross (needs 0.020 or less)';
  if (!S.zOK) return 'ZERO Z was not set with the paper pinched';
  if (S.gouged) return 'the end mill cut into the block before RUN';
  return '';
}
function finished() {
  const ok = S.certRun && !whyNot();
  S.certRun = false;
  if (ok) { S.msg = 'PROGRAM DONE - clean run! Get your certificate'; openCert(); }
  else S.msg = 'PROGRAM DONE - no certificate: ' + whyNot() + '. RESET and try again';
}
function openCert() {
  $('certAsk').hidden = false; $('certShow').hidden = true;
  $('certHints').textContent = S.hints === 0
    ? 'No hints used: this one is worth 10 / 10.'
    : 'You used ' + S.hints + (S.hints === 1 ? ' hint' : ' hints') + ', so this certificate is ' + score() +
      ' / 10. For 10 / 10, click RESET and do it again with no hints.';
  cert.hidden = false;
  $('certName').focus();
}
function showCert() {
  const name = $('certName').value.trim().replace(/\s+/g, ' ');
  if (!/[A-Za-z0-9]/.test(name)) { $('certName').focus(); return; }
  const now = new Date(), ymd = todayYMD(now);
  $('cName').textContent = name;
  $('cDate').textContent = now.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  $('cCode').textContent = makeCode(name, ymd, score());
  $('cScore').textContent = score() + ' / 10';
  $('cHints').textContent = S.hints === 0 ? 'none' : String(S.hints);
  $('cXY').textContent = S.xyOff.toFixed(3) + ' in from the cross';
  $('cZ').textContent = 'paper pinched';
  $('certAsk').hidden = true; $('certShow').hidden = false;
}
$('certGo').addEventListener('click', showCert);
$('certName').addEventListener('keydown', e => { if (e.key === 'Enter') showCert(); });
$('certPrint').addEventListener('click', () => window.print());
document.querySelectorAll('.certClose').forEach(b => b.addEventListener('click', () => { cert.hidden = true; }));

// ---------- views ----------
const TARGET = new THREE.Vector3(0, STOCK_TOP, -TOOL_Y);
function setView(v) {
  controls.target.copy(TARGET);
  if (v === 'VTOP') camera.position.set(0, STOCK_TOP + 9, -TOOL_Y + 5);   // steep, from the front, so the spindle doesn't hide the laser cross
  else if (v === 'VFRONT') camera.position.set(0, STOCK_TOP + 0.5, -TOOL_Y + 12);
  else { controls.target.set(0.5, 3, 0.5); camera.position.set(10, 12, 16); }
  controls.update();
}

// ---------- input ----------
const KEYS = { ArrowRight: 'X+', ArrowLeft: 'X-', ArrowUp: 'Y+', ArrowDown: 'Y-', PageUp: 'Z+', PageDown: 'Z-',
  Digit1: 'S1', Digit2: 'S2', Digit3: 'S3', Digit4: 'S4', Numpad1: 'S1', Numpad2: 'S2', Numpad3: 'S3', Numpad4: 'S4',
  KeyP: 'PAPER', KeyR: 'RESET', KeyT: 'VTOP', KeyF: 'VFRONT', KeyV: 'V3D' };
window.addEventListener('keydown', e => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (certOpen()) return;                 // typing a name: don't jog
  if (e.code === 'Escape') {
    if (S.running) { S.running = false; S.certRun = false; S.path = []; error('PROGRAM STOPPED'); }
    return;
  }
  const a = KEYS[e.code];
  if (!a) return;
  e.preventDefault();
  act(a);
});
document.querySelectorAll('#panel button').forEach(b => b.addEventListener('click', () => { act(b.dataset.a); b.blur(); }));

setStep('S3');
showHint();
setView('V3D');
resize();
requestAnimationFrame(frame);
window.NOMAD_SIM = S;   // for testing
