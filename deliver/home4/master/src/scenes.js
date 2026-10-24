import * as ch from './chapters.js';
import { arrive } from './chapters.js';
import { clamp, lerp, ss, sstep, rng, isMob, reduced } from './util.js';
import { LAYOUTS, N, zone, gridGeom, deepZone, finaleZone } from './layouts.js';
import { spine } from './spine.js';
import { KMARK, KWORD } from './klerosdata.js';
import { ecoScene } from './eco.js';
import { PAL, pal, tube, glowDot, label, starShape, fx } from './neon.js';

const TAU = Math.PI * 2;
const spine_arrive = {};
const dark = PAL.dark, vio = PAL.violet;
const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); };

/* ---------------------------------------------------------------- protocol */
function protocolScene() {
  const names = ['consensus-specs','ethers.js','lighthouse','nimbus-eth2','gnark-crypto','foundry','blst','mev-boost','teku','go-ethereum'];
  const base = [31, 24, 14, 9, 7, 5, 4, 3, 2, 1];
  const items = names.map((t) => ({ text: t, val: '', a: 1 }));
  spine.sets.protocol = { items, alpha: 0 };
  return {
    name: 'protocol', tone: 0,
    draw(ctx, W, H, t, dt, p) {
      const m = isMob(W);
      const L = LAYOUTS.protocol(W, H);
      const rx = L.fx0, ry = L.y0;
      const fan = sstep(0.47, 0.62, p), reach = sstep(0.43, 0.56, p);
      const verdict = sstep(0.7, 0.8, p);
      spine.ext.protocol = {
        fanOpen: fan, reach, focus: 0, focusA: sstep(0.76, 0.9, p),
        trunkLabel: 'Which Optimism repository is the most original?', trunkLabelA: sstep(0.0, 0.1, p),
      };
      spine.sets.protocol.alpha = sstep(0.58, 0.68, p);
      // prices
      let sum = 0;
      const raw = base.map((b, i) => { const v = b * (1 + 0.1 * Math.sin(t * 0.9 + i * 1.7) + 0.06 * Math.sin(t * 2.1 + i * 3.1)); sum += v; return v; });
      const r = sstep(0.84, 0.95, p);
      raw.forEach((v, i) => {
        let pc = (v / sum) * 100;
        pc = i === 0 ? lerp(pc, 100, r) : lerp(pc, 0, r);
        items[i].val = (pc < 0.05 ? '0' : pc.toFixed(pc < 10 && pc >= 1 ? 1 : 0)) + '%';
      });

      // price bars
      if (!m && spine.cur) {
        const kk = spine.names.indexOf('protocol'), wb = Math.pow(spine.weights[kk] || 0, 2.4) * spine.sets.protocol.alpha;
        if (wb > 0.02) {
          const cur = spine.cur, xr = W - Math.max(24, W * 0.04);
          const gx0 = cur.xe + 190, gx1 = xr - 74;
          if (gx1 - gx0 > 70) items.forEach((it, i) => {
            const y = cur.ends[i]; const pc = parseFloat(it.val) || 0;
            const dim = spine.cur.focus >= 0 ? (i === 0 ? 1 : 1 - 0.7 * clamp(spine.cur.focusA)) : 1;
            ctx.save(); ctx.globalAlpha = wb * dim; ctx.fillStyle = 'rgba(255,255,255,.08)'; rr(ctx, gx0, y - 2, gx1 - gx0, 4, 2); ctx.fill(); ctx.restore();
            const len = Math.max(3, ((gx1 - gx0) * Math.min(pc, 100)) / 100 * (pc > 45 ? 1 : 2.2));
            tube(ctx, dark, 1.6, wb * dim, (c) => { c.beginPath(); c.moveTo(gx0 + 1, y); c.lineTo(Math.min(gx1, gx0 + len), y); });
          });
        }
      }
      const R = m ? 32 : 84;
      const a = sstep(0.07, 0.32, p), merge = sstep(0.43, 0.54, p), wrap = sstep(0.32, 0.41, p);
      const cp = dark;
      // coin
      const coinA = (1 - ss(a * 2.4)) * (1 - merge);
      if (coinA > 0.01) {
        const pulse = 1 + 0.025 * Math.sin(t * 2.2);
        tube(ctx, cp, 2.4, coinA, (c) => { c.beginPath(); c.arc(rx, ry, R * pulse, 0, TAU); });
        tube(ctx, cp, 1.2, coinA * 0.8, (c) => { c.beginPath(); c.arc(rx, ry, R * 0.74 * pulse, 0, TAU); });
        starShape(ctx, rx, ry, R * 0.78, '#fff', coinA);
        { const oa = t * 1.4; glowDot(ctx, cp, rx + Math.cos(oa) * R * 1.0, ry + Math.sin(oa) * R * 1.0, m ? 2.6 : 3.8, coinA); }
        label(ctx, '1 token of collateral', rx, ry + R + 30, { size: m ? 11 : 13, align: 'center', alpha: (1 - ss(a * 5)) * (1 - merge) * 0.9, color: '#d8ccff' });
      }
      // YES / NO tokens
      const tokA = ss(a * 2.2) * (1 - merge);
      if (tokA > 0.01) {
        const e = ss(a);
        const dx = m ? 84 : 330, dyY = m ? 84 : 200, dyN = m ? 62 : 150;
        const sc = 1 - merge * 0.7;
        [['YES', -dyY, { core: '#ffffff', mid: '#9d70ff', glow: '#7b3ff2', ga: 1 }, 0], ['NO', dyN, { core: '#f3efff', mid: '#d6c8ff', glow: '#b99bff', ga: 0.8 }, 1]].forEach(([txt, dy, col, k]) => {
          const px = lerp(rx + dx * e, rx, ss(merge)), py = lerp(ry + dy * e + Math.sin(t * 1.4 + k * 2) * 4, ry, ss(merge));
          const Rr = R * 0.82 * sc;
          tube(ctx, col, 2.4, tokA, (c) => { c.beginPath(); c.arc(px, py, Rr, 0, TAU); });
          label(ctx, txt, px, py + 1, { size: Rr * 0.5, weight: 700, align: 'center', alpha: tokA, spacing: 1.5 });
          if (wrap > 0.01) {
            ctx.save();
            ctx.setLineDash([5, 9]); ctx.lineDashOffset = -t * 22 * (k ? -1 : 1);
            ctx.strokeStyle = col.mid; ctx.globalAlpha = tokA * wrap * 0.9 * fx.a; ctx.lineWidth = 1.6;
            ctx.beginPath(); ctx.arc(px, py, Rr * 1.32, 0, TAU); ctx.stroke();
            ctx.restore();
          }
          if (wrap > 0.01) { const oa = t * 1.6 * (k ? -1 : 1) + k * 2; glowDot(ctx, col, px + Math.cos(oa) * Rr * 1.32, py + Math.sin(oa) * Rr * 1.32, m ? 2.6 : 3.6, tokA * wrap); }
          const lbl = wrap > 0.5 ? 'ERC20' : 'ERC1155';
          label(ctx, lbl, px, py + Rr * 1.32 + 22, { size: m ? 10.5 : 12.5, align: 'center', alpha: tokA * (1 - merge) * (1 - merge) * 0.9 * sstep(0.55, 0.85, a), color: '#d8ccff', spacing: 1, mono: true });
        });
        // seam burst at split start
        if (a < 0.5) {
          ctx.save(); ctx.globalAlpha = (1 - a * 2) * 0.8;
          tube(ctx, cp, 1.4, 1 - a * 2, (c) => { c.beginPath(); c.moveTo(rx, ry - R * 1.1); c.lineTo(rx, ry + R * 1.1); });
          ctx.restore();
        }
      }
      // kleros verdict
      if (verdict > 0.01) {
        const e = ss(verdict), S = (m ? 0.62 : 1) * lerp(0.7, 1, e);
        const K = ((m ? 64 : 112) / 107) * lerp(0.8, 1, e), cx0 = 81.5, cy0 = 70;
        const polyPath = (c, list, k, ox, oy) => { c.beginPath(); list.forEach((pl) => { for (let i = 0; i < pl.length; i += 2) { const x = (pl[i] - ox) * k, y = (pl[i + 1] - oy) * k; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.closePath(); }); };
        const outer = (c) => polyPath(c, [KMARK[0]], K, cx0, cy0);
        // opaque plate above the spine: the line passes behind the mark
        ctx.save(); ctx.translate(rx, ry); ctx.globalAlpha = e * fx.a; outer(ctx); ctx.fillStyle = '#07070a'; ctx.lineWidth = 10; ctx.strokeStyle = '#07070a'; ctx.lineJoin = 'round'; ctx.fill(); ctx.stroke(); ctx.restore();
        ctx.save(); ctx.translate(rx, ry);
        tube(ctx, dark, 1.3, e, (c) => polyPath(c, KMARK, K, cx0, cy0));
        ctx.globalAlpha = e * fx.a * 0.96; polyPath(ctx, KMARK, K, cx0, cy0); ctx.fillStyle = '#ffffff'; ctx.fill('evenodd');
        ctx.restore();
        // jurors orbit and vote
        const orb = m ? 64 : 104;
        for (let k = 0; k < 5; k++) {
          const ang = t * 1.1 + (k * TAU) / 5;
          const jx = rx + Math.cos(ang) * orb * e, jy = ry + Math.sin(ang) * orb * 0.78 * e;
          const voted = p > 0.77 + 0.026 * k;
          ctx.save(); ctx.globalAlpha = e;
          if (voted) glowDot(ctx, dark, jx, jy, m ? 4.5 : 6.5, e);
          else tube(ctx, dark, 1.2, e * 0.8, (c) => { c.beginPath(); c.arc(jx, jy, m ? 4.5 : 6.5, 0, TAU); });
          ctx.restore();
        }
        const ck = sstep(0.86, 0.98, p);
        if (ck > 0.01) { ctx.save(); ctx.translate(rx, ry); ctx.scale(1.15 + ck * 0.9, 1.15 + ck * 0.9); tube(ctx, dark, 1.4 / (1.15 + ck * 0.9), (1 - ck) * 0.9, outer); ctx.restore(); }
        { const k2 = (m ? 78 : 130) / 236; ctx.save(); ctx.translate(rx, ry + (m ? 92 : 142)); ctx.globalAlpha = verdict * fx.a * 0.95; polyPath(ctx, KWORD, k2, 276, 70); ctx.fillStyle = '#fff'; ctx.fill('evenodd'); ctx.restore(); }
      }
    },
  };
}

/* ---------------------------------------------------------------- seer app */
function seerScene() {
  const rowsD = SEER_MARKETS.map(([cat, q, pct, lead], i) => ({ cat, q, pct, lead, ph: i * 1.7 }));
  const trunc = (ctx, s, maxW) => { if (ctx.measureText(s).width <= maxW) return s; while (s.length > 3 && ctx.measureText(s + '…').width > maxW) s = s.slice(0, -1); return s + '…'; };
  return {
    name: 'seerapp', tone: 1,
    draw(ctx, W, H, t) {
      const m = isMob(W), cur = spine.cur;
      const k = spine.names.indexOf('seerapp');
      const w = Math.pow(spine.weights[k] || 0, 2.4);
      spine.ext.seerapp = { fanOpen: 1, reach: 1 };
      if (w < 0.02 || !cur) return;
      const xr = W - (m ? 12 : Math.max(24, W * 0.04));
      const x0 = cur.xe + (m ? 12 : 20);
      const fs = m ? 11.5 : 15;
      ctx.save(); ctx.textBaseline = 'middle';
      rowsD.forEach((it, i) => {
        const y = cur.ends[i];
        const pc = clamp(it.pct + (reduced ? 0 : Math.sin(t * 0.7 + it.ph) * 1.4), 1, 99);
        const val = (it.lead ? it.lead + ' ' : '') + pc.toFixed(0) + '%';
        ctx.globalAlpha = w;
        ctx.font = `700 ${fs}px "Inter Tight", sans-serif`; ctx.textAlign = 'right'; ctx.fillStyle = '#fff';
        ctx.fillText(val, xr, y);
        const vw = ctx.measureText(val).width;
        const catS = it.cat.toUpperCase();
        if (m) {
          ctx.font = '600 9px "Inter Tight", sans-serif'; ctx.textAlign = 'left'; ctx.fillStyle = '#c9b8ff';
          if ('letterSpacing' in ctx) ctx.letterSpacing = '1px';
          ctx.fillText(catS, x0, y - 8);
          if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
          ctx.font = `500 ${fs}px "Inter Tight", sans-serif`; ctx.fillStyle = '#fff';
          ctx.fillText(trunc(ctx, it.q, xr - x0 - vw - 10), x0, y + 6);
        } else {
          ctx.font = '600 10.5px "Inter Tight", sans-serif';
          if ('letterSpacing' in ctx) ctx.letterSpacing = '1.2px';
          const cw = ctx.measureText(catS).width + 20;
          if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
          ctx.fillStyle = 'rgba(123,63,242,.28)'; rr(ctx, x0, y - 11, cw, 22, 11); ctx.fill();
          ctx.strokeStyle = 'rgba(185,155,255,.55)'; ctx.lineWidth = 1; rr(ctx, x0 + .5, y - 10.5, cw - 1, 21, 10.5); ctx.stroke();
          if ('letterSpacing' in ctx) ctx.letterSpacing = '1.2px';
          ctx.textAlign = 'left'; ctx.fillStyle = '#e6dcff'; ctx.fillText(catS, x0 + 10, y + 0.5);
          if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
          const gw = 120, gx1 = xr - Math.max(vw, 92) - 18, gx0 = gx1 - gw;
          ctx.font = `500 ${fs}px "Inter Tight", sans-serif`; ctx.fillStyle = '#fff';
          ctx.fillText(trunc(ctx, it.q, gx0 - (x0 + cw + 14) - 14), x0 + cw + 14, y);
          ctx.globalAlpha = w; ctx.fillStyle = 'rgba(255,255,255,.12)'; rr(ctx, gx0, y - 2, gw, 4, 2); ctx.fill();
          const len = Math.max(3, (gw * pc) / 100);
          tube(ctx, vio, 1.6, w, (c) => { c.beginPath(); c.moveTo(gx0 + 1, y); c.lineTo(gx0 + len, y); });
        }
      });
      const hy = cur.ends[0] - (m ? 26 : 34);
      label(ctx, 'MARKET', x0, hy, { size: m ? 10 : 11.5, alpha: w * 0.85, spacing: 1.6, color: '#ece6ff' });
      label(ctx, 'CHANCE', xr, hy, { size: m ? 10 : 11.5, alpha: w * 0.85, spacing: 1.6, color: '#ece6ff', align: 'right' });
      label(ctx, 'Illustrative markets', x0, cur.ends[N - 1] + (m ? 24 : 34), { size: m ? 10 : 12, alpha: w * 0.75, color: '#c9b8ff', weight: 500 });
      ctx.restore();
    },
  };
}

/* ---------------------------------------------------------------- deep */
function deepScene() {
  let mounted = false, host = null, key = '';
  const place = (W, H) => {
    const kk = W + 'x' + H; if (kk === key || !host) return; key = kk;
    const z = deepZone(W, H), m = isMob(W);
    host.style.cssText = `position:absolute;pointer-events:none;left:${z.x0}px;top:${z.y0}px;width:${z.x1 - z.x0}px;height:${z.y1 - z.y0}px`;
    const stage = document.querySelector('#deep .stage'), copy = document.querySelector('#deep .copy');
    stage.style.cssText = 'display:block;padding:0;overflow:hidden';
    copy.style.cssText = `position:absolute;width:${m ? 'calc(100vw - 2 * var(--gut))' : 'min(600px,42vw)'};flex-shrink:0`;
  };
  spine_arrive.deep = (i) => { const k = spine.names.indexOf('deep'); if (spine.weights[k] > 0.5 && window.SeerGlass) window.SeerGlass.deep.pulse(i); };
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
      const e = { fanOpen: 1, reach: 1, trunkLabel: 'Which Optimism repository is the most original?', trunkLabelA: 1 };
      const a = window.SeerGlass && window.SeerGlass.deep.anchors, z = deepZone(W, H);
      if (a && a.length === N) {
        e.endsOverride = a.map((q) => z.y0 + q.y); e.endsX = a.map((q) => z.x0 + q.x); e.endsMix = 1;
      }
      spine.ext.deep = e;
    },
  };
}

