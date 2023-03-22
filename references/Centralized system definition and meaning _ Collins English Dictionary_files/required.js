














































































var Configuration=function(){this.toggleArray=[];this.request=new XMLHttpRequest();this.headerRequest=null;this.lastTime=0;var b=["ms","moz","webkit","o"];for(var a=0;a<b.length&&!window.requestAnimationFrame;
++a){window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[b[a]+"CancelAnimationFrame"]||window[b[a]+"CancelRequestAnimationFrame"]}};Configuration.prototype.isMobileDevice=function(){return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
};Configuration.prototype.arrayFrom=function(d){if(d.length==undefined){d=[d]}if(Array.from){return Array.from(d)}var c=[];for(var a=0,b=d.length;a<b;a++){c.push(d[a])}return c};Configuration.prototype.setCookie=function(b,f,a){if(!this.isTypeOfObject(a)){console.error("The 3rd parameter has to be of type Object.");
return}var e=new Date();var g=a.expires?a.expires*24*60*60*1000:20*60*60*1000;e.setTime(e.getTime()+g);var c=b+"="+encodeURIComponent(f);if(a.expires){c+=";expires="+a.expires}if(a.path){c+=";path="+a.path
}if(a.domain){c+=";domain="+a.domain}document.cookie=c};Configuration.prototype.getCookie=function(d){var b=d+"=";var f=decodeURIComponent(document.cookie);var a=f.split(";");for(var e=0,g=a.length;e<g;
e++){var h=a[e].trim();if(h.indexOf(b)==0){return h.substring(b.length,h.length)}}return null};Configuration.prototype.findUniqueSelector=function(b,h){var j=[];var h=h||document;var c=/^(?:([\w-]+)|#([\w-]+)|\.([\w-]+))$/;
var f=c.exec(b);if(f&&f[2]){var e=document.getElementById(f[2]);if(e){j.push(e);j.length=1}return j}else{if(f&&f[3]){var a=h.getElementsByClassName(f[3]);var g=a.length;if(g>0){for(var d=0;d<g;d++){j.push(a[d])
}j.length=g}return j}else{if(f&&f[1]){var a=h.getElementsByTagName(f[1]);var g=a.length;if(g>0){for(var d=0;d<g;d++){j.push(a[d])}j.length=g}return j}}}return j};Configuration.prototype.findUnique=function(a,c){var b=this.find(a,c);
return(b.length>0)?b[0]:null};Configuration.prototype.getOffset=function(c){var b=0;var a=0;while(c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop)){b+=c.offsetLeft-c.scrollLeft;a+=c.offsetTop-c.scrollTop;c=c.offsetParent
}return{top:a,left:b}};Configuration.prototype.find=function(d,e){var c=this;var h=d.trim().split(" ");var b=h.length==1;var a=[];e=e||document;if(typeof e==="string"){e=c.findUniqueSelector(e);if(e.length<1){e=document
}}var g=Array.isArray(e)?e[0]:e;if(b){a=c.findUniqueSelector(h,g)}if(!b||a.length==0){var f=g.querySelectorAll(d.replace(/(\n|\r)/g,""));return c.arrayFrom(f)}return a};Configuration.prototype.cewa=function(e,b,f){b=b||{};
if(!this.isTypeOfObject(b)){console.error("The 2nd parameter has to be of type Object.");return}var e=document.createElement(e);for(var c=0,d=Object.keys(b).length;c<d;c++){var a;if(Object.values){a=Object.values(b)
}else{a=Object.keys(b).map(function(g){return b[g]})}e.setAttribute(Object.keys(b)[c],a[c])}if(f){var f=document.createTextNode(f);e.appendChild(f)}return e};Configuration.prototype.bind=function(b,a,c){if(!b){return
}if(!Array.isArray(b)&&!(b instanceof NodeList)){b=[b]}b.forEach(function(d){d.addEventListener(a,c)})};Configuration.prototype.click=function(a,b){this.bind(a,"click",b)};Configuration.prototype.change=function(a,b){this.bind(a,"change",b)
};Configuration.prototype.hide=function(a){this.hideOrShow(a,false)};Configuration.prototype.show=function(a){this.hideOrShow(a,true)};Configuration.prototype.hideOrShow=function(c,b){if(!c){return}var a=this;
if(!Array.isArray(c)){c=this.arrayFrom(c)}c.forEach(function(f){var d=a.checkAndAddToggleArray(f);f.style.display=b?d.display:"none"})};Configuration.prototype.fadeIn=function(a,b,c){this.fade(a,b,c,true)
};Configuration.prototype.fadeOut=function(a,b,c){this.fade(a,b,c,false)};Configuration.prototype.fade=function(b,c,e,d){if(!b){return}c=c||400;var a=this.checkAndAddToggleArray(b);if(d){b.style.opacity="0";
b.style.display=a.display}b.style.transitionProperty="opacity";b.style.transitionDuration=c+"ms";b.offsetHeight;b.style.opacity=d?"1":"0";window.setTimeout(function(){b.style.removeProperty("transition-property");
b.style.removeProperty("transition-duration");if(!d){b.style.display="none"}if(typeof e==="function"){e.call(b)}},c)};Configuration.prototype.slideUp=function(b,d,g){var a=this;if(!b){return}d=d||400;this.checkAndAddToggleArray(b);
var f=parseInt(window.getComputedStyle(b).height);var e=(new Date()).getTime();b.classList.add("slideUp");var c=function(){var h=(new Date()).getTime()-e;if(h<=d){var i=f-(h/d)*f;b.style.height=i+"px";
a.requestAnimationFrame(c)}else{b.style.display="none";b.style.removeProperty("height");b.classList.remove("slideUp");if(typeof g==="function"){g.call(b)}}};a.requestAnimationFrame(c)};Configuration.prototype.slideDown=function(c,d,e){if(!c){return
}d=d||400;var b=this.checkAndAddToggleArray(c);c.style.display=b.display;var a=parseFloat(getComputedStyle(c,null).height.replace("px",""));c.classList.add("slideDown");c.style.transitionDuration=d+"ms";
c.offsetHeight;c.style.height=a+"px";window.setTimeout(function(){c.classList.remove("slideDown");c.style.removeProperty("transition-duration");if(typeof e==="function"){e.call(c)}},d)};Configuration.prototype.toggleSlide=function(a,c,d){var b=window.getComputedStyle(a);
if(b.display=="none"){this.slideDown(a,c,d)}else{this.slideUp(a,c,d)}};Configuration.prototype.toggleFade=function(a,c,d){var b=window.getComputedStyle(a);if(b.display=="none"){this.fadeIn(a,c,d)}else{this.fadeOut(a,c,d)
}};Configuration.prototype.toggle=function(b){if(!b){return}var c=b.style.display;var a=this.checkAndAddToggleArray(b);b.style.display=c=="none"?a.display:"none"};Configuration.prototype.setCss=function(b,a){if(!this.isTypeOfObject(a)){console.error("The 2nd parameter has to be of type Object.");
return}for(var c in a){b.style[c]=a[c]}};Configuration.prototype.getHeight=function(a){return this.getWidthOrHeight(a,false)};Configuration.prototype.getWidth=function(a){return this.getWidthOrHeight(a,true)
};Configuration.prototype.getWidthOrHeight=function(c,d){if(c==null){return 0}var b=getComputedStyle(c).display;if(b=="none"){c.style.display="block"}var a=d?c.offsetWidth:c.offsetHeight;c.style.display=b;
return a};Configuration.prototype.triggerEvent=function(a,d,b){var c=document.createEvent(b);c.initEvent(d,true,false);a.dispatchEvent(c)};Configuration.prototype.getParent=function(e,b){if(!b){return e.parentNode
}var a=null;var h=this.find(b);if(h.length==0){return a}var c=e;var g=h.length;while(a==null&&c.parentNode!=null){var f=c.parentNode;for(var d=0;d<g&&a==null;d++){if(f==h[d]){a=f}}c=f}return a};Configuration.prototype.getParents=function(d,b){if(d==null){return[]
}if(!b){return d.parentNode}var a=[];var f=this.find(b);if(f.length==0){return a}var c=d;while(c.parentNode!=null&&a.length!=f.length){var e=c.parentNode;f.forEach(function(g){if(e==g){a.push(e)}});c=e
}return a};Configuration.prototype.getNext=function(e,b){if(!b){return e.nextElementSibling}var a=[];var g=this.find(b);if(g.length<1){return a}var d=e;while(d.nextElementSibling!=null&&g.length!=a.length){var f=d.nextElementSibling;
g.forEach(function(c){if(c==f){a.push(f)}});d=f}return a};Configuration.prototype.isVisible=function(d){if(!(d instanceof Element)){throw Error("DomUtil: elem is not an element.")}const c=getComputedStyle(d);
if(c.display==="none"){return false}if(c.visibility!=="visible"){return false}if(c.opacity<0.1){return false}if(d.offsetWidth+d.offsetHeight+d.getBoundingClientRect().height+d.getBoundingClientRect().width===0){return false
}const a={x:d.getBoundingClientRect().left+d.offsetWidth/2,y:d.getBoundingClientRect().top+d.offsetHeight/2};if(a.x<0){return false}if(a.x>(document.documentElement.clientWidth||window.innerWidth)){return false
}if(a.y<0){return false}if(a.y>(document.documentElement.clientHeight||window.innerHeight)){return false}var b=document.elementFromPoint(a.x,a.y);do{if(b===d){return true}}while(b=b.parentNode);return false
};Configuration.prototype.animate=function(f,g,e){var c=this;g=g||{};e=e||{};if(!Array.isArray(f)){f=this.arrayFrom(f)}var b=performance.now();var a=function(i){return i<0.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1
};var h=e.duration?e.duration:500;function d(){var k=performance.now()-b;var j=a(k/h);if(j>=1){j=1;if(e.complete&&typeof e.complete=="function"){e.complete.call(this)}return}for(var n in g){for(var l=0,m=f.length;
l<m;l++){var o=f[l][n]<g[n]?1:-1;f[l][n]+=Math.abs((g[n]-f[l][n]))*o*j;if(o==1){f[l][n]=(f[l][n]>g[n])?g[n]:f[l][n]}else{f[l][n]=(f[l][n]<g[n])?g[n]:f[l][n]}}}c.requestAnimationFrame(d)}c.requestAnimationFrame(d)
};Configuration.prototype.index=function(b,e){var c=e.parentNode;for(var a=0,d=c.children.length;a<d;a++){if(c.children[a]==e){return a}}return -1};Configuration.prototype.empty=function(a){var b;while(b=a.firstChild){this.removeFromTab(b);
a.removeChild(b)}};Configuration.prototype.prepareRequest=function(a,b){this.request.abort();this.request.open(b,a,true);return this.request};Configuration.prototype.get=function(c,a,b){var d=this.prepareRequest(c,"GET");
if(a){d.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);if(a&&typeof a=="function"){a.call(this,e)}}}}if(b){d.onerror=function(){if(b&&typeof b=="function"){b.call(this)
}}}d.send()};Configuration.prototype.post=function(c,a,b){var d=this.prepareRequest(c,"POST");if(a){d.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);if(a&&typeof a=="function"){a.call(this,e)
}}}}if(b){d.onerror=function(){if(b&&typeof b=="function"){b.call(this)}}}d.send()};Configuration.prototype.getJSON=function(c,a,b){var d=this.prepareRequest(c,"GET");d.onload=function(){if(this.status>=200&&this.status<400){var e=JSON.parse(this.response);
if(a&&typeof a=="function"){a.call(this,e)}}};d.onerror=function(){if(b&&typeof b=="function"){b.call(this)}};d.send()};Configuration.prototype.extend=function(a){a=a||{};for(var c=1,d=arguments.length;
c<d;c++){if(!arguments[c]){continue}for(var b in arguments[c]){if(arguments[c].hasOwnProperty(b)){a[b]=arguments[c][b]}}}return a};Configuration.prototype.checkAndAddToggleArray=function(d){var e=window.getComputedStyle(d);
for(var b=0,f=this.toggleArray.length,h=this.toggleArray[b];b<f;b++){if(h.element==d){return h}}var g=e.display=="none"?"block":e.display;var a={element:d,display:g};this.toggleArray.push(a);return a};
Configuration.prototype.isSave=function(b){for(var a=0,c=this.toggleArray.length;a<c;a++){if(this.toggleArray[a]["element"]==b){return true}}return false};Configuration.prototype.removeFromTab=function(b){if(!this.isSave(b)){return
}for(var a=0,c=this.toggleArray.length;a<c;a++){if(this.toggleArray[a]["element"]==b){this.toggleArray.splice(a,1);return}}};Configuration.prototype.remove=function(a){var b;while(b=a.firstChild){this.removeFromTab(b);
a.removeChild(b)}this.removeFromTab(a);a.parentNode.removeChild(a)};Configuration.prototype.ajax=function(a,c){if(!this.isTypeOfObject(c)){console.error("The 2nd parameter has to be of type Object.");return
}var c=this.extend({method:"GET",async:true,user:null,password:null,body:null,complete:null,error:null},c||{});var d=new XMLHttpRequest();d.open(c.method,a,c.async,c.user,c.password);d.onload=function(){if(this.status>=200&&this.status<400){var e=this.response;
if(c.complete&&typeof c.complete=="function"){c.complete.call(this,e)}}};d.onerror=function(){if(c.error&&typeof c.error=="function"){c.error.call(this)}};if(this.headerRequest){for(var b in this.headerRequest){XMLHttpRequest.setRequestHeader(b,this.headerRequest[b])
}}d.send(c.body)};Configuration.prototype.setRequestHeader=function(a){if(!this.headerRequest){this.headerRequest={}}this.headerRequest=a};Configuration.prototype.isTypeOfObject=function(a){return a===Object(a)
};Configuration.prototype.requestAnimationFrame=function(f,c){var a=this;var b=new Date().getTime();var d=Math.max(0,16-(b-a.lastTime));var e=window.setTimeout(function(){f(b+d)},d);a.lastTime=b+d;return e
};Configuration.prototype.cancelAnimationFrame=function(a){clearTimeout(a)};if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=function(d,a){a=a||window;for(var b=0,c=this.length;
b<c;b++){d.call(a,this[b],b,this)}}}var configuration;(function(){configuration=new Configuration()})();