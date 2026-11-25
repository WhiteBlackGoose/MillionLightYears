import * as THREE from 'three';
import { mat, REL, PROXY, shared } from './core.js';
import { NOISE, noiseTexture, premul, V, rng } from './glsl.js';
import { makeHeight, faceDir, dirFace, hash01, N } from './height.js';
// ---------- shared worker pool
const pool = Array.from({ length: Math.max(2, Math.min(6, (navigator.hardwareConcurrency || 4) - 2)) }, () => { const w = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' }); const o = { w, n: 0 }; w.onmessage = e => { o.n--; const cb = jobs.get(e.data.id); jobs.delete(e.data.id); cb?.(e.data); }; return o; });
const jobs = new Map(); let jid = 0, queue = [];
export function pump() { queue.sort((a, b) => b.pr - a.pr); while (queue.length) { const o = pool.reduce((a, b) => b.n < a.n ? b : a); if (o.n >= 2) break; const j = queue.shift(); j.node.state = 1; const id = ++jid; jobs.set(id, j.done); o.n++; o.w.postMessage({ id, P: j.P, f: j.node.f, l: j.node.l, x: j.node.x, y: j.node.y }); } queue = []; }
let idx; { const M = N + 2, a = []; for (let j = 0; j < M - 1; j++) for (let i = 0; i < M - 1; i++) { const k = j * M + i; a.push(k, k + 1, k + M, k + 1, k + M + 1, k + M); } idx = new THREE.BufferAttribute(new Uint16Array(a), 1); }

// ---------- atmosphere
export const ATM = /* glsl */`
uniform vec3 uCamP,uTau,uSunDir,uSunCol,uFogC;uniform float uRk,uHk,uTop,uMie,uFog,uHasAtm,uFlash;
vec2 sph(vec3 o,vec3 d,float r){float b=dot(o,d);vec3 p=o-b*d;float q=r*r-dot(p,p);if(q<0.)return vec2(1.,-1.);q=sqrt(q);return vec2(-b-q,-b+q);}
vec3 sunT(vec3 p){float l=length(p),h=max(l-uRk,0.),mu=dot(p/l,uSunDir);float dip=sqrt(2.*h/uRk);return exp(-(uTau+uMie)*exp(-h/uHk)/(max(mu+dip*.4,0.)+.035))*smoothstep(-.05,.07,mu+dip);}
vec3 scatter(vec3 o,vec3 d,float t0,float t1,int n,out vec3 T){float c=dot(d,uSunDir);float pr=.0597*(1.+c*c),pm=.0796*(1.-.58)/pow(max(1.58-1.52*c,.02),1.5);vec3 tau=vec3(0),L=vec3(0);float pv=t0;
 for(int i=0;i<n;i++){float k=(float(i)+1.)/float(n);float nt=mix(t0,t1,t0<=0.?k*k:k);float dt=nt-pv;vec3 p=o+d*(pv+dt*.5);pv=nt;float l=length(p),e=exp(-max(l-uRk,0.)/uHk)*dt/uHk;vec3 b=uTau+uMie;vec3 st=sunT(p);
  vec3 Tr=exp(-(tau+b*e*.5));float day=smoothstep(-.2,.3,dot(p/l,uSunDir));
  L+=Tr*e*(st*(uTau*pr+uMie*pm)+uTau*day*.0045+uMie*day*.003);tau+=b*e;}
 T=exp(-tau);return L*uSunCol*(length(o)>uTop?5.5:9.);}
`;
const CLOUD = /* glsl */`
uniform sampler3D uN;uniform float uCov,uCF;uniform vec3 uCS;uniform float uTime;
float cloudD(vec3 p,float det){vec3 q=p*uCF+uCS+vec3(uTime*.00004,0.,uTime*.00002);vec4 a=texture(uN,q*.18),b=texture(uN,q*.6+(a.rgb-.5)*.5);float n=a.r*.45+b.r*.4+(b.g-.4)*.12;
 if(det>0.){vec4 c=texture(uN,q*3.1+(b.rgb-.5)*.5);n+=(c.r-.5)*.26;if(det>1.){vec4 e=texture(uN,q*17.+(c.rgb-.5)*.4),f=texture(uN,q*83.+(e.rgb-.5)*.4);n+=(e.r-.5)*.15+(f.r-.5)*.08;}}
 return smoothstep(.62-uCov*.34,.80-uCov*.24,n+.12);}
`;
// ---------- the body
export class Terrain {
  constructor(b) { // b: { P, pos, R, pal, atm, sunDir, sunCol, ... }
    this.b = b; this.hf = makeHeight(b.P); this.group = new THREE.Group(); this.roots = []; this.frame = 0; this.count = 0;
    this.maxL = Math.max(1, Math.ceil(Math.log2(b.R * 1.5708 / (N - 1) / 1.1)));
    const a = b.atm, p = b.pal;
    this.u = { uN: { value: noiseTexture() }, uCamP: { value: V() }, uTau: { value: a ? a.tau : V() }, uMie: { value: a ? a.mie : 0 }, uSunDir: { value: b.sunDir }, uSunCol: { value: b.sunCol }, uRk: { value: b.R / 1e3 }, uHk: { value: a ? a.H / 1e3 : 1 }, uTop: { value: a ? (b.R + a.top) / 1e3 : 0 }, uHasAtm: { value: a ? 1 : 0 }, uFog: { value: 0 }, uFogC: { value: V() }, uFlash: { value: 0 },
      uC0: { value: p[0] }, uC1: { value: p[1] }, uC2: { value: p[2] }, uC3: { value: p[3] }, uSnow: { value: V(p[4].x, p[4].y, p[4].z) }, uWater: { value: b.water || V() }, uSea: { value: b.P.sea ? 1 : 0 }, uLava: { value: b.lava ? 1 : 0 }, uGlow: { value: b.glow || V() }, uHs: { value: b.hs }, uSnowL: { value: b.snowLine ?? 9 }, uWetk: { value: b.wet || 0 }, uLamp: { value: V() }, uLampI: { value: 0 },
      uCov: { value: a ? a.cloud : 0 }, uCF: { value: a?.cloudF || 3 }, uCS: { value: V(b.P.seed % 13, b.P.seed % 7, b.P.seed % 5) } };
    this.mat = mat({ uniforms: this.u, vertexShader: REL + /* glsl */`attribute vec4 aux;attribute vec3 tile;varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;
      void main(){vec3 p=position+modelMatrix[3].xyz;vP=p;vN=normal;vT=tile;vA=aux;vec3 q=aberr(p);vW=q;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*q,1.);vLW=gl_Position.w;}`,
      fragmentShader: NOISE + REL + 'precision highp sampler3D;\n' + ATM + CLOUD + /* glsl */`
      varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;uniform vec3 uC0,uC1,uC2,uC3,uSnow,uWater,uGlow,uLamp;uniform float uSea,uLava,uHs,uSnowL,uWetk,uLampI;
      void main(){float D=length(vP);vec3 pk=uCamP+vP*.001;vec3 up=normalize(pk),N=normalize(vN),Vw=-vP/D;
       float f1=smoothstep(60000.,9000.,D),f2=smoothstep(5000.,600.,D),f3=smoothstep(350.,40.,D),f4=smoothstep(60.,10.,D);
       vec4 m0=texture(uN,up*9.),n1=texture(uN,vT/512.),n2=texture(uN,vT/64.),n3=texture(uN,vT/8.),n4=texture(uN,vT/1.);
       float big=texture(uN,up*41.).r-.5;
       float det=(m0.r-.5)*.5+big*.4+(n1.r-.5)*.6*f1+(n2.r-.5)*.5*f2+(n3.r-.5)*.5*f3+(n4.r-.5)*.35*f4;
       float slope=1.-dot(N,up);float h=vA.x/uHs+det*.10;float moist=clamp(vA.y+det*.25,0.,1.);
       vec3 alb=mix(uC0,uC1,smoothstep(.32,.68,moist+(m0.g-.4)*.4));
       alb=mix(alb,uC2,smoothstep(.10,.55,h));
       alb=mix(alb,uC3,smoothstep(.06,.28,slope+det*.05+max(h,0.)*.05));
       float snow=smoothstep(uSnowL-.06,uSnowL+.10,vA.w+h*.42+det*.18)*smoothstep(.5,.2,slope);
       alb=mix(alb,uSnow,snow);
       alb*=.9+det*.6;
       if(uSea>.5){float beach=smoothstep(uHs*.006+6.,0.,vA.x+det*4.)*step(0.,vA.x);alb=mix(alb,mix(uC2,vec3(.72,.6,.42),.6),beach*(1.-uLava)*.8);}
       // bump from the detail field
       vec3 bp=((texture(uN,(vT+vec3(1.2,0,0))/8.).rgb-n3.rgb)*f3*1.1+(texture(uN,(vT+vec3(0,.5,.3))/1.).rgb-n4.rgb)*f4*.5+(texture(uN,(vT+vec3(5.,5.,0))/64.).rgb-n2.rgb)*f2*.8+(texture(uN,(vT+vec3(0.,40.,40.))/512.).rgb-n1.rgb)*f1*.5);
       vec3 Nb=normalize(N+(bp-up*dot(bp,up))*.5);
       float water=uSea*smoothstep(.0,-1.2,vA.x);float spec=0.;vec3 emi=vec3(0);
       vec3 st=uHasAtm>.5?sunT(pk):vec3(smoothstep(-.015,.03,dot(up,uSunDir)));
       float day=smoothstep(-.18,.3,dot(up,uSunDir));
       vec3 skyc=uHasAtm>.5?(uTau*.9+uMie*.5)/(.35+dot(uTau,vec3(.33))+uMie)*day*.38:vec3(0);
       if(water>.01){float tm=uTime;vec3 wn=(texture(uN,vT/128.+vec3(tm*.006,0,tm*.004)).rgb-.5)*.06*f2+(texture(uN,vT/16.-vec3(tm*.03,0,tm*.02)).rgb-.5)*.12*f3+(texture(uN,vT/512.+tm*.002).rgb-.5)*.05*f1;
        vec3 Wn=normalize(up+wn);float depth=-vA.x;
        if(uLava>.5){float c=texture(uN,vT/512.+vec3(0,tm*.0015,0)).g*f1+texture(uN,vT/64.+vec3(tm*.004,0,0)).g*.7*f2+texture(uN,up*60.).g*(1.-f1);alb=mix(alb,vec3(.02,.012,.01),water);c=clamp((c/(.45+f1*.55+f2*.5)-.42)*2.6,0.,1.);emi+=uGlow*(pow(c,3.)*1.5+.015)*water*(.75+.25*sin(tm*.7+n1.r*20.));}
        else{vec3 wc=mix(uWater*.75,uWater*.12,smoothstep(0.,uHs*.05+25.,depth));float fr=.03+.97*pow(1.-max(dot(Wn,Vw),0.),5.);
         vec3 H=normalize(uSunDir+Vw);float rough=mix(160.,900.,f2);spec=water*pow(max(dot(Wn,H),0.),mix(140.,420.,f2))*1.1;
         float foam=smoothstep(2.6,0.,depth)*smoothstep(.45,.62,n3.r*f3+n2.r*(1.-f3)+.06*sin(tm+vA.x*3.));
         alb=mix(alb,mix(wc,vec3(.9),foam*.7*f2),water);Nb=normalize(mix(Nb,Wn,water));emi+=skyc*fr*water*(1.-foam)*1.1;}}
       float cs=1.;if(uCov>.01){cs=1.-.75*cloudD(normalize(up+uSunDir*.0012),1.)*smoothstep(0.,.1,dot(up,uSunDir));}
       float nl=max(dot(Nb,uSunDir),0.);
       vec3 lit=uSunCol*st*nl*cs*1.65+skyc*(.55+.45*dot(Nb,up))*mix(.6,1.,cs)+vec3(.010,.012,.018);
       lit+=uLampI*(1.-.92*day)*vec3(1.,.85,.65)/(1.+dot(vP-uLamp,vP-uLamp)/500.)*max(dot(Nb,normalize(uLamp+up*6.-vP)),0.)*1.6;
       lit+=uFlash*vec3(.6,.65,.9);
       if(uLava>.5&&water<.5){float g=smoothstep(uHs*.05+40.,0.,vA.x);lit+=uGlow*g*.12;}
       vec3 c=alb*lit+spec*uSunCol*st*cs+emi;
       c+=uGlow*(1.-uLava)*pow(max(n2.g*f2*.6+n1.g*f1*.5,0.),6.)*1.2*(1.-day)*(1.-water);
       if(uHasAtm>.5){float t1=D*.001;vec2 a=sph(uCamP,-Vw,uTop);float t0=max(a.x,0.);vec3 T;if(a.y>t0&&t1>t0){vec3 L=scatter(uCamP,-Vw,t0,t1,6,T);c=c*T+L;}
        float fg=1.-exp(-pow(D*uFog,1.2));c=mix(c,uFogC,fg);}
       gl_FragColor=vec4(doppler(max(c,0.),-Vw),1.);gl_FragDepth=logd(vLW);}` });
    if (a) this.makeAir(a);
  }
  makeAir(a) {
    const b = this.b, geo = new THREE.IcosahedronGeometry(1, 12), px = { uOff: { value: V() }, uScale: { value: (b.R + a.top) * 1.02 } }; this.px = px;
    const u = { ...this.u, ...px };
    const air = new THREE.Mesh(geo, mat({ ...premul, side: THREE.BackSide, uniforms: u, vertexShader: PROXY, fragmentShader: NOISE + REL + ATM + /* glsl */`varying vec3 vP;
      void main(){vec3 d=unab(normalize(vP));vec2 a=sph(uCamP,d,uTop);if(a.y<=0.||a.x>a.y)discard;vec2 g=sph(uCamP,d,uRk*.998);float t0=max(a.x,0.),t1=a.y;bool hit=g.y>0.&&g.x>0.;if(hit)discard;
       vec3 T;vec3 L=scatter(uCamP,d,t0,t1,14,T);
       vec3 up=normalize(uCamP);float alt=length(uCamP)-uRk;float mu=dot(d,uSunDir);if(!hit)L+=uSunCol*sunT(uCamP)*pow(max(mu,0.),400.)*uMie*3.*exp(-alt/uHk);
       float fg=uFog>0.?1.-exp(-uFog*900./max(dot(d,up),.02)):0.;L=mix(L,uFogC,fg);
       float lum=dot(L,vec3(.3,.5,.2));float hide=1.-exp(-lum*22.);float tr=dot(T,vec3(.333))*(1.-hide)*(1.-fg);
       L+=uFlash*vec3(.25,.28,.4)*exp(-alt/uHk);
       gl_FragColor=vec4(doppler(L,d),1.-tr);gl_FragDepth=.99999;}` })); air.renderOrder = 10; air.frustumCulled = false; this.group.add(air);
    if (a.cloud > .02) { const cl = new THREE.Mesh(geo, mat({ ...premul, side: THREE.BackSide, uniforms: { ...u, uCA: { value: (b.R + a.cloudH) / 1e3 } }, vertexShader: PROXY, fragmentShader: NOISE + REL + 'precision highp sampler3D;\n' + ATM + CLOUD + /* glsl */`varying vec3 vP;uniform float uCA;
      void main(){vec3 d=unab(normalize(vP));float alt=length(uCamP);vec2 a=sph(uCamP,d,uCA);if(a.y<=0.||a.x>a.y)discard;float t=a.x>0.?a.x:a.y;vec3 p=uCamP+d*t;vec3 n=p/uCA;
       vec2 g=sph(uCamP,d,uRk*.999);if(a.x<=0.&&g.y>0.&&g.x>0.&&alt<uCA){if(g.x<t)discard;}
       float det=t<uRk*.05?2.:1.;float den=cloudD(n,det);if(den<.004)discard;
       float s1=cloudD(normalize(n+uSunDir*.0022),det),s2=cloudD(normalize(n+uSunDir*.0007),det);
       float nl=dot(n,uSunDir);vec3 st=sunT(p);
       float sh=exp(-s1*1.1-s2*.6*den);bool below=alt<uCA;float thick=below?mix(1.,.28,smoothstep(.1,1.,den)):1.;
       float fwd=pow(max(dot(d,uSunDir),0.),8.)*.8*(1.-den);
       vec3 tint=uCloudTint;
       vec3 c=tint*(uSunCol*st*(sh*.95+fwd)*thick*2.3+(uTau*.5+uMie*.3+.05)/(.5+dot(uTau,vec3(.33))+uMie)*smoothstep(-.15,.3,nl)*.45*thick+vec3(.004)+uFlash*vec3(1.1,1.2,1.6)*den);
       float A=den*.97;A*=smoothstep(0.,uHk*.05,abs(alt-uCA));
       float graz=abs(dot(d,n));A*=smoothstep(0.,.03,graz);
       vec2 tp=sph(uCamP,d,uTop);vec3 T;float t0=max(tp.x,0.);vec3 L=scatter(uCamP,d,t0,max(t,t0),5,T);c=c*T+L;
       float fg=1.-exp(-pow(t*1000.*uFog*.4,1.2));c=mix(c,uFogC,fg);
       gl_FragColor=vec4(doppler(c*A,d),A);gl_FragDepth=logd(t*1000.*max(dot(normalize(vP),uFwd),1e-6));}`.replace('tint=uCloudTint', `tint=vec3(${a.cloudC.x.toFixed(3)},${a.cloudC.y.toFixed(3)},${a.cloudC.z.toFixed(3)})`) })); cl.renderOrder = 12; cl.frustumCulled = false; this.group.add(cl); this.cloud = cl; }
  }
  node(f, l, x, y) { const n = 1 << l, o = faceDir(f, -1 + (x + .5) * 2 / n, -1 + (y + .5) * 2 / n, [0, 0, 0]); return { f, l, x, y, dir: V(o[0], o[1], o[2]), size: this.b.R * 1.5708 / n, state: 0, kids: null, mesh: null, used: 0 }; }
  request(nd, pr) { if (nd.state) return; queue.push({ node: nd, pr, P: this.b.P, done: d => { if (this.dead) return; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3)); g.setAttribute('aux', new THREE.BufferAttribute(d.aux, 4)); g.setAttribute('tile', new THREE.BufferAttribute(d.tile, 3)); g.setIndex(idx); const m = nd.mesh = new THREE.Mesh(g, this.mat); m.frustumCulled = false; m.matrixAutoUpdate = false; m.matrixWorldAutoUpdate = false; m.visible = false; this.group.add(m); nd.state = 2; nd.used = this.frame; nd.hmax = d.hmax; nd.hmin = d.hmin; this.count++; } }); }
  // cam: camera position relative to body centre (metres, double)
  update(cam, fwd, pxPerRad, cosFov, inv) {
    this.frame++; const d = cam.length(); this.u.uCamP.value.copy(cam).multiplyScalar(.001); if (this.px) this.px.uOff.value.copy(cam).multiplyScalar(-1);
    if (!this.roots.length) for (let f = 0; f < 6; f++) this.roots.push(this.node(f, 0, 0, 0));
    const R = this.b.R, hz = Math.acos(Math.min(1, (R + Math.min(0, this.b.hMin || 0)) / Math.max(d, R))) + Math.acos(R / (R + this.b.hMax)), cd = cam.clone().divideScalar(d), t = V(); let ready = true, tris = 0;
    const visit = nd => {
      nd.used = this.frame; if (nd.state !== 2) { this.request(nd, 10); ready = false; return; }
      const ang = Math.acos(Math.max(-1, Math.min(1, cd.dot(nd.dir)))), half = nd.size * .75 / R; if (ang - half > hz && nd.l > 0) return;
      t.copy(nd.dir).multiplyScalar(R + (nd.hmax + nd.hmin) / 2).sub(cam); const cd2 = t.length(), rad = nd.size * .75 + (nd.hmax - nd.hmin) / 2, dd = Math.max(cd2 - rad, nd.size * .03, 1);
      if (nd.l > 0 && cd2 > rad * 1.3 && cosFov > -1) { const c = t.dot(fwd) / cd2, s = rad / cd2; if (Math.acos(Math.max(-1, Math.min(1, c))) - Math.asin(Math.min(1, s)) > cosFov) return; }
      const px = nd.size / dd * pxPerRad;
      if (px > 300 && nd.l < this.maxL) { if (!nd.kids) nd.kids = [0, 1, 2, 3].map(i => this.node(nd.f, nd.l + 1, nd.x * 2 + (i & 1), nd.y * 2 + (i >> 1))); let ok = true; for (const k of nd.kids) { k.used = this.frame; if (k.state !== 2) { ok = false; this.request(k, px / (1 + nd.l * .02)); } } if (ok) { for (const k of nd.kids) visit(k); return; } }
      this.show(nd, cam); tris++;
    };
    for (const m of this.vis || []) m.visible = false; this.vis = []; for (const r of this.roots) visit(r);
    this.ready = ready; this.drawn = tris; if (this.frame % 120 === 0) { for (const r of this.roots) this.prune(r); }
  }
  show(nd, cam) { const m = nd.mesh, R = this.b.R, e = m.matrixWorld.elements; e[12] = nd.dir.x * R - cam.x; e[13] = nd.dir.y * R - cam.y; e[14] = nd.dir.z * R - cam.z; m.visible = true; this.vis.push(m); }
  drop(nd) { if (nd.mesh) { this.group.remove(nd.mesh); const g = nd.mesh.geometry; g.setIndex(null); g.dispose(); nd.mesh = null; this.count--; } nd.state = 0; if (nd.kids) { nd.kids.forEach(k => this.drop(k)); nd.kids = null; } }
  prune(nd) { if (!nd.kids) return; if (nd.kids.every(k => this.frame - k.used > 400 && k.state !== 1)) { nd.kids.forEach(k => this.drop(k)); nd.kids = null; } else nd.kids.forEach(k => this.prune(k)); }
  height(dir) { const h = this.hf(dir.x, dir.y, dir.z, 2); return this.b.P.sea ? Math.max(0, h) : h; }
  raw(dir) { return this.hf(dir.x, dir.y, dir.z, 2); }
  normal(dir, e = 4) { const a = V().crossVectors(dir, Math.abs(dir.y) < .9 ? V(0, 1, 0) : V(1, 0, 0)).normalize(), b = V().crossVectors(dir, a), p = q => { const u = q.clone().normalize(); return u.multiplyScalar(this.b.R + this.height(u)); }, k = e / this.b.R; const o = p(dir), x = p(dir.clone().addScaledVector(a, k)).sub(o), y = p(dir.clone().addScaledVector(b, k)).sub(o); const n = x.cross(y).normalize(); return n.dot(dir) < 0 ? n.negate() : n; }
  dispose() { this.dead = true; this.roots.forEach(r => this.drop(r)); this.group.traverse(o => { if (o.material) o.material.dispose(); }); this.mat.dispose(); }
}
// ---------- rocks, crystals and plants scattered around the ship
function blob(seed, d = 2) { const g = new THREE.IcosahedronGeometry(1, d), p = g.attributes.position, r = rng(seed), k = Array.from({ length: 5 }, () => [r.dir(), r.range(.3, .8)]), v = V(); for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).normalize(); let h = 1; for (const [a, w] of k) { const c = v.dot(a); if (c > 1 - w) h -= .7 * (c - 1 + w); } p.setXYZ(i, v.x * h, v.y * h * .75, v.z * h); } g.computeVertexNormals(); return g; }
function plant(seed, style) { const r = rng(seed), P = [], Nn = [], push = (g, m) => { g = g.toNonIndexed(); g.applyMatrix4(m); P.push(...g.attributes.position.array); Nn.push(...g.attributes.normal.array); }, M = (x, y, z, rx = 0, ry = 0, rz = 0) => new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)).setPosition(x, y, z);
  if (style === 0) { push(new THREE.CylinderGeometry(.06, .14, 1.4, 6), M(0, .7, 0)); for (let i = 0; i < 4; i++) push(new THREE.ConeGeometry(.75 - i * .15, .8, 8), M(0, 1 + i * .45, 0)); }
  else if (style === 1) { push(new THREE.CylinderGeometry(.05, .16, 2.2, 6), M(0, 1.1, 0, .08)); for (let i = 0; i < 5; i++) push(new THREE.SphereGeometry(r.range(.35, .6), 8, 6).scale(1, .6, 1), M(r.range(-.5, .5), 2.1 + r.range(-.2, .4), r.range(-.5, .5))); }
  else { for (let i = 0; i < 7; i++) { const a = i / 7 * 6.28; push(new THREE.ConeGeometry(.09, r.range(1.4, 2.6), 5).translate(0, 1, 0), M(Math.cos(a) * .1, 0, Math.sin(a) * .1, Math.sin(a) * .5, 0, -Math.cos(a) * .5)); } push(new THREE.SphereGeometry(.22, 8, 6), M(0, .3, 0)); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(Nn, 3)); return g; }
