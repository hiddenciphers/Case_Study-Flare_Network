"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31668,83278],{31668:function(n,e,o){o.d(e,{Z:function(){return tn}});var t=o(92228),i=o(52322),r=o(2784),c=o(82740),u=o(78320),s=o(76942),l=o(94184),a=o.n(l),d=o(87681),f=o(13706),h=o(90581),p=o(27805),v=o(47842),g=o(48100),x=o(39309),m=o(49948),b=o(11493),y=o(15798),k=o.n(y),j=o(41167),w=o(87962);function C(){var n=(0,t.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 12px;\n  min-height: 48px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  visibility: visible; // See note on StickyContainer\n\n  .cmc-link,\n  .cmc-link:hover {\n    color: ",";\n    font-weight: bold;\n  }\n\n  .cmc-cookie-policy-banner__close {\n    font-size: 25px;\n    font-weight: 100;\n    cursor: pointer;\n    margin-left: 16px;\n  }\n"]);return C=function(){return n},n}var P=c.ZP.div.withConfig({componentId:"sc-2a540aac-0"})(C(),(function(n){return n.theme.cookiePolicyBanner.backgroundColor}),(function(n){return n.theme.cookiePolicyBanner.textColor}),(function(n){return n.theme.cookiePolicyBanner.linkColor})),I=(r.Component,(0,m.connect)((function(n){return{isInApp:n.app.isInApp}}))((function(n){var e=n.isInApp,o=(0,r.useState)(!0),t=o[0],c=o[1];return!t||e?null:(0,i.jsxs)(P,{id:"cmc-cookie-policy-banner",className:"cmc-cookie-policy-banner",children:[(0,i.jsx)("div",{children:(0,i.jsxs)(w.cC,{i18nKey:"We use cookies to offer you a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Read about how we use cookies and how you can control them on our <1>Privacy Policy</1>. If you continue to use this site, you consent to our use of cookies.",children:["We use cookies to offer you a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Read about how we use cookies and how you can control them on our"," ",(0,i.jsx)(b.Z,{forceRefresh:!0,href:"/privacy/",target:"_blank",children:"Privacy Policy"}),". If you continue to use this site, you consent to our use of cookies."]})}),(0,i.jsx)("div",{className:"cmc-cookie-policy-banner__close",onClick:function(){j.pR.set(k().cookies.COOKIE_POLICY_ACCEPTED,"1",100),c(!1)},children:"\xd7"})]})}))),Z=o(86454),S=o(22504),N=o(5632),B=o(51156),_=o(25084),E=o(12436),T=o.n(E);var L=function(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3?arguments[3]:void 0,i=T()(n,e,o);return(0,r.useCallback)(i,t)};function O(){var n=(0,t.Z)(["\n  display: inline-flex;\n  width: 40px;\n  height: 34px;\n  margin-right: 16px;\n  margin-bottom: 76px;\n  ","\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  color: ",";\n  border-radius: 3px;\n  user-select: none;\n  cursor: pointer;\n  visibility: visible; // See note on StickyContainer\n  position: relative;\n  /* bottom: ","; */\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n  &.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  .cmc-icon {\n    display: inline-block;\n    font-size: 14px;\n  }\n"]);return O=function(){return n},n}var z=c.ZP.div.withConfig({componentId:"sc-1e8c5fd8-0"})(O(),(0,d.CC)("margin-bottom: 38px;"),(function(n){return n.theme.scrollToTop.backgroundColor}),(function(n){return n.theme.scrollToTop.textColor}),(function(n){return n.isDetailPage?"64px":void 0}),(function(n){return n.theme.scrollToTop.hoverBackgroundColor}),(function(n){return n.theme.scrollToTop.hoverTextColor}));var A=function(){var n=function(){var n=parseInt((0,B.aZ)()/window.innerHeight*100,10)>=s;o!==n&&t(n)},e=(0,r.useState)(!1),o=e[0],t=e[1],c=(0,N.useRouter)().asPath,u=(0,r.useMemo)((function(){return c.startsWith("/currencies")}),[c]),s=5;return L(n,500,{leading:!1,traling:!0}),(0,r.useEffect)((function(){return S.Pc.addEventListener(n,500),function(){S.Pc.removeEventListener(n)}}),[o]),(0,i.jsx)(z,{onClick:function(){(0,B.X5)(),_.ZP.sendEvent({category:"Scroll To Top",action:"Scroll To Top",label:window.location.href})},isDetailPage:u,className:o?"visible":void 0,children:(0,i.jsx)("span",{className:"icon-Chevron-up"})})},R=o(83278),F=o(47726),D=o(27419),W=o(99503),G=o(35475),M=o(27344),K=o(93321),X=o.n(K),U=o(86035);function Y(){var n=(0,t.Z)(["\n  position: relative;\n"]);return Y=function(){return n},n}function H(){var n=(0,t.Z)(["\n      .main-content {\n        min-height: 100vh;\n      }\n    "]);return H=function(){return n},n}function J(){var n=(0,t.Z)(["\n      .grid {\n        padding-left: 0;\n        padding-right: 0;\n      }\n    "]);return J=function(){return n},n}function V(){var n=(0,t.Z)(["\n  @media (min-width: 1376px) {\n    .grid {\n      max-width: ",";\n    }\n  }\n\n  ","\n\n  ","\n\n  .cmc-body-wrapper {\n    background: linear-gradient(\n      ","\n    );\n  }\n\n  .full-width-layout {\n    padding: 0;\n    max-width: 100%;\n  }\n"]);return V=function(){return n},n}function q(){var n=(0,t.Z)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  visibility: hidden;\n  width: 100%;\n  z-index: ",";\n"]);return q=function(){return n},n}var Q,$=X()((function(){return o.e(8728).then(o.bind(o,8728))}),{on:["visible"],compatibleMode:!0}),nn=c.ZP.div.withConfig({componentId:"sc-bc06071-0"})(Y()),en=c.ZP.div.withConfig({componentId:"sc-bc06071-1"})(V(),(function(n){return n.fullBleed?"unset":"1402px"}),(function(n){return n.footerBelowFold&&(0,c.iv)(H())}),(function(n){return n.fullBleed&&(0,c.iv)(J())}),(function(n){return n.theme.isDay?"180deg, #F8FAFD 0%, rgba(248, 250, 253, 0) 413px":"180deg, #222531 0%, rgba(34, 37, 49, 0) 413px"})),on=c.ZP.div.withConfig({componentId:"sc-bc06071-2"})(q(),(function(n){return null!==(Q=n.zIndex)&&void 0!==Q?Q:d.W5.COOKIE_POLICY_BANNER}));var tn=function(n){var e=n.children,o=n.fullBleed,t=void 0!==o&&o,c=n.useNewsletterSignup,l=void 0!==c&&c,f=n.fullWidth,h=void 0!==f&&f,p=n.footerBelowFold,v=void 0!==p&&p,g=n.hideLayout,x=void 0!==g&&g,b=(0,m.useSelector)(F.PF),y=(0,m.useSelector)(F.jC),k=(0,N.useRouter)().asPath,j=function(n){return{handleLogout:function(){(0,G.kS)().then((function(){n((0,D.kX)()),(0,W.M7)()}))},handleLogin:function(){n((0,D.b_)({action:"LOGIN"})),(0,W.vJ)()},handleSignup:function(){n((0,D.b_)({action:"SIGNUP"})),(0,W.JQ)()}}}((0,m.useDispatch)()).handleSignup;return(0,r.useEffect)((function(){k.includes("invite")&&(y?(0,S.gT)():j())}),[y]),x?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(R.default,{}),e]}):b?(0,i.jsxs)(en,{fullBleed:t,footerBelowFold:v,children:[(0,i.jsx)(R.default,{}),(0,i.jsx)("div",{className:"main-content",children:(0,i.jsx)(s.Z,{className:"cmc-body-wrapper",children:(0,i.jsx)("div",{className:a()("grid",{"full-width-layout":!!h}),children:e})})}),(0,i.jsx)(on,{children:(0,i.jsx)(u.Z,{style:{textAlign:"right"},children:(0,i.jsx)(A,{})})})]}):(0,i.jsxs)(en,{fullBleed:t,footerBelowFold:v,children:[(0,i.jsxs)("div",{className:"main-content",children:[(0,i.jsxs)(nn,{children:[(0,i.jsx)(M.ZP,{}),(0,i.jsx)(R.default,{})]}),(0,i.jsx)(s.Z,{className:"cmc-body-wrapper",children:(0,i.jsx)("div",{className:a()("grid",{"full-width-layout":!!h}),children:e})})]}),l&&(0,i.jsx)($,{}),(0,i.jsx)(Z.Z,{}),(0,i.jsx)(on,{zIndex:d.W5.BACKTOP,children:(0,i.jsx)(u.Z,{style:{textAlign:"right"},children:(0,i.jsx)(A,{})})}),(0,i.jsxs)(on,{zIndex:d.W5.COOKIE_POLICY_BANNER,children:[(0,i.jsx)(U.Z,{}),(0,i.jsx)(I,{})]})]})}},83278:function(n,e,o){o.r(e);var t=o(52322),i=o(49948),r=o(47726),c=o(2784),u=o(74001),s=o(87612),l=o(83081),a=o(27419),d=o(5632),f=(0,u.Z)((function(){return Promise.all([o.e(15097),o.e(19436)]).then(o.bind(o,15097))}),!1,(function(){return null})),h={LOGIN:"login",SIGNUP:"signUp"};e.default=function(){var n=(0,i.useSelector)(r.Bh),e=(0,c.useState)(Boolean(n)),o=e[0],u=e[1],p=(0,c.useContext)(s.gX),v=p.invokeLogin,g=(p.userInfo,(0,i.useDispatch)()),x=(0,d.useRouter)(),m=function(){g((0,a.kX)()),"/settings"!==x.pathname&&g((0,a.b_)({action:"LOGIN",loginContinue:location.href}))};if((0,c.useEffect)((function(){return Boolean(n)&&!o&&u(!0),l.ZP.on(l.Vy.userLogout,m),function(){l.ZP.remove(l.Vy.userLogout,m)}}),[o,Boolean(n)]),!o)return null;var b={action:h[n]||n};return(0,t.jsx)(f,{loginModalStatus:b,setStep:v})}},86035:function(n,e,o){o.d(e,{t:function(){return a}});var t=o(52322),i=o(2784),r=o(66582),c=o(15798),u=o(87612),s=o(43961),l=i.lazy((function(){return o.e(21535).then(o.bind(o,21535))})),a="HOMEPAGE_BANNER_DISMISS";e.Z=function(){var n=(0,i.useState)(!1),e=n[0],o=n[1],d=(0,i.useContext)(u.gX).userInfo;return(0,i.useEffect)((function(){(0,s.fp)("isRegister")||d||r.tq||(0,s.fp)(a)||o(!0)}),[]),c.isServer||!e?null:(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(l,{})})}}}]);
//# sourceMappingURL=31668-0c6241b0011ef0af.js.map