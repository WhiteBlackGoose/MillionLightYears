// Stars, gas giants, rings, pulsars and black holes: analytic, in camera-relative metres.
import * as THREE from 'three';
import { mat, REL, PROXY, SPRITE, shared } from './core.js';
import { NOISE, add, premul, V, C } from './glsl.js';
import { skyU, SKYFN } from './sky.js';
import { ATM } from './terrain.js';
const ico = new THREE.IcosahedronGeometry(1, 10), quad = new THREE.PlaneGeometry(2, 2);
const HIT = `vec2 hit(vec3 o,vec3 d,float r){float b=dot(o,d);vec3 p=o-b*d;float q=r*r-dot(p,p);if(q<0.)return vec2(1.,-1.);q=sqrt(q);return vec2(-b-q,-b+q);}\n`;
const proxy = (u, scale, fs, o = {}) => { const m = new THREE.Mesh(ico, mat({ side: THREE.BackSide, depthWrite: false, ...o, uniforms: { uOff: { value: V() }, uScale: { value: scale }, ...u }, vertexShader: PROXY, fragmentShader: fs })); m.frustumCulled = false; return m; };
export function makeStar(b) {
  const g = new THREE.Group(), off = { value: V() }, camL = { value: V() }, col = V(b.color.r, b.color.g, b.color.b); b.group = g;
  const s = proxy({ uOff: off, uCamL: camL, uC: { value: col }, uR: { value: b.R } }, b.R * 1.05, NOISE + REL + HIT + /* glsl */`varying vec3 vP;uniform vec3 uCamL,uC;uniform float uR,uTime;
   void main(){vec3 d=unab(normalize(vP));vec2 h=hit(uCamL,d,1.);float t=h.x;if(h.y<0.||h.x>h.y)discard;if(t<0.)t=0.;vec3 p=normalize(uCamL+d*t);float mu=max(-dot(p,d),0.),tm=uTime*.04;
    float near=smoothstep(1.5,.1,t);float w=fbm(p*3.+tm,3);float g=ridge(p*13.+w*2.+vec3(0,tm*3.,0),3)+near*(ridge(p*60.+w*4.+tm*4.,3)-.3)*.9;float big=fbm(p*4.5+w*3.-tm,4);float spot=smoothstep(.2,.42,fbm(p*2.2+31.,3));
    float f=smoothstep(.28,.95,g)*.75+.4+big*.9;f*=1.-spot*.75;vec3 hot=mix(uC,vec3(1),.18),c=mix(uC*uC*uC*.25,hot*1.9,clamp(f*f*.9,0.,1.4));c*=.45+.75*pow(mu,.6);c+=uC*pow(1.-mu,3.)*2.2;
    gl_FragColor=vec4(doppler(c*.75,d),1.);gl_FragDepth=logd(t*uR*dot(normalize(vP),uFwd));}`, { depthWrite: true });
  const cor = new THREE.Mesh(quad, mat({ ...add, uniforms: { uOff: off, uScale: { value: b.R * 7 }, uC: { value: col } }, vertexShader: SPRITE, fragmentShader: NOISE + REL + /* glsl */`varying vec2 vUv;varying float vLW;uniform float uTime;uniform vec3 uC;
   void main(){float r=length(vUv)*7.;if(r>7.)discard;vec2 d=vUv/max(length(vUv),1e-4);float n=fbm(vec3(d*3.2,r*.35-uTime*.12),4),ray=fbm(vec3(d*9.,uTime*.06),3);float k=max(r-.97,0.);float a=exp(-k*(2.4-n*2.4-ray*1.2))*.6+.12/(1.+k*k*3.)+.08/(1.+k*9.);
    float prom=smoothstep(.12,.42,fbm(vec3(d*5.+2.,uTime*.03),3))*exp(-k*k*28.)*(.6+.8*ridge(vec3(d*14.,r*9.-uTime*.5),3));a*=smoothstep(7.,2.5,r);
    gl_FragColor=vec4((uC*a+mix(uC,vec3(1.,.25,.12),.6)*prom*1.6)*smoothstep(.8,1.,r),1.);gl_FragDepth=logd(vLW);}` })); cor.frustumCulled = false; cor.renderOrder = -6;
  g.add(s, cor); b.sync = cam => { off.value.copy(b.pos).sub(cam); camL.value.copy(off.value).multiplyScalar(-1 / b.R); cor.visible = off.value.length() > b.R * 1.02; s.material.side = THREE.BackSide; };
}
export function makeGas(b) {
  const g = new THREE.Group(), off = { value: V() }, a = b.atm; b.group = g;
  const u = { uOff: off, uCamP: { value: V() }, uTau: { value: a.tau }, uMie: { value: a.mie }, uSunDir: { value: b.sunDir }, uSunCol: { value: b.sunCol }, uRk: { value: b.R / 1e3 }, uHk: { value: a.H / 1e3 }, uTop: { value: (b.R + a.top) / 1e3 }, uHasAtm: { value: 1 }, uFog: { value: 0 }, uFogC: { value: V() }, uFlash: { value: 0 }, uSeed: { value: b.seed % 50 }, uA: { value: b.pal[0] }, uB: { value: b.pal[1] }, uD: { value: b.pal[2] }, uRing: { value: b.ring ? 1 : 0 }, uUp: { value: b.up } }; b.u = u;
  g.add(proxy(u, b.R * 1.02, NOISE + REL + ATM + RINGD + /* glsl */`varying vec3 vP;uniform float uSeed,uTime,uRing;uniform vec3 uA,uB,uD,uUp;
   void main(){vec3 d=unab(normalize(vP));vec2 h=sph(uCamP,d,uRk);float t=h.x;if(h.y<=0.||h.x>h.y)discard;if(t<0.)t=.02;vec3 pk=uCamP+d*t,N=normalize(pk),q0;
    vec3 X=normalize(cross(uUp,vec3(.31,.2,.9))),Z=cross(X,uUp);vec3 p=vec3(dot(N,X),dot(N,uUp),dot(N,Z));vec3 q=p+uSeed;float lat=p.y,tt=uTime*.004;
    float near=smoothstep(uRk*.25,uRk*.01,t);
    vec3 w=vec3(fbm(q*vec3(2.,7.,2.)+tt,4),fbm(q*vec3(3.,9.,3.)-tt,4),0.);float s=lat*7.+w.x*1.6+sin(lat*23.)*.25;float b=fbm(vec3(s*1.1,uSeed,w.y*.8),4)*1.6+.5;
    float fine=fbm(vec3(q.x*4.,lat*34.+w.x*7.,q.z*4.)+w.y*3.,5);if(near>.01)fine+=near*.6*fbm(vec3(q.x*60.,lat*260.+w.x*60.,q.z*60.)+fine*4.,4);
    vec3 alb=mix(uA,uB,smoothstep(.25,.75,b));alb=mix(alb,uD,smoothstep(.1,.55,fine+w.y*.5)*.65);
    vec3 sc=normalize(vec3(.75,-.35,.55));float sd=length((p-sc)*vec3(1.,2.1,1.));float sw=fbm(vec3(sd*18.-tt*8.,atan(p.y-sc.y,p.x-sc.x)*1.5,uSeed),4);alb=mix(alb,uD*vec3(1.25,.75,.6)*(.8+sw*.8),smoothstep(.36,.22,sd));
    alb*=.8+fine*.55;alb*=mix(.6,1.,smoothstep(1.,.6,abs(lat)));
    float sh=1.;if(uRing>.5){float k=-dot(pk,uUp)/dot(uSunDir,uUp);if(k>0.)sh=1.-.8*ringD(length(pk+uSunDir*k)/uRk,uSeed);}
    float nl=dot(N,uSunDir);vec3 c=alb*uSunCol*(max(nl,0.)*smoothstep(-.1,.3,nl)*sh*1.7)+alb*vec3(.012,.014,.02);
    vec2 at=sph(uCamP,d,uTop);vec3 T;float t0=max(at.x,0.);vec3 L=scatter(uCamP,d,t0,max(t,t0),6,T);c=c*T+L;c=mix(c,uFogC,1.-exp(-t*1000.*uFog));
    gl_FragColor=vec4(doppler(c,d),1.);gl_FragDepth=logd(t*1000.*dot(normalize(vP),uFwd));}`, { depthWrite: true }));
  const air = proxy(u, (b.R + a.top) * 1.02, NOISE + REL + ATM + /* glsl */`varying vec3 vP;void main(){vec3 d=unab(normalize(vP));vec2 a=sph(uCamP,d,uTop);if(a.y<=0.||a.x>a.y)discard;vec2 g=sph(uCamP,d,uRk);if(g.y>0.&&g.x<g.y)discard;vec3 T;vec3 L=scatter(uCamP,d,max(a.x,0.),a.y,12,T);float hide=1.-exp(-dot(L,vec3(.3,.5,.2))*12.);gl_FragColor=vec4(doppler(L,d),1.-dot(T,vec3(.333))*(1.-hide));gl_FragDepth=.99999;}`, { ...premul }); air.renderOrder = 10; g.add(air);
  b.sync = cam => { off.value.copy(b.pos).sub(cam); u.uCamP.value.copy(off.value).multiplyScalar(-.001); };
}
const RINGD = `float ringD(float r,float sd){float n=gnoise(vec3(r*22.,3.,sd))*.5+gnoise(vec3(r*70.,8.,sd))*.35+gnoise(vec3(r*210.,1.,sd))*.2;float d=clamp(.55+n,0.,1.);d*=smoothstep(1.45,1.55,r)*smoothstep(2.6,2.45,r);d*=1.-.92*smoothstep(.035,.015,abs(r-2.05));return d;}\n`;
export function makeRing(b) {
  const geo = new THREE.RingGeometry(1.45, 2.6, 200, 6).rotateX(-Math.PI / 2); geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), b.up));
  const off = { value: V() }, m = new THREE.Mesh(geo, mat({ transparent: true, side: THREE.DoubleSide, depthWrite: false, uniforms: { uOff: off, uScale: { value: b.R }, uSeed: { value: b.seed % 50 }, uSunDir: { value: b.sunDir }, uSunCol: { value: b.sunCol }, uUp: { value: b.up }, uA: { value: b.pal[2] }, uB: { value: b.pal[0] }, uCR: { value: V() } },
    vertexShader: REL + 'uniform vec3 uOff;uniform float uScale;varying vec3 vP,vL;varying float vLW;void main(){vL=position;vec3 p=aberr(position*uScale+uOff);vP=position*uScale+uOff;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}',
    fragmentShader: NOISE + REL + RINGD + /* glsl */`varying vec3 vP,vL;varying float vLW;uniform float uSeed,uScale;uniform vec3 uSunDir,uSunCol,uUp,uA,uB;
    void main(){float r=length(vL),d=ringD(r,uSeed);vec3 V=-normalize(vP);float k=-dot(vL,uSunDir);float sh=k<0.?1.:smoothstep(.97,1.03,length(vL+uSunDir*k));float fwd=pow(max(dot(-uSunDir,V),0.),6.);
     float far=length(vP)/uScale;float gr=gnoise(vL*900.)*smoothstep(.6,.05,far);
     vec3 c=mix(uA,uB,gnoise(vec3(r*16.,2.,uSeed))*.5+.5)*uSunCol*((.6+.5*abs(dot(uUp,uSunDir)))*.9+fwd*1.8)*(sh*.97+.03)*(1.+gr);gl_FragColor=vec4(doppler(c,-V),d*.92*(1.+gr*.5));gl_FragDepth=logd(vLW);}` })); m.frustumCulled = false; m.renderOrder = 6; b.group.add(m);
  const s0 = b.sync; b.sync = cam => { s0(cam); off.value.copy(b.pos).sub(cam); };
}
export function makeHole(b, hot = '#fff0d8', cool = '#ff7a2a', outer = 11, jets = false) {
  const g = new THREE.Group(), off = { value: V() }, camL = { value: V() }; b.group = g; b.up ||= V(.2, 1, .1).normalize();
  const q = new THREE.Quaternion().setFromUnitVectors(V(0, 1, 0), b.up), inv = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(q)).transpose();
  const m = proxy({ ...skyU, uOff: off, uCamL: camL, uInv: { value: inv }, uHot: { value: C(hot) }, uCool: { value: C(cool) }, uOut: { value: outer } }, b.R * 26.6, NOISE + REL + SKYFN + /* glsl */`varying vec3 vP;uniform float uTime,uOut;uniform vec3 uCamL,uHot,uCool;uniform mat3 uInv;
   float swirl(float r,float a,float t){float w=7.*pow(r,-1.5);float g=a+w*t;vec2 cs=vec2(cos(g),sin(g));return fbm(vec3(r*2.6,cs*2.4),3)+.45*gnoise(vec3(r*9.,cs*5.));}
   vec4 disk(vec3 p,vec3 v){float r=length(p.xz);float a=atan(p.z,p.x);if(r<2.5||r>uOut)return vec4(0);float P=14.,t1=mod(uTime,P),t2=mod(uTime+P*.5,P);float k=abs(t1/P*2.-1.);float n=mix(swirl(r,a,t1-P*.5),swirl(r,a+2.,t2-P*.5),k);
    float x=(r-2.5)/(uOut-2.5);float den=smoothstep(0.,.06,x)*pow(1.-x,1.3)*clamp(.55+n*1.25,0.,1.4);vec3 tg=normalize(vec3(p.z,0.,-p.x));float beta=.62/sqrt(r*.5);float g=sqrt(1.-beta*beta)/(1.-beta*dot(tg,-normalize(v)));g*=sqrt(max(1.-1./r,.05));
    vec3 c=mix(uHot,uCool,smoothstep(0.,.55,x+.12-g*.06));c=mix(c,uHot*vec3(.8,.95,1.3),clamp(g-1.1,0.,1.)*.5);float e=den*pow(g,3.2)*(5.2*exp(-x*3.4)+.28);return vec4(c*e,clamp(den*1.15,0.,.93));}
   vec3 stars(vec3 d){vec3 c=vec3(0);for(int k=0;k<2;k++){float s=k==0?41.:97.;vec3 p=d*s,id=floor(p),h=hash33(id+s);vec3 q=id+.5+(h-.5)*.5;float l=length(q);if(h.x>.14||abs(l-s)>.45)continue;float r=length(p-q/l*s);c+=mix(vec3(1.,.75,.5),vec3(.6,.75,1.),h.z)*exp(-r*r*900.)*(h.y*h.y*2.+.1);}return c;}
   void main(){vec3 ro=uInv*uCamL,rw=unab(normalize(vP)),rd=uInv*rw;float B=26.,b=dot(ro,rd);vec3 pr=ro-b*rd;float q=B*B-dot(pr,pr);if(q<0.)discard;float t0=max(-b-sqrt(q),0.);if(b>0.&&dot(ro,ro)>B*B)discard;vec3 p=ro+rd*t0,v=rd;vec3 hv=cross(p,v);float h2=dot(hv,hv);vec3 col=vec3(0);float tr=1.;bool fell=false;
    for(int i=0;i<110;i++){float r=length(p);if(r<1.){fell=true;break;}if(r>B*1.01&&dot(p,v)>0.)break;float dt=max(.05,.13*(r-.55))*(1.-.35*exp(-abs(p.y)*1.5));vec3 ac=-1.5*h2*p/pow(r,5.);vec3 nv=v+ac*dt,pn=p+(v+nv)*.5*dt;if(p.y*pn.y<0.){vec3 x=mix(p,pn,p.y/(p.y-pn.y));vec4 d=disk(x,nv);col+=d.rgb*tr;tr*=1.-d.a;if(tr<.03)break;}p=pn;v=nv;}
    vec3 dir=normalize(transpose(uInv)*v);if(!fell&&tr>.02)col+=tr*(skyAt(dir)+stars(dir));
    gl_FragColor=vec4(doppler(col,rw),smoothstep(B*.98,B*.72,sqrt(h2)));gl_FragDepth=logd(max(-b,0.)*uScaleM*dot(normalize(vP),uFwd));}`.replace('uniform mat3', 'uniform float uScaleM;uniform mat3'), { transparent: true }); m.material.uniforms.uScaleM = { value: b.R }; m.renderOrder = -5; g.add(m);
  const syncs = [];
  if (jets) { b.jet = b.up.clone(); b.jetLen = b.R * 60; for (const s of [1, -1]) for (const [w, gain] of [[1, .55], [.4, 1.6]]) { const geo = new THREE.CylinderGeometry(4.2 * w, .35 * w, 60, 48, 40, true).translate(0, 30.8, 0); if (s < 0) geo.rotateX(Math.PI); geo.applyQuaternion(q);
    const j = beam(geo, b.R, off, `vec3 q=vec3(vA,0.);float y=vA.y;float n=fbm(vec3(cos(vA.x)*1.6,sin(vA.x)*1.6,y*16.-uTime*2.4),4)+.5;float kn=.6+.9*pow(.5+.5*sin(y*34.-uTime*3.+n*2.),4.);float e=pow(f,1.6)*pow(n,1.6)*kn*exp(-y*2.6)*smoothstep(1.,.6,y)*smoothstep(0.,.012,y);c=mix(vec3(.5,.72,1.),vec3(.62,.3,1.),smoothstep(0.,.6,y))*e*${(gain * 2.2).toFixed(2)};`); g.add(j); } }
  b.sync = cam => { off.value.copy(b.pos).sub(cam); camL.value.copy(off.value).multiplyScalar(-1 / b.R); };
}
function beam(geo, scale, off, body) { const m = new THREE.Mesh(geo, mat({ ...add, side: THREE.DoubleSide, uniforms: { uOff: off, uScale: { value: scale } }, vertexShader: REL + 'uniform vec3 uOff;uniform float uScale;varying vec3 vN,vV;varying vec2 vA;varying float vLW;void main(){vec3 w=mat3(modelMatrix)*position*uScale+uOff;vV=-w;vN=mat3(modelMatrix)*normal;vA=vec2(uv.x*6.2832,1.-uv.y);vA.y=uv.y;vec3 p=aberr(w);gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}', fragmentShader: NOISE + REL + `varying vec3 vN,vV;varying vec2 vA;varying float vLW;uniform float uTime;void main(){float f=abs(dot(normalize(vN),normalize(vV)));vec3 c;${body}gl_FragColor=vec4(c,1.);gl_FragDepth=logd(vLW);}` })); m.frustumCulled = false; m.renderOrder = 4; return m; }
export function makePulsar(b) {
  const g = new THREE.Group(), off = { value: V() }; b.group = g; b.color = new THREE.Color(.45, .8, 1); makeStar(b); const core = b.group; g.add(core); b.group = g; const s0 = b.sync, mag = new THREE.Group(); g.add(mag);
  for (const s of [1, -1]) for (const [w, gain] of [[.15, .45], [.05, 1.1]]) { const geo = new THREE.CylinderGeometry(130 * w, .4, 130, 40, 30, true).translate(0, 65.8, 0); if (s < 0) geo.rotateX(Math.PI); geo.rotateZ(1.5); mag.add(beam(geo, b.R, off, `float y=vA.y;float n=.65+.6*fbm(vec3(cos(vA.x)*2.,sin(vA.x)*2.,y*8.-uTime*4.),3);float e=pow(f,2.)*n*(exp(-y*5.)+.12*exp(-y*1.6))*smoothstep(1.,.5,y);c=mix(vec3(.7,.95,1.),vec3(.2,.45,1.),smoothstep(0.,.35,y))*e*${gain};`)); }
  const lm = k => mat({ ...add, uniforms: { uOff: off, uScale: { value: b.R } }, vertexShader: REL + 'uniform vec3 uOff;uniform float uScale;varying vec2 vUv;varying float vLW;void main(){vUv=uv;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*aberr(mat3(modelMatrix)*position*uScale+uOff),1.);vLW=gl_Position.w;}', fragmentShader: REL + 'varying vec2 vUv;varying float vLW;uniform float uTime;void main(){float p=pow(.5+.5*sin(vUv.x*25.-uTime*5.),6.);gl_FragColor=vec4(mix(vec3(.25,.4,1.),vec3(.8,.4,1.),vUv.x)*(.13+p*.9),1.);gl_FragDepth=logd(vLW);}' }); const M = lm();
  for (let k = 0; k < 2; k++) for (let i = 0; i < 12; i++) { const pts = [], R = k ? 9 : 5; for (let j = 0; j <= 40; j++) { const th = .16 + (Math.PI - .32) * j / 40, r = R * Math.sin(th) ** 2; if (r < .5) continue; pts.push(V(r * Math.sin(th), r * Math.cos(th), 0).applyAxisAngle(V(0, 1, 0), i / 12 * 6.2832 + k * .26).applyAxisAngle(V(0, 0, 1), 1.5)); } const t = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, .02, 5), M); t.frustumCulled = false; mag.add(t); }
  b.beam = V(); b.sync = cam => { s0(cam); off.value.copy(b.pos).sub(cam); mag.rotation.y = shared.uTime.value / 3.2 * 6.2832; mag.updateMatrixWorld(); b.beam.set(0, 1, 0).applyAxisAngle(V(0, 0, 1), 1.5).applyAxisAngle(V(0, 1, 0), mag.rotation.y); };
}
