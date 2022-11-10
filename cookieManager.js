// create Cookie

function createCookie(name, value, days = 0) {
    var expires = "";
    if (days) {
        var time = new Date();
        time.setTime(time.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + time.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function createMultipleCookies(cookiesObject) {
    for(let [key, value] of Object.entries(cookiesObject)){
        createCookie(key, value)
    }
}

function createMultipleCookiesWithExpireTime(cookiesObject) {
    for(let i of cookiesObject){
        let days = i.days ? i.days : 0
        createCookie(i.name, i.value, i.days)
    }
}

// remove cookies

function removeCookie(name) {
    createCookie(name, "", -1);
}

function removeAllCookies() {
    const cookies = getAllCookies()
    

    for (const [key, value] of Object.entries(cookies)) {
        removeCookie(key)
    }
      
}

// get cookies

function getSingleCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
}

function getAllCookies() {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i=0; i<pairs.length; i++){
      var pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

// other functions

function checkCookie(name) {
    var check = getCookie(name);
    if (check != "")
        return true
    else
        return false
}
