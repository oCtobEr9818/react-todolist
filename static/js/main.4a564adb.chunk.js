(this.webpackJsonpproject_1=this.webpackJsonpproject_1||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),u=(n(12),n(4)),r=n(7),j=n(17),d=n(0),o=function(t){var e=t.add,n=t.submitStatus,a=Object(c.useState)(""),s=Object(u.a)(a,2),i=s[0],o=s[1];return n.current=!0,Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"\u5099\u5fd8\u9304"}),Object(d.jsx)("p",{children:"\u8a18\u4e8b\uff1a"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}}),Object(d.jsx)("button",{className:"add",onClick:function(){e((function(t){return[{id:Object(j.a)(),note:i}].concat(Object(r.a)(t))}))},children:"\u65b0\u589e"})]})},b=function(t){var e=t.id,n=t.note,c=t.deleteData;return t.submitStatus.current=!0,Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)("button",{onClick:function(){c((function(t){return t.filter((function(t){return t.id!==e}))}))},className:"remove",children:"\u522a\u9664"})]})},l=function(t){var e=t.listData,n=t.deleteData,c=t.submitStatus;return Object(d.jsx)("div",{className:"list",children:e.map((function(t){var e=t.note,a=t.id;return Object(d.jsx)(b,{id:a,note:e,deleteData:n,submitStatus:c},a)}))})},O=(n(14),function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],s=Object(c.useRef)(!1);return Object(c.useEffect)((function(){s.current}),[n]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(o,{add:a,submitStatus:s}),Object(d.jsx)(l,{listData:n,deleteData:a,submitStatus:s})]})});i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a564adb.chunk.js.map