import * as THREE from 'three';
import { mat, REL, PROXY, shared } from './core.js';
import { NOISE, noiseTexture, premul, V } from './glsl.js';
import { detailU } from './detail.js';
import { shU, SHGLSL } from './shadow.js';
import { makeHeight, faceDir, N } from './height.js';
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
uniform sampler3D uN,uDA;uniform float uCov,uCF,uCSt,uCWarp,uCSoft,uCVort;uniform vec3 uCS,uCV[3];uniform float uTime;
vec3 vortex(vec3 p){if(uCVort<.01)return p;for(int i=0;i<3;i++){vec3 c=uCV[i];float k=dot(p,c);if(k<.7)continue;float d=acos(clamp(k,-1.,1.));float a=uCVort*1.1*exp(-d*d*55.);p=p*cos(a)+cross(c,p)*sin(a)+c*k*(1.-cos(a));}return p;}
float cloudD(vec3 n,float det){vec3 p=vortex(n);vec3 q=p*uCF*vec3(1.,uCSt,1.)+uCS+vec3(uTime*.00004,0.,uTime*.00002);vec4 a=texture(uN,q*.18),b=texture(uN,q*.6+(a.rgb-.5)*uCWarp);float v=a.r*.42+b.r*.36+b.g*.14;
 if(det>0.){vec4 c=texture(uDA,q*1.7+(b.rgb-.5)*uCWarp*.6);v+=(c.r-.5)*.3+(c.g-.3)*.1;}
 return smoothstep(.61-uCov*.36,.61-uCov*.36+uCSoft+.14,v);}
