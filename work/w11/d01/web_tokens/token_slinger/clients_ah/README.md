# Token Slinger Client

### Goals

Programmatically implement the credentials flow from Token Slinger!

1. Create a user on the database.
2. Upon success, begin token grant. Upon failure, display message.
3. Request a token by sending credentials (email and password). Upon
   success, store the token to local storage and begin authenticated
   request. Upon failure, display message.
4. Create an authenticated request: (`GET /me`). Sign it with the token.
   Upon success, display user info. Upon failure, display message.

### Note

It may be difficult to set headers for authorized requests. Check out
the docs for jQuery (for [`Content-Type`](http://api.jquery.com/jquery.ajax/) or [general use](http://stackoverflow.com/questions/7686827/how-can-i-add-a-custom-http-header-to-ajax-request-with-js-or-jquery)) or [Angular's $http](https://docs.angularjs.org/api/ng/service/$http#setting-http-headers).

