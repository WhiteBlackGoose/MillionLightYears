// Every other galaxy, drawn live each frame from its true position, so they move as you pass them.
import * as THREE from 'three';
import { mat, REL } from './core.js';
import { noiseTexture, V } from './glsl.js';
import { skyU, SKYFN } from './sky.js';
import { CELL } from './universe.js';
const RC = 4, MAX = 6500;
export class Galaxies {
  constructor() {
    const q = new THREE.PlaneGeometry(2, 2, 4, 4), g = this.g = new THREE.InstancedBufferGeometry(); g.index = q.index; g.setAttribute('position', q.attributes.position); this.at = {};
    for (const [k, n] of [['aP', 4], ['aX', 3], ['aY', 3], ['aZ', 3], ['aT', 4]]) { const a = this.at[k] = new THREE.InstancedBufferAttribute(new Float32Array(MAX * n), n); g.setAttribute(k, a); } g.instanceCount = 0;
    this.u = { ...skyU, uN: { value: noiseTexture() }, uShift: { value: V() }, uPix: { value: .001 }, uVolF: { value: 1 }, uCs: { value: CELL } };
    this.mesh = new THREE.Mesh(g, mat({ transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, uniforms: this.u, vertexShader: REL + /* glsl */`attribute vec4 aP,aT;attribute vec3 aX,aY,aZ;uniform vec3 uShift;uniform float uPix,uCs;varying vec3 vP,vO,vA,vB,vC;varying vec4 vT;varying float vF;
      void main(){vec3 p=aP.xyz-uShift;float R=aP.w,d=length(p);vec3 n=p/d;vec3 rt=normalize(cross(n,abs(n.y)<.95?vec3(0,1,0):vec3(1,0,0))),up=cross(rt,n);
       float k=d/R;float s=1.25*k/sqrt(max(k*k-1.5625,.05));s=max(s,k*uPix*4.5);
       vec3 w=n*k+(rt*position.x+up*position.y)*s;vec3 a=aberr(w);vP=a;vO=vec3(dot(aX,-n),dot(aY,-n),dot(aZ,-n))*k;vA=aX;vB=aY;vC=aZ;vT=aT;
       vF=smoothstep(1.1,1.5,k)*smoothstep(${(RC + .6).toFixed(1)}*uCs,${(RC - .6).toFixed(1)}*uCs,d);
       gl_Position=vF<.002?vec4(2.,2.,2.,1.):projectionMatrix*vec4(mat3(viewMatrix)*normalize(a)*100.,1.);gl_Position.z=gl_Position.w;}`,
      fragmentShader: 'precision highp sampler3D;\n' + REL + SKYFN + /* glsl */`varying vec3 vP,vO,vA,vB,vC;varying vec4 vT;varying float vF;uniform sampler3D uN;uniform float uPix,uVolF;
      void main(){vec3 rd=unab(normalize(vP)),rl=vec3(dot(vA,rd),dot(vB,rd),dot(vC,rd)),ro=vO;float L=length(ro),pb=dot(ro,rl);if(pb>0.)discard;vec3 pr=ro-pb*rl;float b2=dot(pr,pr);vec3 e;float big=smoothstep(9.,2.,L);
       float soft=L*uPix;soft*=soft; // never smaller than a pixel
       if(vT.z>.5){pr.y*=1.3;float b=length(pr);e=vec3(1.,.8,.58)*(exp(-b*b*90.)*.8+exp(-b*6.)*.4)*smoothstep(1.2,.5,b);}
       else{float ry=(rl.y<0.?-1.:1.)*max(abs(rl.y),.09);vec3 h=ro-rl*(ro.y/ry);float r=length(h.xz);e=vec3(1.,.8,.55)*(exp(-b2*150.)*1.1+exp(-sqrt(b2)*13.)*.22);
        if(r<1.2){float th=atan(h.z,h.x)-log(r+.03)*vT.y;vec3 sd=h+vT.w;float nz=texture(uN,sd*1.3).r,n2=texture(uN,sd*4.1).g,n3=texture(uN,sd*13.+n2).r,n4=texture(uN,sd*37.+n3).g;n2=mix(n2,n2*.55+n3*.35+n4*.4-.15,big);
         float ar=pow(.5+.5*cos(vT.x*th+(nz-.5)*3.+(n3-.5)*1.6*big),2.),ln=clamp(pow(.5+.5*cos(vT.x*th+1.2+(nz-.5)*3.+(n3-.5)*3.*big),4.)*mix(1.,n4*2.2,big),0.,1.)*smoothstep(.08,.25,r);
         vec3 c=mix(vec3(1.,.76,.5),vec3(.45,.6,1.),smoothstep(.08,.5,r))*(.12+ar*(.4+n2))+vec3(1.,.2,.4)*ar*pow(max(n2,0.),3.)*1.2;e+=c*exp(-r*3.4)*smoothstep(1.2,.6,r)*(1.-.75*ln)*.8;}
        e*=1.-.75*smoothstep(.35,0.,abs(rl.y))*exp(-pow(pr.y*38.,2.))*smoothstep(.9,.2,sqrt(b2));}
       // far galaxies: a small bright glint, at least a few pixels wide
       e=e*(1.+smoothstep(.3,1.,1.-uVolF)*.8)+mix(vec3(1.,.82,.62),vec3(.7,.8,1.),fract(vT.w*.37))*exp(-b2/(soft*3.+1e-7))*smoothstep(9.,30.,L)*min(1.3,70./L)*mix(.35,1.,1.-uVolF);
       float veil=exp(-dot(skyAt(rd),vec3(.33))*7.);
       gl_FragColor=vec4(doppler(e*(.8+.9*big)*vF*veil,rd),1.);}` })); this.mesh.frustumCulled = false; this.mesh.renderOrder = -995; this.key = '';
  }
  // p: universe position in light years
  update(uni, p, pix, vol = 1) { this.u.uVolF.value = vol;
    const C = CELL * uni.a, X = Math.round(p.x / C), Y = Math.round(p.y / C), Z = Math.round(p.z / C), key = uni.seed + ':' + X + ',' + Y + ',' + Z + ':' + Math.round(Math.log(uni.a) * 2e4); this.u.uCs.value = C; this.u.uPix.value = pix;
    if (key !== this.key && performance.now() - (this.t || 0) > 160) { this.t = performance.now(); this.key = key; this.base = [X * C, Y * C, Z * C]; let n = 0; const A = this.at; if (uni.cells.size > 6000) { const h = uni.cell(0, 0, 0); uni.cells.clear(); uni.cells.set('0,0,0', h); }
      for (let a = -RC; a <= RC; a++) for (let b = -RC; b <= RC; b++) for (let c = -RC; c <= RC; c++) for (const G of uni.cell(X + a, Y + b, Z + c)) { if (n >= MAX) break; A.aP.setXYZW(n, G.pos[0] - this.base[0], G.pos[1] - this.base[1], G.pos[2] - this.base[2], G.R); const m = G.m; A.aX.setXYZ(n, m[0], m[1], m[2]); A.aY.setXYZ(n, m[3], m[4], m[5]); A.aZ.setXYZ(n, m[6], m[7], m[8]); A.aT.setXYZW(n, G.arms, G.wind, G.ell, G.seed % 17); n++; }
      for (const k in A) A[k].needsUpdate = true; this.g.instanceCount = this.n = n; }
    if (this.base) this.u.uShift.value.set(p.x - this.base[0], p.y - this.base[1], p.z - this.base[2]);
  }
}
