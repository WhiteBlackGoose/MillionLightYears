// Drive core: eight gear segments with ten subgears each, drawn as a cockpit hologram.
const A0 = Math.PI * .75, SPAN = Math.PI * 1.5, SEG = SPAN / 8, GAP = .045, TAU = Math.PI * 2;
const hue = g => [34, 24, 12, 338, 300, 268, 232, 200][g - 2], col = (g, l = 62, a = 1) => `hsla(${hue(g)},96%,${l}%,${a})`;
export class Dial {
  constructor(cv) { this.cv = cv; this.x = cv.getContext('2d'); this.rot = 0; this.gp = 0; this.kick = 0; this.sel = -1; this.pow = 0; this.parts = []; }
  // text with a raised exponent: [base, exponent, suffix]
  pow10(x, y, size, b, e, s, align = 'center') { const c = this.x, F = (z, w = 500) => `${w} ${z}px "Inter Variable",system-ui,sans-serif`; c.font = F(size); const wb = c.measureText(b).width, ws = c.measureText(s).width; c.font = F(size * .74); const we = c.measureText(e).width, W = wb + we + ws; let X = align === 'center' ? x - W / 2 : align === 'right' ? x - W : x; c.textAlign = 'left'; c.font = F(size); c.fillText(b, X, y); X += wb; c.font = F(size * .74); c.fillText(e, X, y - size * .38); X += we; c.font = F(size); c.fillText(s, X, y); }
  energy(x, y, size, E, full, align) { if (!(E > 0)) { this.pow10(x, y, size, '0 J', '', '', align); return; } let e = Math.floor(Math.log10(E)), m = (E / 10 ** e).toFixed(2); if (m === '10.00') { m = '1.00'; e++; } this.pow10(x, y, size, full ? m + ' × 10' : '10', String(full ? e : Math.round(Math.log10(E))), ' J', align); }
  // s: {gp, sel, auto, label, speed:[base,exp,suffix], energy, segE[8], power (0..1), sign, up, down, mode}
  draw(dt, s) {
    const cv = this.cv, c = this.x, dpr = Math.min(2, devicePixelRatio || 1), W = cv.clientWidth; if (!W) return; if (cv.width !== Math.round(W * dpr)) cv.width = cv.height = Math.round(W * dpr); const k = W / 340; c.setTransform(dpr * k, 0, 0, dpr * k, 0, 0); c.clearRect(0, 0, 340, 340);
    const ease = 1 - Math.exp(-dt * 9); this.gp += (s.gp - this.gp) * ease; this.pow += (s.power - this.pow) * ease; this.kick *= Math.exp(-dt * 4); if (s.sel !== this.sel) { if (this.sel !== -1) this.kick = 1; this.sel = s.sel; }
    const pos = Math.max(0, this.gp - 2) / 80, spin = .15 + pos * 3.2; this.rot += dt * spin * (1 + this.pow * 1.5); const cx = 170, cy = 168, selG = s.sel >= 2 ? Math.floor((s.sel - 2) / 10) + 2 : 0, selS = s.sel >= 2 ? (s.sel - 2) % 10 : 0, actG = Math.min(9, Math.max(2, Math.floor(Math.max(0, this.gp - 2) / 10) + 2)), H = actG;
    c.lineCap = 'butt'; c.textBaseline = 'alphabetic';
    // backing glass
    let g = c.createRadialGradient(cx, cy, 20, cx, cy, 168); g.addColorStop(0, 'rgba(6,8,18,.80)'); g.addColorStop(.72, 'rgba(6,8,18,.58)'); g.addColorStop(1, 'rgba(6,8,18,0)'); c.fillStyle = g; c.beginPath(); c.arc(cx, cy, 168, 0, TAU); c.fill();
    // reactor core glow
    c.globalCompositeOperation = 'lighter'; const gl = .12 + pos * .28 + this.pow * .4 + this.kick * .3; g = c.createRadialGradient(cx, cy, 0, cx, cy, 84); g.addColorStop(0, col(H, 60, gl * .55)); g.addColorStop(.55, col(H, 45, gl * .3)); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.beginPath(); c.arc(cx, cy, 84, 0, TAU); c.fill();
    // counter-rotating rotors
    for (let i = 0; i < 3; i++) { const r = 70 + i * 6.5, n = [9, 14, 24][i], d = i % 2 ? -1 : 1, a = this.rot * d * (1.4 - i * .35); c.lineWidth = [3, 2, 1.4][i]; c.strokeStyle = col(H, 66, .28 + pos * .3 + this.pow * .3); c.beginPath(); for (let j = 0; j < n; j++) { const b = a + j / n * TAU; c.moveTo(cx + Math.cos(b) * r, cy + Math.sin(b) * r); c.arc(cx, cy, r, b, b + TAU / n * (.28 + .3 * ((j * 7 + i) % 3) / 2)); } c.stroke(); }
    // plasma drawn inward while the drive is working
    if (this.pow > .02 && this.parts.length < 90) for (let i = 0; i < 3; i++) if (Math.random() < this.pow * 1.2) this.parts.push({ a: A0 + Math.random() * SPAN * Math.max(.03, pos), r: 112, v: 60 + Math.random() * 90, l: 1 }); for (const p of this.parts) { const back = s.sign < 0; p.r += (back ? 1 : -1) * p.v * dt; p.a += dt * 1.6; p.l -= dt * 1.1; const r = back ? 190 - p.r < 40 ? -1 : 66 + (p.r - 112) : p.r; if (r < 40 || r > 112 || p.l <= 0) { p.l = 0; continue; } c.fillStyle = col(H, 76, p.l * .8); c.beginPath(); c.arc(cx + Math.cos(p.a) * r, cy + Math.sin(p.a) * r, 1.3, 0, TAU); c.fill(); } this.parts = this.parts.filter(p => p.l > 0);
    // gear segments
    for (let n = 2; n <= 9; n++) { const a0 = A0 + (n - 2) * SEG, isS = n === selG, ext = isS ? 5 + this.kick * 5 : 0;
      c.strokeStyle = isS ? col(n, 70, .95) : col(n, 60, .26); c.lineWidth = isS ? 2 : 1; c.beginPath(); c.arc(cx, cy, 137 + ext, a0 + GAP / 2, a0 + SEG - GAP / 2); c.stroke(); c.beginPath(); c.arc(cx, cy, 99, a0 + GAP / 2, a0 + SEG - GAP / 2); c.stroke();
      for (let t = 0; t < 10; t++) { const id = (n - 2) * 10 + t + 2, on = this.gp >= id - .05, part = Math.max(0, Math.min(1, this.gp - id + 1)), b = a0 + GAP / 2 + (t + .5) / 10 * (SEG - GAP), me = id === s.sel; const r0 = 104, r1 = 118 + t * 1.5 + ext * .7; c.lineWidth = me ? 5.2 : 4; c.strokeStyle = me ? '#fff' : on ? col(n, 62, .95) : col(n, 50, .13 + part * .3); if (on || me) { c.shadowColor = col(n, 60, 1); c.shadowBlur = me ? 16 : 7; } c.beginPath(); c.moveTo(cx + Math.cos(b) * r0, cy + Math.sin(b) * r0); c.lineTo(cx + Math.cos(b) * r1, cy + Math.sin(b) * r1); c.stroke(); c.shadowBlur = 0; }
      const m = a0 + SEG / 2; c.fillStyle = isS ? '#fff' : col(n, 78, this.gp >= (n - 2) * 10 + 2 ? .95 : .6); c.font = `${isS ? 600 : 500} ${isS ? 15 : 12}px "Inter Variable",system-ui,sans-serif`; c.textAlign = 'center'; c.fillText(n, cx + Math.cos(m) * 92.5 * .985, cy + Math.sin(m) * 92.5 + 4.5);
      c.fillStyle = isS ? '#fff' : col(n, 82, .95); const lr = 151 + ext * .4; this.energy(cx + Math.cos(m) * lr, cy + Math.sin(m) * lr + 3, 9.6, s.segE[n - 2], false, Math.cos(m) > .45 ? 'center' : Math.cos(m) < -.45 ? 'center' : 'center'); }
    // needle: true speed
    const na = A0 + GAP / 2 + Math.min(1, Math.max(0, (this.gp - 1.5) / 80)) * (SPAN - GAP); c.strokeStyle = '#fff'; c.lineWidth = 1.6; c.shadowColor = '#fff'; c.shadowBlur = 10; c.beginPath(); c.moveTo(cx + Math.cos(na) * 95, cy + Math.sin(na) * 95); c.lineTo(cx + Math.cos(na) * 141, cy + Math.sin(na) * 141); c.stroke(); c.shadowBlur = 0; c.globalCompositeOperation = 'source-over';
    // centre
    c.textAlign = 'center'; c.fillStyle = '#fff'; c.shadowColor = '#000'; c.shadowBlur = 8; c.font = `${s.label.length > 3 ? 34 : 58}px Italiana,serif`; c.fillText(s.label, cx, cy + (s.label.length > 3 ? 4 : 8)); c.fillStyle = '#e8e2d6'; this.pow10(cx, cy + 31, 12.5, ...s.speed); c.fillStyle = col(H, 80); c.font = '500 9.5px "Inter Variable",system-ui,sans-serif'; c.textAlign = 'center'; c.fillText(s.mode, cx, cy - 44);
    // open bottom: cost of this gear and of shifting
    c.fillStyle = '#ffd9a0'; this.energy(cx, cy + 105, 14, s.energy, true); c.fillStyle = '#b9b2a6'; c.font = '9px "Inter Variable",system-ui,sans-serif'; c.textAlign = 'center'; c.fillText('from standstill', cx, cy + 118); c.fillStyle = '#e8e2d6'; c.font = '600 12px "Inter Variable",system-ui,sans-serif';
    const br = (t, x) => { c.font = '600 13px "Inter Variable",system-ui,sans-serif'; c.textAlign = 'center'; c.fillStyle = '#ffc27a'; c.fillText(t, x, cy + 148); c.fillStyle = '#e8e2d6'; };
    if (s.down !== null) { br('[', cx - 118); this.energy(cx - 108, cy + 148, 10.5, s.down, true, 'left'); } if (s.up !== null) { br(']', cx + 118); this.energy(cx + 108, cy + 148, 10.5, s.up, true, 'right'); } c.shadowBlur = 0;
  }
}
