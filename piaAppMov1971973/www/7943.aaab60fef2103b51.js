"use strict";(self.webpackChunkpia=self.webpackChunkpia||[]).push([[7943],{7943:function(Q,B,_){_.r(B),_.d(B,{pwa_camera:function(){return Y}});var x=_(5861),G=_(5671),Z=_(3144),u=_(6738);function w(){w=function(){return y};var y={},h=Object.prototype,t=h.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",r=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function i(n,e,o){return Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{i({},"")}catch(n){i=function(o,l,f){return o[l]=f}}function m(n,e,o,l){var C,E,v,k,d=Object.create((e&&e.prototype instanceof O?e:O).prototype),g=new N(l||[]);return d._invoke=(C=n,E=o,v=g,k="suspendedStart",function(b,$){if("executing"===k)throw new Error("Generator is already running");if("completed"===k){if("throw"===b)throw $;return{value:void 0,done:!0}}for(v.method=b,v.arg=$;;){var K=v.delegate;if(K){var j=V(K,v);if(j){if(j===p)continue;return j}}if("next"===v.method)v.sent=v._sent=v.arg;else if("throw"===v.method){if("suspendedStart"===k)throw k="completed",v.arg;v.dispatchException(v.arg)}else"return"===v.method&&v.abrupt("return",v.arg);k="executing";var P=M(C,E,v);if("normal"===P.type){if(k=v.done?"completed":"suspendedYield",P.arg===p)continue;return{value:P.arg,done:v.done}}"throw"===P.type&&(k="completed",v.method="throw",v.arg=P.arg)}}),d}function M(n,e,o){try{return{type:"normal",arg:n.call(e,o)}}catch(l){return{type:"throw",arg:l}}}y.wrap=m;var p={};function O(){}function L(){}function F(){}var A={};i(A,a,function(){return this});var T=Object.getPrototypeOf,D=T&&T(T(R([])));D&&D!==h&&t.call(D,a)&&(A=D);var S=F.prototype=O.prototype=Object.create(A);function H(n){["next","throw","return"].forEach(function(e){i(n,e,function(o){return this._invoke(e,o)})})}function I(n,e){function o(f,d,g,C){var E=M(n[f],n,d);if("throw"!==E.type){var v=E.arg,k=v.value;return k&&"object"==typeof k&&t.call(k,"__await")?e.resolve(k.__await).then(function(b){o("next",b,g,C)},function(b){o("throw",b,g,C)}):e.resolve(k).then(function(b){v.value=b,g(v)},function(b){return o("throw",b,g,C)})}C(E.arg)}var l;this._invoke=function(f,d){function g(){return new e(function(C,E){o(f,d,C,E)})}return l=l?l.then(g,g):g()}}function V(n,e){var o=n.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,V(n,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var l=M(o,n.iterator,e.arg);if("throw"===l.type)return e.method="throw",e.arg=l.arg,e.delegate=null,p;var f=l.arg;return f?f.done?(e[n.resultName]=f.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):f:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function J(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function U(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function N(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(J,this),this.reset(!0)}function R(n){if(n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,l=function f(){for(;++o<n.length;)if(t.call(n,o))return f.value=n[o],f.done=!1,f;return f.value=void 0,f.done=!0,f};return l.next=l}}return{next:W}}function W(){return{value:void 0,done:!0}}return L.prototype=F,i(S,"constructor",F),i(F,"constructor",L),L.displayName=i(F,c,"GeneratorFunction"),y.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},y.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,F):(n.__proto__=F,i(n,c,"GeneratorFunction")),n.prototype=Object.create(S),n},y.awrap=function(n){return{__await:n}},H(I.prototype),i(I.prototype,r,function(){return this}),y.AsyncIterator=I,y.async=function(n,e,o,l,f){void 0===f&&(f=Promise);var d=new I(m(n,e,o,l),f);return y.isGeneratorFunction(e)?d:d.next().then(function(g){return g.done?g.value:d.next()})},H(S),i(S,c,"Generator"),i(S,a,function(){return this}),i(S,"toString",function(){return"[object Generator]"}),y.keys=function(n){var e=[];for(var o in n)e.push(o);return e.reverse(),function l(){for(;e.length;){var f=e.pop();if(f in n)return l.value=f,l.done=!1,l}return l.done=!0,l}},y.values=R,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(U),!e)for(var o in this)"t"===o.charAt(0)&&t.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function l(v,k){return g.type="throw",g.arg=e,o.next=v,k&&(o.method="next",o.arg=void 0),!!k}for(var f=this.tryEntries.length-1;f>=0;--f){var d=this.tryEntries[f],g=d.completion;if("root"===d.tryLoc)return l("end");if(d.tryLoc<=this.prev){var C=t.call(d,"catchLoc"),E=t.call(d,"finallyLoc");if(C&&E){if(this.prev<d.catchLoc)return l(d.catchLoc,!0);if(this.prev<d.finallyLoc)return l(d.finallyLoc)}else if(C){if(this.prev<d.catchLoc)return l(d.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally");if(this.prev<d.finallyLoc)return l(d.finallyLoc)}}}},abrupt:function(e,o){for(var l=this.tryEntries.length-1;l>=0;--l){var f=this.tryEntries[l];if(f.tryLoc<=this.prev&&t.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var d=f;break}}d&&("break"===e||"continue"===e)&&d.tryLoc<=o&&o<=d.finallyLoc&&(d=null);var g=d?d.completion:{};return g.type=e,g.arg=o,d?(this.method="next",this.next=d.finallyLoc,p):this.complete(g)},complete:function(e,o){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&o&&(this.next=o),p},finish:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o];if(l.finallyLoc===e)return this.complete(l.completion,l.afterLoc),U(l),p}},catch:function(e){for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o];if(l.tryLoc===e){var f=l.completion;if("throw"===f.type){var d=f.arg;U(l)}return d}}throw new Error("illegal catch attempt")},delegateYield:function(e,o,l){return this.delegate={iterator:R(e),resultName:o,nextLoc:l},"next"===this.method&&(this.arg=void 0),p}},y}var z=window.ImageCapture;void 0===z&&(z=function(){function y(h){var t=this;if((0,G.Z)(this,y),"video"!==h.kind)throw new DOMException("NotSupportedError");this._videoStreamTrack=h,"readyState"in this._videoStreamTrack||(this._videoStreamTrack.readyState="live"),this._previewStream=new MediaStream([h]),this.videoElement=document.createElement("video"),this.videoElementPlaying=new Promise(function(s){t.videoElement.addEventListener("playing",s)}),HTMLMediaElement?this.videoElement.srcObject=this._previewStream:this.videoElement.src=URL.createObjectURL(this._previewStream),this.videoElement.muted=!0,this.videoElement.setAttribute("playsinline",""),this.videoElement.play(),this.canvasElement=document.createElement("canvas"),this.canvas2dContext=this.canvasElement.getContext("2d")}return(0,Z.Z)(y,[{key:"videoStreamTrack",get:function(){return this._videoStreamTrack}},{key:"getPhotoCapabilities",value:function(){return new Promise(function(s,a){var r={current:0,min:0,max:0};s({exposureCompensation:r,exposureMode:"none",fillLightMode:["none"],focusMode:"none",imageHeight:r,imageWidth:r,iso:r,redEyeReduction:!1,whiteBalanceMode:"none",zoom:r}),a(new DOMException("OperationError"))})}},{key:"setOptions",value:function(){return new Promise(function(a,r){})}},{key:"takePhoto",value:function(){var t=this;return new Promise(function(a,r){if("live"!==t._videoStreamTrack.readyState)return r(new DOMException("InvalidStateError"));t.videoElementPlaying.then(function(){try{t.canvasElement.width=t.videoElement.videoWidth,t.canvasElement.height=t.videoElement.videoHeight,t.canvas2dContext.drawImage(t.videoElement,0,0),t.canvasElement.toBlob(a)}catch(c){r(new DOMException("UnknownError"))}})})}},{key:"grabFrame",value:function(){var t=this;return new Promise(function(a,r){if("live"!==t._videoStreamTrack.readyState)return r(new DOMException("InvalidStateError"));t.videoElementPlaying.then(function(){try{t.canvasElement.width=t.videoElement.videoWidth,t.canvasElement.height=t.videoElement.videoHeight,t.canvas2dContext.drawImage(t.videoElement,0,0),a(window.createImageBitmap(t.canvasElement))}catch(c){r(new DOMException("UnknownError"))}})})}}]),y}()),window.ImageCapture=z;var Y=function(){function y(h){var t=this;(0,G.Z)(this,y),(0,u.r)(this,h),this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image",this.showShutterOverlay=!1,this.flashIndex=0,this.hasCamera=null,this.rotation=0,this.deviceError=null,this.hasMultipleCameras=!1,this.hasFlash=!1,this.flashModes=[],this.flashMode="off",this.handlePickFile=function(s){},this.handleShutterClick=function(s){console.debug("shutter click"),t.capture()},this.handleRotateClick=function(s){t.rotate()},this.handleClose=function(s){t.handlePhoto&&t.handlePhoto(null)},this.handleFlashClick=function(s){t.cycleFlash()},this.handleCancelPhoto=function(s){var a=t.stream&&t.stream.getTracks()[0],r=a&&a.getConstraints();t.photo=null,t.photoSrc=null,r?t.initCamera({video:{facingMode:r.facingMode}}):t.initCamera()},this.handleAcceptPhoto=function(s){t.handlePhoto&&t.handlePhoto(t.photo)},this.handleFileInputChange=function(){var s=(0,x.Z)(w().mark(function a(r){var i,m;return w().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i=r.target.files[0],p.prev=2,p.next=5,t.getOrientation(i);case 5:m=p.sent,console.debug("Got orientation",m),t.photoOrientation=m,p.next=12;break;case 10:p.prev=10,p.t0=p.catch(2);case 12:t.handlePhoto&&t.handlePhoto(i);case 13:case"end":return p.stop()}},a,null,[[2,10]])}));return function(a){return s.apply(this,arguments)}}(),this.handleVideoMetadata=function(s){console.debug("Video metadata",s)},this.isServer=(0,u.d)(this,"isServer")}return(0,Z.Z)(y,[{key:"componentDidLoad",value:(h=(0,x.Z)(w().mark(function s(){return w().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.isServer){r.next=2;break}return r.abrupt("return");case 2:return this.defaultConstraints={video:{facingMode:this.facingMode}},r.next=5,this.queryDevices();case 5:return r.next=7,this.initCamera();case 7:case"end":return r.stop()}},s,this)})),function t(){return h.apply(this,arguments)})},{key:"componentDidUnload",value:function(){this.stopStream(),this.photoSrc&&URL.revokeObjectURL(this.photoSrc)}},{key:"hasImageCapture",value:function(){return"ImageCapture"in window}},{key:"queryDevices",value:function(){var h=(0,x.Z)(w().mark(function s(){var r;return w().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,navigator.mediaDevices.enumerateDevices();case 3:r=i.sent.filter(function(m){return"videoinput"==m.kind}),this.hasCamera=!!r.length,this.hasMultipleCameras=r.length>1,i.next=12;break;case 9:i.prev=9,i.t0=i.catch(0),this.deviceError=i.t0;case 12:case"end":return i.stop()}},s,this,[[0,9]])}));return function t(){return h.apply(this,arguments)}}()},{key:"initCamera",value:function(){var h=(0,x.Z)(w().mark(function s(a){return w().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a||(a=this.defaultConstraints),i.prev=1,i.next=4,navigator.mediaDevices.getUserMedia(Object.assign({video:!0,audio:!1},a));case 4:this.initStream(i.sent),i.next=12;break;case 8:i.prev=8,i.t0=i.catch(1),this.deviceError=i.t0,this.handleNoDeviceError&&this.handleNoDeviceError(i.t0);case 12:case"end":return i.stop()}},s,this,[[1,8]])}));return function t(s){return h.apply(this,arguments)}}()},{key:"initStream",value:function(){var h=(0,x.Z)(w().mark(function s(a){return w().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(this.stream=a,this.videoElement.srcObject=a,!this.hasImageCapture()){c.next=8;break}return this.imageCapture=new window.ImageCapture(a.getVideoTracks()[0]),c.next=6,this.initPhotoCapabilities(this.imageCapture);case 6:c.next=10;break;case 8:this.deviceError="No image capture",this.handleNoDeviceError&&this.handleNoDeviceError();case 10:this.el.forceUpdate();case 11:case"end":return c.stop()}},s,this)}));return function t(s){return h.apply(this,arguments)}}()},{key:"initPhotoCapabilities",value:function(){var h=(0,x.Z)(w().mark(function s(a){var r;return w().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a.getPhotoCapabilities();case 2:(r=i.sent).fillLightMode&&r.fillLightMode.length>1&&(this.flashModes=r.fillLightMode.map(function(m){return m}),this.flashMode?(this.flashMode=this.flashModes[this.flashModes.indexOf(this.flashMode)]||"off",this.flashIndex=this.flashModes.indexOf(this.flashMode)||0):this.flashIndex=0);case 4:case"end":return i.stop()}},s,this)}));return function t(s){return h.apply(this,arguments)}}()},{key:"stopStream",value:function(){this.videoElement&&(this.videoElement.srcObject=null),this.stream&&this.stream.getTracks().forEach(function(t){return t.stop()})}},{key:"capture",value:function(){var h=(0,x.Z)(w().mark(function s(){var a;return w().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!this.hasImageCapture()){c.next=13;break}return c.prev=1,c.next=4,this.imageCapture.takePhoto({fillLightMode:this.flashModes.length>1?this.flashMode:void 0});case 4:return a=c.sent,c.next=7,this.flashScreen();case 7:this.promptAccept(a),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.error("Unable to take photo!",c.t0);case 13:this.stopStream();case 14:case"end":return c.stop()}},s,this,[[1,10]])}));return function t(){return h.apply(this,arguments)}}()},{key:"promptAccept",value:function(){var h=(0,x.Z)(w().mark(function s(a){var r;return w().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return this.photo=a,i.next=3,this.getOrientation(a);case 3:if(r=i.sent,console.debug("Got orientation",r),this.photoOrientation=r,!r){i.next=18;break}i.t0=r,i.next=1===i.t0||2===i.t0?10:3===i.t0||4===i.t0?12:5===i.t0||6===i.t0?14:7===i.t0||8===i.t0?16:18;break;case 10:return this.rotation=0,i.abrupt("break",18);case 12:return this.rotation=180,i.abrupt("break",18);case 14:return this.rotation=90,i.abrupt("break",18);case 16:return this.rotation=270,i.abrupt("break",18);case 18:this.photoSrc=URL.createObjectURL(a);case 19:case"end":return i.stop()}},s,this)}));return function t(s){return h.apply(this,arguments)}}()},{key:"getOrientation",value:function(t){return new Promise(function(s){var a=new FileReader;a.onload=function(r){var c=new DataView(r.target.result);if(65496!==c.getUint16(0,!1))return s(-2);for(var i=c.byteLength,m=2;m<i;){var M=c.getUint16(m,!1);if(m+=2,65505===M){if(1165519206!==c.getUint32(m+=2,!1))return s(-1);var p=18761===c.getUint16(m+=6,!1);m+=c.getUint32(m+4,p);var O=c.getUint16(m,p);m+=2;for(var L=0;L<O;L++)if(274===c.getUint16(m+12*L,p))return s(c.getUint16(m+12*L+8,p))}else{if(65280!=(65280&M))break;m+=c.getUint16(m,!1)}}return s(-1)},a.readAsArrayBuffer(t.slice(0,65536))})}},{key:"rotate",value:function(){this.stopStream();var t=this.stream&&this.stream.getTracks()[0];if(t){var a=t.getConstraints().facingMode;if(!a){var r=t.getCapabilities();r.facingMode&&(a=r.facingMode[0])}this.initCamera("environment"===a?{video:{facingMode:"user"}}:{video:{facingMode:"environment"}})}}},{key:"setFlashMode",value:function(t){console.debug("New flash mode: ",t),this.flashMode=t}},{key:"cycleFlash",value:function(){this.flashModes.length>0&&(this.flashIndex=(this.flashIndex+1)%this.flashModes.length,this.setFlashMode(this.flashModes[this.flashIndex]))}},{key:"flashScreen",value:function(){var h=(0,x.Z)(w().mark(function s(){var a=this;return w().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",new Promise(function(i,m){a.showShutterOverlay=!0,setTimeout(function(){a.showShutterOverlay=!1,i()},100)}));case 1:case"end":return c.stop()}},s)}));return function t(){return h.apply(this,arguments)}}()},{key:"iconExit",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconPhotos",value:function(){return(0,u.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},(0,u.h)("path",{d:"M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z"}),(0,u.h)("path",{d:"M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z"}))}},{key:"iconConfirm",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconReverseCamera",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconRetake",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOff",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"iconFlashOn",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E"}},{key:"iconFlashAuto",value:function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E"}},{key:"render",value:function(){var t=this;return(0,u.h)("div",{class:"camera-wrapper"},(0,u.h)("div",{class:"camera-header"},(0,u.h)("section",{class:"items"},(0,u.h)("div",{class:"item close",onClick:function(r){return t.handleClose(r)}},(0,u.h)("img",{src:this.iconExit()})),(0,u.h)("div",{class:"item flash",onClick:function(r){return t.handleFlashClick(r)}},this.flashModes.length>0&&(0,u.h)("div",null,"off"==this.flashMode?(0,u.h)("img",{src:this.iconFlashOff()}):"","auto"==this.flashMode?(0,u.h)("img",{src:this.iconFlashAuto()}):"","flash"==this.flashMode?(0,u.h)("img",{src:this.iconFlashOn()}):"")))),(!1===this.hasCamera||!!this.deviceError)&&(0,u.h)("div",{class:"no-device"},(0,u.h)("h2",null,this.noDevicesText),(0,u.h)("label",{htmlFor:"_pwa-elements-camera-input"},this.noDevicesButtonText),(0,u.h)("input",{type:"file",id:"_pwa-elements-camera-input",onChange:this.handleFileInputChange,accept:"image/*",class:"select-file-button"})),this.photoSrc?(0,u.h)("div",{class:"accept"},(0,u.h)("div",{class:"accept-image",style:Object.assign({backgroundImage:"url(".concat(this.photoSrc,")")},{})})):(0,u.h)("div",{class:"camera-video"},this.showShutterOverlay&&(0,u.h)("div",{class:"shutter-overlay"}),this.hasImageCapture()?(0,u.h)("video",{ref:function(r){return t.videoElement=r},onLoadedMetaData:this.handleVideoMetadata,autoplay:!0,playsinline:!0}):(0,u.h)("canvas",{ref:function(r){return t.canvasElement=r},width:"100%",height:"100%"}),(0,u.h)("canvas",{class:"offscreen-image-render",ref:function(r){return t.offscreenCanvas=r},width:"100%",height:"100%"})),this.hasCamera&&(0,u.h)("div",{class:"camera-footer"},this.photo?(0,u.h)("section",{class:"items"},(0,u.h)("div",{class:"item accept-cancel",onClick:function(r){return t.handleCancelPhoto(r)}},(0,u.h)("img",{src:this.iconRetake()})),(0,u.h)("div",{class:"item accept-use",onClick:function(r){return t.handleAcceptPhoto(r)}},(0,u.h)("img",{src:this.iconConfirm()}))):[(0,u.h)("div",{class:"pick-image",onClick:this.handlePickFile},(0,u.h)("label",{htmlFor:"_pwa-elements-file-pick"},this.iconPhotos()),(0,u.h)("input",{type:"file",id:"_pwa-elements-file-pick",onChange:this.handleFileInputChange,accept:"image/*",class:"pick-image-button"})),(0,u.h)("div",{class:"shutter",onClick:this.handleShutterClick},(0,u.h)("div",{class:"shutter-button"})),(0,u.h)("div",{class:"rotate",onClick:this.handleRotateClick},(0,u.h)("img",{src:this.iconReverseCamera()}))]))}},{key:"el",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["icons"]}},{key:"style",get:function(){return":host{--header-height:4em;--footer-height:9em;--header-height-landscape:3em;--footer-height-landscape:6em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,\u201cSegoe UI\u201d,\u201cRoboto\u201d,\u201cDroid Sans\u201d,\u201cHelvetica Neue\u201d,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}@media (max-height:375px){.camera-header{--header-height:var(--header-height-landscape)}.camera-footer{--footer-height:var(--footer-height-landscape)}.camera-footer .shutter{--shutter-size:4em}}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.pick-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:var(--margin-size-footer);top:0;height:100%;width:var(--icon-size-footer);color:#fff}.pick-image input{visibility:hidden}.pick-image svg{cursor:pointer;fill:#fff;width:var(--icon-size-footer);height:var(--icon-size-footer)}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;-ms-flex-pack:center;-ms-flex-align:center}.error,.no-device{color:#fff;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.no-device{background-color:#000;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center}.no-device label{cursor:pointer;background:#fff;border-radius:6px;padding:6px 8px;color:#000}.no-device input{visibility:hidden;height:0;margin-top:16px}.accept{background-color:#000;-ms-flex:1;flex:1;overflow:hidden}.accept .accept-image{width:100%;height:100%;max-height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img{cursor:pointer}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"}}]),y;var h}()}}]);