!function(){"use strict";function n(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 800px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function t(){o().forEach(r),i().forEach(u),c().forEach(u)}function e(n){o().forEach(u),i().forEach(r),c().forEach(u),document.querySelector(".game-score").textContent=n}function o(){return[document.querySelector(".home-title"),document.querySelector(".home-hint")]}function i(){return[document.querySelector(".game-score")]}function c(){return[document.querySelector(".game-over-title"),document.querySelector(".game-over-result"),document.querySelector(".game-over-hint")]}function u(n){n.style.visibility="hidden"}function r(n){n.style.visibility="visible"}const a="9px sans-serif",f="#0f0",s=1e3/29,[m,g]=n(),l=360,p=l*(g/m),h=p/2+69;function d(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function w(n,t,e,o,i){const c=function(n,t,e){return Math.max(Math.min(n,e),t)}(n,t,e);return function(n,t,e,o,i){return(n-t)*(i-o)/(e-t)+o}(c,t,e,o,i)}function y(n){return Math.random()<n}function M(n,t){return Math.random()*(t-n)+n}function v(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return d(e,(()=>M(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function x(){return y(.5)}function T(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function S(n){const t=M(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function A(n,t){return n[S(t)]}function E(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function R(n){return-n.width<n.x&&n.x<l}function X(n,t){return t/n}function b(n,t,e,o){return n+t*o+.5*e*o*o}function j(n,t,e){return n+t*e}function k(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function I(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function _(n,t){if("running"===n.state){const e=n.createBufferSource();e.buffer=t,e.connect(n.destination),e.start()}}function F(n,t,e,o,i,c,u=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*c),n.scale(u,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-c,i,c),n.restore()}const G="high-score";const Y=20,C=20,L=Math.floor(l/2)-Y/2,O=h-C,B=-.75,N=112,P=B*B/(2*N),V=2*Math.abs(B)/P,q=2.5,D=2.5,U=.9*B,z=.35,J=250,$=3e3,H=180;function K(){return{t:0,o:q,i:D,u:0,width:Y,height:C,x:L,y:3.5*-C,velocityY:0,m:!0}}function Q(n){return n.l.y<=O}function W(n){n.status!==On||n.l.m||(n.l.velocityY=B,n.l.t=1,n.l.m=!0,_(n.p,T(n.M.h)))}function Z(n){n.status===Ln||n.status===On?(n.l.m&&(nn(n),function(n){(function(n){return n.l.y>O})(n)&&(n.l.y=O,n.l.velocityY=0,n.l.m=!1,n.l.t=0,n.l.u=0)}(n)),function(n){if(!n.l.m){const o=n.v.filter((n=>!n.T));if(o.length>0){const i=(t=o,e=n.l.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),c=n.l.o<0!==i.S;n.l.o*=c?-1:1}}var t,e}(n)):n.status===Bn&&nn(n)}function nn(n){var t,e,o;n.l.velocityY=(t=n.l.velocityY,e=P,o=n.A,t+e*o),n.l.y=b(n.l.y,n.l.velocityY,P,n.A);n.l.velocityY/B<z&&(n.l.t=2)}function tn(n){const t=M(J,$);n.R=setTimeout((()=>{n.l.m||(n.l.t=3),n.R=setTimeout((()=>{n.l.m||(n.l.t=0),tn(n)}),H)}),t)}function en(n){n.l.velocityY=U,n.l.t=1,function(n){clearTimeout(n.R)}(n)}const on=1.5*Y,cn=on/4,un="rgba(0, 0, 0, 0.12)",rn=.5;function an(n){if(Q(n)){const t=1-rn,e=1-function(n){const t=O,e=O-N;return w(n.l.y,e,t,1,0)}(n)*t;n.j.X=e,n.j.k=e}}function fn(n){Q(n)&&(n.I.fillStyle=un,function(n,t,e,o,i,c=1,u=1,r=0){n.save(),n.translate(t,e),n.scale(c,u),n.beginPath(),n.ellipse(0,0,.5*o,.5*i,r,0,2*Math.PI),n.fill(),n.restore()}(n.I,n.j.x,n.j.y,n.j.width,n.j.height,n.j.X,n.j.k))}const sn=10,mn=10,gn=h-C/2-mn/2,ln=2,pn=2,hn=.4,dn=sn*ln*.5,wn=[{t:0,velocityX:.13},{t:1,velocityX:.17},{t:2,velocityX:.22}],yn=[.4,.4,.2],Mn=Math.min(...function(n,t,e){const o=.5*e,i=t,c=i*i-4*o*-n;if(c<0)return null;{const n=Math.sqrt(c);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(gn-(O+C),B,P)),vn=L/.13,xn=50,Tn=.8,Sn=.25;function An(n){const t=function(n){function t(n){return n<7?[.1,.3,.6]:n<12?[.35,.5,.15]:n<29?[.5,.4,.1]:[.65,.3,.05]}const e=[1*V,2.5*V,3.5*V],o=[2.5*V,3.5*V,8*V],i=S(t(n));return M(e[i],o[i])}(n._);n.F=setTimeout((()=>{if(n.status!==On)return;const t=n.G+vn;var e;const o=function(n){const t=x(),e=A(wn,yn).velocityX;return d(n,(()=>{const o=y(Math.pow(Tn,1/n))?t:!t,i=y(Math.pow(Sn,1/n))?e:A(wn,yn).velocityX;return o?i:-i}))}((e=n._)<7?1+S([.9,.1]):e<12?1+S([.7,.2,.05,.05]):e<29?1+S([.5,.2,.1,.1]):1+S([.4,.2,.15,.15,.05,.05])),i=o.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const c=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(o.map((n=>[n,En(t,n)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=10;for(let c=0;c<e;c++){const u=v(n,t,e-c,o,i);if(u)return u}}(t,e,i.get(n),sn*ln/Math.abs(n))])),u=Array.from(c,(([n,t])=>t.map((t=>function(n,t){const e=wn.find((n=>Math.abs(t)===n.velocityX)).t,o=t>=0,i=X(dn,t)*hn;return{Y:n,t:e,o:ln,i:pn,u:0,C:i,width:sn,height:mn,x:o?-sn:l,y:gn,velocityX:t,S:o,T:!1}}(t,n))))).flat();n.L.push(t),n.O.push(...u),An(n)}),t)}function En(n,t){const e=xn+s,o=n+V-Mn-e,i=L+Y+sn;return[n+Mn+e-L/Math.abs(t),o-i/Math.abs(t)]}const Rn=10,Xn=10,bn=h-C/2-Xn/2,jn=.095,kn=2.67,In=2.67,_n=.4*X(Rn*kn*.5,jn),Fn=2e3,Gn=25e3;function Yn(){return function(n){return{o:kn,i:In,u:0,C:n?_n:-_n,width:Rn,height:Xn,x:n?-Rn:l,y:bn,velocityX:n?jn:-jn,S:n,T:!1}}(x())}function Cn(n){const t=M(Fn,Gn);n.B=setTimeout((()=>{if(n.status!==On)return;const t=Yn();n.N.push(t),Cn(n)}),t)}const Ln="GAME_NOT_STARTED",On="GAME_IN_PROGRESS",Bn="GAME_OVER",Nn="GAME_RESETTABLE",Pn=250;function Vn(n){for(let t=n.P;t>0;t-=s)n.A=Math.min(t,s),n.G+=n.A,qn(n),n.V+=1;n.q+=1,n.D-n.U>=1e3&&(n.J=n.q,n.$=n.V,n.q=0,n.V=0,n.U=n.D),function(n){(function(n){n.I.clearRect(0,0,l,p)})(n),fn(n),function(n){F(n.I,n.images.l[n.l.t],n.l.x,n.l.y,n.l.width,n.l.height,n.l.o,n.l.i,n.l.u),n.H&&(n.I.strokeStyle=f,n.I.strokeRect(n.l.x,n.l.y,Y,C))}(n),function(n){for(const t of n.N)F(n.I,n.images.K,t.x,t.y,t.width,t.height,t.o,t.i,t.u),n.H&&(n.I.strokeStyle=f,n.I.strokeRect(t.x,t.y,t.width,t.height))}(n),function(n){for(const t of n.v)F(n.I,n.images.W[t.t],t.x,t.y,t.width,t.height,t.o,t.i,t.u),n.H&&(n.I.strokeStyle=f,n.I.strokeRect(t.x,t.y,sn,mn))}(n),function(n){n.Z>0&&(n.I.fillStyle=`rgba(255, 255, 255, ${n.Z})`,n.I.fillRect(0,0,l,p))}(n),function(n){if(n.H){const t=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(n.J)+" F/S",Math.round(n.$)+" U/S"].filter(Boolean).join("   ");n.I.font=a,n.I.fillStyle=f,n.I.fillText(t,8,p-8),n.I.strokeStyle=f,n.I.strokeRect(0,0,l,l)}}(n)}(n),requestAnimationFrame((t=>{n.P=t-n.D,n.D=t,Vn(n)}))}function qn(n){!function(n){const t=n.L.length>0&&n.L[0]<=n.G;n.nn&&t&&(W(n),n.L.shift())}(n),Z(n),function(n){const t=n.O.filter((t=>t.Y<=n.G));n.O=n.O.filter((t=>t.Y>n.G)),n.v.push(...t),t.length>0&&_(n.p,n.M.tn)}(n),function(n){for(const t of n.v)t.x=b(t.x,t.velocityX,0,n.A),t.u=j(t.u,t.C,n.A)}(n),function(n){for(const t of n.N)t.x=b(t.x,t.velocityX,0,n.A),t.u=j(t.u,t.C,n.A)}(n),function(n){if(n.status!==On)return;const t=n.v.filter((n=>{const t=!n.T,e=n.S&&n.x>L+Y,o=!n.S&&n.x+sn<L;return t&&(e||o)}));t.forEach((n=>n.T=!0)),n._+=t.length,t.length>0&&(_(n.p,T(n.M._)),e(n._))}(n),function(n){if(n.status!==On)return;const t=n.N.filter((t=>{const e=!t.T,o=E(n.l,t);return e&&o}));t.forEach((n=>n.T=!0)),n._+=t.length,n.N=n.N.filter((n=>!t.includes(n))),t.length>0&&(_(n.p,n.M.en),e(n._))}(n),function(n){n.status===On?function(n){for(const t of n.v)if(E(n.l,t))return!0;return!1}(n)&&(!function(n){n._>n.cn&&(n.cn=n._,t=n._,localStorage.setItem(G,t));var t}(n),function(n){clearTimeout(n.B)}(n),function(n){clearTimeout(n.F)}(n),function(n){n.Z=1}(n),en(n),n.status=Bn,_(n.p,n.M.un)):n.status===Bn&&function(n){return 0===n.v.length&&0===n.N.length}(n)&&(n.status=Nn,t=n._,e=n.cn,o().forEach(u),i().forEach(u),c().forEach(r),document.querySelector(".game-over-score").textContent=t,document.querySelector(".game-over-high-score").textContent=e);var t,e}(n),function(n){n.v=n.v.filter(R)}(n),function(n){n.N=n.N.filter(R)}(n),function(n){n.Z>0&&(n.Z-=n.A/Pn,n.Z<0&&(n.Z=0))}(n),an(n)}async function Dn(n){await async function(n){"suspended"===n.p.state&&await n.p.resume()}(n),function(n){n.status===Ln&&function(n){return n.l.y===O}(n)?(n.status=On,Cn(n),An(n),e(n._)):n.status===Nn&&(n.status=Ln,n.l=K(),n._=0,tn(n),t())}(n),W(n)}function Un(t,e){const[o,i]=n(),c=Math.floor(o*window.devicePixelRatio),u=Math.floor(i*window.devicePixelRatio),r=c/l;t.style.width=o+"px",t.style.height=i+"px",t.width=Math.floor(c),t.height=Math.floor(u),t.getContext("2d").scale(r,r),e.style.width=t.style.width}!async function(){const n=document.querySelector(".background"),e=document.querySelector(".canvas"),o=e.getContext("2d");Un(e,n);const i=new AudioContext,c={h:[],_:[]},u=[I(i,"./sfx/die.mp3").then((n=>c.un=n)),I(i,"./sfx/eat.wav").then((n=>c.en=n)),I(i,"./sfx/jump-0.mp3").then((n=>c.h[0]=n)),I(i,"./sfx/jump-1.mp3").then((n=>c.h[1]=n)),I(i,"./sfx/jump-2.mp3").then((n=>c.h[2]=n)),I(i,"./sfx/jump-3.mp3").then((n=>c.h[3]=n)),I(i,"./sfx/jump-4.mp3").then((n=>c.h[4]=n)),I(i,"./sfx/jump-5.mp3").then((n=>c.h[5]=n)),I(i,"./sfx/score-0.wav").then((n=>c._[0]=n)),I(i,"./sfx/score-1.wav").then((n=>c._[1]=n)),I(i,"./sfx/score-2.wav").then((n=>c._[2]=n)),I(i,"./sfx/score-3.wav").then((n=>c._[3]=n)),I(i,"./sfx/shoot.wav").then((n=>c.tn=n))],r={l:[],W:[]},a=[k("./img/player-0.png").then((n=>r.l[0]=n)),k("./img/player-1.png").then((n=>r.l[1]=n)),k("./img/player-2.png").then((n=>r.l[2]=n)),k("./img/player-3.png").then((n=>r.l[3]=n)),k("./img/enemy-0.png").then((n=>r.W[0]=n)),k("./img/enemy-1.png").then((n=>r.W[1]=n)),k("./img/enemy-2.png").then((n=>r.W[2]=n)),k("./img/snack.png").then((n=>r.K=n))];await Promise.all([...u,...a]);const f=new URL(location),s="true"===f.searchParams.get("auto"),m="true"===f.searchParams.get("debug"),g=Number.parseInt(f.searchParams.get("score"))||0,p=localStorage.getItem(G)??0,d=function(n,t,e,o,i,c,u,r){return{I:n,p:t,M:e,images:o,D:0,P:0,G:0,A:0,status:Ln,_:r,cn:i,l:K(),j:{width:on,height:cn,x:Math.floor(l/2),y:h-1.5,X:0,k:0},v:[],O:[],N:[],L:[],nn:c,H:u,J:0,q:0,$:0,V:0,U:0,B:null,F:null,R:null,Z:0}}(o,i,c,r,p,s,m,g);requestAnimationFrame((n=>{d.P=0,d.D=n,tn(d),Vn(d)})),window.addEventListener("resize",(()=>Un(e,n)),{passive:!0}),document.addEventListener("pointerup",(async n=>{n.stopPropagation(),await Dn(d),document.addEventListener("pointerdown",(async n=>{n.stopPropagation(),await Dn(d),setTimeout((async()=>await Dn(d)),60),setTimeout((async()=>await Dn(d)),120)}),{passive:!0})}),{once:!0,passive:!0});let w=!1;document.addEventListener("keydown",(async n=>{n.stopPropagation()," "!==n.key||w||(await Dn(d),setTimeout((async()=>await Dn(d)),60),setTimeout((async()=>await Dn(d)),120),w=!0)}),{passive:!0}),document.addEventListener("keyup",(()=>{w=!1})),t()}()}();
