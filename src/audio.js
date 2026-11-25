const CH = { title: [98, 146.8, 220, 277.2], star: [110, 164.8, 246.9, 277.2], binary: [98, 146.8, 185, 293.7], nebula: [130.8, 196, 246.9, 329.6], pulsar: [92.5, 138.6, 207.7, 311.1], blackhole: [55, 82.4, 116.5, 174.6], quasar: [73.4, 110, 164.8, 246.9] };
const PENTA = [440, 493.9, 587.3, 659.3, 784, 880, 987.8];
export class Audio {
  start() {
    if (this.x) { this.x.resume(); return; }
    const x = this.x = new (window.AudioContext || window.webkitAudioContext)(), out = this.out = x.createGain(); out.gain.value = .5; const comp = x.createDynamicsCompressor(); out.connect(comp).connect(x.destination);
    const len = x.sampleRate * 5, ir = x.createBuffer(2, len, x.sampleRate); for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3; }
    const rev = this.rev = x.createConvolver(); rev.buffer = ir; const rg = x.createGain(); rg.gain.value = .55; rev.connect(rg).connect(out);
    const f = this.f = x.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700; f.Q.value = .6; const pg = x.createGain(); pg.gain.value = .075; f.connect(pg); pg.connect(out); pg.connect(rev);
    const lfo = x.createOscillator(), lg = x.createGain(); lfo.frequency.value = .05; lg.gain.value = 300; lfo.connect(lg).connect(f.frequency); lfo.start();
    this.osc = CH.title.map((h, i) => [-1, 1].map(s => { const o = x.createOscillator(); o.type = i ? 'triangle' : 'sawtooth'; o.frequency.value = h; o.detune.value = s * (5 + i * 2); o.connect(f); o.start(); return o; }));
    const nb = x.createBuffer(1, x.sampleRate * 2, x.sampleRate), nd = nb.getChannelData(0); for (let i = 0, l = 0; i < nd.length; i++) nd[i] = (l = l * .96 + (Math.random() * 2 - 1) * .04) * 6; this.noise = nb;
    const n = x.createBufferSource(); n.buffer = nb; n.loop = true; this.ef = x.createBiquadFilter(); this.ef.frequency.value = 180; this.eg = x.createGain(); this.eg.gain.value = 0; n.connect(this.ef).connect(this.eg).connect(out); n.start();
    this.next = x.currentTime + 4;
  }
  chord(k) { if (!this.x) return; (CH[k] || CH.star).forEach((h, i) => this.osc[i].forEach(o => o.frequency.setTargetAtTime(h, this.x.currentTime, 1.2))); this.k = k; }
  tone(freq, dur = 1.5, vol = .1, type = 'sine', to) { if (!this.x) return; const x = this.x, t = x.currentTime, o = x.createOscillator(), g = x.createGain(); o.type = type; o.frequency.setValueAtTime(freq, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur); o.connect(g); g.connect(this.out); g.connect(this.rev); o.start(); o.stop(t + dur + .05); }
  boom(vol = .5, f = 500) { if (!this.x) return; const x = this.x, t = x.currentTime, s = x.createBufferSource(), l = x.createBiquadFilter(), g = x.createGain(); s.buffer = this.noise; l.frequency.setValueAtTime(f, t); l.frequency.exponentialRampToValueAtTime(50, t + 1.2); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + 1.4); s.connect(l).connect(g); g.connect(this.out); g.connect(this.rev); s.start(); s.stop(t + 1.5); }
  zap() { this.tone(1300, .18, .05, 'triangle', 300); }
  chime(i = 0) { this.tone(PENTA[i % 7], 2.5, .12); this.tone(PENTA[i % 7] * 2, 1.6, .03); }
  fanfare() { [0, 2, 4, 6].forEach((n, i) => setTimeout(() => this.chime(n), i * 130)); }
  warp() { this.tone(60, 3, .25, 'sawtooth', 900); this.boom(.5, 2500); }
  update(speed, muf) { if (!this.x) return; const t = this.x.currentTime; this.eg.gain.setTargetAtTime(Math.min(.3, speed / 3800), t, .12); this.ef.frequency.setTargetAtTime(120 + Math.min(1600, speed * .5), t, .2); this.f.Q.setTargetAtTime(muf ? 6 : .6, t, .5);
    if (t > this.next) { this.next = t + 2.5 + Math.random() * 6; const c = CH[this.k] || CH.title; this.tone(c[Math.random() * c.length | 0] * (Math.random() < .5 ? 4 : 2), 4, .03); } }
  mute() { if (!this.x) return; this.m = !this.m; this.out.gain.setTargetAtTime(this.m ? 0 : .5, this.x.currentTime, .1); return this.m; }
}
