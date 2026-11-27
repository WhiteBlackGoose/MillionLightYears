(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,ee=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,N=37489,P=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,Pe=2301,F=2302,Fe=2303,Ie=2400,Le=2401,I=2402,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=35048,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function et(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function tt(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,et(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function mt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ht(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function gt(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var L=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:et(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vt.copy(this).projectOnVector(e),this.sub(vt)}reflect(e){return this.sub(vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vt=new R,yt=new _t,bt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(xt.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(xt.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(xt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xt=new bt,St=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ct=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Et(e.r),e.g=Et(e.g),e.b=Et(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Dt(e.r),e.g=Dt(e.g),e.b=Dt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:St,fromXYZ:Ct,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:St,fromXYZ:Ct,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Tt=wt();function Et(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Dt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ot,kt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ot===void 0&&(Ot=Ye(`canvas`)),Ot.width=e.width,Ot.height=e.height;let t=Ot.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ot}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Et(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Et(t[e]/255)*255):t[e]=Et(t[e]);return{data:t,width:e.width,height:e.height}}return et(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},At=0,jt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:At++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Mt(r[t].image)):e.push(Mt(r[t]))}else e=Mt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Mt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?kt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(et(`Texture: Unable to serialize Texture.`),{})}var Nt=0,Pt=new R,Ft=class r extends at{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nt++}),this.uuid=lt(),this.name=``,this.source=new jt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Pt).x}get height(){return this.source.getSize(Pt).y}get depth(){return this.source.getSize(Pt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?et(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=300,Ft.DEFAULT_ANISOTROPY=1;var It=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ft({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new jt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rt=class extends Lt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zt=class extends Ft{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Bt=class extends Ft{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Vt=class extends Rt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Bt(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Ht=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ut.setFromMatrixColumn(e,0).length(),i=1/Ut.setFromMatrixColumn(e,1).length(),a=1/Ut.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gt,e,Kt)}lookAt(e,t,n){let r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),qt.crossVectors(n,Yt),qt.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),qt.crossVectors(n,Yt)),qt.normalize(),Jt.crossVectors(Yt,qt),r[0]=qt.x,r[4]=Jt.x,r[8]=Yt.x,r[1]=qt.y,r[5]=Jt.y,r[9]=Yt.y,r[2]=qt.z,r[6]=Jt.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*ee+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*O+s*A+c*M,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*ee+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*O+d*A+f*M,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*ee+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*O+h*A+g*M,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*ee+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*O+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ut.set(r[0],r[1],r[2]).length(),o=Ut.set(r[4],r[5],r[6]).length(),s=Ut.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Wt.copy(this);let c=1/a,l=1/o,u=1/s;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=l,Wt.elements[5]*=l,Wt.elements[6]*=l,Wt.elements[8]*=u,Wt.elements[9]*=u,Wt.elements[10]*=u,t.setFromRotationMatrix(Wt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ut=new R,Wt=new Ht,Gt=new R(0,0,0),Kt=new R(1,1,1),qt=new R,Jt=new R,Yt=new R,Xt=new Ht,Zt=new _t,Qt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:et(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zt.setFromEuler(this),this.setFromQuaternion(Zt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qt.DEFAULT_ORDER=`XYZ`;var $t=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},en=0,tn=new R,nn=new _t,rn=new Ht,an=new R,on=new R,sn=new R,cn=new _t,ln=new R(1,0,0),un=new R(0,1,0),dn=new R(0,0,1),fn={type:`added`},pn={type:`removed`},mn={type:`childadded`,child:null},hn={type:`childremoved`,child:null},gn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:en++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new Qt,r=new _t,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new bt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $t,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nn.setFromAxisAngle(e,t),this.quaternion.multiply(nn),this}rotateOnWorldAxis(e,t){return nn.setFromAxisAngle(e,t),this.quaternion.premultiply(nn),this}rotateX(e){return this.rotateOnAxis(ln,e)}rotateY(e){return this.rotateOnAxis(un,e)}rotateZ(e){return this.rotateOnAxis(dn,e)}translateOnAxis(e,t){return tn.copy(e).applyQuaternion(this.quaternion),this.position.add(tn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ln,e)}translateY(e){return this.translateOnAxis(un,e)}translateZ(e){return this.translateOnAxis(dn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?an.copy(e):an.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),on.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(on,an,this.up):rn.lookAt(an,on,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),nn.setFromRotationMatrix(rn),this.quaternion.premultiply(nn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(tt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fn),mn.child=e,this.dispatchEvent(mn),mn.child=null):tt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pn),hn.child=e,this.dispatchEvent(hn),hn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fn),mn.child=e,this.dispatchEvent(mn),mn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(on,e,sn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(on,cn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};gn.DEFAULT_UP=new R(0,1,0),gn.DEFAULT_MATRIX_AUTO_UPDATE=!0,gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends gn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vn={type:`move`},yn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Sn={h:0,s:0,l:0};function Cn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Tt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Cn(i,r,e+1/3),this.g=Cn(i,r,e),this.b=Cn(i,r,e-1/3)}return Tt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&et(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:et(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);et(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=bn[e.toLowerCase()];return n===void 0?et(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Et(e.r),this.g=Et(e.g),this.b=Et(e.b),this}copyLinearToSRGB(e){return this.r=Dt(e.r),this.g=Dt(e.g),this.b=Dt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Tt.workingToColorSpace(wn.copy(this),e),Math.round(ut(wn.r*255,0,255))*65536+Math.round(ut(wn.g*255,0,255))*256+Math.round(ut(wn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),t);let n=wn.r,r=wn.g,i=wn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ze){Tt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,r=wn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Sn);let n=ft(xn.h,Sn.h,t),r=ft(xn.s,Sn.s,t),i=ft(xn.l,Sn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new z;z.NAMES=bn;var Tn=class extends gn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new R,Dn=new R,On=new R,kn=new R,An=new R,jn=new R,Mn=new R,Nn=new R,Pn=new R,Fn=new R,In=new It,Ln=new It,Rn=new It,zn=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){En.subVectors(r,t),Dn.subVectors(n,t),On.subVectors(e,t);let a=En.dot(En),o=En.dot(Dn),s=En.dot(On),c=Dn.dot(Dn),l=Dn.dot(On),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kn)!==null&&kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,kn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,kn.x),s.addScaledVector(a,kn.y),s.addScaledVector(o,kn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return In.setScalar(0),Ln.setScalar(0),Rn.setScalar(0),In.fromBufferAttribute(e,t),Ln.fromBufferAttribute(e,n),Rn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(In,i.x),a.addScaledVector(Ln,i.y),a.addScaledVector(Rn,i.z),a}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),Dn.subVectors(e,t),En.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),En.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;An.subVectors(r,n),jn.subVectors(i,n),Nn.subVectors(e,n);let s=An.dot(Nn),c=jn.dot(Nn);if(s<=0&&c<=0)return t.copy(n);Pn.subVectors(e,r);let l=An.dot(Pn),u=jn.dot(Pn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(An,a);Fn.subVectors(e,i);let f=An.dot(Fn),p=jn.dot(Fn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(jn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Mn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Mn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(An,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Hn):Hn.fromBufferAttribute(r,t),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Un.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Un.copy(e.boundingBox)),Un.applyMatrix4(e.matrixWorld),this.union(Un)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xn),Zn.subVectors(this.max,Xn),Wn.subVectors(e.a,Xn),Gn.subVectors(e.b,Xn),Kn.subVectors(e.c,Xn),qn.subVectors(Gn,Wn),Jn.subVectors(Kn,Gn),Yn.subVectors(Wn,Kn);let t=[0,-qn.z,qn.y,0,-Jn.z,Jn.y,0,-Yn.z,Yn.y,qn.z,0,-qn.x,Jn.z,0,-Jn.x,Yn.z,0,-Yn.x,-qn.y,qn.x,0,-Jn.y,Jn.x,0,-Yn.y,Yn.x,0];return!er(t,Wn,Gn,Kn,Zn)||(t=[1,0,0,0,1,0,0,0,1],!er(t,Wn,Gn,Kn,Zn))?!1:(Qn.crossVectors(qn,Jn),t=[Qn.x,Qn.y,Qn.z],er(t,Wn,Gn,Kn,Zn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vn=[new R,new R,new R,new R,new R,new R,new R,new R],Hn=new R,Un=new Bn,Wn=new R,Gn=new R,Kn=new R,qn=new R,Jn=new R,Yn=new R,Xn=new R,Zn=new R,Qn=new R,$n=new R;function er(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){$n.fromArray(e,a);let o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),s=t.dot($n),c=n.dot($n),l=r.dot($n);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var tr=new R,nr=new L,rr=0,ir=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:mt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix4(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyNormalMatrix(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.transformDirection(e),this.setXYZ(t,tr.x,tr.y,tr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ht(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?gt(e,this.array):Math.round(e*t)}},ar=class extends ir{constructor(e,t,n){super(new Uint16Array(e),t,n)}},or=class extends ir{constructor(e,t,n){super(new Uint32Array(e),t,n)}},B=class extends ir{constructor(e,t,n){super(new Float32Array(e),t,n)}},sr=new Bn,cr=new R,lr=new R,ur=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(lr)),this.expandByPoint(cr.copy(e.center).sub(lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dr=0,fr=new Ht,pr=new gn,mr=new R,hr=new Bn,gr=new Bn,_r=new R,vr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?or:ar)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new bt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fr.makeRotationFromQuaternion(e),this.applyMatrix4(fr),this}rotateX(e){return fr.makeRotationX(e),this.applyMatrix4(fr),this}rotateY(e){return fr.makeRotationY(e),this.applyMatrix4(fr),this}rotateZ(e){return fr.makeRotationZ(e),this.applyMatrix4(fr),this}translate(e,t,n){return fr.makeTranslation(e,t,n),this.applyMatrix4(fr),this}scale(e,t,n){return fr.makeScale(e,t,n),this.applyMatrix4(fr),this}lookAt(e){return pr.lookAt(e),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new B(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&et(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)tt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hr.setFromBufferAttribute(n),this.morphTargetsRelative?(_r.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(_r),_r.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(_r)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)tt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gr.setFromBufferAttribute(n),this.morphTargetsRelative?(_r.addVectors(hr.min,gr.min),hr.expandByPoint(_r),_r.addVectors(hr.max,gr.max),hr.expandByPoint(_r)):(hr.expandByPoint(gr.min),hr.expandByPoint(gr.max))}hr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)_r.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(_r));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)_r.fromBufferAttribute(a,t),o&&(mr.fromBufferAttribute(e,t),_r.add(mr)),r=Math.max(r,n.distanceToSquared(_r))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new ir(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let l=new R,u=new R,d=new R,f=new L,p=new L,m=new L,h=new R,g=new R;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new R,b=new R,x=new R,S=new R;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new ir(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_r.fromBufferAttribute(e,t),_r.normalize(),e.setXYZ(t,_r.x,_r.y,_r.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ir(a,r,i)}if(this.index===null)return et(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},yr=new R,br=new R,xr=new bt,Sr=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=yr.subVectors(n,t).cross(br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xr.getNormalMatrix(e),r=this.coplanarPoint(yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cr=0,wr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?et(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Sr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new L().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new L().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Tr=new R,Er=new R,Dr=new R,Or=new R,kr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Er.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Er);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Or.dot(this.direction),s=-Or.dot(Dr),c=Or.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Er).addScaledVector(Dr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);let n=Tr.dot(this.direction),r=Tr.dot(Tr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,ee,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,ee=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,te=_,A=v):(S=l,C=c,T=f,E=d,O=h,k=m,te=v,A=_)):b>=x?(w=c,D=d,ee=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,te=v,A=g):(S=s,C=l,T=u,E=f,O=p,k=h,te=g,A=v)):(w=l,D=f,ee=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,te=g,A=_):(S=c,C=s,T=d,E=u,O=m,k=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=O-j*ee,se=k-re*ee,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,P=oe*ae-se*ie;if(r){if(ue<0||N<0||P<0)return null}else if((ue<0||N<0||P<0)&&(ue>0||N>0||P>0))return null;let de=ue+N+P;if(de===0)return null;let fe=M*(ue*D+N*ee+P*ne);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ar=class extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jr=new Ht,Mr=new kr,Nr=new ur,Pr=new R,Fr=new R,Ir=new R,Lr=new R,Rr=new R,zr=new R,Br=new R,Vr=new R,Hr=class extends gn{constructor(e=new vr,t=new Ar){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Rr.fromBufferAttribute(s,e),a?zr.addScaledVector(Rr,r):zr.addScaledVector(Rr.sub(t),r))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Mr.copy(e.ray).recast(e.near),Nr.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Nr,Pr)===null||Mr.origin.distanceToSquared(Pr)>(e.far-e.near)**2)||(jr.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(jr),(n.boundingBox===null||Mr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Wr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Wr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Wr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Wr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ur(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Vr.copy(s),Vr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Vr);return l<n.near||l>n.far?null:{distance:l,point:Vr.clone(),object:e}}function Wr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Fr),e.getVertexPosition(c,Ir),e.getVertexPosition(l,Lr);let u=Ur(e,t,n,r,Fr,Ir,Lr,Br);if(u){let e=new R;zn.getBarycoord(Br,Fr,Ir,Lr,e),i&&(u.uv=zn.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=zn.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=zn.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};zn.getNormal(Fr,Ir,Lr,t.normal),u.face=t,u.barycoord=e}return u}var Gr=class extends Ft{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kr=class extends ir{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new Ht,Jr=new Ht,Yr=[],Xr=new Bn,Zr=new Ht,Qr=new Hr,$r=new ur,ei=class extends Hr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Zr)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Xr.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Xr)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),$r.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,qr),Jr.multiplyMatrices(n,qr),Qr.matrixWorld=Jr,Qr.raycast(e,Yr);for(let e=0,n=Yr.length;e<n;e++){let n=Yr[e];n.instanceId=i,n.object=this,t.push(n)}Yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ti=new ur,ni=new L(.5,.5),ri=new R,ii=class{constructor(e=new Sr,t=new Sr,n=new Sr,r=new Sr,i=new Sr,a=new Sr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476+ni.distanceTo(e.center),ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ri.x=r.normal.x>0?e.max.x:e.min.x,ri.y=r.normal.y>0?e.max.y:e.min.y,ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ri)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ai=new Ht,oi=class e{constructor(){this.coordinateSystem=Ke,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ai.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ii),n[e].setFromProjectionMatrix(ai,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ii),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},si=class extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new z(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ci=new R,li=new R,ui=new Ht,di=new kr,fi=new ur,pi=new R,mi=new R,hi=class extends gn{constructor(e=new vr,t=new si){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ci.fromBufferAttribute(t,e-1),li.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ci.distanceTo(li);e.setAttribute(`lineDistance`,new B(n,1))}else et(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fi.copy(n.boundingSphere),fi.applyMatrix4(r),fi.radius+=i,e.ray.intersectsSphere(fi)===!1)return;ui.copy(r).invert(),di.copy(e.ray).applyMatrix4(ui);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=gi(this,e,di,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=gi(this,e,di,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=gi(this,e,di,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=gi(this,e,di,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function gi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ci.fromBufferAttribute(s,i),li.fromBufferAttribute(s,a),n.distanceSqToSegment(ci,li,pi,mi)>r)return;pi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(pi);if(!(c<t.near||c>t.far))return{distance:c,point:mi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var _i=new R,vi=new R,yi=class extends hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)_i.fromBufferAttribute(t,e),vi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+_i.distanceTo(vi);e.setAttribute(`lineDistance`,new B(n,1))}else et(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},bi=class extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xi=new Ht,Si=new kr,Ci=new ur,wi=new R,Ti=class extends gn{constructor(e=new vr,t=new bi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(r),Ci.radius+=i,e.ray.intersectsSphere(Ci)===!1)return;xi.copy(r).invert(),Si.copy(e.ray).applyMatrix4(xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);wi.fromBufferAttribute(l,n),Ei(wi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)wi.fromBufferAttribute(l,a),Ei(wi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ei(e,t,n,r,i,a,o){let s=Si.distanceSqToPoint(e);if(s<n){let n=new R;Si.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Di=class extends Ft{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oi=class extends Ft{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ki=class extends Ft{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ai=class extends ki{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ji=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class e extends vr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new B(c,3)),this.setAttribute(`normal`,new B(l,3)),this.setAttribute(`uv`,new B(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ni=class e extends vr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new R,g=new R;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new B(o,3)),this.setAttribute(`normal`,new B(s,3)),this.setAttribute(`uv`,new B(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Pi=class e extends vr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new B(a,3)),this.setAttribute(`normal`,new B(o,3)),this.setAttribute(`uv`,new B(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fi=class e extends vr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new B(u,3)),this.setAttribute(`normal`,new B(d,3)),this.setAttribute(`uv`,new B(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ii=class e extends Fi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class e extends vr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new B(i,3)),this.setAttribute(`normal`,new B(i.slice(),3)),this.setAttribute(`uv`,new B(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new L,s=new L,c=new L;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ri=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new L:new R);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],i=[],a=[],o=new R,s=new Ht;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new R)}i[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ut(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ut(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zi=class extends Ri{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new L){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bi=class extends zi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Vi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Hi=new R,Ui=new R,Wi=new Vi,Gi=new Vi,Ki=new Vi,qi=class extends Ri{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ui.subVectors(r[0],r[1]).add(r[0]),c=Ui);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Hi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Hi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Wi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Gi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ki.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Wi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Gi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ki.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Wi.calc(s),Gi.calc(s),Ki.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ji(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Yi(e,t){let n=1-e;return n*n*t}function Xi(e,t){return 2*(1-e)*e*t}function Zi(e,t){return e*e*t}function Qi(e,t,n,r){return Yi(e,t)+Xi(e,n)+Zi(e,r)}function $i(e,t){let n=1-e;return n*n*n*t}function ea(e,t){let n=1-e;return 3*n*n*e*t}function ta(e,t){return 3*(1-e)*e*e*t}function na(e,t){return e*e*e*t}function ra(e,t,n,r,i){return $i(e,t)+ea(e,n)+ta(e,r)+na(e,i)}var ia=class extends Ri{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,r.x,i.x,a.x,o.x),ra(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends Ri{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ra(e,r.x,i.x,a.x,o.x),ra(e,r.y,i.y,a.y,o.y),ra(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Ri{constructor(e=new L,t=new L){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Ri{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Ri{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qi(e,r.x,i.x,a.x),Qi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Ri{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qi(e,r.x,i.x,a.x),Qi(e,r.y,i.y,a.y),Qi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new L){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ji(o,s.x,c.x,l.x,u.x),Ji(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this}},da=Object.freeze({__proto__:null,ArcCurve:Bi,CatmullRomCurve3:qi,CubicBezierCurve:ia,CubicBezierCurve3:aa,EllipseCurve:zi,LineCurve:oa,LineCurve3:sa,QuadraticBezierCurve:ca,QuadraticBezierCurve3:la,SplineCurve:ua}),fa=class extends Ri{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new da[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new da[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},pa=class extends fa{constructor(e){super(),this.type=`Path`,this.currentPoint=new L,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oa(this.currentPoint.clone(),new L(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ca(this.currentPoint.clone(),new L(e,t),new L(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ia(this.currentPoint.clone(),new L(e,t),new L(n,r),new L(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ua([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new zi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ma=class extends pa{constructor(e){super(e),this.uuid=lt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new pa().fromJSON(n))}return this}};function ha(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ga(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ca(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return va(a,o,n,s,c,l,0),o}function ga(e,t,n,r,i){let a;if(i===qa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Wa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Wa(i/r|0,e[i],e[i+1],a);return a&&Ia(a,a.next)&&(Ga(a),a=a.next),a}function _a(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ia(n,n.next)||Fa(n.prev,n,n.next)===0)){if(Ga(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function va(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Oa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ba(e,r,i,a):ya(e))t.push(c.i,e.i,l.i),Ga(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=xa(_a(e),t),va(e,t,n,r,i,a,2)):o===2&&Sa(e,t,n,r,i,a):va(_a(e),t,n,r,i,a,1);break}}}function ya(e){let t=e.prev,n=e,r=e.next;if(Fa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Na(i,s,a,c,o,l,m.x,m.y)&&Fa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ba(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Fa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Aa(p,m,t,n,r),v=Aa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Na(s,u,c,d,l,f,y.x,y.y)&&Fa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Na(s,u,c,d,l,f,b.x,b.y)&&Fa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Na(s,u,c,d,l,f,y.x,y.y)&&Fa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Na(s,u,c,d,l,f,b.x,b.y)&&Fa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ia(r,i)&&La(r,n,n.next,i)&&Va(r,i)&&Va(i,r)&&(t.push(r.i,n.i,i.i),Ga(n),Ga(n.next),n=e=i),n=n.next}while(n!==e);return _a(n)}function Sa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Pa(o,e)){let s=Ua(o,e);o=_a(o,o.next),s=_a(s,s.next),va(o,t,n,r,i,a,0),va(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ca(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ga(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ja(o))}i.sort(wa);for(let e=0;e<i.length;e++)n=Ta(i[e],n);return n}function wa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ta(e,t){let n=Ea(e,t);if(!n)return t;let r=Ua(n,e);return _a(r,r.next),_a(n,n.next)}function Ea(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ia(e,n))return n;do{if(Ia(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ma(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Va(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Da(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Da(e,t){return Fa(e.prev,e,t.prev)<0&&Fa(t.next,e,e.next)<0}function Oa(e,t,n,r){let i=e;do i.z===0&&(i.z=Aa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ka(i)}function ka(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Aa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ja(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ma(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Na(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ma(e,t,n,r,i,a,o,s)}function Pa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ba(e,t)&&(Va(e,t)&&Va(t,e)&&Ha(e,t)&&(Fa(e.prev,e,t.prev)||Fa(e,t.prev,t))||Ia(e,t)&&Fa(e.prev,e,e.next)>0&&Fa(t.prev,t,t.next)>0)}function Fa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ia(e,t){return e.x===t.x&&e.y===t.y}function La(e,t,n,r){let i=za(Fa(e,t,n)),a=za(Fa(e,t,r)),o=za(Fa(n,r,e)),s=za(Fa(n,r,t));return!!(i!==a&&o!==s||i===0&&Ra(e,n,t)||a===0&&Ra(e,r,t)||o===0&&Ra(n,e,r)||s===0&&Ra(n,t,r))}function Ra(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function za(e){return e>0?1:e<0?-1:0}function Ba(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&La(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Va(e,t){return Fa(e.prev,e,e.next)<0?Fa(e,t,e.next)>=0&&Fa(e,e.prev,t)>=0:Fa(e,t,e.prev)<0||Fa(e,e.next,t)<0}function Ha(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ua(e,t){let n=Ka(e.i,e.x,e.y),r=Ka(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Wa(e,t,n,r){let i=Ka(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ga(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ka(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ja=class{static triangulate(e,t,n=2){return ha(e,t,n)}},Ya=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Xa(e),Za(n,e);let a=e.length;t.forEach(Xa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Za(n,t[e]);let o=Ja.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Xa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Za(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Qa=class e extends vr{constructor(e=new ma([new L(.5,.5),new L(-.5,.5),new L(-.5,-.5),new L(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new B(r,3)),this.setAttribute(`uv`,new B(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?$a:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new R,b=new R,x=new R}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ya.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ya.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||tt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function ee(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new L(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new L(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=ee(D[e],D[n],D[r]);let A=[],ne,j=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=ee(t[e],t[r],t[i]);A.push(ne),j=j.concat(ne)}let re;if(p===0)re=Ya.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],te[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=A[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],ne[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=Ya.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],te[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=A[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],ne[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<M;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];le(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);P(o[0]),P(o[1]),P(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);P(s[0]),P(s[1]),P(s[3]),P(s[1]),P(s[2]),P(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function P(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return eo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new da[i.type]().fromJSON(i)),new e(r,t.options)}},$a={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new L(a,o),new L(s,c),new L(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new L(o,1-c),new L(l,1-d),new L(f,1-m),new L(h,1-_)]:[new L(s,1-c),new L(u,1-d),new L(p,1-m),new L(g,1-_)]}};function eo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var to=class e extends Li{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},no=class e extends vr{constructor(e=[new L(0,-.5),new L(.5,0),new L(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ut(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new R,d=new L,f=new R,p=new R,m=new R,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new B(a,3)),this.setAttribute(`uv`,new B(o,2)),this.setAttribute(`normal`,new B(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ro=class e extends vr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new B(p,3)),this.setAttribute(`normal`,new B(m,3)),this.setAttribute(`uv`,new B(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},io=class e extends vr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new L;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new B(s,3)),this.setAttribute(`normal`,new B(c,3)),this.setAttribute(`uv`,new B(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ao=class e extends vr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new B(p,3)),this.setAttribute(`normal`,new B(m,3)),this.setAttribute(`uv`,new B(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends vr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new R,f=new R,p=new R;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new B(c,3)),this.setAttribute(`normal`,new B(l,3)),this.setAttribute(`uv`,new B(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},so=class e extends vr{constructor(e=new la(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,s=new R,c=new L,l=new R,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new B(u,3)),this.setAttribute(`normal`,new B(d,3)),this.setAttribute(`uv`,new B(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function co(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(uo(i))i.isRenderTargetTexture?(et(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(uo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function lo(e){let t={};for(let n=0;n<e.length;n++){let r=co(e[n]);for(let e in r)t[e]=r[e]}return t}function uo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function po(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}var mo={clone:co,merge:lo},ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_o=class extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new It().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new bt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ht().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vo=class extends _o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yo=class extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bo=class extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function So(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var wo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},To=class extends wo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Eo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Do=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends wo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=jo(n,t,g,y,r);i[p]=ko(x,o,_,b,m)}return i}};function ko(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ao(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function jo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ko(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ao(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Mo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Co(e.settings)&&(n.settings={inTangents:So(e.settings.inTangents,Array),outTangents:So(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case F:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return et(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return F;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Co(this.settings)&&(No(this.settings.inTangents,e),No(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Co(this.settings)&&(Po(this.settings.inTangents,e),Po(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(tt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){tt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){tt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){tt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===F,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function No(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Po(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Mo.prototype.ValueTypeName=``,Mo.prototype.TimeBufferType=Float32Array,Mo.prototype.ValueBufferType=Float32Array,Mo.prototype.DefaultInterpolation=Pe;var Fo=class extends Mo{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`bool`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=Ne,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`color`;var Lo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Lo.prototype.ValueTypeName=`number`;var Ro=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)_t.slerpFlat(i,0,a,c-o,a,c,s);return i}},zo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName=`quaternion`,zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Mo{constructor(e,t,n){super(e,t,n)}};Bo.prototype.ValueTypeName=`string`,Bo.prototype.ValueBufferType=Array,Bo.prototype.DefaultInterpolation=Ne,Bo.prototype.InterpolantFactoryMethodLinear=void 0,Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Vo.prototype.ValueTypeName=`vector`;var Ho=class extends gn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Uo=class extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wo=new Ht,Go=new R,Ko=new R,qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ii,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jo=new R,Yo=new _t,Xo=new R,Zo=class extends gn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qo=new R,$o=new L,es=new L,ts=class extends Zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z),Qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z)}getViewSize(e,t){return this.getViewBounds(e,$o,es),t.subVectors(es,$o)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=class extends qo{constructor(){super(new ts(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends Ho{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ns}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},is=class extends Zo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},as=class extends qo{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new as}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ss=class extends vr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},cs=-90,ls=1,us=class extends gn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ts(cs,ls,e,t);r.layers=this.layers,this.add(r);let i=new ts(cs,ls,e,t);i.layers=this.layers,this.add(i);let a=new ts(cs,ls,e,t);a.layers=this.layers,this.add(a);let o=new ts(cs,ls,e,t);o.layers=this.layers,this.add(o);let s=new ts(cs,ls,e,t);s.layers=this.layers,this.add(s);let c=new ts(cs,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ds=class extends ts{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},fs=`\\[\\]\\.:\\/`,ps=RegExp(`[\\[\\]\\.:\\/]`,`g`),ms=`[^\\[\\]\\.:\\/]`,hs=`[^`+fs.replace(`\\.`,``)+`]`,gs=`((?:WC+[\\/:])*)`.replace(`WC`,ms),_s=`(WCOD+)?`.replace(`WCOD`,hs),vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ms),ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ms),bs=RegExp(`^`+gs+_s+vs+ys+`$`),xs=[`material`,`materials`,`bones`,`map`],Ss=class{constructor(e,t,n){let r=n||Cs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Cs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ps,``)}static parseTrackName(e){let t=bs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){et(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){tt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){tt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){tt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){tt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){tt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){tt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){tt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;tt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){tt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){tt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Cs.Composite=Ss,Cs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Cs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Cs.prototype.GetterByBindingType=[Cs.prototype._getValue_direct,Cs.prototype._getValue_array,Cs.prototype._getValue_arrayElement,Cs.prototype._getValue_toArray],Cs.prototype.SetterByBindingTypeAndVersioning=[[Cs.prototype._setValue_direct,Cs.prototype._setValue_direct_setNeedsUpdate,Cs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_array,Cs.prototype._setValue_array_setNeedsUpdate,Cs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_arrayElement,Cs.prototype._setValue_arrayElement_setNeedsUpdate,Cs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_fromArray,Cs.prototype._setValue_fromArray_setNeedsUpdate,Cs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ws(e,t,n,r){let i=Ts(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case P:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ts(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?et(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Es(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Os={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},V={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ks={basic:{uniforms:lo([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.fog]),vertexShader:Os.meshbasic_vert,fragmentShader:Os.meshbasic_frag},lambert:{uniforms:lo([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:Os.meshlambert_vert,fragmentShader:Os.meshlambert_frag},phong:{uniforms:lo([V.common,V.specularmap,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.fog,V.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Os.meshphong_vert,fragmentShader:Os.meshphong_frag},standard:{uniforms:lo([V.common,V.envmap,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag},toon:{uniforms:lo([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new z(0)}}]),vertexShader:Os.meshtoon_vert,fragmentShader:Os.meshtoon_frag},matcap:{uniforms:lo([V.common,V.bumpmap,V.normalmap,V.displacementmap,V.fog,{matcap:{value:null}}]),vertexShader:Os.meshmatcap_vert,fragmentShader:Os.meshmatcap_frag},points:{uniforms:lo([V.points,V.fog]),vertexShader:Os.points_vert,fragmentShader:Os.points_frag},dashed:{uniforms:lo([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Os.linedashed_vert,fragmentShader:Os.linedashed_frag},depth:{uniforms:lo([V.common,V.displacementmap]),vertexShader:Os.depth_vert,fragmentShader:Os.depth_frag},normal:{uniforms:lo([V.common,V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:Os.meshnormal_vert,fragmentShader:Os.meshnormal_frag},sprite:{uniforms:lo([V.sprite,V.fog]),vertexShader:Os.sprite_vert,fragmentShader:Os.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Os.background_vert,fragmentShader:Os.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Os.backgroundCube_vert,fragmentShader:Os.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Os.cube_vert,fragmentShader:Os.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Os.equirect_vert,fragmentShader:Os.equirect_frag},distance:{uniforms:lo([V.common,V.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Os.distance_vert,fragmentShader:Os.distance_frag},shadow:{uniforms:lo([V.lights,V.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:Os.shadow_vert,fragmentShader:Os.shadow_frag}};ks.physical={uniforms:lo([ks.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag};var As={r:0,b:0,g:0},js=new Ht,Ms=new bt;Ms.set(-1,0,0,0,1,0,0,0,1);function Ns(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Hr(new Mi(1,1,1),new _o({name:`BackgroundCubeMaterial`,uniforms:co(ks.backgroundCube.uniforms),vertexShader:ks.backgroundCube.vertexShader,fragmentShader:ks.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(js.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ms),l.material.toneMapped=Tt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Hr(new ro(2,2),new _o({name:`BackgroundMaterial`,uniforms:co(ks.background.uniforms),vertexShader:ks.background.vertexShader,fragmentShader:ks.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(As,po(e)),n.buffers.color.setClear(As.r,As.g,As.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ps(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Fs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Is(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(et(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&et(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&et(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Sr,s=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Rs=class extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Di(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mi(5,5,5),i=new _o({name:`CubemapFromEquirect`,uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Hr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new us(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},zs=256,Bs=3,Vs=20,Hs=256,Us=16,Ws=3,Gs=new R,Ks=new z,qs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new us(1,10,null),this._boxMesh=new Hr(new Mi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Gs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ks));let h=new us(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zs,pt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?zs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Js(e,!1,!1),n=Math.log2(e)-Bs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Js(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$s()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xs(),this._integrationMaterial=Zs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Us);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ws)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Hs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Qs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Js(e,t,n){return new Rs(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:Be,depthBuffer:n})}function Ys(e,t,n){return new _o({name:e,uniforms:t,vertexShader:Os.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Xs(){return Ys(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zs(){return Ys(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Us}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qs(){return Ys(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vs}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $s(){return Ys(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ec(){return Ys(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Rs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function nc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?or:ar)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ic(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:tt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function oc(e,t,n){let r=new WeakMap,i=new It;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new zt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new L(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function lc(e,t,n,r,i,a){let o=new Rt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new vr;u.setAttribute(`position`,new B([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new B([0,2,0,0,2,0],2));let d=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Hr(u,d),p=new is(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Rt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Rt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ki(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Tt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=cc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var uc=new Ft,dc=new ki(1,1),fc=new Ai(1),pc=new zt,mc=new Bt,hc=new Di,gc=[],_c=[],vc=new Float32Array(16),yc=new Float32Array(9),bc=new Float32Array(4);function xc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gc[i];if(a===void 0&&(a=new Float32Array(i),gc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Sc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wc(e,t){let n=_c[t];n===void 0&&(n=new Int32Array(t),_c[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2fv(this.addr,t),Cc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sc(n,t))return;e.uniform3fv(this.addr,t),Cc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4fv(this.addr,t),Cc(n,t)}}function kc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;bc.set(r),e.uniformMatrix2fv(this.addr,!1,bc),Cc(n,r)}}function Ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;yc.set(r),e.uniformMatrix3fv(this.addr,!1,yc),Cc(n,r)}}function jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;vc.set(r),e.uniformMatrix4fv(this.addr,!1,vc),Cc(n,r)}}function Mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2iv(this.addr,t),Cc(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sc(n,t))return;e.uniform3iv(this.addr,t),Cc(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4iv(this.addr,t),Cc(n,t)}}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2uiv(this.addr,t),Cc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sc(n,t))return;e.uniform3uiv(this.addr,t),Cc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4uiv(this.addr,t),Cc(n,t)}}function Bc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Bc(dc):uc,n.setTexture2D(t||a,i)}function Hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mc,i)}function Uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Bc(fc):hc,n.setTextureCube(t||a,i)}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pc,i)}function Gc(e){switch(e){case 5126:return Tc;case 35664:return Ec;case 35665:return Dc;case 35666:return Oc;case 35674:return kc;case 35675:return Ac;case 35676:return jc;case 5124:case 35670:return Mc;case 35667:case 35671:return Nc;case 35668:case 35672:return Pc;case 35669:case 35673:return Fc;case 5125:return Ic;case 36294:return Lc;case 36295:return Rc;case 36296:return zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Vc;case 35679:case 36299:case 36307:return Hc;case 35680:case 36300:case 36308:case 36293:return Uc;case 36289:case 36303:case 36311:case 36292:return Wc}}function Kc(e,t){e.uniform1fv(this.addr,t)}function qc(e,t){let n=xc(t,this.size,2);e.uniform2fv(this.addr,n)}function Jc(e,t){let n=xc(t,this.size,3);e.uniform3fv(this.addr,n)}function Yc(e,t){let n=xc(t,this.size,4);e.uniform4fv(this.addr,n)}function Xc(e,t){let n=xc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Zc(e,t){let n=xc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qc(e,t){let n=xc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $c(e,t){e.uniform1iv(this.addr,t)}function el(e,t){e.uniform2iv(this.addr,t)}function tl(e,t){e.uniform3iv(this.addr,t)}function nl(e,t){e.uniform4iv(this.addr,t)}function rl(e,t){e.uniform1uiv(this.addr,t)}function il(e,t){e.uniform2uiv(this.addr,t)}function al(e,t){e.uniform3uiv(this.addr,t)}function ol(e,t){e.uniform4uiv(this.addr,t)}function sl(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Bc(dc):uc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cl(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mc,a[e])}function ll(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Bc(fc):hc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ul(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pc,a[e])}function dl(e){switch(e){case 5126:return Kc;case 35664:return qc;case 35665:return Jc;case 35666:return Yc;case 35674:return Xc;case 35675:return Zc;case 35676:return Qc;case 5124:case 35670:return $c;case 35667:case 35671:return el;case 35668:case 35672:return tl;case 35669:case 35673:return nl;case 5125:return rl;case 36294:return il;case 36295:return al;case 36296:return ol;case 35678:case 36198:case 36298:case 36306:case 35682:return sl;case 35679:case 36299:case 36307:return cl;case 35680:case 36300:case 36308:case 36293:return ll;case 36289:case 36303:case 36311:case 36292:return ul}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gc(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dl(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function gl(e,t){e.seq.push(t),e.map[t.id]=t}function _l(e,t,n){let r=e.name,i=r.length;for(hl.lastIndex=0;;){let a=hl.exec(r),o=hl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gl(n,l===void 0?new fl(s,e,t):new pl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ml(s),gl(n,e)),n=e}}}var vl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_l(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bl=37297,xl=0;function Sl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cl=new bt;function wl(e){Tt._getMatrix(Cl,Tt.workingColorSpace,e);let t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(Tt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return et(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sl(e.getShaderSource(t),r)}return i}function El(e,t){let n=wl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Dl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ol(e,t){let n=Dl[t];return n===void 0?(et(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kl=new R;function Al(){return Tt.getLuminanceCoefficients(kl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kl.x.toFixed(4)}, ${kl.y.toFixed(4)}, ${kl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pl).join(`
`)}function Ml(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pl(e){return e!==``}function Fl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Il(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ll=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(e){return e.replace(Ll,zl)}function zl(e,t){let n=Os[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Rl(n)}var Bl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(e){return e.replace(Bl,Hl)}function Hl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ul(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Wl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Gl(e){return Wl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Kl={302:`ENVMAP_MODE_REFRACTION`};function ql(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Kl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jl[e.combine]||`ENVMAP_BLENDING_NONE`}function Xl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Gl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=ql(n),d=Yl(n),f=jl(n),p=Ml(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Pl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Pl).join(`
`),g.length>0&&(g+=`
`)):(h=[Ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pl).join(`
`),g=[Ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Os.tonemapping_pars_fragment,n.toneMapping===0?``:Ol(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Os.colorspace_pars_fragment,El(`linearToOutputTexel`,n.outputColorSpace),Al(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pl).join(`
`)),o=Rl(o),o=Fl(o,n),o=Il(o,n),s=Rl(s),s=Fl(s,n),s=Il(s,n),o=Vl(o),s=Vl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=yl(i,i.VERTEX_SHADER,v),x=yl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Tl(i,b,`vertex`),n=Tl(i,x,`fragment`);tt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):et(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new vl(i,m),w=Nl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,bl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Zl=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $l(e),t.set(e,n)),n}},$l=class{constructor(e){this.id=Zl++,this.code=e,this.usedTimes=0}};function eu(e){return e===1030||e===37490||e===36285}function tu(e,t,n,r,i,a){let o=new $t,s=new Ql,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&et(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ks[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),A=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,j=!!i.map,re=!!i.matcap,M=!!b,ie=M&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,P=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:A,instancingColor:A&&m.instanceColor!==null,instancingMorph:A&&m.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?I.length-1:null,envMapSize:ie?I[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&eu(i.normalMap.format),metalnessMap:N,roughnessMap:P,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:j&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:P&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(j||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&Tt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ks[t];n=mo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Xl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function nu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ru(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function iu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function au(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ru),r.length>1&&r.sort(t||iu),i.length>1&&i.sort(t||iu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ou(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new au,e.set(t,[i])):n>=r.length?(i=new au,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function su(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new z};break;case`SpotLight`:n={position:new R,direction:new R,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function cu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var lu=0;function uu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function du(e){let t=new su,n=cu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new Ht,o=new Ht;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(uu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=V.LTC_FLOAT_1,r.rectAreaLTC2=V.LTC_FLOAT_2):(r.rectAreaLTC1=V.LTC_HALF_1,r.rectAreaLTC2=V.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=lu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function fu(e){let t=new du(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function pu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fu(e),t.set(n,[a])):r>=i.length?(a=new fu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var mu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gu=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],_u=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],vu=new Ht,yu=new R,bu=new R;function xu(e,t,n){let i=new ii,a=new L,s=new L,c=new It,l=new bo,u=new xo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:mu,fragmentShader:hu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new vr;y.setAttribute(`position`,new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Hr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(et(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){et(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){et(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Rt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ki(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Rs(a.x),p.map.depthTexture=new Ai(a.x,m)):(p.map=new Rt(a.x,a.y),p.map.depthTexture=new ki(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),yu.setFromMatrixPosition(d.matrixWorld),e.position.copy(yu),bu.copy(e.position),bu.add(gu[t]),e.up.copy(_u[t]),e.lookAt(bu),e.updateMatrixWorld(),n.makeTranslation(-yu.x,-yu.y,-yu.z),vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(vu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Rt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Su(e,t){function n(){let t=!1,n=new It,r=null,i=new It(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):P(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):P(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new It().fromArray(ae),ce=new It().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),N(e.CULL_FACE),ge(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function P(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(P(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:tt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:tt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:tt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:tt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?P(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):P(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?P(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(ee!==n||te!==r)&&(ee=n,te=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):P(e.POLYGON_OFFSET_FILL)}function Se(t){t?N(e.SCISSOR_TEST):P(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function we(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Te(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){tt(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function I(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function ze(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:P,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:Be}}function Cu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ye(`canvas`)}function O(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),et(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&et(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];et(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||et(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ve:Tt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,et(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),M(e),le(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),N(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ue(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ue(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function N(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&oe(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let P=0;function de(){P=0}function fe(){return P}function pe(e){P=e}function me(){let e=P;return e>=p.maxTextures&&et(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),P+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(e,t){let n=f.get(e);if(e.isVideoTexture&&Re(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)et(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)et(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ve(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ye(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Oe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let be={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},xe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Se={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Ce(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&et(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,be[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,be[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,be[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,xe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,xe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Se[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function we(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ie),re(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=he(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ue(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Te(r.start,t.width,4),c=Te(n.start,t.width,4);r.start<=o+1&&s===c&&Te(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function De(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=we(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Tt.getPrimaries(Tt.workingColorSpace),n=t.colorSpace===``?null:Tt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=ze(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Ce(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ee(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ws(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ws(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Be(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Be(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Oe(e,t,n){if(t.image.length!==6)return;let r=we(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Tt.getPrimaries(Tt.workingColorSpace),o=t.colorSpace===``?null:Tt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ze(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);Ce(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=ne(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?et(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Be(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ke(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Le(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function je(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ye(t.depthTexture,0):ge(t.depthTexture,0);let o=i.__webglTexture,s=Le(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)je(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?je(t.__webglFramebuffer[0],e,0):je(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ae(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ae(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ne(e,t,n){let r=f.get(e);t!==void 0&&ke(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Me(e)}function Pe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ae),re(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&I(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Le(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ae(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Ce(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ke(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?ee(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Ce(o,r),ke(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Ce(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ke(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?ee(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Me(e)}function F(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Fe=[];function Ie(e){if(e.samples>0){if(I(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Fe.length=0,Fe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Fe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Fe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Le(e){return Math.min(p.maxSamples,e.samples)}function I(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Re(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Tt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&et(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):tt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=ce}function wu(e,t){function n(n,r=``){let i,a=Tt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ji(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _o({vertexShader:Tu,fragmentShader:Eu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hr(new ro(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Du,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new L,k=null,ee=null,te=new ts;te.viewport=new It;let A=new ts;A.viewport=new It;let ne=[te,A],j=new ds,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new yn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new yn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new yn,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),ee!==null){let e=ee.camera;e.fov=ee.fov,e.zoom=ee.zoom,e.updateProjectionMatrix(),ee=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&et(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&et(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Rt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new ki(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Rt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),ee===null&&e.isPerspectiveCamera&&(ee={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new ts,o.layers.enable(n),o.viewport=new It,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ji,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let N=new Es;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},ku=new Ht,Au=new bt;Au.set(-1,0,0,0,1,0,0,0,1);function ju(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,po(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ku.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Au),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?et(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):et(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Nu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pu=null;function Fu(){return Pu===null&&(Pu=new Gr(Nu,16,16,k,g),Pu.name=`DFG_LUT`,Pu.minFilter=o,Pu.magFilter=o,Pu.wrapS=t,Pu.wrapT=t,Pu.generateMipmaps=!1,Pu.needsUpdate=!0),Pu}var Iu=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,ee,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=ze;let le=0,ue=0,N=null,P=-1,de=null,fe=new It,pe=new It,me=null,he=new z(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new It(0,0,_e,ve),Ce=new It(0,0,_e,ve),we=!1,Te=new ii,Ee=new oi,De=!1,Oe=!1,ke=new Ht,Ae=new R,je=new It,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?ye:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,nt,it,at,ot,st,ct,lt,ut;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,pt,!1),t.addEventListener(`webglcontextrestored`,mt,!1),t.addEventListener(`webglcontextcreationerror`,ht,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}dt()}catch(e){throw t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),tt(`WebGLRenderer: `+e.message),e}function dt(){Ie=new nc(F),Ie.init(),ct=new wu(F,Ie),Le=new Is(F,Ie,e,ct),I=new Su(F,Ie),Le.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),oe=F.createFramebuffer(),se=F.createFramebuffer(),ce=F.createFramebuffer(),Re=new ac(F),Be=new nu,Ve=new Cu(F,Ie,I,Be,Le,ct,Re),He=new tc(M),Ue=new Ds(F),lt=new Ps(F,Ue),We=new rc(F,Ue,Re,lt),Ge=new sc(F,We,Ue,lt,Re),at=new oc(F,Le,Ve),$e=new Ls(Be),qe=new tu(M,He,Ie,Le,lt,$e),Je=new ju(M,Be),Ye=new ou,Ze=new pu(Ie),it=new Ns(M,He,I,Ge,x,s),nt=new xu(M,Ge,Le),ut=new Mu(F,Re,Le,I),ot=new Fs(F,Ie,Re),st=new ic(F,Ie,Re),Re.programs=qe.programs,M.capabilities=Le,M.extensions=Ie,M.properties=Be,M.renderLists=Ye,M.shadowMap=nt,M.state=I,M.info=Re}S!==1009&&(re=new lc(S,t.width,t.height,o,r,i));let ft=new Ou(M,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ft.isPresenting?et(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)tt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){et(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=it.getClearColor(),r=it.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,pt,!1),t.removeEventListener(`webglcontextrestored`,mt,!1),t.removeEventListener(`webglcontextcreationerror`,ht,!1),it.dispose(),Ye.dispose(),Ze.dispose(),Ve.dispose(),Be.dispose(),He.dispose(),Ge.dispose(),We.dispose(),lt.dispose(),ut.dispose(),qe.dispose(),ft.dispose(),ft.removeEventListener(`sessionstart`,xt),ft.removeEventListener(`sessionend`,St),Ct.stop()};function pt(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ie=!0}function mt(){Qe(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;dt(),Re.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function ht(e){tt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function gt(e){let t=e.target;t.removeEventListener(`dispose`,gt),L(t)}function L(e){_t(e),Be.remove(e)}function _t(e){let t=Be.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ft(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;lt.setup(i,r,s,n,c);let h,g=ot;if(c!==null&&(h=Ue.get(c),g=st,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=Be.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),De===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,jt(e,t,r),e.side=0,e.needsUpdate=!0,jt(e,t,r),e.side=2):jt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=Ze.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),Oe=this.localClippingEnabled,De=$e.init(this.clippingPlanes,Oe),De===!0&&$e.setGlobalState(this.clippingPlanes,t),ae!==null&&nt.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Be.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new Es;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,ft.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},ft.addEventListener(`sessionstart`,xt),ft.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){tt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=ft.enabled===!0&&ft.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(t),t=ft.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=Ze.get(e,j.length),A.init(t),A.state.textureUnits=Ve.getTextureUnits(),j.push(A),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,Ke,t.reversedDepth),Oe=this.localClippingEnabled,De=$e.init(this.clippingPlanes,Oe),k=Ye.get(e,ne.length),k.init(),ne.push(k),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,M.sortObjects)}wt(e,t,0,M.sortObjects),k.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&k.sort(be,xe),Ne=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ne&&it.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&$e.beginShadows();let i=A.state.shadowsArray;if(nt.render(i,e,t),De===!0&&$e.endShadows(),(r&&re.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Ne&&it.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(k,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Ne&&it.render(e),Et(k,e,t)}N!==null&&ue===0&&(Ve.updateMultisampleRenderTarget(N),Ve.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),lt.resetDefaultState(),P=-1,de=null,j.pop(),j.length>0?(A=j[j.length-1],Ve.setTextureUnits(A.state.textureUnits),De===!0&&$e.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),k=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ge.update(e),a=e.material;a.visible&&k.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,je.z,s,t)}}else a.visible&&k.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),De===!0&&$e.setGlobalState(M.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Rt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&it.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),De===!0&&$e.setGlobalState(M.clippingPlanes,r),Ot(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(he,ge),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function At(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function jt(e,t,n){t.isScene!==!0&&(t=Me);let r=Be.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,gt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Pt(e,s),d}else s.uniforms=qe.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),Pt(e,s),r.needsLights=zt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=At(A.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Mt(e,t,n,r,i){let a=Be.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=jt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Nt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Pt(e,t){let n=Be.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ft(e,t,n,r,i){t.isScene!==!0&&(t=Me),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Tt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Be.get(r),y=A.state.lights;if(De===!0&&(Oe===!0||e!==de)){let t=e===de&&r.id===P;$e.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===At(A.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Mt(r,t,i,s,h):jt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==P&&(P=r.id,w=!0),C||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Ve),y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,Ve),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,Ve),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,Ve));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&at.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Fu()),w){if(E.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Lt(O,T),a&&r.fog===!0&&Je.refreshFogUniforms(O,a),Je.refreshMaterialUniforms(O,r,ye,ve,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of A.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}vl.upload(F,Nt(v),O,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vl.upload(F,Nt(v),O,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ut.update(n,S),ut.bind(n,S)}}return S}function Lt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function zt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=Be.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Be.get(e.texture).__webglTexture=t,Be.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Be.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=Be.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),P=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,Be.get(e.texture).__webglTexture,Be.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Be.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Be.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?Be.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=oe),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=Be.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Be.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Be.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}P=-1};function Bt(e){let t=Be.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Bt(o);if(u.__formatReadable===!1){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,ct.convert(c),ct.convert(l),a)}finally{let e=N===null?null:Be.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Bt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,ct.convert(l),ct.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=N===null?null:Be.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await rt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ct.convert(t.format),_=ct.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Be.get(e),r=Be.get(t),h=Be.get(n.__renderTarget),g=Be.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Be.has(e)){let n=Be.get(e),r=Be.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,se),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){Be.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,I.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}},Lu=`
float hash13(vec3 p){p=fract(p*.1031);p+=dot(p,p.zyx+31.32);return fract((p.x+p.y)*p.z);}
vec3 hash33(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
float gnoise(vec3 x){vec3 i=floor(x),f=fract(x),u=f*f*f*(f*(f*6.-15.)+10.);
 #define G(o) dot(hash33(i+o)*2.-1.,f-o)
 return mix(mix(mix(G(vec3(0,0,0)),G(vec3(1,0,0)),u.x),mix(G(vec3(0,1,0)),G(vec3(1,1,0)),u.x),u.y),
  mix(mix(G(vec3(0,0,1)),G(vec3(1,0,1)),u.x),mix(G(vec3(0,1,1)),G(vec3(1,1,1)),u.x),u.y),u.z);}
float fbm(vec3 p,int n){float a=.5,s=0.;for(int i=0;i<n;i++){s+=a*gnoise(p);p=p.yzx*2.03+17.1;a*=.5;}return s;}
float ridge(vec3 p,int n){float a=.5,s=0.;for(int i=0;i<n;i++){s+=a*(1.-abs(gnoise(p))*2.2);p=p.yzx*2.07+9.7;a*=.5;}return s;}
float ign(vec2 p){return fract(52.9829189*fract(dot(p,vec2(.06711056,.00583715))));}
`,Ru={transparent:!0,depthWrite:!1,blending:2},zu={transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205},Bu={value:0},H=(e,t,n)=>new R(e,t,n),Vu=e=>{let t=new z(e);return H(t.r,t.g,t.b)};function Hu(e){let t=e>>>0,n=()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};return n.range=(e,t)=>e+n()*(t-e),n.pick=e=>e[n()*e.length|0],n.gauss=()=>Math.sqrt(-2*Math.log(1-n()))*Math.cos(6.2832*n()),n.dir=()=>{let e=n()*2-1,t=n()*6.2832,r=Math.sqrt(1-e*e);return H(r*Math.cos(t),e,r*Math.sin(t))},n}var Uu;function Wu(){if(Uu)return Uu;let t=new Uint8Array(64**3*4),n=Hu(7),r=e=>{let t=new Float32Array(e**3);for(let e=0;e<t.length;e++)t[e]=n()*2-1;return t},i=e=>e*e*(3-2*e),a=[4,8,16,32].map(e=>[e,r(e)]),s=[4,8,16,32].map(e=>[e,r(e)]),c=([e,t],n,r,a)=>{let o=e/64;n*=o,r*=o,a*=o;let s=n|0,c=r|0,l=a|0,u=i(n-s),d=i(r-c),f=i(a-l),p=(s+1)%e,m=(c+1)%e,h=(l+1)%e,g=(n,r,i)=>t[(i*e+r)*e+n],_=(e,t,n)=>e+(t-e)*n;return _(_(_(g(s,c,l),g(p,c,l),u),_(g(s,m,l),g(p,m,l),u),d),_(_(g(s,c,h),g(p,c,h),u),_(g(s,m,h),g(p,m,h),u),d),f)},l=0;for(let e=0;e<64;e++)for(let n=0;n<64;n++)for(let r=0;r<64;r++){let i=0,o=0,u=.5;for(let t=0;t<4;t++)i+=u*c(a[t],r,n,e),o+=u*(1-2.2*Math.abs(c(s[t],r,n,e))),u*=.55;t[l++]=Math.max(0,Math.min(255,(i*.75+.5)*255)),t[l++]=Math.max(0,Math.min(255,(o*.6+.2)*255)),t[l++]=(c(a[3],r,n,e)*.5+.5)*255,t[l++]=255}return Uu=new Bt(t,64,64,64),Uu.wrapS=Uu.wrapT=Uu.wrapR=e,Uu.minFilter=Uu.magFilter=o,Uu.unpackAlignment=1,Uu.needsUpdate=!0,Uu}var Gu=299792458,Ku=9460730472580800,qu=149597870700,Ju=0x38d7ea4c68000,Yu={uBDir:{value:new R(0,0,-1)},uBeta:{value:0},uMeas:{value:0},uFwd:{value:new R(0,0,-1)},uTime:{value:0},uLogG:{value:0}},Xu=`
uniform vec3 uBDir,uFwd;uniform float uBeta,uMeas;
#define LDK ${(1/Math.log2(0x38d7ea4c68001)).toPrecision(9)}
vec3 aberr(vec3 p){if(uBeta<1e-4)return p;float l=length(p);vec3 n=p/l;float c=dot(n,uBDir),g=1./sqrt(1.-uBeta*uBeta);vec3 q=n-c*uBDir;
 if(uMeas>.5)return l*normalize(uBDir*c/g+q);
 float k=1.+uBeta*c;return l*normalize(uBDir*(c+uBeta)/k+q/(g*k));}
vec3 unab(vec3 n){if(uBeta<1e-4)return n;float c=dot(n,uBDir),g=1./sqrt(1.-uBeta*uBeta);vec3 q=n-c*uBDir;
 if(uMeas>.5)return normalize(uBDir*c*g+q);
 float k=1.-uBeta*c;return normalize(uBDir*(c-uBeta)/k+q/(g*k));}
// A black body of temperature T seen at frequency factor D is exactly a black body of temperature T*D.
vec3 planck(float T){return 1./(exp(min(vec3(23587.,26160.,30942.)/max(T,1.),60.))-1.);} // relative radiance at 610, 550, 465 nm
vec3 bbShift(float T,float D){vec3 x=vec3(23587.,26160.,30942.)/T;return (exp(min(x,60.))-1.)/(exp(min(x/max(D,.02),60.))-1.);}
// Doppler shift of colour. Starlight, glowing gas and dust have broad smooth spectra, and a black body of temperature T seen at
// frequency factor D is exactly a black body at T*D. So each pixel is read as a smooth spectrum: the temperature whose red/blue ratio
// matches it, and every channel is scaled by how that spectrum's radiance changes there. Ahead: bluer and brighter; behind: redder
// and dimmer, sliding smoothly with angle (no rainbow rings: those need pure spectral lines).
vec3 shiftCol(vec3 col,float D){if(abs(D-1.)<1e-3)return col;col=max(col,0.);float rb=(col.r+1e-5)/(col.b+1e-5),lo=log(1200.),hi=log(6e4);
 for(int i=0;i<14;i++){float mm=.5*(lo+hi),T=exp(mm),f=.2567*(exp(min(30942./T,60.))-1.)/(exp(min(23587./T,60.))-1.);if(f>rb)lo=mm;else hi=mm;}
 vec3 k=pow(max(bbShift(exp(.5*(lo+hi)),D),1e-12),vec3(.6));return col*min(k,vec3(40.));}
float dopF(vec3 n){return uBeta<1e-4?1.:(1.+uBeta*dot(n,uBDir))/sqrt(1.-uBeta*uBeta);}
vec3 doppler(vec3 col,vec3 n){return uBeta<1e-4?col:shiftCol(col,dopF(n));}
float logd(float w){return log2(max(1.+w,1e-6))*LDK;}
`,Zu=Xu+`uniform vec3 uOff;uniform float uScale;varying vec3 vP;
void main(){vec3 p=aberr(position*uScale+uOff);vP=p;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);}`;function Qu(e){return new _o({...e,uniforms:{...Yu,...e.uniforms}})}var $u=Xu+`uniform vec3 uOff;uniform float uScale;varying vec2 vUv;varying float vLW;
void main(){vUv=uv*2.-1.;vec4 m=vec4(mat3(viewMatrix)*aberr(uOff),1.);m.xy+=position.xy*uScale;gl_Position=projectionMatrix*m;vLW=gl_Position.w;}`,ed=e=>{let t=Math.floor(Math.log10(e));return(e/10**t).toFixed(1)+` × 10`+[...String(t)].map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[e]).join(``)};function td(e){let t=Math.abs(e)/Gu;if(e<1e3)return e.toFixed(+(e<100))+` m`;if(e<1e6)return(e/1e3).toFixed(+(e<1e5))+` km`;if(t<.1)return Math.round(e/1e3).toLocaleString(`en`)+` km`;if(t<60)return t.toFixed(2)+` ls`;if(t<3600)return(t/60).toFixed(2)+` lm`;if(t<86400)return(t/3600).toFixed(2)+` lh`;if(t<2592e3)return(t/86400).toFixed(2)+` ld`;let n=e/Ku;return n<1e3?n.toFixed(2)+` ly`:n<1e6?(n/1e3).toFixed(2)+` kly`:n<1e9?(n/1e6).toFixed(2)+` Mly`:n<0x9184e72a000?(n/1e9).toFixed(2)+` Gly`:ed(n)+` ly`}function nd(e){return e<10?e.toFixed(e<.095?3:1)+` s`:e<60?e.toFixed(0)+` s`:e<3600?(e/60).toFixed(1)+` min`:e<86400?(e/3600).toFixed(1)+` h`:e<3156e4?(e/86400).toFixed(1)+` days`:e<3156e7?(e/3156e4).toFixed(1)+` years`:e<3156e10?(e/3156e7).toFixed(1)+` thousand years`:e<0x701fa71d1c8000?(e/3156e10).toFixed(2)+` million years`:e<0x1b5fba4c9b7540000?(e/0x701fa71d1c8000).toFixed(2)+` billion years`:ed(e/3156e4)+` years`}var rd=new vr;rd.setAttribute(`position`,new B([-1,-1,0,3,-1,0,-1,3,0],3));var id=`varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}`,ad=(e,t,n={})=>new _o({uniforms:e,vertexShader:id,fragmentShader:t,depthTest:!1,depthWrite:!1,...n}),od=class{constructor(e){this.r=e,this.scale=.85,this.cam=new Zo,this.mesh=new Hr(rd),this.mesh.frustumCulled=!1,this.scene=new Tn,this.scene.add(this.mesh);let t={type:g};this.rt=new Rt(4,4,{...t,samples:2}),this.mips=Array.from({length:6},()=>new Rt(4,4,{...t,depthBuffer:!1})),this.down=ad({t:{value:null},px:{value:new L},first:{value:0}},`
      varying vec2 vUv;uniform sampler2D t;uniform vec2 px;uniform float first;
      vec3 s(float x,float y){vec3 c=texture2D(t,vUv+vec2(x,y)*px).rgb;c=clamp(c,0.,60.);if(first>.5){float l=max(c.r,max(c.g,c.b));c*=smoothstep(.35,1.6,l)/(1.+l*.025);}return c;}
      void main(){vec3 c=s(0.,0.)*.25+(s(-1.,-1.)+s(1.,-1.)+s(-1.,1.)+s(1.,1.))*.125+(s(-2.,0.)+s(2.,0.)+s(0.,2.)+s(0.,-2.))*.0625;gl_FragColor=vec4(c,1.);}`),this.up=ad({t:{value:null},px:{value:new L}},`
      varying vec2 vUv;uniform sampler2D t;uniform vec2 px;
      vec3 s(float x,float y){return texture2D(t,vUv+vec2(x,y)*px).rgb;}
      void main(){vec3 c=s(0.,0.)*4.+(s(-1.,0.)+s(1.,0.)+s(0.,-1.)+s(0.,1.))*2.+s(-1.,-1.)+s(1.,-1.)+s(-1.,1.)+s(1.,1.);gl_FragColor=vec4(c/16.*.82,1.);}`,{blending:2,transparent:!0}),this.u={t:{value:this.rt.texture},b:{value:this.mips[0].texture},uTime:{value:0},uWarp:{value:0},uFlash:{value:new It(1,1,1,0)},uHeat:{value:0},uBend:{value:0},uSpeed:{value:0},uAspect:{value:1},uFade:{value:1}},this.final=ad(this.u,`
      varying vec2 vUv;uniform sampler2D t,b;uniform float uTime,uWarp,uHeat,uBend,uSpeed,uAspect,uFade;uniform vec4 uFlash;
      float h(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
      vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
      void main(){vec2 p=vUv-.5;vec2 q=p*vec2(uAspect,1.);float r=length(q);
       vec2 uv=vUv-p*uBend*(.25-r*r)*.35;
       uv+=vec2(sin(uv.y*60.+uTime*9.),cos(uv.x*50.+uTime*8.))*.0016*uHeat;
       float blur=uWarp*.35+uSpeed*.018;vec3 c=vec3(0);
       if(blur>.002){float j=h(gl_FragCoord.xy+uTime);for(int i=0;i<8;i++){float k=(float(i)+j)/8.;c+=texture2D(t,uv-p*blur*k).rgb;}c/=8.;}
       else{float ca=.0012*r+uBend*.006*r;c=vec3(texture2D(t,uv-p*ca).r,texture2D(t,uv).g,texture2D(t,uv+p*ca).b);}
       c=min(c,vec3(60.));
       c+=texture2D(b,uv).rgb*.11;
       if(uWarp>.001){float a=atan(q.y,q.x);vec3 tun=vec3(0);
        for(int i=0;i<3;i++){float fi=float(i),N=90.+fi*70.;float id=floor(a/6.2832*N);float hh=h(vec2(id,fi*7.3));
         float z=fract(.18/(r+.02)*(.4+hh*.5)+uTime*(.7+hh*1.3)+hh*9.);
         float s=smoothstep(0.,.25,z)*smoothstep(1.,.3,z)*pow(hh,4.)*smoothstep(.5,0.,abs(fract(a/6.2832*N)-.5));
         tun+=s*mix(vec3(.4,.65,1.),vec3(1.,.55,.8),h(vec2(id,3.)))*smoothstep(.02,.5,r)*3.;}
        tun+=vec3(.75,.85,1.)*exp(-r*(14.-uWarp*10.))*2.5;
        c=mix(c,tun,smoothstep(.15,.75,uWarp));c+=tun*uWarp*.4;}
       c*=1.-.55*smoothstep(.35,1.15,r);
       c+=vec3(1.,.28,.06)*uHeat*smoothstep(.25,1.,r)*.7;
       c=mix(c,vec3(dot(c,vec3(.3,.5,.2)))*vec3(1.15,.8,.75),uBend*.35);
       c+=uFlash.rgb*uFlash.a;
       c=aces(c*.95*uFade);c=pow(c,vec3(1./2.2));
       c+=(h(gl_FragCoord.xy+fract(uTime)*91.)-.5)*.016;
       gl_FragColor=vec4(c,1.);}`)}size(e,t){this.w=e,this.h=t,this.apply()}apply(){let e=Math.max(2,this.w*this.scale|0),t=Math.max(2,this.h*this.scale|0);this.rt.setSize(e,t);for(let n of this.mips)e=Math.max(2,e>>1),t=Math.max(2,t>>1),n.setSize(e,t);this.u.uAspect.value=this.w/this.h}pass(e,t,n=!0){this.mesh.material=e,this.r.setRenderTarget(t),this.r.autoClear=n,this.r.render(this.scene,this.cam)}render(e,t){let n=this.r;n.autoClear=!0,n.setRenderTarget(this.rt),n.render(e,t);let r=this.rt;this.mips.forEach((e,t)=>{this.down.uniforms.t.value=r.texture,this.down.uniforms.px.value.set(1/r.width,1/r.height),this.down.uniforms.first.value=+(t===0),this.pass(this.down,e),r=e});for(let e=5;e>0;e--){let t=this.mips[e];this.up.uniforms.t.value=t.texture,this.up.uniforms.px.value.set(1/t.width,1/t.height),this.pass(this.up,this.mips[e-1],!1)}this.pass(this.final,null),n.autoClear=!0}},sd=2.7;function cd(e,t,n=1,r=2,i=sd,a=0){let o=new Hr(new ro(2,2).rotateX(-Math.PI/2),new _o({...zu,side:2,uniforms:{uSeed:{value:e},uGain:{value:n},uA:{value:new R(r,i,a)}},vertexShader:`varying vec2 vUv;void main(){vUv=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:Lu+`
    varying vec2 vUv;uniform float uSeed,uGain;uniform vec3 uA;
    void main(){float r=length(vUv);if(r>1.)discard;if(uA.z>.5){gl_FragColor=vec4(vec3(1.,.8,.58)*(exp(-r*r*120.)*1.1+exp(-r*5.5)*.8)*smoothstep(1.,.6,r)*uGain,0.);return;}
     float th=atan(vUv.y,vUv.x)-log(r+.03)*uA.y;
     float n=fbm(vec3(vUv*5.,uSeed),5),n2=fbm(vec3(vUv*13.,uSeed+7.),5);
     float arm=pow(clamp(.5+.5*cos(uA.x*th+n*2.2),0.,1.),2.2);
     float lane=pow(clamp(.5+.5*cos(uA.x*th+1.15+n*2.8),0.,1.),5.)*smoothstep(.07,.2,r)*smoothstep(.95,.5,r);
     float f=exp(-r*3.6)*smoothstep(1.,.55,r);
     float bulge=exp(-r*r*150.)*1.3+exp(-r*14.)*.55;
     vec3 blue=vec3(.28,.46,1.),warm=vec3(1.,.72,.42),pink=vec3(1.,.22,.42);
     vec3 c=mix(warm,blue,smoothstep(.08,.5,r))*f*(.12+arm*(.65+n2*1.5))*1.25;
     c+=pink*arm*pow(clamp(n2*2.2+.15,0.,1.),2.)*f*smoothstep(.12,.3,r)*2.2;
     c+=warm*bulge;
     float dk=lane*clamp(.62+n2*1.3,0.,1.);
     c*=1.-.88*dk;
     gl_FragColor=vec4(max(c,0.)*uGain,clamp(dk*.55*smoothstep(1.,.5,r),0.,1.)*min(uGain,1.));}`}));return o.scale.setScalar(t),o}var ld={star:`#ffc45e`,binary:`#ff8a5e`,nebula:`#ff5f9e`,pulsar:`#58e6ff`,blackhole:`#a77bff`,quasar:`#ffffff`};function ud(e){let t=Hu(e.seed+99),n=e.R<14e3?16e3:6e4,r=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),o=Math.max(1,e.arms);for(let s=0;s<n;s++){let n=t()<.1||e.ell,c=!n&&t()<.22,l,u,d,f,p=t();if(c||n){let n=t.dir();f=c?Math.abs(t.gauss())*75:t()**(e.ell?2.6:1.6)*900,l=n.x*f,u=n.y*f*(c||e.ell?.65:.5),d=n.z*f}else{f=Math.min(985,30-Math.log(1-t()*.97)*250);let n=t.gauss()*(.34+t()*.25)*2/o,r=Math.log(f/1e3+.03)*e.wind+Math.floor(t()*o)/o*6.28319+n;l=Math.cos(r)*f,d=Math.sin(r)*f,u=t.gauss()*13*(1.3-f/1e3)}r.set([l,u,d],s*3);let m=Math.min(1,f/480),h=(c||n?.28:.42)*(.4+t()),g=p<.03&&!n&&f>150?[1.5,.3,.6]:e.ell?[1.1,.78,.5]:[1.1-.55*m,.72+.02*m,.42+.75*m];i.set(g.map(e=>e*h),s*3),a[s]=p<.03?4.5:t()<.01?6:1+t()*2}let s=new vr;s.setAttribute(`position`,new ir(r,3)),s.setAttribute(`color`,new ir(i,3)),s.setAttribute(`size`,new ir(a,1));let c=new Ti(s,new _o({...Ru,depthTest:!1,vertexColors:!0,uniforms:{uS:{value:1},uFade:{value:1}},vertexShader:`attribute float size;uniform float uS,uFade;varying vec3 vC;void main(){vC=color*uFade;vec4 m=modelViewMatrix*vec4(position,1.);float s=size*uS*900./max(-m.z,1e-6);gl_PointSize=clamp(s,1.2,9.);vC*=min(1.,s/1.2);gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec3 vC;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vC*exp(-d*d*4.)*smoothstep(1.,.7,d),1.);}`}));return c.frustumCulled=!1,c}var dd=[`ae`,`ly`,`ra`,`the`,`on`,`vel`,`or`,`ith`,`mur`,`sa`,`ne`,`is`,`cal`,`dro`,`em`,`ul`,`ka`,`phe`,`ri`,`os`,`tan`,`ya`,`zu`,`ber`],fd=e=>{let t=``,n=e()<.45?2:3;for(let r=0;r<n;r++)t+=e.pick(dd);return t[0].toUpperCase()+t.slice(1)};function pd(e){let t=Hu(e),n=[`star`,`nebula`,`pulsar`,`blackhole`,`star`,`binary`,`nebula`,`star`,`pulsar`,`blackhole`,`binary`,`star`].map((e,n)=>{let r=190+n*7%12/12*560+t()*40,i=Math.log(r/1e3+.03)*sd+n%2*Math.PI+t.gauss()*.12;return{id:n,type:e,name:fd(t),seed:t()*1e9|0,at:[Math.cos(i)*r,t.gauss()*8,Math.sin(i)*r],first:n===0}});return n.push({id:12,type:`quasar`,name:`The Heart`,seed:t()*1e9|0,at:[0,0,0]}),n}var md=[10,40,160,640,2560],hd=md.map(e=>e*6);function gd(e,t,n,r){let i=e.m,a=(i[0]*t+i[1]*n+i[2]*r)/e.R,o=(i[3]*t+i[4]*n+i[5]*r)/e.R,s=(i[6]*t+i[7]*n+i[8]*r)/e.R,c=Math.hypot(a,s),l=e=>e>1.1?Math.max(0,1-(e-1.1)*6):1;if(e.ell){let e=Math.hypot(a,o*1.5,s);return 4.5*Math.exp(-e*5.5)*l(e)}let u=Math.abs(o)/(.018+.052*Math.exp(-c*c*60)),d=.5+.5*Math.cos(e.arms*(Math.atan2(s,a)-Math.log(c+.03)*e.wind));return(Math.exp(-c*3.2)*(.45+1.1*d*d)*2.6+5*Math.exp(-c*c*120))*Math.exp(-u)*l(c)}var _d=(e,t,n,r,i)=>{let a=2654435769^i;for(let i of[e,t,n,r])a=Math.imul(a^(i|0),2246822507),a=Math.imul(a^a>>>13,3266489909),a^=a>>>16,a=a+1831565813|0;return a>>>0};function vd(e){let t=e/100,n=e=>Math.max(0,Math.min(1,e)),r=t<=66?1:n(1.293*(t-60)**-.1332),i=n(t<=66?.39*Math.log(t)-.632:1.13*(t-60)**-.0755),a=t>=66?1:t<=19?0:n(.543*Math.log(t-10)-1.196);return new z().setRGB(r*r,i*i,a*a)}function yd(e,t){let n,r,i=`star`,a=t();return e===0?(n=a<.55?t.range(2700,3900):a<.83?t.range(3900,5300):t.range(5300,6100),r=(n/5780)**5.5*t.range(.7,1.4)):e===1?(n=t.range(5600,9500),r=(n/5780)**5.2*t.range(.9,1.5)):e===2?(a<.5?(n=t.range(3600,5e3),r=t.range(60,500)):(n=t.range(9500,17e3),r=t.range(60,900)),a>.965&&(i=`pulsar`,n=6e4,r=300)):e===3?(a<.45?(n=t.range(3300,4200),r=t.range(1e4,6e4)):(n=t.range(17e3,32e3),r=t.range(4e3,5e4)),a>.97?(i=`blackhole`,n=9e3,r=4e3):a>.94&&(i=`pulsar`,n=6e4,r=4e3)):(n=a<.5?t.range(3300,3900):t.range(28e3,45e3),r=t.range(2e5,9e5)),{T:n,L:r,k:i}}var bd=e=>696e6*Math.sqrt(e.L)*(5780/e.T)**2,xd=e=>e.isGal?e.G.label:e.k===`blackhole`?`Black hole`:e.k===`quasar`?`Quasar, galactic core`:e.k===`pulsar`?`Pulsar`:(e.T>3e4?`O`:e.T>1e4?`B`:e.T>7500?`A`:e.T>6e3?`F`:e.T>5200?`G`:e.T>3800?`K`:`M`)+(e.L>1e5?` hypergiant`:e.L>5e3?` supergiant`:e.L>50&&e.T<6e3?` giant`:e.L>50?` blue-white star`:e.T<3800?` red dwarf`:e.T<6e3?` dwarf`:` main-sequence star`);function Sd(e){if(!e.name){let t=Hu(e.seed);e.name=fd(t)+(e.layer<2?` `+(10+(t()*890|0)):``)}return e.name}var Cd=class{constructor(){this.group=new _n,this.layers=md.map((e,t)=>{let n=new vr,r={uCam:{value:H()},uEdge:{value:hd[t]},uPx:{value:1}},i=new Ti(n,Qu({...Ru,depthTest:!0,uniforms:r,vertexColors:!0,vertexShader:Xu+`attribute float lum,tmp;uniform vec3 uCam;uniform float uEdge,uPx;varying vec3 vC;varying float vS;
      void main(){vec3 p=position-uCam;float d=length(p);float f=lum/(d*d+1e-6);vec3 n=p/d;vec3 q=aberr(p);
       float e=smoothstep(1.,.72,d/uEdge)*smoothstep(.015,.03,d);
       vec3 c=color;if(uBeta>1e-4){float D=dopF(n);vec3 k=bbShift(tmp,D);f*=clamp(pow(k.g/(D*D),D>1.?.38:.7),1e-5,9.);vec3 h=k/max(k.r,max(k.g,k.b));c=mix(c,h,.75*clamp(abs(log(D))*1.5,0.,1.));}float I=pow(f*900.,.42)*e;
       float s=clamp(.75+I*1.05,1.,11.)*uPx;vS=s;vC=c*min(I*I*.6+I*.22,9.);gl_PointSize=s*2.2;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*q/d*1000.,1.);gl_Position.z=gl_Position.w;}`,fragmentShader:`varying vec3 vC;varying float vS;void main(){vec2 q=abs(gl_PointCoord-.5)*2.;float d=length(q);float a=exp(-d*d*6.)+smoothstep(5.,12.,vS)*(exp(-q.x*26.)+exp(-q.y*26.))*.25*(1.-d);gl_FragColor=vec4(vC*max(a,0.)*smoothstep(1.,.75,d),1.);}`}));return i.frustumCulled=!1,i.renderOrder=-990,this.group.add(i),{s:e,li:t,geo:n,m:i,u:r,key:``,cells:new Map,list:[]}})}setGalaxy(e){this.G=e;let t=this.seed=e.seed;for(let e of this.layers)e.cells.clear(),e.key=``,e.list=[];let n=new R;this.marks=pd(t).map(t=>{e.home||(t={...t,first:!1}),n.set(t.at[0],t.at[1]*.4,t.at[2]).multiplyScalar(e.R/1e3).applyQuaternion(e.q);let r=t.type===`nebula`||t.type===`binary`||t.type===`star`?`star`:t.type;return{id:e.id+`|L`+t.id,G:e,land:t,name:t.name,seed:t.seed,k:r,layer:9,x:n.x,y:n.y,z:n.z,T:t.id===12?12e3:r===`pulsar`?6e4:r===`blackhole`?9e3:t.first?5750:t.type===`nebula`?14e3:5200+t.seed%2500,L:t.id===12?1e6:t.first?1:t.type===`nebula`?300:2}})}cell(e,t,n,r){let i=t+`,`+n+`,`+r,a=e.cells.get(i);if(a)return a;a=[];let o=e.s,s=Hu(_d(t,n,r,e.li,this.seed)),c=gd(this.G,(t+.5)*o,(n+.5)*o,(r+.5)*o),l=Math.min(14,Math.floor(c*2.6+s()));for(let c=0;c<l;c++){let l=yd(e.li,s);a.push({id:this.G.id+`|`+e.li+`:`+i+`:`+c,G:this.G,x:(t+s())*o,y:(n+s())*o,z:(r+s())*o,...l,layer:e.li,seed:_d(t,n,r,e.li*50+c,this.seed^23505)})}return e.cells.set(i,a),a}update(e,t,n){for(let r of this.layers){r.u.uPx.value=n;let i=Math.floor(e.x/r.s),a=Math.floor(e.y/r.s),o=Math.floor(e.z/r.s),s=i+`,`+a+`,`+o,c=t*.35>r.s*6;if(r.m.visible=!c,c)r.key=``,r.list=[];else{if(s!==r.key&&!(t>r.s*3&&performance.now()-(r.t||0)<120)){r.key=s,r.t=performance.now(),r.base=[i*r.s,a*r.s,o*r.s],r.cells.size>9e3&&r.cells.clear();let t=r.list=[];for(let e=-6;e<=6;e++)for(let n=-6;n<=6;n++)for(let s=-6;s<=6;s++)for(let c of this.cell(r,i+e,a+n,o+s))t.push(c);if(this.marks)for(let n of this.marks)r.li===(n.L>200?2:1)&&Math.hypot(n.x-e.x,n.y-e.y,n.z-e.z)<hd[r.li]&&t.push(n);let n=t.length,c=new Float32Array(n*3),l=new Float32Array(n*3),u=new Float32Array(n),d=new Float32Array(n);for(let e=0;e<n;e++){let n=t[e];c[e*3]=n.x-r.base[0],c[e*3+1]=n.y-r.base[1],c[e*3+2]=n.z-r.base[2];let i=n.c||=vd(n.T);l[e*3]=i.r,l[e*3+1]=i.g,l[e*3+2]=i.b,u[e]=n.L,d[e]=Math.min(n.T,4e4)}r.geo.dispose(),r.geo.setAttribute(`position`,new ir(c,3)),r.geo.setAttribute(`color`,new ir(l,3)),r.geo.setAttribute(`lum`,new ir(u,1)),r.geo.setAttribute(`tmp`,new ir(d,1)),r.geo.setDrawRange(0,n)}r.base&&r.u.uCam.value.set(e.x-r.base[0],e.y-r.base[1],e.z-r.base[2])}}}nearest(e,t=3){let n=[];for(let r of this.layers)for(let i of r.list){let r=(i.x-e.x)**2+(i.y-e.y)**2+(i.z-e.z)**2;(n.length<t||r<n[n.length-1][1])&&(n.push([i,r]),n.sort((e,t)=>e[1]-t[1]),n.length>t&&n.pop())}return n.map(([e,t])=>[e,Math.sqrt(t)])}pick(e,t,n=.9985){let r=null,i=-1;for(let a of this.layers)for(let o of a.list){let s=o.x-e.x,c=o.y-e.y,l=o.z-e.z,u=s*s+c*c+l*l,d=Math.sqrt(u),f=(s*t.x+c*t.y+l*t.z)/d;if(f<n||d<.02||d>hd[a.li]*.95)continue;let p=(o.L/u)**.25*((f-n)/(1-n)+.05)**1.5;p>i&&(i=p,r=o)}return r}},wd=260,Td=[[`#2a6cff`,`#ff3f6e`,`#ffd2a0`],[`#13b5a6`,`#ff7a2e`,`#fff0c0`],[`#8a3cff`,`#ff5aa8`,`#a8d8ff`],[`#1f9a5a`,`#3f7bff`,`#ffe08a`],[`#ff4a2a`,`#ffb04a`,`#8ad0ff`],[`#3ad0ff`,`#c03aff`,`#ffe0f0`],[`#ff2f5f`,`#5a2cff`,`#ffd08a`]];function Ed(e,t){let n=[],r=Math.floor(t.x/wd),i=Math.floor(t.y/wd),a=Math.floor(t.z/wd);for(let t=-2;t<=2;t++)for(let o=-1;o<=1;o++)for(let s=-2;s<=2;s++){let c=Hu(_d(r+t,i+o,a+s,77,e.seed)),l=(r+t+c())*wd,u=(i+o+c())*wd,d=(a+s+c())*wd;c()>.3*gd(e.G,l,u,d)||n.push({x:l,y:u,z:d,R:c.range(26,95),col:c.pick(Td),seed:c()*60,name:fd(c)+` Nebula`})}for(let t of e.marks){if(t.land.type!==`nebula`&&!t.land.first)continue;let e=Hu(t.seed+5);n.push(t.land.first?{x:t.x+62,y:t.y+18,z:t.z-74,R:78,col:Td[2+t.seed%5],seed:e()*60,name:t.name+` Nebula`}:{x:t.x+4,y:t.y,z:t.z,R:e.range(40,70),col:e.pick(Td),seed:e()*60,name:t.name+` Nebula`})}return n}function Dd(e,t){let n=Ed(e,t);for(let e of n)e.d=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z),e.ang=e.R/Math.max(e.d,.001);return n.filter(e=>e.ang>.04).sort((e,t)=>t.ang-e.ang).slice(0,5)}var Od=1024,kd=2,Ad=()=>new Rs(Od,{type:g,generateMipmaps:!1,depthBuffer:!1}),jd={uSkyA:{value:null},uSkyB:{value:null},uSkyMix:{value:0},uSkyOA:{value:new R},uSkyOB:{value:new R}},Md=`uniform samplerCube uSkyA,uSkyB;uniform float uSkyMix;uniform vec3 uSkyOA,uSkyOB;vec3 skyRe(samplerCube s,vec3 d,vec3 o){float id=textureCube(s,d).a;vec3 k=o*id;float l=length(k);if(l>.8)k*=.8/l;return textureCube(s,normalize(d+k)).rgb;}vec3 skyAt(vec3 d){return mix(skyRe(uSkyA,d,uSkyOA),skyRe(uSkyB,d,uSkyOB),uSkyMix);}
`,Nd=5,Pd=class{constructor(e){this.r=e,this.rts=[Ad(),Ad()],this.cur=0,this.step=-1,this.fade=1,jd.uSkyA.value=jd.uSkyB.value=this.rts[0].texture,this.u={uN:{value:Wu()},uFace:{value:0},uO:{value:H()},uNP:{value:Array.from({length:Nd},()=>new It)},uNA:{value:Array.from({length:Nd},()=>H())},uNB:{value:Array.from({length:Nd},()=>H())},uND:{value:Array.from({length:Nd},()=>H())},uNS:{value:new Float32Array(Nd)},uGM:{value:new bt},uGT:{value:H(2,2.7,0)},uVol:{value:1}};let t=new vr;t.setAttribute(`position`,new B([-1,-1,0,3,-1,0,-1,3,0],3)),this.m=new Hr(t,new _o({depthTest:!1,depthWrite:!1,uniforms:this.u,vertexShader:`varying vec2 vS;void main(){vS=position.xy;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:Lu+`precision highp sampler3D;varying vec2 vS;uniform sampler3D uN;uniform int uFace;uniform vec3 uO;uniform vec4 uNP[${Nd}];uniform vec3 uNA[${Nd}],uNB[${Nd}],uND[${Nd}];uniform float uNS[${Nd}];uniform mat3 uGM;uniform vec3 uGT;uniform float uVol;float gIW,gW;
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
       vec3 nc=vec3(0);for(int k=0;k<${Nd};k++)neb(k,rd,nc,tr);
       col=nc+col*tr;
       float fr=clamp(dot(nc,vec3(.33))/max(dot(col,vec3(.33)),1e-6),0.,1.);gl_FragColor=vec4(max(col,0.),gW>0.?gIW/gW*fr:0.);}`})),this.m.frustumCulled=!1,this.sc=new Tn,this.sc.add(this.m),this.cam=new Zo,this.last=null}setGalaxy(){this.last=null}setup(e,t){this.last=t.clone();let n=e.G;H(t.x+n.pos[0],t.y+n.pos[1],t.z+n.pos[2]),this.u.uGM.value.copy(n.m3),this.u.uGT.value.set(n.arms,n.wind,n.ell),this.u.uO.value.copy(t).divideScalar(n.R).applyMatrix3(n.m3);let r=this.u.uO.value.length();this.u.uVol.value=n.ell?Math.max(0,Math.min(1,(1.5-r)/.4)):1-Math.max(0,Math.min(1,(r-1.1)/.4)),this.nebs=Dd(e,t);for(let e=0;e<Nd;e++){let n=this.nebs[e];n?(this.u.uNP.value[e].set((n.x-t.x)/n.R,(n.y-t.y)/n.R,(n.z-t.z)/n.R,n.R),this.u.uNA.value[e].copy(Vu(n.col[0])),this.u.uNB.value[e].copy(Vu(n.col[1])),this.u.uND.value[e].copy(Vu(n.col[2])),this.u.uNS.value[e]=n.seed):this.u.uNP.value[e].set(9,9,9,0)}}tile(e){let t=this.rts[1-this.cur],n=e/4|0,r=e%4,i=Od/kd;this.u.uFace.value=n,t.viewport.set(0,0,Od,Od),t.scissor.set(r%2*i,(r>>1)*i,i,i),t.scissorTest=!0;let a=this.r;a.autoClear=!1,a.setRenderTarget(t,n),a.render(this.sc,this.cam),a.setRenderTarget(null),a.autoClear=!0}finish(){let e=this.rts[this.cur],t=this.rts[1-this.cur];this.bp=this.bp||[null,null],this.bp[1-this.cur]=this.last.clone(),this.bA=this.bp[this.cur],this.bB=this.bp[1-this.cur],jd.uSkyA.value=e.texture,jd.uSkyB.value=t.texture,jd.uSkyMix.value=0,this.fade=0,this.cur=1-this.cur,this.done=!0}bakeNow(e,t){this.setup(e,t);for(let e=0;e<24;e++)this.tile(e);this.finish(),this.fade=1,jd.uSkyMix.value=1,this.step=-1}update(e,t,n){this.bB&&(jd.uSkyOB.value.copy(t).sub(this.bB),this.bA?jd.uSkyOA.value.copy(t).sub(this.bA):jd.uSkyOA.value.copy(jd.uSkyOB.value));let r=this.pg?t.clone().sub(this.pg).divideScalar(Math.max(n,.001)):new R;this.pg=t.clone();let i=r.length();if(!(this.fade<1&&(this.fade=Math.min(1,this.fade+n*(this.fr||3)),jd.uSkyMix.value=this.fade,this.step<0))){if(this.step<0){if(this.fade<1)return;let n=Math.max(1,Math.min(...(this.nebs||[]).map(e=>Math.max(e.R*.5,e.d-e.R)),260,1/0)),r=t.length()-e.G.R,a=r>0?Math.max(n,r*.6):n;if(!this.last||this.last.distanceTo(t)>a*.02){let n=a*.02/Math.max(i,1e-12);this.per=Math.max(1,Math.min(2,Math.ceil(24/(n*60)))),this.fr=Math.max(3,this.per*2.5),this.setup(e,t),this.step=0}else return}for(let e=0;e<(this.per||1)&&this.step<24;e++)this.tile(this.step++);this.step>=24&&(this.step=-1,this.finish())}}};function Fd(e=!0){let t=new Hr(new Mi(200,200,200),Qu({side:1,depthTest:!1,depthWrite:!1,uniforms:jd,vertexShader:`varying vec3 vD;void main(){vD=position;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*position,1.);}`,fragmentShader:Xu+Md+(e?`varying vec3 vD;uniform float uLogG;void main(){vec3 v=normalize(vD),d=unab(v);vec3 c=doppler(skyAt(d),d);
 if(uLogG>4.){float th=acos(clamp(dot(v,uBDir),-1.,1.))/25.;float lD=uLogG+.6931-log(1.+exp(min(2.*(uLogG+log(max(th,1e-12))),60.)));float T=2.725*exp(min(lD,13.));vec3 b=planck(T);float m=max(b.r,max(b.g,b.b));if(m>1e-7)c+=b/m*min(pow(m*4e3,.33),7.);}
 gl_FragColor=vec4(c,1.);}`:`varying vec3 vD;void main(){gl_FragColor=vec4(skyAt(normalize(vD))*.5,1.);}`)}));return t.renderOrder=-1e3,t.frustumCulled=!1,t}var Id=16e5,Ld=(e,t,n,r)=>{let i=2654435769^r;for(let r of[e,t,n])i=Math.imul(i^(r|0),2246822507),i=Math.imul(i^i>>>13,3266489909),i^=i>>>16,i=i+1831565813|0;return i>>>0};function Rd(e,t,n,r,i={}){let a=t(),o=i.home?0:+(a<.2),s=i.home?2:o?0:a<.62?2:a<.82?3:a<.93?4:1,c=i.home?new _t:new _t().setFromUnitVectors(H(0,1,0),t.dir()),l=new Ht().makeRotationFromQuaternion(c.clone().invert()).elements,u={id:e,pos:n,R:r,ell:o,arms:s,wind:i.home?2.7:t.range(1.7,3.6),q:c,m:[l[0],l[4],l[8],l[1],l[5],l[9],l[2],l[6],l[10]],m3:new bt().set(l[0],l[4],l[8],l[1],l[5],l[9],l[2],l[6],l[10]),seed:i.seed??t()*1e9|0,home:!!i.home},d=``;for(;d.length<7;)d=fd(t);return u.name=d+(r<14e3?` Cloud`:``),u.label=(r<14e3?`Dwarf `:r>62e3?`Giant `:``)+(o?`elliptical galaxy`:s===1?`one-armed spiral galaxy`:s+`-armed spiral galaxy`),u.label=u.label[0].toUpperCase()+u.label.slice(1),u.pos0=u.pos.slice(),u.star={id:`G:`+e,x:0,y:0,z:0,G:u,isGal:!0,name:u.name,L:1,T:6e3,layer:99},u}var zd=class{constructor(e){this.seed=e,this.cells=new Map,this.pins=new Map,this.a=1,this.home=this.cell(0,0,0)[0]}cell(e,t,n){let r=e+`,`+t+`,`+n,i=this.cells.get(r);if(i)return i;let a=!e&&!t&&!n,o=Hu(Ld(e,t,n,this.seed));if(i=[],a||o()<.5){let s=a?5e4:Math.exp(o.range(Math.log(18e3),Math.log(95e3))),c=a?[0,0,0]:[(e+o.range(-.36,.36))*Id,(t+o.range(-.36,.36))*Id,(n+o.range(-.36,.36))*Id];i.push(Rd(a?`h`:r,o,c,s,a?{home:a,seed:this.seed}:{}));let l=a?2:+(o()<.4);for(let e=0;e<l;e++){let t=o.dir().multiplyScalar(s*o.range(2.6,4.6));i.push(Rd((a?`h`:r)+`:`+e,o,[c[0]+t.x,c[1]+t.y,c[2]+t.z],o.range(5e3,11e3)))}}let s=3+(o()*5|0);for(let c=0;c<s;c++){let s=[(e+o()-.5)*Id,(t+o()-.5)*Id,(n+o()-.5)*Id];i.some(e=>Math.hypot(e.pos[0]-s[0],e.pos[1]-s[1],e.pos[2]-s[2])<e.R*2.5+2e4)||i.push(Rd((a?`h`:r)+`:d`+c,o,s,Math.exp(o.range(Math.log(2500),Math.log(12e3)))))}i=i.map(e=>this.pins.get(e.id)||e);for(let e of i)for(let t=0;t<3;t++)e.pos[t]=e.pos0[t]*this.a;return this.cells.set(r,i),i}setA(e){this.a=e;let t=new Set;for(let e of this.cells.values())for(let n of e)t.add(n);for(let e of this.pins.values())t.add(e);for(let n of t)for(let t=0;t<3;t++)n.pos[t]=n.pos0[t]*e}pin(e){this.pins.set(e.id,e)}near(e,t=24,n=2){let r=Id*this.a,i=Math.round(e.x/r),a=Math.round(e.y/r),o=Math.round(e.z/r),s=[];for(let t=-n;t<=n;t++)for(let r=-n;r<=n;r++)for(let c=-n;c<=n;c++)for(let n of this.cell(i+t,a+r,o+c))s.push([n,Math.hypot(n.pos[0]-e.x,n.pos[1]-e.y,n.pos[2]-e.z)]);return s.sort((e,t)=>e[1]/e[0].R-t[1]/t[0].R),s.slice(0,t)}nearest(e,t=24){let n=Id*this.a,r=Math.round(e.x/n),i=Math.round(e.y/n),a=Math.round(e.z/n),o=[];for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++)for(let c of this.cell(r+t,i+n,a+s))o.push([c,Math.hypot(c.pos[0]-e.x,c.pos[1]-e.y,c.pos[2]-e.z)-c.R]);return o.sort((e,t)=>e[1]-t[1]),o.slice(0,t)}byId(e){if(!e||e[0]===`h`)return this.home.id===(e||`h`)?this.home:this.cell(0,0,0).find(t=>t.id===e)||this.home;let[t,n,r]=e.split(`:`)[0].split(`,`).map(Number);return this.cell(t,n,r).find(t=>t.id===e)||this.home}},Bd=4,Vd=6500,Hd=class{constructor(){let e=new ro(2,2,4,4),t=this.g=new ss;t.index=e.index,t.setAttribute(`position`,e.attributes.position),this.at={};for(let[e,n]of[[`aP`,4],[`aX`,3],[`aY`,3],[`aZ`,3],[`aT`,4]]){let r=this.at[e]=new Kr(new Float32Array(Vd*n),n);t.setAttribute(e,r)}t.instanceCount=0,this.u={...jd,uN:{value:Wu()},uShift:{value:H()},uPix:{value:.001},uVolF:{value:1},uCs:{value:Id}},this.mesh=new Hr(t,Qu({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:this.u,vertexShader:Xu+`attribute vec4 aP,aT;attribute vec3 aX,aY,aZ;uniform vec3 uShift;uniform float uPix,uCs;varying vec3 vP,vO,vA,vB,vC;varying vec4 vT;varying float vF;
      void main(){vec3 p=aP.xyz-uShift;float R=aP.w,d=length(p);vec3 n=p/d;vec3 rt=normalize(cross(n,abs(n.y)<.95?vec3(0,1,0):vec3(1,0,0))),up=cross(rt,n);
       float k=d/R;float s=1.25*k/sqrt(max(k*k-1.5625,.05));s=max(s,k*uPix*4.5);
       vec3 w=n*k+(rt*position.x+up*position.y)*s;vec3 a=aberr(w);vP=a;vO=vec3(dot(aX,-n),dot(aY,-n),dot(aZ,-n))*k;vA=aX;vB=aY;vC=aZ;vT=aT;
       vF=smoothstep(1.1,1.5,k)*smoothstep(${4.6.toFixed(1)}*uCs,${3.4.toFixed(1)}*uCs,d);
       gl_Position=vF<.002?vec4(2.,2.,2.,1.):projectionMatrix*vec4(mat3(viewMatrix)*normalize(a)*100.,1.);gl_Position.z=gl_Position.w;}`,fragmentShader:`precision highp sampler3D;
`+Xu+Md+`varying vec3 vP,vO,vA,vB,vC;varying vec4 vT;varying float vF;uniform sampler3D uN;uniform float uPix,uVolF;
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
       gl_FragColor=vec4(doppler(e*(.8+.9*big)*vF*veil,rd),1.);}`})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-995,this.key=``}update(e,t,n,r=1){this.u.uVolF.value=r;let i=Id*e.a,a=Math.round(t.x/i),o=Math.round(t.y/i),s=Math.round(t.z/i),c=e.seed+`:`+a+`,`+o+`,`+s+`:`+Math.round(Math.log(e.a)*2e4);if(this.u.uCs.value=i,this.u.uPix.value=n,c!==this.key&&performance.now()-(this.t||0)>160){this.t=performance.now(),this.key=c,this.base=[a*i,o*i,s*i];let t=0,n=this.at;if(e.cells.size>6e3){let t=e.cell(0,0,0);e.cells.clear(),e.cells.set(`0,0,0`,t)}for(let r=-4;r<=Bd;r++)for(let i=-4;i<=Bd;i++)for(let c=-4;c<=Bd;c++)for(let l of e.cell(a+r,o+i,s+c)){if(t>=Vd)break;n.aP.setXYZW(t,l.pos[0]-this.base[0],l.pos[1]-this.base[1],l.pos[2]-this.base[2],l.R);let e=l.m;n.aX.setXYZ(t,e[0],e[1],e[2]),n.aY.setXYZ(t,e[3],e[4],e[5]),n.aZ.setXYZ(t,e[6],e[7],e[8]),n.aT.setXYZW(t,l.arms,l.wind,l.ell,l.seed%17),t++}for(let e in n)n[e].needsUpdate=!0;this.g.instanceCount=this.n=t}this.base&&this.u.uShift.value.set(t.x-this.base[0],t.y-this.base[1],t.z-this.base[2])}},Ud={uDA:{value:null},uDB:{value:null}},Wd=128;function Gd(t){let n=()=>{let t=new Vt(Wd,Wd,Wd,{depthBuffer:!1}),n=t.texture;return n.wrapS=n.wrapT=n.wrapR=e,n.magFilter=o,n.minFilter=c,n.generateMipmaps=!1,n.colorSpace=``,t},r=new vr;r.setAttribute(`position`,new B([-1,-1,0,3,-1,0,-1,3,0],3));let i=new _o({depthTest:!1,depthWrite:!1,uniforms:{uZ:{value:0},uMode:{value:0}},vertexShader:`varying vec2 v;void main(){v=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`
   varying vec2 v;uniform float uZ,uMode;
   vec3 h3(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
   float gn(vec3 x,float P){vec3 i=floor(x),f=x-i,u=f*f*f*(f*(f*6.-15.)+10.);
    #define G(o) dot(h3(mod(i+o,P)+P*1.7)*2.-1.,f-o)
    return mix(mix(mix(G(vec3(0)),G(vec3(1,0,0)),u.x),mix(G(vec3(0,1,0)),G(vec3(1,1,0)),u.x),u.y),mix(mix(G(vec3(0,0,1)),G(vec3(1,0,1)),u.x),mix(G(vec3(0,1,1)),G(vec3(1,1,1)),u.x),u.y),u.z);}
   float fb(vec3 p,float P,int n){float a=.55,s=0.;for(int i=0;i<n;i++){s+=a*gn(p*P,P);P*=2.;a*=.52;}return s;}
   float rg(vec3 p,float P,int n){float a=.55,s=0.,w=1.;for(int i=0;i<n;i++){float r=1.-abs(gn(p*P,P))*2.1;r=max(r,0.);r*=r*w;w=min(1.,r*1.5);s+=r*a;P*=2.;a*=.52;}return s;}
   vec2 cell(vec3 p,float P){vec3 x=p*P,i=floor(x),f=x-i;float a=9.,b=9.;for(int z=-1;z<=1;z++)for(int y=-1;y<=1;y++)for(int k=-1;k<=1;k++){vec3 o=vec3(k,y,z);vec3 q=o+h3(mod(i+o,P)+5.)-f;float d=dot(q,q);if(d<a){b=a;a=d;}else if(d<b)b=d;}return sqrt(vec2(a,b));}
   float H(vec3 p){vec2 c=cell(p,8.);return fb(p,4.,5)*.55+rg(p,5.,4)*.32+smoothstep(0.,.35,c.y-c.x)*.16-c.x*.12;}
   void main(){vec3 p=vec3(v,uZ);
    if(uMode<.5){vec2 c=cell(p,9.);gl_FragColor=vec4(fb(p,4.,5)*.85+.5,rg(p,4.,5)*.9,clamp(c.y-c.x,0.,1.),fb(p,24.,3)*.9+.5);}
    else{float e=1./${Wd}.,h=H(p);vec3 g=vec3(H(p+vec3(e,0,0))-h,H(p+vec3(0,e,0))-h,H(p+vec3(0,0,e))-h)/e*.06;gl_FragColor=vec4(clamp(g*.5+.5,0.,1.),clamp(h+.45,0.,1.));}}`}),a=new Hr(r,i),s=new Tn,l=new Zo;a.frustumCulled=!1,s.add(a);let u=t.autoClear;t.autoClear=!1;for(let[e,r]of[[`uDA`,0],[`uDB`,1]]){let a=n();i.uniforms.uMode.value=r;for(let e=0;e<Wd;e++)i.uniforms.uZ.value=(e+.5)/Wd,a.texture.generateMipmaps=e===127,t.setRenderTarget(a,e),t.render(s,l);Ud[e].value=a.texture}t.setRenderTarget(null),t.autoClear=u,i.dispose(),r.dispose()}var Kd=[[85,1536,2],[420,1280,9],[5200,1280,24]],qd={uSh0:{value:null},uSh1:{value:null},uSh2:{value:null},uShM:{value:[0,1,2].map(()=>new Ht)},uShOn:{value:0}},Jd=`
uniform sampler2D uSh0,uSh1,uSh2;uniform mat4 uShM[3];uniform float uShOn;
float shUn(vec4 c){return dot(c,vec4(1.,1./255.,1./65025.,1./16581375.));}
float shTap(sampler2D m,vec3 c,float b,float px){vec2 q=c.xy/px-.5,f=fract(q),o=(floor(q)+.5)*px;vec4 t=vec4(shUn(texture2D(m,o)),shUn(texture2D(m,o+vec2(px,0.))),shUn(texture2D(m,o+vec2(0.,px))),shUn(texture2D(m,o+px)));t=step(c.z-b,t);return mix(mix(t.x,t.y,f.x),mix(t.z,t.w,f.x),f.y);}
float sunShadow(vec3 p,vec3 n){if(uShOn<.5)return 1.;float s=1.;vec3 c=(uShM[0]*vec4(p+n*.07,1.)).xyz;vec3 e=abs(c-.5);
 if(max(e.x,e.y)<.48&&e.z<.5)s=min(s,shTap(uSh0,c,.0012,${(1/Kd[0][1]).toFixed(7)}));
 else{c=(uShM[1]*vec4(p+n*.9,1.)).xyz;e=abs(c-.5);if(max(e.x,e.y)<.49&&e.z<.5)s=min(s,shTap(uSh1,c,.0022,${(1/Kd[1][1]).toFixed(7)}));}
 c=(uShM[2]*vec4(p+n*13.,1.)).xyz;e=abs(c-.5);float k=max(e.x,e.y);if(k<.49&&e.z<.5)s=min(s,mix(1.,shTap(uSh2,c,.0035,${(1/Kd[2][1]).toFixed(7)}),smoothstep(.49,.42,k)));
 return s;}
`,Yd=class{constructor(){this.mat=new _o({side:2,vertexShader:`void main(){vec4 p=vec4(position,1.);
#ifdef USE_INSTANCING
p=instanceMatrix*p;
#endif
gl_Position=projectionMatrix*modelViewMatrix*p;}`,fragmentShader:`void main(){vec4 e=vec4(1.,255.,65025.,16581375.)*gl_FragCoord.z;e=fract(e);e-=e.yzww*vec4(1./255.,1./255.,1./255.,0.);gl_FragColor=e;}`}),this.c=Kd.map(([e,t,n],i)=>{let a=new Rt(t,t,{minFilter:r,magFilter:r,generateMipmaps:!1});qd[`uSh`+i].value=a.texture;let o=new is(-e,e,e,-e,0,e*4);return o.layers.set(i===2?2:1),i===1&&o.layers.enable(3),{rt:a,cam:o,r:e,every:n,org:H(),m:new Ht}}),this.f=0,this.off=H()}update(e,t,n,r,i){if(qd.uShOn.value=+!!i,!i){this.f=0;return}let a=t.overrideMaterial,o=e.autoClear,s=new z;e.getClearColor(s);let c=e.getClearAlpha(),l=Math.abs(n.y)<.95?H(0,1,0):H(1,0,0);this.c.forEach((i,a)=>{if(this.f===0||(this.f+a*2)%i.every===0){i.org.copy(r);let a=i.r*2/i.rt.width;i.cam.position.copy(n).multiplyScalar(i.r*2),i.cam.up.copy(l),i.cam.lookAt(0,0,0),i.cam.updateMatrixWorld();let o=r.clone().applyQuaternion(i.cam.quaternion.clone().invert()),s=(o.x%a+a)%a,c=(o.y%a+a)%a,u=H(-s,-c,0).applyQuaternion(i.cam.quaternion);i.cam.position.add(u),i.cam.updateMatrixWorld(),i.cam.matrixWorldInverse.copy(i.cam.matrixWorld).invert(),i.m.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(i.cam.projectionMatrix).multiply(i.cam.matrixWorldInverse),t.overrideMaterial=this.mat,e.setClearColor(`#fff`,1),e.autoClear=!0,e.setRenderTarget(i.rt),e.render(t,i.cam)}this.off.copy(r).sub(i.org),qd.uShM.value[a].copy(i.m).multiply(new Ht().makeTranslation(this.off.x,this.off.y,this.off.z))}),this.f++,t.overrideMaterial=a,e.setClearColor(s,c),e.autoClear=o,e.setRenderTarget(null)}},Xd=[1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1],Zd=(e,t,n,r)=>{let i=Math.imul(e,374761393)^Math.imul(t,668265263)^Math.imul(n,873357470)^Math.imul(r,1442695041);return i=Math.imul(i^i>>>15,2246822519),i=Math.imul(i^i>>>13,3266489917),(i^i>>>16)>>>0},Qd=(e,t,n,r)=>{let i=e%12*3;return Xd[i]*t+Xd[i+1]*n+Xd[i+2]*r};function $d(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n);e-=i,t-=a,n-=o;let s=e*e*e*(e*(e*6-15)+10),c=t*t*t*(t*(t*6-15)+10),l=n*n*n*(n*(n*6-15)+10),u=Qd(Zd(i,a,o,r),e,t,n),d=Qd(Zd(i+1,a,o,r),e-1,t,n),f=Qd(Zd(i,a+1,o,r),e,t-1,n),p=Qd(Zd(i+1,a+1,o,r),e-1,t-1,n),m=Qd(Zd(i,a,o+1,r),e,t,n-1),h=Qd(Zd(i+1,a,o+1,r),e-1,t,n-1),g=Qd(Zd(i,a+1,o+1,r),e,t-1,n-1),_=Qd(Zd(i+1,a+1,o+1,r),e-1,t-1,n-1),v=u+(d-u)*s,y=f+(p-f)*s,b=m+(h-m)*s,x=g+(_-g)*s,S=v+(y-v)*c;return S+(b+(x-b)*c-S)*l}var ef=(e,t,n,r)=>Zd(e|0,t|0,n|0,r|0)/4294967296,tf=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n));function nf(e){let t=e.R,n=e.seed|0;function r(r,i,a,o){let s=0,c=0;for(let l=e.craterL;l>Math.max(o*3,12);l*=.37,c++){let o=c*1.7+1,u=Math.cos(o),d=Math.sin(o),f=(r*u-i*d)/l,p=r*d+i*u,m=(p*u-a*d)/l,h=(p*d+a*u)/l;for(let r=0;r<2;r++){let i=f+r*.5,a=m+r*.5,o=h+r*.5,u=Math.floor(i),d=Math.floor(a),p=Math.floor(o);if(ef(u,d,p,n+c*7+r*31)>e.crater)continue;let g=.12+.16*ef(u,d,p,n+77+r),_=.36+.28*ef(u,d,p,n+11),v=.36+.28*ef(u,d,p,n+12),y=.36+.28*ef(u,d,p,n+13),b=i-u-_,x=a-d-v,S=o-p-y,C=Math.sqrt(b*b+x*x+S*S)/g;if(C>1.28)continue;let w=C<1?(C*C-1)*.9:0,T=Math.exp(-(((C-1)*6)**2))*.35*(1-tf(1.1,1.28,C)),E=l>t*.05?Math.exp(-C*C*40)*.4:0;s+=Math.min(l*g*.22,e.craterMax)*(w+T+E)*Math.min(1,2e5/l)}}return s}function i(e,t,n,r,i,a,o,s,c,l){let u=e.L,d=e.amp;switch(e.k){case`volcano`:{let e=r/u,s=i/u,c=a/u,l=Math.floor(e),f=Math.floor(s),p=Math.floor(c);if(ef(l,f,p,o)>.7)return t;let m=e-l-.5,h=s-f-.5,g=c-p-.5,_=Math.sqrt(m*m+h*h+g*g)/(.28+.2*ef(l,f,p,o+1));if(_>1)return t;let v=1+.12*$d(r/(u*.05),i/(u*.05),a/(u*.05),o+2)*Math.min(1,_*4),y=(1-_)**1.7*v,b=_<.13?(.13-_)*5.2:0;return t+d*n*(y-b)}case`mesa`:{let e=$d(r/u,i/u,a/u,o)+.22*$d(r/u*4.1,i/u*4.1,a/u*4.1,o+1),s=tf(.06,.12,e)*.62+tf(.22,.27,e)*.38;return t+d*n*s}case`columns`:{let e=r/u,s=i/u,c=a/u,l=Math.floor(e+.35*$d(e*.7,s*.7,c*.7,o)),f=Math.floor(s),p=Math.floor(c+.35*$d(c*.7,e*.7,s*.7,o+1));return t+d*n*ef(l,f,p,o+2)*(.35+.65*Math.max(0,$d(r/(u*14),i/(u*14),a/(u*14),o+3)+.4))}case`pools`:{let e=($d(r/u,i/u,a/u,o)*.7+$d(r/u*2.7,i/u*2.7,a/u*2.7,o+1)*.25)*9,s=Math.floor(e),c=e-s;return t+d*n*((s+tf(.72,.96,c)+(c>.9?.12:0))/9)}case`swirl`:{let e=$d(r/u+c*2,i/u,a/u+l*2,o)+.4*$d(r/u*2.3,i/u*2.3,a/u*2.3,o+1);return t+d*n*(.5+.5*Math.sin(e*26))**2}case`needles`:{let e=$d(r/u,i/u,a/u,o),s=$d(r/u*2.6,i/u*2.6,a/u*2.6,o+1);return t+d*n*Math.max(0,e*1.3+s*.5)**2.2*2}case`plates`:{let e=$d(r/u*.6,i/u*.6,a/u*.6,o),s=(r*.62+i*.35+a*.7)/u+e*2.4,c=s-Math.floor(s),l=Math.abs($d(r/u*1.4,i/u*1.4,a/u*1.4,o+1));return t+d*n*(c<.88?c/.88:(1-c)/.12)*tf(.02,.1,l)}case`rift`:{let e=1-tf(0,.07,Math.abs($d(r/u+c,i/u,a/u+l,o))),s=Math.floor(e*5)/5*.6+e*.4;return t-d*n*s}case`flats`:return t+(Math.max(t*.04,t>0?12:t)-t)*n*.97+d*n*$d(r/u,i/u,a/u,o);case`stardune`:{let e=1-Math.abs($d(r/u,i/u*.5,a/u,o))*2,s=1-Math.abs($d(r/u*.5+9,i/u,a/u*1.3,o+1))*2;return t+d*n*Math.max(0,e,s*.8)**1.5}case`karst`:{let e=r/u,s=i/u,c=a/u,l=Math.floor(e),f=Math.floor(s),p=Math.floor(c),m=ef(l,f,p,o);if(m>.55)return t;let h=e-l-.5,g=s-f-.5,_=c-p-.5,v=Math.sqrt(h*h+g*g+_*_)*(1+.25*$d(e*5,s*5,c*5,o+1))/(.22+.2*ef(l,f,p,o+2));return t+d*n*(.4+m)*(1-tf(.55,1,v))}case`honeycomb`:{let e=r/u,s=i/u,c=a/u,l=Math.floor(e),f=Math.floor(s),p=Math.floor(c),m=9,h=9;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let i=l+t+.2+.6*ef(l+t,f+n,p+r,o)-e,a=f+n+.2+.6*ef(l+t,f+n,p+r,o+1)-s,u=p+r+.2+.6*ef(l+t,f+n,p+r,o+2)-c,d=i*i+a*a+u*u;d<m?(h=m,m=d):d<h&&(h=d)}let g=Math.sqrt(h)-Math.sqrt(m);return t+d*n*(1-tf(.03,.2,g))}}return t}return function(a,o,s,c=2,l){let u=a*t,d=o*t,f=s*t,p=e.contF,m=0,h=.55,g=$d(a*p+5,o*p,s*p,n+1),_=$d(a*p,o*p+9,s*p,n+2),v=$d(a*p,o*p,s*p+3,n+3),y=e.warp,b=a+g*y,x=o+_*y,S=s+v*y,C=t/p;for(let e=0;e<7&&C>c;e++)m+=h*$d(b*p,x*p,S*p,n+10+e),p*=2.13,h*=.5,C/=2.13;let w=(m+(e.bias||0))*e.cont;e.shape&&(w+=t*e.shape*($d(a*1.1,o*1.1,s*1.1,n+60)+.5*$d(a*2.4,o*2.4,s*2.4,n+61)));let T=e.sea?tf(-.02,.12,m+(e.bias||0)):1,E=.5+.5*$d(a*e.contF*3,o*e.contF*3,s*e.contF*3,n+40);if(e.ridge>0){let t=tf(.28,.62,E)*T+.12*T,r=0,i=1,a=1,o=e.ridgeL,s=0;if(t>.01){for(;o>c&&s<13;o*=.47,s++){let e=1-Math.abs($d(u/o+g*3,d/o+_*3,f/o+v*3,n+80+s))*1.9;e=Math.max(0,e),e*=e*a,a=Math.min(1,e*1.6),r+=e*i,i*=.47}w+=r*e.ridge*t*.6}}if(e.spire>0&&c<800){let t=tf(.28,.42,$d(u/900,d/900,f/900,n+120)+.1*$d(u/160,d/160,f/160,n+121));w+=t*e.spire*(.6+E)*T}if(e.canyon>0){let t=e.ridgeL*1.3,r=Math.abs($d(u/t+g*2,d/t+_*2,f/t,n+130)+.18*$d(u/t*5,d/t*5,f/t*5,n+131));w-=e.canyon*(1-tf(.015,.09,r))*T}if(e.crack>0){let t=e.ridgeL*.5,r=Math.abs($d(u/t,d/t,f/t,n+140)+.3*$d(u/t*4,d/t*4,f/t*4,n+141));w-=e.crack*(1-tf(0,.06,r))}if(e.forms)for(let t=0;t<e.forms.length;t++){let r=e.forms[t];if(c>r.L*.8)continue;let l=tf(r.th,r.th+.14,$d(a*r.f+t*7.3,o*r.f,s*r.f,n+300+t))*(r.any?1:T);l>.01&&(w=i(r,w,l,u,d,f,n+330+t*5,c,g,_))}if(e.terrace>0){let t=e.terrace,n=Math.floor(w/t);w=(n+tf(.35,.75,w/t-n))*t*.85+w*.15}if(e.crater>0&&(w+=r(u,d,f,c)),e.dune>0&&c<300){let t=u+240*$d(u/900,d/900,f/900,n+150),r=1-Math.abs($d(t/620,d/620*.35,f/620,n+151))*2;w+=e.dune*Math.max(0,r)**1.6*T,c<8&&(w+=Math.sin((t+f*.4)/2.2+$d(u/30,d/30,f/30,n+152)*4)*.12)}{let r=2600,i=e.hill*(.25+E),a=0,o=.35+.65*T;for(;r>c&&a<12;r*=.46,a++)r<t&&(w+=$d(u/r,d/r,f/r,n+160+a)*r*i*o),i*=1.06}return l&&(l.n=m+(e.bias||0),l.rough=E,l.moist=$d(a*4+g,o*4+_,s*4,n+200)*.6+.5+.25*$d(a*17,o*17,s*17,n+201)),w}}var rf=[[1,0,0,0,0,-1,0,1,0],[-1,0,0,0,0,1,0,1,0],[0,1,0,1,0,0,0,0,-1],[0,-1,0,1,0,0,0,0,1],[0,0,1,1,0,0,0,1,0],[0,0,-1,-1,0,0,0,1,0]];function af(e,t,n,r){let i=rf[e];t=Math.tan(t*Math.PI/4),n=Math.tan(n*Math.PI/4);let a=i[0]+i[3]*t+i[6]*n,o=i[1]+i[4]*t+i[7]*n,s=i[2]+i[5]*t+i[8]*n,c=1/Math.sqrt(a*a+o*o+s*s);return r[0]=a*c,r[1]=o*c,r[2]=s*c,r}function of(e,t,n){let r=Math.abs(e),i=Math.abs(t),a=Math.abs(n),o=r>=i&&r>=a?e>0?0:1:i>=a?t>0?2:3:n>0?4:5,s=rf[o],c=e*s[0]+t*s[1]+n*s[2],l=4/Math.PI;return[o,Math.atan((e*s[3]+t*s[4]+n*s[5])/c)*l,Math.atan((e*s[6]+t*s[7]+n*s[8])/c)*l]}var sf=Array.from({length:Math.max(2,Math.min(6,(navigator.hardwareConcurrency||4)-2))},()=>{let e=new Worker(new URL(new URL(`worker-zQKQD6Ob.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),t={w:e,n:0};return e.onmessage=e=>{t.n--;let n=cf.get(e.data.id);cf.delete(e.data.id),n?.(e.data)},t}),cf=new Map,lf=0,uf=[];function df(){for(uf.sort((e,t)=>t.pr-e.pr);uf.length;){let e=sf.reduce((e,t)=>t.n<e.n?t:e);if(e.n>=2)break;let t=uf.shift();t.node.state=1;let n=++lf;cf.set(n,t.done),e.n++,e.w.postMessage({id:n,P:t.P,f:t.node.f,l:t.node.l,x:t.node.x,y:t.node.y})}uf=[]}var ff;{let e=[];for(let t=0;t<34;t++)for(let n=0;n<34;n++){let r=t*35+n;e.push(r,r+1,r+35,r+1,r+35+1,r+35)}ff=new ir(new Uint16Array(e),1)}var pf=`
uniform vec3 uCamP,uTau,uSunDir,uSunCol,uFogC;uniform float uRk,uHk,uTop,uMie,uFog,uHasAtm,uFlash;
vec2 sph(vec3 o,vec3 d,float r){float b=dot(o,d);vec3 p=o-b*d;float q=r*r-dot(p,p);if(q<0.)return vec2(1.,-1.);q=sqrt(q);return vec2(-b-q,-b+q);}
vec3 sunT(vec3 p){float l=length(p),h=max(l-uRk,0.),mu=dot(p/l,uSunDir);float dip=sqrt(2.*h/uRk);return exp(-(uTau+uMie)*exp(-h/uHk)/(max(mu+dip*.4,0.)+.035))*smoothstep(-.05,.07,mu+dip);}
vec3 scatter(vec3 o,vec3 d,float t0,float t1,int n,out vec3 T){float c=dot(d,uSunDir);float pr=.0597*(1.+c*c),pm=.0796*(1.-.58)/pow(max(1.58-1.52*c,.02),1.5);vec3 tau=vec3(0),L=vec3(0);float pv=t0;
 for(int i=0;i<n;i++){float k=(float(i)+1.)/float(n);float nt=mix(t0,t1,t0<=0.?k*k:k);float dt=nt-pv;vec3 p=o+d*(pv+dt*.5);pv=nt;float l=length(p),e=exp(-max(l-uRk,0.)/uHk)*dt/uHk;vec3 b=uTau+uMie;vec3 st=sunT(p);
  vec3 Tr=exp(-(tau+b*e*.5));float day=smoothstep(-.2,.3,dot(p/l,uSunDir));
  L+=Tr*e*(st*(uTau*pr+uMie*pm)+uTau*day*.0045+uMie*day*.003);tau+=b*e;}
 T=exp(-tau);return L*uSunCol*(length(o)>uTop?5.5:9.);}
`,mf=`
uniform mat3 uRotI;uniform sampler3D uN,uDA;uniform float uCov,uCF,uCSt,uCWarp,uCSoft,uCVort;uniform vec3 uCS,uCV[3];uniform float uTime;
vec3 vortex(vec3 p){if(uCVort<.01)return p;for(int i=0;i<3;i++){vec3 c=uCV[i];float k=dot(p,c);if(k<.7)continue;float d=acos(clamp(k,-1.,1.));float a=uCVort*1.1*exp(-d*d*55.);p=p*cos(a)+cross(c,p)*sin(a)+c*k*(1.-cos(a));}return p;}
float cloudD(vec3 n,float det){vec3 p=vortex(uRotI*n);vec3 q=p*uCF*vec3(1.,uCSt,1.)+uCS+vec3(uTime*.00004,0.,uTime*.00002);vec4 a=texture(uN,q*.18),b=texture(uN,q*.6+(a.rgb-.5)*uCWarp);float v=a.r*.42+b.r*.36+b.g*.14;
 if(det>0.){vec4 c=texture(uDA,q*1.7+(b.rgb-.5)*uCWarp*.6);v+=(c.r-.5)*.3+(c.g-.3)*.1;}
 return smoothstep(.61-uCov*.36,.61-uCov*.36+uCSoft+.14,v);}
`,hf=new R(1,1,1),gf=class{constructor(e){this.b=e,this.q=new _t,this.qi=new _t,this.hf=nf(e.P),this.group=new _n,this.roots=[],this.frame=0,this.count=0,this.maxL=Math.max(1,Math.ceil(Math.log2(e.R*1.5708/32/1.1)));let t=e.atm,n=e.pal;this.u={uN:{value:Wu()},uCamP:{value:H()},uTau:{value:t?t.tau:H()},uMie:{value:t?t.mie:0},uSunDir:{value:e.sunDir},uSunCol:{value:e.sunCol},uRk:{value:e.R/1e3},uHk:{value:t?t.H/1e3:1},uTop:{value:t?(e.R+t.top)/1e3:0},uHasAtm:{value:+!!t},uFog:{value:0},uFogC:{value:H()},uFlash:{value:0},uC0:{value:n[0]},uC1:{value:n[1]},uC2:{value:n[2]},uC3:{value:n[3]},uSnow:{value:H(n[4].x,n[4].y,n[4].z)},uWater:{value:e.water||H()},uSea:{value:+!!e.P.sea},uLava:{value:+!!e.lava},uGlow:{value:e.glow||H()},uHs:{value:e.hs},uSnowL:{value:e.snowLine??9},uWetk:{value:e.wet||0},uLamp:{value:H()},uLampI:{value:0},...Ud,...qd,uFrozen:{value:+!!e.frozen},uBm:{value:e.B},uSt:{value:e.S},uM1:{value:new It(e.M.strK,e.M.strH,e.M.crack,e.M.rip)},uM2:{value:new It(e.M.vein,e.M.metal,e.M.gloss,e.M.patch)},uLich:{value:e.M.lich},uCSt:{value:t?.cStretch||1},uCWarp:{value:t?.cWarp||.5},uCSoft:{value:t?.cSoft||.1},uCVort:{value:t?.cVort||0},uCV:{value:t?.cV||[H(0,1,0),H(1,0,0),H(0,0,1)]},uCBase:{value:t?.cBase||H(.5,.5,.5)},uCTint:{value:t?.cloudC||H(1,1,1)},uCov:{value:t?t.cloud:0},uRotI:{value:new bt},uCF:{value:t?.cloudF||3},uCS:{value:H(e.P.seed%13,e.P.seed%7,e.P.seed%5)}},this.mat=Qu({uniforms:this.u,vertexShader:Xu+`attribute vec4 aux;attribute vec3 tile;varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;
      void main(){vec3 p=mat3(modelMatrix)*position+modelMatrix[3].xyz;vP=p;vN=mat3(modelMatrix)*normal;vT=tile;vA=aux;vec3 q=aberr(p);vW=q;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*q,1.);vLW=gl_Position.w;}`,fragmentShader:Xu+`precision highp sampler3D;
`+pf+mf+Jd+`
      uniform float uFrozen;varying vec3 vP,vN,vT,vW;varying vec4 vA;varying float vLW;uniform sampler3D uDB;uniform vec3 uC2,uC3,uSnow,uWater,uGlow,uLamp,uBm[6],uSt[4];uniform vec4 uM1,uM2;uniform float uSea,uLava,uHs,uSnowL,uLampI,uLich;
      void main(){float D=length(vP);vec3 pk=uCamP+vP*.001;vec3 up=normalize(pk),N=normalize(vN),Vw=-vP/D;
       float f1=smoothstep(90000.,12000.,D),f2=smoothstep(16000.,2500.,D),f3=smoothstep(1800.,300.,D),f4=smoothstep(260.,45.,D),f5=smoothstep(45.,8.,D);
       vec3 ub=uRotI*up;vec4 m0=texture(uDA,ub*5.),m1=texture(uDA,ub*23.+m0.rgb*.15),a1=texture(uDA,vT/512.),a2=texture(uDA,vT/128.+a1.r*.05),a3=vec4(.5,.35,.3,.5),a4=a3,a5=a3,b2=texture(uDB,vT/128.),b3=vec4(.5,.5,.5,.45),b4=b3,b5=b3;vec3 gx=dFdx(vT),gy=dFdy(vT);
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
       gl_FragColor=vec4(doppler(max(c,0.),-Vw),1.);gl_FragDepth=logd(vLW);}`}),t&&this.makeAir(t)}makeAir(e){let t=this.b,n=new to(1,12),r={uOff:{value:H()},uScale:{value:(t.R+e.top)*1.02}};this.px=r;let i={...this.u,...r},a=new Hr(n,Qu({...zu,side:1,uniforms:i,vertexShader:Zu.replace(/}\s*$/,`gl_Position.z=gl_Position.w*.99998;}`),fragmentShader:Lu+Xu+pf+`varying vec3 vP;
      void main(){vec3 d=unab(normalize(vP));vec2 a=sph(uCamP,d,uTop);if(a.y<=0.||a.x>a.y)discard;vec2 g=sph(uCamP,d,uRk*.998);float t0=max(a.x,0.),t1=a.y;bool hit=g.y>0.&&g.x>0.;if(hit)discard;
       vec3 T;vec3 L=scatter(uCamP,d,t0,t1,14,T);
       vec3 up=normalize(uCamP);float alt=length(uCamP)-uRk;float mu=dot(d,uSunDir);if(!hit)L+=uSunCol*sunT(uCamP)*pow(max(mu,0.),400.)*uMie*3.*exp(-alt/uHk);
       float fg=uFog>0.?1.-exp(-uFog*900./max(dot(d,up),.02)):0.;L=mix(L,uFogC,fg);
       float lum=dot(L,vec3(.3,.5,.2));float hide=1.-exp(-lum*22.);float tr=dot(T,vec3(.333))*(1.-hide)*(1.-fg);
       L+=uFlash*vec3(.25,.28,.4)*exp(-alt/uHk);
       gl_FragColor=vec4(doppler(L,d),1.-tr);}`}));if(a.renderOrder=10,a.frustumCulled=!1,this.group.add(a),e.cloud>.02){let r=new Hr(n,Qu({...zu,side:1,uniforms:{...i,uCA:{value:(t.R+e.cloudH)/1e3},uCB:{value:(t.R+e.cloudH+e.cThick)/1e3}},vertexShader:Zu,fragmentShader:Lu+Xu+`precision highp sampler3D;
`+pf+mf+`varying vec3 vP;uniform float uCA,uCB;uniform vec3 uCBase,uCTint;
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
       gl_FragColor=vec4(doppler(col,d),Al);gl_FragDepth=logd(tm*1000.*max(dot(normalize(vP),uFwd),1e-6));}`}));r.renderOrder=12,r.frustumCulled=!1,this.group.add(r),this.cloud=r}}probe(e,t){if(!this.cloud)return 0;let n=this.b.atm,r=this.u.uCamP.value.length()*1e3-this.b.R;if(r<n.cloudH||r>n.cloudH+n.cThick)return this.pr=Math.max(0,(this.pr||0)-t*2),this.pr;if(!this.pm){let e=this.cloud.material.fragmentShader,t=e.indexOf(`float dens(`),n=e.indexOf(`void main`);this.pm=new Hr(new ro(2,2),new _o({uniforms:this.cloud.material.uniforms,depthTest:!1,vertexShader:`void main(){gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`precision highp sampler3D;uniform vec3 uCamP;uniform float uCA,uCB;`+mf+e.slice(t,n)+`void main(){vec3 p=uCamP;float c=cloudD(p/length(p),1.);gl_FragColor=vec4(dens(p,c,1.),c,0.,1.);}`})),this.pm.frustumCulled=!1,this.ps=new Tn,this.ps.add(this.pm),this.prt=new Rt(1,1,{depthBuffer:!1}),this.pb=new Uint8Array(4),this.pc=new Zo,this.pt=0}if(!this.pw){this.pw=!0;let t=e.getRenderTarget();e.setRenderTarget(this.prt),e.render(this.ps,this.pc),e.setRenderTarget(t),e.readRenderTargetPixelsAsync(this.prt,0,0,1,1,this.pb).then(()=>{this.pt=this.pb[0]/255,this.pw=!1},()=>{this.pw=!1})}return this.pr=(this.pr||0)+(this.pt-(this.pr||0))*Math.min(1,t*5),this.pr}node(e,t,n,r){let i=1<<t,a=af(e,-1+(n+.5)*2/i,-1+(r+.5)*2/i,[0,0,0]);return{f:e,l:t,x:n,y:r,dir:H(a[0],a[1],a[2]),size:this.b.R*1.5708/i,state:0,kids:null,mesh:null,used:0}}request(e,t){e.state||uf.push({node:e,pr:t,P:this.b.P,done:t=>{if(this.dead)return;let n=new vr;n.setAttribute(`position`,new ir(t.pos,3)),n.setAttribute(`normal`,new ir(t.nor,3)),n.setAttribute(`aux`,new ir(t.aux,4)),n.setAttribute(`tile`,new ir(t.tile,3)),n.setIndex(ff);let r=e.mesh=new Hr(n,this.mat);r.frustumCulled=!1,r.layers.enable(2),r.matrixAutoUpdate=!1,r.matrixWorldAutoUpdate=!1,r.visible=!1,this.group.add(r),e.state=2,e.used=this.frame,e.hmax=t.hmax,e.hmin=t.hmin,this.count++}})}setSpin(e){this.q.copy(e),this.qi.copy(e).invert(),this.u.uRotI.value.setFromMatrix4(new Ht().makeRotationFromQuaternion(this.qi))}update(e,t,n,r,i){this.frame++;let a=e.length();this.u.uCamP.value.copy(e).multiplyScalar(.001),this.px&&this.px.uOff.value.copy(e).multiplyScalar(-1);let o=e;if(e=e.clone().applyQuaternion(this.qi),t=t.clone().applyQuaternion(this.qi),!this.roots.length)for(let e=0;e<6;e++)this.roots.push(this.node(e,0,0,0));let s=this.b.R,c=Math.acos(Math.min(1,(s+Math.min(0,this.b.hMin||0))/Math.max(a,s)))+Math.acos(s/(s+this.b.hMax)),l=e.clone().divideScalar(a),u=H(),d=!0,f=0,p=i=>{if(i.used=this.frame,i.state!==2){this.request(i,10),d=!1;return}if(Math.acos(Math.max(-1,Math.min(1,l.dot(i.dir))))-i.size*.75/s>c&&i.l>0)return;u.copy(i.dir).multiplyScalar(s+(i.hmax+i.hmin)/2).sub(e);let a=u.length(),m=i.size*.75+(i.hmax-i.hmin)/2,h=Math.max(a-m,i.size*.03,1);if(i.l>0&&a>m*1.3&&r>-1){let e=u.dot(t)/a,n=m/a;if(Math.acos(Math.max(-1,Math.min(1,e)))-Math.asin(Math.min(1,n))>r)return}let g=i.size/h*n;if(g>440&&i.l<this.maxL){i.kids||=[0,1,2,3].map(e=>this.node(i.f,i.l+1,i.x*2+(e&1),i.y*2+(e>>1)));let e=!0;for(let t of i.kids)t.used=this.frame,t.state!==2&&(e=!1,this.request(t,g/(1+i.l*.02)));if(e){for(let e of i.kids)p(e);return}}this.show(i,o),f++};for(let e of this.vis||[])e.visible=!1;this.vis=[];for(let e of this.roots)p(e);if(this.ready=d,this.drawn=f,this.frame%120==0)for(let e of this.roots)this.prune(e)}show(e,t){let n=e.mesh,r=this.b.R;n.matrixWorld.compose(e.dir.clone().multiplyScalar(r).applyQuaternion(this.q).sub(t),this.q,hf),n.visible=!0,this.vis.push(n)}drop(e){if(e.mesh){this.group.remove(e.mesh);let t=e.mesh.geometry;t.setIndex(null),t.dispose(),e.mesh=null,this.count--}e.state=0,e.kids&&=(e.kids.forEach(e=>this.drop(e)),null)}prune(e){e.kids&&(e.kids.every(e=>this.frame-e.used>400&&e.state!==1)?(e.kids.forEach(e=>this.drop(e)),e.kids=null):e.kids.forEach(e=>this.prune(e)))}height(e){e=e.clone().applyQuaternion(this.qi);let t=this.hf(e.x,e.y,e.z,2);return this.b.P.sea?Math.max(0,t):t}raw(e){return e=e.clone().applyQuaternion(this.qi),this.hf(e.x,e.y,e.z,2)}normal(e,t=4){let n=H().crossVectors(e,Math.abs(e.y)<.9?H(0,1,0):H(1,0,0)).normalize(),r=H().crossVectors(e,n),i=e=>{let t=e.clone().normalize();return t.multiplyScalar(this.b.R+this.height(t))},a=t/this.b.R,o=i(e),s=i(e.clone().addScaledVector(n,a)).sub(o),c=i(e.clone().addScaledVector(r,a)).sub(o),l=s.cross(c).normalize();return l.dot(e)<0?l.negate():l}dispose(){this.dead=!0,this.roots.forEach(e=>this.drop(e)),this.group.traverse(e=>{e.material&&e.material.dispose()}),this.mat.dispose()}},_f=new to(1,10),vf=new ro(2,2),yf=`vec2 hit(vec3 o,vec3 d,float r){float b=dot(o,d);vec3 p=o-b*d;float q=r*r-dot(p,p);if(q<0.)return vec2(1.,-1.);q=sqrt(q);return vec2(-b-q,-b+q);}
`,bf=(e,t,n,r={})=>{let i=new Hr(_f,Qu({side:1,depthWrite:!1,...r,uniforms:{uOff:{value:H()},uScale:{value:t},...e},vertexShader:Zu,fragmentShader:n}));return i.frustumCulled=!1,i};function xf(e){let t=new _n,n={value:H()},r={value:H()},i=H(e.color.r,e.color.g,e.color.b);e.group=t;let a=bf({uOff:n,uCamL:r,uC:{value:i},uR:{value:e.R},uSpin:{value:0},uPole:{value:H()}},e.R*1.05,Lu+Xu+yf+`varying vec3 vP;uniform vec3 uCamL,uC,uPole;uniform float uR,uTime,uSpin;
   void main(){vec3 d=unab(normalize(vP));vec2 h=hit(uCamL,d,1.);float t=h.x;if(h.y<0.||h.x>h.y)discard;if(t<0.)t=0.;vec3 p=normalize(uCamL+d*t);float pol=pow(abs(dot(p,uPole)),60.);float sc=cos(uSpin),sn=sin(uSpin);p.xz=mat2(sc,sn,-sn,sc)*p.xz;float mu=max(-dot(p,d),0.),tm=uTime*.04;
    float near=smoothstep(1.5,.1,t);float w=fbm(p*3.+tm,3);float g=ridge(p*13.+w*2.+vec3(0,tm*3.,0),3)+near*(ridge(p*60.+w*4.+tm*4.,3)-.3)*.9;float big=fbm(p*4.5+w*3.-tm,4);float spot=smoothstep(.2,.42,fbm(p*2.2+31.,3));
    float f=smoothstep(.28,.95,g)*.75+.4+big*.9;f*=1.-spot*.75;vec3 hot=mix(uC,vec3(1),.18),c=mix(uC*uC*uC*.25,hot*1.9,clamp(f*f*.9,0.,1.4));c*=.45+.75*pow(mu,.6);c+=uC*pow(1.-mu,3.)*2.2;c+=vec3(.6,.85,1.)*pol*7.;
    gl_FragColor=vec4(doppler(c*.75,d),1.);gl_FragDepth=logd(t*uR*dot(normalize(vP),uFwd));}`,{depthWrite:!0}),o=new Hr(vf,Qu({...Ru,uniforms:{uOff:n,uScale:{value:e.R*7},uC:{value:i}},vertexShader:$u,fragmentShader:Lu+Xu+`varying vec2 vUv;varying float vLW;uniform float uTime;uniform vec3 uC;
   void main(){float r=length(vUv)*7.;if(r>7.)discard;vec2 d=vUv/max(length(vUv),1e-4);float n=fbm(vec3(d*3.2,r*.35-uTime*.12),4),ray=fbm(vec3(d*9.,uTime*.06),3);float k=max(r-.97,0.);float a=exp(-k*(2.4-n*2.4-ray*1.2))*.6+.12/(1.+k*k*3.)+.08/(1.+k*9.);
    float prom=smoothstep(.12,.42,fbm(vec3(d*5.+2.,uTime*.03),3))*exp(-k*k*28.)*(.6+.8*ridge(vec3(d*14.,r*9.-uTime*.5),3));a*=smoothstep(7.,2.5,r);
    gl_FragColor=vec4((uC*a+mix(uC,vec3(1.,.25,.12),.6)*prom*1.6)*smoothstep(.8,1.,r),1.);gl_FragDepth=logd(vLW);}`}));o.frustumCulled=!1,o.renderOrder=-6,e.uStar=a.material.uniforms,t.add(a,o),e.sync=t=>{n.value.copy(e.pos).sub(t),r.value.copy(n.value).multiplyScalar(-1/e.R),o.visible=n.value.length()>e.R*1.02,a.material.side=1}}function Sf(e){let t=new _n,n={value:H()},r=e.atm;e.group=t;let i={uOff:n,uCamP:{value:H()},uTau:{value:r.tau},uMie:{value:r.mie},uSunDir:{value:e.sunDir},uSunCol:{value:e.sunCol},uRk:{value:e.R/1e3},uHk:{value:r.H/1e3},uTop:{value:(e.R+r.top)/1e3},uHasAtm:{value:1},uFog:{value:0},uFogC:{value:H()},uFlash:{value:0},uSeed:{value:e.seed%50},uA:{value:e.pal[0]},uB:{value:e.pal[1]},uD:{value:e.pal[2]},uRing:{value:+!!e.ring},uUp:{value:e.up},uSpin:{value:0}};e.u=i,t.add(bf(i,e.R*1.02,Lu+Xu+pf+Cf+`varying vec3 vP;uniform float uSeed,uTime,uRing,uSpin;uniform vec3 uA,uB,uD,uUp;
   void main(){vec3 d=unab(normalize(vP));vec2 h=sph(uCamP,d,uRk);float t=h.x;if(h.y<=0.||h.x>h.y)discard;if(t<0.)t=.02;vec3 pk=uCamP+d*t,N=normalize(pk),q0;
    vec3 X0=normalize(cross(uUp,vec3(.31,.2,.9))),Z0=cross(X0,uUp),X=X0*cos(uSpin)+Z0*sin(uSpin),Z=cross(X,uUp);vec3 p=vec3(dot(N,X),dot(N,uUp),dot(N,Z));vec3 q=p+uSeed;float lat=p.y,tt=uTime*.004;
    float near=smoothstep(uRk*.25,uRk*.01,t);
    vec3 w=vec3(fbm(q*vec3(2.,7.,2.)+tt,4),fbm(q*vec3(3.,9.,3.)-tt,4),0.);float s=lat*7.+w.x*1.6+sin(lat*23.)*.25;float b=fbm(vec3(s*1.1,uSeed,w.y*.8),4)*1.6+.5;
    float fine=fbm(vec3(q.x*4.,lat*34.+w.x*7.,q.z*4.)+w.y*3.,5);if(near>.01)fine+=near*.6*fbm(vec3(q.x*60.,lat*260.+w.x*60.,q.z*60.)+fine*4.,4);
    vec3 alb=mix(uA,uB,smoothstep(.25,.75,b));alb=mix(alb,uD,smoothstep(.1,.55,fine+w.y*.5)*.65);
    vec3 sc=normalize(vec3(.75,-.35,.55));float sd=length((p-sc)*vec3(1.,2.1,1.));float sw=fbm(vec3(sd*18.-tt*8.,atan(p.y-sc.y,p.x-sc.x)*1.5,uSeed),4);alb=mix(alb,uD*vec3(1.25,.75,.6)*(.8+sw*.8),smoothstep(.36,.22,sd));
    alb*=.8+fine*.55;alb*=mix(.6,1.,smoothstep(1.,.6,abs(lat)));
    float sh=1.;if(uRing>.5){float k=-dot(pk,uUp)/dot(uSunDir,uUp);if(k>0.)sh=1.-.8*ringD(length(pk+uSunDir*k)/uRk,uSeed);}
    float nl=dot(N,uSunDir);vec3 c=alb*uSunCol*(max(nl,0.)*smoothstep(-.1,.3,nl)*sh*1.7)+alb*vec3(.012,.014,.02);
    vec2 at=sph(uCamP,d,uTop);vec3 T;float t0=max(at.x,0.);vec3 L=scatter(uCamP,d,t0,max(t,t0),6,T);c=c*T+L;c=mix(c,uFogC,1.-exp(-t*1000.*uFog));
    gl_FragColor=vec4(doppler(c,d),1.);gl_FragDepth=logd(t*1000.*dot(normalize(vP),uFwd));}`,{depthWrite:!0}));let a=bf(i,(e.R+r.top)*1.02,Lu+Xu+pf+`varying vec3 vP;void main(){vec3 d=unab(normalize(vP));vec2 a=sph(uCamP,d,uTop);if(a.y<=0.||a.x>a.y)discard;vec2 g=sph(uCamP,d,uRk);if(g.y>0.&&g.x<g.y)discard;vec3 T;vec3 L=scatter(uCamP,d,max(a.x,0.),a.y,12,T);float hide=1.-exp(-dot(L,vec3(.3,.5,.2))*12.);gl_FragColor=vec4(doppler(L,d),1.-dot(T,vec3(.333))*(1.-hide));gl_FragDepth=.99999;}`,{...zu});a.renderOrder=10,t.add(a),e.sync=t=>{n.value.copy(e.pos).sub(t),i.uCamP.value.copy(n.value).multiplyScalar(-.001)}}var Cf=`float ringD(float r,float sd){float n=gnoise(vec3(r*22.,3.,sd))*.5+gnoise(vec3(r*70.,8.,sd))*.35+gnoise(vec3(r*210.,1.,sd))*.2;float d=clamp(.55+n,0.,1.);d*=smoothstep(1.45,1.55,r)*smoothstep(2.6,2.45,r);d*=1.-.92*smoothstep(.035,.015,abs(r-2.05));return d;}
`;function wf(e){let t=new io(1.45,2.6,200,6).rotateX(-Math.PI/2);t.applyQuaternion(new _t().setFromUnitVectors(H(0,1,0),e.up));let n={value:H()},r=new Hr(t,Qu({transparent:!0,side:2,depthWrite:!1,uniforms:{uOff:n,uScale:{value:e.R},uSeed:{value:e.seed%50},uSunDir:{value:e.sunDir},uSunCol:{value:e.sunCol},uUp:{value:e.up},uA:{value:e.pal[2]},uB:{value:e.pal[0]},uCR:{value:H()}},vertexShader:Xu+`uniform vec3 uOff;uniform float uScale;varying vec3 vP,vL;varying float vLW;void main(){vL=position;vec3 p=aberr(position*uScale+uOff);vP=position*uScale+uOff;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}`,fragmentShader:Lu+Xu+Cf+`varying vec3 vP,vL;varying float vLW;uniform float uSeed,uScale;uniform vec3 uSunDir,uSunCol,uUp,uA,uB;
    void main(){float r=length(vL),d=ringD(r,uSeed);vec3 V=-normalize(vP);float k=-dot(vL,uSunDir);float sh=k<0.?1.:smoothstep(.97,1.03,length(vL+uSunDir*k));float fwd=pow(max(dot(-uSunDir,V),0.),6.);
     float far=length(vP)/uScale;float gr=gnoise(vL*900.)*smoothstep(.6,.05,far);
     vec3 c=mix(uA,uB,gnoise(vec3(r*16.,2.,uSeed))*.5+.5)*uSunCol*((.6+.5*abs(dot(uUp,uSunDir)))*.9+fwd*1.8)*(sh*.97+.03)*(1.+gr);gl_FragColor=vec4(doppler(c,-V),d*.92*(1.+gr*.5));gl_FragDepth=logd(vLW);}`}));r.frustumCulled=!1,r.renderOrder=6,e.group.add(r);let i=e.sync;e.sync=t=>{i(t),n.value.copy(e.pos).sub(t)}}function Tf(e,t=`#fff0d8`,n=`#ff7a2a`,r=11,i=!1){let a=new _n,o={value:H()},s={value:H()};e.group=a,e.up||=H(.2,1,.1).normalize();let c=new _t().setFromUnitVectors(H(0,1,0),e.up),l=new bt().setFromMatrix4(new Ht().makeRotationFromQuaternion(c)).transpose(),u=bf({...jd,uOff:o,uCamL:s,uInv:{value:l},uHot:{value:Vu(t)},uCool:{value:Vu(n)},uOut:{value:r},uFall:e.uFall={value:0}},e.R*26.6,Lu+Xu+Md+`varying vec3 vP;uniform float uTime,uOut,uFall;uniform vec3 uCamL,uHot,uCool;uniform float uScaleM;uniform mat3 uInv;
   float swirl(float r,float a,float t){float w=7.*pow(r,-1.5);float g=a+w*t;vec2 cs=vec2(cos(g),sin(g));return fbm(vec3(r*2.6,cs*2.4),3)+.45*gnoise(vec3(r*9.,cs*5.));}
   vec4 disk(vec3 p,vec3 v){float r=length(p.xz);float a=atan(p.z,p.x);if(r<2.5||r>uOut)return vec4(0);float P=14.,t1=mod(uTime,P),t2=mod(uTime+P*.5,P);float k=abs(t1/P*2.-1.);float n=mix(swirl(r,a,t1-P*.5),swirl(r,a+2.,t2-P*.5),k);
    float x=(r-2.5)/(uOut-2.5);float den=smoothstep(0.,.06,x)*pow(1.-x,1.3)*clamp(.55+n*1.25,0.,1.4);vec3 tg=normalize(vec3(p.z,0.,-p.x));float beta=.62/sqrt(r*.5);float g=sqrt(1.-beta*beta)/(1.-beta*dot(tg,-normalize(v)));g*=sqrt(max(1.-1./r,.05));
    vec3 c=mix(uHot,uCool,smoothstep(0.,.55,x+.12-g*.06));c=mix(c,uHot*vec3(.8,.95,1.3),clamp(g-1.1,0.,1.)*.5);float e=den*pow(g,3.2)*(5.2*exp(-x*3.4)+.28);return vec4(c*e,clamp(den*1.15,0.,.93));}
   vec3 stars(vec3 d){vec3 c=vec3(0);for(int k=0;k<2;k++){float s=k==0?41.:97.;vec3 p=d*s,id=floor(p),h=hash33(id+s);vec3 q=id+.5+(h-.5)*.5;float l=length(q);if(h.x>.14||abs(l-s)>.45)continue;float r=length(p-q/l*s);c+=mix(vec3(1.,.75,.5),vec3(.6,.75,1.),h.z)*exp(-r*r*900.)*(h.y*h.y*2.+.1);}return c;}
   void main(){vec3 ro=uInv*uCamL,rw=unab(normalize(vP)),rd=uInv*rw;float B=26.,b=dot(ro,rd);vec3 pr=ro-b*rd;float q=B*B-dot(pr,pr);if(q<0.)discard;float t0=max(-b-sqrt(q),0.);if(b>0.&&dot(ro,ro)>B*B)discard;vec3 p=ro+rd*t0,v=rd;float gD=1.,X=length(ro);bool dark=false;
    if(X<B){vec3 er=ro/X;float b0=sqrt(1./X)*smoothstep(B,15.,X),bb=(1.-uFall)*min(b0,.985);float cp=dot(rd,er),gm=1./sqrt(1.-bb*bb);vec3 qp=rd-cp*er;float c0=(cp-bb)/(1.-bb*cp);vec3 n=c0*er+qp/(gm*(1.-bb*cp)); // direction in the free-fall frame
     float E=1.+b0*c0;if(E<=.004)dark=true;gD=1./(gm*(1.-bb*cp)*max(E,.004));v=n+b0*er;}
    vec3 hv=cross(p,v);float h2=dot(hv,hv);vec3 col=vec3(0);float tr=1.;bool fell=false;
    for(int i=0;i<150;i++){float r=length(p);if(dark||(r<1.&&dot(p,v)<0.)||r<.004){fell=true;break;}if(r>B*1.01&&dot(p,v)>0.)break;float dt=(r<1.25?r*.075:max(.05,.13*(r-.55))*(1.-.35*exp(-abs(p.y)*1.5)))/max(length(v),.3);vec3 ac=-1.5*h2*p/pow(r,5.);vec3 nv=v+ac*dt,pn=p+(v+nv)*.5*dt;if(p.y*pn.y<0.){vec3 x=mix(p,pn,p.y/(p.y-pn.y));vec4 d=disk(x,nv);col+=d.rgb*tr;tr*=1.-d.a;if(tr<.03)break;}p=pn;v=nv;}
    vec3 dir=normalize(transpose(uInv)*v);if(!fell&&tr>.02)col+=tr*(skyAt(dir)+stars(dir));
    col=shiftCol(col,clamp(gD,.03,12.))*(X<1.?1.+1.6*(1.-X):1.);
    gl_FragColor=vec4(doppler(col,rw),X<B*.7?1.:smoothstep(B*.98,B*.72,sqrt(h2)));gl_FragDepth=X<B?.99999:logd(max(-b,0.)*uScaleM*dot(normalize(vP),uFwd));}`,{transparent:!0});if(u.material.uniforms.uScaleM={value:e.R},u.renderOrder=-5,a.add(u),i){e.jet=e.up.clone(),e.jetLen=e.R*60;for(let t of[1,-1])for(let[n,r]of[[1,.55],[.4,1.6]]){let i=new Fi(4.2*n,.35*n,60,48,40,!0).translate(0,30.8,0);t<0&&i.rotateX(Math.PI),i.applyQuaternion(c);let s=Ef(i,e.R,o,`vec3 q=vec3(vA,0.);float y=vA.y;float n=fbm(vec3(cos(vA.x)*1.6,sin(vA.x)*1.6,y*16.-uTime*2.4),4)+.5;float kn=.6+.9*pow(.5+.5*sin(y*34.-uTime*3.+n*2.),4.);float e=pow(f,1.6)*pow(n,1.6)*kn*exp(-y*2.6)*smoothstep(1.,.6,y)*smoothstep(0.,.012,y);c=mix(vec3(.5,.72,1.),vec3(.62,.3,1.),smoothstep(0.,.6,y))*e*${(r*2.2).toFixed(2)};`);a.add(s)}}e.sync=t=>{o.value.copy(e.pos).sub(t),s.value.copy(o.value).multiplyScalar(-1/e.R)}}function Ef(e,t,n,r){let i=new Hr(e,Qu({...Ru,side:2,uniforms:{uOff:n,uScale:{value:t}},vertexShader:Xu+`uniform vec3 uOff;uniform float uScale;varying vec3 vN,vV;varying vec2 vA;varying float vLW;void main(){vec3 w=mat3(modelMatrix)*position*uScale+uOff;vV=-w;vN=mat3(modelMatrix)*normal;vA=vec2(uv.x*6.2832,1.-uv.y);vA.y=uv.y;vec3 p=aberr(w);gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}`,fragmentShader:Lu+Xu+`varying vec3 vN,vV;varying vec2 vA;varying float vLW;uniform float uTime;void main(){float f=abs(dot(normalize(vN),normalize(vV)));vec3 c;${r}gl_FragColor=vec4(c,1.);gl_FragDepth=logd(vLW);}`}));return i.frustumCulled=!1,i.renderOrder=4,i}function Df(e){let t=new _n,n={value:H()};e.group=t,e.color=new z(.45,.8,1),xf(e);let r=e.group;t.add(r),e.group=t;let i=e.sync,a=new _n;t.add(a);for(let t of[1,-1])for(let[r,i]of[[.15,.45],[.05,1.1]]){let o=new Fi(130*r,.4,130,40,30,!0).translate(0,65.8,0);t<0&&o.rotateX(Math.PI),o.rotateZ(1.5),a.add(Ef(o,e.R,n,`float y=vA.y;float n=.65+.6*fbm(vec3(cos(vA.x)*2.,sin(vA.x)*2.,y*8.-uTime*4.),3);float e=pow(f,2.)*n*(exp(-y*5.)+.12*exp(-y*1.6))*smoothstep(1.,.5,y);c=mix(vec3(.7,.95,1.),vec3(.2,.45,1.),smoothstep(0.,.35,y))*e*${i};`))}let o=(t=>Qu({...Ru,uniforms:{uOff:n,uScale:{value:e.R}},vertexShader:Xu+`uniform vec3 uOff;uniform float uScale;varying vec2 vUv;varying float vLW;void main(){vUv=uv;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*aberr(mat3(modelMatrix)*position*uScale+uOff),1.);vLW=gl_Position.w;}`,fragmentShader:Xu+`varying vec2 vUv;varying float vLW;uniform float uTime;void main(){float p=pow(.5+.5*sin(vUv.x*25.-uTime*5.),6.);gl_FragColor=vec4(mix(vec3(.25,.4,1.),vec3(.8,.4,1.),vUv.x)*(.13+p*.9),1.);gl_FragDepth=logd(vLW);}`}))();for(let e=0;e<2;e++)for(let t=0;t<12;t++){let n=[],r=e?9:5;for(let i=0;i<=40;i++){let a=.16+(Math.PI-.32)*i/40,o=r*Math.sin(a)**2;o<.5||n.push(H(o*Math.sin(a),o*Math.cos(a),0).applyAxisAngle(H(0,1,0),t/12*6.2832+e*.26).applyAxisAngle(H(0,0,1),1.5))}let i=new Hr(new so(new qi(n),60,.02,5),o);i.frustumCulled=!1,a.add(i)}e.beam=H(),e.sync=t=>{i(t),n.value.copy(e.pos).sub(t),a.rotation.y=Yu.uTime.value/3.2*6.2832,a.updateMatrixWorld(),e.beam.set(0,1,0).applyAxisAngle(H(0,0,1),1.5).applyAxisAngle(H(0,1,0),a.rotation.y),e.uStar.uSpin.value=a.rotation.y,e.uStar.uPole.value.copy(e.beam)}}var U=(e,t,n)=>{let r=new z().setHSL((e%1+1)%1,t,n);return H(r.r,r.g,r.b)},Of=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`],kf={clear:`Clear`,rain:`Rain`,storm:`Thunderstorm`,snow:`Snow`,blizzard:`Blizzard`,dust:`Dust storm`,ash:`Ash fall`,acid:`Acid rain`,mist:`Mist`,diamond:`Diamond dust`},Af={terran:`Temperate world`,ocean:`Ocean world`,desert:`Desert world`,ice:`Ice world`,lava:`Lava world`,barren:`Barren world`,toxic:`Toxic world`,exotic:`Exotic world`,mesa:`Canyon world`,crystal:`Crystal world`,fungal:`Fungal world`,salt:`Salt world`,carbon:`Carbon world`,metal:`Metal world`,painted:`Painted world`,glow:`Luminous world`,sulfur:`Sulphur world`,gas:`Gas giant`,icegiant:`Ice giant`,asteroid:`Asteroid`};function jf(e,t,n,r,i,a,o={}){let s=e()*1e9|0,c=Math.min(1,n/6e6),l=e.range(.6,1.5),u=Math.min(5200,n*95e-5+350),d={key:`k`+s,R:n,seed:s,cont:u*.55*l,contF:e.range(1.1,2.6),warp:e.range(.15,.6),bias:0,ridge:u*e.range(.35,.9),ridgeL:Math.min(n*.16,e.range(18e3,9e4)),hill:e.range(.02,.07),dune:0,terrace:0,crater:0,craterL:n*.55,craterMax:u,spire:0,canyon:0,crack:0,sea:0,shape:0},f={kind:`rock`,type:t,label:Af[t],name:a,pos:r,R:n,P:d,sunDir:H(),sunCol:H(1,1,1),weather:[],g:n/637e4*9.81*e.range(.7,1.3),solid:1},p,m=null,h=Math.max(3500,Math.min(17e3,n*.0026)),g=e(),_=(t,n,r,i=H(.95,.96,1),a=1)=>({H:h,top:h*8,tau:t,mie:n,cloud:r,cloudC:i,cloudF:e.range(2.2,4.5)*Math.max(.5,c),cloudH:h*e.range(.28,.5),press:a}),v=()=>H(.05,.12,.28).multiplyScalar(e.range(.8,1.5));if(t===`terran`){let t=e()<.6?e.range(.2,.36):e();d.sea=1,d.bias=e.range(-.1,.14),f.water=U(e.range(.5,.64),.75,.16),p=[U(t+.08,.3,.42),U(t,.5,.2),U(t-.12,.25,.34),U(.07,.12,.3),H(.9,.93,.97)],m=_(o.earth||e()<.75?v():H(.16,.1,.22),.035,e.range(.35,.75)),f.plants=!0,f.plantC=U(t,.5,.25),f.snowLine=e.range(.82,1.05),f.weather=[`clear`,`rain`,`mist`,`storm`],f.T=e.range(5,28)}if(t===`ocean`&&(d.sea=1,d.bias=-.3,f.water=U(e.range(.45,.68),.8,.15),d.spire=e()<.5?180:0,p=[U(.12,.4,.5),U(g,.4,.25),U(.1,.2,.4),U(.6,.06,.3),H(.9,.95,1)],m=_(v(),.05,e.range(.5,.9)),f.snowLine=1.1,f.weather=[`storm`,`rain`,`storm`,`mist`],f.T=e.range(8,34)),t===`desert`){let t=e.range(.02,.13);d.dune=e.range(20,75),d.canyon=e()<.5?900:0,p=[U(t,.5,.5),U(t-.02,.5,.4),U(t,.35,.3),U(t-.03,.4,.22),U(t+.03,.3,.75)],m=_(H(.16,.1,.06).multiplyScalar(e.range(.6,1.6)),.08,e.range(0,.2),H(1,.85,.65),.4),f.snowLine=1.3,f.weather=[`dust`,`clear`,`dust`],f.T=e.range(30,75)}if(t===`mesa`){let t=e.range(-.02,.09);d.terrace=e.range(120,420),d.canyon=e.range(700,2200),d.ridge*=.4,d.spire=e.range(60,240),p=[U(t,.55,.42),U(t+.03,.5,.34),U(t+.05,.45,.55),U(t,.6,.25),U(t+.04,.3,.8)],m=_(H(.1,.13,.2).multiplyScalar(e.range(.6,1.5)),.05,e.range(.05,.4),H(1,.9,.82),.7),f.snowLine=1.25,f.weather=[`clear`,`dust`,`mist`],f.T=e.range(10,45)}if(t===`ice`){let t=e.range(.5,.68);d.crack=e.range(120,500),p=[U(t,.25,.82),U(t,.35,.68),U(t,.2,.9),U(t,.45,.42),H(.92,.96,1)],e()<.75&&(m=_(H(.06,.11,.2).multiplyScalar(e.range(.4,1.3)),.05,e.range(.1,.6),H(.95,.98,1),.5)),f.snowLine=.55,f.crystals=e()<.6,f.glow=U(t,.7,.5),f.weather=[`snow`,`blizzard`,`diamond`,`clear`],f.T=e.range(-190,-40)}if(t===`lava`&&(d.sea=1,d.bias=e.range(-.05,.1),f.lava=!0,f.glow=e()<.85?H(3,.55,.06):H(.25,1.1,1.6),d.ridge*=1.2,p=[U(.04,.12,.13),U(.02,.15,.08),U(.05,.1,.18),U(0,.1,.07),U(.06,.2,.3)],e()<.8&&(m=_(H(.26,.1,.05).multiplyScalar(e.range(.4,1.2)),.12,e.range(.1,.5),H(.45,.35,.32),.9)),f.snowLine=1.4,f.weather=[`ash`,`ash`,`clear`],f.T=e.range(400,1400)),t===`toxic`){let t=e.range(.12,.28);d.sea=+(e()<.5),f.water=U(t,.8,.2),p=[U(t,.4,.35),U(t+.05,.5,.22),U(t-.08,.4,.4),U(t,.2,.2),U(t,.4,.6)],m=_(H(.22,.26,.06).multiplyScalar(e.range(.7,1.8)),.2,e.range(.6,.95),U(t,.45,.72),4),f.snowLine=1.3,d.spire=e()<.5?150:0,f.weather=[`acid`,`mist`,`storm`],f.T=e.range(90,460)}if(t===`exotic`&&(d.sea=+(e()<.5),f.water=U(g+.4,.8,.2),d.spire=e.range(150,520),d.terrace=e()<.4?150:0,p=[U(g,.6,.4),U(g+.1,.6,.25),U(g+.2,.5,.5),U(g+.55,.4,.25),U(g+.3,.4,.8)],m=_(U(e(),.7,.5).multiplyScalar(.5).addScalar(.02),.06,e.range(.15,.6),U(e(),.3,.85),1),f.crystals=!0,f.glow=U(g+.45,.9,.55),f.plants=e()<.6,f.plantC=U(g+.5,.7,.4),f.snowLine=e.range(.9,1.3),f.weather=[`diamond`,`mist`,`clear`,`rain`],f.T=e.range(-60,60)),t===`barren`||t===`asteroid`){let r=e.range(.02,.14),i=e.range(.16,.42),a=e.range(.02,.22);d.crater=e.range(.35,.75),d.ridge*=.25,d.hill*=.8,p=[U(r,a,i),U(r,a*1.2,i*.75),U(r,a,i*1.3),U(r,a,i*.6),U(r,a,i*1.6)],f.snowLine=1.5,f.T=e.range(-150,120),f.weather=[],t===`asteroid`&&(d.shape=e.range(.18,.42),d.cont=n*.06,d.ridge=n*.05,d.ridgeL=n*.5,d.hill=e.range(.03,.09),d.craterMax=n*.1,d.crater=e.range(.4,.8),f.crystals=e()<.35,f.glow=U(e(),.9,.5),f.g=Math.max(.002,9.8*n/64e5))}if(t===`crystal`&&(p=[U(g,.3,.5),U(g+.06,.4,.36),U(g-.05,.25,.66),U(g+.1,.35,.3),U(g,.3,.9)],m=_(U(g+.5,.5,.5).multiplyScalar(.22),.03,e.range(0,.35),U(g,.25,.9),.5),f.crystals=!0,f.glow=U(g+.03,.85,.6),f.snowLine=1.3,f.weather=[`diamond`,`clear`,`diamond`],f.T=e.range(-90,20)),t===`fungal`){let t=e.pick([.78,.9,.05,.12,.55,g]);d.sea=+(e()<.6),d.bias=e.range(-.1,.1),f.water=U(t+.35,.6,.14),p=[U(t,.4,.3),U(t+.07,.5,.2),U(t-.1,.35,.42),U(t+.2,.2,.22),U(t,.25,.75)],m=_(U(t+.08,.6,.5).multiplyScalar(.3),.09,e.range(.3,.8),U(t,.3,.85),1.6),f.plants=!0,f.plantC=U(t+.04,.6,.42),f.glow=U(t+.45,.9,.55),f.snowLine=1.3,f.weather=[`mist`,`rain`,`mist`,`clear`],f.T=e.range(14,48)}if(t===`salt`){let t=e.range(0,1);p=[U(t,.12,.82),U(t+.05,.3,.68),U(t+.5,.25,.6),U(t+.1,.3,.45),U(t,.05,.95)],d.sea=+(e()<.4),f.water=U(e.pick([.92,.5,.08]),.7,.24),m=_(H(.06,.1,.17).multiplyScalar(e.range(.5,1.5)),.05,e.range(0,.3),H(1,.97,.95),.7),f.snowLine=1.4,f.weather=[`clear`,`dust`,`clear`],f.T=e.range(5,60)}if(t===`carbon`&&(p=[U(.6,.06,.09),U(.55,.1,.05),U(.08,.08,.16),U(.6,.05,.06),U(.58,.1,.35)],d.sea=+(e()<.4),f.water=U(.09,.5,.03),m=_(H(.2,.13,.06).multiplyScalar(e.range(.6,1.6)),.16,e.range(.2,.8),U(.08,.25,.35),2.2),f.crystals=!0,f.glow=U(e.pick([.55,.6,.95]),.5,.7),f.snowLine=1.4,f.weather=[`ash`,`diamond`,`storm`],f.T=e.range(40,320)),t===`metal`){let t=e.range(.02,.1);d.crater=e.range(.1,.5),p=[U(t,.45,.28),U(t+.04,.3,.4),U(.58,.08,.5),U(.6,.05,.34),U(.08,.5,.6)],e()<.6&&(m=_(H(.14,.09,.06).multiplyScalar(e.range(.3,1)),.06,e.range(0,.3),U(.06,.4,.7),.3)),f.snowLine=1.5,f.weather=[`dust`,`clear`],f.T=e.range(-40,380)}if(t===`painted`){let t=e();d.terrace=e()<.5?e.range(60,180):0,d.canyon=e.range(400,1500),d.sea=+(e()<.35),f.water=U(t+.5,.7,.2),p=[U(t,.6,.45),U(t+.18,.55,.4),U(t+.4,.5,.5),U(t+.62,.5,.34),U(t+.8,.4,.75)],m=_(U(e(),.5,.5).multiplyScalar(.28),.05,e.range(.1,.55),U(e(),.25,.9),.9),f.snowLine=1.3,f.weather=[`clear`,`rain`,`mist`,`dust`],f.T=e.range(-20,50)}if(t===`glow`&&(d.sea=1,d.bias=e.range(-.15,.1),f.water=U(g,.8,.08),p=[U(g+.1,.4,.14),U(g+.2,.5,.1),U(g-.1,.35,.2),U(g+.5,.3,.1),U(g,.5,.5)],m=_(U(g+.1,.6,.4).multiplyScalar(.3),.08,e.range(.2,.7),U(g,.4,.7),1.3),f.plants=!0,f.plantC=U(g+.3,.7,.35),f.crystals=e()<.5,f.glow=U(g+.4,1,.55),f.vein=e.range(.8,1.6),f.snowLine=1.2,f.weather=[`mist`,`diamond`,`rain`],f.T=e.range(-10,35)),t===`sulfur`&&(p=[U(.14,.7,.52),U(.1,.65,.4),U(.17,.5,.65),U(.05,.6,.28),U(.15,.25,.85)],f.lava=e()<.5,d.sea=+!!f.lava,d.bias=-.02,f.glow=H(2.6,.8,.1),e()<.7&&(m=_(H(.12,.12,.05).multiplyScalar(e.range(.3,1)),.07,e.range(0,.4),U(.14,.5,.8),.2)),f.snowLine=.8,f.weather=[`ash`,`acid`,`clear`],f.T=e.range(-140,180)),n<11e5&&t!==`lava`&&m&&e()<.5&&(m.tau.multiplyScalar(.3),m.cloud*=.4,m.press*=.1),t!==`asteroid`){let r=Math.min(1,n/3e6),i=(t,n,r,i={})=>({k:t,L:n,amp:r,th:e.range(-.12,.16),f:e.range(2.2,6),...i}),a={volcano:()=>i(`volcano`,n*e.range(.05,.13),u*e.range(.5,1.1),{any:1}),mesa:()=>i(`mesa`,e.range(2500,14e3),e.range(90,450)*l),columns:()=>i(`columns`,e.range(5,26),e.range(8,45)),pools:()=>i(`pools`,e.range(120,900),e.range(15,90)),swirl:()=>i(`swirl`,e.range(1500,9e3),e.range(30,240)),needles:()=>i(`needles`,e.range(140,600),e.range(25,150)),plates:()=>i(`plates`,e.range(60,700),e.range(14,130)),rift:()=>i(`rift`,e.range(15e3,9e4)*r,e.range(500,3200)*r),flats:()=>i(`flats`,e.range(300,2e3),e.range(1,6)),stardune:()=>i(`stardune`,e.range(300,1300),e.range(30,170)),karst:()=>i(`karst`,e.range(180,800),e.range(35,180)),honeycomb:()=>i(`honeycomb`,e.range(30,400),e.range(8,70))},o=[...{terran:[`mesa`,`rift`,`karst`,`volcano`,`plates`,`pools`],ocean:[`karst`,`volcano`,`needles`,`columns`],desert:[`stardune`,`mesa`,`flats`,`needles`,`swirl`,`rift`],mesa:[`mesa`,`rift`,`needles`,`pools`,`plates`],ice:[`plates`,`honeycomb`,`needles`,`rift`,`swirl`,`flats`],lava:[`volcano`,`columns`,`plates`,`honeycomb`],barren:[`volcano`,`rift`,`plates`,`flats`,`columns`],toxic:[`pools`,`karst`,`honeycomb`,`volcano`],exotic:Object.keys(a),crystal:[`needles`,`columns`,`honeycomb`,`plates`,`karst`],fungal:[`karst`,`pools`,`swirl`,`mesa`],salt:[`flats`,`honeycomb`,`pools`,`swirl`,`plates`],carbon:[`columns`,`plates`,`volcano`,`needles`,`stardune`],metal:[`plates`,`columns`,`rift`,`mesa`],painted:[`mesa`,`swirl`,`rift`,`pools`,`needles`],glow:[`karst`,`pools`,`swirl`,`honeycomb`],sulfur:[`volcano`,`pools`,`flats`,`plates`]}[t]||Object.keys(a)].sort(()=>e()-.5),s=3+(e()*3|0);d.forms=[];for(let e=0;e<Math.min(s,o.length);e++)d.forms.push(a[o[e]]());e()<.4&&d.forms.push(a[e.pick(Object.keys(a))]())}{let n=(e,t,n,r)=>{let i=new z(e.x,e.y,e.z),a={};return i.getHSL(a),U(a.h+t,Math.max(0,Math.min(1,a.s*n)),Math.max(.015,Math.min(.95,a.l*r)))},r=e.pick([.06,.12,.33,.5,-.15,.03]);f.B=[p[0],p[1],n(p[0],r*.5,1.15,e.range(.6,1.3)),n(p[1],-r*.4,1.2,e.range(.8,1.7)),n(p[2],r,1.5,e.range(.6,1.2)),n(p[0],r+.5,1.7,e.range(.5,1.1))];let i={painted:.9,exotic:.6,mesa:.16,crystal:.45,sulfur:.5,salt:.4}[t]??.16,a=p[3];f.S=[a.clone(),H(a.x*e.range(.2,.6)+i*e.range(.05,.28),a.y*e.range(.2,.6)+i*e.range(.05,.28),a.z*e.range(.2,.6)+i*e.range(.05,.28)),(()=>{let t=e.range(.6,1.4),n=i>.3?.5:.12;return H(t,t*(1+e.range(-n,n)),t*(1+e.range(-n,n)))})(),(()=>{let t=e(),n=i>.3?.35:.06;return H(t,t+e.range(-n,n),t+e.range(-n,n))})()],f.M={strK:{painted:1,mesa:.95,salt:.6,terran:.5,desert:.75,carbon:.6,metal:.5}[t]??e.range(.25,.8),strH:e.range(18,140),crack:{salt:1,desert:.5,lava:.9,ice:.55,toxic:.6,sulfur:.6,mesa:.4}[t]??e.range(0,.4),rip:{desert:1,mesa:.5,carbon:.6,salt:.3}[t]??e.range(0,.35),vein:f.vein??({crystal:.35,glow:1,exotic:.5,carbon:.12,fungal:.35}[t]||0),metal:{metal:.9,carbon:.3}[t]||0,gloss:{ice:.7,crystal:.75,metal:.8,carbon:.5,salt:.35}[t]??.12,patch:e.range(.35,.75),lich:{terran:.5,fungal:.9,glow:.7,exotic:.6,ocean:.4}[t]??0}}{let n=t===`asteroid`?1:e.pick([.12,.35,.6,.8,1,1.1,1.35]);if(d.cont*=.3+.7*n,d.ridge*=n,d.hill*=.4+.6*n,d.canyon*=n,d.spire*=n,d.forms){let t=e.pick([0,1,2,3,4,6]);d.forms=d.forms.slice(0,t);for(let e of d.forms)e.amp*=.5+.5*Math.max(n,.5)}f.rocky=e.pick([0,.1,.35,.8,1.2,1.9]),f.landmarks=e.pick([0,0,0,1,1,2,3]),f.plants&&!o.earth&&(f.plants=e()<({terran:.75,fungal:1,glow:.9,exotic:.6}[t]??.5)),o.earth&&(f.rocky=.6,f.landmarks=1,d.forms.length<3&&d.forms.push()),t===`lava`&&e()<.4&&(d.bias=e.range(-.5,-.25)),f.T!==void 0&&[`terran`,`ocean`,`exotic`,`fungal`,`glow`,`painted`,`salt`].includes(t)&&!o.earth&&e()<.22?(f.T=e.range(-95,-25),f.frozen=!0,f.snowLine=e.range(.1,.6),f.weather=[`snow`,`blizzard`,`clear`,`diamond`],f.plants&&e()<.6&&(f.plants=!1)):f.T>55&&f.plants&&e()<.7&&(f.plants=!1)}if(m){let t=e();Object.assign(m,{cStretch:t<.25?e.range(2.5,6):1,cWarp:e.range(.3,1.5),cThick:h*e.range(.12,.55),cSoft:e.range(.05,.22),cVort:e()<.6?e.range(1,4):0,cBase:U(e()<.6?.6:e(),e.range(.05,.4),e.range(.25,.6)),cV:[0,1,2].map(()=>e.dir())})}return f.ring=!o.earth&&t!==`asteroid`&&n>15e5&&e()<.1,f.up=H(e.gauss()*.3,1,e.gauss()*.3).normalize(),f.seed=s%50,f.pal=p,f.atm=m,f.hs=u*1.3,f.hMax=t===`asteroid`?n*.8:u*3,f.hMin=t===`asteroid`?-n*.6:-u*2.5,f.seaName=d.sea?f.lava?`lava`:`sea`:``,f.grav=(f.g/9.81).toFixed(2),m||(f.weather=[]),f}function Mf(e,t,n,r,i){let a=t<34e6,o=a?e.range(.48,.64):e.range(-.02,.14),s=e()<.2?e():o,c={kind:`gas`,type:a?`icegiant`:`gas`,label:a?`Ice giant`:`Gas giant`,name:r,pos:n,R:t,seed:e()*50,sunDir:H(),sunCol:H(1,1,1),up:H(e.gauss()*.25,1,e.gauss()*.25).normalize(),pal:[U(s,.5,.6),U(s-.03,.55,.32),U(s+.05,.5,.82)],g:e.range(9,26),solid:1};c.grav=(c.g/9.81).toFixed(2),c.ring=e()<.55,c.T=e.range(-190,-90);let l=t*.0032;return c.atm={H:l,top:l*8,tau:a?H(.03,.08,.15):H(.07,.06,.045),mie:.02,cloud:0,press:1e3},c.weather=[`storm`],c}function Nf(e){let t=Hu(e.seed^499),n=[],r=Sd(e),i=vd(e.T),a=H(),o;o=e.k===`blackhole`?{kind:`blackhole`,label:`Black hole`,R:t.range(2e7,6e7),color:new z(`#ffd0a0`)}:e.k===`quasar`?{kind:`quasar`,label:`Supermassive black hole`,R:18e9,color:new z(`#dce8ff`)}:e.k===`pulsar`?{kind:`pulsar`,label:`Pulsar`,R:12e3,color:new z(`#9cd8ff`)}:{kind:`star`,label:xd(e),R:bd(e),color:i.clone()},Object.assign(o,{name:r,pos:a.clone(),solid:1,T:e.T}),n.push(o);let s=e.land,c=[o];if(e.k===`star`&&(s?.type===`binary`||t()<.12)){let e=t.range(2900,9e3),i=o.R*t.range(.15,.7);c.push({kind:`star`,label:`Companion star`,name:r+` B`,pos:H(o.R*9+.08*qu,o.R,0),R:i,color:vd(e),solid:1,T:e}),n.push(c[1])}let l=e.k===`star`?e.L:e.k===`quasar`?1e6:1,u=Math.sqrt(l)*qu,d=e.k===`quasar`?2:e.k===`star`?s?.first?6:1+(t()*7|0):1+(t()*3|0),f=Math.max(u*t.range(.22,.45),o.R*12),p=0;for(let i=0;i<d;i++){let a=278*Math.sqrt(u/149597870700?u/f:1),c=t()*6.2832,l=H(Math.cos(c)*f,t.gauss()*.03*f,Math.sin(c)*f),d,m=t();d=s?.first?[`lava`,`terran`,`mesa`,`gas`,`exotic`,`gas`][i]:e.k===`star`?a>600?m<.34?`lava`:m<.5?`barren`:m<.62?`sulfur`:m<.74?`metal`:m<.84?`carbon`:m<.93?`toxic`:`gas`:a>330?m<.16?`desert`:m<.28?`toxic`:m<.42?`mesa`:m<.5?`barren`:m<.6?`exotic`:m<.74?`painted`:m<.86?`salt`:m<.93?`sulfur`:`metal`:a>215?m<.28?`terran`:m<.42?`ocean`:m<.54?`exotic`:m<.62?`mesa`:m<.7?`desert`:m<.82?`fungal`:m<.91?`glow`:`painted`:a>110?m<.45?`gas`:m<.62?`ice`:m<.74?`exotic`:m<.86?`crystal`:m<.93?`glow`:`barren`:m<.4?`gas`:m<.7?`ice`:m<.84?`crystal`:m<.92?`carbon`:`barren`:t.pick([`barren`,`lava`,`ice`,`exotic`,`barren`]);let h=s?.first&&i===1?fd(t):r+` `+Of[p];p++;let g;d===`gas`?(g=Mf(t,Math.exp(t.range(Math.log(22e6),Math.log(9e7))),l,h),s?.first&&(g.ring=!0)):g=jf(t,d,s?.first&&i===1?59e5:Math.exp(t.range(Math.log(12e5),Math.log(11e6))),l,o,h,{earth:s?.first}),n.push(g);let _=d===`gas`?1+(t()*4|0):t()<.5?1+(t()*2|0):0,v=g.R*(g.ring?3.4:5);for(let e=0;e<_;e++){v*=t.range(1.3,1.9);let r=t()*6.28,i=Math.exp(t.range(Math.log(g.R*.02+3e4),Math.log(Math.min(26e5,g.R*.28)))),s=l.clone().add(H(Math.cos(r)*v,t.gauss()*.12*v,Math.sin(r)*v)),c=jf(t,t.pick(a<160?[`ice`,`ice`,`barren`,`exotic`,`crystal`,`sulfur`,`glow`]:a>400?[`lava`,`barren`,`metal`,`sulfur`]:[`barren`,`barren`,`desert`,`salt`,`terran`,`fungal`,`painted`]),i,s,o,h+` `+`abcdefgh`[e]);c.moon=!0,c.label=c.label.replace(`world`,`moon`),n.push(c)}if(g.kind===`gas`?t()<.25:i>0&&(s?.first?i===2:t()<.35)){let e=l.clone().multiplyScalar(s?.first?1.0001:1.2);s?.first&&e.copy(l).add(H(g.R*9,g.R*2,g.R*4));let r=fd(t);for(let i=0;i<14;i++){let a=Math.exp(t.range(Math.log(120),Math.log(9e4)))*(i?1:1.6),s=9e5;n.push(Object.assign(jf(t,`asteroid`,a,e.clone().add(H(t.gauss()*s,t.gauss()*s*.3,t.gauss()*s)),o,r+`-`+(i+1)),{swarm:!0}))}}f*=t.range(1.4,2.1)}let m=o.color,h=H(m.r,m.g,m.b).lerp(H(1,1,1),.6);for(let e of n)(e.kind===`rock`||e.kind===`gas`)&&(e.sunDir.copy(o.pos).sub(e.pos).normalize(),e.sunCol.copy(h));return{star:e,name:r,bodies:n,main:o}}function Pf(e){e.group||(e.kind===`star`?xf(e):e.kind===`pulsar`?Df(e):e.kind===`blackhole`?Tf(e,...[[`#fff0d8`,`#ff7a2a`],[`#f4f0ff`,`#b05cff`],[`#fff2dc`,`#ff4a36`]][Math.floor(e.R)%3]):e.kind===`quasar`?Tf(e,`#dcecff`,`#ff7a3c`,17,!0):e.kind===`gas`?(Sf(e),e.ring&&wf(e)):(e.terrain=new gf(e),e.group=e.terrain.group,e.sync=()=>{},e.ring&&wf(e)))}function Ff(e){e.group&&(e.group.removeFromParent(),e.terrain?(e.terrain.dispose(),e.terrain=null):e.group.traverse(e=>{e.material&&e.material.dispose()}),e.group=null,e.sync=null)}var If=1e4,Lf=e=>Math.asinh(e/Gu),Rf=e=>{let t=e/9.80665;return t<10?t.toFixed(2)+` g`:t<1e4?Math.round(t).toLocaleString(`en`)+` g`:Bf(t)+` g`},zf=e=>{let t=e/Gu,n=Math.sqrt(1+t*t);return If*Gu*Gu*(t*t/(n+1))},Bf=e=>{let t=Math.floor(Math.log10(e)),n=(e/10**t).toFixed(2);return n===`10.00`&&(n=`1.00`,t++),`${n} × 10<sup>${t<0?`−`+-t:t}</sup>`};function Vf(e,t){return e>0?e<1e4?e.toFixed(0)+` `+t:Bf(e)+` `+t:`0 `+t}function Hf(e){let t=e/(Gu*Gu);return t>0?t<1e-9?(t*0xe8d4a51000).toPrecision(3)+` ng`:t<1e-6?(t*1e9).toPrecision(3)+` µg`:t<.001?(t*1e6).toPrecision(3)+` mg`:t<1?(t*1e3).toPrecision(3)+` g`:t<1e3?t.toFixed(t<10?2:0)+` kg`:t<1e9?Math.round(t/1e3).toLocaleString(`en`)+` t`:Bf(t/1e3)+` t`:`0 kg`}var Uf=[[42e8,`tonnes of TNT`],[0x2ea11e32ad50000,`times the largest bomb ever tested`],[0x2086ac351052600000,`times humanity's yearly energy use`],[383e24,`seconds of the Sun’s whole output`],[1208748e28,`years of the Sun’s whole output`]];function Wf(e){let t=null;for(let n of Uf)e>=n[0]&&(t=n);if(!t)return``;let n=e/t[0];return`${n<1e4?n.toLocaleString(`en`,{maximumFractionDigits:+(n<10)}):Bf(n)} ${t[1]}`}var Gf=e=>{let t=e/(If*Gu*Gu);return t<.001?``:`${t<1e4?t.toLocaleString(`en`,{maximumFractionDigits:t<10?2:0}):Bf(t)} × the ship's own mass`},Kf=66743e-15,qf=198847e25,Jf=6957e5,Yf=59722e20,Xf=6371e3,Zf=189813e22,Qf=69911e3,$f=`☉`,ep=`⊕`,tp=`♃`,np=3828e23,rp=e=>e>0?e<.001||e>=1e6?Bf(e):e>=1e3?Math.round(e).toLocaleString(`en`):String(+e.toPrecision(3)):`0`,ip=e=>`<sub>${e}</sub>`,ap=e=>e>=1e6?rp(e)+` K`:`${rp(Math.max(0,e))} K (${Math.round(e-273.15).toLocaleString(`en`)} °C)`,op=e=>e>=1e6?(e>=1e9?Bf(e):rp(e/1e6)+` million`)+` K`:rp(Math.round(e))+` K`,sp=e=>e>=2997924.58?rp(e/Gu)+` c`:e>=1e3?rp(e/1e3)+` km/s`:rp(e)+` m/s`,cp=e=>e>=1e6?Bf(e)+` kg/m³`:rp(e/1e3)+` g/cm³`,lp=e=>4/3*Math.PI*e**3;function up(e){return e<.033?Math.max(.08,(e/.23)**(1/2.3)):e<16?e**.25:e<54e3?(e/1.4)**(1/3.5):Math.min(150,e/32e3+20)}function dp(e){return e.kind===`blackhole`||e.kind===`quasar`?e.R*Gu*Gu/(2*Kf):e.kind===`pulsar`?1.44*qf:e.kind===`star`?up(fp(e))*qf:e.g*e.R*e.R/Kf}var fp=e=>(e.R/Jf)**2*(e.T/5780)**4,pp={terran:`nitrogen, oxygen`,ocean:`nitrogen, oxygen, water vapour`,desert:`carbon dioxide, nitrogen`,mesa:`nitrogen, carbon dioxide`,ice:`nitrogen, methane`,lava:`sulphur dioxide, carbon dioxide`,toxic:`carbon dioxide, sulphuric acid`,exotic:`neon, methane, unknown organics`,barren:`traces`,crystal:`argon, silicon vapour`,fungal:`nitrogen, carbon dioxide, spores`,salt:`nitrogen, chlorine`,carbon:`carbon monoxide, soot`,metal:`iron vapour, oxygen traces`,painted:`nitrogen, carbon dioxide`,glow:`nitrogen, oxygen, xenon`,sulfur:`sulphur dioxide`,gas:`hydrogen, helium`,icegiant:`hydrogen, helium, methane`};function mp(e){let t=dp(e),n=t/qf,r=fp(e),i=e.R/Jf,a=r>50&&e.T<6e3,o=a?r>5e3?24e7:11e7:157e5*(n/i)**.65,s=1e10*n/Math.max(r,1e-6);return[[`Mass`,`${rp(n)} M${ip($f)}`],[`Radius`,`${rp(i)} R${ip($f)} (${td(e.R)})`],[`Luminosity`,`${rp(r)} L${ip($f)}`],[`Surface`,ap(e.T)],[`Core`,`≈ `+op(o)],[`Density`,cp(t/lp(e.R))],[`Surface gravity`,rp(Kf*t/e.R**2/9.80665)+` g`],[`Escape velocity`,sp(Math.sqrt(2*Kf*t/e.R))],[`Mass burned`,rp(r*np/Gu**2)+` kg/s`],a?[`Stage`,`late, helium burning`]:[`Lifetime`,`≈ `+(s>=1e9?rp(+(s/1e9).toPrecision(2))+` billion years`:rp(+(s/1e6).toPrecision(2))+` million years`)]]}function hp(e){let t=dp(e),n=t/qf,r=e.kind===`quasar`;return[[`Mass`,`${rp(n)} M${ip($f)}`],[`Horizon radius`,td(e.R)],[`Photon sphere`,td(e.R*1.5)],[`Innermost stable orbit`,td(e.R*3)],[`Mean density`,cp(t/lp(e.R))],[`Horizon (Hawking)`,Bf(6.168e-8/n)+` K`],[`Disk, inner edge`,`≈ `+op(63e6*n**-.25)],[`Tide at horizon`,_p(2*Kf*t*2/e.R**3)],[`Horizon to centre`,gp(Math.PI*Kf*t/Gu**3)],r?[`Jets`,td(e.jetLen||e.R*60)+` each`]:null].filter(Boolean)}var gp=e=>e<.001?rp(e*1e6)+` µs`:e<1?rp(e*1e3)+` ms`:e<120?rp(e)+` s`:nd(e),_p=e=>rp(e/9.80665)+` g over 2 m`;function vp(e){let t=dp(e),n=Kf*t/e.R**2,r=Math.sqrt(1-2*Kf*t/(e.R*Gu*Gu));return[[`Mass`,`${rp(t/qf)} M${ip($f)}`],[`Radius`,td(e.R)],[`Density`,cp(t/lp(e.R))],[`Surface`,`≈ 600,000 K`],[`Core`,`≈ 200 million K`],[`Rotation`,`3.2 s`],[`Magnetic field`,`≈ `+Bf(1e8)+` T`],[`Surface gravity`,rp(n/9.80665)+` g`],[`Escape velocity`,sp(Gu*Math.sqrt(2*Kf*t/(e.R*Gu*Gu)))],[`Time on surface`,`${rp(r)} of outside`]]}function yp(e,t){let n=dp(e),r=e.kind===`gas`,i=[[`Mass`,r?`${rp(n/Zf)} M${ip(tp)} = ${rp(n/Yf)} M${ip(ep)}`:n>Yf*1e-4?`${rp(n/Yf)} M${ip(ep)}`:rp(n)+` kg`],[`Radius`,r?`${rp(e.R/Qf)} R${ip(tp)} (${td(e.R)})`:e.R>2e5?`${rp(e.R/Xf)} R${ip(ep)} (${td(e.R)})`:td(e.R)],[`Density`,cp(n/lp(e.R))],[r?`Gravity, cloud tops`:`Gravity`,rp(e.g/9.80665)+` g`],[`Escape velocity`,sp(Math.sqrt(2*Kf*n/e.R))]],a=e.T+273.15;i.push([r?`Cloud tops`:`Surface`,ap(a)]);let o=r?22e3*(n/Zf)**.6*(Qf/e.R)**.25:a+5200*Math.min(2.5,(n/Yf)**.45);if(i.push([`Core`,e.R<1e5?`≈ as surface`:`≈ `+op(o)]),e.atm?i.push([`Pressure`,r?`no surface`:rp(e.atm.press)+` atm`],[`Air`,pp[e.type]]):r||i.push([`Air`,`none`]),t){let n=t.main,r=!1;if(e.moon)for(let i of t.bodies)(i.kind===`gas`||i.kind===`rock`)&&!i.moon&&!i.swarm&&(!r||i.pos.distanceTo(e.pos)<n.pos.distanceTo(e.pos))&&(n=i,r=!0);let a=n.pos.distanceTo(e.pos),o=2*Math.PI*Math.sqrt(a**3/(Kf*dp(n)));if(i.push([`Orbit`,`${a>1495978707?rp(a/qu)+` AU`:td(a)} around ${n.name}`],[`Period`,o<6912e4?nd(o):rp(o/3156e4)+` years`]),t.main.kind===`star`){let n=e.pos.distanceTo(t.main.pos)/qu;i.push([`Starlight`,`${rp(fp(t.main)/(n*n))} × Earth`])}}return i}function bp(e,t){return e.kind===`star`?mp(e):e.kind===`pulsar`?vp(e):e.kind===`blackhole`||e.kind===`quasar`?hp(e):yp(e,t)}var xp=new WeakMap;function Sp(e){if(e.isGal)return Cp(e.G);let t=xp.get(e);if(!t){let n=e.k===`star`?null:Nf(e);t=n?bp(n.main,n):mp({kind:`star`,R:bd(e),T:e.T}),xp.set(e,t)}return t}function Cp(e){let t=(e.R/5e4)**2.2,n=18e9*Gu*Gu/(2*Kf)/qf;return[[`Diameter`,td(e.R*2*Ku)],[`Stars`,`≈ `+Bf(2e11*t)],[`Mass, with dark matter`,`≈ ${Bf(12e11*t)} M${ip($f)}`],[`Luminosity`,`≈ ${Bf(3e10*t)} L${ip($f)}`],[`Central black hole`,`${Bf(n)} M${ip($f)}`],[`Shape`,e.ell?`elliptical`:`${e.arms} spiral arm${e.arms>1?`s`:``}`]]}var wp=e=>e.map(e=>`<dt>${e[0]}</dt><dd>${e[1]}</dd>`).join(``),Tp=e=>document.querySelector(e),Ep=(e,t,n)=>(n=Math.max(0,Math.min(1,(n-e)/(t-e))),n*n*(3-2*n)),Dp=[5,5,5,5,5],Op={star:`Star system`,binary:`Binary star`,nebula:`Star-forming nebula`,pulsar:`Pulsar`,blackhole:`Black hole`,quasar:`Galactic core`},kp=class{constructor(e,t,n){this.cam=e,this.onFly=t,this.onPick=n,this.way=null,this.scene=new Tn,this.focus=H(),this.D=6e4,this.tD=6e4,this.tF=H(),this.a=.6,this.e=.5,this.mx=-1,this.my=-1,this.objs=new Map,this.data=new Cd,this.sel=null,this.hot=null,this.labels=[],this.layers=md.map((e,t)=>{let n=new vr,r={uOff:{value:H()},uEdge:{value:e*Dp[t]},uFade:{value:0},uPx:{value:1}},i=new Ti(n,new _o({...Ru,depthTest:!1,vertexColors:!0,uniforms:r,vertexShader:`attribute float lum;uniform vec3 uOff;uniform float uEdge,uFade,uPx;varying vec3 vC;void main(){vec3 p=position+uOff;float f=smoothstep(1.,.7,length(p)/uEdge)*uFade;float l=log(lum+1.1)/2.3;gl_PointSize=(2.6+l*1.5)*uPx*1.6;vC=color*f*(.75+l*.35);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);}`,fragmentShader:`varying vec3 vC;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vC*(exp(-d*d*7.)*1.6+exp(-d*d*60.)*2.)*smoothstep(1.,.75,d),1.);}`}));return i.frustumCulled=!1,this.scene.add(i),{s:e,li:t,g:n,m:i,u:r,key:``,list:[]}}),this.nebG=new _n,this.scene.add(this.nebG),this.nebKey=``;let r=[];for(let e=1;e<=5;e++)for(let t=0;t<96;t++){let n=t/96*6.28319,i=(t+1)/96*6.28319;r.push(Math.cos(n)*e/5,0,Math.sin(n)*e/5,Math.cos(i)*e/5,0,Math.sin(i)*e/5)}let i=new vr;i.setAttribute(`position`,new B(r,3)),this.grid=new yi(i,new si({color:`#7f9be0`,transparent:!0,opacity:.13,depthTest:!1,depthWrite:!1})),this.grid.frustumCulled=!1,this.scene.add(this.grid);let a=(e,t)=>{Tp(e).onclick=e=>{e.stopPropagation(),t()}};a(`#mYou`,()=>this.goYou(60)),a(`#mGal`,()=>{this.tF.set(...this.G.pos),this.tD=this.G.R*2.3}),a(`#mUni`,()=>{this.tD=45e5});for(let e of[`mousedown`,`mouseup`,`wheel`,`dblclick`])Tp(`#mapinfo`).addEventListener(e,e=>e.stopPropagation()),Tp(`#mapbtn`).addEventListener(e,e=>e.stopPropagation())}setUniverse(e){this.uni=e,this.data.uni=e;for(let e of this.objs.values())this.freeObj(e);this.objs.clear(),this.G=null,this.sel=this.hot=null,Tp(`#mapinfo`).classList.remove(`on`)}freeObj(e){this.scene.remove(e.g),e.g.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})}open(e){this.you=e,this.way=e.way,this.sel=null,Tp(`#mapinfo`).classList.remove(`on`),this.tF.copy(e.p),this.focus.copy(e.p),(!this.opened||this.tD<1)&&(this.tD=this.D=6e4),this.lastYou&&this.lastYou.distanceTo(e.p)>this.tD*2&&(this.tD=Math.max(this.tD,300)),this.lastYou=e.p.clone(),this.opened=!0}goYou(e){this.tF.copy(this.you.p),this.tD=e}rel(e){return H(e.x-this.focus.x,e.y-this.focus.y,e.z-this.focus.z)}upos(e){return H(e.x+e.G.pos[0],e.y+e.G.pos[1],e.z+e.G.pos[2])}proj(e){let t=e.clone().applyMatrix4(this.cam.matrixWorldInverse),n=t.z<0;return t.applyMatrix4(this.cam.projectionMatrix),{x:(t.x*.5+.5)*innerWidth,y:(-t.y*.5+.5)*innerHeight,ok:n&&Math.abs(t.x)<1.03&&Math.abs(t.y)<1.03}}ensure(e,t){let n=this.objs.get(e.id);if(!n){let t=new _n;t.quaternion.copy(e.q);let r=cd(e.seed%97,1,1,e.arms,e.wind,e.ell);r.material.depthTest=!1,t.add(r),t.scale.setScalar(e.R),this.scene.add(t),n={g:t,d:r,G:e,t:0},this.objs.set(e.id,n)}return t&&!n.p&&(n.p=ud(e),n.p.scale.setScalar(.001),n.p.material.uniforms.uS.value=e.R/1e3,n.g.add(n.p)),n.t=performance.now(),n}update(e,t){let n=1-Math.exp(-e*6);this.D=Math.exp(Math.log(this.D)+(Math.log(this.tD)-Math.log(this.D))*n),this.focus.lerp(this.tF,n),this.focus.distanceTo(this.tF)<this.D*1e-4&&this.focus.copy(this.tF);let r=this.D,i=this.cam,a=Math.cos(this.e);if(i.near=r*.002,i.far=r*2e4,i.position.set(Math.sin(this.a)*a,Math.sin(this.e),Math.cos(this.a)*a).multiplyScalar(r),this.G,t?i.lookAt(-Math.cos(this.a)*r*.3,-r*.05,Math.sin(this.a)*r*.3):i.lookAt(0,0,0),i.updateProjectionMatrix(),i.updateMatrixWorld(),!this.nl||(this.nt=(this.nt||0)-e)<0){this.nt=.3,this.nl=this.uni.near(this.focus,60,r>15e5?3:2);let e=this.nl[0][0];if(e!==this.G){this.G=e,this.data.setGalaxy(e);for(let e of this.layers)e.key=``,e.list=[];this.nebKey=``,this.buildNodes()}}let o=this.G,s=performance.now();for(let[e,t]of this.nl){if(t>r*60&&(e!==o||t>r*1e4)){let t=this.objs.get(e.id);t&&(t.g.visible=!1);continue}let n=this.ensure(e,e===o||t<e.R*4&&r>e.R*.2);n.g.visible=!0,n.g.position.copy(this.rel(H(...e.pos))),n.g.scale.setScalar(e.R*(1+2.2*Ep(5e5,3e6,r))),n.d.material.uniforms.uGain.value=e===o?.95*Ep(e.R*.006,e.R*.16,r):.9,n.d.visible=n.d.material.uniforms.uGain.value>.01,n.p&&(n.p.material.uniforms.uFade.value=Ep(e.R*.05,e.R*.4,r),n.p.visible=n.p.material.uniforms.uFade.value>.01)}for(let[e,t]of this.objs)t.g.visible=s-t.t<400,s-t.t>2e4&&(this.freeObj(t),this.objs.delete(e));let c=H(this.focus.x-o.pos[0],this.focus.y-o.pos[1],this.focus.z-o.pos[2]);if(this.fl=c,t)for(let e of this.layers)e.m.visible=!1;else for(let e of this.layers){let t=e.s*Dp[e.li];if(e.u.uFade.value=Ep(t*2.6,t*1,r)*Ep(0,1,1),e.m.visible=e.u.uFade.value>.02,!e.m.visible)continue;let n=Math.floor(c.x/e.s),i=Math.floor(c.y/e.s),a=Math.floor(c.z/e.s),o=n+`,`+i+`,`+a;if(e.u.uPx.value=Math.min(devicePixelRatio||1,1.5),o!==e.key&&s-(e.t||0)>130){e.t=s,e.key=o,e.base=[n*e.s,i*e.s,a*e.s];let t=this.data.layers[e.li],r=Dp[e.li],c=e.list=[];t.cells.size>8e3&&t.cells.clear();for(let e=-r;e<=r;e++)for(let o=-r;o<=r;o++)for(let s=-r;s<=r;s++)for(let r of this.data.cell(t,n+e,i+o,a+s))c.push(r);let l=c.length,u=new Float32Array(l*3),d=new Float32Array(l*3),f=new Float32Array(l);c.forEach((t,n)=>{u.set([t.x-e.base[0],t.y-e.base[1],t.z-e.base[2]],n*3);let r=t.c||=vd(t.T);d.set([r.r,r.g,r.b],n*3),f[n]=t.L}),e.g.dispose(),e.g.setAttribute(`position`,new ir(u,3)),e.g.setAttribute(`color`,new ir(d,3)),e.g.setAttribute(`lum`,new ir(f,1)),e.g.setDrawRange(0,l)}e.base&&e.u.uOff.value.set(e.base[0]-c.x,e.base[1]-c.y,e.base[2]-c.z)}let l=[c.x,c.y,c.z].map(e=>Math.floor(e/130)).join();if(this.nebG.visible=!t&&r<4e3,this.nebG.visible&&l!==this.nebKey){this.nebKey=l,this.nebG.traverse(e=>e.material?.dispose()),this.nebG.clear(),this.nebs=Ed(this.data,c);for(let e of this.nebs){let t=new Hr(Ap,new _o({...Ru,depthTest:!1,uniforms:{uR:{value:e.R},uA:{value:Vu(e.col[0])},uB:{value:Vu(e.col[1])},uS:{value:e.seed},uF:{value:1}},vertexShader:`varying vec2 v;uniform float uR;void main(){v=uv*2.-1.;vec4 m=modelViewMatrix*vec4(0,0,0,1);m.xy+=position.xy*uR;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec2 v;uniform vec3 uA,uB;uniform float uS,uF;void main(){float r=length(v);vec2 q=v+.25*sin(v.yx*4.+uS)+.12*sin(v.yx*9.+uS*2.);float n=.5+.5*sin(q.x*4.+uS*3.)*cos(q.y*5.-uS);gl_FragColor=vec4(mix(uA,uB,n)*exp(-r*r*3.2)*smoothstep(1.,.5,r)*(.35+.65*n)*.5*uF,1.);}`}));t.frustumCulled=!1,t.userData.n=e,this.nebG.add(t)}}if(this.nebG.visible)for(let e of this.nebG.children){let t=e.userData.n;e.position.set(t.x-c.x,t.y-c.y,t.z-c.z),e.material.uniforms.uF.value=Ep(4e3,1200,r)}this.grid.visible=!t&&r<4e7&&Math.hypot(o.pos[0]-this.focus.x,o.pos[1]-this.focus.y,o.pos[2]-this.focus.z)<o.R*1.6+r,this.grid.quaternion.copy(o.q),this.grid.scale.setScalar(r*.75),t||this.dom()}buildNodes(){Tp(`#nodes`).innerHTML=``,this.nodes=this.data.marks.map(e=>{let t=document.createElement(`div`);return t.className=`node`,t.style.setProperty(`--c`,ld[e.land.type]),t.innerHTML=`<i></i><span>${e.name}</span>`,Tp(`#nodes`).append(t),{m:e,e:t}}),this.gl=new Map,this.galEls=document.createElement(`div`),Tp(`#nodes`).append(this.galEls),this.misc={};for(let[e,t]of[[`you`,`you`],[`hov`,`hov`],[`sel`,`sel`]]){let n=document.createElement(`div`);n.className=`node `+t,n.innerHTML=`<i></i><span></span>`,Tp(`#nodes`).append(n),this.misc[e]=n}this.misc.you.children[1].textContent=`You are here`}put(e,t){let n=this.proj(t);return e.style.display=n.ok?``:`none`,n.ok&&(e.style.transform=`translate(${n.x|0}px,${n.y|0}px)`),n}dom(){let e=this.D,t=this.G,n=22,r=null,i=(e,t,i=0)=>{if(!e.ok)return;let a=Math.hypot(e.x-this.mx,e.y-this.my)-i;a<n&&(n=a,r=t)};this.put(this.misc.you,this.rel(this.you.p));let a=e<t.R*5;for(let e of this.nodes){if(!a){e.e.style.display=`none`;continue}let t=this.put(e.e,this.rel(this.upos(e.m)));e.e.classList.remove(`hot`),i(t,{star:e.m,e:e.e},8)}let o=new Set;if(e>2.2*t.R||e>6e4){let t=0;for(let[n,r]of this.nl){if(r>e*3||++t>34)continue;o.add(n.id);let a=this.gl.get(n.id);a||(a=document.createElement(`div`),a.className=`node gal`,a.innerHTML=`<i></i><span>${n.name}</span>`,this.galEls.append(a),this.gl.set(n.id,a)),a.classList.remove(`hot`),i(this.put(a,this.rel(H(...n.pos))),{gal:n,e:a},6)}}for(let[e,t]of this.gl)o.has(e)||(t.style.display=`none`);if(!r&&this.mx>=0&&(this.pk=(this.pk||0)+1)%2==0||this.lastS){let e=new Ht().multiplyMatrices(this.cam.projectionMatrix,this.cam.matrixWorldInverse).elements,t=this.mx/innerWidth*2-1,n=1-this.my/innerHeight*2,i=this.fl,a=innerWidth/2,o=innerHeight/2,s=13,c=null;if(!r&&this.mx>=0)for(let r of this.layers){if(!r.m.visible||r.u.uFade.value<.15)continue;let l=(r.s*Dp[r.li]*.9)**2;for(let u of r.list){let r=u.x-i.x,d=u.y-i.y,f=u.z-i.z;if(r*r+d*d+f*f>l)continue;let p=e[3]*r+e[7]*d+e[11]*f+e[15];if(p<=0)continue;let m=((e[0]*r+e[4]*d+e[8]*f+e[12])/p-t)*a,h=((e[1]*r+e[5]*d+e[9]*f+e[13])/p-n)*o;if(m>13||m<-13||h>13||h<-13)continue;let g=Math.hypot(m,h)-Math.min(4,Math.log10(u.L+1));g<s&&(s=g,c=u)}}this.lastS=c,c&&!r&&(r={star:c})}this.hot=r;let s=this.misc.hov;r?.e&&r.e.classList.add(`hot`),r?.star&&!r.e?(this.put(s,this.rel(this.upos(r.star))),s.children[1].textContent=`${Sd(r.star)}, ${xd(r.star)}`):s.style.display=`none`;let c=this.way;if(c){this.put(this.misc.sel,this.rel(this.upos(c.star)));let e=`Waypoint: `+c.name;this.misc.sel.children[1].textContent!==e&&(this.misc.sel.children[1].textContent=e)}else this.misc.sel.style.display=`none`;Tp(`#map`).style.cursor=r?`pointer`:this.drag?`grabbing`:`grab`;let l=Math.hypot(t.pos[0]-this.focus.x,t.pos[1]-this.focus.y,t.pos[2]-this.focus.z),u=l>t.R*1.6,d=u&&e<=2.2*t.R?`Intergalactic space`:e>2.2*t.R?`Universe`:t.name,f=u&&e<=2.2*t.R?`Nearest galaxy ${t.name}, ${td(Math.max(0,l-t.R)*Ku)} away. View ${td(e*Ku)} across`:e>2.2*t.R?`View ${td(e*Ku)} across${this.uni.a>1.0001?`. Space has expanded ${this.uni.a<1e4?this.uni.a.toPrecision(4):this.uni.a.toExponential(2)} times since your start`:``}`:`${t.label}, ${td(t.R*2*Ku)} wide. View ${td(e*Ku)} across`;Tp(`#maphead h2`).textContent!==d&&(Tp(`#maphead h2`).textContent=d),Tp(`#maphead p`).textContent!==f&&(Tp(`#maphead p`).textContent=f)}dTo(e){return td(e.distanceTo(this.you.p)*Ku)}select(e){this.sel=e;let t=Tp(`#mapinfo`);if(t.innerHTML=``,t.classList.toggle(`on`,!!e),!e)return;let n=(e,n,r)=>{let i=document.createElement(e);return n&&(i.className=n),r&&(i.textContent=r),t.append(i),i},r=null,i=e=>{r=e},a=e=>{r=e,this.way={star:e.star||this.you.anchor,name:e.name},this.onPick(e)};this.setWay=()=>r&&a(r);let o=(e,n,r)=>{let i=document.createElement(`button`);return i.textContent=n,i.onclick=t=>{t.stopPropagation(),this.onFly(e())},(r||t).append(i),i},s=e=>{let n=document.createElement(`button`);n.className=`alt`,n.textContent=`Waypoint`,n.onclick=e=>{e.stopPropagation(),a(r)},(e||t).append(n)};if(e.gal){let t=e.gal,a=H(...t.pos);n(`b`,``,t.name),n(`p`,``,`${t.label}. ${td(t.R*2*Ku)} wide, ${this.dTo(a)} away.`),n(`dl`).innerHTML=wp(Cp(t));let c=n(`button`,`alt`,`Zoom in`);c.onclick=()=>{this.tF.copy(a),this.tD=t.R*2.1},t!==this.you.G&&(i({star:t.star,name:t.name}),o(()=>r,`Fly there`),s());return}let c=e.star,l=c.id===this.you.anchor.id,u=this.upos(c);n(`b`,``,Sd(c)),n(`p`,``,`${c.land?Op[c.land.type]+`. `:``}${xd(c)}${c.k===`star`?`, ${Math.round(c.T).toLocaleString(`en`)} K, ${c.L<10?c.L.toPrecision(2):Math.round(c.L).toLocaleString(`en`)} × Sun`:``}. ${l?`You are here.`:this.dTo(u)+` away.`}`);let d=n(`div`,`row`),f=l?{name:Sd(c),here:!0}:{star:c,name:Sd(c)};i(f),o(()=>r,`Fly there`,d),s(d);let p=document.createElement(`button`);p.className=`alt`,p.textContent=`Zoom in`,p.onclick=()=>{this.tF.copy(u),this.tD=Math.min(this.tD,40)},d.append(p);let m=Nf(c),h=n(`dl`),g=wp(Sp(c));h.innerHTML=g;let _=n(`div`,`list`);_.onmouseleave=()=>{h.innerHTML=g};for(let e of m.bodies.slice(1)){let t=document.createElement(`div`);t.className=`it`+(e.moon?` moon`:``);let n=document.createElement(`span`);n.textContent=e.name;let r=document.createElement(`em`);r.textContent=`${e.label}, ${td(e.R*2)}`,t.append(n,r),t.onmouseenter=()=>{h.innerHTML=wp(bp(e,m))},t.onclick=n=>{n.stopPropagation();let r=!t.classList.contains(`on`);for(let e of _.children)e.classList.remove(`on`);t.classList.toggle(`on`,r),g=wp(r?bp(e,m):Sp(c));let a=r?l?{here:!0,body:e.name,name:e.name}:{star:c,body:e.name,name:e.name,label:e.label}:f;i(a)},t.ondblclick=n=>{n.stopPropagation();for(let e of _.children)e.classList.toggle(`on`,e===t);g=wp(bp(e,m)),a(l?{here:!0,body:e.name,name:e.name}:{star:c,body:e.name,name:e.name,label:e.label})},_.append(t)}m.bodies.length<2&&(_.textContent=`No planets.`)}move(e,t,n,r,i,a){this.mx=e,this.my=t,n&&(this.moved+=Math.abs(r)+Math.abs(i),a?this.pan(r,i):(this.a-=r*.005,this.e=Math.max(-1.5,Math.min(1.5,this.e+i*.005))))}pan(e,t){let n=this.D*1/innerHeight,r=H(1,0,0).applyQuaternion(this.cam.quaternion),i=H(0,1,0).applyQuaternion(this.cam.quaternion);this.tF.addScaledVector(r,-e*n).addScaledVector(i,t*n),this.focus.copy(this.tF)}zoom(e){let t=Math.exp(Math.max(-160,Math.min(160,e))*.0017),n=Math.max(4,Math.min(22e6,this.tD*t)),r=n/this.tD;if(r<1){let e=null;if(this.hot?.star)e=this.upos(this.hot.star);else if(this.hot?.gal)e=H(...this.hot.gal.pos);else{let t=H(this.mx/innerWidth*2-1,1-this.my/innerHeight*2,.5).unproject(this.cam).sub(this.cam.position).normalize(),n=H(0,1,0).applyQuaternion(this.G.q),r=t.dot(n),i=Math.abs(r)>.12&&this.D<this.G.R*4?-this.cam.position.dot(n)/r:this.D;(!(i>0)||i>this.D*2.2)&&(i=this.D),e=this.cam.position.clone().addScaledVector(t,i).add(this.focus)}this.tF.lerp(e,1-r)}this.tD=n}click(){this.moved<6&&!(this.hot&&this.sel&&(this.hot.star?this.hot.star===this.sel.star:this.hot.gal===this.sel.gal))&&this.select(this.hot?{...this.hot}:null)}dbl(){this.hot&&(this.select({...this.hot}),this.hot.gal&&this.hot.gal===this.you.G||this.setWay?.())}},Ap=new ro(2,2);function jp(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new vr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Mp(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Mp(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Mp(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ir(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Np(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c=[],l=new Map,u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=t*.5,p=10**Math.log10(1/t),m=f*p;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*p+m)},`}a in n?u.push(n[a]):(c.push(i),n[a]=o,u.push(o),o++)}let h=e.clone();for(let t in e.attributes)h.setAttribute(t,Pp(e.attributes[t],c,l));for(let t in e.morphAttributes)h.morphAttributes[t]=e.morphAttributes[t].map(e=>Pp(e,c,l));return h.setIndex(u),h}function Pp(e,t,n=new Map){let r=e.isInterleavedBufferAttribute,i=r?e.data:e,a=r?i.stride:e.itemSize,o=r?n.get(i):void 0;if(o===void 0){let s=new i.array.constructor(t.length*a);for(let e=0;e<t.length;e++)for(let n=0;n<a;n++)s[e*a+n]=i.array[t[e]*a+n];o=r?new i.constructor(s,a,i.meshPerAttribute):new e.constructor(s,e.itemSize,e.normalized,e.meshPerAttribute),o.setUsage(i.usage),r&&n.set(i,o)}let s=r?new e.constructor(o,e.itemSize,e.offset,e.normalized):o;return s.name=e.name,r||(s.gpuType=e.gpuType),s}var Fp=H(0,1,0),Ip=e=>new z(e.x,e.y,e.z);function Lp(e,t,n){let r=new to(1,t);r.deleteAttribute(`uv`),r.deleteAttribute(`normal`);let i=Np(r,1e-4),a=i.attributes.position,o=Hu(e),s=Array.from({length:n===1?11:6},()=>[o.dir(),o.range(.45,.85)]),c=H(),l=o.range(.75,1.35),u=n===2?o.range(1.2,2.2):o.range(.5,.95);for(let r=0;r<a.count;r++){c.fromBufferAttribute(a,r).normalize();let i=1;for(let[e,t]of s){let r=c.dot(e);r>t&&(i-=(r-t)*(n===1?1.5:.9))}let o=(t,n,r)=>$d(c.x*n+e,c.y*n,c.z*n,r);i+=o(0,1.7,1)*.22+o(0,4,2)*.1+o(0,9,3)*.045+(t>5?o(0,21,4)*.02:0)+(1-Math.abs(o(0,3.1,5))*2)*.06,n===0&&(i+=o(0,2.2,6)*.15),a.setXYZ(r,c.x*i*l,c.y*i*u,c.z*i)}return i.computeVertexNormals(),i}var Rp=(e,t)=>{e=(e.index,e);let n=e.attributes.position.count,r=new Float32Array(n*3);for(let e=0;e<n;e++)r[e*3]=t.r,r[e*3+1]=t.g,r[e*3+2]=t.b;return e.setAttribute(`color`,new ir(r,3)),e.deleteAttribute(`uv`),e.index?e.toNonIndexed():e},zp=e=>jp(e,!1),Bp=!1,Vp=(e,t)=>{Bp=!0;let n=t(Hu(e));return Bp=!1,n};function Hp(e,t,n,r=10,i=7){Bp&&(r=Math.max(2,r/3|0),i=Math.min(4,i));let a=new qi(e),o=new so(a,r,1,i,!1),s=o.attributes.position,c=o.attributes.normal,l=i+1;for(let e=0;e<=r;e++){let i=e/r,o=t+(n-t)*i,u=a.getPointAt(i);for(let t=0;t<l;t++){let n=e*l+t;s.setXYZ(n,u.x+c.getX(n)*o,u.y+c.getY(n)*o,u.z+c.getZ(n)*o)}}return o}function Up(e,t,n,r=.8,i=3){Bp&&(i=1);let a=new to(1,i);a.deleteAttribute(`uv`),a.deleteAttribute(`normal`),a=Np(a,1e-4);let o=a.attributes.position,s=H();for(let e=0;e<o.count;e++){s.fromBufferAttribute(o,e).normalize();let i=t*(1+.28*$d(s.x*2.3+n,s.y*2.3,s.z*2.3,3)+.16*$d(s.x*6+n,s.y*6,s.z*6,4));o.setXYZ(e,s.x*i,s.y*i*r,s.z*i)}return a.computeVertexNormals(),a}var Wp=(e,t,n,r,i=0,a=0,o=0,s=1)=>(e.applyMatrix4(new Ht().compose(H(t,n,r),new _t().setFromEuler(new Qt(i,a,o)),H(s,s,s))),e);function Gp(e,t,n,r){let i=[],a=[],o=(n,s,c,l,u)=>{let d=H(e.gauss(),0,e.gauss()).multiplyScalar(.12*c),f=n.clone().addScaledVector(s,c*.5).add(d),p=n.clone().addScaledVector(s,c);if(i.push(Rp(Hp([n,f,p],l,l*.62,5,u?5:8),t)),u>=r.lv){a.push(p);return}let m=u===0?r.n+1:r.n,h=e()*6.28;for(let t=0;t<m;t++){let n=h+t/m*6.283+e.gauss()*.3,i=s.clone().multiplyScalar(1-r.spread).add(H(Math.cos(n),r.up,Math.sin(n)).multiplyScalar(r.spread)).normalize();o(p.clone(),i,c*e.range(.6,.82),l*.6,u+1)}};o(H(0,-.1,0),H(e.gauss()*.06,1,e.gauss()*.06).normalize(),r.trunk,r.rad,0);for(let t of a){let a=n.clone().offsetHSL(e.gauss()*.02,0,e.gauss()*.04);if(r.leaf===`blob`)i.push(Rp(Wp(Up(e,e.range(.32,.6),e()*99,e.range(.5,.9),2),t.x,t.y,t.z),a));else if(r.leaf===`fan`)for(let n=0;n<5;n++){let r=n/5*6.28+e();i.push(Rp(Kp(t,H(Math.cos(r),.25,Math.sin(r)),e.range(.5,.9),.13),a))}else r.leaf===`orb`?i.push(Rp(Wp(new ao(e.range(.14,.3),Bp?5:12,Bp?4:9),t.x,t.y,t.z),a)):i.push(Rp(Hp([t,t.clone().add(H(e.gauss()*.2,-.4,e.gauss()*.2)),t.clone().add(H(e.gauss()*.3,-1,e.gauss()*.3))],.05,.015,5,5),a))}return zp(i)}function Kp(e,t,n,r){t=t.clone().normalize();let i=Bp?2:5,a=H().crossVectors(t,Fp).normalize(),o=[],s=[],c=[];for(let l=0;l<=i;l++){let u=l/i,d=e.clone().addScaledVector(t,n*u).addScaledVector(Fp,-n*.45*u*u),f=r*Math.sin(Math.PI*u**.7+.02)*2;for(let e of[-1,0,1]){let t=d.clone().addScaledVector(a,e*f*.5).addScaledVector(Fp,e?.25*f*.3:0);o.push(t.x,t.y,t.z),s.push(0,1,0)}if(l<i){let e=l*3;for(let t of[0,1])c.push(e+t,e+t+1,e+t+3,e+t+1,e+t+4,e+t+3)}}let l=new vr;return l.setAttribute(`position`,new B(o,3)),l.setAttribute(`normal`,new B(s,3)),l.setIndex(c),l}function qp(e,t,n){let r=e.range(.9,1.8),i=e.range(.45,1),a=[],o=e.range(.25,.7);a.push(Rp(Hp([H(0,-.1,0),H(e.gauss()*.08,r*.5,e.gauss()*.08),H(0,r,0)],.16*i+.05,.1*i+.03,8,10),t));let s=[];for(let e=0;e<=14;e++){let t=e/14;s.push(new L(Math.sin(t*1.62)*i,r+Math.cos(t*1.57)*o*i+.04*Math.sin(t*9)))}for(let e=1;e<=5;e++){let t=e/5;s.push(new L(i*(1-t)+.02,r-.03+.1*t*o))}let c=new no(s,Bp?9:28),l=c.attributes.position;for(let e=0;e<l.count;e++){let t=Math.atan2(l.getZ(e),l.getX(e)),n=1+.035*Math.sin(t*7)+.02*Math.sin(t*13);l.setXYZ(e,l.getX(e)*n,l.getY(e),l.getZ(e)*n)}c.computeVertexNormals(),a.push(Rp(c,n));for(let n=0;n<7;n++){let n=e()*6.28,s=e.range(.2,.8),c=Math.sin(s*1.5)*i;a.push(Rp(Wp(new ao(.06*i,Bp?4:8,Bp?3:6),Math.cos(n)*c,r+Math.cos(s*1.5)*o*i+.01,Math.sin(n)*c),t.clone().offsetHSL(0,0,.25)))}return zp(a)}function Jp(e,t){let n=[],r=(i,a,o,s,c)=>{let l=i.clone().addScaledVector(a,o);if(n.push(Rp(Hp([i,i.clone().addScaledVector(a,o*.5).add(H(e.gauss(),0,e.gauss()).multiplyScalar(.08)),l],s,s*.8,5,7),t.clone().offsetHSL(c*.015,0,c*.04))),n.push(Rp(Wp(new ao(s*.82,Bp?4:8,Bp?3:6),l.x,l.y,l.z),t.clone().offsetHSL(c*.015,0,c*.05))),c<3)for(let t=0;t<2+(e()*1.6|0);t++)r(l.clone(),a.clone().add(H(e.gauss()*.6,e()*.5,e.gauss()*.6)).normalize(),o*.75,s*.75,c+1)};for(let t=0;t<2;t++)r(H(e.gauss()*.2,-.1,e.gauss()*.2),H(e.gauss()*.4,1,e.gauss()*.4).normalize(),.6,.13,0);return zp(n)}function Yp(e,t,n){let r=[],i=6+(e()*6|0);for(let a=0;a<i;a++){let o=a/i*6.28+e(),s=e.range(1,2.4),c=H(Math.cos(o),0,Math.sin(o)),l=[c.clone().multiplyScalar(.12).add(H(0,-.1,0)),c.clone().multiplyScalar(.5).add(H(0,s*.5,0)),c.clone().multiplyScalar(.7).add(H(e.gauss()*.2,s*.85,e.gauss()*.2)),c.clone().multiplyScalar(e.range(.2,1.1)).add(H(e.gauss()*.3,s,e.gauss()*.3))];r.push(Rp(Hp(l,.11,.03,12,7),t)),r.push(Rp(Wp(new ao(.075,Bp?4:9,Bp?3:7),l[3].x,l[3].y,l[3].z),n))}return zp(r)}function Xp(e,t,n){let r=e.range(1.2,2.6),i=[],a=H(e.gauss()*.2,r,e.gauss()*.2);i.push(Rp(Hp([H(0,-.1,0),H(e.gauss()*.3,r*.5,e.gauss()*.3),a],.07,.04,8,6),t)),i.push(Rp(Wp(Up(e,.5,e()*9,1.15,3),a.x,a.y+.4,a.z),n));for(let e=0;e<5;e++){let n=e/5*6.28;i.push(Rp(Kp(H(0,.05,0),H(Math.cos(n),.9,Math.sin(n)),.9,.16),t))}return zp(i)}function Zp(e,t){let n=[],r=(e,r,i,a,o)=>{let s=[];for(let e=0;e<=12;e++){let t=e/12;s.push(new L(o*Math.sqrt(Math.max(0,1-(Math.max(0,t-.8)/.2)**2))*(.8+.2*Math.sin(t*3)),a*t))}let c=new no(s,Bp?9:36),l=c.attributes.position;for(let e=0;e<l.count;e++){let t=Math.atan2(l.getZ(e),l.getX(e)),n=1+.13*Math.abs(Math.sin(t*6));l.setXYZ(e,l.getX(e)*n,l.getY(e),l.getZ(e)*n)}c.computeVertexNormals(),n.push(Rp(Wp(c,e,r,i),t))};r(0,-.1,0,e.range(1.4,2.6),.27);for(let i=0;i<3;i++){let i=e()*6.28,a=e.range(.4,1),o=H(Math.cos(i)*.5,a+.15,Math.sin(i)*.5);n.push(Rp(Hp([H(0,a,0),H(Math.cos(i)*.35,a,Math.sin(i)*.35),o],.14,.15,6,10),t)),r(o.x,o.y-.06,o.z,e.range(.4,.9),.16)}return zp(n)}function Qp(e,t){let n=[];for(let r=0;r<9;r++){let i=r/9*6.28+e.gauss()*.2;n.push(Rp(Kp(H(0,.02,0),H(Math.cos(i),e.range(.6,1.3),Math.sin(i)),e.range(.8,1.4),.12),t.clone().offsetHSL(e.gauss()*.015,0,e.gauss()*.04)))}return zp(n)}function $p(e,t){let n=[],r=5+(e()*8|0);for(let i=0;i<r;i++){let r=e.range(.5,2.2)*(i?.7:1.3),a=e.range(.1,.26)*(i?1:1.3),o=new Fi(a,a*.9,r,6,1),s=new Ii(a,a*e.range(1,2.4),6,1);o.translate(0,r/2,0),s.translate(0,r+s.parameters.height/2,0);let c=e()*6.28,l=i?e.range(.1,.75):.05,u=[Math.sin(c)*l,e()*3,Math.cos(c)*l];for(let r of[o,s]){let a=Rp(Wp(r,Math.cos(c)*.12*!!i,-.15,Math.sin(c)*.12*!!i,...u),t.clone().offsetHSL(e.gauss()*.02,0,e.gauss()*.06));a.computeVertexNormals(),n.push(a)}}return zp(n)}function em(e,t,n){let r=[],i=e.range(1.6,2.6);for(let e=0;e<=40;e++){let t=e/40;r.push(new L((.42*(1-t)+.05)*(1+.25*Math.sin(t*40)),t*i))}let a=new no(r,Bp?8:30),o=a.attributes.position;for(let e=0;e<o.count;e++){let t=o.getY(e),n=Math.atan2(o.getZ(e),o.getX(e)),r=1+.16*Math.sin(n*3+t*5);o.setXYZ(e,o.getX(e)*r,t-.1,o.getZ(e)*r)}return a.computeVertexNormals(),zp([Rp(a,t),Rp(Wp(new ao(.1,12,9),0,i,0),n)])}function tm(e){let t=Hu(e),n=[];for(let r=0;r<=26;r++){let i=Math.PI*r/26;n.push(H(Math.cos(i)*1.1,Math.sin(i)*t.range(.95,1.05)*1.15-.12,.12*Math.sin(i*2+e)))}let r=Hp(n,.34,.28,40,18);r.deleteAttribute(`uv`);let i=r.attributes.position,a=H();for(let t=0;t<i.count;t++){a.fromBufferAttribute(i,t);let n=.14*$d(a.x*3+e,a.y*3,a.z*3,1)+.07*$d(a.x*8,a.y*8,a.z*8+e,2)+.03*$d(a.x*19,a.y*19,a.z*19,3),o=H(r.attributes.normal.getX(t),r.attributes.normal.getY(t),r.attributes.normal.getZ(t));a.addScaledVector(o,n),i.setXYZ(t,a.x,a.y,a.z)}let o=Np(r,1e-4);return o.computeVertexNormals(),o}function nm(e){let t=Hu(e),n=[],r=t.range(.3,.5);for(let t=0;t<=46;t++){let i=t/46;n.push(new L(Math.max(.001,r*(1-.35*i)*(1+.35*$d(i*5,e,0,1)+.12*Math.sign(Math.sin(i*38))*.5)*(i>.97?(1-i)/.03:1)+(i>.72&&i<.95?.12:0)),i*3-.2))}let i=new no(n,40),a=i.attributes.position;for(let t=0;t<a.count;t++){let n=a.getX(t),r=a.getY(t),i=a.getZ(t),o=1+.22*$d(n*3,r*1.2+e,i*3,2)+.08*$d(n*9,r*5,i*9,3);a.setXYZ(t,n*o,r,i*o)}i.deleteAttribute(`uv`);let o=Np(i,1e-4);return o.computeVertexNormals(),o}function rm(e){let t=Hu(e),n=[];for(let e=0;e<30;e++){let e=t()*6.28,r=Math.sqrt(t())*.9,i=(1.3-r)*t.range(.5,1.5),a=new Fi(.15,.16,i,6,1);Wp(a,Math.cos(e)*r,i/2-.2,Math.sin(e)*r,0,t(),0),a.deleteAttribute(`uv`);let o=a.toNonIndexed();o.computeVertexNormals(),n.push(o)}return zp(n)}function im(){let e=[],t=[],n=[],r=[],i=Hu(5);for(let a=0;a<7;a++){let a=i()*6.28,o=H(Math.cos(i()*6)*.12,0,Math.sin(i()*6)*.12),s=H(Math.cos(a),0,Math.sin(a)),c=H(-s.z,0,s.x),l=i.range(.5,1),u=e.length/3;for(let i=0;i<=3;i++){let a=i/3,d=.028*(1-a),f=o.clone().addScaledVector(s,.35*l*a*a);for(let n of[-1,1])e.push(f.x+c.x*d*n,l*a,f.z+c.z*d*n),t.push(s.x*.3,.95,s.z*.3),r.push(.45+.55*a,.45+.55*a,.45+.55*a);i<3&&n.push(u+i*2,u+i*2+1,u+i*2+2,u+i*2+1,u+i*2+3,u+i*2+2)}}let a=new vr;return a.setAttribute(`position`,new B(e,3)),a.setAttribute(`normal`,new B(t,3)),a.setAttribute(`color`,new B(r,3)),a.setIndex(n),a}function am(e,t){let n=new yo({color:e.color||`#fff`,roughness:e.rough??.9,metalness:e.metal||0,vertexColors:!!e.vc,side:e.ds?2:0,envMapIntensity:.25,emissive:e.em||`#000`,emissiveIntensity:e.ei??1,flatShading:!!e.flat});return n.onBeforeCompile=n=>{Object.assign(n.uniforms,Ud,qd,{uTm:Bu,uHz:t.haze,uHzK:t.hazeK,uC2:{value:e.c2||new z(`#fff`)},uFq:{value:e.fq||.5}}),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vQ,vWq;uniform float uTm;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nfloat sc=1.;vec3 ip=vec3(0);\n#ifdef USE_INSTANCING\nsc=length(instanceMatrix[0].xyz);ip=instanceMatrix[3].xyz;\n#endif\n${e.wind?`float wk=max(position.y,0.);wk*=wk*${e.wind};transformed.x+=sin(uTm*1.7+ip.x*.3+ip.z*.2)*wk;transformed.z+=cos(uTm*1.3+ip.z*.35)*wk;`:``}\nvQ=position*sc+fract(ip*.013)*40.;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vWq=mvPosition.xyz;`),n.vertexShader=n.vertexShader.replace(`#include <logdepthbuf_vertex>`,`gl_Position.z=(2.*log2(max(1.+gl_Position.w,1e-6))*${(1/Math.log2(Ju+1)).toPrecision(9)}-1.)*gl_Position.w;`).replace(`#include <logdepthbuf_pars_vertex>`,``),n.fragmentShader=n.fragmentShader.replace(`#include <logdepthbuf_fragment>`,``).replace(`#include <logdepthbuf_pars_fragment>`,``).replace(`#include <common>`,`#include <common>
precision highp sampler3D;varying vec3 vQ,vWq;`+Jd+`uniform sampler3D uDA,uDB;uniform vec3 uHz,uC2;uniform float uHzK,uFq;`).replace(`#include <color_fragment>`,e.tex===!1?`#include <color_fragment>`:`#include <color_fragment>\nvec4 ta=texture(uDA,vQ*uFq),tb=texture(uDA,vQ*uFq*5.);float ck=smoothstep(.09,0.,ta.b);diffuseColor.rgb*=.62+.55*ta.r+(tb.a-.5)*.5;${e.rock?`diffuseColor.rgb=mix(diffuseColor.rgb,uC2,smoothstep(.45,.75,ta.g+(tb.r-.5)*.4)*.6);diffuseColor.rgb*=1.-.45*ck;`:`diffuseColor.rgb*=.9+.25*tb.g;`}`).replace(`#include <normal_fragment_maps>`,e.tex===!1?`#include <normal_fragment_maps>`:`#include <normal_fragment_maps>\n{vec3 gq=(texture(uDB,vQ*uFq).rgb-.5)*${e.rock?`1.3`:`.6`}+(texture(uDB,vQ*uFq*4.).rgb-.5)*${e.rock?`.9`:`.5`};gq=mat3(viewMatrix)*gq;gq-=normal*dot(gq,normal);normal=normalize(normal-gq*1.1);}`).replace(`#include <lights_fragment_begin>`,`#include <lights_fragment_begin>
float sunS=sunShadow((vec4(vWq,0.)*viewMatrix).xyz,(vec4(normal,0.)*viewMatrix).xyz);reflectedLight.directDiffuse*=sunS;reflectedLight.directSpecular*=sunS;`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
float hz=1.-exp(-length(vWq)*uHzK);gl_FragColor.rgb=mix(gl_FragColor.rgb,uHz,hz);`)},n.customProgramCacheKey=()=>JSON.stringify([e.rock,e.wind,e.tex,e.flat,e.vc]),n}var om=class{constructor(){this.group=new _n,this.group.visible=!1,this.sets=[],this.env={haze:{value:new z},hazeK:{value:0}}}clear(){for(let e of this.sets)this.group.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.m.dispose();this.sets=[]}setup(e){if(this.clear(),this.body=e,this.keys={},!e)return;let t=e.P.seed|0,n=Hu(t+11),r=e.pal;e.atm;let i=(e,t,n)=>{let r=new ei(e,am(t,this.env),n.max||500);r.frustumCulled=!1,n.g!==2&&r.layers.enable(n.far?3:1),r.count=0,this.group.add(r),this.sets.push({m:r,n:0,id:this.sets.length,...n})},a=Ip(e.S[0]).lerp(Ip(r[3]),.5),o=Ip(e.B[5]);for(let r=0;r<3;r++){let s=r===1?1:r===2&&n()<.5?2:0,c={g:0,cell:8,rad:14,p:[.5,.22,.12][r]*e.rocky,s:[[.12,1.6],[.3,3.4],[.5,6]][r],pow:[4,5,6][r],tilt:.6,sink:.22,slope:1,seedK:r,hit:[.82,s===2?1.1:.55]},l={color:a.clone().offsetHSL(n.gauss()*.02,0,n.gauss()*.04),rock:1,rough:e.M.gloss>.5?.45:.92,metal:e.M.metal*.7,c2:o,fq:.35};i(Lp(t+r,7,s),l,{...c,near:42,max:260}),i(Lp(t+r,3,s),l,{...c,far:42,max:520})}let s=[()=>[Lp(t+9,11,0),[6,26]],()=>[tm(t),[14,60]],()=>[nm(t+3),[10,48]],()=>[rm(t+4),[9,34]],()=>[Lp(t+7,11,2),[10,40]]],c=e.landmarks,l=[...s].sort(()=>n()-.5);for(let t=0;t<c;t++){let[r,c]=l[t]();i(r,{color:a.clone().offsetHSL(0,0,n.gauss()*.05),rock:1,rough:.9,metal:e.M.metal*.5,c2:o,fq:.09},{g:1,cell:130,rad:9,p:n.range(.06,.2),s:c,pow:2.5,tilt:.15,sink:.12,reg:[n.range(-.2,.15),t],max:120,seedK:20+t,hit:[[.85,.5],[0,0],[.45,2.7],[.8,.9],[.8,1.1]][s.indexOf(l[t])],legs:s.indexOf(l[t])===1})}let u=e.glow?Ip(e.glow):new z(`#9ff`),d=Math.max(u.r,u.g,u.b,1);if(u.multiplyScalar(1/d),e.crystals)for(let e=0;e<2;e++)i($p(n,u.clone().offsetHSL(n.gauss()*.06,0,n.gauss()*.08)),{vc:1,rough:.12,metal:.1,em:u,ei:.28,flat:1,tex:!1},{g:0,cell:11,rad:11,p:.16,s:[.4,e?5:2.4],pow:3.5,tilt:.4,sink:.05,reg:[n.range(-.1,.12),40+e],max:240,seedK:40+e,hit:[.3,1.2]});if(e.crystals&&n()<.55&&i($p(n,u),{vc:1,rough:.1,em:u,ei:.22,flat:1,tex:!1},{g:1,cell:150,rad:8,p:.14,s:[8,42],pow:2,tilt:.3,sink:.04,reg:[0,44],max:90,seedK:44,hit:[.3,1.3]}),e.plants){let r=Ip(e.plantC),a=r.clone().offsetHSL(n.range(-.12,.12),.05,n.range(-.03,.08)),o=new z().setHSL(n.range(.02,.13),n.range(.15,.45),n.range(.08,.24)),s=u.clone().lerp(r.clone().offsetHSL(.5,.2,.15),.5),c=[e=>Gp(e,o,r,{lv:3,n:2,spread:.55,up:.5,trunk:1.2,rad:.13,leaf:`blob`}),e=>Gp(e,o,a,{lv:2,n:3,spread:.75,up:.25,trunk:1.7,rad:.12,leaf:`fan`}),e=>Gp(e,o.clone().lerp(s,.3),s,{lv:3,n:2,spread:.6,up:.7,trunk:1,rad:.09,leaf:`orb`}),e=>Gp(e,o,a,{lv:2,n:3,spread:.8,up:.4,trunk:1.5,rad:.11,leaf:`hang`}),e=>qp(e,a.clone().offsetHSL(0,-.2,.25),s),e=>Jp(e,a),e=>Yp(e,r,s),e=>Xp(e,r,s),e=>Zp(e,r),e=>em(e,a,s),e=>Qp(e,r)],l=e.type===`fungal`?[4,4,5,6,9,7]:e.type===`terran`?[0,1,3,10,0,8]:e.type===`glow`?[2,6,7,9,5]:[0,1,2,3,4,5,6,7,8,9,10],d=e.type===`glow`||e.type===`fungal`||e.type===`exotic`;for(let e=0;e<4;e++){let r=n.pick(l),a=t+e*77|0,o=r<4,u={vc:1,rough:.85,wind:.006,em:d&&!o?s:`#000`,ei:.08,ds:1},f={g:0,cell:o?12:8,rad:o?13:12,p:n.range(.2,.6),s:o?[1.5,n.range(4,8)]:[.5,n.range(1.5,4)],pow:1.8,sink:.03,wet:[.38+n.range(-.08,.12),1.1],reg:[n.range(-.2,.1),60+e],slope:.45,max:240,seedK:60+e,hit:o?[.11,1.6]:[[4,8].includes(r)?.2:.16,1.3]};i(c[r](Hu(a)),u,{...f,near:26,max:70}),i(Vp(a,c[r]),u,{...f,far:26})}i(Qp(n,r),{vc:1,wind:.02,ds:1},{g:0,cell:6,rad:9,p:.5,s:[.3,1.2],pow:1.6,wet:[.4,1.1],slope:.4,max:260,seedK:70}),i(c[n.pick(l)](Hu(t+5)),{vc:1,rough:.85,wind:.0015,ds:1,em:d?s:`#000`,ei:.05},{g:1,cell:110,rad:8,p:.25,s:[9,n.range(16,34)],pow:2,sink:.02,wet:[.46,1.1],slope:.4,reg:[-.05,66],max:110,seedK:72,hit:[.13,1.5]}),i(im(),{vc:1,color:r.clone().lerp(Ip(e.B[1]),.45).offsetHSL(0,0,.04),wind:.12,ds:1,tex:!1},{g:2,cell:1.15,rad:27,p:.85,s:[.25,.75],pow:1.2,wet:[.4,1.2],slope:.4,max:2300,seedK:80})}}update(e,t,n,r){let i=t?.terrain?e.clone().applyQuaternion(t.terrain.qi):e,a=t&&t.terrain&&n<900;if(this.group.visible=!!a,!a)return;this.body!==t&&this.setup(t);let o=t.R,s=i.clone().normalize(),c=performance.now();if(t.atm){let n=t.atm,r=n.tau,i=Math.max(r.x,r.y,r.z),a=Math.max(0,Math.min(1,e.clone().normalize().dot(t.sunDir)*1.6+.25));this.env.haze.value.setRGB((.25+r.x/i*.4)*t.sunCol.x*a*.8,(.25+r.y/i*.4)*t.sunCol.y*a*.8,(.25+r.z/i*.4)*t.sunCol.z*a*.8),this.env.hazeK.value=Math.min(6e-4,(i+n.mie)/n.H*.6),this.fogK>3e-4&&(this.env.hazeK.value=this.fogK,this.env.haze.value.copy(this.fogC||this.env.haze.value))}else this.env.hazeK.value=0;(!this.base||this.base.distanceTo(i)>4e3)&&(this.base=s.clone().multiplyScalar(o+t.terrain.height(s)),this.keys={});for(let e of[0,1,2]){if(e===2&&(n>40||r>70)){for(let e of this.sets)e.g===2&&(e.m.count=0);this.keys[2]=``;continue}if(e===0&&n>350){for(let e of this.sets)e.g===0&&(e.m.count=0);this.keys[0]=``;continue}let[a,l,u]=of(s.x,s.y,s.z),d=[9,120,5][e],f=Math.round(o*1.5708/d),p=[a,Math.floor((l+1)/2*f),Math.floor((u+1)/2*f)].join();p===this.keys[e]||c-(this[`t`+e]||0)<[130,500,160][e]||(this.keys[e]=p,this[`t`+e]=c,this.place(e,s,a,l,u,i,t))}this.group.quaternion.copy(t.terrain.q),this.group.position.copy(this.base).applyQuaternion(t.terrain.q).sub(e)}place(e,t,n,r,i,a,o){let s=o.R,c=o.terrain,l=[0,0,0],u={},d=H(),f=new Ht,p=new _t,m=new _t,h=H(),g=o.P.seed;for(let t of this.sets)if(t.g===e){t.n=0,t.col=[];let _=Math.max(6,Math.round(s*1.5708/t.cell)),v=Math.floor((r+1)/2*_),y=Math.floor((i+1)/2*_),b=t.rad;for(let r=-b;r<=b;r++)for(let i=-b;i<=b;i++){if(r*r+i*i>b*b)continue;let x=v+r,S=y+i;if(x<0||S<0||x>=_||S>=_||t.n>=t.m.instanceMatrix.count)continue;let C=e=>ef(x,S,t.seedK*10+e,g+n);if(C(0)>t.p||(af(n,-1+(x+C(1))*2/_,-1+(S+C(2))*2/_,l),d.set(l[0],l[1],l[2]),t.reg&&$d(l[0]*s/900,l[1]*s/900,l[2]*s/900,g+t.reg[1])<t.reg[0]))continue;let w=c.hf(l[0],l[1],l[2],e===1?6:2,u);if(o.P.sea&&w<(t.wet?2.5:.2)||t.wet&&(u.moist<t.wet[0]||u.moist>t.wet[1]||w>o.hs*.5)||this.clr&&d.distanceTo(this.clr.d)*s<this.clr.r)continue;let T=t.s[0]+(t.s[1]-t.s[0])*C(3)**+t.pow;h.copy(d).multiplyScalar(s+w-T*(t.sink||0));let E=h.distanceTo(a);if(t.near&&E>t.near+T*2.5||t.far&&E<=t.far+T*2.5)continue;if(t.slope&&t.slope<1&&e!==2){let e=2.5/s,n=c.hf(l[0]+e,l[1],l[2]+e,3);if(Math.abs(n-w)>3.5*t.slope*2)continue}p.setFromUnitVectors(Fp,d),m.setFromAxisAngle(H((C(5)-.5)*(t.tilt||.08),1,(C(6)-.5)*(t.tilt||.08)).normalize(),C(4)*6.2832),p.multiply(m);let D=.85+C(7)*.35;if(t.m.setMatrixAt(t.n++,f.compose(h.sub(this.base),p,H(T,T*D,T))),t.legs)for(let e of[-1.1,1.1])t.col.push({p:h.clone().add(H(e*T,0,0).applyQuaternion(p)),u:d.clone(),r:T*.36,h:T*.7});else t.hit&&T*t.hit[0]>.25&&t.col.push({p:h.clone(),u:d.clone(),r:T*t.hit[0],h:T*D*t.hit[1]})}t.m.count=t.n,t.m.instanceMatrix.needsUpdate=!0}}collide(e,t,n=0){let r=this.body?.terrain;if(!r)return null;let i=e.clone().applyQuaternion(r.qi),a=this.collideB(i,t,n);return e.copy(i.applyQuaternion(r.q)),a&&a.applyQuaternion(r.q)}collideB(e,t,n=0){if(!this.group.visible||!this.base)return null;let r=H(),i=null;for(let a of this.sets)if(a.col)for(let o of a.col){if(o.r<n)continue;r.copy(e).sub(this.base).sub(o.p);let a=o.r+t;if(Math.abs(r.x)>a+o.h||Math.abs(r.y)>a+o.h||Math.abs(r.z)>a+o.h)continue;let s=Math.max(0,Math.min(o.h,r.dot(o.u)));r.addScaledVector(o.u,-s);let c=r.length();c<a&&c>1e-4&&(r.divideScalar(c),e.addScaledVector(r,a-c),i=r.clone())}return i}},sm=4.5,cm=[`Cargo bay and airlock`,`Rover garage`,`Reactor`,`Antimatter store`,`Life support`,`Water recycling`,`Workshop`,`Storage`,`Hydroponics`,`Laboratory`,`Observatory`,`Medical bay`,`Gym`,`Crew quarters`,`Galley`,`Lounge`,`Navigation`,`Cockpit`],lm=cm.length,um={x:0,z:2.6,r:1.05},dm=[10,15,17],fm=[[2],[],[],[],[1,5],[],[3],[],[0,3,6],[0,2,5,7],[0,1,2,3,4,5,6,7],[1,6],[2,6],[0,2,5,7],[1,3,5],[0,1,2,3,4,5,6,7],[0,2,5,7],[0,1,2,3,4,5,6,7]],pm=[[1,.95,.86],[1,.93,.84],[.6,.9,1.1],[.95,.7,1.15],[.8,1,.95],[.7,.9,1.1],[1.05,.92,.8],[1,.95,.86],[1.05,.8,1.15],[.95,1,1.05],[.55,.6,.8],[.9,1,1.05],[1,.95,.9],[1.05,.9,.8],[1.05,.92,.8],[1,.85,.75],[.7,.85,1.1],[.6,.7,.9]],mm=e=>{let t=(e+6.6)/9.6;return Math.sin(Math.min(1,t*1.22+.02)*Math.PI/2)**.8*(t>.78?1-((t-.78)/.22)**2*.35:1)},hm=e=>Math.min(...[0,1].map(t=>mm(-(-20+(e+t)*sm)/13)*.7*13))-.35;function gm(e,t=.35){e.index&&(e=e.toNonIndexed());let n=e.attributes.position.array,r=e.attributes.normal.array,i=[],a=[],o=um.r+t;for(let e=0;e<n.length;e+=9){let t=!1;for(let r=0;r<9;r+=3)Math.hypot(n[e+r]-um.x,n[e+r+2]-um.z)<o&&(t=!0);if(!t)for(let t=0;t<9;t++)i.push(n[e+t]),a.push(r[e+t])}let s=new vr;return s.setAttribute(`position`,new B(i,3)),s.setAttribute(`normal`,new B(a,3)),s}var _m=cm.map((e,t)=>Math.max(4,hm(t))),vm=e=>-20+e*sm,ym=e=>Math.max(0,Math.min(lm-1,Math.floor((e- -20+.05)/sm))),bm=H(0,vm(lm-1)+2.1,-.3),xm=class{constructor(){this.group=new _n,this.group.rotation.x=-Math.PI/2,this.group.scale.setScalar(1/13),this.group.visible=!1,this.obs=cm.map(()=>[]),this.spots=[];let e=[],t=[],n=[],r=[],i=new z,a=(a,o,s=0)=>{a.index&&(a=a.toNonIndexed()),i.set(o),e.push(...a.attributes.position.array),t.push(...a.attributes.normal.array);for(let e=0;e<a.attributes.position.count;e++)n.push(i.r,i.g,i.b),r.push(s)},o=(e,t,n,r,i=0,a=0,o=0)=>e.applyMatrix4(new Ht().makeRotationFromEuler(new Qt(a,i,o,`YXZ`)).setPosition(t,n,r)),s=Hu(77),c=`#3a3d46`,l=`#b8743c`,u=`#ffcf9a`,d=`#8fc4ff`,f=Math.atan2(um.x,um.z);cm.forEach((e,t)=>{let n=vm(t),r=_m[t],i=(e,t,r,i,s,c,l,u=0,d=0)=>a(o(new Mi(i,s,c),Math.sin(e)*t,n+r,Math.cos(e)*t,e,d),l,u),p=(e,t,r,i,s,c,l,u=0,d=20)=>a(o(new Fi(i,s,c,d),Math.sin(e)*t,n+r,Math.cos(e)*t,e),l,u),m=(e,n,r)=>this.obs[t].push([Math.sin(e)*n,Math.cos(e)*n,r]),h=(e,t,r,i,s=0)=>a(gm(o(new oo(e,r,6,64),0,n+t,0,0,Math.PI/2)),i,s),g=e=>Math.abs(Math.atan2(Math.sin(e-f),Math.cos(e-f)))>.6,_=new ma;if(_.absarc(0,0,r,0,Math.PI*2),t){let e=new pa;e.absarc(um.x,-um.z,um.r,0,Math.PI*2,!0),_.holes.push(e)}a(o(new Qa(_,{depth:.28,bevelEnabled:!1,curveSegments:40}),0,n-.28,0,0,-Math.PI/2),`#6b6f78`),t&&a(o(new oo(um.r,.07,8,40),um.x,n+.02,um.z,0,Math.PI/2),d,1.6),h(r-.12,.06,.035,u,.9),h(r-.1,4.08,.06,`#fff1dc`,1.5),h(r*.45,4.16,.05,`#eaf2ff`,1.7),h(r-.3,1.05,.035,`#9aa0aa`);for(let e=0;e<3;e++)h(r-.35-e*.22,3.95-e*.03,.06+e*.02,e?c:l);for(let e=0;e<12;e++){let t=e/12*Math.PI*2+.13;Math.hypot(Math.sin(t)*r*.62-um.x,Math.cos(t)*r*.62-um.z)>um.r+.6&&i(t,r*.62,4.2,.5,.05,.5,`#f6efe0`,1.2)}for(let e=0;e<6;e++){let t=e/6*Math.PI*2+.3;a(o(new Fi(.03,.03,.9,6),um.x+Math.sin(t)*(um.r+.05),n+.5,um.z+Math.cos(t)*(um.r+.05)),`#9aa0aa`)}let v=dm.includes(t);for(let e=0;e<8;e++){let l=e/8*Math.PI*2,u=Math.PI*2/8,d=v?.75:1.15,f=v?3.3:2.75,p=(e,t,i,s)=>a(o(new Fi(r,r,s-i,10,1,!0,l+u*e,u*(t-e)),0,n+(i+s)/2,0),`#c9ccd3`);if(!fm[t].includes(e)){p(0,1,0,4.22);let e=l+u/2;g(e)&&(i(e,r-.22,2.1,1.1,2.6,.3,`#8e939c`),i(e,r-.38,2.1,1,2.45,.03,c),i(e,r-.4,2.7,.18,.06,.02,s.pick([`#9fe8b0`,`#ffd27a`,`#8fd0ff`]),1.4),i(e,r-.4,1,.5,.3,.02,`#262a33`));continue}let m=v?.06:.24,h=1-m;p(0,m,0,4.22),p(h,1,0,4.22),p(m,h,0,d),p(m,h,f,4.22);for(let e of[d,f])a(o(new oo(r-.02,.07,6,20,u*(h-m)),0,n+e,0,l+u*h-Math.PI/2,Math.PI/2),c);for(let e of[m,h])i(l+u*e,r-.02,(d+f)/2,.14,f-d,.14,c)}for(let e=0;e<8;e++){let n=e/8*Math.PI*2;i(n,r-.1,sm/2-.14,.22,4.22,.16,c),i(n,r-.19,1.6,.05,1.1,.02,t===2||t===3?`#7fe0ff`:u,1),i(n,r-.3,.35,.6,.2,.12,`#555a64`)}let y=(e,t,n,r,a)=>{i(e,t,n+r/2,r,r,r,a),i(e,t,n+r/2,r*1.03,r*.1,r*1.03,c),i(e,t-r*.51,n+r*.68,r*.25,r*.08,.01,`#9fe8b0`,1.3)},b=(e,t,n,r=`#51555f`)=>{i(e,t,.48,n,.96,.8,r),i(e,t,1,n+.08,.06,.9,c),i(e,t+.22,1.42,n*.92,.62,.06,`#101522`,0,-.25),i(e,t+.18,1.42,n*.86,.54,.02,s.pick([`#3c8ad0`,`#39b39a`,`#d08a3c`,`#7a5ad8`]),.8,-.25);for(let r=0;r<9;r++)i(e+(r-4)*.09*n/t*1.1,t-.16,1.045,.07,.03,.07,s.pick([`#ff7a5c`,`#8fd0ff`,`#9fe8b0`,`#ffd27a`]),1.2);m(e,t,.75)},x=(e,r,i=`#8a4a2c`)=>{let s=Math.sin(e)*r,l=Math.cos(e)*r,u=Math.cos(e),d=Math.sin(e);for(let[t,r,c,f,p,m]of[[0,.5,0,.62,.14,.62],[0,1,-.3,.62,.95,.14],[.36,.72,0,.1,.1,.5],[-.36,.72,0,.1,.1,.5]])a(o(new Mi(f,p,m),s+t*u+c*d,n+r,l-t*d+c*u,e),i);a(o(new Fi(.07,.28,.45,12),s,n+.22,l),c),this.obs[t].push([s,l,.35])},S=(e,t)=>{for(let n of[.08,1.15,2.2,3.1])i(e,t,n,2,.07,.9,c);for(let n of[-1,1])i(e+n*.97/t,t,1.6,.07,3.2,.9,c);for(let n=0;n<9;n++){let r=s.range(.4,.62);i(e+(n%3-1)*.62/t,t,.12+Math.floor(n/3)*1.06+r/2,r,r,r,s.pick([`#8d6a3c`,`#57616e`,`#a34a3a`,`#4d6e8a`,`#c9b48a`]))}m(e,t,1)},C=(e,t,r,s,c=0)=>{p(e,t,r/2+.1,.6,.6,r,s);for(let i of[.3,r-.1])a(o(new oo(.62,.06,8,24),Math.sin(e)*t,n+i,Math.cos(e)*t,0,Math.PI/2),l);i(e,t-.62,r*.55,.3,.2,.03,`#8ff0a4`,1.3),p(e,t,r+.9,.06,.06,1.6,l),m(e,t,.75),c&&p(e,t,r*.5,.25,.25,r*.7,s,c)},w=(e,t=6,n=.55,r=Math.PI*2-.55)=>{for(let i=0;i<t;i++)e(f+n+(r-n)*i/(t-1),i)};switch(e){case`Cargo bay and airlock`:{w((e,t)=>{let n=s.range(.8,1.3);y(e,r-1,0,n,s.pick([`#8d6a3c`,`#57616e`,`#6d7a55`])),t%2&&y(e,r-1,n,n*.75,`#57616e`),m(e,r-1,.8)},7,.7,3.4);let e=f+Math.PI;i(e,r-.12,1.45,2.3,2.9,.2,`#d8a13a`),i(e,r-.25,1.45,1.9,2.6,.1,c);for(let t of[-1,1])i(e+t*.25,r-.28,1.5,.12,2.5,.06,`#ff8a4a`,1.4);for(let t=0;t<3;t++){let i=Math.sin(e+.5+t*.3),s=Math.cos(e+.5+t*.3);a(o(new Ni(.32,1.1,6,12),i*(r-.5),n+1.3,s*(r-.5)),`#e8e2d4`),a(o(new ao(.24,14,10),i*(r-.5),n+2.25,s*(r-.5)),`#ffcf7a`,.5)}this.spots.push({deck:t,x:Math.sin(e)*(r-1.2),z:Math.cos(e)*(r-1.2),r:1.8,id:`hatch`});break}case`Rover garage`:{let e=f+Math.PI,t=1.2;i(e,t,.75,1.9,.55,3,`#d8d2c4`),i(e,t,1.3,1.5,.7,1.4,`#1a2230`);for(let[r,i]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let s=Math.sin(e)*t,c=Math.cos(e)*t,l=Math.cos(e),u=Math.sin(e);a(o(new Fi(.5,.5,.4,20).rotateZ(Math.PI/2),s+r*1.05*l+i*1*u,n+.5,c-r*1.05*u+i*1*l,e),`#17181c`)}m(e,t,1.7),w((e,t)=>{i(e,r-.6,1.6,1.2,.1,.6,c),i(e,r-.6,2.4,.9,.3,.4,s.pick([`#d0d4da`,`#e0b050`])),p(e,r-.6,2.75,.25,.25,.1,`#30343c`)},4,1,2.2);break}case`Reactor`:p(0,0,2.1,1,1.3,4.2,c,0,28);for(let e of[.6,3.6])h(1.35,e,.14,l);this.obs[t].push([0,0,1.65]),w(e=>{p(e,r-.9,1.3,.55,.6,2.6,`#7b828e`),p(e,r-.9,2.7,.3,.55,.3,l),i(e,r-1.5,1.4,.3,.5,.05,`#5fe0ff`,1.3),m(e,r-.9,.7)},5),this.core=n+2.1;break;case`Antimatter store`:w(e=>{let i=Math.sin(e)*(r-1.1),s=Math.cos(e)*(r-1.1);a(o(new Fi(.55,.55,2.6,24,1,!0),i,n+1.6,s),`#2a2e38`),a(o(new ao(.22,16,12),i,n+1.6,s),`#c27aff`,2.2);for(let e of[.6,1.2,2,2.6])a(o(new oo(.6,.05,8,24),i,n+e,s,0,Math.PI/2),`#b070ff`,.9);this.obs[t].push([i,s,.7])},6),b(f+Math.PI,1.3,1.6);break;case`Life support`:w((e,t)=>C(e,r-.95,2.4,t%2?`#dfe3e8`:`#6f93b8`),7),b(f+Math.PI,1.2,1.5);break;case`Water recycling`:w((e,t)=>C(e,r-1,3,`#4d86b8`,t%3==0?.3:0),6),p(0,0,1.2,.9,.9,2.4,`#d6dde6`),this.obs[t].push([0,0,1.1]);for(let e=0;e<6;e++){let t=e/6*Math.PI*2;a(gm(o(new Fi(.07,.07,r-1.6,8,60).rotateZ(Math.PI/2),Math.sin(t)*(r/2+.2),n+2.3,Math.cos(t)*(r/2+.2),t+Math.PI/2)),l)}break;case`Workshop`:w(e=>{i(e,r-1,.5,2,1,.9,`#6c5a48`),i(e,r-1,1.02,2.1,.06,1,c);for(let t=0;t<4;t++)i(e+(t-1.5)*.3/r,r-.95,1.12,.2,.12,.3,s.pick([`#d0d4da`,`#e0b050`,`#c04a3a`]));i(e,r-.35,2,2,1.4,.05,`#2a2e36`),m(e,r-1,.9)},4);{let e=f+Math.PI;p(e,1.4,.3,.5,.6,.6,`#e0b050`),a(o(new Fi(.12,.12,1.6,10).rotateZ(.6),Math.sin(e)*1.4+.4,n+1.2,Math.cos(e)*1.4),`#e0b050`),a(o(new Fi(.1,.1,1.1,10).rotateZ(-.9),Math.sin(e)*1.4+1.2,n+1.9,Math.cos(e)*1.4),`#e0b050`),m(e,1.4,.8)}i(f+2.4,1.6,.9,1.4,1.8,1.3,`#d6dde6`),i(f+2.4,1.6,1.2,1,.8,1.35,`#123040`,.3),m(f+2.4,1.6,1);break;case`Storage`:w(e=>S(e,r-1),6);break;case`Hydroponics`:w(e=>{for(let t of[.4,1.5,2.6]){i(e,r-.85,t,1.5,.25,.8,`#e6e8ea`),i(e,r-.85,t+.85,1.4,.04,.5,`#e58aff`,1.8);for(let i=0;i<9;i++){let c=Math.sin(e)*(r-.85)+Math.cos(e)*(i-4)*.16,l=Math.cos(e)*(r-.85)-Math.sin(e)*(i-4)*.16,u=s.range(.2,.55);a(o(new Ii(.12,u,6),c+s.gauss()*.05,n+t+.12+u/2,l+s.gauss()*.05),s.pick([`#4f9a3a`,`#7ab84a`,`#2f7a44`,`#b0c84a`])),s()<.25&&a(o(new ao(.06,8,6),c,n+t+.2+u,l),s.pick([`#ff5a4a`,`#ffb04a`,`#e04aff`]))}}m(e,r-.85,.75)},7,.6,Math.PI*2-.6);break;case`Laboratory`:w(e=>b(e,r-1,1.7,`#dfe3e8`),5),p(0,0,.55,.9,1,1.1,`#dfe3e8`),this.obs[t].push([0,0,1.15]);for(let e=0;e<6;e++)p(1.7+e*.55,r-.5,2.2,.18,.18,.8,s.pick([`#6affc0`,`#ff9a6a`,`#8ab0ff`]),.7,14);break;case`Observatory`:p(0,0,.6,.8,1,1.2,c,0,24),a(o(new Fi(.45,.55,3.2,24).rotateX(-.7),0,n+2.4,-.6),`#d6dde6`),a(o(new Fi(.5,.5,.1,24).rotateX(-.7),0,n+3.6,-1.65),`#203060`,.4),this.obs[t].push([0,0,1.1]),w(e=>x(e,r-1.4,`#3a4a6a`),6);break;case`Medical bay`:w((e,t)=>{if(t<3){let t=Math.sin(e)*(r-.9),i=Math.cos(e)*(r-.9);a(o(new Ni(.6,1.3,8,20),t,n+1.35,i,e,-.12),`#e8ecf2`),a(o(new Ni(.44,1,8,16),Math.sin(e)*(r-1.22),n+1.45,Math.cos(e)*(r-1.22),e,-.12),`#66d0ff`,.7),m(e,r-.9,.8)}else i(e,r-1.3,.55,1,.18,2.1,`#f2f4f6`),i(e,r-1.3,.25,.5,.5,1.4,`#8d949e`),a(o(new oo(.75,.08,8,30),Math.sin(e)*(r-1.3),n+1,Math.cos(e)*(r-1.3),e),`#dfe6ee`),m(e,r-1.3,1)},5);break;case`Gym`:a(o(new oo(r-1.4,.12,8,64),0,n+.15,0,0,Math.PI/2),`#3a3d46`),w((e,t)=>{t%2?(i(e,r-1.2,.35,.8,.3,2,`#2a2c32`),i(e,r-1.2,1.2,.8,.08,.08,`#9aa0aa`)):(p(e,r-1.1,.9,.08,.08,1.8,`#9aa0aa`),a(o(new Fi(.25,.25,.15,16),Math.sin(e)*(r-1.1),n+1.5,Math.cos(e)*(r-1.1)),`#c04a3a`)),m(e,r-1.15,.8)},6);break;case`Crew quarters`:w(e=>{for(let t of[.45,2.1])i(e,r-.75,t,2.1,.2,1.1,`#7a6250`),i(e,r-.75,t+.16,2,.14,1,`#c8b8a0`),i(e+.85/(r-.75),r-.75,t+.28,.4,.14,.8,`#efe9dc`),i(e,r-.28,t+.85,1.2,.05,.05,u,1.4);m(e,r-.75,1.05)},6);break;case`Galley`:w(e=>{i(e,r-.6,.5,2,1,.8,`#d6d0c4`),i(e,r-.6,1.02,2.1,.06,.9,`#8a7a6a`),i(e,r-.3,2,2,.8,.4,`#e6e0d4`),m(e,r-.6,.9)},4,.7,2.6);for(let[e,r]of[[f+2.3,1.6],[f+3.7,1.6]]){p(e,r,.5,.7,.2,.08,`#8a6a4a`),p(e,r,.25,.08,.08,.5,c),this.obs[t].push([Math.sin(e)*r,Math.cos(e)*r,.8]);for(let t=0;t<4;t++){let i=t*1.57;a(o(new Fi(.22,.2,.45,12),Math.sin(e)*r+Math.sin(i)*1.05,n+.22,Math.cos(e)*r+Math.cos(i)*1.05),`#b06a3a`)}}break;case`Lounge`:p(f+Math.PI,1.3,.4,1.05,.25,.8,`#7a5a3c`,0,30),m(f+Math.PI,1.3,1.1);for(let e of[f+1.6,f+4.7])i(e,r-.75,.3,2.6,.5,.9,`#4a5a78`),i(e,r-.42,.75,2.6,.7,.22,`#4a5a78`),m(e,r-.75,1.2);i(f+Math.PI,r-.5,.55,2.6,1.1,.6,`#3a2a22`);for(let e=0;e<7;e++)p(f+Math.PI+(e-3)*.12,r-.35,1.3,.06,.06,.3,s.pick([`#6ad0a0`,`#d0a06a`,`#a06ad0`]),.6,8);break;case`Navigation`:p(0,0,.5,1.3,1.5,1,c,0,32),h(1.3,1.02,.05,d,1.8),this.obs[t].push([0,0,1.6]),w(e=>b(e,r-.95,1.5),4),this.spots.push({deck:t,x:0,z:0,r:2.6,id:`map`}),this.holoY=n+1.75;break;case`Cockpit`:w(e=>b(e,r-.85,1.35),5,2.1,4.18);for(let e of[f+Math.PI+.8,f+Math.PI-.8])x(e,r-2,`#5a3a2c`);a(o(new Fi(.5,.8,1.2,24),bm.x,n+.6,bm.z),c),this.screenY=n+3.75}});let p=-20+lm*sm,m=_m[lm-1];for(let e=0;e<8;e++){let t=e/8*Math.PI*2;a(new so(new qi([0,.3,.6,.85,1].map(e=>H(Math.sin(t)*m*Math.cos(e*1.5),p-.3+4.2*Math.sin(e*1.5),Math.cos(t)*m*Math.cos(e*1.5)))),14,.1,6),c)}a(o(new oo(m,.16,8,60),0,p-.3,0,0,Math.PI/2),c),a(o(new oo(m*.5,.07,8,40),0,p+3.1,0,0,Math.PI/2),c);let h=new vr;h.setAttribute(`position`,new B(e,3)),h.setAttribute(`normal`,new B(t,3)),h.setAttribute(`col`,new B(n,3)),h.setAttribute(`em`,new B(r,1)),this.u={uTime:Bu,uEye:{value:H()},uSunD:{value:H(0,1,0)},uSunC:{value:H()},uAlarm:{value:0},uTone:{value:pm.map(e=>H(...e))}};let g=new Hr(h,new _o({side:2,uniforms:this.u,vertexShader:`attribute vec3 col;attribute float em;varying vec3 vO,vN,vC;varying float vE;void main(){vO=position;vN=normal;vC=col;vE=em;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vO,vN,vC;varying float vE;uniform vec3 uEye,uSunD,uSunC,uTone[${lm}];uniform float uTime,uAlarm;float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 N=normalize(vN),Ve=normalize(uEye-vO);if(dot(N,Ve)<0.)N=-N;float d=clamp(floor((vO.y-(${(-20).toFixed(1)})+.15)/${sm.toFixed(1)}),0.,${lm-1}.);float ly=${(-20).toFixed(1)}+(d+1.)*${sm.toFixed(1)}-.5;float h=vO.y-(${(-20).toFixed(1)}+d*${sm.toFixed(1)});
      vec3 an=abs(N);vec2 uv=an.y>.6?vO.xz:vec2(atan(vO.x,vO.z)*length(vO.xz),vO.y);vec2 c=uv*vec2(.9,1.1);vec2 f=fract(c),id=floor(c);float sm=min(min(f.x,1.-f.x),min(f.y,1.-f.y));float w=fwidth(sm);float ln=smoothstep(.015+w,.015,sm)*smoothstep(.25,.05,w);vec3 al=vC*(.86+.22*hh(id))*(1.-.45*ln);if(an.y>.6&&h<.1){al*=.9+.12*step(.5,fract((floor(uv.x*7.)+floor(uv.y*7.))*.5));}
      vec3 L=vec3(0.,ly,0.)-vO;float l2=dot(L,L);vec3 l=L/sqrt(l2);float df=max(dot(N,l),0.)/(1.+l2*.13);vec3 HV=normalize(l+Ve);float sp=pow(max(dot(N,HV),0.),40.)*.5/(1.+l2*.1);float ao=smoothstep(-.1,.7,h)*.35+.65;vec3 tone=uTone[int(d)];
      float lv=d>${lm-1.5}?.5:1.;vec3 lit=tone*(df*1.5+.17+.12*max(N.y,0.))*lv*ao;vec3 col=al*lit+tone*sp*lv+uSunC*max(dot(N,uSunD),0.)*al*.12;col=mix(col,vC*(.45+vE*.85)*(.94+.06*sin(uTime*2.+vO.x*3.+vO.z*5.)),step(.01,vE));col+=vec3(.6,.05,.02)*uAlarm*(.5+.5*sin(uTime*5.))*.15;gl_FragColor=vec4(col,1.);}`}));g.frustumCulled=!1,this.group.add(g);let _=new _o({transparent:!0,depthWrite:!1,side:2,uniforms:{uEye:this.u.uEye},vertexShader:`varying vec3 vO,vN;void main(){vO=position;vN=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec3 vO,vN;uniform vec3 uEye;void main(){float f=1.-abs(dot(normalize(vN),normalize(uEye-vO)));gl_FragColor=vec4(.6,.75,.9,.025+pow(f,4.)*.22);}`});fm.forEach((e,t)=>{if(!e.length)return;let n=new Hr(new Fi(_m[t]-.02,_m[t]-.02,2.6,48,1,!0).translate(0,vm(t)+2,0),_);this.group.add(n)}),this.group.add(new Hr(new ao(m,40,20,0,Math.PI*2,0,Math.PI/2).scale(1,4.2/m,1).translate(0,p-.3,0),_));let v=(e,t,n)=>{let r=new Hr(e,new _o({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uC:{value:new z(t)},uK:{value:n}},vertexShader:`varying vec3 vN,vV;void main(){vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec3 vN,vV;uniform vec3 uC;uniform float uK;void main(){float f=abs(dot(normalize(vN),normalize(vV)));gl_FragColor=vec4(uC*(.25+f*f)*uK,1.);}`}));return this.group.add(r),r};this.coreM=v(new ao(.85,32,20),`#6fdcff`,1.6),this.coreM.position.y=this.core,this.rings=[0,1,2].map(e=>{let t=v(new oo(1.55+e*.16,.035,8,60),`#8fe6ff`,1.5);return t.position.y=this.core,t}),v(new Fi(um.r,um.r,sm*lm-.6,36,1,!0).translate(um.x,-20+sm*lm/2,um.z),`#3f7fd0`,.09);let y=3500,b=new Float32Array(y*3);for(let e=0;e<y;e++){let t=-Math.log(1-s()*.96)*.34,n=Math.log(t+.05)*2.7+e%2*Math.PI+s.gauss()*.35;b.set([Math.cos(n)*t,s.gauss()*.025+s.gauss()*.06*Math.exp(-t*5),Math.sin(n)*t],e*3)}let x=new vr;x.setAttribute(`position`,new ir(b,3)),this.holo=new Ti(x,new _o({transparent:!0,depthWrite:!1,blending:2,vertexShader:`varying float vD;void main(){vD=length(position.xz);vec4 m=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(10./-m.z,1.5,5.);gl_Position=projectionMatrix*m;}`,fragmentShader:`varying float vD;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(mix(vec3(1.,.8,.5),vec3(.35,.6,1.),min(1.,vD*1.6))*.55*smoothstep(1.,.2,d),1.);}`})),this.holo.position.y=this.holoY,this.group.add(this.holo);let S=this.capsule=new _n,C=e=>new yo({color:e,metalness:.6,roughness:.35});S.position.copy(bm),this.group.add(S),this.gimA=new Hr(new oo(1.45,.07,10,64),C(`#b8743c`)),this.gimB=new Hr(new oo(1.32,.06,10,64),C(`#9aa0aa`)),S.add(this.gimA),this.gimA.add(this.gimB),this.pod=new _n,S.add(this.pod);let w=C(`#5a3a2c`);for(let[e,t,n,r,i,a]of[[0,-.55,0,.7,.14,.7],[0,0,.32,.7,1.1,.14],[0,.7,.34,.4,.3,.12],[.42,-.3,0,.1,.1,.6],[-.42,-.3,0,.1,.1,.6]]){let o=new Hr(new Mi(r,i,a),w);o.position.set(e,t,n),this.pod.add(o)}for(let e of[-1,1]){let t=new Hr(new Mi(.12,.9,.04),C(`#ffb04a`));t.position.set(e*.18,-.05,.24),t.rotation.z=e*.25,this.pod.add(t)}let T=new Hr(new ao(1.25,32,20),new _o({transparent:!0,depthWrite:!1,side:2,uniforms:{uEye:this.u.uEye},vertexShader:`varying vec3 vN,vV;void main(){vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec3 vN,vV;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));gl_FragColor=vec4(.6,.8,1.,.02+pow(f,3.)*.25);}`}));this.pod.add(T),this.panel=new Hr(new ro(.9,.4),new Ar({color:new z(.25,.5,.8)})),this.panel.position.set(0,.05,-.75),this.panel.rotation.x=-.5,this.pod.add(this.panel),this.cv=document.createElement(`canvas`),this.cv.width=768,this.cv.height=256,this.tx=new Oi(this.cv);let E=new Hr(new ro(3.3,1.1),new Ar({map:this.tx,transparent:!0,depthWrite:!1,blending:2,side:2}));E.position.set(0,this.screenY,-(_m[lm-1]-.6)),E.rotation.x=.3,this.group.add(E),this.tt=0}text(e){let t=this.cv.getContext(`2d`);t.clearRect(0,0,768,256),t.strokeStyle=`#6fb4ff66`,t.strokeRect(2,2,764,252),t.fillStyle=`#bfe0ff`,t.font=`44px Italiana,serif`,t.fillText(e[0],24,56),t.font=`22px "Inter Variable",system-ui,sans-serif`,e.slice(1).forEach((e,n)=>t.fillText(e,24,104+n*36)),this.tx.needsUpdate=!0}update(e,t,n){let r=Bu.value;this.coreM.scale.setScalar(1+.06*Math.sin(r*3)+t*.2),this.coreM.material.uniforms.uK.value=.9+t*2.2,this.rings.forEach((n,r)=>{this.rk=(this.rk||0)+e*(.3+t*5),n.rotation.set(this.rk*(r+1)*.5,this.rk*(.7-r*.4),r)}),this.holo.rotation.y=r*.1,this.pod.quaternion.copy(n);let i=new Qt().setFromQuaternion(n,`YXZ`);this.gimA.rotation.set(0,i.y,0),this.gimB.rotation.set(i.x,0,0)}},Sm=H(0,1,0),Cm=new _t,wm=H();function Tm(e,t,n,r,i){let a=n.length(),o=a>.15,s=o?n.clone().divideScalar(-a):null;if(o){let e=Sm.clone().applyQuaternion(t.q);Cm.setFromUnitVectors(e,s);let n=1-Math.exp(-i*(t.buck?1.6:3.5));t.q.premultiply(new _t().slerp(Cm,n)).normalize(),t.q.multiply(Cm.setFromAxisAngle(Sm,r.dyaw)),t.pitch=Math.max(-1.45,Math.min(1.45,t.pitch+r.dpitch))}else t.pitch&&=(t.q.multiply(Cm.setFromAxisAngle(H(1,0,0),t.pitch)),0),t.q.multiply(Cm.setFromAxisAngle(Sm,r.dyaw)).multiply(Cm.setFromAxisAngle(H(1,0,0),r.dpitch)).multiply(Cm.setFromAxisAngle(H(0,0,1),r.roll*i*1.4)).normalize();if(t.buck){t.p.copy(bm),t.v.set(0,0,0),t.deck=lm-1,t.tube=!1;return}let c=H(0,0,-1).applyQuaternion(t.q),l=H(1,0,0).applyQuaternion(t.q),u=Sm.clone().applyQuaternion(t.q),d=Math.hypot(t.p.x-um.x,t.p.z-um.z)<um.r-.15;if(o){c.addScaledVector(s,-c.dot(s)).normalize(),l.addScaledVector(s,-l.dot(s)).normalize();let e=r.run?6:3.2,o=c.multiplyScalar(r.f*e).addScaledVector(l,r.r*e),u=t.v.dot(s);t.v.copy(o).addScaledVector(s,u),d?t.v.y=r.u>0?5:r.u<0?-5:0:(t.v.addScaledVector(n,i),r.u>0&&t.ground&&t.v.addScaledVector(s,Math.min(4,2+a*.2)))}else{let e=c.multiplyScalar(r.f).addScaledVector(l,r.r).addScaledVector(u,r.u);t.v.addScaledVector(e,i*(r.run?5:2.5)),t.v.multiplyScalar(Math.exp(-i*.6))}t.p.addScaledVector(t.v,i),t.ground=!1;let f=e=>{let n=t.v.dot(e);n<0&&t.v.addScaledVector(e,-n),o&&e.dot(s)>.6&&(t.ground=!0)},p=ym(t.p.y),m=_m[p]-.45,h=Math.hypot(t.p.x,t.p.z);if(h>m){let e=H(-t.p.x/h,0,-t.p.z/h);t.p.x*=m/h,t.p.z*=m/h,f(e)}let g=.4,_=Math.hypot(t.p.x-um.x,t.p.z-um.z)<um.r-.05;for(let e=Math.max(0,p-1);e<=Math.min(lm,p+1);e++){let n=e===lm?vm(lm)+3:vm(e),r=n-.28;e>0&&e<lm&&_||(e===0?t.p.y-g<n&&(t.p.y=n+g,f(H(0,1,0))):e===lm?t.p.y+g>n&&(t.p.y=n-g,f(H(0,-1,0))):t.p.y-g<n&&t.p.y+g>r&&(t.p.y>(n+r)/2?(t.p.y=n+g,f(H(0,1,0))):(t.p.y=r-g,f(H(0,-1,0)))))}let v=ym(t.p.y);if(t.p.y-vm(v)<2.4)for(let[n,r,i]of e.obs[v]){let e=t.p.x-n,a=t.p.z-r,o=Math.hypot(e,a),s=i+g;o<s&&o>1e-4&&(t.p.x=n+e/o*s,t.p.z=r+a/o*s,f(H(e/o,0,a/o)))}wm.copy(t.p).sub(bm);let y=wm.length();y<1.9&&y>1e-4&&(wm.divideScalar(y),t.p.copy(bm).addScaledVector(wm,1.9),f(wm.clone())),t.deck=ym(t.p.y+.3),t.tube=d}var Em=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r));function Dm(e,t,n,r={}){let i=r.nz||70,a=r.na||44,o=[],s=[],c=[],l=r.a0??0,u=r.a1??Math.PI*2;for(let r=0;r<=i;r++){let c=r/i,d=e+(t-e)*c,[f,p,m,h]=n(c);for(let e=0;e<=a;e++){let t=l+(u-l)*e/a,n=Math.cos(t),r=Math.sin(t),i=2/h;o.push(Math.sign(n)*Math.abs(n)**+i*f,m+Math.sign(r)*Math.abs(r)**+i*p,d),s.push(e/a,c)}}for(let e=0;e<i;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t;c.push(n,n+1,n+a+1,n+1,n+a+2,n+a+1)}let d=new vr;return d.setAttribute(`position`,new B(o,3)),d.setAttribute(`uv`,new B(s,2)),d.setIndex(c),d.computeVertexNormals(),d}function Om(e,t={}){let n=new yo({color:e,metalness:t.m??.9,roughness:t.r??.32,envMapIntensity:t.e??1.5,side:2});return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vO;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vO=position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vO;float hq(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}`).replace(`#include <color_fragment>`,`#include <color_fragment>
vec2 pq=vec2(atan(vO.y,vO.x)*${(t.k||2.2).toFixed(1)}/1.5,vO.z*${(t.k||2.2).toFixed(1)}*.55);vec2 id=floor(pq+vec2(step(.5,fract(floor(pq.y)*.5))*.5,0.));vec2 f=fract(pq+vec2(step(.5,fract(floor(pq.y)*.5))*.5,0.));float seam=min(min(f.x,1.-f.x),min(f.y,1.-f.y));float sw=fwidth(seam)*1.2;float ln=smoothstep(.02+sw,.02,seam);float tn=hq(id);diffuseColor.rgb*=.72+.5*tn;diffuseColor.rgb*=1.-.6*ln;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(1.5,1.1,.8),step(.93,tn)*.6);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+(tn-.5)*.25+ln*.3,.08,1.);`)},n}var km=`varying vec3 vP,vN,vV;void main(){vP=position;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,Am=`varying vec3 vP,vN,vV;uniform vec3 uG;uniform float uTime,uI,uD;void main(){float z=vP.z;float f=abs(dot(normalize(vN),normalize(vV)));float dia=.55+.75*pow(.5+.5*cos(z*uD-uTime*3.),6.)*smoothstep(.9,.05,z);float fl=.9+.1*sin(uTime*63.+z*21.);float e=pow(max(1.-z,0.),1.5)*pow(f,1.7)*dia*fl*smoothstep(0.,.03,z+.005);vec3 c=mix(uG,vec3(.75,.87,1.),clamp(e*.75+uI*.25,0.,1.));gl_FragColor=vec4(c*e*uI*3.2,1.);}`;function jm(){let e=new _n,t=new _n;e.add(t);let n={value:H(1,.68,.35)},r={value:0},i=[],a=Om(`#4a4d58`),o=Om(`#cfd2d8`,{m:.35,r:.42,e:.9,k:1.6}),s=Om(`#b06a3a`,{m:1,r:.28,k:4}),c=new yo({color:`#0c0d12`,metalness:.8,roughness:.5}),l=(e=1.6)=>new _o({...Ru,uniforms:{uG:n,uK:{value:e}},vertexShader:`void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`uniform vec3 uG;uniform float uK;void main(){gl_FragColor=vec4(uG*uK,1.);}`}),u=(e,n,r=0,i=0,a=0,o=t)=>{let s=new Hr(e,n);return s.position.set(r,i,a),o.add(s),s},d=(e,r,a,o,s,c,l=t,d=26)=>{let f={uG:n,uTime:Bu,uI:{value:0},uD:{value:d}},p=u(new Ii(o,1,22,24,!0).rotateX(Math.PI/2).translate(0,0,.5),new _o({...Ru,side:2,uniforms:f,vertexShader:km,fragmentShader:Am}),e,r,a,l);p.rotation.set(s,c,0);let m={m:p,u:f,v:0,len:1};return i.push(m),m},f=e=>{let t=Math.sin(Math.min(1,e*1.22+.02)*Math.PI/2)**.8,n=e>.78?1-((e-.78)/.22)**2*.35:1;return[.82*t*n,.74*t*n,0,2.3+.9*e]},p=[u(Dm(-6.6,3,f),a)];for(let e of[0,1])p.push(u(Dm(-4.7,2.2,e=>{let t=f(.2+e*.72);return[t[0]*1.07,t[1]*1.09,t[2],t[3]]},{a0:e?Math.PI*.62:-.12*Math.PI,a1:e?Math.PI*1.12:Math.PI*.38,nz:40,na:18}),o));u(Dm(-3.4,2.4,e=>[.16+.1*Math.sin(e*3.1),.2*Math.sin(Math.min(1,e*1.3)*3)+.04,.72+.05*e,3],{nz:30,na:20}),s),p.push(u(new ao(1,40,20,0,Math.PI*2,0,Math.PI/2).rotateX(-Math.PI/2).scale(.52,.48,.62),new yo({color:`#0a1020`,metalness:1,roughness:.05,emissive:`#ff9d4a`,emissiveIntensity:.25,envMapIntensity:2.2}),0,0,-3.75));{let e=new Mi(1,1,1),n=new Ar({color:new z(1.7,1.2,.65)}),r=[];fm.forEach((e,t)=>{let n=dm.includes(t),i=-(-20+(t+(n?.45:.43))*sm)/13,a=mm(i);for(let t of e){let e=(t+.5)/8*Math.PI*2,o=Math.sin(e),s=Math.cos(e);r.push([o*.83*1.06*a,s*.74*1.08*a,i,Math.atan2(s,o),(n?4.6:2.4)/13,(n?2.55:1.6)/13])}});let i=new ei(e,n,r.length),a=new gn;r.forEach(([e,t,n,r,o,s],c)=>{a.position.set(e,t,n),a.rotation.set(0,0,r+Math.PI/2),a.scale.set(o,.03,s),a.updateMatrix(),i.setMatrixAt(c,a.matrix)}),t.add(i),p.push(i)}for(let e of[1,-1])u(new so(new qi([H(e*.3,.1,-5.6),H(e*.72,.02,-3.4),H(e*.86,.02,0),H(e*.74,.06,2.5)]),60,.02,6),l(1.1)),u(new vr().setFromPoints([H(0,0,0),H(e*1.35,.18,.95),H(0,0,1.05),H(0,0,0),H(0,0,1.05),H(e*1.35,.18,.95)]),o,e*.62,.02,-4.1).geometry.computeVertexNormals();for(let e=0;e<7;e++){let t=-1.2+e*.52;for(let n of[1,-1])u(new Mi(.05,.16+e%2*.05,.3),s,n*.46,.68-e*.01,t)}u(new Fi(.012,.02,1.5,6).rotateX(Math.PI/2),c,0,0,-7.3),u(new Fi(.01,.015,.9,6).rotateX(-.9),c,0,.95,.6);let m=[],h=(e,n,r,i,a,o=t)=>{u(new Fi(i*.95,i*.8,.5,28,1,!0).rotateX(Math.PI/2),c,e,n,r,o);for(let t=0;t<a;t++){let c=t/a*Math.PI*2,l=new _n;l.position.set(e+Math.cos(c)*i*.88,n+Math.sin(c)*i*.88,r+.22),l.rotation.z=c,o.add(l);let u=new Hr(new Mi(.035,i*5/a,.55).translate(0,0,.27),s);l.add(u),m.push({piv:l,a:c})}return u(new Pi(i*.72,28),l(1),e,n,r+.2,o)},g=[h(0,0,2.75,.46,12)],_=d(0,0,2.95,.4,0,0);_.k=1;let v=[];for(let e of[1,-1]){u(new no(new ua([[0,-2.1],[.2,-2],[.34,-1.5],[.38,-.4],[.34,.9],[.27,1.5]].map(e=>new L(...e))).getPoints(40),30).rotateX(Math.PI/2),a,e*1.62,-.16,1.1),u(new oo(.35,.035,10,30),s,e*1.62,-.16,-.35),u(new oo(.375,.02,8,30),l(1.2),e*1.62,-.16,.6),u(new Mi(.7,.09,1.35),o,e*1.2,-.1,.95),g.push(h(e*1.62,-.16,2.5,.3,9));let t=d(e*1.62,-.16,2.7,.25,0,0);t.k=.62,v.push(t)}let y=new _n;y.position.z=1.75,t.add(y);for(let e=0;e<12;e++){let t=new Hr(new oo(2.45,.13,10,10,Math.PI*2/12*.68),e%3?a:s);t.rotation.z=e/12*Math.PI*2,y.add(t)}let b=new _n;b.position.z=1.75,t.add(b);let x=l(.6),S=new Hr(new oo(2.45,.035,8,90),x);b.add(S);for(let e=0;e<24;e++){let t=e/24*Math.PI*2,n=new Hr(new Mi(.05,.22,.05),x);n.position.set(Math.cos(t)*2.45,Math.sin(t)*2.45,.16),n.rotation.z=t,b.add(n)}for(let e of[.5,2.64,-.5-Math.PI/2+.5,-1.1]){let t=u(new Fi(.045,.07,1.85,8),c);t.position.set(Math.cos(e)*1.5,Math.sin(e)*1.5,1.75),t.rotation.z=e-Math.PI/2}let C=u(new ro(9,9),new _o({...Ru,side:2,uniforms:{uG:n,uTime:Bu,uI:{value:0}},vertexShader:`varying vec2 vU;void main(){vU=uv*2.-1.;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vU;uniform vec3 uG;uniform float uTime,uI;void main(){float r=length(vU)*4.5,a=atan(vU.y,vU.x);float arc=pow(.5+.5*sin(a*9.+uTime*23.+sin(a*4.-uTime*9.)*2.),8.);float e=exp(-abs(r-2.45)*7.)*(.25+arc)+exp(-abs(r-2.45-fract(uTime*1.6)*1.4)*9.)*.35*(1.-fract(uTime*1.6));e+=exp(-r*1.1)*.18;gl_FragColor=vec4(mix(uG,vec3(.7,.85,1.),.35)*e*uI*smoothstep(4.5,3.,r),1.);}`}),0,0,1.75),w=`if(vBd.z<3.2&&dot(vBd.xy/vec2(.83,.78),vBd.xy/vec2(.83,.78))<1.)discard;`,T=(e,t)=>{let n=e.clone();return n.uniforms={...e.uniforms,uPiv:t},n.vertexShader=e.vertexShader.replace(`void main(){`,`uniform mat4 uPiv;varying vec3 vBd;void main(){vBd=(uPiv*vec4(position,1.)).xyz;`),n.fragmentShader=e.fragmentShader.replace(`void main(){`,`varying vec3 vBd;void main(){`+w),n},E=(e,t,n,r)=>{let i=Om(e,t),a=i.onBeforeCompile;return i.onBeforeCompile=e=>{a(e),e.uniforms.uPiv=n,e.uniforms.uLoc=r,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform mat4 uPiv;uniform vec3 uLoc;varying vec3 vBd;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vBd=(uPiv*vec4(position+uLoc,1.)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vBd;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
`+w)},i.customProgramCacheKey=()=>`cut`,i},D=new _o({...Ru,side:2,uniforms:{uTime:Bu,uG:n,uT:r},vertexShader:`varying vec2 vUv;varying vec3 vN,vV;void main(){vUv=uv;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec2 vUv;varying vec3 vN,vV;uniform float uTime,uT;uniform vec3 uG;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));float hx=smoothstep(.86,1.,abs(fract(vUv.x*13.)-.5)*2.)*.3+smoothstep(.8,1.,abs(fract(vUv.y*5.+floor(vUv.x*13.)*.5)-.5)*2.)*.16;vec3 ir=.5+.5*cos(6.2832*(f*1.3+vUv.x*.5+vec3(0.,.33,.6)));float flow=pow(.5+.5*sin(vUv.x*18.-uTime*(3.+uT*9.)),10.);float e=.09+f*.26+hx+flow*.5*uT;vec3 c=mix(ir*.6,uG,.5)*e;c+=uG*(smoothstep(.07,0.,vUv.y)*2.4+smoothstep(.97,1.,vUv.x)*1.8);gl_FragColor=vec4(c*smoothstep(0.,.06,vUv.x+.03),1.);}`}),O=[],k=[H(),H()];for(let e of[1,-1])for(let n=0;n<3;n++){let r=new _n;r.position.set(e*(.72-n*.05),.08+n*.1,-.5+n*.95),t.add(r);let i={value:r.matrix},a=[5.6,4.5,3.2][n],o=[],s=[],c=[];for(let t=0;t<=26;t++)for(let r=0;r<=7;r++){let i=t/26,c=r/7,l=(1.75-n*.25)*(1-i)**.72*(1-.22*Math.sin(i*3.14))+.03;o.push(e*i*a,i*i*(1.15-n*.2)+.05*Math.sin(c*3.14)-c*l*.3,i*i*a*.55-Math.sin(i*3.14)*.5+c*l),s.push(i,c)}for(let e=0;e<26;e++)for(let t=0;t<7;t++){let n=e*8+t;c.push(n,n+1,n+7+1,n+1,n+7+2,n+7+1)}let l=new vr;l.setAttribute(`position`,new B(o,3)),l.setAttribute(`uv`,new B(s,2)),l.setIndex(c),l.computeVertexNormals(),r.add(new Hr(l,T(D,i)));let u=[];for(let e=0;e<=26;e++)u.push(H(...o.slice(e*8*3,e*8*3+3)));r.add(new Hr(new so(new qi(u),46,.06-n*.012,6),E(`#4a4d58`,{},i,{value:H()})));for(let e=5;e<26;e+=7){let t=new Hr(new ao(.07,10,8),E(`#b06a3a`,{m:1,r:.28,k:4},i,{value:u[e].clone()}));t.position.copy(u[e]),r.add(t)}O.push({piv:r,s:e,k:n,tip:u[26].clone()})}let ee=[0,1,2,3].map(e=>{let n=Math.PI/4+e*Math.PI/2,r=new _n;r.rotation.z=n,t.add(r);let i=new _n;i.position.set(.92,0,1.6),r.add(i);let c=2.35;i.add(new Hr(new Mi(.16,.22,c).translate(0,0,c/2),a)),i.add(new Hr(new Mi(.06,.3,c*.7).translate(.1,0,c*.4),o));let l=new Hr(new Fi(.14,.3,.1,18).rotateX(Math.PI/2),s);l.position.z=c,i.add(l);let u=new Hr(new Fi(.035,.05,1.3,8).rotateX(Math.PI/2).translate(0,0,.65),s);return u.position.set(.15,0,0),i.add(u),{piv:i,foot:l}}),te=H(0,0,1),A=[],ne=(e,n,r,i,f,p=12)=>{let m=new _n;m.position.set(e,n,r),m.quaternion.setFromUnitVectors(te,i.clone().normalize()),t.add(m);let h=f*1.5;u(new Fi(f*1.32,f*1.75,f*1.9,8).rotateX(Math.PI/2),o,0,0,-f*.15,m),u(new oo(f*1.2,f*.16,8,28),s,0,0,f*.8,m),u(new no([[.42,0],[.5,.3],[.72,.8],[1,1.45],[1.06,1.5]].map(e=>new L(e[0]*f,e[1]*f)),26).rotateX(Math.PI/2),c,0,0,.02,m);let g=u(new Pi(f*.5,18),l(.05),0,0,f*.25,m),_=[1,-1].map(e=>{let t=new _n;t.position.set(0,e*f*1.1,h+.015),m.add(t);let n=new Hr(new Fi(f*1.1,f*1.1,f*.1,20,1,!1,e>0?-Math.PI/2:Math.PI/2,Math.PI).rotateX(Math.PI/2),a);return n.position.y=-e*f*1.1,e>0&&(n.rotation.z=0),t.add(n),{h:t,sg:e}}),v=d(0,0,h*.75,f*.9,0,0,m,p);return v.core=g,v.doors=_,v.op=0,A.push(v),v},j=-4.35,re=mm(j),M=[],ie=(e,t,n,r,i)=>{let a=H();a.setComponent(r,-i);let o=ne(e,t,n,a,.12);o.ax=r,o.sg=i,o.nose=n<0?1:-1,M.push(o)};for(let e of[1,-1]){ie(e*(.82*re*1.07+.06),0,j,0,-e),ie(0,e*(.74*re*1.09+.06),j,1,-e),ie(e*2.05,-.16,.75,0,-e);for(let t of[1,-1])ie(e*1.62,-.16+t*.42,.75,1,-t)}let ae=-3.1,oe=mm(ae),se=[1,-1].map(e=>{let t=ne(e*(.82*oe*1.07+.2),-.12,ae,H(e*.22,0,-1),.19,16);return u(Dm(-1.05,1.25,e=>[.24*Math.sin(Math.min(1,e*1.5+.12)*Math.PI/2)*(1-.8*e**3),.26*Math.sin(Math.min(1,e*1.5+.12)*Math.PI/2)*(1-.8*e**3),0,2.6],{nz:26,na:22}),o,e*(.82*oe*1.07+.14),-.12,-2),t}),ce=[[6.2,`#ff3b30`],[-6.2,`#39ff7a`]].map(([e,t])=>{let n=u(new ao(.09,10,8),new Ar({color:new z(t).multiplyScalar(4)}));return n.userData.s=Math.sign(e),n}),le=u(new ao(.06,8,6),new Ar({color:new z(6,6,6)}),0,1.35,.85),ue=u(new ao(1,48,32).scale(7.2,3.1,8.2),new _o({...Ru,side:2,uniforms:{uTime:Bu,uI:{value:0},uG:n},vertexShader:`varying vec3 vP,vN,vV;void main(){vP=position;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec3 vP,vN,vV;uniform float uTime,uI;uniform vec3 uG;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));vec2 h=vec2(atan(vP.y*2.3,vP.x)*6.,vP.z*1.5);vec2 q=abs(fract(h+vec2(step(.5,fract(h.y*.5))*.5,0.))-.5);float cell=smoothstep(.40,.5,max(q.x,q.y));float wave=pow(.5+.5*sin(vP.z*1.4+uTime*8.),6.);float e=pow(f,3.)*.5+cell*(.05+.3*wave)*smoothstep(8.2,-6.,vP.z);gl_FragColor=vec4(mix(uG,vec3(.55,.75,1.),.6)*e*uI,1.);}`})),N=[];for(let e=0;e<3;e++){let e=u(new oo(1,.008,6,120),l(1),0,0,2);e.visible=!1,N.push({m:e,t:9})}let P={spread:1,gear:0,spin:0,pow:0,lift:0,open:.3,ch:0},de=-1,fe={group:e,body:t,tips:k,glow:n,thrust:r,flame:_.m,st:P,kick(){let e=N.reduce((e,t)=>t.t>e.t?t:e);e.t=0},animate(e,n){let i=Bu.value,a=Math.max(0,-n.acc.z),o=Math.max(0,n.acc.z);P.pow=Em(P.pow,a,e,a>P.pow?5:2),P.ch=Em(P.ch,+(a>.3),e,2.5),r.value=Em(r.value,P.pow,e,4),de>=0&&Math.floor(n.g)>de&&n.g>=2&&fe.kick(),de=Math.floor(n.g);let s=n.state===`landed`||n.state===`walk`,c=n.final;P.spread=Em(P.spread,s?.12:P.ch>.5?.66:1,e,s?1.6:2.6),P.gear=Em(P.gear,s||c?1:0,e,2.2);for(let e of O){let t=e.s,r=e.k,a=P.spread,o=Math.sin(i*1.3+r)*.012;e.piv.rotation.set(0,-t*(1-a)*(1.18-r*.12)-t*r*.12*a,t*((a-.8)*.12+r*.13*a+n.bank*t*.1+o+(s?.35:0)))}for(let e of O)e.piv.updateMatrix();[O[0],O[3]].forEach((e,t)=>{e.piv.updateMatrix(),k[t].copy(e.tip).applyMatrix4(e.piv.matrix),ce[t].position.copy(k[t])}),P.spin+=e*(.12+P.pow*16),y.rotation.z=P.spin,b.rotation.z=-P.spin*.7;let l=(1-.1*P.pow)*(1-.3*P.gear);y.scale.setScalar(l),b.scale.setScalar(l+.03*Math.sin(i*30)*P.pow),x.uniforms.uK.value=.3+P.pow*4,C.material.uniforms.uI.value=P.pow*1.5,C.visible=C.material.uniforms.uI.value>.01&&!fe.inside,P.open=Em(P.open,a>.01?.05+.25*a:-.34,e,5);for(let e of m)e.piv.rotation.set(0,0,e.a),e.piv.rotateY(P.open);for(let t of[_,...v]){let n=a>.01?.3+a*1.4:0;t.v=Em(t.v,n,e,7),t.u.uI.value=t.v,t.m.visible=t.v>.02,t.m.scale.set(.75+t.v*.4,.75+t.v*.4,t.v*8.5*t.k*(1+.05*Math.sin(i*47))),t.u.uD.value=14+14*t.v}for(let e of g)e.material.uniforms.uK.value=.06+_.v*2;let u=(n.bank-(P.bk??n.bank))/Math.max(e,.004);P.bk=n.bank;for(let e of M){let t=Math.max(0,n.acc.getComponent(e.ax)*e.sg),r=e.ax===0?Math.max(0,-u*e.nose*e.sg)*.25:0;e.want=t>.02?.25+t*1.4:Math.min(.6,r>.06?r:0)}for(let e of se)e.want=o>.01?.25+o:0;for(let t of A){t.op=Em(t.op,+(t.want>.02),e,t.want>.02?22:4);for(let e of t.doors)e.h.rotation.x=e.sg*-2.05*t.op;t.v=Em(t.v,t.op>.55?t.want:0,e,11),t.m.visible=t.v>.03,t.u.uI.value=t.v*1.25;let n=.8+Math.min(.2,t.v*.2);t.m.scale.set(n,n,(.35+t.v*(se.includes(t)?7:4.5))*(.92+Math.random()*.16)),t.core.material.uniforms.uK.value=.04+t.v*2.5}for(let e of ee)e.piv.rotation.y=.62*P.gear+(1-P.gear)*Math.PI*.985,e.foot.rotation.y=-.62*P.gear;let d=Math.sin(i*4)>.55;for(let e of ce)e.visible=d||n.rel>.5;le.visible=i%1.3<.07,ue.material.uniforms.uI.value=Em(ue.material.uniforms.uI.value,n.rel*.4+P.pow*n.rel*.6,e,3),ue.visible=ue.material.uniforms.uI.value>.01;for(let t of N)if(t.t+=e,t.m.visible=t.t<1.1,t.m.visible){let e=t.t/1.1;t.m.scale.set(2+e*22,2+e*22,1+e*3),t.m.position.z=2+e*9,t.m.material.uniforms.uK.value=(1-e)**2*3.5}t.position.set(0,0,0),P.pow>.2&&t.position.add(H(Math.random()-.5,Math.random()-.5,0).multiplyScalar(P.pow*.012))}},pe=new xm;e.add(pe.group),fe.interior=pe;let me=new Bn,he=H(),ge=new Set([C,ue,le,...N.map(e=>e.m),...ce,...i.map(e=>e.m)]);for(let e of t.children)!e.isMesh||ge.has(e)||p.includes(e)||(me.setFromObject(e).getCenter(he),(Math.hypot(he.x/.95,he.y/.95)<1&&he.z<2.6||Math.hypot(he.x,he.y)<1.6&&Math.abs(he.z-1.75)<.05)&&p.push(e));fe.setInside=e=>{fe.inside=e,pe.group.visible=e;for(let t of p)t.visible=!e;ue.material.uniforms.uI.value*=e?.4:1},e.scale.setScalar(13);for(let e of[y,b])e.traverse(()=>{});let _e=new rs(`#ffc890`,260,360,1.4);return _e.position.set(0,3,6),e.add(_e),fe}function Mm(){let e=new Float32Array(1680);for(let t=0;t<420;t++)e.set([Math.random(),Math.random()*6.2832,Math.random(),Math.random()],t*4);let t=new vr;t.setAttribute(`position`,new ir(new Float32Array(1260),3)),t.setAttribute(`a`,new ir(e,4));let n={uTime:Bu,uI:{value:0},uC:{value:H(.6,.5,.4)}},r=new Ti(t,new _o({transparent:!0,depthWrite:!1,uniforms:n,vertexShader:`attribute vec4 a;uniform float uTime,uI;varying float vA;void main(){float u=fract(a.x+uTime*(.28+.3*a.z));float r=1.5+pow(u,.7)*(12.+16.*a.w);vec3 p=vec3(cos(a.y+u*.5)*r,.15+u*u*(1.+4.*a.z)+.3*sin(u*6.+a.y),sin(a.y+u*.5)*r);vec4 m=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp((.7+u*4.5)*700./-m.z,2.,150.);vA=uI*smoothstep(0.,.08,u)*pow(1.-u,1.4)*.42;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying float vA;uniform vec3 uC;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(uC,vA*smoothstep(1.,.1,d));}`}));return r.frustumCulled=!1,r.visible=!1,r.renderOrder=15,{mesh:r,u:n}}var Nm=e=>document.querySelector(e),Pm=e=>`<svg viewBox="0 0 320 190">${e}</svg>`,Fm=(e,t,n=0,r=``)=>`<g transform="translate(${e} ${t}) rotate(${n})"><g class="${r}"><path d="M0 -16L5 6L0 10L-5 6Z" fill="#e9e3d8"/><path d="M4 -2L30 10L6 9ZM-4 -2L-30 10L-6 9Z" fill="#ffc27a" opacity=".55"/><path class="fl" d="M-3 11L0 26L3 11Z" fill="#9fc8ff"/></g></g>`,Im=(e,t,n,r=`#ffd98a`)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="${r}"/><circle cx="${e}" cy="${t}" r="${n*2.1}" fill="${r}" opacity=".18"/>`,Lm=Array.from({length:40},(e,t)=>`<circle cx="${t*83%320}" cy="${t*47%190}" r="${.5+t%3*.4}" fill="#fff" opacity="${.25+t%4*.15}"/>`).join(``),Rm={intro:Pm(Lm+Im(240,60,14)+`<circle cx="150" cy="120" r="26" fill="#3f7fbf"/><ellipse cx="150" cy="120" rx="44" ry="9" fill="none" stroke="#cbb48a" stroke-width="3"/>`+Fm(60,120,60,`bob`)),steer:Pm(Lm+`<path class="dash" d="M60 150Q150 150 230 60" fill="none" stroke="#8dffb0" stroke-width="2"/><circle cx="238" cy="52" r="8" fill="none" stroke="#fff"/>`+Fm(70,148,80,`bob`)+`<rect x="262" y="104" width="32" height="50" rx="15" fill="none" stroke="#fff"/><path class="blink" d="M279 105a15 15 0 0 1 15 15v8h-15z" fill="#ffc27a"/>`),gears:Pm(Lm+Array.from({length:8},(e,t)=>{let n=(135+t*33.75)*Math.PI/180,r=(135+t*33.75+29)*Math.PI/180;return`<path class="seg s${t}" d="M${160+Math.cos(n)*72} ${98+Math.sin(n)*72}A72 72 0 0 1 ${160+Math.cos(r)*72} ${98+Math.sin(r)*72}" fill="none" stroke="hsl(${[34,24,12,338,300,268,232,200][t]} 95% 62%)" stroke-width="15"/>`}).join(``)+`<text x="160" y="112" text-anchor="middle" font-size="42" fill="#fff" font-family="Italiana">5.4</text>`),turn:Pm(Lm+`<path d="M40 160L150 100Q190 80 200 40" fill="none" stroke="#ffc27a" stroke-width="2" class="dash"/><path d="M150 100L260 40" stroke="#8dffb0" stroke-dasharray="4 5"/>`+Fm(152,96,25,`bob`)+`<text x="215" y="36" fill="#8dffb0" font-size="13">45° → 2.1</text>`),way:Pm(Lm+Im(250,60,10)+`<rect class="blink" x="236" y="46" width="28" height="28" transform="rotate(45 250 60)" fill="none" stroke="#ffc27a" stroke-width="2"/><path class="dash" d="M80 140L236 68" stroke="#fff8"/>`+Fm(76,142,64,`bob`)),map:Pm(Lm+`<g class="spin" style="transform-origin:160px 98px"><path d="M160 98C190 60 250 70 262 110M160 98C130 136 70 126 58 86" fill="none" stroke="#8fb0ff" stroke-width="13" opacity=".4" stroke-linecap="round"/><circle cx="160" cy="98" r="15" fill="#ffe0a8"/></g><circle cx="222" cy="84" r="6" fill="none" stroke="#ffc27a" stroke-width="2"/>`),land:Pm(Lm+`<path d="M0 190V150Q60 120 110 148T220 140T320 152V190Z" fill="#5f7a4a"/><path d="M230 146l14 -44 14 44z" fill="#40563a"/><g class="land">${Fm(120,112,0)}</g><circle cx="60" cy="40" r="12" fill="#ffd98a"/>`),instr:Pm(Lm+`<ellipse cx="160" cy="105" rx="110" ry="62" fill="#0b1020" stroke="#9fb4e0"/><ellipse cx="160" cy="105" rx="70" ry="39" fill="none" stroke="#9fb4e055"/><ellipse cx="160" cy="105" rx="34" ry="19" fill="none" stroke="#9fb4e055"/><path d="M160 98l-5 12h10z" fill="#ffc27a"/><path d="M200 92V74M110 120V96M185 130v10" stroke="#9fb4e0"/><circle class="blink" cx="200" cy="72" r="4" fill="#ffd45e"/><circle cx="110" cy="94" r="4" fill="#86f29b"/><circle cx="185" cy="141" r="3" fill="#b9c8ff"/>`),hole:Pm(Lm+`<ellipse cx="160" cy="96" rx="112" ry="22" fill="none" stroke="#ff9a4a" stroke-width="13" opacity=".75"/><circle cx="160" cy="92" r="47" fill="none" stroke="#ffd9a8" stroke-width="5"/><circle cx="160" cy="92" r="42" fill="#000"/><path d="M58 100A112 22 0 0 0 262 100" fill="none" stroke="#ffc27a" stroke-width="13"/>`),lights:Pm(Lm+[`#b06cff`,`#6f8cff`,`#4fe6ff`,`#86f29b`,`#ffd45e`,`#ff9440`,`#ff4d7e`].map((e,t)=>`<rect class="blink" style="animation-delay:${t*.18}s" x="${50+t*34}" y="52" width="7" height="86" fill="${e}"/>`).join(``)),views:Pm(Lm+`<circle cx="160" cy="95" r="58" fill="none" stroke="#fff3" stroke-dasharray="4 6"/><g class="spin" style="transform-origin:160px 95px"><path d="M160 37l-9 -14h18z" fill="#9fc8ff"/></g>`+Fm(160,98,0)),boost:Pm(Lm+Array.from({length:9},(e,t)=>`<path class="dash" d="M${20+t*35} 190L160 60" stroke="#9fc8ff66"/>`).join(``)+Fm(160,120,0,`bob`)),rel:Pm(Array.from({length:70},(e,t)=>{let n=t*2.4,r=6+(t/70)**1.6*88;return`<circle cx="${160+Math.cos(n)*r*1.5}" cy="${95+Math.sin(n)*r}" r="${1+t%3*.5}" fill="${t<28?`#a9c8ff`:t<50?`#fff`:`#ff9a7a`}"/>`}).join(``)),auto:Pm(Lm+Im(262,50,12)+`<path class="dash" d="M50 150Q140 130 240 62" fill="none" stroke="#ffc27a" stroke-width="2"/><text x="70" y="178" fill="#9fc8ff" font-size="11">accelerate</text><text x="190" y="112" fill="#ffb0a0" font-size="11">brake</text>`+Fm(120,128,66,`bob`)),site:Pm(`<path d="M0 190V160Q80 140 160 156T320 146V190Z" fill="#5f7a4a"/><ellipse class="blink" cx="214" cy="156" rx="26" ry="7" fill="none" stroke="#8dffb0" stroke-width="2"/><path class="dash" d="M50 50Q170 40 214 92V148" fill="none" stroke="#fff8"/>`+Fm(50,50,90)+`<g class="land">${Fm(214,108,0)}</g>`),walk:Pm(`<path d="M0 190V150Q100 138 320 154V190Z" fill="#7a5a44"/>`+Fm(230,112,0)+`<g class="bob"><circle cx="110" cy="126" r="5" fill="#fff"/><path d="M110 131v14M110 135l-7 6M110 135l7 6M110 145l-5 10M110 145l5 10" stroke="#fff" stroke-width="2"/></g><circle cx="60" cy="36" r="11" fill="#ffd98a"/>`),decks:Pm(Lm+`<path d="M160 6Q196 40 198 96V178H122V96Q124 40 160 6Z" fill="#171a26" stroke="#e9e3d8"/>`+[`Cockpit`,`Navigation`,`Lounge`,`Crew`,`Medical`,`Lab`,`Plants`,`Storage`,`Air`,`Reactor`,`Cargo`].map((e,t)=>`<path d="M124 ${40+t*13}H196" stroke="#8fa0c0" stroke-width=".7"/><text x="206" y="${50+t*13}" font-size="8.5" fill="#cfd8ea">${e}</text>`).join(``)+`<rect class="blink" x="154" y="32" width="11" height="146" fill="#3f9fff77"/>`),energy:Pm(Lm+`<text x="160" y="82" text-anchor="middle" font-size="38" fill="#ffc27a" font-family="Italiana">E = mc²</text><path d="M40 150H280" stroke="#fff3"/>`+Array.from({length:8},(e,t)=>`<rect class="seg s${t}" x="${52+t*28}" y="${148-t*t*1-6}" width="16" height="${t*t+6}" fill="hsl(${[34,24,12,338,300,268,232,200][t]} 95% 62%)"/>`).join(``))},zm=[[`Start`,`A universe at its real size`,`Every star you see is a place you can fly to, with planets you can land on. Distances and the physics of motion are real.`,[`Dying only sets you back a little: you reappear nearby`,`Position, speed, gear and waypoint are saved every few seconds`,`{Esc} pauses, {?} lists every key, {H} hides the interface, {N} turns sound off`],Rm.intro],[`Start`,`Your first five minutes`,`Try this now, at the planet in front of you:`,[`Hold {Shift} to boost toward it. You slow down by yourself as you get near`,`{Double-click} a spot on the ground. A green marker appears`,`Press {G} and watch the ship land`,`{E} to go inside, then walk to the airlock and step out`,`Come back, board with {E}, and leave the planet with {L}`],Rm.site],[`Flying`,`Steering`,`The ship flies straight until you tell it otherwise.`,[`{Right-click} turns the nose to that point`,`Hold {Right mouse}: the ship keeps following the cursor`,`Arrow keys steer by hand, {A} {D} roll`,`Slow flight (below 3 km/s) keeps its speed in turns and drifts only a little`],Rm.steer],[`Flying`,`Looking around`,`Your view is free and never changes your course.`,[`Hold {Left mouse} and drag to look around the ship. Let go and it swings back`,`{C} gazes: a slow orbit around your target. {C} again ends it`,`{V} switches near light speed between what you would see and what you would measure (pure length contraction)`],Rm.views],[`Flying`,`Throttle, boost, brake`,`For slow flight and everything near planets:`,[`{W} {S} throttle up and down, up to 2.5 km/s`,`{Shift} boosts, and the farther you are from anything, the faster`,`{X} brakes hard, {0} comes to a complete stop`,`Near planets and stars, and in air, a safety limit slows you down`],Rm.boost],[`Speed`,`Gears`,`Gears set an exact speed. They work for you and for the autopilot.`,[`{2} to {9} choose a gear, {[} {]} or the {mouse wheel} move one subgear`,`2 and 3: from 10 to 1000 km/s. 4: from 0.005 to 0.9 of light speed`,`From 5 on, each subgear adds one more nine. 9.9 is c − 10⁻⁵¹ c`,`{1} is cruise, {0} stop. The same gear again goes back to automatic`],Rm.gears],[`Speed`,`Turning costs speed`,`At high speed the ship cannot swing around. It must burn off its old motion first.`,[`The nose turns while you drift on. A green marker shows where you really move`,`Then the engines burn, and you come out slower: 45° takes 5.1 down to 2.1, 90° or more ends in cruise`,`The green label at the cursor shows the gear you will be left with`,`You stay slow until you shift up again, so line up first`],Rm.turn],[`Speed`,`Near light speed`,`You never go faster than light, but your own time shrinks, so you can cross a galaxy in seconds.`,[`γ tells how much: at γ = 1000, one second aboard is 1000 outside`,`Distances ahead contract. Labels show the real distance and the one aboard`,`Light crowds ahead and turns blue, behind you it fades to red`,`Very fast, the afterglow of the big bang becomes visible straight ahead`],Rm.rel],[`Speed`,`Energy and g-forces`,`Your ship weighs 10 tonnes, and speeding up or braking costs energy.`,[`The left panel shows power, energy of this burn, its mass (E = mc²) and the g you feel`,`The drive core shows what each gear costs from standstill, and what shifting costs now`,`Energy spent adds up over your whole game. Braking in air is free`],Rm.energy],[`Travel`,`Waypoints`,`A waypoint stays selected, even when you leave the system.`,[`{Double-click} a star, planet, moon, asteroid or galaxy`,`The nose turns to it. If you are fast, you coast on until you pick a gear or boost`,`An orange arrow points to it when it is out of view`,`{T} targets what the cursor is on. A bar at the top offers {F} fly there, {K} track it, {J} match its velocity`],Rm.way],[`Travel`,`Autopilot`,`{F} flies to your waypoint and brakes there. {F} again stops.`,[`It works over any distance, even to other galaxies`,`Choose a gear to set how fast it goes`,`On arrival from a journey you get a report: energy, time aboard and outside, peak g`,`{Right-click} takes over`],Rm.auto],[`Travel`,`The map`,`{M} opens it, from the whole universe down to single stars.`,[`{Scroll} zooms to the cursor, drag turns, {Right mouse} drag or {W}{A}{S}{D} move`,`Click a star or galaxy for its data. A star also lists its planets and moons`,`{Double-click} sets a waypoint, also in that list. Fly there starts the autopilot`,`You, Galaxy and Universe jump to those views`],Rm.map],[`Travel`,`Reading your instruments`,`Everything on screen, from left to right:`,[`Top left: where you are, and the three nearest surfaces`,`Below: the last burns, and a data sheet of what the cursor is on. {I} hides it`,`Top right: drive core. Coloured bars are your speed, the white one the chosen subgear`,`Bottom right: radar. Ahead is up, distance is logarithmic, stems show above and below`,`Bottom centre: the lights you have gathered`],Rm.instr],[`Worlds`,`Approaching a planet`,`Come closer and altitude, pressure, gravity, temperature and weather appear.`,[`Air slows you down and can make the hull glow`,`Inside clouds you see almost nothing`,`Hard impacts damage the hull, a red ring around the reticle. It repairs itself`,`Gas giants have no ground: too deep and the pressure gets you`],Rm.boost],[`Worlds`,`Landing`,`The ship lands like a rocket, standing on its tail.`,[`{Double-click} the ground to choose a site, also from high up`,`{G} lands there. Without a site it lands right below you`,`{G} again, {X} or {Right-click} cancels`,`Landed: {G} takes off, {L} takes off and climbs away from the planet`],Rm.land],[`Worlds`,`On foot`,`Go to the airlock on the lowest deck and press {E}.`,[`{W}{A}{S}{D} walk, mouse looks, {Shift} runs`,`{Space} is your jetpack`,`Walk back to the ship and press {E} to board`,`Trees and rocks are solid. Every world has its own ground, life and weather`],Rm.walk],[`Worlds`,`Inside your ship`,`{E} leaves the pilot seat at any time, even on autopilot.`,[`The blue tube is the lift: {Space} up, {X} down, then step out`,`{E} uses the seat, the star map table and the airlock`,`The map table is on the navigation deck, the seat in the cockpit at the top`],Rm.decks],[`Beyond`,`Stars, pulsars, black holes`,`They are beautiful and will hurt you.`,[`Touching a star or a pulsar destroys the ship`,`Near a black hole a panel shows the distance to its event horizon`,`Past the horizon there is no way back. You fall to the singularity, and come out somewhere else`],Rm.hole],[`Beyond`,`The seven lights`,`Gather a colour of light from each kind of place:`,[`Gold: hold inside a star’s corona. Cyan: let a pulsar’s beam sweep you`,`Green: step outside on a world with weather. Amber: land on an asteroid`,`Red: fly slowly into a nebula. Violet: stay close to a black hole, or fall in`,`Blue: ride a jet of the Heart, at a galaxy’s core`,`With all seven, fall into the Heart to reach a new universe`],Rm.lights]],Bm=[...new Set(zm.map(e=>e[0]))],Vm=e=>e.replace(/\{([^}]+)\}/g,`<kbd>$1</kbd>`),Hm=class{constructor(e){this.i=0,this.on=!1,this.cb=e,Nm(`#tnext`).onclick=()=>this.go(1),Nm(`#tback`).onclick=()=>this.go(-1),Nm(`#tskip`).onclick=()=>this.close(),Nm(`#tdots`).innerHTML=zm.map(()=>`<i></i>`).join(``),[...Nm(`#tdots`).children].forEach((e,t)=>e.onclick=()=>{this.i=t,this.draw()}),Nm(`#tch`).innerHTML=Bm.map(e=>`<button>${e}</button>`).join(``),[...Nm(`#tch`).children].forEach((e,t)=>e.onclick=()=>{this.i=zm.findIndex(e=>e[0]===Bm[t]),this.draw(),Nm(`#tnext`).focus()})}open(){this.i=0,this.on=!0,Nm(`#tut`).hidden=!1,this.draw(),this.cb(!0),Nm(`#tnext`).focus()}close(){if(this.on){this.on=!1,Nm(`#tut`).hidden=!0;try{localStorage.setItem(`afterlight-tut`,`1`)}catch{}this.cb(!1)}}go(e){let t=this.i+e;if(!(t<0)){if(t>=zm.length)return this.close();this.i=t,this.draw()}}draw(){let[e,t,n,r,i]=zm[this.i];Nm(`#tut h2`).textContent=t,Nm(`#tut .txt`).innerHTML=`<p>${Vm(n)}</p><ul>${r.map(e=>`<li>${Vm(e)}</li>`).join(``)}</ul>`,Nm(`#tut .pic`).innerHTML=i,Nm(`#tut .box`).scrollTop=0,Nm(`#tback`).style.visibility=this.i?``:`hidden`,Nm(`#tnext`).textContent=this.i===zm.length-1?`Start flying`:`Next`,[...Nm(`#tdots`).children].forEach((t,n)=>{t.classList.toggle(`on`,n===this.i),t.hidden=zm[n][0]!==e}),[...Nm(`#tch`).children].forEach((t,n)=>t.classList.toggle(`on`,Bm[n]===e)),Nm(`#tnum`).textContent=`${this.i+1} / ${zm.length}`}key(e){return this.on?([`ArrowRight`,`Enter`,`Space`].includes(e.code)?(e.preventDefault(),this.go(1)):e.code===`ArrowLeft`?this.go(-1):e.code===`Escape`&&this.close(),!0):!1}},Um=e=>{let t=(1/Math.log2(Ju+1)).toPrecision(9);return e.vertexShader=e.vertexShader.replace(`void main(){`,`varying float vLW;void main(){`).replace(/}\s*$/,`vLW=gl_Position.w;}`),e.fragmentShader=e.fragmentShader.replace(`void main(){`,`varying float vLW;void main(){`).replace(/}\s*$/,`gl_FragDepth=log2(max(1.+vLW,1e-6))*${t};}`),e},Wm=e=>e.traverse(e=>{e.material?.isShaderMaterial&&!e.material.userData.ld&&(e.material.userData.ld=1,Um(e.material))}),Gm=class{constructor(e){this.N=46,this.hist=[[],[]];let t=this.N;this.pos=new Float32Array(t*2*2*3);let n=new Float32Array(t*4),r=[];for(let e=0;e<2;e++)for(let i=0;i<t;i++){let a=(e*t+i)*2;n[a]=n[a+1]=1-i/(t-1),i<t-1&&r.push(a,a+1,a+2,a+1,a+3,a+2)}let i=new vr;i.setAttribute(`position`,new ir(this.pos,3)),i.setAttribute(`al`,new ir(n,1)),i.setIndex(r),this.mesh=new Hr(i,new _o({...Ru,side:2,uniforms:{uG:e},vertexShader:`attribute float al;varying float v;void main(){vec4 m=modelViewMatrix*vec4(position,1.);v=al*smoothstep(5.,15.,-m.z);gl_Position=projectionMatrix*m;}`,fragmentShader:`varying float v;uniform vec3 uG;void main(){gl_FragColor=vec4(uG*v*v*1.1,1.);}`})),this.mesh.frustumCulled=!1,this.acc=0}reset(){this.hist=[[],[]]}update(e,t,n,r){for(let e of this.hist)for(let t of e)t.sub(n);this.mesh.position.copy(e.group.position);let i=e.group.position;this.acc+=r;let a=this.acc>.016;a&&(this.acc=0);let o=H(),s=H(),c=H();this.hist.forEach((t,n)=>{let r=e.tips[n].clone().multiplyScalar(e.group.scale.x).applyQuaternion(e.group.quaternion);if(!t.length)for(let e=0;e<this.N;e++)t.push(r.clone());a?(t.pop(),t.unshift(r)):t[0]=r;for(let e=0;e<this.N;e++){let r=t[e],a=t[Math.min(e+1,this.N-1)],l=t[Math.max(e-1,0)];o.subVectors(a,l),c.copy(i).negate().sub(r),s.crossVectors(o,c),s.lengthSq()<1e-9&&s.set(0,1,0),s.normalize().multiplyScalar(.35*(1-e/this.N));let u=(n*this.N+e)*6;this.pos[u]=r.x+s.x,this.pos[u+1]=r.y+s.y,this.pos[u+2]=r.z+s.z,this.pos[u+3]=r.x-s.x,this.pos[u+4]=r.y-s.y,this.pos[u+5]=r.z-s.z}}),this.mesh.geometry.attributes.position.needsUpdate=!0}};function Km(){let e=new Float32Array(4200),t=new Float32Array(1400);for(let n=0;n<700;n++){let r=[Math.random(),Math.random(),Math.random()];e.set([...r,...r],n*6),t[n*2+1]=1}let n=new vr;n.setAttribute(`position`,new ir(e,3)),n.setAttribute(`e`,new ir(t,1));let r={uCam:{value:H()},uVel:{value:H()}},i=new yi(n,new _o({...Ru,uniforms:r,vertexShader:`attribute float e;uniform vec3 uCam,uVel;varying float a;void main(){float S=260.;vec3 p=mod(position*S-uCam,S)-S*.5;float l=length(p);a=smoothstep(S*.5,S*.2,l)*smoothstep(8.,30.,l);float v=length(uVel);p-=uVel*e*min(.05,30./max(v,1.));p+=vec3(0.,e*.12,0.);gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);a*=1.-e*.8;}`,fragmentShader:`varying float a;void main(){gl_FragColor=vec4(vec3(.65,.75,1.)*a*.4,1.);}`}));return i.frustumCulled=!1,{mesh:i,u:r}}var qm=class{constructor(){let e=this.N=900;this.p=new Float32Array(e*3),this.c=new Float32Array(e*3),this.s=new Float32Array(e),this.v=Array.from({length:e},()=>H()),this.life=new Float32Array(e),this.i=0;let t=new vr;t.setAttribute(`position`,new ir(this.p,3)),t.setAttribute(`color`,new ir(this.c,3)),t.setAttribute(`s`,new ir(this.s,1)),this.mesh=new Ti(t,new _o({...Ru,vertexColors:!0,vertexShader:`attribute float s;varying vec3 c;void main(){c=color;vec4 m=modelViewMatrix*vec4(position,1.);gl_PointSize=s<=0.?0.:clamp(s*900./-m.z,1.5,60.);gl_Position=s<=0.?vec4(2.,2.,2.,1.):projectionMatrix*m;}`,fragmentShader:`varying vec3 c;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(c*exp(-d*d*4.)*smoothstep(1.,.7,d),1.);}`})),this.mesh.frustumCulled=!1}burst(e,t,n,r,i=3){for(let a=0;a<n;a++){let n=this.i=(this.i+1)%this.N;e.toArray(this.p,n*3),this.v[n].randomDirection().multiplyScalar(r*(Math.random()**2+.1)),this.life[n]=1,this.s[n]=i*(.4+Math.random()),this.c.set([t.x*3,t.y*3,t.z*3],n*3)}}update(e){for(let t=0;t<this.N;t++)if(this.life[t]>0){this.life[t]-=e*.6;let n=this.v[t];n.multiplyScalar(1-e*.8),this.p[t*3]+=n.x*e,this.p[t*3+1]+=n.y*e,this.p[t*3+2]+=n.z*e,this.s[t]*=1-e*1.1,this.life[t]<=0&&(this.s[t]=0)}for(let e of[`position`,`color`,`s`])this.mesh.geometry.attributes[e].needsUpdate=!0}};function Jm(){let e=5200,t=new Float32Array(e*6),n=new Float32Array(e*2);for(let r=0;r<e;r++){let e=[Math.random(),Math.random(),Math.random()];t.set([...e,...e],r*6),n[r*2+1]=1}let r=new vr;r.setAttribute(`position`,new ir(t,3)),r.setAttribute(`e`,new ir(n,1));let i={uCam:{value:H()},uVel:{value:H()},uLen:{value:1},uMin:{value:1},uCol:{value:H(1,1,1)},uInt:{value:0},uTime:Bu,uSway:{value:0}},a=new yi(r,new _o({transparent:!0,depthWrite:!1,uniforms:i,vertexShader:`attribute float e;uniform vec3 uCam,uVel;uniform float uLen,uTime,uSway,uMin;varying float a;void main(){float S=70.;vec3 q=position*S;q+=sin(uTime*1.3+position.yzx*40.)*uSway;vec3 p=mod(q-uCam,S)-S*.5;float l=length(p);a=smoothstep(S*.5,S*.2,l)*smoothstep(uMin,uMin+3.,l);p+=uVel*e*uLen;gl_Position=projectionMatrix*viewMatrix*vec4(p,1.);a*=1.-e*.6;}`,fragmentShader:`varying float a;uniform vec3 uCol;uniform float uInt;void main(){gl_FragColor=vec4(uCol,a*uInt);}`}));return a.frustumCulled=!1,a.renderOrder=20,a.visible=!1,{mesh:a,u:i}}var Ym={title:[98,146.8,220,277.2],star:[110,164.8,246.9,277.2],binary:[98,146.8,185,293.7],nebula:[130.8,196,246.9,329.6],pulsar:[92.5,138.6,207.7,311.1],blackhole:[55,82.4,116.5,174.6],quasar:[73.4,110,164.8,246.9]},Xm=[440,493.9,587.3,659.3,784,880,987.8],Zm=class{start(){if(this.x){this.x.resume();return}let e=this.x=new(window.AudioContext||window.webkitAudioContext),t=this.out=e.createGain();t.gain.value=.5;let n=e.createDynamicsCompressor();t.connect(n).connect(e.destination);let r=e.sampleRate*5,i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**3}let a=this.rev=e.createConvolver();a.buffer=i;let o=e.createGain();o.gain.value=.55,a.connect(o).connect(t);let s=this.f=e.createBiquadFilter();s.type=`lowpass`,s.frequency.value=520,s.Q.value=.6;let c=e.createGain();c.gain.value=.028,s.connect(c),c.connect(t),c.connect(a);let l=e.createOscillator(),u=e.createGain();l.frequency.value=.02,u.gain.value=90,l.connect(u).connect(s.frequency),l.start(),this.osc=Ym.title.map((t,n)=>[-1,1].map(r=>{let i=e.createOscillator();return i.type=n?`triangle`:`sawtooth`,i.frequency.value=t,i.detune.value=r*(5+n*2),i.connect(s),i.start(),i}));let d=e.createBuffer(1,e.sampleRate*2,e.sampleRate),f=d.getChannelData(0);for(let e=0,t=0;e<f.length;e++)f[e]=(t=t*.96+(Math.random()*2-1)*.04)*6;this.noise=d;let p=e.createBufferSource();p.buffer=d,p.loop=!0,this.ef=e.createBiquadFilter(),this.ef.frequency.value=180,this.eg=e.createGain(),this.eg.gain.value=0,p.connect(this.ef).connect(this.eg).connect(t),p.start(),this.next=e.currentTime+4}chord(e){this.x&&((Ym[e]||Ym.star).forEach((e,t)=>this.osc[t].forEach(t=>t.frequency.setTargetAtTime(e,this.x.currentTime,1.2))),this.k=e)}tone(e,t=1.5,n=.1,r=`sine`,i){if(!this.x)return;let a=this.x,o=a.currentTime,s=a.createOscillator(),c=a.createGain();s.type=r,s.frequency.setValueAtTime(e,o),i&&s.frequency.exponentialRampToValueAtTime(i,o+t),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),s.connect(c),c.connect(this.out),c.connect(this.rev),s.start(),s.stop(o+t+.05)}boom(e=.5,t=500){if(!this.x)return;let n=this.x,r=n.currentTime,i=n.createBufferSource(),a=n.createBiquadFilter(),o=n.createGain();i.buffer=this.noise,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(50,r+1.2),o.gain.setValueAtTime(e,r),o.gain.exponentialRampToValueAtTime(.001,r+1.4),i.connect(a).connect(o),o.connect(this.out),o.connect(this.rev),i.start(),i.stop(r+1.5)}zap(){this.tone(1300,.18,.05,`triangle`,300)}chime(e=0){this.tone(Xm[e%7],2.5,.12),this.tone(Xm[e%7]*2,1.6,.03)}fanfare(){[0,2,4,6].forEach((e,t)=>setTimeout(()=>this.chime(e),t*130))}warp(){this.tone(60,3,.25,`sawtooth`,900),this.boom(.5,2500)}update(e,t){if(!this.x||!isFinite(e))return;let n=this.x.currentTime;if(this.eg.gain.setTargetAtTime(Math.min(.3,e/3800),n,.12),this.ef.frequency.setTargetAtTime(120+Math.min(1600,e*.5),n,.2),this.f.Q.setTargetAtTime(t?6:.6,n,.5),n>this.next){this.next=n+9+Math.random()*16;let e=Ym[this.k]||Ym.title;this.tone(e[Math.random()*e.length|0]*(Math.random()<.5?4:2),5,.011)}}mute(){if(this.x)return this.m=!this.m,this.out.gain.setTargetAtTime(this.m?0:.5,this.x.currentTime,.1),this.m}};function Qm(e,t,n){if(t<=0)return 0;let r=e*e/(1+e*e),i=n*n+t*t/(1+e*e);return Math.sqrt(r)*t/Math.sqrt(i)}var $m=Math.PI*.75,eh=Math.PI*1.5,th=eh/8,nh=.045,rh=Math.PI*2,ih=e=>[34,24,12,338,300,268,232,200][e-2],ah=(e,t=62,n=1)=>`hsla(${ih(e)},96%,${t}%,${n})`,oh=class{constructor(e){this.cv=e,this.x=e.getContext(`2d`),this.rot=0,this.gp=0,this.kick=0,this.sel=-1,this.pow=0,this.parts=[]}pow10(e,t,n,r,i,a,o=`center`){let s=this.x,c=(e,t=500)=>`${t} ${e}px "Inter Variable",system-ui,sans-serif`;s.font=c(n);let l=s.measureText(r).width,u=s.measureText(a).width;s.font=c(n*.74);let d=s.measureText(i).width,f=l+d+u,p=o===`center`?e-f/2:o===`right`?e-f:e;s.textAlign=`left`,s.font=c(n),s.fillText(r,p,t),p+=l,s.font=c(n*.74),s.fillText(i,p,t-n*.38),p+=d,s.font=c(n),s.fillText(a,p,t)}energy(e,t,n,r,i,a){if(!(r>0)){this.pow10(e,t,n,`0 J`,``,``,a);return}let o=Math.floor(Math.log10(r)),s=(r/10**o).toFixed(2);s===`10.00`&&(s=`1.00`,o++),this.pow10(e,t,n,i?s+` × 10`:`10`,String(i?o:Math.round(Math.log10(r))),` J`,a)}draw(e,t){let n=this.cv,r=this.x,i=Math.min(2,devicePixelRatio||1),a=n.clientWidth;if(!a)return;n.width!==Math.round(a*i)&&(n.width=n.height=Math.round(a*i));let o=a/340;r.setTransform(i*o,0,0,i*o,0,0),r.clearRect(0,0,340,340);let s=1-Math.exp(-e*9);this.gp+=(t.gp-this.gp)*s,this.pow+=(t.power-this.pow)*s,this.kick*=Math.exp(-e*4),t.sel!==this.sel&&(this.sel!==-1&&(this.kick=1),this.sel=t.sel);let c=Math.max(0,this.gp-2)/80,l=.15+c*3.2;this.rot+=e*l*(1+this.pow*1.5);let u=t.sel>=2?Math.floor((t.sel-2)/10)+2:0;t.sel>=2&&(t.sel-2)%10;let d=Math.min(9,Math.max(2,Math.floor(Math.max(0,this.gp-2)/10)+2));r.lineCap=`butt`,r.textBaseline=`alphabetic`;let f=r.createRadialGradient(170,168,20,170,168,168);f.addColorStop(0,`rgba(6,8,18,.80)`),f.addColorStop(.72,`rgba(6,8,18,.58)`),f.addColorStop(1,`rgba(6,8,18,0)`),r.fillStyle=f,r.beginPath(),r.arc(170,168,168,0,rh),r.fill(),r.globalCompositeOperation=`lighter`;let p=.12+c*.28+this.pow*.4+this.kick*.3;f=r.createRadialGradient(170,168,0,170,168,84),f.addColorStop(0,ah(d,60,p*.55)),f.addColorStop(.55,ah(d,45,p*.3)),f.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=f,r.beginPath(),r.arc(170,168,84,0,rh),r.fill();for(let e=0;e<3;e++){let t=70+e*6.5,n=[9,14,24][e],i=e%2?-1:1,a=this.rot*i*(1.4-e*.35);r.lineWidth=[3,2,1.4][e],r.strokeStyle=ah(d,66,.28+c*.3+this.pow*.3),r.beginPath();for(let i=0;i<n;i++){let o=a+i/n*rh;r.moveTo(170+Math.cos(o)*t,168+Math.sin(o)*t),r.arc(170,168,t,o,o+rh/n*(.28+.3*((i*7+e)%3)/2))}r.stroke()}if(this.pow>.02&&this.parts.length<90)for(let e=0;e<3;e++)Math.random()<this.pow*1.2&&this.parts.push({a:$m+Math.random()*eh*Math.max(.03,c),r:112,v:60+Math.random()*90,l:1});for(let n of this.parts){let i=t.sign<0;n.r+=(i?1:-1)*n.v*e,n.a+=e*1.6,n.l-=e*1.1;let a=i?190-n.r<40?-1:66+(n.r-112):n.r;a<40||a>112||n.l<=0?n.l=0:(r.fillStyle=ah(d,76,n.l*.8),r.beginPath(),r.arc(170+Math.cos(n.a)*a,168+Math.sin(n.a)*a,1.3,0,rh),r.fill())}this.parts=this.parts.filter(e=>e.l>0);for(let e=2;e<=9;e++){let n=$m+(e-2)*th,i=e===u,a=i?5+this.kick*5:0;r.strokeStyle=i?ah(e,70,.95):ah(e,60,.26),r.lineWidth=i?2:1,r.beginPath(),r.arc(170,168,137+a,n+nh/2,n+th-nh/2),r.stroke(),r.beginPath(),r.arc(170,168,99,n+nh/2,n+th-nh/2),r.stroke();for(let i=0;i<10;i++){let o=(e-2)*10+i+2,s=this.gp>=o-.05,c=Math.max(0,Math.min(1,this.gp-o+1)),l=n+nh/2+(i+.5)/10*(th-nh),u=o===t.sel,d=118+i*1.5+a*.7;r.lineWidth=u?5.2:4,r.strokeStyle=u?`#fff`:s?ah(e,62,.95):ah(e,50,.13+c*.3),(s||u)&&(r.shadowColor=ah(e,60,1),r.shadowBlur=u?16:7),r.beginPath(),r.moveTo(170+Math.cos(l)*104,168+Math.sin(l)*104),r.lineTo(170+Math.cos(l)*d,168+Math.sin(l)*d),r.stroke(),r.shadowBlur=0}let o=n+th/2;r.fillStyle=i?`#fff`:ah(e,78,this.gp>=(e-2)*10+2?.95:.6),r.font=`${i?600:500} ${i?15:12}px "Inter Variable",system-ui,sans-serif`,r.textAlign=`center`,r.fillText(e,170+Math.cos(o)*92.5*.985,168+Math.sin(o)*92.5+4.5),r.fillStyle=i?`#fff`:ah(e,82,.95);let s=151+a*.4;this.energy(170+Math.cos(o)*s,168+Math.sin(o)*s+3,9.6,t.segE[e-2],!1,`center`)}let m=$m+nh/2+Math.min(1,Math.max(0,(this.gp-1.5)/80))*(eh-nh);r.strokeStyle=`#fff`,r.lineWidth=1.6,r.shadowColor=`#fff`,r.shadowBlur=10,r.beginPath(),r.moveTo(170+Math.cos(m)*95,168+Math.sin(m)*95),r.lineTo(170+Math.cos(m)*141,168+Math.sin(m)*141),r.stroke(),r.shadowBlur=0,r.globalCompositeOperation=`source-over`,r.textAlign=`center`,r.fillStyle=`#fff`,r.shadowColor=`#000`,r.shadowBlur=8,r.font=`${t.label.length>3?34:58}px Italiana,serif`,r.fillText(t.label,170,168+(t.label.length>3?4:8)),r.fillStyle=`#e8e2d6`,this.pow10(170,199,12.5,...t.speed),r.fillStyle=ah(d,80),r.font=`500 9.5px "Inter Variable",system-ui,sans-serif`,r.textAlign=`center`,r.fillText(t.mode,170,124),r.fillStyle=`#ffd9a0`,this.energy(170,273,14,t.energy,!0),r.fillStyle=`#b9b2a6`,r.font=`9px "Inter Variable",system-ui,sans-serif`,r.textAlign=`center`,r.fillText(`from standstill`,170,286),r.fillStyle=`#e8e2d6`,r.font=`600 12px "Inter Variable",system-ui,sans-serif`;let h=(e,t)=>{r.font=`600 13px "Inter Variable",system-ui,sans-serif`,r.textAlign=`center`,r.fillStyle=`#ffc27a`,r.fillText(e,t,316),r.fillStyle=`#e8e2d6`};t.down!==null&&(h(`[`,52),this.energy(62,316,10.5,t.down,!0,`left`)),t.up!==null&&(h(`]`,288),this.energy(278,316,10.5,t.up,!0,`right`)),r.shadowBlur=0}},sh=(e,t,n=10)=>Gu*Gu*e*n/(t*t*t),ch=(e,t)=>{let n=t/e;return n<=1?0:e*(Math.sqrt(n*(n-1))+Math.log(Math.sqrt(n)+Math.sqrt(n-1)))},lh=(e,t)=>Math.sqrt(Math.max(0,1-e/t)),uh=(e,t,n)=>Math.sqrt(Math.max(1e-12,t*t-(1-1/e)*(1+n*n/(e*e))));function dh(e,t,n,r){let i=0;for(let e=0;e<240;e++){let a=e/240,o=(e+1)/240,s=e=>t*Math.sin(e*Math.PI/2)**2,c=s(a),l=s(o),u=Math.max(1e-9,(c+l)/2);i+=(l-c)/uh(u,n,r)}return i*e/Gu}function fh(e,t,n){let r=n*Gu/t/12;for(let t=0;t<12&&e.x>0;t++){let t=uh(e.x,e.E,e.L),n=Math.max(1e-6,e.x-t*r/2),i=uh(n,e.E,e.L);e.phi+=e.L/(n*n)*r,e.x-=i*r}}var ph=class{constructor(e){this.cv=e,this.x=e.getContext(`2d`),this.lo=3,this.hi=11,this.w=0}draw(e,t){let n=this.cv,r=this.x,i=Math.min(2,devicePixelRatio||1),a=n.clientWidth,o=n.clientHeight;if(!a||(n.width!==a*i&&(n.width=a*i,n.height=o*i),r.setTransform(i,0,0,i,0,0),r.clearRect(0,0,a,o),!e.length))return;let s=a/2-8,c=a/2,l=o/2+6,u=.62,d=Math.floor(Math.log10(Math.max(e[0].d,1))-.6),f=Math.max(d+3,Math.log10(Math.max(e[e.length-1].d,10))+.15);this.lo+=(Math.max(0,d)-this.lo)*.15,this.hi+=(f-this.hi)*.15;let p=e=>Math.max(.03,Math.min(1,(Math.log10(Math.max(e,1))-this.lo)/(this.hi-this.lo)))*s,m=r.createRadialGradient(c,l,0,c,l,s);m.addColorStop(0,`rgba(10,14,24,.35)`),m.addColorStop(1,`rgba(6,8,16,.72)`),r.fillStyle=m,r.beginPath(),r.ellipse(c,l,s,s*u,0,0,7),r.fill();let h=this.hi-this.lo,g=Math.max(1,Math.ceil(h/5));r.font=`9px "Inter Variable",system-ui,sans-serif`,r.lineWidth=1;for(let e=Math.ceil(this.lo+.3);e<this.hi;e+=g){let t=p(10**e);r.strokeStyle=`rgba(190,210,255,.20)`,r.beginPath(),r.ellipse(c,l,t,t*u,0,0,7),r.stroke(),t>14&&t<s-4&&(r.fillStyle=`rgba(200,215,245,.75)`,r.textAlign=`left`,r.fillText(td(10**e).replace(/\.0+ /,` `).replace(`.00`,``),c+3,l+t*u-2))}r.strokeStyle=`rgba(220,230,255,.45)`,r.beginPath(),r.ellipse(c,l,s,s*u,0,0,7),r.stroke(),r.strokeStyle=`rgba(255,194,122,.28)`,r.beginPath(),r.moveTo(c,l),r.lineTo(c-s*.46,l-s*u*.88),r.moveTo(c,l),r.lineTo(c+s*.46,l-s*u*.88),r.stroke(),r.fillStyle=`#ffc27a`,r.beginPath(),r.moveTo(c,l-6),r.lineTo(c-4,l+4),r.lineTo(c+4,l+4),r.fill();let _=0,v=[];for(let n=e.length-1;n>=0;n--){let i=e[n],a=p(i.d),o=c+i.dir.x*a,s=l+i.dir.z*a*u,d=s-i.dir.y*a*u,f=i.o===t||t?.star&&i.o.id===t.star.id;if(r.strokeStyle=i.hue+`66`,r.beginPath(),r.moveTo(o,s),r.lineTo(o,d),r.stroke(),r.fillStyle=i.hue,r.globalAlpha=f?1:.9,i.star)r.beginPath(),r.arc(o,d,f?3.6:2.2,0,7),r.fill();else{let e=f?3.6:i.small?1.6:2.6;r.fillRect(o-e,d-e,e*2,e*2)}r.globalAlpha=1,f&&(r.strokeStyle=`#fff`,r.beginPath(),r.arc(o,d,7,0,7),r.stroke()),i.px=o,i.py=d,i.tg=f}r.lineWidth=3,r.strokeStyle=`rgba(0,0,0,.85)`;for(let t of[...e].sort((e,t)=>t.tg-e.tg)){if(_>=4)break;if(v.some(e=>Math.abs(e[1]-t.py)<11&&Math.abs(e[0]-t.px)<92))continue;v.push([t.px,t.py]),_++;let e=t.px<c+18;r.textAlign=e?`left`:`right`;let n=t.px+(e?7:-7);r.strokeText(t.name,n,t.py+3),r.fillStyle=t.tg?`#fff`:`rgba(240,235,222,.92)`,r.fillText(t.name,n,t.py+3)}}},W=e=>document.querySelector(e),mh=document.body,hh=[{id:`blackhole`,hue:`#b06cff`,name:`Violet light`,how:`Fall through the event horizon of a black hole`,line:`It fell for a thousand years, and you were there for six seconds of it.`},{id:`quasar`,hue:`#6f8cff`,name:`Blue light`,how:`Ride a jet of the Heart, the galactic core`,line:`Older than every world you have seen.`},{id:`pulsar`,hue:`#4fe6ff`,name:`Cyan light`,how:`Let a pulsar's beam sweep over you 3 times, within 48,000 km`,line:`A dead star, still keeping time.`},{id:`planet`,hue:`#86f29b`,name:`Green light`,how:`Step outside on a world that has weather`,line:`Someone might have called it home.`},{id:`star`,hue:`#ffd45e`,name:`Golden light`,how:`Hold inside a star's corona for 4 seconds`,line:`Eight minutes old, and still warm.`},{id:`asteroid`,hue:`#ff9440`,name:`Amber light`,how:`Land on an asteroid`,line:`Sealed since before there were planets.`},{id:`nebula`,hue:`#ff4d7e`,name:`Red light`,how:`Fly slowly into a nebula`,line:`Every sun begins as weather.`}],gh=new Iu({canvas:W(`#c`),antialias:!1,powerPreference:`high-performance`,logarithmicDepthBuffer:!0});gh.toneMapping=0,gh.outputColorSpace=Be,gh.setPixelRatio(Math.min(devicePixelRatio,1.5)),Gd(gh);var _h=new od(gh),vh=new ts(64,1,.1,Ju),yh=new ts(50,1,1,2e4),bh=new Tn;bh.add(Fd());var xh=new Cd,Sh=new Pd(gh);bh.add(xh.group);var Ch=new Hd;bh.add(Ch.mesh);var wh=jm(),Th=new Gm(wh.glow),Eh=Km(),Dh=new qm,Oh=Jm(),kh=new om,Ah=new Zm,jh=new _n,Mh=Mm();jh.add(wh.group,Mh.mesh,Th.mesh,Eh.mesh,Dh.mesh,Oh.mesh),Wm(jh),bh.add(jh,kh.group);var Nh=new Yd;wh.group.traverse(e=>{e.isMesh&&!e.material.isShaderMaterial&&e.geometry.attributes.position.count>160&&e.layers.enable(1)});var Ph=new os(`#fff`,3),Fh=new Uo(`#8fa4c8`,`#2a2622`,.25);bh.add(Ph,Ph.target,Fh);var Ih=new Hr(new ao(1,32,20).scale(6.6,2.6,7),new _o({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:Bu,uI:{value:0}},vertexShader:`varying vec3 vP,vN,vV;void main(){vP=position;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}`,fragmentShader:`varying vec3 vP,vN,vV;uniform float uTime,uI;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));float n=.6+.4*sin(vP.x*3.+uTime*31.)*sin(vP.z*2.-uTime*47.);float e=pow(f,3.)*smoothstep(3.,-6.,vP.z)*n;gl_FragColor=vec4(mix(vec3(1.,.25,.05),vec3(1.,.7,.4),e)*e*uI*1.8,1.);}`}));wh.group.add(Ih),Wm(Ih);var Lh=160,Rh=new vr;for(let[e,t]of[[`position`,3],[`color`,3],[`ps`,1]])Rh.setAttribute(e,new ir(new Float32Array(Lh*t),t).setUsage(Ge));var zh=new Ti(Rh,Qu({transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,uniforms:{uPx:{value:1}},vertexShader:Xu+`attribute float ps;uniform float uPx;varying vec3 vC;varying float vLW,vS;void main(){vec3 p=aberr(position);vC=doppler(color,normalize(position));vS=ps;gl_PointSize=ps*uPx;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}`,fragmentShader:Xu+`varying vec3 vC;varying float vLW,vS;void main(){vec2 q=abs(gl_PointCoord-.5)*2.;float d=length(q);float a=exp(-d*d*9.);if(vS>14.)a=exp(-d*d*60.)*2.+exp(-d*6.)*.5+(exp(-q.x*40.)*exp(-q.y*3.)+exp(-q.y*40.)*exp(-q.x*3.))*.3;gl_FragColor=vec4(vC*a*smoothstep(1.,.6,d),1.);gl_FragDepth=logd(vLW);}`}));zh.frustumCulled=!1,zh.renderOrder=-7,bh.add(zh);function Bh(){let e=innerWidth,t=innerHeight;gh.setSize(e,t,!1);let n=gh.getPixelRatio();_h.size(e*n,t*n);for(let n of[vh,yh])n.aspect=e/t,n.updateProjectionMatrix()}addEventListener(`resize`,Bh),Bh();var Vh=`afterlight-2`,Hh=null;try{Hh=JSON.parse(localStorage.getItem(Vh))}catch{}var Uh=()=>{let e=new Date;return e.setFullYear(e.getFullYear()+100),e.getTime()},Wh=(e=1)=>({epoch:Uh(),shipT:0,crewT:0,earthT:0,leg:{ship:0,crew:0,earthT:0},seed:Math.random()*1e9|0,got:[],n:e,landed:0,years:0,spent:0}),G=Object.assign(Wh(),Hh||{}),K={pos:H(),q:new _t,w:0,thr:.4,drift:H(),hull:100,roll:0,inv:0,boostT:0,state:`fly`},Gh=e=>({...e,c:void 0,G:void 0});function Kh(){if(!q)return null;let e=q.star;return e?{g:e.G?e.G.id:rg.id,gal:!!e.isGal,s:e.isGal?null:Gh(e),body:q.body,name:q.name,label:q.label}:{b:q.name}}function qh(e){if(!e)return;if(e.b){q=og.find(t=>t.name===e.b)||q;return}let t=ng.byId(e.g);if(ng.pin(t),e.gal)q={star:t.star,name:t.name};else{if(t===rg&&e.s.id===ig.id){q=e.body&&og.find(t=>t.name===e.body)||ag.main;return}q={star:t===rg&&xh.marks.find(t=>t.id===e.s.id)||{...e.s,G:t},body:e.body,name:e.name,label:e.label}}}function Jh(e){if(e&&e.w!==void 0){if(K.pos.fromArray(e.pos),qh(e.way),u_=!!e.picked,Yu.uMeas.value=e.meas||0,K.thr=e.thr??K.thr,Qg.set(0,0,-1).applyQuaternion(K.q),$_(),e.state===`landed`&&Y?.terrain){let e=xv(Y,K.pos);K.pos.copy(Y.pos).addScaledVector(e,Y.R+Y.terrain.height(e)+Sv),K.state=`landed`}else K.ref=e.ref&&og.find(t=>t.name===e.ref)||null,jy=e.track&&q?.name===e.track?q:null,K.w=e.w,K.drift.fromArray(e.drift||[0,0,0]),H_.fromArray(e.D),H_.lengthSq()<.5&&H_.copy(Qg),K.w>U_&&av(H_,Qg)[1]>.012?ov():K.w>U_&&$_(),e.hold&&(X={n:e.hold.n,w:Ng[e.hold.n][0],t:Ng[e.hold.n][1],auto:e.hold.auto}),e.glide&&(J=!0,sg=!1),Z.last=zf(K.w),Z.eta=Lf(K.w),Z.skip=!0}}function Yh(){try{localStorage.setItem(Vh,JSON.stringify({seed:G.seed,got:G.got,n:G.n,landed:G.landed,origin:G.origin,years:G.years,spent:G.spent,epoch:G.epoch,shipT:G.shipT,crewT:G.crewT,earthT:G.earthT,leg:G.leg,at:ig&&{g:rg.id,star:{...ig,c:void 0,G:void 0,land:ig.land},pos:K.pos.toArray(),q:K.q.toArray(),ref:K.ref?.name||null,track:jy?.name||null,w:K.w,D:H_.toArray(),drift:K.drift.toArray(),thr:K.thr,hold:X&&{n:X.n,auto:X.auto},glide:J,picked:u_,state:K.state===`walk`||K.state===`descend`?K.state===`walk`?`landed`:`fly`:K.state,way:Kh(),meas:Yu.uMeas.value}}))}catch{}}var Xh=()=>{(tg===`flight`||tg===`map`)&&!cg&&!lg&&ug&&ig&&Yh()};setInterval(Xh,3e3),addEventListener(`pagehide`,Xh),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Xh()});var Zh=null,Qh=0,$h=!0,eg=null,tg=`title`,ng,rg,ig,ag,og=[],q=null,sg=!1,J=!1,cg=null,lg=0,ug=!1,dg=H(),fg=new _n;bh.add(fg);var pg=0,mg=H(1,1,1),hg=0,gg=[],Y=null,_g=1/0,vg=1/0,yg=1,bg=0,xg=0,Sg=!1,X=null,Cg=null,wg=!1,Tg=new ph(W(`#radar`)),Z={last:0,power:0,burn:0,total:0,idle:9,sign:0,prev:null,eta:0,a:0,gmax:0},Eg=2500,Dg=e=>{let t=10**-e;return Gu*(1-t)/Math.sqrt(t*(2-t))},Og=e=>[...String(e)].map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[e]).join(``),kg=81,Ag=e=>e*Gu/Math.sqrt(1-e*e),jg=(e,t)=>(e-2)*10+t+2,Mg=e=>e===0?`Stop`:e===1?`Cruise`:`${Math.floor((e-2)/10)+2}.${(e-2)%10}`,Ng=[[0,`full stop`,[`0 m/s`,``,``]],[Eg,`2.5 km/s`,[`2.5 km/s`,``,``]]];{let e=e=>Ng.push([e*1e3,`${e} km/s`,[`${e} km/s`,``,``]]);for(let t=0;t<10;t++)e((t+1)*10);for(let t of[125,160,200,250,320,400,500,630,800,1e3])e(t);for(let e of[.005,.01,.02,.05,.1,.2,.4,.6,.8,.9])Ng.push([Ag(e),`${e} c`,[`${e} c`,``,``]]);for(let e=2;e<=51;e++)Ng.push([Dg(e),`c − 10⁻${Og(e)} c`,[`c − 10`,`−`+e,` c`]])}function Pg(e,t){if(K.state!==`fly`||sb)return;if(sg=!1,e===0){X={n:0,w:0,t:Ng[0][1]},J=!1,K.thr=0,C_(`Full stop`),Ah.tone(110,.5,.06,`sine`,60);return}if(!t&&e>1&&X?.n===e){X=null,C_(J?`Autopilot speed: automatic`:`Gear off`);return}W_=!1;let n=X?.n??0;X={n:e,w:Ng[e][0],t:Ng[e][1]},e===1&&(K.thr=1),Ah.tone(150+e*9,.16,.05,`triangle`,(150+e*9)*(e>=n?1.35:.75)),C_((J?`Autopilot, gear `:`Gear `)+Mg(e)+`: `+X.t)}var Fg=()=>ev(K.w),Ig=e=>X?X.n:e>0?Math.floor(Fg()+.02):Math.ceil(Fg()-.02);function Lg(e){Pg(Math.max(0,Math.min(kg,Ig(e)+e)),!0)}var Rg=new oh(W(`#dial`)),zg=[2,3,4,5,6,7,8,9].map(e=>zf(Ng[jg(e,0)][0]));function Bg(e){let t=Fg(),n=X?X.n:Math.max(+(t>.02),Math.min(kg,Math.floor(t+.02))),r=zf(K.w),i=Ig(1),a=Ig(-1),o=Z.idle<.3&&Z.power>0?Math.min(1,.25+Math.log10(1+Z.a/9.8)/12):0;Rg.draw(e,{gp:t,sel:X?X.n:-1,label:sb?`Fall`:Mg(X?X.n:n),speed:Ng[n][2],energy:zf(Ng[n][0]),segE:zg,power:o,sign:Z.sign,up:i<kg?Math.abs(zf(Ng[i+1][0])-r):null,down:a>0?Math.abs(r-zf(Ng[a-1][0])):null,mode:sb?`NO WAY BACK`:rb?`ESCAPING`:Mv?`LEAVING`:W_?`COASTING`:!G_&&K.w>U_?`CHANGING COURSE`:J?X?`AUTOPILOT, GEAR SET`:`AUTOPILOT`:X?`GEAR SET`:`MANUAL`})}var Vg=()=>{W(`#spent`).innerHTML=`<b>Energy spent ${Vf(G.spent||0,`J`)}</b><br>= ${Hf(G.spent||0)} of mass`};function Hg(){jy=null,Py=null,Sy(`Autopilot engaged. Destination, ${q.name}`),W_=!1,Mv=null,X&&(X.n<2||X.auto)&&(X=null),J=!0,sg=!1,K_=null,q.star&&Ug(q.name)}function Ug(e){qy();let t=q.star?s_(q.star,H()):q.pos;Cg={name:e,E:0,g:0,crew:0,t:0,y0:G.years,d:t.distanceTo(K.pos),peak:0},W(`#report`).classList.remove(`on`)}var Wg;function Gg(e){let t=Cg;if(Cg=null,t.t<1)return;let n=t.E,r=W(`#report`);r.querySelector(`h3`).textContent=e?`Journey to ${t.name}`:`Journey to ${t.name}, interrupted`;let i=[[`Energy used`,Vf(n,`J`)],[`Equivalent mass, E = mc²`,Hf(n)],[``,Gf(n)],[`For comparison`,Wf(n)],[`Distance`,td(t.d)],[`Ship time`,nd(t.t)],[`Crew awake`,nd(t.crew)],[`Time outside`,nd((G.years-t.y0)*3156e4)],[`Peak acceleration felt`,Rf(t.g)],[`Peak γ`,Mb(t.peak)]];r.querySelector(`dl`).innerHTML=i.filter(e=>e[1]).map(e=>`<dt>${e[0]}</dt><dd>${e[1]}</dd>`).join(``),r.classList.add(`on`),clearTimeout(Wg),Wg=setTimeout(()=>r.classList.remove(`on`),9e4)}function Kg(e){let t=zf(K.w),n=t-Z.last,r=Y?.atm&&K.pos.distanceTo(Y.pos)-Y.R<Y.atm.top&&n<0&&!Q.KeyX||lg||K.state!==`fly`;Z.last=t;let i=Lf(K.w),a=lg||sg||K.state!==`fly`||Z.skip,o=a?0:(K.dEta??Math.abs(i-Z.eta))*Gu/Math.max(e,.001);if(Z.eta=i,Z.skip=lg||sg||K.state!==`fly`,a)return;Z.a+=(o-Z.a)*(1-Math.exp(-e*10));let s=r?0:Math.abs(n),c=Math.abs(n)/Math.max(e,.001);if(Z.power+=(s/Math.max(e,.001)-Z.power)*(1-Math.exp(-e*8)),Z.total+=s,G.spent=(G.spent||0)+s,c>Math.max(2e5,t*.02)){let e=Math.sign(n);(Z.idle>1.2||e!==Z.sign)&&((Z.burn>0||Z.gmax>0)&&(Z.prev={E:Z.burn,s:Z.sign,g:Z.gmax}),Z.burn=0,Z.gmax=0),Z.sign=e,Z.idle=0}else Z.idle+=e;Z.idle<1.2&&(Z.burn+=s,Z.gmax=Math.max(Z.gmax,o)),Cg&&(Cg.E+=s,Cg.g=Math.max(Cg.g,o),Cg.t+=e,Cg.peak=Math.max(Cg.peak,yg),J||Gg(Cg.arrived))}var qg=new Hm(e=>{Sg=e,mh.classList.toggle(`flying`,!e&&tg===`flight`),e?(wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300)):document.activeElement?.blur?.();for(let e in Q)Q[e]=!1});function Jg(e){if(!(e===Sg||e&&(tg!==`flight`||cg))){Sg=e,W(`#pause`).hidden=!e,mh.classList.toggle(`flying`,!e&&tg===`flight`);for(let e in Q)Q[e]=!1;e?(wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),Xh(),Ah.x?.suspend(),W(`#resume`).focus()):(Ah.x?.resume(),document.activeElement?.blur?.(),(K.state===`walk`||$)&&mv())}}document.addEventListener(`pointerlockchange`,()=>{!document.pointerLockElement&&(K.state===`walk`||$)&&tg===`flight`&&!wg&&hv()&&document.hasFocus()&&Jg(!0)});var Q={},Yg={x:0,y:0,down:!1},Xg=H(),Zg=H(),Qg=H(),$g=H(),e_=new _t,t_=new Qt,n_=new Ht,r_=H();function i_(){return dg.set(ig.x+K.pos.x/Ku,ig.y+K.pos.y/Ku,ig.z+K.pos.z/Ku)}function a_(){ng=new zd(G.seed),xh.uni=ng,o_(ng.home),uv.setUniverse(ng)}function o_(e){rg=e,ng.pin(e),xh.setGalaxy(e),Sh.setGalaxy()}var s_=(e,t)=>{let n=e.G&&e.G!==rg?e.G:null;return t.set((e.x-ig.x+(n?n.pos[0]-rg.pos[0]:0))*Ku,(e.y-ig.y+(n?n.pos[1]-rg.pos[1]:0))*Ku,(e.z-ig.z+(n?n.pos[2]-rg.pos[2]:0))*Ku)},c_=()=>(i_(),H(dg.x+rg.pos[0],dg.y+rg.pos[1],dg.z+rg.pos[2]));function l_(e){let t=c_();d_(ig),o_(e);let n=xh.marks[12];ig=null,K.pos.set((t.x-e.pos[0]-n.x)*Ku,(t.y-e.pos[1]-n.y)*Ku,(t.z-e.pos[2]-n.z)*Ku),gg=[],p_(n),!J&&!lg&&S_(e.name,e.label)}var u_=!1;function d_(e){u_&&e&&q&&!q.star&&og.includes(q)&&(q={star:e,body:q===ag.main?null:q.name,name:q.name,label:q.label})}function f_(e){e&&(e.s?.G&&ng.pin(e.s.G),q=e.b||{star:e.s,name:Sd(e.s)},u_=!0,C_(`Waypoint: ${q.name}. F flies there, K tracks, J matches its velocity`),Sy(`Course set for ${q.name}`),J&&=!1,Q_(q))}function p_(e){wv=null;let t=ig;t&&t.id!==e.id&&d_(t);for(let e of og)Ff(e);kh.body&&kh.setup(null),Y=null,t&&K.pos.set(K.pos.x+(t.x-e.x)*Ku,K.pos.y+(t.y-e.y)*Ku,K.pos.z+(t.z-e.z)*Ku);let n=q&&q.star&&q.star.id===e.id,r=n&&q.body;ig=e,ag=Nf(e),og=ag.bodies,q&&!n&&q.star||(q=n||!q?ag.main:q),q&&!q.star&&!og.includes(q)&&(q=ag.main),r&&(q=og.find(e=>e.name===r)||ag.main);{let e=K.ref?.name;wy(),K.ref=e&&og.find(t=>t.name===e)||null,jy&&!jy.star&&!og.includes(jy)&&(jy=null)}Zh=null,j_(),W(`#place h2`).textContent=ag.name,W(`#place p`).textContent=`${xd(e)}, ${og.length-1} known bodies, ${rg.name}`,Ah.chord(e.k===`star`?[`star`,`binary`,`nebula`][e.seed%3]:e.k)}function m_(e){let t=()=>{if(!G.origin){let e=c_();G.origin=[e.x,e.y,e.z]}};if(q=null,ig=null,e){o_(ng.byId(e.g));let t=e.star.id.split(`|`).pop();p_(xh.marks.find(e=>e.id.split(`|`).pop()===t)||{...e.star,G:rg}),K.pos.fromArray(e.pos),K.q.fromArray(e.q),q=ag.main}else{p_(xh.marks[0]);let e=og.find(e=>e.type===`terran`&&!e.moon),t=e.sunDir.clone().applyAxisAngle(H(0,1,0),.95);t.y=.22,t.normalize(),K.pos.copy(e.pos).addScaledVector(t,e.R*2.7),n_.lookAt(K.pos,e.pos,H(0,1,0)),K.q.setFromRotationMatrix(n_),q=e,K.ref=e}Qg.set(0,0,-1).applyQuaternion(K.q),K_=null,$_(),Cg=null,u_=!1,X=null,Z.last=0,Z.skip=!0,setTimeout(t),K.w=0,K.thr=.3,K.drift.set(0,0,0),K.hull=100,K.state=`fly`,K.inv=3,i_(),xh.update(dg,0,h_()),Sh.bakeNow(xh,dg),g_(),Th.reset()}var h_=()=>_h.scale*gh.getPixelRatio()*innerHeight/900;function g_(){let e=new qs(gh);bh.userData.pm?.dispose();let t=e.fromCubemap(Sh.rts[Sh.cur].texture);bh.userData.pm=t,bh.environment=t.texture,bh.environmentIntensity=2,e.dispose()}function __(e){tg=e,mh.classList.toggle(`flying`,e===`flight`),mh.classList.toggle(`mapping`,e===`map`),e===`map`&&(W(`#maplights`).innerHTML=`<b>The seven lights</b>`+hh.map(e=>{let t=G.got.includes(e.id);return`<div class="${t?`got`:``}" style="--c:${e.hue}"><i></i><span>${e.name}</span><em>${t?`gathered`:e.how}</em></div>`}).join(``)+`<p>${G.got.length===7?`All seven: fall into the Heart for a new universe`:`${G.got.length} of 7. With all seven, fall into the Heart`}</p>`),e===`map`&&uv.open({p:c_(),anchor:ig,G:rg,way:q&&(q.star?{star:q.star,name:q.name}:{star:ig,name:q.name})})}var v_=e=>{let t=``;for(let[n,r]of[[10,`X`],[9,`IX`],[5,`V`],[4,`IV`],[1,`I`]])for(;e>=n;)t+=r,e-=n;return t};function y_(e,t=2.6){cg||(cg={t:0,dur:t,fn:e,done:!1,ready:!1},Ah.warp())}var b_,x_;function S_(e,t,n){let r=W(`#banner`);r.querySelector(`h1`).textContent=e,r.querySelector(`p`).textContent=t,r.style.setProperty(`--c`,n||`#f2ead9`),r.classList.add(`on`),clearTimeout(b_),b_=setTimeout(()=>r.classList.remove(`on`),4800)}function C_(e){let t=W(`#toast`);t.textContent=e,t.classList.add(`on`),clearTimeout(x_),x_=setTimeout(()=>t.classList.remove(`on`),2800)}var w_=[6,19,34,48,62,76,92];W(`#spectrum`).innerHTML=hh.map((e,t)=>`<i data-id="${e.id}" style="left:${w_[t]}%;--c:${e.hue}"></i>`).join(``),W(`#helplights`).innerHTML=hh.map(e=>`<dt style="color:${e.hue}">${e.name}</dt><dd>${e.how}</dd>`).join(``);function T_(){let e=G.got.length;W(`#speccap`).textContent=e===7?`All seven lights: fall into the Heart`:`Lights gathered ${e} of 7`,document.querySelectorAll(`#spectrum i`).forEach(e=>e.classList.toggle(`on`,G.got.includes(e.dataset.id)));let t=hh.find(e=>e.id===G.got.at(-1));wh.glow.value.copy(t?Vu(t.hue):H(1,.68,.35))}var E_=[],D_=e=>({star:`#ffd45e`,blackhole:`#b06cff`,quasar:`#ffffff`,pulsar:`#4fe6ff`,gas:`#ffc9a0`})[e.kind]||(e.type===`asteroid`?`#ff9440`:e.atm?`#86f29b`:`#c8c2ba`);function O_(e){let t=document.createElement(`div`);return t.className=`mk`,t.innerHTML=`<i></i><span><b style="font-weight:400"></b><em></em></span>`,t.style.setProperty(`--c`,e),W(`#markers`).append(t),{e:t,sp:t.querySelector(`span`),nm:t.querySelector(`b`),em:t.querySelector(`em`)}}var k_,A_;function j_(){W(`#markers`).innerHTML=``,E_=og.map(e=>{let t=O_(D_(e));return t.b=e,t.nm.textContent=e.name,t}),k_=O_(`#cfe3ff`),A_=O_(`#ffffff`),A_.e.classList.add(`hv`)}var M_=H();function N_(e){let t=Yu.uBeta.value;if(t<1e-4)return e;let n=e.length(),r=Yu.uBDir.value;e.divideScalar(n);let i=e.dot(r),a=1/Math.sqrt(1-t*t);if(M_.copy(e).addScaledVector(r,-i),Yu.uMeas.value>.5)e.copy(M_).addScaledVector(r,i/a).normalize();else{let n=1+t*i;e.copy(M_).divideScalar(a*n).addScaledVector(r,(i+t)/n)}return e.multiplyScalar(n)}function P_(e){if(Xg.copy(N_(Xg.copy(e))).normalize(),Zg.copy(Xg).applyQuaternion(vh.quaternion.clone().invert()),Zg.z>-.05)return{ok:!1};let t=1/Math.tan(vh.fov*Math.PI/360),n=Zg.x/-Zg.z*t/vh.aspect,r=Zg.y/-Zg.z*t;return{x:(n*.5+.5)*innerWidth,y:(-r*.5+.5)*innerHeight,ok:Math.abs(n)<1.02&&Math.abs(r)<1.02}}function F_(e,t=e.length()){if(yg<1.001)return t;let n=e.dot(H_);return Math.sqrt(Math.max(0,t*t-n*n)+n*n/(yg*yg))}var I_=H(),L_=(e,t=e.length())=>{let n=F_(e,t);return td(t)+(yg>1.02&&Math.abs(n-t)>t*.01?` (aboard ${td(n)})`:``)+(K.w>=1?`, ${nd(t/K.w)} at this speed`:``)},R_=[];function z_(e,t,n){for(let r of R_)if(r.b!==n&&r.d<t&&r.a>.0015&&e.dot(r.n)>r.c)return!0;return!1}function B_(){let e=K.state!==`fly`||!!$;R_=og.map(e=>{let t=e.pos.clone().sub(r_),n=t.length(),r=e.R/n;return{b:e,n:t.divideScalar(n),d:n-e.R,a:r,c:n>e.R?Math.sqrt(Math.max(0,1-r*r)):-1}});let t=Zh?.b;for(let n of E_){let r=n.b;I_.copy(r.pos).sub(r_);let i=I_.length(),a=P_(I_),o=r===q,s=r===t,c=r.R/i,l=a.ok&&!e&&(o||s||c<.25&&(r.swarm?i<4e7:r.moon?i<4e9:i<5983914828e4)&&!z_(Zg.copy(I_).divideScalar(i),i-r.R,r));if(s&&!e&&(!a.ok||c>.25)&&(l=!0,a.x=Yg.px,a.y=Yg.py),n.e.style.display=l?``:`none`,l&&(n.e.style.transform=`translate(${a.x|0}px,${a.y|0}px)`,n.e.classList.toggle(`t`,o),n.e.classList.toggle(`hv`,s&&!o),n.e.style.opacity=o&&!s&&z_(Zg.copy(I_).divideScalar(i),i-r.R,r)?.45:1,n.sp.style.display=o||s?``:`none`,o||s)){let e=s?`${r.name}, ${r.label}`:r.name;n.nm.textContent!==e&&(n.nm.textContent=e),n.em.textContent=L_(I_,Math.max(0,i-r.R))}}let n=(t,n,r)=>{if(!n||e){t.e.style.display=`none`;return}s_(n,I_).sub(r_);let i=P_(I_);t.e.style.display=i.ok?``:`none`,i.ok&&(t.e.style.transform=`translate(${i.x|0}px,${i.y|0}px)`,t.e.classList.toggle(`t`,r),t.nm.textContent=r&&q.body?`${q.name}, ${q.label||Sd(n)}`:`${Sd(n)}, ${xd(n)}`,t.em.textContent=L_(I_))};{let t=W(`#tdir`),n=!1;if(q&&!e&&!sg&&(q.star?s_(q.star,I_).sub(r_):I_.copy(q.pos).sub(r_),!P_(I_).ok)){Zg.copy(N_(Xg.copy(I_))).applyQuaternion(vh.quaternion.clone().invert());let e=Math.atan2(-Zg.y,Zg.x);t.style.transform=`translate(${Math.cos(e)*82}px,${Math.sin(e)*82}px) rotate(${e}rad)`,n=!0,t.title!==q.name&&(t.title=q.name)}t.classList.toggle(`on`,n)}{let t=W(`#prograde`),n=!e&&!sg&&K.w>20&&av(H_,Qg)[1]>.012;if(t.classList.toggle(`on`,n),n){let e=P_(H_.clone().multiplyScalar(1e9));t.style.display=e.ok?``:`none`,e.ok&&(t.style.transform=`translate(${e.x|0}px,${e.y|0}px)`)}}{let t=W(`#site`),n=wv&&wv.b===Y&&!e||wv&&K.state===`descend`&&!$;if(t.classList.toggle(`on`,!!n),n){I_.copy(wv.pos).sub(r_);let e=P_(I_);t.style.display=e.ok?``:`none`,e.ok&&(t.style.transform=`translate(${e.x|0}px,${e.y|0}px)`,t.children[1].textContent=`Landing site, `+td(I_.length()))}}n(k_,q?.star,!0),n(A_,Zh?.s&&Zh.s.id!==q?.star?.id?Zh.s:null,!1)}function V_(e,t){let n=t?0:(Yg.px??innerWidth/2)/innerWidth*2-1,r=t?0:1-(Yg.py??innerHeight/2)/innerHeight*2,i=Math.tan(vh.fov*Math.PI/360),a=H(n*i*vh.aspect,r*i,-1).normalize().applyQuaternion(vh.quaternion),o=Yu.uBeta.value;if(e&&o>1e-4){let e=Yu.uBDir.value,t=a.dot(e),n=1/Math.sqrt(1-o*o),r=a.clone().addScaledVector(e,-t);if(Yu.uMeas.value>.5)a.copy(r).addScaledVector(e,t*n).normalize();else{let i=1-o*t;a.copy(r).divideScalar(n*i).addScaledVector(e,(t-o)/i).normalize()}}return a}var H_=H(0,0,-1),U_=3e3,W_=!1,G_=!0,K_=null,q_=-1,J_=null;function Y_(e,t){return e.parent?e.orbR.clone().applyAxisAngle(e.orbN,e.orbW*t%Cy).add(Y_(e.parent,t)):e.pos.clone()}var X_=e=>2*Math.sqrt((e/2)**2/(Gu*Gu)+e/my);function Z_(e){if(e.star)return s_(e.star,H());if(!e.parent)return e.pos.clone();let t=G.earthT||0,n=K.ref&&K.ref.parent?K.ref:null,r=e.pos.clone(),i=X_(r.distanceTo(K.pos));for(let a=0;a<5;a++)r=Y_(e,t+i),n&&r.sub(Y_(n,t+i).sub(n.pos)),i=X_(r.distanceTo(K.pos));return r}function Q_(e){if(!e||K.state!==`fly`||sg||sb||Mv)return;let t=Z_(e);t.sub(K.pos),t.lengthSq()<1||(K_=t.normalize(),q_=-1,K.w>U_&&(W_=!0,ov(),C_(`Nose on ${e.name}, still coasting. Pick a gear to burn that way`)))}var $_=()=>{W_=!1,G_=!0,J_=null,H_.copy(Qg)},ev=e=>{if(e<1)return 0;if(e<Eg)return e/Eg;if(e>=Ng[kg][0])return kg;let t=1,n=kg;for(;n-t>1;){let r=t+n>>1;Ng[r][0]<=e?t=r:n=r}return t+Math.log(e/Ng[t][0])/Math.log(Ng[t+1][0]/Ng[t][0])},tv=e=>{if(e<=1)return Math.max(0,e)*Eg;let t=Math.min(80,Math.floor(e));return Ng[t][0]*(Ng[t+1][0]/Ng[t][0])**+(e-t)},nv=3600,rv=(e,t,n)=>t>0?Math.max(Qm(e/Gu,t,n)*Gu,Math.min(e,my*nv/Math.max(Math.atan2(n,t),1e-12))):0;function iv(e,t,n){if(e<=U_)return e;let r=t<=0?0:(1-Math.atan2(n,t)/(Math.PI/2))**4;return Math.min(e,Math.max(Eg,Math.min(tv(1+(ev(e)-1)*r),rv(e,t,n))))}var av=(e,t)=>[e.dot(t),Zg.crossVectors(e,t).length()];function ov(){G_&&(G_=!1,J_={w0:K.w,from:H_.clone(),goal:K.w})}function sv(e){W_=!1,jy&&(jy=null,C_(`Tracking off`)),rb=null,K_=V_(e),J&&(J=!1,C_(`Autopilot off`))}function cv(){if(K.state!==`fly`||sg||$)return null;let e=V_(!0),t=null,n=null,r=.02;for(let i of R_){let a=e.dot(i.n);if(a>=i.c){(!t||i.d<t.d)&&(t=i);continue}if(i.b.swarm&&i.d>4e7||i.b.moon&&i.d>4e9)continue;let o=Math.acos(Math.min(1,a))-Math.asin(Math.min(1,i.a));o<r&&!z_(i.n,i.d,i.b)&&(r=o,n=i)}if(t)return{b:t.b};if(n)return{b:n.b};if(Y&&_g<5e3)return null;let i=K.w<0xa80e6bd3ab61c0?xh.pick(dg,e,.9997):null;if(i&&i.id!==ig.id)return{s:i};let a=c_(),o=null,s=.012;for(let[t,n]of ng.near(a,25)){if(n<t.R*1.6)continue;let r=H(t.pos[0]-a.x,t.pos[1]-a.y,t.pos[2]-a.z).divideScalar(n),i=Math.acos(Math.min(1,r.dot(e)))-Math.min(.3,t.R*.5/n);i<s&&(s=i,o=t)}return o&&ng.pin(o),o?{s:o.star}:null}var lv=e=>{e.star?.G&&ng.pin(e.star.G),q=e.here?e.body&&og.find(t=>t.name===e.body)||ag.main:e,u_=!0},uv=new kp(yh,e=>{lv(e),__(`flight`),Fv()?Ug(q.name):C_(`Waypoint: `+q.name)},e=>{let t=q;lv(e),J&&q!==t?(J=!1,C_(`Autopilot off, new waypoint: `+q.name)):C_(`Waypoint: `+q.name),J||Q_(q)});addEventListener(`mousemove`,e=>{let t=e.clientX,n=e.clientY;if(dv.on){if(!(e.buttons&1))dv.on=!1;else{dv.moved=(dv.moved||0)+Math.abs(e.movementX||0)+Math.abs(e.movementY||0),dv.yaw-=(e.movementX||0)*.0055,dv.pitch=Math.max(-1.35,Math.min(1.35,dv.pitch-(e.movementY||0)*.0055));return}}if(tg===`map`&&uv.move(t,n,Yg.down,e.movementX||0,e.movementY||0,e.buttons>1||e.shiftKey),document.pointerLockElement){if($){$.mx+=e.movementX||0,$.my+=e.movementY||0;return}yv.yaw-=e.movementX*.0022,yv.pitch=Math.max(-1.5,Math.min(1.5,yv.pitch-e.movementY*.0022));return}Yg.px=t,Yg.py=n;let r=Math.min(innerWidth,innerHeight)*.42;Yg.x=Math.max(-1,Math.min(1,(t-innerWidth/2)/r)),Yg.y=Math.max(-1,Math.min(1,(n-innerHeight/2)/r))}),document.addEventListener(`mouseleave`,()=>{Yg.x=Yg.y=0}),addEventListener(`blur`,()=>{dv.on=!1,q_=-1;for(let e in Q)Q[e]=!1;Yg.down=!1,Yg.x=Yg.y=0}),addEventListener(`mousedown`,e=>{e.button===2&&tg===`flight`?$||K.state!==`fly`&&K.state!==`descend`||Sg||lg||cg||sg||!hv()||(q_=0,sv(!0)):(Yg.down=!0,uv.moved=0,e.button!==0||tg!==`flight`||K.state===`walk`||$||Sg||lg||sg||!hv()||(dv.on=!0,dv.moved=0),(K.state===`walk`||$)&&tg===`flight`&&hv()&&!Sg&&mv())}),addEventListener(`mouseup`,e=>{if(e.button===2)q_=-1;else if(e.button===0){if(dv.on&&(dv.moved||0)<5&&tg===`flight`&&K.state===`fly`&&!$&&!Sg&&hv()){let e=cv();e&&e.b!==Y||Dv()}dv.on=!1}let t=Yg.down;Yg.down=!1,t&&tg===`map`&&!cg&&hv()&&e.button===0&&uv.click()}),addEventListener(`dblclick`,()=>{if(tg===`map`)uv.dbl();else if(tg===`flight`&&K.state===`fly`&&!Sg&&!lg&&!cg&&!sg&&hv()&&!$){let e=cv();if(e?.b&&e.b===Y&&Dv())return;let t=q;f_(cv()),J&&q!==t&&(J=!1,C_(`Autopilot off, new waypoint: `+q.name))}});var dv={on:!1,yaw:0,pitch:0,q:new _t},fv=new _t,pv=0;addEventListener(`wheel`,e=>{tg===`map`?(e.preventDefault(),uv.zoom(e.deltaY*(e.deltaMode?30:1))):tg===`flight`&&K.state===`fly`&&!Sg&&!lg&&hv()&&(e.preventDefault(),pv+=e.deltaY*(e.deltaMode?30:1),Math.abs(pv)>=60&&(Lg(pv<0?1:-1),pv=0))},{passive:!1}),addEventListener(`contextmenu`,e=>e.preventDefault());var mv=()=>{try{W(`#c`).requestPointerLock()?.catch?.(()=>{})}catch{}},hv=()=>W(`#help`).hidden,gv=e=>{W(`#help`).hidden=!e,e?(wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),mh.classList.remove(`flying`)):tg===`flight`&&mh.classList.add(`flying`)};W(`#closehelp`).onclick=()=>gv(!1),addEventListener(`keydown`,e=>{if(qg.key(e))return;let t=e.key===`[`||e.code===`BracketLeft`?-1:+(e.key===`]`||e.code===`BracketRight`);if(t&&tg===`flight`&&!Sg&&!lg&&hv()){e.preventDefault(),Lg(t);return}if(e.ctrlKey||e.metaKey||e.altKey||e.getModifierState?.(`AltGraph`)||((e.code===`Space`||e.code.startsWith(`Arrow`))&&tg!==`title`&&e.preventDefault(),e.repeat)||(Q[e.code]=!0,tg===`title`||tg===`warp`))return;if(e.code===`Escape`&&hv()&&tg===`flight`){Jg(!Sg);return}if(Sg)return;if(e.key===`?`||e.key===`Escape`&&!hv()){gv(hv());return}if(!hv())return;if(tg===`map`){(e.code===`KeyM`||e.code===`Escape`)&&__(`flight`);return}if(lg)return;if(Ly()){let t=$,n=Iy??t.deck;if(e.code===`Space`){Iy=Math.min(lm-1,n+1);return}if(e.code===`KeyX`){Iy=Math.max(0,n-1);return}if((e.code===`KeyE`||e.code===`Enter`)&&Iy!=null&&Iy!==t.deck){zy(Iy);return}}let n=/^(?:Digit|Numpad)(\d)$/.exec(e.code);if(n){let e=+n[1];Pg(e<2?e:jg(e,0))}else switch(e.code){case`Enter`:W(`#report`).classList.remove(`on`);break;case`KeyM`:wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),__(`map`);break;case`KeyT`:vv();break;case`KeyF`:J?(J=!1,Py=null,C_(`Autopilot off`)):Fv();break;case`KeyC`:K.state===`fly`&&!sb&&!q.star&&(sg=!sg,J=!1,Wv=null,sg&&(K.w=0));break;case`KeyG`:K.state===`descend`?kv(`Landing cancelled`):Tv()?Ov():K.state===`landed`&&Iv();break;case`KeyE`:$?zv():K.state===`walk`?Uv():(K.state===`fly`||K.state===`landed`||K.state===`descend`)&&Lv();break;case`KeyV`:Yu.uMeas.value=1-Yu.uMeas.value,C_(Yu.uMeas.value?`Measured: pure length contraction`:`Seen: aberration and Doppler shift`);break;case`KeyH`:mh.classList.toggle(`nohud`);break;case`KeyI`:$h=!$h,C_($h?`Data sheet on`:`Data sheet off`);break;case`KeyL`:Mv?(Mv=null,C_(`Stopped leaving`)):K.state===`descend`?kv(`Landing cancelled, site cleared`):K.state===`fly`&&wv&&wv.b===Y?Ov():K.state===`fly`&&Y?.terrain&&!wv&&_g<Y.R*2.5?C_(`Click a spot on the ground first, then L`):Pv();break;case`KeyY`:rb?(rb=null,K_=null,C_(`Escape stopped`)):ib();break;case`KeyU`:$&&Bv();break;case`KeyK`:q&&Ny(q);break;case`KeyJ`:q&&ky(q.star?null:q);break;case`KeyN`:C_(Ah.mute()?`Sound off`:`Sound on`)}}),addEventListener(`keyup`,e=>Q[e.code]=!1);var _v=0;function vv(){let e=H(0,0,-1).applyQuaternion(K.q),t=performance.now(),n=og.filter(e=>!e.swarm||e.pos.distanceTo(K.pos)<1e8).map(t=>{let n=t.pos.clone().sub(K.pos),r=n.length();return[t,Math.acos(Math.max(-1,Math.min(1,n.dot(e)/r)))-Math.min(.6,t.R/r)]}).sort((e,t)=>e[1]-t[1]),r=xh.pick(i_(),e,.9992);Zh&&t-_v>600&&(Zh.b?Zh.b!==q:Zh.s.id!==q?.star?.id)?q=Zh.b||{star:Zh.s,name:Sd(Zh.s)}:t-_v<2500&&n.length?q=n[(n.findIndex(e=>e[0]===q)+1)%n.length][0]:n[0]&&n[0][1]<.035?q=n[0][0]:r&&r.id!==ig.id?q={star:r,name:Sd(r)}:n[0]&&(q=n[0][0]),_v=t,u_=!0,C_(`Target: `+q.name),J||Q_(q)}var yv={pos:H(),yaw:0,pitch:0,vy:0,fwd:H()},bv=null,xv=(e,t)=>t.clone().sub(e.pos).normalize(),Sv=51.22,Cv=13/9,wv=null,$=null,Tv=()=>Y&&Y.terrain&&K.state===`fly`&&!sb&&!Mv&&_g<Math.min(Y.R*.6,4e5)&&K.w<3e5;function Ev(e,t){let n=r_.clone().sub(e.pos),r=0;for(let i=0;i<260;i++){let i=n.clone().addScaledVector(t,r),a=i.length(),o=i.divideScalar(a),s=a-e.R-e.terrain.height(o);if(s<Math.max(1,r*4e-4))return o;if(r+=Math.max(1.5,s*.6),r>e.R*4||a>e.R+e.hMax*2&&o.dot(t)>0)return null}return null}function Dv(){if(!Y?.terrain||_g>Y.R*2.5||$||K.state!==`fly`)return!1;let e=Ev(Y,V_(!0));return e?(wv={b:Y,d:e,db:e.clone().applyQuaternion(Y.spinQ.clone().invert()),pos:Y.pos.clone().addScaledVector(e,Y.R+Y.terrain.height(e))},C_(`Landing site on ${Y.name}, ${td(e.distanceTo(xv(Y,K.pos))*Y.R)} away. Press L to land there`),Ah.chime(2),Sy(`Landing site selected. Press L to land`),!0):!1}function Ov(){K.ref!==Y&&ky(Y,!0),Sy(`Beginning automatic landing`);let e=xv(Y,K.pos),t=wv&&wv.b===Y?wv.d.clone():e.clone();K.state=`descend`,K_=null,$_(),J=sg=!1,X=null,Mv=null;let n=Qg.clone().addScaledVector(e,-Qg.dot(e));n.lengthSq()<.01&&n.set(1,0,0).applyQuaternion(K.q),bv={b:Y,d:t,db:t.clone().applyQuaternion(Y.spinQ.clone().invert()),h:n.normalize(),phase:`go`},C_(wv&&wv.b===Y?`Flying to the landing site`:`Landing here`)}function kv(e){K.state===`descend`&&Sy(`Landing cancelled`),wv=null,kh.clr=null,K.state===`descend`&&(K.state=`fly`,$_(),K.w=Math.min(K.w,60),K.thr=.2,e&&C_(e))}function Av(e){let t=bv,n=t.b,r=K.pos.distanceTo(n.pos),i=xv(n,K.pos),a=n.terrain.height(i),o=n.terrain.height(t.d),s=Math.acos(Math.max(-1,Math.min(1,i.dot(t.d))))*n.R,c=i.distanceTo(t.d)*n.R,l=c<1e5?c:s,u=r-n.R-a,d=r-n.R-o,f=t.d.clone().addScaledVector(i,-t.d.dot(i));f.lengthSq()>1e-16&&f.normalize();let p=H_.clone().multiplyScalar(K.w).add(Dy),m=H(),h=p.clone(),g=n.atm?n.atm.top:0,_=Math.max(g,4e3),v=t.d.clone().multiplyScalar(n.R+o+_).add(n.pos),y=v.distanceTo(K.pos),b=t.phase===`go`&&!t.near&&(y>6e3||K.w>1500)&&d>_*.7,x=d>g?my:Qy;if(Dy.set(0,0,0),Oy=null,t.phase===`go`&&!b&&!t.near&&(t.near=!0,n.atm&&Sy(`Entering the atmosphere`)),b){let n=v.clone().sub(K.pos),r=n.length();m.copy(n).divideScalar(Math.max(r,1)).multiplyScalar(Math.min(r*.45,3e6,Math.sqrt(2*my*.5*r)+800));let a=m.clone().sub(p).multiplyScalar(1-Math.exp(-e*2.5));a.length()>x*e&&a.setLength(x*e),p.add(a),p.length()>20&&(n_.lookAt(H(),p.clone().normalize(),i),e_.setFromRotationMatrix(n_),K.q.slerp(e_,1-Math.exp(-e*2))),t.h.copy(f.lengthSq()?f:t.h)}else if(t.phase===`go`){let n=Math.max(0,Math.min(l*.34,Math.max(420,l*.22),u<900?500:6e3,Math.sqrt(2*Qy*.55*l))),r=420+l*.3,a=Math.max(-Math.max(90,Math.min(n*.9+d*.12,Math.sqrt(2*Qy*.55*Math.max(0,d-Sv-300)))),Math.min(Math.max(80,n),(r-d)*.5));u<220&&(a=Math.max(a,(220-u)*.8)),m.copy(f).multiplyScalar(n).addScaledVector(i,a);{let t=m.clone().sub(p).multiplyScalar(1-Math.exp(-e*1.3));t.length()>x*e&&t.setLength(x*e),p.add(t)}let o=l<1500&&d<2500;if(!o&&p.length()>20){let e=p.clone().normalize();n_.lookAt(H(),e,i),t.h.copy(f.lengthSq()?f:t.h)}else n_.lookAt(H(),i,t.h.clone().negate());e_.setFromRotationMatrix(n_),K.q.slerp(e_,1-Math.exp(-e*(o?1.1:1.6))),l<25&&d<900&&p.length()<60&&Qg.dot(i)>.97&&(t.phase=`down`,kh.clr={d:t.db.clone(),r:50},Sy(`Final descent`),kh.keys={},C_(`Final descent`))}else{let r=d-Sv;m.copy(f).multiplyScalar(Math.min(6,l*.6)).addScaledVector(i,-Math.max(1.3,Math.min(75,r*.42)));{let t=m.clone().sub(p).multiplyScalar(1-Math.exp(-e*2.2));t.length()>Qy*e&&t.setLength(Qy*e),p.add(t)}if(n_.lookAt(H(),i,t.h.clone().negate()),e_.setFromRotationMatrix(n_),K.q.slerp(e_,1-Math.exp(-e*2.5)),t.left=r,r<.25){K.pos.copy(n.pos).addScaledVector(i,n.R+o+Sv),K.w=0,H_.copy(Qg),wv=null,jv();return}}cy.copy(p).sub(h).divideScalar(Math.max(e,.001)),K.w=p.length(),K.w>1e-6&&H_.copy(p).divideScalar(K.w);{K.pos.clone(),K.pos.addScaledVector(H_,K.w*e);let r=xv(n,K.pos),i=n.R+n.terrain.height(r)+Sv*.9;K.pos.distanceTo(n.pos)<i&&t.phase===`go`&&K.pos.copy(n.pos).addScaledVector(r,i)}Qg.set(0,0,-1).applyQuaternion(K.q),(t.phase===`down`||Qg.dot(i)>.8)&&sy.lerp(H(0,0,-(.45+.4*Math.min(1,K.w/60))),1-Math.exp(-e*6))}function jv(){qy(),Sy(`Touchdown. Welcome to ${Y.name}`),K.state=`landed`,K.thr=0,K.roll=0,sy.set(0,0,0),Ah.boom(.5,260),hg=.5,G.landed++,xv(Y,K.pos),Y.type===`asteroid`&&ty(`asteroid`),S_(Y.name,`${Y.label}. E to walk through the ship, G to take off.`),Yh()}var Mv=null,Nv=e=>1.4*e.R;function Pv(){if(!(!Y||lg||sb)){if(K.state===`walk`){if(Hv()>46){C_(`Board the ship first`);return}Uv()}K.state!==`descend`&&(K.state===`landed`&&Iv(),J=sg=!1,X=null,K_=null,W_=!1,$_(),Mv={b:Y,t:0},kh.clr=null,C_(`Leaving ${Y.name}`),Sy(`Leaving ${Y.name}`),Ah.tone(40,3.5,.18,`sawtooth`,160))}}function Fv(){if(!q||sb||lg||sg)return!1;if(K.state===`walk`){if(Hv()>46)return C_(`Walk back to the ship first: `+td(Hv())),!1;Uv()}return K.state===`descend`&&kv(`Landing cancelled`),K.state===`landed`&&(Sy(`Lift off`),Cb=3.2,K.state=`fly`,Ah.boom(.3,800)),K.state===`fly`&&(Mv=null,K_=null,q_=-1,X=null,Hg(),C_(`Autopilot: `+q.name),!0)}function Iv(){Sy(`Lift off`),Cb=3.2,K.state=`fly`;let e=xv(Y,K.pos);K.drift.copy(e).multiplyScalar(9),K.thr=.25,$_(),Mv={b:Y,t:0,short:!0},Ah.boom(.3,800),C_(`Lift off`)}function Lv(e){if(sg||lg||sb||cg)return;let t=new _t;$={p:bm.clone(),v:H(),q:t,pitch:0,buck:!0,mx:0,my:0,deck:lm-1},e===`hatch`&&($.buck=!1,$.p.set(0,vm(0)+1,-(_m[0]-2.4))),K.state===`walk`&&(K.state=`landed`),wh.setInside(!0),dv.on=!1,dv.yaw=dv.pitch=0,q_=-1,mv(),C_($.buck?`In the pilot capsule. Look around, U unbuckles, E back to the outside view`:`${cm[0]}. U buckles you in at the capsule in the cockpit`)}function Rv(){$=null,wh.setInside(!1),wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),fv.copy(K.q)}function zv(){let e=$,t=e.spot;e.buck?(Rv(),C_(`Outside view`)):t?t.id===`map`?(wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),__(`map`)):t.id===`hatch`&&(K.state===`landed`?Vv():C_(`The airlock only opens on the ground`)):C_(`Nothing to use here. U buckles in at the capsule`)}function Bv(){let e=$;if(e){if(e.buck){if(Ky.frozen){C_(`Not while the crew is frozen`);return}e.buck=!1,e.p.copy(bm).add(H(0,0,-1.9)),e.v.set(0,0,0),C_(ly.length()>.15?`Unbuckled. You stand in the felt gravity`:`Unbuckled. Zero g: WASD, Space and X to push off, Q R to roll`)}else e.p.distanceTo(bm)<2.8?(e.buck=!0,C_(`Buckled in`)):C_(`Go to the capsule in the cockpit to buckle in`)}}function Vv(){let e=xv(Y,K.pos),t=H(0,-1,0).applyQuaternion(K.q);t.addScaledVector(e,-t.dot(e)).normalize();let n=K.pos.clone().addScaledVector(t,35.1),r=xv(Y,n);wh.setInside(!1),$=null,yv.pos.copy(Y.pos).addScaledVector(r,Y.R+Y.terrain.height(r)+1.8),yv.fwd.copy(t),yv.yaw=0,yv.pitch=0,yv.vy=0,K.state=`walk`,mv(),Y.weather.length&&ty(`planet`),C_(`Come back to the legs and press E to board`)}var Hv=()=>{let e=xv(Y,K.pos),t=yv.pos.clone().sub(K.pos);return t.addScaledVector(e,-t.dot(e)).length()};function Uv(){Hv()>46?C_(`Too far from the ship: `+td(Hv())):(Lv(`hatch`),Sy(`Welcome aboard`))}var Wv=null,Gv=0,Kv=!1,qv=0,Jv=0,Yv=0,Xv=0,Zv=0,Qv=0,$v={k:`clear`,i:0,f:0},ey=0;function ty(e){if(G.got.includes(e))return;G.got.push(e),Yh();let t=hh.find(t=>t.id===e);T_(),mg.copy(Vu(t.hue)),pg=.7,Ah.fanfare(),S_(t.name,t.line,t.hue),G.got.length===7&&setTimeout(()=>S_(`The spectrum is whole`,`Return to the Heart of the galaxy and fly into the dark.`),6e3)}function ny(e){if(lg||cg)return;$&&Rv(),wv=null,Mv=null,lg=1,mg.set(1,.9,.8),pg=1.2,Ah.boom(.9,900),S_(`Unmade`,e),wh.group.visible=!1,J=sg=!1;let t=Y||ag.main;setTimeout(()=>{lg=0,wh.group.visible=!0;let e=og.includes(t)?t:ag.main,n=e.kind===`star`?4:e.kind===`blackhole`||e.kind===`quasar`?24:e.kind===`pulsar`?200:2.4,r=e.sunDir&&e.sunDir.lengthSq()?e.sunDir.clone().applyAxisAngle(H(0,1,0),.8):H(.3,.25,1).normalize();K.pos.copy(e.pos).addScaledVector(r,Math.max(e.R*n,vy(e)*1.5)),n_.lookAt(K.pos,e.pos,H(0,1,0)),K.q.setFromRotationMatrix(n_),Qg.set(0,0,-1).applyQuaternion(K.q),K_=null,$_(),K.w=0,K.drift.set(0,0,0),K.hull=100,K.inv=3,K.state=`fly`,K.thr=.2,X=null,Z.last=0,Z.skip=!0,Th.reset()},2200)}function ry(){cg||(__(`warp`),mg.set(1,1,1),pg=2,y_(async()=>{Object.assign(G,Wh(G.n+1),{origin:void 0,epoch:G.epoch,shipT:G.shipT,crewT:G.crewT,earthT:G.earthT}),a_(),T_(),m_(),await iy(),__(`flight`),S_(`Universe `+v_(G.n),`The light you carried becomes its first dawn.`)},5))}async function iy(){for(let e=0;e<200&&(db(1e-4),!og.every(e=>!e.terrain||e.terrain.ready));e++)await new Promise(e=>setTimeout(e,20));await gh.compileAsync(bh,vh).catch(()=>{})}function ay(){let e=1/0;Y=null,vg=1/0;let t=[];for(let n of og){let r=n.pos.distanceTo(K.pos),i=n.R/r,a=n.kind===`quasar`||n.kind===`blackhole`?4e-5:n.kind===`pulsar`?2e-6:n.kind===`star`?6e-4:.0014;i>a&&!n.group?(Pf(n),fg.add(n.group)):i<a*.5&&n.group&&Ff(n);let o=r-n.R;if(n.terrain&&i>.25){let e=xv(n,K.pos);o-=n.terrain.height(e)}t.push({name:n.name,d:Math.max(0,o),b:n});let s=n.kind===`blackhole`||n.kind===`quasar`?Math.max(0,r-n.R*.5):o;s<vg&&(vg=s),(n.kind===`rock`||n.kind===`gas`)&&o<e&&r<n.R*4+4e5&&(e=o,Y=n)}return _g=Y?e:1/0,t}function oy(){let e=J_,t=e?ev(e.w0):0;if($_(),H_.copy(Qg),J||!e)return;let n=ev(K.w);if(e.goal<e.w0*.98&&(!X||X.w>K.w*1.02)){if(n>=1.98){let e=Math.max(2,Math.min(kg,Math.floor(n+.05)));X={n:e,w:Math.min(Ng[e][0],K.w),t:Ng[e][1],auto:!0}}else X={n:1,w:Eg,t:Ng[1][1],auto:!0},K.thr=1}t-n>.4&&C_(`Course changed, down to ${n<1?`cruise`:`gear `+Mg(Math.max(1,Math.floor(n+.05)))}`)}var sy=H(),cy=H(),ly=H(),uy=H(),dy=!0;function fy(e,t){let n=Lf(K.w),r=H_.clone().multiplyScalar(n),i=r.clone().sub(uy),a=Math.sinh(uy.length())*Gu;if(uy.copy(r),dy||K.state!==`fly`&&K.state!==`descend`||sg||lg||sb){dy=!1,sy.set(0,0,0),K.state!==`descend`&&cy.set(0,0,0);return}let o=(K.dEta??i.length())*Gu/Math.max(e,.001),s=i.length()*Gu*Math.cosh(Math.min(n,300))/Math.max(e,.001)/Math.max(K.w,a,8),c=Math.max(0,Math.min(1,(s-.02)/.1))*+!t*(o<.6?0:Math.min(1,.08+Math.log10(1+o/8)/8));i.lengthSq()>0&&i.normalize(),c>0&&i.lengthSq()>0?cy.copy(i).multiplyScalar(Math.min(o,1e7)):cy.multiplyScalar(Math.exp(-e*10)),i.applyQuaternion(K.q.clone().invert()).multiplyScalar(c),sy.lerp(i,1-Math.exp(-e*14)),c===0&&sy.lengthSq()<1e-4&&sy.set(0,0,0)}var py=6674e-14,my=980665,hy=1,gy=1,_y=1/0,vy=e=>Math.sqrt(py*(e.mass||=dp(e))/(.06*my)),yy=[[/^Welcome back/,`welcomeback`],[/^Welcome aboard\. All/,`welcome`],[/^Welcome aboard/,`board`],[/^Course set/,`course`],[/^Autopilot engaged/,`autopilot`],[/^Arrived/,`arrived`],[/^Matching velocity/,`matching`],[/^Velocity matched/,`matched`],[/^Already matched/,`already`],[/^Tracking off/,`trackoff`],[/^Tracking/,`tracking`],[/^Landing site/,`site`],[/^Beginning automatic landing/,`landing`],[/^Entering the atmosphere/,`atmosphere`],[/^Final descent/,`final`],[/^Touchdown/,`touchdown`],[/^Landing cancelled/,`cancel`],[/^Lift off/,`liftoff`],[/^Leaving/,`leaving`],[/^Warning\. Strong gravity/,`gravwarn`],[/^Danger\. Gravity/,`gravdanger`],[/^Crew entering cryo/,`cryo`],[/^Crew awake/,`awake`],[/^Event horizon/,`horizon`],[/^Escaping/,`escape`]],by={buf:{},last:``,t:0,src:null};async function xy(e){if(by.buf[e]!==void 0)return by.buf[e];by.buf[e]=null;try{let t=await fetch(`./voice/${e}.ogg`);by.buf[e]=await Ah.x.decodeAudioData(await t.arrayBuffer())}catch{by.buf[e]=!1}return by.buf[e]}function Sy(e,t){try{if(!Ah.x||Ah.m||tg===`title`)return;let n=yy.find(([t])=>t.test(e));if(!n)return;let r=n[1],i=performance.now();if(!t&&r===by.last&&i-by.t<5e3)return;by.last=r,by.t=i,xy(r).then(e=>{if(!e||Ah.m)return;try{by.src?.stop()}catch{}let t=Ah.x,n=t.createBufferSource(),r=t.createGain();n.buffer=e,r.gain.value=1.25,n.connect(r).connect(Ah.out),Ah.tone(1320,.08,.03),Ah.tone(1760,.06,.018),n.start(t.currentTime+.12),by.src=n})}catch{}}var Cy=Math.PI*2;function wy(){let e=ag.main;for(let e of og)e.pos0=e.pos.clone(),e.prev=e.pos.clone(),e.vel=H(),e.spinQ=new _t,e.spinQp=new _t;for(let t of og){if(t===e||t.kind===`star`)continue;let n=e;if(t.moon){let e=1/0;for(let r of og)if((r.kind===`rock`||r.kind===`gas`)&&!r.moon&&!r.swarm){let i=r.pos0.distanceTo(t.pos0);i<e&&(e=i,n=r)}}t.parent=n,t.orbR=t.pos0.clone().sub(n.pos0),t.orbA=t.orbR.length();let r=t.orbR.clone().normalize();t.orbN=H(0,1,0).addScaledVector(r,-r.y).normalize(),t.orbW=Math.sqrt(py*((n.mass||=dp(n))+(t.mass||=dp(t)))/t.orbA**3);let i=7;for(let e of t.name)i=(i*31+e.charCodeAt(0))%9973;let a=i/9973,o=t.kind===`gas`?9+a*8:t.type===`asteroid`?2+a*18:10+a*34;t.moon?(t.spinW=t.orbW,t.spinAx=t.orbN):(t.spinW=(a<.1?-1:1)*Cy/(o*3600),t.spinAx=(t.up||H(0,1,0)).clone())}Ty(!0)}function Ty(e){let t=G.earthT||0,n=ag.main;for(let r of og)r.prev&&(r.prev.copy(r.pos),r.spinQp.copy(r.spinQ),r.parent&&(r.pos.copy(r.orbR).applyAxisAngle(r.orbN,r.orbW*t%Cy).add(r.parent.pos),r.vel.crossVectors(r.orbN,r.pos.clone().sub(r.parent.pos)).multiplyScalar(r.orbW).add(r.parent.vel)),r.spinW&&(r.spinQ.setFromAxisAngle(r.spinAx,r.spinW*t%Cy),r.terrain?.setSpin(r.spinQ),r.u?.uSpin&&(r.u.uSpin.value=r.spinW*t%Cy)),r.sunDir&&r!==n&&r.sunDir.copy(n.pos).sub(r.pos).normalize(),e&&(r.prev.copy(r.pos),r.spinQp.copy(r.spinQ)));for(let e of[wv,bv])e?.db&&(e.d.copy(e.db).applyQuaternion(e.b.spinQ),e.pos&&e.pos.copy(e.b.pos).addScaledVector(e.d,e.b.R+(e.b.terrain?e.b.terrain.height(e.d):0)))}function Ey(){let e=K.ref;if(!e||!e.prev||sb||lg)return;let t=K.pos.distanceTo(e.pos)-e.R;if(e.spinW&&(K.state!==`fly`||(e.atm?t<e.atm.top:t<e.R*.05+5e3))){let t=e.spinQ.clone().multiply(e.spinQp.clone().invert());for(let n of[K.pos,yv.pos])n.sub(e.prev).applyQuaternion(t).add(e.pos);K.q.premultiply(t),H_.applyQuaternion(t),Qg.applyQuaternion(t),yv.fwd.applyQuaternion(t),fv.premultiply(t)}else{let t=e.pos.clone().sub(e.prev);K.pos.add(t),yv.pos.add(t)}}var Dy=H(),Oy=null;function ky(e,t){if(e===K.ref){t||Sy(`Already matched with ${e?e.name:ag.name}`);return}let n=K.ref?.vel||H(),r=e?.vel||H();K.ref=e,Dy.add(n.clone().sub(r));let i=e?e.name:ag.name;Dy.length()<.5?Dy.set(0,0,0):(Oy={name:i,dv:Dy.length(),E:0,t:0},C_(`${t?`Entering the frame of`:`Matching velocity with`} ${i}: Δv ${td(Oy.dv)}/s`),Sy(`Matching velocity with ${i}`))}function Ay(e,t){let n=Dy.length();if(!n||K.state!==`fly`||lg||sg||sb)return 0;let r=t||n<=Qy*600?Qy*.95:my,i=Wy?n:n*(1-Math.exp(-e*2))+.02;hy=Math.min(Math.max(hy,i/(r*e)),Math.max(_y,1));let a=Math.min(i,r*e*hy,n),o=zf(n)-zf(n-a);return Dy.setLength(n-a),Z.total+=o,G.spent=(G.spent||0)+o,Z.burn+=o,Z.idle=0,Cg&&(Cg.E+=o),Oy&&(Oy.E+=o,Oy.t+=e*hy),Dy.length()<.3&&(Dy.set(0,0,0),Oy&&=(C_(`Velocity matched with ${Oy.name}: Δv ${td(Oy.dv)}/s in ${nd(Oy.t)}, ${Vf(Oy.E,`J`).replace(/<[^>]+>/g,``)}`),Sy(`Velocity matched`),null)),a/(e*hy)*+(n>0)}var jy=null,My=null;function Ny(e){jy&&(!e||jy===e)?(jy=null,K_=null,C_(`Tracking off`),Sy(`Tracking off`)):e&&(jy=e,J=!1,C_(`Tracking `+e.name),Sy(`Tracking ${e.name}`))}var Py=null,Fy=e=>e*e*e*(e*(e*6-15)+10),Iy=null,Ly=()=>!!($&&$.tube&&!$.buck&&!$.lift&&$.g>.15&&tg===`flight`&&hv()&&!Sg);function Ry(){let e=W(`#lift`);e||(e=document.createElement(`div`),e.id=`lift`,document.body.append(e));let t=$,n=!!(t&&(t.lift||t.tube&&t.g>.15&&!t.buck));if(e.classList.toggle(`on`,n),!n)return;let r=t.lift?t.lift.to:Iy??t.deck,i=t.deck+`:`+r;e.dataset.k!==i&&(e.dataset.k=i,e.innerHTML=`<b>Lift</b>`+cm.map((e,n)=>`<div class="${n===t.deck?`cur`:``} ${n===r?`sel`:``}"><i>${n+1}</i>${e}</div>`).reverse().join(``))}function zy(e){let t=$,n=Math.abs(e-t.deck);t.lift={to:e,y0:t.p.y,y1:vm(e)+.42,t:0,T:.45+.34*Math.sqrt(n)},Ah.tone(220,.25,.08,`sine`,440)}function By(e,t){let n=e.lift;n.t+=t;let r=Math.min(1,n.t/n.T);e.p.set(um.x,n.y0+(n.y1-n.y0)*Fy(r),um.z),e.v.set(0,0,0),e.deck=ym(e.p.y+.3),r>=1&&(e.lift=null,Iy=null,C_(cm[e.deck]),Ah.tone(330,.2,.07,`sine`,330))}function Vy(e,t){let n=Math.max(1,e.distanceTo(K.pos)-t);return{x0:n,t:0,T:Math.min(12,2.5+.55*Math.log10(Math.max(n,1e3)/1e3))}}function Hy(e){let t=e.distanceTo(K.pos),n=e.clone().sub(K.pos).divideScalar(Math.max(t,1)),r=null;for(let e of og){if(e===q)continue;let i=e.kind===`blackhole`||e.kind===`quasar`?e.R*30:e.kind===`star`||e.kind===`pulsar`?e.R*2:(e.R+(e.atm?e.atm.top:0))*1.15,a=e.pos.clone().sub(K.pos),o=a.dot(n);if(o<=0||o>=t)continue;let s=n.clone().multiplyScalar(o).sub(a),c=s.length();c>i||(!r||o<r.t)&&(r={t:o,b:e,m:i,off:c>1?s.divideScalar(c):H(0,1,0).cross(n).normalize()})}return r?r.b.pos.clone().addScaledVector(r.off,r.m*1.8):null}function Uy(e,t,n){if(!Py||Py.target!==q){!q.star&&q!==K.ref&&(K.ref=q,Dy.set(0,0,0),Oy=null),K.drift.set(0,0,0);let e=null;if(Y&&Y!==q){let t=Y.R+(Y.atm?Y.atm.top*1.3:0)+2e4,n=K.pos.clone().sub(Y.pos);n.length()<t&&(e=Y.pos.clone().addScaledVector(n.normalize(),t))}Py={target:q,wp:e,climb:!!e,done:!1,leg:null},e||(Py.wp=Hy(t)),Py.leg=Vy(Py.wp||t,Py.wp?0:n)}let r=Py.wp||t,i=Py.wp?0:n,a=Py.leg;a.t+=e;let o=Math.min(1,a.t/a.T),s=Math.expm1(Math.log1p(a.x0)*(1-Fy(o))),c=Math.max(0,r.distanceTo(K.pos)-i),l=Math.min(c,s),u=K.pos.clone().sub(r);u.lengthSq()<1e-6&&u.copy(Qg).negate(),u.normalize();let d=r.clone().addScaledVector(u,i+l).sub(K.pos),f=d.length();hy=1,Dy.set(0,0,0),K.drift.set(0,0,0),f>1e-9?(H_.copy(d).divideScalar(f),K.w=f/Math.max(e,1e-4)):K.w=0,n_.lookAt(K.pos,Py.wp||t,H(0,1,0).applyQuaternion(K.q)),e_.setFromRotationMatrix(n_),K.q.slerp(e_,1-Math.exp(-e*4)),Qg.set(0,0,-1).applyQuaternion(K.q),o>=1&&(Py.wp?(Py.wp=Py.climb?Hy(t):null,Py.climb=!1,Py.leg=Vy(Py.wp||t,Py.wp?0:n)):(K.pos.add(d),K.w=0,H_.copy(Qg),Py.done=!0)),K.w,K.w}var Wy=!1,Gy=10,Ky={frozen:!1,calm:0,g:0},qy=()=>{G.leg={ship:G.shipT,crew:G.crewT,earthT:G.earthT}};function Jy(e){if(tg!==`flight`||Sg||cg)return;let t=sb?e/sb.slow:e;G.shipT+=t;let n=sb?1/0:Math.max(Z.a,tb.on?tb.hold:0)/9.80665;Ky.g=n,n>Gy?(Ky.calm=0,Ky.frozen||(Ky.frozen=!0,Sy(`Crew entering cryo sleep`),$&&!$.buck&&($.buck=!0,C_(`Strapped back into the capsule`)),C_(sb?`Crew frozen: the tides are deadly`:`Crew frozen in cryo sleep: ${Rf(n*9.80665)}`))):Ky.frozen&&!J&&(Ky.calm+=t)>5&&(Ky.frozen=!1,C_(`Crew thawed and awake`),Sy(`Crew awake`)),Ky.frozen||(G.crewT+=t,Cg&&(Cg.crew+=t))}var Yy=e=>{let t=new Date(e);return isNaN(t)?`beyond the calendar`:t.toLocaleString(`sv-SE`)},Xy=e=>e.replace(/<sup>(.*?)<\/sup>/g,(e,t)=>[...t].map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[`0123456789`.indexOf(e)]||(e===`−`?`⁻`:e)).join(``)),Zy=()=>{let e=G.earthT/3156e4;if(e<1e5)return Yy(G.epoch+G.earthT*1e3);let t=new Date(G.epoch).getFullYear()+e;return`year `+(t<0xe8d4a51000?Math.floor(t).toLocaleString(`en`):Xy(Bf(t)))},Qy=78.4532,$y=my,eb=If*$y,tb={a:0,hold:0,b:null,n:H(),on:!1,over:!1,E:0,P:0,acc:H()};function nb(e){let t=H(),n=null,r=0,i=0;tb.on=tb.over=!1,tb.P=0,tb.acc.set(0,0,0);for(let e of og){let t=Math.max(e.pos.distanceTo(K.pos),e.R);i+=2*py*(e.mass||=dp(e))/(t*Gu*Gu)}if(tb.dil=1/Math.sqrt(Math.max(1e-12,1-Math.min(i,.999999))),K.state!==`fly`&&K.state!==`descend`||sg||lg||sb){tb.a=0;return}for(let e of og){let i=e.pos.clone().sub(K.pos),a=i.length();if(a<e.R*.5)continue;let o=py*(e.mass||=dp(e))/(a*a);(e.kind===`blackhole`||e.kind===`quasar`)&&(o/=Math.sqrt(Math.max(1e-9,1-e.R/a))),t.addScaledVector(i,o/a),o>r&&(r=o,n=e)}let a=t.length();if(tb.a=a,tb.b=n,a<.05)return;tb.n.copy(t).divideScalar(a);let o=Math.min(a,$y);tb.hold=o,tb.on=!0,a>$y&&(tb.over=!0,K.drift.addScaledVector(tb.n,(a-$y)*e),K.drift.length()>299792458*.6&&K.drift.setLength(Gu*.6)),tb.P=If*o*Gu;let s=tb.P*e;tb.E+=s,Z.total+=s,G.spent=(G.spent||0)+s,Cg&&(Cg.E+=s);let c=Math.min(1.2,.1+Math.log10(1+o/8)/8);tb.acc.copy(tb.n).negate().applyQuaternion(K.q.clone().invert()).multiplyScalar(c)}var rb=null;function ib(){!tb.b||sb||lg||K.state!==`fly`&&K.state!==`descend`||(K.state===`descend`&&kv(),J=sg=!1,Mv=null,X=null,W_=!1,rb={b:tb.b},C_(`Escaping the gravity of ${tb.b.name}`),Ah.tone(70,1.5,.2,`sawtooth`,220))}function ab(){let e=rb,t=K.pos.clone().sub(e.b.pos).normalize();K_=t,q_=-1;let n=Qg.dot(t);return tb.a<$y*.06||e.b!==tb.b&&tb.a<$y*.1?(rb=null,K_=null,C_(`Out of the strong field`),null):n>.9?Math.max(K.w,4e7):Math.min(K.w,3e3)}function ob(e){let t=H();lg||sb||sg?ly.set(0,0,0):((K.state===`landed`||K.state===`walk`)&&Y?t.copy(xv(Y,K.pos)).multiplyScalar(-Y.g):(t.copy(cy).negate(),tb.on&&t.addScaledVector(tb.n,tb.hold)),ly.lerp(t,1-Math.exp(-e*5)))}var sb=null;function cb(e,t){Sy(`Event horizon crossed. There is no way back.`,!0),Mv=null;let n=K.pos.clone().sub(e.pos).divideScalar(t),r=-H_.dot(n);H_.clone().addScaledVector(n,H_.dot(n));let i=H_.clone().addScaledVector(n,r),a=H().crossVectors(n,i);a.lengthSq()<1e-8&&(a=H(0,1,0).applyQuaternion(K.q)),a.normalize();let o=Math.max(1,Math.min(40,yg)),s=Math.min(3,i.length()*Math.min(3,K.w/Gu));sb={b:e,s:{x:Math.min(.9999,t/e.R),E:o,L:s,phi:0},u0:n,ax:a,t:0,t0:0};let c=dh(e.R,sb.s.x,o,s);sb.slow=Math.max(1,40/c),sb.left=c,J=sg=!1,X=null,K_=null,G_=!0,J_=null,K.drift.set(0,0,0),K.w=0,mg.set(.5,.45,1),pg=.5,Ah.tone(48,4,.25,`sine`,24),Ah.chord(`blackhole`),S_(`Inside the event horizon`,`Every direction you can travel now leads inward. Space itself is falling.`),e.kind===`blackhole`&&ty(`blackhole`)}function lb(){let e=sb.b;if(sb=null,e.uFall&&(e.uFall.value=0),mg.set(1,1,1),pg=2.2,Ah.boom(.8,1800),e.kind===`quasar`&&G.got.length===7)return ry();let t=ng.near(c_(),30,2).map(e=>e[0]).filter(e=>e!==rg),n=t[Math.random()*Math.min(12,t.length)|0]||rg;J=!0,n!==rg&&l_(n),J=!1;let r=xh.marks[[12,3,9][Math.random()*3|0]];r.id!==ig.id&&(K.pos.set(0,0,0),p_(r));let i=ag.main,a=H().randomDirection();K.pos.copy(i.pos).addScaledVector(a,Math.max(i.R*30,vy(i)*1.5)),n_.lookAt(H(),a,H(0,1,.01)),K.q.setFromRotationMatrix(n_),Qg.set(0,0,-1).applyQuaternion(K.q),H_.copy(Qg),G_=!0,K.w=Gu*.2,K.thr=.5,K.drift.set(0,0,0),u_=!1,q=i,Th.reset(),S_(`Beyond the singularity`,`Known physics ends in there. You came out near ${ag.name}, in ${rg.name}.`),Yh()}function ub(e){let t=sb,n=t.b,r=K.pos.clone().sub(n.pos).normalize(),i=t.s,a=Q.ShiftLeft||Q.ShiftRight?1:Q.KeyW?.4:0;if(a&&hv()){i.E-=Qg.dot(r)*a*e*.22,i.E=Math.max(-40,Math.min(40,i.E));let n=H().crossVectors(r,Qg).dot(t.ax);i.L+=n*a*e*.12}let o=e/t.slow;if(t.t+=o,fh(i,n.R,o),t.left=dh(n.R,Math.max(i.x,1e-6),i.E,i.L),i.x<.012||t.left<1e-9)return lb();K.pos.copy(t.u0).applyAxisAngle(t.ax,i.phi).multiplyScalar(i.x*n.R).add(n.pos),n.uFall&&(n.uFall.value=1),yg=1,bg=0,Yu.uBeta.value=0,Yu.uLogG.value=0;let s=sh(n.R,i.x*n.R)/9.8;hg=Math.max(hg,Math.min(1.1,Math.max(0,Math.log10(s))*.07)),_h.u.uBend.value+=(.12-_h.u.uBend.value)*e*2}function db(e){hy=1,Wy=!1,Ty(),Ey();{let e=Math.exp(Math.min((G.earthT||0)*227e-20,40));Math.abs(Math.log(e/ng.a))>1e-6&&ng.setA(e)}K.inv-=e;let t=!sg&&!lg&&hv()&&tg===`flight`&&K.state===`fly`,n=0,r=0,i=0,a=ay();if(i_(),K.state===`fly`&&!sb&&!lg&&!sg&&!J){let e=null,t=1;for(let n of og)if(n.parent&&(n.kind===`rock`||n.kind===`gas`)){let r=n.pos.distanceTo(K.pos)/Math.max(gb(n)*3,n.R*6);r<t&&(t=r,e=n)}e!==My&&(My=e,e&&e!==K.ref&&ky(e,!0))}_y=Math.max(1,Math.max(vg,1)*.25/(Math.max(K.w,1)*e));let o=Y?.atm,s=Y?K.pos.distanceTo(Y.pos)-Y.R:0,c=o?Math.exp(-Math.max(s,0)/o.H):0,l=o&&s<o.top,u=t&&!$;u&&(q_>=0&&(q_+=e,q_>.25&&(K_=V_(!1))),Q.ArrowLeft&&(r=1),Q.ArrowRight&&(r=-1),Q.ArrowUp&&(n=1),Q.ArrowDown&&(n=-1),(n||r)&&(K_=null,J&&=!1),i=+!!Q.KeyA-!!Q.KeyD,Q.KeyW&&(K.thr=Math.min(1,K.thr+e*.7)),Q.KeyS&&(K.thr=Math.max(0,K.thr-e*.7))),W_&&!$&&(Q.ShiftLeft||Q.ShiftRight)&&(W_=!1);let d=null;rb&&(K.state!==`fly`||sg||lg)&&(rb=null),rb&&(d=ab());let f=u&&(Q.ShiftLeft||Q.ShiftRight),p=u&&Q.KeyX;if(p&&(K.thr=Math.max(0,K.thr-e*2),J=!1,X=null),u&&(Q.KeyS||Q.KeyW)&&!J&&(X=null),K.boostT=f?K.boostT+e:0,gg[0]){let e=Math.hypot(gg[0].s.x-dg.x,gg[0].s.y-dg.y,gg[0].s.z-dg.z)*Ku;e>94607304725808&&(vg=Math.min(vg,e))}let m=vg>.05*Ku,h=m?1+Math.max(0,K.boostT-4)**2*3:1,g=i_().length()-rg.R,_=Math.min(Math.max(400,g*.25)*Ku,Math.max(70,vg*.9+60)*h),v=l?290/(c*Math.min(1.6,o.press)+.012):1/0;_=Math.min(_,Math.max(v,60));let y=Math.min(Math.max(120,Math.min(2500,_g*.12))*K.thr,_),b=d!==null&&!!rb||X&&X.n>1&&!l&&(m||K.w>9460730472580800);X&&!J&&X.n!==1&&(y=b?X.w:Math.min(X.w,_)),f&&(y=_,X?.n<2&&(X=null)),p&&(y=0);let x=X?.n===0&&!f;if(x&&K.drift.multiplyScalar(Math.exp(-e*4)),J&&q&&t){$g.copy(q.star?s_(q.star,H()):q.pos);let t=$g.distanceTo(K.pos),i=q.star?q.star.isGal?q.star.G.R*1.9*Ku:.004*Ku:gb(q);if(n=r=0,Wy=!0,Uy(e,$g,i),Wy?Py?.done:t<i*1.04||K.w*e*hy>t-i){if(Py=null,!Wy&&t>i*1.04){let e=q.star?s_(q.star,H()):q.pos.clone(),t=e.clone().sub(K.pos).normalize();K.pos.copy(e).addScaledVector(t,-i)}K.w=Wy?0:Math.min(K.w,2e3),Z.eta=Lf(K.w),Z.skip=!0,dy=!0,J=!1,Yg.x=Yg.y=0,Yg.px=innerWidth/2,Yg.py=innerHeight/2,K.thr=.2,q.star?.isGal?(C_(`Arrived: `+q.name),Sy(`Arrived at ${q.name}`),!q.star&&q!==K.ref&&ky(q,!0),Cg&&(Cg.arrived=!0),X=null,S_(q.name,q.star.G.label),q=ag.main):q.star?(p_(q.star),S_(ag.name,W(`#place p`).textContent),J=!0):(C_(`Arrived: `+q.name),Sy(`Arrived at ${q.name}`),!q.star&&q!==K.ref&&ky(q,!0),Cg&&(Cg.arrived=!0),X={n:0,w:0,t:Ng[0][1]},K.thr=0,jy=q,C_(`Holding position ${td(Math.max(0,q.pos.distanceTo(K.pos)-q.R))} from ${q.name}, nose on target`))}}if(Mv&&(Mv.b!==Y||K.state!==`fly`||J||q_>=0||p||X||u&&(Q.ArrowLeft||Q.ArrowRight||Q.ArrowUp||Q.ArrowDown))&&(Mv=null),Mv){Mv.t+=e;let t=xv(Y,K.pos),a=Mv.short?330:Nv(Y),o=H(0,0,-1).applyQuaternion(K.q),s=o.clone().addScaledVector(t,-o.dot(t));s.lengthSq()<.001&&s.set(1,0,0).applyQuaternion(K.q),s.normalize();let c=s.clone(),l=_g<1500||Mv.short?1.5:1.3,u=s.multiplyScalar(Math.cos(l)).addScaledVector(t,Math.sin(l));n_.lookAt(H(),u,t),e_.setFromRotationMatrix(n_),K.q.slerp(e_,1-Math.exp(-e*1.6)),n=r=i=0,_g<140&&K.drift.addScaledVector(t,e*16),y=Mv.t<2?14:Mv.short?75:Math.min(v,Math.max(60,Math.min(_g*.9+80,(a-_g)*.8+30))),Mv.short&&_g>a?(Mv=null,kh.clr=null,K_=c.clone().addScaledVector(t,.1).normalize(),K.thr=.35):!Mv?.short&&Mv&&_g>a*.985&&(Mv=null,K.thr=.15,K.w=Math.min(K.w,U_),C_(`${td(_g)} above ${Y.name}`))}if(d!==null&&(y=d),(sg||lg||K.state!==`fly`)&&(y=0),t&&Y&&_g<Math.min(6e4,Y.R*.2)&&!i){let e=xv(Y,K.pos),t=H(1,0,0).applyQuaternion(K.q),n=H(0,0,-1).applyQuaternion(K.q);Math.abs(n.dot(e))<.9&&(i=-t.dot(e)*.9)}if(jy&&jy!==q&&(jy=null,K_=null),jy&&t&&!J&&q_<0){let e=Z_(jy);e.sub(K.pos),e.lengthSq()>1&&(K_=e.normalize())}if(t||(K_=null,q_=-1),K_&&!J){let t=H(0,0,-1).applyQuaternion(K.q),n=H().crossVectors(t,K_),i=n.length(),a=Math.atan2(i,t.dot(K_));if(a<.0015)q_<0&&(K_=null);else{i<1e-6?n.set(0,1,0).applyQuaternion(K.q):n.divideScalar(i);let t=Math.min(a,Math.min(a*3.2,1.2)*e);r=-Math.max(-1,Math.min(1,H(1,0,0).applyQuaternion(K.q).dot(K_)*2.5))*.999,K.q.premultiply(e_.setFromAxisAngle(n,t)).normalize()}}let S=r;K_&&(r=0);let C=!!K_||q_>=0||n!==0||r!==0;if(K.roll+=(S*.75-K.roll)*(1-Math.exp(-e*4)),t_.set(n*1.25*e,r*1.25*e,i*1.7*e),e_.setFromEuler(t_),K.q.multiply(e_).normalize(),Qg.set(0,0,-1).applyQuaternion(K.q),sb){ub(e),H_.copy(Qg),pb=a,Z.skip=!0,Z.last=0,dy=!0,sy.set(0,0,0),sy.z=-(Q.ShiftLeft||Q.ShiftRight?.9:Q.KeyW?.4:0),vb(e,0,!1,0,H()),Ab(e,H());return}let w=Mv?Math.min(1.4,Qy/Math.max(1,Math.abs(y-K.w))):y>K.w?f||J?1.1:1.6:p||x||X&&!f&&K.w>Math.max(X.w,120)*1.1?5.5:J||l?3:1.7;if(K.dEta=null,K.w>U_&&K.state===`fly`&&!sg&&!lg){let[e,t]=av(H_,Qg),n=t>.02||e<0||Math.atan2(t,e)*K.w/my>nv;G_&&n&&!Wy&&(C||J&&(t>.03||e<0))&&ov()}let T=K.w<=U_;K_&&q_<=.25&&av(Qg,K_)[1]>.12||K_&&q_<=.25&&Qg.dot(K_);let E=K_&&q_<=.25?K_:Qg;if(K.state!==`descend`&&!Wy&&(G_||T||!W_||p||x||K.state!==`fly`)){if(!G_&&!T&&!p&&!x&&K.state===`fly`){let[t,n]=av(H_,E),r=Math.atan2(n,t),i=my*e/Gu;if(J_&&!J){let[e,t]=av(J_.from,E);J_.goal=Math.min(J_.goal,iv(J_.w0,e,t))}let a=J_&&!J?J_.goal:rv(K.w,t,n);if(K.w>a*1.003+1){let t=Lf(K.w),n=Lf(a),r=Math.min((t-n)*(1-Math.exp(-e*3))+1e-12,i*_y);hy=Math.min(Math.max(hy,r/i),Math.max(_y,1)),K.w=Math.sinh(t-r)*Gu,K.dEta=r,J_&&(J_.swing=!1)}else if(r>1e-4){let t=Math.max(K.w,1);if(J_&&!J_.swing){J_.swing=!0;let e=zf(2*t*Math.sin(r/2));Z.total+=e,G.spent=(G.spent||0)+e,Z.burn+=e,Cg&&(Cg.E+=e)}let n=r*(1-Math.exp(-e*2.5));hy=Math.min(Math.max(hy,n*t/(my*e)),Math.max(_y,1));let i=Math.min(n,my*e*hy/t),a=H().crossVectors(H_,E);a.lengthSq()>1e-20&&H_.applyAxisAngle(a.normalize(),i),K.dEta=i*t/Gu}let[o,s]=av(H_,Qg);(J&&o>0&&s<.004||!C&&o>0&&s<.012&&(J||!J_||K.w<J_.goal*1.03))&&oy()}else if(T&&K.state===`fly`){G_||(oy(),y=Math.min(y,Math.max(K.w,Eg)));let t=H_.clone().multiplyScalar(K.w),n=1-Math.exp(-e*(y>U_?w:Math.max(w,l?3:2))),r=Qg.clone().multiplyScalar(y).sub(t).multiplyScalar(n);y<=U_&&!f&&!rb&&r.length()>Qy*e*hy&&r.setLength(Qy*e*hy),r.length()>my*e*hy&&r.setLength(my*e*hy),t.add(r),K.w=t.length(),K.w>1e-6?H_.copy(t).divideScalar(K.w):H_.copy(Qg),K.w>U_&&$_()}else{let t=Lf(K.w),n=Lf(Math.max(0,y)),r=my*e/Gu,i=Math.max(-r*_y,Math.min(r*_y,(n-t)*(1-Math.exp(-e*w))));if(hy=Math.min(Math.max(hy,Math.abs(i)/r),Math.max(_y,1)),K.w=Math.sinh(t+i)*Gu,G_){let[t,n]=av(H_,Qg),r=Math.atan2(n,t),i=my*e*hy/Math.max(K.w,1);if(r<=i||K.w<=U_)H_.copy(Qg);else{let e=H().crossVectors(H_,Qg);e.lengthSq()>1e-24&&H_.applyAxisAngle(e.normalize(),i)}}}}t&&!J&&!b&&G_&&!rb&&(K.w=Math.min(K.w,Math.max(_*1.4,120))),(K.w<.02||x&&K.w<.5)&&(K.w=0,H_.copy(Qg),x&&K.drift.length()<.5&&K.drift.set(0,0,0));let D=Dy.clone().normalize().negate(),O=Ay(e,l);fy(e*hy,l&&K.w>260&&!p&&y<K.w),Kg(e*hy),O>0&&(Z.a=Math.max(Z.a,O),cy.copy(D).multiplyScalar(O),sy.copy(D.applyQuaternion(K.q.clone().invert())).multiplyScalar(Math.min(1,.08+Math.log10(1+O/8)/8)));let k=K.w/Gu;yg=Math.sqrt(1+k*k),bg=k/yg,G.years+=e*hy*yg*(tb.dil||1)/3156e4,G.earthT+=e*hy*yg*(tb.dil||1),xg+=e/3156e4;let ee=1+(yg-1)/(1+(yg-1)/2),te=Math.sqrt(Math.max(0,1-1/(ee*ee)));Yu.uBeta.value+=(te-Yu.uBeta.value)*(1-Math.exp(-e*6)),Yu.uBeta.value<.001&&te<.001&&(Yu.uBeta.value=0),Yu.uBDir.value.copy(H_),Yu.uLogG.value=Math.log(yg);for(let e of og)if(e.uFall){let t=K.pos.distanceTo(e.pos)/e.R,n=Math.max(0,Math.min(1,(2.2-t)/1.17)),r=n*n*(3-2*n);e.uFall.value=r,r>0&&(Yu.uBeta.value*=1-r)}nb(e*hy),K.drift.multiplyScalar(Math.exp(-e*(tb.over?.05:.9)));let A=H_.clone().multiplyScalar(K.w*e*hy).addScaledVector(K.drift,e*hy).addScaledVector(Dy,e*hy);if(K.state===`fly`&&!sg){let e=A.length();if(e>1){let t=A.clone().divideScalar(e);for(let n of og){let r=n.pos.clone().sub(K.pos),i=r.dot(t);if(i<0||i>e+n.R)continue;let a=r.clone().addScaledVector(t,-i).length();if(a<n.R&&r.length()>n.R){let t=i-Math.sqrt(n.R*n.R-a*a);t<e&&A.setLength(Math.max(0,t+(n.kind===`blackhole`||n.kind===`quasar`?n.R*.002:-n.R*.001)))}}}K.pos.add(A)}else A.set(0,0,0);let ne=l&&!Wy?Math.min(1,c*(K.w/1500)**2*1.1):0;Ih.material.uniforms.uI.value+=(ne-Ih.material.uniforms.uI.value)*e*3,Ih.visible=Ih.material.uniforms.uI.value>.01,ne>.3&&(hg=Math.max(hg,ne*.35));let j=0,re=0;fb=null;for(let t of og){let n=t.pos.clone().sub(K.pos),r=n.length();if(t.kind===`star`&&(j=Math.max(j,1-(r/t.R-1.1)/.8),r<t.R*1.01?ny(`Nothing that touches a star stays itself.`):r<t.R*1.9&&!lg&&(qv+=e,qv>4&&ty(`star`))),t.kind===`pulsar`&&(r<t.R*1.05&&ny(`A teaspoon of it weighs a mountain.`),t.beam&&r<t.R*4e3)){let e=Math.abs(n.dot(t.beam)/r)>Math.cos(.16);e&&!Kv&&(mg.set(.4,.8,1),pg=.3,Ah.tone(90,.7,.3,`sine`,45),r<t.R*4e3&&++Gv>=3&&ty(`pulsar`)),Kv=e}if(t.kind===`blackhole`||t.kind===`quasar`){if(re=Math.max(re,Math.max(0,1-(r/t.R-1)/8)),r<t.R*60&&(fb={b:t,d:r}),r<t.R*9&&t.kind===`blackhole`&&(Jv+=e,Jv>5&&ty(`blackhole`)),t.jet){let r=-n.dot(t.jet),i=n.clone().addScaledVector(t.jet,r).length(),a=Math.abs(r)/t.jetLen;a>.02&&a<1&&i<t.R*(.5+3.9*a)&&(hg=Math.max(hg,.3),K.drift.addScaledVector(t.jet,Math.sign(r)*t.R*.5*e),Yv+=e,Yv>2&&ty(`quasar`))}if(r<t.R&&!lg&&K.state===`fly`&&!cg)return cb(t,r)}}if(Y?.terrain&&K.state===`fly`&&!lg&&_g<2e4&&A.length()>3){let e=K.pos.clone().sub(A);for(let t=1;t<=6;t++){let n=e.clone().addScaledVector(A,t/6),r=xv(Y,n);if(n.distanceTo(Y.pos)<Y.R+Y.terrain.height(r)+15*Cv){K.pos.copy(n);break}}}if(Y&&K.state===`fly`&&!lg){let e=xv(Y,K.pos);if(Y.kind===`gas`){let e=Y.R-K.pos.distanceTo(Y.pos);e>Y.atm.H*.5&&(hg=Math.max(hg,.4),e>Y.atm.H*3&&ny(`The pressure took you, gently, then completely.`))}else if(Y.terrain){let t=Y.R+Y.terrain.height(e)+(Mv||Cb>0?24:15)*Cv;if(K.pos.distanceTo(Y.pos)<t){let n=H_.dot(e)*K.w+K.drift.dot(e);K.pos.copy(Y.pos).addScaledVector(e,t),n<-140&&K.inv<0?ny(`You hit the ground at `+td(-n)+`/s.`):n<-45?(K.hull-=Math.min(45,-n*.12),Ah.boom(.4),hg=1,K.w*=.35,K.drift.addScaledVector(e,18+-n*.1),K.hull<=0&&K.inv<0&&ny(`The ground was patient.`)):K.drift.addScaledVector(e,Math.max(0,3-K.drift.dot(e)))}}}if(Y?.terrain&&!lg&&_g<400&&(K.state===`fly`||K.state===`descend`)){let e=K.pos.clone().sub(Y.pos),t=kh.collide(e,13,2);if(t){K.pos.copy(e).add(Y.pos);let n=H_.dot(t)*K.w+K.drift.dot(t);n<-8?(K.hull-=Math.min(40,-n*.12),Ah.boom(.4),hg=Math.max(hg,.8),K.w*=.45,K.drift.addScaledVector(t,8-n*.25),K.hull<=0&&K.inv<0&&ny(`It was there first.`)):K.drift.addScaledVector(t,2)}}if(K.state===`descend`&&(bv.b!==Y&&!bv.b.terrain||q_>=0||Q.KeyX&&!$?kv(`Landing cancelled`):Av(e)),K.hull<100&&(K.hull=Math.min(100,K.hull+e*4)),_h.u.uHeat.value+=(Math.max(0,Math.min(1,j))*.5-_h.u.uHeat.value)*e*3,_h.u.uBend.value+=(Math.min(1,re)*.5-_h.u.uBend.value)*e*3,(Xv-=e)<0){if(Xv=.2,K.state===`fly`){let e=c_();hb=ng.nearest(e,24);let t=ng.near(e,1)[0];t[0]!==rg&&(K.w<0xa41e154cb55d78000||q?.star&&q.star.G===t[0])&&t[1]/t[0].R<dg.length()/rg.R*.8&&l_(t[0]),W(`#place`).classList.toggle(`void`,dg.length()>rg.R*1.5),dg.length()>rg.R*1.5?(W(`#place h2`).textContent=`Intergalactic space`,W(`#place p`).textContent=`${td(dg.length()*Ku)} from ${rg.name}`,mb=!0):mb&&(mb=!1,W(`#place h2`).textContent=ag.name,W(`#place p`).textContent=`${xd(ig)}, ${og.length-1} known bodies, ${rg.name}`)}let e=xh.nearest(i_(),14);if(gg=e.map(([e,t])=>({name:Sd(e),d:t*Ku-bd(e),s:e})),e[0]&&e[0][0].id!==ig.id&&K.state===`fly`){let t=K.pos.length()/Ku;e[0][1]<t*.6&&t>.05&&K.w<(J?8:1500)*9460730472580800&&p_(e[0][0])}for(let e of Sh.nebs||[])Math.hypot(e.x-dg.x,e.y-dg.y,e.z-dg.z)<e.R*.75&&K.w<0xd21206c8963a300&&ty(`nebula`)}mb&&(a.length=0);{let e=c_();for(let[t]of hb){let n=Math.hypot(t.pos[0]-e.x,t.pos[1]-e.y,t.pos[2]-e.z);(t!==rg||mb)&&a.push({name:t.name,d:Math.max(0,n-t.R)*Ku,g:t})}}a.push(...gg.filter(e=>e.s.id!==ig.id).map(e=>({name:e.name,d:e.d,s:e.s}))),a.sort((e,t)=>e.d-t.d),pb=a,vb(e,c,l,s,A),Ab(e,A)}var fb=null,pb=[],mb=!1,hb=[],gb=e=>Math.max(vy(e),_b(e)),_b=e=>e.type===`asteroid`?e.R*2.2+120:e.kind===`rock`?e.R*1.35+(e.atm?e.atm.top:0)+300:e.kind===`gas`?e.R*(e.ring?3:1.9):e.kind===`star`?e.R*3.2:e.kind===`pulsar`?e.R*60:e.R*18;function vb(e,t,n,r,i){let a=Y,o=`clear`,s=0,c=K.state===`walk`?yv.pos:K.pos;if(a&&n&&a.weather.length&&r<a.atm.cloudH*1.2+500&&a.kind===`rock`){let e=xv(a,c),t=$d(e.x*7+Bu.value*.004,e.y*7,e.z*7+Bu.value*.003,5)+.12;o=a.weather[Math.min(a.weather.length-1,Math.floor(($d(e.x*3,e.y*3,e.z*3,9)*.7+.5)*a.weather.length))]||a.weather[0],s=Math.max(0,Math.min(1,(t+.25)*2.2))*Math.max(0,Math.min(1,(a.atm.cloudH*1.2+500-r)/1500)),o===`clear`&&(s=0)}o===$v.k?$v.f+=(s-$v.f)*e*.8:($v.f-=e*.8,$v.f<=0&&($v.k=o,$v.f=0));let l=Math.max(0,$v.f),u=$v.k,d=Oh.u,f={rain:[34,.022,[.6,.7,.85],.4,9e-5,0],storm:[44,.026,[.6,.68,.8],.55,16e-5,0],snow:[3.5,.03,[1,1,1],.9,18e-5,1.2],blizzard:[16,.016,[1,1,1],.9,9e-4,1.5],dust:[22,.02,[.8,.55,.32],.5,45e-5,.8],ash:[2.5,.03,[.5,.42,.4],.8,12e-5,1.2],acid:[26,.022,[.7,.8,.25],.5,2e-4,0],mist:[0,0,[1,1,1],0,3e-4,0],diamond:[1.2,.04,[.8,.95,1],1,3e-5,1.5]}[u],p=0,m=0;if(f&&l>.01&&a?.terrain&&a.atm){let t=xv(a,c),n=H().crossVectors(t,Math.abs(t.y)<.9?H(0,1,0):H(1,0,0)).normalize(),r=u===`dust`||u===`blizzard`?1.4:.25;d.uVel.value.copy(t).multiplyScalar(-f[0]*(r>1?.15:1)).addScaledVector(n,f[0]*r),d.uLen.value=f[1],d.uCol.value.set(...f[2]);let i=Math.max(.05,Math.min(1,t.dot(a.sunDir)*2+.5));d.uCol.value.multiplyScalar(.25+.75*i),(u===`lava`||u===`ash`)&&d.uCol.value.addScalar(.02),d.uInt.value=l*f[3],d.uSway.value=f[5];let o=d.uVel.value;d.uCam.value.x=((d.uCam.value.x+Db.x-o.x*e)%70+70)%70,d.uCam.value.y=((d.uCam.value.y+Db.y-o.y*e)%70+70)%70,d.uCam.value.z=((d.uCam.value.z+Db.z-o.z*e)%70+70)%70,Oh.mesh.visible=f[0]>0&&K.w<400,d.uMin.value=$?7:1,p=f[4]*l,u===`storm`&&(ey-=e,ey<-2-Math.random()*9&&(ey=.35,setTimeout(()=>Ah.boom(.5,260),500+Math.random()*1500)),ey>0&&(m=Math.random()*ey*4));let s=a.atm.tau,h=Math.max(s.x,s.y,s.z);Eb.copy(u===`dust`||u===`ash`||u===`acid`?H(...f[2]).multiplyScalar(.5):H(.5,.52,.55).multiplyScalar(.7).addScaledVector(s,.3/h)).multiply(a.sunCol).multiplyScalar(i*.75)}else Oh.mesh.visible=!1;let h=a?.terrain?a.terrain.probe(gh,e):0;if(Sb=h,h>.01&&a?.atm){let e=xv(a,c).dot(a.sunDir),t=Math.max(.03,Math.min(1,e*2.2+.35)),n=a.atm.cloudC,r=h/(h+.25);p+=h*.02,Eb.lerp(H(n.x*a.sunCol.x,n.y*a.sunCol.y,n.z*a.sunCol.z).multiplyScalar(.62*t),r)}for(let t of og){let n=t.terrain?.u||t.u;if(n){if(n.uFog.value=t===a?p:0,n.uCov&&t.atm&&t.terrain){let r=t===a&&[`rain`,`storm`,`snow`,`blizzard`,`acid`].includes(u)?l:0,i=t.atm.cloud+(1.05-t.atm.cloud)*Math.min(1,r*1.3)*(t.atm.cloud>.02);n.uCov.value+=(i-n.uCov.value)*Math.min(1,e*.6)}if(n.uFogC.value.copy(Eb),n.uFlash.value=t===a?m:0,t.kind===`gas`&&t===a){let e=Math.max(0,1-r/(t.atm.H*1.2));n.uFog.value=e>0?e*e*.0012:0,n.uFogC.value.copy(t.pal[0]).multiplyScalar(.5*Math.max(.05,xv(t,K.pos).dot(t.sunDir)))}}}}var yb=``,bb=0,xb=0,Sb=0,Cb=0,wb=0,Tb=H(),Eb=H(),Db=H(),Ob=H(),kb=new _t;function Ab(e,t){if(wh.group.quaternion.copy(K.q).multiply(e_.setFromEuler(t_.set(0,0,K.state===`fly`?K.roll:0))),K.state===`walk`){let t=Y,n=xv(t,yv.pos);yv.fwd.addScaledVector(n,-yv.fwd.dot(n)).normalize();let r=yv.fwd.clone().applyAxisAngle(n,yv.yaw),i=H().crossVectors(r,n);document.pointerLockElement||(yv.yaw-=Yg.x*Math.abs(Yg.x)*e*1.8,yv.pitch=Math.max(-1.4,Math.min(1.4,-Yg.y*1.1)));let a=(Q.ShiftLeft?16:5.5)*e;hv()&&((Q.KeyW||Q.ArrowUp)&&yv.pos.addScaledVector(r,a),(Q.KeyS||Q.ArrowDown)&&yv.pos.addScaledVector(r,-a),Q.KeyA&&yv.pos.addScaledVector(i,-a),Q.KeyD&&yv.pos.addScaledVector(i,a),Q.Space&&(yv.vy+=(Math.max(t.g,1)+7)*e));let o=xv(t,yv.pos);yv.vy=Math.max(-40,Math.min(25,yv.vy-Math.max(t.g,.6)*e)),yv.pos.addScaledVector(o,yv.vy*e);{let e=yv.pos.clone().sub(t.pos).addScaledVector(o,-.9);kh.collide(e,.4,.04)&&yv.pos.copy(e).addScaledVector(o,.9).add(t.pos)}let s=t.R+t.terrain.height(o)+1.75,c=yv.pos.distanceTo(t.pos);(c<s||c<s+.35&&yv.vy<=0)&&(yv.pos.copy(t.pos).addScaledVector(o,s),yv.vy=0);let l=r.clone().multiplyScalar(Math.cos(yv.pitch)).addScaledVector(o,Math.sin(yv.pitch));n_.lookAt(H(),l,o),vh.quaternion.setFromRotationMatrix(n_),r_.copy(yv.pos)}else if($){let t=$,n=wh.interior,r=hv()&&!Ky.frozen;t_.set(0,0,K.state===`fly`?K.roll:0),e_.setFromEuler(t_),kb.copy(K.q).multiply(e_),document.pointerLockElement||(t.mx+=Yg.x*Math.abs(Yg.x)*e*900,t.my+=Yg.y*Math.abs(Yg.y)*e*500);let i=ly.clone().applyQuaternion(kb.clone().invert()),a=H(i.x,-i.z,i.y);a.length()>98&&a.setLength(98);let o=t.deck,s=r&&!t.lift,c=t.tube&&t.g>.15;Tm(n,t,a,{f:s?(Q.KeyW||Q.ArrowUp?1:0)-(Q.KeyS||Q.ArrowDown?1:0):0,r:s?(Q.KeyD||Q.ArrowRight?1:0)-(Q.KeyA||Q.ArrowLeft?1:0):0,u:r&&!c?+!!Q.Space-!!Q.KeyX:0,roll:r?+!!Q.KeyQ-!!Q.KeyR:0,run:Q.ShiftLeft,dyaw:-t.mx*.0022,dpitch:-t.my*.0022},e),t.mx=t.my=0,t.lift?By(t,e):t.deck!==o&&!t.buck&&C_(cm[t.deck]),!t.tube&&!t.lift&&(Iy=null),Ry(),t.spot=n.spots.find(e=>e.deck===t.deck&&Math.hypot(t.p.x-e.x,t.p.z-e.z)<e.r)||null,t.g=a.length();let l=t.q.clone().multiply(new _t().setFromAxisAngle(H(1,0,0),t.pitch)),u=t.p.clone().addScaledVector(H(0,1,0).applyQuaternion(t.q),t.buck?.45:.7);n.u.uEye.value.copy(u);let d=(Y?Y.sunDir:ag.main.pos.clone().sub(K.pos).normalize()).clone().applyQuaternion(K.q.clone().invert());if(n.u.uSunD.value.set(d.x,-d.z,d.y),n.u.uSunC.value.set(ag.main.color.r,ag.main.color.g,ag.main.color.b),n.u.uAlarm.value=+!!sb,n.update(e,xb,t.q),n.pod.visible=!t.buck,n.gimA.visible=!0,(n.tt-=e)<0){n.tt=.25;let[e,t]=jb(K.w);n.text([K.state===`landed`?`Landed on ${Y?.name}`:`${e} ${t}`,X?`Gear ${Mg(X.n)}, ${X.t}`:J?`Autopilot`:`Manual`,`Waypoint: ${q?.name||`none`}`,`Felt gravity ${Rf(a.length())}`,`Energy spent: ${Vf(G.spent||0,`J`).replace(/<sup>/g,`^`).replace(/<[^>]+>/g,``)}`])}vh.quaternion.copy(kb).multiply(new _t().setFromEuler(new Qt(-Math.PI/2,0,0))).multiply(l),$g.set(u.x,u.z,-u.y).applyQuaternion(kb),r_.copy(K.pos).add($g),Tb.copy($g).negate()}else if(sg&&q&&!q.star){if(!Wv){let e=q.sunDir&&q.sunDir.lengthSq(),t=K.pos.clone().sub(q.pos);Wv={a:e?Math.atan2(q.sunDir.x,q.sunDir.z)+.8:Math.atan2(t.x,t.z),p:0}}Wv.a+=e*.05,Wv.p+=e*.1;let t=q.kind===`rock`?q.R*2.6:gb(q)*1.15;r_.set(Math.sin(Wv.a)*t,t*(.16+.12*Math.sin(Wv.p)),Math.cos(Wv.a)*t).add(q.pos),n_.lookAt(r_,q.pos,H(0,1,0)),vh.quaternion.setFromRotationMatrix(n_),K.w=0,K.pos.copy(r_),K.q.copy(vh.quaternion)}else{let t=Y&&(K.state===`landed`||K.state===`descend`&&bv&&(bv.phase===`down`||Qg.dot(xv(Y,K.pos))>.55)||Mv&&_g<420);if(t){let e=xv(Y,K.pos),t=(bv?.h||H(1,0,0).applyQuaternion(K.q)).clone();t.addScaledVector(e,-t.dot(e)),t.lengthSq()<.01&&t.set(1,0,0).applyQuaternion(K.q).addScaledVector(e,-e.x),t.normalize().addScaledVector(e,K.state===`landed`?-.02:-.12),n_.lookAt(H(),t,e),kb.setFromRotationMatrix(n_)}else kb.copy(K.q);if(fv.slerp(kb,1-Math.exp(-e*5.5)),dv.on||(dv.yaw=Math.atan2(Math.sin(dv.yaw),Math.cos(dv.yaw))*Math.exp(-e*4),dv.pitch*=Math.exp(-e*4)),dv.q.setFromEuler(t_.set(dv.pitch,dv.yaw,0,`YXZ`)),t_.order=`XYZ`,vh.quaternion.copy(fv).multiply(dv.q),$g.set(0,t?1.2:3.4,t?15:19).multiplyScalar(13).applyQuaternion(vh.quaternion),r_.copy(K.pos).add($g),Tb.copy($g).negate(),Y?.terrain&&_g<400){let e=xv(Y,r_),t=Y.R+Y.terrain.height(e)+1.2,n=r_.distanceTo(Y.pos);n<t&&(r_.addScaledVector(e,t-n),Tb.addScaledVector(e,n-t))}}(K.state===`walk`||sg&&!$)&&Tb.copy(K.pos).sub(r_),Db.copy(r_).sub(Ob),Ob.copy(r_),K.pos.length()>0x5af3107a4000&&Db.copy(t),Db.length()>1e5&&Db.setLength(60),wh.group.visible=!lg&&(!sg||!!$),wh.group.position.copy(Tb);{let t=(K.state===`fly`||K.state===`descend`)&&!sg&&!lg,n=t&&!sb?sy.length():0;Cb>0&&(sy.z=Math.min(sy.z,-.95)),Cb=Math.max(0,Cb-e),xb=Math.max(n,tb.acc.length()*.8,0);let r=sy.clone().add(tb.acc);wh.animate(e,{acc:r,bank:t?K.roll:0,state:K.state,alt:Y?.terrain?_g:1e9,w:K.w,rel:sb?1:Math.min(1,Math.max(0,(yg-1.05)/1.5)),lift:0,final:K.state===`descend`&&bv&&(bv.phase===`down`||Qg.dot(xv(bv.b,K.pos))>.7)&&_g<900||Mv&&_g<160,g:ev(K.w)}),wb+=(Math.max(0,-sy.z)-wb)*Math.min(1,e*3),n>.55&&(hg=Math.max(hg,n*.22));let i=Y?.terrain&&_g<240&&Qg.dot(xv(Y,K.pos))>.6?Math.min(1.3,Math.max(0,-sy.z)*1.8)*(1-Math.max(0,_g-34)/136):0;if(Mh.mesh.scale.setScalar(4.68),Mh.u.uI.value+=(i-Mh.u.uI.value)*Math.min(1,e*4),Mh.mesh.visible=Mh.u.uI.value>.01&&!lg,Mh.mesh.visible){let e=xv(Y,K.pos),t=Math.max(.06,Math.min(1,e.dot(Y.sunDir)*1.6+.3)),n=Y.P.sea&&Y.terrain.raw(e)<0;Mh.u.uC.value.copy(n?H(.85,.9,.95):Y.B?Y.B[0].clone().lerp(H(.6,.6,.6),.4):Y.pal[0]).multiplyScalar(t),Mh.mesh.position.copy(wh.group.position).addScaledVector(e,-Math.max(0,_g-.4)),Mh.mesh.quaternion.setFromUnitVectors(H(0,1,0),e)}}hg>.01&&(wh.group.position.add(H().randomDirection().multiplyScalar(hg*.9)),hg*=Math.exp(-e*4)),wh.group.updateMatrixWorld(),Th.mesh.visible=K.state===`fly`&&!sg&&K.w<900&&K.w>3&&K.pos.length()<0x5af3107a4000,Th.mesh.visible?Th.update(wh,r_,t,e):Th.reset();let n=Eh.u.uCam.value;n.set(((n.x+Db.x)%260+260)%260,((n.y+Db.y)%260+260)%260,((n.z+Db.z)%260+260)%260),Eh.u.uVel.value.copy(H_).multiplyScalar(Math.min(K.w,3e3)),Eh.mesh.visible=K.state===`fly`&&!sg&&K.w>1,_h.u.uSpeed.value=wb*.9,Math.abs(vh.fov-64)>.05&&(vh.fov+=(64-vh.fov)*Math.min(1,e*3),vh.updateProjectionMatrix()),vh.position.set(0,0,0),vh.updateMatrixWorld(),Yu.uFwd.value.set(0,0,-1).applyQuaternion(vh.quaternion),Y||ag.main;let r=Y?Y.sunDir:ag.main.pos.clone().sub(K.pos).normalize();Ph.position.copy(r);let i=3,a=Y&&xv(Y,K.pos);if(Y){let e=a.dot(r),t=Y.atm,n=Math.max(0,K.pos.distanceTo(Y.pos)-Y.R),o=t?Math.exp(-n/t.H):0,s=Math.sqrt(2*n/Y.R),c=Math.max(0,Math.min(1,(e+s+.05)/.1)),l=o/(Math.max(0,e)+.04);if(Ph.color.setRGB(Y.sunCol.x*(t?Math.exp(-t.tau.x*l):1),Y.sunCol.y*(t?Math.exp(-t.tau.y*l):1),Y.sunCol.z*(t?Math.exp(-t.tau.z*l):1)),i*=c,Fh.intensity=.12+(t?o*Math.max(0,e+.2)*1.6:0),Fh.position.copy(a),t){let e=Math.max(t.tau.x,t.tau.y,t.tau.z);Fh.color.setRGB(.5+.5*t.tau.x/e,.5+.5*t.tau.y/e,.5+.5*t.tau.z/e)}}else Ph.color.copy(ag.main.color).lerp(new z(`#fff`),.5),Fh.intensity=.15,K.pos.length()>2991957414e5&&(i=.6);Ph.intensity=i;let o=innerHeight*gh.getPixelRatio()*_h.scale/(2*Math.tan(vh.fov*Math.PI/360)),s=Yu.uBeta.value>.001?-2:Math.atan(Math.tan(vh.fov*Math.PI/360)*Math.hypot(1,vh.aspect))+.03;for(let e of og)if(e.group){if(e.terrain){e.terrain.update(r_.clone().sub(e.pos),Yu.uFwd.value,o,s);let t=e.terrain.u;t.uLampI.value=+(e===Y&&_g<300),t.uLamp.value.copy(wh.group.position)}else e.sync(r_)}df(),(kh.fogC||=new z).setRGB(Eb.x,Eb.y,Eb.z),kh.fogK=Sb*.02,kh.update(Y?r_.clone().sub(Y.pos):H(1,0,0),Y,K.state===`fly`?_g:Math.min(_g,100),K.w);let c=Y&&Y.terrain&&_g<6e3&&Yu.uBeta.value<.001;Nh.update(gh,bh,Y?Y.sunDir:H(0,1,0),Y?r_.clone().sub(Y.pos):H(),c&&xv(Y,K.pos).dot(Y.sunDir)>-.05);let l=0,u=Rh.attributes.position.array,d=Rh.attributes.color.array,f=Rh.attributes.ps.array,p=(e,t,n,r)=>{l>=Lh||(u[l*3]=e.x,u[l*3+1]=e.y,u[l*3+2]=e.z,d[l*3]=t.r*r,d[l*3+1]=t.g*r,d[l*3+2]=t.b*r,f[l++]=n)};for(let e of og){let t=e.pos.clone().sub(r_),n=t.length();if(e.kind===`star`||e.kind===`pulsar`||e.kind===`quasar`||e.kind===`blackhole`){let r=n/Ku;if(r>.03||e!==ag.main&&r>.03)continue;let i=e.R/n;if(i>.02)continue;let a=Math.min(1,(.03-r)/.015)*Math.min(1,(.02-i)/.012),o=e.kind===`blackhole`?5:Math.min(110,12+(i*3e3)**.6*16);p(t,e.color,o,Math.max(0,a)*(e.kind===`blackhole`?.5:2))}else{let r=e.R/n;if(r>.0022)continue;let i=Math.min(1.1,(r*2200)**.45)*(r>.0014?.5:1)*(e.swarm?.5:1);if(i<.045)continue;let a=e.pal[2];p(t.multiplyScalar(.9999),{r:.25+a.x,g:.25+a.y,b:.25+a.z},3+i*2.6,i*.9)}}for(let e of[`position`,`color`,`ps`])Rh.attributes[e].needsUpdate=!0;Rh.setDrawRange(0,l),zh.material.uniforms.uPx.value=h_(),Ch.update(ng,c_(),1/o,Sh.u.uVol.value),xh.update(dg,K.w/Ku,h_()),Sh.update(xh,dg,e),Sh.done&&(Qv-=e)<0&&K.w<94607304725808&&(Sh.done=!1,Qv=4,g_())}function jb(e){if(bg>.01){if(yg<1.6)return[bg.toFixed(4),`c`];let e=-Math.log10(1/(yg*yg)/(1+bg));return[e<5?bg.toFixed(Math.min(7,Math.ceil(e)+1)):`1 − 10⁻${[...String(Math.floor(e+.03))].map(e=>`⁰¹²³⁴⁵⁶⁷⁸⁹`[e]).join(``)}`,`c`]}return e<1e3?[e.toFixed(0),`m/s`]:e<1e6?[(e/1e3).toFixed(e<1e4?2:1),`km/s`]:[Math.round(e/1e3).toLocaleString(`en`),`km/s`]}var Mb=e=>e<100?e.toFixed(2):e<1e5?Math.round(e).toLocaleString(`en`):Bf(e);function Nb(e){B_();let t=W(`#aim`);t.style.transform=`translate(${Yg.px||innerWidth/2}px,${Yg.py||innerHeight/2}px)`,t.style.opacity=$||dv.on||sg||K.state!==`fly`?0:1,W(`#reticle`).style.opacity=$||sg||K.state!==`fly`||Math.abs(dv.yaw)+Math.abs(dv.pitch)>.03?0:1,(Qh-=e)<0&&(Qh=.08,Zh=cv()),Bg(e);{let e=W(`#turn`),t=``;if(K.state===`fly`&&!$&&!J&&!sg&&K.w>U_){let e=q_>.25?Qg:K_||V_(!0),[n,r]=av(H_,e),i=Math.atan2(r,n);if(i>.002){let a=ev(J_&&!G_?Math.min(J_.goal,iv(J_.w0,...av(J_.from,e))):iv(K.w,n,r));t=`${(i*57.2958).toFixed(+(i<.17))}° → ${a<1.95?`cruise`:Mg(Math.floor(a+.05))}`}}e.textContent!==t&&(e.textContent=t),e.style.transform=`translate(${(Yg.px||innerWidth/2)+14}px,${(Yg.py||innerHeight/2)-24}px)`,e.style.opacity=q_>=0||K_||!G_?1:.55}if((Zv-=e)>0)return;Zv=.1;let[n,r]=jb(K.w);W(`#speed b`).textContent=`${n} ${r}`,W(`#speed em`).textContent=`relative to ${K.ref?K.ref.name:ag.name}`,W(`#speed span`).textContent=K.state===`landed`?`Landed`:K.state===`walk`?`On foot`:K.state===`descend`?`Landing`:J?`Gliding`:sg?`Gazing`:K.boostT?`Boost`:X&&X.n!==1?`Gear ${Mg(X.n)}`:`Throttle ${Math.round(K.thr*100)}%`,J&&X&&(W(`#speed span`).textContent=`Gliding, gear ${Mg(X.n)}`);{let e=W(`#clocks`),t=Ky.frozen;{let e=G.origin,t=c_(),n=W(`#fromstart`),r=e?`${td(Math.hypot(t.x-e[0],t.y-e[1],t.z-e[2])*Ku)} from where you started`:``;n.textContent!==r&&(n.textContent=r)}e.classList.toggle(`fz`,t);let n=G.leg||{ship:0,crew:0,earth:0},r=Cg?`this journey`:K.state===`landed`||K.state===`walk`?`last flight`:`since takeoff`;e.innerHTML=(gy>1.5?`<div class="warp"><span>Time warp</span><b>× ${gy<1e4?Math.round(gy).toLocaleString(`en`):Xy(Bf(gy))}</b><em>engines at 10⁵ g</em></div>`:``)+`<div class="crew"><span>${t?`❄ Crew, frozen`:`Crew`}</span><b>${Yy(G.epoch+G.crewT*1e3)}</b><em>${t?(Ky.g===1/0?`tides`:Rf(Ky.g*9.80665))+`, `:``}${r} ${nd(G.crewT-n.crew)}</em></div><div><span>Ship</span><b>${Yy(G.epoch+G.shipT*1e3)}</b><em>${r} ${nd(G.shipT-n.ship)}</em></div><div><span>Earth</span><b>${sb?`cut off by the horizon`:Zy()}</b><em>${r} ${nd(G.earthT-(n.earthT??G.earthT))}</em></div>`}W(`#rel`).innerHTML=yg>1.0005?`γ ${Mb(yg)}<br>Lengths ahead × ${yg<1e3?(1/yg).toFixed(3):Bf(1/yg)}<br>1 s here = ${nd(yg)} outside${Yu.uMeas.value?`<br>View: measured`:``}`:G.years>.002?`${nd(G.years*3156e4)} have passed outside`:``;let i=(e,t)=>e.g?(Xg.copy(c_()),t.set((e.g.pos[0]-Xg.x)*Ku,(e.g.pos[1]-Xg.y)*Ku,(e.g.pos[2]-Xg.z)*Ku)):e.s?s_(e.s,t).sub(K.pos):t.copy(e.b.pos).sub(K.pos);W(`#near`).innerHTML=pb.slice(0,3).map(e=>{i(e,I_);let t=Math.max(I_.length(),1),n=e.d*F_(I_)/t;return`<div><b>${td(e.d)}</b><span>${e.name}${yg>1.02?` <i>aboard ${td(n)}</i>`:``}</span></div>`}).join(``);let a=(K.state===`fly`||K.state===`descend`)&&(Z.idle<45||Cg||tb.on);W(`#energy`).classList.toggle(`on`,!!a),a&&(W(`#energy`).innerHTML=`<b>${Z.idle<.6?(Z.sign>0?`Accelerating`:`Decelerating`)+` `+Vf(Z.power,`W`):`Drive idle`}</b><br>${Z.idle<.6?`This`:`Last`} ${Z.sign<0?`braking`:`burn`} ${Vf(Z.burn,`J`)} = ${Hf(Z.burn)}<br>${Z.idle<.6?`Now ${Rf(Z.a)}, max`:`Max`} ${Rf(Z.gmax)}`+(Z.prev?`<br>Before: ${Z.prev.s<0?`braking`:`burn`} ${Vf(Z.prev.E,`J`)} = ${Hf(Z.prev.E)}, max ${Rf(Z.prev.g)}`:``)+(tb.on&&tb.b?`<br><b>${tb.over?`Gravity overwhelming, falling`:`Gravity hold`}</b> ${Rf(tb.a)} toward ${tb.b.name}<br>${tb.over?`Thrusters at full power`:`Thrusters push away at ${Rf(tb.hold)}`}, ${Vf(tb.P,`W`)}<br>Held so far ${Vf(tb.E,`J`)} = ${Hf(tb.E)}`:``)+(Cg?`<br>Journey ${Vf(Cg.E,`J`)} = ${Hf(Cg.E)}`:`<br>Total ${Vf(Z.total,`J`)} = ${Hf(Z.total)}`));let o=K.q.clone().invert(),s=[],c=pb.map(e=>{let t=i(e,H()),n=t.length();return{o:e.b||e.s||e.g.star,name:e.name,star:!!(e.s||e.g)||[`star`,`pulsar`,`blackhole`,`quasar`].includes(e.b?.kind),small:!!e.b?.swarm,hue:e.b?D_(e.b):e.g?`#b9c8ff`:`#cfe3ff`,g:!!e.g,d:Math.max(1,e.d),dir:t.divideScalar(Math.max(n,1)).applyQuaternion(o)}}).sort((e,t)=>e.d-t.d),l=0;for(let e of c)e.small&&++l>6&&e.o!==q||(!e.g||mb||e.o===q?.star)&&(s.length<22||e.o===q||e.o===ag.main)&&s.push(e);Tg.draw(s,q),Vg();{let e=K.state===`fly`?Zh?.b||Zh?.s||q?.star||q:Y,t=W(`#sheet`);if(t.classList.toggle(`on`,!!($h&&e)),e&&e!==eg&&$h){eg=e;let n=!!e.kind;t.innerHTML=`<h3>${n?e.name:Sd(e)}</h3><p>${n?e.label:xd(e)}</p><dl>${wp(n?bp(e,og.includes(e)?ag:null):Sp(e))}</dl>`}}{let e=W(`#grav`),t=tb.a/$y,n=``,r=``;if(tb.on&&t>.1&&tb.b&&!sb){let e=K.drift.dot(tb.n),i=tb.b.name;tb.over?(r=`red`,n=`<b>Gravity exceeds your thrust</b><p>${i} pulls ${Rf(tb.a)}, your thrusters give at most ${Rf($y)} (${Vf(eb,`N`)}). You are falling inward at ${td(Math.max(0,e))}/s.</p>`):(r=`amber`,n=`<b>Particularly strong gravity</b><p>${i} pulls ${Rf(tb.a)}: ${Math.round(t*100)} % of your engines' limit (${Vf(eb,`N`)}). Leave the field as soon as you can.</p>`),n+=rb?`<p class="act">Escaping… <kbd>Y</kbd> stops</p>`:`<button id="gesc">Escape the field <kbd>Y</kbd></button>`}if(e.className=n?`on `+r:``,r!==yb&&(r===`amber`&&Sy(`Warning. Strong gravity. Leave the field as soon as possible.`),r===`red`&&Sy(`Danger. Gravity exceeds maximum thrust.`,!0),yb=r),e.dataset.s!==n){e.dataset.s=n,e.innerHTML=n;let t=e.querySelector(`#gesc`);t&&(t.onmousedown=e=>{e.stopPropagation(),ib()})}}{let e=W(`#hole`),t=``,n=e=>e<1e5?Math.round(e).toLocaleString(`en`):Bf(e);if(sb){let e=sb.b.R,r=sb.s.x,i=r*e,a=sh(e,i);t=`<b>Inside the event horizon</b><dl>${[[`Distance to singularity`,td(i)],[`Depth`,`${(100*(1-r)).toFixed(1)} % of the way`],[`Your time left`,sb.left<1?(sb.left*1e3).toPrecision(3)+` ms`:sb.left.toPrecision(3)+` s`],[`Slow motion`,sb.slow>1.05?`${n(sb.slow)} times`:`none`],[`Space falls inward at`,`${Math.sqrt(1/r).toFixed(2)} c`],[`Stretching over 10 m`,Rf(a)],[`Way out`,`none, every path leads in`]].map(e=>`<dt>${e[0]}</dt><dd>${e[1]}</dd>`).join(``)}</dl><p>Thrust outward only delays it.</p>`}else if(fb&&!lg){let{b:e,d:n}=fb,r=n/e.R,i=r<1.5?`Inside the photon sphere: light itself orbits here`:r<3?`No stable orbit any more`:r<6?`Close to the last stable orbit`:``;t=`<b class="o">Event horizon in ${td(n-e.R)}</b><dl>${[[`Black hole`,e.name],[`Real length of the way`,td(ch(e.R,n))],[`Clock rate here`,`${lh(e.R,n).toFixed(r<3?4:3)} × far away`],[`Escape speed`,`${Math.sqrt(1/r).toFixed(3)} c`],[`Stretching over 10 m`,Rf(sh(e.R,n))]].map(e=>`<dt>${e[0]}</dt><dd>${e[1]}</dd>`).join(``)}</dl>${i?`<p>${i}</p>`:``}`}e.classList.toggle(`on`,!!t),e.classList.toggle(`in`,!!sb),t&&e.innerHTML!==t&&(e.innerHTML=t),document.body.classList.toggle(`inhole`,!!sb)}{let e=W(`#selbar`),t=!!q&&K.state===`fly`&&!$&&!sb;if(e.classList.toggle(`on`,t),t){let t=q,n=t.name,r=t.star?s_(t.star,H()).sub(K.pos):t.pos.clone().sub(K.pos),i=t.vel&&!t.star?t.vel.clone().sub(K.ref?.vel||H()).sub(H_.clone().multiplyScalar(K.w)).dot(r.clone().normalize()):null,a=`<b>${n}</b><span>${td(Math.max(0,r.length()-(t.R||0)))}${i===null?``:`, ${i>0?`receding`:`closing`} ${td(Math.abs(i))}/s`}</span><button data-k="F" class="${J?`act`:``}"><kbd>F</kbd> Fly there</button><button data-k="K" class="${jy===t?`act`:``}"><kbd>K</kbd> Track</button><button data-k="J" class="${(t.star?!K.ref:K.ref===t)?`act`:``}"><kbd>J</kbd> ${Oy?`Matching, ${td(Dy.length())}/s left`:`Match velocity`}</button>`;if(e.dataset.t!==a){e.dataset.t=a,e.innerHTML=a;for(let t of e.querySelectorAll(`button`))t.onmousedown=e=>{e.stopPropagation();let n=t.dataset.k;n===`F`?J?J=!1:Hg():n===`K`?Ny(q):ky(q.star?null:q)}}}}{let t=W(`#suit`),n=K.state===`walk`&&Y;if(t.classList.toggle(`on`,!!n),n){let n=Y,r=xv(n,yv.pos).dot(n.sunDir),i=Math.asin(Math.max(-1,Math.min(1,r)))*57.3,a=yv.pos.distanceTo(n.pos)-n.R,o=n.atm,s=o?o.press*Math.exp(-Math.max(0,a)/o.H):0,c=(n.T??0)+(r>0?r*14:r*22)*(o?1:5),l=ag.main,u=l.kind===`star`?(l.R/6957e5)**2*(l.T/5780)**4*3828e23:0,d=n.pos.distanceTo(l.pos),f=u/(4*Math.PI*d*d),p=o?Math.exp(-(o.tau.x+o.tau.y+o.tau.z)/3*2.5*Math.exp(-Math.max(0,a)/o.H)/(Math.max(r,0)+.05)):1,m=f*Math.max(0,r)*p,h=pp[n.type]||`none`,g=/oxygen/.test(h)&&!/traces/.test(h),_=g&&s>.5&&s<3&&c>-50&&c<55;bb+=e,t.innerHTML=`<b>Suit computer</b><dl>${[[`Temperature`,`${Math.round(c)} °C`,c<-60||c>70?`bad`:c<-20||c>45?`warn`:``],[`Pressure`,o?`${s<.1?s.toFixed(3):s.toFixed(2)} atm (${(s*101.3).toFixed(+(s<1))} kPa)`:`vacuum`,!o||s<.3||s>5?`bad`:``],[`Gravity`,`${(n.g/9.80665).toFixed(2)} g`,n.g>20?`bad`:n.g>13?`warn`:``],[`Air`,o?h:`none`,``],[`Breathable`,_?`yes, helmet may open`:o?g?s<=.5?`too thin`:s>=3?`pressure too high`:`too hot or cold`:`no oxygen`:`no, vacuum`,_?`good`:`bad`],[`Sunlight`,`${m<1?m.toFixed(2):Math.round(m).toLocaleString(`en`)} W/m², ${Math.round(m*93).toLocaleString(`en`)} lux`,m>3e3?`warn`:``],[`Sun`,i>0?`${Math.round(i)}° above the horizon`:`${Math.round(-i)}° below, night`,``],[`Radiation`,o?s<.2?`elevated`:`shielded by air`:`unshielded, high`,o?``:`warn`],[`Weather`,o?kf[$v.f>.05?$v.k:`clear`]+($v.f>.3&&[`storm`,`blizzard`,`dust`].includes($v.k)?`, strong wind`:``):`none`,``],[`Suit oxygen`,`${Math.max(0,100-bb/288).toFixed(0)} %, ${nd(Math.max(0,28800-bb))} left`,bb>25200?`warn`:``],[`To the ship`,td(Hv()),``]].map(([e,t,n])=>`<dt>${e}</dt><dd class="${n}">${t}</dd>`).join(``)}</dl>`}else bb=K.state===`walk`?bb:0}let u=Y,d=K.state!==`walk`&&u&&_g<Math.max(u.atm?u.atm.top*1.6:0,Math.min(u.R*.4,15e4));if(W(`#alt`).classList.toggle(`on`,!!d),d){let e=K.state===`walk`?yv.pos.distanceTo(K.pos):0,t=K.pos.distanceTo(u.pos)-u.R,n=u.atm?Math.exp(-Math.max(0,t)/u.atm.H)*u.atm.press:0;W(`#alt b`).textContent=K.state===`walk`?td(e)+` to ship`:K.state===`landed`?`On the ground`:td(Math.max(0,_g-14));let r=xv(u,K.pos).dot(H_)*K.w+xv(u,K.pos).dot(K.drift);W(`#alt p`).innerHTML=[K.state===`fly`?`${r<0?`↓`:`↑`} ${td(Math.abs(r))}/s`:``,`${u.name}, ${u.label.toLowerCase()}`,`Radius ${td(u.R)}, gravity ${u.grav} g`,u.atm?n>900?`Crushing pressure`:n<.005?`Edge of the atmosphere`:`Pressure ${n<.1?n.toFixed(3):n.toFixed(2)} atm`:`No atmosphere`,u.T===void 0?``:`${Math.round(u.T)} °C`,u.atm&&u.kind===`rock`&&t<u.atm.cloudH*1.5?kf[$v.f>.05?$v.k:`clear`]:``].filter(Boolean).join(`<br>`)}let f=W(`#land`),p=$?$.buck?[`U`,`Unbuckle${$.g>.15?`, felt gravity ${Rf($.g)}`:`, zero g`}. E: outside view`]:$.spot?[`E`,{map:`Open the star map`,hatch:K.state===`landed`?`Step outside`:`Airlock, locked in flight`}[$.spot.id]]:$.p.distanceTo(bm)<2.8?[`U`,`Buckle in`]:$.lift?[`Lift`,`To ${cm[$.lift.to]}`]:$.tube&&$.g>.15?[`Space X`,Iy!=null&&Iy!==$.deck?`${cm[Iy]}, E to go`:`Choose a deck, E to go`]:$.g<=.15?[`0 g`,`Floating, ${cm[$.deck]}. WASD Space X push, Q R roll`]:null:K.state===`descend`?[`L`,`Cancel the landing`]:K.state===`fly`&&wv?.b===Y?[`L`,`Land at the marked site, G lands right here`]:Tv()&&_g<4e3?[`G`,Y.terrain.raw(xv(Y,K.pos))<0&&Y.P.sea?`Set down on the ${Y.seaName}`:wv?.b===Y?`Land here. L lands at the marked site`:`Land here, or click the ground to choose a site`]:K.state===`landed`?[`G`,`Take off, E to go inside, L to leave the planet`]:K.state===`walk`&&Hv()<46?[`E`,`Board the ship`]:null;f.classList.toggle(`on`,!!p),p&&(f.children[0].textContent=p[0],f.children[1].textContent=p[1]);{let e=W(`#energy`),t=e.classList.contains(`on`)?e.getBoundingClientRect().bottom+18:230;W(`#sheet`).style.top=Math.max(230,t)+`px`}W(`#reticle .hull`).style.strokeDasharray=`${K.hull<99?K.hull/100:0} 1`}var Pb=performance.now(),Fb=16,Ib=0,Lb=0;function Rb(e){requestAnimationFrame(Rb);let t=e-Pb;Pb=e;let n=Math.min(.05,Math.max(.001,t/1e3));if(Sg)_h.render(bh,vh);else{if(Bu.value+=n,Yu.uTime.value=Bu.value,_h.u.uTime.value=Bu.value%100,ob(n),Jy(n*(tg===`flight`?hy:1)),gy+=((hy>1.5?hy:1)-gy)*Math.min(1,n*6),t<250&&!document.hidden&&!cg&&(Fb+=(t-Fb)*.06,Ib+=n,Ib>1)){Ib=0;let e=_h.scale;Fb>23?(e=Math.max(.62,e*.92),Lb=0):Fb<17.8&&++Lb>5&&(e=Math.min(1,e*1.06),Lb=0),Math.abs(e-_h.scale)>.001&&(_h.scale=e,_h.apply())}if(cg){cg.t+=n;let e=cg.dur*.45;cg.t>=e&&!cg.done&&(cg.done=!0,Promise.resolve(cg.fn()).catch(e=>console.error(e)).then(()=>{cg.ready=!0,cg.t=e})),cg.ready?_h.u.uWarp.value=Math.max(0,1-(cg.t-e)/(cg.dur-e)):(cg.t=Math.min(cg.t,e),_h.u.uWarp.value=Math.min(1,cg.t/e)),cg.ready&&cg.t>=cg.dur&&(cg=null,_h.u.uWarp.value=0)}if(pg*=Math.exp(-n*2.5),_h.u.uFlash.value.set(mg.x,mg.y,mg.z,pg<.003?0:pg),Dh.update(n),Ah.update(tg===`flight`&&!Sg?xb*3600+(Y?.atm&&K.state===`fly`?Math.min(1400,K.w*1.2)*Math.min(1,Math.exp(-Math.max(0,K.pos.distanceTo(Y.pos)-Y.R)/Y.atm.H)):0)+$v.f*700:0,_h.u.uBend.value>.2),tg===`flight`||tg===`warp`&&ug&&cg?.done&&ig)tg===`flight`&&(db(n),Nb(n)),_h.render(bh,vh);else{if(_h.u.uHeat.value=_h.u.uBend.value=_h.u.uSpeed.value=0,tg===`title`&&(uv.a+=n*.015),tg===`map`){let e=700*n;Q.KeyA&&uv.pan(e,0),Q.KeyD&&uv.pan(-e,0),Q.KeyW&&uv.pan(0,e),Q.KeyS&&uv.pan(0,-e)}uv.update(n,tg!==`map`),_h.render(uv.scene,yh)}}}W(`#htut`).onclick=()=>{gv(!1),qg.open()},W(`#ptut`).onclick=()=>{Jg(!1),qg.open()},W(`#resume`).onclick=()=>Jg(!1),W(`#phelp`).onclick=()=>{Jg(!1),gv(!0)},W(`#pmap`).onclick=()=>{Jg(!1),wg=!0,document.exitPointerLock?.(),setTimeout(()=>wg=!1,300),__(`map`)};function zb(e){Ah.start(),e&&(Object.assign(G,Wh()),delete G.at,a_()),Yg.x=Yg.y=0,Yg.px=innerWidth/2,Yg.py=innerHeight/2,W(`#title`).classList.add(`off`),__(`warp`),y_(async()=>{let t=!e&&Hh?.at;m_(t),ug=!0,await iy(),Jh(t),__(`flight`),T_(),Sy(t?`Welcome back aboard. All systems nominal.`:`Welcome aboard. All systems nominal.`,!0),S_(t?ag.name:q.name,t?W(`#place p`).textContent:`Hold Shift to boost toward the world ahead. X brakes. Press ? for everything else.`);let n;try{n=localStorage.getItem(`afterlight-tut`)}catch{}if(!n&&!t){let e=setInterval(()=>{!cg&&tg===`flight`&&(clearInterval(e),qg.open())},100)}})}W(`#begin`).onclick=()=>zb(!1),W(`#again`).onclick=()=>zb(!0),Hh&&(W(`#begin`).textContent=`Continue`,W(`#again`).hidden=!1),W(`#title p`).innerHTML=`A galaxy at its true size. Every star you can see is a place you can reach.<br>Fly close to light, land anywhere, and gather its seven colours.`,uv.D=uv.tD=57e3,uv.e=.42,a_();{let e=xh.marks[0];Sh.bakeNow(xh,H(e.x,e.y,e.z))}T_(),requestAnimationFrame(Rb);