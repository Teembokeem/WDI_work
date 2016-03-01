# The Library of Babel

![Library](http://cdn8.openculture.com/wp-content/uploads/2015/04/26191012/Red-Book.jpg)

## Consuming 3rd Party APIs

| Learning Objectives - SWBAT              |
| :--------------------------------------- |
| Define and Differentiate a RESTful Web API |
| Explain why we use APIs                  |
| Difference between producing, exposing, and consuming API |
| Use `request` npm to access a (RWS)API   |
| Read API documentation                   |
| Explain XDR/CORS                         |
| Explain JSON                             |

#### Road Map
1. Enter the Library of Babel, Man of the Book - Intro to RESTful Web
   Services
2. Exposing the API
3. Consume API
4. Practice - GitHub API
5. Outro

## Enter the Library of Babel

Borges wrote of a universe in the form of a [library](https://libraryofbabel.info/).
In this universal library is a labriynth of hexaganol rooms, each
containing 4 walls of books, each 410 pages in length. Supposedly infinite,
it's said that all iterations of books containing 410 pages were present in
the library, and if that were true, there could be one _messianiac deliverer_ that has read _the one book_ that catalogs the entire
libary.

By the end of this lesson, I hope that you are  *"el Hombre del Libro"*, that can lead us to the "legible books" of the internet.

#### Using RESTful Web Services
Web APIs, or RESTful Web Services, can feel a lot like the Library of
Babel, but lucky us, are significantly easier to naviagate.

If only Borges' library had followed a REST architecture!

In our class, and in your life as Web Developers, you'll hear people
say APIs a lot, however, what they mean are [Web APIs](https://en.wikipedia.org/wiki/Web_API),
specifically RESTful Web Services.

The best explanation I've heard of a Web API:
#### Computers use Web APIs, the way a human uses a website.
<img src="http://cdn2.business2community.com/wp-content/uploads/2013/12/Robot-on-phone-with-caption-and-lipstick-iStock_000027629337Small.png" alt="sassy compy" height=300px>

In the same way we go to a site's contact page, and parse through
the data to find the phone number to tell that restaurant that they
screwed up your ravioli AGAIN, a computer uses a RESTful endpoint of
an API to access data.

However, unlike humans, computers don't need (or want) any of the
extra nonsense we humans call styling. Only the raw data is necessary
in these APIs.

<img src='http://workshops.lewagon.org/assets/tech-entrepreneurs/web-api-8a6605a7574f6aad09970f6c79508a0d.png' alt='KISS4Compy' height="400px">

Earlier today, we've seen how to produce an API. Now we're getting
into consuming APIs.

## Producing the API

<img src="http://4.bp.blogspot.com/-ZvSVnglHPEU/VLIlHh3k0dI/AAAAAAAAHmk/pK12MRmcc0Y/s1600/Eniac.jpg" alt="open server" height=400px>

You can access a RESTful web service (otherwise known as producing
or exposing the API) in a similar fashion to finding a book in a
well-organized library.

__Imagine you're in middle school__:

- Your teacher gives you an assignment to write a paper about the
  Civil War.
- You go to your library called 'http://api.websterms.edu/lib'
- you then look in the '/history' section and...
- find the dewey decimal number for military history '/435'
- then extract only books on the civil war in '/civilwar'
- then find the exact book you needed by id '/45'

You've just hit an equivalent of an API endpoint:

`http://api.websterms.edu/lib/history/435/civilwar/45`

Now this is not a real website, but you'll see RESTful sites with a
similar structure. We access APIs using HTTP requests, much like the
one we used in our Rails projects.

#### Accessing APIs

We can access an API in many different ways:

1. From the terminal, we can use cURL (`curl` - originally named because of "see URL")
2. From the browser (a desktop GUI for HTTP requests)
3. Asyncronously from our node server using the `request` node package
4. Asyncronously "from" our client-side using AJAX requests

Today we're going to focus on `request`.  AJAX can become difficult to
manage due to its asynchronous nature and seemingly magical quality of
overriding usual __XDR__ / __CORS__ protection.

#### XDR & CORS

Web browsers have a security policy called the same-site origin policy, which blocks Web pages from accessing data from a different domain.

Web sites often work around this policy by having their server request content from another site's server in the backend, thus circumventing the check within the browser, as shown in the following diagram.

![Non-XDR Diagram](https://i-msdn.sec.s-msft.com/dynimg/IC279943.gif)

__XDR__ - Cross-Domain Request

- Cross-Domain Requests are requests made to a server under a different domain. They break same-site origin policy, and therefore need a way to get around it.

![XDR](https://i-msdn.sec.s-msft.com/dynimg/IC283863.gif)

__CORS__ - Cross Origin Resource Sharing

- A resource makes a cross-origin HTTP request when it requests a
  resource from a different domain than the one which served itself. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers. Modern browsers use CORS in an **API container** - such as AJAX - to mitigate risks of cross-origin HTTP requests.

It's important to understand **CORS is the protocol object for how an XDR is made.**

## Consume API - Find the Pokedex!

![pokedex](https://s-media-cache-ak0.pinimg.com/236x/f7/f1/93/f7f1933d305c2e2d83bf67f570146b3e.jpg)

If all books exist in Borges' Library of Babel, then surely there's a pokedex
in there somewhere.

Let's use the starter code to learn how to use the `request` module.

When we manipulate and utilize data from outside sources, we are
_consuming_ the API. In this case, we're using the [PokéAPI](http://www.pokeapi.co/).

We'll also be using the module `locus` for line injections (like
`binding.pry`), and the module `opener` to pull up data in our
default browser.

This is what we're going to do:

1. Catch them all!
2. Start out with bulbasaur.
3. Access bulbasaur from our original pokedex.
4. Open a sprite of bulbasaur from our bulbasaur data.

## Practice with the GitHub API

<img src="https://help.github.com/assets/images/site/be-social.gif" alt="github">

Everyone take 10 minutes to review the [GitHub documentation](https://developer.github.com/v3/)
with your partner/s.

After you've reviewed the docs, complete the following:

1. Produce/Expose Github Issues from the class repo (as in ga-students, not your fork) using `curl`! 
   - Be aware, you'll get a lot in return. Make sure to read the "title" and "body" to make sure you've found my issue. ;)
   - You may need to sign in to see this repo… remember, using cURL!
2. Now use the request package to access an instructor's account - then see if you can access the commits of one of their repos. 

   - __Hint:__ Remember, the urls present in one response body may lead you to the one you're looking for.
3. Access your partner's project 2 commit log.

4. BONUS: See if you can produce the "bio" of username "EARnagram", using cURL
   - You'll need to `brew install jsawk`.
   - You'll also need to use the `--silent` flag instead of `-i`
   - Last, you'll need to use `jsawk` by piping in ( ` | ` ) the
     following: `jsawk 'return this.bio'`
5. DOUBLE BONUS: Change your own github bio using `PATCH`!

## You Must be that Book Person!
<img src="http://entertainment.inquirer.net/files/2012/10/arnold-schwarzenegger-total-recall-book.jpg" alt="arnold book" height=300px>

Congrats, you've officially become the Messianic Reading Guy!

You now contain the necessary know how to move through the labyrinth of RESTful
Web Services!

Let's review:

> - What is an API? 
> - What is a Restful Web Service? Are they different from APIs?
> - What is CORS?
> - Name and explain the 4 primary ways we access web APIs.

## References
[GitHub API Docs](https://developer.github.com/v3)

[Request npm](https://www.npmjs.com/package/request)

[Request github](https://github.com/request/request#custom-http-headers)

[MDN CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

[Web API Wiki](https://en.wikipedia.org/wiki/Web_API)

[PokéAPI](http://pokeapi.co/docs/)

[Microsoft XDR](https://msdn.microsoft.com/en-us/library/dd573303(v=vs.85).aspx)

[Codecademy API Lessons](https://www.codecademy.com/apis)