import * as THREE from 'three';
import { mat, REL, LY } from './core.js';
import { add, rng, V } from './glsl.js';
import { makeName, systemList } from './galaxy.js';
export const KLY = 50000; // galactic radius in light years
export const LAY = [10, 40, 160, 640, 2560], RC = 6, EDGE = LAY.map(s => s * RC);
export function density(G, X, Y, Z) { const m = G.m, x = (m[0] * X + m[1] * Y + m[2] * Z) / G.R, y = (m[3] * X + m[4] * Y + m[5] * Z) / G.R, z = (m[6] * X + m[7] * Y + m[8] * Z) / G.R, r = Math.hypot(x, z), edge = q => q > 1.1 ? Math.max(0, 1 - (q - 1.1) * 6) : 1;
  if (G.ell) { const q = Math.hypot(x, y * 1.5, z); return 4.5 * Math.exp(-q * 5.5) * edge(q); }
  const h = Math.abs(y) / (.018 + .052 * Math.exp(-r * r * 60)), arm = .5 + .5 * Math.cos(G.arms * (Math.atan2(z, x) - Math.log(r + .03) * G.wind)); return (Math.exp(-r * 3.2) * (.45 + 1.1 * arm * arm) * 2.6 + 5 * Math.exp(-r * r * 120)) * Math.exp(-h) * edge(r); }
