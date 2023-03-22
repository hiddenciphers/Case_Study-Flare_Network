function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}
function findCookie() {
    var myCookie = getCookie("_referrer");
    var timeCookie = getCookie("_original_datetime");
    var myReferrer = "";
    var ref = document.referrer;
    var domain = window.location.hostname;
    var cleanDomain = domain.match(/^w?w?w?\.?(.*)\.com$/)[1];
    var comparison = "^https?:\\/\\/([^\\/]+\\.)?" + cleanDomain + "\\.com(\\/|$)";
    var regex = new RegExp(comparison, 'i' );
    var agent = navigator.userAgent;
if(agent.indexOf("Instagram") > -1) {
var myReferrer = "instagram.com";
} else if (!ref) {
  var myReferrer = "Not Available / Assumed Direct";
} else if (ref.match(regex)) {
    var myReferrer = "Direct";
} else {
    var myReferrer = ref.split('/')[2];
}
    if (!myCookie) {
        setCookie("_referrer", myReferrer.replace(/^www\./,''), 0.125);
    }
if (!timeCookie) {
var d = new Date();
var myTimezone = "America/New_York";
var myDatetimeFormat= "YYYY-MM-DD hh:mm A";
var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
setCookie("_original_datetime", myDatetimeString, 0.125);
}
}
findCookie();