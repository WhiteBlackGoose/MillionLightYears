import * as THREE from 'three';
import { add, clock, V } from './glsl.js';
import { FAR } from './core.js';
// log depth for hand-written materials, matching three's own
const LD = m => { const K = (1 / Math.log2(FAR + 1)).toPrecision(9); m.vertexShader = m.vertexShader.replace('void main(){', 'varying float vLW;void main(){').replace(/}\s*$/, 'vLW=gl_Position.w;}'); m.fragmentShader = m.fragmentShader.replace('void main(){', 'varying float vLW;void main(){').replace(/}\s*$/, `gl_FragDepth=log2(max(1.+vLW,1e-6))*${K};}`); return m; };
export const tagLD = g => g.traverse(o => { if (o.material?.isShaderMaterial && !o.material.userData.ld) { o.material.userData.ld = 1; LD(o.material); } });
export function buildShip() {
  const g = new THREE.Group(), glow = { value: V(1, .68, .35) }, thrust = { value: 0 };
  const hullM = new THREE.MeshStandardMaterial({ color: '#2b2a33', metalness: .95, roughness: .26, envMapIntensity: 1.4 });
  const prof = [[0, -4.6], [.16, -3.6], [.42, -1.8], [.62, .2], [.56, 1.6], [.36, 2.6], [.3, 2.8]].map(p => new THREE.Vector2(...p));
  const hull = new THREE.Mesh(new THREE.LatheGeometry(new THREE.SplineCurve(prof).getPoints(40), 32).rotateX(Math.PI / 2).scale(1, .72, 1), hullM); g.add(hull);
  const noz = new THREE.Mesh(new THREE.CircleGeometry(.3, 24).scale(1, .72, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, .8, .35) })); noz.position.z = 2.78; g.add(noz);
  const glass = new THREE.Mesh(new THREE.SphereGeometry(.4, 24, 16).scale(.75, .55, 2.1), new THREE.MeshStandardMaterial({ color: '#0a0d18', metalness: 1, roughness: .06, emissive: '#ff9d4a', emissiveIntensity: .12 })); glass.position.set(0, .34, -1.1); g.add(glass);
  // Crescent sails: a swept sheet, curved upward at the tips
  const sailM = new THREE.ShaderMaterial({ ...add, side: THREE.DoubleSide, uniforms: { uTime: clock, uG: glow, uT: thrust }, vertexShader: 'varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}',
    fragmentShader: `varying vec2 vUv;varying vec3 vN,vV;uniform float uTime,uT;uniform vec3 uG;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));float ribs=smoothstep(.86,1.,abs(fract(vUv.x*9.)-.5)*2.)*.35+smoothstep(.8,1.,abs(fract(vUv.y*4.)-.5)*2.)*.12;
     vec3 ir=.5+.5*cos(6.2832*(f*1.3+vUv.x*.5+vec3(0.,.33,.6)));float flow=pow(.5+.5*sin(vUv.x*14.-uTime*(3.+uT*6.)),8.);
     float e=.12+f*.3+ribs+flow*.2*uT;vec3 c=mix(ir*.6,uG,.55)*e;c+=uG*(smoothstep(.06,0.,vUv.y)*2.2+smoothstep(.97,1.,vUv.x)*1.5);gl_FragColor=vec4(c*smoothstep(0.,.06,vUv.x+.03),1.);}` });
  const tips = [];
  for (const s of [1, -1]) {
    const nx = 28, ny = 8, p = [], uv = [], idx = [];
    for (let i = 0; i <= nx; i++) for (let j = 0; j <= ny; j++) { const u = i / nx, v = j / ny; const x = .45 + u * 5.4, lead = -.6 + u * u * 4.6 - Math.sin(u * 3.14) * .9, chord = 2.5 * Math.pow(1 - u, .75) * (1 - .25 * Math.sin(u * 3.14)) + .04; p.push(s * x, u * u * 1.5 + .06 * Math.sin(v * 3.14) - .05 - v * chord * .42, lead + v * chord); uv.push(u, v); }
    for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) { const a = i * (ny + 1) + j; idx.push(a, a + 1, a + ny + 1, a + 1, a + ny + 2, a + ny + 1); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
    g.add(new THREE.Mesh(geo, sailM));
    const edge = []; for (let i = 0; i <= nx; i++) edge.push(V(...p.slice(i * (ny + 1) * 3, i * (ny + 1) * 3 + 3)));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edge), 50, .055, 6), hullM));
    tips.push(edge[nx].clone());
    const fin = new THREE.Mesh(new THREE.ConeGeometry(.12, 2.1, 5).rotateX(Math.PI / 2).translate(0, 0, 1), hullM); fin.position.set(s * .5, .12, 1.4); fin.rotation.set(.12, s * .16, 0); g.add(fin);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(.34, 1, 24, 12, true).rotateX(Math.PI / 2).translate(0, 0, .5), new THREE.ShaderMaterial({ ...add, side: THREE.DoubleSide, uniforms: { uTime: clock, uG: glow }, vertexShader: 'varying float z;varying vec3 vN,vV;void main(){z=position.z;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}', fragmentShader: 'varying float z;varying vec3 vN,vV;uniform vec3 uG;uniform float uTime;void main(){float f=abs(dot(normalize(vN),normalize(vV)));float e=pow(1.-z,2.)*pow(f,1.5)*(1.+.2*sin(z*40.-uTime*50.));gl_FragColor=vec4(mix(uG,vec3(1.),pow(1.-z,6.)*.4)*e*1.6*smoothstep(0.,.08,z+.02),1.);}' }));
  flame.position.z = 2.75; g.add(flame);
  const lamp = new THREE.PointLight('#ffc890', 8, 30, 1.5); lamp.position.set(0, 3, 6); g.add(lamp);
  return { group: g, tips, glow, thrust, flame };
}
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
    this.hist.forEach((h, k) => { const tip = ship.tips[k].clone().applyQuaternion(ship.group.quaternion); if (!h.length) for (let i = 0; i < this.N; i++) h.push(tip.clone()); if (push) { h.pop(); h.unshift(tip); } else h[0] = tip;
      for (let i = 0; i < this.N; i++) { const a = h[i], b = h[Math.min(i + 1, this.N - 1)], c = h[Math.max(i - 1, 0)]; d.subVectors(b, c); v.copy(inv).negate().sub(a); side.crossVectors(d, v); if (side.lengthSq() < 1e-9) side.set(0, 1, 0); side.normalize().multiplyScalar(.05 * (1 - i / this.N)); const o = (k * this.N + i) * 6; this.pos[o] = a.x + side.x; this.pos[o + 1] = a.y + side.y; this.pos[o + 2] = a.z + side.z; this.pos[o + 3] = a.x - side.x; this.pos[o + 4] = a.y - side.y; this.pos[o + 5] = a.z - side.z; } });
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
  const u = { uCam: { value: V() }, uVel: { value: V() }, uLen: { value: 1 }, uCol: { value: V(1, 1, 1) }, uInt: { value: 0 }, uTime: clock, uSway: { value: 0 } };
  const m = new THREE.LineSegments(g, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, uniforms: u, vertexShader: 'attribute float e;uniform vec3 uCam,uVel;uniform float uLen,uTime,uSway;varying float a;void main(){float S=70.;vec3 q=position*S;q+=sin(uTime*1.3+position.yzx*40.)*uSway;vec3 p=mod(q-uCam,S)-S*.5;float l=length(p);a=smoothstep(S*.5,S*.2,l)*smoothstep(1.,4.,l);p+=uVel*e*uLen;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);a*=1.-e*.6;}', fragmentShader: 'varying float a;uniform vec3 uCol;uniform float uInt;void main(){gl_FragColor=vec4(uCol,a*uInt);}' })); m.frustumCulled = false; m.renderOrder = 20; m.visible = false; return { mesh: m, u };
}
