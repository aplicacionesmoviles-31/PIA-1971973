"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[3804],{3804:function(We,Le,X){X.r(Le),X.d(Le,{ion_popover:function(){return F}});var ue=X(4942),Ce=X(5671),be=X(3144),pe=X(5861),R=X(2361),_e=X(6254),ke=X(1878),Q=X(3756),ie=X(599),G=X(2854),W=X(4318),P=X(9442);function E(){E=function(){return d};var d={},t=Object.prototype,e=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(u,o,f){return Object.defineProperty(u,o,{value:f,enumerable:!0,configurable:!0,writable:!0}),u[o]}try{s({},"")}catch(u){s=function(f,g,w){return f[g]=w}}function l(u,o,f,g){var $,re,S,z,_=Object.create((o&&o.prototype instanceof D?o:D).prototype),O=new Z(g||[]);return _._invoke=($=u,re=f,S=O,z="suspendedStart",function(oe,Oe){if("executing"===z)throw new Error("Generator is already running");if("completed"===z){if("throw"===oe)throw Oe;return{value:void 0,done:!0}}for(S.method=oe,S.arg=Oe;;){var Se=S.delegate;if(Se){var we=H(Se,S);if(we){if(we===h)continue;return we}}if("next"===S.method)S.sent=S._sent=S.arg;else if("throw"===S.method){if("suspendedStart"===z)throw z="completed",S.arg;S.dispatchException(S.arg)}else"return"===S.method&&S.abrupt("return",S.arg);z="executing";var fe=y($,re,S);if("normal"===fe.type){if(z=S.done?"completed":"suspendedYield",fe.arg===h)continue;return{value:fe.arg,done:S.done}}"throw"===fe.type&&(z="completed",S.method="throw",S.arg=fe.arg)}}),_}function y(u,o,f){try{return{type:"normal",arg:u.call(o,f)}}catch(g){return{type:"throw",arg:g}}}d.wrap=l;var h={};function D(){}function L(){}function T(){}var A={};s(A,n,function(){return this});var C=Object.getPrototypeOf,K=C&&C(C(te([])));K&&K!==t&&e.call(K,n)&&(A=K);var b=T.prototype=D.prototype=Object.create(A);function M(u){["next","throw","return"].forEach(function(o){s(u,o,function(f){return this._invoke(o,f)})})}function Y(u,o){function f(w,_,O,$){var re=y(u[w],u,_);if("throw"!==re.type){var S=re.arg,z=S.value;return z&&"object"==typeof z&&e.call(z,"__await")?o.resolve(z.__await).then(function(oe){f("next",oe,O,$)},function(oe){f("throw",oe,O,$)}):o.resolve(z).then(function(oe){S.value=oe,O(S)},function(oe){return f("throw",oe,O,$)})}$(re.arg)}var g;this._invoke=function(w,_){function O(){return new o(function($,re){f(w,_,$,re)})}return g=g?g.then(O,O):O()}}function H(u,o){var f=u.iterator[o.method];if(void 0===f){if(o.delegate=null,"throw"===o.method){if(u.iterator.return&&(o.method="return",o.arg=void 0,H(u,o),"throw"===o.method))return h;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var g=y(f,u.iterator,o.arg);if("throw"===g.type)return o.method="throw",o.arg=g.arg,o.delegate=null,h;var w=g.arg;return w?w.done?(o[u.resultName]=w.value,o.next=u.nextLoc,"return"!==o.method&&(o.method="next",o.arg=void 0),o.delegate=null,h):w:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,h)}function U(u){var o={tryLoc:u[0]};1 in u&&(o.catchLoc=u[1]),2 in u&&(o.finallyLoc=u[2],o.afterLoc=u[3]),this.tryEntries.push(o)}function J(u){var o=u.completion||{};o.type="normal",delete o.arg,u.completion=o}function Z(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(U,this),this.reset(!0)}function te(u){if(u){var o=u[n];if(o)return o.call(u);if("function"==typeof u.next)return u;if(!isNaN(u.length)){var f=-1,g=function w(){for(;++f<u.length;)if(e.call(u,f))return w.value=u[f],w.done=!1,w;return w.value=void 0,w.done=!0,w};return g.next=g}}return{next:j}}function j(){return{value:void 0,done:!0}}return L.prototype=T,s(b,"constructor",T),s(T,"constructor",L),L.displayName=s(T,c,"GeneratorFunction"),d.isGeneratorFunction=function(u){var o="function"==typeof u&&u.constructor;return!!o&&(o===L||"GeneratorFunction"===(o.displayName||o.name))},d.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,T):(u.__proto__=T,s(u,c,"GeneratorFunction")),u.prototype=Object.create(b),u},d.awrap=function(u){return{__await:u}},M(Y.prototype),s(Y.prototype,a,function(){return this}),d.AsyncIterator=Y,d.async=function(u,o,f,g,w){void 0===w&&(w=Promise);var _=new Y(l(u,o,f,g),w);return d.isGeneratorFunction(o)?_:_.next().then(function(O){return O.done?O.value:_.next()})},M(b),s(b,c,"Generator"),s(b,n,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),d.keys=function(u){var o=[];for(var f in u)o.push(f);return o.reverse(),function g(){for(;o.length;){var w=o.pop();if(w in u)return g.value=w,g.done=!1,g}return g.done=!0,g}},d.values=te,Z.prototype={constructor:Z,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(J),!o)for(var f in this)"t"===f.charAt(0)&&e.call(this,f)&&!isNaN(+f.slice(1))&&(this[f]=void 0)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if("throw"===o.type)throw o.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var f=this;function g(S,z){return O.type="throw",O.arg=o,f.next=S,z&&(f.method="next",f.arg=void 0),!!z}for(var w=this.tryEntries.length-1;w>=0;--w){var _=this.tryEntries[w],O=_.completion;if("root"===_.tryLoc)return g("end");if(_.tryLoc<=this.prev){var $=e.call(_,"catchLoc"),re=e.call(_,"finallyLoc");if($&&re){if(this.prev<_.catchLoc)return g(_.catchLoc,!0);if(this.prev<_.finallyLoc)return g(_.finallyLoc)}else if($){if(this.prev<_.catchLoc)return g(_.catchLoc,!0)}else{if(!re)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return g(_.finallyLoc)}}}},abrupt:function(o,f){for(var g=this.tryEntries.length-1;g>=0;--g){var w=this.tryEntries[g];if(w.tryLoc<=this.prev&&e.call(w,"finallyLoc")&&this.prev<w.finallyLoc){var _=w;break}}_&&("break"===o||"continue"===o)&&_.tryLoc<=f&&f<=_.finallyLoc&&(_=null);var O=_?_.completion:{};return O.type=o,O.arg=f,_?(this.method="next",this.next=_.finallyLoc,h):this.complete(O)},complete:function(o,f){if("throw"===o.type)throw o.arg;return"break"===o.type||"continue"===o.type?this.next=o.arg:"return"===o.type?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):"normal"===o.type&&f&&(this.next=f),h},finish:function(o){for(var f=this.tryEntries.length-1;f>=0;--f){var g=this.tryEntries[f];if(g.finallyLoc===o)return this.complete(g.completion,g.afterLoc),J(g),h}},catch:function(o){for(var f=this.tryEntries.length-1;f>=0;--f){var g=this.tryEntries[f];if(g.tryLoc===o){var w=g.completion;if("throw"===w.type){var _=w.arg;J(g)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(o,f,g){return this.delegate={iterator:te(o),resultName:f,nextLoc:g},"next"===this.method&&(this.arg=void 0),h}},d}var de=function(t,e,r){var n=e.getBoundingClientRect(),a=n.height,c=n.width;return"cover"===t&&r&&(c=r.getBoundingClientRect().width),{contentWidth:c,contentHeight:a}},q=function(t,e){return e&&"ION-ITEM"===e.tagName?t.findIndex(function(r){return r===e}):-1},Pe=function(t,e){return t[q(t,e)+1]},B=function(t,e){return t[q(t,e)-1]},le=function(t){var r=(0,Q.g)(t).querySelector("button");r&&(0,Q.r)(function(){return r.focus()})},ve=function(t){return t.hasAttribute("data-ion-popover-trigger")},ge=function(t,e,r,n,a,c,s,l,y,h,D){var L,T={top:0,left:0,width:0,height:0};if("event"===c){if(!D)return y;T={top:D.clientY,left:D.clientX,width:1,height:1}}else{var K=h||(null===(L=null==D?void 0:D.detail)||void 0===L?void 0:L.ionShadowTarget)||(null==D?void 0:D.target);if(!K)return y;var b=K.getBoundingClientRect();T={top:b.top,left:b.left,width:b.width,height:b.height}}var M=me(s,T,e,r,n,a,t),Y=Ie(l,s,T,e,r),H=M.top+Y.top,U=M.left+Y.left,J=Ee(s,n,a,H,U,e,r,t),Z=J.arrowTop,te=J.arrowLeft,j=xe(s,l,t);return{top:H,left:U,referenceCoordinates:T,arrowTop:Z,arrowLeft:te,originX:j.originX,originY:j.originY}},xe=function(t,e,r){switch(t){case"top":return{originX:he(e),originY:"bottom"};case"bottom":return{originX:he(e),originY:"top"};case"left":return{originX:"right",originY:ne(e)};case"right":return{originX:"left",originY:ne(e)};case"start":return{originX:r?"left":"right",originY:ne(e)};case"end":return{originX:r?"right":"left",originY:ne(e)}}},he=function(t){switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},ne=function(t){switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},Ee=function(t,e,r,n,a,c,s,l){var y={arrowTop:n+s/2-e/2,arrowLeft:a+c-e/2},h={arrowTop:n+s/2-e/2,arrowLeft:a-1.5*e};switch(t){case"top":return{arrowTop:n+s,arrowLeft:a+c/2-e/2};case"bottom":return{arrowTop:n-r,arrowLeft:a+c/2-e/2};case"left":return y;case"right":return h;case"start":return l?h:y;case"end":return l?y:h;default:return{arrowTop:0,arrowLeft:0}}},me=function(t,e,r,n,a,c,s){var l={top:e.top,left:e.left-r-a},y={top:e.top,left:e.left+e.width+a};switch(t){case"top":return{top:e.top-n-c,left:e.left};case"right":return y;case"bottom":return{top:e.top+e.height+c,left:e.left};case"left":return l;case"start":return s?y:l;case"end":return s?l:y}},Ie=function(t,e,r,n,a){switch(t){case"center":return Ae(e,r,n,a);case"end":return Ne(e,r,n,a);default:return{top:0,left:0}}},Ne=function(t,e,r,n){switch(t){case"start":case"end":case"left":case"right":return{top:-(n-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},Ae=function(t,e,r,n){switch(t){case"start":case"end":case"left":case"right":return{top:-(n/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},ye=function(t,e,r,n,a,c,s,l,y,h,D,L){var H,T=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,A=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,C=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,K=T,M=r,Y=e,U=h,J=D,Z=!1,te=!1,j=L?L.top+L.height:c/2-l/2,u=L?L.height:0,o=!1;return M<n+y?(M=n,Z=!0,U="left"):s+n+M+y>a&&(te=!0,M=a-s-n,U="right"),j+u+l>c&&("top"===t||"bottom"===t)&&(j-l>0?(K=(Y=j-l-u-(C-1))+l,J="bottom",o=!0):H=n),{top:Y,left:M,bottom:H,originX:U,originY:J,checkSafeAreaLeft:Z,checkSafeAreaRight:te,arrowTop:K,arrowLeft:A,addPopoverBottomClass:o}},p=function(t,e){var r,n=e.event,a=e.size,c=e.trigger,s=e.reference,l=e.side,y=e.align,h=t.ownerDocument,D="rtl"===h.dir,L=h.defaultView.innerWidth,T=h.defaultView.innerHeight,A=(0,Q.g)(t),C=A.querySelector(".popover-content"),K=A.querySelector(".popover-arrow"),b=c||(null===(r=null==n?void 0:n.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==n?void 0:n.target),M=de(a,C,b),Y=M.contentWidth,H=M.contentHeight,U=function(t){if(!t)return{arrowWidth:0,arrowHeight:0};var e=t.getBoundingClientRect();return{arrowWidth:e.width,arrowHeight:e.height}}(K),Z=U.arrowHeight,j=ge(D,Y,H,U.arrowWidth,Z,s,l,y,{top:T/2-H/2,left:L/2-Y/2,originX:D?"right":"left",originY:"top"},c,n),f=ye(l,j.top,j.left,"cover"===a?0:5,L,T,Y,H,"cover"===a?0:25,j.originX,j.originY,j.referenceCoordinates,j.arrowTop,j.arrowLeft,Z),g=f.originX,w=f.originY,_=f.top,O=f.left,$=f.bottom,re=f.checkSafeAreaLeft,S=f.checkSafeAreaRight,z=f.arrowTop,oe=f.arrowLeft,Oe=f.addPopoverBottomClass,Se=(0,P.c)(),we=(0,P.c)(),fe=(0,P.c)();return we.addElement(A.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),fe.addElement(A.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Se.easing("ease").duration(100).beforeAddWrite(function(){"cover"===a&&t.style.setProperty("--width","".concat(Y,"px")),Oe&&t.classList.add("popover-bottom"),void 0!==$&&C.style.setProperty("bottom","".concat($,"px"));var je="".concat(O,"px");if(re&&(je="".concat(O,"px").concat(" + var(--ion-safe-area-left, 0)")),S&&(je="".concat(O,"px").concat(" - var(--ion-safe-area-right, 0)")),C.style.setProperty("top","calc(".concat(_,"px + var(--offset-y, 0))")),C.style.setProperty("left","calc(".concat(je," + var(--offset-x, 0))")),C.style.setProperty("transform-origin","".concat(w," ").concat(g)),null!==K){var Ge=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>3?arguments[3]:void 0;return!(!(arguments.length>2?arguments[2]:void 0)&&!n||"top"!==t&&"bottom"!==t&&e)}(l,j.top!==_||j.left!==O,n,c);Ge?(K.style.setProperty("top","calc(".concat(z,"px + var(--offset-y, 0))")),K.style.setProperty("left","calc(".concat(oe,"px + var(--offset-x, 0))"))):K.style.setProperty("display","none")}}).addAnimation([we,fe])},i=function(t){var e=(0,Q.g)(t),r=e.querySelector(".popover-content"),n=e.querySelector(".popover-arrow"),a=(0,P.c)(),c=(0,P.c)(),s=(0,P.c)();return c.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),a.easing("ease").afterAddWrite(function(){t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),n&&(n.style.removeProperty("top"),n.style.removeProperty("left"),n.style.removeProperty("display"))}).duration(300).addAnimation([c,s])},m=function(t,e){var r,n=e.event,a=e.size,c=e.trigger,s=e.reference,l=e.side,y=e.align,h=t.ownerDocument,D="rtl"===h.dir,L=h.defaultView.innerWidth,T=h.defaultView.innerHeight,A=(0,Q.g)(t),C=A.querySelector(".popover-content"),K=c||(null===(r=null==n?void 0:n.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==n?void 0:n.target),b=de(a,C,K),M=b.contentWidth,Y=b.contentHeight,U=ge(D,M,Y,0,0,s,l,y,{top:T/2-Y/2,left:L/2-M/2,originX:D?"right":"left",originY:"top"},c,n),Z=ye(l,U.top,U.left,"cover"===a?0:12,L,T,M,Y,0,U.originX,U.originY,U.referenceCoordinates),te=Z.originX,j=Z.originY,u=Z.top,o=Z.left,f=Z.bottom,g=(0,P.c)(),w=(0,P.c)(),_=(0,P.c)(),O=(0,P.c)(),$=(0,P.c)();return w.addElement(A.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),_.addElement(A.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),O.addElement(C).beforeStyles({top:"calc(".concat(u,"px + var(--offset-y, 0px))"),left:"calc(".concat(o,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(j," ").concat(te)}).beforeAddWrite(function(){void 0!==f&&C.style.setProperty("bottom","".concat(f,"px"))}).fromTo("transform","scale(0.8)","scale(1)"),$.addElement(A.querySelector(".popover-viewport")).fromTo("opacity",.01,1),g.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(function(){"cover"===a&&t.style.setProperty("--width","".concat(M,"px")),"bottom"===j&&t.classList.add("popover-bottom")}).addAnimation([w,_,O,$])},k=function(t){var e=(0,Q.g)(t),r=e.querySelector(".popover-content"),n=(0,P.c)(),a=(0,P.c)(),c=(0,P.c)();return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),c.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(function(){t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([a,c])},F=function(){function d(t){var e=this;(0,Ce.Z)(this,d),(0,R.r)(this,t),this.didPresent=(0,R.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,R.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,R.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,R.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,R.e)(this,"didPresent",7),this.willPresentShorthand=(0,R.e)(this,"willPresent",7),this.willDismissShorthand=(0,R.e)(this,"willDismiss",7),this.didDismissShorthand=(0,R.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=I++,this.coreDelegate=(0,ke.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onBackdropTap=function(){e.dismiss(void 0,ie.B)},this.onLifecycle=function(r){var n=e.usersElement,a=ee[r.type];if(n&&a){var c=new CustomEvent(a,{bubbles:!1,cancelable:!1,detail:r.detail});n.dispatchEvent(c)}},this.configureTriggerInteraction=function(){var r=e.trigger,n=e.triggerAction,a=e.el,c=e.destroyTriggerInteraction;c&&c();var s=e.triggerEl=void 0!==r?document.getElementById(r):null;!s||(e.destroyTriggerInteraction=function(t,e,r){var c,n=[];switch(e){case"hover":var a;n=[{eventName:"mouseenter",callback:(c=(0,pe.Z)(E().mark(function l(y){return E().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:y.stopPropagation(),a&&clearTimeout(a),a=setTimeout(function(){(0,Q.r)(function(){r.presentFromTrigger(y),a=void 0})},100);case 3:case"end":return D.stop()}},l)})),function s(l){return c.apply(this,arguments)})},{eventName:"mouseleave",callback:function(s){a&&clearTimeout(a);var l=s.relatedTarget;!l||l.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(s){return s.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(s){return r.presentFromTrigger(s,!0)}}];break;case"context-menu":n=[{eventName:"contextmenu",callback:function(s){s.preventDefault(),r.presentFromTrigger(s)}},{eventName:"click",callback:function(s){return s.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(s){return r.presentFromTrigger(s,!0)}}];break;default:n=[{eventName:"click",callback:function(s){return r.presentFromTrigger(s)}},{eventName:"ionPopoverActivateTrigger",callback:function(s){return r.presentFromTrigger(s,!0)}}]}return n.forEach(function(c){return t.addEventListener(c.eventName,c.callback)}),t.setAttribute("data-ion-popover-trigger","true"),function(){n.forEach(function(c){return t.removeEventListener(c.eventName,c.callback)}),t.removeAttribute("data-ion-popover-trigger")}}(s,n,a))},this.configureKeyboardInteraction=function(){var r=e.destroyKeyboardInteraction,n=e.el;r&&r(),e.destroyKeyboardInteraction=function(t){var e=function(){var r=(0,pe.Z)(E().mark(function n(a){var c,s,l,y,D,L,T,A,C;return E().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(s=document.activeElement,l=[],"ION-POPOVER"===(y=null===(c=a.target)||void 0===c?void 0:c.tagName)||"ION-ITEM"===y){b.next=5;break}return b.abrupt("return");case 5:try{l=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(M){}b.t0=a.key,b.next="ArrowLeft"===b.t0?9:"ArrowDown"===b.t0?14:"ArrowUp"===b.t0?18:"Home"===b.t0?22:"End"===b.t0?26:"ArrowRight"===b.t0||" "===b.t0||"Enter"===b.t0?30:32;break;case 9:return b.next=11,t.getParentPopover();case 11:return b.sent&&t.dismiss(void 0,void 0,!1),b.abrupt("break",32);case 14:return a.preventDefault(),void 0!==(D=Pe(l,s))&&le(D),b.abrupt("break",32);case 18:return a.preventDefault(),void 0!==(L=B(l,s))&&le(L),b.abrupt("break",32);case 22:return a.preventDefault(),void 0!==(T=l[0])&&le(T),b.abrupt("break",32);case 26:return a.preventDefault(),void 0!==(A=l[l.length-1])&&le(A),b.abrupt("break",32);case 30:return s&&ve(s)&&(C=new CustomEvent("ionPopoverActivateTrigger"),s.dispatchEvent(C)),b.abrupt("break",32);case 32:case"end":return b.stop()}},n)}));return function(a){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),function(){return t.removeEventListener("keydown",e)}}(n)},this.configureDismissInteraction=function(){var r=e.destroyDismissInteraction,n=e.parentPopover,a=e.triggerAction,c=e.triggerEl,s=e.el;!n||!c||(r&&r(),e.destroyDismissInteraction=function(t,e,r,n){var a=[],s=(0,Q.g)(n).querySelector(".popover-content");return(a="hover"===e?[{eventName:"mouseenter",callback:function(y){document.elementFromPoint(y.clientX,y.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:function(y){y.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):y.stopPropagation()}}]).forEach(function(l){return s.addEventListener(l.eventName,l.callback)}),function(){a.forEach(function(l){return s.removeEventListener(l.eventName,l.callback)})}}(c,a,s,n))}}return(0,be.Z)(d,[{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"onIsOpenChange",value:function(e,r){!0===e&&!1===r?this.present():!1===e&&!0===r&&this.dismiss()}},{key:"connectedCallback",value:function(){(0,ie.e)(this.el)}},{key:"componentWillLoad",value:function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")")),void 0===this.alignment&&(this.alignment="ios"===(0,_e.b)(this)?"center":"start")}},{key:"componentDidLoad",value:function(){var e=this,r=this.parentPopover;!0===this.isOpen&&(0,Q.r)(function(){return e.present()}),r&&(0,Q.a)(r,"ionPopoverWillDismiss",function(){e.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}},{key:"presentFromTrigger",value:(t=(0,pe.Z)(E().mark(function r(n){var c=arguments;return E().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return this.focusDescendantOnPresent=c.length>1&&void 0!==c[1]&&c[1],l.next=4,this.present(n);case 4:this.focusDescendantOnPresent=!1;case 5:case"end":return l.stop()}},r,this)})),function e(r){return t.apply(this,arguments)})},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var r=this.el.parentNode,n=this.inline=null!==r&&!this.hasController,a=this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate;return{inline:n,delegate:a}}},{key:"present",value:function(){var t=(0,pe.Z)(E().mark(function r(n){var a,c,s,l;return E().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this.presented){h.next=2;break}return h.abrupt("return");case 2:if(void 0===this.currentTransition){h.next=5;break}return h.next=5,this.currentTransition;case 5:return a=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),c=this.getDelegate(!0),s=c.inline,l=c.delegate,h.next=9,(0,ke.a)(l,this.el,this.component,["popover-viewport"],a,s);case 9:return this.usersElement=h.sent,h.next=12,(0,W.e)(this.usersElement);case 12:return this.keyboardEvents||this.configureKeyboardInteraction(),this.configureDismissInteraction(),this.currentTransition=(0,ie.d)(this,"popoverEnter",p,m,{event:n||this.event,size:this.size,trigger:this.triggerEl,reference:this.reference,side:this.side,align:this.alignment}),h.next=17,this.currentTransition;case 17:this.currentTransition=void 0,this.focusDescendantOnPresent&&(0,ie.j)(this.el,this.el);case 19:case"end":return h.stop()}},r,this)}));return function e(r){return t.apply(this,arguments)}}()},{key:"dismiss",value:function(){var t=(0,pe.Z)(E().mark(function r(n,a){var c,s,l,y,h,D,L=arguments;return E().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(c=!(L.length>2&&void 0!==L[2])||L[2],void 0===this.currentTransition){A.next=4;break}return A.next=4,this.currentTransition;case 4:return s=this.destroyKeyboardInteraction,l=this.destroyDismissInteraction,c&&this.parentPopover&&this.parentPopover.dismiss(n,a,c),this.currentTransition=(0,ie.f)(this,n,a,"popoverLeave",i,k,this.event),A.next=9,this.currentTransition;case 9:if(!(y=A.sent)){A.next=16;break}return s&&(s(),this.destroyKeyboardInteraction=void 0),l&&(l(),this.destroyDismissInteraction=void 0),h=this.getDelegate(),D=h.delegate,A.next=16,(0,ke.d)(D,this.usersElement);case 16:return this.currentTransition=void 0,A.abrupt("return",y);case 18:case"end":return A.stop()}},r,this)}));return function e(r,n){return t.apply(this,arguments)}}()},{key:"getParentPopover",value:function(){var t=(0,pe.Z)(E().mark(function r(){return E().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",this.parentPopover);case 1:case"end":return a.stop()}},r,this)}));return function e(){return t.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return(0,ie.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,ie.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,r=this,n=(0,_e.b)(this),a=this.onLifecycle,c=this.popoverId,s=this.parentPopover,l=this.dismissOnSelect,y=this.side,h=this.arrow,D=this.htmlAttributes,L=(0,_e.a)("desktop"),T=h&&!s;return(0,R.h)(R.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},D,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:c,class:Object.assign(Object.assign({},(0,G.g)(this.cssClass)),(e={},(0,ue.Z)(e,n,!0),(0,ue.Z)(e,"popover-translucent",this.translucent),(0,ue.Z)(e,"overlay-hidden",!0),(0,ue.Z)(e,"popover-desktop",L),(0,ue.Z)(e,"popover-side-".concat(y),!0),(0,ue.Z)(e,"popover-nested",!!s),e)),onIonPopoverDidPresent:a,onIonPopoverWillPresent:a,onIonPopoverWillDismiss:a,onIonPopoverDidDismiss:a,onIonBackdropTap:this.onBackdropTap}),!s&&(0,R.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,R.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:l?function(){return r.dismiss()}:void 0},T&&(0,R.h)("div",{class:"popover-arrow",part:"arrow"}),(0,R.h)("div",{class:"popover-content",part:"content"},(0,R.h)("slot",null))))}},{key:"el",get:function(){return(0,R.i)(this)}}],[{key:"watchers",get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}}]),d;var t}(),ee={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},I=0;F.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:function(We,Le,X){X.d(Le,{c:function(){return R},g:function(){return ke},h:function(){return pe},o:function(){return ie}});var ue=X(5861),Ce=X(4942);function be(){be=function(){return G};var G={},W=Object.prototype,P=W.hasOwnProperty,E="function"==typeof Symbol?Symbol:{},ae=E.iterator||"@@iterator",de=E.asyncIterator||"@@asyncIterator",se=E.toStringTag||"@@toStringTag";function V(p,i,v){return Object.defineProperty(p,i,{value:v,enumerable:!0,configurable:!0,writable:!0}),p[i]}try{V({},"")}catch(p){V=function(v,m,k){return v[m]=k}}function q(p,i,v,m){var F,ee,I,d,x=Object.create((i&&i.prototype instanceof le?i:le).prototype),N=new ye(m||[]);return x._invoke=(F=p,ee=v,I=N,d="suspendedStart",function(t,e){if("executing"===d)throw new Error("Generator is already running");if("completed"===d){if("throw"===t)throw e;return{value:void 0,done:!0}}for(I.method=t,I.arg=e;;){var r=I.delegate;if(r){var n=Ie(r,I);if(n){if(n===B)continue;return n}}if("next"===I.method)I.sent=I._sent=I.arg;else if("throw"===I.method){if("suspendedStart"===d)throw d="completed",I.arg;I.dispatchException(I.arg)}else"return"===I.method&&I.abrupt("return",I.arg);d="executing";var a=Pe(F,ee,I);if("normal"===a.type){if(d=I.done?"completed":"suspendedYield",a.arg===B)continue;return{value:a.arg,done:I.done}}"throw"===a.type&&(d="completed",I.method="throw",I.arg=a.arg)}}),x}function Pe(p,i,v){try{return{type:"normal",arg:p.call(i,v)}}catch(m){return{type:"throw",arg:m}}}G.wrap=q;var B={};function le(){}function ve(){}function ce(){}var ge={};V(ge,ae,function(){return this});var xe=Object.getPrototypeOf,he=xe&&xe(xe(De([])));he&&he!==W&&P.call(he,ae)&&(ge=he);var ne=ce.prototype=le.prototype=Object.create(ge);function Ee(p){["next","throw","return"].forEach(function(i){V(p,i,function(v){return this._invoke(i,v)})})}function me(p,i){function v(k,x,N,F){var ee=Pe(p[k],p,x);if("throw"!==ee.type){var I=ee.arg,d=I.value;return d&&"object"==typeof d&&P.call(d,"__await")?i.resolve(d.__await).then(function(t){v("next",t,N,F)},function(t){v("throw",t,N,F)}):i.resolve(d).then(function(t){I.value=t,N(I)},function(t){return v("throw",t,N,F)})}F(ee.arg)}var m;this._invoke=function(k,x){function N(){return new i(function(F,ee){v(k,x,F,ee)})}return m=m?m.then(N,N):N()}}function Ie(p,i){var v=p.iterator[i.method];if(void 0===v){if(i.delegate=null,"throw"===i.method){if(p.iterator.return&&(i.method="return",i.arg=void 0,Ie(p,i),"throw"===i.method))return B;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return B}var m=Pe(v,p.iterator,i.arg);if("throw"===m.type)return i.method="throw",i.arg=m.arg,i.delegate=null,B;var k=m.arg;return k?k.done?(i[p.resultName]=k.value,i.next=p.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,B):k:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,B)}function Ne(p){var i={tryLoc:p[0]};1 in p&&(i.catchLoc=p[1]),2 in p&&(i.finallyLoc=p[2],i.afterLoc=p[3]),this.tryEntries.push(i)}function Ae(p){var i=p.completion||{};i.type="normal",delete i.arg,p.completion=i}function ye(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(Ne,this),this.reset(!0)}function De(p){if(p){var i=p[ae];if(i)return i.call(p);if("function"==typeof p.next)return p;if(!isNaN(p.length)){var v=-1,m=function k(){for(;++v<p.length;)if(P.call(p,v))return k.value=p[v],k.done=!1,k;return k.value=void 0,k.done=!0,k};return m.next=m}}return{next:Te}}function Te(){return{value:void 0,done:!0}}return ve.prototype=ce,V(ne,"constructor",ce),V(ce,"constructor",ve),ve.displayName=V(ce,se,"GeneratorFunction"),G.isGeneratorFunction=function(p){var i="function"==typeof p&&p.constructor;return!!i&&(i===ve||"GeneratorFunction"===(i.displayName||i.name))},G.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,ce):(p.__proto__=ce,V(p,se,"GeneratorFunction")),p.prototype=Object.create(ne),p},G.awrap=function(p){return{__await:p}},Ee(me.prototype),V(me.prototype,de,function(){return this}),G.AsyncIterator=me,G.async=function(p,i,v,m,k){void 0===k&&(k=Promise);var x=new me(q(p,i,v,m),k);return G.isGeneratorFunction(i)?x:x.next().then(function(N){return N.done?N.value:x.next()})},Ee(ne),V(ne,se,"Generator"),V(ne,ae,function(){return this}),V(ne,"toString",function(){return"[object Generator]"}),G.keys=function(p){var i=[];for(var v in p)i.push(v);return i.reverse(),function m(){for(;i.length;){var k=i.pop();if(k in p)return m.value=k,m.done=!1,m}return m.done=!0,m}},G.values=De,ye.prototype={constructor:ye,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Ae),!i)for(var v in this)"t"===v.charAt(0)&&P.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=void 0)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if("throw"===i.type)throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var v=this;function m(I,d){return N.type="throw",N.arg=i,v.next=I,d&&(v.method="next",v.arg=void 0),!!d}for(var k=this.tryEntries.length-1;k>=0;--k){var x=this.tryEntries[k],N=x.completion;if("root"===x.tryLoc)return m("end");if(x.tryLoc<=this.prev){var F=P.call(x,"catchLoc"),ee=P.call(x,"finallyLoc");if(F&&ee){if(this.prev<x.catchLoc)return m(x.catchLoc,!0);if(this.prev<x.finallyLoc)return m(x.finallyLoc)}else if(F){if(this.prev<x.catchLoc)return m(x.catchLoc,!0)}else{if(!ee)throw new Error("try statement without catch or finally");if(this.prev<x.finallyLoc)return m(x.finallyLoc)}}}},abrupt:function(i,v){for(var m=this.tryEntries.length-1;m>=0;--m){var k=this.tryEntries[m];if(k.tryLoc<=this.prev&&P.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var x=k;break}}x&&("break"===i||"continue"===i)&&x.tryLoc<=v&&v<=x.finallyLoc&&(x=null);var N=x?x.completion:{};return N.type=i,N.arg=v,x?(this.method="next",this.next=x.finallyLoc,B):this.complete(N)},complete:function(i,v){if("throw"===i.type)throw i.arg;return"break"===i.type||"continue"===i.type?this.next=i.arg:"return"===i.type?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):"normal"===i.type&&v&&(this.next=v),B},finish:function(i){for(var v=this.tryEntries.length-1;v>=0;--v){var m=this.tryEntries[v];if(m.finallyLoc===i)return this.complete(m.completion,m.afterLoc),Ae(m),B}},catch:function(i){for(var v=this.tryEntries.length-1;v>=0;--v){var m=this.tryEntries[v];if(m.tryLoc===i){var k=m.completion;if("throw"===k.type){var x=k.arg;Ae(m)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(i,v,m){return this.delegate={iterator:De(i),resultName:v,nextLoc:m},"next"===this.method&&(this.arg=void 0),B}},G}var pe=function(W,P){return null!==P.closest(W)},R=function(W,P){return"string"==typeof W&&W.length>0?Object.assign((0,Ce.Z)({"ion-color":!0},"ion-color-".concat(W),!0),P):P},ke=function(W){var P={};return function(W){return void 0!==W?(Array.isArray(W)?W:W.split(" ")).filter(function(E){return null!=E}).map(function(E){return E.trim()}).filter(function(E){return""!==E}):[]}(W).forEach(function(E){return P[E]=!0}),P},Q=/^[a-z][a-z0-9+\-.]*:/,ie=function(){var G=(0,ue.Z)(be().mark(function W(P,E,ae,de){var se;return be().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(null==P||"#"===P[0]||Q.test(P)){q.next=5;break}if(!(se=document.querySelector("ion-router"))){q.next=5;break}return null!=E&&E.preventDefault(),q.abrupt("return",se.push(P,ae,de));case 5:return q.abrupt("return",!1);case 6:case"end":return q.stop()}},W)}));return function(P,E,ae,de){return G.apply(this,arguments)}}()}}]);