(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,n,t){e.exports=t(85)},45:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(32),l=t.n(c),o=(t(45),t(38)),i=t(14),u=t(13),m=t(15),s=t(3),d=t(4);function p(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return p=function(){return e},e}var f=Object(d.a)(m.SideNav)(p()),b=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Education",path:"/education"}],E=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,b.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(9);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}var x=d.a.div(O(),(function(e){return e.isHome?"flex":"none"})),y=d.a.div(j()),w=d.a.img(g()),k=d.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(x,{isHome:"/"===t.pathname},r.a.createElement(y,null,r.a.createElement(w,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Coding in ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,n.basics.headline),r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:n.basics.blog,target:"_blank",rel:"noreferrer noopener"},n.basics.blog)))),r.a.createElement("div",null,r.a.createElement(k,{href:"https://gitconnected.com/".concat(n.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.ArrowRight16,null))))},P=t(37),S=t.n(P);function C(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return C=function(){return e},e}function N(){var e=Object(s.a)(["\n  width: 25%;\n"]);return N=function(){return e},e}function _(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return _=function(){return e},e}function A(){var e=Object(s.a)(["\n  height: 48px;\n"]);return A=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return B=function(){return e},e}var D=d.a.div(B()),H=d.a.div(A()),M=d.a.div(_()),z=Object(d.a)(i.b)(N()),F=Object(d.a)(S.a)(C()),J=function(){return r.a.createElement(D,null,r.a.createElement(H,null),r.a.createElement(M,null,r.a.createElement(z,{to:"/"},r.a.createElement(F,{hasIconOnly:!0,renderIcon:v.User32,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(z,{to:"/projects"},r.a.createElement(F,{hasIconOnly:!0,renderIcon:v.Code32,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(z,{to:"/education"},r.a.createElement(F,{hasIconOnly:!0,renderIcon:v.Education32,iconDescription:"Education",tooltipPosition:"bottom"}))))};function R(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return R=function(){return e},e}var W=Object(d.a)(m.Content)(R()),L=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null),r.a.createElement(E,null),r.a.createElement(W,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},T=L,U=t(12);function V(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return V=function(){return e},e}function $(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return $=function(){return e},e}function q(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return q=function(){return e},e}var G=d.a.h3(q()),K=d.a.p($()),Q=d.a.span(V(),U.a[20],U.a[70],U.a[70]);function X(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return X=function(){return e},e}var Y=d.a.li(X()),Z=function(e){var n=e.user;return r.a.createElement(T,{user:n},r.a.createElement("div",null,r.a.createElement(G,null,"About Me"),r.a.createElement(K,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(G,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(Q,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(G,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(Y,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},ee=t(27);function ne(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return te=function(){return e},e}function ae(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ae=function(){return e},e}var re=d.a.li(ae(),U.b),ce=d.a.h4(te()),le=d.a.div(ne()),oe=function(e){var n=e.user;return r.a.createElement(T,{user:n},r.a.createElement("div",null,r.a.createElement(G,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(re,{key:n},r.a.createElement(ce,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(le,null,[].concat(Object(ee.a)(e.languages),Object(ee.a)(e.libraries)).map((function(e,n){return r.a.createElement(Q,{key:n},e)}))))})))))};function ie(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ie=function(){return e},e}function ue(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ue=function(){return e},e}function me(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return me=function(){return e},e}var se=d.a.li(me(),U.b),de=d.a.h4(ue()),pe=d.a.p(ie()),fe=function(e){var n=e.user;return r.a.createElement(L,{user:n},r.a.createElement("div",null,r.a.createElement(G,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(se,{key:n},r.a.createElement(de,null,e.position),r.a.createElement("div",null,r.a.createElement(pe,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(K,null,e.description.replace("\n\n","\n")))})))))},be=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(Z,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(oe,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(fe,{user:n}))))};var Ee=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/vynmetropolia").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),t?r.a.createElement(be,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.9b3cd4e1.chunk.js.map