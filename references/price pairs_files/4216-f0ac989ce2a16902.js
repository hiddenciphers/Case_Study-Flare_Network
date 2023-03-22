"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4216],{72230:function(n,t,e){e.d(t,{Z:function(){return h}});var r=e(80613),i=e(73952);e(57556);var o=e(16107),c=e(37400),a=e(97451),u=e(94613),s=e(56370),d=e(1578),l=e(51399);function f(){var n=(0,s.Z)(["\n  overflow-x: scroll;\n  text-align: center;\n  margin-bottom: 30px;\n\n  th {\n    padding: 20px 12px 20px 0;\n  }\n  tbody {\n    td {\n      font-size: 14px;\n    }\n  }\n"]);return f=function(){return n},n}var p=(0,d.ZP)(l.k).withConfig({componentId:"sc-f205fd31-0"})(f()),m=function(n){var t=n.children;return(0,i.jsx)(p,{children:(0,i.jsx)("table",{children:t})})},h=function(n){var t=n.source,e=n.config,s=n.children;return(0,i.jsx)(o.D,{children:t||s,rehypePlugins:[a.Z],remarkPlugins:[c.Z],components:(0,r.Z)({a:u.Z,table:m},e),linkTarget:"_blank"})}},35902:function(n,t,e){e.d(t,{k:function(){return x},Z:function(){return y}});var r=e(80613),i=e(37240),o=e(73952),c=e(57556),a=e(19725),u=e.n(a),s=e(94613),d=e(72230),l=e(51399),f=function(n){var t=n.data;if(t)return(0,o.jsx)(l.k,{children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:t[0].map(function(n){return(0,o.jsx)("th",{children:n},n)})})}),(0,o.jsx)("tbody",{children:t.slice(1).map(function(n,t){return(0,o.jsx)("tr",{children:n.map(function(n){return(0,o.jsx)("td",{children:(0,o.jsx)(d.Z,{source:n})},n)})},t)})})]})})},p=e(56370);function m(){var n=(0,p.Z)(["\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n"]);return m=function(){return n},n}var h=e(1578).ZP.span.withConfig({componentId:"sc-3f3d7bf-0"})(m(),function(n){return n.bold?600:400},function(n){return n.italic?"italic":"normal"},function(n){return n.underline?"underline":"none"}),g=e(75959),x=function(n){return n.filter(function(n){var t;return null===(t=n.value)||void 0===t?void 0:t.trim()}).map(function(n){return n.value}).join("")},v=function(n,t){if(n.target.fields.table){var e=n.target.fields.table.tableData;return(0,o.jsx)(f,{data:e},t)}if(n.target.fields.superscript){var r=n.target.fields.superscript;return n.target.fields.footnote?(0,o.jsx)(g.de,{to:"disclaimer",smooth:"true",offset:-100,children:r}):(0,o.jsx)("sup",{children:r},t)}return null},j=function(n){var t=n.source,e=n.config,a=e.Link,d=void 0===a?s.Z:a,l=e.Header2,f=e.Header3,p=e.Header4,m=e.Header5,g=e.Header6,y=e.Paragraph,b=e.EmbeddedComponent,Z=void 0===b?null:b,w=e.EmbeddedAsset,k=void 0===w?null:w,C=e.EntryLink,S=void 0===C?null:C,P=e.ListItem,_=void 0===P?function(n){return(0,o.jsx)("li",(0,r.Z)({},n))}:P,T=e.UnorderedList,z=void 0===T?function(n){return(0,o.jsx)("ul",(0,r.Z)({},n))}:T,E=e.OrderedList,F=void 0===E?function(n){return(0,o.jsx)("ol",(0,r.Z)({},n))}:E,I=t.map(function(n,t){var r=n.nodeType,c=n.content,a=n.data,s=n.marks,b=c&&x(c);switch(r){case"heading-2":return(0,o.jsx)(l,{id:"section-".concat(u()(b)),children:(0,o.jsx)(j,{source:c,config:e})},t);case"heading-3":return(0,o.jsx)(f,{id:"section-".concat(u()(b)),children:(0,o.jsx)(j,{source:c,config:e})},t);case"heading-4":return(0,o.jsx)(p,{id:"section-".concat(u()(b)),children:(0,o.jsx)(j,{source:c,config:e})},t);case"heading-5":return(0,o.jsx)(m,{id:"section-".concat(u()(b)),children:(0,o.jsx)(j,{source:c,config:e})},t);case"heading-6":return(0,o.jsx)(g,{id:"section-".concat(u()(b)),children:(0,o.jsx)(j,{source:c,config:e})},t);case"paragraph":default:return(0,o.jsx)(y,{children:(0,o.jsx)(j,{source:c,config:e})},t);case"ordered-list":return(0,o.jsx)(F,{children:c.map(function(n,t){return(0,o.jsx)(_,{children:(0,o.jsx)(j,{source:n.content,config:e})},t)})},t);case"unordered-list":return(0,o.jsx)(z,{children:c.map(function(n,t){return(0,o.jsx)(_,{children:(0,o.jsx)(j,{source:n.content,config:e})},t)})},t);case"embedded-entry-block":return(0,o.jsx)(Z,{fields:a.target.fields});case"text":var w=n.value.split("\n").reduce(function(n,t,e){return(0,i.Z)(n).concat([e>0&&(0,o.jsx)("br",{},e),t])},[]);if(0===s.length)return(0,o.jsx)("span",{children:w},t);var C=!1,P=!1,T=!1;return s.forEach(function(n){"bold"===n.type?C=!0:"italic"===n.type?P=!0:"underline"===n.type&&(T=!0)}),(0,o.jsx)(h,{bold:C,italic:P,underline:T,children:w},t);case"hyperlink":return(0,o.jsx)(d,{href:a.uri,children:c.map(function(n){return n.value})},t);case"entry-hyperlink":return S&&(0,o.jsx)(S,{target:a.target,children:c.map(function(n){return n.value})},t);case"embedded-entry-inline":return v(a,t);case"embedded-asset-block":var E,I,H,L=null===(E=a.target)||void 0===E?void 0:null===(I=E.fields)||void 0===I?void 0:I.file,A=null===(H=a.target.sys)||void 0===H?void 0:H.id;return k&&(0,o.jsx)(k,{id:A,file:L},A)}});return(0,o.jsx)(c.Fragment,{children:I})},y=j},51399:function(n,t,e){e.d(t,{k:function(){return o}});var r=e(56370);function i(){var n=(0,r.Z)(["\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    width: 100%;\n    text-align: left;\n    margin-top: 24px;\n    margin-bottom: 24px;\n\n    th {\n      font-weight: ",";\n      color: ",";\n      text-transform: uppercase;\n      padding: 16px 16px 16px 0;\n    }\n\n    tr {\n      border-bottom: 1px solid ",";\n    }\n\n    td {\n      font-size: 14px;\n      padding: 16px 16px 16px 0;\n    }\n  }\n"]);return i=function(){return n},n}var o=e(1578).ZP.div.withConfig({componentId:"sc-747caa4c-0"})(i(),function(n){return n.theme.fontWeight.semiBold},function(n){return n.theme.textColors.secondary},function(n){return n.theme.borderColors.primary})},8475:function(n,t,e){var r=e(73952);e(57556);var i=e(50193),o=e.n(i),c=e(4780),a="A Simple and Secure Place to Buy, Sell, and Store Bitcoin and Cryptocurrency. Easy, Free, and Secure. Get Started Today.",u=c._n+"/static/images/og-meta.png",s=c._n+"/images/cryptopedia/cryptopedia-default-social.png",d=c._n+"/images/cryptopedia/cryptopedia-default-social-twitter.png",l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Gemini",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" | Gemini";return"".concat(n).concat(t)};t.Z=function(n){var t=n.title,e=n.titleSuffix,i=n.description,f=n.url,p=n.image,m=n.keywords,h=n.canonical,g=n.index,x=n.schema,v=n.twitterCard,j=n.cryptopedia,y=void 0!==j&&j;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{name:"google-site-verification",content:"rV6E8DR2lp9ObFOfR2CqTw81owAsa3bZOFN96uJ2JpA"}),(0,r.jsx)("meta",{name:"google-site-verification",content:"JPZCzLasoK5CXnQYJz15g6CACaXm3AftEylQgEwfM2g"}),!(void 0===g||g)&&(0,r.jsx)("meta",{name:"robots",content:"noindex"}),(0,r.jsx)("title",{children:l(t,e)}),(0,r.jsx)("meta",{name:"description",content:i||a}),(0,r.jsx)("meta",{name:"keywords",content:m&&m.join(", ")||"bitcoin, bitcoin wallet, buy bitcoin instantly, bitcoin account, free bitcoin app"}),(0,r.jsx)("meta",{property:"og:title",content:l(t,e)}),(0,r.jsx)("meta",{property:"og:description",name:"description",content:i||a}),(0,r.jsx)("meta",{property:"og:image",content:p||(y?s:u)}),(0,r.jsx)("meta",{property:"og:url",name:"url",content:h||f||c._n}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Gemini"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,r.jsx)("meta",{property:"og:image:height",content:"630"}),(0,r.jsx)("meta",{name:"twitter:card",content:v||(p?"summary_large_image":"summary")}),(0,r.jsx)("meta",{name:"twitter:title",content:l(t,e)}),(0,r.jsx)("meta",{name:"twitter:description",content:i||a}),(0,r.jsx)("meta",{name:"twitter:site",content:"@Gemini"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@Gemini"}),(0,r.jsx)("meta",{name:"twitter:image",content:p||(y?d:u)}),(0,r.jsx)("link",{rel:"canonical",href:h||f||c._n}),!!x&&(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify((x["@context"]="https://schema.org",x),null,2)}})]})}},58955:function(n,t,e){e.d(t,{T:function(){return z},Z:function(){return E}});var r=e(80613),i=e(57854),o=e(24218),c=e(73952);e(57556);var a=e(74041),u=e(66900),s=e(80068),d=e(56370),l=e(1578);function f(){var n=(0,d.Z)(["\n      margin-top: 40px;\n    "]);return f=function(){return n},n}function p(){var n=(0,d.Z)(["\n    padding-top: 80px;\n    text-align: center;\n  "]);return p=function(){return n},n}function m(){var n=(0,d.Z)(["\n  a {\n    display: inline-block;\n    margin-top: 35px;\n    margin-bottom: 35px;\n\n    ",";\n  }\n\n  ",";\n"]);return m=function(){return n},n}function h(){var n=(0,d.Z)(["\n    font-size: 80px;\n    line-height: 1.3;\n    letter-spacing: -2.22px;\n    margin-bottom: 26px;\n  "]);return h=function(){return n},n}function g(){var n=(0,d.Z)(["\n  font-size: 40px;\n  font-weight: ",";\n  font-stretch: normal;\n  font-style: normal;\n  margin-top: 0;\n  margin-bottom: 16px;\n  line-height: 1.3;\n\n  ",";\n"]);return g=function(){return n},n}function x(){var n=(0,d.Z)(["\n    font-size: 36px;\n    margin-bottom: 24px;\n  "]);return x=function(){return n},n}function v(){var n=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: ",";\n  line-height: 1.3;\n  margin-top: 0;\n  margin-bottom: 20px;\n\n  ",";\n"]);return v=function(){return n},n}function j(){var n=(0,d.Z)(["\n    font-size: 24px;\n  "]);return j=function(){return n},n}function y(){var n=(0,d.Z)(["\n  font-size: 16px;\n  margin-top: 0;\n\n  ",";\n"]);return y=function(){return n},n}var b=l.ZP.div.withConfig({componentId:"sc-c14c0c0b-0"})(m(),function(n){return n.theme.media.tablet(f())},function(n){return n.theme.media.tablet(p())}),Z=l.ZP.h1.withConfig({componentId:"sc-c14c0c0b-1"})(g(),function(n){return n.theme.fontWeight.semiBold},function(n){return n.theme.media.tablet(h())}),w=l.ZP.h2.withConfig({componentId:"sc-c14c0c0b-2"})(v(),function(n){return n.theme.fontWeight.regular},function(n){return n.theme.media.tablet(x())}),k=l.ZP.p.withConfig({componentId:"sc-c14c0c0b-3"})(y(),function(n){return n.theme.media.tablet(j())}),C=e(66314),S=e(25516),P=e(84567),_=["blog","learn","prices","cryptopedia","legal","fees"],T=function(n,t){return _.includes(n)?{link:"/".concat(n),text:t("notFoundLink",{page:(0,P.kC)(n)})}:{link:"/",text:t("notFoundLink",{page:(0,P.kC)("Home")})}},z=function(n){var t=n.linkTo,e=(0,o.Z)(n,["linkTo"]),d=(0,C.Z)(S.h.COMMON).t,l=d("notFoundTitle"),f=d("notFoundSubheading"),p=d("notFoundReason");return(0,c.jsx)(s.W2,(0,i.Z)((0,r.Z)({},e),{children:(0,c.jsx)(s.E8,{children:(0,c.jsxs)(b,{children:[(0,c.jsx)(Z,{children:l}),(0,c.jsx)(w,{children:f}),(0,c.jsx)(k,{children:p}),(0,c.jsx)(a.Z,{href:T(t,d).link,children:(0,c.jsx)(u.ZP,{isPrimary:!0,children:T(t,d).text})})]})})}))},E=z},1786:function(n,t,e){var r=e(80613),i=e(57854),o=e(24218),c=e(73952),a=e(68209),u=e.n(a);e(57556);var s=e(52325);t.Z=function(n){var t=n.fullPage,e=(0,o.Z)(n,["fullPage"]),a=(0,c.jsx)(s.m,(0,i.Z)((0,r.Z)({},e),{children:(0,c.jsx)(u(),{src:"/static/images/loader.png",alt:"Spinning Gemini logo acting as a loading image while the cryptocurrency price data is retreived.",height:100,width:100,priority:!0})}));return t?(0,c.jsx)(s.H,{children:a}):a}},52325:function(n,t,e){e.d(t,{H:function(){return u},m:function(){return d}});var r=e(56370),i=e(1578);function o(){var n=(0,r.Z)(["\n  background-color: white;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 50px;\n  user-select: none;\n  overflow: hidden;\n"]);return o=function(){return n},n}function c(){var n=(0,r.Z)(["\n  from {\n    transform: rotate(0deg) scale(0.2);\n    opacity: 0.1;\n  }\n\n  to {\n    transform: rotate(360deg) scale(0.75);\n    opacity: 1;\n  }\n"]);return c=function(){return n},n}function a(){var n=(0,r.Z)(["\n  animation: "," 2s linear infinite;\n"]);return a=function(){return n},n}var u=i.ZP.div.withConfig({componentId:"sc-f9c7e292-0"})(o()),s=(0,i.F4)(c()),d=i.ZP.div.withConfig({componentId:"sc-f9c7e292-1"})(a(),s)},38600:function(n,t,e){e.d(t,{K:function(){return a}});var r=e(20685),i=e(95443),o=e.n(i),c=e(57556),a=function(n){var t=n.initialState,e=n.debounceDelay,i=n.querySelector,a=void 0===i?".anchor-active a":i,u=(0,r.Z)(c.useState(void 0===t?"":t),2),s=u[0],d=u[1],l=o()(function(){var n=document.querySelector(a);if(null!=n){var t="#"+n.href.split("#")[1];window.history.replaceState("","",t),d(t)}else window.history.replaceState("",""," ")},void 0===e?250:e);return{currentAnchor:s,setCurrentAnchor:d,scrollSpyUpdate:l}}},81022:function(n,t,e){e.d(t,{Z:function(){return r}});function r(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=document.querySelector(n).offsetTop-t;window.scrollTo({top:e,left:0,behavior:"smooth"})}}}]);