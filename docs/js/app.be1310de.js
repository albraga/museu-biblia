(function(e){function t(t){for(var o,u,a=t[0],l=t[1],c=t[2],s=0,p=[];s<a.length;s++)u=a[s],r[u]&&p.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1383eeaa"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=u(e),i=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/museu-biblia/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],u=n("2877"),a={},l=Object(u["a"])(a,r,i,!1,null,null,null),c=l.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"})},b=[],v={name:"HelloWorld",props:{msg:String}},m=v,h=Object(u["a"])(m,d,b,!1,null,"64485bb4",null),g=h.exports,w={name:"home",components:{HelloWorld:g}},y=w,j=Object(u["a"])(y,f,p,!1,null,null,null),_=j.exports;o["a"].use(s["a"]);var O=new s["a"]({mode:"history",base:"/museu-biblia/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),k=n("2f62");o["a"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{}}),P=n("9483");Object(P["a"])("".concat("/museu-biblia/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:O,store:x,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.be1310de.js.map