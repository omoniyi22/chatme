(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(8),c=n.n(s),i=n(16),u=n(17),o=n(22),l=n(20),m=(n(29),n(7)),d=function(e){var t=e.users;return r.a.createElement("aside",{id:"sidebar",className:"sidebar"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))))},E=Object(m.b)((function(e){return{users:e.users}}),{})(d),f=function(e){var t=e.message,n=e.author;return r.a.createElement("div",{style:{border:"solid grey 1.5px",margin:"4px",padding:"9px",borderRadius:"10px",maxWidth:"fit-content",marginLeft:"me"!=n?"0px":"auto"}},r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("small",null,r.a.createElement("b",null,n,":")),r.a.createElement("i",null,' " ',t,' "'))))},p=function(e){var t=e.messages;return r.a.createElement("section",{id:"message-list"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",minWidth:"100%"}},t.map((function(e){return r.a.createElement(f,Object.assign({Key:e.id},e))}))))},g=Object(m.b)((function(e){return{messages:e.messages}}),{})(p),S=0,b=0,h=function(e){var t;return r.a.createElement("section",{id:"new-message"},r.a.createElement("input",{onKeyPress:function(n){"Enter"===n.key&&(e.dispatch(t.value,"Me"),t.value="")},type:"text",ref:function(e){t=e}}))},y=Object(m.b)((function(){return{}}),(function(e){return{dispatch:function(t,n){e(function(e,t){return{type:"ADD_MESSAGE",id:S++,message:e,author:t}}(t,n))}}}))(h),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement("aside",{id:"sidebar"},r.a.createElement(E,null)),r.a.createElement("section",{id:"main"},r.a.createElement("section",{id:"messages-list"},r.a.createElement(g,null)),r.a.createElement("section",{id:"new-message"},r.a.createElement(y,null))))}}]),n}(a.Component),D=n(6),O=n(21),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":case"MESSAGE_RECEIVED":return e.concat({message:t.message,author:t.author,id:t.id});default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return console.log("action"),e.concat([{name:t.name,id:t.id}]);case"USERS_LIST":return t.users;default:return e}},j=Object(D.c)({messages:x,users:A}),_=function(e,t){var n=new WebSocket("ws://localhost:3001");return n.onopen=function(){n.send(JSON.stringify({type:"ADD_USER",name:t}))},n.onmessage=function(t){var n,a,r,s=JSON.parse(t.data);switch(s.type){case"ADD_MESSAGE":e((a=s.message,r=s.author,{type:"MESSAGE_RECEIVED",id:S++,message:a,author:r}));break;case"ADD_USER":e((n=s.name,console.log(n),{type:"ADD_USER",id:b++,name:n}));break;case"USERS_LIST":e({type:"USERS_LIST",users:s.users})}},n},w=n(13),k=n.n(w),R=n(23),M=k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)("ADD_MESSAGE",(function(e){e.author=t.username,t.socket.send(JSON.stringify(e))}));case 2:case"end":return e.stop()}}),e)})),U=n(19),G=(new(n.n(U).a)).first(),I=Object(O.a)(),J=Object(D.e)(j,Object(D.a)(I)),L=_(J.dispatch,G);I.run(M,{socket:L,username:G}),c.a.render(r.a.createElement(m.a,{store:J},r.a.createElement(v,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4d245b73.chunk.js.map