// Chapter scenes: Seer App, Deep, Futarchy, Opportunity, Information Finance (close).
import { SEER_MARKETS } from './markets.js';
import { clamp, lerp, ss, sstep, rng, isMob, reduced } from './util.js';
import { LAYOUTS, N, zone, gridGeom, deepZone, finaleZone } from './layouts.js';
import { spine } from './spine.js';
import { PAL, tube, glowDot, label, starShape, fx } from './neon.js';

const TAU = Math.PI * 2;
const vio = PAL.violet;
const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); };
export const arrive = {};
const ls = (ctx, v) => { if ('letterSpacing' in ctx) ctx.letterSpacing = v + 'px'; };

/* ---------------------------------------------------------------- seer app */
const CAT = {
  Governance: { tint: '#9a6bff', g: 'box' },
  Crypto: { tint: '#7b3ff2', g: 'hex' },
  Science: { tint: '#c9b8ff', g: 'atom' },
  Protocol: { tint: '#6a55f5', g: 'dia' },
  Culture: { tint: '#ad86ff', g: 'tri' },
};
function catGlyph(ctx, kind, x, y, r, col, a) {
  ctx.save(); ctx.globalAlpha *= a; ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1.3; ctx.lineJoin = 'round';
  ctx.beginPath();
  if (kind === 'box') { ctx.roundRect(x - r, y - r, r * 2, r * 2, 1.4); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.35, 0, TAU); ctx.fill(); return ctx.restore(); }
  if (kind === 'hex') { for (let i = 0; i < 6; i++) { const q = (i / 6) * TAU - Math.PI / 2; i ? ctx.lineTo(x + Math.cos(q) * r * 1.15, y + Math.sin(q) * r * 1.15) : ctx.moveTo(x + Math.cos(q) * r * 1.15, y + Math.sin(q) * r * 1.15); } ctx.closePath(); ctx.fill(); return ctx.restore(); }
  if (kind === 'atom') { ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y, r * 0.38, 0, TAU); ctx.fill(); return ctx.restore(); }
  if (kind === 'dia') { ctx.moveTo(x, y - r * 1.25); ctx.lineTo(x + r * 1.1, y); ctx.lineTo(x, y + r * 1.25); ctx.lineTo(x - r * 1.1, y); ctx.closePath(); ctx.fill(); return ctx.restore(); }
  ctx.moveTo(x, y - r * 1.1); ctx.lineTo(x + r * 1.1, y + r * 0.85); ctx.lineTo(x - r * 1.1, y + r * 0.85); ctx.closePath(); ctx.fill(); ctx.restore();
}
export function seerScene() {
  const rowsD = SEER_MARKETS.map(([cat, q, pct, lead], i) => ({ cat, q, pct, lead, ph: i * 1.7, hit: 0, ring: 0, tick: 0, walk: 0, walkT: 0, tickDir: 1 }));
  const trunc = (ctx, s, maxW) => { if (ctx.measureText(s).width <= maxW) return s; while (s.length > 3 && ctx.measureText(s + '…').width > maxW) s = s.slice(0, -1); return s + '…'; };
  // a line's end dot reached its row: chip expands and brightens, ring pulse, price ticks, then settles
  arrive.seerapp = (i) => {
    const k = spine.names.indexOf('seerapp'); if (!(spine.weights[k] > 0.5) || reduced) return;
    const r = rowsD[i]; if (!r || r.hit > 0.35) return;
    r.hit = 1; r.ring = 1; r.tick = 1;
    r.walkT = clamp(r.walkT * 0.5 + (Math.random() * 2 - 1) * 3.2, -5, 5); r.tickDir = r.walkT >= r.walk ? 1 : -1;
  };
  let colW = 0;
  const chip = (ctx, it, x, y, m, w, hit) => {
    const cat = CAT[it.cat] || CAT.Crypto, fs = m ? 8.5 : 10.5, h = (m ? 15 : 22) + 2 * hit;
    ctx.save();
    ctx.font = `600 ${fs}px "Inter Tight", sans-serif`; ls(ctx, m ? 0.9 : 1.3);
    const label = it.cat.toUpperCase(), tw = ctx.measureText(label).width, gl = m ? 12 : 17;
    const cw = tw + gl + (m ? 14 : 20) + 5 * hit, e = hit, cy = y;
    ctx.globalAlpha = w * fx.a;
    if (it.ring > 0.01) {
      const q = 1 - it.ring;
      ctx.globalAlpha = w * fx.a * it.ring * 0.7; ctx.strokeStyle = 'rgba(123,63,242,1)'; ctx.lineWidth = 1.2;
      rr(ctx, x - 3 - q * 11, cy - h / 2 - 3 - q * 11, cw + 6 + q * 22, h + 6 + q * 22, h / 2 + 3 + q * 11); ctx.stroke();
      ctx.globalAlpha = w * fx.a;
    }
    ctx.fillStyle = '#121218'; rr(ctx, x, cy - h / 2, cw, h, h / 2); ctx.fill();
    ctx.fillStyle = cat.tint; ctx.globalAlpha = w * fx.a * (0.07 + 0.12 * e); rr(ctx, x, cy - h / 2, cw, h, h / 2); ctx.fill();
    ctx.globalAlpha = w * fx.a; ctx.strokeStyle = `rgba(${e > 0.02 ? '150,105,255' : '123,63,242'},${0.5 + 0.45 * e})`; ctx.lineWidth = 1;
    rr(ctx, x + 0.5, cy - h / 2 + 0.5, cw - 1, h - 1, h / 2); ctx.stroke();
    catGlyph(ctx, cat.g, x + (m ? 8 : 12), cy, m ? 2.4 : 3.3, cat.tint, 1);
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillStyle = e > 0.02 ? `rgb(${Math.round(184 + 50 * e)},${Math.round(164 + 56 * e)},255)` : '#B8A4FF';
    ctx.fillText(label, x + gl + (m ? 2 : 3), cy + 0.5);
    ctx.restore();
    return cw;
  };
  return {
    name: 'seerapp', tone: 1,
    draw(ctx, W, H, t, dt) {
      const m = isMob(W), cur = spine.cur;
      const k = spine.names.indexOf('seerapp');
      const w = Math.pow(spine.weights[k] || 0, 2.4);
      spine.ext.seerapp = { fanOpen: 1, reach: 1 };
      if (w < 0.02 || !cur) return;
      const xr = W - (m ? 12 : Math.max(24, W * 0.04));
      const x0 = cur.xe + (m ? 12 : 20);
      const fs = m ? 11.5 : 15;
      if (!colW) { ctx.save(); ctx.font = '600 10.5px "Inter Tight", sans-serif'; ls(ctx, 1.3); colW = ctx.measureText('GOVERNANCE').width + 17 + 20 + 5; ls(ctx, 0); ctx.restore(); }
      ctx.save(); ctx.textBaseline = 'middle';
      rowsD.forEach((it, i) => {
        const y = cur.ends[i];
        it.hit = Math.max(0, it.hit - dt * 1.25); it.ring = Math.max(0, it.ring - dt * 1.1); it.tick = Math.max(0, it.tick - dt * 1.6);
        it.walk += (it.walkT - it.walk) * (1 - Math.exp(-dt * 7));
        const he = it.hit > 0 ? ss((1 - it.hit) / 0.12) * Math.pow(it.hit, 0.8) : 0;
        const pc = clamp(it.pct + (reduced ? 0 : Math.sin(t * 0.7 + it.ph) * 1.4 + it.walk), 1, 99);
        const val = (it.lead ? it.lead + ' ' : '') + pc.toFixed(0) + '%';
        ctx.globalAlpha = w * fx.a;
        ctx.font = `700 ${fs}px "Inter Tight", sans-serif`; ctx.textAlign = 'right';
        ctx.fillStyle = it.tick > 0.02 ? `rgb(${Math.round(255 - 70 * it.tick)},${Math.round(255 - 90 * it.tick)},255)` : '#fff';
        ctx.fillText(val, xr, y - (it.tick > 0.02 ? 2 * Math.sin(Math.PI * it.tick) * it.tickDir : 0));
        const vw = ctx.measureText(val).width;
        if (m) {
          const cw = chip(ctx, it, x0, y - 9, true, w, he);
          ctx.font = `500 ${fs}px "Inter Tight", sans-serif`; ctx.textAlign = 'left'; ctx.fillStyle = '#fff'; ctx.globalAlpha = w * fx.a;
          ctx.fillText(trunc(ctx, it.q, xr - x0 - vw - 10), x0, y + 8);
        } else {
          const cw = chip(ctx, it, x0, y, false, w, he);
          const gw = 120, gx1 = xr - Math.max(vw, 92) - 18, gx0 = gx1 - gw;
          const qx = x0 + colW + 14;
          ctx.globalAlpha = w * fx.a; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
          ctx.font = `500 ${fs}px "Inter Tight", sans-serif`; ctx.fillStyle = '#fff';
          ctx.fillText(trunc(ctx, it.q, gx0 - qx - 14), qx, y);
          ctx.fillStyle = 'rgba(255,255,255,.12)'; rr(ctx, gx0, y - 2, gw, 4, 2); ctx.fill();
          const len = Math.max(3, (gw * pc) / 100);
          tube(ctx, vio, 1.6, w, (c) => { c.beginPath(); c.moveTo(gx0 + 1, y); c.lineTo(gx0 + len, y); });
        }
      });
      ctx.restore();
      const hy = cur.ends[0] - (m ? 26 : 34);
      label(ctx, 'MARKET', x0, hy, { size: m ? 10 : 11.5, alpha: w * 0.85, spacing: 1.6, color: '#ece6ff' });
      label(ctx, 'CHANCE', xr, hy, { size: m ? 10 : 11.5, alpha: w * 0.85, spacing: 1.6, color: '#ece6ff', align: 'right' });
      label(ctx, 'Illustrative markets', x0, cur.ends[N - 1] + (m ? 24 : 34), { size: m ? 10 : 12, alpha: w * 0.75, color: '#c9b8ff', weight: 500 });
    },
  };
}

