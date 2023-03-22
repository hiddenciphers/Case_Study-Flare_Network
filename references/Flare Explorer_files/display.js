var coinzilla_display = (function() {
    var coinzilla_args = [];
    var coinzilla_display = {
        push: function(args){
            if(typeof args.zone === 'undefined') {
                return;
            }
            if(typeof args.width === 'undefined') {
                args.width = 300;
            }
            if(typeof args.height === 'undefined') {
                args.height = 250;
            }
            if(!util.isCookieEnabled()) return;
            coinzilla_args[args.zone] = {zone: args.zone, width: args.width, height: args.height};
            var nounce = Math.floor(Math.random()*1000000000000) + new Date().getTime();
            if(mobile.true){
                if(parseInt(args.width) === 728 && parseInt(args.height) === 90){
                    args.width = 320;
                    args.height = 100;
                }
            }
            var urlCheck = 'https://request-global.czilladx.com/serve/get.php?withoutAdCode=1&z='+args.zone+'&w='+args.width+'&h='+args.height+'&n='+nounce;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', urlCheck,true);
            xhr.withCredentials = true;
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var response = xhr.responseText;
                    if(util.isEmptyString(response)) return;
                    args.url = response;
                    load[args.zone] = function (args) {
                        return new this(args);
                    };
                    load[args.zone](args);
                }
                if(xhr.status === 220){
                    var response = xhr.responseText;
                    response = JSON.parse(response);
                    if(util.isEmptyString(response.client)) return;
                    if(util.isEmptyString(response.slot)) return;
                    args.client = response.client;
                    args.slot = response.slot;
                    args.width = response.width;
                    args.height = response.height;
                    fallback[args.zone] = function (args){
                        return new this(args);
                    }
                    fallback[args.zone](args);

                }
            };
            xhr.send();
        },
        reload: function (){
            var placeholder = document.getElementsByClassName("coinzilla");
            for (var i = 0; i < placeholder.length; i++) {
                placeholder[i].removeAttribute("data-rendered");
                placeholder[i].innerHTML = "";
            }
            Object.keys(coinzilla_args).forEach(function (key,index){
                coinzilla_display.push(coinzilla_args[key]);
            }, coinzilla_args);
        }
    };
    var fullAgent = navigator.userAgent,
        userAgent = navigator.userAgent.toLowerCase(),
        mobile = {
            true: /iphone|ipad|android|ucbrowser|iemobile|ipod|blackberry|bada/.test(userAgent)
        },
        util = {
            bind: function(fn,action,target){
                if (target.addEventListener) {
                    target.addEventListener(action, fn);
                } else if (target.attachEvent) {
                    target.attachEvent("on"+action, fn);
                }
            },
            getCookie: function(name) {
                var cookieMatch = document.cookie.match(new RegExp(name + '=([^;]+)'));
                if(cookieMatch) {
                    return decodeURIComponent(cookieMatch[1]);
                }else return null;
            },
            setCookie: function(name, value, minutes, path) {
                if (minutes === null || typeof minutes == 'undefined') {
                    minutes = null;
                } else {
                    var date;
                    if (typeof minutes == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + minutes * 60 * 1e3);
                    } else {
                        date = minutes;
                    }
                    minutes = '; expires=' + date.toUTCString();
                }
                document.cookie = name + '=' + encodeURIComponent(value) + minutes + '; path=' + (path || '/');
            },
            isCookieEnabled: function(){
                return navigator.cookieEnabled;
            },
            isEmptyString : function (string) {
                return (
                    (typeof string == 'undefined')
                    ||
                    (string == null)
                    ||
                    (string == false)  //same as: !x
                    ||
                    (string.length == 0)
                    ||
                    (string == "")
                    ||
                    (string.replace(/\s/g,"") == "")
                    ||
                    (!/[^\s]/.test(string))
                    ||
                    (/^\s*$/.test(string))
                );
            }
        },
        load = function (needle) {
            this.construct(needle)
        },
        fallback = function (needle){
            this.construct(needle);
        };
    load.prototype = {
        construct: function(args){
            var src = args.url;
            var placeholder = document.getElementsByClassName("coinzilla");
            for (var i = 0; i < placeholder.length; i++) {
                if(typeof placeholder[i].dataset.rendered !== "undefined"){
                    continue;
                }
                if(typeof placeholder[i].dataset.zone === "undefined"){
                    continue;
                }
                if(placeholder[i].dataset.zone !== "C-"+args.zone){
                    continue;
                }
                placeholder[i].setAttribute("style","max-width: "+args.width+"px; width:"+args.width+"px; height:"+args.height+"px; display: inline-block;");
                placeholder[i].setAttribute("data-rendered","true");
                var ifrm = document.createElement("iframe");
                ifrm.setAttribute("src", src);
                ifrm.setAttribute("scrolling", "no");
                ifrm.setAttribute("style","border: 0; overflow: hidden; margin:0 auto;width: 100%;max-width: "+args.width+";height: 100%;max-height: "+args.height+";");
                ifrm.setAttribute('frameborder', '0');
                ifrm.setAttribute('scrolling',"no");
                ifrm.setAttribute('allowtransparency', 'true');
                //ifrm.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                ifrm.id = 'Z-'+args.zone;
                placeholder[i].appendChild(ifrm);
            }
        }
    };
    fallback.prototype = {
        construct: function(args){
            var placeholder = document.getElementsByClassName("coinzilla");
            for (var i = 0; i < placeholder.length; i++) {
                if(typeof placeholder[i].dataset.rendered !== "undefined"){
                    continue;
                }
                if(typeof placeholder[i].dataset.zone === "undefined"){
                    continue;
                }
                if(placeholder[i].dataset.zone !== "C-"+args.zone){
                    continue;
                }
                placeholder[i].setAttribute("style","max-width: "+args.width+"px; width:"+args.width+"px; height:"+args.height+"px; display: inline-block;");
                placeholder[i].setAttribute("data-rendered","true");
                var _script = document.createElement( 'script' );
                _script.setAttribute( 'src', "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+args.client );
                _script.setAttribute("crossorigin","anonymous");
                placeholder[i].appendChild(_script);
                var _ins = document.createElement("ins");
                _ins.setAttribute("class","adsbygoogle");
                _ins.setAttribute("data-ad-client",args.client);
                _ins.setAttribute("data-ad-slot",args.slot);
                _ins.setAttribute("style","display:inline-block;width:"+args.width+"px;height:"+args.height+"px");
                placeholder[i].appendChild(_ins);
                var _script_exec = document.createElement( 'script' );
                _script_exec.textContent = "(adsbygoogle = window.adsbygoogle || []).push({})";
                placeholder[i].appendChild(_script_exec);
            }
        }
    };
    if(typeof window.coinzilla_display !== "undefined"){
        for(var i=0; i<window.coinzilla_display.length;i++){
            coinzilla_display.push(window.coinzilla_display[i]);
        }
    }
    return coinzilla_display;
})();