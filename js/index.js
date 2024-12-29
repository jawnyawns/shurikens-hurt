!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}const u=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function l(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function g(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[g(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function v(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}function M(n){return v(n).catch(console.error)}async function T(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function _(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function k(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const S="high-score";function R(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function b(){I().forEach(O),F().forEach(P),X().forEach(P),P(N()),document.querySelector(".loading").classList.add("loading--completed")}function E(n){I().forEach(P),F().forEach(O),X().forEach(P),D().textContent=n}function A(n,t){I().forEach(P),F().forEach(P),X().forEach(O),P(C()),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function j(n){const[t,e]=R(),o=[N(),C()],u=t/n.width,c=e/n.height;o.forEach((t=>{const o=n.width/2+24,r=i(n)-18;t.style.left=o*u+"px",t.style.bottom=e-r*c+"px"}))}function P(n){n.style.visibility="hidden"}function O(n){n.style.visibility="visible"}function I(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),N()]}function F(){return[D()]}function X(){return[document.querySelector(".game__result"),C()]}function Y(){return document.querySelector(".game__canvas")}function D(){return document.querySelector(".game__score")}function N(){return document.querySelector(".game__start-hint")}function C(){return document.querySelector(".game__reset-hint")}const G=20,V=20,z=Math.floor(o/2)-G/2,L=-.75,q=L*L/224,B=2*Math.abs(L)/q,H=2.5,J=2.5,U=.7,$=L,Q=.35,K=250,W=3e3,Z=180;function nn(){return{l:0,p:H,h:J,v:0,width:G,height:V,x:z,y:5*-V,velocityY:0,M:!0,T:0,isFrozen:!0}}function tn(n){return i(n)-V}function en(n){return n._.y===tn(n)}function on(n){n.status!==u.o||n._.M||(n._.velocityY=L,n._.l=1,n._.M=!0,n._.T=n.k,_(n.S,l(n.A.R)))}function un(n){n._.isFrozen||(n.status===u.t||n.status===u.o?(n._.M&&(cn(n),rn(n),function(n){n._.j&&!n._.M&&(on(n),n._.j=!1)}(n)),function(n){if(!n._.M){const o=n.P.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n._.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n._.p<0!==i.I;n._.p*=u?-1:1}}var t,e}(n)):n.status===u.i&&(cn(n),rn(n)))}function cn(n){var t,e,o;n._.velocityY=(t=n._.velocityY,e=q,o=n.F,t+e*o),n._.y=y(n._.y,n._.velocityY,q,n.F);n._.velocityY/L<Q&&(n.status===u.i?n._.l=6:n._.l=2)}function rn(n){(function(n){return n._.y>tn(n)})(n)&&(n._.y=tn(n),n._.velocityY=0,n._.M=!1,n._.l=0,n._.v=0,n.status===u.i&&(n._.l=4))}function an(n){const t=f(K,W);n.X=setTimeout((()=>{n._.M||(n._.l=3),n.X=setTimeout((()=>{n._.M||(n._.l=0),an(n)}),Z)}),t)}function fn(n){n._.velocityY=$,n._.l=5,function(n){clearTimeout(n.X)}(n)}const sn=10,mn=10,ln=2,gn=2,pn=.4,dn=sn*ln*.5,hn=[{l:0,velocityX:.13,Y:.85},{l:1,velocityX:.17,Y:.95},{l:2,velocityX:.22,Y:1.1}],wn=[.4,.4,.2],yn=z/.13,xn=50,vn=.8,Mn=.25,Tn=.6;function _n(n){return i(n)-V/2-mn/2}function kn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(_n(n)-(tn(n)+V),L,q))}function Sn(n){const t=n.D.filter((t=>t.N<=n.k));n.D=n.D.filter((t=>t.N>n.k)),n.P.push(...t),t.length>0&&function(n,t){const e=l(n.A.C),o=Math.max(...t.map((n=>n.Y))),i=f(-.05,.05),u=o+i;n.G((()=>{_(n.S,e,u,Tn)}))}(n,t)}function Rn(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*B,2.5*B,3.5*B],o=[2.5*B,3.5*B,7*B],i=g(t(n));return f(e[i],o[i])}(n.V);n.L=setTimeout((()=>{if(n.status!==u.o)return;const t=n.k+yn;var e;const i=function(n){const t=m(),e=p(hn,wn).velocityX;return r(n,(()=>{const o=a(Math.pow(vn,1/n))?t:!t,i=a(Math.pow(Mn,1/n))?e:p(hn,wn).velocityX;return o?i:-i}))}((e=n.V)<5?1+g([.9,.1]):e<11?1+g([.7,.2,.05,.05]):e<29?1+g([.5,.2,.1,.1]):1+g([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,bn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=20;for(let u=e;u>0;u--){const e=s(n,t,u,o,i);if(e)return e}return[]}(t,e,c.get(n),sn*ln/Math.abs(n))])),l=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=hn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=w(dn,e)*pn;return{N:t,l:i.l,p:ln,h:gn,v:0,q:c,width:sn,height:mn,x:u?-sn:o,y:_n(n),velocityX:e,I:u,O:!1,Y:i.Y}}(n,e,t))))).flat();n.B.push(t),n.D.push(...l),Rn(n)}),t)}function bn(n,t,o){const i=xn+e,u=kn(n),c=t+B-u-i,r=z+G+sn;return[t+u+i-z/Math.abs(o),c-r/Math.abs(o)]}const En=10,An=10,jn=.095,Pn=2.67,On=2.67,In=.4*w(En*Pn*.5,jn),Fn=2e3,Xn=25e3;function Yn(n){return function(n,t){return{p:Pn,h:On,v:0,q:t?In:-In,width:En,height:An,x:t?-En:o,y:n,velocityX:t?jn:-jn,I:t,O:!1}}(n,m())}function Dn(n){const t=f(Fn,Xn);n.H=setTimeout((()=>{if(n.status!==u.o)return;const t=Yn(i(n)-V/2-An/2);n.J.push(t),Dn(n)}),t)}const Nn=4,Cn=60,Gn=6,Vn=400,zn=800;function Ln(n){var t;t=n.U,Y().style.backgroundImage=`url('../img/background-${t}.png')`,j(n),b(),an(n),setTimeout((()=>{n._.isFrozen=!1}),1e3)}function qn(i){for(let n=i.$;n>0;n-=e)i.F=Math.min(n,e),i.k+=i.F,Bn(i),i.K+=1;i.W+=1,i.Z-i.nn>=1e3&&(i.tn=i.W,i.en=i.K,i.W=0,i.K=0,i.nn=i.Z),function(e){(function(n){n.un.clearRect(0,0,o,n.height)})(e),function(n){k(n.un,n.images._[n._.l],n._.x,n._.y,n._.width,n._.height,n._.p,n._.h,n._.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(n._.x,n._.y,G,V))}(e),function(n){for(const e of n.J)k(n.un,n.images.rn,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.P)k(n.un,n.images.an[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,sn,mn))}(e),function(n){n.fn>0&&(n.un.fillStyle=`rgba(255, 255, 255, ${n.fn})`,n.un.fillRect(0,0,o,n.height))}(e),function(e){if(e.cn){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.tn)+" F/S",Math.round(e.en)+" U/S"].filter(Boolean).join("   ");e.un.font=n,e.un.fillStyle=t,e.un.fillText(i,8,e.height-8),e.un.strokeStyle=t,e.un.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.$=n-i.Z,i.Z=n,qn(i)}))}function Bn(n){!function(n){const t=n.B.length>0&&n.B[0]<=n.k;n.sn&&t&&(on(n),n.B.shift())}(n),un(n),Sn(n),function(n){for(const t of n.P)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.q,n.F)}(n),function(n){for(const t of n.J)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.q,n.F)}(n),function(n){if(n.status!==u.o)return;const t=n.P.filter((n=>{const t=!n.O,e=n.I&&n.x>z+G,o=!n.I&&n.x+sn<z;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.V+=t.length,t.length>0&&(n.G((()=>_(n.S,l(n.A.V)))),E(n.V))}(n),function(n){if(n.status!==u.o)return;const t=n.J.filter((t=>{const e=!t.O,o=d(n._,t);return e&&o}));t.forEach((n=>n.O=!0)),n.V+=t.length,n.J=n.J.filter((n=>!t.includes(n))),t.length>0&&(_(n.S,n.A.mn),E(n.V))}(n),function(n){n.status===u.o?function(n){for(const t of n.P)if(d(n._,t))return!0;return!1}(n)&&(!function(n){n.V>n.ln&&(n.ln=n.V,t=n.V,localStorage.setItem(S,t));var t}(n),function(n){clearTimeout(n.H)}(n),function(n){clearTimeout(n.L)}(n),function(n){n.fn=1}(n),fn(n),n.status=u.i,_(n.S,n.A.gn)):n.status===u.i&&function(n){return 0===n.P.length&&0===n.J.length}(n)&&(n.status=u.u,A(n.V,n.ln))}(n),function(n){n.P=n.P.filter(h)}(n),function(n){n.J=n.J.filter(h)}(n),function(n){n.status===u.t&&en(n)&&!n.pn?n.pn=setTimeout((()=>{n.status===u.t&&(O(N()),n.G((()=>_(n.S,l(n.A.V)))))}),zn):n.status!==u.u||n.dn||(n.dn=setTimeout((()=>{n.status===u.u&&(O(C()),n.G((()=>_(n.S,l(n.A.V)))))}),zn))}(n),function(n){n.fn>0&&(n.fn-=n.F/Vn,n.fn<0&&(n.fn=0))}(n)}async function Hn(n){await async function(n){"suspended"===n.S.state&&await n.S.resume()}(n),function(n){n.status===u.t&&en(n)?(n.status=u.o,Dn(n),Rn(n),E(n.V)):n.status===u.u&&(n.status=u.t,n._=nn(),n.V=0,n.U=(n.U+1)%Nn,n.pn=null,n.dn=null,Ln(n))}(n),on(n),function(n){const t=n.k-n._.T;n.status===u.o&&t>B*U&&(n._.j=!0)}(n)}function Jn(n,t,e){const o=n.height,[u,c]=Un(t,e);n.width=u,n.height=c,function(n){n.J.map((t=>{t.y=i(n)-V/2-An/2}))}(n),function(n){n.P.map((t=>{t.y=_n(n)}))}(n),function(n,t){const e=i({height:t}),o=n._.y,u=i(n);n._.y=u-(e-o)}(n,o),j(n)}function Un(n,t){return[o,o*t/n]}function $n(n){n.stopPropagation()}function Qn(n,t){const[e,i]=R(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&Jn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=performance.now(),t=Y(),e=document.querySelector(".info-button"),o=document.querySelector(".info-modal"),i=document.querySelector(".info-modal__card"),r=t.getContext("2d"),a=new AudioContext,{A:f,images:s}=await async function(n){const t={R:[],V:[],C:[]},e=[T(n,"./sfx/die.mp3").then((n=>t.gn=n)),T(n,"./sfx/eat.wav").then((n=>t.mn=n)),T(n,"./sfx/jump-0.mp3").then((n=>t.R[0]=n)),T(n,"./sfx/jump-1.mp3").then((n=>t.R[1]=n)),T(n,"./sfx/jump-2.mp3").then((n=>t.R[2]=n)),T(n,"./sfx/jump-3.mp3").then((n=>t.R[3]=n)),T(n,"./sfx/jump-4.mp3").then((n=>t.R[4]=n)),T(n,"./sfx/jump-5.mp3").then((n=>t.R[5]=n)),T(n,"./sfx/score-0.wav").then((n=>t.V[0]=n)),T(n,"./sfx/score-1.wav").then((n=>t.V[1]=n)),T(n,"./sfx/score-2.wav").then((n=>t.V[2]=n)),T(n,"./sfx/score-3.wav").then((n=>t.V[3]=n)),T(n,"./sfx/shoot-0.wav").then((n=>t.C[0]=n)),T(n,"./sfx/shoot-1.wav").then((n=>t.C[1]=n))],o={_:[],an:[],background:[]},i=[v("./img/player-0.png").then((n=>o._[0]=n)),v("./img/player-1.png").then((n=>o._[1]=n)),v("./img/player-2.png").then((n=>o._[2]=n)),v("./img/player-3.png").then((n=>o._[3]=n)),v("./img/player-4.png").then((n=>o._[4]=n)),v("./img/player-5.png").then((n=>o._[5]=n)),v("./img/player-6.png").then((n=>o._[6]=n)),v("./img/enemy-0.png").then((n=>o.an[0]=n)),v("./img/enemy-1.png").then((n=>o.an[1]=n)),v("./img/enemy-2.png").then((n=>o.an[2]=n)),v("./img/snack.png").then((n=>o.rn=n)),M("./img/background-0.png"),M("./img/background-1.png"),M("./img/background-2.png"),M("./img/background-3.png")];return await Promise.all([...e,...i]),{A:t,images:o}}(a),m=new URL(location),l="true"===m.searchParams.get("auto"),g="true"===m.searchParams.get("debug"),p="true"===m.searchParams.get("skip"),d=Number.parseInt(m.searchParams.get("score"))||0,h=localStorage.getItem(S)??0,[w,y]=R(),x=function(n,t,e,o,i,r,a,f,s,m){const[l,g]=Un(i,r);return{sn:f,cn:s,un:n,S:t,G:c(Cn,Gn),A:e,images:o,width:l,height:g,Z:0,$:0,k:0,F:0,tn:0,W:0,en:0,K:0,nn:0,status:u.t,V:m,ln:a,_:nn(),P:[],D:[],J:[],B:[],H:null,L:null,X:null,pn:null,dn:null,fn:0,U:1}}(r,a,f,s,w,y,h,l,g,d),_=performance.now()-n;setTimeout((()=>{!function(n,t,e,o,i,u){Qn(e),O(e),Ln(n),requestAnimationFrame((t=>{n.$=0,n.Z=t,qn(n)})),window.addEventListener("resize",(()=>Qn(e,n)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Hn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(n)),document.addEventListener("keydown",function(n){return t=>{"Escape"===t.key&&P(n)}}(i),{passive:!0}),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(t)),e.addEventListener("pointerup",function(n,t){async function e(){await Hn(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await Hn(t)}return e}(e,n),{once:!0,passive:!0}),o.addEventListener("click",function(n){function t(){O(n)}return t}(i),{passive:!0}),i.addEventListener("click",function(n){function t(){P(n)}return t}(i),{passive:!0}),u.addEventListener("click",$n,{passive:!0})}(x,a,t,e,o,i)}),p?0:Math.max(2e3-_,0))}))}();
