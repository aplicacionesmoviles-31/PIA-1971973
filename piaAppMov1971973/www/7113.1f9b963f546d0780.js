"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[7113],{7113:function(K,L,m){m.r(L),m.d(L,{startTapClick:function(){return _}});var f=m(3756),_=function(a){var o,i,E,d,r=10*-T,s=0,B=a.getBoolean("animated",!0)&&a.getBoolean("rippleEffect",!0),p=new WeakMap,g=function(t){r=(0,f.u)(t),A(t)},S=function(){clearTimeout(d),d=void 0,i&&(k(!1),i=void 0)},w=function(t){i||void 0!==o&&null!==o.parentElement||(o=void 0,C(x(t),t))},A=function(t){C(void 0,t)},C=function(t,n){if(!t||t!==i){clearTimeout(d),d=void 0;var v=(0,f.p)(n),u=v.x,U=v.y;if(i){if(p.has(i))throw new Error("internal error");i.classList.contains(l)||M(i,u,U),k(!0)}if(t){var I=p.get(t);I&&(clearTimeout(I),p.delete(t));var G=D(t)?0:P;t.classList.remove(l),d=setTimeout(function(){M(t,u,U),d=void 0},G)}i=t}},M=function(t,n,v){s=Date.now(),t.classList.add(l);var u=B&&y(t);u&&u.addRipple&&(b(),E=u.addRipple(n,v))},b=function(){void 0!==E&&(E.then(function(t){return t()}),E=void 0)},k=function(t){b();var n=i;if(n){var v=R-Date.now()+s;if(t&&v>0&&!D(n)){var u=setTimeout(function(){n.classList.remove(l),p.delete(n)},R);p.set(n,u)}else n.classList.remove(l)}},c=document;c.addEventListener("ionScrollStart",function(e){o=e.target,S()}),c.addEventListener("ionScrollEnd",function(){o=void 0}),c.addEventListener("ionGestureCaptured",S),c.addEventListener("touchstart",function(t){r=(0,f.u)(t),w(t)},!0),c.addEventListener("touchcancel",g,!0),c.addEventListener("touchend",g,!0),c.addEventListener("mousedown",function(t){var n=(0,f.u)(t)-T;r<n&&w(t)},!0),c.addEventListener("mouseup",function(t){var n=(0,f.u)(t)-T;r<n&&A(t)},!0),c.addEventListener("contextmenu",function(t){A(t)},!0)},x=function(a){if(!a.composedPath)return a.target.closest(".ion-activatable");for(var r=a.composedPath(),s=0;s<r.length-2;s++){var o=r[s];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},D=function(a){return a.classList.contains("ion-activatable-instant")},y=function(a){if(a.shadowRoot){var r=a.shadowRoot.querySelector("ion-ripple-effect");if(r)return r}return a.querySelector("ion-ripple-effect")},l="ion-activated",P=200,R=200,T=2500}}]);