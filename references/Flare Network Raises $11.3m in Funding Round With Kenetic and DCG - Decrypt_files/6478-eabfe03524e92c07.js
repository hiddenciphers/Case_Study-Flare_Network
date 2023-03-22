"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6478],{20588:function(e,t,n){var r=n(52322);n(2784);var l=n(87008),i=n(39097),a=n.n(i),s=n(13980),o=n.n(s),d=n(26956),c=n.n(d),m=n(31670),u=n.n(m),x=n(20043),f=n(6277);let p=e=>{let{routeObject:t,top:n,left:i,right:s,bottom:o,theme:d="light"}=e,{t:m}=(0,l.$G)();if(u()(t))return null;let p=t.title,h=(0,f.default)("border-decryptGridline",n&&"md:border-t",i&&"md:border-l",s&&"md:border-r",o&&"border-b");return(0,r.jsx)("footer",{className:(0,f.default)(h,"flex w-full py-4 px-5"),children:(0,r.jsxs)(a(),{...c()(t,["as","href"]),className:(0,f.default)("dark"===d?"text-decryptWhite":"text-neutral","inline-flex items-center ml-auto font-akzidenz-grotesk font-normal text-sm md:text-base leading-4 md:leading-4.5 no-underline"),children:[(0,r.jsx)("span",{className:"mr-1",children:m("all_template","All {{subject}}",{subject:p})}),(0,r.jsx)(x.JO,{icon:["fas","long-arrow-alt-right"],size:"1x"})]})})};p.propTypes={routeObject:o().object.isRequired,left:o().bool,right:o().bool,bottom:o().bool,top:o().bool},t.Z=p},90659:function(e,t,n){n.d(t,{lJ:function(){return Q},Hh:function(){return Y},dI:function(){return H},pL:function(){return K},hl:function(){return B}});var r=n(92228),l=n(52322);n(2784);var i=n(35505),a=n(31670),s=n.n(a),o=n(20043),d=n(30014),c=n(13980),m=n.n(c),u=n(54739),x=n(82201),f=n(87008),p=n(53160);function h(){let e=(0,r.Z)(["\n    display: none;\n  "]);return h=function(){return e},e}function g(){let e=(0,r.Z)(["\n  position: relative;\n  padding-right: ","px;\n  border-right: ",";\n  ",";\n"]);return g=function(){return e},e}function j(){let e=(0,r.Z)(["\n  z-index: 1;\n"]);return j=function(){return e},e}function b(){let e=(0,r.Z)(["\n  margin-top: 1rem;\n  padding: 3px;\n  background-color: ",";\n"]);return b=function(){return e},e}function v(){let e=(0,r.Z)(["\n  width: 1px;\n  opacity: 0.8;\n  background: rgba(0, 0, 0, 0.08);\n  margin-left: 49%;\n  height: 100%;\n"]);return v=function(){return e},e}let N=(0,i.default)(o.rj).withConfig({componentId:"sc-6e7fc34f-0"})(g(),e=>e.theme.card.spacing,e=>e.theme.gridlineStyle,x.media.mobile(h())),y=(0,i.default)(o.JX).withConfig({componentId:"sc-6e7fc34f-1"})(j()),k=(0,i.default)(o.xv).withConfig({componentId:"sc-6e7fc34f-2"})(b(),e=>e.theme.color.white),w=i.default.div.withConfig({componentId:"sc-6e7fc34f-3"})(v()),z=e=>{let{items:t}=e,{t:n}=(0,f.$G)(),r=e=>{if(!e)return;let t=(0,u.guessUserTimezone)(),r=(0,u.formatDateTime)(Date.now(),"MMM D",t),l=(0,u.formatDateTime)(Date.now()-86400,"MMM D",t),i=e.send_time||"".concat(e.date_gmt,"Z"),a=(0,u.formatDateTime)(i,"MMM D",t);return a===r?n("Today"):a===l?n("Yesterday"):a};return(0,l.jsx)(l.Fragment,{children:t.map((e,n)=>{let i=r(e),a=r(t[n-1]);return(0,l.jsxs)(o.rj,{container:!0,direction:"row",justify:"flex-start",children:[(0,l.jsxs)(N,{item:!0,xs:1,children:[!(n>0&&a===i)&&(0,l.jsxs)(y,{center:!0,children:[(0,l.jsx)(k,{opacity:.35,size:"m",children:i}),(0,l.jsx)(o.cV,{index:n})]}),(0,l.jsx)(w,{})]}),(0,l.jsx)(o.rj,{item:!0,xs:12,sm:11,className:"border-b md:border-r border-decryptGridline",children:(0,l.jsx)(p.n,{post:e})})]},e.id)})})};z.propTypes={items:m().array.isRequired},z.defaultProps={items:[]};var M=n(26934),C=n(50193),T=n(54826),Z=n(24100),_=n(10697),F=n(39097),D=n.n(F),G=n(61429),L=n.n(G);let I=e=>e.reduce((e,t)=>{let n=t.name[0].toUpperCase(),r=!isNaN(n);return r&&(n="#"),e[n]||(e[n]=[]),e[n].push(t),e},{}),P=e=>{var t;let{items:n}=e,r=(0,Z.FA)(),i=I(n),a=Object.entries(i),s=Array.from(new Set(n.map(e=>{var n;return null!==(t=null===(n=e.guide_references)||void 0===n?void 0:n.split(","))&&void 0!==t?t:[]}).flatMap(e=>e))).filter(e=>e),o=(0,_.kx)({client:r,query:{include:s.join(",")}},{enabled:s.length>0,select(e){let{result:t}=e;if((null==t?void 0:t.length)>0)return(0,_.Fv)({data:t,prop:"id"})}});return(0,l.jsx)(l.Fragment,{children:a.map(e=>{let[t,n]=e;return(0,l.jsxs)("div",{className:"mt-8 md:mt-10",id:"".concat(t.toLocaleLowerCase()),children:[(0,l.jsxs)("div",{className:"flex flex-row items-end",id:"".concat(t.toLocaleUpperCase()),children:[(0,l.jsx)("h1",{className:"text-neutral-50 text-5xl md:text-6xl font-canela font-bold",children:t}),(0,l.jsx)(T.i,{className:"mb-3 mx-5"})]}),n.map(e=>{var t;return(0,l.jsxs)("div",{className:"mt-8 md:mt-10",children:[(0,l.jsx)("h3",{className:"text-white font-akzidenz-grotesk font-medium text-2xl",children:e.name}),(0,l.jsx)("p",{className:"text-neutral-50 mt-2 font-akzidenz-grotesk font-normal text-xl",children:L()(e.description)}),null===(t=e.guide_references)||void 0===t?void 0:t.split(",").map(e=>{var t,n;return(null===(t=o.data)||void 0===t?void 0:t[e])&&(0,l.jsx)("p",{className:"mt-2",children:(0,l.jsx)(D(),{...(0,C.canonicalPostPath)(null===(n=o.data)||void 0===n?void 0:n[e]),className:"font-akzidenz-grotesk font-medium text-lg leading-5.5 underline underline-offset-4 text-university-dark-gradient-from md:text-xl md:leading-6",children:"Learn More"})},e)})]},e.name)})]},t)})})};var q=n(40510),A=n(6277),J=n(61125),O=n(5063),R=n(76973),S=n(4056);let U=e=>{let{item:t}=e,{colorScheme:n,excerpt:r,img:i,canonicalPath:a,contentSponsor:s,theme:o}=(0,J.i3)(t);return(0,l.jsx)(D(),{...a,className:"block",children:(0,l.jsxs)(R.U,{as:"article",className:"flex flex-col h-full pt-5 px-5",colorScheme:n,children:[(0,l.jsx)("div",{className:(0,A.default)("dark"===n&&"text-white","gradient"===n&&"text-white","light"===n&&"text-primary-600","font-adobe-garamond-pro italic text-xl leading-none"),children:"The Rollup"}),(0,l.jsx)("h2",{className:(0,A.default)("dark"===n&&"text-primary-400","gradient"===n&&"text-primary-50","light"===n&&"text-primary-600","mb-4 font-akzidenz-grotesk font-medium text-3.5xl leading-none"),children:o}),(0,l.jsx)(O.X,{className:"mb-7",classNameText:"mb-2 text-xs leading-none",classNameLogo:"h-5",colorScheme:n,sponsor:s}),(0,l.jsx)("h3",{className:(0,A.default)("dark"===n&&"text-primary-100","gradient"===n&&"text-primary-50","light"===n&&"text-neutral-800","grow font-akzidenz-grotesk font-normal text-lg leading-5 line-clamp-4"),children:r}),(0,l.jsx)("div",{className:"relative h-48 my-5",children:(0,l.jsx)(q.X,{layout:"fill",objectFit:"contain",src:i.src,alt:i.alt})}),(0,l.jsx)(T.i,{}),(0,l.jsx)(S.E,{className:(0,A.default)("dark"===n&&"text-white","gradient"===n&&"text-white","light"===n&&"text-neutral-800","justify-center py-3 text-base leading-4.5"),text:"component.rollup.explore"})]})})},E=e=>{let{items:t}=e;return(0,l.jsx)("div",{className:"grid gap-4 md:grid-cols-2 md:mx-5 xl:grid-cols-3",children:t.map(e=>(0,l.jsx)(U,{item:e},e.id))})};function X(){let e=(0,r.Z)(["\n  font-size: 12px;\n  margin-right: 5px;\n"]);return X=function(){return e},e}function $(){let e=(0,r.Z)(["\n  font-size: 10px;\n"]);return $=function(){return e},e}let V=(0,i.default)(o.xW).withConfig({componentId:"sc-255ade5e-0"})(X()),W=(0,i.default)(o.JO).withConfig({componentId:"sc-255ade5e-1"})($()),B=e=>{let t=t=>{let{query:n,useData:r,dataOptions:i,hideLoadMore:a,forceShowLoadMore:o,className:c="",hideLoader:m,LoadMoreComponent:u=null,NoResultsComponent:x=null,isTranslated:p=!0,...h}=t,{t:g}=(0,f.$G)(),j=(0,Z.FA)(),b=r({client:j,query:n,isTranslated:p},i),{status:v,data:N,fetchNextPage:y,hasNextPage:k,isFetchingNextPage:w}=b,z=null==N?void 0:N.pages.map(e=>e.result).filter(e=>e).flat();return s()(z)?"loading"===v?!m&&(0,l.jsx)(d.a,{}):(0,l.jsx)(l.Fragment,{children:x?(0,l.jsx)(x,{}):(0,l.jsx)("p",{className:"m-4 font-akzidenz-grotesk font-normal text-base",children:g("title.no_results","There are no results.")})}):(0,l.jsxs)("div",{className:"flex flex-col ".concat(c),children:[(0,l.jsx)(e,{...h,items:z}),!a&&(o||k)&&(0,l.jsx)(l.Fragment,{children:u?(0,l.jsx)(u,{fetchNextPage:y,isFetchingNextPage:w}):(0,l.jsxs)("div",{onClick:y,className:"flex flex-row justify-end cursor-pointer w-full py-4 pr-4 border-decryptGridline",children:[(0,l.jsx)(V,{children:g("button.load_more","Load More")}),(0,l.jsx)(W,{spin:w,icon:["fa","sync-alt"]})]})})]})};return t.displayName="GraphqlLoadMore",t},H=B(M.Z),Y=B(z),K=B(E),Q=B(P)},26934:function(e,t,n){var r=n(52322);n(2784);var l=n(13980),i=n.n(l),a=n(20043),s=n(53160),o=n(7088),d=n(45004);let c=e=>{let{items:t,className:n="",...l}=e,i=s.n;return l.slimline?i=o.B:l.vertical&&(i=d.c),(0,r.jsx)(a.aV,{className:"w-full ".concat(n),children:t.map(e=>(0,r.jsx)("li",{className:"border-b md:border-r md:border-l border-decryptGridline",children:(0,r.jsx)(i,{post:e,slimline:l.slimline})},e.id))})};c.propTypes={items:i().array.isRequired},c.defaultProps={items:[]},t.Z=c}}]);