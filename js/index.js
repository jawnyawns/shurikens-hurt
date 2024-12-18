!function(){"use strict";function n(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 800px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function t(){o().forEach(r),i().forEach(u),c().forEach(u)}function e(n){o().forEach(u),i().forEach(r),c().forEach(u);const t=["🥕","🍑","🥬"][n.t];document.querySelector(".game-score").textContent=`${n.o} ${t}`}function o(){return[document.querySelector(".home-title"),document.querySelector(".home-hint")]}function i(){return[document.querySelector(".game-score")]}function c(){return[document.querySelector(".game-over-title"),document.querySelector(".game-over-result"),document.querySelector(".game-over-hint")]}function u(n){n.style.visibility="hidden"}function r(n){n.style.visibility="visible"}const a="9px sans-serif",f="#0f0",s=1e3/29,[m,d]=n(),g=360,p=g*(d/m),l=p/2+69;function h(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function w(n){return Math.random()<n}function y(n,t){return Math.random()*(t-n)+n}function v(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return h(e,(()=>y(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function x(){return w(.5)}function M(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function T(n){const t=y(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function S(n,t){return n[T(t)]}function k(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function A(n){return-n.width<n.x&&n.x<g}function E(n,t){return t/n}function I(n,t,e,o){return n+t*o+.5*e*o*o}function R(n,t,e){return n+t*e}function X(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function j(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function b(n,t){if("running"===n.state){const e=n.createBufferSource();e.buffer=t,e.connect(n.destination),e.start()}}function _(n,t,e,o,i,c,u=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*c),n.scale(u,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-c,i,c),n.restore()}const F="high-score";const G=20,C=20,L=Math.floor(g/2)-G/2,O=l-C,Y=-.75,B=Y*Y/224,N=2*Math.abs(Y)/B,P=2.5,V=2.5,$=.7,q=.9*Y,D=.35,J=250,U=3e3,z=180;function H(){return{i:0,u:P,m:V,p:0,width:G,height:C,x:L,y:3.5*-C,velocityY:0,l:!0,h:0}}function K(n){n.status!==jn||n.v.l||(n.v.velocityY=Y,n.v.i=1,n.v.l=!0,n.v.h=n.M,b(n.T,M(n.k.S)))}function Q(n){n.status===Xn||n.status===jn?(n.v.l&&(W(n),function(n){(function(n){return n.v.y>O})(n)&&(n.v.y=O,n.v.velocityY=0,n.v.l=!1,n.v.i=0,n.v.p=0)}(n),function(n){n.v.A&&!n.v.l&&(K(n),n.v.A=!1)}(n)),function(n){if(!n.v.l){const o=n.I.filter((n=>!n.R));if(o.length>0){const i=(t=o,e=n.v.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),c=n.v.u<0!==i.X;n.v.u*=c?-1:1}}var t,e}(n)):n.status===bn&&W(n)}function W(n){var t,e,o;n.v.velocityY=(t=n.v.velocityY,e=B,o=n.j,t+e*o),n.v.y=I(n.v.y,n.v.velocityY,B,n.j);n.v.velocityY/Y<D&&(n.v.i=2)}function Z(n){const t=y(J,U);n._=setTimeout((()=>{n.v.l||(n.v.i=3),n._=setTimeout((()=>{n.v.l||(n.v.i=0),Z(n)}),z)}),t)}function nn(n){n.v.velocityY=q,n.v.i=1,function(n){clearTimeout(n._)}(n)}const tn=10,en=10,on=l-C/2-en/2,cn=2.67,un=2.67,rn=.4,an=tn*cn*.5,fn=[{i:0,velocityX:.13},{i:1,velocityX:.17},{i:2,velocityX:.22}],sn=[.4,.4,.2],mn=Math.min(...function(n,t,e){const o=.5*e,i=t,c=i*i-4*o*-n;if(c<0)return null;{const n=Math.sqrt(c);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(on-(O+C),Y,B)),dn=L/.13,gn=50,pn=.8,ln=.25;function hn(n){const t=function(n){function t(n){return n<2?[.1,.3,.6]:n<6?[.45,.4,.15]:n<12?[.65,.3,.05]:[.9,.1,0]}const e=[1*N,2.5*N,3.5*N],o=[2.5*N,3.5*N,7*N],i=T(t(n));return y(e[i],o[i])}(n.o);n.F=setTimeout((()=>{if(n.status!==jn)return;const t=n.M+dn,e=(o=n.o)<2?1+T([.9,.1]):o<4?1+T([.7,.2,.05,.05]):o<10?1+T([.5,.2,.1,.1]):1+T([.4,.2,.15,.15,.05,.05]);var o;const i=function(n,t){const e=x(),o=fn.toSpliced(n.t,1),i=sn.toSpliced(n.t,1),c=S(o,i).velocityX;return h(t,(()=>{const n=w(Math.pow(pn,1/t))?e:!e,u=w(Math.pow(ln,1/t))?c:S(o,i).velocityX;return n?u:-u}))}(n,e),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const u=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((n=>[n,wn(t,n)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=10;for(let c=0;c<e;c++){const u=v(n,t,e-c,o,i);if(u)return u}}(t,e,c.get(n),tn*cn/Math.abs(n))])),r=Array.from(u,(([n,t])=>t.map((t=>function(n,t){const e=fn.find((n=>Math.abs(t)===n.velocityX)).i,o=t>=0,i=E(an,t)*rn;return{G:n,i:e,u:cn,m:un,p:0,C:i,width:tn,height:en,x:o?-tn:g,y:on,velocityX:t,X:o,R:!1}}(t,n))))).flat();n.L.push(t),n.O.push(...r),hn(n)}),t)}function wn(n,t){const e=gn+s,o=n+N-mn-e,i=L+G+tn;return[n+mn+e-L/Math.abs(t),o-i/Math.abs(t)]}const yn=10,vn=10,xn=l-C/2-vn/2,Mn=[{i:0,velocityX:.13},{i:1,velocityX:.17},{i:2,velocityX:.22}],Tn=2.67,Sn=2.67,kn=.4*E(yn*Tn*.5,.17),An=500,En=4e3;function In(n){return function(n,t){return{i:n,u:Tn,m:Sn,p:0,C:t?kn:-kn,width:yn,height:vn,x:t?-yn:g,y:xn,velocityX:t?Mn[n].velocityX:-Mn[n].velocityX,X:t,R:!1}}(n.t,x())}function Rn(n){const t=y(An,En);n.Y=setTimeout((()=>{if(n.status!==jn)return;const t=In(n);n.B.push(t),Rn(n)}),t)}const Xn="GAME_NOT_STARTED",jn="GAME_IN_PROGRESS",bn="GAME_OVER",_n="GAME_RESETTABLE",Fn=400;function Gn(n){for(let t=n.N;t>0;t-=s)n.j=Math.min(t,s),n.M+=n.j,Cn(n),n.P+=1;n.V+=1,n.$-n.q>=1e3&&(n.D=n.V,n.J=n.P,n.V=0,n.P=0,n.q=n.$),function(n){(function(n){n.U.clearRect(0,0,g,p)})(n),function(n){_(n.U,n.images.v[n.v.i],n.v.x,n.v.y,n.v.width,n.v.height,n.v.u,n.v.m,n.v.p),n.H&&(n.U.strokeStyle=f,n.U.strokeRect(n.v.x,n.v.y,G,C))}(n),function(n){for(const t of n.B)_(n.U,n.images.B[t.i],t.x,t.y,t.width,t.height,t.u,t.m,t.p),n.H&&(n.U.strokeStyle=f,n.U.strokeRect(t.x,t.y,t.width,t.height))}(n),function(n){for(const t of n.I)_(n.U,n.images.K[t.i],t.x,t.y,t.width,t.height,t.u,t.m,t.p),n.H&&(n.U.strokeStyle=f,n.U.strokeRect(t.x,t.y,tn,en))}(n),function(n){n.W>0&&(n.U.fillStyle=`rgba(255, 255, 255, ${n.W})`,n.U.fillRect(0,0,g,p))}(n),function(n){if(n.H){const t=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(n.D)+" F/S",Math.round(n.J)+" U/S"].filter(Boolean).join("   ");n.U.font=a,n.U.fillStyle=f,n.U.fillText(t,8,p-8),n.U.strokeStyle=f,n.U.strokeRect(0,0,g,g)}}(n)}(n),requestAnimationFrame((t=>{n.N=t-n.$,n.$=t,Gn(n)}))}function Cn(n){!function(n){const t=n.L.length>0&&n.L[0]<=n.M;n.Z&&t&&(K(n),n.L.shift())}(n),Q(n),function(n){const t=n.O.filter((t=>t.G<=n.M));n.O=n.O.filter((t=>t.G>n.M)),n.I.push(...t),t.length>0&&b(n.T,n.k.nn)}(n),function(n){for(const t of n.I)t.x=I(t.x,t.velocityX,0,n.j),t.p=R(t.p,t.C,n.j)}(n),function(n){for(const t of n.B)t.x=I(t.x,t.velocityX,0,n.j),t.p=R(t.p,t.C,n.j)}(n),function(n){if(n.status!==jn)return;const t=n.B.filter((t=>{const e=!t.R,o=k(n.v,t);return e&&o}));t.forEach((n=>n.R=!0)),n.o+=t.length,n.B=n.B.filter((n=>!t.includes(n))),t.length>0&&(b(n.T,n.k.tn),e(n))}(n),function(n){n.status===jn?function(n){for(const t of n.I)if(k(n.v,t))return!0;return!1}(n)&&(!function(n){n.o>n.en&&(n.en=n.o,t=n.o,localStorage.setItem(F,t));var t}(n),function(n){clearTimeout(n.Y)}(n),function(n){clearTimeout(n.F)}(n),function(n){clearTimeout(n.cn)}(n),function(n){n.W=1}(n),nn(n),n.status=bn,b(n.T,n.k.un)):n.status===bn&&function(n){return 0===n.I.length&&0===n.B.length}(n)&&(n.status=_n,t=n.o,e=n.en,o().forEach(u),i().forEach(u),c().forEach(r),document.querySelector(".game-over-score").textContent=t,document.querySelector(".game-over-high-score").textContent=e);var t,e}(n),function(n){n.I=n.I.filter(A)}(n),function(n){n.B=n.B.filter(A)}(n),function(n){n.W>0&&(n.W-=n.j/Fn,n.W<0&&(n.W=0))}(n)}async function Ln(n){await async function(n){"suspended"===n.T.state&&await n.T.resume()}(n),function(n){n.status===Xn&&function(n){return n.v.y===O}(n)?(n.status=jn,Rn(n),hn(n),function(n){n.cn=setInterval((()=>{const t=M([0,1,2]);t!=n.t&&(n.t=t,e(n),b(n.T,n.k.rn))}),8e3)}(n),e(n)):n.status===_n&&(n.status=Xn,n.v=H(),n.o=0,Z(n),t())}(n),K(n),function(n){const t=n.M-n.v.h;n.status===jn&&t>N*$&&(n.v.A=!0)}(n)}function On(t,e){const[o,i]=n(),c=Math.floor(o*window.devicePixelRatio),u=Math.floor(i*window.devicePixelRatio),r=c/g;t.style.width=o+"px",t.style.height=i+"px",t.width=Math.floor(c),t.height=Math.floor(u),t.getContext("2d").scale(r,r),e.style.width=t.style.width}window.addEventListener("load",(async function(){const n=document.querySelector(".background"),e=document.querySelector(".canvas"),o=e.getContext("2d");On(e,n);const i=new AudioContext,c={S:[],o:[]},u=[j(i,"./sfx/die.mp3").then((n=>c.un=n)),j(i,"./sfx/eat.wav").then((n=>c.tn=n)),j(i,"./sfx/jump-0.mp3").then((n=>c.S[0]=n)),j(i,"./sfx/jump-1.mp3").then((n=>c.S[1]=n)),j(i,"./sfx/jump-2.mp3").then((n=>c.S[2]=n)),j(i,"./sfx/jump-3.mp3").then((n=>c.S[3]=n)),j(i,"./sfx/jump-4.mp3").then((n=>c.S[4]=n)),j(i,"./sfx/jump-5.mp3").then((n=>c.S[5]=n)),j(i,"./sfx/score-0.wav").then((n=>c.o[0]=n)),j(i,"./sfx/score-1.wav").then((n=>c.o[1]=n)),j(i,"./sfx/score-2.wav").then((n=>c.o[2]=n)),j(i,"./sfx/score-3.wav").then((n=>c.o[3]=n)),j(i,"./sfx/shoot.wav").then((n=>c.nn=n)),j(i,"./sfx/switch.wav").then((n=>c.rn=n))],r={v:[],K:[],B:[]},a=[X("./img/player-0.png").then((n=>r.v[0]=n)),X("./img/player-1.png").then((n=>r.v[1]=n)),X("./img/player-2.png").then((n=>r.v[2]=n)),X("./img/player-3.png").then((n=>r.v[3]=n)),X("./img/snack-0.png").then((n=>r.K[0]=n)),X("./img/snack-1.png").then((n=>r.K[1]=n)),X("./img/snack-2.png").then((n=>r.K[2]=n)),X("./img/snack-0.png").then((n=>r.B[0]=n)),X("./img/snack-1.png").then((n=>r.B[1]=n)),X("./img/snack-2.png").then((n=>r.B[2]=n))];await Promise.all([...u,...a]);const f=new URL(location),s="true"===f.searchParams.get("auto"),m="true"===f.searchParams.get("debug"),d=Number.parseInt(f.searchParams.get("score"))||0,g=localStorage.getItem(F)??0,p=function(n,t,e,o,i,c,u,r){return{U:n,T:t,k:e,images:o,$:0,N:0,M:0,j:0,status:Xn,o:r,en:i,t:M([0,1,2]),v:H(),I:[],O:[],B:[],L:[],Z:c,H:u,D:0,V:0,J:0,P:0,q:0,Y:null,F:null,_:null,W:0}}(o,i,c,r,g,s,m,d);requestAnimationFrame((n=>{p.N=0,p.$=n,Z(p),Gn(p)})),window.addEventListener("resize",(()=>On(e,n)),{passive:!0}),document.addEventListener("pointerup",function(n){async function t(){await Ln(n),document.addEventListener("pointerdown",e,{passive:!0})}async function e(){await Ln(n)}return t}(p),{once:!0,passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Ln(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(p)),t()}))}();
