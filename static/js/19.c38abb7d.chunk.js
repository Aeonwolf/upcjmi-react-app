(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[19],{373:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},535:function(e,t,n){"use strict";n(208);var a=n(143),r=n(0),c=n.n(r),i=n(23),l=n(150);t.a=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{}}))((function(e){var t=e.isAuthenticated;return c.a.createElement("div",{className:"full-page center-hv"},c.a.createElement(a.a,{status:"403",title:"403",subTitle:t?"Sorry, but you dont have permission to view this screen.":"You need to sign in to view this screen.",extra:t?"Try signing out and signing in with different account.":c.a.createElement(l.a,null)}))}))},540:function(e,t,n){},628:function(e,t,n){"use strict";var a=n(373),r=n(0),c=n.n(r),i=n(23),l=n(18),o=n(49),u=n(535),s=(n(208),n(143)),m=(n(138),n(82)),d=(n(72),n(40)),f=n(15),p=n.n(f),b=n(31),h=n(76),v=function(e){var t=e.email,n=Object(r.useState)("sent"),i=Object(a.a)(n,2),l=i[0],o=i[1],u=Object(r.useState)(12e4),s=Object(a.a)(u,2),m=s[0],f=s[1];switch(Object(r.useEffect)((function(){setTimeout((function(){f(2*m),o("not-sent")}),m)}),[m,l]),l){case"not-sent":case"sending":return c.a.createElement(d.a,{icon:"mail",onClick:Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o("sending"),e.next=4,Object(h.e)();case 4:o("sent"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),loading:"sending"===l},"sending"===l?"Sending you mail":"Send Verification Mail");case"error":return"An error occured while sending your verification mail. Try again later.";default:return c.a.createElement("div",{style:{textAlign:"center"}},"Sent you a mail on \xa0",t,c.a.createElement("br",null),"Retry after \xa0",m/6e4,"mins")}},y=m.a.Title,E=m.a.Text,g=function(e){var t=e.user;return c.a.createElement("div",{style:{textAlign:"left"}},c.a.createElement(y,{level:3,style:{textAlign:"center"}},"Verification Process"),c.a.createElement(y,{level:4,disabled:t.account.email_verified},"1. Verification of email"),c.a.createElement(E,{disabled:t.account.email_verified},"You need to verify your email in order to proceed next.",c.a.createElement("br",null),"We sent you a verification mail, do check your spam folder."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"center-hv"},t.account.email_verified?c.a.createElement(E,{disabled:!0},"Your email is already verified"):c.a.createElement(v,{email:t.email})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(y,{level:4},"2. Verfication of documents"),c.a.createElement(E,{disabled:t.account.account_verified},"We will manully verify your document by your respective department. This process will take 1-2 days.",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"center-hv"},t.account.account_verified?c.a.createElement(E,{disabled:!0},"Your account is already verified"):"We will notify you after completion of process.")))},j=function(e){var t=e.user;return c.a.createElement("div",{className:"container center-hv full-page"},c.a.createElement("div",{style:{maxWidth:600}},c.a.createElement(s.a,{status:"warning",title:"You account is not yet verified",extra:c.a.createElement(g,{user:t})})))},w=(n(213),n(116)),O=(n(107),n(9)),x=(n(540),n(86)),k=n(212),S=Object(i.b)((function(e){return{}}),(function(e){return{}}))((function(e){var t=e.collapsed,n=e.toggle,a=e.routes,r=c.a.createElement("a",{href:"#!",className:"collapse-button",onClick:function(e){e.preventDefault(),n()}},c.a.createElement(O.a,{type:t?"menu-unfold":"menu-fold"})),i=c.a.createElement("a",{href:"#!",onClick:function(e){e.preventDefault(),n()},style:{padding:10,width:50,height:50,borderRadius:25,position:"fixed",bottom:25,right:25,backgroundColor:"#fff",boxShadow:"2px 0 8px rgba(0, 0, 0, 0.15)",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"}},c.a.createElement(O.a,{type:t?"menu-unfold":"menu-fold"}));return c.a.createElement("div",{style:{position:"fixed",top:0,left:t?Object(x.a)("-100vw",0):0,height:"100vh",transition:"left 0.2s"}},c.a.createElement("div",{style:{height:64,backgroundColor:"#FFFFFF"},className:"logo-container center-hv"},c.a.createElement("img",{src:k,alt:"University Placement Cell, Logo"})),c.a.createElement(w.a,{mode:"inline",theme:"light",inlineCollapsed:Object(x.a)(!1,t),className:"full-page",style:{width:Object(x.a)("100vw",t?80:256)}},a.map((function(e,t){return c.a.createElement(w.a.Item,{key:t.toString()},c.a.createElement(l.c,{to:e.path,onClick:function(){Object(x.a)(n,(function(){}))()}},c.a.createElement(O.a,{type:e.icon}),c.a.createElement("span",null,e.name)))})),Object(x.a)(i,r)))})),A=n(153),T=n(91);t.a=Object(i.b)((function(e){return{user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{}}))(Object(o.g)((function(e){var t=e.user,n=e.isAuthenticated,i=e.match,s=e.allowedType,m=e.extraRoutes,d=e.sideRoutes,f=e.baseLocation,p=void 0===f?"/#/portal/":f,b=Object(r.useState)(Object(x.a)(!0,!1)),h=Object(a.a)(b,2),v=h[0],y=h[1];return Object(r.useEffect)((function(){return document.getElementsByTagName("footer")[0].classList.add("footer-hide"),function(){document.getElementsByTagName("footer")[0].classList.remove("footer-hide")}})),n?t&&t.type!==s?c.a.createElement(u.a,null):!t||t.account.account_verified&&t.account.email_verified?c.a.createElement("div",{className:"portal"},c.a.createElement(l.a,{basename:p},c.a.createElement(S,{collapsed:v,toggle:function(){return y(!v)},routes:d,match:i.path}),c.a.createElement("div",{className:"full-page",style:{paddingLeft:Object(x.a)(0,v?80:256),transition:"0.4s",opacity:v?1:Object(x.a)(0,1)}},c.a.createElement(r.Suspense,{fallback:c.a.createElement(T.a,null)},c.a.createElement(o.d,null,d.map((function(e,t){return c.a.createElement(o.b,{key:t.toString(),exact:!0,path:e.path,component:e.screen})})),m.map((function(e,t){return c.a.createElement(o.b,{key:t.toString(),exact:!0,path:e.path,component:e.screen})})),c.a.createElement(o.b,{component:A.a,homeRoute:p})))))):c.a.createElement(j,{user:t}):c.a.createElement(u.a,null)})))},805:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(628),i=[{name:"Home",icon:"home",path:"/",screen:Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(21)]).then(n.bind(null,790))}))},{name:"Recruitment",icon:"appstore",path:"/recruitment/",screen:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(16),n.e(29)]).then(n.bind(null,791))}))},{name:"Internships",icon:"rocket",path:"/internships/",screen:Object(a.lazy)((function(){return n.e(28).then(n.bind(null,792))}))},{name:"Account Settings",icon:"setting",path:"/settings/",screen:Object(a.lazy)((function(){return n.e(30).then(n.bind(null,793))}))}],l=[{title:"Add Recruitment",path:"/recruitment/add/",screen:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,802))}))}];t.default=function(){return r.a.createElement(c.a,{sideRoutes:i,extraRoutes:l,baseLocation:"/#/portal/company/",allowedType:"C"})}}}]);
//# sourceMappingURL=19.c38abb7d.chunk.js.map