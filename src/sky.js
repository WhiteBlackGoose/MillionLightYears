// Everything at light-year scale (galactic haze, dust, nebulae, other galaxies) is ray-marched
// from the ship's true galactic position into a cube map, one tile per frame, and cross-faded.
import * as THREE from 'three';
import { NOISE, noiseTexture, C, V, rng } from './glsl.js';
import { mat, REL } from './core.js';
import { nebulae } from './stars.js';
const SIZE = 1024, TILES = 2;
const mkRT = () => new THREE.WebGLCubeRenderTarget(SIZE, { type: THREE.HalfFloatType, generateMipmaps: false, depthBuffer: false });
export const skyU = { uSkyA: { value: null }, uSkyB: { value: null }, uSkyMix: { value: 0 }, uSkyOA: { value: new THREE.Vector3() }, uSkyOB: { value: new THREE.Vector3() } };
// the baked sky is shifted per pixel by how far we moved since it was baked (parallax from the stored nebula depth), so nebulae slide past smoothly
export const SKYFN = 'uniform samplerCube uSkyA,uSkyB;uniform float uSkyMix;uniform vec3 uSkyOA,uSkyOB;vec3 skyRe(samplerCube s,vec3 d,vec3 o){float id=textureCube(s,d).a;vec3 k=o*id;float l=length(k);if(l>.8)k*=.8/l;return textureCube(s,normalize(d+k)).rgb;}vec3 skyAt(vec3 d){return mix(skyRe(uSkyA,d,uSkyOA),skyRe(uSkyB,d,uSkyOB),uSkyMix);}\n';
const NN = 5;
export class Sky {
  constructor(renderer) {
    this.r = renderer; this.rts = [mkRT(), mkRT()]; this.cur = 0; this.step = -1; this.fade = 1; skyU.uSkyA.value = skyU.uSkyB.value = this.rts[0].texture;
    this.u = { uN: { value: noiseTexture() }, uFace: { value: 0 }, uO: { value: V() }, uNP: { value: Array.from({ length: NN }, () => new THREE.Vector4()) }, uNA: { value: Array.from({ length: NN }, () => V()) }, uNB: { value: Array.from({ length: NN }, () => V()) }, uND: { value: Array.from({ length: NN }, () => V()) }, uNS: { value: new Float32Array(NN) }, uGM: { value: new THREE.Matrix3() }, uGT: { value: V(2, 2.7, 0) }, uVol: { value: 1 } };
    const tri = new THREE.BufferGeometry(); tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    this.m = new THREE.Mesh(tri, new THREE.ShaderMaterial({ depthTest: false, depthWrite: false, uniforms: this.u, vertexShader: 'varying vec2 vS;void main(){vS=position.xy;gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: NOISE + /* glsl */`precision highp sampler3D;varying vec2 vS;uniform sampler3D uN;uniform int uFace;uniform vec3 uO;uniform vec4 uNP[${NN}];uniform vec3 uNA[${NN}],uNB[${NN}],uND[${NN}];uniform float uNS[${NN}];uniform mat3 uGM;uniform vec3 uGT;uniform float uVol;float gIW,gW;
      float arms(vec3 p,float r,float w){return .5+.5*cos(uGT.x*(atan(p.z,p.x)-log(r+.03)*uGT.y)+w);}
      void neb(int k,vec3 rd,inout vec3 col,inout float tr){vec3 ro=-uNP[k].xyz;float b=dot(ro,rd);vec3 pr=ro-b*rd;float q=1.-dot(pr,pr);if(q<0.||uNP[k].w<=0.)return;q=sqrt(q);float t0=max(-b-q,0.),t1=-b+q;if(t1<=0.)return;
       const int S=52;float dt=(t1-t0)/float(S);float t=t0+dt*hash13(vec3(gl_FragCoord.xy,float(k)));vec3 sd=vec3(uNS[k],uNS[k]*1.7,uNS[k]*.6);
       vec3 s0=normalize(hash33(sd)-.5)*.12,s1=normalize(hash33(sd+3.)-.5)*.38,s2=normalize(hash33(sd+5.)-.5)*.3;
       for(int i=0;i<S;i++){vec3 p=ro+rd*t;float l=length(p);vec3 sp=p*.6+sd;vec4 n=texture(uN,sp);vec3 w=(n.rgb-.5)*.3;
        float e=1.-smoothstep(.2,1.,l+(n.r-.5)*1.2);
        if(e>.01){vec4 d=texture(uN,sp*2.1+w),f=texture(uN,sp*5.3+w*3.),h=texture(uN,sp*13.+w*5.);
         float den=e*clamp((d.r-.40)*2.4+(n.g-.35)*1.7-(1.-e)*.45+(f.r-.5)*.9+(h.r-.5)*.4,0.,1.);den*=den*(1.-smoothstep(.22,0.,l)*.6);
         if(den>.002){vec3 a=p-s0,bb=p-s1,c2=p-s2;float lit=.03/(dot(a,a)+.03)+.018/(dot(bb,bb)+.02)+.018/(dot(c2,c2)+.02);
          float fil=pow(d.g,3.)*2.4+pow(f.g,4.)*1.8+pow(h.g,5.)*.9+.12;
          vec3 em=mix(uNA[k],uNB[k],smoothstep(.36,.56,n.r+f.g*.16-.07));em=mix(em,uND[k],smoothstep(.5,1.7,lit)*.65);
          float al=1.-exp(-den*dt*17.);vec3 c=em*fil*(.16+lit*1.5);
          c=mix(c,c*.05+vec3(.003,.002,.002),smoothstep(.5,.72,d.r+f.r*.3-.12)*(1.-smoothstep(1.,2.6,lit)));
          float nearF=smoothstep(0.,.05,t);col+=tr*al*c*nearF*1.15;{float wq=tr*al*dot(c,vec3(.33))*nearF;gW+=wq;gIW+=wq/max(t*uNP[k].w,1e-3);}tr*=1.-al*.82*nearF;if(tr<.02)break;}}
        t+=dt;}
       // embedded suns
       for(int j=0;j<3;j++){vec3 s=(j==0?s0:j==1?s1:s2)-ro;float m=length(s);float an=acos(clamp(dot(s/m,rd),-1.,1.));float z=an*m;col+=uND[k]*max(tr,.25)*(.0016/(z*z+.0012))*.10;}}
      void main(){float s=vS.x,v=vS.y;vec3 d=uFace==0?vec3(1,-v,-s):uFace==1?vec3(-1,-v,s):uFace==2?vec3(s,1,v):uFace==3?vec3(s,-1,-v):uFace==4?vec3(s,-v,1):vec3(-s,-v,-1);vec3 rd=normalize(d);
       vec3 col=vec3(.0006,.0007,.0013);float tr=1.;gIW=0.;gW=0.;
       // faint veils so the deep sky is never empty
       {vec3 w=texture(uN,rd*.35+.3).rgb-.5;float a=texture(uN,rd*.55+w*.5).r,f=texture(uN,rd*1.1+w).g;col+=mix(vec3(.10,.16,.5),vec3(.5,.1,.34),smoothstep(.4,.65,texture(uN,rd*.25+7.).r))*pow(max(a-.34,0.)*2.2,2.)*f*f*.10*(.12+.88*uVol);}
       // galaxy, near to far on exponential steps
       vec3 gd=uGM*rd;vec3 g=vec3(0);float T=1.;const int GS=96;float jt=hash13(vec3(gl_FragCoord.xy,float(uFace)));
       float bb=dot(uO,gd);vec3 pq=uO-bb*gd;float qq=1.5625-dot(pq,pq);float t0=0.,t1=3.4;if(qq>0.){qq=sqrt(qq);t0=max(-bb-qq,0.);t1=-bb+qq;}
       if(uVol>.001&&qq>0.&&t1>0.){float og=1.+1.6*smoothstep(.015,.3,max(abs(uO.y),length(uO)-1.)),t=t0+(t0>0.?.004:.0012)*(1.+.16*jt);
       for(int i=0;i<GS;i++){if(t>t1||T<.02)break;vec3 p=uO+gd*t;float rr=length(p.xz),ht=.013+.055*exp(-rr*rr*60.);
        // step with the local thickness of the disc, so no direction is under-sampled
        float u=t-t0,dt=min(u*.165+.0002,.45*(ht+.75*abs(p.y))+u*.045);p+=gd*dt*jt*.7;t+=dt;
        float r=length(p.xz);
        if(uGT.z>.5){float q=length(p*vec3(1.,1.5,1.));g+=vec3(1.,.8,.58)*(exp(-q*5.5)*1.1+exp(-q*q*130.)*9.)*smoothstep(1.2,.7,q)*dt*2.2;continue;}
        float hh=.013+.055*exp(-r*r*60.);float y=abs(p.y)/hh;
        if(y<6.&&r<1.25){vec4 n1=texture(uN,p*5.),n2=texture(uN,p*19.+n1.rgb*.4),n3=texture(uN,p*61.+n2.rgb*.5);
         // drop detail finer than the step, it would only become grain
         n3=mix(vec4(.5,.38,.5,1.),n3,smoothstep(.013,.003,dt));n2=mix(vec4(.5,.38,.5,1.),n2,smoothstep(.045,.011,dt));
         float rim=smoothstep(1.2,.8,r);float ar=arms(p,r,(n1.r-.5)*2.4);ar*=ar;
         float ds=(exp(-r*3.2)*(.28+1.25*ar)*(.35+n2.r*1.3)+3.2*exp(-r*r*130.))*exp(-y)*rim;
         vec3 c=mix(vec3(1.,.74,.48),vec3(.5,.62,1.),smoothstep(.06,.5,r)*(.35+.65*ar));
         float hii=pow(max(n2.g*n3.g-.22,0.)*2.4,2.)*ar*smoothstep(.1,.2,r);
         vec3 hc=mix(vec3(1.,.16,.34),vec3(.25,.6,1.),smoothstep(.45,.6,n1.g));
         float dust=smoothstep(.46,.68,n2.r*.55+n3.r*.45+(n1.g-.4)*.25)*exp(-y*2.6)*(.35+arms(p,r,1.2+(n1.r-.5)*2.))*exp(-r*1.4)*rim;
         g+=T*(c*ds*3.4*og+hc*hii*exp(-y*1.6)*exp(-r*2.5)*rim*34.*og)*dt;T*=exp(-dust*dt*75.);}}}
       g*=.35+1.1*smoothstep(.0,.5,dot(g,vec3(.33)));g*=.5;g/=1.+dot(g,vec3(.33))*2.6;col=col*mix(1.,T,uVol)+g*uVol;tr=1.;
       vec3 nc=vec3(0);for(int k=0;k<${NN};k++)neb(k,rd,nc,tr);
       col=nc+col*tr;
       float fr=clamp(dot(nc,vec3(.33))/max(dot(col,vec3(.33)),1e-6),0.,1.);gl_FragColor=vec4(max(col,0.),gW>0.?gIW/gW*fr:0.);}` })); this.m.frustumCulled = false; this.sc = new THREE.Scene(); this.sc.add(this.m); this.cam = new THREE.Camera(); this.last = null;
  }
  setGalaxy() { this.last = null; }
  setup(stars, g) { this.last = g.clone(); const G = stars.G, up = V(g.x + G.pos[0], g.y + G.pos[1], g.z + G.pos[2]); this.u.uGM.value.copy(G.m3); this.u.uGT.value.set(G.arms, G.wind, G.ell); this.u.uO.value.copy(g).divideScalar(G.R).applyMatrix3(G.m3);
    const ol = this.u.uO.value.length(); this.u.uVol.value = G.ell ? Math.max(0, Math.min(1, (1.5 - ol) / .4)) : 1 - Math.max(0, Math.min(1, (ol - 1.1) / .4)); this.nebs = nebulae(stars, g); for (let i = 0; i < NN; i++) { const n = this.nebs[i]; if (!n) { this.u.uNP.value[i].set(9, 9, 9, 0); continue; } this.u.uNP.value[i].set((n.x - g.x) / n.R, (n.y - g.y) / n.R, (n.z - g.z) / n.R, n.R); this.u.uNA.value[i].copy(C(n.col[0])); this.u.uNB.value[i].copy(C(n.col[1])); this.u.uND.value[i].copy(C(n.col[2])); this.u.uNS.value[i] = n.seed; } }
  tile(i) { const rt = this.rts[1 - this.cur], f = i / 4 | 0, q = i % 4, w = SIZE / TILES; this.u.uFace.value = f; rt.viewport.set(0, 0, SIZE, SIZE); rt.scissor.set((q % 2) * w, (q >> 1) * w, w, w); rt.scissorTest = true; const r = this.r; r.autoClear = false; r.setRenderTarget(rt, f); r.render(this.sc, this.cam); r.setRenderTarget(null); r.autoClear = true; }
  finish() { const old = this.rts[this.cur], nw = this.rts[1 - this.cur]; this.bp = this.bp || [null, null]; this.bp[1 - this.cur] = this.last.clone(); this.bA = this.bp[this.cur]; this.bB = this.bp[1 - this.cur]; skyU.uSkyA.value = old.texture; skyU.uSkyB.value = nw.texture; skyU.uSkyMix.value = 0; this.fade = 0; this.cur = 1 - this.cur; this.done = true; }
  bakeNow(stars, g) { this.setup(stars, g); for (let i = 0; i < 24; i++) this.tile(i); this.finish(); this.fade = 1; skyU.uSkyMix.value = 1; this.step = -1; }
  update(stars, g, dt) {
    // fast flight: rebake more tiles per frame and aim the bake at where we will be when it is done, so nebulae stream past instead of stepping
    if (this.bB) { skyU.uSkyOB.value.copy(g).sub(this.bB); if (this.bA) skyU.uSkyOA.value.copy(g).sub(this.bA); else skyU.uSkyOA.value.copy(skyU.uSkyOB.value); }
    const vel = this.pg ? g.clone().sub(this.pg).divideScalar(Math.max(dt, 1e-3)) : new THREE.Vector3(); this.pg = g.clone(); const sp = vel.length();
    if (this.fade < 1) { this.fade = Math.min(1, this.fade + dt * (this.fr || 3)); skyU.uSkyMix.value = this.fade; if (this.step < 0) return; }
    if (this.step < 0) { if (this.fade < 1) return; const near = Math.max(1, Math.min(...(this.nebs || []).map(n => Math.max(n.R * .5, n.d - n.R)), 260, Infinity)); const out = g.length() - stars.G.R; const nearD = out > 0 ? Math.max(near, out * .6) : near; if (!this.last || this.last.distanceTo(g) > nearD * .02) { const Tb = nearD * .02 / Math.max(sp, 1e-12); this.per = Math.max(1, Math.min(2, Math.ceil(24 / (Tb * 60)))); this.fr = Math.max(3, this.per * 2.5); this.setup(stars, g); this.step = 0; } else return; }
    for (let k = 0; k < (this.per || 1) && this.step < 24; k++) this.tile(this.step++); if (this.step >= 24) { this.step = -1; this.finish(); }
  }
}
export function skyMesh(rel = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), mat({ side: THREE.BackSide, depthTest: false, depthWrite: false, uniforms: skyU,
    vertexShader: 'varying vec3 vD;void main(){vD=position;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);}',
    fragmentShader: REL + SKYFN + (rel ? `varying vec3 vD;uniform float uLogG;void main(){vec3 v=normalize(vD),d=unab(v);vec3 c=doppler(skyAt(d),d);
 if(uLogG>4.){float th=acos(clamp(dot(v,uBDir),-1.,1.))/25.;float lD=uLogG+.6931-log(1.+exp(min(2.*(uLogG+log(max(th,1e-12))),60.)));float T=2.725*exp(min(lD,13.));vec3 b=planck(T);float m=max(b.r,max(b.g,b.b));if(m>1e-7)c+=b/m*min(pow(m*4e3,.33),7.);}
 gl_FragColor=vec4(c,1.);}` : 'varying vec3 vD;void main(){gl_FragColor=vec4(skyAt(normalize(vD))*.5,1.);}') }));
  m.renderOrder = -1000; m.frustumCulled = false; return m;
}