export class Props {
  constructor() { this.group = new THREE.Group(); this.group.visible = false; this.kinds = []; }
  setup(body) { for (const k of this.kinds) { this.group.remove(k.m); k.m.geometry.dispose(); k.m.material.dispose(); k.m.dispose(); } this.kinds = []; this.body = body; this.key = ''; if (!body) return;
    const s = body.P.seed, r = rng(s), add = (geo, color, o = {}) => { const m = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color, roughness: .9, flatShading: true, envMapIntensity: .2, ...o.mat }), 700); m.frustumCulled = false; m.count = 0; this.group.add(m); this.kinds.push({ m, ...o }); };
    const c3 = v => new THREE.Color(v.x, v.y, v.z); add(blob(s), c3(body.pal[3]), { p: .45, s: [.25, 3.2], pow: 5 }); add(blob(s + 1), c3(body.pal[2]), { p: .12, s: [.4, 6], pow: 6 });
    if (body.crystals) add(new THREE.ConeGeometry(.22, 2, 5).translate(0, .8, 0), c3(body.glow || V(.6, .8, 1)), { p: .12, s: [.6, 4], pow: 4, tilt: .7, mat: { emissive: c3(body.glow || V(.3, .5, .8)), emissiveIntensity: .7, roughness: .2 } });
    if (body.plants) { add(plant(s, s % 3), c3(body.plantC), { p: .55, s: [.7, 3.4], pow: 3, land: 1, wet: 1 }); add(plant(s + 1, (s + 1) % 3), c3(body.plantC).offsetHSL(.06, 0, .04), { p: .25, s: [.4, 1.6], pow: 2, land: 1, wet: 1 }); } }
  update(cam, body, alt) { const on = body && body.terrain && alt < 500; this.group.visible = !!on; if (!on) return; if (this.body !== body) this.setup(body);
    const R = body.R, c = cam.clone().normalize(), [f, u, v] = dirFace(c.x, c.y, c.z), n = Math.max(8, Math.round(R * 1.5708 / 9)), ci = Math.floor((u + 1) / 2 * n), cj = Math.floor((v + 1) / 2 * n), key = f + ',' + ci + ',' + cj;
    if (key !== this.key && (!this.key || performance.now() - this.t > 120)) { this.key = key; this.t = performance.now(); this.base = c.multiplyScalar(R + body.terrain.height(c)); for (const k of this.kinds) k.n = 0; const d = [0, 0, 0], T = body.terrain, M = new THREE.Matrix4(), Q = new THREE.Quaternion(), Q2 = new THREE.Quaternion(), up = V(), RR = 13, o = {}, Y = V(0, 1, 0);
      for (let a = -RR; a <= RR; a++) for (let b = -RR; b <= RR; b++) { const i = ci + a, j = cj + b; if (i < 0 || j < 0 || i >= n || j >= n || a * a + b * b > RR * RR) continue; let h = null;
        this.kinds.forEach((k, q) => { const H = t => hash01(i, j, q * 10 + t, body.P.seed + f); if (H(0) > k.p || k.n >= 700) return; faceDir(f, -1 + (i + H(1)) * 2 / n, -1 + (j + H(2)) * 2 / n, d); up.set(d[0], d[1], d[2]); h = T.hf(d[0], d[1], d[2], 2, o); if (body.P.sea && h < (k.land ? 3 : .5)) return; if (k.wet && (o.moist < .42 || h > body.hs * .45)) return; const s = k.s[0] + (k.s[1] - k.s[0]) * Math.pow(H(3), k.pow); Q.setFromUnitVectors(Y, up); Q2.setFromAxisAngle(V(k.tilt ? H(5) - .5 : 0, 1, k.tilt ? H(6) - .5 : 0).normalize(), H(4) * 6.28); Q.multiply(Q2); M.compose(up.clone().multiplyScalar(R + h - s * .08).sub(this.base), Q, V(s, s * (k.wet ? 1 + H(7) * .6 : 1), s)); k.m.setMatrixAt(k.n++, M); }); }
      for (const k of this.kinds) { k.m.count = k.n; k.m.instanceMatrix.needsUpdate = true; } }
    if (this.base) this.group.position.copy(this.base).sub(cam); }
}
