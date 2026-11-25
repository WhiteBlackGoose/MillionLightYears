// Logarithmic radar in the ship's frame: forward is up, distance is log-scaled, stems show height above or below.
import { dist } from './core.js';
export class Radar {
  constructor(cv) { this.cv = cv; this.x = cv.getContext('2d'); this.lo = 3; this.hi = 11; this.w = 0; }
  draw(items, target) { // items: {d, dir:{x,y,z} in ship space, hue, name, star, o}
    const cv = this.cv, x = this.x, dpr = Math.min(2, devicePixelRatio || 1), W = cv.clientWidth, H = cv.clientHeight; if (!W) return; if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; } x.setTransform(dpr, 0, 0, dpr, 0, 0); x.clearRect(0, 0, W, H);
    if (!items.length) return; const R = W / 2 - 8, cx = W / 2, cy = H / 2 + 6, K = .62;
    const lo = Math.floor(Math.log10(Math.max(items[0].d, 1)) - .6), hi = Math.max(lo + 3, Math.log10(Math.max(items[items.length - 1].d, 10)) + .15); this.lo += (Math.max(0, lo) - this.lo) * .15; this.hi += (hi - this.hi) * .15;
    const rad = d => Math.max(.03, Math.min(1, (Math.log10(Math.max(d, 1)) - this.lo) / (this.hi - this.lo))) * R;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, R); g.addColorStop(0, 'rgba(10,14,24,.35)'); g.addColorStop(1, 'rgba(6,8,16,.72)'); x.fillStyle = g; x.beginPath(); x.ellipse(cx, cy, R, R * K, 0, 0, 7); x.fill();
    const span = this.hi - this.lo, step = Math.max(1, Math.ceil(span / 5)); x.font = '9px "Inter Variable",system-ui,sans-serif'; x.lineWidth = 1;
    for (let k = Math.ceil(this.lo + .3); k < this.hi; k += step) { const r = rad(10 ** k); x.strokeStyle = 'rgba(190,210,255,.20)'; x.beginPath(); x.ellipse(cx, cy, r, r * K, 0, 0, 7); x.stroke(); if (r > 14 && r < R - 4) { x.fillStyle = 'rgba(200,215,245,.75)'; x.textAlign = 'left'; x.fillText(dist(10 ** k).replace(/\.0+ /, ' ').replace('.00', ''), cx + 3, cy + r * K - 2); } }
    x.strokeStyle = 'rgba(220,230,255,.45)'; x.beginPath(); x.ellipse(cx, cy, R, R * K, 0, 0, 7); x.stroke();
    x.strokeStyle = 'rgba(255,194,122,.28)'; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx - R * .46, cy - R * K * .88); x.moveTo(cx, cy); x.lineTo(cx + R * .46, cy - R * K * .88); x.stroke();
    x.fillStyle = '#ffc27a'; x.beginPath(); x.moveTo(cx, cy - 6); x.lineTo(cx - 4, cy + 4); x.lineTo(cx + 4, cy + 4); x.fill();
    let lab = 0; const used = []; for (let i = items.length - 1; i >= 0; i--) { const t = items[i], r = rad(t.d), px = cx + t.dir.x * r, gy = cy + t.dir.z * r * K, py = gy - t.dir.y * r * K; const tg = t.o === target || (target?.star && t.o.id === target.star.id);
      x.strokeStyle = t.hue + '66'; x.beginPath(); x.moveTo(px, gy); x.lineTo(px, py); x.stroke(); x.fillStyle = t.hue; x.globalAlpha = tg ? 1 : .9; if (t.star) { x.beginPath(); x.arc(px, py, tg ? 3.6 : 2.2, 0, 7); x.fill(); } else { const s = tg ? 3.6 : t.small ? 1.6 : 2.6; x.fillRect(px - s, py - s, s * 2, s * 2); } x.globalAlpha = 1; if (tg) { x.strokeStyle = '#fff'; x.beginPath(); x.arc(px, py, 7, 0, 7); x.stroke(); } t.px = px; t.py = py; t.tg = tg; }
    x.lineWidth = 3; x.strokeStyle = 'rgba(0,0,0,.85)'; for (const t of [...items].sort((a, b) => b.tg - a.tg)) { if (lab >= 4) break; if (used.some(u => Math.abs(u[1] - t.py) < 11 && Math.abs(u[0] - t.px) < 92)) continue; used.push([t.px, t.py]); lab++; const right = t.px < cx + 18; x.textAlign = right ? 'left' : 'right'; const X = t.px + (right ? 7 : -7); x.strokeText(t.name, X, t.py + 3); x.fillStyle = t.tg ? '#fff' : 'rgba(240,235,222,.92)'; x.fillText(t.name, X, t.py + 3); }
  }
}
