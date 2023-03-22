//////// DEFINICIJA KLJUČEV ZA COOKIE. Prvi ključ je za uporabo v kodi, drugi (value) je ključ v localStorage
// Ko se doda novi cookie, je treba zgoraj napisati funkcijo za nalaganje, tukaj pa si zmisliti ključe in povezati
// z njimi funkcije za nalaganje.
allCookieKeys = {
    'GA': 'cookieConsentGoogleAnalytics',
    'ROCKET': 'cookieConsentRocket'
}
activeCookies = ['GA', 'ROCKET']


function hasDefinedConsentToAllCookies() {
    if (Object.keys(allCookieKeys).every(key => isDefinedForKey(key))) {
        document.getElementsByClassName("cookie-wrap")[0].style.display = "none";
        loadConsentedCookies();
    } else {
        document.getElementsByClassName("cookie-wrap")[0].style.display = "block";
    }
}

function isDefinedForKey(key) {
    let val = getForKey(key)
    return val === true || val === false
}

function getForKey(key) {
    let kkey = allCookieKeys[key]
    if (kkey) {
        return JSON.parse(localStorage.getItem(kkey))
    }
    return null
}

function consentToAllCookies() {
    Object.keys(allCookieKeys).forEach(key => consentToCookie(key, true))
    loadGoogleAnalytics();
    loadRocketChat();
    location.reload();
}

function consentToCookie(type, consent) {
    let key = allCookieKeys[type]
    if (key) {
        if (consent === true) {
            localStorage.setItem(key, 'true')
        } else if (consent === false) {
            localStorage.setItem(key, 'false')
        } else {
            localStorage.removeItem(key)
        }
    }
}

function loadGoogleAnalytics() {
    let trackingID = 'UA-9458662-14';
    let gaScript = document.createElement('script');
    gaScript.setAttribute('async', 'true');
    gaScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${trackingID}`);

    let gaScript2 = document.createElement('script');
    gaScript2.innerText = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'${trackingID}\');`;

    document.documentElement.firstChild.appendChild(gaScript);
    document.documentElement.firstChild.appendChild(gaScript2);
}

function loadRocketChat() {
    (function (w, d, s, u) {
        w.RocketChat = function (c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
        var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
        j.async = true; j.src = 'https://rocketchat.matheo.si/livechat/rocketchat-livechat.min.js?_=201903270000';
        h.parentNode.insertBefore(j, h);
    })(window, document, 'script', 'https://rocketchat.matheo.si/livechat');
}

function clearAllCookies() {
    activeCookies.forEach(typ => consentToCookie(typ, null));
    location.reload();
}

function loadConsentedCookies() {
    Object.keys(allCookieKeys).forEach(key => {
        if (hasConsentedForKey(key)) {
            loadForKey(key)
        }
    })
}

function hasConsentedForKey(key) {
    return getForKey(key) === true
}

function loadForKey(key) {
    switch (key) {
        case 'GA':
            this.loadGoogleAnalytics();
            return;
        case 'ROCKET':
            this.loadRocketChat();
            return
        default:
            return
    }
}

function openRocketChatWidget() {
    if(hasConsentedForKey('ROCKET')) {
        RocketChat(function() {
            this.maximizeWidget();
        });
    } else {
        document.getElementsByClassName("cta__banner")[0].style.display = "block";
    }

}