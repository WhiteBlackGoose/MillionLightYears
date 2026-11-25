import * as THREE from 'three';
import { add, clock, V } from './glsl.js';
import { FAR } from './core.js';
// log depth for hand-written materials, matching three's own
const LD = m => { const K = (1 / Math.log2(FAR + 1)).toPrecision(9); m.vertexShader = m.vertexShader.replace('void main(){', 'varying float vLW;void main(){').replace(/}\s*$/, 'vLW=gl_Position.w;}'); m.fragmentShader = m.fragmentShader.replace('void main(){', 'varying float vLW;void main(){').replace(/}\s*$/, `gl_FragDepth=log2(max(1.+vLW,1e-6))*${K};}`); return m; };
export const tagLD = g => g.traverse(o => { if (o.material?.isShaderMaterial && !o.material.userData.ld) { o.material.userData.ld = 1; LD(o.material); } });
// Camera-facing ribbons from the wing tips
export class Trails {
  constructor(glow) { this.N = 46; this.hist = [[], []]; const N = this.N; this.pos = new Float32Array(N * 2 * 2 * 3); const al = new Float32Array(N * 4), idx = [];
    for (let k = 0; k < 2; k++) for (let i = 0; i < N; i++) { const o = (k * N + i) * 2; al[o] = al[o + 1] = 1 - i / (N - 1); if (i < N - 1) idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('al', new THREE.BufferAttribute(al, 1)); g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({ ...add, side: THREE.DoubleSide, uniforms: { uG: glow }, vertexShader: 'attribute float al;varying float v;void main(){vec4 m=modelViewMatrix*vec4(position,1.);v=al*smoothstep(5.,15.,-m.z);gl_Position=projectionMatrix*m;}', fragmentShader: 'varying float v;uniform vec3 uG;void main(){gl_FragColor=vec4(uG*v*v*1.1,1.);}' })); this.mesh.frustumCulled = false; this.acc = 0; }
  reset() { this.hist = [[], []]; }
  update(ship, camPos, move, dt) { for (const h of this.hist) for (const q of h) q.sub(move); this.mesh.position.copy(ship.group.position);
    const inv = ship.group.position;
    this.acc += dt; const push = this.acc > .016; if (push) this.acc = 0; const d = V(), side = V(), v = V();
    this.hist.forEach((h, k) => { const tip = ship.tips[k].clone().multiplyScalar(ship.group.scale.x).applyQuaternion(ship.group.quaternion); if (!h.length) for (let i = 0; i < this.N; i++) h.push(tip.clone()); if (push) { h.pop(); h.unshift(tip); } else h[0] = tip;
      for (let i = 0; i < this.N; i++) { const a = h[i], b = h[Math.min(i + 1, this.N - 1)], c = h[Math.max(i - 1, 0)]; d.subVectors(b, c); v.copy(inv).negate().sub(a); side.crossVectors(d, v); if (side.lengthSq() < 1e-9) side.set(0, 1, 0); side.normalize().multiplyScalar(.35 * (1 - i / this.N)); const o = (k * this.N + i) * 6; this.pos[o] = a.x + side.x; this.pos[o + 1] = a.y + side.y; this.pos[o + 2] = a.z + side.z; this.pos[o + 3] = a.x - side.x; this.pos[o + 4] = a.y - side.y; this.pos[o + 5] = a.z - side.z; } });
    this.mesh.geometry.attributes.position.needsUpdate = true;
  }
}
export function dustField() {
  const n = 700, p = new Float32Array(n * 6), e = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) { const a = [Math.random(), Math.random(), Math.random()]; p.set([...a, ...a], i * 6); e[i * 2 + 1] = 1; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('e', new THREE.BufferAttribute(e, 1));
  const u = { uCam: { value: V() }, uVel: { value: V() } };
  const m = new THREE.LineSegments(g, new THREE.ShaderMaterial({ ...add, uniforms: u, vertexShader: 'attribute float e;uniform vec3 uCam,uVel;varying float a;void main(){float S=260.;vec3 p=mod(position*S-uCam,S)-S*.5;float l=length(p);a=smoothstep(S*.5,S*.2,l)*smoothstep(8.,30.,l);float v=length(uVel);p-=uVel*e*min(.05,30./max(v,1.));p+=vec3(0.,e*.12,0.);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);a*=1.-e*.8;}', fragmentShader: 'varying float a;void main(){gl_FragColor=vec4(vec3(.65,.75,1.)*a*.4,1.);}' }));
  m.frustumCulled = false; return { mesh: m, u };
}
// Bolts and bursts
export class Sparks {
  constructor() { const N = this.N = 900; this.p = new Float32Array(N * 3); this.c = new Float32Array(N * 3); this.s = new Float32Array(N); this.v = Array.from({ length: N }, () => V()); this.life = new Float32Array(N); this.i = 0;
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.p, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.c, 3)); g.setAttribute('s', new THREE.BufferAttribute(this.s, 1));
    this.mesh = new THREE.Points(g, new THREE.ShaderMaterial({ ...add, vertexColors: true, vertexShader: 'attribute float s;varying vec3 c;void main(){c=color;vec4 m=modelViewMatrix*vec4(position,1.);gl_PointSize=s<=0.?0.:clamp(s*900./-m.z,1.5,60.);gl_Position=s<=0.?vec4(2.,2.,2.,1.):projectionMatrix*m;}', fragmentShader: 'varying vec3 c;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(c*exp(-d*d*4.)*smoothstep(1.,.7,d),1.);}' })); this.mesh.frustumCulled = false; }
  burst(pos, color, n, speed, size = 3) { for (let k = 0; k < n; k++) { const i = this.i = (this.i + 1) % this.N; pos.toArray(this.p, i * 3); this.v[i].randomDirection().multiplyScalar(speed * (Math.random() ** 2 + .1)); this.life[i] = 1; this.s[i] = size * (.4 + Math.random()); this.c.set([color.x * 3, color.y * 3, color.z * 3], i * 3); } }
  update(dt) { for (let i = 0; i < this.N; i++) if (this.life[i] > 0) { this.life[i] -= dt * .6; const v = this.v[i]; v.multiplyScalar(1 - dt * .8); this.p[i * 3] += v.x * dt; this.p[i * 3 + 1] += v.y * dt; this.p[i * 3 + 2] += v.z * dt; this.s[i] *= 1 - dt * 1.1; if (this.life[i] <= 0) this.s[i] = 0; } for (const k of ['position', 'color', 's']) this.mesh.geometry.attributes[k].needsUpdate = true; }
}

