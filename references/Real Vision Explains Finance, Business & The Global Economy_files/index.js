"use strict";
(function () {
    const cookieName = "rv_code";
    const qsName = "code";
    let discountCode = null;
    const expires = new Date();
    const discountCodeQueryString = window.location.search.match(new RegExp(`${qsName}=([^&]+)`)) || [];
    if (discountCodeQueryString.length) {
        discountCode = discountCodeQueryString[1];
    }
    if (discountCode) {
        expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000);
        window.document.cookie = `${cookieName}=${discountCode};expires=${expires.toUTCString()};path=/;Secure`;
    }
    window.rvDiscountCode = {
        clear: () => {
            const now = new Date();
            window.document.cookie = `${cookieName}=;max-age=0;expires=${now.getTime() - 86400 * 1000};;path=/;Secure`;
        },
        get: () => {
            const code = window.document.cookie.match(new RegExp(`${cookieName}=([^;]+)`));
            if (code) {
                return code[1];
            }
            return false;
        },
    };
})();