/* ---------------------------------------------------------------- futarchy */
function futarchyScene() {
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
      const W1 = '#fff', SOFT = '#e6dcff';
      const pill = (y, txt, price, col) => {
        ctx.save(); ctx.fillStyle = '#0B0B0E'; rr(ctx, px, y - ph / 2, pw, ph, 16); ctx.fill(); ctx.restore();
        tube(ctx, col, 1.8, 1, (c) => rr(c, px, y - ph / 2, pw, ph, 16));
        label(ctx, txt, px + 14, y - ph / 2 + (m ? 14 : 20), { size: m ? 10 : 11.5, spacing: 1.4, color: SOFT });
        label(ctx, price, px + 14, y + (m ? 9 : 12), { size: m ? 22 : 38, weight: 600, color: W1 });
      };
      pill(yP, 'IF PASS', '$' + pp.toFixed(2), { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 });
      pill(yF, 'IF FAIL', '$' + pf.toFixed(2), { core: '#cfc3ff', mid: '#a493ff', glow: '#b8abff', ga: 0.5 });
      const bx = px + pw + (m ? 8 : 18), midY = (yP + yF) / 2;
      tube(ctx, vio, 1.4, 0.9, (c) => { c.beginPath(); c.moveTo(bx - 8, yP); c.lineTo(bx, yP); c.lineTo(bx, yF); c.lineTo(bx - 8, yF); });
      // the two prices move apart: arrows between the cards
      const gap = pp - pf;
      if (!m) {
        label(ctx, 'Market signal', bx + 14, midY - 14, { size: 12.5, color: SOFT });
        label(ctx, '+' + gap.toFixed(2), bx + 14, midY + 10, { size: 24, weight: 600 });
        const dx = z.x1 - 58, dy = midY, R = 46;
        const lx0 = bx + 130, lx1 = dx - R - 12;
        ctx.save(); ctx.setLineDash([2, 9]); ctx.lineDashOffset = -t * 30; ctx.lineCap = 'round';
        ctx.strokeStyle = SOFT; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(lx0, dy); ctx.lineTo(lx1, dy); ctx.stroke(); ctx.restore();
        ctx.save(); ctx.strokeStyle = SOFT; ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(lx1 - 7, dy - 6); ctx.lineTo(lx1, dy); ctx.lineTo(lx1 - 7, dy + 6); ctx.stroke(); ctx.restore();
        ctx.save(); ctx.fillStyle = '#0B0B0E'; ctx.beginPath(); ctx.arc(dx, dy, R, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
        tube(ctx, { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 }, 2, 1, (c) => { c.beginPath(); c.arc(dx, dy, R, -Math.PI / 2, -Math.PI / 2 + TAU * (0.5 + gap * 0.5)); });
        label(ctx, 'DAO', dx, dy, { size: 16, weight: 700, align: 'center', spacing: 1.4 });
        label(ctx, 'The DAO votes.', dx, dy + R + 26, { size: 15, weight: 700, align: 'center' });
        label(ctx, 'The market informs.', dx, dy + R + 46, { size: 15, weight: 500, align: 'center', color: SOFT });
      } else {
        label(ctx, 'Signal +' + gap.toFixed(2), px, midY - 10, { size: 13, weight: 700 });
        label(ctx, 'The DAO votes.', px, midY + 10, { size: 11.5, weight: 700 });
        label(ctx, 'The market informs.', px, midY + 25, { size: 11.5, weight: 500, color: SOFT });
        const dx = Math.min(W - 30, bx + 36), dy = midY - 6, R = 22;
        ctx.save(); ctx.fillStyle = '#0B0B0E'; ctx.beginPath(); ctx.arc(dx, dy, R, 0, TAU); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 1.6; ctx.stroke(); ctx.restore();
        tube(ctx, { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 }, 1.6, 1, (c) => { c.beginPath(); c.arc(dx, dy, R, -Math.PI / 2, -Math.PI / 2 + TAU * (0.5 + gap * 0.5)); });
        label(ctx, 'DAO', dx, dy, { size: 11, weight: 700, align: 'center', spacing: 1 });
      }
    },
  };
}