export function weatherField() {
  const n = 5200, p = new Float32Array(n * 6), e = new Float32Array(n * 2); for (let i = 0; i < n; i++) { const a = [Math.random(), Math.random(), Math.random()]; p.set([...a, ...a], i * 6); e[i * 2 + 1] = 1; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('e', new THREE.BufferAttribute(e, 1));
  const u = { uCam: { value: V() }, uVel: { value: V() }, uLen: { value: 1 }, uMin: { value: 1 }, uCol: { value: V(1, 1, 1) }, uInt: { value: 0 }, uTime: clock, uSway: { value: 0 } };
  const m = new THREE.LineSegments(g, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: u, vertexShader: 'attribute float e;uniform vec3 uCam,uVel;uniform float uLen,uTime,uSway,uMin;varying float a;void main(){float S=70.;vec3 q=position*S;q+=sin(uTime*1.3+position.yzx*40.)*uSway;vec3 p=mod(q-uCam,S)-S*.5;float l=length(p);a=smoothstep(S*.5,S*.2,l)*smoothstep(uMin,uMin+3.,l);p+=uVel*e*uLen;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);a*=1.-e*.6;}', fragmentShader: 'varying float a;uniform vec3 uCol;uniform float uInt;void main(){gl_FragColor=vec4(uCol,a*uInt);}' })); m.frustumCulled = false; m.renderOrder = 20; m.visible = false; return { mesh: m, u };
}
