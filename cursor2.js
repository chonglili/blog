$(function(){let t=function(){"use strict";function t(t){return"[object Array]"==Object.prototype.toString.call(t)}function e(t){return"function"==typeof t}function n(t){return"number"==typeof t}function i(t){return"string"==typeof t}function o(t){return b[t]||String.fromCharCode(t)}function r(t,e,n){for(var i in e)(n||!t.hasOwnProperty(i))&&(t[i]=e[i]);return t}function a(t,e){return function(){t.apply(e,arguments)}}function c(t){var n={};for(var i in t)n[i]=e(t[i])?a(t[i],t):t[i];return n}function s(t){function n(n){e(n)&&n.apply(t,[].splice.call(arguments,1))}function a(t){for(_=0;_<$.length;_++)D=$[_],i(D)?O[(t?"add":"remove")+"EventListener"].call(O,D,A,!1):e(D)?A=D:O=D}function s(){S(N),N=k(s),U||(n(t.setup),U=e(t.setup),n(t.resize)),t.running&&!M&&(t.dt=(B=+new Date)-t.now,t.millis+=t.dt,t.now=B,n(t.update),t.autoclear&&K&&t.clear(),n(t.draw)),M=++M%t.interval}function u(){O=j?t.style:t.canvas,W=j?"px":"",t.fullscreen&&(t.height=w.innerHeight,t.width=w.innerWidth),O.height=t.height+W,O.width=t.width+W,t.retina&&K&&Y&&(O.height=t.height*Y,O.width=t.width*Y,O.style.height=t.height+"px",O.style.width=t.width+"px",t.scale(Y,Y)),U&&n(t.resize)}function l(t,e){return R=e.getBoundingClientRect(),t.x=t.pageX-R.left-w.scrollX,t.y=t.pageY-R.top-w.scrollY,t}function h(e,n){return l(e,t.element),n=n||{},n.ox=n.x||e.x,n.oy=n.y||e.y,n.x=e.x,n.y=e.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function d(t){if(t.preventDefault(),F=c(t),F.originalEvent=t,F.touches)for(Q.length=F.touches.length,_=0;_<F.touches.length;_++)Q[_]=h(F.touches[_],Q[_]);else Q.length=0,Q[0]=h(F,V);return r(V,Q[0],!0),F}function f(e){for(e=d(e),X=(q=$.indexOf(G=e.type))-1,t.dragging=!!/down|start/.test(G)||!/up|end/.test(G)&&t.dragging;X;)i($[X])?n(t[$[X--]],e):i($[q])?n(t[$[q++]],e):X=0}function p(e){z=e.keyCode,H="keyup"==e.type,J[z]=J[o(z)]=!H,n(t[e.type],e)}function m(e){t.autopause&&("blur"==e.type?C:E)(),n(t[e.type],e)}function E(){t.now=+new Date,t.running=!0}function C(){t.running=!1}function P(){(t.running?C:E)()}function T(){K&&t.clearRect(0,0,t.width,t.height)}function I(){L=t.element.parentNode,_=x.indexOf(t),L&&L.removeChild(t.element),~_&&x.splice(_,1),a(!1),C()}var N,A,O,L,R,_,W,B,D,F,G,z,H,X,q,M=0,Q=[],U=!1,Y=w.devicePixelRatio,j=t.type==y,K=t.type==g,V={x:0,y:0,ox:0,oy:0,dx:0,dy:0},$=[t.element,f,"mousedown","touchstart",f,"mousemove","touchmove",f,"mouseup","touchend",f,"click",v,p,"keydown","keyup",w,m,"focus","blur",u,"resize"],J={};for(z in b)J[b[z]]=!1;return r(t,{touches:Q,mouse:V,keys:J,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:I,toggle:P,clear:T,start:E,stop:C}),x.push(t),t.autostart&&E(),a(!0),u(),s(),t}let u=document.createElement("div");u.setAttribute("id","clickCanvas"),u.style.cssText="position:fixed;left:0;top:0;z-index:5201314;pointer-events:none;",document.body.appendChild(u);for(var l,h,d="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),f="__hasSketch",p=Math,g="canvas",m="webgl",y="dom",v=document,w=window,x=[],E={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:v.body,interval:1,globals:!0,retina:!1,type:g},b={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},C={CANVAS:g,WEB_GL:m,WEBGL:m,DOM:y,instances:x,install:function(e){if(!e[f]){for(var i=0;i<d.length;i++)e[d[i]]=p[d[i]];r(e,{TWO_PI:2*p.PI,HALF_PI:p.PI/2,QUATER_PI:p.PI/4,random:function(e,i){return t(e)?e[~~(p.random()*e.length)]:(n(i)||(i=e||1,e=0),e+p.random()*(i-e))},lerp:function(t,e,n){return t+n*(e-t)},map:function(t,e,n,i,o){return(t-e)/(n-e)*(o-i)+i}}),e[f]=!0}},create:function(t){return t=r(t||{},E),t.globals&&C.install(self),l=t.element=t.element||v.createElement(t.type===y?"div":"canvas"),h=t.context=t.context||function(){switch(t.type){case g:return l.getContext("2d",t);case m:return l.getContext("webgl",t)||l.getContext("experimental-webgl",t);case y:return l.canvas=l}}(),t.container.appendChild(l),C.augment(h,t)},augment:function(t,e){return e=r(e||{},E),e.element=t.canvas||t,e.element.className+=" sketch",r(t,e,!0),s(t)}},P=["ms","moz","webkit","o"],T=self,I=0,N="AnimationFrame",A="request"+N,O="cancel"+N,k=T[A],S=T[O],L=0;L<P.length&&!k;L++)k=T[P[L]+"Request"+N],S=T[P[L]+"Cancel"+A];return T[A]=k=k||function(t){var e=+new Date,n=p.max(0,16-(e-I)),i=setTimeout(function(){t(e+n)},n);return I=e+n,i},T[O]=S=S||function(t){clearTimeout(t)},C}();if(document.getElementById("clickCanvas")){function e(t,e,n){this.init(t,e,n)}e.prototype={init:function(t,e,n){this.alive=!0,this.radius=n||10,this.wander=.15,this.theta=random(TWO_PI),this.drag=.92,this.color="#ffeb3b",this.x=t||0,this.y=e||0,this.vx=0,this.vy=0},move:function(){this.x+=this.vx,this.y+=this.vy,this.vx*=this.drag,this.vy*=this.drag,this.theta+=random(-.5,.5)*this.wander,this.vx+=.1*sin(this.theta),this.vy+=.1*cos(this。theta)，this.radius*=.96，this。alive=this。radius>.5}，draw:function(t){t.beginPath(),t.arc(this。x,this。y,this.radius，0,TWO_PI),t.fillStyle=this。color,t.fill()}};var n=50，i=["#5ee4ff"，"#f44033"，"#ffeb3b"，"#F38630"，"#FA6900"，"#f403e8"，"#F9D423"]，o=[]，r=[]，a=t.create({container:document.getElementById("clickCanvas")});a.spawn=function(t，a){o.length>=n&&r.push(o.shift()),particle=r.length?r.pop():new e,particle.init(t,a,random(5，20)),particle.wander=random(.5，2),particle.color=random(i),particle.drag=random(.9，.99),theta=random(TWO_PI),force=random(1，5),particle.vx=sin(theta)*force,particle.vy=cos(theta)*force,o.push(particle)},a.update=function(){var t，e;for(t=o.length-1;t>=0;t--)e=o[t],e.alive?e.move():r.push(o.splice(t,1)[0])},a.draw=function(){a.globalCompositeOperation="lighter";for(var t=o.length-1;t>=0;t--)o[t]。draw(a)},document.addEventListener("mousedown"，function(t){var e,n;"TEXTAREA"!==t.target。nodeName&&"INPUT"!==t.target。nodeName&&"A"!==t.target。nodeName&&"I"!==t.target.nodeName&&"IMG"!==t.target。nodeName&&function(){for(e=random(15,20),n=0;n<e;n++)a.spawn(t.clientX,t.clientY)}()})}});
