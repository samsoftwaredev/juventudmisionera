(this.webpackJsonpjumi=this.webpackJsonpjumi||[]).push([[6],{181:function(e,a,t){"use strict";t.r(a);var c=t(182),n=t(20),s=t(3),l=t(10),r=t(0),i=t.n(r),j=t(1),b=t.n(j),o=t(27),u=t.n(o),d=t(16),h={tag:d.o,fluid:b.a.bool,className:b.a.string,cssModule:b.a.object},x=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=e.fluid,r=Object(l.a)(e,["className","cssModule","tag","fluid"]),j=Object(d.k)(u()(a,"jumbotron",!!n&&"jumbotron-fluid"),t);return i.a.createElement(c,Object(s.a)({},r,{className:j}))};x.propTypes=h,x.defaultProps={tag:"div"};var O=x,p=t(122),m=t(71),f=t(79),v=t(2);a.default=function(){var e=Object(c.a)().t;return Object(v.jsx)(f.a,{children:Object(v.jsx)("div",{className:"pt-5",children:Object(v.jsxs)(O,{children:[Object(v.jsx)("h1",{className:"display-3",children:Object(v.jsx)(m.a,{text:"app.name"})}),Object(v.jsx)("p",{className:"lead",children:e("objective.label")}),Object(v.jsx)("hr",{className:"my-2"}),Object(v.jsx)("p",{children:e("objective.description")}),Object(v.jsx)("p",{className:"lead",children:Object(v.jsx)(p.a,{color:"primary",children:Object(v.jsx)(n.c,{to:"/app/rosary",className:"text-white",children:Object(v.jsx)(m.a,{text:"prayRosary.label"})})})})]})})})}},71:function(e,a,t){"use strict";var c=t(72);a.a=c.a},72:function(e,a,t){"use strict";var c=t(73),n=t(90),s=t(182),l=t(2);a.a=function(e){var a=e.text,t=Object(n.a)(e,["text"]),r=Object(s.a)().t;return Object(l.jsx)("span",Object(c.a)(Object(c.a)({},t),{},{children:r(a)}))}},77:function(e,a,t){"use strict";t(0);var c=t(183),n=t(184),s=t(161),l=t(72),r=t(182),i=t(31),j=[{label:"Espa\xf1ol",abbrv:"es"},{label:"English",abbrv:"en"}],b=t(2);a.a=function(){var e,a=Object(r.a)().i18n,t=a.language,o=j.findIndex((function(e){return e.abbrv===t}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(c.a,{nav:!0,caret:!0,children:(null===(e=j[o])||void 0===e?void 0:e.label)||Object(b.jsx)(l.a,{text:"language_label"})}),Object(b.jsx)(n.a,{right:!0,children:j.map((function(e){var c=e.abbrv,n=e.label;return Object(b.jsx)(s.a,{active:c===t,onClick:function(){return e=c,void a.changeLanguage(e).then((function(){Object(i.b)("language",e)})).catch(console.error("Unable to change language"));var e},children:n},c)}))})]})}},79:function(e,a,t){"use strict";var c=t(158),n=t(159),s=t(160),l=t(71),r=t(2),i=function(){return Object(r.jsx)("footer",{id:"footer",className:"bg-light mt-5",children:Object(r.jsx)(c.a,{children:Object(r.jsxs)(n.a,{className:"pt-2 align-items-center",children:[Object(r.jsx)(s.a,{md:6,children:Object(r.jsxs)("p",{className:"text-center text-muted",children:["\xa9 Copyright ",(new Date).getFullYear()," JUMI"]})}),Object(r.jsxs)(s.a,{md:6,children:[Object(r.jsxs)("h5",{children:[Object(r.jsx)(l.a,{text:"followUs.label"}),":"]}),Object(r.jsx)("ul",{className:"ml-4 list-group ",children:[{icon:"",label:"Facebook",url:"https://www.facebook.com/112283280567588/"},{icon:"",label:"YouTube",url:"https://youtube.com/channel/UCq7PXebEbR3Pw6n2LLQppmA"}].map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{target:"social-media",href:e.url,children:e.label})},e.label)}))})]})]})})})},j=t(29),b=t(0),o=t(4),u=t(20),d=t(162),h=t(163),x=t(164),O=t(165),p=t(166),m=t(167),f=t(78),v=t(77),g=function(e){var a=e.darkMode,t=void 0!==a&&a,c=Object(o.g)(),n=Object(b.useState)(!1),s=Object(j.a)(n,2),i=s[0],g=s[1];return Object(b.useEffect)((function(){f.animateScroll.scrollToTop({smooth:!0,offset:-150})}),[c.pathname]),Object(r.jsxs)(d.a,{dark:t,light:!t,color:!t&&"light",fixed:"top",expand:"md",children:[Object(r.jsx)(u.c,{className:"navbar-brand",to:"/",children:Object(r.jsx)(l.a,{text:"app.shortName"})}),Object(r.jsx)(h.a,{onClick:function(){return g(!i)}}),Object(r.jsxs)(x.a,{isOpen:i,navbar:!0,children:[Object(r.jsx)(O.a,{className:"mr-auto",navbar:!0,children:[{label:"prayRosary.label",path:"/app/rosary"},{label:"religiousGroups.label",path:"/app/groups"}].map((function(e){return Object(r.jsx)(p.a,{active:c.pathname===e.path,children:Object(r.jsx)(u.c,{className:"nav-link ".concat(e.disabled&&"disabled"),to:e.path,children:Object(r.jsx)(l.a,{text:e.label})})},e.label)}))}),Object(r.jsx)(m.a,{inNavbar:!0,children:Object(r.jsx)(v.a,{})})]})]})};a.a=function(e){var a=e.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{}),Object(r.jsx)(c.a,{style:{marginTop:"75px"},id:"container",className:"pt-2",children:a}),Object(r.jsx)(i,{})]})}}}]);
//# sourceMappingURL=6.a2096783.chunk.js.map