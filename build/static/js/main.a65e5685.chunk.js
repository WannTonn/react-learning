(this["webpackJsonpReact-Learning"]=this["webpackJsonpReact-Learning"]||[]).push([[0],{65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(18),i=c.n(a),s=c(75),r=c(51),o=c(49),d=c(50),j=c(78),l=c(59),u=c(77),b=(c(65),c(9)),O=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),O=s[0],h=s[1],m=Object(n.useRef)(!0);return Object(n.useEffect)((function(){m.current?m.current=!1:localStorage.setItem("TodoItem",JSON.stringify(Object(o.a)(O)))}),[O]),Object(n.useEffect)((function(){var e=localStorage.getItem("TodoItem");e&&h(e?JSON.parse(e):[])}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"title",children:"Todo List"}),Object(b.jsxs)("div",{className:"todoListWrapper",children:[Object(b.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!c)return!1;h([].concat(Object(o.a)(O),[{id:(new Date).getTime(),name:c}])),a("")},children:Object(b.jsxs)("div",{className:"inputWrapper",children:[Object(b.jsx)("input",{className:"todoInput",type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"\u4eca\u5929\u8981\u505a\u4ec0\u4e48\u5462\uff1f"}),Object(b.jsx)("button",{type:"submit",style:{display:"none"}}),Object(b.jsx)("button",{className:"btn",onClick:function(){O.length&&h([])},children:"Clear"})]})}),Object(b.jsx)("div",{className:"todoLists",children:O.map((function(e,t){return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)(u.a,{onChange:function(t){return function(e,t){console.log(e);var c=O.map((function(c){return c.id===t?Object(r.a)(Object(r.a)({},c),{},{isChecked:e}):c}));h(c)}(t,e.id)},className:"switchItem",checked:e.isChecked,checkedChildren:Object(b.jsx)(j.a,{}),unCheckedChildren:Object(b.jsx)(l.a,{}),size:"small"}),Object(b.jsx)("div",{className:"thing ".concat(e.isChecked?"isChecked":""),children:e.name}),Object(b.jsx)("div",{className:"optBox",children:Object(b.jsx)("div",{className:"delBtn",onClick:function(){return t=e.id,void h(O.filter((function(e){return e.id!==t})));var t},children:"\xd7"})})]},e.id)}))})]})]})},h=[{key:1,tab:"TodoList",content:Object(b.jsx)(O,{})}],m=s.a.TabPane,f=function(){return Object(b.jsx)(s.a,{defaultActiveKey:"1",centered:!0,children:h.map((function(e){return Object(b.jsx)(m,{tab:e.tab,children:e.content},e.key)}))})};c(70),c(71);i.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.a65e5685.chunk.js.map