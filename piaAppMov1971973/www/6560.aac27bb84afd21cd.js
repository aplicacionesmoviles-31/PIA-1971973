"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[6560],{6560:function(rt,Y,I){I.r(Y),I.d(Y,{ion_textarea:function(){return g}});var J=I(4942),H=I(5861),V=I(5671),Q=I(3144),P=I(2361),X=I(6254),M=I(3756),q=I(2854);function B(){B=function(){return v};var v={},p=Object.prototype,c=p.hasOwnProperty,d="function"==typeof Symbol?Symbol:{},_=d.iterator||"@@iterator",L=d.asyncIterator||"@@asyncIterator",x=d.toStringTag||"@@toStringTag";function E(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{E({},"")}catch(e){E=function(r,o,l){return r[o]=l}}function D(e,t,r,o){var m,S,f,b,a=Object.create((t&&t.prototype instanceof W?t:W).prototype),u=new i(o||[]);return a._invoke=(m=e,S=r,f=u,b="suspendedStart",function(C,et){if("executing"===b)throw new Error("Generator is already running");if("completed"===b){if("throw"===C)throw et;return{value:void 0,done:!0}}for(f.method=C,f.arg=et;;){var it=f.delegate;if(it){var tt=U(it,f);if(tt){if(tt===O)continue;return tt}}if("next"===f.method)f.sent=f._sent=f.arg;else if("throw"===f.method){if("suspendedStart"===b)throw b="completed",f.arg;f.dispatchException(f.arg)}else"return"===f.method&&f.abrupt("return",f.arg);b="executing";var Z=G(m,S,f);if("normal"===Z.type){if(b=f.done?"completed":"suspendedYield",Z.arg===O)continue;return{value:Z.arg,done:f.done}}"throw"===Z.type&&(b="completed",f.method="throw",f.arg=Z.arg)}}),a}function G(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(o){return{type:"throw",arg:o}}}v.wrap=D;var O={};function W(){}function N(){}function A(){}var F={};E(F,_,function(){return this});var T=Object.getPrototypeOf,R=T&&T(T(s([])));R&&R!==p&&c.call(R,_)&&(F=R);var z=A.prototype=W.prototype=Object.create(F);function K(e){["next","throw","return"].forEach(function(t){E(e,t,function(r){return this._invoke(t,r)})})}function j(e,t){function r(l,a,u,m){var S=G(e[l],e,a);if("throw"!==S.type){var f=S.arg,b=f.value;return b&&"object"==typeof b&&c.call(b,"__await")?t.resolve(b.__await).then(function(C){r("next",C,u,m)},function(C){r("throw",C,u,m)}):t.resolve(b).then(function(C){f.value=C,u(f)},function(C){return r("throw",C,u,m)})}m(S.arg)}var o;this._invoke=function(l,a){function u(){return new t(function(m,S){r(l,a,m,S)})}return o=o?o.then(u,u):u()}}function U(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,U(e,t),"throw"===t.method))return O;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=G(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,O;var l=o.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,O):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,O)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function n(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function i(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function s(e){if(e){var t=e[_];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function l(){for(;++r<e.length;)if(c.call(e,r))return l.value=e[r],l.done=!1,l;return l.value=void 0,l.done=!0,l};return o.next=o}}return{next:h}}function h(){return{value:void 0,done:!0}}return N.prototype=A,E(z,"constructor",A),E(A,"constructor",N),N.displayName=E(A,x,"GeneratorFunction"),v.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===N||"GeneratorFunction"===(t.displayName||t.name))},v.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,E(e,x,"GeneratorFunction")),e.prototype=Object.create(z),e},v.awrap=function(e){return{__await:e}},K(j.prototype),E(j.prototype,L,function(){return this}),v.AsyncIterator=j,v.async=function(e,t,r,o,l){void 0===l&&(l=Promise);var a=new j(D(e,t,r,o),l);return v.isGeneratorFunction(t)?a:a.next().then(function(u){return u.done?u.value:a.next()})},K(z),E(z,x,"Generator"),E(z,_,function(){return this}),E(z,"toString",function(){return"[object Generator]"}),v.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function o(){for(;t.length;){var l=t.pop();if(l in e)return o.value=l,o.done=!1,o}return o.done=!0,o}},v.values=s,i.prototype={constructor:i,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!t)for(var r in this)"t"===r.charAt(0)&&c.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(f,b){return u.type="throw",u.arg=t,r.next=f,b&&(r.method="next",r.arg=void 0),!!b}for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var m=c.call(a,"catchLoc"),S=c.call(a,"finallyLoc");if(m&&S){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(m){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!S)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o];if(l.tryLoc<=this.prev&&c.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var a=l;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var u=a?a.completion:{};return u.type=t,u.arg=r,a?(this.method="next",this.next=a.finallyLoc,O):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),O},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),n(o),O}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc===t){var l=o.completion;if("throw"===l.type){var a=l.arg;n(o)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:s(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=void 0),O}},v}var g=function(){function v(p){var c=this;(0,V.Z)(this,v),(0,P.r)(this,p),this.ionChange=(0,P.e)(this,"ionChange",7),this.ionInput=(0,P.e)(this,"ionInput",7),this.ionStyle=(0,P.e)(this,"ionStyle",7),this.ionBlur=(0,P.e)(this,"ionBlur",7),this.ionFocus=(0,P.e)(this,"ionFocus",7),this.inputId="ion-textarea-".concat(k++),this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(d){c.nativeInput&&(c.value=c.nativeInput.value),c.emitStyle(),c.ionInput.emit(d)},this.onFocus=function(d){c.hasFocus=!0,c.focusChange(),c.fireFocusEvents&&c.ionFocus.emit(d)},this.onBlur=function(d){c.hasFocus=!1,c.focusChange(),c.fireFocusEvents&&c.ionBlur.emit(d)},this.onKeyDown=function(){c.checkClearOnEdit()}}return(0,Q.Z)(v,[{key:"debounceChanged",value:function(){this.ionChange=(0,M.h)(this.ionChange,this.debounce)}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){var c=this.nativeInput,d=this.getValue();c&&c.value!==d&&(c.value=d),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:d})}},{key:"connectedCallback",value:function(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}},{key:"disconnectedCallback",value:function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=Object.assign(Object.assign({},(0,M.i)(this.el)),(0,M.j)(this.el,["title"]))}},{key:"componentDidLoad",value:function(){var c=this;(0,M.r)(function(){return c.runAutoGrow()})}},{key:"runAutoGrow",value:function(){var c=this,d=this.nativeInput;d&&this.autoGrow&&(0,P.f)(function(){d.style.height="auto",d.style.height=d.scrollHeight+"px",c.textareaWrapper&&(c.textareaWrapper.style.height=d.scrollHeight+"px")})}},{key:"setFocus",value:(p=(0,H.Z)(B().mark(function d(){return B().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:this.nativeInput&&this.nativeInput.focus();case 1:case"end":return L.stop()}},d,this)})),function c(){return p.apply(this,arguments)})},{key:"setBlur",value:function(){var p=(0,H.Z)(B().mark(function d(){return B().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:this.nativeInput&&this.nativeInput.blur();case 1:case"end":return L.stop()}},d,this)}));return function c(){return p.apply(this,arguments)}}()},{key:"getInputElement",value:function(){return Promise.resolve(this.nativeInput)}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})}},{key:"checkClearOnEdit",value:function(){!this.clearOnEdit||(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)}},{key:"focusChange",value:function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()}},{key:"hasValue",value:function(){return""!==this.getValue()}},{key:"getValue",value:function(){return this.value||""}},{key:"render",value:function(){var c=this,d=(0,X.b)(this),_=this.getValue(),L=this.inputId+"-lbl",x=(0,M.k)(this.el);return x&&(x.id=L),(0,P.h)(P.H,{"aria-disabled":this.disabled?"true":null,class:(0,q.c)(this.color,(0,J.Z)({},d,!0))},(0,P.h)("div",{class:"textarea-wrapper",ref:function(D){return c.textareaWrapper=D}},(0,P.h)("textarea",Object.assign({class:"native-textarea","aria-labelledby":x?L:null,ref:function(D){return c.nativeInput=D},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},this.inheritedAttributes),_)))}},{key:"el",get:function(){return(0,P.i)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}}]),v;var p}(),k=0;g.style={ios:".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}",md:".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"}},2854:function(rt,Y,I){I.d(Y,{c:function(){return P},g:function(){return M},h:function(){return Q},o:function(){return B}});var J=I(5861),H=I(4942);function V(){V=function(){return w};var w={},y=Object.prototype,g=y.hasOwnProperty,k="function"==typeof Symbol?Symbol:{},v=k.iterator||"@@iterator",p=k.asyncIterator||"@@asyncIterator",c=k.toStringTag||"@@toStringTag";function d(n,i,s){return Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}),n[i]}try{d({},"")}catch(n){d=function(s,h,e){return s[h]=e}}function _(n,i,s,h){var o,l,a,u,t=Object.create((i&&i.prototype instanceof E?i:E).prototype),r=new j(h||[]);return t._invoke=(o=n,l=s,a=r,u="suspendedStart",function(m,S){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===m)throw S;return{value:void 0,done:!0}}for(a.method=m,a.arg=S;;){var f=a.delegate;if(f){var b=R(f,a);if(b){if(b===x)continue;return b}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===u)throw u="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u="executing";var C=L(o,l,a);if("normal"===C.type){if(u=a.done?"completed":"suspendedYield",C.arg===x)continue;return{value:C.arg,done:a.done}}"throw"===C.type&&(u="completed",a.method="throw",a.arg=C.arg)}}),t}function L(n,i,s){try{return{type:"normal",arg:n.call(i,s)}}catch(h){return{type:"throw",arg:h}}}w.wrap=_;var x={};function E(){}function D(){}function G(){}var O={};d(O,v,function(){return this});var W=Object.getPrototypeOf,N=W&&W(W(U([])));N&&N!==y&&g.call(N,v)&&(O=N);var A=G.prototype=E.prototype=Object.create(O);function F(n){["next","throw","return"].forEach(function(i){d(n,i,function(s){return this._invoke(i,s)})})}function T(n,i){function s(e,t,r,o){var l=L(n[e],n,t);if("throw"!==l.type){var a=l.arg,u=a.value;return u&&"object"==typeof u&&g.call(u,"__await")?i.resolve(u.__await).then(function(m){s("next",m,r,o)},function(m){s("throw",m,r,o)}):i.resolve(u).then(function(m){a.value=m,r(a)},function(m){return s("throw",m,r,o)})}o(l.arg)}var h;this._invoke=function(e,t){function r(){return new i(function(o,l){s(e,t,o,l)})}return h=h?h.then(r,r):r()}}function R(n,i){var s=n.iterator[i.method];if(void 0===s){if(i.delegate=null,"throw"===i.method){if(n.iterator.return&&(i.method="return",i.arg=void 0,R(n,i),"throw"===i.method))return x;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return x}var h=L(s,n.iterator,i.arg);if("throw"===h.type)return i.method="throw",i.arg=h.arg,i.delegate=null,x;var e=h.arg;return e?e.done?(i[n.resultName]=e.value,i.next=n.nextLoc,"return"!==i.method&&(i.method="next",i.arg=void 0),i.delegate=null,x):e:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,x)}function z(n){var i={tryLoc:n[0]};1 in n&&(i.catchLoc=n[1]),2 in n&&(i.finallyLoc=n[2],i.afterLoc=n[3]),this.tryEntries.push(i)}function K(n){var i=n.completion||{};i.type="normal",delete i.arg,n.completion=i}function j(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(z,this),this.reset(!0)}function U(n){if(n){var i=n[v];if(i)return i.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var s=-1,h=function e(){for(;++s<n.length;)if(g.call(n,s))return e.value=n[s],e.done=!1,e;return e.value=void 0,e.done=!0,e};return h.next=h}}return{next:$}}function $(){return{value:void 0,done:!0}}return D.prototype=G,d(A,"constructor",G),d(G,"constructor",D),D.displayName=d(G,c,"GeneratorFunction"),w.isGeneratorFunction=function(n){var i="function"==typeof n&&n.constructor;return!!i&&(i===D||"GeneratorFunction"===(i.displayName||i.name))},w.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,G):(n.__proto__=G,d(n,c,"GeneratorFunction")),n.prototype=Object.create(A),n},w.awrap=function(n){return{__await:n}},F(T.prototype),d(T.prototype,p,function(){return this}),w.AsyncIterator=T,w.async=function(n,i,s,h,e){void 0===e&&(e=Promise);var t=new T(_(n,i,s,h),e);return w.isGeneratorFunction(i)?t:t.next().then(function(r){return r.done?r.value:t.next()})},F(A),d(A,c,"Generator"),d(A,v,function(){return this}),d(A,"toString",function(){return"[object Generator]"}),w.keys=function(n){var i=[];for(var s in n)i.push(s);return i.reverse(),function h(){for(;i.length;){var e=i.pop();if(e in n)return h.value=e,h.done=!1,h}return h.done=!0,h}},w.values=U,j.prototype={constructor:j,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(K),!i)for(var s in this)"t"===s.charAt(0)&&g.call(this,s)&&!isNaN(+s.slice(1))&&(this[s]=void 0)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if("throw"===i.type)throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var s=this;function h(a,u){return r.type="throw",r.arg=i,s.next=a,u&&(s.method="next",s.arg=void 0),!!u}for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e],r=t.completion;if("root"===t.tryLoc)return h("end");if(t.tryLoc<=this.prev){var o=g.call(t,"catchLoc"),l=g.call(t,"finallyLoc");if(o&&l){if(this.prev<t.catchLoc)return h(t.catchLoc,!0);if(this.prev<t.finallyLoc)return h(t.finallyLoc)}else if(o){if(this.prev<t.catchLoc)return h(t.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<t.finallyLoc)return h(t.finallyLoc)}}}},abrupt:function(i,s){for(var h=this.tryEntries.length-1;h>=0;--h){var e=this.tryEntries[h];if(e.tryLoc<=this.prev&&g.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var t=e;break}}t&&("break"===i||"continue"===i)&&t.tryLoc<=s&&s<=t.finallyLoc&&(t=null);var r=t?t.completion:{};return r.type=i,r.arg=s,t?(this.method="next",this.next=t.finallyLoc,x):this.complete(r)},complete:function(i,s){if("throw"===i.type)throw i.arg;return"break"===i.type||"continue"===i.type?this.next=i.arg:"return"===i.type?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):"normal"===i.type&&s&&(this.next=s),x},finish:function(i){for(var s=this.tryEntries.length-1;s>=0;--s){var h=this.tryEntries[s];if(h.finallyLoc===i)return this.complete(h.completion,h.afterLoc),K(h),x}},catch:function(i){for(var s=this.tryEntries.length-1;s>=0;--s){var h=this.tryEntries[s];if(h.tryLoc===i){var e=h.completion;if("throw"===e.type){var t=e.arg;K(h)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(i,s,h){return this.delegate={iterator:U(i),resultName:s,nextLoc:h},"next"===this.method&&(this.arg=void 0),x}},w}var Q=function(y,g){return null!==g.closest(y)},P=function(y,g){return"string"==typeof y&&y.length>0?Object.assign((0,H.Z)({"ion-color":!0},"ion-color-".concat(y),!0),g):g},M=function(y){var g={};return function(y){return void 0!==y?(Array.isArray(y)?y:y.split(" ")).filter(function(k){return null!=k}).map(function(k){return k.trim()}).filter(function(k){return""!==k}):[]}(y).forEach(function(k){return g[k]=!0}),g},q=/^[a-z][a-z0-9+\-.]*:/,B=function(){var w=(0,J.Z)(V().mark(function y(g,k,v,p){var c;return V().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(null==g||"#"===g[0]||q.test(g)){_.next=5;break}if(!(c=document.querySelector("ion-router"))){_.next=5;break}return null!=k&&k.preventDefault(),_.abrupt("return",c.push(g,v,p));case 5:return _.abrupt("return",!1);case 6:case"end":return _.stop()}},y)}));return function(g,k,v,p){return w.apply(this,arguments)}}()}}]);