function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getCookie(key) {
    return document.cookie
        .split(";")
        .map((c) => c.trim())
        .filter((c) => c.split("=")[0] === key)
        .map((c) => c.split("=")[1])[0];
}

const DOMAINS = ["alchemyapi.io", "alchemy.io", "alchemy.com"]

function getCurrentDomain() {
    current_domain = window.location.href
    for (const domain of DOMAINS) {
        if (current_domain.includes(domain)) {
            return domain;
        }
    }
}

const paramToCookieKey = {
    "referral": "referral",
    "r": "referral",
    "a": "referral",
    "s": "referral",
    "promo": "promo_code"
};

const paramsToRemove = []
for (const [param, cookieKey] of Object.entries(paramToCookieKey)) {
    const paramTag = getParameterByName(param);
    if (paramTag) {
        let decodedRid = decodeURIComponent(paramTag);
        if (decodedRid.indexOf("?") !== -1) {
            decodedRid = decodedRid.slice(0, decodedRid.indexOf("?"));
        }

        paramsToRemove.push(param + "=" + paramTag);

        if (param === "a") {
            decodedRid = "affiliate:" + decodedRid;
        } else if (param === "s") {
            decodedRid = "signup:" + decodedRid;
        }

        if (!getCookie(cookieKey) || param === "r" || param === "referral") {
            document.cookie = `${cookieKey}=${decodedRid}; domain=.${getCurrentDomain()}; path=/`;
        }
    }
}

for (const param of paramsToRemove) {
    let domain_without_ref = window.location.href;
    domain_without_ref = domain_without_ref.replace(param, "");
    history.replaceState(null, null, domain_without_ref);
}

if (window.location.href === "https://www.alchemy.com/?" || window.location.href === "https://www.alchemy.com/?&") {
    history.replaceState(null, null, "https://www.alchemy.com");
}

let existing_ref_origin = getCookie("referrer_origin");
if (document.referrer && existing_ref_origin === undefined) {
    document.cookie = "referrer_origin=" + decodeURIComponent(document.referrer) + "; domain=." + getCurrentDomain();
} else {
    document.cookie = "referrer_origin=DIRECT" + "; domain=." + getCurrentDomain();
}