(this.webpackJsonpsmall_blog=this.webpackJsonpsmall_blog||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(19),s=n.n(r),a=n(15),o=(n(27),n(1)),i=(n(21),n(8)),u=n.n(i),p=n(12),j=n(22),l="https://bloggy-api.herokuapp.com/",h=function(){var t=Object(p.a)(u.a.mark((function t(e){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(l).concat(e));case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 5:return t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b="posts",f=function(t){return e=b,n=t,fetch("".concat(l).concat(e,"/").concat(n),{method:"DELETE"});var e,n},d=(n(29),n(3));function x(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(p.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("posts");case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(d.jsx)("ul",{className:"PostList",children:n.map((function(t){return Object(d.jsxs)("li",{className:"PostList__item",children:[Object(d.jsx)("h2",{children:t.title}),Object(d.jsx)("p",{children:t.body}),Object(d.jsx)("button",{name:t.id,type:"button",onClick:function(t){var e=t.target;f(e.name),r(n.filter((function(t){return t.id!==+e.name})))},children:"X"})]},t.id)}))})}n(31);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{path:"/posts",children:[Object(d.jsx)("h1",{children:"Posts"}),Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(x,{})})]})})};s.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.340354d4.chunk.js.map