/* ---------------------------------------------------------------- deep */
export function deepScene() {
  let mounted = false, host = null, key = '';
  const place = (W, H) => {
    const kk = W + 'x' + H; if (kk === key || !host) return; key = kk;
    const z = deepZone(W, H), m = isMob(W);
    host.style.cssText = `position:absolute;pointer-events:none;left:${z.x0}px;top:${z.y0}px;width:${z.x1 - z.x0}px;height:${z.y1 - z.y0}px`;
    const stage = document.querySelector('#deep .stage'), copy = document.querySelector('#deep .copy');
    stage.style.cssText = 'display:block;padding:0;overflow:hidden';
    copy.style.cssText = `position:absolute;flex-shrink:0;width:${m ? 'calc(100vw - 2 * var(--gut))' : 'min(600px,42vw)'}`;
  };
  arrive.deep = (i) => { const k = spine.names.indexOf('deep'); if (spine.weights[k] > 0.5 && window.SeerGlass) window.SeerGlass.deep.pulse(i); };
  return {
    name: 'deep', tone: 0,
    draw(ctx, W, H) {
      if (!mounted && window.SeerGlass && document.getElementById('deep').getBoundingClientRect().top < innerHeight * 2) {
        mounted = true;
        const stage = document.querySelector('#deep .stage');
        host = document.createElement('div'); host.id = 'deep-3d'; host.setAttribute('aria-hidden', 'true');
        stage.insertBefore(host, stage.querySelector('.perch'));
        window.SeerGlass.mountDeep(host);
      }
      place(W, H);
      const e = { fanOpen: 1, reach: 1, trunkLabel: 'Which Optimism repository is the most original?', trunkLabelA: 1, trunkBelow: true };
      const a = window.SeerGlass && window.SeerGlass.deep.anchors, z = deepZone(W, H);
      if (a && a.length === N) { e.endsOverride = a.map((q) => z.y0 + q.y); e.endsX = a.map((q) => z.x0 + q.x); e.endsMix = 1; }
      spine.ext.deep = e;
    },
  };
}

