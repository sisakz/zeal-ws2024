!function(){"use strict";var e,t,r,n,o,c={},u={};function a(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return c[e](r,r.exports,a),r.exports}a.m=c,e=[],a.O=function(t,r,n,o){if(!r){var c=1/0;for(i=0;i<e.length;i++){r=e[i][0],n=e[i][1],o=e[i][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||c>=o)&&Object.keys(a.O).every(function(e){return a.O[e](r[s])})?r.splice(s--,1):(u=!1,o<c&&(c=o));u&&(e.splice(i--,1),t=n())}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,n,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var u=2&n&&e;"object"==typeof u&&!~t.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach(function(t){c[t]=function(){return e[t]}});return c.default=function(){return e},a.d(o,c),o},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce(function(t,r){return a.f[r](e,t),t},[]))},a.u=function(e){return e+"-es2017."+{"src_app_custom-elements_announcement-bar_announcement-bar_module_ts":"896af74833256d33fbc2","src_app_custom-elements_api_api-list_module_ts":"2465571a062c2ff6f0cd","src_app_custom-elements_contributor_contributor-list_module_ts":"9633b423e3629aaf553f","src_app_custom-elements_search_file-not-found-search_module_ts":"01258ffbcb6c352e4dc3","src_app_custom-elements_dist-tag_dist-tag_module_ts":"ba5029bda8b76955cb4d","src_app_custom-elements_resource_resource-list_module_ts":"546f3414c4992f439b61","src_app_custom-elements_toc_toc_module_ts":"1337522d0bd53e657011","default-src_app_custom-elements_code_code_component_ts-src_app_custom-elements_code_code_module_ts":"e5b0e6ac83011564705d","src_app_custom-elements_code_code-example_module_ts":"a7158edeb9015da18420","src_app_custom-elements_code_code-tabs_module_ts":"c7f92f2d9d7017e0fe18","src_app_custom-elements_live-example_live-example_module_ts":"2db824c2a257a7ce6115","src_app_custom-elements_events_events_module_ts":"d040a108541937a79fa3",src_assets_js_prettify_js:"f778a94f86f6d1534d00",src_app_search_search_worker_ts:"ca6d8ccf626d66f0980e"}[e]+".js"},a.miniCssF=function(e){return e+"."+{styles:"c376fe19f74dcb0d729c","dark-theme":"413dc9c3263af22dc734","light-theme":"a2a28b749b0cc3f8c546"}[e]+".css"},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},a.l=function(e,t,r,o){if(n[e])n[e].push(t);else{var c,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var f=s[i];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")=="angular.io:"+r){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack","angular.io:"+r),c.src=a.tu(e)),n[e]=[t];var l=function(t,r){c.onerror=c.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach(function(e){return e(r)}),t)return t(r)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.tu=function(e){return void 0===o&&(o={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o.createScriptURL(e)},a.p="",function(){a.b=document.baseURI||self.location.href;var e={runtime:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if("runtime"!=t){var o=new Promise(function(r,o){n=e[t]=[r,o]});r.push(n[2]=o);var c=a.p+a.u(t),u=new Error;a.l(c,function(r){if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}},"chunk-"+t,t)}else e[t]=0},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,c=r[0],u=r[1],s=r[2],i=0;for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(s)var f=s(a);for(t&&t(r);i<c.length;i++)a.o(e,o=c[i])&&e[o]&&e[o][0](),e[c[i]]=0;return a.O(f)},r=self.webpackChunkangular_io=self.webpackChunkangular_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();
//# sourceMappingURL=runtime-es2017.a003c870ae813ea3fd3e.js.map