// Planet height field. Shared by the terrain workers and by collision on the main thread.
const G = [1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1];
const h3 = (x, y, z, s) => { let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647 - 1274126177) ^ Math.imul(s, 1442695041); h = Math.imul(h ^ h >>> 15, 2246822519); h = Math.imul(h ^ h >>> 13, 3266489917); return (h ^ h >>> 16) >>> 0; };
const gr = (h, x, y, z) => { const i = h % 12 * 3; return G[i] * x + G[i + 1] * y + G[i + 2] * z; };
export function noise(x, y, z, s) {
  const X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); x -= X; y -= Y; z -= Z;
  const u = x * x * x * (x * (x * 6 - 15) + 10), v = y * y * y * (y * (y * 6 - 15) + 10), w = z * z * z * (z * (z * 6 - 15) + 10);
  const a = gr(h3(X, Y, Z, s), x, y, z), b = gr(h3(X + 1, Y, Z, s), x - 1, y, z), c = gr(h3(X, Y + 1, Z, s), x, y - 1, z), d = gr(h3(X + 1, Y + 1, Z, s), x - 1, y - 1, z);
  const e = gr(h3(X, Y, Z + 1, s), x, y, z - 1), f = gr(h3(X + 1, Y, Z + 1, s), x - 1, y, z - 1), g = gr(h3(X, Y + 1, Z + 1, s), x, y - 1, z - 1), h = gr(h3(X + 1, Y + 1, Z + 1, s), x - 1, y - 1, z - 1);
  const p = a + (b - a) * u, q = c + (d - c) * u, r = e + (f - e) * u, t = g + (h - g) * u, m = p + (q - p) * v, n = r + (t - r) * v; return m + (n - m) * w;
}
export const hash01 = (x, y, z, s) => h3(x | 0, y | 0, z | 0, s | 0) / 4294967296;
const ss = (a, b, x) => { x = Math.max(0, Math.min(1, (x - a) / (b - a))); return x * x * (3 - 2 * x); };
// P: {R, seed, cont, contF, ridge, ridgeL, hill, dune, terrace, crater, spire, canyon, crack, sea, shape}
export function makeHeight(P) {
  const R = P.R, S = P.seed | 0;
  function crater(px, py, pz, minL) { // each crater stays inside its own cell
    let out = 0, k = 0;
    for (let L = P.craterL; L > Math.max(minL * 3, 12); L *= .37, k++) {
      const a = k * 1.7 + 1, ca = Math.cos(a), sa = Math.sin(a), x = (px * ca - py * sa) / L, yy = px * sa + py * ca, y = (yy * ca - pz * sa) / L, z = (yy * sa + pz * ca) / L;
      for (let t = 0; t < 2; t++) { const ox = x + t * .5, oy = y + t * .5, oz = z + t * .5, X = Math.floor(ox), Y = Math.floor(oy), Z = Math.floor(oz);
        const r0 = hash01(X, Y, Z, S + k * 7 + t * 31); if (r0 > P.crater) continue;
        const rad = .12 + .16 * hash01(X, Y, Z, S + 77 + t), jx = .36 + .28 * hash01(X, Y, Z, S + 11), jy = .36 + .28 * hash01(X, Y, Z, S + 12), jz = .36 + .28 * hash01(X, Y, Z, S + 13);
        const dx = ox - X - jx, dy = oy - Y - jy, dz = oz - Z - jz, d = Math.sqrt(dx * dx + dy * dy + dz * dz) / rad; if (d > 1.28) continue;
        const bowl = d < 1 ? (d * d - 1) * .9 : 0, rim = Math.exp(-(((d - 1) * 6) ** 2)) * .35 * (1 - ss(1.1, 1.28, d)), peak = L > R * .05 ? Math.exp(-d * d * 40) * .4 : 0;
        out += Math.min(L * rad * .22, P.craterMax) * (bowl + rim + peak) * Math.min(1, 200000 / L); } }
    return out;
  }
  // one landform; px.. in metres
  function form(f, h, mk, px, py, pz, s, minL, wx, wy) {
    const L = f.L, A = f.amp;
    switch (f.k) {
      case 'volcano': { const x = px / L, y = py / L, z = pz / L, X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); if (hash01(X, Y, Z, s) > .7) return h; const dx = x - X - .5, dy = y - Y - .5, dz = z - Z - .5, d = Math.sqrt(dx * dx + dy * dy + dz * dz) / (.28 + .2 * hash01(X, Y, Z, s + 1)); if (d > 1) return h; const g = 1 + .12 * noise(px / (L * .05), py / (L * .05), pz / (L * .05), s + 2) * Math.min(1, d * 4), cone = Math.pow(1 - d, 1.7) * g, cal = d < .13 ? (.13 - d) * 5.2 : 0; return h + A * mk * (cone - cal); }
      case 'mesa': { const n = noise(px / L, py / L, pz / L, s) + .22 * noise(px / L * 4.1, py / L * 4.1, pz / L * 4.1, s + 1), t = ss(.06, .12, n) * .62 + ss(.22, .27, n) * .38; return h + A * mk * t; }
      case 'columns': { const x = px / L, y = py / L, z = pz / L, X = Math.floor(x + .35 * noise(x * .7, y * .7, z * .7, s)), Y = Math.floor(y), Z = Math.floor(z + .35 * noise(z * .7, x * .7, y * .7, s + 1)); return h + A * mk * hash01(X, Y, Z, s + 2) * (.35 + .65 * Math.max(0, noise(px / (L * 14), py / (L * 14), pz / (L * 14), s + 3) + .4)); }
      case 'pools': { const n = noise(px / L, py / L, pz / L, s) * .7 + noise(px / L * 2.7, py / L * 2.7, pz / L * 2.7, s + 1) * .25, k = n * 9, b = Math.floor(k), r = k - b; return h + A * mk * ((b + ss(.72, .96, r) + (r > .9 ? .12 : 0)) / 9); }
      case 'swirl': { const n = noise(px / L + wx * 2, py / L, pz / L + wy * 2, s) + .4 * noise(px / L * 2.3, py / L * 2.3, pz / L * 2.3, s + 1); return h + A * mk * (Math.pow(.5 + .5 * Math.sin(n * 26), 2)); }
      case 'needles': { const n = noise(px / L, py / L, pz / L, s), m = noise(px / L * 2.6, py / L * 2.6, pz / L * 2.6, s + 1); return h + A * mk * Math.pow(Math.max(0, n * 1.3 + m * .5), 2.2) * 2; }
      case 'plates': { const n = noise(px / L * .6, py / L * .6, pz / L * .6, s), v = (px * .62 + py * .35 + pz * .7) / L + n * 2.4, r = v - Math.floor(v), c = Math.abs(noise(px / L * 1.4, py / L * 1.4, pz / L * 1.4, s + 1)); return h + A * mk * (r < .88 ? r / .88 : (1 - r) / .12) * ss(.02, .1, c); }
      case 'rift': { const v = Math.abs(noise(px / L + wx, py / L, pz / L + wy, s)), w = 1 - ss(.0, .07, v), steps = Math.floor(w * 5) / 5 * .6 + w * .4; return h - A * mk * steps; }
      case 'flats': { const t = Math.max(h * .04, h > 0 ? 12 : h); return h + (t - h) * mk * .97 + A * mk * noise(px / L, py / L, pz / L, s); }
      case 'stardune': { const n1 = 1 - Math.abs(noise(px / L, py / L * .5, pz / L, s)) * 2, n2 = 1 - Math.abs(noise(px / L * .5 + 9, py / L, pz / L * 1.3, s + 1)) * 2; return h + A * mk * Math.pow(Math.max(0, n1, n2 * .8), 1.5); }
      case 'karst': { const x = px / L, y = py / L, z = pz / L, X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z), hv = hash01(X, Y, Z, s); if (hv > .55) return h; const dx = x - X - .5, dy = y - Y - .5, dz = z - Z - .5, d = Math.sqrt(dx * dx + dy * dy + dz * dz) * (1 + .25 * noise(x * 5, y * 5, z * 5, s + 1)) / (.22 + .2 * hash01(X, Y, Z, s + 2)); return h + A * mk * (.4 + hv) * (1 - ss(.55, 1, d)); }
      case 'honeycomb': { const x = px / L, y = py / L, z = pz / L, X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); let a = 9, b = 9; for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) { const ux = X + i + .2 + .6 * hash01(X + i, Y + j, Z + k, s) - x, uy = Y + j + .2 + .6 * hash01(X + i, Y + j, Z + k, s + 1) - y, uz = Z + k + .2 + .6 * hash01(X + i, Y + j, Z + k, s + 2) - z, d = ux * ux + uy * uy + uz * uz; if (d < a) { b = a; a = d; } else if (d < b) b = d; } const e = Math.sqrt(b) - Math.sqrt(a); return h + A * mk * (1 - ss(.03, .2, e)); }
    }
    return h;
  }
  return function (x, y, z, minL = 2, out) {
    const px = x * R, py = y * R, pz = z * R; let f = P.contF, n = 0, a = .55;
    const wx = noise(x * f + 5, y * f, z * f, S + 1), wy = noise(x * f, y * f + 9, z * f, S + 2), wz = noise(x * f, y * f, z * f + 3, S + 3), W = P.warp;
    let qx = x + wx * W, qy = y + wy * W, qz = z + wz * W;
    let L = R / f;
    for (let i = 0; i < 7 && L > minL; i++) { n += a * noise(qx * f, qy * f, qz * f, S + 10 + i); f *= 2.13; a *= .5; L /= 2.13; }
    let h = (n + (P.bias || 0)) * P.cont;
    if (P.shape) { h += R * P.shape * (noise(x * 1.1, y * 1.1, z * 1.1, S + 60) + .5 * noise(x * 2.4, y * 2.4, z * 2.4, S + 61)); }
    const land = P.sea ? ss(-.02, .12, n + (P.bias || 0)) : 1;
    const rough = .5 + .5 * noise(x * P.contF * 3, y * P.contF * 3, z * P.contF * 3, S + 40);
    if (P.ridge > 0) { // ridged multifractal
      const mk = ss(.28, .62, rough) * land + .12 * land; let s = 0, amp = 1, w = 1, l = P.ridgeL, i = 0;
      if (mk > .01) { for (; l > minL && i < 13; l *= .47, i++) { let v = 1 - Math.abs(noise(px / l + wx * 3, py / l + wy * 3, pz / l + wz * 3, S + 80 + i)) * 1.9; v = Math.max(0, v); v *= v * w; w = Math.min(1, v * 1.6); s += v * amp; amp *= .47; } h += s * P.ridge * mk * .6; }
    }
    if (P.spire > 0 && minL < 800) { const l = 900, v = noise(px / l, py / l, pz / l, S + 120), m = ss(.28, .42, v + .1 * noise(px / 160, py / 160, pz / 160, S + 121)); h += m * P.spire * (.6 + rough) * land; }
    if (P.canyon > 0) { const l = P.ridgeL * 1.3, v = Math.abs(noise(px / l + wx * 2, py / l + wy * 2, pz / l, S + 130) + .18 * noise(px / l * 5, py / l * 5, pz / l * 5, S + 131)); h -= P.canyon * (1 - ss(.015, .09, v)) * land; }
    if (P.crack > 0) { const l = P.ridgeL * .5, v = Math.abs(noise(px / l, py / l, pz / l, S + 140) + .3 * noise(px / l * 4, py / l * 4, pz / l * 4, S + 141)); h -= P.crack * (1 - ss(0, .06, v)); }
    if (P.forms) for (let q = 0; q < P.forms.length; q++) { const f0 = P.forms[q]; if (minL > f0.L * .8) continue; const mk = ss(f0.th, f0.th + .14, noise(x * f0.f + q * 7.3, y * f0.f, z * f0.f, S + 300 + q)) * (f0.any ? 1 : land); if (mk > .01) h = form(f0, h, mk, px, py, pz, S + 330 + q * 5, minL, wx, wy); }
    if (P.terrace > 0) { const st = P.terrace, k = Math.floor(h / st), fr = h / st - k; h = (k + ss(.35, .75, fr)) * st * .85 + h * .15; }
    if (P.crater > 0) h += crater(px, py, pz, minL);
    if (P.dune > 0 && minL < 300) { const l = 620, dx = px + 240 * noise(px / 900, py / 900, pz / 900, S + 150), v = 1 - Math.abs(noise(dx / l, py / l * .35, pz / l, S + 151)) * 2; h += P.dune * Math.max(0, v) ** 1.6 * land; if (minL < 8) h += Math.sin((dx + pz * .4) / 2.2 + noise(px / 30, py / 30, pz / 30, S + 152) * 4) * .12; }
    { let l = 2600, amp = P.hill * (.25 + rough), i = 0; const g = .35 + .65 * land; for (; l > minL && i < 12; l *= .46, i++) { if (l < R) h += noise(px / l, py / l, pz / l, S + 160 + i) * l * amp * g; amp *= 1.06; } }
    if (out) { out.n = n + (P.bias || 0); out.rough = rough; out.moist = noise(x * 4 + wx, y * 4 + wy, z * 4, S + 200) * .6 + .5 + .25 * noise(x * 17, y * 17, z * 17, S + 201); }
    return h;
  };
}
const A = [[1,0,0, 0,0,-1, 0,1,0],[-1,0,0, 0,0,1, 0,1,0],[0,1,0, 1,0,0, 0,0,-1],[0,-1,0, 1,0,0, 0,0,1],[0,0,1, 1,0,0, 0,1,0],[0,0,-1, -1,0,0, 0,1,0]];
export function faceDir(f, u, v, o) { const m = A[f]; u = Math.tan(u * Math.PI / 4); v = Math.tan(v * Math.PI / 4); const x = m[0] + m[3] * u + m[6] * v, y = m[1] + m[4] * u + m[7] * v, z = m[2] + m[5] * u + m[8] * v, l = 1 / Math.sqrt(x * x + y * y + z * z); o[0] = x * l; o[1] = y * l; o[2] = z * l; return o; }
export function dirFace(x, y, z) { const ax = Math.abs(x), ay = Math.abs(y), az = Math.abs(z), f = ax >= ay && ax >= az ? (x > 0 ? 0 : 1) : ay >= az ? (y > 0 ? 2 : 3) : (z > 0 ? 4 : 5), m = A[f], d = x * m[0] + y * m[1] + z * m[2], k = 4 / Math.PI; return [f, Math.atan((x * m[3] + y * m[4] + z * m[5]) / d) * k, Math.atan((x * m[6] + y * m[7] + z * m[8]) / d) * k]; }
export const N = 33;
export function buildChunk(P, hf, face, lv, ix, iy) {
  const M = N + 2, n = 1 << lv, sz = 2 / n, c = faceDir(face, -1 + (ix + .5) * sz, -1 + (iy + .5) * sz, [0, 0, 0]), cx = c[0] * P.R, cy = c[1] * P.R, cz = c[2] * P.R;
  const sp = P.R * Math.PI / 2 / n / (N - 1), wp = new Float64Array(M * M * 3), hs = new Float64Array(M * M), d = [0, 0, 0], out = {};
  const pos = new Float32Array(M * M * 3), nor = new Float32Array(M * M * 3), aux = new Float32Array(M * M * 4), tile = new Float32Array(M * M * 3), sea = P.sea;
  let hmin = 1e9, hmax = -1e9;
  for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
    faceDir(face, -1 + (ix + (i - 1) / (N - 1)) * sz, -1 + (iy + (j - 1) / (N - 1)) * sz, d);
    const k = j * M + i, h0 = hf(d[0], d[1], d[2], sp * 1.6, out), h = sea ? Math.max(h0, 0) : h0, r = P.R + h;
    hs[k] = h0; wp[k * 3] = d[0] * r; wp[k * 3 + 1] = d[1] * r; wp[k * 3 + 2] = d[2] * r;
    aux[k * 4] = h0; aux[k * 4 + 1] = out.moist; aux[k * 4 + 2] = out.rough; aux[k * 4 + 3] = Math.abs(d[1]); hmin = Math.min(hmin, h); hmax = Math.max(hmax, h);
  }
  const tx = ((cx % 512) + 512) % 512, ty = ((cy % 512) + 512) % 512, tz = ((cz % 512) + 512) % 512;
  for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
    const k = j * M + i, ci = Math.max(1, Math.min(M - 2, i)), cj = Math.max(1, Math.min(M - 2, j)), q = cj * M + ci, l = q - 1, r = q + 1, u = q - M, w = q + M;
    const ax = wp[r * 3] - wp[l * 3], ay = wp[r * 3 + 1] - wp[l * 3 + 1], az = wp[r * 3 + 2] - wp[l * 3 + 2], bx = wp[w * 3] - wp[u * 3], by = wp[w * 3 + 1] - wp[u * 3 + 1], bz = wp[w * 3 + 2] - wp[u * 3 + 2];
    let nx = ay * bz - az * by, ny = az * bx - ax * bz, nz = ax * by - ay * bx, il = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz); nor[k * 3] = nx * il; nor[k * 3 + 1] = ny * il; nor[k * 3 + 2] = nz * il;
    let X = wp[q * 3], Y = wp[q * 3 + 1], Z = wp[q * 3 + 2]; if (i !== ci || j !== cj) { const s = 1 - Math.min(.02, sp * 2.2 / P.R); X *= s; Y *= s; Z *= s; for (let t = 0; t < 4; t++) aux[k * 4 + t] = aux[q * 4 + t]; }
    pos[k * 3] = X - cx; pos[k * 3 + 1] = Y - cy; pos[k * 3 + 2] = Z - cz; tile[k * 3] = X - cx + tx; tile[k * 3 + 1] = Y - cy + ty; tile[k * 3 + 2] = Z - cz + tz;
  }
  return { pos, nor, aux, tile, hmin, hmax };
}
