(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0727d3fc":"67429232","chunk-2441de78":"aab7bd84","chunk-332790ba":"99d1d681","chunk-3a4f0f9a":"83915453","chunk-7a2d3e9c":"bef0d668","chunk-917b9cde":"8c6a9943","chunk-d53b72aa":"0aa893a4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[e.estaActivo?e._e():n("router-link",{attrs:{to:"/login"}}),e.estaActivo?n("a",{on:{click:function(t){return e.cerrarSesion()}}}):e._e()],1),n("router-view")],1)},a=[],u=n("5530"),c=n("2f62"),i={methods:Object(u["a"])({},Object(c["b"])(["cerrarSesion","leerToken"])),computed:Object(u["a"])({},Object(c["c"])(["estaActivo"])),created:function(){this.leerToken()}},s=i,l=(n("034f"),n("2877")),f=Object(l["a"])(s,o,a,!1,null,null,null),d=f.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=(n("bb51"),n("1232"));r["default"].use(c["a"]);var b=new c["a"].Store({state:{token:"",usuarioDB:""},mutations:{obtenerUsuario:function(e,t){e.token=t,""===t?e.usuarioDB="":(e.usuarioDB=Object(m["a"])(t),v.push({name:"Home"}))}},actions:{guardarUsuario:function(e,t){var n=e.commit;localStorage.setItem("token",t),n("obtenerUsuario",t),v.push({name:"menu"})},cerrarSesion:function(e){var t=e.commit;t("obtenerUsuario",""),localStorage.removeItem("token"),v.push({name:"login"})},leerToken:function(e){var t=e.commit,n=localStorage.getItem("token");t("obtenerUsuario",n||"")}},getters:{estaActivo:function(e){return!!e.token}}});r["default"].use(p["a"]);var h=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/notas",name:"notas",component:function(){return n.e("chunk-0727d3fc").then(n.bind(null,"c93e"))},meta:{requiereAuth:!0}},{path:"/login",name:"login",component:function(){return n.e("chunk-2441de78").then(n.bind(null,"a55b"))}},{path:"/menu",name:"menu",component:function(){return n.e("chunk-d53b72aa").then(n.bind(null,"9a0b"))}},{path:"/registro",name:"registro",component:function(){return n.e("chunk-917b9cde").then(n.bind(null,"0d36"))}},{path:"/area",name:"area",component:function(){return n.e("chunk-3a4f0f9a").then(n.bind(null,"2013"))}},{path:"/hora",name:"hora",component:function(){return n.e("chunk-332790ba").then(n.bind(null,"c648"))}},{path:"/agenda",name:"agenda",component:function(){return n.e("chunk-7a2d3e9c").then(n.bind(null,"1d38"))}}]});h.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requireAuth}));r&&""===b.state.token?n({name:"menu"}):n()}));var v=h,g=n("5f5b"),k=(n("f9e3"),n("2dd8"),n("bc3a")),y=n.n(k),j=n("130e");r["default"].use(g["a"]),y.a.defaults.baseURL="https://coldream.herokuapp.com/api",r["default"].use(j["a"],y.a),r["default"].config.productionTip=!1,new r["default"]({router:v,store:b,render:function(e){return e(d)}}).$mount("#app")},"74cc":function(e,t,n){e.exports=n.p+"img/logoap.718622d9.png"},"85ec":function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto mt-0"},[r("div",{staticClass:"d-grid gap-0 col-5  mx-auto justify-content-center align-content-center "},[r("img",{attrs:{alt:"logoap",src:n("74cc")}}),r("h2",{staticClass:"text-center "},[e._v('Gestor Administrativo Para Plataformas Web "ColDream"')]),r("br"),r("button",{staticClass:"btn btn-lg btn-md btn-primary  mb-5 ",attrs:{type:"button"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("Inicio")])])])},o=[],a={name:"Home",components:{}},u=a,c=n("2877"),i=Object(c["a"])(u,r,o,!1,null,null,null);t["default"]=i.exports}});
//# sourceMappingURL=app.ecf28110.js.map