# *Cookie Manager*

**In this repository, I tried to collect the functions needed to Manage cookies in javascript, hope you enjoy it**
-


# add cookie

## add a single cookie
```javascript
createCookie("cookieName", "Cookie value", 20)
```
this function takes three arguments and here is explain
-

- first argument: Cookie name
- second argument: Cookie Value
- third argument (optional): expire time of cookie, default value is 0


## add multiple cookies
```javascript
let cookies = {
    cookie1: "c1",
    cookie2: "c2",
    cookie3: "c3",
    cookie4: "c6",
}

createMultipleCookies(cookies)
```
<font size=4>this function takes an object of cookies, the key will be the cookie key and value will be value of cookie.  
you can use this method when you don't want to use expire time, if you need it, instead of using this, use next method
</font>
=

## add multiple cookies with expire time
```javascript
let cookie = [
    {
        name: "cookie1",
        value: "c1",
        days: 1
    },
    {
        name: "cookie2",
        value: "c2",
        days: 1
    },
    {
        name: "cookie3",
        value: "c3",
        days: 1
    },
    {
        name: "cookie4",
        value: "c4",
    }
]

createMultipleCookiesWithExpireTime(cookie)
```
you can skip the days item in your object, and the default value is 0
-
# remove cookies

## remove a single cookie
```javascript
removeCookie("cookieName")
```

## remove all of cookie
```javascript
removeAllCookies()
```

# get cookies

## get a single cookie
```javascript
getSingleCookie("cookieName")
```

## get all of cookies
```javascript
getAllCookies()
```

# other functions

## check for if cookie exists
```javascript
checkCookie("cookieName")
```
this function returns a boolean
