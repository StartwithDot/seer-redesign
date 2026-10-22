import { clamp, lerp, smoother, mixRGB, rgba, isMob, rng, reduced } from './util.js';
import { LAYOUTS, N, zone } from './layouts.js';

const C = {
  core0: [246, 240, 255], core1: [255, 255, 255],
  mid0: [176, 146, 255], mid1: [236, 230, 255],
  glow0: [123, 63, 242], glow1: [214, 202, 255],
};

export const spine = {
  ext: {}, sets: {}, reveal: 1, W: 0, H: 0, dpr: 1, names: [], els: [], weights: [],
  flash: new Float32Array(N), cur: null, hole: null,
};

const r = rng(7);
const packets = Array.from({ length: 26 }, () => ({ x: r() * 900, line: Math.floor(r() * N), v: 260 + r() * 300, len: 70 + r() * 70, wait: 0 }));

export function initSpine(canvas, secEls) {
  const ctx = canvas.getContext('2d');
  spine.els = secEls;
  spine.names = secEls.map((e) => e.dataset.layout);

  function resize() {
    const W = innerWidth, H = innerHeight;
    spine.dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(W * spine.dpr);
    canvas.height = Math.round(H * spine.dpr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    spine.W = W; spine.H = H;
  }
  resize();
  addEventListener('resize', resize);

  // cached document geometry: no layout reads in the frame loop
  const chap = secEls.map((e) => e.tagName === 'SECTION');
  let docTop = [], docH = [];
  function measure() {
    const sy = window.scrollY;
    docTop = secEls.map((e) => e.getBoundingClientRect().top + sy);
    docH = secEls.map((e) => e.offsetHeight);
    spine.docTop = docTop; spine.docH = docH;
  }
  measure();
  spine.measure = measure;
  spine.vis = secEls.map(() => 1);
  function weights(H) {
    const sy = window.scrollY, n = secEls.length;
    spine.rects = secEls.map((e, i) => ({ top: docTop[i] - sy, bottom: docTop[i] + docH[i] - sy, height: docH[i] }));
    let k = 0;
    for (let i = 0; i < n; i++) if (chap[i] && docTop[i] - sy <= 0.5) k = i;
    let nx = -1;
    for (let i = k + 1; i < n; i++) if (chap[i]) { nx = i; break; }
    const ws = new Array(n).fill(0), vis = new Array(n).fill(1);
    ws[k] = 1;
    spine.u = 0;
    if (nx >= 0) {
      const u = clamp(1 - (docTop[nx] - sy) / H);
      const e = smoother(clamp((u - 0.08) / 0.84));
      ws[k] = 1 - e; ws[nx] = e;
      vis[k] = 1 - smoother(clamp(u * 2)); vis[nx] = smoother(clamp(u * 2 - 1));
      spine.u = u;
    }
    spine.vis = vis;
    return ws;
  }

  function blend(W, H, ws) {
    const out = { xs: new Array(N).fill(0), y0: 0, fx0: 0, fx1: 0, xe: 0, tone: 0, thick: 0, reach: 0, ends: new Array(N).fill(0), perchDy: 0, focusA: 0, focus: -1, labels: [], trunk: null };
    spine.names.forEach((nm, k) => {
      const w = ws[k]; if (w < 1e-4 || !LAYOUTS[nm]) return;
      const L = LAYOUTS[nm](W, H);
      const e = spine.ext[nm] || {};
      const vz = spine.vis[k] ?? 1;
      const fo = (e.fanOpen ?? 1) * vz;
      const reach = (e.reach ?? 1) * vz;
      out.y0 += L.y0 * w; out.fx0 += L.fx0 * w; out.fx1 += L.fx1 * w; out.xe += L.xe * w;
      out.perchDy += (L.perchDy || 0) * w; out.tone += L.tone * w; out.thick += L.thick * w; out.reach += reach * w;
      for (let i = 0; i < N; i++) {
        out.xs[i] += (e.endsX ? e.endsX[i] : L.xe) * w;
        let y = L.y0 + (L.ends[i] - L.y0) * fo;
        if (e.endsOverride) y = lerp(y, e.endsOverride[i], e.endsMix ?? 1);
        out.ends[i] += y * w;
      }
      if (L.labels) out.labels.push({ name: L.labels, w: w * vz, e });
      if (e.focus != null && e.focus >= 0 && w > 0.3) { out.focus = e.focus; out.focusA = Math.max(out.focusA, (e.focusA || 0)); }
      if (e.trunkLabel && w > 0.02 && (!out.trunk || w > out.trunk.w)) out.trunk = { text: e.trunkLabel, a: (e.trunkLabelA ?? 1) * Math.pow(w, 2), w, below: !!e.trunkBelow };
    });
    return out;
  }

  function yAt(p, i, x, t) {
    if (x <= p.fx0) return p.y0;
    const f = smoother((x - p.fx0) / Math.max(1, p.fx1 - p.fx0));
    return p.y0 + (p.ends[i] - p.y0) * f + Math.sin(x * 0.006 + t * 1.3 + i * 0.9) * 2.2 * f * Math.max(0, Math.min(1, (p.xs[i] - x) / 20)) * (reduced ? 0 : 1);
  }

  function build(p, t, xLimit) {
    const lines = [];
    for (let i = 0; i < N; i++) {
      const span = Math.max(40, p.xs[i] - p.fx0);
      const K = Math.min(130, Math.max(36, Math.ceil(span / 12)));
      const lim = Math.min(xLimit(i), p.fx0 + (p.xs[i] - p.fx0) * p.reach);
      const pts = [];
      for (let k = 0; k <= K; k++) {
        const x = Math.min(lim, p.fx0 + (span * k) / K);
        if (x < p.fx0) break;
        pts.push(x, yAt(p, i, x, t));
        if (x >= lim) break;
      }
      lines.push(pts);
    }
    return lines;
  }

  function frame(t, dt) {
    const W = spine.W, H = spine.H;
    ctx.setTransform(spine.dpr, 0, 0, spine.dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (spine.hole && spine.hole.r > 2) {
      ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.arc(spine.hole.x, spine.hole.y, spine.hole.r, 0, Math.PI * 2);
      ctx.clip('evenodd');
    }
    const ws = weights(H);
    spine.weights = ws;
    const p = blend(W, H, ws);
    spine.cur = p;
    const mob = isMob(W);
    const sc = mob ? 0.8 : 1;
    const tone = clamp(p.tone, 0, 1);
    const core = rgba(mixRGB(C.core0, C.core1, tone), 1);
    const midC = mixRGB(C.mid0, C.mid1, tone);
    const glowC = mixRGB(C.glow0, C.glow1, tone);
    const glowK = lerp(1, 0.55, tone);

    const reachX = p.fx0 + (p.xe - p.fx0) * p.reach;
    const xLimit = Math.min(reachX, spine.reveal >= 1 ? 1e9 : spine.reveal * (p.xe + 40));
    const trunkEnd = Math.min(p.fx0, xLimit);
    const revealLim = spine.reveal >= 1 ? 1e9 : spine.reveal * (p.xe + 40);
    const lines = build(p, t, () => revealLim);
    const reachI = (i) => p.fx0 + (p.xs[i] - p.fx0) * p.reach;
    spine.yAt = (i, x, tt) => yAt(p, i, x, tt);
    const lineA = (i) => {
      let a = 0.9 + (reduced ? 0 : 0.1 * Math.sin(t * (0.8 + i * 0.13) + i * 1.7));
      if (p.focus >= 0) a *= i === p.focus ? 1 : 1 - 0.8 * clamp(p.focusA, 0, 1);
      return a;
    };

    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const passes = [
      { w: 24, a: 0.05 * glowK, col: rgba(glowC, 1), op: 'lighter' },
      { w: 12, a: 0.1 * glowK, col: rgba(glowC, 1), op: 'lighter' },
      { w: 5.5, a: 0.5, col: rgba(midC, 1), op: 'source-over' },
      { w: 2.1, a: 1, col: core, op: 'source-over' },
    ];
    for (const ps of passes) {
      ctx.globalCompositeOperation = ps.op;
      ctx.lineWidth = ps.w * sc * p.thick;
      ctx.strokeStyle = ps.col;
      ctx.globalAlpha = ps.a;
      const combined = ps.op === 'lighter' && p.focus < 0;
      if (combined) {
        ctx.globalAlpha = ps.a;
        ctx.beginPath(); ctx.moveTo(-10, p.y0); ctx.lineTo(trunkEnd, p.y0);
        for (let i = 0; i < N; i++) {
          const pts = lines[i]; if (pts.length < 4) continue;
          ctx.moveTo(pts[0], pts[1]);
          for (let k = 2; k < pts.length; k += 2) ctx.lineTo(pts[k], pts[k + 1]);
        }
        ctx.stroke();
        continue;
      }
      ctx.beginPath(); ctx.moveTo(-10, p.y0); ctx.lineTo(trunkEnd, p.y0); ctx.stroke();
      for (let i = 0; i < N; i++) {
        const pts = lines[i];
        if (pts.length < 4) continue;
        ctx.globalAlpha = ps.a * lineA(i);
        ctx.beginPath(); ctx.moveTo(pts[0], pts[1]);
        for (let k = 2; k < pts.length; k += 2) ctx.lineTo(pts[k], pts[k + 1]);
        ctx.stroke();
      }
    }
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;

    // packets
    const speedK = reduced ? 0.25 : 1;
    for (const pk of packets) {
      if (pk.wait > 0) { pk.wait -= dt; continue; }
      pk.x += pk.v * dt * speedK;
      const pe = Math.max(reachI(pk.line), p.fx0);
      if (pk.x > pe) {
        if (reachI(pk.line) > p.fx0 + 2) { spine.flash[pk.line] = 1; if (spine.onArrive) spine.onArrive(pk.line); }
        pk.x = -pk.len; pk.line = Math.floor(Math.random() * N); pk.wait = Math.random() * 0.6;
        continue;
      }
      if (pk.x > Math.min(revealLim, reachI(pk.line)) + 0.1 && pk.x > p.fx0) continue;
      const dim = p.focus >= 0 ? (pk.line === p.focus ? 1 : 1 - 0.85 * clamp(p.focusA, 0, 1)) : 1;
      const segs = 10;
      ctx.lineCap = 'butt';
      for (let s = 0; s < segs; s++) {
        const x1 = pk.x - (pk.len * s) / segs, x2 = pk.x - (pk.len * (s + 1)) / segs;
        if (x1 < -5) break;
        const a = Math.pow(1 - s / segs, 1.6) * dim;
        const y1 = yAt(p, pk.line, x1, t), y2 = yAt(p, pk.line, x2, t);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = rgba(glowC, 0.5 * a); ctx.lineWidth = 9 * sc;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = `rgba(255,255,255,${a})`; ctx.lineWidth = 2.6 * sc;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      }
    }

    ctx.lineCap = 'round';
    // nodes: root + end caps
    if (xLimit >= p.fx0) {
      const pulse = 0.5 + 0.5 * Math.sin(t * 2.4);
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = rgba(glowC, 0.18 + 0.12 * pulse); ctx.beginPath(); ctx.arc(p.fx0, p.y0, (10 + 3 * pulse) * sc, 0, 7); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p.fx0, p.y0, 3.4 * sc, 0, 7); ctx.fill();
    }
    for (let i = 0; i < N; i++) spine.flash[i] = Math.max(0, spine.flash[i] - dt * 2.2);
    if (xLimit >= reachX - 1 && p.reach > 0.5) {
      for (let i = 0; i < N; i++) {
        const y = p.ends[i], f = spine.flash[i];
        const dim = p.focus >= 0 ? (i === p.focus ? 1 : 1 - 0.8 * clamp(p.focusA, 0, 1)) : 1;
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = rgba(glowC, (0.2 + 0.5 * f) * dim); ctx.beginPath(); ctx.arc(reachI(i), y, (6 + 6 * f) * sc, 0, 7); ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(255,255,255,${dim})`; ctx.beginPath(); ctx.arc(reachI(i), y, 2.8 * sc, 0, 7); ctx.fill();
      }
    }
    ctx.globalCompositeOperation = 'source-over';

    if (p.trunk && p.trunk.a > 0.02) {
      ctx.font = `600 ${mob ? 11 : 14}px "Inter Tight", sans-serif`;
      ctx.fillStyle = `rgba(226,214,255,${clamp(p.trunk.a * 1.2, 0, 1)})`;
      ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
      ctx.fillText(p.trunk.text, mob ? 16 : 56, p.trunk.below ? (mob ? Math.max(p.y0 + 26, H * 0.91) : p.y0 + 38) : mob ? zone(W, H).y0 - 14 : p.y0 - 32);
    }

    for (const lb of p.labels) {
      const set = spine.sets[lb.name]; if (!set) continue;
      const a0 = Math.pow(lb.w, 2.4) * (set.alpha ?? 1);
      if (a0 < 0.02) continue;
      const fs = mob ? 11.5 : 15;
      const x0 = p.xe + (mob ? 12 : 20), xr = W - (mob ? 12 : Math.max(24, W * 0.04));
      ctx.textBaseline = 'middle';
      for (let i = 0; i < N; i++) {
        const it = set.items[i]; if (!it) continue;
        const y = p.ends[i] + (it.slide || 0) * 14;
        const dim = p.focus >= 0 && lb.e.focus >= 0 ? (i === p.focus ? 1 : 1 - 0.7 * clamp(p.focusA, 0, 1)) : 1;
        const a = a0 * dim * (it.a ?? 1);
        if (it.flash > 0) {
          ctx.fillStyle = rgba(glowC, 0.22 * it.flash * a0);
          ctx.beginPath(); ctx.roundRect(x0 - 8, y - (mob ? 9 : 15), xr - x0 + 16, mob ? 18 : 30, 8); ctx.fill();
        }
        ctx.textAlign = 'right';
        ctx.font = `600 ${fs}px "Inter Tight", sans-serif`;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        const vtxt = it.val || '';
        ctx.fillText(vtxt, xr, y);
        const vw = ctx.measureText(vtxt).width;
        ctx.textAlign = 'left';
        ctx.font = `500 ${fs}px "Inter Tight", sans-serif`;
        ctx.fillStyle = `rgba(${i === p.focus ? '255,255,255' : '226,216,250'},${a * 0.95})`;
        let txt = it.text;
        const maxW = xr - x0 - vw - (it.gauge && !mob ? 170 : 14);
        if (ctx.measureText(txt).width > maxW) {
          while (txt.length > 3 && ctx.measureText(txt + '…').width > maxW) txt = txt.slice(0, -1);
          txt += '…';
        }
        ctx.fillText(txt, x0, y);
      }
    }
  }
  const frame0 = frame;
  return { frame: (t, dt) => { frame0(t, dt); ctx.restore(); }, resize: () => { resize(); measure(); }, measure };
}
