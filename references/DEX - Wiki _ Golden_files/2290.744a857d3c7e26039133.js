"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2290],{25257:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(11628).ZP)({resolved:{},chunkName:()=>"components-Dropdown-DropdownItem",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(3773).then(r.bind(r,87404)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve:()=>87404},{ssr:!1})},43268:(e,t,r)=>{r.d(t,{C:()=>l,s:()=>o});var n=r(53092),s=r(29546);const o=(e,t)=>{if(Array.isArray(e))return e.join(", ");const r=t.format||"",o=e||t.default;switch(r){case"date":return(0,n.qE)(o);case"number":return"number"!=typeof o?o:(0,s._k)(o);default:return o}},l=(e,t)=>{const r=t.formatForSort||t.format;return!r||"number"!==r&&"date"!==r?"asc"===e||"desc"===e?"asc"===e?"Sort A to Z":"Sort Z to A":e:"asc"===e?"Ascending":"Descending"}},56032:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(27378),s=r(60378),o=r(55480),l=r(48763),c=r(24246);const i=({children:e,isStuck:t,canUseSticky:r,isStuckOnBottom:s=!1,headerHeight:i=50})=>{const a=(0,n.useRef)(null),[u,d]=(0,n.useState)(!1),y=(0,n.useRef)(null),h=(0,n.useCallback)((()=>{d(!0),clearTimeout(y.current),y.current=setTimeout((()=>{d(!1)}),50)}),[]),p=(0,n.useCallback)((0,l.Z)(h,50),[h]);(0,n.useEffect)((()=>(window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)})),[p]);const b=(0,n.useMemo)((()=>r?{position:"sticky",top:i,bottom:0}:u&&t?{position:"fixed",top:s?void 0:i,bottom:s?0:void 0,transform:`translateX(-${a.current.parentElement.scrollLeft}px)`,width:a.current.parentElement.getBoundingClientRect().width}:t?{position:"absolute",top:s?void 0:i-a.current.parentElement.getBoundingClientRect().top,bottom:s?a.current.parentElement.getBoundingClientRect().top+a.current.parentElement.clientHeight-window.innerHeight:void 0}:{position:"relative",top:0,left:0}),[s,t,u,r,i]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.xu,{style:b,sx:{zIndex:5,minWidth:"fit-content",transform:"translateZ(0)",backfaceVisibility:"hidden",boxShadow:t?`0 ${s?"-":""}4px 2px -2px #e0e0e0`:"none"},ref:a,children:e}),t&&!r&&(0,c.jsx)(o.xu,{sx:{height:a.current?a.current.getBoundingClientRect().height:0}})]})};var a=r(85274),u=r(24158),d=r(86397),y=r(82864);const h=(0,n.forwardRef)((({width:e,onScroll:t,tableScroller:r,scrollbarSx:s},l)=>((0,n.useEffect)((()=>{const e=l,t=r&&r.current?r.current.scrollLeft:0;e.current&&(e.current.scrollLeft=t)}),[r,l]),(0,c.jsx)(o.xu,{id:"table_hor_sticky_scrollbar",ref:l,onScroll:t,sx:{width:"100vw",position:"sticky",left:0,height:"10px",overflowX:"scroll",...s},children:(0,c.jsx)(o.xu,{sx:{width:e,bg:"bg1",height:"100%"}})})))),p=h,b={"&::-webkit-scrollbar":{height:"8px",border:1,borderBottom:0,bg:"bg1"},"&::-webkit-scrollbar-thumb":{backgroundColor:"gray60"}},x=({ExpandedComponent:e=null,plugins:t=u.LZ,Footer:r,isFooterSticky:l=!1,hasOuterScrollContainer:h=!1,...x})=>{const{getTableProps:g,getTableBodyProps:f,headerGroups:m,rows:S,prepareRow:w,TableBody:E=o.xu,TableRow:v=o.xu,TableHeader:K=o.xv,totalColumnsWidth:_,columns:R}=(0,s.useTable)({...x},s.useFlexLayout,...t),B=(0,n.useRef)(null),{sentinel:C,isStuck:k}=(0,d.Z)(),{sentinel:T,isStuck:O}=(0,d.Z)({isStuckOnBottom:!0}),L=(0,n.useMemo)((()=>g()),[g]),A=!h&&(!B.current||B.current.offsetWidth<_),H=(0,n.useRef)(null),[$,j]=(0,y.Z)(L.ref,H),P=(0,n.useMemo)((()=>!a.D1&&!!r&&l&&A&&O),[r,l,A,O]);return(0,c.jsxs)(o.xu,{sx:{position:"relative"},ref:B,children:[C,(0,c.jsxs)(o.xu,{...L,onScroll:P?$:void 0,sx:{...L.sx,overflowX:A?"auto":"visible",position:"relative",clipPath:k&&A?"polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)":"none",...b},children:[(0,c.jsx)(i,{isStuck:k,canUseSticky:!A,headerHeight:h?0:void 0,children:m.map((e=>(0,c.jsx)(o.xu,{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,c.jsx)(K,{...e.getHeaderProps(),children:e.render("Header")})))})))}),(0,c.jsx)(E,{...f(),children:S.map((t=>{w(t);const{rowWrapperSx:r,...n}=t.getRowProps();return(0,c.jsxs)(o.xu,{sx:r,children:[(0,c.jsx)(v,{...n,row:t,children:t.cells.map((e=>(0,c.jsx)(o.xu,{...e.getCellProps(),children:e.render("Cell")})))}),t.isExpanded&&(0,c.jsx)(e,{row:t})]},n.key)}))}),r?l?(0,c.jsxs)(i,{isStuck:O,canUseSticky:!A,isStuckOnBottom:!0,children:[(0,c.jsx)(r,{columns:R}),!a.D1&&A&&O?(0,c.jsx)(p,{ref:H,tableScroller:L.ref,width:_,onScroll:j,scrollbarSx:b}):null]}):(0,c.jsx)(r,{columns:R}):null]}),T]})}},86397:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),s=r(55480),o=r(24158),l=r(92615),c=r(24246);const i=({sentinelHeight:e=50,isStuckOnBottom:t=!1}={})=>{const{isStuck:r,setNode:i}=(()=>{const e=(0,l.Z)(),[t,r]=(0,n.useState)(null),[s,c]=(0,n.useState)(!1),i=(0,n.useCallback)((t=>{e()&&t.forEach((e=>c(e.intersectionRatio<1)))}),[e]),a=(0,n.useRef)(o.Nu);return(0,n.useEffect)((()=>{window.IntersectionObserver&&(a.current=new IntersectionObserver(i,{threshold:1}))}),[i]),(0,n.useEffect)((()=>{t&&a.current!==o.Nu&&a.current.observe(t)}),[t]),{setNode:r,isStuck:s}})();return{sentinel:(0,n.useMemo)((()=>(0,c.jsx)(s.xu,{sx:{position:"absolute",height:e+1,left:3,right:3,bottom:t?0:"100%",visibility:"none",pointerEvents:"none"},ref:i})),[t,i,e]),isStuck:r}}},82864:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),s=r(48763);const o=(...e)=>{const t=(0,n.useRef)(!1),r=(0,n.useCallback)((0,s.Z)(((e,t)=>{e.current&&(e.current.scrollLeft=t)}),10),[]);return e.map(((s,o)=>(0,n.useCallback)((n=>{!t.current&&s&&n.target===s.current&&(t.current=!0,e.forEach(((e,t)=>{o!==t&&r(e,n.target.scrollLeft)}))),t.current=!1}),[o,s])))}},52052:(e,t,r)=>{r.d(t,{YI:()=>$,uW:()=>L,c:()=>T,P_:()=>A,KW:()=>H,Py:()=>O}),r(73902),r(911);var n=r(38354),s=r.n(n),o=r(4215),l=r.n(o),c=r(95099),i=r.n(c),a=r(24158),u=r(22478),d=r(5606);var y=r(34927),h=r(77106);const p="tables",b=`[${p}] SET_TABLE`,x=`[${p}] ADD_ROWS_TO_TABLE`,g=`[${p}] REMOVE_TABLE`,f=`[${p}] SORT_TABLE`,m=`[${p}] REMOVE_ROW`,S=`[${p}] RESET_HIGHLIGHT`,w=`[${p}] SET_HIGHLIGHT_COORDS`,E=`[${p}] MOVE_HIGHLIGHT_COORDS`,v=`View ${p}`,K=`[${v}] FETCH_DATA_REQUEST`,_=`[${v}] FETCH_DATA_SUCCESS`,R=`[${v}] FETCH_DATA_FAIL`,B=`[${v}] SORTING_FETCH_REQUEST`,C=`[${v}] FETCH_MORE_ROWS_REQUEST`,k={tablesByKey:{},fetchPending:!1,sortPending:!1,addPagePending:!1,highlightedCellsByKey:{},selectedRowIndexesByKey:{},selectionAnchorByKey:{}};h.Z.register("tables",((e=k,t)=>{const{type:r,payload:n}=t;switch(r){case b:return{...e,tablesByKey:{...e.tablesByKey,[n.tableKey]:n.table}};case g:const{[n.tableKey]:t,...r}=e.tablesByKey;return{...e,tablesByKey:r};case m:return{...e,tablesByKey:{...e.tablesByKey,[n.tableKey]:{...e.tablesByKey[n.tableKey],rows:e.tablesByKey[n.tableKey].rows.filter(((e,t)=>t!==n.orderRow))}}};case x:{const t=e.tablesByKey[n.tableKey];return t?{...e,tablesByKey:{...e.tablesByKey,[n.tableKey]:{...t,nextURL:n.nextURL,rows:t.rows.concat(n.rows)}}}:e}case K:return{...e,fetchPending:!0};case w:return{...e,highlightedCellsByKey:{[n.tableKey]:n.coords}};case E:{const t=n.coords,r=(e.highlightedCellsByKey[n.tableKey]||[])[0]||t;return{...e,highlightedCellsByKey:{[n.tableKey]:[r,t]}}}case S:return{...e,highlightedCellsByKey:{}};case _:case R:return{...e,fetchPending:!1,sortPending:!1,addPagePending:!1};case B:return{...e,sortPending:!0};case C:return{...e,addPagePending:!0};case f:{const t=e.tablesByKey[n.tableKey];return{...e,tablesByKey:{...e.tablesByKey,[n.tableKey]:{...t,rows:[...t.rows].sort(((e,t)=>(0,y.Z)(e,t,n.colKey,n.desc)))}}}}default:return e}}));const T=(e,t)=>({type:m,payload:{tableKey:e,orderRow:t}}),O=(e,t)=>({type:w,payload:{tableKey:e,coords:t}}),L=(e,t)=>({type:E,payload:{tableKey:e,coords:t}}),A=()=>({type:S}),H=(e,t)=>(r,n)=>{const o=n().tables.highlightedCellsByKey[e];if(!o)return;const[c,d]=o,[y,h]=c,[p,b]=d,x=l()(y,p+(p>y?1:-1)),g=l()(h,b+(b>h?1:-1)),f=[];x.forEach((e=>{g.forEach((t=>{f.push([e,t])}))}));const m=i()(f,[e=>e[0],e=>e[1]]),S=s()(m,(e=>e[0])),w=t.current,E=Object.keys(S).reduce(((e,t)=>`${e}${S[t].map((([e,t])=>{const r=w[`${e}-${t}`].cellRef.current.innerText.replace(/(?:\r\n|\r|\n)/g,", ");return r.match(a.m7)?r+"\t":""})).join("")}\n`),"");return r(A()),(v=E,new Promise(((e,t)=>{const r=document.createElement("textarea");r.style.position="fixed",r.style.top=0,r.style.left=0,r.style.padding=0,r.style.border="none",r.style.outline="none",r.style.boxShadow="none",r.style.background="transparent",r.value=v,document.body.appendChild(r),r.focus(),r.select();try{document.execCommand("copy")&&e()}catch(e){t()}document.body.removeChild(r)}))).then((()=>r((0,u.S1)("Copied to clipboard!","success")))).catch((()=>r((0,u.S1)("Could not copy. Something went wrong.","error"))));var v},$=(e,t,r={})=>(n,s,{api:o})=>{const l="contributors"===t?"entities":"users",c=r.nextURL&&!r.initial,i=r.sortOptions?r.sortOptions.asc:"-",a=r.sortOptions?r.sortOptions.key:(e=>{switch(e){case"favorites":return"favorited_at";case"contributions":return"last_contribution";case"contributors":return"contributions";case"unpublished_drafts":return"date_updated";default:return""}})(t),u=c?r.nextURL.slice(r.nextURL.indexOf(l)):`${l}/${e}/${t}/`,y=c?{}:{ordering:`${i}${a},name`};return n((e=>e.sortOptions?{type:B}:e.initial?{type:K}:!1===e.initial?{type:C}:void 0)(r)),o.get(u,y).then((s=>{const o=[{type:_,payload:{params:r}}];var l,c;r.initial?o.push((l=t,c={rows:s.results.map((e=>({...e,discard:!0}))),nextURL:s.next,dataSlug:e},{type:b,payload:{tableKey:l,table:c}})):!1===r.initial&&o.push(((e,t,r)=>({type:x,payload:{tableKey:e,nextURL:t,rows:r}}))(t,s.next,s.results)),n((0,d.X)(o))})).catch((()=>{n({type:R})}))}},48763:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(e,t)=>{let r=0;return(...n)=>{const s=new Date;s-r>=t&&(e(...n),r=s)}}}}]);