const hs = (a, b, c, d, e) => { let h = 0x9e3779b9 ^ e | 0; for (const v of [a, b, c, d]) { h = Math.imul(h ^ (v | 0), 0x85ebca6b); h = Math.imul(h ^ h >>> 13, 0xc2b2ae35); h ^= h >>> 16; h = h + 0x6d2b79f5 | 0; } return h >>> 0; };
export function tempColor(T) { const t = T / 100, c = x => Math.max(0, Math.min(1, x)); let r = t <= 66 ? 1 : c(1.293 * Math.pow(t - 60, -.1332)), g = t <= 66 ? c(.39 * Math.log(t) - .632) : c(1.13 * Math.pow(t - 60, -.0755)), b = t >= 66 ? 1 : t <= 19 ? 0 : c(.543 * Math.log(t - 10) - 1.196); return new THREE.Color().setRGB(r * r, g * g, b * b); }
function spec(layer, r) {
  let T, L, k = 'star'; const u = r();
  if (layer === 0) { T = u < .55 ? r.range(2700, 3900) : u < .83 ? r.range(3900, 5300) : r.range(5300, 6100); L = Math.pow(T / 5780, 5.5) * r.range(.7, 1.4); }
  else if (layer === 1) { T = r.range(5600, 9500); L = Math.pow(T / 5780, 5.2) * r.range(.9, 1.5); }
  else if (layer === 2) { if (u < .5) { T = r.range(3600, 5000); L = r.range(60, 500); } else { T = r.range(9500, 17000); L = r.range(60, 900); } if (u > .965) { k = 'pulsar'; T = 60000; L = 300; } }
  else if (layer === 3) { if (u < .45) { T = r.range(3300, 4200); L = r.range(1e4, 6e4); } else { T = r.range(17000, 32000); L = r.range(4e3, 5e4); } if (u > .97) { k = 'blackhole'; T = 9000; L = 4e3; } else if (u > .94) { k = 'pulsar'; T = 60000; L = 4e3; } }
  else { T = u < .5 ? r.range(3300, 3900) : r.range(28000, 45000); L = r.range(2e5, 9e5); }
  return { T, L, k };
}
export const starRadius = s => 6.96e8 * Math.sqrt(s.L) * Math.pow(5780 / s.T, 2);
export const starClass = s => s.isGal ? s.G.label : s.k === 'blackhole' ? 'Black hole' : s.k === 'quasar' ? 'Quasar, galactic core' : s.k === 'pulsar' ? 'Pulsar' : (s.T > 30000 ? 'O' : s.T > 10000 ? 'B' : s.T > 7500 ? 'A' : s.T > 6000 ? 'F' : s.T > 5200 ? 'G' : s.T > 3800 ? 'K' : 'M') + (s.L > 1e5 ? ' hypergiant' : s.L > 5000 ? ' supergiant' : s.L > 50 && s.T < 6000 ? ' giant' : s.L > 50 ? ' blue-white star' : s.T < 3800 ? ' red dwarf' : s.T < 6000 ? ' dwarf' : ' main-sequence star');
export function starName(s) { if (!s.name) { const r = rng(s.seed); s.name = makeName(r) + (s.layer < 2 ? ' ' + (10 + (r() * 890 | 0)) : ''); } return s.name; }
export class Stars {
  constructor() {
    this.group = new THREE.Group(); this.layers = LAY.map((s, li) => { const geo = new THREE.BufferGeometry(); const u = { uCam: { value: V() }, uEdge: { value: EDGE[li] }, uPx: { value: 1 } };
      const m = new THREE.Points(geo, mat({ ...add, depthTest: true, uniforms: u, vertexColors: true, vertexShader: REL + /* glsl */`attribute float lum,tmp;uniform vec3 uCam;uniform float uEdge,uPx;varying vec3 vC;varying float vS;
      void main(){vec3 p=position-uCam;float d=length(p);float f=lum/(d*d+1e-6);vec3 n=p/d;vec3 q=aberr(p);
       float e=smoothstep(1.,.72,d/uEdge)*smoothstep(.015,.03,d);
       vec3 c=color;if(uBeta>1e-4){float D=dopF(n);vec3 k=bbShift(tmp,D);f*=clamp(k.g/(D*D),1e-6,3000.);c*=clamp(k/max(k.g,1e-12),.15,4.);}float I=pow(f*900.,.42)*e;
       float s=clamp(.75+I*1.05,1.,11.)*uPx;vS=s;vC=c*min(I*I*.6+I*.22,9.);gl_PointSize=s*2.2;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*q/d*1000.,1.);gl_Position.z=gl_Position.w;}`,
        fragmentShader: 'varying vec3 vC;varying float vS;void main(){vec2 q=abs(gl_PointCoord-.5)*2.;float d=length(q);float a=exp(-d*d*6.)+smoothstep(5.,12.,vS)*(exp(-q.x*26.)+exp(-q.y*26.))*.25*(1.-d);gl_FragColor=vec4(vC*max(a,0.)*smoothstep(1.,.75,d),1.);}' })); m.frustumCulled = false; m.renderOrder = -990; this.group.add(m);
      return { s, li, geo, m, u, key: '', cells: new Map(), list: [] }; });
  }
  setGalaxy(G) { this.G = G; const seed = this.seed = G.seed; for (const l of this.layers) { l.cells.clear(); l.key = ''; l.list = []; }
    const v = new THREE.Vector3(); this.marks = systemList(seed).map(n => { if (!G.home) n = { ...n, first: false }; v.set(n.at[0], n.at[1] * .4, n.at[2]).multiplyScalar(G.R / 1000).applyQuaternion(G.q); const k = n.type === 'nebula' || n.type === 'binary' || n.type === 'star' ? 'star' : n.type; return { id: G.id + '|L' + n.id, G, land: n, name: n.name, seed: n.seed, k, layer: 9, x: v.x, y: v.y, z: v.z, T: n.id === 12 ? 12000 : k === 'pulsar' ? 60000 : k === 'blackhole' ? 9000 : n.first ? 5750 : n.type === 'nebula' ? 14000 : 5200 + (n.seed % 2500), L: n.id === 12 ? 1e6 : n.first ? 1 : n.type === 'nebula' ? 300 : 2 }; }); }
  cell(l, X, Y, Z) { const k = X + ',' + Y + ',' + Z; let c = l.cells.get(k); if (c) return c; c = []; const s = l.s, r = rng(hs(X, Y, Z, l.li, this.seed)); const den = density(this.G, (X + .5) * s, (Y + .5) * s, (Z + .5) * s), n = Math.min(14, Math.floor(den * 2.6 + r()));
    for (let i = 0; i < n; i++) { const sp = spec(l.li, r); c.push({ id: this.G.id + '|' + l.li + ':' + k + ':' + i, G: this.G, x: (X + r()) * s, y: (Y + r()) * s, z: (Z + r()) * s, ...sp, layer: l.li, seed: hs(X, Y, Z, l.li * 50 + i, this.seed ^ 0x5bd1) }); }
    l.cells.set(k, c); return c; }
  update(g, speedLy, px) { // g: camera, light years
    for (const l of this.layers) { l.u.uPx.value = px;
      const X = Math.floor(g.x / l.s), Y = Math.floor(g.y / l.s), Z = Math.floor(g.z / l.s), key = X + ',' + Y + ',' + Z; const hide = speedLy * .35 > l.s * RC; l.m.visible = !hide; if (hide) { l.key = ''; l.list = []; continue; }
      if (key !== l.key && !(speedLy > l.s * 3 && performance.now() - (l.t || 0) < 120)) { l.key = key; l.t = performance.now(); l.base = [X * l.s, Y * l.s, Z * l.s]; if (l.cells.size > 9000) l.cells.clear(); const list = l.list = [];
        for (let a = -RC; a <= RC; a++) for (let b = -RC; b <= RC; b++) for (let c = -RC; c <= RC; c++) for (const s of this.cell(l, X + a, Y + b, Z + c)) list.push(s);
        const lm = []; if (this.marks) for (const s of this.marks) if (l.li === (s.L > 200 ? 2 : 1) && Math.hypot(s.x - g.x, s.y - g.y, s.z - g.z) < EDGE[l.li]) { list.push(s); }
        const n = list.length, p = new Float32Array(n * 3), co = new Float32Array(n * 3), lu = new Float32Array(n), tp = new Float32Array(n); for (let i = 0; i < n; i++) { const s = list[i]; p[i * 3] = s.x - l.base[0]; p[i * 3 + 1] = s.y - l.base[1]; p[i * 3 + 2] = s.z - l.base[2]; const q = s.c || (s.c = tempColor(s.T)); co[i * 3] = q.r; co[i * 3 + 1] = q.g; co[i * 3 + 2] = q.b; lu[i] = s.L; tp[i] = Math.min(s.T, 40000); }
        l.geo.dispose(); l.geo.setAttribute('position', new THREE.BufferAttribute(p, 3)); l.geo.setAttribute('color', new THREE.BufferAttribute(co, 3)); l.geo.setAttribute('lum', new THREE.BufferAttribute(lu, 1)); l.geo.setAttribute('tmp', new THREE.BufferAttribute(tp, 1)); l.geo.setDrawRange(0, n); }
      if (l.base) l.u.uCam.value.set(g.x - l.base[0], g.y - l.base[1], g.z - l.base[2]); }
  }
  nearest(g, k = 3) { const best = []; for (const l of this.layers) for (const s of l.list) { const d = (s.x - g.x) ** 2 + (s.y - g.y) ** 2 + (s.z - g.z) ** 2; if (best.length < k || d < best[best.length - 1][1]) { best.push([s, d]); best.sort((a, b) => a[1] - b[1]); if (best.length > k) best.pop(); } } return best.map(([s, d]) => [s, Math.sqrt(d)]); }
  pick(g, f, cone = .9985) { let b = null, bs = -1; for (const l of this.layers) for (const s of l.list) { const x = s.x - g.x, y = s.y - g.y, z = s.z - g.z, d2 = x * x + y * y + z * z, d = Math.sqrt(d2), c = (x * f.x + y * f.y + z * f.z) / d; if (c < cone || d < .02 || d > EDGE[l.li] * .95) continue; const sc = Math.pow(s.L / d2, .25) * Math.pow((c - cone) / (1 - cone) + .05, 1.5); if (sc > bs) { bs = sc; b = s; } } return b; }
}
// Nebulae live on their own coarse grid
const NG = 260, NC = [['#2a6cff', '#ff3f6e', '#ffd2a0'], ['#13b5a6', '#ff7a2e', '#fff0c0'], ['#8a3cff', '#ff5aa8', '#a8d8ff'], ['#1f9a5a', '#3f7bff', '#ffe08a'], ['#ff4a2a', '#ffb04a', '#8ad0ff'], ['#3ad0ff', '#c03aff', '#ffe0f0'], ['#ff2f5f', '#5a2cff', '#ffd08a']];
export function nebList(stars, g) {
  const out = [], X = Math.floor(g.x / NG), Y = Math.floor(g.y / NG), Z = Math.floor(g.z / NG);
  for (let a = -2; a <= 2; a++) for (let b = -1; b <= 1; b++) for (let c = -2; c <= 2; c++) { const r = rng(hs(X + a, Y + b, Z + c, 77, stars.seed)); const x = (X + a + r()) * NG, y = (Y + b + r()) * NG, z = (Z + c + r()) * NG; if (r() > .3 * density(stars.G, x, y, z)) continue; out.push({ x, y, z, R: r.range(26, 95), col: r.pick(NC), seed: r() * 60, name: makeName(r) + ' Nebula' }); }
  for (const m of stars.marks) { const t = m.land.type; if (t !== 'nebula' && !m.land.first) continue; const r = rng(m.seed + 5); out.push(m.land.first ? { x: m.x + 62, y: m.y + 18, z: m.z - 74, R: 78, col: NC[2 + m.seed % 5], seed: r() * 60, name: m.name + ' Nebula' } : { x: m.x + 4, y: m.y, z: m.z, R: r.range(40, 70), col: r.pick(NC), seed: r() * 60, name: m.name + ' Nebula' }); }
  return out;
}
export function nebulae(stars, g) {
  const out = nebList(stars, g);
  for (const n of out) { n.d = Math.hypot(n.x - g.x, n.y - g.y, n.z - g.z); n.ang = n.R / Math.max(n.d, 1e-3); }
  return out.filter(n => n.ang > .04).sort((a, b) => b.ang - a.ang).slice(0, 5);
}
