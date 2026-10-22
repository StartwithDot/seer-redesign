import logoSvg from '../assets/logo.svg';

// ---- real raven paths from logo.svg (indices 4..10 are the mark, 0..3 are SEER) ----
const ALL = [...logoSvg.matchAll(/<path d="([^"]+)"/g)].map(m => m[1]);
const MARK = ALL.slice(4);

const clamp = (x, a = 0, b = 1) => x < a ? a : x > b ? b : x;
const sm = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

// ---- logo mark bounds (used to place the take-off and the dock) ----
function logoBounds() {
  const S = 12, W = 80, H = 66;
  const c = document.createElement('canvas'); c.width = W * S; c.height = H * S;
  const g = c.getContext('2d'); g.scale(S, S); g.fillStyle = '#fff';
  MARK.forEach(d => g.fill(new Path2D(d)));
  const data = g.getImageData(0, 0, c.width, c.height).data;
  let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1;
  for (let y = 0; y < c.height; y += 2) for (let x = 0; x < c.width; x += 2) {
    if (data[(y * c.width + x) * 4 + 3] > 128) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return { bw: (x1 - x0) / S, bh: (y1 - y0) / S, ox: x0 / S, oy: y0 / S };
}

// =====================================================================
// Solid layered raven rig (Canvas 2D). Local frame: +x forward (beak),
// +y up, unit ~ body length. Wings are 2-stage (inner arm + hand with
// six separate primary blades), mapped through a light 3D projection so
// flapping foreshortens naturally. Every part is drawn as 3 stacked
// layers (dark extrusion, light bevel, shaded main fill) + lilac rim.
// =====================================================================
const COL = { core: '#241E33', deep: '#6C2BD9', body: '#9C6FF2', tip: '#EFE9FC', tip2: '#EDEDF2' };
const KX = 0.5, KY = -0.2;          // depth (z toward viewer) -> screen skew
const LEAN = 0.34;                   // wings sweep back as they rise (reference V: near wing upright, far wing leaning back)
// SIZE: on-screen scale of the whole raven (1 = original 88px/unit desktop rig). Talons/perch offset scale with it.
const SIZE = 0.4;
const LW = 0.55;                     // shoulder -> wrist length (inner wing)
const FOOT = 0.355;                  // toe line below the origin when perched
const NECK_X = 0.32, NECK_Y = 0.1, HEAD_CX = 0.4, EYE_X = 0.45, EYE_Y = 0.185, GAPE_X = 0.515, GAPE_Y = 0.138;

// inner wing (arm + secondaries), template in wing coords (s: span, c: chord, +c = toward tail)
// one-piece wing outline: leading edge (with small hand spikes), 6 primary fingers, jagged secondaries back to the root
const LEAD = new Float32Array([0, -0.05, 0.25, -0.062, LW, -0.008, 0.6, -0.06, 0.635, 0.0, 0.7, -0.055, 0.735, 0.01, 0.8, -0.045, 0.83, 0.015]);
function buildTrail() {
  return new Float32Array([0.66, 0.26, 0.6, 0.33, 0.55, 0.285, 0.47, 0.37, 0.41, 0.3, 0.31, 0.36, 0.26, 0.31, 0.15, 0.37, -0.01, 0.36, -0.04, 0.15]);
}
const TRAIL = buildTrail();
// covert layer (lighter, shorter) laid over the inner wing and hand; jagged leading-edge spikes on the hand
function buildCov() {
  const a = [0.0, -0.045, 0.25, -0.056, 0.5, -0.012, 0.6, -0.075, 0.6, 0.0, 0.7, -0.07, 0.71, 0.01, 0.8, -0.058, 0.81, 0.02, 0.885, 0.03, 0.885, 0.09];
  for (let i = 0; i < 11; i++) { const s0 = 0.84 - i * 0.078; a.push(s0, 0.2 + (i % 2) * 0.014, s0 - 0.038, 0.148); }
  a.push(-0.02, 0.17, -0.03, 0.06);
  return new Float32Array(a);
}
const COV = buildCov();
// primary blade template (u along blade 0..1, v across -1..1, +v trailing). notch on trailing side near the tip
const BU = [0.3, 0.72, 1.0, 0.88, 0.62];
const BV = [-1, -0.85, 0, 0.6, 1.0];
const BN = BU.length, NBL = 6;
const BLEN = [0.66, 0.74, 0.72, 0.65, 0.56, 0.46];
const NOUT = LEAD.length / 2 + 6 * 5 + 0;
// tail feather template (u along, v across)
const TU = [0, 0.62, 0.9, 1.0, 0.93, 1.0, 0.86, 0.6, 0];
const TV = [-0.55, -1, -0.9, -0.35, 0.05, 0.4, 0.95, 1, 0.55];
const TN = TU.length, NTF = 5;

let MX = 0, MY = 0;
function mapWing(w, s, c) {
  let x, y, z;
  if (s <= LW) { x = -c * w.cs; y = s * w.s1; z = s * w.c1; }
  else { const h = (s - LW) * w.hand, q = h / 1.0, a = w.p2 + w.bend * q * q; x = -c * w.cs; y = LW * w.s1 + h * Math.sin(a); z = LW * w.c1 + h * Math.cos(a); }
  z *= w.side;
  x -= (w.side > 0 ? LEAN * 0.25 : LEAN * 1.6) * Math.max(0, y) + (y < 0 ? 0.25 * Math.abs(z) - 0.3 * y : 0);
  MX = w.sx + (x + KX * z) * w.k; MY = w.sy + (y + KY * z) * w.k;
}
function computeWing(w, B) {
  w.s1 = Math.sin(w.p1); w.c1 = Math.cos(w.p1);
  let n = 0;
  for (let i = 0; i < LEAD.length; i += 2) { mapWing(w, LEAD[i], LEAD[i + 1]); B.out[n++] = MX; B.out[n++] = MY; }
  for (let k = 0; k < NBL; k++) {
    const beta = w.fan * (-0.14 + k * 0.17) + (k - 2.5) * w.spread, cb = Math.cos(beta), sb = Math.sin(beta);
    const s0 = 0.86 - k * 0.048, c0 = 0.015 + k * 0.05, L = BLEN[k] * w.blen, hw = 0.05 + k * 0.003;
    for (let j = 0; j < BN; j++) { const u = BU[j] * L, v = BV[j] * hw; mapWing(w, s0 + u * cb - v * sb, c0 + u * sb + v * cb); B.out[n++] = MX; B.out[n++] = MY; }
    mapWing(w, s0 + 0.1 * L * cb, c0 + 0.1 * L * sb); B.shaft[k * 4] = MX; B.shaft[k * 4 + 1] = MY;
    const u2 = 0.9 * L, v2 = -0.2 * hw; mapWing(w, s0 + u2 * cb - v2 * sb, c0 + u2 * sb + v2 * cb); B.shaft[k * 4 + 2] = MX; B.shaft[k * 4 + 3] = MY;
  }
  for (let i = 0; i < TRAIL.length; i += 2) { mapWing(w, TRAIL[i], TRAIL[i + 1]); B.out[n++] = MX; B.out[n++] = MY; }
  B.n = n / 2;
  for (let i = 0; i < COV.length; i += 2) { mapWing(w, COV[i], COV[i + 1]); B.cov[i] = MX; B.cov[i + 1] = MY; }
}
const wingBuf = () => ({ out: new Float32Array(LEAD.length + NBL * BN * 2 + TRAIL.length), n: 0, cov: new Float32Array(COV.length), shaft: new Float32Array(NBL * 4) });

function trace(ctx, b, o, n, ox, oy) {
  ctx.beginPath(); ctx.moveTo(b[o] + ox, b[o + 1] + oy);
  for (let i = 1; i < n; i++) ctx.lineTo(b[o + i * 2] + ox, b[o + i * 2 + 1] + oy);
  ctx.closePath();
}
// three stacked layers: dark extrusion (down/back), light bevel (up), shaded main
function layered(ctx, b, o, n, P, d) {
  trace(ctx, b, o, n, d * 0.8, -d * 1.3); ctx.fillStyle = P.dark; ctx.fill();
  trace(ctx, b, o, n, -d * 0.35, d * 0.6); ctx.fillStyle = P.light; ctx.fill();
  trace(ctx, b, o, n, 0, 0); ctx.fillStyle = P.main; ctx.fill();
}
function layeredPath(ctx, p, P, d) {
  ctx.translate(d * 0.8, -d * 1.3); ctx.fillStyle = P.dark; ctx.fill(p);
  ctx.translate(-d * 1.15, d * 1.9); ctx.fillStyle = P.light; ctx.fill(p);
  ctx.translate(d * 0.35, -d * 0.6); ctx.fillStyle = P.main; ctx.fill(p);
}

// ---- static body / head / beak paths (y up) ----
function buildPaths() {
  const body = new Path2D();
  body.moveTo(0.32, 0.18);
  body.bezierCurveTo(0.2, 0.19, 0.04, 0.15, -0.12, 0.085);
  body.bezierCurveTo(-0.2, 0.05, -0.27, 0.03, -0.32, 0.015);
  body.lineTo(-0.345, -0.045);
  body.quadraticCurveTo(-0.31, -0.1, -0.24, -0.115);
  body.bezierCurveTo(-0.12, -0.2, 0.06, -0.215, 0.19, -0.15);
  body.bezierCurveTo(0.28, -0.11, 0.34, -0.05, 0.37, 0.0);
  // shaggy raven throat hackles
  body.lineTo(0.4, 0.0); body.lineTo(0.385, 0.025); body.lineTo(0.425, 0.03); body.lineTo(0.41, 0.055); body.lineTo(0.45, 0.06); body.lineTo(0.44, 0.085);
  body.lineTo(0.47, 0.1);
  body.quadraticCurveTo(0.41, 0.19, 0.32, 0.18);
  body.closePath();
  const head = new Path2D();
  head.moveTo(0.27, 0.17);
  head.bezierCurveTo(0.3, 0.235, 0.38, 0.252, 0.44, 0.243);
  head.quadraticCurveTo(0.49, 0.235, 0.515, 0.215);
  head.lineTo(0.525, 0.14);
  head.quadraticCurveTo(0.5, 0.095, 0.465, 0.08);
  head.lineTo(0.445, 0.055); head.lineTo(0.43, 0.072); head.lineTo(0.405, 0.042); head.lineTo(0.39, 0.066); head.lineTo(0.37, 0.05);
  head.quadraticCurveTo(0.32, 0.07, 0.27, 0.11);
  head.closePath();
  const upper = new Path2D();
  upper.moveTo(0.47, 0.232);
  upper.bezierCurveTo(0.56, 0.236, 0.635, 0.212, 0.69, 0.15);
  upper.lineTo(0.69, 0.122); upper.lineTo(0.668, 0.135);
  upper.bezierCurveTo(0.62, 0.155, 0.565, 0.15, 0.515, 0.142);
  upper.closePath();
  const lower = new Path2D();
  lower.moveTo(0.512, 0.138);
  lower.bezierCurveTo(0.56, 0.13, 0.61, 0.115, 0.655, 0.095);
  lower.lineTo(0.66, 0.085);
  lower.bezierCurveTo(0.61, 0.08, 0.56, 0.085, 0.505, 0.1);
  lower.closePath();
  const culmen = new Path2D(); // beak edge highlight
  culmen.moveTo(0.49, 0.228); culmen.bezierCurveTo(0.56, 0.228, 0.63, 0.205, 0.68, 0.15);
  const glowC = document.createElement('canvas'); glowC.width = glowC.height = 128;
  const gg = glowC.getContext('2d'), rg = gg.createRadialGradient(64, 64, 0, 64, 64, 64);
  rg.addColorStop(0, 'rgba(122,60,255,0.42)'); rg.addColorStop(0.45, 'rgba(122,60,255,0.16)'); rg.addColorStop(1, 'rgba(122,60,255,0)');
  gg.fillStyle = rg; gg.fillRect(0, 0, 128, 128);
  return { body, head, upper, lower, culmen, glow: glowC };
}

function buildPaints(ctx) {
  const lin = (x0, y0, x1, y1, st) => { const g = ctx.createLinearGradient(x0, y0, x1, y1); st.forEach(([o, c]) => g.addColorStop(o, c)); return g; };
  const rad = (x, y, r, st) => { const g = ctx.createRadialGradient(x, y, 0, x, y, r); st.forEach(([o, c]) => g.addColorStop(o, c)); return g; };
  return {
    body: { dark: COL.core, light: '#bba0f8', main: lin(0, 0.2, 0, -0.21, [[0, '#ad89f6'], [0.38, COL.body], [0.78, '#7d45e6'], [1, '#5b2fb6']]) },
    head: { dark: COL.core, light: '#bba0f8', main: lin(0.42, 0.26, 0.46, 0.05, [[0, '#b796f8'], [0.5, COL.body], [1, '#7a43e4']]) },
    beak: { dark: '#3a2a66', light: '#b597f7', main: lin(0.5, 0.21, 0.69, 0.1, [[0, '#9466ef'], [0.6, '#7a46e0'], [1, '#5a33b0']]) },
    wingN: { dark: '#3b2672', light: '#b597f7', main: rad(0.1, 0.1, 1.55, [[0, COL.deep], [0.3, '#8857ee'], [0.58, COL.body], [0.86, '#b89bf7'], [1, '#e2d6fd']]) },
    covN: { dark: '#3a2a66', light: '#e2d6fd', main: rad(0.1, 0.1, 0.95, [[0, '#7c48e8'], [0.5, '#a07af3'], [1, '#c4abf9']]) },
    wingF: { dark: '#15111e', light: '#8f78cc', main: rad(0.07, 0.12, 1.5, [[0, '#2e2450'], [0.35, '#4f2ea6'], [0.75, '#6f4bcc'], [1, '#9a83e2']]) },
    covF: { dark: '#15111e', light: '#9b85d8', main: rad(0.07, 0.12, 0.9, [[0, '#3c2a78'], [1, '#7656d4']]) },
    tail: { dark: COL.core, light: '#b597f7', main: rad(-0.31, -0.02, 0.42, [[0, COL.deep], [0.45, '#8d5df0'], [0.82, '#a985f5'], [1, '#e0d4fd']]) },
  };
}

// ---- main ----
let S = null;

function init(opts) {
  if (S) destroy();
  const canvas = opts.canvas, ctx = canvas.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const logo = logoBounds();
  const PATHS = buildPaths(), PAINT = buildPaints(ctx);
  const WN = wingBuf(), WF = wingBuf(), TB = new Float32Array(NTF * TN * 2);
  const wN = { cs: 1, side: 1, sx: 0.1, sy: 0.1, k: 1, p1: 0, p2: 0, s1: 0, c1: 1, bend: 0, hand: 1, fan: 1, spread: 0, blen: 1 };
  const wF = { cs: 1.4, side: -1, sx: 0.07, sy: 0.12, k: 0.93, p1: 0, p2: 0, s1: 0, c1: 1, bend: 0, hand: 1, fan: 1, spread: 0, blen: 1 };
  const TORD = [0, 4, 1, 3, 2];

  const st = {
    opts, canvas, ctx, dpr: 1, w: 0, h: 0, ph: 0, fly: 0, flip: 1, pitch: 0, bank: 0, px: 0, py: 0, svx: 0, look: 0, offx: 0, offy: 0, prev: null, prevS: 0,
    lastS: window.scrollY, vel: 0, idle: 0, settle: 0, S: [], SU0: 1e9, SU1: 1e9 + 1, pulse: 0, raf: 0, last: performance.now(), force: null, burst: [], perchEls: [], mergedAt: 0, merged: false,
    // rig state
    fw: 0, br: 0, lt: 0, hYaw: 0, hPitch: 0, hTilt: 0, beak: 0.16, pupX: 0, pupY: 0, mx: -1, my: -1, mAt: -1e9, mSpd: 0, ruffle: 0, trackW: 0
  };
  S = st;
  function finaleBox() {
    const el = opts.finaleEl; if (!el) return null;
    return { x0: parseFloat(el.style.left) || 0, y0: parseFloat(el.style.top) || 0, w: parseFloat(el.style.width) || 300, h: parseFloat(el.style.height) || 300 };
  }
  function measure() { st.markC = navMarkRaw(); }
  function resize() {
    st.dpr = Math.min(window.devicePixelRatio || 1, 2); st.w = innerWidth; st.h = innerHeight;
    canvas.width = Math.round(st.w * st.dpr); canvas.height = Math.round(st.h * st.dpr);
    canvas.style.width = st.w + 'px'; canvas.style.height = st.h + 'px';
    measure();
  }
  resize();
  st.onResize = resize; addEventListener('resize', resize);
  st.onLoad = measure; addEventListener('load', measure);
  st.mt = setInterval(() => { if (st.idle > 0.4) measure(); }, 1500);
  if (window.ScrollTrigger && ScrollTrigger.addEventListener) { st.stCb = measure; ScrollTrigger.addEventListener('refresh', measure); }
  st.onMove = e => {
    const now = performance.now(), dtm = Math.max(8, now - st.mAt);
    if (st.mx >= 0) { const sp = Math.hypot(e.clientX - st.mx, e.clientY - st.my) / dtm * 1000; st.mSpd = sp; if (sp > 2600) st.ruffle = 1; }
    st.mx = e.clientX; st.my = e.clientY; st.mAt = now;
  };
  addEventListener('pointermove', st.onMove, { passive: true });

  function navMark() { return st.markC || navMarkRaw(); }
  function navMarkRaw() {
    const r = opts.logoEl.getBoundingClientRect();
    const svg = opts.logoEl.querySelector && opts.logoEl.querySelector('svg');
    const vb = svg && svg.viewBox && svg.viewBox.baseVal;
    if (vb && vb.width > 100) {
      const k = Math.min(r.width / vb.width, r.height / vb.height);
      const ox = r.left + (r.width - vb.width * k) / 2, oy = r.top + (r.height - vb.height * k) / 2;
      return { cx: ox + (logo.ox + logo.bw / 2) * k, cy: oy + (logo.oy + logo.bh / 2) * k, sc: Math.max(logo.bw, logo.bh) * k };
    }
    const k = Math.min(r.width / logo.bw, r.height / logo.bh);
    return { cx: r.left + r.width / 2, cy: r.top + r.height / 2, sc: Math.max(logo.bw, logo.bh) * k };
  }
  let docked = true;
  function setDock(d) { docked = d; } // the nav mark stays in place; the bird lifts out of it
  st.setDock = setDock;

  function pulseTo(v) {
    v = Math.round(v * 100) / 100;
    if (v === st.pulse) return; st.pulse = v;
    try { window.SeerGlass && window.SeerGlass.logoPulse && window.SeerGlass.logoPulse(v); } catch (_) { }
  }

  function frame(now) {
    if (!st.hooked) st.raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - st.last) / 1000); st.last = now;
    const s = st.force !== null ? st.force : window.scrollY;
    const v = (s - st.lastS) / Math.max(dt, 0.001); st.lastS = s;
    st.vel += (Math.abs(v) - st.vel) * Math.min(1, dt * 8);
    if (Math.abs(v) < 5) st.idle += dt; else st.idle = 0;
    draw(s, dt);
  }

  // idle look-around script: [time, yaw, pitch, tilt]; yaw 0 = profile forward, PI/2 = facing the visitor, ~2.4 = looking back
  const LOOK = [0, 0, 0.04, 0, 1.4, 0, 0.1, 0.16, 2.0, 2.35, 0.02, -0.08, 3.6, 2.45, 0.12, 0.1, 4.2, 0.15, -0.16, 0.2, 5.6, 0.1, -0.12, 0.22, 6.2, 1.5, 0.02, 0.1, 7.9, 1.55, 0.06, -0.14, 8.5, 0, 0.04, 0, 11, 0, 0.04, 0];
  const LK = { y: 0, p: 0, t: 0 };
  function lookAt(tm) {
    const T = tm % 11; let i = 0; while (i < LOOK.length - 8 && LOOK[i + 4] <= T) i += 4;
    const u = sm(LOOK[i], LOOK[i + 4], T);
    LK.y = lerp(LOOK[i + 1], LOOK[i + 5], u); LK.p = lerp(LOOK[i + 2], LOOK[i + 6], u); LK.t = lerp(LOOK[i + 3], LOOK[i + 7], u);
  }

  let RA = 1, RS = 1; // per-frame render alpha / scale for the part painters (hoisted: no per-frame closures)
    function drawWing(B, PW, PC, d, near) {
      layered(ctx, B.out, 0, B.n, PW, d);
      // lighter covert band (single soft fill, no extrusion) + faint finger shafts
      ctx.globalAlpha = RA * (near ? 0.55 : 0.4); trace(ctx, B.cov, 0, COV.length / 2, 0, 0); ctx.fillStyle = PC.main; ctx.fill(); ctx.globalAlpha = RA;
      ctx.strokeStyle = near ? 'rgba(52,26,110,0.3)' : 'rgba(20,14,40,0.35)'; ctx.lineWidth = 0.9 / RS;
      ctx.beginPath();
      for (let k = 0; k < NBL; k++) { ctx.moveTo(B.shaft[k * 4], B.shaft[k * 4 + 1]); ctx.lineTo(B.shaft[k * 4 + 2], B.shaft[k * 4 + 3]); }
      ctx.stroke();
      if (near) { // rim / fresnel on the outline
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = RA * 0.22; ctx.strokeStyle = COL.tip; ctx.lineWidth = 0.75 / RS;
        trace(ctx, B.out, 0, B.n, 0, 0); ctx.stroke(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = RA;
      }
    }
    function drawTail(ph, F, P, d) {
      const a0 = Math.PI + 0.1 + P * 0.32 + F * 0.05 * Math.sin(ph + 1.4), spr = lerp(0.1, 0.13, P) + F * 0.02 * Math.sin(ph * 0.5);
      for (let q = 0; q < NTF; q++) {
        const i = q - 2, a = a0 + i * spr * 1.35, ca = Math.cos(a), sa = Math.sin(a), L = 0.38 - Math.abs(i) * 0.03, hw = 0.062, o = q * TN * 2;
        for (let j = 0; j < TN; j++) { const u = TU[j] * L, v = TV[j] * hw; TB[o + j * 2] = -0.31 + u * ca - v * sa; TB[o + j * 2 + 1] = -0.02 + u * sa + v * ca; }
      }
      for (let n = 0; n < NTF; n++) { const q = TORD[n]; layered(ctx, TB, q * TN * 2, TN, PAINT.tail, d); }
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = RA * 0.16; ctx.strokeStyle = COL.tip; ctx.lineWidth = 0.7 / RS;
      for (let q = 0; q < NTF; q++) { trace(ctx, TB, q * TN * 2, TN, 0, 0); ctx.stroke(); }
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = RA;
    }
    function drawHead(d, RS) {
      const yaw = st.hYaw, cy = Math.cos(yaw), syw = Math.sin(yaw);
      const sx = (cy >= 0 ? 1 : -1) * Math.max(Math.abs(cy), 0.34);
      ctx.save();
      ctx.translate(NECK_X, NECK_Y); ctx.rotate(st.hPitch * (sx >= 0 ? 1 : -1) + st.hTilt * 0.35); ctx.scale(1.22, 1.15); ctx.scale(1, 1 - Math.abs(st.hTilt) * 0.08); ctx.translate(-NECK_X, -NECK_Y);
      ctx.save();
      ctx.translate(HEAD_CX, 0); ctx.scale(sx, 1); ctx.translate(-HEAD_CX, 0);
      layeredPath(ctx, PATHS.head, PAINT.head, d);
      // beak: lower mandible hinged at the gape, slightly open
      ctx.save(); ctx.translate(GAPE_X, GAPE_Y); ctx.rotate(-st.beak); ctx.translate(-GAPE_X, -GAPE_Y);
      layeredPath(ctx, PATHS.lower, PAINT.beak, d * 0.7); ctx.restore();
      layeredPath(ctx, PATHS.upper, PAINT.beak, d * 0.7);
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = RA * 0.45; ctx.strokeStyle = COL.tip; ctx.lineWidth = 0.8 / RS; ctx.stroke(PATHS.culmen);
      ctx.globalAlpha = RA * 0.12; ctx.stroke(PATHS.head); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = RA;
      ctx.restore();
      // eyes in the yawed frame (one or both visible)
      const ex = EYE_X - HEAD_CX, ez = 0.05;
      for (let side = 1; side >= -1; side -= 2) {
        const zz = ex * syw + side * ez * cy; if (zz < -0.012) continue;
        const X = HEAD_CX + ex * cy - side * ez * syw;
        const r = 0.014 * (0.55 + 0.45 * clamp(zz / 0.05 + 0.3));
        ctx.fillStyle = '#1a1328'; ctx.beginPath(); ctx.ellipse(X, EYE_Y, r * Math.max(0.5, Math.abs(cy) * 0.5 + 0.5), r, 0, 0, 6.2832); ctx.fill();
        ctx.fillStyle = COL.tip; ctx.beginPath(); ctx.arc(X + r * 0.3 + st.pupX * r * 0.35, EYE_Y + r * 0.3 + st.pupY * r * 0.35, r * 0.24, 0, 6.2832); ctx.fill();
      }
      ctx.restore();
    }
    function drawLeg(hx, hy, ext, col, claw, sc) {
      const ax = lerp(-0.13, 0.1, ext), ay = lerp(-0.22, -0.285, ext);
      ctx.strokeStyle = col; ctx.lineWidth = 0.05 * sc;
      ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo(lerp(hx - 0.06, hx + 0.05, ext), lerp(hy - 0.04, (hy + ay) / 2, ext), ax, ay); ctx.stroke();
      ctx.lineWidth = 0.026 * sc;
      for (let i = 0; i < 4; i++) {
        const fwd = i < 3;
        const a = fwd ? lerp(-2.5 + i * 0.28, -0.3 - i * 0.3, ext) : lerp(-1.3, -2.8, ext);
        const L = (fwd ? lerp(0.06, 0.1, ext) - i * 0.006 : lerp(0.04, 0.06, ext)) * sc;
        const tx = ax + Math.cos(a) * L, ty = ay + Math.sin(a) * L;
        ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(tx, ty); ctx.stroke();
        const ca = a + (fwd ? -1.35 : 1.35), cl = 0.03 * sc;
        ctx.strokeStyle = claw; ctx.lineWidth = 0.016 * sc;
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.quadraticCurveTo(tx + Math.cos(a) * cl * 0.7, ty + Math.sin(a) * cl * 0.7, tx + Math.cos(ca) * cl, ty + Math.sin(ca) * cl); ctx.stroke();
        ctx.lineWidth = 0.026 * sc;
      }
    }

  function draw(s, dt) {
    const dpr = st.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height);
    const NE = window.__neon, sp = NE && NE.spine, cur = sp && sp.cur;
    if (!cur || !sp.rects) return;
    const alphaBase = sm(0, 14, s), vh = st.h, W = st.w, mob = W < 820;
    const mark = navMark();
    const ci = sp.names.indexOf('close'), rc = sp.rects[ci];
    const pc = rc ? clamp(-rc.top / Math.max(1, rc.height - vh)) : 0;
    const eF = sm(0.22, 0.52, pc), merge = sm(0.5, 0.66, pc);
    const perch = { x: cur.fx0 - (mob ? 34 : 70), y: cur.y0 - 16 + (cur.perchDy || 0) };
    const fb = finaleBox(), fm = opts.finaleMark || { x: -0.24, y: -0.02 };
    let target = perch;
    if (fb && rc) { const stTop = rc.top > 0 ? rc.top : Math.min(0, rc.bottom - vh); target = { x: fb.x0 + fb.w * (0.5 + fm.x), y: stTop + fb.y0 + fb.h * (0.5 + fm.y) }; }
    const e = eF;
    let px = lerp(perch.x, target.x, e), py = lerp(perch.y, target.y, e) - Math.sin(Math.PI * e) * 46;
    const trans = sp.u > 0.015 && sp.u < 0.985 ? 1 : 0, flying = Math.max(trans, e > 0.01 && e < 0.99 ? 1 : 0);
    const raw = { x: px, y: py };
    if (!st.sm) st.sm = { x: raw.x, y: raw.y };
    const kq = 1 - Math.exp(-dt * 14);
    st.sm.x += (raw.x - st.sm.x) * kq; st.sm.y += (raw.y - st.sm.y) * kq;
    px = st.sm.x; py = st.sm.y;
    px = clamp(px, 50, st.w - 50); py = clamp(py, 50, st.h - 50);
    st.fly += (Math.max(flying, clamp(st.vel / 500) * 0.8) - st.fly) * Math.min(1, dt * 5);
    const t = clamp(s / 260), eE = e;
    const leg = t < 1 ? 0 : 1;
    setDock(s < 2);
    const dx = e > 0.01 ? target.x - perch.x : 1;
    const vx = px - st.px, vy = py - st.py; st.px = px; st.py = py;
    if (Math.abs(dx) > 40) { const wf = dx >= 0 ? 1 : -1; st.flip += (wf - st.flip) * Math.min(1, dt * 4); }
    const perched = 1 - st.fly;
    const pitchT = st.fly * clamp(Math.atan2(-vy, Math.abs(vx) + 1) * 0.5, -0.4, 0.4) + perched * 0.2;
    st.pitch += (pitchT - st.pitch) * Math.min(1, dt * 6);
    st.svx += (vx * st.flip - st.svx) * Math.min(1, dt * 6);
    const fr = lerp(1.6, 13, st.fly); if (!reduce) st.ph += dt * fr;
    st.look += dt * 0.55;
    const ph = reduce ? 0.8 : st.ph;
    const bankT = clamp(-st.svx * 0.05, -0.5, 0.5) * st.fly + 0.07 * Math.sin(st.ph * 0.5) * st.fly;
    st.bank += (bankT - st.bank) * Math.min(1, dt * 6);

    // ---- take-off from the nav logo (scroll 0..260) and merge into the finale mark ----
    // smooth, slower emergence: widen the scroll range and low-pass it in time so the bird grows out of the logo gently
    const emRaw = leg === 0 ? sm(0.0, 0.85, t) : 1;
    st.emS = st.emS === undefined ? emRaw : st.emS + (emRaw - st.emS) * Math.min(1, dt * 1.6);
    const em = reduce ? emRaw : st.emS;
    const mE = sm(0, 1, merge);
    const SC0 = (mob ? 60 : 88) * SIZE;
    const startK = clamp(mark.sc / (1.5 * SC0), 0.08, 1);
    let kSc = lerp(startK, 1, em);
    if (merge > 0 && fb) kSc *= lerp(1, clamp(Math.min(fb.w, 280) * 0.32 / (1.5 * SC0), 0.15, 1), mE);
    const tint = Math.max((1 - em) * 0.9, mE * 0.85);

    // ---- state machine: flying weight (damped). take-off + merge glide count as flight ----
    const emFly = leg === 0 ? Math.sin(Math.PI * clamp(em)) * 1 : 0;
    st.ruffle = Math.max(0, st.ruffle - dt * 1.6);
    const fwT = reduce ? 0 : clamp(Math.max(st.fly, emFly, mE > 0 && mE < 1 ? 0.6 : 0) + st.ruffle * 0.35);
    st.fw += (fwT - st.fw) * Math.min(1, dt * 4);
    const F = st.fw, P = 1 - F;
    if (!reduce) st.br += dt * 1.5;
    const br = st.br;

    // wings: flapping (phase-delayed hand + blade flex) blended into the raised V of the reference
    const sn = Math.sin(ph), cs = Math.cos(ph);
    const up = Math.max(0, cs);
    const fP1 = 0.32 + 0.95 * sn, fP2 = 0.34 + 1.12 * Math.sin(ph - 0.6), fBend = -0.42 * Math.cos(ph - 0.5);
    const vP1 = 1.0 + 0.045 * Math.sin(br), vP2 = 1.2 + 0.06 * Math.sin(br - 0.6), vBend = 0.1 + 0.05 * Math.sin(br - 1.2);
    const rf = st.ruffle * 0.22 * Math.sin(br * 14);
    wN.p1 = lerp(vP1, fP1, F) + st.bank * 0.5; wN.p2 = lerp(vP2, fP2, F) + st.bank * 0.5 + rf; wN.bend = lerp(vBend, fBend, F);
    wN.hand = 1 - 0.3 * up * F; wN.fan = lerp(1.0, 0.8 - 0.25 * up, F); wN.spread = lerp(0.025 + 0.01 * Math.sin(br * 0.7), 0.0, F); wN.blen = 1 - 0.12 * up * F;
    wF.p1 = wN.p1 - st.bank; wF.p2 = wN.p2 - st.bank - rf * 0.5; wF.bend = wN.bend; wF.hand = wN.hand; wF.fan = wN.fan; wF.spread = wN.spread; wF.blen = wN.blen;
    computeWing(wN, WN); computeWing(wF, WF);

    // head: look-around script when idle, cursor tracking when the mouse moved recently, level in flight
    const now = performance.now();
    if (!reduce) st.lt += dt;
    lookAt(st.lt);
    const SC = SC0 * kSc * (1 + 0.012 * Math.sin(br) * P);
    const bob = P * FOOT + F * cs * 0.045;
    // talons rest on the spine line itself (perch point sits 16px above it); drawing offset only, path untouched
    const seat = P * clamp(16 - (cur.perchDy || 0) - 3, 0, 40);
    let ox = px, oy = py - bob * SC + seat;
    if (em < 1) { const a = Math.sin(Math.PI * em) * 40; ox = lerp(mark.cx, ox, em); oy = lerp(mark.cy, oy, em) - a; }
    const flipS = st.flip >= 0 ? 1 : -1;
    const hx = ox + st.flip * HEAD_CX * SC, hy = oy - 0.17 * SC;
    const mAge = now - st.mAt;
    st.trackW += ((st.mx >= 0 && mAge < 2600 ? 1 : 0) - st.trackW) * Math.min(1, dt * 3);
    let yT = LK.y, pT = LK.p, tT = LK.t;
    let cuX = 0, cuY = 0;
    if (st.mx >= 0) {
      const ddx = (st.mx - hx) * flipS, ddy = hy - st.my, dist = Math.hypot(ddx, ddy);
      const near = dist < SC * 0.9;
      const myaw = near ? 1.5 : ddx >= 0 ? clamp(-ddx / 900, -0.1, 0) + 0.0 : 2.35;
      const mp = clamp(Math.atan2(ddy, Math.abs(ddx) + 1), -0.55, 0.5);
      cuX = clamp(ddx / 300, -1, 1); cuY = clamp(ddy / 300, -1, 1);
      yT = lerp(yT, myaw, st.trackW); pT = lerp(pT, near ? 0.05 : mp, st.trackW); tT = lerp(tT, 0.12 * Math.sin(st.lt * 0.8), st.trackW);
    }
    // look-around only while perched and mouse idle > 150ms; otherwise eased back to level
    const lookW = reduce ? 0 : P * (mAge > 150 || st.trackW > 0.05 ? 1 : 0.4);
    yT *= lookW; pT = lerp(-st.pitch * 0.6, pT, lookW); tT *= lookW;
    const kh = Math.min(1, dt * 4.5);
    st.hYaw += (yT - st.hYaw) * kh; st.hPitch += (pT - st.hPitch) * kh; st.hTilt += (tT - st.hTilt) * kh;
    st.pupX += (cuX * st.trackW - st.pupX) * kh; st.pupY += (cuY * st.trackW - st.pupY) * kh;
    const beakT = reduce ? 0.16 : 0.13 + P * (0.04 * Math.sin(st.lt * 3.1) + 0.025 * Math.sin(st.lt * 7.3 + 1)) + F * 0.06;
    st.beak += (beakT - st.beak) * Math.min(1, dt * 8);

    // pulse follows the merge; held while the logo stays centred
    pulseTo(merge);
    const mergedNow = merge >= 0.98;
    if (mergedNow && !st.merged) { st.merged = true; st.mergedAt = performance.now(); st.burst = []; for (let i = 0; i < 56; i++) st.burst.push({ a: i / 56 * 6.283 + (i % 3) * 0.2, sp: 70 + (i * 37 % 110), c: ['#8a5cf5', '#cdbcff', '#ffffff'][i % 3] }); }
    else if (!mergedNow && st.merged) st.merged = false;

    const alpha = alphaBase * (1 - sm(0.82, 1, merge));
    RA = alpha; RS = SC;
    if (alpha > 0.02 && SC > 0.5) {
      ctx.save();
      ctx.setTransform(dpr * st.flip * SC, 0, 0, -dpr * SC, ox * dpr, oy * dpr);
      // pitch about the toes when perched so the feet stay on the line
      const pvx = 0.1 * P, pvy = -FOOT * P;
      ctx.translate(pvx, pvy); ctx.rotate(st.pitch + st.bank * 0.12 + (merge > 0 ? mE * 0.4 : 0)); ctx.translate(-pvx, -pvy);
      ctx.globalAlpha = alpha;
      const d = 1.0 / SC; // layer offset ~1px
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      // soft bloom sprite behind the bird (pre-rendered)
      ctx.globalAlpha = alpha * 0.8; ctx.drawImage(PATHS.glow, -1.25, -0.75, 2.5, 2.7); ctx.globalAlpha = alpha;
      // far wing (darker, behind)
      drawWing(WF, PAINT.wingF, PAINT.covF, d, 0.0);
      // far leg
      const ext = Math.pow(P, 1.5);
      drawLeg(0.0, -0.12, ext, '#3d2c66', '#a08ad8', 0.95);
      // tail
      drawTail(ph, F, P, d);
      // body
      ctx.save(); ctx.scale(1, 1 + 0.015 * Math.sin(br) * P); layeredPath(ctx, PATHS.body, PAINT.body, d); ctx.restore();
      // subtle back sheen
      ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = alpha * 0.22; ctx.strokeStyle = COL.tip; ctx.lineWidth = 1.1 / SC; ctx.stroke(PATHS.body); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = alpha;
      drawHead(d, SC);
      drawLeg(0.05, -0.135, ext, '#6a45c4', COL.tip, 1);
      drawWing(WN, PAINT.wingN, PAINT.covN, d, 1);
      ctx.restore();
      if (tint > 0.01) {
        ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'source-atop'; ctx.globalAlpha = tint; ctx.fillStyle = COL.tip;
        const R = 1.6 * SC * dpr; ctx.fillRect(ox * dpr - R, oy * dpr - R, R * 2, R * 2); ctx.restore();
      }
    }
    if (st.merged && st.burst.length) {
      const age = (performance.now() - st.mergedAt) / 1000;
      if (age < 1) {
        const f = 1 - age;
        for (const b of st.burst) { const dd = b.sp * (1 - Math.pow(1 - age, 3)); ctx.fillStyle = b.c; ctx.globalAlpha = f; ctx.fillRect(Math.round((target.x + Math.cos(b.a) * dd) * dpr), Math.round((target.y + Math.sin(b.a) * dd) * dpr), 2 * dpr, 2 * dpr); }
        ctx.globalAlpha = 1;
      }
    }
    st.dbg = { leg, t, e: eE, fly: st.fly, merge, pc, s, x: px, y: py, fw: st.fw, yaw: st.hYaw, sc: SC };

  }
  if (window.__neon && window.__neon.hook) { st.hooked = true; window.__neon.hook((t, d) => frame(performance.now())); } else st.raf = requestAnimationFrame(frame);
  return st;
}

function destroy() {
  if (!S) return;
  cancelAnimationFrame(S.raf); removeEventListener('resize', S.onResize); removeEventListener('load', S.onLoad); clearInterval(S.mt);
  removeEventListener('pointermove', S.onMove);
  if (S.stCb && window.ScrollTrigger) ScrollTrigger.removeEventListener('refresh', S.stCb);
  S.ctx.setTransform(1, 0, 0, 1, 0, 0); S.ctx.clearRect(0, 0, S.canvas.width, S.canvas.height);
  S.setDock(true); try { window.SeerGlass && window.SeerGlass.logoPulse && window.SeerGlass.logoPulse(0); } catch (_) { }
  S = null;
}

window.SeerBird = { init, destroy, _force(s) { if (S) S.force = s; }, _dbg() { return S && S.dbg; }, _phase(p) { if (S) S.ph = p; } };
