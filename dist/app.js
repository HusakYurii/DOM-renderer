!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o;r.r(t);var u,i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,o=[{key:"render",value:function(t){return t.map((function(t){var r=t.type,a=void 0===r?"div":r,o=t.children,u=void 0===o?[]:o,i=t.attrebutes,l=void 0===i?[]:i,c=t.text,p=void 0===c?"":c,f=document.createElement(a);return l.forEach((function(e){var t=e.name,r=e.value;f.setAttribute(t,r)})),p&&f.append(document.createTextNode(p)),u&&f.append.apply(f,n(e.render(u))),f}))}}],(r=null)&&a(t.prototype,r),o&&a(t,o),e}().render([{type:"div",attrebutes:[{name:"class",value:"wrapper"}],children:[{type:"form",attrebutes:[{name:"id",value:"form"},{name:"method",value:"POST"}],children:[{type:"h3",text:"Let's keep in touch!"},{type:"p",text:"If you are eager to make your party gorgeous and memorable then you should contact us!"},{type:"label",text:"Your Name"},{type:"input",attrebutes:[{name:"type",value:"text"},{name:"name",value:"name"},{name:"placeholder",value:"James Doe"},{name:"required",value:"required"}]},{type:"label",text:"Your e-mail"},{type:"input",attrebutes:[{name:"type",value:"text"},{name:"name",value:"email"},{name:"placeholder",value:"JamesDoe@domain"},{name:"required",value:"required"}]},{type:"label",text:"Your message"},{type:"textarea",attrebutes:[{name:"name",value:"message"},{name:"placeholder",value:"..."},{name:"rows",value:"10"},{name:"required",value:"required"}]},{type:"input",attrebutes:[{name:"type",value:"submit"},{name:"value",value:"Send"}]}]}]}]);(o=document.body).append.apply(o,function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(u=i)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}]);