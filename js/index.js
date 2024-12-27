!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{t:t,resolve:c,reject:u}=e.shift();Promise.resolve().then((()=>t())).then(c).catch(u).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({t:n,resolve:t,reject:o}),i()}))}}function u(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function r(n){return Math.random()<n}function a(n,t){return Math.random()*(t-n)+n}function f(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return u(e,(()=>a(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function s(){return r(.5)}function m(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function g(n){const t=a(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function l(n,t){return n[g(t)]}function p(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function d(n){return-n.width<n.x&&n.x<o}function h(n,t){return t/n}function w(n,t,e,o){return n+t*o+.5*e*o*o}function y(n,t,e){return n+t*e}function x(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function v(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function M(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const c=n.createGain();c.gain.value=o,i.connect(c),c.connect(n.destination),i.start()}}function S(n,t,e,o,i,c,u=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*c),n.scale(u,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-c,i,c),n.restore()}const T="high-score";function k(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function E(n){document.querySelector(".canvas").style.backgroundImage=`url('../img/background-${n}.png')`}function R(){b().forEach(X),j().forEach(I),P().forEach(I)}function A(n){b().forEach(I),j().forEach(X),P().forEach(I),document.querySelector(".game-score").textContent=n}function b(){return[document.querySelector(".home-title"),document.querySelector(".home-hint")]}function j(){return[document.querySelector(".game-score")]}function P(){return[document.querySelector(".game-over-result"),document.querySelector(".game-over-hint")]}function I(n){n.style.visibility="hidden"}function X(n){n.style.visibility="visible"}const _=20,F=20,G=Math.floor(o/2)-_/2,C=-.75,L=C*C/224,O=2*Math.abs(C)/L,Y=2.5,B=2.5,N=.7,V=C,q=.35,z=250,D=3e3,J=180;function U(){return{o:0,i:Y,u:B,m:0,width:_,height:F,x:G,y:3.5*-F,velocityY:0,l:!0,p:0}}function $(n){return i(n)-F}function Q(n){n.status!==In||n.h.l||(n.h.velocityY=C,n.h.o=1,n.h.l=!0,n.h.p=n.v,M(n.M,m(n.T.S)))}function H(n){n.status===Pn||n.status===In?(n.h.l&&(K(n),W(n),function(n){n.h.k&&!n.h.l&&(Q(n),n.h.k=!1)}(n)),function(n){if(!n.h.l){const o=n.R.filter((n=>!n.A));if(o.length>0){const i=(t=o,e=n.h.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),c=n.h.i<0!==i.j;n.h.i*=c?-1:1}}var t,e}(n)):n.status===Xn&&(K(n),W(n))}function K(n){var t,e,o;n.h.velocityY=(t=n.h.velocityY,e=L,o=n.P,t+e*o),n.h.y=w(n.h.y,n.h.velocityY,L,n.P);n.h.velocityY/C<q&&(n.status===Xn?n.h.o=6:n.h.o=2)}function W(n){(function(n){return n.h.y>$(n)})(n)&&(n.h.y=$(n),n.h.velocityY=0,n.h.l=!1,n.h.o=0,n.h.m=0,n.status===Xn&&(n.h.o=4))}function Z(n){const t=a(z,D);n.I=setTimeout((()=>{n.h.l||(n.h.o=3),n.I=setTimeout((()=>{n.h.l||(n.h.o=0),Z(n)}),J)}),t)}function nn(n){n.h.velocityY=V,n.h.o=5,function(n){clearTimeout(n.I)}(n)}const tn=10,en=10,on=2,cn=2,un=.4,rn=tn*on*.5,an=[{o:0,velocityX:.13,X:.85},{o:1,velocityX:.17,X:.95},{o:2,velocityX:.22,X:1.1}],fn=[.4,.4,.2],sn=G/.13,mn=50,gn=.8,ln=.25,pn=.5;function dn(n){return i(n)-F/2-en/2}function hn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,c=i*i-4*o*-n;if(c<0)return null;{const n=Math.sqrt(c);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(dn(n)-($(n)+F),C,L))}function wn(n){const t=n._.filter((t=>t.F<=n.v));n._=n._.filter((t=>t.F>n.v)),n.R.push(...t),t.length>0&&function(n,t){const e=m(n.T.G),o=Math.max(...t.map((n=>n.X))),i=a(-.05,.05),c=o+i;n.C((()=>{M(n.M,e,c,pn)}))}(n,t)}function yn(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*O,2.5*O,3.5*O],o=[2.5*O,3.5*O,7*O],i=g(t(n));return a(e[i],o[i])}(n.L);n.O=setTimeout((()=>{if(n.status!==In)return;const t=n.v+sn;var e;const i=function(n){const t=s(),e=l(an,fn).velocityX;return u(n,(()=>{const o=r(Math.pow(gn,1/n))?t:!t,i=r(Math.pow(ln,1/n))?e:l(an,fn).velocityX;return o?i:-i}))}((e=n.L)<5?1+g([.9,.1]):e<11?1+g([.7,.2,.05,.05]):e<29?1+g([.5,.2,.1,.1]):1+g([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const a=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,xn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=10;for(let c=0;c<e;c++){const u=f(n,t,e-c,o,i);if(u)return u}}(t,e,c.get(n),tn*on/Math.abs(n))])),m=Array.from(a,(([t,e])=>e.map((e=>function(n,t,e){const i=an.find((n=>Math.abs(e)===n.velocityX)),c=e>=0,u=h(rn,e)*un;return{F:t,o:i.o,i:on,u:cn,m:0,Y:u,width:tn,height:en,x:c?-tn:o,y:dn(n),velocityX:e,j:c,A:!1,X:i.X}}(n,e,t))))).flat();n.B.push(t),n._.push(...m),yn(n)}),t)}function xn(n,t,o){const i=mn+e,c=hn(n),u=t+O-c-i,r=G+_+tn;return[t+c+i-G/Math.abs(o),u-r/Math.abs(o)]}const vn=10,Mn=10,Sn=.095,Tn=2.67,kn=2.67,En=.4*h(vn*Tn*.5,Sn),Rn=2e3,An=25e3;function bn(n){return function(n,t){return{i:Tn,u:kn,m:0,Y:t?En:-En,width:vn,height:Mn,x:t?-vn:o,y:n,velocityX:t?Sn:-Sn,j:t,A:!1}}(n,s())}function jn(n){const t=a(Rn,An);n.N=setTimeout((()=>{if(n.status!==In)return;const t=bn(i(n)-F/2-Mn/2);n.V.push(t),jn(n)}),t)}const Pn="GAME_NOT_STARTED",In="GAME_IN_PROGRESS",Xn="GAME_OVER",_n="GAME_RESETTABLE",Fn=60,Gn=6,Cn=400;function Ln(i){for(let n=i.q;n>0;n-=e)i.P=Math.min(n,e),i.v+=i.P,On(i),i.D+=1;i.J+=1,i.U-i.$>=1e3&&(i.H=i.J,i.K=i.D,i.J=0,i.D=0,i.$=i.U),function(e){(function(n){n.W.clearRect(0,0,o,n.height)})(e),function(n){S(n.W,n.images.h[n.h.o],n.h.x,n.h.y,n.h.width,n.h.height,n.h.i,n.h.u,n.h.m),n.Z&&(n.W.strokeStyle=t,n.W.strokeRect(n.h.x,n.h.y,_,F))}(e),function(n){for(const e of n.V)S(n.W,n.images.nn,e.x,e.y,e.width,e.height,e.i,e.u,e.m),n.Z&&(n.W.strokeStyle=t,n.W.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.R)S(n.W,n.images.tn[e.o],e.x,e.y,e.width,e.height,e.i,e.u,e.m),n.Z&&(n.W.strokeStyle=t,n.W.strokeRect(e.x,e.y,tn,en))}(e),function(n){n.en>0&&(n.W.fillStyle=`rgba(255, 255, 255, ${n.en})`,n.W.fillRect(0,0,o,n.height))}(e),function(e){if(e.Z){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.H)+" F/S",Math.round(e.K)+" U/S"].filter(Boolean).join("   ");e.W.font=n,e.W.fillStyle=t,e.W.fillText(i,8,e.height-8),e.W.strokeStyle=t,e.W.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.q=n-i.U,i.U=n,Ln(i)}))}function On(n){!function(n){const t=n.B.length>0&&n.B[0]<=n.v;n.cn&&t&&(Q(n),n.B.shift())}(n),H(n),wn(n),function(n){for(const t of n.R)t.x=w(t.x,t.velocityX,0,n.P),t.m=y(t.m,t.Y,n.P)}(n),function(n){for(const t of n.V)t.x=w(t.x,t.velocityX,0,n.P),t.m=y(t.m,t.Y,n.P)}(n),function(n){if(n.status!==In)return;const t=n.R.filter((n=>{const t=!n.A,e=n.j&&n.x>G+_,o=!n.j&&n.x+tn<G;return t&&(e||o)}));t.forEach((n=>n.A=!0)),n.L+=t.length,t.length>0&&(n.C((()=>M(n.M,m(n.T.L)))),A(n.L))}(n),function(n){if(n.status!==In)return;const t=n.V.filter((t=>{const e=!t.A,o=p(n.h,t);return e&&o}));t.forEach((n=>n.A=!0)),n.L+=t.length,n.V=n.V.filter((n=>!t.includes(n))),t.length>0&&(M(n.M,n.T.un),A(n.L))}(n),function(n){n.status===In?function(n){for(const t of n.R)if(p(n.h,t))return!0;return!1}(n)&&(!function(n){n.L>n.rn&&(n.rn=n.L,t=n.L,localStorage.setItem(T,t));var t}(n),function(n){clearTimeout(n.N)}(n),function(n){clearTimeout(n.O)}(n),function(n){n.en=1}(n),nn(n),n.status=Xn,M(n.M,n.T.an)):n.status===Xn&&function(n){return 0===n.R.length&&0===n.V.length}(n)&&(n.status=_n,t=n.L,e=n.rn,b().forEach(I),j().forEach(I),P().forEach(X),document.querySelector(".game-over-score").textContent=t,document.querySelector(".game-over-high-score").textContent=e);var t,e}(n),function(n){n.R=n.R.filter(d)}(n),function(n){n.V=n.V.filter(d)}(n),function(n){n.en>0&&(n.en-=n.P/Cn,n.en<0&&(n.en=0))}(n)}async function Yn(n){await async function(n){"suspended"===n.M.state&&await n.M.resume()}(n),function(n){n.status===Pn&&function(n){return n.h.y===$(n)}(n)?(n.status=In,jn(n),yn(n),A(n.L)):n.status===_n&&(n.status=Pn,n.h=U(),n.L=0,n.fn=(n.fn+1)%4,Z(n),R(),E(n.fn))}(n),Q(n),function(n){const t=n.v-n.h.p;n.status===In&&t>O*N&&(n.h.k=!0)}(n)}function Bn(n,t,e){const o=n.height,[c,u]=Nn(t,e);n.width=c,n.height=u,function(n){n.V.map((t=>{t.y=i(n)-F/2-Mn/2}))}(n),function(n){n.R.map((t=>{t.y=dn(n)}))}(n),function(n,t){const e=i({height:t}),o=n.h.y,c=i(n);n.h.y=c-(e-o)}(n,o)}function Nn(n,t){return[o,o*t/n]}function Vn(n,t){const[e,i]=k(),c=Math.floor(e*window.devicePixelRatio),u=Math.floor(i*window.devicePixelRatio),r=c/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(c),n.height=Math.floor(u),n.getContext("2d").scale(r,r),t&&Bn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=document.querySelector(".canvas"),t=n.getContext("2d"),e=new AudioContext,o={S:[],L:[],G:[]},i=[v(e,"./sfx/die.mp3").then((n=>o.an=n)),v(e,"./sfx/eat.wav").then((n=>o.un=n)),v(e,"./sfx/jump-0.mp3").then((n=>o.S[0]=n)),v(e,"./sfx/jump-1.mp3").then((n=>o.S[1]=n)),v(e,"./sfx/jump-2.mp3").then((n=>o.S[2]=n)),v(e,"./sfx/jump-3.mp3").then((n=>o.S[3]=n)),v(e,"./sfx/jump-4.mp3").then((n=>o.S[4]=n)),v(e,"./sfx/jump-5.mp3").then((n=>o.S[5]=n)),v(e,"./sfx/score-0.wav").then((n=>o.L[0]=n)),v(e,"./sfx/score-1.wav").then((n=>o.L[1]=n)),v(e,"./sfx/score-2.wav").then((n=>o.L[2]=n)),v(e,"./sfx/score-3.wav").then((n=>o.L[3]=n)),v(e,"./sfx/shoot-0.wav").then((n=>o.G[0]=n)),v(e,"./sfx/shoot-1.wav").then((n=>o.G[1]=n))],u={h:[],tn:[],background:[]},r=[x("./img/player-0.png").then((n=>u.h[0]=n)),x("./img/player-1.png").then((n=>u.h[1]=n)),x("./img/player-2.png").then((n=>u.h[2]=n)),x("./img/player-3.png").then((n=>u.h[3]=n)),x("./img/player-4.png").then((n=>u.h[4]=n)),x("./img/player-5.png").then((n=>u.h[5]=n)),x("./img/player-6.png").then((n=>u.h[6]=n)),x("./img/enemy-0.png").then((n=>u.tn[0]=n)),x("./img/enemy-1.png").then((n=>u.tn[1]=n)),x("./img/enemy-2.png").then((n=>u.tn[2]=n)),x("./img/snack.png").then((n=>u.nn=n))];await Promise.all([...i,...r]);const a=new URL(location),f="true"===a.searchParams.get("auto"),s="true"===a.searchParams.get("debug"),m=Number.parseInt(a.searchParams.get("score"))||0,g=localStorage.getItem(T)??0,[l,p]=k(),d=function(n,t,e,o,i,u,r,a,f,s){const[m,g]=Nn(i,u);return{W:n,M:t,T:e,images:o,width:m,height:g,U:0,q:0,v:0,P:0,status:Pn,L:s,rn:r,h:U(),R:[],_:[],V:[],B:[],cn:a,Z:f,H:0,J:0,K:0,D:0,$:0,N:null,O:null,I:null,en:0,fn:1,C:c(Fn,Gn)}}(t,e,o,u,l,p,g,f,s,m);E(d.fn),Vn(n),X(n),R(),requestAnimationFrame((n=>{d.q=0,d.U=n,Z(d),Ln(d)})),window.addEventListener("resize",(()=>Vn(n,d)),{passive:!0}),document.addEventListener("pointerup",function(n){async function t(){await Yn(n),document.addEventListener("pointerdown",e,{passive:!0})}async function e(){await Yn(n)}return t}(d),{once:!0,passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Yn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(d)),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(e))}))}();
