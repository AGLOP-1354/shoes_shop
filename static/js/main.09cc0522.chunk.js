(this.webpackJsonpshop1=this.webpackJsonpshop1||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t);var n=c(18),i=c(0),r=c.n(i),s=c(14),a=c.n(s),j=(c(65),c(41)),o=c(101),d=c(102),l=c(100),h=c(99),b=c(58),p=(c(66),[{id:0,title:"White and Black",content:"Born in France",price:12e4,img:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,img:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,img:"https://codingapple1.github.io/shop/shoes3.jpg"}]),O=c(54),u=c.n(O),x=c(98),m=c(33),g=c(3);var f=Object(m.b)((function(e){return{state:e.reducer,"alert\ub2eb\uae30":e.reducer2}}))((function(e){return Object(g.jsxs)("div",{children:[!0===e.alert\ub2eb\uae30?Object(g.jsxs)("div",{className:".alert",style:{background:"#eee",padding:"20px",margin:"20px"},children:["\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud68c\uc6d020% ",Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null,Object(g.jsxs)(x.a,{responsive:!0,children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(g.jsx)("th",{children:"\uc218\ub7c9"}),Object(g.jsx)("th",{children:"\ubcc0\uacbd"})]}),e.state.map((function(t,c){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.id}),Object(g.jsx)("td",{children:t.name}),Object(g.jsx)("td",{children:t.quan}),Object(g.jsxs)("td",{children:[Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00"})},children:" + "}),Object(g.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c"})},children:" - "})]})]},c)}))]})]})})),v=c(23),y=c(7),k=Object(i.lazy)((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,111))}));function S(e){return Object(g.jsxs)("div",{className:"col-md-4",children:[Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+e.i+".jpg",width:"100%"}),Object(g.jsx)("h4",{children:Object(g.jsx)(v.b,{className:"item-link",to:"/detail/"+(e.i-1),children:e.shoes.title})}),Object(g.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var N=function(){var e=Object(i.useState)(p),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)([10,11,12]),a=Object(j.a)(s,2),O=a[0],x=a[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(o.a.Brand,{href:"#home",children:"ShoeShop"}),Object(g.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(d.a,{className:"ml-auto",children:[Object(g.jsx)(d.a.Link,{as:v.b,to:"/",children:"Home"}),Object(g.jsx)(d.a.Link,{as:v.b,to:"/detail",children:"Detail"}),Object(g.jsxs)(l.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(l.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(l.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(l.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(l.a.Divider,{}),Object(g.jsx)(l.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(g.jsxs)(y.c,{children:[Object(g.jsxs)(y.a,{exact:!0,path:"/",children:[Object(g.jsxs)(h.a,{className:"bg",children:[Object(g.jsx)("h1",{children:"20% Season OFF"}),Object(g.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(g.jsx)("p",{children:Object(g.jsx)(b.a,{variant:"primary",children:"Learn more"})})]}),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(g.jsx)(S,{shoes:c[t],i:t+1},t)}))}),Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){u.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){r([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(g.jsx)(y.a,{path:"/detail/:id",children:Object(g.jsx)(i.Suspense,{fallback:Object(g.jsx)("div",{children:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4"}),children:Object(g.jsx)(k,{shoes:c,"\uc7ac\uace0":O,"\uc7ac\uace0\ubcc0\uacbd":x})})}),Object(g.jsx)(y.a,{path:"/cart",children:Object(g.jsx)(f,{})})]})]})},w=c(29),B=[];var I=Object(w.c)(Object(w.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.payload.id}));if(c>=0){var i=Object(n.a)(e);return i[c].quan++,i}var r=Object(n.a)(e);return r.push(t.payload),r}if("\uc218\ub7c9\uc99d\uac00"==t.type){var s=Object(n.a)(e);return s[0].quan++,s}if("\uc218\ub7c9\uac10\uc18c"==t.type){var a=Object(n.a)(e);return a[0].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"!==t.type&&e}}));a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(v.a,{children:Object(g.jsx)(m.a,{store:I,children:Object(g.jsx)(N,{})})})}),document.getElementById("root")),ServiceWorker.register()}},[[93,1,2]]]);
//# sourceMappingURL=main.09cc0522.chunk.js.map