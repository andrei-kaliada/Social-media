(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[4],{471:function(e,a,t){},480:function(e,a,t){"use strict";t.r(a);t(471);var n=t(0),s=t.n(n),c=function(e){var a=e.message;return s.a.createElement("div",{className:"message"},a)},m=t(25),i=function(e){var a=e.name,t=e.id;return s.a.createElement("li",{className:"dialog"},s.a.createElement(m.c,{to:"/dialogs/".concat(t)}," ",a," "))},l=t(179),r=t(180),u=t(126),o=t(98),d=Object(o.b)(10);var g=Object(r.a)({form:"message"})((function(e){var a=e.handleSubmit;return s.a.createElement("form",{onSubmit:a},s.a.createElement("div",null,s.a.createElement(l.a,{component:u.b,placeholder:"Input some message",name:"messageInput",validate:[o.c,d]})),s.a.createElement("button",null,"Send"))}));var b=t(161),f=t(13),E=t(8),p=t(44),v=t(196);a.default=Object(E.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(a){e(Object(b.a)(a)),e(Object(p.a)("message"))}}})),v.a)((function(e){var a=e.dialogsPage,t=e.addMessage;return e.changeMessage,e.isAuth,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"dialogs"},s.a.createElement("ul",{className:"dialogs__items"},a&&a.dialogs.map((function(e){return s.a.createElement(i,{key:e.id,id:e.id,name:e.name})}))),s.a.createElement("div",{className:"dialogs__messages"},a&&a.messages.map((function(e){return s.a.createElement(c,{key:e.id,message:e.message})}))),s.a.createElement("div",{className:"inputMessage"},s.a.createElement(g,{onSubmit:function(e){t(e.messageInput)}}))))}))}}]);
//# sourceMappingURL=4.159b6b2a.chunk.js.map