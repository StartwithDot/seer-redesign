(()=>{var Pc=0,Jo=1,Lc=2;var Ws=1,Nc=2,Ki=3,Jn=0,Ce=1,ke=2,Mn=0,ji=1,$o=2,Ko=3,jo=4,Dc=5;var fi=100,Uc=101,Fc=102,Oc=103,Bc=104,zc=200,kc=201,Vc=202,Gc=203,Qo=204,tl=205,Hc=206,Wc=207,Xc=208,qc=209,Yc=210,Zc=211,Jc=212,$c=213,Kc=214,Ir=0,Pr=1,Lr=2,Fi=3,Nr=4,Dr=5,Ur=6,Fr=7,el=0,jc=1,Qc=2,Je=0,nl=1,il=2,sl=3,rl=4,al=5,ol=6,ll=7;var cl=300,$n=301,pi=302,ua=303,da=304,Xs=306,Oi=1e3,je=1001,Bi=1002,Te=1003,th=1004;var qs=1005;var Ae=1006,fa=1007;var Kn=1008;var Ge=1009,hl=1010,ul=1011,Qi=1012,pa=1013,hn=1014,tn=1015,un=1016,ma=1017,ga=1018,ts=1020,dl=35902,fl=35899,pl=1021,ml=1022,en=1023,gn=1026,jn=1027,_a=1028,xa=1029,Qn=1030,ya=1031;var va=1033,Ys=33776,Zs=33777,Js=33778,$s=33779,Ma=35840,Sa=35841,ba=35842,Ta=35843,Ea=36196,wa=37492,Aa=37496,Ca=37488,Ra=37489,Ks=37490,Ia=37491,Pa=37808,La=37809,Na=37810,Da=37811,Ua=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,ka=37817,Va=37818,Ga=37819,Ha=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Za=36283,Ja=36284,js=36285,$a=36286;var _s=2300,Or=2301,Cr=2302,Fo=2303,Oo=2400,Bo=2401,zo=2402;var eh=3200;var Ka=0,nh=1,Ln="",we="srgb",xs="srgb-linear",ys="linear",re="srgb";var Rr=7680;var ih=519,sh=512,rh=513,ah=514,ja=515,oh=516,lh=517,Qa=518,ch=519,hh=35044;var gl="300 es",ln=2e3,zi=2001;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){let i=vs("canvas");return i.style.display="block",i}var Ql={},ki=null;function _l(...i){let t="THREE."+i.shift();ki?ki("log",t,...i):console.log(t,...i)}function dh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=dh(i);let t="THREE."+i.shift();if(ki)ki("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=dh(i);let t="THREE."+i.shift();if(ki)ki("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ri(...i){let t=i.join(" ");t in Ql||(Ql[t]=!0,Ht(...i))}function fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ph={[Ir]:Pr,[Lr]:Ur,[Nr]:Fr,[Fi]:Dr,[Pr]:Ir,[Ur]:Lr,[Fr]:Nr,[Dr]:Fi},_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=1234567,fs=Math.PI/180,Vi=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function _u(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xu(i,t,e){return i!==t?(e-i)/(t-i):0}function ps(i,t,e){return(1-e)*i+e*t}function yu(i,t,e,n){return ps(i,t,1-Math.exp(-e*n))}function vu(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function Mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tu(i,t){return i+Math.random()*(t-i)}function Eu(i){return i*(.5-Math.random())}function wu(i){i!==void 0&&(tc=i);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Au(i){return i*fs}function Cu(i){return i*Vi}function Ru(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Iu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Di(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var yl={DEG2RAD:fs,RAD2DEG:Vi,generateUUID:mi,clamp:Qt,euclideanModulo:xl,mapLinear:_u,inverseLerp:xu,lerp:ps,damp:yu,pingpong:vu,smoothstep:Mu,smootherstep:Su,randInt:bu,randFloat:Tu,randFloatSpread:Eu,seededRandom:wu,degToRad:Au,radToDeg:Cu,isPowerOfTwo:Ru,ceilPowerOfTwo:Iu,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Lu,normalize:Fe,denormalize:Di},pt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*S;m<0&&(h=-h,f=-f,g=-g,S=-S,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),C=Math.sin(E);p=Math.sin(p*E)/C,o=Math.sin(o*E)/C,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+S*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+S*o;let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new V,ec=new xn,Gt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],S=s[0],m=s[3],p=s[6],E=s[1],C=s[4],y=s[7],T=s[2],b=s[5],L=s[8];return r[0]=a*S+o*E+l*T,r[3]=a*m+o*C+l*b,r[6]=a*p+o*y+l*L,r[1]=c*S+u*E+d*T,r[4]=c*m+u*C+d*b,r[7]=c*p+u*y+d*L,r[2]=h*S+f*E+g*T,r[5]=h*m+f*C+g*b,r[8]=h*p+f*y+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(t,e)),this}rotate(t){return ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fo=new Gt,nc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){let i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:re,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var ee=Nu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vi,Br=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=vs("canvas")),vi.width=t.width,vi.height=t.height;let s=vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Du=0,Gi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Br.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Uu=0,mo=new V,Oe=class i extends _n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=je,s=je,r=Ae,a=Kn,o=en,l=Ge,c=i.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=mi(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oi:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case Bi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oi:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case Bi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=cl;Oe.DEFAULT_ANISOTROPY=1;var pe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(f+1)/2,T=(p+1)/2,b=(u+h)/4,L=(d+S)/4,x=(g+m)/4;return C>y&&C>T?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=b/n,r=L/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=L/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-S)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zr=class extends _n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Oe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends zr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ms=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kr=class extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var le=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,S,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,S,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h+S*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,S=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-S*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Ou)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Fn.crossVectors(n,He),Fn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Fn.crossVectors(n,He)),Fn.normalize(),ar.crossVectors(He,Fn),s[0]=Fn.x,s[4]=ar.x,s[8]=He.x,s[1]=Fn.y,s[5]=ar.y,s[9]=He.y,s[2]=Fn.z,s[6]=ar.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],S=n[6],m=n[10],p=n[14],E=n[3],C=n[7],y=n[11],T=n[15],b=s[0],L=s[4],x=s[8],A=s[12],U=s[1],z=s[5],k=s[9],et=s[13],G=s[2],$=s[6],lt=s[10],J=s[14],Z=s[3],nt=s[7],st=s[11],at=s[15];return r[0]=a*b+o*U+l*G+c*Z,r[4]=a*L+o*z+l*$+c*nt,r[8]=a*x+o*k+l*lt+c*st,r[12]=a*A+o*et+l*J+c*at,r[1]=u*b+d*U+h*G+f*Z,r[5]=u*L+d*z+h*$+f*nt,r[9]=u*x+d*k+h*lt+f*st,r[13]=u*A+d*et+h*J+f*at,r[2]=g*b+S*U+m*G+p*Z,r[6]=g*L+S*z+m*$+p*nt,r[10]=g*x+S*k+m*lt+p*st,r[14]=g*A+S*et+m*J+p*at,r[3]=E*b+C*U+y*G+T*Z,r[7]=E*L+C*z+y*$+T*nt,r[11]=E*x+C*k+y*lt+T*st,r[15]=E*A+C*et+y*J+T*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],S=t[7],m=t[11],p=t[15],E=l*f-c*h,C=o*f-c*d,y=o*h-l*d,T=a*f-c*u,b=a*h-l*u,L=a*d-o*u;return e*(S*E-m*C+p*y)-n*(g*E-m*T+p*b)+s*(g*C-S*T+p*L)-r*(g*y-S*b+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],S=t[13],m=t[14],p=t[15],E=e*o-n*a,C=e*l-s*a,y=e*c-r*a,T=n*l-s*o,b=n*c-r*o,L=s*c-r*l,x=u*S-d*g,A=u*m-h*g,U=u*p-f*g,z=d*m-h*S,k=d*p-f*S,et=h*p-f*m,G=E*et-C*k+y*z+T*U-b*A+L*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/G;return t[0]=(o*et-l*k+c*z)*$,t[1]=(s*k-n*et-r*z)*$,t[2]=(S*L-m*b+p*T)*$,t[3]=(h*b-d*L-f*T)*$,t[4]=(l*U-a*et-c*A)*$,t[5]=(e*et-s*U+r*A)*$,t[6]=(m*y-g*L-p*C)*$,t[7]=(u*L-h*y+f*C)*$,t[8]=(a*k-o*U+c*x)*$,t[9]=(n*U-e*k-r*x)*$,t[10]=(g*b-S*y+p*E)*$,t[11]=(d*y-u*b-f*E)*$,t[12]=(o*A-a*z-l*x)*$,t[13]=(e*z-n*A+s*x)*$,t[14]=(S*C-g*T-m*E)*$,t[15]=(u*T-d*C+h*E)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,S=a*u,m=a*d,p=o*d,E=l*c,C=l*u,y=l*d,T=n.x,b=n.y,L=n.z;return s[0]=(1-(S+p))*T,s[1]=(f+y)*T,s[2]=(g-C)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+p))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(g+C)*L,s[9]=(m-E)*L,s[10]=(1-(h+S))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),sn.copy(this);let c=1/a,u=1/o,d=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===zi)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===ln)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===zi)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new V,sn=new le,Fu=new V(0,0,0),Ou=new V(1,1,1),Fn=new V,ar=new V,He=new V,sc=new le,rc=new xn,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bu=0,ac=new V,Si=new xn,Tn=new le,or=new V,as=new V,zu=new V,ku=new xn,oc=new V(1,0,0),lc=new V(0,1,0),cc=new V(0,0,1),hc={type:"added"},Vu={type:"removed"},bi={type:"childadded",child:null},go={type:"childremoved",child:null},Ee=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Pn,n=new xn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Gt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(as,or,this.up):Tn.lookAt(or,as,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Tn),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),bi.child=t,this.dispatchEvent(bi),bi.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ee.DEFAULT_UP=new V(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gu={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},lr={h:0,s:0,l:0};function _o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=xl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_o(a,r,t+1/3),this.g=_o(a,r,t),this.b=_o(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ee.workingToColorSpace(Le.copy(this),t),Math.round(Qt(Le.r*255,0,255))*65536+Math.round(Qt(Le.g*255,0,255))*256+Math.round(Qt(Le.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=we){ee.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(lr);let n=ps(On.h,lr.h,e),s=ps(On.s,lr.s,e),r=ps(On.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new qt;qt.NAMES=mh;var Wi=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},rn=new V,En=new V,xo=new V,wn=new V,Ti=new V,Ei=new V,uc=new V,yo=new V,vo=new V,Mo=new V,So=new pe,bo=new pe,To=new pe,Vn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),En.subVectors(n,e),xo.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(En),l=rn.dot(xo),c=En.dot(En),u=En.dot(xo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return So.setScalar(0),bo.setScalar(0),To.setScalar(0),So.fromBufferAttribute(t,e),bo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(So,r.x),a.addScaledVector(bo,r.y),a.addScaledVector(To,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),En.subVectors(t,e),rn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ti.subVectors(s,n),Ei.subVectors(r,n),yo.subVectors(t,n);let l=Ti.dot(yo),c=Ei.dot(yo);if(l<=0&&c<=0)return e.copy(n);vo.subVectors(t,s);let u=Ti.dot(vo),d=Ei.dot(vo);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ti,a);Mo.subVectors(t,r);let f=Ti.dot(Mo),g=Ei.dot(Mo);if(g>=0&&f<=g)return e.copy(r);let S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ei,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return uc.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(uc,o);let p=1/(m+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(Ti,a).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qe=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),hr.subVectors(this.max,os),wi.subVectors(t.a,os),Ai.subVectors(t.b,os),Ci.subVectors(t.c,os),Bn.subVectors(Ai,wi),zn.subVectors(Ci,Ai),ei.subVectors(wi,Ci);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ei.y,ei.x,0];return!Eo(e,wi,Ai,Ci,hr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,wi,Ai,Ci,hr))?!1:(ur.crossVectors(Bn,zn),e=[ur.x,ur.y,ur.z],Eo(e,wi,Ai,Ci,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},An=[new V,new V,new V,new V,new V,new V,new V,new V],an=new V,cr=new Qe,wi=new V,Ai=new V,Ci=new V,Bn=new V,zn=new V,ei=new V,os=new V,hr=new V,ur=new V,ni=new V;function Eo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);let o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ye=new V,dr=new pt,Hu=0,Xe=class extends _n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ts=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wu=new Qe,ls=new V,wo=new V,Gn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);let e=ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(wo)),this.expandByPoint(ls.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xu=0,Ke=new le,Ao=new Ee,Ri=new V,We=new Qe,cs=new Qe,Se=new V,Be=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?Ts:bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(We.min,cs.min),We.expandByPoint(Se),Se.addVectors(We.max,cs.max),We.expandByPoint(Se)):(We.expandByPoint(cs.min),We.expandByPoint(cs.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),Se.add(Ri)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new V,l[x]=new V;let c=new V,u=new V,d=new V,h=new pt,f=new pt,g=new pt,S=new V,m=new V;function p(x,A,U){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,U),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let z=1/(f.x*g.y-g.x*f.y);isFinite(z)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(z),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(z),o[x].add(S),o[A].add(S),o[U].add(S),l[x].add(m),l[A].add(m),l[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,A=E.length;x<A;++x){let U=E[x],z=U.start,k=U.count;for(let et=z,G=z+k;et<G;et+=3)p(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let C=new V,y=new V,T=new V,b=new V;function L(x){T.fromBufferAttribute(s,x),b.copy(T);let A=o[x];C.copy(A),C.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(b,A);let z=y.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,z)}for(let x=0,A=E.length;x<A;++x){let U=E[x],z=U.start,k=U.count;for(let et=z,G=z+k;et<G;et+=3)L(t.getX(et+0)),L(t.getX(et+1)),L(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Xe(h,u,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=new V,qu=new V,Yu=new Gt,on=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Co.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Co),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zu=0,Hn=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=ji,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tl,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new on().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Cn=new V,Ro=new V,fr=new V,pr=new V,Vr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ro.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Ro);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=pr.dot(this.direction),l=-pr.dot(fr),c=pr.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ro).addScaledVector(fr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Cn.subVectors(t.center,this.origin);let n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,C=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(u),L,x,A,U,z,k,et,G,$,lt,J,Z;if(y>=T&&y>=b?(A=l,k=d,$=g,Z=p,l>=0?(L=c,x=u,U=h,z=f,et=S,G=m,lt=E,J=C):(L=u,x=c,U=f,z=h,et=m,G=S,lt=C,J=E)):T>=b?(A=c,k=h,$=S,Z=E,c>=0?(L=u,x=l,U=f,z=d,et=m,G=g,lt=C,J=p):(L=l,x=u,U=d,z=f,et=g,G=m,lt=p,J=C)):(A=u,k=f,$=m,Z=C,u>=0?(L=l,x=c,U=d,z=h,et=g,G=S,lt=p,J=E):(L=c,x=l,U=h,z=d,et=S,G=g,lt=E,J=p)),A===0)return null;let nt=L/A,st=x/A,at=1/A,Pt=U-nt*k,wt=z-st*k,Zt=et-nt*$,Wt=G-st*$,$t=lt-nt*Z,F=J-st*Z,N=$t*Wt-F*Zt,P=Pt*F-wt*$t,I=Zt*wt-Wt*Pt;if(s){if(N<0||P<0||I<0)return null}else if((N<0||P<0||I<0)&&(N>0||P>0||I>0))return null;let O=N+P+I;if(O===0)return null;let it=at*(N*k+P*$+I*Z);return(O>0?it<0:it>0)?null:this.at(it/O,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=el,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dc=new le,ii=new Vr,mr=new Gn,fc=new V,gr=new V,_r=new V,xr=new V,Io=new V,yr=new V,pc=new V,vr=new V,ge=class extends Ee{constructor(t=new Be,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Io.fromBufferAttribute(d,t),a?yr.addScaledVector(Io,u):yr.addScaledVector(Io.sub(e),u))}e.add(yr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(mr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(mr,fc)===null||ii.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,T=C;y<T;y+=3){let b=o.getX(y),L=o.getX(y+1),x=o.getX(y+2);s=Mr(this,p,t,n,c,u,d,b,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let E=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);s=Mr(this,a,t,n,c,u,d,E,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=h.length;g<S;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,T=C;y<T;y+=3){let b=y,L=y+1,x=y+2;s=Mr(this,p,t,n,c,u,d,b,L,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=g,p=S;m<p;m+=3){let E=m,C=m+1,y=m+2;s=Mr(this,a,t,n,c,u,d,E,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ju(i,t,e,n,s,r,a,o){let l;if(t.side===Ce?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Jn,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vr);return c<e.near||c>e.far?null:{distance:c,point:vr.clone(),object:i}}function Mr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,xr);let u=Ju(i,t,e,n,gr,_r,xr,pc);if(u){let d=new V;Vn.getBarycoord(pc,gr,_r,xr,d),s&&(u.uv=Vn.getInterpolatedAttribute(s,o,l,c,d,new pt)),r&&(u.uv1=Vn.getInterpolatedAttribute(r,o,l,c,d,new pt)),a&&(u.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new V,materialIndex:0};Vn.getNormal(gr,_r,xr,h.normal),u.face=h,u.barycoord=d}return u}var Es=class extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Te,u=Te,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ii=new le,mc=new le,Sr=[],gc=new Qe,$u=new le,hs=new ge,us=new Gn,ws=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$u)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),gc.copy(t.boundingBox).applyMatrix4(Ii),this.boundingBox.union(gc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ii),us.copy(t.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ii),mc.multiplyMatrices(n,Ii),hs.matrixWorld=mc,hs.raycast(t,Sr);for(let a=0,o=Sr.length;a<o;a++){let l=Sr[a];l.instanceId=r,l.object=this,e.push(l)}Sr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Es(new Float32Array(s*this.count),s,this.count,_a,tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},si=new Gn,Ku=new pt(.5,.5),br=new V,Xi=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],m=r[10],p=r[11],E=r[12],C=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,p-g,T-E).normalize(),s[1].setComponents(c+a,f+u,p+g,T+E).normalize(),s[2].setComponents(c+o,f+d,p+S,T+C).normalize(),s[3].setComponents(c-o,f-d,p-S,T-C).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,T-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,T-y).normalize(),e===ln)s[5].setComponents(c+l,f+h,p+m,T+y).normalize();else if(e===zi)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);let e=Ku.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Oe{constructor(t=[],e=$n,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Oe{constructor(t,e,n=hn,s,r,a,o=Te,l=Te,c,u=gn,d=1){if(u!==gn&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends Wn{constructor(t,e=hn,n=$n,s,r,a=Te,o=Te,l,c=gn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rs=class extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yn=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(d,2));function g(S,m,p,E,C,y,T,b,L,x,A){let U=y/L,z=T/x,k=y/2,et=T/2,G=b/2,$=L+1,lt=x+1,J=0,Z=0,nt=new V;for(let st=0;st<lt;st++){let at=st*z-et;for(let Pt=0;Pt<$;Pt++){let wt=Pt*U-k;nt[S]=wt*E,nt[m]=at*C,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[S]=0,nt[m]=0,nt[p]=b>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(Pt/L),d.push(1-st/x),J+=1}}for(let st=0;st<x;st++)for(let at=0;at<L;at++){let Pt=h+at+$*st,wt=h+at+$*(st+1),Zt=h+(at+1)+$*(st+1),Wt=h+(at+1)+$*st;l.push(Pt,wt,Wt),l.push(wt,Zt,Wt),Z+=6}o.addGroup(f,Z,A),f+=Z,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Hr=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let C=new V,y=new V,T=new V;for(let b=0;b<e.length;b+=3)f(e[b+0],C),f(e[b+1],y),f(e[b+2],T),l(C,y,T,E)}function l(E,C,y,T){let b=T+1,L=[];for(let x=0;x<=b;x++){L[x]=[];let A=E.clone().lerp(y,x/b),U=C.clone().lerp(y,x/b),z=b-x;for(let k=0;k<=z;k++)k===0&&x===b?L[x][k]=A:L[x][k]=A.clone().lerp(U,k/z)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){let U=Math.floor(A/2);A%2===0?(h(L[x][U+1]),h(L[x+1][U]),h(L[x][U])):(h(L[x][U+1]),h(L[x+1][U+1]),h(L[x+1][U]))}}function c(E){let C=new V;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(E),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function u(){let E=new V;for(let C=0;C<r.length;C+=3){E.x=r[C+0],E.y=r[C+1],E.z=r[C+2];let y=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;a.push(y,1-T)}g(),d()}function d(){for(let E=0;E<a.length;E+=6){let C=a[E+0],y=a[E+2],T=a[E+4],b=Math.max(C,y,T),L=Math.min(C,y,T);b>.9&&L<.1&&(C<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function f(E,C){let y=E*3;C.x=t[y+0],C.y=t[y+1],C.z=t[y+2]}function g(){let E=new V,C=new V,y=new V,T=new V,b=new pt,L=new pt,x=new pt;for(let A=0,U=0;A<r.length;A+=9,U+=6){E.set(r[A+0],r[A+1],r[A+2]),C.set(r[A+3],r[A+4],r[A+5]),y.set(r[A+6],r[A+7],r[A+8]),b.set(a[U+0],a[U+1]),L.set(a[U+2],a[U+3]),x.set(a[U+4],a[U+5]),T.copy(E).add(C).add(y).divideScalar(3);let z=m(T);S(b,U+0,E,z),S(L,U+2,C,z),S(x,U+4,y,z)}}function S(E,C,y,T){T<0&&E.x===1&&(a[C]=E.x-1),y.x===0&&y.z===0&&(a[C]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ye=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],a=[],o=new V,l=new le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qi=class extends Ye{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wr=class extends qi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _c=new V,xc=new V,Po=new vl,Lo=new vl,No=new vl,Xr=class extends Ye{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xc.subVectors(s[0],s[1]).add(s[0]),c=xc);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_c.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_c),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Po.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,S,m),Lo.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,S,m),No.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Lo.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),No.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Po.calc(l),Lo.calc(l),No.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ju(i,t){let e=1-i;return e*e*t}function Qu(i,t){return 2*(1-i)*i*t}function td(i,t){return i*i*t}function ms(i,t,e,n){return ju(i,t)+Qu(i,e)+td(i,n)}function ed(i,t){let e=1-i;return e*e*e*t}function nd(i,t){let e=1-i;return 3*e*e*i*t}function id(i,t){return 3*(1-i)*i*i*t}function sd(i,t){return i*i*i*t}function gs(i,t,e,n,s){return ed(i,t)+nd(i,e)+id(i,n)+sd(i,s)}var Is=class extends Ye{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends Ye{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gs(t,s.x,r.x,a.x,o.x),gs(t,s.y,r.y,a.y,o.y),gs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ps=class extends Ye{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends Ye{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ls=class extends Ye{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,s.x,r.x,a.x),ms(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends Ye{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ms(t,s.x,r.x,a.x),ms(t,s.y,r.y,a.y),ms(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ns=class extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(yc(o,l.x,c.x,u.x,d.x),yc(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},ko=Object.freeze({__proto__:null,ArcCurve:Wr,CatmullRomCurve3:Xr,CubicBezierCurve:Is,CubicBezierCurve3:qr,EllipseCurve:qi,LineCurve:Ps,LineCurve3:Yr,QuadraticBezierCurve:Ls,QuadraticBezierCurve3:Zr,SplineCurve:Ns}),Jr=class extends Ye{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}},vn=class extends Jr{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ps(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ls(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Is(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ns(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new qi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},oi=class extends vn{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new vn().fromJSON(s))}return this}};function rd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=hd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Ds(r,a,e,o,l,c,0),a}function gh(i,t,e,n,s){let r;if(s===Md(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vc(a/n|0,i[a],i[a+1],r);return r&&Yi(r,r.next)&&(Fs(r),r=r.next),r}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yi(e,e.next)||me(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ds(i,t,e,n,s,r,a){if(!i)return;!a&&r&&md(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?od(i,n,s,r):ad(i)){t.push(l.i,i.i,c.i),Fs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ld(li(i),t),Ds(i,t,e,n,s,r,2)):a===2&&cd(i,t,e,n,s,r):Ds(li(i),t,e,n,s,r,1);break}}}function ad(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&ds(s,o,r,l,a,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function od(i,t,e,n){let s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),S=Math.max(o,l,c),m=Math.max(u,d,h),p=Vo(f,g,t,e,n),E=Vo(S,m,t,e,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=p&&y&&y.z<=E;){if(C.x>=f&&C.x<=S&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&ds(o,u,l,d,c,h,C.x,C.y)&&me(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=f&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,l,d,c,h,y.x,y.y)&&me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=p;){if(C.x>=f&&C.x<=S&&C.y>=g&&C.y<=m&&C!==s&&C!==a&&ds(o,u,l,d,c,h,C.x,C.y)&&me(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=S&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,l,d,c,h,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ld(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Yi(n,s)&&xh(n,e,e.next,s)&&Us(n,s)&&Us(s,n)&&(t.push(n.i,e.i,s.i),Fs(e),Fs(e.next),e=i=s),e=e.next}while(e!==i);return li(e)}function cd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let l=yh(a,o);a=li(a,a.next),l=li(l,l.next),Ds(a,t,e,n,s,r,0),Ds(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function hd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=gh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_d(c))}s.sort(ud);for(let r=0;r<s.length;r++)e=dd(s[r],e);return e}function ud(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dd(i,t){let e=fd(i,t);if(!e)return t;let n=yh(e,i);return li(n,n.next),li(e,e.next)}function fd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Yi(i,e))return e;do{if(Yi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_h(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Us(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&pd(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function pd(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function md(i,t,e,n){let s=i;do s.z===0&&(s.z=Vo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gd(s)}function gd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Vo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _d(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _h(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ds(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_h(i,t,e,n,s,r,a,o)}function xd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yd(i,t)&&(Us(i,t)&&Us(t,i)&&vd(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Yi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yi(i,t){return i.x===t.x&&i.y===t.y}function xh(i,t,e,n){let s=Er(me(i,t,e)),r=Er(me(i,t,n)),a=Er(me(e,n,i)),o=Er(me(e,n,t));return!!(s!==r&&a!==o||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||a===0&&Tr(e,i,n)||o===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function yd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function vd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yh(i,t){let e=Go(i.i,i.x,i.y),n=Go(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vc(i,t,e,n){let s=Go(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Go(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Md(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ho=class{static triangulate(t,e,n=2){return rd(t,e,n)}},mn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mc(t),Sc(n,t);let a=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sc(n,e[l]);let o=Ho.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ci=class i extends Be{constructor(t=new oi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Sd,C,y=!1,T,b,L,x;if(p){C=p.getSpacedPoints(u),y=!0,h=!1;let w=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,w),b=new V,L=new V,x=new V}h||(m=0,f=0,g=0,S=0);let A=o.extractPoints(c),U=A.shape,z=A.holes;if(!mn.isClockWise(U)){U=U.reverse();for(let w=0,B=z.length;w<B;w++){let D=z[w];mn.isClockWise(D)&&(z[w]=D.reverse())}}function et(w){let D=10000000000000001e-36,Y=w[0];for(let K=1;K<=w.length;K++){let ct=K%w.length,mt=w[ct],ft=mt.x-Y.x,q=mt.y-Y.y,v=ft*ft+q*q,At=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(Y.x),Math.abs(Y.y)),Dt=D*At*At;if(v<=Dt){w.splice(ct,1),K--;continue}Y=mt}}et(U),z.forEach(et);let G=z.length,$=U;for(let w=0;w<G;w++){let B=z[w];U=U.concat(B)}function lt(w,B,D){return B||Yt("ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(B,D)}let J=U.length;function Z(w,B,D){let Y,K,ct,mt=w.x-B.x,ft=w.y-B.y,q=D.x-w.x,v=D.y-w.y,At=mt*mt+ft*ft,Dt=mt*v-ft*q;if(Math.abs(Dt)>Number.EPSILON){let R=Math.sqrt(At),_=Math.sqrt(q*q+v*v),X=B.x-ft/R,j=B.y+mt/R,ot=D.x-v/_,xt=D.y+q/_,yt=((ot-X)*v-(xt-j)*q)/(mt*v-ft*q);Y=X+mt*yt-w.x,K=j+ft*yt-w.y;let ht=Y*Y+K*K;if(ht<=2)return new pt(Y,K);ct=Math.sqrt(ht/2)}else{let R=!1;mt>Number.EPSILON?q>Number.EPSILON&&(R=!0):mt<-Number.EPSILON?q<-Number.EPSILON&&(R=!0):Math.sign(ft)===Math.sign(v)&&(R=!0),R?(Y=-ft,K=mt,ct=Math.sqrt(At)):(Y=mt,K=ft,ct=Math.sqrt(At/2))}return new pt(Y/ct,K/ct)}let nt=[];for(let w=0,B=$.length,D=B-1,Y=w+1;w<B;w++,D++,Y++)D===B&&(D=0),Y===B&&(Y=0),nt[w]=Z($[w],$[D],$[Y]);let st=[],at,Pt=nt.concat();for(let w=0,B=G;w<B;w++){let D=z[w];at=[];for(let Y=0,K=D.length,ct=K-1,mt=Y+1;Y<K;Y++,ct++,mt++)ct===K&&(ct=0),mt===K&&(mt=0),at[Y]=Z(D[Y],D[ct],D[mt]);st.push(at),Pt=Pt.concat(at)}let wt;if(m===0)wt=mn.triangulateShape($,z);else{let w=[],B=[];for(let D=0;D<m;D++){let Y=D/m,K=f*Math.cos(Y*Math.PI/2),ct=g*Math.sin(Y*Math.PI/2)+S;for(let mt=0,ft=$.length;mt<ft;mt++){let q=lt($[mt],nt[mt],ct);P(q.x,q.y,-K),Y===0&&w.push(q)}for(let mt=0,ft=G;mt<ft;mt++){let q=z[mt];at=st[mt];let v=[];for(let At=0,Dt=q.length;At<Dt;At++){let R=lt(q[At],at[At],ct);P(R.x,R.y,-K),Y===0&&v.push(R)}Y===0&&B.push(v)}}wt=mn.triangulateShape(w,B)}let Zt=wt.length,Wt=g+S;for(let w=0;w<J;w++){let B=h?lt(U[w],Pt[w],Wt):U[w];y?(L.copy(T.normals[0]).multiplyScalar(B.x),b.copy(T.binormals[0]).multiplyScalar(B.y),x.copy(C[0]).add(L).add(b),P(x.x,x.y,x.z)):P(B.x,B.y,0)}for(let w=1;w<=u;w++)for(let B=0;B<J;B++){let D=h?lt(U[B],Pt[B],Wt):U[B];y?(L.copy(T.normals[w]).multiplyScalar(D.x),b.copy(T.binormals[w]).multiplyScalar(D.y),x.copy(C[w]).add(L).add(b),P(x.x,x.y,x.z)):P(D.x,D.y,d/u*w)}for(let w=m-1;w>=0;w--){let B=w/m,D=f*Math.cos(B*Math.PI/2),Y=g*Math.sin(B*Math.PI/2)+S;for(let K=0,ct=$.length;K<ct;K++){let mt=lt($[K],nt[K],Y);P(mt.x,mt.y,d+D)}for(let K=0,ct=z.length;K<ct;K++){let mt=z[K];at=st[K];for(let ft=0,q=mt.length;ft<q;ft++){let v=lt(mt[ft],at[ft],Y);y?P(v.x,v.y+C[u-1].y,C[u-1].x+D):P(v.x,v.y,d+D)}}}$t(),F();function $t(){let w=s.length/3;if(h){let B=0,D=J*B;for(let Y=0;Y<Zt;Y++){let K=wt[Y];I(K[2]+D,K[1]+D,K[0]+D)}B=u+m*2,D=J*B;for(let Y=0;Y<Zt;Y++){let K=wt[Y];I(K[0]+D,K[1]+D,K[2]+D)}}else{for(let B=0;B<Zt;B++){let D=wt[B];I(D[2],D[1],D[0])}for(let B=0;B<Zt;B++){let D=wt[B];I(D[0]+J*u,D[1]+J*u,D[2]+J*u)}}n.addGroup(w,s.length/3-w,0)}function F(){let w=s.length/3,B=0;N($,B),B+=$.length;for(let D=0,Y=z.length;D<Y;D++){let K=z[D];N(K,B),B+=K.length}n.addGroup(w,s.length/3-w,1)}function N(w,B){let D=w.length;for(;--D>=0;){let Y=D,K=D-1;K<0&&(K=w.length-1);for(let ct=0,mt=u+m*2;ct<mt;ct++){let ft=J*ct,q=J*(ct+1),v=B+Y+ft,At=B+K+ft,Dt=B+K+q,R=B+Y+q;O(v,At,Dt,R)}}}function P(w,B,D){l.push(w),l.push(B),l.push(D)}function I(w,B,D){it(w),it(B),it(D);let Y=s.length/3,K=E.generateTopUV(n,s,Y-3,Y-2,Y-1);_t(K[0]),_t(K[1]),_t(K[2])}function O(w,B,D,Y){it(w),it(B),it(Y),it(B),it(D),it(Y);let K=s.length/3,ct=E.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);_t(ct[0]),_t(ct[1]),_t(ct[3]),_t(ct[1]),_t(ct[2]),_t(ct[3])}function it(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function _t(w){r.push(w.x),r.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new i(n,t.options)}},Sd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-d),new pt(h,1-g),new pt(S,1-p)]:[new pt(o,1-l),new pt(u,1-d),new pt(f,1-g),new pt(m,1-p)]}};function bd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Os=class i extends Hr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Xn=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],S=[],m=[];for(let p=0;p<u;p++){let E=p*h-a;for(let C=0;C<c;C++){let y=C*d-r;g.push(y,-E,0),S.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let C=E+c*p,y=E+c*(p+1),T=E+1+c*(p+1),b=E+1+c*p;f.push(C,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(S,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Bs=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new V,f=new V,g=new V;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(E),f.y=(t+e*Math.cos(m))*Math.sin(E),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,E=(s+1)*(S-1)+m-1,C=(s+1)*(S-1)+m,y=(s+1)*S+m;l.push(p,E,y),l.push(E,C,y)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function De(i){let t={};for(let e=0;e<i.length;e++){let n=gi(i[e]);for(let s in n)t[s]=n[s]}return t}function bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Td(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ml(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var vh={clone:gi,merge:De},Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$r=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},hi=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ui=class extends hi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Kr=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jr=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Do(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qr=class extends qn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bo:r=t,o=2*e-n;break;case zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=t,l=2*n-e;break;case zo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),S=g*g,m=S*g,p=-h*m+2*h*S-h*g,E=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*g+1,C=(-1-f)*m+(1.5+f)*S+.5*g,y=f*m-f*S;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+E*a[c+T]+C*a[l+T]+y*a[d+T];return r}},ta=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ea=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},na=class extends qn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),S=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let S=a[c+g],m=a[l+g],p=f*h+g*2,E=d[p],C=d[p+1],y=t*h+g*2,T=u[y],b=u[y+1],L=Cd(n,e,E,T,s);r[g]=Mh(L,S,C,b,m)}return r}};function Mh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ad(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Mh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ad(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pi(e,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pi(t.times,Array),values:Pi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Do(t.settings)&&(n.settings={inTangents:Pi(t.settings.inTangents,Array),outTangents:Pi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case Fo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Do(this.settings)&&(Tc(this.settings.inTangents,t),Tc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&gu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let S=e[d+g];if(S!==e[h+g]||S!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Do(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Or;var Yn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=_s;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};ia.prototype.ValueTypeName="color";var sa=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="number";var ra=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)xn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zs=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}};zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=_s;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};aa.prototype.ValueTypeName="vector";var Wo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ec(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ec(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ec(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var oa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sh=new oa,di=class{constructor(t){this.manager=t!==void 0?t:Sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rn={},Xo=class extends Error{constructor(t,e){super(t),this.response=e}},ks=class extends di{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Wo.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:n,onError:s});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Rn[t],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,S=0,m=new ReadableStream({start(p){E();function E(){d.read().then(({done:C,value:y})=>{if(C)p.close();else{S+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:S,total:f});for(let b=0,L=u.length;b<L;b++){let x=u[b];x.onProgress&&x.onProgress(T)}p.enqueue(y),E()}},C=>{p.error(C)})}}});return new Response(m)}else throw new Xo(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Wo.add(`file:${t}`,c);let u=Rn[t];delete Rn[t];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Rn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Rn[t];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gs=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Uo=new le,wc=new V,Ac=new V,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Ge,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(wc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Uo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wr=new V,Ar=new xn,pn=new V,Hs=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Ar,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wr,Ar,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Ar,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kn=new V,Cc=new pt,Rc=new pt,Ne=class extends Hs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zi=class extends Hs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qo=class extends la{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new qo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Li=-90,Ni=1,ca=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Li,Ni,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Li,Ni,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Li,Ni,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Li,Ni,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Li,Ni,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Li,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ha=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sl="\\[\\]\\.:\\/",Rd=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",Id="[^"+Sl.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",bl),Ld=/(WCOD+)?/.source.replace("WCOD",Id),Nd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Ud=new RegExp("^"+Pd+Ld+Nd+Dd+"$"),Fd=["material","materials","bones","map"],Yo=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(t){let e=Ud.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Yo;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H0=new Float32Array(1);var Zo=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}},Ic=new pt,$i=class{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ic.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ic).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var cn=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new vn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let g=c[h],S=c[f];g.y>l.y!=S.y>l.y&&l.x<(S.x-g.x)*(l.y-g.y)/(S.y-g.y)+g.x&&(u=!u)}return u}function e(l,c){let u=c.getCenter(new pt);if(t(u,l))return u;let d=u.y,h=[],f=l.length;for(let g=0;g<f;g++){let S=l[g],m=l[(g+1)%f];if(S.y>d!=m.y>d){let p=S.x+(d-S.y)*(m.x-S.x)/(m.y-S.y);h.push(p)}}return h.length>1&&(h.sort((g,S)=>g-S),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ht('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=mn.area(c);if(u===0)continue;let d=new $i;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],u=0;for(let d=l-1;d>=0;d--){let h=r[d];if(h.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new oi;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new vn;u.curves=l.subPath.curves,c.holes.push(u)}return a}};function Tl(i,t,e,n){let s=Od(n);switch(e){case pl:return i*t;case _a:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case Qn:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case ml:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case va:return i*t*4/s.components*s.byteLength;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case wa:case Ca:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ks:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case js:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Od(i){switch(i){case Ge:case hl:return{byteLength:1,components:1};case Qi:case ul:case un:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case hn:case pa:case tn:return{byteLength:4,components:1};case dl:case fl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zd(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,tf=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,zf=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,kf=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,rm=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,hm=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,um=`#define STANDARD
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
}`,dm=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,xm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:kd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Hd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tf,clipping_planes_fragment:ef,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:df,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:yf,envmap_common_pars_fragment:vf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Nf,envmap_vertex:bf,fog_vertex:Tf,fog_pars_vertex:Ef,fog_fragment:wf,fog_pars_fragment:Af,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Rf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Df,lights_toon_pars_fragment:Uf,lights_phong_fragment:Ff,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:zf,lights_fragment_begin:kf,lights_fragment_maps:Vf,lights_fragment_end:Gf,lightprobes_pars_fragment:Hf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:$f,map_particle_pars_fragment:Kf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:vp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ep,shadowmask_pars_fragment:wp,skinbase_vertex:Ap,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Ip,specularmap_fragment:Pp,specularmap_pars_fragment:Lp,tonemapping_fragment:Np,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:kp,background_vert:Vp,background_frag:Gp,backgroundCube_vert:Hp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:Zp,distance_vert:Jp,distance_frag:$p,equirect_vert:Kp,equirect_frag:jp,linedashed_vert:Qp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:xm,sprite_vert:ym,sprite_frag:vm},Et={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},bn={basic:{uniforms:De([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:De([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:De([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:De([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:De([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:De([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:De([Et.points,Et.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:De([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:De([Et.common,Et.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:De([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:De([Et.sprite,Et.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:De([Et.common,Et.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:De([Et.lights,Et.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};bn.physical={uniforms:De([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var to={r:0,b:0,g:0},Mm=new le,Xh=new Gt;Xh.set(-1,0,0,0,1,0,0,0,1);function Sm(i,t,e,n,s,r){let a=new qt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(E){let C=E.isScene===!0?E.background:null;if(C&&C.isTexture){let y=E.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(E){let C=!1,y=f(E);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===Xs)?(c===void 0&&(c=new ge(new yn(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:gi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xh),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==re,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ge(new Xn(2,2),new ze({name:"BackgroundMaterial",uniforms:gi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,C){E.getRGB(to,Ml(i)),e.buffers.color.setClear(to.r,to.g,to.b,C,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,C=1){a.set(E),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:S,dispose:p}}function bm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(z,k,et,G,$){let lt=!1,J=d(z,G,et,k);r!==J&&(r=J,c(r.object)),lt=f(z,G,et,$),lt&&g(z,G,et,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(lt||a)&&(a=!1,y(z,k,et,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function u(z){return i.deleteVertexArray(z)}function d(z,k,et,G){let $=G.wireframe===!0,lt=n[k.id];lt===void 0&&(lt={},n[k.id]=lt);let J=z.isInstancedMesh===!0?z.id:0,Z=lt[J];Z===void 0&&(Z={},lt[J]=Z);let nt=Z[et.id];nt===void 0&&(nt={},Z[et.id]=nt);let st=nt[$];return st===void 0&&(st=h(l()),nt[$]=st),st}function h(z){let k=[],et=[],G=[];for(let $=0;$<e;$++)k[$]=0,et[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:et,attributeDivisors:G,object:z,attributes:{},index:null}}function f(z,k,et,G){let $=r.attributes,lt=k.attributes,J=0,Z=et.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let at=$[nt],Pt=lt[nt];if(Pt===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(Pt=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(Pt=z.instanceColor)),at===void 0||at.attribute!==Pt||Pt&&at.data!==Pt.data)return!0;J++}return r.attributesNum!==J||r.index!==G}function g(z,k,et,G){let $={},lt=k.attributes,J=0,Z=et.getAttributes();for(let nt in Z)if(Z[nt].location>=0){let at=lt[nt];at===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(at=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(at=z.instanceColor));let Pt={};Pt.attribute=at,at&&at.data&&(Pt.data=at.data),$[nt]=Pt,J++}r.attributes=$,r.attributesNum=J,r.index=G}function S(){let z=r.newAttributes;for(let k=0,et=z.length;k<et;k++)z[k]=0}function m(z){p(z,0)}function p(z,k){let et=r.newAttributes,G=r.enabledAttributes,$=r.attributeDivisors;et[z]=1,G[z]===0&&(i.enableVertexAttribArray(z),G[z]=1),$[z]!==k&&(i.vertexAttribDivisor(z,k),$[z]=k)}function E(){let z=r.newAttributes,k=r.enabledAttributes;for(let et=0,G=k.length;et<G;et++)k[et]!==z[et]&&(i.disableVertexAttribArray(et),k[et]=0)}function C(z,k,et,G,$,lt,J){J===!0?i.vertexAttribIPointer(z,k,et,$,lt):i.vertexAttribPointer(z,k,et,G,$,lt)}function y(z,k,et,G){S();let $=G.attributes,lt=et.getAttributes(),J=k.defaultAttributeValues;for(let Z in lt){let nt=lt[Z];if(nt.location>=0){let st=$[Z];if(st===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(st=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(st=z.instanceColor)),st!==void 0){let at=st.normalized,Pt=st.itemSize,wt=t.get(st);if(wt===void 0)continue;let Zt=wt.buffer,Wt=wt.type,$t=wt.bytesPerElement,F=Wt===i.INT||Wt===i.UNSIGNED_INT||st.gpuType===pa;if(st.isInterleavedBufferAttribute){let N=st.data,P=N.stride,I=st.offset;if(N.isInstancedInterleavedBuffer){for(let O=0;O<nt.locationSize;O++)p(nt.location+O,N.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let O=0;O<nt.locationSize;O++)m(nt.location+O);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let O=0;O<nt.locationSize;O++)C(nt.location+O,Pt/nt.locationSize,Wt,at,P*$t,(I+Pt/nt.locationSize*O)*$t,F)}else{if(st.isInstancedBufferAttribute){for(let N=0;N<nt.locationSize;N++)p(nt.location+N,st.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let N=0;N<nt.locationSize;N++)m(nt.location+N);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let N=0;N<nt.locationSize;N++)C(nt.location+N,Pt/nt.locationSize,Wt,at,Pt*$t,Pt/nt.locationSize*N*$t,F)}}else if(J!==void 0){let at=J[Z];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(nt.location,at);break;case 3:i.vertexAttrib3fv(nt.location,at);break;case 4:i.vertexAttrib4fv(nt.location,at);break;default:i.vertexAttrib1fv(nt.location,at)}}}}E()}function T(){A();for(let z in n){let k=n[z];for(let et in k){let G=k[et];for(let $ in G){let lt=G[$];for(let J in lt)u(lt[J].object),delete lt[J];delete G[$]}}delete n[z]}}function b(z){if(n[z.id]===void 0)return;let k=n[z.id];for(let et in k){let G=k[et];for(let $ in G){let lt=G[$];for(let J in lt)u(lt[J].object),delete lt[J];delete G[$]}}delete n[z.id]}function L(z){for(let k in n){let et=n[k];for(let G in et){let $=et[G];if($[z.id]===void 0)continue;let lt=$[z.id];for(let J in lt)u(lt[J].object),delete lt[J];delete $[z.id]}}}function x(z){for(let k in n){let et=n[k],G=z.isInstancedMesh===!0?z.id:0,$=et[G];if($!==void 0){for(let lt in $){let J=$[lt];for(let Z in J)u(J[Z].object),delete J[Z];delete $[lt]}delete et[G],Object.keys(et).length===0&&delete n[k]}}}function A(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:L,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Tm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==en&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let x=L===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Ge&&L!==tn&&!x&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:C,maxFragmentUniforms:y,maxSamples:T,samples:b}}function wm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new on,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,C=E*4,y=p.clippingState||null;l.value=y,y=u(g,h,C,f);for(let T=0;T!==C;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,g!==!0||m===null){let p=f+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==S;++C,y+=4)a.copy(d[C]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var ns=4,Am=6,Cm=20,Rm=256,Qs=new Zi,bh=new qt,El=null,wl=0,Al=0,Cl=!1,Im=new V,_i=new V,ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Im}=r;El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(El,wl,Al),this._renderer.xr.enabled=Cl,t.scissorTest=!1,es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:un,format:en,colorSpace:xs,depthBuffer:!1},s=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pm(r)),this._blurMaterial=Nm(r,t,e),this._ggxMaterial=Lm(r,t,e)}return s}_compileMaterial(t){let e=new ge(new Be,t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bh),d.toneMapping=Je,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new yn,new qe({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(bh),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let T=this._cubeSize;es(s,y*T,C>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(S,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$n||t.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-ns?n-g+ns:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,es(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,es(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,Qs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ns?s-this._lodMax+ns:0),h=4*(this._cubeSize-u);es(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Qs)}};function Pm(i){let t=[],e=[],n=i,s=i-ns+1+Am;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,C=p>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];g.set(y,f*h*p);for(let T=0;T<h;T++){let b=u[T*2]*2-1,L=u[T*2+1]*2-1;p===0?_i.set(1,L,b):p===1?_i.set(-b,1,-L):p===2?_i.set(-b,L,1):p===3?_i.set(-1,L,-b):p===4?_i.set(-b,-1,L):_i.set(b,L,-1),_i.toArray(S,(p*h+T)*f)}}let m=new Be;m.setAttribute("position",new Xe(g,f)),m.setAttribute("outputDirection",new Xe(S,f)),e.push(new ge(m,null)),n>ns&&n--}return{lodMeshes:e,sizeLods:t}}function Th(i,t,e){let n=new Ve(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Nm(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Eh(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function wh(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var no=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new As(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Mn});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ae),new ca(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ua||f===da)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new no(g.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===ua||f===da,S=f===$n||f===pi;if(g||S){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ss(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return g&&E&&E.height>0||S&&E&&l(E)?(n===null&&(n=new ss(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===ua?h.mapping=$n:f===da&&(h.mapping=pi),h}function l(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Um(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ri("WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let E=f.array;S=f.version;for(let C=0,y=E.length;C<y;C+=3){let T=E[C+0],b=E[C+1],L=E[C+2];h.push(T,b,b,L,L,T)}}else{let E=g.array;S=g.version;for(let C=0,y=E.length/3-1;C<y;C+=3){let T=C+0,b=C+1,L=C+2;h.push(T,b,b,L,L,T)}}let m=new(g.count>=65535?Ts:bs)(h,1);m.version=S;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Om(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),S===!0&&(C=3);let y=o.attributes.position.count*C,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*T*4*d),L=new Ms(b,y,T,d);L.type=tn,L.needsUpdate=!0;let x=C*4;for(let U=0;U<d;U++){let z=m[U],k=p[U],et=E[U],G=y*T*4*U;for(let $=0;$<z.count;$++){let lt=$*x;f===!0&&(s.fromBufferAttribute(z,$),b[G+lt+0]=s.x,b[G+lt+1]=s.y,b[G+lt+2]=s.z,b[G+lt+3]=0),g===!0&&(s.fromBufferAttribute(k,$),b[G+lt+4]=s.x,b[G+lt+5]=s.y,b[G+lt+6]=s.z,b[G+lt+7]=0),S===!0&&(s.fromBufferAttribute(et,$),b[G+lt+8]=s.x,b[G+lt+9]=s.y,b[G+lt+10]=s.z,b[G+lt+11]=et.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new pt(y,T)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function km(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Vm={[nl]:"LINEAR_TONE_MAPPING",[il]:"REINHARD_TONE_MAPPING",[sl]:"CINEON_TONE_MAPPING",[rl]:"ACES_FILMIC_TONE_MAPPING",[ol]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function Gm(i,t,e,n,s,r){let a=new Ve(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Be;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let u=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ge(c,u),h=new Zi(-1,1,1,-1,0,1),f=null,g=null,S=!1,m,p=null,E=[],C=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<E.length;b++){let L=E[b];L.setSize&&L.setSize(y,T)}},this.setEffects=function(y){E=y,C=E.length>0&&E[0].isRenderPass===!0;let T=a.width,b=a.height;E.length>0&&o===null&&(o=new Ve(T,b,{type:un,depthBuffer:!1,stencilBuffer:!1}),l=new Ve(T,b,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<E.length;L++){let x=E[L];x.setSize&&x.setSize(T,b)}},this.begin=function(y,T){if(S||y.toneMapping===Je&&E.length===0)return!1;if(p=T,T!==null){let b=T.width,L=T.height;(a.width!==b||a.height!==L)&&this.setSize(b,L)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Je,!0},this.hasRenderPass=function(){return C},this.end=function(y,T){y.toneMapping=m,S=!0;let b=a,L=o;for(let x=0;x<E.length;x++){let A=E[x];A.enabled!==!1&&(A.render(y,L,b,T),A.needsSwap!==!1&&(b=L,L=L===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ee.getTransfer(f)===re&&(u.defines.SRGB_TRANSFER="");let x=Vm[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var qh=new Oe,Pl=new Wn(1,1),Yh=new Ms,Zh=new kr,Jh=new As,Ah=[],Ch=[],Rh=new Float32Array(16),Ih=new Float32Array(9),Ph=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ro(i,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),Me(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),Me(e,n)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),Me(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=e.isReversedDepthBuffer()?Qa:ja,r=Pl):r=qh,e.setTexture2D(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function lg(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function yg(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function bg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pl:a=qh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zh,r[a])}function wg(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jh,r[a])}function Ag(i,t,e){let n=this.cache,s=t.length,r=ro(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function Cg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}var Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}},Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cg(e.type)}},Dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),a=Rl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(e,c===void 0?new Ll(o,i,t):new Nl(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Dl(o),Lh(e,d)),e=d}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Rg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ig=37297,Pg=0;function Lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Dh=new Gt;function Ng(i){ee._getMatrix(Dh,ee.workingColorSpace,i);let t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Lg(i.getShaderSource(t),o)}else return r}function Dg(i,t){let e=Ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ug={[nl]:"Linear",[il]:"Reinhard",[sl]:"Cineon",[rl]:"ACESFilmic",[ol]:"AgX",[ll]:"Neutral",[al]:"Custom"};function Fg(i,t){let e=Ug[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var eo=new V;function Og(){ee.getLuminanceCoefficients(eo);let i=eo.x.toFixed(4),t=eo.y.toFixed(4),e=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function Fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(Vg,Hg)}var Gg=new Map;function Hg(i,t){let e=jt[t];if(e===void 0){let n=Gg.get(t);if(n!==void 0)e=jt[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ul(e)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var qg={[Ws]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function Yg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[$n]:"ENVMAP_TYPE_CUBE",[pi]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE_UV"};function Jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Zg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[pi]:"ENVMAP_MODE_REFRACTION"};function Kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jg={[el]:"ENVMAP_BLENDING_MULTIPLY",[jc]:"ENVMAP_BLENDING_MIX",[Qc]:"ENVMAP_BLENDING_ADD"};function Qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jg[i.combine]||"ENVMAP_BLENDING_NONE"}function t0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yg(e),c=Jg(e),u=Kg(e),d=Qg(e),h=t0(e),f=Bg(e),g=zg(r),S=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Je?"#define TONE_MAPPING":"",e.toneMapping!==Je?jt.tonemapping_pars_fragment:"",e.toneMapping!==Je?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=Ul(a),a=Fh(a,e),a=Oh(a,e),o=Ul(o),o=Fh(o,e),o=Oh(o,e),a=Bh(a),o=Bh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=E+m+a,y=E+p+o,T=Nh(s,s.VERTEX_SHADER,C),b=Nh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,T),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function L(z){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(S)||"",et=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(b)||"",$=k.trim(),lt=et.trim(),J=G.trim(),Z=!0,nt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,T,b);else{let st=Uh(s,T,"vertex"),at=Uh(s,b,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+$+`
`+st+`
`+at)}else $!==""?Ht("WebGLProgram: Program Info Log:",$):(lt===""||J==="")&&(nt=!1);nt&&(z.diagnostics={runnable:Z,programLog:$,vertexShader:{log:lt,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(b),x=new is(s,S),A=kg(s,S)}let x;this.getUniforms=function(){return x===void 0&&L(this),x};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,Ig)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=b,this}var n0=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ol(t),e.set(t,n)),n}},Ol=class{constructor(t){this.id=n0++,this.code=t,this.usedTimes=0}};function i0(i){return i===Qn||i===Ks||i===js}function s0(i,t,e,n,s,r){let a=new Ss,o=new Fl,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,U,z,k,et){let G=z.fog,$=k.geometry,lt=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?z.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||lt,J),nt=Z&&Z.mapping===Xs?Z.image.height:null,st=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Pt=at!==void 0?at.length:0,wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let Zt,Wt,$t,F;if(st){let ce=bn[st];Zt=ce.vertexShader,Wt=ce.fragmentShader}else{Zt=x.vertexShader,Wt=x.fragmentShader;let ce=o.getVertexShaderStage(x),ie=o.getFragmentShaderStage(x);o.update(x,ce,ie),$t=ce.id,F=ie.id}let N=i.getRenderTarget(),P=i.state.buffers.depth.getReversed(),I=k.isInstancedMesh===!0,O=k.isBatchedMesh===!0,it=!!x.map,_t=!!x.matcap,w=!!Z,B=!!x.aoMap,D=!!x.lightMap,Y=!!x.bumpMap&&x.wireframe===!1,K=!!x.normalMap,ct=!!x.displacementMap,mt=!!x.emissiveMap,ft=!!x.metalnessMap,q=!!x.roughnessMap,v=x.anisotropy>0,At=x.clearcoat>0,Dt=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,X=x.sheen>0,j=x.transmission>0,ot=v&&!!x.anisotropyMap,xt=At&&!!x.clearcoatMap,yt=At&&!!x.clearcoatNormalMap,ht=At&&!!x.clearcoatRoughnessMap,ut=_&&!!x.iridescenceMap,vt=_&&!!x.iridescenceThicknessMap,Ot=X&&!!x.sheenColorMap,St=X&&!!x.sheenRoughnessMap,Mt=!!x.specularMap,kt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,Jt=j&&!!x.transmissionMap,W=j&&!!x.thicknessMap,bt=!!x.gradientMap,dt=!!x.alphaMap,Tt=x.alphaTest>0,It=!!x.alphaHash,gt=!!x.extensions,Vt=Je;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Bt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:Zt,fragmentShader:Wt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:F,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:O,batchingColor:O&&k._colorsTexture!==null,instancing:I,instancingColor:I&&k.instanceColor!==null,instancingMorph:I&&k.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:it,matcap:_t,envMap:w,envMapMode:w&&Z.mapping,envMapCubeUVHeight:nt,aoMap:B,lightMap:D,bumpMap:Y,normalMap:K,displacementMap:ct,emissiveMap:mt,normalMapObjectSpace:K&&x.normalMapType===nh,normalMapTangentSpace:K&&x.normalMapType===Ka,packedNormalMap:K&&x.normalMapType===Ka&&i0(x.normalMap.format),metalnessMap:ft,roughnessMap:q,anisotropy:v,anisotropyMap:ot,clearcoat:At,clearcoatMap:xt,clearcoatNormalMap:yt,clearcoatRoughnessMap:ht,dispersion:Dt,retroreflection:R,iridescence:_,iridescenceMap:ut,iridescenceThicknessMap:vt,sheen:X,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Mt,specularColorMap:kt,specularIntensityMap:Xt,transmission:j,transmissionMap:Jt,thicknessMap:W,gradientMap:bt,opaque:x.transparent===!1&&x.blending===ji&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:Tt,alphaHash:It,combine:x.combine,mapUv:it&&g(x.map.channel),aoMapUv:B&&g(x.aoMap.channel),lightMapUv:D&&g(x.lightMap.channel),bumpMapUv:Y&&g(x.bumpMap.channel),normalMapUv:K&&g(x.normalMap.channel),displacementMapUv:ct&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:ft&&g(x.metalnessMap.channel),roughnessMapUv:q&&g(x.roughnessMap.channel),anisotropyMapUv:ot&&g(x.anisotropyMap.channel),clearcoatMapUv:xt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(x.sheenRoughnessMap.channel),specularMapUv:Mt&&g(x.specularMap.channel),specularColorMapUv:kt&&g(x.specularColorMap.channel),specularIntensityMapUv:Xt&&g(x.specularIntensityMap.channel),transmissionMapUv:Jt&&g(x.transmissionMap.channel),thicknessMapUv:W&&g(x.thicknessMap.channel),alphaMapUv:dt&&g(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(K||v),vertexNormals:!!$.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(it||dt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||$.attributes.normal===void 0&&K===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:P,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:wt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:it&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ke,flipSided:x.side===Ce,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&x.extensions.multiDraw===!0||O)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(A,x),E(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function E(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let A=f[x.type],U;if(A){let z=bn[A];U=vh.clone(z.uniforms)}else U=x.uniforms;return U}function y(x,A){let U=u.get(A);return U!==void 0?++U.usedTimes:(U=new e0(i,A,x,s),c.push(U),u.set(A,U)),U}function T(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function L(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:L}}function r0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,S,m,p){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=E):(E.id=h.id,E.object=h,E.geometry=f,E.material=g,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=m,E.group=p),t++,E}function l(h,f,g,S,m,p,E){E.reversedDepth===!0&&(m=-m);let C=o(h,f,g,S,m,p);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(h,f,g,S,m,p){let E=o(h,f,g,S,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function u(h,f){e.length>1&&e.sort(h||a0),n.length>1&&n.sort(f||kh),s.length>1&&s.sort(f||kh)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function o0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vh,i.set(n,[a])):s>=r.length?(a=new Vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new qt};break;case"SpotLight":e={position:new V,direction:new V,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function c0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h0=0;function u0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d0(i){let t=new l0,e=c0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new le,a=new le;function o(c){let u=0,d=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,g=0,S=0,m=0,p=0,E=0,C=0,y=0,T=0,b=0,L=0,x=0,A=0,U=0;c.sort(u0);for(let k=0,et=c.length;k<et;k++){let G=c[k],$=G.color,lt=G.intensity,J=G.distance,Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Qn?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)u+=$.r*lt,d+=$.g*lt,h+=$.b*lt;else if(G.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(G.sh.coefficients[nt],lt);U++}else if(G.isSunLight){let nt=t.get(G);if(nt.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let st=G.shadow,at=e.get(G);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=Z;let Pt=st.getViewportCount();for(let wt=0;wt<Pt;wt++)n.sunShadowMatrix[S+wt]=st.getMatrix(wt),n.sunShadowCascade[S+wt]=st._cascadeData[wt];S+=Pt,g++}n.sun[f]=nt,f++}else if(G.isDirectionalLight){let nt=t.get(G);if(nt.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let st=G.shadow,at=e.get(G);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=G.shadow.matrix,T++}n.directional[m]=nt,m++}else if(G.isSpotLight){let nt=t.get(G);nt.position.setFromMatrixPosition(G.matrixWorld),nt.color.copy($).multiplyScalar(lt),nt.distance=J,nt.coneCos=Math.cos(G.angle),nt.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),nt.decay=G.decay,n.spot[E]=nt;let st=G.shadow;if(G.map&&(n.spotLightMap[x]=G.map,x++,st.updateMatrices(G),G.castShadow&&A++),n.spotLightMatrix[E]=st.matrix,G.castShadow){let at=e.get(G);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[E]=at,n.spotShadowMap[E]=Z,L++}E++}else if(G.isRectAreaLight){let nt=t.get(G);nt.color.copy($).multiplyScalar(lt),nt.halfWidth.set(G.width*.5,0,0),nt.halfHeight.set(0,G.height*.5,0),n.rectArea[C]=nt,C++}else if(G.isPointLight){let nt=t.get(G);if(nt.color.copy(G.color).multiplyScalar(G.intensity),nt.distance=G.distance,nt.decay=G.decay,G.castShadow){let st=G.shadow,at=e.get(G);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=G.shadow.matrix,b++}n.point[p]=nt,p++}else if(G.isHemisphereLight){let nt=t.get(G);nt.skyColor.copy(G.color).multiplyScalar(lt),nt.groundColor.copy(G.groundColor).multiplyScalar(lt),n.hemi[y]=nt,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let z=n.hash;(z.sunLength!==f||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==E||z.rectAreaLength!==C||z.hemiLength!==y||z.numSunShadows!==g||z.numDirectionalShadows!==T||z.numPointShadows!==b||z.numSpotShadows!==L||z.numSpotMaps!==x||z.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=U,z.sunLength=f,z.directionalLength=m,z.pointLength=p,z.spotLength=E,z.rectAreaLength=C,z.hemiLength=y,z.numSunShadows=g,z.numDirectionalShadows=T,z.numPointShadows=b,z.numSpotShadows=L,z.numSpotMaps=x,z.numLightProbes=U,n.version=h0++)}function l(c,u){let d=0,h=0,f=0,g=0,S=0,m=0,p=u.matrixWorldInverse;for(let E=0,C=c.length;E<C;E++){let y=c[E];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let T=n.rectArea[S];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Gh(i){let t=new d0(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function f0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gh(i),t.set(s,[o])):r>=a.length?(o=new Gh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`,g0=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],_0=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Hh=new le,tr=new V,Il=new V;function x0(i,t,e){let n=new Xi,s=new pt,r=new pt,a=new pe,o=new Kr,l=new jr,c={},u=e.maxTextureSize,d={[Jn]:Ce,[Ce]:Jn,[ke]:ke},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ge(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let p=this.type;this.render=function(b,L,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Nc&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ws);let A=i.getRenderTarget(),U=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Mn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let et=p!==this.type;et&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach($=>$.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,$=b.length;G<$;G++){let lt=b[G],J=lt.shadow;if(J===void 0){Ht("WebGLShadowMap:",lt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Z=J.getFrameExtents();s.multiply(Z),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,J.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=nt,J.map===null||et===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Ki){if(lt.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ve(s.x,s.y,{format:Qn,type:un,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),J.map.texture.name=lt.name+".shadowMap",J.map.depthTexture=new Wn(s.x,s.y,tn),J.map.depthTexture.name=lt.name+".shadowMapDepth",J.map.depthTexture.format=gn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Te,J.map.depthTexture.magFilter=Te}else lt.isPointLight?(J.map=new no(s.x),J.map.depthTexture=new Gr(s.x,hn)):(J.map=new Ve(s.x,s.y),J.map.depthTexture=new Wn(s.x,s.y,hn)),J.map.depthTexture.name=lt.name+".shadowMap",J.map.depthTexture.format=gn,this.type===Ws?(J.map.depthTexture.compareFunction=nt?Qa:ja,J.map.depthTexture.minFilter=Ae,J.map.depthTexture.magFilter=Ae):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Te,J.map.depthTexture.magFilter=Te);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let st=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();lt.isPointLight!==!0&&J.updateMatrices(lt,x);for(let at=0;at<st;at++){let Pt=J.getCamera(at);if(lt.isPointLight){let wt=J.camera,Zt=J.matrix,Wt=lt.distance||wt.far;Wt!==wt.far&&(wt.far=Wt,wt.updateProjectionMatrix()),tr.setFromMatrixPosition(lt.matrixWorld),wt.position.copy(tr),Il.copy(wt.position),Il.add(g0[at]),wt.up.copy(_0[at]),wt.lookAt(Il),wt.updateMatrixWorld(),Zt.makeTranslation(-tr.x,-tr.y,-tr.z),Hh.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Hh,wt.coordinateSystem,wt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,at),i.clear();else{at===0&&(i.setRenderTarget(J.map),i.clear());let wt=J.getViewport(at);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),k.viewport(a)}n=J.getFrustum(at),y(L,x,Pt,lt,this.type)}J.isPointLightShadow!==!0&&this.type===Ki&&E(J,x),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,U,z)};function E(b,L){let x=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ve(s.x,s.y,{format:Qn,type:un}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,x,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,x,f,S,null)}function C(b,L,x,A){let U=null,z=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)U=z;else if(U=x.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=U.uuid,et=L.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let $=G[et];$===void 0&&($=U.clone(),G[et]=$,L.addEventListener("dispose",T)),U=$}if(U.visible=L.visible,U.wireframe=L.wireframe,A===Ki?U.side=L.shadowSide!==null?L.shadowSide:L.side:U.side=L.shadowSide!==null?L.shadowSide:d[L.side],U.alphaMap=L.alphaMap,U.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,U.map=L.map,U.clipShadows=L.clipShadows,U.clippingPlanes=L.clippingPlanes,U.clipIntersection=L.clipIntersection,U.displacementMap=L.displacementMap,U.displacementScale=L.displacementScale,U.displacementBias=L.displacementBias,U.wireframeLinewidth=L.wireframeLinewidth,U.linewidth=L.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=i.properties.get(U);k.light=x}return U}function y(b,L,x,A,U){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===Ki)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let et=t.update(b),G=b.material;if(Array.isArray(G)){let $=et.groups;for(let lt=0,J=$.length;lt<J;lt++){let Z=$[lt],nt=G[Z.materialIndex];if(nt&&nt.visible){let st=C(b,nt,A,U);b.onBeforeShadow(i,b,L,x,et,st,Z),i.renderBufferDirect(x,null,et,st,b,Z),b.onAfterShadow(i,b,L,x,et,st,Z)}}}else if(G.visible){let $=C(b,G,A,U);b.onBeforeShadow(i,b,L,x,et,$,null),i.renderBufferDirect(x,null,et,$,b,null),b.onAfterShadow(i,b,L,x,et,$,null)}}let k=b.children;for(let et=0,G=k.length;et<G;et++)y(k[et],L,x,A,U)}function T(b){b.target.removeEventListener("dispose",T);for(let x in c){let A=c[x],U=b.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function y0(i,t){function e(){let W=!1,bt=new pe,dt=null,Tt=new pe(0,0,0,0);return{setMask:function(It){dt!==It&&!W&&(i.colorMask(It,It,It,It),dt=It)},setLocked:function(It){W=It},setClear:function(It,gt,Vt,Bt,ce){ce===!0&&(It*=Bt,gt*=Bt,Vt*=Bt),bt.set(It,gt,Vt,Bt),Tt.equals(bt)===!1&&(i.clearColor(It,gt,Vt,Bt),Tt.copy(bt))},reset:function(){W=!1,dt=null,Tt.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,dt=null,Tt=null,It=null;return{setReversed:function(gt){if(bt!==gt){let Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;let Bt=It;It=null,this.setClear(Bt)}},getReversed:function(){return bt},setTest:function(gt){gt?N(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(gt){dt!==gt&&!W&&(i.depthMask(gt),dt=gt)},setFunc:function(gt){if(bt&&(gt=ph[gt]),Tt!==gt){switch(gt){case Ir:i.depthFunc(i.NEVER);break;case Pr:i.depthFunc(i.ALWAYS);break;case Lr:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Dr:i.depthFunc(i.GEQUAL);break;case Ur:i.depthFunc(i.GREATER);break;case Fr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=gt}},setLocked:function(gt){W=gt},setClear:function(gt){It!==gt&&(It=gt,bt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){W=!1,dt=null,Tt=null,It=null,bt=!1}}}function s(){let W=!1,bt=null,dt=null,Tt=null,It=null,gt=null,Vt=null,Bt=null,ce=null;return{setTest:function(ie){W||(ie?N(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(ie){bt!==ie&&!W&&(i.stencilMask(ie),bt=ie)},setFunc:function(ie,nn,dn){(dt!==ie||Tt!==nn||It!==dn)&&(i.stencilFunc(ie,nn,dn),dt=ie,Tt=nn,It=dn)},setOp:function(ie,nn,dn){(gt!==ie||Vt!==nn||Bt!==dn)&&(i.stencilOp(ie,nn,dn),gt=ie,Vt=nn,Bt=dn)},setLocked:function(ie){W=ie},setClear:function(ie){ce!==ie&&(i.clearStencil(ie),ce=ie)},reset:function(){W=!1,bt=null,dt=null,Tt=null,It=null,gt=null,Vt=null,Bt=null,ce=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,E=null,C=null,y=null,T=null,b=null,L=null,x=new qt(0,0,0),A=0,U=!1,z=null,k=null,et=null,G=null,$=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Z=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=Z>=1):nt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=Z>=2);let st=null,at={},Pt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Zt=new pe().fromArray(Pt),Wt=new pe().fromArray(wt);function $t(W,bt,dt,Tt){let It=new Uint8Array(4),gt=i.createTexture();i.bindTexture(W,gt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<dt;Vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(bt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return gt}let F={};F[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(i.DEPTH_TEST),a.setFunc(Fi),Y(!1),K(Jo),N(i.CULL_FACE),B(Mn);function N(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function P(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function I(W,bt){return h[W]!==bt?(i.bindFramebuffer(W,bt),h[W]=bt,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function O(W,bt){let dt=g,Tt=!1;if(W){dt=f.get(bt),dt===void 0&&(dt=[],f.set(bt,dt));let It=W.textures;if(dt.length!==It.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Vt=It.length;gt<Vt;gt++)dt[gt]=i.COLOR_ATTACHMENT0+gt;dt.length=It.length,Tt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(dt)}function it(W){return S!==W?(i.useProgram(W),S=W,!0):!1}let _t={[fi]:i.FUNC_ADD,[Uc]:i.FUNC_SUBTRACT,[Fc]:i.FUNC_REVERSE_SUBTRACT};_t[Oc]=i.MIN,_t[Bc]=i.MAX;let w={[zc]:i.ZERO,[kc]:i.ONE,[Vc]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Yc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[qc]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Zc]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[$c]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(W,bt,dt,Tt,It,gt,Vt,Bt,ce,ie){if(W===Mn){m===!0&&(P(i.BLEND),m=!1);return}if(m===!1&&(N(i.BLEND),m=!0),W!==Dc){if(W!==p||ie!==U){if((E!==fi||T!==fi)&&(i.blendEquation(i.FUNC_ADD),E=fi,T=fi),ie)switch(W){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",W);break}else switch(W){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",W);break}C=null,y=null,b=null,L=null,x.set(0,0,0),A=0,p=W,U=ie}return}It=It||bt,gt=gt||dt,Vt=Vt||Tt,(bt!==E||It!==T)&&(i.blendEquationSeparate(_t[bt],_t[It]),E=bt,T=It),(dt!==C||Tt!==y||gt!==b||Vt!==L)&&(i.blendFuncSeparate(w[dt],w[Tt],w[gt],w[Vt]),C=dt,y=Tt,b=gt,L=Vt),(Bt.equals(x)===!1||ce!==A)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ce),x.copy(Bt),A=ce),p=W,U=!1}function D(W,bt){W.side===ke?P(i.CULL_FACE):N(i.CULL_FACE);let dt=W.side===Ce;bt&&(dt=!dt),Y(dt),W.blending===ji&&W.transparent===!1?B(Mn):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Tt=W.stencilWrite;o.setTest(Tt),Tt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),mt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(W){z!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),z=W)}function K(W){W!==Pc?(N(i.CULL_FACE),W!==k&&(W===Jo?i.cullFace(i.BACK):W===Lc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),k=W}function ct(W){W!==et&&(J&&i.lineWidth(W),et=W)}function mt(W,bt,dt){W?(N(i.POLYGON_OFFSET_FILL),(G!==bt||$!==dt)&&(G=bt,$=dt,a.getReversed()&&(bt=-bt),i.polygonOffset(bt,dt))):P(i.POLYGON_OFFSET_FILL)}function ft(W){W?N(i.SCISSOR_TEST):P(i.SCISSOR_TEST)}function q(W){W===void 0&&(W=i.TEXTURE0+lt-1),st!==W&&(i.activeTexture(W),st=W)}function v(W,bt,dt){dt===void 0&&(st===null?dt=i.TEXTURE0+lt-1:dt=st);let Tt=at[dt];Tt===void 0&&(Tt={type:void 0,texture:void 0},at[dt]=Tt),(Tt.type!==W||Tt.texture!==bt)&&(st!==dt&&(i.activeTexture(dt),st=dt),i.bindTexture(W,bt||F[W]),Tt.type=W,Tt.texture=bt)}function At(){let W=at[st];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Dt(){try{i.compressedTexImage2D(...arguments)}catch(W){Yt("WebGLState:",W)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(W){Yt("WebGLState:",W)}}function _(){try{i.texSubImage2D(...arguments)}catch(W){Yt("WebGLState:",W)}}function X(){try{i.texSubImage3D(...arguments)}catch(W){Yt("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Yt("WebGLState:",W)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Yt("WebGLState:",W)}}function xt(){try{i.texStorage2D(...arguments)}catch(W){Yt("WebGLState:",W)}}function yt(){try{i.texStorage3D(...arguments)}catch(W){Yt("WebGLState:",W)}}function ht(){try{i.texImage2D(...arguments)}catch(W){Yt("WebGLState:",W)}}function ut(){try{i.texImage3D(...arguments)}catch(W){Yt("WebGLState:",W)}}function vt(W){return d[W]!==void 0?d[W]:i.getParameter(W)}function Ot(W,bt){d[W]!==bt&&(i.pixelStorei(W,bt),d[W]=bt)}function St(W){Zt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Zt.copy(W))}function Mt(W){Wt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Wt.copy(W))}function kt(W,bt){let dt=c.get(bt);dt===void 0&&(dt=new WeakMap,c.set(bt,dt));let Tt=dt.get(W);Tt===void 0&&(Tt=i.getUniformBlockIndex(bt,W.name),dt.set(W,Tt))}function Xt(W,bt){let Tt=c.get(bt).get(W);l.get(bt)!==Tt&&(i.uniformBlockBinding(bt,Tt,W.__bindingPointIndex),l.set(bt,Tt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},st=null,at={},h={},f=new WeakMap,g=[],S=null,m=!1,p=null,E=null,C=null,y=null,T=null,b=null,L=null,x=new qt(0,0,0),A=0,U=!1,z=null,k=null,et=null,G=null,$=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:P,bindFramebuffer:I,drawBuffers:O,useProgram:it,setBlending:B,setMaterial:D,setFlipSided:Y,setCullFace:K,setLineWidth:ct,setPolygonOffset:mt,setScissorTest:ft,activeTexture:q,bindTexture:v,unbindTexture:At,compressedTexImage2D:Dt,compressedTexImage3D:R,texImage2D:ht,texImage3D:ut,pixelStorei:Ot,getParameter:vt,updateUBOMapping:kt,uniformBlockBinding:Xt,texStorage2D:xt,texStorage3D:yt,texSubImage2D:_,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:ot,scissor:St,viewport:Mt,reset:Jt}}function v0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,_){return g?new OffscreenCanvas(R,_):vs("canvas")}function m(R,_,X){let j=1,ot=Dt(R);if((ot.width>X||ot.height>X)&&(j=X/Math.max(ot.width,ot.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let xt=Math.floor(j*ot.width),yt=Math.floor(j*ot.height);h===void 0&&(h=S(xt,yt));let ht=_?S(xt,yt):h;return ht.width=xt,ht.height=yt,ht.getContext("2d").drawImage(R,0,0,xt,yt),Ht("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+xt+"x"+yt+")."),ht}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,_,X,j,ot,xt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;j&&(yt=t.get("EXT_texture_norm16"),yt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=_;if(_===i.RED&&(X===i.FLOAT&&(ht=i.R32F),X===i.HALF_FLOAT&&(ht=i.R16F),X===i.UNSIGNED_BYTE&&(ht=i.R8),X===i.UNSIGNED_SHORT&&yt&&(ht=yt.R16_EXT),X===i.SHORT&&yt&&(ht=yt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.R8UI),X===i.UNSIGNED_SHORT&&(ht=i.R16UI),X===i.UNSIGNED_INT&&(ht=i.R32UI),X===i.BYTE&&(ht=i.R8I),X===i.SHORT&&(ht=i.R16I),X===i.INT&&(ht=i.R32I)),_===i.RG&&(X===i.FLOAT&&(ht=i.RG32F),X===i.HALF_FLOAT&&(ht=i.RG16F),X===i.UNSIGNED_BYTE&&(ht=i.RG8),X===i.UNSIGNED_SHORT&&yt&&(ht=yt.RG16_EXT),X===i.SHORT&&yt&&(ht=yt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RG8UI),X===i.UNSIGNED_SHORT&&(ht=i.RG16UI),X===i.UNSIGNED_INT&&(ht=i.RG32UI),X===i.BYTE&&(ht=i.RG8I),X===i.SHORT&&(ht=i.RG16I),X===i.INT&&(ht=i.RG32I)),_===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),X===i.UNSIGNED_INT&&(ht=i.RGB32UI),X===i.BYTE&&(ht=i.RGB8I),X===i.SHORT&&(ht=i.RGB16I),X===i.INT&&(ht=i.RGB32I)),_===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),X===i.UNSIGNED_INT&&(ht=i.RGBA32UI),X===i.BYTE&&(ht=i.RGBA8I),X===i.SHORT&&(ht=i.RGBA16I),X===i.INT&&(ht=i.RGBA32I)),_===i.RGB&&(X===i.UNSIGNED_SHORT&&yt&&(ht=yt.RGB16_EXT),X===i.SHORT&&yt&&(ht=yt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),_===i.RGBA){let ut=xt?ys:ee.getTransfer(ot);X===i.FLOAT&&(ht=i.RGBA32F),X===i.HALF_FLOAT&&(ht=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ht=ut===re?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&yt&&(ht=yt.RGBA16_EXT),X===i.SHORT&&yt&&(ht=yt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function T(R,_){let X;return R?_===null||_===hn||_===ts?X=i.DEPTH24_STENCIL8:_===tn?X=i.DEPTH32F_STENCIL8:_===Qi&&(X=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hn||_===ts?X=i.DEPTH_COMPONENT24:_===tn?X=i.DEPTH_COMPONENT32F:_===Qi&&(X=i.DEPTH_COMPONENT16),X}function b(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Te&&R.minFilter!==Ae?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function L(R){let _=R.target;_.removeEventListener("dispose",L),A(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(R){let _=R.target;_.removeEventListener("dispose",x),z(_)}function A(R){let _=n.get(R);if(_.__webglInit===void 0)return;let X=R.source,j=f.get(X);if(j){let ot=j[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&U(R),Object.keys(j).length===0&&f.delete(X)}n.remove(R)}function U(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let X=R.source,j=f.get(X);delete j[_.__cacheKey],a.memory.textures--}function z(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let ot=0;ot<_.__webglFramebuffer[j].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[j][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=R.textures;for(let j=0,ot=X.length;j<ot;j++){let xt=n.get(X[j]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(X[j])}n.remove(R)}let k=0;function et(){k=0}function G(){return k}function $(R){k=R}function lt(){let R=k;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function J(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Z(R,_){let X=n.get(R);if(R.isVideoTexture&&v(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let j=R.image;if(j===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{P(X,R,_);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+_)}function nt(R,_){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){P(X,R,_);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+_)}function st(R,_){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){P(X,R,_);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+_)}function at(R,_){let X=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){I(X,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+_)}let Pt={[Oi]:i.REPEAT,[je]:i.CLAMP_TO_EDGE,[Bi]:i.MIRRORED_REPEAT},wt={[Te]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Zt={[sh]:i.NEVER,[ch]:i.ALWAYS,[rh]:i.LESS,[ja]:i.LEQUAL,[ah]:i.EQUAL,[Qa]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function Wt(R,_){if(_.type===tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ae||_.magFilter===fa||_.magFilter===qs||_.magFilter===Kn||_.minFilter===Ae||_.minFilter===fa||_.minFilter===qs||_.minFilter===Kn)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Pt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Pt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Pt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,wt[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,wt[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Te||_.minFilter!==qs&&_.minFilter!==Kn||_.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $t(R,_){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",L));let j=_.source,ot=f.get(j);ot===void 0&&(ot={},f.set(j,ot));let xt=J(_);if(xt!==R.__cacheKey){ot[xt]===void 0&&(ot[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ot[xt].usedTimes++;let yt=ot[R.__cacheKey];yt!==void 0&&(ot[R.__cacheKey].usedTimes--,yt.usedTimes===0&&U(_)),R.__cacheKey=xt,R.__webglTexture=ot[xt].texture}return X}function F(R,_,X){return Math.floor(Math.floor(R/X)/_)}function N(R,_,X,j){let xt=R.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,X,j,_.data);else{xt.sort((Ot,St)=>Ot.start-St.start);let yt=0;for(let Ot=1;Ot<xt.length;Ot++){let St=xt[yt],Mt=xt[Ot],kt=St.start+St.count,Xt=F(Mt.start,_.width,4),Jt=F(St.start,_.width,4);Mt.start<=kt+1&&Xt===Jt&&F(Mt.start+Mt.count-1,_.width,4)===Xt?St.count=Math.max(St.count,Mt.start+Mt.count-St.start):(++yt,xt[yt]=Mt)}xt.length=yt+1;let ht=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ot=0,St=xt.length;Ot<St;Ot++){let Mt=xt[Ot],kt=Math.floor(Mt.start/4),Xt=Math.ceil(Mt.count/4),Jt=kt%_.width,W=Math.floor(kt/_.width),bt=Xt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,Jt,W,bt,dt,X,j,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function P(R,_,X){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let ot=$t(R,_),xt=_.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+X);let yt=n.get(xt);if(xt.version!==yt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let dt=ee.getPrimaries(ee.workingColorSpace),Tt=_.colorSpace===Ln?null:ee.getPrimaries(_.colorSpace),It=_.colorSpace===Ln||dt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ut=m(_.image,!1,s.maxTextureSize);ut=At(_,ut);let vt=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),St=y(_.internalFormat,vt,Ot,_.normalized,_.colorSpace,_.isVideoTexture);Wt(j,_);let Mt,kt=_.mipmaps,Xt=_.isVideoTexture!==!0,Jt=yt.__version===void 0||ot===!0,W=xt.dataReady,bt=b(_,ut);if(_.isDepthTexture)St=T(_.format===jn,_.type),Jt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,St,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,St,ut.width,ut.height,0,vt,Ot,null));else if(_.isDataTexture)if(kt.length>0){Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let dt=0,Tt=kt.length;dt<Tt;dt++)Mt=kt[dt],Xt?W&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,vt,Ot,Mt.data);_.generateMipmaps=!1}else Xt?(Jt&&e.texStorage2D(i.TEXTURE_2D,bt,St,ut.width,ut.height),W&&N(_,ut,vt,Ot)):e.texImage2D(i.TEXTURE_2D,0,St,ut.width,ut.height,0,vt,Ot,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,kt[0].width,kt[0].height,ut.depth);for(let dt=0,Tt=kt.length;dt<Tt;dt++)if(Mt=kt[dt],_.format!==en)if(vt!==null)if(Xt){if(W)if(_.layerUpdates.size>0){let It=Tl(Mt.width,Mt.height,_.format,_.type);for(let gt of _.layerUpdates){let Vt=Mt.data.subarray(gt*It/Mt.data.BYTES_PER_ELEMENT,(gt+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,gt,Mt.width,Mt.height,1,vt,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,ut.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,St,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,ut.depth,vt,Ot,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,St,Mt.width,Mt.height,ut.depth,0,vt,Ot,Mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,bt,St,kt[0].width,kt[0].height);for(let dt=0,Tt=kt.length;dt<Tt;dt++)Mt=kt[dt],_.format!==en?vt!==null?Xt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,Mt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?W&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,St,Mt.width,Mt.height,0,vt,Ot,Mt.data)}else if(_.isDataArrayTexture)if(Xt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,St,ut.width,ut.height,ut.depth),W)if(_.layerUpdates.size>0){let dt=Tl(ut.width,ut.height,_.format,_.type);for(let Tt of _.layerUpdates){let It=ut.data.subarray(Tt*dt/ut.data.BYTES_PER_ELEMENT,(Tt+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Tt,ut.width,ut.height,1,vt,Ot,It)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,vt,Ot,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,ut.width,ut.height,ut.depth,0,vt,Ot,ut.data);else if(_.isData3DTexture)Xt?(Jt&&e.texStorage3D(i.TEXTURE_3D,bt,St,ut.width,ut.height,ut.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,vt,Ot,ut.data)):e.texImage3D(i.TEXTURE_3D,0,St,ut.width,ut.height,ut.depth,0,vt,Ot,ut.data);else if(_.isFramebufferTexture){if(Jt)if(Xt)e.texStorage2D(i.TEXTURE_2D,bt,St,ut.width,ut.height);else{let dt=ut.width,Tt=ut.height;for(let It=0;It<bt;It++)e.texImage2D(i.TEXTURE_2D,It,St,dt,Tt,0,vt,Ot,null),dt>>=1,Tt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ut.parentNode!==dt){dt.appendChild(ut),d.add(_),dt.onpaint=Tt=>{let It=Tt.changedElements;for(let gt of d)It.includes(gt.image)&&(gt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let It=i.RGBA,gt=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,gt,Vt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Xt&&Jt){let dt=Dt(kt[0]);e.texStorage2D(i.TEXTURE_2D,bt,St,dt.width,dt.height)}for(let dt=0,Tt=kt.length;dt<Tt;dt++)Mt=kt[dt],Xt?W&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,vt,Ot,Mt):e.texImage2D(i.TEXTURE_2D,dt,St,vt,Ot,Mt);_.generateMipmaps=!1}else if(Xt){if(Jt){let dt=Dt(ut);e.texStorage2D(i.TEXTURE_2D,bt,St,dt.width,dt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ot,ut)}else e.texImage2D(i.TEXTURE_2D,0,St,vt,Ot,ut);p(_)&&E(j),yt.__version=xt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function I(R,_,X){if(_.image.length!==6)return;let j=$t(R,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);let xt=n.get(ot);if(ot.version!==xt.__version||j===!0){e.activeTexture(i.TEXTURE0+X);let yt=ee.getPrimaries(ee.workingColorSpace),ht=_.colorSpace===Ln?null:ee.getPrimaries(_.colorSpace),ut=_.colorSpace===Ln||yt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,St=[];for(let gt=0;gt<6;gt++)!vt&&!Ot?St[gt]=m(_.image[gt],!0,s.maxCubemapSize):St[gt]=Ot?_.image[gt].image:_.image[gt],St[gt]=At(_,St[gt]);let Mt=St[0],kt=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type),Jt=y(_.internalFormat,kt,Xt,_.normalized,_.colorSpace),W=_.isVideoTexture!==!0,bt=xt.__version===void 0||j===!0,dt=ot.dataReady,Tt=b(_,Mt);Wt(i.TEXTURE_CUBE_MAP,_);let It;if(vt){W&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Jt,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){It=St[gt].mipmaps;for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];_.format!==en?kt!==null?W?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Bt.width,Bt.height,kt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,Jt,Bt.width,Bt.height,0,Bt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Bt.width,Bt.height,kt,Xt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,Jt,Bt.width,Bt.height,0,kt,Xt,Bt.data)}}}else{if(It=_.mipmaps,W&&bt){It.length>0&&Tt++;let gt=Dt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Jt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Ot){W?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,St[gt].width,St[gt].height,kt,Xt,St[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,St[gt].width,St[gt].height,0,kt,Xt,St[gt].data);for(let Vt=0;Vt<It.length;Vt++){let ce=It[Vt].image[gt].image;W?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,ce.width,ce.height,kt,Xt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,Jt,ce.width,ce.height,0,kt,Xt,ce.data)}}else{W?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Xt,St[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Jt,kt,Xt,St[gt]);for(let Vt=0;Vt<It.length;Vt++){let Bt=It[Vt];W?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,kt,Xt,Bt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,Jt,kt,Xt,Bt.image[gt])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),xt.__version=ot.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function O(R,_,X,j,ot,xt){let yt=r.convert(X.format,X.colorSpace),ht=r.convert(X.type),ut=y(X.internalFormat,yt,ht,X.normalized,X.colorSpace),vt=n.get(_),Ot=n.get(X);if(Ot.__renderTarget=_,!vt.__hasExternalTextures){let St=Math.max(1,_.width>>xt),Mt=Math.max(1,_.height>>xt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,xt,ut,St,Mt,_.depth,0,yt,ht,null):e.texImage2D(ot,xt,ut,St,Mt,0,yt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ot,Ot.__webglTexture,0,ft(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ot,Ot.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,_,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let j=_.depthTexture,ot=j&&j.isDepthTexture?j.type:null,xt=T(_.stencilBuffer,ot),yt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),xt,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),xt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{let j=_.textures;for(let ot=0;ot<j.length;ot++){let xt=j[ot],yt=r.convert(xt.format,xt.colorSpace),ht=r.convert(xt.type),ut=y(xt.internalFormat,yt,ht,xt.normalized,xt.colorSpace);q(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),ut,_.width,_.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(R,_,X){let j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=n.get(_.depthTexture);if(ot.__renderTarget=_,(!ot.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),ot.__webglTexture===void 0){ot.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,_.depthTexture);let vt=r.convert(_.depthTexture.format),Ot=r.convert(_.depthTexture.type),St;_.depthTexture.format===gn?St=i.DEPTH_COMPONENT24:_.depthTexture.format===jn&&(St=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,St,_.width,_.height,0,vt,Ot,null)}}else Z(_.depthTexture,0);let xt=ot.__webglTexture,yt=ft(_),ht=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ut=_.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===gn)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,xt,0);else if(_.depthTexture.format===jn)q(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function w(R){let _=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",ot)};j.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=j}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(X)for(let j=0;j<6;j++)_t(_.__webglFramebuffer[j],R,j);else{let j=R.texture.mipmaps;j&&j.length>0?_t(_.__webglFramebuffer[0],R,0):_t(_.__webglFramebuffer,R,0)}else if(X){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),it(_.__webglDepthbuffer[j],R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,xt)}}else{let j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(R,_,X){let j=n.get(R);_!==void 0&&O(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&w(R)}function D(R){let _=R.texture,X=n.get(R),j=n.get(_);R.addEventListener("dispose",x);let ot=R.textures,xt=R.isWebGLCubeRenderTarget===!0,yt=ot.length>1;if(yt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),xt){X.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[ht]=[];for(let ut=0;ut<_.mipmaps.length;ut++)X.__webglFramebuffer[ht][ut]=i.createFramebuffer()}else X.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)X.__webglFramebuffer[ht]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ht=0,ut=ot.length;ht<ut;ht++){let vt=n.get(ot[ht]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&q(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ht=0;ht<ot.length;ht++){let ut=ot[ht];X.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ht]);let vt=r.convert(ut.format,ut.colorSpace),Ot=r.convert(ut.type),St=y(ut.internalFormat,vt,Ot,ut.normalized,ut.colorSpace,R.isXRRenderTarget===!0),Mt=ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,St,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,X.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),it(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)O(X.__webglFramebuffer[ht][ut],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else O(X.__webglFramebuffer[ht],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ht=0,ut=ot.length;ht<ut;ht++){let vt=ot[ht],Ot=n.get(vt),St=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ot.__webglTexture),Wt(St,vt),O(X.__webglFramebuffer,R,vt,i.COLOR_ATTACHMENT0+ht,St,0),p(vt)&&E(St)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Wt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)O(X.__webglFramebuffer[ut],R,_,i.COLOR_ATTACHMENT0,ht,ut);else O(X.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,ht,0);p(_)&&E(ht),e.unbindTexture()}R.depthBuffer&&w(R)}function Y(R){let _=R.textures;for(let X=0,j=_.length;X<j;X++){let ot=_[X];if(p(ot)){let xt=C(R),yt=n.get(ot).__webglTexture;e.bindTexture(xt,yt),E(xt),e.unbindTexture()}}}let K=[],ct=[];function mt(R){if(R.samples>0){if(q(R)===!1){let _=R.textures,X=R.width,j=R.height,ot=i.COLOR_BUFFER_BIT,xt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),ht=_.length>1;if(ht)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ut=R.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ot=n.get(_[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,X,j,0,0,X,j,ot,i.NEAREST),l===!0&&(K.length=0,ct.length=0,K.push(i.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(K.push(xt),ct.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Ot=n.get(_[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ft(R){return Math.min(s.maxSamples,R.samples)}function q(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function v(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function At(R,_){let X=R.colorSpace,j=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==xs&&X!==Ln&&(ee.getTransfer(X)===re?(j!==en||ot!==Ge)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",X)),_}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=lt,this.resetTextureUnits=et,this.getTextureUnits=G,this.setTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=nt,this.setTexture3D=st,this.setTextureCube=at,this.rebindTextures=B,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=O,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function M0(i,t){function e(n,s=Ln){let r,a=ee.getTransfer(s);if(n===Ge)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hl)return i.BYTE;if(n===ul)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===hn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===pl)return i.ALPHA;if(n===ml)return i.RGB;if(n===en)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===_a)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===va)return i.RGBA_INTEGER;if(n===Ys||n===Zs||n===Js||n===$s)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===wa||n===Aa||n===Ca||n===Ra||n===Ks||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===wa)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ca)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===La||n===Na||n===Da||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ga||n===Ha||n===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===js||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
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

}`,Bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:S0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zl=class extends _n{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",m=new Bl,p={},E=e.getContextAttributes(),C=null,y=null,T=[],b=[],L=new pt,x=null,A=null,U=new Ne;U.viewport=new pe;let z=new Ne;z.viewport=new pe;let k=[U,z],et=new ha,G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let N=T[F];return N===void 0&&(N=new Hi,T[F]=N),N.getTargetRaySpace()},this.getControllerGrip=function(F){let N=T[F];return N===void 0&&(N=new Hi,T[F]=N),N.getGripSpace()},this.getHand=function(F){let N=T[F];return N===void 0&&(N=new Hi,T[F]=N),N.getHandSpace()};function lt(F){let N=b.indexOf(F.inputSource);if(N===-1)return;let P=T[N];P!==void 0&&(P.update(F.inputSource,F.frame,c||a),P.dispatchEvent({type:F.type,data:F.inputSource}))}function J(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Z);for(let F=0;F<T.length;F++){let N=b[F];N!==null&&(b[F]=null,T[F].disconnect(N))}G=null,$=null,m.reset();for(let F in p)delete p[F];if(t.setRenderTarget(C),f=null,h=null,d=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(L.width,L.height,!1),A!==null){let F=A.camera;F.fov=A.fov,F.zoom=A.zoom,F.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(L),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let P=null,I=null,O=null;E.depth&&(O=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,P=E.stencil?jn:gn,I=E.stencil?ts:hn);let it={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(it),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ve(h.textureWidth,h.textureHeight,{format:en,type:Ge,depthTexture:new Wn(h.textureWidth,h.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,P),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let P={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,P),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ve(f.framebufferWidth,f.framebufferHeight,{format:en,type:Ge,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(F){for(let N=0;N<F.removed.length;N++){let P=F.removed[N],I=b.indexOf(P);I>=0&&(b[I]=null,T[I].disconnect(P))}for(let N=0;N<F.added.length;N++){let P=F.added[N],I=b.indexOf(P);if(I===-1){for(let it=0;it<T.length;it++)if(it>=b.length){b.push(P),I=it;break}else if(b[it]===null){b[it]=P,I=it;break}if(I===-1)break}let O=T[I];O&&O.connect(P)}}let nt=new V,st=new V;function at(F,N,P){nt.setFromMatrixPosition(N.matrixWorld),st.setFromMatrixPosition(P.matrixWorld);let I=nt.distanceTo(st),O=N.projectionMatrix.elements,it=P.projectionMatrix.elements,_t=O[14]/(O[10]-1),w=O[14]/(O[10]+1),B=(O[9]+1)/O[5],D=(O[9]-1)/O[5],Y=(O[8]-1)/O[0],K=(it[8]+1)/it[0],ct=_t*Y,mt=_t*K,ft=I/(-Y+K),q=ft*-Y;if(N.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(q),F.translateZ(ft),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),O[10]===-1)F.projectionMatrix.copy(N.projectionMatrix),F.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let v=_t+ft,At=w+ft,Dt=ct-q,R=mt+(I-q),_=B*w/At*v,X=D*w/At*v;F.projectionMatrix.makePerspective(Dt,R,_,X,v,At),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function Pt(F,N){N===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(N.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let N=F.near,P=F.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(P=m.depthFar)),et.near=z.near=U.near=N,et.far=z.far=U.far=P,(G!==et.near||$!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),G=et.near,$=et.far),et.layers.mask=F.layers.mask|6,U.layers.mask=et.layers.mask&-5,z.layers.mask=et.layers.mask&-3;let I=F.parent,O=et.cameras;Pt(et,I);for(let it=0;it<O.length;it++)Pt(O[it],I);O.length===2?at(et,U,z):et.projectionMatrix.copy(U.projectionMatrix),A===null&&F.isPerspectiveCamera&&(A={camera:F,fov:F.fov,zoom:F.zoom}),wt(F,et,I)};function wt(F,N,P){P===null?F.matrix.copy(N.matrixWorld):(F.matrix.copy(P.matrixWorld),F.matrix.invert(),F.matrix.multiply(N.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(N.projectionMatrix),F.projectionMatrixInverse.copy(N.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Vi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(et)},this.getCameraTexture=function(F){return p[F]};let Zt=null;function Wt(F,N){if(u=N.getViewerPose(c||a),g=N,u!==null){let P=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let I=!1;P.length!==et.cameras.length&&(et.cameras.length=0,I=!0);for(let w=0;w<P.length;w++){let B=P[w],D=null;if(f!==null)D=f.getViewport(B);else{let K=d.getViewSubImage(h,B);D=K.viewport,w===0&&(t.setRenderTargetTextures(y,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(y))}let Y=k[w];Y===void 0&&(Y=new Ne,Y.layers.enable(w),Y.viewport=new pe,k[w]=Y),Y.matrix.fromArray(B.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(B.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(D.x,D.y,D.width,D.height),w===0&&(et.matrix.copy(Y.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),I===!0&&et.cameras.push(Y)}let O=s.enabledFeatures;if(O&&O.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let w=d.getDepthInformation(P[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(O&&O.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let w=0;w<P.length;w++){let B=P[w].camera;if(B){let D=p[B];D||(D=new Rs,p[B]=D);let Y=d.getCameraImage(B);D.sourceTexture=Y}}}}for(let P=0;P<T.length;P++){let I=b[P],O=T[P];I!==null&&O!==void 0&&O.update(I,N,c||a)}Zt&&Zt(F,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let $t=new Wh;$t.setAnimationLoop(Wt),this.setAnimationLoop=function(F){Zt=F},this.dispose=function(){}}},T0=new le,$h=new Gt;$h.set(-1,0,0,0,1,0,0,0,1);function E0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ml(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),C=E.envMap,y=E.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(T0.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply($h),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=s[y.id];b===void 0&&(m(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",E));let L=T.program;n.updateUBOMapping(y,L);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let T=d();y.__bindingPointIndex=T;let b=i.createBuffer(),L=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=s[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,A=b.length;x<A;x++){let U=b[x];if(Array.isArray(U))for(let z=0,k=U.length;z<k;z++)f(U[z],x,z,L);else f(U,x,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,T,b,L){if(S(y,T,b,L)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let U=0;for(let z=0;z<A.length;z++){let k=A[z],et=p(k);g(k,y.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function S(y,T,b,L){let x=y.value,A=T+"_"+b;if(L[A]===void 0)return typeof x=="number"||typeof x=="boolean"?L[A]=x:ArrayBuffer.isView(x)?L[A]=x.slice():L[A]=x.clone(),!0;{let U=L[A];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return L[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function m(y){let T=y.uniforms,b=0,L=16;for(let A=0,U=T.length;A<U;A++){let z=Array.isArray(T[A])?T[A]:[T[A]];for(let k=0,et=z.length;k<et;k++){let G=z[k],$=Array.isArray(G.value)?G.value:[G.value];for(let lt=0,J=$.length;lt<J;lt++){let Z=$[lt],nt=p(Z),st=b%L,at=st%nt.boundary,Pt=st+at;b+=at,Pt!==0&&L-Pt<nt.storage&&(b+=L-Pt),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=nt.storage}}}let x=b%L;return x>0&&(b+=L-x),y.__size=b,y.__cache={},this}function p(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",y),T}function E(y){let T=y.target;T.removeEventListener("dispose",E);let b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var A0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function C0(){return Sn===null&&(Sn=new Es(A0,16,16,Qn,un),Sn.name="DFG_LUT",Sn.minFilter=Ae,Sn.magFilter=Ae,Sn.wrapS=je,Sn.wrapT=je,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var io=class{constructor(t={}){let{canvas:e=uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ge}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let S=f,m=new Set([va,ya,xa]),p=new Set([Ge,hn,Qi,ts,ma,ga]),E=new Uint32Array(4),C=new Int32Array(4),y=new V,T=null,b=null,L=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Je,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,k=null,et=null,G=null,$=null;this._outputColorSpace=we;let lt=0,J=0,Z=null,nt=-1,st=null,at=new pe,Pt=new pe,wt=null,Zt=new qt(0),Wt=0,$t=e.width,F=e.height,N=1,P=null,I=null,O=new pe(0,0,$t,F),it=new pe(0,0,$t,F),_t=!1,w=new Xi,B=!1,D=!1,Y=new le,K=new V,ct=new pe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function q(){return Z===null?N:1}let v=n;function At(M,H){return e.getContext(M,H)}let Dt,R,_,X,j,ot,xt,yt,ht,ut,vt,Ot,St,Mt,kt,Xt,Jt,W,bt,dt,Tt,It,gt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",nn,!1),v===null){let H="webgl2";if(v=At(H,M),v===null)throw At(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(M){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Yt("WebGLRenderer: "+M.message),M}function Vt(){Dt=new Um(v),Dt.init(),Tt=new M0(v,Dt),R=new Em(v,Dt,t,Tt),_=new y0(v,Dt),R.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),et=v.createFramebuffer(),G=v.createFramebuffer(),$=v.createFramebuffer(),X=new Bm(v),j=new r0,ot=new v0(v,Dt,_,j,R,Tt,X),xt=new Dm(U),yt=new zd(v),It=new bm(v,yt),ht=new Fm(v,yt,X,It),ut=new km(v,ht,yt,It,X),W=new zm(v,R,ot),kt=new wm(j),vt=new s0(U,xt,Dt,R,It,kt),Ot=new E0(U,j),St=new o0,Mt=new f0(Dt),Jt=new Sm(U,xt,_,ut,g,l),Xt=new x0(U,ut,R),gt=new w0(v,X,R,_),bt=new Tm(v,Dt,X),dt=new Om(v,Dt,X),X.programs=vt.programs,U.capabilities=R,U.extensions=Dt,U.properties=j,U.renderLists=St,U.shadowMap=Xt,U.state=_,U.info=X}S!==Ge&&(A=new Gm(S,e.width,e.height,o,s,r));let Bt=new zl(U,v);this.xr=Bt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize($t,F,!1))},this.getSize=function(M){return M.set($t,F)},this.setSize=function(M,H,rt=!0){if(Bt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=M,F=H,e.width=Math.floor(M*N),e.height=Math.floor(H*N),rt===!0&&(e.style.width=M+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set($t*N,F*N).floor()},this.setDrawingBufferSize=function(M,H,rt){$t=M,F=H,N=rt,e.width=Math.floor(M*rt),e.height=Math.floor(H*rt),this.setViewport(0,0,M,H)},this.setEffects=function(M){if(S===Ge){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let H=0;H<M.length;H++)if(M[H].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(at)},this.getViewport=function(M){return M.copy(O)},this.setViewport=function(M,H,rt,Q){M.isVector4?O.set(M.x,M.y,M.z,M.w):O.set(M,H,rt,Q),_.viewport(at.copy(O).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(it)},this.setScissor=function(M,H,rt,Q){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,H,rt,Q),_.scissor(Pt.copy(it).multiplyScalar(N).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(M){_.setScissorTest(_t=M)},this.setOpaqueSort=function(M){P=M},this.setTransparentSort=function(M){I=M},this.getClearColor=function(M){return M.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,rt=!0){let Q=0;if(M){let tt=!1;if(Z!==null){let Rt=Z.texture.format;tt=m.has(Rt)}if(tt){let Rt=Z.texture.type,Nt=p.has(Rt),Ct=Jt.getClearColor(),Ut=Jt.getClearAlpha(),zt=Ct.r,Kt=Ct.g,te=Ct.b;Nt?(E[0]=zt,E[1]=Kt,E[2]=te,E[3]=Ut,v.clearBufferuiv(v.COLOR,0,E)):(C[0]=zt,C[1]=Kt,C[2]=te,C[3]=Ut,v.clearBufferiv(v.COLOR,0,C))}else Q|=v.COLOR_BUFFER_BIT}H&&(Q|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Q|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&v.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Jt.dispose(),St.dispose(),Mt.dispose(),j.dispose(),xt.dispose(),ut.dispose(),It.dispose(),gt.dispose(),vt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Wl),Bt.removeEventListener("sessionend",Xl),ti.stop()};function ce(M){M.preventDefault(),_l("WebGLRenderer: Context Lost."),z=!0}function ie(){_l("WebGLRenderer: Context Restored."),z=!1;let M=X.autoReset,H=Xt.enabled,rt=Xt.autoUpdate,Q=Xt.needsUpdate,tt=Xt.type;Vt(),X.autoReset=M,Xt.enabled=H,Xt.autoUpdate=rt,Xt.needsUpdate=Q,Xt.type=tt}function nn(M){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function dn(M){let H=M.target;H.removeEventListener("dispose",dn),lu(H)}function lu(M){cu(M),j.remove(M)}function cu(M){let H=j.get(M).programs;H!==void 0&&(H.forEach(function(rt){vt.releaseProgram(rt)}),M.isShaderMaterial&&vt.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,rt,Q,tt,Rt){H===null&&(H=mt);let Nt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Ct=du(M,H,rt,Q,tt);_.setMaterial(Q,Nt);let Ut=rt.index,zt=1;if(Q.wireframe===!0){if(Ut=ht.getWireframeAttribute(rt),Ut===void 0)return;zt=2}let Kt=rt.drawRange,te=rt.attributes.position,Ft=Kt.start*zt,se=(Kt.start+Kt.count)*zt;Rt!==null&&(Ft=Math.max(Ft,Rt.start*zt),se=Math.min(se,(Rt.start+Rt.count)*zt)),Ut!==null?(Ft=Math.max(Ft,0),se=Math.min(se,Ut.count)):te!=null&&(Ft=Math.max(Ft,0),se=Math.min(se,te.count));let xe=se-Ft;if(xe<0||xe===1/0)return;It.setup(tt,Q,Ct,rt,Ut);let ue,oe=bt;if(Ut!==null&&(ue=yt.get(Ut),oe=dt,oe.setIndex(ue)),tt.isMesh)Q.wireframe===!0?(_.setLineWidth(Q.wireframeLinewidth*q()),oe.setMode(v.LINES)):oe.setMode(v.TRIANGLES);else if(tt.isLine){let Ie=Q.linewidth;Ie===void 0&&(Ie=1),_.setLineWidth(Ie*q()),tt.isLineSegments?oe.setMode(v.LINES):tt.isLineLoop?oe.setMode(v.LINE_LOOP):oe.setMode(v.LINE_STRIP)}else tt.isPoints?oe.setMode(v.POINTS):tt.isSprite&&oe.setMode(v.TRIANGLES);if(tt.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))oe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let Ie=tt._multiDrawStarts,Lt=tt._multiDrawCounts,Ue=tt._multiDrawCount,ne=Ut?yt.get(Ut).bytesPerElement:1,$e=j.get(Q).currentProgram.getUniforms();for(let fn=0;fn<Ue;fn++)$e.setValue(v,"_gl_DrawID",fn),oe.render(Ie[fn]/ne,Lt[fn])}else if(tt.isInstancedMesh)oe.renderInstances(Ft,xe,tt.count);else if(rt.isInstancedBufferGeometry){let Ie=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Lt=Math.min(rt.instanceCount,Ie);oe.renderInstances(Ft,xe,Lt)}else oe.render(Ft,xe)};function Hl(M,H,rt,Q){k!==null&&M.isNodeMaterial&&k.setObject(Q,M),B===!0&&kt.setState(M,rt,!1),M.transparent===!0&&M.side===ke&&M.forceSinglePass===!1?(M.side=Ce,M.needsUpdate=!0,rr(M,H,Q),M.side=Jn,M.needsUpdate=!0,rr(M,H,Q),M.side=ke):rr(M,H,Q)}this.compile=function(M,H,rt=null){rt===null&&(rt=M),k!==null&&k.renderStart(M,H,rt),b=Mt.get(rt),b.init(H),x.push(b),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(H.layers)&&(b.pushLight(tt),tt.castShadow&&b.pushShadow(tt))}),M!==rt&&M.traverseVisible(function(tt){tt.isLight&&tt.layers.test(H.layers)&&(b.pushLight(tt),tt.castShadow&&b.pushShadow(tt))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),D=this.localClippingEnabled,B=kt.init(this.clippingPlanes,D),B===!0&&kt.setGlobalState(this.clippingPlanes,H),k!==null&&Xt.render(b.state.shadowsArray,rt,H);let Q=new Set;return M.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Rt=tt.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){let Ct=Rt[Nt];Hl(Ct,rt,H,tt),Q.add(Ct)}else Hl(Rt,rt,H,tt),Q.add(Rt)}),b=x.pop(),k!==null&&k.renderEnd(),Q},this.compileAsync=function(M,H,rt=null){let Q=this.compile(M,H,rt);return new Promise(tt=>{function Rt(){if(Q.forEach(function(Nt){let Ut=j.get(Nt).currentProgram;(Ut===void 0||Ut.isReady())&&Q.delete(Nt)}),Q.size===0){tt(M);return}setTimeout(Rt,10)}Dt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let co=null;function hu(M){co&&co(M)}function Wl(){ti.stop()}function Xl(){ti.start()}let ti=new Wh;ti.setAnimationLoop(hu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){co=M,Bt.setAnimationLoop(M),M===null?ti.stop():ti.start()},Bt.addEventListener("sessionstart",Wl),Bt.addEventListener("sessionend",Xl),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(M,H);let rt=Bt.enabled===!0&&Bt.isPresenting===!0,Q=A!==null&&(Z===null||rt)&&A.begin(U,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(H),H=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(U,M,H,Z),b=Mt.get(M,x.length),b.init(H),b.state.textureUnits=ot.getTextureUnits(),x.push(b),Y.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),w.setFromProjectionMatrix(Y,ln,H.reversedDepth),D=this.localClippingEnabled,B=kt.init(this.clippingPlanes,D),T=St.get(M,L.length),T.init(),L.push(T),Bt.enabled===!0&&Bt.isPresenting===!0){let Nt=U.xr.getDepthSensingMesh();Nt!==null&&ho(Nt,H,-1/0,U.sortObjects)}ho(M,H,0,U.sortObjects),T.finish(),k!==null&&k.updateLights(b.state.lightsArray),U.sortObjects===!0&&T.sort(P,I),ft=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,ft&&Jt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),B===!0&&kt.beginShadows();let tt=b.state.shadowsArray;if(Xt.render(tt,M,H),B===!0&&kt.endShadows(),(Q&&A.hasRenderPass())===!1){let Nt=T.opaque,Ct=T.transmissive;if(b.setupLights(),H.isArrayCamera){let Ut=H.cameras;if(Ct.length>0)for(let zt=0,Kt=Ut.length;zt<Kt;zt++){let te=Ut[zt];Yl(Nt,Ct,M,te)}ft&&Jt.render(M);for(let zt=0,Kt=Ut.length;zt<Kt;zt++){let te=Ut[zt];ql(T,M,te,te.viewport)}}else Ct.length>0&&Yl(Nt,Ct,M,H),ft&&Jt.render(M),ql(T,M,H)}Z!==null&&J===0&&(ot.updateMultisampleRenderTarget(Z),ot.updateRenderTargetMipmap(Z)),Q&&A.end(U),M.isScene===!0&&M.onAfterRender(U,M,H),It.resetDefaultState(),nt=-1,st=null,x.pop(),x.length>0?(b=x[x.length-1],ot.setTextureUnits(b.state.textureUnits),B===!0&&kt.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?T=L[L.length-1]:T=null,k!==null&&k.renderEnd()};function ho(M,H,rt,Q){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)rt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(w)){Q&&ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Y);let Nt=ut.update(M),Ct=M.material;Ct.visible&&T.push(M,Nt,Ct,rt,ct.z,null,H)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(w))){let Nt=ut.update(M),Ct=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ct.copy(M.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ct.copy(Nt.boundingSphere.center)),ct.applyMatrix4(M.matrixWorld).applyMatrix4(Y)),Array.isArray(Ct)){let Ut=Nt.groups;for(let zt=0,Kt=Ut.length;zt<Kt;zt++){let te=Ut[zt],Ft=Ct[te.materialIndex];Ft&&Ft.visible&&T.push(M,Nt,Ft,rt,ct.z,te,H)}}else Ct.visible&&T.push(M,Nt,Ct,rt,ct.z,null,H)}}let Rt=M.children;for(let Nt=0,Ct=Rt.length;Nt<Ct;Nt++)ho(Rt[Nt],H,rt,Q)}function ql(M,H,rt,Q){let{opaque:tt,transmissive:Rt,transparent:Nt}=M;b.setupLightsView(rt),B===!0&&kt.setGlobalState(U.clippingPlanes,rt),Q&&_.viewport(at.copy(Q)),tt.length>0&&sr(tt,H,rt),Rt.length>0&&sr(Rt,H,rt),Nt.length>0&&sr(Nt,H,rt),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Yl(M,H,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Q.id]===void 0){let Ft=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Q.id]=new Ve(1,1,{generateMipmaps:!0,type:Ft?un:Ge,minFilter:Kn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[Q.id],Nt=Q.viewport||at;Rt.setSize(Nt.z*U.transmissionResolutionScale,Nt.w*U.transmissionResolutionScale);let Ct=U.getRenderTarget(),Ut=U.getActiveCubeFace(),zt=U.getActiveMipmapLevel();U.setRenderTarget(Rt),U.getClearColor(Zt),Wt=U.getClearAlpha(),Wt<1&&U.setClearColor(16777215,.5),U.clear(),ft&&Jt.render(rt);let Kt=U.toneMapping;U.toneMapping=Je;let te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),b.setupLightsView(Q),B===!0&&kt.setGlobalState(U.clippingPlanes,Q),sr(M,rt,Q),ot.updateMultisampleRenderTarget(Rt),ot.updateRenderTargetMipmap(Rt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let se=0,xe=H.length;se<xe;se++){let ue=H[se],{object:oe,geometry:Ie,material:Lt,group:Ue}=ue;if(Lt.side===ke&&oe.layers.test(Q.layers)){let ne=Lt.side;Lt.side=Ce,Lt.needsUpdate=!0,Zl(oe,rt,Q,Ie,Lt,Ue),Lt.side=ne,Lt.needsUpdate=!0,Ft=!0}}Ft===!0&&(ot.updateMultisampleRenderTarget(Rt),ot.updateRenderTargetMipmap(Rt))}U.setRenderTarget(Ct,Ut,zt),U.setClearColor(Zt,Wt),te!==void 0&&(Q.viewport=te),U.toneMapping=Kt}function sr(M,H,rt){let Q=H.isScene===!0?H.overrideMaterial:null;for(let tt=0,Rt=M.length;tt<Rt;tt++){let Nt=M[tt],{object:Ct,geometry:Ut,group:zt}=Nt,Kt=Nt.material;Kt.allowOverride===!0&&Q!==null&&(Kt=Q),Ct.layers.test(rt.layers)&&Zl(Ct,H,rt,Ut,Kt,zt)}}function Zl(M,H,rt,Q,tt,Rt){k!==null&&tt.isNodeMaterial&&k.setObject(M,tt),M.onBeforeRender(U,H,rt,Q,tt,Rt),M.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),tt.onBeforeRender(U,H,rt,Q,M,Rt),tt.transparent===!0&&tt.side===ke&&tt.forceSinglePass===!1?(tt.side=Ce,tt.needsUpdate=!0,U.renderBufferDirect(rt,H,Q,tt,M,Rt),tt.side=Jn,tt.needsUpdate=!0,U.renderBufferDirect(rt,H,Q,tt,M,Rt),tt.side=ke):U.renderBufferDirect(rt,H,Q,tt,M,Rt),M.onAfterRender(U,H,rt,Q,tt,Rt)}function rr(M,H,rt){H.isScene!==!0&&(H=mt);let Q=j.get(M),tt=b.state.lights,Rt=b.state.shadowsArray,Nt=tt.state.version,Ct=vt.getParameters(M,tt.state,Rt,H,rt,b.state.lightProbeGridArray),Ut=vt.getProgramCacheKey(Ct),zt=Q.programs;Q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,Q.fog=H.fog;let Kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Q.envMap=xt.get(M.envMap||Q.environment,Kt),Q.envMapRotation=Q.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,zt===void 0&&(M.addEventListener("dispose",dn),zt=new Map,Q.programs=zt);let te=zt.get(Ut);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===Nt)return $l(M,Ct),te}else Ct.uniforms=vt.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,rt,Ct),M.onBeforeCompile(Ct,U),te=vt.acquireProgram(Ct,Ut),zt.set(Ut,te),Q.uniforms=Ct.uniforms;let Ft=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ft.clippingPlanes=kt.uniform),$l(M,Ct),Q.needsLights=pu(M),Q.lightsStateVersion=Nt,Q.needsLights&&(Ft.ambientLightColor.value=tt.state.ambient,Ft.lightProbe.value=tt.state.probe,Ft.sunLights.value=tt.state.sun,Ft.sunLightShadows.value=tt.state.sunShadow,Ft.directionalLights.value=tt.state.directional,Ft.directionalLightShadows.value=tt.state.directionalShadow,Ft.spotLights.value=tt.state.spot,Ft.spotLightShadows.value=tt.state.spotShadow,Ft.rectAreaLights.value=tt.state.rectArea,Ft.ltc_1.value=tt.state.rectAreaLTC1,Ft.ltc_2.value=tt.state.rectAreaLTC2,Ft.pointLights.value=tt.state.point,Ft.pointLightShadows.value=tt.state.pointShadow,Ft.hemisphereLights.value=tt.state.hemi,Ft.sunShadowMatrix.value=tt.state.sunShadowMatrix,Ft.sunShadowCascade.value=tt.state.sunShadowCascade,Ft.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ft.spotLightMatrix.value=tt.state.spotLightMatrix,Ft.spotLightMap.value=tt.state.spotLightMap,Ft.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=b.state.lightProbeGridArray.length>0,Q.currentProgram=te,Q.uniformsList=null,te}function Jl(M){if(M.uniformsList===null){let H=M.currentProgram.getUniforms();M.uniformsList=is.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function $l(M,H){let rt=j.get(M);rt.outputColorSpace=H.outputColorSpace,rt.batching=H.batching,rt.batchingColor=H.batchingColor,rt.instancing=H.instancing,rt.instancingColor=H.instancingColor,rt.instancingMorph=H.instancingMorph,rt.skinning=H.skinning,rt.morphTargets=H.morphTargets,rt.morphNormals=H.morphNormals,rt.morphColors=H.morphColors,rt.morphTargetsCount=H.morphTargetsCount,rt.numClippingPlanes=H.numClippingPlanes,rt.numIntersection=H.numClipIntersection,rt.vertexAlphas=H.vertexAlphas,rt.vertexTangents=H.vertexTangents,rt.toneMapping=H.toneMapping}function uu(M,H){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let rt=0,Q=M.length;rt<Q;rt++){let tt=M[rt];if(tt.texture!==null&&tt.boundingBox.containsPoint(y))return tt}return null}function du(M,H,rt,Q,tt){H.isScene!==!0&&(H=mt),ot.resetTextureUnits();let Rt=H.fog,Nt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?H.environment:null,Ct=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ee.workingColorSpace,Ut=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,zt=xt.get(Q.envMap||Nt,Ut),Kt=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ft=!!rt.morphAttributes.position,se=!!rt.morphAttributes.normal,xe=!!rt.morphAttributes.color,ue=Je;Q.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ue=U.toneMapping);let oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ie=oe!==void 0?oe.length:0,Lt=j.get(Q),Ue=b.state.lights;if(B===!0&&(D===!0||M!==st)){let he=M===st&&Q.id===nt;kt.setState(Q,M,he)}let ne=!1;Q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ue.state.version||Lt.outputColorSpace!==Ct||tt.isBatchedMesh&&Lt.batching===!1||!tt.isBatchedMesh&&Lt.batching===!0||tt.isBatchedMesh&&Lt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Lt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Lt.instancing===!1||!tt.isInstancedMesh&&Lt.instancing===!0||tt.isSkinnedMesh&&Lt.skinning===!1||!tt.isSkinnedMesh&&Lt.skinning===!0||tt.isInstancedMesh&&Lt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Lt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Lt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Lt.instancingMorph===!1&&tt.morphTexture!==null||Lt.envMap!==zt||Q.fog===!0&&Lt.fog!==Rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==kt.numPlanes||Lt.numIntersection!==kt.numIntersection)||Lt.vertexAlphas!==Kt||Lt.vertexTangents!==te||Lt.morphTargets!==Ft||Lt.morphNormals!==se||Lt.morphColors!==xe||Lt.toneMapping!==ue||Lt.morphTargetsCount!==Ie||!!Lt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Lt.__version=Q.version);let $e=Lt.currentProgram;ne===!0&&($e=rr(Q,H,tt),k&&Q.isNodeMaterial&&k.onUpdateProgram(Q,$e,Lt));let fn=!1,Nn=!1,xi=!1,ae=$e.getUniforms(),_e=Lt.uniforms;if(_.useProgram($e.program)&&(fn=!0,Nn=!0,xi=!0),Q.id!==nt&&(nt=Q.id,Nn=!0),Lt.needsLights){let he=uu(b.state.lightProbeGridArray,tt);Lt.lightProbeGrid!==he&&(Lt.lightProbeGrid=he,Nn=!0)}if(fn||st!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ae.setValue(v,"projectionMatrix",M.projectionMatrix),ae.setValue(v,"viewMatrix",M.matrixWorldInverse);let Un=ae.map.cameraPosition;Un!==void 0&&Un.setValue(v,K.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ae.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ae.setValue(v,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,Nn=!0,xi=!0)}if(Lt.needsLights&&(Ue.state.sunShadowMap.length>0&&ae.setValue(v,"sunShadowMap",Ue.state.sunShadowMap,ot),Ue.state.directionalShadowMap.length>0&&ae.setValue(v,"directionalShadowMap",Ue.state.directionalShadowMap,ot),Ue.state.spotShadowMap.length>0&&ae.setValue(v,"spotShadowMap",Ue.state.spotShadowMap,ot),Ue.state.pointShadowMap.length>0&&ae.setValue(v,"pointShadowMap",Ue.state.pointShadowMap,ot)),tt.isSkinnedMesh){ae.setOptional(v,tt,"bindMatrix"),ae.setOptional(v,tt,"bindMatrixInverse");let he=tt.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ae.setValue(v,"boneTexture",he.boneTexture,ot))}tt.isBatchedMesh&&(ae.setOptional(v,tt,"batchingTexture"),ae.setValue(v,"batchingTexture",tt._matricesTexture,ot),ae.setOptional(v,tt,"batchingIdTexture"),ae.setValue(v,"batchingIdTexture",tt._indirectTexture,ot),ae.setOptional(v,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ae.setValue(v,"batchingColorTexture",tt._colorsTexture,ot));let Dn=rt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&W.update(tt,rt,$e),(Nn||Lt.receiveShadow!==tt.receiveShadow)&&(Lt.receiveShadow=tt.receiveShadow,ae.setValue(v,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&H.environment!==null&&(_e.envMapIntensity.value=H.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=C0()),Nn){if(ae.setValue(v,"toneMappingExposure",U.toneMappingExposure),Lt.needsLights&&fu(_e,xi),Rt&&Q.fog===!0&&Ot.refreshFogUniforms(_e,Rt),Ot.refreshMaterialUniforms(_e,Q,N,F,b.state.transmissionRenderTarget[M.id]),Lt.needsLights&&Lt.lightProbeGrid){let he=Lt.lightProbeGrid;_e.probesSH.value=he.texture,_e.probesMin.value.copy(he.boundingBox.min),_e.probesMax.value.copy(he.boundingBox.max),_e.probesResolution.value.copy(he.resolution)}is.upload(v,Jl(Lt),_e,ot)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(is.upload(v,Jl(Lt),_e,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ae.setValue(v,"center",tt.center),ae.setValue(v,"modelViewMatrix",tt.modelViewMatrix),ae.setValue(v,"normalMatrix",tt.normalMatrix),ae.setValue(v,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let he=Q.uniformsGroups;for(let Un=0,yi=he.length;Un<yi;Un++){let jl=he[Un];gt.update(jl,$e),gt.bind(jl,$e)}}return $e}function fu(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.sunLights.needsUpdate=H,M.sunLightShadows.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function pu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,H,rt){let Q=j.get(M);Q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(M.texture).__webglTexture=H,j.get(M.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:rt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){let rt=j.get(M);rt.__webglFramebuffer=H,rt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,rt=0){Z=M,lt=H,J=rt;let Q=null,tt=!1,Rt=!1;if(M){let Ct=j.get(M);if(Ct.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(v.FRAMEBUFFER,Ct.__webglFramebuffer),at.copy(M.viewport),Pt.copy(M.scissor),wt=M.scissorTest,_.viewport(at),_.scissor(Pt),_.setScissorTest(wt),nt=-1;return}else if(Ct.__webglFramebuffer===void 0)ot.setupRenderTarget(M);else if(Ct.__hasExternalTextures)ot.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Kt=M.depthTexture;if(Ct.__boundDepthTexture!==Kt){if(Kt!==null&&j.has(Kt)&&(M.width!==Kt.image.width||M.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(M)}}let Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let zt=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[H])?Q=zt[H][rt]:Q=zt[H],tt=!0):M.samples>0&&ot.useMultisampledRTT(M)===!1?Q=j.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?Q=zt[rt]:Q=zt,at.copy(M.viewport),Pt.copy(M.scissor),wt=M.scissorTest}else at.copy(O).multiplyScalar(N).floor(),Pt.copy(it).multiplyScalar(N).floor(),wt=_t;if(rt!==0&&(Q=et),_.bindFramebuffer(v.FRAMEBUFFER,Q)&&_.drawBuffers(M,Q),_.viewport(at),_.scissor(Pt),_.setScissorTest(wt),tt){let Ct=j.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ct.__webglTexture,rt)}else if(Rt){let Ct=H;for(let Ut=0;Ut<M.textures.length;Ut++){let zt=j.get(M.textures[Ut]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,rt,Ct)}}else if(M!==null&&rt!==0){let Ct=j.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ct.__webglTexture,rt)}nt=-1};function Kl(M){let H=j.get(M);return(H.__readFormat!==M.format||H.__readType!==M.type)&&(H.__readFormat=M.format,H.__readType=M.type,H.__formatReadable=R.textureFormatReadable(M.format),H.__typeReadable=R.textureTypeReadable(M.type)),H}this.readRenderTargetPixels=function(M,H,rt,Q,tt,Rt,Nt,Ct=0){if(!(M&&M.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut){_.bindFramebuffer(v.FRAMEBUFFER,Ut);try{let zt=M.textures[Ct],Kt=zt.format,te=zt.type;M.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ct);let Ft=Kl(zt);if(Ft.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-Q&&rt>=0&&rt<=M.height-tt&&v.readPixels(H,rt,Q,tt,Tt.convert(Kt),Tt.convert(te),Rt)}finally{let zt=Z!==null?j.get(Z).__webglFramebuffer:null;_.bindFramebuffer(v.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(M,H,rt,Q,tt,Rt,Nt,Ct=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut)if(H>=0&&H<=M.width-Q&&rt>=0&&rt<=M.height-tt){_.bindFramebuffer(v.FRAMEBUFFER,Ut);let zt=M.textures[Ct],Kt=zt.format,te=zt.type;M.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ct);let Ft=Kl(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,se),v.bufferData(v.PIXEL_PACK_BUFFER,Rt.byteLength,v.STREAM_READ),v.readPixels(H,rt,Q,tt,Tt.convert(Kt),Tt.convert(te),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let xe=Z!==null?j.get(Z).__webglFramebuffer:null;_.bindFramebuffer(v.FRAMEBUFFER,xe);let ue=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await fh(v,ue,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,se),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Rt),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(se),v.deleteSync(ue),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,rt=0){let Q=Math.pow(2,-rt),tt=Math.floor(M.image.width*Q),Rt=Math.floor(M.image.height*Q),Nt=H!==null?H.x:0,Ct=H!==null?H.y:0;ot.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,rt,0,0,Nt,Ct,tt,Rt),_.unbindTexture()},this.copyTextureToTexture=function(M,H,rt=null,Q=null,tt=0,Rt=0){let Nt,Ct,Ut,zt,Kt,te,Ft,se,xe,ue=M.isCompressedTexture?M.mipmaps[Rt]:M.image;if(rt!==null)Nt=rt.max.x-rt.min.x,Ct=rt.max.y-rt.min.y,Ut=rt.isBox3?rt.max.z-rt.min.z:1,zt=rt.min.x,Kt=rt.min.y,te=rt.isBox3?rt.min.z:0;else{let _e=Math.pow(2,-tt);Nt=Math.floor(ue.width*_e),Ct=Math.floor(ue.height*_e),M.isDataArrayTexture?Ut=ue.depth:M.isData3DTexture?Ut=Math.floor(ue.depth*_e):Ut=1,zt=0,Kt=0,te=0}Q!==null?(Ft=Q.x,se=Q.y,xe=Q.z):(Ft=0,se=0,xe=0);let oe=Tt.convert(H.format),Ie=Tt.convert(H.type),Lt;H.isData3DTexture?(ot.setTexture3D(H,0),Lt=v.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ot.setTexture2DArray(H,0),Lt=v.TEXTURE_2D_ARRAY):(ot.setTexture2D(H,0),Lt=v.TEXTURE_2D),_.activeTexture(v.TEXTURE0),_.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,H.flipY),_.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_.pixelStorei(v.UNPACK_ALIGNMENT,H.unpackAlignment);let Ue=_.getParameter(v.UNPACK_ROW_LENGTH),ne=_.getParameter(v.UNPACK_IMAGE_HEIGHT),$e=_.getParameter(v.UNPACK_SKIP_PIXELS),fn=_.getParameter(v.UNPACK_SKIP_ROWS),Nn=_.getParameter(v.UNPACK_SKIP_IMAGES);_.pixelStorei(v.UNPACK_ROW_LENGTH,ue.width),_.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ue.height),_.pixelStorei(v.UNPACK_SKIP_PIXELS,zt),_.pixelStorei(v.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(v.UNPACK_SKIP_IMAGES,te);let xi=M.isDataArrayTexture||M.isData3DTexture,ae=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){let _e=j.get(M),Dn=j.get(H),he=j.get(_e.__renderTarget),Un=j.get(Dn.__renderTarget);_.bindFramebuffer(v.READ_FRAMEBUFFER,he.__webglFramebuffer),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let yi=0;yi<Ut;yi++)xi&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(M).__webglTexture,tt,te+yi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(H).__webglTexture,Rt,xe+yi)),v.blitFramebuffer(zt,Kt,Nt,Ct,Ft,se,Nt,Ct,v.DEPTH_BUFFER_BIT,v.NEAREST);_.bindFramebuffer(v.READ_FRAMEBUFFER,null),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(tt!==0||M.isRenderTargetTexture||j.has(M)){let _e=j.get(M),Dn=j.get(H);_.bindFramebuffer(v.READ_FRAMEBUFFER,G),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,$);for(let he=0;he<Ut;he++)xi?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,_e.__webglTexture,tt,te+he):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,_e.__webglTexture,tt),ae?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Dn.__webglTexture,Rt,xe+he):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Dn.__webglTexture,Rt),tt!==0?v.blitFramebuffer(zt,Kt,Nt,Ct,Ft,se,Nt,Ct,v.COLOR_BUFFER_BIT,v.NEAREST):ae?v.copyTexSubImage3D(Lt,Rt,Ft,se,xe+he,zt,Kt,Nt,Ct):v.copyTexSubImage2D(Lt,Rt,Ft,se,zt,Kt,Nt,Ct);_.bindFramebuffer(v.READ_FRAMEBUFFER,null),_.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else ae?M.isDataTexture||M.isData3DTexture?v.texSubImage3D(Lt,Rt,Ft,se,xe,Nt,Ct,Ut,oe,Ie,ue.data):H.isCompressedArrayTexture?v.compressedTexSubImage3D(Lt,Rt,Ft,se,xe,Nt,Ct,Ut,oe,ue.data):v.texSubImage3D(Lt,Rt,Ft,se,xe,Nt,Ct,Ut,oe,Ie,ue):M.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Rt,Ft,se,Nt,Ct,oe,Ie,ue.data):M.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Rt,Ft,se,ue.width,ue.height,oe,ue.data):v.texSubImage2D(v.TEXTURE_2D,Rt,Ft,se,Nt,Ct,oe,Ie,ue);_.pixelStorei(v.UNPACK_ROW_LENGTH,Ue),_.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ne),_.pixelStorei(v.UNPACK_SKIP_PIXELS,$e),_.pixelStorei(v.UNPACK_SKIP_ROWS,fn),_.pixelStorei(v.UNPACK_SKIP_IMAGES,Nn),Rt===0&&H.generateMipmaps&&v.generateMipmap(Lt),_.unbindTexture()},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ot.setTextureCube(M,0):M.isData3DTexture?ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ot.setTexture2DArray(M,0):ot.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){lt=0,J=0,Z=null,_.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var nr=we,ao=class i extends di{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,a=new ks(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(N,P){if(N.nodeType!==1)return;N.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let I=T(N),O=!1,it=null;switch(N.nodeName){case"svg":P=S(N,P);break;case"style":r(N);break;case"g":P=S(N,P);break;case"path":P=S(N,P),N.hasAttribute("d")&&(it=s(N));break;case"rect":P=S(N,P),it=l(N);break;case"polygon":P=S(N,P),it=c(N);break;case"polyline":P=S(N,P),it=u(N);break;case"circle":P=S(N,P),it=d(N);break;case"ellipse":P=S(N,P),it=h(N);break;case"line":P=S(N,P),it=f(N);break;case"defs":O=!0;break;case"use":P=S(N,P);let B=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),D=N.viewportElement.getElementById(B);D?n(D,P):console.warn("SVGLoader: 'use node' references non-existent node id: "+B);break;default:}if(it){P.fill!==void 0&&P.fill!=="none"&&!P.fill.startsWith("url")&&it.color.setStyle(P.fill,nr),x(it,Wt),$.push(it);let w=Object.assign({},P);w.strokeWidth=P.strokeWidth*et(Wt),it.userData={node:N,style:w,transform:Wt.clone(),gradients:J}}let _t=N.childNodes;for(let w=0;w<_t.length;w++){let B=_t[w];O&&B.nodeName!=="style"&&B.nodeName!=="defs"||n(B,P)}I&&(Z.pop(),Z.length>0?Wt.copy(Z[Z.length-1]):Wt.identity())}function s(N){let P=new cn,I=new pt,O=new pt,it=new pt,_t=!0,w=!1,B=N.getAttribute("d");if(B===""||B==="none")return null;let D=B.match(/[a-df-z][^a-df-z]*/ig);for(let Y=0,K=D.length;Y<K;Y++){let ct=D[Y],mt=ct.charAt(0),ft=ct.slice(1).trim();_t===!0&&(w=!0,_t=!1);let q;switch(mt){case"M":q=p(ft);for(let v=0,At=q.length;v<At;v+=2)I.x=q[v+0],I.y=q[v+1],O.x=I.x,O.y=I.y,v===0?P.moveTo(I.x,I.y):P.lineTo(I.x,I.y),v===0&&it.copy(I);break;case"H":q=p(ft);for(let v=0,At=q.length;v<At;v++)I.x=q[v],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"V":q=p(ft);for(let v=0,At=q.length;v<At;v++)I.y=q[v],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"L":q=p(ft);for(let v=0,At=q.length;v<At;v+=2)I.x=q[v+0],I.y=q[v+1],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"C":q=p(ft);for(let v=0,At=q.length;v<At;v+=6)P.bezierCurveTo(q[v+0],q[v+1],q[v+2],q[v+3],q[v+4],q[v+5]),O.x=q[v+2],O.y=q[v+3],I.x=q[v+4],I.y=q[v+5],v===0&&w===!0&&it.copy(I);break;case"S":q=p(ft);for(let v=0,At=q.length;v<At;v+=4)P.bezierCurveTo(m(I.x,O.x),m(I.y,O.y),q[v+0],q[v+1],q[v+2],q[v+3]),O.x=q[v+0],O.y=q[v+1],I.x=q[v+2],I.y=q[v+3],v===0&&w===!0&&it.copy(I);break;case"Q":q=p(ft);for(let v=0,At=q.length;v<At;v+=4)P.quadraticCurveTo(q[v+0],q[v+1],q[v+2],q[v+3]),O.x=q[v+0],O.y=q[v+1],I.x=q[v+2],I.y=q[v+3],v===0&&w===!0&&it.copy(I);break;case"T":q=p(ft);for(let v=0,At=q.length;v<At;v+=2){let Dt=m(I.x,O.x),R=m(I.y,O.y);P.quadraticCurveTo(Dt,R,q[v+0],q[v+1]),O.x=Dt,O.y=R,I.x=q[v+0],I.y=q[v+1],v===0&&w===!0&&it.copy(I)}break;case"A":q=p(ft,[3,4],7);for(let v=0,At=q.length;v<At;v+=7){if(q[v+5]==I.x&&q[v+6]==I.y)continue;let Dt=I.clone();I.x=q[v+5],I.y=q[v+6],O.x=I.x,O.y=I.y,a(P,q[v],q[v+1],q[v+2],q[v+3],q[v+4],Dt,I),v===0&&w===!0&&it.copy(I)}break;case"m":q=p(ft);for(let v=0,At=q.length;v<At;v+=2)I.x+=q[v+0],I.y+=q[v+1],O.x=I.x,O.y=I.y,v===0?P.moveTo(I.x,I.y):P.lineTo(I.x,I.y),v===0&&it.copy(I);break;case"h":q=p(ft);for(let v=0,At=q.length;v<At;v++)I.x+=q[v],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"v":q=p(ft);for(let v=0,At=q.length;v<At;v++)I.y+=q[v],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"l":q=p(ft);for(let v=0,At=q.length;v<At;v+=2)I.x+=q[v+0],I.y+=q[v+1],O.x=I.x,O.y=I.y,P.lineTo(I.x,I.y),v===0&&w===!0&&it.copy(I);break;case"c":q=p(ft);for(let v=0,At=q.length;v<At;v+=6)P.bezierCurveTo(I.x+q[v+0],I.y+q[v+1],I.x+q[v+2],I.y+q[v+3],I.x+q[v+4],I.y+q[v+5]),O.x=I.x+q[v+2],O.y=I.y+q[v+3],I.x+=q[v+4],I.y+=q[v+5],v===0&&w===!0&&it.copy(I);break;case"s":q=p(ft);for(let v=0,At=q.length;v<At;v+=4)P.bezierCurveTo(m(I.x,O.x),m(I.y,O.y),I.x+q[v+0],I.y+q[v+1],I.x+q[v+2],I.y+q[v+3]),O.x=I.x+q[v+0],O.y=I.y+q[v+1],I.x+=q[v+2],I.y+=q[v+3],v===0&&w===!0&&it.copy(I);break;case"q":q=p(ft);for(let v=0,At=q.length;v<At;v+=4)P.quadraticCurveTo(I.x+q[v+0],I.y+q[v+1],I.x+q[v+2],I.y+q[v+3]),O.x=I.x+q[v+0],O.y=I.y+q[v+1],I.x+=q[v+2],I.y+=q[v+3],v===0&&w===!0&&it.copy(I);break;case"t":q=p(ft);for(let v=0,At=q.length;v<At;v+=2){let Dt=m(I.x,O.x),R=m(I.y,O.y);P.quadraticCurveTo(Dt,R,I.x+q[v+0],I.y+q[v+1]),O.x=Dt,O.y=R,I.x=I.x+q[v+0],I.y=I.y+q[v+1],v===0&&w===!0&&it.copy(I)}break;case"a":q=p(ft,[3,4],7);for(let v=0,At=q.length;v<At;v+=7){if(q[v+5]==0&&q[v+6]==0)continue;let Dt=I.clone();I.x+=q[v+5],I.y+=q[v+6],O.x=I.x,O.y=I.y,a(P,q[v],q[v+1],q[v+2],q[v+3],q[v+4],Dt,I),v===0&&w===!0&&it.copy(I)}break;case"Z":case"z":P.currentPath.autoClose=!0,P.currentPath.curves.length>0&&(I.copy(it),P.currentPath.currentPoint.copy(I),_t=!0);break;default:console.warn(ct)}w=!1}return P}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let P=0;P<N.sheet.cssRules.length;P++){let I=N.sheet.cssRules[P];if(I.type!==1)continue;let O=I.selectorText.split(/,/gm).filter(Boolean).map(it=>it.trim());for(let it=0;it<O.length;it++){let _t=Object.fromEntries(Object.entries(I.style).filter(([,w])=>w!==""));lt[O[it]]=Object.assign(lt[O[it]]||{},_t)}}}function a(N,P,I,O,it,_t,w,B){if(P==0||I==0){N.lineTo(B.x,B.y);return}O=O*Math.PI/180,P=Math.abs(P),I=Math.abs(I);let D=(w.x-B.x)/2,Y=(w.y-B.y)/2,K=Math.cos(O)*D+Math.sin(O)*Y,ct=-Math.sin(O)*D+Math.cos(O)*Y,mt=P*P,ft=I*I,q=K*K,v=ct*ct,At=q/mt+v/ft;if(At>1){let ut=Math.sqrt(At);P=ut*P,I=ut*I,mt=P*P,ft=I*I}let Dt=mt*v+ft*q,R=(mt*ft-Dt)/Dt,_=Math.sqrt(Math.max(0,R));it===_t&&(_=-_);let X=_*P*ct/I,j=-_*I*K/P,ot=Math.cos(O)*X-Math.sin(O)*j+(w.x+B.x)/2,xt=Math.sin(O)*X+Math.cos(O)*j+(w.y+B.y)/2,yt=o(1,0,(K-X)/P,(ct-j)/I),ht=o((K-X)/P,(ct-j)/I,(-K-X)/P,(-ct-j)/I)%(Math.PI*2);N.currentPath.absellipse(ot,xt,P,I,yt,yt+ht,_t===0,O)}function o(N,P,I,O){let it=N*I+P*O,_t=Math.sqrt(N*N+P*P)*Math.sqrt(I*I+O*O),w=Math.acos(Math.max(-1,Math.min(1,it/_t)));return N*O-P*I<0&&(w=-w),w}function l(N){let P=y(N.getAttribute("x")||0),I=y(N.getAttribute("y")||0),O=y(N.getAttribute("rx")||N.getAttribute("ry")||0),it=y(N.getAttribute("ry")||N.getAttribute("rx")||0),_t=y(N.getAttribute("width")),w=y(N.getAttribute("height")),B=1-.551915024494,D=new cn;return D.moveTo(P+O,I),D.lineTo(P+_t-O,I),(O!==0||it!==0)&&D.bezierCurveTo(P+_t-O*B,I,P+_t,I+it*B,P+_t,I+it),D.lineTo(P+_t,I+w-it),(O!==0||it!==0)&&D.bezierCurveTo(P+_t,I+w-it*B,P+_t-O*B,I+w,P+_t-O,I+w),D.lineTo(P+O,I+w),(O!==0||it!==0)&&D.bezierCurveTo(P+O*B,I+w,P,I+w-it*B,P,I+w-it),D.lineTo(P,I+it),(O!==0||it!==0)&&D.bezierCurveTo(P,I+it*B,P+O*B,I,P+O,I),D}function c(N){function P(_t,w,B){let D=y(w),Y=y(B);it===0?O.moveTo(D,Y):O.lineTo(D,Y),it++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,O=new cn,it=0;return N.getAttribute("points").replace(I,P),O.currentPath.autoClose=!0,O}function u(N){function P(_t,w,B){let D=y(w),Y=y(B);it===0?O.moveTo(D,Y):O.lineTo(D,Y),it++}let I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,O=new cn,it=0;return N.getAttribute("points").replace(I,P),O.currentPath.autoClose=!1,O}function d(N){let P=y(N.getAttribute("cx")||0),I=y(N.getAttribute("cy")||0),O=y(N.getAttribute("r")||0),it=new vn;it.absarc(P,I,O,0,Math.PI*2);let _t=new cn;return _t.subPaths.push(it),_t}function h(N){let P=y(N.getAttribute("cx")||0),I=y(N.getAttribute("cy")||0),O=y(N.getAttribute("rx")||0),it=y(N.getAttribute("ry")||0),_t=new vn;_t.absellipse(P,I,O,it,0,Math.PI*2);let w=new cn;return w.subPaths.push(_t),w}function f(N){let P=y(N.getAttribute("x1")||0),I=y(N.getAttribute("y1")||0),O=y(N.getAttribute("x2")||0),it=y(N.getAttribute("y2")||0),_t=new cn;return _t.moveTo(P,I),_t.lineTo(O,it),_t.currentPath.autoClose=!1,_t}function g(N){let P="http://www.w3.org/1999/xlink",I=N.querySelectorAll("linearGradient, radialGradient"),O=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],it={};for(let w of I){let B=w.getAttribute("id");if(!B)continue;let D={type:w.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},Y=w.getAttributeNS(P,"href")||w.getAttribute("href")||"";Y.startsWith("#")&&(D.href=Y.substring(1));for(let ct of O)w.hasAttribute(ct)&&(D.attrs[ct]=w.getAttribute(ct));let K=w.querySelectorAll("stop");if(K.length>0){D.stops=[];for(let ct of K){let mt=ct.getAttribute("stop-color");!mt&&ct.style&&(mt=ct.style["stop-color"]),mt||(mt="#000");let ft=ct.getAttribute("stop-opacity");(ft===null||ft==="")&&ct.style&&(ft=ct.style["stop-opacity"]),ft=ft===null||ft===""||ft===void 0?1:Math.max(0,Math.min(1,parseFloat(ft)));let q=Math.max(0,Math.min(1,parseFloat(ct.getAttribute("offset")||"0")));D.stops.push({offset:q,color:mt,opacity:ft})}}it[B]=D}function _t(w,B){let D=it[w];if(!D||B.has(w))return D;if(B.add(w),D.href&&it[D.href]){let Y=_t(D.href,B);if(Y){D.stops||(D.stops=Y.stops);for(let K in Y.attrs)K in D.attrs||(D.attrs[K]=Y.attrs[K])}}return D}for(let w in it)_t(w,new Set);for(let w in it){let ct=function(mt){return typeof mt!="string"?0:mt.endsWith("%")?parseFloat(mt)/100:y(mt)},B=it[w],D=B.attrs,Y=D.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",K={type:B.type,gradientUnits:Y,spreadMethod:D.spreadMethod==="reflect"||D.spreadMethod==="repeat"?D.spreadMethod:"pad",gradientTransform:null,stops:(B.stops||[]).slice().sort((mt,ft)=>mt.offset-ft.offset)};if(D.gradientTransform&&(K.gradientTransform=new Gt,L(D.gradientTransform,K.gradientTransform)),B.type==="linearGradient")K.x1=D.x1!==void 0?ct(D.x1):0,K.y1=D.y1!==void 0?ct(D.y1):0,K.x2=D.x2!==void 0?ct(D.x2):Y==="objectBoundingBox"?1:0,K.y2=D.y2!==void 0?ct(D.y2):0;else{let mt=Y==="objectBoundingBox"?.5:0,ft=Y==="objectBoundingBox"?.5:0;K.cx=D.cx!==void 0?ct(D.cx):mt,K.cy=D.cy!==void 0?ct(D.cy):mt,K.r=D.r!==void 0?ct(D.r):ft,K.fx=D.fx!==void 0?ct(D.fx):K.cx,K.fy=D.fy!==void 0?ct(D.fy):K.cy}J[w]=K}}function S(N,P){P=Object.assign({},P);let I={};if(N.hasAttribute("class")){let w=N.getAttribute("class").split(/\s/).filter(Boolean).map(B=>B.trim());for(let B=0;B<w.length;B++)I=Object.assign(I,lt["."+w[B]])}N.hasAttribute("id")&&(I=Object.assign(I,lt["#"+N.getAttribute("id")]));function O(w,B,D){D===void 0&&(D=function(K){return K}),N.hasAttribute(w)&&(P[B]=D(N.getAttribute(w))),I[B]&&(P[B]=D(I[B])),N.style&&N.style[w]!==""&&(P[B]=D(N.style[w]))}function it(w){return Math.max(0,Math.min(1,y(w)))}function _t(w){return Math.max(0,y(w))}return O("fill","fill"),O("fill-opacity","fillOpacity",it),O("fill-rule","fillRule"),O("opacity","opacity",it),O("stroke","stroke"),O("stroke-opacity","strokeOpacity",it),O("stroke-width","strokeWidth",_t),O("stroke-linejoin","strokeLineJoin"),O("stroke-linecap","strokeLineCap"),O("stroke-miterlimit","strokeMiterLimit",_t),O("visibility","visibility"),P}function m(N,P){return N-(P-N)}function p(N,P,I){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);let O={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},it=0,_t=1,w=2,B=3,D=it,Y=!0,K="",ct="",mt=[];function ft(Dt,R,_){let X=new SyntaxError('Unexpected character "'+Dt+'" at index '+R+".");throw X.partial=_,X}function q(){K!==""&&(ct===""?mt.push(Number(K)):mt.push(Number(K)*Math.pow(10,Number(ct)))),K="",ct=""}let v,At=N.length;for(let Dt=0;Dt<At;Dt++){if(v=N[Dt],Array.isArray(P)&&P.includes(mt.length%I)&&O.FLAGS.test(v)){D=_t,K=v,q();continue}if(D===it){if(O.WHITESPACE.test(v))continue;if(O.DIGIT.test(v)||O.SIGN.test(v)){D=_t,K=v;continue}if(O.POINT.test(v)){D=w,K=v;continue}O.COMMA.test(v)&&(Y&&ft(v,Dt,mt),Y=!0)}if(D===_t){if(O.DIGIT.test(v)){K+=v;continue}if(O.POINT.test(v)){K+=v,D=w;continue}if(O.EXP.test(v)){D=B;continue}O.SIGN.test(v)&&K.length===1&&O.SIGN.test(K[0])&&ft(v,Dt,mt)}if(D===w){if(O.DIGIT.test(v)){K+=v;continue}if(O.EXP.test(v)){D=B;continue}O.POINT.test(v)&&K[K.length-1]==="."&&ft(v,Dt,mt)}if(D===B){if(O.DIGIT.test(v)){ct+=v;continue}if(O.SIGN.test(v)){if(ct===""){ct+=v;continue}ct.length===1&&O.SIGN.test(ct)&&ft(v,Dt,mt)}}O.WHITESPACE.test(v)?(q(),D=it,Y=!1):O.COMMA.test(v)?(q(),D=it,Y=!0):O.SIGN.test(v)?(q(),D=_t,K=v):O.POINT.test(v)?(q(),D=w,K=v):ft(v,Dt,mt)}return q(),mt}let E=["mm","cm","in","pt","pc","px"],C={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(N){let P="px";if(typeof N=="string"||N instanceof String)for(let O=0,it=E.length;O<it;O++){let _t=E[O];if(N.endsWith(_t)){P=_t,N=N.substring(0,N.length-_t.length);break}}let I;return P==="px"&&e.defaultUnit!=="px"?I=C.in[e.defaultUnit]/e.defaultDPI:(I=C[P][e.defaultUnit],I<0&&(I=C[P].in*e.defaultDPI)),I*parseFloat(N)}function T(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;let P=b(N);return Z.length>0&&P.premultiply(Z[Z.length-1]),Wt.copy(P),Z.push(P),P}function b(N){let P=new Gt;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){let I=y(N.getAttribute("x")||0),O=y(N.getAttribute("y")||0);P.makeTranslation(I,O)}return N.hasAttribute("transform")&&L(N.getAttribute("transform"),P),P}function L(N,P){let I=nt,O=N.split(")");for(let it=O.length-1;it>=0;it--){let _t=O[it].trim();if(_t==="")continue;let w=_t.indexOf("("),B=_t.length;if(w>0&&w<B){let D=_t.slice(0,w),Y=p(_t.slice(w+1));switch(I.identity(),D){case"translate":if(Y.length>=1){let K=Y[0],ct=0;Y.length>=2&&(ct=Y[1]),I.makeTranslation(K,ct)}break;case"rotate":if(Y.length>=1){let K=0,ct=0,mt=0;K=Y[0]*Math.PI/180,Y.length>=3&&(ct=Y[1],mt=Y[2]),st.makeTranslation(-ct,-mt),at.makeRotation(K),Pt.multiplyMatrices(at,st),st.makeTranslation(ct,mt),I.multiplyMatrices(st,Pt)}break;case"scale":if(Y.length>=1){let K=Y[0],ct=K;Y.length>=2&&(ct=Y[1]),I.makeScale(K,ct)}break;case"skewX":Y.length===1&&I.set(1,Math.tan(Y[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Y.length===1&&I.set(1,0,0,Math.tan(Y[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Y.length===6&&I.set(Y[0],Y[2],Y[4],Y[1],Y[3],Y[5],0,0,1);break}P.premultiply(I)}}return P}function x(N,P){function I(w){Zt.set(w.x,w.y,1).applyMatrix3(P),w.set(Zt.x,Zt.y)}function O(w){let B=w.xRadius,D=w.yRadius,Y=Math.cos(w.aRotation),K=Math.sin(w.aRotation),ct=new V(B*Y,B*K,0),mt=new V(-D*K,D*Y,0),ft=ct.applyMatrix3(P),q=mt.applyMatrix3(P),v=nt.set(ft.x,q.x,0,ft.y,q.y,0,0,0,1),At=st.copy(v).invert(),_=at.copy(At).transpose().multiply(At).elements,X=G(_[0],_[1],_[4]),j=Math.sqrt(X.rt1),ot=Math.sqrt(X.rt2);if(w.xRadius=1/j,w.yRadius=1/ot,w.aRotation=Math.atan2(X.sn,X.cs),!((w.aEndAngle-w.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let yt=st.set(j,0,0,0,ot,0,0,0,1),ht=at.set(X.cs,X.sn,0,-X.sn,X.cs,0,0,0,1),ut=yt.multiply(ht).multiply(v),vt=Ot=>{let{x:St,y:Mt}=new V(Math.cos(Ot),Math.sin(Ot),0).applyMatrix3(ut);return Math.atan2(Mt,St)};w.aStartAngle=vt(w.aStartAngle),w.aEndAngle=vt(w.aEndAngle),A(P)&&(w.aClockwise=!w.aClockwise)}}function it(w){let B=z(P),D=k(P);w.xRadius*=B,w.yRadius*=D;let Y=B>Number.EPSILON?Math.atan2(P.elements[1],P.elements[0]):Math.atan2(-P.elements[3],P.elements[4]);w.aRotation+=Y,A(P)&&(w.aStartAngle*=-1,w.aEndAngle*=-1,w.aClockwise=!w.aClockwise)}let _t=N.subPaths;for(let w=0,B=_t.length;w<B;w++){let Y=_t[w].curves;for(let K=0;K<Y.length;K++){let ct=Y[K];ct.isLineCurve?(I(ct.v1),I(ct.v2)):ct.isCubicBezierCurve?(I(ct.v0),I(ct.v1),I(ct.v2),I(ct.v3)):ct.isQuadraticBezierCurve?(I(ct.v0),I(ct.v1),I(ct.v2)):ct.isEllipseCurve&&(wt.set(ct.aX,ct.aY),I(wt),ct.aX=wt.x,ct.aY=wt.y,U(P)?O(ct):it(ct))}}}function A(N){let P=N.elements;return P[0]*P[4]-P[1]*P[3]<0}function U(N){let P=N.elements,I=P[0]*P[3]+P[1]*P[4];if(I===0)return!1;let O=z(N),it=k(N);return Math.abs(I/(O*it))>Number.EPSILON}function z(N){let P=N.elements;return Math.sqrt(P[0]*P[0]+P[1]*P[1])}function k(N){let P=N.elements;return Math.sqrt(P[3]*P[3]+P[4]*P[4])}function et(N){let P=N.elements,I=P[0]*P[4]-P[1]*P[3];return Math.sqrt(Math.abs(I))}function G(N,P,I){let O,it,_t,w,B,D=N+I,Y=N-I,K=Math.sqrt(Y*Y+4*P*P);return D>0?(O=.5*(D+K),B=1/O,it=N*B*I-P*B*P):D<0?it=.5*(D-K):(O=.5*K,it=-.5*K),Y>0?_t=Y+K:_t=Y-K,Math.abs(_t)>2*Math.abs(P)?(B=-2*P/_t,w=1/Math.sqrt(1+B*B),_t=B*w):Math.abs(P)===0?(_t=1,w=0):(B=-.5*_t/P,_t=1/Math.sqrt(1+B*B),w=B*_t),Y>0&&(B=_t,_t=-w,w=B),{rt1:O,rt2:it,cs:_t,sn:w}}let $=[],lt={},J={},Z=[],nt=new Gt,st=new Gt,at=new Gt,Pt=new Gt,wt=new pt,Zt=new V,Wt=new Gt,$t=new DOMParser().parseFromString(t,"image/svg+xml");return g($t),n($t.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:$,gradients:J,xml:$t.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,s=null,r=jh.exec(e.fill);if(r){let o=t.userData.gradients&&t.userData.gradients[r[1]];s=R0(o,t)}let a=new qe({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:ke,depthWrite:!1});return s!==null?a.map=s:a.color=n,a}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(jh.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new qe({color:new qt().setStyle(e.stroke,nr),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:ke,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],a=[],o=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,a,o)===0)return null;let l=new Be;return l.setAttribute("position",new fe(r,3)),l.setAttribute("normal",new fe(a,3)),l.setAttribute("uv",new fe(o,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,a,o,l){let c=new pt,u=new pt,d=new pt,h=new pt,f=new pt,g=new pt,S=new pt,m=new pt,p=new pt,E=new pt,C=new pt,y=new pt,T=new pt,b=new pt,L=new pt,x=new pt,A=new pt;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=_t(t);let U=t.length;if(U<2)return 0;let z=t[0].equals(t[U-1]),k,et=t[0],G,$=e.strokeWidth/2,lt=1/(U-1),J=0,Z,nt,st,at,Pt=!1,wt=0,Zt=l*3,Wt=l*2;$t(t[0],t[1],c).multiplyScalar($),m.copy(t[0]).sub(c),p.copy(t[0]).add(c),E.copy(m),C.copy(p);for(let w=1;w<U;w++){k=t[w],w===U-1?z?G=t[1]:G=void 0:G=t[w+1];let B=c;if($t(et,k,B),d.copy(B).multiplyScalar($),y.copy(k).sub(d),T.copy(k).add(d),Z=J+lt,nt=!1,G!==void 0){$t(k,G,u),d.copy(u).multiplyScalar($),b.copy(k).sub(d),L.copy(k).add(d),st=!0,d.subVectors(G,et),B.dot(d)<0&&(st=!1),w===1&&(Pt=st),d.subVectors(G,k),d.normalize();let D=Math.abs(B.dot(d));if(D>Number.EPSILON){let Y=$/D;d.multiplyScalar(-Y),h.subVectors(k,et),f.copy(h).setLength(Y).add(d),x.copy(f).negate();let K=f.length(),ct=h.length();h.divideScalar(ct),g.subVectors(G,k);let mt=g.length();if(g.divideScalar(mt),h.dot(x)<ct&&g.dot(x)<mt&&(nt=!0),A.copy(f).add(k),x.add(k),nt){let ft=st?p:m,q=(A.x-ft.x)*(x.y-ft.y)-(A.y-ft.y)*(x.x-ft.x);(st&&q<0||!st&&q>0)&&x.copy(ft)}switch(at=!1,nt?st?(L.copy(x),T.copy(x)):(b.copy(x),y.copy(x)):P(),e.strokeLineJoin){case"bevel":I(st,nt,Z);break;case"round":O(st,nt),st?N(k,y,b,Z,0):N(k,L,T,Z,1);break;case"miter":case"miter-clip":default:let ft=$*e.strokeMiterLimit/K;if(ft<1)if(e.strokeLineJoin!=="miter-clip"){I(st,nt,Z);break}else O(st,nt),st?(g.subVectors(A,y).multiplyScalar(ft).add(y),S.subVectors(A,b).multiplyScalar(ft).add(b),F(y,Z,0),F(g,Z,0),F(k,Z,.5),F(k,Z,.5),F(g,Z,0),F(S,Z,0),F(k,Z,.5),F(S,Z,0),F(b,Z,0)):(g.subVectors(A,T).multiplyScalar(ft).add(T),S.subVectors(A,L).multiplyScalar(ft).add(L),F(T,Z,1),F(g,Z,1),F(k,Z,.5),F(k,Z,.5),F(g,Z,1),F(S,Z,1),F(k,Z,.5),F(S,Z,1),F(L,Z,1));else nt?(st?(F(p,J,1),F(m,J,0),F(A,Z,0),F(p,J,1),F(A,Z,0),F(x,Z,1)):(F(p,J,1),F(m,J,0),F(A,Z,1),F(m,J,0),F(x,Z,0),F(A,Z,1)),st?b.copy(A):L.copy(A)):st?(F(y,Z,0),F(A,Z,0),F(k,Z,.5),F(k,Z,.5),F(A,Z,0),F(b,Z,0)):(F(T,Z,1),F(A,Z,1),F(k,Z,.5),F(k,Z,.5),F(A,Z,1),F(L,Z,1)),at=!0;break}}else P()}else P();!z&&w===U-1&&it(t[0],E,C,st,!0,J),J=Z,et=k,m.copy(b),p.copy(L)}if(!z)it(k,y,T,st,!1,Z);else if(nt&&r){let w=A,B=x;Pt!==st&&(w=x,B=A),st?(at||Pt)&&(B.toArray(r,0),B.toArray(r,9),at&&w.toArray(r,3)):(at||!Pt)&&(B.toArray(r,3),B.toArray(r,9),at&&w.toArray(r,0))}if(r){let w=[new pt,new pt,new pt],B=l*3;for(let D=B;D<Zt;D+=9)w[0].set(r[D],r[D+1]),w[1].set(r[D+3],r[D+4]),w[2].set(r[D+6],r[D+7]),mn.area(w)<0&&(r[D+3]=w[0].x,r[D+4]=w[0].y)}return wt;function $t(w,B,D){return D.subVectors(B,w),D.set(-D.y,D.x).normalize()}function F(w,B,D){r&&(r[Zt]=w.x,r[Zt+1]=w.y,r[Zt+2]=0,a&&(a[Zt]=0,a[Zt+1]=0,a[Zt+2]=1),Zt+=3,o&&(o[Wt]=B,o[Wt+1]=D,Wt+=2)),wt+=3}function N(w,B,D,Y,K){c.copy(B).sub(w).normalize(),u.copy(D).sub(w).normalize();let ct=Math.PI,mt=c.dot(u);Math.abs(mt)<1&&(ct=Math.abs(Math.acos(mt))),ct/=n,d.copy(B);for(let ft=0,q=n-1;ft<q;ft++)h.copy(d).rotateAround(w,ct),F(d,Y,K),F(h,Y,K),F(w,Y,.5),d.copy(h);F(d,Y,K),F(D,Y,K),F(w,Y,.5)}function P(){F(p,J,1),F(m,J,0),F(y,Z,0),F(p,J,1),F(y,Z,0),F(T,Z,1)}function I(w,B,D){B?w?(F(p,J,1),F(m,J,0),F(y,Z,0),F(p,J,1),F(y,Z,0),F(x,Z,1),F(y,D,0),F(b,D,0),F(x,D,.5)):(F(p,J,1),F(m,J,0),F(T,Z,1),F(m,J,0),F(x,Z,0),F(T,Z,1),F(T,D,1),F(x,D,0),F(L,D,1)):w?(F(y,D,0),F(b,D,0),F(k,D,.5)):(F(T,D,1),F(L,D,0),F(k,D,.5))}function O(w,B){B&&(w?(F(p,J,1),F(m,J,0),F(y,Z,0),F(p,J,1),F(y,Z,0),F(x,Z,1),F(y,J,0),F(k,Z,.5),F(x,Z,1),F(k,Z,.5),F(b,J,0),F(x,Z,1)):(F(p,J,1),F(m,J,0),F(T,Z,1),F(m,J,0),F(x,Z,0),F(T,Z,1),F(T,J,1),F(x,Z,0),F(k,Z,.5),F(k,Z,.5),F(x,Z,0),F(L,J,1)))}function it(w,B,D,Y,K,ct){switch(e.strokeLineCap){case"round":K?N(w,D,B,ct,.5):N(w,B,D,ct,.5);break;case"square":if(K)c.subVectors(B,w),u.set(c.y,-c.x),d.addVectors(c,u).add(w),h.subVectors(u,c).add(w),Y?(d.toArray(r,3),h.toArray(r,0),h.toArray(r,9)):(d.toArray(r,3),o[7]===1?h.toArray(r,9):d.toArray(r,9),h.toArray(r,0));else{c.subVectors(D,w),u.set(c.y,-c.x),d.addVectors(c,u).add(w),h.subVectors(u,c).add(w);let mt=r.length;Y?(d.toArray(r,mt-3),h.toArray(r,mt-6),h.toArray(r,mt-12)):(h.toArray(r,mt-6),d.toArray(r,mt-3),h.toArray(r,mt-12))}break;case"butt":default:break}}function _t(w){let B=!1;for(let Y=1,K=w.length-1;Y<K;Y++)if(w[Y].distanceTo(w[Y+1])<s){B=!0;break}if(!B)return w;let D=[];D.push(w[0]);for(let Y=1,K=w.length-1;Y<K;Y++)w[Y].distanceTo(w[Y+1])>=s&&D.push(w[Y]);return D.push(w[w.length-1]),D}}},jh=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function R0(i,t,e=256){if(!i||!Array.isArray(i.stops)||i.stops.length===0)return null;let n=t.userData.transform,s=i.gradientUnits==="objectBoundingBox",r=null;if(s&&(r=I0(t,n),r===null))return null;function a(d,h,f){f.set(d,h,1),i.gradientTransform&&f.applyMatrix3(i.gradientTransform),s&&f.set(r.minX+f.x*r.width,r.minY+f.y*r.height,1),n&&f.applyMatrix3(n)}let o=document.createElement("canvas"),l;if(i.type==="linearGradient"){o.width=e,o.height=1;let d=o.getContext("2d"),h=d.createLinearGradient(0,0,e,0);Qh(h,i.stops),d.fillStyle=h,d.fillRect(0,0,e,1);let f=new V,g=new V;a(i.x1,i.y1,f),a(i.x2,i.y2,g);let S=g.x-f.x,m=g.y-f.y,p=S*S+m*m||1e-20,E=S/p,C=m/p,y=-(E*f.x+C*f.y);l=new Gt().set(E,C,y,0,0,.5,0,0,1)}else{let d=i.cx,h=i.cy,f=i.fx,g=i.fy,S=i.r;if(i.gradientTransform){let x=new V;x.set(d,h,1).applyMatrix3(i.gradientTransform),d=x.x,h=x.y,x.set(f,g,1).applyMatrix3(i.gradientTransform),f=x.x,g=x.y}if(s&&(d=r.minX+d*r.width,h=r.minY+h*r.height,f=r.minX+f*r.width,g=r.minY+g*r.height,S=S*Math.sqrt((r.width*r.width+r.height*r.height)/2)),S<=0)return null;o.width=e,o.height=e;let m=o.getContext("2d"),p=d-S,E=h-S,C=2*S,y=e/C;m.setTransform(y,0,0,y,-p*y,-E*y);let T=m.createRadialGradient(f,g,0,d,h,S);Qh(T,i.stops),m.fillStyle=T,m.fillRect(p,E,C,C);let b=n?n.clone().invert():new Gt;l=new Gt().set(1/C,0,-p/C,0,1/C,-E/C,0,0,1).multiply(b)}let c=new Cs(o);c.colorSpace=nr,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let u=i.spreadMethod==="reflect"?Bi:i.spreadMethod==="repeat"?Oi:je;return c.wrapS=u,c.wrapT=u,c}function I0(i,t){let e=t?t.clone().invert():null,n=new pt,s=new $i;for(let r of i.subPaths)for(let a of r.getPoints())n.copy(a),e&&n.applyMatrix3(e),s.expandByPoint(n);return s.isEmpty()?null:{minX:s.min.x,minY:s.min.y,width:s.max.x-s.min.x,height:s.max.y-s.min.y}}function Qh(i,t){let e=new qt;for(let n of t){let s=n.color;if(n.opacity<1){e.setStyle(n.color,nr);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(nr));r&&(s=`rgba(${r[1]},${n.opacity})`)}i.addColorStop(Math.max(0,Math.min(1,n.offset)),s)}}var tu=`<svg width="138" height="64" viewBox="0 0 138 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119.329 39.9027L123.669 19.4647H132.02C132.696 19.4561 133.364 19.6132 133.966 19.9221C134.529 20.2223 135.025 20.6327 135.426 21.129C135.855 21.6411 136.185 22.2286 136.399 22.8613C136.613 23.5114 136.721 24.1915 136.72 24.8759C136.708 25.689 136.549 26.4933 136.253 27.2506C135.97 28.0161 135.573 28.7345 135.076 29.382C134.585 30.0238 133.997 30.5852 133.333 31.0462C132.692 31.5044 131.968 31.8349 131.202 32.0195L134.219 39.8054H131.299L128.467 32.545H123.465L121.917 39.9027H119.329ZM129.742 30.2579C130.318 30.2604 130.885 30.1128 131.387 29.8297C131.903 29.5185 132.361 29.12 132.74 28.6521C133.127 28.1644 133.436 27.6193 133.655 27.0365C133.885 26.4404 134.004 25.807 134.005 25.1679C134.008 24.7281 133.939 24.2908 133.801 23.8735C133.679 23.4832 133.495 23.1152 133.256 22.7835C133.034 22.4834 132.748 22.2371 132.419 22.0633C132.109 21.8713 131.751 21.7701 131.387 21.7713H125.771L123.961 30.2579H129.742Z" fill="white"/>
<path d="M106.988 19.4647H119.932L119.445 21.7616H109.081L107.679 28.3796H116.681L116.224 30.5401H107.212L105.723 37.5864H116.331L115.815 39.9027H102.638L106.988 19.4647Z" fill="white"/>
<path d="M90.2967 19.4647H103.241L102.754 21.7616H92.3989L90.9877 28.3796H99.9901L99.5327 30.5401H90.5108L89.012 37.5864H99.63L99.1531 39.9027H85.9561L90.2967 19.4647Z" fill="white"/>
<path d="M68.0193 37.7226L66.1799 40.0487H75.4257C76.522 40.0588 77.6149 39.9247 78.6763 39.6496C79.6347 39.3855 80.5402 38.9575 81.3527 38.3844C82.1146 37.8376 82.7352 37.1169 83.1629 36.2822C83.6383 35.3489 83.8757 34.3125 83.8539 33.2652C83.8713 32.6382 83.7343 32.0165 83.4549 31.455C83.1927 30.9474 82.8162 30.5076 82.3551 30.1703C81.8445 29.7601 81.2732 29.4317 80.6617 29.1971C79.9288 28.9081 79.1778 28.6675 78.4135 28.4769C77.6836 28.3017 77.051 28.1362 76.5157 27.9611C76.0498 27.7953 75.5975 27.5935 75.1629 27.3577C74.8366 27.1578 74.5549 26.8927 74.3356 26.5791C74.1545 26.2449 74.0639 25.8691 74.0729 25.489C74.0583 24.9594 74.1586 24.4328 74.367 23.9456C74.5753 23.4584 74.8867 23.0221 75.2797 22.6667C76.3694 21.8276 77.7344 21.4282 79.1045 21.5474H86.1215L86.8028 19.2409H79.6495C78.538 19.2373 77.4323 19.4013 76.3697 19.7275C75.4022 20.0313 74.4984 20.5095 73.703 21.1387C72.9132 21.7475 72.2773 22.533 71.8462 23.4323C71.4152 24.3315 71.2012 25.3193 71.2213 26.3163C71.2088 26.8718 71.3184 27.4233 71.5425 27.9319C71.7859 28.3848 72.1167 28.7851 72.5157 29.1095C72.994 29.4661 73.5176 29.7574 74.0729 29.9757C74.7601 30.2451 75.462 30.4758 76.1751 30.6667C76.9245 30.871 77.596 31.0754 78.1897 31.2701C78.7174 31.4257 79.2192 31.6585 79.6787 31.9611C80.0727 32.1693 80.4076 32.474 80.652 32.8467C80.8907 33.2055 81.0037 33.6334 80.9731 34.0633C80.9928 34.5891 80.8801 35.1115 80.6455 35.5825C80.4108 36.0535 80.0617 36.4581 79.6301 36.7591C78.5419 37.4578 77.2622 37.7982 75.9707 37.7324L68.0193 37.7226Z" fill="white"/>
<path d="M51.708 43.9513C51.5714 43.9479 51.4378 43.9112 51.3187 43.8443C51.1528 43.7396 51.0332 43.5755 50.9843 43.3855C50.9355 43.1955 50.9611 42.9941 51.0559 42.8224C54.0833 37.6702 55.238 31.6305 54.3247 25.7249C53.4114 19.8193 50.4861 14.4106 46.0438 10.4136C45.9019 10.2745 45.8194 10.0859 45.8136 9.88738C45.8077 9.68881 45.8789 9.49568 46.0123 9.34846C46.1457 9.20125 46.3309 9.11137 46.529 9.09766C46.7272 9.08395 46.923 9.14748 47.0754 9.27494C51.7705 13.5089 54.8612 19.233 55.8257 25.4812C56.7902 31.7294 55.5696 38.1191 52.3698 43.5718C52.302 43.6872 52.2054 43.7829 52.0893 43.8494C51.9732 43.916 51.8418 43.9511 51.708 43.9513Z" fill="white"/>
<path d="M28.7008 57.1095C28.146 57.1095 27.5913 57.1095 27.056 57.1095C26.2579 57.0608 25.4307 56.9732 24.6132 56.8565C22.7285 56.5751 20.8789 56.0955 19.0949 55.4258C18.2579 55.1144 17.4501 54.764 16.691 54.3942C15.2761 53.6879 13.9248 52.8608 12.6521 51.9221C11.8972 51.3783 11.1727 50.7935 10.4818 50.1703C9.29583 49.1164 8.20485 47.9603 7.22143 46.7153C6.70247 46.0914 6.21523 45.4418 5.76158 44.7689C5.02451 43.6218 4.37389 42.4214 3.81511 41.1776C3.45501 40.3893 3.12411 39.5913 2.84187 38.7932C2.44811 37.7151 2.12304 36.6131 1.86864 35.4939C1.71292 34.7445 1.57667 33.9562 1.47934 33.1582C1.36397 32.2572 1.29575 31.3509 1.27496 30.4428C1.27496 30.1995 1.27496 29.9562 1.27496 29.7129C1.26631 25.5605 2.20033 21.4603 4.00661 17.7214C5.81288 13.9824 8.4443 10.7023 11.7025 8.12812C14.9608 5.55396 18.7608 3.75297 22.8162 2.86087C26.8717 1.96878 31.0767 2.00887 35.1144 2.97811C35.2968 3.03932 35.4497 3.16671 35.5427 3.33512C35.6358 3.50353 35.6624 3.70073 35.6171 3.88776C35.5719 4.0748 35.4582 4.23807 35.2984 4.34534C35.1387 4.45261 34.9445 4.49608 34.7543 4.46716C30.9455 3.55763 26.9803 3.52231 23.1559 4.36386C19.3316 5.2054 15.7474 6.90198 12.6723 9.32631C9.59712 11.7507 7.11084 14.8398 5.3999 18.3621C3.68897 21.8844 2.79779 25.7484 2.79321 29.6642C2.79321 29.8978 2.79321 30.1217 2.79321 30.3552C2.81524 31.2112 2.88021 32.0654 2.98786 32.9149C3.07396 33.657 3.19739 34.3944 3.35769 35.1241C3.58568 36.1792 3.8782 37.2192 4.2336 38.2385C4.49637 38.9878 4.80781 39.747 5.14844 40.4866C5.68595 41.6656 6.31394 42.8012 7.02679 43.8832C7.45501 44.5353 7.92216 45.1679 8.40878 45.8297C9.33133 46.9968 10.3574 48.0783 11.4745 49.0608C12.128 49.6498 12.8135 50.2021 13.528 50.7153C14.7323 51.5901 16.0123 52.3555 17.3528 53.0024C18.0905 53.3677 18.8475 53.6926 19.6205 53.9757C21.3037 54.606 23.0491 55.0563 24.8273 55.3187C25.6059 55.4355 26.3747 55.5134 27.1338 55.562C28.2325 55.6301 29.3344 55.6301 30.4331 55.562C30.6355 55.5487 30.8351 55.6158 30.9882 55.7489C31.1413 55.882 31.2357 56.0702 31.2506 56.2725C31.2614 56.4759 31.192 56.6754 31.0573 56.8282C30.9227 56.9811 30.7336 57.075 30.5304 57.09C29.9368 57.09 29.3139 57.1095 28.7008 57.1095Z" fill="white"/>
<path d="M42.9393 34.18C42.9393 34.8418 42.258 35.2993 41.0804 35.4355C38.9276 35.6321 36.7675 35.1467 34.9056 34.0481C33.0438 32.9496 31.5745 31.2934 30.7057 29.3139C30.6284 29.1235 30.6284 28.9105 30.7057 28.7202C30.7731 28.5265 30.9125 28.3661 31.095 28.2725C31.2863 28.2 31.4974 28.2 31.6887 28.2725C31.8831 28.344 32.0431 28.4866 32.1364 28.6715C32.7261 29.9267 33.5946 31.0307 34.6757 31.8993C35.7569 32.7679 37.022 33.3782 38.3748 33.6837C39.1297 33.8674 39.9046 33.9557 40.6814 33.9465C38.7349 32.9732 37.3918 32.0876 35.3189 28.4671C35.0083 27.7531 34.5349 27.1215 33.9367 26.623C33.3385 26.1245 32.632 25.7728 31.8736 25.5961C30.5406 25.2301 29.309 24.5643 28.2726 23.6496C25.0415 20.8759 25.9758 17.8589 26.2094 17.2457C26.5403 15.9027 28.3407 15.1922 31.8833 15.017C33.1777 14.9489 34.4429 15.017 35.2799 15.017C33.7422 13.4598 29.0804 13.0705 27.494 13.0705H27.2118L27.0074 12.9148C24.3797 11.017 21.9563 10.4525 19.7957 11.2311C15.5427 12.7786 13.1291 19.1338 12.2142 22.1411C12.5612 22.1339 12.9017 22.2361 13.1875 22.4331C14.1607 23.0754 13.6546 24.1557 13.1875 25.1095C12.6005 26.2578 12.2685 27.5193 12.2142 28.8078V29.1971C12.2142 32.837 12.0974 41.3722 33.8298 51.8345L33.9855 51.9221L34.0926 52.0486C34.6883 52.9028 35.2186 53.8007 35.679 54.7348L35.9417 55.309C35.9829 55.3991 36.0042 55.497 36.0042 55.5961C36.0042 55.6952 35.9829 55.7931 35.9417 55.8832C35.8974 55.9729 35.8345 56.0522 35.7574 56.1159C35.6802 56.1797 35.5905 56.2264 35.494 56.253H35.2605C35.0892 56.254 34.9214 56.2047 34.7778 56.1113C34.6342 56.0179 34.5212 55.8845 34.4527 55.7275C34.3748 55.5426 34.2872 55.3674 34.1899 55.1825C33.8419 54.4714 33.4451 53.7853 33.0026 53.1289C10.5111 42.2676 10.5889 33.09 10.6279 29.1971V28.8564C10.6756 27.3465 11.0614 25.8666 11.7568 24.5255C11.8444 24.3309 12.0001 23.9903 12.0877 23.7567C11.9438 23.8212 11.8121 23.9101 11.6984 24.0195C11.5607 24.1523 11.3829 24.2358 11.1928 24.2569C11.0026 24.278 10.8108 24.2356 10.6473 24.1362C10.4866 24.0369 10.3615 23.8892 10.2898 23.7144C10.2182 23.5396 10.2036 23.3466 10.2483 23.163C10.9101 20.5645 13.5184 11.8929 19.1923 9.82967C21.8006 8.85644 24.6425 9.46957 27.64 11.5815C29.0838 11.6115 30.5227 11.7612 31.9417 12.0292C35.2702 12.6813 37.0609 13.9757 37.2653 15.7956L37.3724 16.7688L36.3991 16.7007C31.6498 16.3406 27.786 16.944 27.64 17.674V17.7907V17.8491C27.64 17.9367 26.6181 20.2336 29.2751 22.5109C30.1563 23.2767 31.2019 23.8295 32.331 24.1265C33.7617 24.5839 35.1145 25.0121 36.6522 27.708C38.5111 30.9586 39.4454 31.4939 40.7398 32.2433C41.0707 32.4282 41.421 32.6326 41.8103 32.8954L41.9953 33.0219C42.4916 33.3139 42.9393 33.6058 42.9393 34.18Z" fill="white"/>
<path d="M49.0122 45.5669C48.9916 45.7661 48.9134 45.955 48.7872 46.1105C48.6611 46.2661 48.4924 46.3815 48.3017 46.4428C48.1039 46.5347 47.887 46.578 47.6691 46.5693C47.2419 46.5542 46.8176 46.4922 46.4039 46.3844C46.2284 46.3228 46.0498 46.2708 45.8686 46.2287C44.0059 45.7887 42.2546 44.9674 40.7253 43.8166C39.1959 42.6659 37.9217 41.2105 36.983 39.5426C36.874 39.3726 36.8334 39.1676 36.8696 38.969C36.9057 38.7703 37.0158 38.5927 37.1776 38.472C37.2701 38.4078 37.3753 38.3641 37.4861 38.344C37.5969 38.3238 37.7108 38.3277 37.82 38.3552C37.9225 38.3792 38.0188 38.4245 38.1027 38.4883C38.1865 38.552 38.256 38.6327 38.3066 38.7251C39.2454 40.3905 40.538 41.8297 42.0935 42.9412C43.6489 44.0527 45.4293 44.8095 47.309 45.1581C44.9621 42.7936 42.9926 40.0823 41.4696 37.1192C41.3922 36.9289 41.3922 36.7159 41.4696 36.5255C41.5217 36.382 41.6148 36.2569 41.7374 36.1659C41.86 36.0749 42.0067 36.022 42.1592 36.0137C42.3117 36.0054 42.4632 36.0421 42.595 36.1193C42.7267 36.1964 42.8329 36.3106 42.9003 36.4477C44.2111 39.0768 45.8997 41.4999 47.9124 43.6399L47.9708 43.6983C48.5256 44.2141 49.1387 44.7688 49.0122 45.5669Z" fill="white"/>
<path d="M60.0875 61.2263C59.9053 61.5715 59.6196 61.8509 59.2705 62.0255C58.9214 62.2 58.5265 62.2609 58.141 62.1995H57.8004C54.2287 61.7685 50.8275 60.4281 47.922 58.3066L47.2894 57.8491C45.1386 56.3017 43.5911 55.1825 41.1872 50.6861C40.8991 50.5436 40.6035 50.4169 40.3016 50.3066C37.6831 49.2819 35.3043 47.7281 33.3138 45.7421C26.7152 39.601 23.7371 33.927 24.4573 28.8954C24.4749 28.7466 24.5351 28.6061 24.6305 28.4907C24.726 28.3753 24.8527 28.2899 24.9955 28.2447C25.1383 28.1995 25.2911 28.1965 25.4356 28.2359C25.5801 28.2754 25.7101 28.3556 25.8101 28.4671C25.8865 28.5519 25.9428 28.6528 25.9748 28.7623C26.0068 28.8719 26.0137 28.9872 25.995 29.0997C25.1775 34.7153 30.1021 40.6326 34.3649 44.6034C38.2578 48.2725 41.1191 49.2165 42.1507 49.4696H42.2675L42.5303 49.6253L42.6082 49.8978C46.7833 58.4817 57.1191 60.6034 57.2067 60.6034C57.5884 60.6765 57.9762 60.7123 58.3649 60.7105C58.4163 60.7025 58.4652 60.6824 58.5075 60.652C58.5498 60.6216 58.5843 60.5816 58.6082 60.5353C58.6269 60.5009 58.6367 60.4625 58.6367 60.4234C58.6367 60.3842 58.6269 60.3458 58.6082 60.3114C58.1486 59.6713 57.6235 59.0809 57.0413 58.5499C50.1313 51.9805 48.5352 49.4112 48.2043 48.4769C48.1269 48.2865 48.1269 48.0735 48.2043 47.8832C48.2542 47.7386 48.3456 47.612 48.4671 47.519C48.5886 47.4261 48.7348 47.371 48.8874 47.3606C49.04 47.3502 49.1922 47.385 49.3252 47.4606C49.4581 47.5363 49.5659 47.6494 49.6349 47.7859C49.7031 48.0097 50.5011 50.1216 58.141 57.3917C59.8831 59.1241 60.4962 60.3406 60.0875 61.2263Z" fill="white"/>
<path d="M22.2676 14.8224C22.8482 14.8224 23.3187 14.3518 23.3187 13.7713C23.3187 13.1908 22.8482 12.7202 22.2676 12.7202C21.6871 12.7202 21.2166 13.1908 21.2166 13.7713C21.2166 14.3518 21.6871 14.8224 22.2676 14.8224Z" fill="white"/>
<path d="M42.5985 7.90268C42.7748 8.94657 43.1694 9.94148 43.7566 10.8224C43.5133 10.4526 42.1216 8.47689 41.0802 8.47689C40.5157 8.47689 39.8734 9.07057 39.377 9.67397C39.069 10.0473 38.7861 10.4407 38.5303 10.8516C38.6666 10.5791 39.815 8.23358 39.2505 7.32847C38.6861 6.42336 36.0486 6.35524 36.0486 6.35524C36.0486 6.35524 38.725 6.18979 39.2505 5.382C39.7761 4.57422 38.6666 2.12166 38.5303 1.85889C38.7861 2.26977 39.069 2.66318 39.377 3.0365C39.8734 3.63018 40.5157 4.23358 41.0802 4.23358C42.1216 4.23358 43.5133 2.28711 43.7566 1.88808C43.1681 2.7683 42.7734 3.76351 42.5985 4.80779C42.5874 5.00217 42.6348 5.19541 42.7347 5.36254C43.3284 6.26765 46.1021 6.33577 46.1021 6.33577C46.1021 6.33577 43.3284 6.42336 42.7347 7.30901C42.6269 7.48722 42.5792 7.69531 42.5985 7.90268Z" fill="white"/>
</svg>
`;var kl=(i,t,e)=>i+(t-i)*e,eu=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ir=new Ee,L0=(i,t=.5)=>new hi({color:i,roughness:t,metalness:0,envMapIntensity:.55}),N0=i=>new ui({color:i,roughness:.14,metalness:.2,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.3}),D0={base:16777215,ink:657930,soft:12756223,deep:2759262,mid:8077298};function U0(i=.62,t=-.78){let e=new be;e.rotation.order="XYZ",e.userData={rx:i,ry:t},e.rotation.set(i,t,0);let n=new be;return n.add(e),n.userData.inner=e,{outer:n,g:e}}function F0(i,t,e,n=4,s=3){let r=new oi,a=-i/2,o=-t/2;r.moveTo(a+n,o),r.lineTo(a+i-n,o),r.quadraticCurveTo(a+i,o,a+i,o+n),r.lineTo(a+i,o+t-n),r.quadraticCurveTo(a+i,o+t,a+i-n,o+t),r.lineTo(a+n,o+t),r.quadraticCurveTo(a,o+t,a,o+t-n),r.lineTo(a,o+n),r.quadraticCurveTo(a,o,a+n,o);let l=new ci(r,{depth:e,bevelEnabled:!1,curveSegments:s});return l.translate(0,0,-e/2),l}function nu(i){let{outer:t,g:e}=U0(.62,-.78),n=D0,s=8,r=46,a=36,o=new ge(F0(s*r+24,s*r+24,12,12),L0(1773373,.6));o.rotation.x=-Math.PI/2,o.position.y=-8,e.add(o);let l=new yn(a,1,a);l.translate(0,.5,0);let c=new ws(l,new hi({color:16777215,roughness:.4,metalness:.05,envMapIntensity:.7}),s*s);c.instanceColor=new ai(new Float32Array(s*s*3),3),e.add(c);let u=new ge(new Os(17,0),N0(8077298)),d=new ge(new Bs(26,2.2,8,40),new qe({color:16777215}));d.rotation.x=Math.PI/2,e.add(u,d);let h=new Float32Array(s*s),f=new Float32Array(s*s),g=new qt(n.mid),S=new qt(16777215),m=new qt,p=new Float32Array(s*s),E=T=>Math.floor(eu(T*3.7)*s*s),C=.85,y=-1;return{el:i,group:t,design:450,mode:"min",agent:u,boost:f,hs:h,cellLocal(T,b){let L=Math.floor(T/s),x=T%s;return b.set((L-(s-1)/2)*r,20,(x-(s-1)/2)*r),e.localToWorld(b)},state:{a:0,b:0},N:s,SP:r,update(T,b,L,x){for(let nt=0;nt<s;nt++)for(let st=0;st<s;st++){let at=nt*s+st,Pt=(nt-(s-1)/2)*r,wt=(st-(s-1)/2)*r,Zt=.5+.5*Math.sin(nt*.8+T*1.15+Math.sin(st*.7+T*.6)*1.5)*Math.cos(st*.9-T*.9);f[at]=Math.max(0,f[at]-b*1.1);let Wt=26+120*Zt*Zt+12*eu(at)+70*f[at]*f[at];h[at]=Wt,p[at]=Math.max(0,p[at]-b*.9),ir.position.set(Pt,0,wt),ir.scale.set(1,Wt,1),ir.rotation.set(0,0,0),ir.updateMatrix(),c.setMatrixAt(at,ir.matrix),m.copy(g).lerp(S,Zt),m.lerp(u.material.color,Math.max(p[at],f[at]*.85)),c.setColorAt(at,m)}c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0;let A=T/C,U=Math.floor(A),z=A-U,k=E(U),et=E(U+1),G=(Math.floor(k/s)-(s-1)/2)*r,$=(k%s-(s-1)/2)*r,lt=(Math.floor(et/s)-(s-1)/2)*r,J=(et%s-(s-1)/2)*r,Z=z*z*(3-2*z);u.position.set(kl(G,lt,Z),kl(h[k],h[et],Z)+24+Math.sin(Math.PI*z)*80,kl($,J,Z)),u.rotation.y=T*2.2,u.rotation.x=z*3,d.position.set(u.position.x,u.position.y,u.position.z),d.scale.setScalar(.6+.4*Math.sin(Math.PI*z)),this.state.a=k,this.state.b=et,this.state.u=z,U!==y&&(y=U,p[k]=1),e.rotation.y=e.userData.ry+x.x*.08,e.rotation.x=e.userData.rx-x.y*.1}}}var iu=20,O0=()=>Math.min(2,window.devicePixelRatio||1),oo=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function B0(i){let t=new Wi;t.add(new ge(new yn(40,20,40),new qe({color:328968,side:Ce})));let e=(r,a,o,l,c,u)=>{let d=new qt(o).multiplyScalar(l),h=new ge(new Xn(r,a),new qe({color:d,side:ke}));h.position.set(...c),h.lookAt(...u),t.add(h)};e(22,3,16777215,9,[0,9.5,2],[0,0,0]),e(2,14,10118143,14,[-12,1,3],[0,0,0]),e(2,14,8077298,12,[12,1,-2],[0,0,0]),e(18,1.2,16777215,6,[0,-2,-14],[0,0,0]),e(10,10,1708080,2,[0,-9,0],[0,0,0]),e(30,14,3807888,1.5,[0,1,17],[0,0,0]),e(3,16,16777215,10,[-5,2,15],[0,0,0]),e(1.2,16,16777215,8,[6,2,15],[0,0,0]);let n=new ss(i),s=n.fromScene(t,.02);return n.dispose(),s.texture}function z0(i){let t=new ao().parse(tu),e=new be;t.paths.forEach(o=>{o.toShapes(!0).forEach(l=>{let c=new ci(l,{depth:5,bevelEnabled:!0,bevelThickness:.9,bevelSize:.5,bevelSegments:3,curveSegments:14});e.add(new ge(c,i))})});let s=new Qe().setFromObject(e).getCenter(new V);e.children.forEach(o=>o.position.set(-s.x,-s.y,-s.z));let r=new be;r.add(e),r.scale.set(1,-1,1);let a=new be;return a.add(r),a}function au(i,t){let e;try{let T=document.createElement("canvas");if(!(T.getContext("webgl2")||T.getContext("webgl")))throw new Error("nogl");e=new io({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return i.classList.add("seer-glass-nogl"),{destroy(){}}}e.setClearColor(0,0),e.outputColorSpace=we,e.toneMapping=Je;let n=e.domElement;n.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(n);let s=new Wi,r=new Ne(iu,1,40,14e3);s.environment=B0(e),s.add(new Gs(16777215,4930559,.8));let a=new Ji(16777215,1.9);a.position.set(-300,700,900),s.add(a);let o=new Ji(10118143,2.2);o.position.set(500,200,-500),s.add(o);let l={renderer:e,scene:s,camera:r,key:a,rim:o,W:1,H:1},c=t(l),u={x:0,y:0,tx:0,ty:0},d=T=>{let b=i.getBoundingClientRect();u.tx=Math.max(-1,Math.min(1,(T.clientX-b.left)/Math.max(1,b.width)*2-1)),u.ty=Math.max(-1,Math.min(1,(T.clientY-b.top)/Math.max(1,b.height)*2-1))};addEventListener("pointermove",d,{passive:!0});function h(){let T=i.getBoundingClientRect(),b=Math.max(2,Math.round(T.width)),L=Math.max(2,Math.round(T.height));l.W=b,l.H=L,e.setPixelRatio(O0()),e.setSize(b,L,!1),r.aspect=b/L,r.position.set(0,0,L/2/Math.tan(yl.degToRad(iu/2))),r.updateProjectionMatrix(),c.resize&&c.resize(b,L)}let f=new ResizeObserver(h);f.observe(i),h();let g=!0,S=0,m=oo()?3.4:0,p=performance.now(),E=!1,C=new IntersectionObserver(T=>{g=T[0].isIntersecting,g&&(p=performance.now(),y())},{rootMargin:"80px"});C.observe(i);function y(){if(cancelAnimationFrame(S),E||!g)return;S=requestAnimationFrame(y);let T=performance.now(),b=Math.min(.05,(T-p)/1e3);p=T,oo()?b=0:m+=b;let L=Math.min(1,b*4+(oo()?1:0));u.x+=(u.tx-u.x)*L,u.y+=(u.ty-u.y)*L,c.frame(m,b,u,l),e.render(s,r)}return y(),{destroy(){E=!0,cancelAnimationFrame(S),f.disconnect(),C.disconnect(),removeEventListener("pointermove",d),s.traverse(T=>{T.geometry&&T.geometry.dispose()}),e.dispose(),n.remove()}}}function su(i){return i.renderer.domElement}var ru=["consensus-specs","ethers.js","lighthouse","nimbus-eth2","gnark-crypto","foundry","blst","mev-boost","teku","go-ethereum"],Vl=new V,Gl=new V,Re={anchors:[],sel:null,st:null,pulse(i){let t=Re.st;t&&Re.sel&&(t.boost[Re.sel[i]]=1)}};function k0(i){return au(i,t=>{let e=nu(i);t.scene.add(e.group),Re.st=e,Re.sel=null;let n=document.createElement("div");n.style.cssText='position:absolute;left:0;top:0;pointer-events:none;white-space:nowrap;padding:5px 11px;border-radius:999px;background:rgba(10,8,24,.78);border:1px solid rgba(255,255,255,.45);color:#fff;font:600 12px/1 "Inter Tight",system-ui,sans-serif;letter-spacing:.02em',i.appendChild(n);let s={x:0,y:0};return{resize(r,a){e.group.scale.setScalar(Math.min(r,a)/e.design*.82),Re.sel=null,Re.n=0},frame(r,a,o){e.update(r,a,0,o||s),e.group.updateMatrixWorld(!0);{let c=[];for(let u=0;u<64;u++)e.cellLocal(u,Gl).project(t.camera),c.push({k:u,x:(Gl.x+1)/2*t.W,y:(1-Gl.y)/2*t.H});if(Re.n=(Re.n||0)+1,!Re.sel&&Re.n>12&&t.W>100){let u=c.map(p=>p.y),d=c.map(p=>p.x),h=Math.min(...u),f=Math.max(...u),g=Math.min(...d),S=new Set,m=[];for(let p=0;p<10;p++){let E=h+(f-h)*(p+.5)/10,C=null,y=1e9;c.forEach(T=>{if(S.has(T.k))return;let b=Math.abs(T.y-E)+.12*(T.x-g);b<y&&(y=b,C=T)}),S.add(C.k),m.push(C.k)}Re.sel=m}Re.anchors=(Re.sel||[]).map(u=>c[u]),Re.W=t.W,Re.H=t.H}Vl.setFromMatrixPosition(e.agent.matrixWorld).project(t.camera),n.style.transform=`translate(${(Vl.x+1)/2*t.W}px,${(1-Vl.y)/2*t.H}px) translate(-50%,-190%)`;let l=ru[(e.state.u>.5?e.state.b:e.state.a)%ru.length];n.textContent!==l&&(n.textContent=l)}}})}var ou=new Set,lo=0;function V0(i){lo=Math.max(0,Math.min(1,+i||0)),ou.forEach(t=>t(lo))}function G0(i,t={}){let e=t.floor!==!1;return au(i,n=>{if(e){let b="linear-gradient(#000 62%,transparent 98%)";su(n).style.webkitMaskImage=b,su(n).style.maskImage=b}let s=new ui({color:13222126,metalness:1,roughness:.12,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.7,emissive:8077298,emissiveIntensity:0}),r=z0(s),a=r.clone(!0),o=new be;o.add(r);let l=new be;l.scale.y=-1,l.add(a);let c=new be;c.add(l);let u=new ze({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float a=mix(0.84,1.0,smoothstep(0.0,0.5,1.0-vUv.y)); gl_FragColor=vec4(0.039,0.039,0.039,a);}"}),d=new ge(new Xn(1,1),u),h=new be;h.add(c,d,o),n.scene.add(h);let f=1,g=64,S=2,m=2,p=n.rim.intensity,E=1.7,C=lo,y=lo,T=b=>{C=b};return ou.add(T),i.__seerLogoPulse===void 0&&(i.__seerLogoPulse=b=>{C=Math.max(0,Math.min(1,b))}),{resize(b,L){S=b,m=L,f=Math.min(b*.86/138,L*(e?.42:.8)/64),r.scale.setScalar(f),a.scale.setScalar(f),g=64*f,d.scale.set(138*f*1.3,g*.4,1),c.visible=d.visible=e&&b>=500,h.position.y=e?L*.17:0},frame(b,L,x){y+=(C-y)*Math.min(1,L*8+(oo()?1:0)),n.rim.intensity=p+y*6,s.emissiveIntensity=y*.55,s.envMapIntensity=E+y*1.1;let A=Math.sin(b*.9)*8*(f/3);o.position.y=A,o.rotation.set(-x.y*.22+Math.sin(b*.7)*.05,(x.x+Math.sin(b*.35)*.45+.3)*.55+Math.sin(b*.5)*.28,Math.sin(b*.6)*.02);let U=-g/2-44*(f/3);c.position.set(0,2*U-A,-70*(f/3)),a.rotation.copy(o.rotation),d.position.set(0,U-g*.2,-35*(f/3))}}})}window.SeerGlass={mountDeep:k0,mountLogo:G0,logoPulse:V0,deep:Re};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
