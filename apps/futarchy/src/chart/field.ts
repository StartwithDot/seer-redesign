import { chartColor } from './colors';
import { simplex2D } from '../math/noise';
import { mulberry32 } from '../math/rng';
import { expectation } from '../math/ou';
import { twapGap, verdict } from '../math/twap';
import type { Series } from '../math/series';
interface Particle { x: number; y: number; px: number; py: number; world: number; pool: number }
export interface FieldPointer { x: number; y: number; active: boolean }
/** Fixed-size pool; position Verlet: x' = x + damping*(x-xPrev) + acceleration*dt². */
export class Field {
  private random = mulberry32(8363);
  private noise = simplex2D(8363);
  private particles: Particle[] = Array.from({ length: 840 }, (_, i) => ({ x: this.random(), y: this.random() - .5, px: 0, py: 0, world: i < 420 ? 1 : -1, pool: 0 }));
  private width = 0;
  private height = 0;
  private accumulator = 0;
  private time = 0;
  private fresh = true;
  private model = "";
  clear() { this.fresh = true; this.accumulator = 0; for (const p of this.particles) { p.px = p.x; p.py = p.y; p.pool = 0; } }
  draw(ctx: CanvasRenderingContext2D, w: number, h: number, series: Series, now: number, dt: number, reduced: boolean, pointer: FieldPointer) {
    const color = chartColor;
    const bg = color('--card'), violet = color('--violet'), lavender = color('--text-2');
    const current = series.points.reduce((a, b) => Math.abs(b.t - now) < Math.abs(a.t - now) ? b : a);
    const gap = (u: number) => expectation(current.g, series.params.kappa, series.params.theta, Math.max(0, series.params.T - now) * u);
    const amplification = (g: number) => Math.max(-1, Math.min(1, g / .03)) * .35 * h;
    const center = (u: number, world: number) => h / 2 - world * amplification(gap(u)) / 2;
    const band = amplification(.01), gate = w * .9, left = w * .1;
    const zone = verdict(twapGap(series.points, now, series.params.T, series.params.kappa, series.params.theta));
    const poolY = zone === 'Include' ? h * .25 : zone === 'Exclude' ? h * .75 : h / 2;
    const model = `${series.params.theta}:${now.toFixed(4)}`;
    if (w !== this.width || h !== this.height || this.model !== model) {
      this.model = model;
      this.width = w; this.height = h; this.fresh = true;
      for (const p of this.particles) { const u = this.random(); p.x = left + u * (gate - left); p.y = center(u, p.world) + (this.random() - .5) * 32; p.px = p.x - 1; p.py = p.y; p.pool = 0; }
    }
    ctx.save(); ctx.beginPath(); ctx.rect(0, 6, w, Math.max(0, h - 12)); ctx.clip();
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = this.fresh || reduced ? 1 : .16;
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); ctx.globalAlpha = 1; this.fresh = false;
    if (!reduced) {
      this.accumulator += Math.min(dt, .05);
      while (this.accumulator >= 1 / 60) {
        this.accumulator -= 1 / 60; this.time += 1 / 60;
        for (const p of this.particles) {
          if (p.pool > 0) {
            p.pool -= 1 / 60; p.x += (gate + 8 - p.x) * .06; p.y += (poolY + this.noise(p.world * 4, p.px) * 16 - p.y) * .08;
            if (p.pool <= 0) { p.x = left; p.y = center(0, p.world) + (this.random() - .5) * 24; p.px = p.x - 1; p.py = p.y; }
            continue;
          }
          const u = Math.max(0, Math.min(1, (p.x - left) / (gate - left))), epsilon = .01;
          // Curl of scalar noise: (dN/dy, -dN/dx); turbulence contracts toward the gate.
          const nx = p.x / 90, ny = p.y / 90 + this.time * .12;
          const curlX = (this.noise(nx, ny + epsilon) - this.noise(nx, ny - epsilon)) / (2 * epsilon);
          const curlY = -(this.noise(nx + epsilon, ny) - this.noise(nx - epsilon, ny)) / (2 * epsilon);
          let ax = (1.1 + .8 * u + curlX * .08 - (p.x - p.px)) * .12;
          let ay = (center(u, p.world) - p.y) * .008 + curlY * .12 * (1 - u);
          const dx = p.x - pointer.x, dy = p.y - pointer.y, r = Math.hypot(dx, dy);
          if (pointer.active && r < 90) { const force = Math.min(2, 18 / Math.max(r, 1)) * (1 - r / 90); ax += dx / Math.max(1, r) * force; ay += dy / Math.max(1, r) * force; }
          const x = p.x, y = p.y; p.x += (p.x - p.px) * .94 + ax; p.y += (p.y - p.py) * .94 + ay; p.px = x; p.py = y;
          p.y = Math.max(32, Math.min(h - 32, p.y));
          if (p.x >= gate) { p.pool = 1 + this.random(); p.px = this.random() * 100; }
        }
      }
    }
    // Corridor uses the identical fixed gap amplification as the streams.
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const u = i / 60; const y = center(u, -1) - band; if (i === 0) ctx.moveTo(left, y); else ctx.lineTo(left + u * (gate - left), y); }
    for (let i = 60; i >= 0; i--) { const u = i / 60; ctx.lineTo(left + u * (gate - left), center(u, -1) + band); }
    ctx.closePath(); ctx.fillStyle = violet; ctx.globalAlpha = .035; ctx.fill(); ctx.globalAlpha = .22; ctx.setLineDash([4, 4]); ctx.lineWidth = 1; ctx.strokeStyle = violet; ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'lighter';
    for (const p of this.particles) {
      const u = Math.max(0, Math.min(1, (p.x - left) / (gate - left)));
      const y = reduced ? center(u, p.world) + this.noise(u * 12, p.px) * 12 * (1 - u) : p.y;
      ctx.fillStyle = p.world === 1 ? violet : lavender; ctx.globalAlpha = .6; ctx.beginPath(); ctx.arc(p.x, y, 1.2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    for (const [label, top, bottom] of [['Include', 32, h / 2 - band], ['Neutral', h / 2 - band, h / 2 + band], ['Exclude', h / 2 + band, h - 32]] as const) {
      ctx.globalAlpha = label === zone ? .35 + (reduced ? 0 : .1 * Math.sin(this.time * Math.PI * 2 / 2.4)) : .06;
      ctx.fillStyle = label === 'Exclude' ? color('--red') : violet; ctx.fillRect(gate - 3, top, 6, bottom - top);
      ctx.globalAlpha = 1; ctx.fillStyle = label === zone ? color('--text') : lavender; ctx.font = '12px Inter Tight, sans-serif'; ctx.textAlign = 'right'; ctx.fillText(label, gate - 12, label === 'Include' ? Math.min(h / 2 - 20, (top + bottom) / 2 + 4) : label === 'Exclude' ? Math.max(h / 2 + 28, (top + bottom) / 2 + 4) : h / 2 + 4);
    }
    for (const [index, dotColor] of [violet, lavender].entries()) { ctx.fillStyle = dotColor; ctx.beginPath(); ctx.arc(w - 24 - index * 12, 20, 2, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = lavender; ctx.textAlign = 'left'; ctx.fillText('Now', left, h - 16); ctx.globalAlpha = 1; ctx.restore();
  }
}
