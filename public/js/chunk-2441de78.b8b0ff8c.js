(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2441de78"],{"84bb":function(t,a,e){t.exports=e.p+"img/logoat.addfcbf1.png"},a55b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container  mx-auto mt-0 justify-content-center align-content-center"},[s("div",{staticClass:"d-grid gap-1 m-4 col-5 mx-auto justify-content-center align-content-center "},[s("img",{attrs:{alt:"logoat",src:e("84bb")}}),s("h1",{staticClass:"m-4"},[t._v("Inicio de sesión")]),s("form",{on:{submit:function(a){return a.preventDefault(),t.login.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.email,expression:"usuario.email"}],staticClass:"form-control my-2",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.usuario.email},on:{input:function(a){a.target.composing||t.$set(t.usuario,"email",a.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.pass,expression:"usuario.pass"}],staticClass:"form-control my-2",attrs:{type:"password",placeholder:"Contraseña"},domProps:{value:t.usuario.pass},on:{input:function(a){a.target.composing||t.$set(t.usuario,"pass",a.target.value)}}}),s("div",{staticClass:"d-grid my-2 "},[s("button",{staticClass:"btn btn-dark btn-md",attrs:{type:"submit"}},[t._v(" Acceder ")]),s("br"),s("button",{staticClass:"btn btn-warning btn-md",attrs:{type:"submit"}},[t._v(" Registrarse ")]),s("br"),s("button",{staticClass:"btn btn-danger btn-md",attrs:{type:"submit"},on:{click:function(a){return t.$router.push("/")}}},[t._v(" Volver ")])])]),""!=t.mensaje?s("div",[s("p",[t._v(t._s(t.mensaje))])]):t._e()])])},n=[],o=e("5530"),i=e("2f62"),r={data:function(){return{usuario:{email:"totaladmin@example.com",pass:"66246"},mensaje:""}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["guardarUsuario"])),{},{login:function(){var t=this;this.axios.post("/login",this.usuario).then((function(a){console.log(a.data);var e=a.data.token;t.guardarUsuario(e)})).catch((function(a){console.log(a.response),t.mensaje=a.response.data.mensaje}))}})},u=r,l=e("2877"),c=Object(l["a"])(u,s,n,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2441de78.b8b0ff8c.js.map