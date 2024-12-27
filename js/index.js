!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}const c=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function u(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:c,reject:u}=e.shift();Promise.resolve().then((()=>t())).then(c).catch(u).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function g(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function l(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[l(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function v(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function M(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function S(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const c=n.createGain();c.gain.value=o,i.connect(c),c.connect(n.destination),i.start()}}function R(n,t,e,o,i,c,u=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*c),n.scale(u,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-c,i,c),n.restore()}const T="high-score";function E(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function k(n){document.querySelector(".canvas").style.backgroundImage=`url('../img/background-${n}.png')`}function b(){j().forEach(I),P().forEach(_),O().forEach(_)}function A(n){j().forEach(_),P().forEach(I),O().forEach(_),document.querySelector(".game-score").textContent=n}function j(){return[document.querySelector(".home-title"),document.querySelector(".home-hint")]}function P(){return[document.querySelector(".game-score")]}function O(){return[document.querySelector(".game-over-result"),document.querySelector(".game-over-hint")]}function _(n){n.style.visibility="hidden"}function I(n){n.style.visibility="visible"}const X=20,F=20,Y=Math.floor(o/2)-X/2,D=-.75,N=D*D/224,C=2*Math.abs(D)/N,G=2.5,V=2.5,L=.7,q=D,z=.35,B=250,J=3e3,U=180;function $(){return{l:0,p:G,h:V,v:0,width:X,height:F,x:Y,y:3.5*-F,velocityY:0,M:!0,S:0}}function Q(n){return i(n)-F}function H(n){n.status!==c.o||n.R.M||(n.R.velocityY=D,n.R.l=1,n.R.M=!0,n.R.S=n.T,S(n.k,g(n.j.A)))}function K(n){n.status===c.t||n.status===c.o?(n.R.M&&(W(n),Z(n),function(n){n.R.P&&!n.R.M&&(H(n),n.R.P=!1)}(n)),function(n){if(!n.R.M){const o=n.O.filter((n=>!n._));if(o.length>0){const i=(t=o,e=n.R.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),c=n.R.p<0!==i.I;n.R.p*=c?-1:1}}var t,e}(n)):n.status===c.i&&(W(n),Z(n))}function W(n){var t,e,o;n.R.velocityY=(t=n.R.velocityY,e=N,o=n.X,t+e*o),n.R.y=y(n.R.y,n.R.velocityY,N,n.X);n.R.velocityY/D<z&&(n.status===c.i?n.R.l=6:n.R.l=2)}function Z(n){(function(n){return n.R.y>Q(n)})(n)&&(n.R.y=Q(n),n.R.velocityY=0,n.R.M=!1,n.R.l=0,n.R.v=0,n.status===c.i&&(n.R.l=4))}function nn(n){const t=f(B,J);n.F=setTimeout((()=>{n.R.M||(n.R.l=3),n.F=setTimeout((()=>{n.R.M||(n.R.l=0),nn(n)}),U)}),t)}function tn(n){n.R.velocityY=q,n.R.l=5,function(n){clearTimeout(n.F)}(n)}const en=10,on=10,cn=2,un=2,rn=.4,an=en*cn*.5,fn=[{l:0,velocityX:.13,Y:.85},{l:1,velocityX:.17,Y:.95},{l:2,velocityX:.22,Y:1.1}],sn=[.4,.4,.2],mn=Y/.13,gn=50,ln=.8,pn=.25,dn=.5;function hn(n){return i(n)-F/2-on/2}function wn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,c=i*i-4*o*-n;if(c<0)return null;{const n=Math.sqrt(c);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(hn(n)-(Q(n)+F),D,N))}function yn(n){const t=n.D.filter((t=>t.N<=n.T));n.D=n.D.filter((t=>t.N>n.T)),n.O.push(...t),t.length>0&&function(n,t){const e=g(n.j.C),o=Math.max(...t.map((n=>n.Y))),i=f(-.05,.05),c=o+i;n.G((()=>{S(n.k,e,c,dn)}))}(n,t)}function xn(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*C,2.5*C,3.5*C],o=[2.5*C,3.5*C,7*C],i=l(t(n));return f(e[i],o[i])}(n.V);n.L=setTimeout((()=>{if(n.status!==c.o)return;const t=n.T+mn;var e;const i=function(n){const t=m(),e=p(fn,sn).velocityX;return r(n,(()=>{const o=a(Math.pow(ln,1/n))?t:!t,i=a(Math.pow(pn,1/n))?e:p(fn,sn).velocityX;return o?i:-i}))}((e=n.V)<5?1+l([.9,.1]):e<11?1+l([.7,.2,.05,.05]):e<29?1+l([.5,.2,.1,.1]):1+l([.4,.2,.15,.15,.05,.05])),u=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,vn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=20;for(let c=e;c>0;c--){const e=s(n,t,c,o,i);if(e)return e}return[]}(t,e,u.get(n),en*cn/Math.abs(n))])),g=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=fn.find((n=>Math.abs(e)===n.velocityX)),c=e>=0,u=w(an,e)*rn;return{N:t,l:i.l,p:cn,h:un,v:0,q:u,width:en,height:on,x:c?-en:o,y:hn(n),velocityX:e,I:c,_:!1,Y:i.Y}}(n,e,t))))).flat();n.B.push(t),n.D.push(...g),xn(n)}),t)}function vn(n,t,o){const i=gn+e,c=wn(n),u=t+C-c-i,r=Y+X+en;return[t+c+i-Y/Math.abs(o),u-r/Math.abs(o)]}const Mn=10,Sn=10,Rn=.095,Tn=2.67,En=2.67,kn=.4*w(Mn*Tn*.5,Rn),bn=2e3,An=25e3;function jn(n){return function(n,t){return{p:Tn,h:En,v:0,q:t?kn:-kn,width:Mn,height:Sn,x:t?-Mn:o,y:n,velocityX:t?Rn:-Rn,I:t,_:!1}}(n,m())}function Pn(n){const t=f(bn,An);n.J=setTimeout((()=>{if(n.status!==c.o)return;const t=jn(i(n)-F/2-Sn/2);n.U.push(t),Pn(n)}),t)}const On=4,_n=60,In=6,Xn=400;function Fn(i){for(let n=i.$;n>0;n-=e)i.X=Math.min(n,e),i.T+=i.X,Yn(i),i.H+=1;i.K+=1,i.W-i.Z>=1e3&&(i.nn=i.K,i.tn=i.H,i.K=0,i.H=0,i.Z=i.W),function(e){(function(n){n.en.clearRect(0,0,o,n.height)})(e),function(n){R(n.en,n.images.R[n.R.l],n.R.x,n.R.y,n.R.width,n.R.height,n.R.p,n.R.h,n.R.v),n.cn&&(n.en.strokeStyle=t,n.en.strokeRect(n.R.x,n.R.y,X,F))}(e),function(n){for(const e of n.U)R(n.en,n.images.un,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.O)R(n.en,n.images.rn[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,en,on))}(e),function(n){n.an>0&&(n.en.fillStyle=`rgba(255, 255, 255, ${n.an})`,n.en.fillRect(0,0,o,n.height))}(e),function(e){if(e.cn){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.nn)+" F/S",Math.round(e.tn)+" U/S"].filter(Boolean).join("   ");e.en.font=n,e.en.fillStyle=t,e.en.fillText(i,8,e.height-8),e.en.strokeStyle=t,e.en.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.$=n-i.W,i.W=n,Fn(i)}))}function Yn(n){!function(n){const t=n.B.length>0&&n.B[0]<=n.T;n.fn&&t&&(H(n),n.B.shift())}(n),K(n),yn(n),function(n){for(const t of n.O)t.x=y(t.x,t.velocityX,0,n.X),t.v=x(t.v,t.q,n.X)}(n),function(n){for(const t of n.U)t.x=y(t.x,t.velocityX,0,n.X),t.v=x(t.v,t.q,n.X)}(n),function(n){if(n.status!==c.o)return;const t=n.O.filter((n=>{const t=!n._,e=n.I&&n.x>Y+X,o=!n.I&&n.x+en<Y;return t&&(e||o)}));t.forEach((n=>n._=!0)),n.V+=t.length,t.length>0&&(n.G((()=>S(n.k,g(n.j.V)))),A(n.V))}(n),function(n){if(n.status!==c.o)return;const t=n.U.filter((t=>{const e=!t._,o=d(n.R,t);return e&&o}));t.forEach((n=>n._=!0)),n.V+=t.length,n.U=n.U.filter((n=>!t.includes(n))),t.length>0&&(S(n.k,n.j.sn),A(n.V))}(n),function(n){n.status===c.o?function(n){for(const t of n.O)if(d(n.R,t))return!0;return!1}(n)&&(!function(n){n.V>n.mn&&(n.mn=n.V,t=n.V,localStorage.setItem(T,t));var t}(n),function(n){clearTimeout(n.J)}(n),function(n){clearTimeout(n.L)}(n),function(n){n.an=1}(n),tn(n),n.status=c.i,S(n.k,n.j.gn)):n.status===c.i&&function(n){return 0===n.O.length&&0===n.U.length}(n)&&(n.status=c.u,t=n.V,e=n.mn,j().forEach(_),P().forEach(_),O().forEach(I),document.querySelector(".game-over-score").textContent=t,document.querySelector(".game-over-high-score").textContent=e);var t,e}(n),function(n){n.O=n.O.filter(h)}(n),function(n){n.U=n.U.filter(h)}(n),function(n){n.an>0&&(n.an-=n.X/Xn,n.an<0&&(n.an=0))}(n)}async function Dn(n){await async function(n){"suspended"===n.k.state&&await n.k.resume()}(n),function(n){n.status===c.t&&function(n){return n.R.y===Q(n)}(n)?(n.status=c.o,Pn(n),xn(n),A(n.V)):n.status===c.u&&(n.status=c.t,n.R=$(),n.V=0,n.ln=(n.ln+1)%On,nn(n),b(),k(n.ln))}(n),H(n),function(n){const t=n.T-n.R.S;n.status===c.o&&t>C*L&&(n.R.P=!0)}(n)}function Nn(n,t,e){const o=n.height,[c,u]=Cn(t,e);n.width=c,n.height=u,function(n){n.U.map((t=>{t.y=i(n)-F/2-Sn/2}))}(n),function(n){n.O.map((t=>{t.y=hn(n)}))}(n),function(n,t){const e=i({height:t}),o=n.R.y,c=i(n);n.R.y=c-(e-o)}(n,o)}function Cn(n,t){return[o,o*t/n]}function Gn(n,t){const[e,i]=E(),c=Math.floor(e*window.devicePixelRatio),u=Math.floor(i*window.devicePixelRatio),r=c/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(c),n.height=Math.floor(u),n.getContext("2d").scale(r,r),t&&Nn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=document.querySelector(".canvas"),t=n.getContext("2d"),e=new AudioContext,o={A:[],V:[],C:[]},i=[M(e,"./sfx/die.mp3").then((n=>o.gn=n)),M(e,"./sfx/eat.wav").then((n=>o.sn=n)),M(e,"./sfx/jump-0.mp3").then((n=>o.A[0]=n)),M(e,"./sfx/jump-1.mp3").then((n=>o.A[1]=n)),M(e,"./sfx/jump-2.mp3").then((n=>o.A[2]=n)),M(e,"./sfx/jump-3.mp3").then((n=>o.A[3]=n)),M(e,"./sfx/jump-4.mp3").then((n=>o.A[4]=n)),M(e,"./sfx/jump-5.mp3").then((n=>o.A[5]=n)),M(e,"./sfx/score-0.wav").then((n=>o.V[0]=n)),M(e,"./sfx/score-1.wav").then((n=>o.V[1]=n)),M(e,"./sfx/score-2.wav").then((n=>o.V[2]=n)),M(e,"./sfx/score-3.wav").then((n=>o.V[3]=n)),M(e,"./sfx/shoot-0.wav").then((n=>o.C[0]=n)),M(e,"./sfx/shoot-1.wav").then((n=>o.C[1]=n))],r={R:[],rn:[],background:[]},a=[v("./img/player-0.png").then((n=>r.R[0]=n)),v("./img/player-1.png").then((n=>r.R[1]=n)),v("./img/player-2.png").then((n=>r.R[2]=n)),v("./img/player-3.png").then((n=>r.R[3]=n)),v("./img/player-4.png").then((n=>r.R[4]=n)),v("./img/player-5.png").then((n=>r.R[5]=n)),v("./img/player-6.png").then((n=>r.R[6]=n)),v("./img/enemy-0.png").then((n=>r.rn[0]=n)),v("./img/enemy-1.png").then((n=>r.rn[1]=n)),v("./img/enemy-2.png").then((n=>r.rn[2]=n)),v("./img/snack.png").then((n=>r.un=n))];await Promise.all([...i,...a]);const f=new URL(location),s="true"===f.searchParams.get("auto"),m="true"===f.searchParams.get("debug"),g=Number.parseInt(f.searchParams.get("score"))||0,l=localStorage.getItem(T)??0,[p,d]=E(),h=function(n,t,e,o,i,r,a,f,s,m){const[g,l]=Cn(i,r);return{en:n,k:t,j:e,images:o,width:g,height:l,W:0,$:0,T:0,X:0,status:c.t,V:m,mn:a,R:$(),O:[],D:[],U:[],B:[],fn:f,cn:s,nn:0,K:0,tn:0,H:0,Z:0,J:null,L:null,F:null,an:0,ln:1,G:u(_n,In)}}(t,e,o,r,p,d,l,s,m,g);k(h.ln),Gn(n),I(n),b(),requestAnimationFrame((n=>{h.$=0,h.W=n,nn(h),Fn(h)})),window.addEventListener("resize",(()=>Gn(n,h)),{passive:!0}),document.addEventListener("pointerup",function(n){async function t(){await Dn(n),document.addEventListener("pointerdown",e,{passive:!0})}async function e(){await Dn(n)}return t}(h),{once:!0,passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Dn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(h)),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(e))}))}();
