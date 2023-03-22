"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2831],{21286:(e,t,n)=>{n.d(t,{Z:()=>s});const s=(0,n(27378).createContext)({})},35965:(e,t,n)=>{n.d(t,{Z:()=>y}),n(95735);var s=n(78620),a=n(92739),l=n(27378),i=n(55480),o=n(7703),r=n(70490),u=n(21286),c=n(7098),d=n(46871),x=n(80140),h=n(23829),g=n(29546),p=n(78451),m=n(24246);const f=({entityId:e,context:t,fieldType:n,canBeAddedAsFilter:o,isNonInteractive:r})=>{const{getEntity:c}=(0,l.useContext)(t),{onRemove:g}=(0,l.useContext)(u.Z),f=(0,p.Z)(),v=(0,l.useMemo)((()=>o?{entityId:e,fieldType:n}:null),[n,e,o]);if(!e)return null;const y=(null==c?void 0:c(e))||f(e);if(!y)return null;if(r){const e={slug:y.slug,name:y.name,thumbnail:y.thumbnail,organization:y.organization,imgStyle:{width:15,height:15}};return(0,m.jsx)(d.Z,{...e,noLink:!0,noHoverCard:!0})}return(0,m.jsx)(h.Z.Provider,{value:v,children:(0,m.jsxs)(i.xv,{variant:"body1",className:"flex w-full",children:[(0,m.jsx)(x.Z,{slug:y.slug,name:y.name,thumbnail:y.thumbnail,organization:y.organization,imgStyle:{width:15,height:15}}),g&&(0,m.jsx)("div",{className:"pl-1 ml-auto text-gray-500 hover:text-slate-700 cursor-pointer",children:(0,m.jsx)(a.G,{icon:s.$,onClick:t=>{t.stopPropagation(),g({...n,display_value:e})}})})]})})},v=({value:e,fieldType:t,canBeAddedAsFilter:n,isNonInteractive:s=!1})=>{let a;switch(t.field_model){case"text":a=(0,m.jsx)(i.xv,{variant:"body1",sx:{wordBreak:"break-word"},children:e});break;case"url":a=(0,m.jsx)(i.xv,{variant:"body1",children:(0,m.jsx)(i.rU,{href:e,target:"_blank",variant:"body1",sx:{wordBreak:"break-word"},children:e})});break;case"float":case"int":a=(0,m.jsx)(i.xv,{variant:"body1",sx:{wordBreak:"break-word"},children:(0,g._k)(e)});break;case"location":case"entity":a=(0,m.jsx)(f,{entityId:e,fieldType:t,context:c.Z,canBeAddedAsFilter:n,isNonInteractive:s});break;case"date":a=(0,m.jsx)(i.xu,{children:o.Z.renderDate(e)});break;case"int_range":a=(0,m.jsx)(r.Z,{field:{display_value:e}});break;case"json":a=(0,m.jsx)(i.xu,{children:Object.keys(e).map((t=>(0,m.jsx)(i.xu,{children:e[t].map((e=>(0,m.jsxs)(i.xu,{children:[e.label||e.default_label,(0,m.jsx)(v,{value:e.display_value,fieldType:e})]},`${t}-${e.id}`)))},t)))});break;default:a=(0,m.jsx)(i.xu,{children:JSON.stringify(e)})}return a},y=v},23721:(e,t,n)=>{n.d(t,{Z:()=>S}),n(95735);var s=n(27378),a=n(56141),l=n.n(a),i=n(55480),o=n(35965),r=n(96137),u=n(24246);const c=({value:e,onChange:t,choices:n})=>{const a=(0,s.useCallback)((e=>t(e.display_value)),[t]),c=(0,s.useMemo)((()=>({SingleValue:({innerProps:e,innerRef:t,data:n})=>(0,u.jsx)(i.kC,{...e,ref:t,alignItems:"center",children:(0,u.jsx)(o.Z,{fieldType:n,value:n.display_value})}),Option:({innerProps:e,innerRef:t,data:n})=>(0,u.jsx)(i.kC,{...e,ref:t,height:50,alignItems:"center",bg:"bg1",px:3,sx:{transition:"background-color 0.2s ease-in",cursor:"pointer",":hover":{backgroundColor:"bg2"}},children:(0,u.jsx)(o.Z,{fieldType:n,value:n.display_value,isNonInteractive:!0})})})),[]);return(0,u.jsx)(i.xu,{onClick:e=>e.stopPropagation(),children:(0,u.jsx)(r.ZP,{options:n,value:n.filter((t=>l()(e,t.display_value)))[0],onChange:a,components:c,menuPortalTarget:"undefined"!=typeof document?document.getElementById("select-menu-portal"):null,styles:{control:e=>({...e,minWidth:180})}})})};var d=n(7703),x=n(21286);const h=({value:e={},onChange:t})=>{const[n,a]=(0,s.useState)(e),{dateSx:l}=(0,s.useContext)(x.Z),o=(0,s.useCallback)((e=>{a(e),t(e)}),[t]);return(0,u.jsx)(i.xu,{sx:l,children:(0,u.jsx)(d.Z,{value:n,onChange:o,autoFocus:!0})})};n(95623);var g=n(28206),p=n(77038);const m=({fieldType:e,EditorComponent:t,onChange:n})=>{const a=(0,g.C)((e=>e.infoboxFieldTypes.data)),l=(0,p.T3)(a,e.schema).field_types.map((e=>(0,p.Ol)(a,e))),[r,c]=(0,s.useState)({}),d=(0,s.useCallback)(((e,t)=>{c((n=>({...n,[e]:[t]})))}),[]);return(0,s.useEffect)((()=>{Object.keys(r).length&&n(r)}),[n,r]),(0,u.jsx)(i.xu,{children:l.map((e=>(0,u.jsxs)(i.xu,{children:[e.default_label,r[e.name]&&["location","entity"].includes(e.field_model)?(0,u.jsx)(o.Z,{fieldType:e,value:r[e.name][0].display_value}):(0,u.jsx)(t,{fieldType:e,onChange:(t,n)=>{d(e.name,{...e,display_value:n})},onMutate:(t,n)=>{d(e.name,{...e,display_value:n})},value:r[e.name]})]},e.id)))})};var f=n(10851),v=n(28055);const y=({value:e,onChange:t})=>{const[n,a]=(0,s.useState)(e),{inputSx:l}=(0,s.useContext)(x.Z),i=(0,s.useCallback)((e=>{const n=e.target.value;a(n),t(n)}),[t]);return(0,u.jsx)(v.gx,{value:n,onChange:i,autoFocus:!0,sx:{resize:"vertical",...l}})};var b=n(79564),C=n(50613),k=n(62412);const j=({value:e,onChange:t,autoFocus:n=!0,placeholder:a,sx:l={}})=>{const[i,o]=(0,s.useState)(e),r=(0,b.Z)(),c=(0,s.useCallback)((e=>{o(e.target.value);const n=(0,C.Z)(e.target.value);(0,k.j)(n)?t(n):t("")}),[t]),d=(0,s.useCallback)((e=>{const n=(0,C.Z)((e.clipboardData||window.clipboardData).getData("text"));(0,k.j)(n)?r(n).then((({url:e})=>{o(e),t(e)})):e.preventDefault()}),[r,t]);return(0,u.jsx)(v.II,{value:i,onChange:c,onPaste:d,autoFocus:n,placeholder:a,sx:l})};var w=n(30824),Z=n(7098),_=n(24158);const E=({fieldType:e,value:t,onChange:n,onMutate:a,contextEntityIds:l=[],contextValue:i=_.Nu})=>{const{setEntity:o,getEntity:r}=(0,s.useContext)(Z.Z),{field_model:d,choices:g=[],constraints:p}=e,v=(0,s.useCallback)((e=>{n(t,e)}),[n,t]),b=(0,s.useCallback)((e=>a(t,e)),[a,t]),C=(0,s.useCallback)((e=>{o(e),a(t,e.id)}),[a,o,t]);let k;if(g.length)k=(0,u.jsx)(c,{value:t,onChange:b,choices:g});else switch(d){case"date":k=(0,u.jsx)(h,{value:t,onChange:v});break;case"text":k=(0,u.jsx)(y,{value:t,onChange:v});break;case"url":k=(0,u.jsx)(j,{value:t,onChange:v});break;case"int":k=(0,u.jsx)(f.Z,{value:t,onChange:v});break;case"float":k=(0,u.jsx)(f.Z,{value:t,onChange:v,isInt:!1});break;case"location":case"entity":{var S;const e=(null===(S=r(t))||void 0===S?void 0:S.name)||"";k=(0,u.jsx)(w.Z,{onSelect:C,initValue:e,constraints:p,contextEntityIds:l,autoFocus:!0});break}case"json":k=(0,u.jsx)(m,{EditorComponent:E,fieldType:e,onChange:v});break;default:k=(0,u.jsx)(y,{value:JSON.stringify(t),onChange:e=>{try{v(JSON.parse(e))}catch(t){console.log("Invalid JSON",e)}}})}return(0,u.jsx)(x.Z.Provider,{value:i,children:k})},S=E},10851:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(28055),a=n(27378),l=n(39377),i=n(21286),o=n(24246);const r=({value:e,onChange:t,onBlur:n,onKeyDown:r,isInt:u=!0})=>{const{inputSx:c}=(0,a.useContext)(i.Z),d=(0,a.useCallback)(((e,n,s)=>{void 0!==s&&t(s.float)}),[t]),x=(0,a.useMemo)((()=>({sx:c})),[c]);return(0,o.jsx)(l.Z,{allowDecimals:!u,maxLength:16,customInput:s.II,defaultValue:e,decimalsLimit:10,onValueChange:d,onKeyDown:r,onBlur:n,autoFocus:!0,...x})}},95706:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(27378),a=n(55480),l=n(85717),i=n(52253),o=n(30374),r=n(24246);const u=({slug:e,name:t,listItemId:n,thumbnail:u,imgStyle:c,instanceOfIds:d=[],onMatchEntity:x})=>{if(!e)return null;const[h,g]=(0,s.useState)(!1);return(0,r.jsxs)(a.xu,{children:[(0,r.jsxs)(a.xu,{display:"flex",alignItems:"flex-start",children:[(0,r.jsx)(a.xu,{display:"inline-block",mr:2,children:(0,r.jsx)(i.Z,{imageSize:o.xC,size:null!=c&&c.height?null==c?void 0:c.height:16,thumbnail:u,instanceOfIds:d,style:c})}),(0,r.jsx)(a.xu,{display:"inline-block",children:(0,r.jsx)("span",{children:t})})]}),(0,r.jsx)(a.xu,{justifyContent:"flex-end",alignItems:"flex-end",mt:1,sx:{position:"absolute",bottom:0,right:0,display:"flex"},children:(0,r.jsx)(a.rU,{fontSize:"13px",color:"#2161DC",sx:{":hover":{color:"#0059FF"}},onClick:()=>g(!0),children:"Match manually →"})}),h&&(0,r.jsx)(l.Z,{onClose:()=>{g(!1)},onSelect:e=>{x(n,e.id),g(!1)},initValue:t,modalTitle:"Results",searchPublicOnly:!0})]})}},80930:(e,t,n)=>{n.d(t,{$:()=>E,Z:()=>S});var s=n(75937),a=n(92739),l=n(27378),i=n(23884),o=n(55480),r=n(51609),u=n(73214),c=n(7703),d=n(21286),x=n(35965),h=n(23721),g=n(7098),p=n(78990),m=n(87935),f=n(28206);var v=n(93310),y=n(58634),b=n(88718),C=n(24246);const k=[{icon:(0,C.jsx)("span",{className:"relative left-1",children:(0,C.jsx)(a.G,{icon:y.Xc})}),title:"Add data",modal:u.sS},{icon:(0,C.jsx)(b.Z,{weight:"light"}),title:"Get data",modal:u.JM}],j=()=>{const{open:e}=(0,l.useContext)(r.Z),t=(0,l.useCallback)((t=>{e(t)}),[e]);return(0,C.jsx)("div",{className:"flex flex-col",children:k.map((({icon:e,title:n,modal:s})=>(0,C.jsxs)("div",{onClick:()=>t(s),className:"flex items-center text-gray-400 cursor-pointer hover:text-blue-600 mb-2",children:[(0,C.jsx)("div",{className:"mr-1 w-[20px]",children:e}),(0,C.jsx)(o.xv,{variant:"body1",sx:{lineHeight:"tight",color:"inherit"},children:n})]},n)))})},w={dateSx:c.B},Z=({entity:e,isEditing:t,isFocused:n,column:r,setIsCellEditing:u,onAddStatementField:c,onRemoveStatementField:y,onChangeStatementField:b,isHovered:k=!1,showUnassignedUserState:Z=!1})=>{var _;const E=(0,i.v9)((e=>e.user)),{queryKey:S,updateRows:I}=(0,l.useContext)(g.Z),{fieldType:F,predicate:A,canBeAddedAsFilter:T=!1}=r,{name:R,allow_multiple:D}=F,P=(0,l.useMemo)((()=>A?e.statements.filter((e=>e.field_type===A.id)):e.infobox.filter((e=>e.name===R))),[A,R,e]),L=(0,l.useMemo)((()=>P.map((e=>e.display_value))),[P]),M=(0,l.useMemo)((()=>!n&&P.length>15?P.slice(0,15):P),[P,n]),B=(e=>{const{setOptions:t}=(0,l.useContext)(m.Z),n=(0,f.C)((e=>e.user)),{isConnected:s}=(0,p.Z)();return(0,l.useCallback)((()=>new Promise((a=>{n.canonical_cell_edited&&s?a():t({onConfirm:a,entity:e})}))),[s,t,n,e])})(e),{mutate:N,isLoading:O}=(0,v.Z)({entity:e,queryKey:S,updateRows:I}),K=(0,l.useCallback)(((...e)=>B().then((()=>N(...e)))),[N,B]),H=(0,l.useCallback)((()=>u(!1)),[u]),[z,U]=(0,l.useState)({}),V=(0,l.useCallback)((()=>{if(Object.keys(z).length){const e=Object.keys(z).map((e=>[e,...z[e]]));if(A){const[t,n,s]=e[0];null!=P&&P.length?b({...P[0],display_value:s}):c(s)}else K(e);U({}),D||H()}}),[b,c,P,A,K,z,D,H]);(0,l.useEffect)((()=>{t||V()}),[V,t,z]);const $=(0,l.useCallback)(((e,t)=>U((n=>({...n,[R]:[e,t]})))),[R]),W=(0,l.useCallback)(((e,t)=>{K([[R,e,t]]),D||H()}),[D,K,R,H]),G=(0,l.useCallback)(((e,t)=>c(t)),[c]),J=(0,l.useCallback)((e=>y(e)),[y]),Q=(0,l.useCallback)((e=>{"Enter"===e.key&&V()}),[V]),q=Z&&!E.isAuthenticated&&!P.length&&(k||n),X=(0,l.useMemo)((()=>t?{onRemove:e=>{A?J(e.id):W(e.display_value,null)}}:{}),[t,J,A,W]);return(0,C.jsx)(o.xu,{sx:{display:"flex",flexDirection:"column",position:"relative",flex:1},onKeyDown:Q,children:q?(0,C.jsx)(j,{}):(0,C.jsxs)(C.Fragment,{children:[(!t||D)&&(0,C.jsx)(o.xu,{children:M.map(((e,t)=>(0,C.jsx)(o.xu,{sx:{display:"flex",alignItems:"center",mb:"2px"},children:(0,C.jsx)(d.Z.Provider,{value:X,children:(0,C.jsx)(x.Z,{fieldType:F,value:e.display_value,canBeAddedAsFilter:T})})},`${t}-${e.display_value}`)))}),(0,C.jsx)(o.xu,{onClick:e=>e.stopPropagation(),children:t&&(0,C.jsx)(h.Z,{fieldType:F,value:D?"":null===(_=P[0])||void 0===_?void 0:_.display_value,onChange:$,onMutate:A?G:W,contextEntityIds:L,contextValue:w},P.length)}),O&&(0,C.jsx)(o.xu,{sx:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:0,right:0,bottom:0,left:0,bg:"rgba(255,255,255,0.3)"},children:(0,C.jsx)(a.G,{icon:s.LM,spin:!0,size:"lg"})})]})})},_=(0,l.memo)(Z),E=({row:e,cell:t,column:n,_setIsCellEditing:s,...a})=>{const{open:o}=(0,l.useContext)(r.Z),c=(0,i.v9)((e=>e.user)),{isHovered:d}=t.getCellProps();return(0,l.useEffect)((()=>{t.isEditing&&!c.isAuthenticated&&(o(u.sS),s(!1))}),[t.isEditing,s,c.isAuthenticated,o]),(0,C.jsx)(_,{isHovered:d,entity:e.original,isFocused:t.isFocused,isEditing:t.isEditing,column:n,onAddStatementField:a.onAddStatementField,onRemoveStatementField:a.onRemoveStatementField,onChangeStatementField:a.onChangeStatementField,setIsCellEditing:s,showUnassignedUserState:!0})},S=_},42865:(e,t,n)=>{n.d(t,{Z:()=>f}),n(95623);var s=n(61528),a=n(92739),l=n(27378),i=n(55480),o=n(24158),r=n(10734),u=n(80643),c=n(24246);const d=["editor-buttons-root","modal-portal","select-menu-portal","dropdown-portal"],x=(e,t)=>`${e}-${t}`,h=(e,t,n,s=[])=>{const a=Math.min(Math.max(e+t,0),n.length-1),l=n[a];if(s.includes(l.id)){const l=t>0?t+1:t-1,i=a&&a!==n.length-1?l:0;return h(e,i,n,s)}return a},g=e=>{const t=(0,l.useRef)(null),[n,s]=(0,l.useState)(null),[a,i]=(0,l.useState)(!1),o=(0,l.useRef)({}),r=(0,l.useCallback)((()=>{const e=o.current[n];return e&&e.column.isEditable}),[n]),c=(0,l.useCallback)((e=>{i(e&&r())}),[r]),g=(0,l.useCallback)((e=>{(e=>{let t=!1,n=!1,s=e;for(;s;){if(d.includes(s.id)&&(n=!0),s===document.documentElement){t=!0;break}s=s.parentElement}return n||!t})(e.target)||(c(!1),s(null))}),[c]),p=(0,l.useCallback)((t=>{if(t.defaultPrevented)return;const{key:l,keyCode:i}=t;switch(l){case"Enter":r()&&(t.preventDefault(),c(!0));break;case"Escape":t.preventDefault(),a?c(!1):s(null);break;case"ArrowLeft":case"ArrowRight":case"Tab":case"ArrowDown":case"ArrowUp":{if(a)break;t.preventDefault();const i="ArrowDown"===l?1:"ArrowUp"===l?-1:0,r="ArrowRight"===l||"Tab"===l?1:"ArrowLeft"===l?-1:0,{rows:u,allColumns:c,getTableProps:d}=e,[g,p]=(o=n)?o.split("-").map(Number):[-1,-1],{focusColumnBlacklist:m}=d(),f=Math.min(Math.max(Number(g)+i,0),u.length-1),v=h(Number(p),r,c,m);s(x(f,v))}break;default:/[a-zA-Z0-9]/.test(String.fromCharCode(i))&&r()&&c(!0)}var o}),[r,c,a,e,n]);(0,l.useEffect)((()=>{if(null!=n)return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}}),[n,p]),(0,u.Z)(t,g),Object.assign(e,{focusedKey:n,cellsRef:o,setFocusedKey:s,isCellEditing:a,setIsCellEditing:c,_setIsCellEditing:i,tableRef:t})},p=({isFocused:e,setIsCellEditing:t,setFocusedKey:n,focusKey:o,children:u,remainingRowsCount:d})=>{const x=(0,l.useRef)(null),h=(0,r.Z)(x,e);return(0,c.jsxs)(i.xu,{ref:x,sx:{display:"flex",height:"100%",width:"100%",p:2,...e?{position:"absolute",maxHeight:70*d+"px",height:"auto",minWidth:"100%",minHeight:"100%",overflowY:"auto",top:0,left:0,right:0,zIndex:2,outline:"1px solid",outlineColor:"gold40",outlineOffset:"-1px",boxShadow:"medium",backgroundColor:"bg1"}:{overflow:"hidden"}},onClick:()=>{t(!1),n(o)},onDoubleClick:()=>{n(o),t(!0)},children:[u,h&&(0,c.jsx)(i.kC,{sx:{position:"absolute",bottom:1,right:1,border:1,borderRadius:"sm",backgroundColor:"bg1",height:"14px",width:"14px",color:"text1",alignItems:"center",justifyContent:"center",fontSize:"10px",cursor:"pointer"},children:(0,c.jsx)(a.G,{icon:s.TT,fixedWidth:!0})})]})},m=(e,{instance:{focusedKey:t,cellsRef:n,setFocusedKey:s,isCellEditing:a,setIsCellEditing:l,getTableProps:i,rows:o}})=>{const{focusColumnBlacklist:r}=i();e.allCells.forEach(((i,u)=>{if(r.includes(i.column.id))return;const d=x(e.index,u);n.current[d]=i;const h=t===d,g=h&&a;i.isEditing=g,i.isFocused=h,i.cellKey=d;const m=i.render;i.render=(...t)=>(0,c.jsx)(p,{isFocused:h,setIsCellEditing:l,setFocusedKey:s,focusKey:d,remainingRowsCount:o.length-e.index,children:m(...t)})}))},f=(e=o.LZ)=>(0,l.useCallback)((t=>{t.getTableProps.push(((t,{instance:n})=>[t,{ref:n.tableRef,focusColumnBlacklist:((null==t?void 0:t.focusColumnBlacklist)||[]).concat(e)}])),t.useInstance.push(g),t.prepareRow.push(m)}),[e])},72658:(e,t,n)=>{n.d(t,{Z:()=>c}),n(73902);var s=n(27378);const a=(e,{instance:t})=>[e,{sx:{...e.sx,borderLeft:1,borderRight:1}}],l=(e,{instance:t})=>{const n=t.columns.reduce(((e,t)=>e+(t.width||0)),0),a=(0,s.useMemo)((()=>({...e.sx,minWidth:n,maxWidth:"100%",bg:"white"})),[e.sx,n]);return[e,{sx:a}]},i=(e,{instance:t})=>[e,{sx:{minWidth:t.columns.reduce(((e,t)=>e+(t.width||0)),0)}}],o=(e,{instance:t})=>[e,{sx:{...e.sx,p:2,bg:"gray20",borderTop:1,borderBottom:1,borderRight:1,color:"text2",":last-child":{borderRight:0},display:"flex",alignItems:"center","&, & > textarea":{color:"text2",fontSize:11,fontWeight:700,letterSpacing:"0.13em",textTransform:"uppercase"}}}],r=(e,{instance:t})=>[e,{sx:{...e.sx,borderBottom:1}}],u=(e,{instance:t})=>[e,{sx:{...e.sx,borderRight:1,position:"relative",height:70,":last-child":{borderRight:"none"}}}],c=e=>{e.getTableProps.push(a),e.getTableBodyProps.push(l),e.getHeaderGroupProps.push(i),e.getHeaderProps.push(o),e.getRowProps.push(r),e.getCellProps.push(u)}},80140:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(27378),a=n(46871),l=n(28206),i=n(63243),o=n(24246);const r=({slug:e,attributes:t={},...n})=>{const r=(0,l.T)(),u=(0,s.useCallback)((t=>{t.metaKey||(t.stopPropagation(),t.preventDefault(),r((0,i.Ls)(e)))}),[r,e]),c=(0,s.useMemo)((()=>({...t,onClick:u})),[u,t]),d=(0,s.useMemo)((()=>({name:"",...n,slug:e,attributes:c})),[e,c,n]);return(0,o.jsx)(a.Z,{...d})}},10734:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(27378);const a=(e,t)=>{const[n,a]=(0,s.useState)(!1),l=(0,s.useCallback)((()=>{if(t)return void a(!1);const n=e.current,s=null==n?void 0:n.firstChild;if(!(s&&s instanceof HTMLElement))return;const l=s.getBoundingClientRect(),i=n.getBoundingClientRect();a(l.width>i.width||s.scrollHeight>i.height)}),[e,t]);return(0,s.useEffect)((()=>{l()}),[l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[l]),n}},93310:(e,t,n)=>{n.d(t,{Z:()=>d,d:()=>c});var s=n(56552),a=n(23884),l=n(93841),i=n(23113),o=n(22478),r=n(47869);const u=(e,t,n)=>({...e,results:e.results.map((e=>{if(e.slug!==t.slug&&e.id!==t.id)return e;const s=[...n],a=e.infobox.filter((e=>!n.some((([t,n,s])=>t===e.name&&n===e.display_value))&&e.display_value),[]);for(const e of s){const[t,n,s]=e;(s||0===s)&&a.push({name:t,display_value:s})}return{...e,infobox:a}}))}),c=e=>{const t={add:[],remove:[]};for(const n of e){const[e,s,a]=n;for(const[n,l]of[[s,t.remove],[a,t.add]])(n||0===n)&&l.push({name:e,display_value:n})}return t},d=({entity:e,queryKey:t,updateRows:n})=>{const d=(0,r.Z)(),x=(0,s.useQueryClient)(),h=(0,l.A)(),g=(0,a.I0)(),p=(0,a.v9)((e=>e.user.isAdmin||e.user.isHelper));return(0,s.useMutation)((t=>{const n=c(t);return d.post(`entities/${e.slug}/atomic_edit/?scoped=false`,n)}),{onSuccess:(s,a)=>(t&&(x.setQueryData(t,(t=>u(t,e,a))),p||g((0,o.S1)("Thank you for your edit, it will be published after review","success"))),n&&n(u,e,a),g((0,i.qS)({canonical_cell_edited:!0})),s),onError:t=>(403===t.response.status&&t.response.json().then((e=>{h(e,"error",6e3)})),console.log(`Update to infobox for "${e.name}" failed: `,t.message),t)})}},63243:(e,t,n)=>{n.d(t,{H8:()=>g,Hv:()=>p,Ls:()=>h,dL:()=>m});var s=n(24158),a=n(42577),l=n(76553),i=n(5606),o=n(51493),r=n(77106);const u="entityQuickView",c="SHOW_ENTITY_QUICK_VIEW",d={entity:null},x=(0,o.Rk)(u);r.Z.register(u,(0,o.Jz)({entityData:x},((e=d,t)=>{const{type:n}=t;return n===c?{...e,entity:t.payload}:e})));const h=e=>({type:c,payload:e}),g=e=>(t,n,{api:o})=>(t(x.setFetching()),o.get(`entities/${e}/?scoped=false&quick_view=true`).then((e=>{const{citations:n}=(0,a.Fr)(e);t((0,i.X)([(0,l.A4)(),(0,l.y6)(e.localData&&e.localData.entities||{}),{type:s.gM,payload:{citations:n}}])),t(x.setSuccess(e)),t((0,l.LS)(n))})).catch((e=>{t(x.setError())}))),p=e=>e.entityQuickView.entity,m=e=>e.entityQuickView.entityData}}]);