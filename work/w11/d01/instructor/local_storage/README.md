# Local Storage

## LOs

- List the formats for storing data in the browser, compare and contrast
  them, and give use cases for each.
- Use the standard JS and Angular APIs for serializing/deserializing JSON.
- Store and retrieve JS objects in `localStorage`.

## Broswer Storage Formats

1. Cookies
2. [Client-side storage][h5rocks-storage]

Both formats follow the [Same-origin policy][wiki-origin] that is in place for most 
web standards for [security/integrity reasons][mdn-origin].

#### Cookies

[Cookies are the old, basic, default format][mdn-cookies] for storing data in a
browser. From MDN:

> In the early days of the web, a server had no way to know if two requests
> came from the same web browser. This … did not allow … to keep a user 
> logged-in. This apparent limitation led Netscape to ship a technology 
> called "cookies" in the first version of its Netscape Navigator.

[Cookies are also][wiki-cookies] the recipient of a lot of FUD, due to 
historical circumstances. This means that there are lots of regulations 
around using them (EU, Canada esp.), and many users turn them off for 
whatever reason.

The reality is this. The server sends some data with a response in the
HTTP header `Set-Cookie`, and that data is saved in the browser. Now,
whenever another request is sent from that browser, to that domain,
this data is sent with it in the `Cookie` header.

#### Client-side storage APIs

Over the years, there have been many [client-side Storage Proposals][h5rocks-storage]:

1. Web Storage ([`Storage`][mdn-storage])
2. Web SQL Database (dead)
3. Indexed Database ([`IndexedDB`][mdn-indexdb])
4. File Access (dead)

You can see the current status of all available storages in your Chrome
Inspector under the tab Resources.

## Web `Storage` APIs (`localStorage` and `sessionStorage`)

[Web Storage][mdn-storage] is a simple format for storing data in the 
browser. There are two stores available: `localStorage` and 
`sessionStorage`, both on the global object (`window`). Both of these 
stores implement the same API: simple key-value pairs, in which both the
keys and values must be strings. You can set values, get them, or remove
them. That's it!

[There are differences, however][so-storage]: `sessionStorage` is per 
domain, per tab/window, while `localstorage` is per domain, per browser.

Thus, `sessionStorage` is more volatile, basically a place to cache data
for a single instance of using a site, while `localStorage` sticks around
for that site for as long as you're using it from that browser.

#### [Cookies vs `WebStorage`][so-cookies]

Here is the general rule: cookies are for the server, and web storage is
for the client! While you can send your web storage data to the server
at any time, you have to explicitly do it. You **always send your cookie
data**, no matter what!

<!-- LINKS -->

[h5rocks-storage]: http://www.html5rocks.com/en/tutorials/offline/storage

[wiki-origin]:     https://en.wikipedia.org/wiki/Same-origin_policy
[wiki-cookies]:    https://en.wikipedia.org/wiki/HTTP_cookie

[mdn-origin]:  https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Cross-origin_data_storage_
[mdn-cookies]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
[mdn-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
[mdn-indexdb]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API

[so-storage]: http://stackoverflow.com/questions/5523140/html5-local-storage-vs-session-storage
[so-cookies]: http://stackoverflow.com/questions/3220660/local-storage-vs-cookies

[ng-storage]: https://github.com/gsklee/ngStorage