/* ---------------------------------------------------------------- futarchy */
export function futarchyScene() {
  const cP = { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 };
  const cF = { core: '#cfc3ff', mid: '#a493ff', glow: '#b8abff', ga: 0.5 };
  const SOFT = '#e6dcff';
  return {
    name: 'futarchy', tone: 1,
    draw(ctx, W, H, t, dt, p, en) {
      const m = isMob(W), z = zone(W, H);
      const f = Math.max(0.5 * ss(en), sstep(0.04, 0.78, p));
      const fo = lerp(0.14, 1, f) + (reduced ? 0 : 0.012 * Math.sin(t * 1.3));
      spine.ext.futarchy = { fanOpen: fo, reach: 1, trunkLabel: 'Should the DAO fund this grant?', trunkLabelA: 1 };
      const cur = spine.cur; if (!cur) return;
      const yP = (cur.ends[0] + cur.ends[4]) / 2, yF = (cur.ends[5] + cur.ends[9]) / 2;
      const pp = 0.5 + 0.27 * f + 0.012 * Math.sin(t * 1.7), pf = 0.5 - 0.22 * f + 0.012 * Math.sin(t * 1.3 + 1);
      const pw = m ? 106 : 196, ph = m ? 54 : 76;
      const px = cur.xe + (m ? 10 : 24);
      const pill = (y, txt, price, col) => {
        ctx.save(); ctx.globalAlpha = fx.a; ctx.fillStyle = '#0B0B0E'; rr(ctx, px, y - ph / 2, pw, ph, 16); ctx.fill(); ctx.restore();
        tube(ctx, col, 1.8, 1, (c) => rr(c, px, y - ph / 2, pw, ph, 16));
        label(ctx, txt, px + 14, y - ph / 2 + (m ? 14 : 20), { size: m ? 10 : 11.5, spacing: 1.4, color: SOFT });
        label(ctx, price, px + 14, y + (m ? 9 : 12), { size: m ? 22 : 38, weight: 600 });
      };
      pill(yP, 'IF PASS', '$' + pp.toFixed(2), cP);
      pill(yF, 'IF FAIL', '$' + pf.toFixed(2), cF);
      const bx = px + pw + (m ? 8 : 18), midY = (yP + yF) / 2;
      tube(ctx, vio, 1.4, 0.9, (c) => { c.beginPath(); c.moveTo(bx - 8, yP); c.lineTo(bx, yP); c.lineTo(bx, yF); c.lineTo(bx - 8, yF); });
      const gap = pp - pf;
      const dao = (dx, dy, R, lw, fs) => {
        ctx.save(); ctx.globalAlpha = fx.a; ctx.fillStyle = '#0B0B0E'; ctx.beginPath(); ctx.arc(dx, dy, R, 0, TAU); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = lw; ctx.stroke(); ctx.restore();
        tube(ctx, cP, lw, 1, (c) => { c.beginPath(); c.arc(dx, dy, R, -Math.PI / 2, -Math.PI / 2 + TAU * (0.5 + gap * 0.5)); });
        label(ctx, 'DAO', dx, dy, { size: fs, weight: 700, align: 'center', spacing: 1.2 });
      };
      if (!m) {
        label(ctx, 'Market signal', bx + 14, midY - 14, { size: 12.5, color: SOFT });
        label(ctx, '+' + gap.toFixed(2), bx + 14, midY + 10, { size: 24, weight: 600 });
        const dx = z.x1 - 58, dy = midY, R = 46, lx0 = bx + 130, lx1 = dx - R - 12;
        ctx.save(); ctx.globalAlpha = fx.a; ctx.setLineDash([2, 9]); ctx.lineDashOffset = -t * 30; ctx.lineCap = 'round';
        ctx.strokeStyle = SOFT; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(lx0, dy); ctx.lineTo(lx1, dy); ctx.stroke();
        ctx.setLineDash([]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(lx1 - 7, dy - 6); ctx.lineTo(lx1, dy); ctx.lineTo(lx1 - 7, dy + 6); ctx.stroke(); ctx.restore();
        dao(dx, dy, R, 2, 16);
        label(ctx, 'The DAO votes.', dx, dy + R + 28, { size: 15, weight: 700, align: 'center' });
        label(ctx, 'The market informs.', dx, dy + R + 48, { size: 15, weight: 500, align: 'center', color: SOFT });
      } else {
        label(ctx, 'Signal +' + gap.toFixed(2), px, midY - 12, { size: 13, weight: 700 });
        label(ctx, 'The DAO votes.', px, midY + 8, { size: 11.5, weight: 700 });
        label(ctx, 'The market informs.', px, midY + 23, { size: 11.5, weight: 500, color: SOFT });
        dao(Math.min(W - 28, bx + 34), midY - 6, 21, 1.6, 10.5);
      }
    },
  };
}

/* ---------------------------------------------------------------- opportunity */
export function oppScene() {
  const r = rng(21);
  const chips = Array.from({ length: 48 }, (_, i) => ({ score: r(), i, ph: r() * 6, flash: 0 }));
  [...chips].sort((a, b) => b.score - a.score).forEach((c, k) => (c.rank = k));
  const winners = chips.filter((c) => c.rank < 6).sort((a, b) => a.rank - b.rank);
  let lastWave = -1, hot = new Set();
  arrive.opportunity = (i) => {
    const k = spine.names.indexOf('opportunity'); if (spine.weights[k] < 0.5) return;
    const L = LAYOUTS.opportunity(innerWidth, innerHeight); const row = Math.floor((i * L.rows) / N);
    const c = chips[row * L.cols]; if (c) c.flash = 1;
  };
  return {
    name: 'opportunity', tone: 0,
    draw(ctx, W, H, t, dt, p, en) {
      const m = isMob(W), cols = m ? 4 : 8, rows = 48 / cols, g = gridGeom(W, H, cols, rows), z = g.z;
      const k = spine.names.indexOf('opportunity');
      const wgt = Math.pow(spine.weights[k] || 0, 1.5);
      const rv = Math.max(sstep(0.0, 0.2, p), ss(en)), nar = sstep(0.24, 0.6, p), mv = sstep(0.54, 0.74, p), sl = sstep(0.78, 0.92, p);
      const cw = g.pw - (m ? 4 : 8), ch = Math.min(g.ph - (m ? 5 : 12), m ? 26 : 44);
      const cw2 = m ? 100 : 232;
      const slotY = (j) => lerp(z.y0 + g.ph * 0.8, z.y1 - g.ph * 0.8, j / 5);
      const slotX = z.x0 + cw2 / 2;
      const over = Array.from({ length: N }, (_, i) => slotY(Math.floor((i * 6) / N)));
      spine.ext.opportunity = { fanOpen: 1, reach: 1, endsOverride: over, endsMix: mv, trunkLabel: 'Which submissions get selected?', trunkLabelA: 1 };
      const wave = Math.floor(t / 1.1);
      if (wave !== lastWave) { lastWave = wave; hot = new Set(); const r2 = rng(wave * 7 + 3); for (let q = 0; q < 9; q++) hot.add(Math.floor(r2() * 48)); }
      if (wgt < 0.02) return;
      const seal = { x: z.x1 - (m ? 40 : 108), y: (z.y0 + z.y1) / 2 - (m ? 8 : 0), R: m ? 34 : 78 };
      chips.forEach((c) => {
        c.flash = Math.max(0, c.flash - dt * 1.4);
        const col = c.i % cols, row = (c.i / cols) | 0;
        let x = g.cx(col), y = g.cy(row);
        const th = col / cols + (row / rows) * 0.3;
        let a = clamp((rv * 1.5 - th) * 4, 0, 1);
        let sc = 1, w = cw, h = ch;
        const win = c.rank < 6;
        if (!win) { const fs = ((47 - c.rank) / 47) * 0.85; const f = clamp((nar - fs) / 0.15); a *= 1 - f; sc = 1 - 0.4 * f; y += 12 * f; }
        else { const e = ss(mv); x = lerp(x, slotX, e); y = lerp(y, slotY(c.rank), e); w = lerp(cw, cw2, e); h = lerp(ch, m ? 30 : 46, e); }
        a *= wgt;
        if (a < 0.01) return;
        const diag = Math.sin(t * 2.0 - (col + row) * 0.7);
        const settled = win && nar > 0.4;
        const focusW = settled && mv > 0.7 && !reduced && c.rank === Math.floor(t / 1.5) % 6 ? Math.pow(Math.sin(((t % 1.5) / 1.5) * Math.PI), 0.8) : 0;
        const blink = clamp(Math.max(settled ? 0 : (diag > 0.88 ? (diag - 0.88) / 0.12 : 0), settled ? 0 : (hot.has(c.i) ? Math.sin(((t % 1.1) / 1.1) * Math.PI) : 0), c.flash, focusW));
        const rad = m ? 6 : 10;
        ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.scale(sc * (1 + blink * 0.05), sc * (1 + blink * 0.05));
        if (settled) {
          ctx.fillStyle = '#121218'; rr(ctx, -w / 2, -h / 2, w, h, rad); ctx.fill();
          ctx.fillStyle = `rgba(123,63,242,${0.05 + 0.16 * blink})`; rr(ctx, -w / 2, -h / 2, w, h, rad); ctx.fill();
          ctx.strokeStyle = `rgba(${blink > 0.05 ? '150,100,255' : '123,63,242'},${0.45 + 0.55 * blink})`; ctx.lineWidth = 1 + 0.8 * blink;
          rr(ctx, -w / 2 + 0.5, -h / 2 + 0.5, w - 1, h - 1, rad); ctx.stroke();
          if (blink > 0.05) { ctx.save(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a * blink * 0.55; ctx.strokeStyle = '#7b3ff2'; ctx.lineWidth = 5; rr(ctx, -w / 2 - 1, -h / 2 - 1, w + 2, h + 2, rad + 1); ctx.stroke(); ctx.globalAlpha = a * blink * 0.3; ctx.lineWidth = 11; ctx.stroke(); ctx.restore(); }
        } else {
          ctx.fillStyle = `rgba(123,63,242,${0.14 + 0.5 * blink})`;
          rr(ctx, -w / 2, -h / 2, w, h, m ? 4 : 9); ctx.fill();
          ctx.strokeStyle = `rgba(${blink > 0.1 ? '230,220,255' : '185,155,255'},${0.45 + 0.5 * blink})`; ctx.lineWidth = 1.2;
          rr(ctx, -w / 2 + 0.5, -h / 2 + 0.5, w - 1, h - 1, m ? 4 : 9); ctx.stroke();
          if (blink > 0.1) { ctx.save(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a * blink * 0.5; ctx.strokeStyle = '#b99bff'; ctx.lineWidth = 3; rr(ctx, -w / 2 - 1, -h / 2 - 1, w + 2, h + 2, m ? 5 : 10); ctx.stroke(); ctx.restore(); }
        }
        if (!win || mv < 0.7) {
          ctx.globalAlpha = a * (win ? 1 - sstep(0.5, 0.7, mv) : 1); ctx.fillStyle = '#fff';
          ctx.font = `600 ${m ? 10 : 13}px "Inter Tight", sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(String(c.i + 1).padStart(2, '0'), 0, 1);
        }
        if (win && mv > 0.7) {
          const ta = sstep(0.7, 0.95, mv), px = m ? 9 : 16, ty = m ? -4 : -7;
          ctx.globalAlpha = a * ta; ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle';
          ctx.font = `600 ${m ? 12 : 15}px "Inter Tight", sans-serif`; ctx.textAlign = 'left';
          ctx.fillText(m ? `#${c.i + 1}` : `Submission ${c.i + 1}`, -w / 2 + px, ty);
          const pc = Math.round((0.55 + 0.4 * c.score) * 100 - c.rank * 3 + Math.sin(t + c.ph) * 1.5);
          // tabular numerals: fixed advance per digit, right aligned
          const fsz = m ? 12 : 15; ctx.font = `600 ${fsz}px "Inter Tight", sans-serif`; ctx.fillStyle = '#B8A4FF'; ctx.textAlign = 'center';
          const adv = ctx.measureText('0').width, str = pc + '%', pw = ctx.measureText('%').width;
          let cx2 = w / 2 - px - pw / 2; ctx.fillText('%', cx2, ty); cx2 -= pw / 2;
          for (let q = str.length - 2; q >= 0; q--) { cx2 -= adv / 2; ctx.fillText(str[q], cx2, ty); cx2 -= adv / 2; }
          const bw = w - 2 * px, byy = m ? 7 : 11, bh = m ? 2.5 : 3;
          ctx.fillStyle = 'rgba(255,255,255,.08)'; rr(ctx, -w / 2 + px, byy, bw, bh, bh / 2); ctx.fill();
          ctx.fillStyle = '#7B3FF2'; rr(ctx, -w / 2 + px, byy, Math.max(bh, bw * clamp(pc / 100)), bh, bh / 2); ctx.fill();
          ctx.save(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a * ta * (0.25 + 0.4 * blink); ctx.fillStyle = '#7B3FF2'; rr(ctx, -w / 2 + px, byy - 1, Math.max(bh, bw * clamp(pc / 100)), bh + 2, bh); ctx.fill(); ctx.restore();
        }
        ctx.restore();
      });
      if (sl > 0.01) {
        winners.forEach((c, j) => {
          const x1 = slotX + cw2 / 2, y1 = slotY(j);
          ctx.save(); ctx.setLineDash([3, 8]); ctx.lineDashOffset = -t * 24; ctx.lineCap = 'round';
          ctx.strokeStyle = '#fff'; ctx.globalAlpha = sl * 0.6 * wgt; ctx.lineWidth = 1.6;
          ctx.beginPath(); ctx.moveTo(x1 + 4, y1); ctx.quadraticCurveTo(lerp(x1, seal.x, 0.55), y1, seal.x - seal.R * 0.9, lerp(y1, seal.y, 0.5)); ctx.stroke();
          ctx.restore();
        });
        const e = ss(sl), sc = lerp(1.5, 1, e);
        ctx.save(); ctx.globalAlpha = e * wgt; ctx.translate(seal.x, seal.y); ctx.scale(sc, sc);
        ctx.fillStyle = '#17103a'; ctx.beginPath(); ctx.arc(0, 0, seal.R, 0, TAU); ctx.fill(); ctx.restore();
        ctx.save(); ctx.translate(seal.x, seal.y); ctx.scale(sc, sc);
        tube(ctx, vio, 2.2, e * wgt, (c) => { c.beginPath(); c.arc(0, 0, seal.R, 0, TAU); });
        ctx.strokeStyle = '#fff'; ctx.globalAlpha = e * wgt * 0.6; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(0, 0, seal.R * 0.62, 0, TAU); ctx.stroke();
        if (!m) {
          const txt = 'REVIEWERS KEEP THE FINAL SAY  *  ';
          ctx.globalAlpha = e * wgt; ctx.fillStyle = '#fff'; ctx.font = '700 12px "Inter Tight", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          const rot = t * 0.35, Rt = seal.R * 0.81;
          for (let i = 0; i < txt.length; i++) { ctx.save(); ctx.rotate(rot + (i / txt.length) * TAU); ctx.translate(0, -Rt); ctx.fillText(txt[i], 0, 0); ctx.restore(); }
        }
        ctx.restore();
        starShape(ctx, seal.x, seal.y, seal.R * 0.62 * sc, '#fff', e * wgt);
        if (m) {
          label(ctx, 'Reviewers keep', seal.x, seal.y + seal.R + 14, { size: 10.5, align: 'center', alpha: e * wgt });
          label(ctx, 'the final say', seal.x, seal.y + seal.R + 27, { size: 10.5, align: 'center', alpha: e * wgt });
        }
      }
    },
  };
}

/* ---------------------------------------------------------------- close: Information Finance */
export function closeScene() {
  const base = [34, 21, 13, 9, 7, 5, 4, 3, 2, 2];
  const OUTC = 'ABCDEFGHIJ';
  let mounted = false;
  const consumers = [{ l1: 'A person', l2: 'reads it', kind: 0 }, { l1: 'A DAO', l2: 'cites it', kind: 1 }, { l1: 'An agent', l2: 'fetches it', kind: 2 }];
  const hit = [0, 0, 0];
  // tiny looping glyphs, each in a 26px box centred on (x, y)
  const glyph = (ctx, kind, x, y, t, a) => {
    ctx.save(); ctx.globalAlpha = a * fx.a; ctx.strokeStyle = '#B8A4FF'; ctx.fillStyle = '#B8A4FF'; ctx.lineWidth = 1.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const T = reduced ? 0.4 : t;
    if (kind === 0) { // eye: blink + scan line
      const ph = (T * 0.33 + 0.1) % 1, bl = ph > 0.93 ? Math.sin(((ph - 0.93) / 0.07) * Math.PI) : 0, oy = 6.4 * (1 - 0.92 * bl);
      ctx.beginPath(); ctx.moveTo(x - 11, y); ctx.quadraticCurveTo(x, y - oy * 1.9, x + 11, y); ctx.quadraticCurveTo(x, y + oy * 1.9, x - 11, y); ctx.closePath(); ctx.stroke();
      ctx.save(); ctx.clip();
      ctx.beginPath(); ctx.arc(x + 2.2 * Math.sin(T * 0.9), y, 3.1, 0, TAU); ctx.fill();
      const sx = x - 11 + ((T * 0.7) % 1) * 22; ctx.globalAlpha = a * fx.a * 0.9; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(sx, y - 8); ctx.lineTo(sx, y + 8); ctx.stroke();
      ctx.restore();
    } else if (kind === 1) { // ballot: box + tick that draws itself and resets
      ctx.beginPath(); ctx.roundRect(x - 9, y - 9, 18, 18, 4); ctx.stroke();
      const c = (T * 0.4) % 1, d = c < 0.45 ? c / 0.45 : 1, fade = c > 0.85 ? 1 - (c - 0.85) / 0.15 : 1;
      const P = [[x - 4.2, y + 0.3], [x - 1.2, y + 3.6], [x + 4.6, y - 3.4]], L1 = Math.hypot(3, 3.3), L2 = Math.hypot(5.8, 7), tot = L1 + L2, dd = d * tot;
      ctx.globalAlpha = a * fx.a * fade; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.9; ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]);
      if (dd <= L1) ctx.lineTo(P[0][0] + (P[1][0] - P[0][0]) * dd / L1, P[0][1] + (P[1][1] - P[0][1]) * dd / L1);
      else { ctx.lineTo(P[1][0], P[1][1]); const q = (dd - L1) / L2; ctx.lineTo(P[1][0] + (P[2][0] - P[1][0]) * q, P[1][1] + (P[2][1] - P[1][1]) * q); }
      ctx.stroke();
    } else { // agent: terminal prompt with blinking cursor and a pulsing diamond
      ctx.beginPath(); ctx.roundRect(x - 12, y - 9, 24, 18, 4); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x - 7, y - 3); ctx.lineTo(x - 3.5, y); ctx.lineTo(x - 7, y + 3); ctx.stroke();
      if (Math.floor(T * 2.2) % 2 === 0) { ctx.fillStyle = '#fff'; ctx.fillRect(x - 0.5, y + 1.6, 6, 1.9); }
      const pu = 0.5 + 0.5 * Math.sin(T * 3); ctx.globalAlpha = a * fx.a * (0.5 + 0.5 * pu); ctx.beginPath(); ctx.moveTo(x + 7.5, y - 5.5 - pu); ctx.lineTo(x + 9.5 + pu, y - 3.5); ctx.lineTo(x + 7.5, y - 1.5 + pu); ctx.lineTo(x + 5.5 - pu, y - 3.5); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  };
  // path from the signal point down a short stem, then an S-curve into the pill top
  const pathPts = (nx, ny, y1, px, py, n = 48) => {
    const pts = [[nx, ny], [nx, y1]];
    const c1 = [nx, y1 + (py - y1) * 0.55], c2 = [px, y1 + (py - y1) * 0.45];
    for (let i = 1; i <= n; i++) { const u = i / n, v = 1 - u; pts.push([v * v * v * nx + 3 * v * v * u * c1[0] + 3 * v * u * u * c2[0] + u * u * u * px, v * v * v * y1 + 3 * v * v * u * c1[1] + 3 * v * u * u * c2[1] + u * u * u * py]); }
    return pts;
  };
  const segAt = (pts, d0, d1) => { // sub-polyline between arc lengths d0..d1
    const out = []; let acc = 0;
    for (let i = 1; i < pts.length; i++) {
      const L = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]), a0 = acc, a1 = acc + L; acc = a1;
      if (a1 < d0 || a0 > d1) continue;
      const f0 = Math.max(0, (d0 - a0) / L), f1 = Math.min(1, (d1 - a0) / L);
      if (!out.length) out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f0, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f0]);
      out.push([pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * f1, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * f1]);
    }
    return out;
  };
  const plen = (pts) => { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return L; };
  const poly = (c, pts) => { c.beginPath(); pts.forEach((q, i) => (i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1]))); };
  const tab = (ctx, str, xr, y, fs, weight, color, a, align = 'right') => { // fixed-advance (tabular) digits
    ctx.save(); ctx.globalAlpha = a * fx.a; ctx.font = `${weight} ${fs}px "Inter Tight", sans-serif`; ctx.fillStyle = color; ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    const adv = ctx.measureText('0').width; const wd = (ch) => (/\d/.test(ch) ? adv : ctx.measureText(ch).width);
    let tw = 0; for (const ch of str) tw += wd(ch);
    let x = align === 'right' ? xr - tw : xr;
    for (const ch of str) { const w1 = wd(ch); ctx.fillText(ch, x + w1 / 2, y); x += w1; }
    ctx.restore(); return tw;
  };
  return {
    name: 'close', tone: 0,
    draw(ctx, W, H, t, dt, p, en) {
      const m = isMob(W), z = finaleZone(W, H);
      if (!mounted && window.SeerGlass) {
        const slot = document.getElementById('finale-logo');
        if (slot && document.getElementById('close').getBoundingClientRect().top < innerHeight * 2) {
          mounted = true;
          slot.querySelectorAll('svg').forEach((s) => { s.style.opacity = '0'; });
          window.SeerGlass.mountLogo(slot, { floor: false });
        }
      }
      const reach = sstep(0.06, 0.24, p), fan = sstep(0.1, 0.3, p);
      spine.ext.close = { fanOpen: Math.max(fan, 0.12 * ss(en)), reach: Math.max(reach, 0.3 * ss(en)), trunkLabel: 'Which proposal should get funded?', trunkLabelA: 1 };
      const price = sstep(0.28, 0.4, p), conv = sstep(0.42, 0.56, p), sig = sstep(0.58, 0.7, p), use = sstep(0.7, 0.86, p), stat = sstep(0.3, 0.62, p);
      if (window.SeerGlass) window.SeerGlass.logoPulse(sig * (0.55 + 0.45 * Math.sin(t * 2)) * (1 - 0.3 * use));
      const k = spine.names.indexOf('close');
      const wgt = Math.pow(spine.weights[k] || 0, 2);
      const cur = spine.cur;
      if (wgt < 0.02 || !cur) return;
      const cx = (z.x0 + z.x1) / 2, cy = (z.y0 + z.y1) / 2;
      const nodeX = Math.max(cx - (z.x1 - z.x0) * 0.38 - 40, cur.xe + (m ? 30 : 76)), nodeY = cy;
      let sum = 0; const raw = base.map((b, i) => { const v = b * (1 + 0.08 * Math.sin(t * 0.8 + i * 1.9)); sum += v; return v; });
      const x0 = cur.xe + (m ? 6 : 10);
      if (!m) {
        raw.forEach((v, i) => {
          const lead = i === 0;
          label(ctx, 'Proposal ' + OUTC[i], x0, cur.ends[i], { size: 12, weight: 500, color: lead ? '#fff' : '#B8A4FF', alpha: price });
          tab(ctx, ((v / sum) * 100).toFixed(0) + '%', x0 + 92, cur.ends[i], 12, 700, lead ? '#fff' : '#e6dcff', price);
        });
      }
      if (conv > 0.01) {
        const col = { core: '#fff', mid: '#cdbdff', glow: '#7b3ff2', ga: 1 };
        cur.ends.forEach((ey, i) => {
          const sx = x0 + (m ? 0 : 108), w = raw[i] / sum;
          tube(ctx, col, 1.2 + w * 3, conv * (0.5 + w), (c) => {
            const ex = lerp(sx, nodeX, conv), eyy = lerp(ey, nodeY, conv), mx = lerp(sx, nodeX, 0.5 * conv);
            c.beginPath(); c.moveTo(sx, ey); c.bezierCurveTo(mx, ey, mx, eyy, ex, eyy);
          });
        });
        glowDot(ctx, { core: '#fff', glow: '#7b3ff2', ga: 1 }, nodeX, nodeY, 4 + (reduced ? 0 : 0.8 * Math.sin(t * 3)), conv);
      }
      // consumers: pills fed from the single signal point
      const ty = m ? 0.745 * H : 0.64 * H;
      const pw = m ? 104 : 150, ph = m ? 40 : 46;
      const xs = m ? [0.2 * W, 0.5 * W, 0.8 * W] : [cx - 172, cx, cx + 172];
      const y1 = nodeY + (m ? 0.62 : 0.72) * (z.y1 - nodeY) + (m ? 16 : 18);
      const paths = xs.map((xx) => pathPts(nodeX, nodeY + 6, Math.min(y1, ty - ph / 2 - 30), xx, ty - ph / 2 - 1));
      if (sig > 0.01) paths.forEach((pts, i) => {
        const L = plen(pts), col = { core: '#fff', mid: '#B8A4FF', glow: '#7b3ff2', ga: 0.8 };
        tube(ctx, { core: '#B8A4FF', mid: '#7b3ff2', glow: '#7b3ff2', ga: 0.5 }, 1.1, 0.6 * sig, (c) => poly(c, segAt(pts, 0, L * sig)));
        if (use > 0.3 && !reduced) {
          for (let q = 0; q < 2; q++) {
            const u = (t * 0.32 + i * 0.27 + q * 0.5) % 1, d1 = u * L, d0 = Math.max(0, d1 - 46);
            const seg = segAt(pts, d0, d1); if (seg.length < 2) continue;
            tube(ctx, col, 1.8, use, (c) => poly(c, seg));
            const hd = seg[seg.length - 1]; glowDot(ctx, col, hd[0], hd[1], 2.2, use);
            if (u > 0.965) hit[i] = 1;
          }
        }
      });
      if (use > 0.01) xs.forEach((xx, i) => {
        const c = consumers[i], px = xx - pw / 2, py = ty - ph / 2;
        hit[i] = Math.max(0, hit[i] - dt * 2.2); const h = hit[i];
        ctx.save(); ctx.globalAlpha = use * fx.a;
        ctx.fillStyle = '#121218'; rr(ctx, px, py, pw, ph, ph / 2); ctx.fill();
        ctx.fillStyle = `rgba(123,63,242,${0.06 + 0.16 * h})`; rr(ctx, px, py, pw, ph, ph / 2); ctx.fill();
        ctx.strokeStyle = `rgba(${h > 0.05 ? '150,100,255' : '123,63,242'},${0.5 + 0.45 * h})`; ctx.lineWidth = 1; rr(ctx, px + 0.5, py + 0.5, pw - 1, ph - 1, ph / 2); ctx.stroke();
        if (h > 0.05) { ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = use * fx.a * h * 0.5; ctx.strokeStyle = '#7b3ff2'; ctx.lineWidth = 4; rr(ctx, px, py, pw, ph, ph / 2); ctx.stroke(); }
        ctx.restore();
        glyph(ctx, c.kind, px + (m ? 19 : 26), ty, t, use);
        label(ctx, c.l1, px + (m ? 36 : 48), ty - (m ? 6.5 : 8), { size: m ? 11 : 13.5, weight: 700, alpha: use });
        label(ctx, c.l2, px + (m ? 36 : 48), ty + (m ? 7 : 9), { size: m ? 10 : 12, weight: 500, alpha: use, color: '#B8A4FF' });
      });
      if (stat > 0.01) {
        const bx0 = m ? 0.06 * W : 0.6 * W, bx1 = m ? 0.94 * W : 0.96 * W, bw = bx1 - bx0;
        const by0 = m ? 0.9 * H : 0.8 * H, bh = m ? 6 : 6;
        const fill = ss(clamp((stat - 0.05) / 0.95)), a2 = stat * sstep(0.6, 1, fill);
        const num = Math.round(331 * fill);
        const tw = tab(ctx, '$' + num + 'B', bx0, by0 - (m ? 26 : 34), m ? 20 : 26, 700, '#fff', stat, 'left');
        label(ctx, 'traded', bx0 + tw + 10, by0 - (m ? 25 : 32), { size: m ? 11 : 13.5, weight: 500, alpha: stat, color: '#B8A4FF' });
        ctx.save(); ctx.globalAlpha = stat * fx.a; ctx.fillStyle = 'rgba(255,255,255,.08)'; rr(ctx, bx0, by0, bw, bh, bh / 2); ctx.fill();
        const wA = bw * 0.77 * fill, wB = Math.max(bh, bw * 0.02) * fill;
        ctx.fillStyle = '#7B3FF2'; rr(ctx, bx0, by0, Math.max(bh, wA), bh, bh / 2); if (wA > 1) ctx.fill();
        ctx.fillStyle = '#B8A4FF'; rr(ctx, bx1 - Math.max(bh, bw * 0.02), by0, Math.max(bh, bw * 0.02), bh, bh / 2); if (fill > 0.8) { ctx.globalAlpha = stat * fx.a * sstep(0.8, 1, fill); ctx.fill(); }
        ctx.restore();
        glowDot(ctx, { core: '#e6dcff', glow: '#b99bff', ga: 1 }, bx1 - Math.max(bh, bw * 0.02) / 2, by0 + bh / 2, (m ? 2.2 : 2.6) * (0.85 + 0.15 * Math.sin(t * 3)), stat * sstep(0.85, 1, fill));
        const ly = by0 + bh + (m ? 20 : 24), dr = 3.2;
        ctx.save(); ctx.globalAlpha = a2 * fx.a; ctx.fillStyle = '#7B3FF2'; ctx.beginPath(); ctx.arc(bx0 + dr, ly, dr, 0, TAU); ctx.fill();
        ctx.fillStyle = '#B8A4FF'; ctx.beginPath(); ctx.arc(bx1 - dr - ((ctx.font = `600 ${m ? 11.5 : 13.5}px "Inter Tight", sans-serif`, ctx.measureText('Under 2% information').width) + 10), ly, dr, 0, TAU); ctx.fill(); ctx.restore();
        tab(ctx, '77%', bx0 + 14, ly, m ? 11.5 : 13.5, 700, '#fff', a2, 'left');
        label(ctx, 'sports and parlays', bx0 + 14 + (m ? 29 : 34), ly, { size: m ? 11.5 : 13.5, weight: 500, alpha: a2, color: '#c9b8ff' });
        label(ctx, 'Under 2% information', bx1, ly, { size: m ? 11.5 : 13.5, weight: 600, alpha: a2, align: 'right' });
        label(ctx, 'Source: The Block', bx0, ly + (m ? 19 : 23), { size: m ? 10.5 : 11.5, weight: 500, alpha: a2 * 0.8, color: 'rgba(255,255,255,.45)' });
      }
    },
  };
}
