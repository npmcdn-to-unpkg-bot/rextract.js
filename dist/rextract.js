!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(1),c=i(u),h=n(3),f=i(h),l=n(2),y=n(4),p=function(t){function e(t,n){r(this,e);var i=o(this,Object.getPrototypeOf(e).call(this));return i.color=new y.Color(n),i.screen=new f["default"](t),i.canvas=i.screen.canvas,i.ctx=i.screen.ctx,n?i.screen.fix(i.color.toHex()):i.screen.fix("rgba(0,0,0,0)"),i}return a(e,t),s(e,[{key:"detectRegion",value:function(t,e){var n=this.extractRegion(t,e);return n.isValid()?n:null}},{key:"detectAll",value:function(){var t=new l.RegionMap,e=new l.Rect,n=null;for(e.x=1;e.x<this.canvas.width-1;e.x+=2)for(e.y=1;e.y<this.canvas.height-1;e.y+=2)t.isColllision(e)||null!==(n=this.detectRegion(e.x,e.y))&&t.add(n);return this.screen.fixed===!0?t.colorFix():t.data()}}]),e}(c["default"]);e["default"]=p,"undefined"!=typeof window&&(window.Rextract=p)},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(2),a=function(){function t(){i(this,t)}return r(t,[{key:"makeMap",value:function(){var t=this.canvas.width,e=this.canvas.height,n=this.ctx.getImageData(0,0,t,e).data;this.colorMap=new Array(t);for(var i=0;t>i;i++){this.colorMap[i]=new Array(e);for(var r=0;e>r;r++)0===this.color.t?this.colorMap[i][r]=0===n[4*(i+r*t)+3]:this.colorMap[i][r]=n[4*(i+r*t)]===this.color.r&&n[4*(i+r*t)+1]===this.color.g&&n[4*(i+r*t)+2]===this.color.b}}},{key:"extractRegion",value:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?1:arguments[2],i=arguments.length<=3||void 0===arguments[3]?1:arguments[3],r=new o.Rect(t,e,n,i),a={};for("undefined"==typeof this.colorMap&&this.makeMap();(a=this.rectOffset(r))!==!0;)r.patch(a);return r.fix(this.canvas.width,this.canvas.height)}},{key:"rectOffset",value:function(t){return this.isEmptyX(t.x,t.x+t.w,t.y)===!1&&t.y>0?{y:-1}:this.isEmptyY(t.y,t.y+t.h,t.x)===!1&&t.x>0?{x:-1}:this.isEmptyY(t.y,t.y+t.h,t.x+t.w)===!1&&this.canvas.width>t.w?{w:1}:this.isEmptyX(t.x,t.x+t.w,t.y+t.h)===!1&&this.canvas.height>t.h?{h:1}:!0}},{key:"isEmptyX",value:function(t,e,n){for(var i=t;e>i;i++)if(this.isMapEmpty(i,n)===!1)return!1;return!0}},{key:"isEmptyY",value:function(t,e,n){for(var i=t;e>i;i++)if(this.isMapEmpty(n,i)===!1)return!1;return!0}},{key:"isMapEmpty",value:function(t,e){return"undefined"==typeof this.colorMap[t]?!1:this.colorMap[t][e]}}]),t}();e["default"]=a},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RegionMap=function(){function t(){n(this,t),this.map=[]}return i(t,[{key:"add",value:function(t){this.map.push(t)}},{key:"colorFix",value:function(){return this.map.forEach(function(t){t.colorFix()}),this.data()}},{key:"data",value:function(){return this.map}},{key:"isColllision",value:function(t){for(var e=0;e<this.map.length;e++)if(this.map[e].isCollision(t))return!0;return!1}}]),t}(),e.Rect=function(){function t(e,i,r,o){n(this,t),this.x=e||0,this.y=i||0,this.w=r||1,this.h=o||1}return i(t,[{key:"patch",value:function(t){return"number"==typeof t.x&&(this.x+=t.x),"number"==typeof t.y&&(this.y+=t.y),"number"==typeof t.w&&(this.w+=t.w),"number"==typeof t.h&&(this.h+=t.h),this}},{key:"fix",value:function(t,e){return this.x<0&&(this.x=0),this.y<0&&(this.y=0),this.w>t&&(this.w=t),this.h>e&&(this.h=e),this}},{key:"colorFix",value:function(){return this.x>0&&(this.x-=1),this.y>0&&(this.y-=1),this.w-=1,this.h-=1,this}},{key:"toArgs",value:function(){return[this.x,this.y,this.w,this.h]}},{key:"isValid",value:function(){return this.w>1&&this.h>1}},{key:"isCollision",value:function(t){return!(this.y+this.h<t.y||this.y>t.y+t.h||this.x+this.w<t.x||this.x>t.x+t.w)}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){n(this,t),this.fixed=!1,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=e.width,this.canvas.height=e.height,this.ctx.drawImage(e,0,0)}return i(t,[{key:"fix",value:function(t){var e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);this.fixed=!0,this.canvas.width=this.canvas.width+2,this.canvas.height=this.canvas.height+2,this.ctx.save(),this.ctx.putImageData(e,1,1),this.ctx.strokeStyle=t,this.ctx.lineWidth=2,this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height),this.ctx.stroke(),this.ctx.restore()}}]),t}();e["default"]=r},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Color=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(5);e.Color=function(){function t(e){i(this,t),"undefined"==typeof e?(this.r=0,this.g=0,this.b=0,this.t=0):this.parse(e)}return o(t,[{key:"toHex",value:function(){return(0,a.rgbaToHex)(this.r,this.g,this.b)}},{key:"parse",value:function(t){if("string"==typeof t){var e=(0,a.hexToRgba)(t);this.r=e[0],this.g=e[1],this.b=e[2],this.t=255}else"object"===("undefined"==typeof t?"undefined":r(t))&&(this.r=t[0],this.g=t[1],this.b=t[2],this.t=t[3])}}]),t}()},function(t,e){"use strict";t.exports.rgbaToHex=function(t){var e=function(t){return t.map(function(t){var e=(+t).toString(16);return 1==e.length&&(e="0"+e),e}).join("")},n=Array.prototype.slice.call(arguments);return 4==n.length&&(n[3]=Math.floor(255*n[3])),"#"+e(n)},t.exports.hexToRgba=function(t){var e=new RegExp(/^#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})$/i);if(!e.test(t))return!1;var n=t.match(e)[1];3==n.length&&(n=n.match(/./g).map(function(t){return t+t}));var i=n.match(/.{1,2}/g).map(function(t){return parseInt(t,16)});return 4==i.length?i[3]=i[3]/255:i[3]=1,i}}]);