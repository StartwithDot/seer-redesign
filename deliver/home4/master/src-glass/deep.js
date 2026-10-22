import * as THREE from 'three';
const lerp = (a, b, t) => a + (b - a) * t;
const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const D = new THREE.Object3D();
const matte = (c, r = 0.5) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0, envMapIntensity: 0.55 });
const gloss = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.14, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.3 });
const PAL_B = { base: 0xffffff, ink: 0x0a0a0a, soft: 0xc2a4ff, deep: 0x2a1a5e, mid: 0x7b3ff2 };
function iso(rx = 0.62, ry = -0.78) { const g = new THREE.Group(); g.rotation.order = 'XYZ'; g.userData = { rx, ry }; g.rotation.set(rx, ry, 0); const o = new THREE.Group(); o.add(g); o.userData.inner = g; return { outer: o, g }; }
function roundedBox(w, h, d, r = 4, seg = 3) {
  // rounded rectangle extruded: crisp but not harsh
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false, curveSegments: seg });
  g.translate(0, 0, -d / 2);
  return g;
}


export function deepStage(el) {
  const { outer, g } = iso(0.62, -0.78);
  const pal = PAL_B;
  const N = 8, SP = 46, W = 36;
  const base = new THREE.Mesh(roundedBox(N * SP + 24, N * SP + 24, 12, 12), matte(0x1b0f3d, 0.6));
  base.rotation.x = -Math.PI / 2; base.position.y = -8; g.add(base);
  const geo = new THREE.BoxGeometry(W, 1, W); geo.translate(0, 0.5, 0);
  const pillars = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.05, envMapIntensity: 0.7 }), N * N);
  pillars.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(N * N * 3), 3);
  g.add(pillars);
  const agent = new THREE.Mesh(new THREE.OctahedronGeometry(17, 0), gloss(0x7b3ff2));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(26, 2.2, 8, 40), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  ring.rotation.x = Math.PI / 2;
  g.add(agent, ring);
  const hs = new Float32Array(N * N), boost = new Float32Array(N * N);
  const cA = new THREE.Color(pal.mid), cB = new THREE.Color(0xffffff), cC = new THREE.Color(), flash = new Float32Array(N * N);
  const cell = (i) => { const s = Math.floor(hash(i * 3.7) * N * N); return s; };
  const hop = 0.85;
  let lastLand = -1;
  return {
    el, group: outer, design: 450, mode: 'min', agent, boost, hs, cellLocal(k, out) { const i = Math.floor(k / N), j = k % N; out.set((i - (N - 1) / 2) * SP, 20, (j - (N - 1) / 2) * SP); return g.localToWorld(out); }, state: { a: 0, b: 0 }, N, SP,
    update(t, dt, p, ptr) {
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        const k = i * N + j;
        const x = (i - (N - 1) / 2) * SP, z = (j - (N - 1) / 2) * SP;
        const f = 0.5 + 0.5 * Math.sin(i * 0.8 + t * 1.15 + Math.sin(j * 0.7 + t * 0.6) * 1.5) * Math.cos(j * 0.9 - t * 0.9);
        boost[k] = Math.max(0, boost[k] - dt * 1.1);
        const h = 26 + 120 * f * f + 12 * hash(k) + 70 * boost[k] * boost[k];
        hs[k] = h;
        flash[k] = Math.max(0, flash[k] - dt * 0.9);
        D.position.set(x, 0, z); D.scale.set(1, h, 1); D.rotation.set(0, 0, 0); D.updateMatrix();
        pillars.setMatrixAt(k, D.matrix);
        cC.copy(cA).lerp(cB, f); cC.lerp(agent.material.color, Math.max(flash[k], boost[k] * 0.85));
        pillars.setColorAt(k, cC);
      }
      pillars.instanceMatrix.needsUpdate = true; pillars.instanceColor.needsUpdate = true;
      const tt = t / hop, idx = Math.floor(tt), u = tt - idx;
      const a = cell(idx), b = cell(idx + 1);
      const ax = (Math.floor(a / N) - (N - 1) / 2) * SP, az = ((a % N) - (N - 1) / 2) * SP;
      const bx = (Math.floor(b / N) - (N - 1) / 2) * SP, bz = ((b % N) - (N - 1) / 2) * SP;
      const e = u * u * (3 - 2 * u);
      agent.position.set(lerp(ax, bx, e), lerp(hs[a], hs[b], e) + 24 + Math.sin(Math.PI * u) * 80, lerp(az, bz, e));
      agent.rotation.y = t * 2.2; agent.rotation.x = u * 3;
      ring.position.set(agent.position.x, agent.position.y, agent.position.z); ring.scale.setScalar(0.6 + 0.4 * Math.sin(Math.PI * u));
      this.state.a = a; this.state.b = b; this.state.u = u;
      if (idx !== lastLand) { lastLand = idx; flash[a] = 1; }
      g.rotation.y = g.userData.ry + ptr.x * 0.08;
      g.rotation.x = g.userData.rx - ptr.y * 0.1;
    },
  };
}
