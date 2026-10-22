import { SEER_MARKETS } from './markets.js';
import { clamp, lerp, ss, sstep, rng, isMob, reduced } from './util.js';
import { LAYOUTS, N, finaleZone } from './layouts.js';

const TAU = Math.PI * 2;
const sm = (a, b, x) => ss((x - a) / (b - a));

// Minimal app-specific background visuals. Every draw(): ctx already clipped to its section.
// k = visibility 0..1 (section weight), tone: violet panel = light ink, black = lavender ink.
function ink(tone, a) { return tone ? `rgba(255,255,255,${a})` : `rgba(185,155,255,${a})`; }

function hair(ctx, pts, tone, a, w = 1.4) {
  ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])));
  ctx.strokeStyle = ink(tone, a); ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.stroke();
}
function dot(ctx, x, y, r, tone, a) {
  ctx.fillStyle = ink(tone, a * 0.25); ctx.beginPath(); ctx.arc(x, y, r * 2.6, 0, TAU); ctx.fill();
  ctx.fillStyle = tone ? `rgba(255,255,255,${a})` : `rgba(235,225,255,${a})`; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
}

export function makeBg() {
  const r = rng(99);
  const ticker = SEER_MARKETS.map(([cat, question, chance]) => `${question.toUpperCase()}  ${chance}%`);
  const tickStr = ticker.join('      ·      ') + '      ·      ';
  const bars = Array.from({ length: 64 }, () => ({ v: Math.pow(r(), 1.8), ph: r() * 7, f: 0.4 + r() * 0.9 }));
  const spikes = Array.from({ length: 3 }, (_, i) => ({ x: r() * 800, v: 190 + i * 60 }));
  let tw = 0;

  return {
    protocol(ctx, W, H, t, dt, p, en, k) {
      const m = isMob(W), top = (m ? 0.86 : 0.8) * H, bot = 0.97 * H, x0 = 0, x1 = (m ? 0.9 : 0.3) * W;
      const split = (x) => sm(0.0, x1 * 0.9, x);
      const d = (x) => split(x) * (0.2 + 0.05 * Math.sin(x / 190 + t * 0.45) + 0.03 * Math.sin(x / 71 - t * 0.9));
      const yp = (pr) => bot - (bot - top) * pr;
      const yes = [], no = [];
      const step = m ? 14 : 10;
      for (let x = x0; x <= x1; x += step) { const dd = d(x); yes.push([x, yp(0.5 + dd)]); no.push([x, yp(0.5 - dd)]); }
      ctx.save(); ctx.globalAlpha = k;
      hair(ctx, yes, 0, 0.34); ctx.setLineDash([3, 7]); hair(ctx, no, 0, 0.3); ctx.setLineDash([]);
      const u = (t * 0.08) % 1, xi = u * x1, dd = d(xi);
      dot(ctx, xi, yp(0.5 + dd), 3, 0, 0.9); dot(ctx, xi, yp(0.5 - dd), 3, 0, 0.7);
      ctx.restore();
    },

    seerapp(ctx, W, H, t, dt, p, en, k) {
      const m = isMob(W);
      if (W < 560) return;
      ctx.save(); ctx.globalAlpha = k;
      // ticker tape
      const ty = H - (m ? 30 : 40);
      ctx.fillStyle = 'rgba(20,10,110,.28)'; ctx.fillRect(12, ty - 18, W - 24, 36);
      ctx.font = '600 12px "Inter Tight", sans-serif'; ctx.textBaseline = 'middle'; ctx.letterSpacing = '1.3px';
      const tl = ctx.measureText(tickStr).width;
      tw = (tw + dt * 46) % tl;
      ctx.save(); ctx.beginPath(); ctx.rect(24, ty - 18, W - 48, 36); ctx.clip();
      ctx.fillStyle = 'rgba(255,255,255,.62)';
      for (let x = -tw; x < W; x += tl) ctx.fillText(tickStr, x + 24, ty + 1);
      ctx.restore(); ctx.letterSpacing = '0px';
      // index pulse lines
      const rows = m ? [] : [0.8, 0.865];
      rows.forEach((ry, i) => {
        const y0 = ry * H, pts = [], sp = spikes[i];
        sp.x = (sp.x + dt * sp.v) % (W * 1.3);
        const lenX = m ? W - 24 : W * 0.56;
        for (let x = 12; x <= lenX; x += 6) {
          const dx = x - (sp.x - W * 0.15); let y = y0 + Math.sin(x * 0.045 + t * 1.1 + i) * 1.6;
          if (dx > -60 && dx < 60) y -= Math.sin((dx / 60) * Math.PI) * 26 * Math.exp(-Math.abs(dx) / 36) * (dx < 0 ? 1 : -0.6);
          pts.push([x, y]);
        }
        hair(ctx, pts, 1, 0.34 - i * 0.08, 1.3);
      });
      ctx.restore();
    },

    futarchy(ctx, W, H, t, dt, p, en, k) {
      const m = isMob(W), oy = 0.62 * H, ox = 0;
      const div = (x) => sm(0.1 * W, 0.8 * W, x);
      const wig = (x, s) => Math.sin(x / 120 + t * 0.7 + s) * 6 + Math.sin(x / 47 - t * 1.1 + s) * 2.4;
      const passY = (x) => oy - div(x) * (oy - 0.14 * H) + wig(x, 0) * div(x);
      const failY = (x) => oy + div(x) * (0.93 * H - oy) + wig(x, 2) * div(x);
      const pa = [], fa = [];
      for (let x = ox; x <= W; x += 10) { pa.push([x, passY(x)]); fa.push([x, failY(x)]); }
      ctx.save(); ctx.globalAlpha = k;
      hair(ctx, pa, 1, 0.34, 1.6);
      ctx.setLineDash([4, 8]); hair(ctx, fa, 1, 0.3, 1.6); ctx.setLineDash([]);
      const u = (t * 0.07) % 1, xi = u * W;
      dot(ctx, xi, passY(xi), 3.2, 1, 0.9); dot(ctx, xi, failY(xi), 3.2, 1, 0.75);
      ctx.restore();
    },

    opportunity(ctx, W, H, t, dt, p, en, k) {
      const m = isMob(W), n = m ? 14 : 26;
      const xT = (m ? 0.5 : 0.55) * W;
      ctx.save(); ctx.globalAlpha = k;
      for (let i = 0; i < n; i++) {
        const f = i / (n - 1);
        const yS = lerp(0.6, 0.97, f) * H, yT = lerp(0.68, 0.84, Math.floor(f * 6) / 5) * H;
        const pts = [];
        for (let x = 0; x <= xT; x += 12) { const u = ss(x / xT); pts.push([x, lerp(yS, yT, u)]); }
        hair(ctx, pts, 0, 0.16 + 0.08 * (1 - Math.abs(f - 0.5) * 2), 1.2);
        const ph = (t * 0.12 + i * 0.173) % 1, xx = ph * xT, u = ss(xx / xT);
        dot(ctx, xx, lerp(yS, yT, u), 1.9, 0, 0.55 + 0.35 * u);
      }
      for (let j = 0; j < 6; j++) dot(ctx, xT, lerp(0.68, 0.84, j / 5) * H, 3, 0, 0.85);
      ctx.restore();
    },

    close(ctx, W, H, t, dt, p, en, k) {
      const z = finaleZone(W, H), cx = (z.x0 + z.x1) / 2, cy = (z.y0 + z.y1) / 2, R = Math.hypot(W, H) * 0.55;
      ctx.save(); ctx.globalAlpha = k; ctx.lineWidth = 1.4;
      for (let i = 0; i < 7; i++) {
        const u = ((t * 0.045 + i / 7) % 1), rr = 60 + u * R;
        ctx.strokeStyle = `rgba(150,110,255,${0.26 * Math.sin(u * Math.PI)})`;
        ctx.beginPath(); ctx.arc(cx, cy, rr, 0, TAU); ctx.stroke();
      }
      ctx.restore();
    },
  };
}
