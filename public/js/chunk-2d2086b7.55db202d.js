(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"container"},[s("h1",[a._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),a.login.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.email,expression:"usuario.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"Email"},domProps:{value:a.usuario.email},on:{input:function(e){e.target.composing||a.$set(a.usuario,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.pass,expression:"usuario.pass"}],staticClass:"form-control my-2",attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:a.usuario.pass},on:{input:function(e){e.target.composing||a.$set(a.usuario,"pass",e.target.value)}}}),s("b-button",{staticClass:"btn-block btn-success btn-lg my-2",attrs:{type:"submit"}},[a._v("Acceder")])],1),""!=a.mensaje?s("div",[s("p",[a._v(a._s(a.mensaje))])]):a._e()])},o=[],n=s("5530"),i=s("2f62"),r={data:function(){return{usuario:{email:"totaladmin@example.com",pass:"66246"},mensaje:""}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["guardarUsuario"])),{},{login:function(){var a=this;this.axios.post("/login",this.usuario).then((function(e){console.log(e.data);var s=e.data.token;a.guardarUsuario(s)})).catch((function(e){console.log(e.response),a.mensaje=e.response.data.mensaje}))}})},u=r,l=s("2877"),c=Object(l["a"])(u,t,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.55db202d.js.map