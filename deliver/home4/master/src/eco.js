// ECOSYSTEM chapter. DOM side: geometry measure, card entrance/tilt/spotlight, micro visuals.
// Canvas side: ecoScene() draws the five wires on the shared spine system (trunk comes from spine.js, layout 'ecosystem').
import { clamp, lerp, ss, sstep, reduced, isMob } from './util.js';
import { ecoGeom, ecoStageTop, FOOT_Y } from './layouts.js';
import { spine } from './spine.js';
import { PAL, tube, glowDot, fx } from './neon.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const LANE = 9, RAD = 14;
let sec, stage, grid, cardEls = [], faces = [], strip, copyEl, leadEl;
const E = { e: [0, 0, 0, 0, 0], hit: [0, 0, 0, 0, 0], grown: [0, 0, 0, 0, 0], strip: 0, wires: [], dirty: true };
const flowMQ = matchMedia('(max-width:1199px), (max-height:779px)');

/* ------------------------------------------------------------- geometry */
function polyOf(build) {
  const P = []; const add = (x, y) => P.push([x, y]);
  build({
    add,
    line: (x, y) => add(x, y),
    bez: (x0, y0, x1, y1, x2, y2, x3, y3) => { for (let i = 1; i <= 28; i++) { const t = i / 28, u = 1 - t; add(u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3, u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3); } },
    quad: (x0, y0, x1, y1, x2, y2) => { for (let i = 1; i <= 10; i++) { const t = i / 10, u = 1 - t; add(u * u * x0 + 2 * u * t * x1 + t * t * x2, u * u * y0 + 2 * u * t * y1 + t * t * y2); } },
  });
  const cum = [0]; for (let i = 1; i < P.length; i++) cum.push(cum[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
  return { pts: P, cum, len: cum[cum.length - 1] };
}

export function measureEco() {
  if (!sec) return;
  const flow = flowMQ.matches;
  sec.classList.toggle('eco-flow', flow);
  ecoGeom.pin = !flow;
  stage.style.removeProperty('--eco-top');
  const sr0 = stage.getBoundingClientRect();
  const lr = leadEl.getBoundingClientRect();
  const leadBottom = lr.bottom - sr0.top;
  if (!flow) stage.style.setProperty('--eco-top', Math.round(leadBottom + 106) + 'px');
  const sr = stage.getBoundingClientRect(), W = innerWidth;
  const cards = cardEls.map((c) => { const r = c.getBoundingClientRect(); return { x: r.left, y: r.top - sr.top, w: r.width, h: r.height, cx: r.left + r.width / 2 }; });
  const secR = sec.getBoundingClientRect(), foot = $('footer.foot');
  const sy = window.scrollY;
  ecoGeom.docTop = secR.top + sy; ecoGeom.h = sec.offsetHeight;
  ecoGeom.footTop = foot.getBoundingClientRect().top + sy;
  ecoGeom.stageDocTop = sr.top + sy;
  ecoGeom.cards = cards;
  const wires = [];
  if (!flow) {
    const y0 = Math.round(leadBottom + 42); ecoGeom.y0L = y0;
    const fanX = Math.max(24, cards[0].cx - RAD - 100); ecoGeom.fanX = fanX;
    cards.forEach((c, i) => {
      const lane = cards.length - 1 - i, yl = y0 + lane * LANE, top = c.y;
      const w = polyOf(({ add, line, bez, quad }) => {
        add(fanX, y0);
        if (lane > 0) { bez(fanX, y0, fanX + 46, y0, fanX + 46, yl, fanX + 96, yl); }
        line(c.cx - RAD, yl); quad(c.cx - RAD, yl, c.cx, yl, c.cx, yl + RAD); line(c.cx, top);
      });
      wires.push({ ...w, node: [c.cx, top], card: i, order: i });
    });
  } else {
    const mob = W < 600;
    const railX = mob ? 12 : Math.round(clamp(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gut')) || 40, 12, 60) / 2);
    ecoGeom.railX = railX;
    const y0 = 44; ecoGeom.y0L = y0;
    const Fl = ecoGeom.h - 30;
    ecoGeom.Fl = Fl;
    const rail = polyOf(({ add, line, quad }) => { add(railX, y0); line(railX, Fl - 8); quad(railX, Fl - 8, railX, Fl, railX - 8, Fl); });
    wires.push({ ...rail, node: null, card: -1, order: -1, rail: true });
    if (mob) {
      cards.forEach((c, i) => {
        const ty = c.y + 36;
        const w = polyOf(({ add, line }) => { add(railX, ty); line(c.x, ty); });
        wires.push({ ...w, node: [c.x, ty], card: i, order: i, startY: ty });
      });
    } else {
      cards.forEach((c, i) => {
        const bus = c.y - 18, rowCards = cards.filter((q) => Math.abs(q.y - c.y) < 4), far = Math.max(...rowCards.map((q) => q.cx));
        const w = polyOf(({ add, line, quad }) => {
          add(railX, bus); line(c.cx - RAD, bus); quad(c.cx - RAD, bus, c.cx, bus, c.cx, bus + RAD); line(c.cx, c.y);
        });
        wires.push({ ...w, node: [c.cx, c.y], card: i, order: i, startY: bus });
      });
    }
  }
  E.wires = wires; ecoGeom.ok = true; E.dirty = true;
  if (spine.measure) { /* spine caches doc geometry elsewhere */ }
}

/* ------------------------------------------------------------- cards */
function applyDom() {
  for (let i = 0; i < cardEls.length; i++) {
    const e = +E.e[i].toFixed(3), h = +E.hit[i].toFixed(2), li = cardEls[i];
    if (li._e !== e) { li.style.setProperty('--e', e); li._e = e; }
    if (li._h !== h) { li.style.setProperty('--hit', h); li._h = h; }
  }
  const s = +E.strip.toFixed(3);
  if (strip._e !== s) { strip.style.setProperty('--e', s); strip._e = s; }
}

function initCards() {
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    cardEls.forEach((li, i) => {
      const f = faces[i];
      li.addEventListener('pointermove', (ev) => {
        const r = f.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        f.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); f.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        if (!reduced) { f.style.setProperty('--rx', (clamp((0.5 - y) * 8, -4, 4)).toFixed(2) + 'deg'); f.style.setProperty('--ry', (clamp((x - 0.5) * 8, -4, 4)).toFixed(2) + 'deg'); }
      });
      li.addEventListener('pointerenter', () => { li._hov = true; });
      li.addEventListener('pointerleave', () => { li._hov = false; f.style.setProperty('--rx', '0deg'); f.style.setProperty('--ry', '0deg'); });
    });
  }
  cardEls.forEach((li) => { li.addEventListener('focusin', () => { li._foc = true; }); li.addEventListener('focusout', () => { li._foc = false; }); });
}

/* ------------------------------------------------------- micro visuals */
const NS = 'http://www.w3.org/2000/svg';
const bez3 = (p, t) => { const u = 1 - t; return [u * u * u * p[0][0] + 3 * u * u * t * p[1][0] + 3 * u * t * t * p[2][0] + t * t * t * p[3][0], u * u * u * p[0][1] + 3 * u * u * t * p[1][1] + 3 * u * t * t * p[2][1] + t * t * t * p[3][1]]; };
function initViz() {
  const mkc = (svg, r, cls) => { const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', r); c.setAttribute('class', cls); svg.appendChild(c); return c; };
  const v = {};
  const app = $('.v-app'), deep = $('.v-deep'), fut = $('.v-fut'), opp = $('.v-opp'), risk = $('.v-risk');
  v.app = { bars: $$('.b', app), dot: mkc(app, 3, 'pkt') };
  v.deep = { paths: $$('.fan path', deep), dot: mkc(deep, 3.2, 'pkt') };
  v.fut = { up: $('.up', fut), dn: $('.dn', fut), d1: mkc(fut, 2.8, 'pkt'), d2: mkc(fut, 2.8, 'pkt dn') };
  v.opp = { dots: $$('circle:not(.pk)', opp), pk: $('.pk', opp) };
  v.risk = { crv: $('.crv', risk), area: $('.area', risk) };
  const ys = [4, 10.2, 16.4, 22.7, 28.9, 35.1, 41.3, 47.6, 53.8, 60];
  const oppBase = v.opp.dots.map((d) => [+d.getAttribute('cx'), +d.getAttribute('cy')]);
  const spd = [1, 1, 1, 1, 1], ph = [0, 0.6, 1.3, 2.1, 0.9];
  const draw = [
    (t) => { // seer app: rows breathe, a packet scans down the index
      v.app.bars.forEach((b, k) => { b.style.transform = `scaleX(${(0.66 + 0.34 * Math.sin(t * 1.3 + k * 1.9)).toFixed(3)})`; });
      const u = (t * 0.45) % 1; v.app.dot.setAttribute('cx', 5); v.app.dot.setAttribute('cy', (12 + 40 * u).toFixed(1)); v.app.dot.style.opacity = Math.sin(Math.PI * u).toFixed(2);
    },
    (t) => { // deep: one question fans into ten, an agent hops through
      const amp = 0.74 + 0.26 * Math.sin(t * 1.1), hi = Math.floor(t * 0.9) % 10;
      v.deep.paths.forEach((p, i) => { const ye = 32 + (ys[i] - 32) * amp; p.setAttribute('d', `M4 32C70 32 110 ${ye.toFixed(1)} 196 ${ye.toFixed(1)}`); p.classList.toggle('on', i === hi); });
      const ye = 32 + (ys[hi] - 32) * amp, u = (t * 0.9) % 1, q = bez3([[4, 32], [70, 32], [110, ye], [196, ye]], u);
      v.deep.dot.setAttribute('cx', q[0].toFixed(1)); v.deep.dot.setAttribute('cy', q[1].toFixed(1)); v.deep.dot.style.opacity = Math.sin(Math.PI * u).toFixed(2);
    },
    (t) => { // futarchy: two branches breathe apart, packets run both
      const k = Math.sin(t * 1.2);
      v.fut.up.style.transform = `translateY(${(-2.5 - 2 * k).toFixed(2)}px)`; v.fut.dn.style.transform = `translateY(${(2.5 + 2 * k).toFixed(2)}px)`;
      const u = (t * 0.55) % 1, a = u < 0.8 ? bez3([[70, 32], [100, 32], [110, 12 - 2.5 - 2 * k], [150, 12 - 2.5 - 2 * k]], u / 0.8) : [150 + 20 * (u - 0.8) / 0.2, 12 - 2.5 - 2 * k];
      const b = u < 0.8 ? bez3([[70, 32], [100, 32], [110, 52 + 2.5 + 2 * k], [150, 52 + 2.5 + 2 * k]], u / 0.8) : [150 + 20 * (u - 0.8) / 0.2, 52 + 2.5 + 2 * k];
      v.fut.d1.setAttribute('cx', a[0].toFixed(1)); v.fut.d1.setAttribute('cy', a[1].toFixed(1)); v.fut.d2.setAttribute('cx', b[0].toFixed(1)); v.fut.d2.setAttribute('cy', b[1].toFixed(1));
      v.fut.d1.style.opacity = v.fut.d2.style.opacity = Math.sin(Math.PI * Math.min(1, u * 1.05)).toFixed(2);
    },
    (t) => { // opportunity: a wave sweeps the field, the shortlist stays lit
      v.opp.dots.forEach((d, i) => { const [x, y] = oppBase[i]; d.style.opacity = (0.34 + 0.5 * Math.pow(0.5 + 0.5 * Math.sin(x * 0.07 - t * 2.2 + y * 0.03), 3)).toFixed(2); });
      v.opp.pk.setAttribute('r', (5 + 1.3 * Math.sin(t * 3)).toFixed(2));
    },
    (t) => { // risk: survival curve redraws and holds
      const u = clamp(((t * 0.4) % 1.5) / 1);
      v.risk.crv.style.strokeDashoffset = (1 - u).toFixed(3); v.risk.area.style.opacity = (0.25 + 0.75 * u).toFixed(2);
    },
  ];
  draw.forEach((f, i) => f(ph[i] + 0.9));
  if (reduced) return;
  let vis = true; new IntersectionObserver((es) => { vis = es[0].isIntersecting; }, { rootMargin: '100px' }).observe(stage);
  return (dt) => {
    if (!vis) return;
    cardEls.forEach((li, i) => { const tg = li._hov || li._foc ? 3.4 : 1; spd[i] += (tg - spd[i]) * Math.min(1, dt * 6); ph[i] += dt * spd[i]; draw[i](ph[i]); });
  };
}

/* ---------------------------------------------------------------- init */
let vizTick = null;
export function initEco() {
  sec = $('#ecosystem'); if (!sec) return;
  stage = $('.stage', sec); grid = $('.eco-grid', sec); cardEls = $$('.eco-card', sec); faces = cardEls.map((c) => $('.eco-face', c));
  strip = $('.eco-strip', sec); copyEl = $('.copy', sec); leadEl = $('.lead', sec);
  sec.classList.add('eco-js');
  cardEls.forEach((c, i) => { c.style.setProperty('--e', 0); });
  strip.style.setProperty('--e', 0);
  measureEco(); initCards(); vizTick = initViz();
  flowMQ.addEventListener('change', () => measureEco());
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureEco);
  if (vizTick) { let last = performance.now(); const loop = (n) => { const dt = Math.min(0.05, (n - last) / 1000); last = n; vizTick(dt); requestAnimationFrame(loop); }; requestAnimationFrame(loop); }
}

/* --------------------------------------------------------------- scene */
const col = PAL.dark;
function pointAt(w, L) {
  const c = w.cum, P = w.pts;
  if (L <= 0) return P[0]; if (L >= w.len) return P[P.length - 1];
  let i = 1; while (i < c.length - 1 && c[i] < L) i++;
  const u = (L - c[i - 1]) / Math.max(1e-6, c[i] - c[i - 1]);
  return [lerp(P[i - 1][0], P[i][0], u), lerp(P[i - 1][1], P[i][1], u)];
}
function strokeTo(ctx, w, oy, L0, L1) {
  const P = w.pts, c = w.cum; if (L1 <= L0) return;
  const a = pointAt(w, L0); ctx.beginPath(); ctx.moveTo(a[0], a[1] + oy);
  for (let i = 1; i < P.length; i++) { if (c[i] <= L0) continue; if (c[i] >= L1) break; ctx.lineTo(P[i][0], P[i][1] + oy); }
  const b = pointAt(w, L1); ctx.lineTo(b[0], b[1] + oy);
}

export function ecoScene() {
  const rings = []; // {x,y,t}
  const tcv = document.getElementById('ecoTop'), tctx = tcv.getContext('2d');
  let lastG = [0, 0, 0, 0, 0, 0], lastU = [];
  return {
    name: 'ecosystem', tone: 0,
    draw(ctx, W, H, t, dt, p, en) {
      if (!ecoGeom.ok) return;
      const pin = ecoGeom.pin, st = ecoStageTop(H), wires = E.wires, k = spine.names.indexOf('ecosystem');
      const wgt = spine.weights[k] || 0;
      const n = cardEls.length;
      // ---- progress per wire and card
      const G = [], R = [];
      if (reduced) { for (let i = 0; i < wires.length; i++) G.push(1); for (let i = 0; i < n; i++) E.e[i] = 1; E.strip = 1; }
      else if (pin) {
        for (let i = 0; i < n; i++) {
          const a = 0.05 + 0.075 * i, ret = sstep(0.8 + 0.03 * (n - 1 - i), 0.9 + 0.03 * (n - 1 - i), p);
          G[i] = sstep(a, a + 0.17, p) * (1 - ret);
          E.e[i] = sstep(a + 0.08, a + 0.24, p);
        }
        E.strip = sstep(0.5, 0.64, p);
      } else {
        const front = 0.84 * H;
        wires.forEach((w, i) => {
          if (w.rail) { G[i] = clamp((front - (st + w.pts[0][1])) / w.len); if (G[i] > 0.97) G[i] = 1; }
          else G[i] = ss((front - (st + w.startY)) / 90);
        });
        cardEls.forEach((li, i) => { const c = ecoGeom.cards[i]; E.e[i] = sstep(0.98 * H, 0.72 * H, st + c.y); });
        const sr = strip.getBoundingClientRect(); E.strip = sstep(0.98 * H, 0.8 * H, sr.top);
      }
      // arrivals
      wires.forEach((w, i) => {
        if (w.rail) return;
        const g = G[i]; if (g >= 0.999 && lastG[i] < 0.999 && !reduced) { E.hit[w.card] = 1; rings.push({ x: w.node[0], y: w.node[1], t: 0 }); }
        lastG[i] = g;
      });
      for (let i = 0; i < n; i++) E.hit[i] = Math.max(0, E.hit[i] - dt * 1.6);
      applyDom();
      tctx.setTransform(spine.dpr, 0, 0, spine.dpr, 0, 0); tctx.clearRect(0, 0, W, H);
      if (wgt < 0.02) return;
      // ---- draw
      ctx.save();
      const sc = isMob(W) ? 0.8 : 1;
      wires.forEach((w, i) => {
        const g = G[i]; if (g <= 0.001) return;
        const Lg = w.len * g;
        tube(ctx, col, 2.1 * sc, 0.95, (c) => strokeTo(c, w, st, 0, Lg));
        if (w.rail || reduced || g < 0.999) return;
        // light packet travelling to the node; arrival flashes the card
        const u0 = (t * 0.34 + w.order * 0.21) % 1, u = ss(u0);
        if (lastU[i] !== undefined && u0 < lastU[i]) { E.hit[w.card] = Math.max(E.hit[w.card], 0.75); rings.push({ x: w.node[0], y: w.node[1], t: 0.2 }); }
        lastU[i] = u0;
        const len = 70, tail = Math.max(0, w.len * u - len), head = w.len * u;
        const segs = 8;
        ctx.lineCap = 'butt';
        for (let s = 0; s < segs; s++) {
          const l1 = head - (len * s) / segs, l2 = head - (len * (s + 1)) / segs; if (l1 <= 0) break;
          const a = Math.pow(1 - s / segs, 1.5);
          ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = `rgba(123,63,242,${0.5 * a * fx.a})`; ctx.lineWidth = 9 * sc;
          strokeTo(ctx, w, st, Math.max(0, l2), l1); ctx.stroke();
          ctx.globalCompositeOperation = 'source-over'; ctx.strokeStyle = `rgba(255,255,255,${a * fx.a})`; ctx.lineWidth = 2.6 * sc;
          strokeTo(ctx, w, st, Math.max(0, l2), l1); ctx.stroke();
        }
      });
      ctx.globalCompositeOperation = 'source-over';
      // nodes sit on the card's top border, drawn on the canvas above the cards
      fx.a = clamp(wgt * 1.2);
      wires.forEach((w, i) => {
        if (w.rail || !w.node) return;
        const g = G[i]; if (g < 0.995) { if (g > 0.9) { const q = pointAt(w, w.len * g); glowDot(tctx, col, q[0], q[1] + st, 2.4 * sc, 1); } return; }
        const h = E.hit[w.card], pulse = 0.5 + 0.5 * Math.sin(t * 2.2 + w.order);
        const x = w.node[0], y = w.node[1] + st, r = (4 + 1.8 * h + 0.4 * pulse) * sc;
        tctx.save(); tctx.fillStyle = '#121218'; tctx.beginPath(); tctx.arc(x, y, r + 2.6, 0, 7); tctx.fill(); tctx.restore();
        glowDot(tctx, col, x, y, r, 1);
        tctx.save(); tctx.strokeStyle = 'rgba(185,155,255,.85)'; tctx.lineWidth = 1.2; tctx.globalAlpha = fx.a; tctx.beginPath(); tctx.arc(x, y, r + 4.2, 0, 7); tctx.stroke(); tctx.restore();
      });
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i]; r.t += dt * 1.5; if (r.t >= 1) { rings.splice(i, 1); continue; }
        const e = 1 - Math.pow(1 - r.t, 2);
        tctx.save(); tctx.globalCompositeOperation = 'source-over'; tctx.globalAlpha = (1 - r.t) * 0.9 * fx.a; tctx.strokeStyle = '#b99bff'; tctx.lineWidth = 1.6;
        tctx.beginPath(); tctx.arc(r.x, r.y + st, 8 + 28 * e, 0, 7); tctx.stroke(); tctx.restore();
      }
      ctx.restore();
    },
  };
}
