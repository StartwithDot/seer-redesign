/** Signal animation owns fixed pools; frame updates never create particles or paths. */
export interface PulseGeometry {
  x: number; yes: number; no: number; gapY: number; edge: number; end: number;
  yesAngle: number; noAngle: number; yesMomentum: number; noMomentum: number; gap: number;
  violet: string; grey: string; dark: boolean;
}
export interface PulseDiagnostics { mode: 'moving' | 'waiting'; particles: number }
declare global { interface HTMLCanvasElement { __pulse?: PulseDiagnostics } }
const TAU = Math.PI * 2;
const COIL_DASH = [3, 5], SOLID: number[] = [];
export class SignalPulse {
  readonly diagnostics: PulseDiagnostics = { mode: 'waiting', particles: 0 };
  private pool = Array.from({ length: 80 }, () => ({ x: 0, y: 0, vx: 0, vy: 0, age: 1, size: 2, side: 0, phase: 0 }));
  private rings = new Float64Array(8).fill(1);
  private cursor = 0; private ringCursor = 0; private seed = 8363;
  private yes = 0; private no = 0; private emission = 0; private clock = 0; private sweep = 1;
  private lastGap = 0; private gapSpeed = 0; private shimmer = 0;
  clear() { for (const p of this.pool) p.age = 1; this.rings.fill(1); this.emission = 0; this.diagnostics.particles = 0; }
  private random() { this.seed = (Math.imul(this.seed, 1664525) + 1013904223) | 0; return (this.seed >>> 0) / 4294967296; }
  update(g: PulseGeometry, initial: boolean) {
    this.yes = initial ? g.yesMomentum : this.yes + (g.yesMomentum - this.yes) * (2 / 13);
    this.no = initial ? g.noMomentum : this.no + (g.noMomentum - this.no) * (2 / 13);
    if (!initial && Math.floor((this.lastGap + .01) / .02) !== Math.floor((g.gap + .01) / .02)) { this.sweep = 0; this.emit(g, 0, 8, g.gapY); }
    this.gapSpeed = initial ? 0 : Math.abs(g.gap - this.lastGap) / 2.5;
    this.lastGap = g.gap;
    this.diagnostics.mode = Math.max(Math.abs(this.yes), Math.abs(this.no)) >= .25 ? 'moving' : 'waiting';
  }
  private emit(g: PulseGeometry, side: number, count: number, y = side ? g.no : g.yes) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    for (let i = 0; i < count; i++) {
      const p = this.pool[this.cursor++ % 80], angle = (side ? g.noAngle : g.yesAngle) + (this.random() - .5) * Math.PI / 7.5;
      const speed = 30 + this.random() * 40;
      p.x = g.x; p.y = y; p.vx = Math.cos(angle) * speed; p.vy = Math.sin(angle) * speed;
      p.age = 0; p.size = 1.5 + this.random(); p.side = side; p.phase = this.random() * TAU;
    }
  }
  tick(g: PulseGeometry, reduced: boolean, sparks: boolean) {
    if (reduced) return;
    this.rings[this.ringCursor++ % 8] = 0;
    if (sparks) { this.emit(g, 0, 8); this.emit(g, 1, 8); }
  }
  draw(ctx: CanvasRenderingContext2D, g: PulseGeometry, dt: number, reduced: boolean, sparks: boolean) {
    this.clock += dt; this.shimmer += dt * (40 + 600 * this.gapSpeed); this.sweep += dt / .6;
    ctx.save(); ctx.globalCompositeOperation = g.dark ? 'lighter' : 'source-over';
    for (let side = 0; side < 2; side++) {
      const m = Math.abs(side ? this.no : this.yes), y = side ? g.no : g.yes;
      ctx.strokeStyle = side ? g.grey : g.violet;
      ctx.globalAlpha = reduced ? .35 : .35 + .1 * Math.sin(this.clock * TAU / 2.4);
      ctx.fillStyle = side ? g.grey : g.violet; ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(g.x, y, 5, 0, TAU); ctx.fill();
      ctx.globalAlpha = reduced ? .35 : .35 + .1 * Math.sin(this.clock * TAU / 2.4);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(g.x, y, 10 + (reduced ? 0 : 3 * (1 - m) * Math.sin(this.clock * TAU / 2.4)), 0, TAU); ctx.stroke();
      if (!reduced && m < .25) {
        ctx.globalAlpha = .16; ctx.setLineDash(COIL_DASH);
        for (let j = 0; j < 2; j++) { const a = this.clock * TAU * .05 * (j ? -1 : 1); ctx.beginPath(); ctx.arc(g.x, y, 10 + j * 4, a, a + Math.PI * 1.5); ctx.stroke(); }
        ctx.setLineDash(SOLID);
      }
      if (!reduced) for (let i = 0; i < 8; i++) if (this.rings[i] < .6) {
        const u = this.rings[i] / .6; ctx.globalAlpha = .5 * (1 - u); ctx.beginPath(); ctx.arc(g.x, y, 28 * (1 - (1 - u) ** 3), 0, TAU); ctx.stroke();
      }
    }
    if (!reduced) {
      this.emission += dt;
      const rate = 3 + 18 * Math.max(Math.abs(this.yes), Math.abs(this.no));
      if (sparks && this.diagnostics.mode === 'moving' && this.emission >= 1 / rate) { this.emit(g, 0, 1); this.emit(g, 1, 1); this.emission %= 1 / rate; }
      for (let i = 0; i < 8; i++) this.rings[i] += dt;
      // Ribbon highlight is clipped between the two heads, moving along the ribbon.
      const width = Math.max(1, g.end - g.x), x = g.x + this.shimmer % width;
      ctx.save(); ctx.beginPath(); ctx.rect(g.x, Math.min(g.yes, g.no) - 1, width, Math.max(2, Math.abs(g.yes - g.no))); ctx.clip();
      ctx.fillStyle = g.grey;
      for (let i = 0; i < 12; i++) { ctx.globalAlpha = .14 * Math.sin(i / 12 * Math.PI); ctx.fillRect(x - 24 + i * 4, Math.min(g.yes, g.no) - 1, 4, Math.max(2, Math.abs(g.yes - g.no))); } ctx.restore();
    }
    const proximity = Math.min(1, Math.max(0, (Math.abs(g.gap) / .01 - .6) / .4));
    ctx.globalAlpha = proximity * proximity * (3 - 2 * proximity) * (reduced ? .4 : .4 + (Math.abs(g.gap) > .0085 ? .2 * Math.sin(this.clock * TAU) : 0));
    ctx.strokeStyle = g.violet; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(g.x, g.edge); ctx.lineTo(g.end, g.edge); ctx.stroke();
    if (!reduced && this.sweep < 1) { ctx.globalAlpha = 1 - this.sweep; ctx.beginPath(); const x = g.x + (g.end - g.x) * this.sweep; ctx.moveTo(x, g.edge); ctx.lineTo(Math.min(g.end, x + 32), g.edge); ctx.stroke(); }
    let count = 0;
    for (let i = 0; i < 80; i++) {
      const p = this.pool[i]; if (reduced) { p.age = 1; continue; } if (p.age >= .9) continue;
      p.age += dt; p.x += p.vx * dt; p.y += p.vy * dt; count++;
      ctx.globalAlpha = Math.max(0, 1 - p.age / .9) ** 2; ctx.fillStyle = p.side ? g.grey : g.violet;
      ctx.beginPath(); ctx.arc(p.x, p.y + 6 * Math.sin(p.age * 8 + p.phase) * Math.sin(p.age * Math.PI / .9), p.size, 0, TAU); ctx.fill();
    }
    this.diagnostics.particles = count; ctx.restore();
  }
}