/* ---------------------------------------------------------------- opportunity */
function oppScene() {
  const r = rng(21);
  const chips = Array.from({ length: 48 }, (_, i) => ({ score: r(), i, ph: r() * 6, flash: 0 }));
  [...chips].sort((a, b) => b.score - a.score).forEach((c, k) => (c.rank = k));
  const winners = chips.filter((c) => c.rank < 6).sort((a, b) => a.rank - b.rank);
  let lastWave = -1, hot = new Set();
  spine_arrive.opportunity = (i) => {
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
      // waves of blinking tiles
      const wave = Math.floor(t / 1.1);
      if (wave !== lastWave) { lastWave = wave; hot = new Set(); const rr2 = rng(wave * 7 + 3); for (let q = 0; q < 9; q++) hot.add(Math.floor(rr2() * 48)); }
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
        const blink = clamp(Math.max(diag > 0.88 ? (diag - 0.88) / 0.12 : 0, hot.has(c.i) ? 0.5 + 0.5 * Math.sin(((t % 1.1) / 1.1) * Math.PI) : 0, c.flash));
        const settled = win && nar > 0.4;
        ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.scale(sc * (1 + blink * 0.06), sc * (1 + blink * 0.06));
        ctx.fillStyle = settled ? `rgba(255,255,255,${0.16 + 0.1 * nar})` : `rgba(123,63,242,${0.14 + 0.5 * blink})`;
        rr(ctx, -w / 2, -h / 2, w, h, m ? 4 : 9); ctx.fill();
        ctx.strokeStyle = settled ? '#fff' : `rgba(${blink > 0.1 ? '230,220,255' : '185,155,255'},${0.45 + 0.5 * blink})`; ctx.lineWidth = settled ? 2 : 1.2;
        rr(ctx, -w / 2 + 0.5, -h / 2 + 0.5, w - 1, h - 1, m ? 4 : 9); ctx.stroke();
        if (blink > 0.1) { ctx.save(); ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = a * blink * 0.5; ctx.shadowColor = '#7b3ff2'; ctx.shadowBlur = 14; ctx.strokeStyle = '#b99bff'; rr(ctx, -w / 2, -h / 2, w, h, m ? 4 : 9); ctx.stroke(); ctx.restore(); }
        if (!win || mv < 0.7) {
          ctx.globalAlpha = a * (win ? 1 - sstep(0.5, 0.7, mv) : 1); ctx.fillStyle = '#fff';
          ctx.font = `600 ${m ? 10 : 13}px "Inter Tight", sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(String(c.i + 1).padStart(2, '0'), 0, 1);
        }
        if (win && mv > 0.7) {
          const ta = sstep(0.7, 0.95, mv);
          ctx.globalAlpha = a * ta; ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle';
          ctx.font = `600 ${m ? 11 : 14}px "Inter Tight", sans-serif`; ctx.textAlign = 'left';
          ctx.fillText(m ? `#${c.i + 1}` : `Submission ${c.i + 1}`, -w / 2 + (m ? 8 : 16), -(m ? 0 : 6));
          const pc = Math.round((0.55 + 0.4 * c.score) * 100 - c.rank * 3 + Math.sin(t + c.ph) * 1.5);
          ctx.textAlign = 'right'; ctx.fillText(pc + '%', w / 2 - (m ? 8 : 16), -(m ? 0 : 6));
          if (!m) { ctx.fillStyle = 'rgba(255,255,255,.2)'; rr(ctx, -w / 2 + 16, 10, w - 32, 4, 2); ctx.fill(); ctx.fillStyle = '#fff'; rr(ctx, -w / 2 + 16, 10, (w - 32) * clamp(pc / 100), 4, 2); ctx.fill(); }
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

/* ---------------------------------------------------------------- risk */
function riskScene() {
  const curves = [
    { name: 'Protocol A', lam: 0.22, dip: [2, 0], col: { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 } },
    { name: 'Protocol B', lam: 0.8, dip: [2, 0], col: { core: '#c9bbff', mid: '#9d8cff', glow: '#b8abff', ga: 0.4 } },
    { name: 'Protocol C', lam: 1.7, dip: [2, 0], col: { core: '#1c1260', mid: '#2e22c9', glow: '#1c1260', ga: 0 } },
  ];
  const S0 = (c, u) => Math.exp(-c.lam * u) * (1 - (u > c.dip[0] ? c.dip[1] * clamp((u - c.dip[0]) * 8) : 0));
  let TT = 0, II = 0;
  // idle motion: smooth breathing along each curve, growing toward the far end, plus slow drift of the end values
  const S = (c, u, i = 0) => { const k = reduced ? 0 : 1; const sw = Math.sin(TT * 0.9 + i * 2.1 - u * 7) * 0.026 + Math.sin(TT * 0.47 + i * 1.3 + u * 3.5) * 0.02; return clamp(S0(c, u) * (1 + k * sw * Math.pow(u, 0.85)) + k * 0.012 * Math.sin(TT * 0.6 + i * 2.7) * u, 0, 1); };
  return {
    name: 'risk', tone: 1,
    draw(ctx, W, H, t, dt, p, en) {
      const m = isMob(W), z = zone(W, H), L = LAYOUTS.risk(W, H);
      TT = t;
      const k = spine.names.indexOf('risk');
      const wgt = Math.pow(spine.weights[k] || 0, 2);
      spine.ext.risk = { fanOpen: 1, reach: 1 };
      if (wgt < 0.02) return;
      const cx0 = z.x0, cx1 = z.x1 - (m ? 0 : 200), top = L.top, bot = z.y1 - (m ? 34 : 54);
      const prog = Math.max(0.3 * ss(en), sstep(0.04, 0.72, p));
      const yS = (s) => top + ((bot - top) * (1 - s)) / 0.78;
      // grid
      ctx.save(); ctx.globalAlpha = wgt;
      [1, 0.75, 0.5, 0.25].forEach((s) => {
        ctx.strokeStyle = s === 1 ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.12)'; ctx.lineWidth = 1;
        ctx.setLineDash(s === 1 ? [] : [3, 6]);
        ctx.beginPath(); ctx.moveTo(cx0, Math.round(yS(s)) + 0.5); ctx.lineTo(cx1, Math.round(yS(s)) + 0.5); ctx.stroke();
        label(ctx, Math.round(s * 100) + '%', cx0 + 4, yS(s) - 9, { size: m ? 9.5 : 11, alpha: 0.55, color: '#ece6ff' });
      });
      ctx.setLineDash([]); ctx.strokeStyle = 'rgba(255,255,255,.28)';
      ctx.beginPath(); ctx.moveTo(cx0 + 0.5, top); ctx.lineTo(cx0 + 0.5, bot); ctx.stroke();
      ctx.restore();
      label(ctx, m ? 'SURVIVAL ODDS' : 'PROBABILITY THE PROTOCOL SURVIVES', cx0, top - (m ? 24 : 34), { size: m ? 10 : 11.5, spacing: 1.6, alpha: wgt, color: '#ece6ff' });
      label(ctx, 'Near term', cx0, bot + 24, { size: m ? 10.5 : 12.5, alpha: wgt, color: '#ece6ff' });
      label(ctx, 'Mid term', (cx0 + cx1) / 2, bot + 24, { size: m ? 10.5 : 12.5, alpha: wgt, color: '#ece6ff', align: 'center' });
      label(ctx, 'Long term', cx1, bot + 24, { size: m ? 10.5 : 12.5, alpha: wgt, color: '#ece6ff', align: 'right' });
      const wob = () => 0;
      // cursor
      const hx = cx0 + (cx1 - cx0) * prog;
      ctx.save(); ctx.globalAlpha = wgt * 0.3; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1; ctx.setLineDash([2, 5]);
      ctx.beginPath(); ctx.moveTo(hx + 0.5, top); ctx.lineTo(hx + 0.5, bot); ctx.stroke(); ctx.restore();
      let scanU = -1;
      if (!reduced && prog > 0.08) { const ph = (t * 0.2) % 1.25; scanU = Math.min(1, ph / 1) * prog; if (ph > 1) scanU = -1; }
      if (scanU >= 0) {
        const sxp = cx0 + (cx1 - cx0) * scanU, a2 = wgt * Math.sin(Math.PI * Math.min(1, scanU / prog));
        ctx.save(); ctx.globalCompositeOperation = 'source-over';
        const g = ctx.createLinearGradient(sxp - 46, 0, sxp, 0); g.addColorStop(0, 'rgba(123,63,242,0)'); g.addColorStop(1, `rgba(150,110,255,${0.2 * a2})`);
        ctx.fillStyle = g; ctx.fillRect(sxp - 46, top, 46, bot - top);
        ctx.globalAlpha = a2 * 0.8; ctx.fillStyle = '#d6caff'; ctx.fillRect(Math.round(sxp), top, 1, bot - top);
        ctx.restore();
      }
      curves.forEach((c, i) => {
        const steps = 90;
        const build = (cc) => {
          cc.beginPath();
          for (let s = 0; s <= steps; s++) {
            const u = (s / steps) * prog; const x = cx0 + (cx1 - cx0) * u, y = yS(S(c, u, i)) + (i - 1) * L.gap * Math.exp(-u * 9);
            s ? cc.lineTo(x, y) : cc.moveTo(x, y);
          }
        };
        tube(ctx, c.col, m ? 2.2 : 3, wgt, build);
        const y = yS(S(c, prog, i)) + (i - 1) * L.gap * Math.exp(-prog * 9);
        glowDot(ctx, c.col, hx, y, m ? 3.5 : 5 + (reduced ? 0 : 0.7 * Math.sin(t * 2.6 + i)), wgt);
        if (scanU >= 0) glowDot(ctx, c.col, cx0 + (cx1 - cx0) * scanU, yS(S(c, scanU, i)) + (i - 1) * L.gap * Math.exp(-scanU * 9), m ? 2.4 : 3.2, wgt * Math.sin(Math.PI * Math.min(1, scanU / prog)));
        const pc = S(c, prog, i) * 100;
        const txt = `${c.name}  ${pc.toFixed(0)}%`;
        const left = m;
        const lbx = left ? hx - 12 : hx + 18, lby = y + (left ? -16 : 0);
        if (left) {
          ctx.save(); ctx.font = '600 10.5px "Inter Tight", sans-serif'; const tw = ctx.measureText(txt).width + 12;
          ctx.globalAlpha = wgt * 0.85; ctx.fillStyle = '#4234e6'; rr(ctx, lbx - tw + 4, lby - 9, tw, 18, 6); ctx.fill(); ctx.restore();
        }
        label(ctx, txt, lbx, lby, { size: m ? 10.5 : 15, weight: 600, align: left ? 'right' : 'left', alpha: wgt, color: '#fff' });
      });
    },
  };
}

/* ---------------------------------------------------------------- close: Information Finance */
function closeScene() {
  const base = [34, 21, 13, 9, 7, 5, 4, 3, 2, 2];
  let mounted = false;
  const consumers = [
    { l1: 'A person', l2: 'reads it', kind: 0 },
    { l1: 'A DAO', l2: 'cites it', kind: 1 },
    { l1: 'An agent', l2: 'fetches it', kind: 2 },
  ];
  const glyph = (ctx, kind, x, y, r, a) => {
    ctx.save(); ctx.globalAlpha = a * fx.a; ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.8; ctx.fillStyle = '#0B0B0E';
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 1.6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (kind === 0) { ctx.beginPath(); ctx.arc(x, y - r * 0.2, r * 0.26, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.arc(x, y + r * 0.72, r * 0.46, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke(); }
    else if (kind === 1) { ctx.beginPath(); ctx.arc(x, y, r * 0.5, 0, TAU); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x - r * 0.22, y); ctx.lineTo(x - r * 0.04, y + r * 0.2); ctx.lineTo(x + r * 0.25, y - r * 0.18); ctx.stroke(); }
    else { ctx.beginPath(); ctx.moveTo(x, y - r * 0.55); ctx.lineTo(x + r * 0.45, y); ctx.lineTo(x, y + r * 0.55); ctx.lineTo(x - r * 0.45, y); ctx.closePath(); ctx.stroke(); }
    ctx.restore();
  };
  return {
    name: 'close', tone: 0,
    draw(ctx, W, H, t, dt, p, en) {
      const m = isMob(W), L = LAYOUTS.close(W, H), z = finaleZone(W, H);
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
      const nodeX = cx - (m ? 92 : 168), nodeY = cy;
      // outcome prices at the line ends
      let sum = 0; const raw = base.map((b, i) => { const v = b * (1 + 0.08 * Math.sin(t * 0.8 + i * 1.9)); sum += v; return v; });
      const x0 = cur.xe + (m ? 6 : 10);
      if (!m) {
        ctx.save(); ctx.textBaseline = 'middle';
        raw.forEach((v, i) => { label(ctx, ((v / sum) * 100).toFixed(0) + '%', x0, cur.ends[i], { size: 12, weight: 600, color: '#e6dcff', alpha: price }); });
        ctx.restore();
      }
      // converge into one signal
      if (conv > 0.01) {
        cur.ends.forEach((ey, i) => {
          const sx = x0 + (m ? 0 : 40), w = raw[i] / sum;
          const col = { core: '#fff', mid: '#cdbdff', glow: '#7b3ff2', ga: 1 };
          tube(ctx, col, 1.2 + w * 3, conv * (0.5 + w), (c) => {
            c.beginPath(); c.moveTo(sx, ey);
            const ex = lerp(sx, nodeX, conv);
            c.bezierCurveTo(lerp(sx, nodeX, 0.5 * conv) , ey, lerp(sx, nodeX, 0.5 * conv), lerp(ey, nodeY, conv), ex, lerp(ey, nodeY, conv));
          });
        });
        glowDot(ctx, { core: '#fff', glow: '#7b3ff2', ga: 1 }, nodeX, nodeY, 4, conv);
      }
      // signal leaves the logo and is used
      const bx = cx, by = z.y1 + (m ? 8 : 14);
      const ty = m ? 0.745 * H : 0.62 * H;
      const xs = m ? [0.22 * W, 0.5 * W, 0.78 * W] : [cx - 170, cx, cx + 170];
      if (sig > 0.01) {
        const col = { core: '#fff', mid: '#ece6ff', glow: '#d6caff', ga: 0.7 };
        xs.forEach((xx, i) => {
          tube(ctx, col, 1.6, sig, (c) => { c.beginPath(); c.moveTo(bx, by); c.bezierCurveTo(bx, lerp(by, ty, 0.55), xx, lerp(by, ty, 0.35), xx, lerp(by, ty - 26, sig)); });
          const u = (t * 0.45 + i * 0.33) % 1;
          if (use > 0.5) glowDot(ctx, col, lerp(bx, xx, ss(u)), lerp(by, ty - 26, ss(u)), 2.6, use);
        });
      }
      if (use > 0.01) xs.forEach((xx, i) => {
        const c = consumers[i], R = m ? 17 : 22;
        glyph(ctx, c.kind, xx, ty, R, use);
        label(ctx, c.l1, xx, ty + R + (m ? 14 : 18), { size: m ? 12 : 15, weight: 700, align: 'center', alpha: use });
        label(ctx, c.l2, xx, ty + R + (m ? 28 : 38), { size: m ? 11.5 : 14, weight: 500, align: 'center', alpha: use, color: '#e6dcff' });
      });
      // honest context: where the money goes
      if (stat > 0.01) {
        const bx0 = m ? 0.06 * W : 0.6 * W, bx1 = m ? 0.94 * W : 0.96 * W, bw = bx1 - bx0;
        const by0 = m ? 0.89 * H : 0.8 * H, bh = m ? 10 : 14;
        const fill = ss(stat);
        label(ctx, 'Where $331B traded', bx0, by0 - (m ? 22 : 30), { size: m ? 12 : 15, weight: 700, alpha: stat });
        ctx.save(); ctx.globalAlpha = stat * fx.a; ctx.fillStyle = 'rgba(255,255,255,.1)'; rr(ctx, bx0, by0, bw, bh, bh / 2); ctx.fill(); ctx.restore();
        const sports = 0.77 * fill, other = 0.212 * fill, info = Math.max(0.018 * fill, 0.012);
        ctx.save(); ctx.globalAlpha = stat * fx.a;
        ctx.beginPath(); ctx.roundRect(bx0, by0, bw, bh, bh / 2); ctx.clip();
        ctx.fillStyle = '#7A3CFF'; ctx.fillRect(bx0, by0, bw * sports, bh);
        ctx.fillStyle = 'rgba(185,155,255,.45)'; ctx.fillRect(bx0 + bw * sports + 1, by0, bw * other - 1, bh);
        ctx.restore();
        const ix = bx0 + bw * (sports + other) + 3;
        glowDot(ctx, { core: '#fff', glow: '#b99bff', ga: 1 }, bx1 - 3 - bw * 0.006, by0 + bh / 2, 0 + (m ? 4 : 5.5) * (0.8 + 0.2 * Math.sin(t * 3)), stat * sstep(0.85, 1, fill));
        ctx.save(); ctx.globalAlpha = stat * fx.a * sstep(0.85, 1, fill); ctx.fillStyle = '#fff'; ctx.fillRect(bx1 - bw * 0.018 - 1, by0 - 3, bw * 0.018 + 1, bh + 6); ctx.restore();
        const ly = by0 + bh + (m ? 20 : 26), a2 = stat * sstep(0.7, 1, fill);
        label(ctx, '77% sports and parlays', bx0, ly, { size: m ? 11.5 : 14, weight: 600, alpha: a2, color: '#d8c8ff' });
        label(ctx, 'Under 2% information', bx1, ly, { size: m ? 11.5 : 14, weight: 700, alpha: a2, align: 'right' });
        label(ctx, 'Source: The Block', bx0, ly + (m ? 18 : 24), { size: m ? 10.5 : 12, weight: 500, alpha: a2 * 0.85, color: '#c9b8ff' });
      }
    },
  };
}

export function makeScenes() {
  spine.onArrive = (i) => { for (const k in spine_arrive) spine_arrive[k](i); };
  Object.assign(spine_arrive, arrive);
  return { protocol: protocolScene(), seerapp: ch.seerScene(), deep: ch.deepScene(), futarchy: ch.futarchyScene(), opportunity: ch.oppScene(), risk: riskScene(), close: ch.closeScene(), ecosystem: ecoScene() };
}
