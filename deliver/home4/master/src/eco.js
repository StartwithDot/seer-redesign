// ECOSYSTEM section: one violet line enters from the left and fans out into the five app cards.
// Isolated module: reads only #ecosystem, never touches spine, bird, layouts or ScrollTrigger.
const NS = 'http://www.w3.org/2000/svg';
const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };

export function initEco() {
  const sec = document.getElementById('ecosystem'); if (!sec) return;
  const svg = sec.querySelector('.eco-wires'), grid = sec.querySelector('.eco-grid');
  const cards = [...sec.querySelectorAll('.eco-card')];
  if (!svg || !grid || !cards.length) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // defs: soft glow blur + a fade-in tail for the entry line
  const defs = mk('defs', {}, svg);
  const f = mk('filter', { id: 'ecoBlur', x: '-20%', y: '-50%', width: '140%', height: '200%' }, defs);
  mk('feGaussianBlur', { stdDeviation: '3.2' }, f);
  const lg = mk('linearGradient', { id: 'ecoTail', gradientUnits: 'userSpaceOnUse', x1: '0', y1: '0', x2: '1', y2: '0' }, defs);
  mk('stop', { offset: '0', 'stop-color': '#cdb9ff', 'stop-opacity': '0' }, lg);
  mk('stop', { offset: '1', 'stop-color': '#cdb9ff', 'stop-opacity': '1' }, lg);
  const gG = mk('g', { filter: 'url(#ecoBlur)' }, svg), gC = mk('g', {}, svg), gP = mk('g', {}, svg), gN = mk('g', {}, svg);

  cards.forEach((c, i) => c.style.setProperty('--cd', (0.9 + i * 0.08).toFixed(2) + 's'));

  function build() {
    const sr = sec.getBoundingClientRect(), gr = grid.getBoundingClientRect();
    const W = sr.width, gap = parseFloat(getComputedStyle(grid).rowGap) || 16;
    const R = cards.map((c) => { const r = c.getBoundingClientRect(); return { l: r.left - sr.left, r: r.right - sr.left, t: r.top - sr.top, b: r.bottom - sr.top }; });
    const gTop = gr.top - sr.top;
    const LANE = 7, r0 = 12;
    const yLow = gTop - 26, yTrunk = yLow - LANE * 2;
    let fanX = Math.min(R[0].l + Math.min(48, (R[0].r - R[0].l) * 0.2), W * 0.2);
    const minL = Math.min(...R.map((q) => q.l)), maxR = Math.max(...R.map((q) => q.r));
    const multi = new Set(R.map((q) => Math.round(q.l))).size > 1; // more than one column: route through interior gaps only
    const blocked = (x, y0, y1, self) => R.some((q, j) => j !== self && x > q.l - 1 && x < q.r + 1 && q.b > y0 && q.t < y1);
    // route per card: drop at its centre if clear, else down the nearest clear gap channel and in from the side
    const routes = R.map((q, i) => {
      const cx = (q.l + q.r) / 2;
      if (!blocked(cx, yLow, q.t, i)) return { i, x: cx, y: q.t, side: 0 };
      const my = q.t + Math.min(48, (q.b - q.t) / 2);
      const cand = [q.l - gap / 2, q.r + gap / 2].filter((x) => x > 2 && x < W - 2 && (!multi || (x > minL && x < maxR)) && !blocked(x, yLow, my, i));
      const x = cand.length ? cand.sort((a, b) => Math.abs(a - fanX) - Math.abs(b - fanX))[0] : q.l - gap / 2;
      return { i, x, y: my, side: x < cx ? 1 : -1, edge: x < cx ? q.l : q.r };
    });
    const minX = Math.min(...routes.map((o) => o.x));
    fanX = Math.min(fanX, minX - 56);
    const rail = !multi || fanX < 16; // stacked: every branch rides one rail down the left channel
    if (rail) {
      fanX = minX - r0;
      routes.forEach((o) => { if (!o.side) { const q = R[o.i]; Object.assign(o, { x: minX, y: q.t + Math.min(48, (q.b - q.t) / 2), side: 1, edge: q.l }); } });
    }
    // lanes: earliest turn rides lowest so no two lanes cross
    const order = routes.slice().sort((a, b) => a.x - b.x || a.y - b.y);
    const n = order.length;
    [gG, gC, gP, gN].forEach((g) => { g.textContent = ''; });
    const trunkD = `M0 ${yTrunk}H${fanX.toFixed(1)}`;
    lg.setAttribute('x2', Math.max(40, fanX * 0.9).toFixed(1));
    const add = (d, wd, wt, tail) => {
      mk('path', { d, class: 'wg dr', pathLength: 1, style: `--wd:${wd}s;--wt:${wt}s` }, gG);
      mk('path', { d, class: 'wc dr', pathLength: 1, style: `--wd:${wd}s;--wt:${wt}s`, ...(tail ? { stroke: 'url(#ecoTail)' } : {}) }, gC);
    };
    add(trunkD, 0.15, 0.7, true);
    order.forEach((o, k) => {
      const y = yLow - (n - 1 - k) * LANE; // lanes spread around the trunk, from yLow-28 to yLow
      const sx = fanX, ex = o.x, rr = Math.min(r0, Math.abs(ex - sx) / 3, Math.abs(o.y - y) / 2 || r0);
      let d;
      if (rail) d = `M${sx.toFixed(1)} ${yTrunk}Q${ex.toFixed(1)} ${yTrunk} ${ex.toFixed(1)} ${(yTrunk + r0).toFixed(1)}`;
      else {
        d = `M${sx.toFixed(1)} ${yTrunk}C${(sx + 28).toFixed(1)} ${yTrunk} ${(sx + 20).toFixed(1)} ${y} ${(sx + 48).toFixed(1)} ${y}`;
        if (ex - rr > sx + 48) d += `H${(ex - rr).toFixed(1)}`;
        d += `Q${ex.toFixed(1)} ${y} ${ex.toFixed(1)} ${(y + rr).toFixed(1)}`;
      }
      if (o.side) {
        d += `V${(o.y - rr).toFixed(1)}Q${ex.toFixed(1)} ${o.y.toFixed(1)} ${(ex + o.side * rr).toFixed(1)} ${o.y.toFixed(1)}H${o.edge.toFixed(1)}`;
      } else d += `V${o.y.toFixed(1)}`;
      const wd = 0.75 + k * 0.06;
      add(d, wd, 0.9, false);
      mk('path', { d, class: 'wp', pathLength: 1, style: `--wd:${(1.75 + k * 0.06).toFixed(2)}s` }, gP);
      const nx = o.side ? o.edge : ex, ny = o.y;
      const g = mk('g', { class: 'nds', style: `--wd:${(wd + 0.8).toFixed(2)}s` }, gN);
      mk('circle', { cx: nx.toFixed(1), cy: ny.toFixed(1), r: 6, class: 'ndg' }, g);
      mk('circle', { cx: nx.toFixed(1), cy: ny.toFixed(1), r: 2.6, class: 'nd' }, g);
    });
  }

  let raf = 0;
  const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(build); };
  build();
  if (window.ResizeObserver) new ResizeObserver(schedule).observe(sec); else addEventListener('resize', schedule);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);

  if (reduced || !('IntersectionObserver' in window)) return;
  const rect = sec.getBoundingClientRect();
  if (rect.top < innerHeight * 0.8 && rect.bottom > 0) return; // already on screen at load: show the final state
  sec.classList.add('armed');
  const io = new IntersectionObserver((es) => {
    if (es.some((e) => e.isIntersecting)) { sec.classList.add('in'); io.disconnect(); }
  }, { rootMargin: '0px 0px -28% 0px' });
  io.observe(sec);
}
