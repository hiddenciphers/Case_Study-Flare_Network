(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9322)}])},9322:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(2322);n(1783);var o=n(5632),s=n.n(o),a=n(2784);let r=new function(e){this.start=void 0,this.finish=void 0;var t,n,i=Object.assign,o=i({size:2,color:"#29e",className:"bar-of-progress",delay:80},e),s={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:o.color,zIndex:1e4,height:"number"==typeof o.size?o.size+"px":o.size,color:o.color,opacity:0,width:"0%"},a={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},r={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){n&&n.parentNode&&n.parentNode.removeChild(n),(n=document.body.appendChild(document.createElement("div"))).className=o.className+" stopped",i(n.style,s);var e=n.appendChild(document.createElement("div"));e.className="glow",i(e.style,c),null!=t&&clearTimeout(t),t=setTimeout(function(){t=void 0,n.className=o.className+" started",i(n.style,a)},o.delay),n.scrollTop=0},this.finish=function(){null!=t&&(clearTimeout(t),t=void 0),n&&(n.className=o.className+" finished",i(n.style,r))}}({size:2,color:"#000000",className:"bar-of-progress",delay:500});r.start(),r.finish(),s().events.on("routeChangeStart",()=>r.start()),s().events.on("routeChangeComplete",()=>r.finish()),s().events.on("routeChangeError",()=>r.finish());var c=function(e){var t;let{Component:n,pageProps:o}=e,s=null!==(t=n.getTemplate)&&void 0!==t?t:e=>e;return(0,a.useEffect)(()=>{let e=document.getElementsByTagName("html")[0];e.insertAdjacentHTML("afterbegin","<!-- Built with Motif. https://motif.land -->")},[]),(0,i.jsx)(i.Fragment,{children:s((0,i.jsx)(n,{...o}),o)})}},1783:function(){},5632:function(e,t,n){e.exports=n(6244)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6570),t(6244)}),_N_E=e.O()}]);