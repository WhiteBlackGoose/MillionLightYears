// Infinite universe of galaxies. Positions in light years; axes are shared, so changing galaxy is only a translation.
import * as THREE from 'three';
import { rng, V } from './glsl.js';
import { makeName } from './galaxy.js';
export const CELL = 1.6e6;
const hh = (a, b, c, s) => { let h = 0x9e3779b9 ^ s | 0; for (const v of [a, b, c]) { h = Math.imul(h ^ (v | 0), 0x85ebca6b); h = Math.imul(h ^ h >>> 13, 0xc2b2ae35); h ^= h >>> 16; h = h + 0x6d2b79f5 | 0; } return h >>> 0; };
function galaxy(id, r, pos, R, o = {}) {
  const u = r(), ell = o.home ? 0 : u < .2 ? 1 : 0, arms = o.home ? 2 : ell ? 0 : u < .62 ? 2 : u < .82 ? 3 : u < .93 ? 4 : 1; const q = o.home ? new THREE.Quaternion() : new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), r.dir());
  const e = new THREE.Matrix4().makeRotationFromQuaternion(q.clone().invert()).elements; // world -> galaxy plane
  const G = { id, pos, R, ell, arms, wind: o.home ? 2.7 : r.range(1.7, 3.6), q, m: [e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]], m3: new THREE.Matrix3().set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), seed: o.seed ?? ((r() * 1e9) | 0), home: !!o.home };
  let nm = ''; while (nm.length < 7) nm = makeName(r); G.name = nm + (R < 14000 ? ' Cloud' : ''); G.label = (R < 14000 ? 'Dwarf ' : R > 62000 ? 'Giant ' : '') + (ell ? 'elliptical galaxy' : arms === 1 ? 'one-armed spiral galaxy' : arms + '-armed spiral galaxy'); G.label = G.label[0].toUpperCase() + G.label.slice(1);
  G.star = { id: 'G:' + id, x: 0, y: 0, z: 0, G, isGal: true, name: G.name, L: 1, T: 6000, layer: 99 }; return G;
}
export class Universe {
  constructor(seed) { this.seed = seed; this.cells = new Map(); this.pins = new Map(); this.home = this.cell(0, 0, 0)[0]; }
  cell(X, Y, Z) { const k = X + ',' + Y + ',' + Z; let c = this.cells.get(k); if (c) return c; const home = !X && !Y && !Z, r = rng(hh(X, Y, Z, this.seed)); c = [];
    if (home || r() < .5) { const R = home ? 50000 : Math.exp(r.range(Math.log(18000), Math.log(95000))), p = home ? [0, 0, 0] : [(X + r.range(-.36, .36)) * CELL, (Y + r.range(-.36, .36)) * CELL, (Z + r.range(-.36, .36)) * CELL]; c.push(galaxy(home ? 'h' : k, r, p, R, home ? { home, seed: this.seed } : {}));
      const n = home ? 2 : r() < .4 ? 1 : 0; for (let i = 0; i < n; i++) { const d = r.dir().multiplyScalar(R * r.range(2.6, 4.6)); c.push(galaxy((home ? 'h' : k) + ':' + i, r, [p[0] + d.x, p[1] + d.y, p[2] + d.z], r.range(5000, 11000))); } }
    const fd = 3 + (r() * 5 | 0); for (let i = 0; i < fd; i++) { const q = [(X + r() - .5) * CELL, (Y + r() - .5) * CELL, (Z + r() - .5) * CELL]; if (c.some(g => Math.hypot(g.pos[0] - q[0], g.pos[1] - q[1], g.pos[2] - q[2]) < g.R * 2.5 + 20000)) continue; c.push(galaxy((home ? 'h' : k) + ':d' + i, r, q, Math.exp(r.range(Math.log(2500), Math.log(12000))))); }
    c = c.map(g => this.pins.get(g.id) || g); this.cells.set(k, c); return c; }
  pin(G) { this.pins.set(G.id, G); }
  near(p, n = 24, rc = 2) { const X = Math.round(p.x / CELL), Y = Math.round(p.y / CELL), Z = Math.round(p.z / CELL), out = []; for (let a = -rc; a <= rc; a++) for (let b = -rc; b <= rc; b++) for (let c = -rc; c <= rc; c++) for (const G of this.cell(X + a, Y + b, Z + c)) out.push([G, Math.hypot(G.pos[0] - p.x, G.pos[1] - p.y, G.pos[2] - p.z)]); out.sort((a, b) => a[1] / a[0].R - b[1] / b[0].R); return out.slice(0, n); }
  nearest(p, n = 24) { const X = Math.round(p.x / CELL), Y = Math.round(p.y / CELL), Z = Math.round(p.z / CELL), out = []; for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) for (const G of this.cell(X + a, Y + b, Z + c)) out.push([G, Math.hypot(G.pos[0] - p.x, G.pos[1] - p.y, G.pos[2] - p.z) - G.R]); out.sort((a, b) => a[1] - b[1]); return out.slice(0, n); }
  byId(id) { if (!id || id[0] === 'h') return this.home.id === (id || 'h') ? this.home : this.cell(0, 0, 0).find(g => g.id === id) || this.home; const [X, Y, Z] = id.split(':')[0].split(',').map(Number); return this.cell(X, Y, Z).find(g => g.id === id) || this.home; }
}
