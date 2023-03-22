(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},g="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},k=ba(this),m=function(a,b){if(b)a:{var c=k;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&g(c,a,{configurable:!0,writable:!0,value:b})}};
m("Symbol",function(a){if(a)return a;var b=function(e,h){this.h=e;g(this,"description",{configurable:!0,writable:!0,value:h})};b.prototype.toString=function(){return this.h};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,f=function(e){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new b(c+(e||"")+"_"+d++,e)};return f});
m("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=k[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&g(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});
var ca=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}n=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=n,ja=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype},ka=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f};
m("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};var f=[],e="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof e){b=e.call(b);for(var h=0;!(e=b.next()).done;)f.push(c.call(d,e.value,h++))}else for(e=b.length,h=0;h<e;h++)f.push(c.call(d,b[h],h));return f}});m("Array.prototype.values",function(a){return a?a:function(){return ka(this,function(b,c){return c})}});
m("Array.prototype.fill",function(a){return a?a:function(b,c,d){var f=this.length||0;0>c&&(c=Math.max(0,f+c));if(null==d||d>f)d=f;d=Number(d);0>d&&(d=Math.max(0,f+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});var p=function(a){return a?a:Array.prototype.fill};m("Int8Array.prototype.fill",p);m("Uint8Array.prototype.fill",p);m("Uint8ClampedArray.prototype.fill",p);m("Int16Array.prototype.fill",p);m("Uint16Array.prototype.fill",p);m("Int32Array.prototype.fill",p);
m("Uint32Array.prototype.fill",p);m("Float32Array.prototype.fill",p);m("Float64Array.prototype.fill",p);m("globalThis",function(a){return a||k});m("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var r=this||self,la=function(a){"object"!=typeof a||a&&Array.isArray(a)},ma=function(a){return a};function t(){var a=r.navigator;return a&&(a=a.userAgent)?a:""}function u(a){return-1!=t().indexOf(a)};function na(){return u("Firefox")||u("FxiOS")}function oa(){return(u("Chrome")||u("CriOS"))&&!u("Edge")||u("Silk")};function pa(){return u("iPhone")&&!u("iPod")&&!u("iPad")}function qa(){pa()||u("iPad")||u("iPod")};var ra=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in f&&(d[e]=b.call(void 0,f[e],e,a));return d},sa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a))return!0;return!1};u("Opera");var ta=u("Trident")||u("MSIE");u("Edge");!u("Gecko")||-1!=t().toLowerCase().indexOf("webkit")&&!u("Edge")||u("Trident")||u("MSIE")||u("Edge");-1!=t().toLowerCase().indexOf("webkit")&&!u("Edge")&&u("Mobile");u("Macintosh");u("Windows");u("Linux")||u("CrOS");var ua=r.navigator||null;ua&&(ua.appVersion||"").indexOf("X11");u("Android");pa();u("iPad");u("iPod");qa();t().toLowerCase().indexOf("kaios");na();pa()||u("iPod");u("iPad");!u("Android")||oa()||na()||u("Opera")||u("Silk");oa();!u("Safari")||oa()||u("Coast")||u("Opera")||u("Edge")||u("Edg/")||u("OPR")||na()||u("Silk")||u("Android")||qa();var va={},v=null;var wa="undefined"!==typeof Uint8Array,xa=!ta&&"function"===typeof r.btoa;var w="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function x(a,b){if(w)return a[w]|=b;if(void 0!==a.m)return a.m|=b;Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function y(a){var b;w?b=a[w]:b=a.m;return null==b?0:b}function z(a,b){w?a[w]=b:void 0!==a.m?a.m=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function ya(a,b){z(b,(a|0)&-51)}function B(a,b){z(b,(a|18)&-41)};var za={};function C(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var Aa,D,Ba=[];z(Ba,23);D=Object.freeze(Ba);function Ca(a){var b=a.length;(b=b?a[b-1]:void 0)&&C(b)?b.g=1:(b={},a.push((b.g=1,b)))};var Da=function(a){var b=a.A+a.s;return a.o||(a.o=a.i[b]={})},E=function(a,b,c,d){if(y(a.i)&2)throw Error();return Ea(a,b,c,d)},Ea=function(a,b,c,d){a.D&&(a.D=void 0);if(b>=a.A||d)return Da(a)[b]=c,a;a.i[b+a.s]=c;(c=a.o)&&b in c&&delete c[b];return a},Fa=function(a,b,c,d){if(y(a.i)&2)throw Error();if(null==c)var f=D;else f=[],x(f,1);var e=f;if(null!=c){f=!!c.length;for(var h=0;h<c.length;h++){var l=c[h];f=f&&!(y(l.i)&2);e[h]=l.i}f=(f?8:0)|1;h=y(e);(h&f)!==f&&(Object.isFrozen(e)&&(e=Array.prototype.slice.call(e)),
z(e,h|f));a.h||(a.h={});a.h[b]=c}else a.h&&(a.h[b]=void 0);return Ea(a,b,e,d)};var F;function Ga(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(y(a)&128))return a=Array.prototype.slice.call(a),Ca(a),a}else if(wa&&null!=a&&a instanceof Uint8Array){if(xa){for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);a=btoa(b)}else{void 0===b&&(b=0);if(!v){v={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var e=c.concat(d[f].split(""));va[f]=e;for(var h=0;h<e.length;h++){var l=e[h];void 0===v[l]&&(v[l]=h)}}}b=va[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=e=0;e<a.length-2;e+=3){var q=a[e],A=a[e+1];l=a[e+2];h=b[q>>2];q=b[(q&3)<<4|A>>4];A=b[(A&15)<<2|l>>6];l=b[l&63];c[f++]=h+q+A+l}h=0;l=d;switch(a.length-e){case 2:h=a[e+1],l=b[(h&15)<<2]||d;case 1:a=a[e],c[f]=b[a>>2]+b[(a&3)<<4|h>>4]+l+d}a=c.join("")}return a}}return a};function Ha(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Ia(a,b,c,void 0!==d);else if(C(a)){var f={},e;for(e in a)f[e]=Ha(a[e],b,c,d);a=f}else a=b(a,d);return a}}function Ia(a,b,c,d){var f=y(a);d=d?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(var e=0;e<a.length;e++)a[e]=Ha(a[e],b,c,d);c(f,a);return a}function Ja(a){return a.C===za?a.toJSON():Ga(a)}function Ka(a,b){a&128&&Ca(b)};function La(a,b,c){c=void 0===c?B:c;if(null!=a){if(wa&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=y(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return z(a,d|18),a;a=Ia(a,La,d&4?B:c,!0);b=y(a);b&4&&b&2&&Object.freeze(a);return a}return a.C===za?Ma(a):a}}function Na(a,b,c,d,f,e,h){(a=a.h&&a.h[c])?(d=y(a),d&2?d=a:(e=ra(a,Ma),B(d,e),Object.freeze(e),d=e),Fa(b,c,d,f)):E(b,c,La(d,e,h),f)}function Ma(a){if(y(a.i)&2)return a;a=Oa(a,!0);x(a.i,18);return a}
function Oa(a,b){var c=a.i,d=[];x(d,16);var f=a.constructor.h;f&&d.push(f);f=a.o;if(f){d.length=c.length;d.fill(void 0,d.length,c.length);var e={};d[d.length-1]=e}0!==(y(c)&128)&&Ca(d);b=b||y(a.i)&2?B:ya;e=a.constructor;F=d;d=new e(d);F=void 0;a.B&&(d.B=a.B.slice());e=!!(y(c)&16);for(var h=f?c.length-1:c.length,l=0;l<h;l++)Na(a,d,l-a.s,c[l],!1,e,b);if(f)for(var q in f)Na(a,d,+q,f[q],!0,e,b);return d};var G=function(a,b,c,d){null==a&&(a=F);F=void 0;var f=this.constructor.h;if(null==a){a=f?[f]:[];var e=48;var h=!0;d&&(e|=128);z(a,e)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();e=x(a,0)|32;h=0!==(16&e);if(d){if(!(e&128)&&0<a.length){var l=a[a.length-1];if(C(l)&&"g"in l){e|=128;delete l.g;var q=!0,A;for(A in l){q=!1;break}q&&a.pop()}else throw Error();}}else if(128&e)throw Error();z(a,e)}this.s=f?0:-1;this.h=void 0;this.i=a;a:{e=this.i.length;f=e-1;if(e&&(e=this.i[f],C(e))){this.o=
e;this.A=f-this.s;break a}void 0!==b&&-1<b?(this.A=Math.max(b,f+1-this.s),this.o=void 0):this.A=Number.MAX_VALUE}if(!d&&this.o&&"g"in this.o)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!0;d=this.A;var O;for(h=0;h<c.length;h++)f=c[h],f<d?(f+=this.s,(e=a[f])?Pa(e,b):a[f]=D):(O||(O=Da(this)),(e=O[f])?Pa(e,b):O[f]=D)}};G.prototype.toJSON=function(){var a=this.i;return Aa?a:Ia(a,Ja,Ka)};G.prototype.clone=function(){return Oa(this,!1)};
function Pa(a,b){if(Array.isArray(a)){var c=y(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&z(a,c|d)}}G.prototype.C=za;G.prototype.toString=function(){return this.i.toString()};function Qa(a,b){return Ga(b)};var H,Ra=function(){if(void 0===H){var a=null,b=r.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ma,createScript:ma,createScriptURL:ma})}catch(c){r.console&&r.console.error(c.message)}H=a}else H=a}return H};var I=function(a,b){this.h=b===Sa?a:""};I.prototype.toString=function(){return this.h+""};var Sa={};var Ta={},J=function(a,b){this.h=b===Ta?a:""};J.prototype.toString=function(){return this.h.toString()};var Wa=function(a,b){if(!Ua()){var c=Math.random();if(c<b)return c=Va(),a[Math.floor(c*a.length)]}return null},Va=function(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Ua=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return sa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Xa)||1E-4>Math.random()}),Xa=function(a){return-1!=
t().indexOf(a)};var Ya=function(a){G.call(this,a)};ja(Ya,G);var $a=function(a){G.call(this,a,-1,Za)};ja($a,G);var ab=function(a,b){return E(a,2,b)},bb=function(a,b){return E(a,3,b)},cb=function(a,b){return E(a,4,b)},db=function(a,b){return E(a,5,b)},eb=function(a,b){return E(a,9,b)},fb=function(a,b){return Fa(a,10,b)},gb=function(a,b){return E(a,11,b)},hb=function(a,b){return E(a,1,b)},ib=function(a,b){return E(a,7,b)},Za=[10,6];var jb="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function kb(){var a;return null!=(a=r.google_tag_data)?a:r.google_tag_data={}}function lb(){var a,b;return"function"===typeof(null==(a=r.navigator)?void 0:null==(b=a.userAgentData)?void 0:b.getHighEntropyValues)}
function mb(){if(!lb())return null;var a=kb();if(a.uach_promise)return a.uach_promise;var b=r.navigator.userAgentData.getHighEntropyValues(jb).then(function(c){null!=a.uach||(a.uach=c);return c});return a.uach_promise=b}
function nb(a){var b;return gb(fb(db(ab(hb(cb(ib(eb(bb(new $a,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ya;d=E(d,1,c.brand);return E(d,2,c.version)}))||[]),a.wow64||!1)};var ob=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!0;case "http:":return!1}}catch(c){}return!0}(r)?"https:":"http:",pb={},qb=(pb[1]="A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",pb);var K=[],L=function(a){this.id=a.id;this.j=a.j;this.l=a.l;K.push(this)},rb=new L({id:1,j:{u:"40004000",v:"40004001"},l:1}),M=new L({id:4,j:{u:"40004006",v:"40004007"},l:4}),sb=new L({id:5,j:{u:"40004008",v:"40004009"},l:4}),tb=new L({id:12,j:{u:"44752204",v:"44752205"},l:11}),ub=new L({id:13,j:{u:"44761098",F:"44761099",G:"44761100",H:"44761101"},l:12}),vb=new L({id:14,j:{u:"44762123",v:"44762124"},l:13});function wb(){var a={};a[rb.id]=.5;a[M.id]=.02;a[sb.id]=.001;a[tb.id]=.001;a[ub.id]=.001;a[vb.id]=.05;return a}function xb(){var a=yb,b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return!1;b=(b="undefined"!=typeof Symbol&&Symbol.iterator&&K[Symbol.iterator])?b.call(K):{next:aa(K)};for(var c=b.next();!c.done;c=b.next())if(c=a[c.value.id],"number"!==typeof c||0>c||1<c)return!1;return!0};/*

 SPDX-License-Identifier: Apache-2.0
*/
function zb(a){return null===a?"null":void 0===a?"undefined":a};function Ab(){if(!r.dcmads.uach){var a=mb();a&&(r.dcmads.uachp=a.then(function(b){var c=r.dcmads;a:{b=nb(b);Aa=!0;try{var d=JSON.stringify(b.toJSON(),Qa);break a}finally{Aa=!1}d=void 0}c.uach=d}))}};try{r.dcmads=r.dcmads||{};r.dcmads.startTime=(new Date).getTime();var Bb=r.dcmads,N=r.dcmads.version,P={loader:280};if(N)if(P.experiment=N.experiment,95==N.number||"p"==N.number)P.number=95;else if(95==N.number||"c"==N.number)P.number=95;if(!P.number){var Cb=Wa([95,95],0);P.experiment=!!Cb;P.number=Cb||95}Bb.version=P;var Db=r.dcmads,Eb,yb=r.dcmads.expts,Q;Q=void 0===Q?wb:Q;Eb=xb()?yb:Q();Db.expts=Eb;var Fb=r.dcmads,Gb;var Hb=r.dcmads;if(null!=Hb.eids)Gb=Hb.eids;else{var Ib=[],Jb=r.navigator;if(Jb.connection&&
Jb.connection.saveData){var Kb=Wa(Object.values(M.j),Hb.expts[M.id]);Kb&&Ib.push(M.l+"|"+Kb)}Gb=Ib.join(",")}Fb.eids=Gb;r.dcmads.ots=qb;Ab();var Lb=new RegExp("4\\|"+M.j.v),Mb=r.dcmads.version,Nb=Mb.number,Ob="";Mb.experiment&&95==Nb&&(Ob="?rxp=95x95");var Pb="impl_v"+Nb+".js"+Ob,Qb=r.document,Rb=Qb.currentScript||Array.from(Qb.getElementsByTagName("script")).pop(),Sb=(0==(Rb&&Rb.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+Pb;if(Lb.test(r.dcmads.eids)){var Tb=r.document,
R,Ub=Sb,Vb=Ub=zb(Ub),Wb=Ra(),Xb=Wb?Wb.createScriptURL(Vb):Vb;R=new I(Xb,Sa);var S,T=Tb;T=void 0===T?document:T;S=T.createElement("script");var Yb;R instanceof I&&R.constructor===I?Yb=R.h:(la(R),Yb="type_error:TrustedResourceUrl");S.src=Yb;var Zb,$b,ac,bc=null==(ac=($b=(S.ownerDocument&&S.ownerDocument.defaultView||window).document).querySelector)?void 0:ac.call($b,"script[nonce]");(Zb=bc?bc.nonce||bc.getAttribute("nonce")||"":"")&&S.setAttribute("nonce",Zb);var U=Tb.getElementsByTagName("script")[0];
U&&U.parentNode&&U.parentNode.insertBefore(S,U)}else{var cc=r.document,V,dc='<script src="'+Sb+'">\x3c/script>',ec=dc=zb(dc),fc=Ra(),gc=fc?fc.createHTML(ec):ec;V=new J(gc,Ta);var hc=cc.write,ic;V instanceof J&&V.constructor===J?ic=V.h:(la(V),ic="type_error:SafeHtml");hc.call(cc,ic)}}catch(a){if(.01>Math.random()){var jc="";try{var W,X=a,Y=X.toString();X.name&&-1==Y.indexOf(X.name)&&(Y+=": "+X.name);X.message&&-1==Y.indexOf(X.message)&&(Y+=": "+X.message);if(X.stack){var Z=X.stack,kc=Y;try{-1==Z.indexOf(kc)&&
(Z=kc+"\n"+Z);for(var lc;Z!=lc;)lc=Z,Z=Z.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");Y=Z.replace(RegExp("\n *","g"),"\n")}catch(b){Y=kc}}W=Y;W=W.substring(0,1024);jc=encodeURIComponent(W)}catch(b){jc="extr"}var mc=r.dcmads.eids,nc=document.createElement("img");nc.src=ob+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=280&context=554"+((mc?"&eids="+mc:"")+"&msg="+jc);(r.google_image_requests=r.google_image_requests||[]).push(nc)}};}).call(this);