`;
// ---------- the body
export class Terrain {
  constructor(b) { // b: { P, pos, R, pal, atm, sunDir, sunCol, ... }
    this.b = b; this.hf = makeHeight(b.P); this.group = new THREE.Group(); this.roots = []; this.frame = 0; this.count = 0;
    this.maxL = Math.max(1, Math.ceil(Math.log2(b.R * 1.5708 / (N - 1) / 1.1)));
    const a = b.atm, p = b.pal;
    this.u = { uN: { value: noiseTexture() }, uCamP: { value: V() }, uTau: { value: a ? a.tau : V() }, uMie: { value: a ? a.mie : 0 }, uSunDir: { value: b.sunDir }, uSunCol: { value: b.sunCol }, uRk: { value: b.R / 1e3 }, uHk: { value: a ? a.H / 1e3 : 1 }, uTop: { value: a ? (b.R + a.top) / 1e3 : 0 }, uHasAtm: { value: a ? 1 : 0 }, uFog: { value: 0 }, uFogC: { value: V() }, uFlash: { value: 0 },
      uC0: { value: p[0] }, uC1: { value: p[1] }, uC2: { value: p[2] }, uC3: { value: p[3] }, uSnow: { value: V(p[4].x, p[4].y, p[4].z) }, uWater: { value: b.water || V() }, uSea: { value: b.P.sea ? 1 : 0 }, uLava: { value: b.lava ? 1 : 0 }, uGlow: { value: b.glow || V() }, uHs: { value: b.hs }, uSnowL: { value: b.snowLine ?? 9 }, uWetk: { value: b.wet || 0 }, uLamp: { value: V() }, uLampI: { value: 0 },
      ...detailU, ...shU, uFrozen: { value: b.frozen ? 1 : 0 }, uBm: { value: b.B }, uSt: { value: b.S }, uM1: { value: new THREE.Vector4(b.M.strK, b.M.strH, b.M.crack, b.M.rip) }, uM2: { value: new THREE.Vector4(b.M.vein, b.M.metal, b.M.gloss, b.M.patch) }, uLich: { value: b.M.lich }, uCSt: { value: a?.cStretch || 1 }, uCWarp: { value: a?.cWarp || .5 }, uCSoft: { value: a?.cSoft || .1 }, uCVort: { value: a?.cVort || 0 }, uCV: { value: a?.cV || [V(0, 1, 0), V(1, 0, 0), V(0, 0, 1)] }, uCBase: { value: a?.cBase || V(.5, .5, .5) }, uCTint: { value: a?.cloudC || V(1, 1, 1) }, uCov: { value: a ? a.cloud : 0 }, uCF: { value: a?.cloudF || 3 }, uCS: { value: V(b.P.seed % 13, b.P.seed % 7, b.P.seed % 5) } };
    this.mat = mat({ uniforms: this.u, vertexShader: REL + /* glsl */`attribute vec4 aux;attribute vec3 tile;varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;
      void main(){vec3 p=position+modelMatrix[3].xyz;vP=p;vN=normal;vT=tile;vA=aux;vec3 q=aberr(p);vW=q;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*q,1.);vLW=gl_Position.w;gl_Position.z=(2.*logd(vLW)-1.)*vLW;}`,
      fragmentShader: REL + 'precision highp sampler3D;\n' + ATM + CLOUD + SHGLSL + /* glsl */`
      uniform float uFrozen;varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;uniform sampler3D uDB;uniform vec3 uC2,uC3,uSnow,uWater,uGlow,uLamp,uBm[6],uSt[4];uniform vec4 uM1,uM2;uniform float uSea,uLava,uHs,uSnowL,uLampI,uLich;
      void main(){float D=length(vP);vec3 pk=uCamP+vP*.001;vec3 up=normalize(pk),N=normalize(vN),Vw=-vP/D;
       float f1=smoothstep(90000.,12000.,D),f2=smoothstep(16000.,2500.,D),f3=smoothstep(1800.,300.,D),f4=smoothstep(260.,45.,D),f5=smoothstep(45.,8.,D);
       vec4 m0=texture(uDA,up*5.),m1=texture(uDA,up*23.+m0.rgb*.15),a1=texture(uDA,vT/512.),a2=texture(uDA,vT/128.+a1.r*.05),a3=vec4(.5,.35,.3,.5),a4=a3,a5=a3,b2=texture(uDB,vT/128.),b3=vec4(.5,.5,.5,.45),b4=b3,b5=b3;vec3 gx=dFdx(vT),gy=dFdy(vT);
       if(f3>0.){a3=textureGrad(uDA,vT/32.,gx/32.,gy/32.);b3=textureGrad(uDB,vT/32.,gx/32.,gy/32.);}if(f4>0.){a4=textureGrad(uDA,vT/8.,gx/8.,gy/8.);b4=textureGrad(uDB,vT/8.,gx/8.,gy/8.);}if(f5>0.){a5=textureGrad(uDA,vT/2.,gx/2.,gy/2.);b5=textureGrad(uDB,vT/2.,gx/2.,gy/2.);}
       float det=(m1.r-.5)*.4+(a1.r-.5)*.5*f1+(a2.r-.5)*.4*f2+(a3.r-.5)*.3*f3+(a4.r-.5)*.25*f4;
       float mh=clamp(.5+(b2.a-.45)*.5*f2+(b3.a-.45)*.6*f3+(b4.a-.45)*.6*f4+(b5.a-.45)*.4*f5,0.,1.);
       vec3 gr=((b2.rgb-.5)*.7*f2+(b3.rgb-.5)*.9*f3+(b4.rgb-.5)*.9*f4+(b5.rgb-.5)*.6*f5)*2.;
       float slope=1.-dot(N,up),h=vA.x/uHs;
       float moist=clamp(vA.y+det*.4+(m0.r-.5)*.5,0.,1.),temp=clamp(1.-vA.w*.9-max(h,0.)*.35+(m0.g-.35)*.5+det*.25,0.,1.);
       // biomes
       float bm=smoothstep(.38,.62,moist),bt=smoothstep(.36,.66,temp);
       vec3 g=mix(mix(uBm[0],uBm[2],bt),mix(uBm[1],uBm[3],bt),bm);
       g=mix(g,uC2,smoothstep(.12,.5,h+det*.2));
       float pt=smoothstep(uM2.w,uM2.w+.1,m1.b*.6+m0.r*.55+(a1.g-.3)*.35*f1);g=mix(g,uBm[4],pt*.85);
       float vn=smoothstep(.62,.8,a1.g*f1*.6+m1.g*.5+(a2.g-.3)*.4*f2);g=mix(g,uBm[5],vn*.55);
       g*=.78+.5*(a3.r*f3+(1.-f3)*.5)*.9+(a4.a-.5)*.35*f4+(a5.a-.5)*.3*f5;
       // sand in the calm low places
       float sand=smoothstep(.16,.03,slope+(mh-.5)*.1)*smoothstep(.35,.05,h+det*.3)*uM1.w;vec3 sc=mix(uBm[0],uC2,.45)*1.12;g=mix(g,sc*(.9+.2*a4.a),sand*.8);
       float rp=0.;if(sand>.02&&f4>0.){float w=sin((vT.x*96.+vT.z*64.+vT.y*32.)*6.28318/512.+a2.r*9.+a3.r*4.);float w2=sin((vT.x*704.-vT.z*384.+vT.y*256.)*6.28318/512.+a3.r*14.);rp=w*.5*f3+w2*.5*f4;gr+=vec3(.6,.2,.4)*(w*.18*f3+cos(w2*1.5)*.10*f4)*sand;g*=1.+rp*.07*sand;}
       // dried, cracked ground
       float flat_=smoothstep(.12,.02,slope)*smoothstep(.75,.45,moist);float ck=uM1.z*flat_*(smoothstep(.10,.0,a4.b)*f4+smoothstep(.07,.0,a3.b)*f3*.7);g*=1.-.65*ck;
       // bare rock with strata on slopes
       float sy=(vA.x+(a1.r-.5)*60.*f1+(a2.r-.5)*14.*f2)/uM1.y;float sw=smoothstep(.45,.1,fwidth(sy)*1.4);vec3 st=uSt[0]+uSt[1]*cos(6.28318*(uSt[2]*sy+uSt[3]))*sw;{float l=dot(max(st,0.),vec3(.3,.55,.15));st=min(mix(vec3(l),max(st,0.),.72),vec3(.62));}float thin=texture(uDA,vec3(.37,sy*.21,.71)).r;st*=.7+.6*thin;
       vec3 rock=mix(uC3*(.75+.5*a2.r),max(st,.01),uM1.x);rock*=.72+.5*mh+(a4.a-.5)*.3*f4;rock*=1.-.5*smoothstep(.10,0.,a3.b)*f3;
       float rk=smoothstep(.0,.16,slope-.12+(mh-.5)*.22+max(h,0.)*.05);
       vec3 alb=mix(g,rock,rk);float gloss=uM2.z*mix(.35,1.,rk);
       // scree
       float sr=smoothstep(.07,.14,slope)*smoothstep(.3,.18,slope)*smoothstep(.5,.75,a4.b+a5.r*.4)*f4;alb=mix(alb,rock*1.15,sr*.5);
       // lichen, moss
       float li=uLich*smoothstep(.5,.72,a2.r*.5+a3.g*.5+moist*.2)*smoothstep(.75,.3,slope)*f2;alb=mix(alb,uBm[1]*1.15,li*.7);
       float snow=smoothstep(uSnowL-.05,uSnowL+.08,vA.w+h*.42+det*.2+(mh-.5)*.12)*smoothstep(.55,.25,slope);alb=mix(alb,uSnow*(.86+.2*a4.r),snow);gloss=mix(gloss,.35,snow);
       if(uSea>.5){float beach=smoothstep(uHs*.004+7.,0.,vA.x+det*4.)*step(0.,vA.x)*(1.-uLava);alb=mix(alb,mix(uC2,vec3(.72,.62,.46),.5)*(.85+.3*a4.a),beach*.85*(1.-rk));float wet=smoothstep(3.5,0.,vA.x)*step(0.,vA.x);alb*=1.-.45*wet*(1.-uLava);gloss=mix(gloss,.6,wet);}
       alb=clamp(alb,0.,1.2);
       gr-=up*dot(gr,up);vec3 Nb=normalize(N-gr*(.55+.55*rk)*(1.-snow*.6));
       float water=uSea*smoothstep(.0,-1.2,vA.x),spec=0.;vec3 emi=vec3(0);
       vec3 sT=uHasAtm>.5?sunT(pk):vec3(smoothstep(-.015,.03,dot(up,uSunDir)));float day=smoothstep(-.18,.3,dot(up,uSunDir));
       vec3 skyc=uHasAtm>.5?(uTau*.9+uMie*.5)/(.35+dot(uTau,vec3(.33))+uMie)*day*.38:vec3(0);
       vec3 H=normalize(uSunDir+Vw);
       if(water>.01){float tm=uTime;vec3 wn=(texture(uDB,vT/64.+vec3(tm*.008,0,tm*.005)).rgb-.5)*.16*f3+(texture(uDB,vT/16.-vec3(tm*.03,0,tm*.02)).rgb-.5)*.16*f4+(texture(uDB,vT/256.+tm*.002).rgb-.5)*.10*f2;
        vec3 Wn=normalize(up+wn);float depth=-vA.x;
        if(uLava>.5){vec4 l=texture(uDA,vT/128.+vec3(0,tm*.004,0)),l2=texture(uDA,vT/32.+vec3(tm*.01,0,0)+l.r*.1);float crust=smoothstep(.02,.2,mix(m1.b,l.b,f2)+(l2.r-.5)*.2*f3);float c=mix(m1.g,l.g,f1);alb=mix(alb,mix(vec3(.02,.012,.01),vec3(.05,.035,.03),l2.r),water);emi+=uGlow*((1.-crust)*1.5+pow(max(c,0.),3.)*.35)*water*(.75+.25*sin(tm*.7+a1.r*20.));gr*=1.-water;}
        else if(uFrozen>.5){vec4 i1=texture(uDA,vT/128.),i2=texture(uDA,vT/32.);float ck=smoothstep(.07,0.,i1.b)*f2+smoothstep(.06,0.,i2.b)*.6*f3+smoothstep(.05,0.,m1.b)*.6;vec3 ice=mix(vec3(.62,.75,.84),mix(uWater*2.,vec3(.35,.55,.68),.6),smoothstep(.35,.7,i1.r));ice=mix(ice,vec3(.9,.94,.97),smoothstep(.5,.7,i2.g+i1.g*.4));ice*=1.-.6*clamp(ck,0.,1.);alb=mix(alb,ice,water);Nb=normalize(mix(Nb,normalize(up-gr*.35),water));gloss=mix(gloss,.65,water);water=0.;}
        else{vec3 wc=mix(uWater*1.1+.004,uWater*.14,smoothstep(0.,uHs*.05+22.,depth));float fr=.03+.97*pow(1.-max(dot(Wn,Vw),0.),5.);
         spec=water*pow(max(dot(Wn,H),0.),mix(140.,420.,f2))*1.1;
         float foam=smoothstep(2.4,0.,depth)*smoothstep(.42,.62,a3.r*f3+.5*(1.-f3)+.08*sin(tm*.9+vA.x*3.+a2.r*8.));
         alb=mix(alb,mix(wc,vec3(.92),foam*.75*f2),water);Nb=normalize(mix(Nb,Wn,water));emi+=skyc*fr*water*(1.-foam)*1.1;gloss*=1.-water;}}
       float cs=1.;if(uCov>.01)cs=1.-.7*cloudD(normalize(up+uSunDir*.0012),0.)*smoothstep(0.,.1,dot(up,uSunDir));
       cs*=mix(1.,sunShadow(vP,N),smoothstep(6000.,4200.,D));
       float nl=max(dot(Nb,uSunDir),0.),ao=mix(1.,.5+.65*mh,f3);
       vec3 lit=uSunCol*sT*nl*cs*1.65+(skyc*(.55+.45*dot(Nb,up))*mix(.6,1.,cs)+vec3(.010,.012,.018))*ao;
       lit+=uLampI*(1.-.92*day)*vec3(1.,.85,.65)/(1.+dot(vP-uLamp,vP-uLamp)/500.)*max(dot(Nb,normalize(uLamp+up*6.-vP)),0.)*1.6;
       lit+=uFlash*vec3(.6,.65,.9);
       if(uLava>.5&&water<.5)lit+=uGlow*smoothstep(uHs*.05+40.,0.,vA.x)*.12;
       float nh=max(dot(Nb,H),0.);vec3 sp=uSunCol*sT*cs*step(0.,dot(up,uSunDir)+.05)*gloss*(1.-water)*(pow(nh,mix(12.,160.,gloss))*(.3+gloss))*mix(vec3(1.),alb*2.2,uM2.y);
       float spk=smoothstep(.86,.98,a5.a+a4.a*.12)*f5*gloss;sp+=uSunCol*sT*spk*pow(nh,6.)*1.5;
       vec3 c=alb*lit*(1.-uM2.y*.35*rk)+sp+spec*uSunCol*sT*cs+emi;
       c+=skyc*uM2.y*alb*.9*rk;
       float vein=uM2.x*(1.-water)*(pow(a2.g*f2+(1.-f2)*m1.g*.7,4.)*1.6+pow(a3.g,5.)*f3*1.2);c+=uGlow*vein*(.25+.75*(1.-day));
       if(uHasAtm>.5){float t1=D*.001;vec2 a=sph(uCamP,-Vw,uTop);float t0=max(a.x,0.);vec3 T;if(a.y>t0&&t1>t0){vec3 L=scatter(uCamP,-Vw,t0,t1,D<6000.?2:D<60000.?4:6,T);c=c*T+L;}
        float fg=1.-exp(-pow(D*uFog,1.2));c=mix(c,uFogC,fg);}
       gl_FragColor=vec4(doppler(max(c,0.),-Vw),1.);}` });
    if (a) this.makeAir(a);
  }
  makeAir(a) {
    const b = this.b, geo = new THREE.IcosahedronGeometry(1, 12), px = { uOff: { value: V() }, uScale: { value: (b.R + a.top) * 1.02 } }; this.px = px;
    const u = { ...this.u, ...px };
    const air = new THREE.Mesh(geo, mat({ ...premul, side: THREE.BackSide, uniforms: u, vertexShader: PROXY.replace(/}\s*$/, 'gl_Position.z=gl_Position.w*.99998;}'), fragmentShader: NOISE + REL + ATM + /* glsl */`varying vec3 vP;
      void main(){vec3 d=unab(normalize(vP));vec2 a=sph(uCamP,d,uTop);if(a.y<=0.||a.x>a.y)discard;vec2 g=sph(uCamP,d,uRk*.998);float t0=max(a.x,0.),t1=a.y;bool hit=g.y>0.&&g.x>0.;if(hit)discard;
       vec3 T;vec3 L=scatter(uCamP,d,t0,t1,14,T);
       vec3 up=normalize(uCamP);float alt=length(uCamP)-uRk;float mu=dot(d,uSunDir);if(!hit)L+=uSunCol*sunT(uCamP)*pow(max(mu,0.),400.)*uMie*3.*exp(-alt/uHk);
       float fg=uFog>0.?1.-exp(-uFog*900./max(dot(d,up),.02)):0.;L=mix(L,uFogC,fg);
       float lum=dot(L,vec3(.3,.5,.2));float hide=1.-exp(-lum*22.);float tr=dot(T,vec3(.333))*(1.-hide)*(1.-fg);
       L+=uFlash*vec3(.25,.28,.4)*exp(-alt/uHk);
       gl_FragColor=vec4(doppler(L,d),1.-tr);}` })); air.renderOrder = 10; air.frustumCulled = false; this.group.add(air);
    if (a.cloud > .02) { const cl = new THREE.Mesh(geo, mat({ ...premul, side: THREE.BackSide, uniforms: { ...u, uCA: { value: (b.R + a.cloudH) / 1e3 }, uCB: { value: (b.R + a.cloudH + a.cThick) / 1e3 } }, vertexShader: PROXY, fragmentShader: NOISE + REL + 'precision highp sampler3D;\n' + ATM + CLOUD + /* glsl */`varying vec3 vP;uniform float uCA,uCB;uniform vec3 uCBase,uCTint;
      float dens(vec3 p,float cov,float det){float hr=(length(p)-uCA)/(uCB-uCA);if(hr<0.||hr>1.)return 0.;float th=uCB-uCA;
       float d=cov-mix(.75*pow(hr,1.6),0.,0.)-.35*smoothstep(.12,0.,hr);if(d<=0.)return 0.;
       vec3 q=p/(th*3.2);vec4 a=texture(uDA,q+vec3(0.,uTime*.0006,0.));d-=(1.-a.r)*.42+(1.-texture(uDA,q*.31+.37).r)*.5-.2;if(det>.5){vec4 c=texture(uDA,q*4.3+a.rgb*.25);d-=(1.-c.r)*.22+(.5-c.g)*.10;}
       return clamp(d*2.6,0.,1.);}
      void main(){vec3 d=unab(normalize(vP));float alt=length(uCamP),th=uCB-uCA;vec2 A=sph(uCamP,d,uCA),B=sph(uCamP,d,uCB),G=sph(uCamP,d,uRk*.999);
       bool gh=G.y>0.&&G.x>0.&&G.x<G.y;if(B.y<=0.||B.x>B.y)discard;float t0,t1;
       if(alt<uCA){if(gh)discard;t0=A.y;t1=B.y;}else if(alt>uCB){t0=B.x;t1=(A.x>0.&&A.x<A.y)?A.x:B.y;if(t0<0.)discard;}else{t0=0.;t1=(A.x>0.&&A.x<A.y)?A.x:B.y;}
       float far=smoothstep(uRk*.02,uRk*.25,t0);t1=min(t1,t0+th*mix(22.,60.,far));float span=t1-t0;if(span<=0.)discard;
       int NS=far>.6?8:16;float dt=span/float(NS),t=t0+dt*fract(52.9829189*fract(dot(gl_FragCoord.xy,vec2(.06711056,.00583715))));
       float mu=dot(d,uSunDir),hg=.0796*((1.-.36)/pow(1.36-1.2*mu,1.5)*.7+(1.-.0625)/pow(1.0625+.5*mu,1.5)*.6);
       vec3 col=vec3(0);float tr=1.,tw=0.,ta=0.;vec3 sunA=vec3(0);bool have=false;vec3 amb=(uTau*.6+uMie*.3+.04)/(.5+dot(uTau,vec3(.33))+uMie);float cov=0.;
       float sig=3.2/th*mix(1.,2.,far);
       for(int i=0;i<NS;i++){vec3 p=uCamP+d*t,n=p/length(p);if(i%2==0||far>.6)cov=cloudD(n,1.);
        if(cov>.01){float q=dens(p,cov,far>.6?0.:1.);
         if(q>.004){if(!have){sunA=sunT(p);have=true;}float hr=(length(p)-uCA)/th,sh=0.;float ls=th*.16;for(int k=1;k<=3;k++){vec3 s=p+uSunDir*ls*float(k*k)*.55;sh+=dens(s,cov,0.)*float(k);}
          float sun=exp(-sh*1.7)*.8+exp(-sh*.35)*.2;sun*=.55+.45*exp(-q*2.2)*2.;
          float nl=dot(n,uSunDir),dayl=smoothstep(-.15,.3,nl);vec3 tint=mix(uCBase,uCTint,smoothstep(0.,.75,hr+.25*(1.-sh)));
          vec3 c=tint*(uSunCol*sunA*sun*(.62+hg*5.)+amb*dayl*(.22+.5*hr)+vec3(.004))+uFlash*vec3(1.1,1.2,1.6)*q*exp(-sh*.3);
          float a=1.-exp(-q*dt*sig*4.);col+=tr*a*c;tw+=tr*a*t;ta+=tr*a;tr*=1.-a;if(tr<.02)break;}}
        t+=dt;}
       if(ta<.006)discard;float tm=tw/ta;float Al=1.-tr;
       float fadeN=smoothstep(0.,th*.05,tm);col*=fadeN;Al*=fadeN;
       vec2 tp=sph(uCamP,d,uTop);vec3 T;float s0=max(tp.x,0.);vec3 L=scatter(uCamP,d,s0,max(tm,s0+.001),5,T);col=col*T+L*Al;
       float fg=1.-exp(-pow(tm*1000.*uFog*.4,1.2));col=mix(col,uFogC*Al,fg);
       float hz=smoothstep(th*60.,th*20.,tm-0.)*(1.-far)+far;if(alt<uCA){float g2=smoothstep(.0,.035,dot(d,normalize(uCamP)));col*=g2;Al*=g2;}
       gl_FragColor=vec4(doppler(col,d),Al);gl_FragDepth=logd(tm*1000.*max(dot(normalize(vP),uFwd),1e-6));}` })); cl.renderOrder = 12; cl.frustumCulled = false; this.group.add(cl); this.cloud = cl; }
  }
  // density of cloud exactly at the camera, read back from a 1x1 render of the very same field
  probe(renderer, dt) {
    if (!this.cloud) return 0; const a = this.b.atm, d = this.u.uCamP.value.length() * 1e3 - this.b.R; if (d < a.cloudH || d > a.cloudH + a.cThick) { this.pr = Math.max(0, (this.pr || 0) - dt * 2); return this.pr; }
    if (!this.pm) { const fs = this.cloud.material.fragmentShader; const i = fs.indexOf('float dens('), j = fs.indexOf('void main'); this.pm = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: this.cloud.material.uniforms, depthTest: false, vertexShader: 'void main(){gl_Position=vec4(position.xy,0.,1.);}', fragmentShader: 'precision highp sampler3D;uniform vec3 uCamP;uniform float uCA,uCB;' + CLOUD + fs.slice(i, j) + 'void main(){vec3 p=uCamP;float c=cloudD(p/length(p),1.);gl_FragColor=vec4(dens(p,c,1.),c,0.,1.);}' })); this.pm.frustumCulled = false; this.ps = new THREE.Scene(); this.ps.add(this.pm); this.prt = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false }); this.pb = new Uint8Array(4); this.pc = new THREE.Camera(); this.pt = 0; }
    if (!this.pw) { this.pw = true; const o = renderer.getRenderTarget(); renderer.setRenderTarget(this.prt); renderer.render(this.ps, this.pc); renderer.setRenderTarget(o); renderer.readRenderTargetPixelsAsync(this.prt, 0, 0, 1, 1, this.pb).then(() => { this.pt = this.pb[0] / 255; this.pw = false; }, () => { this.pw = false; }); }
    this.pr = (this.pr || 0) + (this.pt - (this.pr || 0)) * Math.min(1, dt * 5); return this.pr;
  }
  node(f, l, x, y) { const n = 1 << l, o = faceDir(f, -1 + (x + .5) * 2 / n, -1 + (y + .5) * 2 / n, [0, 0, 0]); return { f, l, x, y, dir: V(o[0], o[1], o[2]), size: this.b.R * 1.5708 / n, state: 0, kids: null, mesh: null, used: 0 }; }
  request(nd, pr) { if (nd.state) return; queue.push({ node: nd, pr, P: this.b.P, done: d => { if (this.dead) return; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(d.pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(d.nor, 3)); g.setAttribute('aux', new THREE.BufferAttribute(d.aux, 4)); g.setAttribute('tile', new THREE.BufferAttribute(d.tile, 3)); g.setIndex(idx); const m = nd.mesh = new THREE.Mesh(g, this.mat); m.frustumCulled = false; m.layers.enable(2); m.matrixAutoUpdate = false; m.matrixWorldAutoUpdate = false; m.visible = false; this.group.add(m); nd.state = 2; nd.used = this.frame; nd.hmax = d.hmax; nd.hmin = d.hmin; this.count++; } }); }
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
      if (px > 440 && nd.l < this.maxL) { if (!nd.kids) nd.kids = [0, 1, 2, 3].map(i => this.node(nd.f, nd.l + 1, nd.x * 2 + (i & 1), nd.y * 2 + (i >> 1))); let ok = true; for (const k of nd.kids) { k.used = this.frame; if (k.state !== 2) { ok = false; this.request(k, px / (1 + nd.l * .02)); } } if (ok) { for (const k of nd.kids) visit(k); return; } }
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
