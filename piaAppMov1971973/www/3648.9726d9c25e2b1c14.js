"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[3648],{3648:function(dt,G,v){v.r(G),v.d(G,{ion_action_sheet:function(){return Z}});var H=v(4942),K=v(5861),q=v(5671),tt=v(3144),u=v(2361),U=v(6254),et=v(7160),A=v(599),Y=v(2854),y=v(9442);function O(){O=function(){return g};var g={},i=Object.prototype,a=i.hasOwnProperty,d="function"==typeof Symbol?Symbol:{},c=d.iterator||"@@iterator",k=d.asyncIterator||"@@asyncIterator",f=d.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(n,o,r){return n[o]=r}}function l(e,t,n,o){var x,_,h,m,s=Object.create((t&&t.prototype instanceof B?t:B).prototype),b=new W(o||[]);return s._invoke=(x=e,_=n,h=b,m="suspendedStart",function(E,X){if("executing"===m)throw new Error("Generator is already running");if("completed"===m){if("throw"===E)throw X;return{value:void 0,done:!0}}for(h.method=E,h.arg=X;;){var F=h.delegate;if(F){var R=Q(F,h);if(R){if(R===w)continue;return R}}if("next"===h.method)h.sent=h._sent=h.arg;else if("throw"===h.method){if("suspendedStart"===m)throw m="completed",h.arg;h.dispatchException(h.arg)}else"return"===h.method&&h.abrupt("return",h.arg);m="executing";var P=D(x,_,h);if("normal"===P.type){if(m=h.done?"completed":"suspendedYield",P.arg===w)continue;return{value:P.arg,done:h.done}}"throw"===P.type&&(m="completed",h.method="throw",h.arg=P.arg)}}),s}function D(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(o){return{type:"throw",arg:o}}}g.wrap=l;var w={};function B(){}function S(){}function C(){}var I={};p(I,c,function(){return this});var M=Object.getPrototypeOf,T=M&&M(M(N([])));T&&T!==i&&a.call(T,c)&&(I=T);var L=C.prototype=B.prototype=Object.create(I);function J(e){["next","throw","return"].forEach(function(t){p(e,t,function(n){return this._invoke(t,n)})})}function j(e,t){function n(r,s,b,x){var _=D(e[r],e,s);if("throw"!==_.type){var h=_.arg,m=h.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then(function(E){n("next",E,b,x)},function(E){n("throw",E,b,x)}):t.resolve(m).then(function(E){h.value=E,b(h)},function(E){return n("throw",E,b,x)})}x(_.arg)}var o;this._invoke=function(r,s){function b(){return new t(function(x,_){n(r,s,x,_)})}return o=o?o.then(b,b):b()}}function Q(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,Q(e,t),"throw"===t.method))return w;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var o=D(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,w;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,w):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,w)}function ct(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function W(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(ct,this),this.reset(!0)}function N(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:V}}function V(){return{value:void 0,done:!0}}return S.prototype=C,p(L,"constructor",C),p(C,"constructor",S),S.displayName=p(C,f,"GeneratorFunction"),g.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===S||"GeneratorFunction"===(t.displayName||t.name))},g.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,C):(e.__proto__=C,p(e,f,"GeneratorFunction")),e.prototype=Object.create(L),e},g.awrap=function(e){return{__await:e}},J(j.prototype),p(j.prototype,k,function(){return this}),g.AsyncIterator=j,g.async=function(e,t,n,o,r){void 0===r&&(r=Promise);var s=new j(l(e,t,n,o),r);return g.isGeneratorFunction(t)?s:s.next().then(function(b){return b.done?b.value:s.next()})},J(L),p(L,f,"Generator"),p(L,c,function(){return this}),p(L,"toString",function(){return"[object Generator]"}),g.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function o(){for(;t.length;){var r=t.pop();if(r in e)return o.value=r,o.done=!1,o}return o.done=!0,o}},g.values=N,W.prototype={constructor:W,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(h,m){return b.type="throw",b.arg=t,n.next=h,m&&(n.method="next",n.arg=void 0),!!m}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],b=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var x=a.call(s,"catchLoc"),_=a.call(s,"finallyLoc");if(x&&_){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(x){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!_)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,n){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=n&&n<=s.finallyLoc&&(s=null);var b=s?s.completion:{};return b.type=t,b.arg=n,s?(this.method="next",this.next=s.finallyLoc,w):this.complete(b)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),w},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),z(o),w}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var s=r.arg;z(o)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:N(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=void 0),w}},g}v(7683),v(3139),v(3509);var nt=function(i){var a=(0,y.c)(),d=(0,y.c)(),c=(0,y.c)();return d.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),c.addElement(i.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([d,c])},ot=function(i){var a=(0,y.c)(),d=(0,y.c)(),c=(0,y.c)();return d.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),c.addElement(i.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([d,c])},it=function(i){var a=(0,y.c)(),d=(0,y.c)(),c=(0,y.c)();return d.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),c.addElement(i.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([d,c])},rt=function(i){var a=(0,y.c)(),d=(0,y.c)(),c=(0,y.c)();return d.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),c.addElement(i.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([d,c])},Z=function(){function g(i){var a=this;(0,q.Z)(this,g),(0,u.r)(this,i),this.didPresent=(0,u.e)(this,"ionActionSheetDidPresent",7),this.willPresent=(0,u.e)(this,"ionActionSheetWillPresent",7),this.willDismiss=(0,u.e)(this,"ionActionSheetWillDismiss",7),this.didDismiss=(0,u.e)(this,"ionActionSheetDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){a.dismiss(void 0,A.B)},this.dispatchCancelHandler=function(d){if((0,A.i)(d.detail.role)){var k=a.getButtons().find(function(f){return"cancel"===f.role});a.callButtonHandler(k)}}}return(0,tt.Z)(g,[{key:"present",value:function(){return(0,A.d)(this,"actionSheetEnter",nt,it)}},{key:"connectedCallback",value:function(){(0,A.e)(this.el)}},{key:"dismiss",value:function(a,d){return(0,A.f)(this,a,d,"actionSheetLeave",ot,rt)}},{key:"onDidDismiss",value:function(){return(0,A.g)(this.el,"ionActionSheetDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,A.g)(this.el,"ionActionSheetWillDismiss")}},{key:"buttonClick",value:(i=(0,K.Z)(O().mark(function d(c){var k;return O().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(0,A.i)(k=c.role)){l.next=3;break}return l.abrupt("return",this.dismiss(c.data,k));case 3:return l.next=5,this.callButtonHandler(c);case 5:if(!l.sent){l.next=8;break}return l.abrupt("return",this.dismiss(c.data,c.role));case 8:return l.abrupt("return",Promise.resolve());case 9:case"end":return l.stop()}},d,this)})),function a(d){return i.apply(this,arguments)})},{key:"callButtonHandler",value:function(){var i=(0,K.Z)(O().mark(function d(c){return O().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!c){p.next=6;break}return p.next=3,(0,A.s)(c.handler);case 3:if(!1!==p.sent){p.next=6;break}return p.abrupt("return",!1);case 6:return p.abrupt("return",!0);case 7:case"end":return p.stop()}},d)}));return function a(d){return i.apply(this,arguments)}}()},{key:"getButtons",value:function(){return this.buttons.map(function(a){return"string"==typeof a?{text:a}:a})}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentDidLoad",value:function(){var a=this,d=this.groupEl,c=this.wrapperEl;this.gesture||"md"===(0,U.b)(this)||!c||!d||(0,u.f)(function(){d.scrollHeight>d.clientHeight||(a.gesture=(0,et.c)(c,function(f){return f.classList.contains("action-sheet-button")}),a.gesture.enable(!0))})}},{key:"render",value:function(){var a=this,d=this.htmlAttributes,c=(0,U.b)(this),k=this.getButtons(),f=k.find(function(l){return"cancel"===l.role}),p=k.filter(function(l){return"cancel"!==l.role});return(0,u.h)(u.H,Object.assign({role:"dialog","aria-modal":"true",tabindex:"-1"},d,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign((0,H.Z)({},c,!0),(0,Y.g)(this.cssClass)),{"overlay-hidden":!0,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,u.h)("ion-backdrop",{tappable:this.backdropDismiss}),(0,u.h)("div",{tabindex:"0"}),(0,u.h)("div",{class:"action-sheet-wrapper ion-overlay-wrapper",role:"dialog",ref:function(D){return a.wrapperEl=D}},(0,u.h)("div",{class:"action-sheet-container"},(0,u.h)("div",{class:"action-sheet-group",ref:function(D){return a.groupEl=D}},void 0!==this.header&&(0,u.h)("div",{class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},this.header,this.subHeader&&(0,u.h)("div",{class:"action-sheet-sub-title"},this.subHeader)),p.map(function(l){return(0,u.h)("button",{type:"button",id:l.id,class:$(l),onClick:function(){return a.buttonClick(l)}},(0,u.h)("span",{class:"action-sheet-button-inner"},l.icon&&(0,u.h)("ion-icon",{icon:l.icon,lazy:!1,class:"action-sheet-icon"}),l.text),"md"===c&&(0,u.h)("ion-ripple-effect",null))})),f&&(0,u.h)("div",{class:"action-sheet-group action-sheet-group-cancel"},(0,u.h)("button",{type:"button",class:$(f),onClick:function(){return a.buttonClick(f)}},(0,u.h)("span",{class:"action-sheet-button-inner"},f.icon&&(0,u.h)("ion-icon",{icon:f.icon,lazy:!1,class:"action-sheet-icon"}),f.text),"md"===c&&(0,u.h)("ion-ripple-effect",null))))),(0,u.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,u.i)(this)}}]),g;var i}(),$=function(i){return Object.assign((0,H.Z)({"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0},"action-sheet-".concat(i.role),void 0!==i.role),(0,Y.g)(i.cssClass))};Z.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}}}]);