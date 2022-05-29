"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[5652],{5652:function(q,V,C){C.r(V),C.d(V,{ion_button:function(){return _},ion_icon:function(){return P}});var R,v=C(4942),F=C(5671),D=C(3144),p=C(2361),J=C(6254),$=C(3756),S=C(2854),u=function(o,n,a,s,h){return a="ios"===(a&&I(a))?"ios":"md",s&&"ios"===a?o=I(s):h&&"md"===a?o=I(h):(!o&&n&&!A(n)&&(o=n),M(o)&&(o=I(o))),M(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null},y=function(o){return M(o)&&(o=o.trim(),A(o))?o:null},A=function(o){return o.length>0&&/(\/|\.)/.test(o)},M=function(o){return"string"==typeof o},I=function(o){return o.toLowerCase()},_=function(){function b(o){var n=this;(0,F.Z)(this,b),(0,p.r)(this,o),this.ionFocus=(0,p.e)(this,"ionFocus",7),this.ionBlur=(0,p.e)(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.inheritedAttributes={},this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=function(a){if("button"===n.type)(0,S.o)(n.href,a,n.routerDirection,n.routerAnimation);else if((0,$.m)(n.el)){var s=n.el.closest("form");if(s){a.preventDefault();var h=document.createElement("button");h.type=n.type,h.style.display="none",s.appendChild(h),h.click(),h.remove()}}},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()}}return(0,D.Z)(b,[{key:"componentWillLoad",value:function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=(0,$.i)(this.el)}},{key:"hasIconOnly",get:function(){return!!this.el.querySelector('[slot="icon-only"]')}},{key:"rippleType",get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}},{key:"render",value:function(){var n,a=(0,J.b)(this),s=this.buttonType,r=this.disabled,i=this.size,l=this.href,f=this.expand,L=this.hasIconOnly,E=this.shape,d=this.strong,w=this.inheritedAttributes,O=void 0===i&&this.inItem?"small":i,H=void 0===l?"button":"a",X="button"===H?{type:this.type}:{download:this.download,href:l,rel:this.rel,target:this.target},T=this.fill;return void 0===T&&(T=this.inToolbar||this.inListHeader?"clear":"solid"),(0,p.h)(p.H,{onClick:this.handleClick,"aria-disabled":r?"true":null,class:(0,S.c)(this.color,(n={},(0,v.Z)(n,a,!0),(0,v.Z)(n,s,!0),(0,v.Z)(n,"".concat(s,"-").concat(f),void 0!==f),(0,v.Z)(n,"".concat(s,"-").concat(O),void 0!==O),(0,v.Z)(n,"".concat(s,"-").concat(E),void 0!==E),(0,v.Z)(n,"".concat(s,"-").concat(T),!0),(0,v.Z)(n,"".concat(s,"-strong"),d),(0,v.Z)(n,"in-toolbar",(0,S.h)("ion-toolbar",this.el)),(0,v.Z)(n,"in-toolbar-color",(0,S.h)("ion-toolbar[color]",this.el)),(0,v.Z)(n,"button-has-icon-only",L),(0,v.Z)(n,"button-disabled",r),(0,v.Z)(n,"ion-activatable",!0),(0,v.Z)(n,"ion-focusable",!0),n))},(0,p.h)(H,Object.assign({},X,{class:"button-native",part:"native",disabled:r,onFocus:this.onFocus,onBlur:this.onBlur},w),(0,p.h)("span",{class:"button-inner"},(0,p.h)("slot",{name:"icon-only"}),(0,p.h)("slot",{name:"start"}),(0,p.h)("slot",null),(0,p.h)("slot",{name:"end"})),"md"===a&&(0,p.h)("ion-ripple-effect",{type:this.rippleType})))}},{key:"el",get:function(){return(0,p.i)(this)}}]),b}();_.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var j=function b(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var n=0;n<o.attributes.length;n++){var a=o.attributes[n].value;if(M(a)&&0===a.toLowerCase().indexOf("on"))return!1}for(var s=0;s<o.childNodes.length;s++)if(!b(o.childNodes[s]))return!1}return!0},x=new Map,N=new Map,B=function(o,n){var a=N.get(o);if(!a){if("undefined"==typeof fetch||"undefined"==typeof document)return x.set(o,""),Promise.resolve();a=fetch(o).then(function(s){if(s.ok)return s.text().then(function(h){h&&!1!==n&&(h=function(o){var n=document.createElement("div");n.innerHTML=o;for(var a=n.childNodes.length-1;a>=0;a--)"svg"!==n.childNodes[a].nodeName.toLowerCase()&&n.removeChild(n.childNodes[a]);var s=n.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()){var h=s.getAttribute("class")||"";if(s.setAttribute("class",(h+" s-ion-icon").trim()),j(s))return n.innerHTML}return""}(h)),x.set(o,h||"")});x.set(o,"")}),N.set(o,a)}return a},P=function(){function b(o){var n=this;(0,F.Z)(this,b),(0,p.r)(this,o),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=Y(),this.lazy=!1,this.sanitize=!0,this.hasAriaHidden=function(){var a=n.el;return a.hasAttribute("aria-hidden")&&"true"===a.getAttribute("aria-hidden")}}return(0,D.Z)(b,[{key:"componentWillLoad",value:function(){this.inheritedAttributes=function(o){var a={};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(s){o.hasAttribute(s)&&(null!==o.getAttribute(s)&&(a[s]=o.getAttribute(s)),o.removeAttribute(s))}),a}(this.el,["aria-label"])}},{key:"connectedCallback",value:function(){var n=this;this.waitUntilVisible(this.el,"50px",function(){n.isVisible=!0,n.loadIcon()})}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(n,a,s){var h=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver(function(t){t[0].isIntersecting&&(r.disconnect(),h.io=void 0,s())},{rootMargin:a});r.observe(n)}else s()}},{key:"loadIcon",value:function(){var n=this;if(this.isVisible){var a=function(o){var n=y(o.src);return n||((n=u(o.name,o.icon,o.mode,o.ios,o.md))?function(o){var n=function(){if("undefined"==typeof window)return new Map;if(!R){var o=window;o.Ionicons=o.Ionicons||{},R=o.Ionicons.map=o.Ionicons.map||new Map}return R}().get(o);return n||(0,p.k)("svg/".concat(o,".svg"))}(n):o.icon&&((n=y(o.icon))||(n=y(o.icon[o.mode])))?n:null)}(this);a&&(x.has(a)?this.svgContent=x.get(a):B(a,this.sanitize).then(function(){return n.svgContent=x.get(a)}))}var s=this.iconName=u(this.name,this.icon,this.mode,this.ios,this.md);s&&(this.ariaLabel=s.replace(/\-/g," "))}},{key:"render",value:function(){var n,a=this.iconName,s=this.ariaLabel,h=this.inheritedAttributes,r=this.mode||"md",t=this.flipRtl||a&&(a.indexOf("arrow")>-1||a.indexOf("chevron")>-1)&&!1!==this.flipRtl;return(0,p.h)(p.H,Object.assign({"aria-label":void 0===s||this.hasAriaHidden()?null:s,role:"img",class:Object.assign(Object.assign((0,v.Z)({},r,!0),U(this.color)),(n={},(0,v.Z)(n,"icon-".concat(this.size),!!this.size),(0,v.Z)(n,"flip-rtl",!!t&&"rtl"===this.el.ownerDocument.dir),n))},h),(0,p.h)("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}},{key:"el",get:function(){return(0,p.i)(this)}}],[{key:"assetsDirs",get:function(){return["svg"]}},{key:"watchers",get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}}]),b}(),Y=function(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},U=function(o){return o?(0,v.Z)({"ion-color":!0},"ion-color-".concat(o),!0):null};P.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},2854:function(q,V,C){C.d(V,{c:function(){return J},g:function(){return S},h:function(){return p},o:function(){return Q}});var v=C(5861),F=C(4942);function D(){D=function(){return m};var m={},g=Object.prototype,u=g.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},A=y.iterator||"@@iterator",M=y.asyncIterator||"@@asyncIterator",I=y.toStringTag||"@@toStringTag";function k(r,t,e){return Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{k({},"")}catch(r){k=function(e,i,l){return e[i]=l}}function z(r,t,e,i){var L,E,d,w,c=Object.create((t&&t.prototype instanceof W?t:W).prototype),f=new a(i||[]);return c._invoke=(L=r,E=e,d=f,w="suspendedStart",function(O,H){if("executing"===w)throw new Error("Generator is already running");if("completed"===w){if("throw"===O)throw H;return{value:void 0,done:!0}}for(d.method=O,d.arg=H;;){var X=d.delegate;if(X){var T=b(X,d);if(T){if(T===_)continue;return T}}if("next"===d.method)d.sent=d._sent=d.arg;else if("throw"===d.method){if("suspendedStart"===w)throw w="completed",d.arg;d.dispatchException(d.arg)}else"return"===d.method&&d.abrupt("return",d.arg);w="executing";var K=G(L,E,d);if("normal"===K.type){if(w=d.done?"completed":"suspendedYield",K.arg===_)continue;return{value:K.arg,done:d.done}}"throw"===K.type&&(w="completed",d.method="throw",d.arg=K.arg)}}),c}function G(r,t,e){try{return{type:"normal",arg:r.call(t,e)}}catch(i){return{type:"throw",arg:i}}}m.wrap=z;var _={};function W(){}function j(){}function x(){}var N={};k(N,A,function(){return this});var B=Object.getPrototypeOf,Z=B&&B(B(s([])));Z&&Z!==g&&u.call(Z,A)&&(N=Z);var P=x.prototype=W.prototype=Object.create(N);function Y(r){["next","throw","return"].forEach(function(t){k(r,t,function(e){return this._invoke(t,e)})})}function U(r,t){function e(l,c,f,L){var E=G(r[l],r,c);if("throw"!==E.type){var d=E.arg,w=d.value;return w&&"object"==typeof w&&u.call(w,"__await")?t.resolve(w.__await).then(function(O){e("next",O,f,L)},function(O){e("throw",O,f,L)}):t.resolve(w).then(function(O){d.value=O,f(d)},function(O){return e("throw",O,f,L)})}L(E.arg)}var i;this._invoke=function(l,c){function f(){return new t(function(L,E){e(l,c,L,E)})}return i=i?i.then(f,f):f()}}function b(r,t){var e=r.iterator[t.method];if(void 0===e){if(t.delegate=null,"throw"===t.method){if(r.iterator.return&&(t.method="return",t.arg=void 0,b(r,t),"throw"===t.method))return _;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var i=G(e,r.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,_;var l=i.arg;return l?l.done?(t[r.resultName]=l.value,t.next=r.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,_):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function o(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function n(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function a(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(o,this),this.reset(!0)}function s(r){if(r){var t=r[A];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,i=function l(){for(;++e<r.length;)if(u.call(r,e))return l.value=r[e],l.done=!1,l;return l.value=void 0,l.done=!0,l};return i.next=i}}return{next:h}}function h(){return{value:void 0,done:!0}}return j.prototype=x,k(P,"constructor",x),k(x,"constructor",j),j.displayName=k(x,I,"GeneratorFunction"),m.isGeneratorFunction=function(r){var t="function"==typeof r&&r.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},m.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,x):(r.__proto__=x,k(r,I,"GeneratorFunction")),r.prototype=Object.create(P),r},m.awrap=function(r){return{__await:r}},Y(U.prototype),k(U.prototype,M,function(){return this}),m.AsyncIterator=U,m.async=function(r,t,e,i,l){void 0===l&&(l=Promise);var c=new U(z(r,t,e,i),l);return m.isGeneratorFunction(t)?c:c.next().then(function(f){return f.done?f.value:c.next()})},Y(P),k(P,I,"Generator"),k(P,A,function(){return this}),k(P,"toString",function(){return"[object Generator]"}),m.keys=function(r){var t=[];for(var e in r)t.push(e);return t.reverse(),function i(){for(;t.length;){var l=t.pop();if(l in r)return i.value=l,i.done=!1,i}return i.done=!0,i}},m.values=s,a.prototype={constructor:a,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(n),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(d,w){return f.type="throw",f.arg=t,e.next=d,w&&(e.method="next",e.arg=void 0),!!w}for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l],f=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var L=u.call(c,"catchLoc"),E=u.call(c,"finallyLoc");if(L&&E){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(L){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.tryLoc<=this.prev&&u.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var c=l;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var f=c?c.completion:{};return f.type=t,f.arg=e,c?(this.method="next",this.next=c.finallyLoc,_):this.complete(f)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),n(i),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var l=i.completion;if("throw"===l.type){var c=l.arg;n(i)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:s(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=void 0),_}},m}var p=function(g,u){return null!==u.closest(g)},J=function(g,u){return"string"==typeof g&&g.length>0?Object.assign((0,F.Z)({"ion-color":!0},"ion-color-".concat(g),!0),u):u},S=function(g){var u={};return function(g){return void 0!==g?(Array.isArray(g)?g:g.split(" ")).filter(function(y){return null!=y}).map(function(y){return y.trim()}).filter(function(y){return""!==y}):[]}(g).forEach(function(y){return u[y]=!0}),u},R=/^[a-z][a-z0-9+\-.]*:/,Q=function(){var m=(0,v.Z)(D().mark(function g(u,y,A,M){var I;return D().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(null==u||"#"===u[0]||R.test(u)){z.next=5;break}if(!(I=document.querySelector("ion-router"))){z.next=5;break}return null!=y&&y.preventDefault(),z.abrupt("return",I.push(u,A,M));case 5:return z.abrupt("return",!1);case 6:case"end":return z.stop()}},g)}));return function(u,y,A,M){return m.apply(this,arguments)}}()}}]);