(this["webpackJsonpReact Tools"]=this["webpackJsonpReact Tools"]||[]).push([[0],{165:function(e,s,c){},168:function(e,s,c){},169:function(e,s,c){},244:function(e,s,c){},267:function(e,s,c){},268:function(e,s,c){"use strict";c.r(s);var t=c(0),i=c(32),n=c.n(i),a=c(3),r=c(7),j=c(5),d=c(278),l=c(107),b=c(58),m=c(275),o=c(277),O=c(89),x=c.n(O),h=(c(165),c(4)),u=function(){var e=Object(t.useState)(""),s=Object(j.a)(e,2),c=s[0],i=s[1],n=Object(t.useState)([]),O=Object(j.a)(n,2),u=O[0],p=O[1],v=Object(t.useRef)(!0);return Object(t.useEffect)((function(){v.current?v.current=!1:localStorage.setItem("TodoItem",JSON.stringify(Object(r.a)(u)))}),[u]),Object(t.useEffect)((function(){var e=localStorage.getItem("TodoItem");e&&p(e?JSON.parse(e):[])}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"title",children:"Todo List"}),Object(h.jsxs)("div",{className:"todoListWrapper",children:[Object(h.jsxs)("div",{className:"inputWrapper",children:[Object(h.jsx)(m.a.TextArea,{autoSize:{minRows:1,maxRows:3},value:c,className:"todoInput",onChange:function(e){return i(e.target.value)},placeholder:"\u8f93\u5165\u4eca\u5929\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u6309\u4e0bctrl \u6216 \u2318 + enter \u7ec4\u5408\u952e\u5373\u53ef",onKeyDown:function(e){(e.metaKey||e.ctrlKey)&&13===e.keyCode&&function(){if(!c)return!1;p([].concat(Object(r.a)(u),[{id:(new Date).getTime(),name:c}])),i("")}()}}),Object(h.jsx)("div",{className:"btn",onClick:function(){u.length&&p([])},children:Object(h.jsx)(d.a,{})})]}),Object(h.jsx)("div",{className:"todoLists",children:u.map((function(e,s){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("p",{className:"date",children:x()(e.id).format("YYYY-MM-DD HH:mm")}),Object(h.jsxs)("div",{className:"itemBox",children:[Object(h.jsx)(o.a,{onChange:function(s){return function(e,s){var c=u.map((function(c){return c.id===s?Object(a.a)(Object(a.a)({},c),{},{isChecked:e}):c}));p(c)}(s,e.id)},className:"switchItem",checked:e.isChecked,checkedChildren:Object(h.jsx)(l.a,{}),unCheckedChildren:Object(h.jsx)(b.a,{}),size:"small"}),Object(h.jsx)("div",{className:"thing ".concat(e.isChecked?"isChecked":""),children:e.name}),Object(h.jsx)("div",{className:"optBox",children:Object(h.jsx)("div",{className:"delBtn",onClick:function(){return s=e.id,void p(u.filter((function(e){return e.id!==s})));var s},children:"\xd7"})})]})]},e.id)}))})]})]})},p=(c(168),function(){return Object(t.useEffect)((function(){var e=document.querySelector(".border-layer");document.querySelector(".calendar").addEventListener("mousemove",(function(s){var c=s.pageX,t=s.pageY,i=e.getBoundingClientRect();e.style.webkitMaskPosition="".concat(c-i.x-80,"px ").concat(t-i.y-80,"px")}))}),[]),Object(h.jsxs)("div",{className:"calendar",children:[Object(h.jsxs)("div",{className:"calendar-header",children:[Object(h.jsx)("div",{className:"week-day",children:"\u4e00"}),Object(h.jsx)("div",{className:"week-day",children:"\u4e8c"}),Object(h.jsx)("div",{className:"week-day",children:"\u4e09"}),Object(h.jsx)("div",{className:"week-day",children:"\u56db"}),Object(h.jsx)("div",{className:"week-day",children:"\u4e94"}),Object(h.jsx)("div",{className:"week-day",children:"\u516d"}),Object(h.jsx)("div",{className:"week-day",children:"\u65e5"})]}),Object(h.jsxs)("div",{className:"calendar-body",children:[Object(h.jsxs)("div",{className:"grid-container border-layer",children:[Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"}),Object(h.jsx)("div",{className:"grid-item"})]}),Object(h.jsxs)("div",{className:"grid-container number-layer",children:[Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"28"}),Object(h.jsx)("span",{children:"\u5341\u56db"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"29"}),Object(h.jsx)("span",{children:"\u5341\u4e94"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"30"}),Object(h.jsx)("span",{children:"\u5341\u516d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"1"}),Object(h.jsx)("span",{children:"\u5341\u4e03"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"2"}),Object(h.jsx)("span",{children:"\u5341\u516b"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"3"}),Object(h.jsx)("span",{children:"\u5341\u4e5d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"4"}),Object(h.jsx)("span",{children:"\u5eff\u5341"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"5"}),Object(h.jsx)("span",{children:"\u5eff\u4e00"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"6"}),Object(h.jsx)("span",{children:"\u5eff\u4e8c"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"7"}),Object(h.jsx)("span",{children:"\u5eff\u4e09"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"8"}),Object(h.jsx)("span",{children:"\u5eff\u56db"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"9"}),Object(h.jsx)("span",{children:"\u5eff\u4e94"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"10"}),Object(h.jsx)("span",{children:"\u5eff\u516d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"11"}),Object(h.jsx)("span",{children:"\u5eff\u4e03"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"12"}),Object(h.jsx)("span",{children:"\u5eff\u516b"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"13"}),Object(h.jsx)("span",{children:"\u5eff\u4e5d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"14"}),Object(h.jsx)("span",{children:"\u521d\u4e00"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"15"}),Object(h.jsx)("span",{children:"\u521d\u4e8c"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"16"}),Object(h.jsx)("span",{children:"\u521d\u4e09"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"17"}),Object(h.jsx)("span",{children:"\u521d\u56db"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"18"}),Object(h.jsx)("span",{children:"\u521d\u4e94"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"19"}),Object(h.jsx)("span",{children:"\u521d\u516d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"20"}),Object(h.jsx)("span",{children:"\u521d\u4e03"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"21"}),Object(h.jsx)("span",{children:"\u521d\u516b"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"22"}),Object(h.jsx)("span",{children:"\u521d\u4e5d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"23"}),Object(h.jsx)("span",{children:"\u521d\u5341"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"24"}),Object(h.jsx)("span",{children:"\u5341\u4e00"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"25"}),Object(h.jsx)("span",{children:"\u5341\u4e8c"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"26"}),Object(h.jsx)("span",{children:"\u5341\u4e09"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"27"}),Object(h.jsx)("span",{children:"\u5341\u56db"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"28"}),Object(h.jsx)("span",{children:"\u5341\u4e94"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"29"}),Object(h.jsx)("span",{children:"\u5341\u516d"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"30"}),Object(h.jsx)("span",{children:"\u5341\u4e03"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"1"}),Object(h.jsx)("span",{children:"\u5341\u516b"})]}),Object(h.jsxs)("div",{className:"grid-item",children:[Object(h.jsx)("span",{children:"2"}),Object(h.jsx)("span",{children:"\u5341\u4e5d"})]})]})]})]})}),v=function(){return Object(h.jsxs)("div",{style:{minHeight:"80vh",width:"80%",margin:"0 auto"},children:[Object(h.jsx)("p",{}),Object(h.jsx)(p,{})]})},g=c(25),N=c(33),f=c(274),y=c(156),w=c(81),k=c(52),C=c(270),Y=c(273),D=(c(169),c(158)),M=function(){var e=f.a.Item,s=f.a.useForm(),c=Object(j.a)(s,1)[0],i=Object(t.useState)([]),n=Object(j.a)(i,2),a=n[0],r=n[1],d=function(){var e=Object(N.a)(Object(g.a)().mark((function e(){var s,t,i,n,a,j;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.validateFields();case 2:if(s=e.sent,t=s.inputVal,i=s.type,n=t.split(","),null===(a=n.filter((function(e){return isNaN(e)})))||void 0===a||!a.length){e.next=9;break}return y.a.error({message:"\u8f93\u5165\u7684\u65f6\u95f4\u6233\u6709\u8bef\uff0c\u8bf7\u68c0\u67e5"}),e.abrupt("return");case 9:j=n.map((function(e){return x()(isNaN(e)?"":e.length<13?e*Math.pow(10,13-e.length):e).format(i)})),r(j);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"title",children:"Date Transfer"}),Object(h.jsxs)(f.a,{form:c,onFinish:d,children:[Object(h.jsx)(e,{name:"inputVal",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u65f6\u95f4\u6233\u54e6, \u9753\u4ed4"},{validateTrigger:"onSubmit",validator:function(e,s){return console.log(e),Promise.resolve()}}],children:Object(h.jsx)(m.a.TextArea,{autoSize:{minRows:2,maxRows:5},placeholder:'\u9753\u4ed4\uff0c\u8bf7\u8f93\u5165\u8981\u8f6c\u6362\u7684\u65f6\u95f4\u6233\uff0c\u6279\u91cf\u8f6c\u6362\u4ee5","\u5206\u9694, ctrl / \u2318 + enter\u63d0\u4ea4',onKeyDown:function(e){(e.metaKey||e.ctrlKey)&&13===e.keyCode&&d()},allowClear:!0})}),Object(h.jsx)(e,{name:"type",initialValue:"YYYY-MM-DD HH:mm:ss",children:Object(h.jsx)(w.a,{options:[{value:"YYYY-MM-DD HH:mm:ss:mss"},{value:"YYYY-MM-DD HH:mm:ss:ms"},{value:"YYYY-MM-DD HH:mm:ss"},{value:"YYYY-MM-DD HH:mm"},{value:"YYYY-MM-DD HH"}],placeholder:"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u683c\u5f0f",onChange:d})}),Object(h.jsx)(k.a,{block:!0,type:"primary",htmlType:"submit",children:"\u51b2"}),Object(h.jsx)(k.a,{block:!0,htmlType:"reset",style:{marginTop:20},children:"\u4e0d\u51b2\u4e86"})]}),null!==a&&void 0!==a&&a.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(C.a,{orientation:"left",children:["\u554a\u54c8\u54c8\u54c8\uff0c\u7ed3\u679c\u6765\u54af  ",Object(h.jsx)(D.a,{onClick:function(){return r([])}})," "]}),Object(h.jsx)(Y.b,{size:"small",bordered:!0,dataSource:a,renderItem:function(e){return Object(h.jsx)(Y.b.Item,{children:e})}})]}):null]})},T=c(18),I=function(){return Object(h.jsx)("div",{children:"404"})},S=c(150),H=c(271),J=c(276),R=(c(244),c(41)),L=c(279),B=c(272),E=c(72),F=c.n(E),K=F.a.create({timeout:6e4,baseURL:"/api"});K.interceptors.request.use((function(e){return e.headers=Object(a.a)({},e.headers),e}),(function(e){return Promise.reject(e)})),K.interceptors.response.use((function(e){return console.log(e),e.data}),(function(e){console.error("\u8bf7\u6c42\u51fa\u9519",e)}));var U=K,W="https://test-bss-api.ziniao.com/payment/upload/file/batch",z=function(e){return console.log(e,e.getAll("file"),9),U({url:W,method:"POST",data:e,headers:{"Content-Type":"multipart/form-data;boundary=----WebKitFormBoundary".concat((new Date).getTime()),token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiMTIyIiwidG9uZ193YW5nIiwiMCJdLCJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxNjcxMjM3LCJpYXQiOjE2NjE2NDk2Mzd9.i_jaXhhSjmJDDqVMAVbQeiPbhCa1iKyRyi7wMAf9CUU",transformRequest:[function(e){return e}]}})},A=c(148),P=Object(S.a)((function(){var e=Object(t.useState)([]),s=Object(j.a)(e,2),c=s[0],i=s[1],n=Object(t.useState)(!1),r=Object(j.a)(n,2),d=r[0],l=r[1],b=Object(t.useState)(""),m=Object(j.a)(b,2),o=m[0],O=m[1],x=Object(t.useState)(""),u=Object(j.a)(x,2),p=u[0],v=u[1],f=Object(t.useState)([]),w=Object(j.a)(f,2),C=w[0],Y=w[1],D=Object(B.a)(z,{onSuccess:function(e){console.log(e),200===e.code&&Y(e.data)},manual:!0}),M=function(e){return new Promise((function(s,c){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){return s("".concat(null===t||void 0===t?void 0:t.result))},t.onerror=function(e){return c(e)}}))},T=function(){var e=Object(N.a)(Object(g.a)().mark((function e(s){var c,t;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.url||s.preview){e.next=4;break}return e.next=3,M(s.originFileObj);case 3:s.preview=e.sent;case 4:O(s.url||s.preview),l(!0),v(s.name||(null===(c=s.url)||void 0===c?void 0:c.substring((null===(t=s.url)||void 0===t?void 0:t.lastIndexOf("/"))+1)));case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(Object(g.a)().mark((function e(s){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s),e.abrupt("return",!1);case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),S={name:"file",multiple:!0,listType:"picture-card",fileList:c,onPreview:T,beforeUpload:I,onChange:function(e){var s=e.fileList;i(s)}},E=Object(h.jsxs)("div",{children:[D.loading?Object(h.jsx)(R.a,{}):Object(h.jsx)(L.a,{}),Object(h.jsx)("div",{style:{marginTop:8},children:"\u70b9\u51fb\u6216\u62d6\u62fd\u56fe\u7247\u8fdb\u884c\u4e0a\u4f20"})]});return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"cardWrapper",children:[Object(h.jsx)("p",{className:"title",children:"Image Uploader"}),Object(h.jsx)("div",{className:"uploadBox",children:Object(h.jsx)(H.a,Object(a.a)(Object(a.a)({},S),{},{children:E}))})]}),Object(h.jsx)(k.a,{block:!0,type:"primary",style:{marginBottom:20},loading:D.loading,onClick:function(){return function(){console.log(c);var e=new FormData;c.forEach((function(s){e.append("file",s.originFileObj)})),D.run(e)}()},disabled:!c.length,children:"\u4e0a\u4f20"}),Object(h.jsx)(k.a,{danger:!0,block:!0,style:{marginBottom:20},onClick:function(){return i([]),Y([])},children:"\u5df2\u590d\u5236\uff0c\u6e05\u7a7a\u6240\u6709"}),null!==C&&void 0!==C&&C.length?Object(h.jsx)("div",{className:"cardWrapper",children:Object(h.jsx)("div",{className:"previewWrapper",children:C.map((function(e){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("img",{src:e,width:"100%",onClick:function(){return O(s=e),l(!0),void v(null===s||void 0===s?void 0:s.substring((null===s||void 0===s?void 0:s.lastIndexOf("/"))+1));var s},alt:"",onError:function(e){console.log(e)}}),Object(h.jsx)("div",{className:"tools",children:Object(h.jsx)(A.CopyToClipboard,{text:"![](".concat(e,")"),onCopy:function(){return y.a.destroy(),y.a.success({message:"\u590d\u5236\u6210\u529f"})},children:Object(h.jsx)(k.a,{children:"\u590d\u5236\u5730\u5740"})})})]})}))})}):null,Object(h.jsx)(J.a,{title:p,visible:d,width:"80vw",footer:null,onCancel:function(){return l(!1)},children:Object(h.jsx)("img",{src:o,width:"100%",height:"100%",alt:""})})]})})),V=[{key:"todolist",path:"/",element:Object(h.jsx)(u,{})},{key:"animation",path:"/animation",element:Object(h.jsx)(v,{})},{key:"any",path:"*",element:Object(h.jsx)(I,{})},{key:"dateTransfer",path:"/dateTransfer",element:Object(h.jsx)(M,{})},{key:"imageUploader",path:"/imageUploader",element:Object(h.jsx)(P,{})}],q=function(){return Object(h.jsx)(T.c,{children:V.map((function(e){return Object(h.jsx)(T.a,{path:e.path,element:e.element},e.key)}))})},X=c(120);c(266),c(267);n.a.render(Object(h.jsx)(X.a,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[268,1,2]]]);
//# sourceMappingURL=main.8e2fa8f5.chunk.js.map