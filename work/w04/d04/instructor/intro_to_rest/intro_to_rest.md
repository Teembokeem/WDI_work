[Click to View Presentation](https://presentations.generalassemb.ly/9cf3a9be02a94d1a9a5e#/1)

---
# Intro to
![](https://techjoomla.com/cache/com_zoo/images/REST_api_d56810391e9851fade45e40804ad40fd.png)

---
## Learning Objectives
<br>

- Explain what REST is.

- Identify a RESTful API's methods and map them to CRUD operations.

- List the 8 routes for a resource in Rails and explain their purpose.

---
## Roadmap
<br>

- What is REST?

- Anatomy of a RESTful HTTP Request

- RESTful APIs

- RESTful routing in Rails

---
## What is REST?

---
### What is REST?

- REST is a whacky acronym that stands for:<br>
&nbsp;&nbsp;&nbsp;&nbsp;**RE**presentational **S**tate **T**ransfer

- According to its designer, computer scientist Roy Fielding (born in Laguna Beach and attended UC Irvine), the meaning of Representational State Transfer is:

><span style="font-size:larger">_Representational State Transfer_ is intended to evoke an image of how a well-designed web application behaves: a network of web pages (a virtual state-machine), where the user progresses through an application by selecting links (state transitions), resulting in the next page (representing the next state of the application) being transferred to the user and rendered for their use.</span>

Don't worry, the name is not important...

---
### What is REST? <small>(cont)</small>
<br>

- Defined in 2000 by Roy Fielding

- REST is a **Style of Software Architecture** for distributed computing.
  - Think of _Software Architecture_ as the high-level decisions for a software system. Including its methodologies, data storage, language(s), etc.
  - vs. _Software Design_, which applies to the specific implementation of the modules & components.

- REST allows software distributed across multiple devices to interact with servers over the internet using HTTP.

---
### What is REST? <small>(cont)</small>
<br>

- In today's lesson, we'll look at two common scenarios of RESTful client/server interaction:

  - RESTful APIs

  - RESTful Routing in Rails

---
## Anatomy of a RESTful HTTP Request

---
### Anatomy of a RESTful HTTP Request
<br>

- When a browser makes a typical request to a web server, the request is composed of the following:
  - The _HTTP Verb_ (aka _HTTP Method_)
  - An _URI_ endpoint identifying the resource requested
  - Optional _HTTP Headers_
  - Optional _Cookies_

- I'll use Chrome's DevTools to demonstrate what these components might look like when browsing to _www.yahoo.com_.

---
### Anatomy of a RESTful HTTP Request <small>(cont)</small>

- Okay, we just saw what a HTTP request and response looks like in detail.

- Moving on to REST, unless we need to deal with authentication when making a RESTful request, we can ignore _headers_ and _cookies_.

- That leaves us with only two **key** parts in a RESTful request: <br>&nbsp;&nbsp;&nbsp;&nbsp;The **HTTP Verb**, and the **URI Endpoint (aka Path)**
<br><br>_Note, we will also want to send a data payload with certain requests, but let's just focus on these two pieces for now._

---
### Anatomy of a RESTful HTTP Request <small>(cont)</small>

- When we type in a location in our browser's address bar and press [return], it will make a request using the `GET` HTTP verb.

- Since we can issue a GET request with our browser, let's make a GET request to an online RESTful API. Type this in the address bar:<br>`http://jsonplaceholder.typicode.com/users`

- [JSONPlaceholder](http://jsonplaceholder.typicode.com/) is a  RESTful API with fake data - great for testing and learning with!

- FYI, most modern RESTful APIs return JSON content by default.

---
### Anatomy of a RESTful HTTP Request
#### The URI

- Let's breakdown the RESTful URI we just used:<br>`http://jsonplaceholder.typicode.com/users`

  - **`http://jsonplaceholder.typicode.com`**: The scheme and host segments.

  - **`/users`**: The _resource_ segment.

- In REST, this URI is referred to as the _collection URI_, and is used to _read_ or _add_ to the resource collection.

- **The response to our `GET` request to `http://jsonplaceholder.typicode.com/users` is a JSON _______?**

---
### Anatomy of a RESTful HTTP Request
#### The URI <small>(cont)</small>

- Now let's try this URI:<br>`http://jsonplaceholder.typicode.com/users/5`

- We have appended an extra segment to the URI that identifies a specific _resource_, in this case, the user with an id of 5.

- This URI is referred to as the _item URI_, and is used to _read_, _update_, or _delete_ **a single existing** resource.

- Notice that although we are accessing a single entry, the resource name in the URI, `users`, remains unchanged. It is **not** changed to `user`.

---
### Anatomy of a RESTful HTTP Request
#### The Resource

- The `users` _resource_ represents the data entity we are interested in accessing on the server and is usually **pluralized** just like a table in a database.

- Scrolling down through [JSONPlaceholder's homepage](http://jsonplaceholder.typicode.com/) reveals that they also have several other resources we can access:

  - `posts`
  - `comments`
  - `albums`
  - `photos`
  - `todos`

---
### REST Checkpoint Questions

<p style="text-align:left">Take a minute to review these questions before the picker does its thing:</p>

- **REST is a Software Architectural _______.**

- **In your own words, explain the difference between<br>_Software Architecture_ and _Software Design_.**

- **Another word for a HTTP _Verb_ is a HTTP _______.**

- **A _______ sends a RESTful request, and a _______ responds to that request.**

- **A RESTful request consists of a HTTP _______, a _______, and optionally a data payload.**

---
## RESTful API<span style="text-transform:lowercase">s</span>

---
### RESTful API<span style="text-transform:lowercase">s</span>
<br>

- Now that we know that every RESTful request consists of a HTTP Verb and URI, it's time to look at a specific use case: _RESTful APIs_.

- _RESTful APIs_ allow client software to **Read**, and optionally **Create**, **Update** and **Delete** data resources on a server, or in other words, perform **CRUD** data operations.


---
### RESTful API<span style="text-transform:lowercase">s</span><small> (cont)</small>
<br>

<p style="text-align:left">A tidbit of vocab:<br><br></p>

- A _RESTful Request_ (HTTP Verb + URI) made from a _client_, is also known as _REST Method Call_.


---
### RESTful API<span style="text-transform:lowercase">s</span><small> (cont)</small>
<br>

<p style="text-align:left">On the server side, the server:<br><br></p>

1. Receives the request from the client.<br><br>
2. The routing system matches the HTTP verb and URI to the appropriate code.<br><br>
3. The code performs the actual CRUD operation.<br><br>
4. Finally, sends a response to the client consisting of a **_HTTP Status Code_** and the appropriate resource (usually as JSON).<br><br>Here's a [link to valid _HTTP Status Codes_](http://www.restapitutorial.com/httpstatuscodes.html), with those used in REST identified.

---
### RESTful API<span style="text-transform:lowercase">s</span><small> (cont)</small>

- As a reminder, there are only two URI patterns necessary to access a particular resource.<br>**The ________ URI and the ________ URI.**

- But if there are only two URIs, how doe the server know which CRUD operation we want to perform?<br>That's where the HTTP Verb comes into play.

- Indeed, the same URI behaves differently when used with different HTTP Verbs!

- Up to this point, we've only seen the `GET` method, are you ready for the full Monty?

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### REST Method & CRUD Mapping

<p style="text-align:left">Here are the RESTful requests for a resource named <em>posts</em>:</p>

<img src="http://i.imgur.com/dX8GWWW.png" width="950px">

<p style="text-align:left">The <em>:id</em> in the URI is called a <em>named parameter</em> in the REST method, which we will use heavily in Rails and Node.</p>

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### REST Method & CRUD Mapping
<br>

<p style="text-align:left">Committing the REST methods & CRUD Mapping to memory is pretty much necessary, so let's get started...</p>

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping

- **First, give me a fist-to-five on the two URI patterns, _collection_ & _item_.**

- This would be a good time to mention that you will come across "longer" URIs with extra segment(s) between the _host_ and _resource_ segments. For example:<br>
`https://www.toysrus.com/api/v2/toys`

- These extra segments are called _namespacing_ and don't change anything. When designing your URIs, it's alright to just refer to the resource segment, for example:<br>
`/toys`&nbsp;&nbsp; and &nbsp;&nbsp;`/toys/:id`

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping
<br>

- `GET` sounds just like what it does: it _gets_, which you can easily associate with the _Read_ in CRUD.

- `GET` is the only HTTP Verb used with both URIs:

  - **`GET /todos`** &nbsp;&nbsp;returns a JSON array of `todo` objects.
  - **`GET /todos/:id`** &nbsp;&nbsp;returns a single JSON `todo` object.

- Slam dunk!

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping
<br>

- We all love slam dunks, so here's another...

- The `DELETE` verb - you got it, maps to _Delete_ in CRUD.

- Although we could write an API to accept `DELETE` with the _collection URI_, doing so would mean that you want to wipe out the entire resource collection, which would be rare.

- So, when designing _your_ RESTful APIs in WDI, use the `DELETE` verb with just the _item URI_, i.e.,&nbsp; `DELETE /frogs/249`

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping
<br>

- Hey, that's 3 of the 6 REST methods, we're halfway home! But the last 3 require a little more effort to memorize :)

- We need to map a HTTP verb to _Create_ - `POST` is our answer.

- `POST` is the HTTP method HTML forms use by default, so just remember that on web pages, we `POST` new data to the server.

- Which URI do we `POST` to?  Well, we can't use the _item URI_ when the item doesn't exist, right?

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping
<br>

- The last two, `PUT` and `PATCH`, are very similar, so similar in fact that some APIs only implement `PUT`.

- We've already mapped to CRUD's Read, Delete and Create, so if you reasoned that `PUT` and  `PATCH` maps to CRUD's _Update_, you'd be correct!

- I bet you can guess which URI pattern to pair with - **what is it?**

- So, what's the difference between `PUT` and `PATCH`?...

---
### RESTful API<span style="text-transform:lowercase">s</span>
#### RESTFUL API / CRUD Mapping
<br>

<p style="text-align:left">The difference between PUT and PATCH is:</p>

- `PUT` is _intended_ to replace the entire resource with the data sent in the payload; and...

- `PATCH` is _intended_ to update just the properties included in the payload.

- I think the word `PATCH` is pretty descriptive, so hopefully you can remember that `PUT` is the one that replaces the entire resource.

---
### RESTful API Questions
<br>

- **What is a REST resource?**

- **What is CRUD?**

- **Name the five HTTP verbs used in REST**

- **The RESTful request, `GET /tacos`, does what?**

- **The RESTful request, `POST /tacos`, does what?**

- **What is wrong with this request, `PUT /tacos`?**

---
### RESTful API Practice Exercise <span style="text-transform:lowercase">(10 min)</span>

- Create a file named `rest_api.md` in today's working directory (outside of the _instructor_ directory).

- Create a heading, "RESTful API to CRUD Mapping".

- Create a table with the following headings:

  - HTTP Verb
  - URI
  - CRUD Operation<br><br>[Click for a Markdown Syntax Cheat Sheet](https://guides.github.com/features/mastering-markdown/)

- Design a RESTful API for a resource: **_accounts_**.

- Include all six REST Methods (HTTP Verb + URI pairs).

---
## RESTful Routing in Rails

---
### RESTful Routing in Rails
<br>

- We've just learned about RESTful API client/server interaction.<br>**What happens in that interaction?**

- Now it's time to look at another use case for REST: Rails

- The REST architectural style does not require that a RESTful request return a JSON response from the server.

- The Ruby on Rails framework takes advantage of the flexibility of REST...

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- We're going to start working with RoR this afternoon, but we're first going to examine the role REST plays in the framework.

- Yes, Rails can be used to expose a RESTful API like that which we just discussed.

- However, Rails was designed to incorporate REST in a process fundamental to every web app: **routing**.

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- The process of _routing_ for a web application is performed by a piece of software known as the _router_.

- The _router_:

  - Examines each HTTP request received from clients
  - Matches the request against routes defined by the developer
  - Invokes the code specified by the matching route definition

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- Rails was designed to uses REST method calls to drive the application logic.<br>**A _REST method call_ is synonymous with ________ ________?**

- For example, lets say a web page contains a link containing `href="/students/23"`. That URI looks pretty RESTful - right? Clicking that link would send a `GET /students/23` request to the server and by convention, the Rails app would respond with a HTML page displaying information pertaining to the student with an id of 23! Ponder this point for a bit.

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- Route definitions map RESTful request patterns (HTTP verb + URI). Here's a fragment of a real Rails `routes.rb` file used to define the routes in a Rails app:

  ```rb
  get "/accounts" => "accounts#index"
  get "/accounts/:id" => "accounts#show"
  post "/accounts" => "accounts#create"
  ...
  ```

- There are 3 route definitions above, each one mapping a RESTful request to code.

- In the first example, a `GET /accounts` request will invoke the code in the `index` action (method) that's defined in the `accounts` controller. **The other two routes do what?**

---
### RESTful Routing Checkpoint Questions

- **A Rails app's functionality is driven by what?**

- **The software on a server that handles requests and invokes code is known as a _________?**

- **A _________ definition maps a HTTP verb and URI to _________.**

- **Unlike a RESTful API responding with JSON, a Rails application by convention responds to REST method calls with _________.**

- **What two pieces of information does a router use when matching a route definition?**

---
### RESTful Routing in Rails <small>(cont)</small>

- Like a RESTful API, each REST method call will target a particular data resource, i.e., _users_, _posts_, _comments_, etc. A distinction being that in Rails, we will most often think of our resources as _models_ named singularly, i.e., a `users` resource maps to a `User` model.

- Also like a RESTful API, a Rails app performs CRUD. The difference being that a Rails app returns HTML to the client.

- Further, just like a RESTful API, Rails may not implement every CRUD operation for a particular resource. But if it does, there are 8 routes to define...

---
<p style="margin-top:-75px"></p>

<p style="text-align:left">Here are the full 8 RESTful routes in Rails that you will need to know. Let's review them:</p>

<img src="http://i.imgur.com/s3gnSzg.png" width="950px">

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- Once you have learned the RESTful API routes, it's not a big jump to learn the Rails routes - there are only two extra routes, which technically do not have a RESTful URI pattern.<br><br>**Which are they?**

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- `GET /resource/new`: This non-RESTful route serves to deliver a web page with a form for entering a new resource. The form will `POST` to `/resource`, which maps to the `create` action.

- `GET /resource/:id/edit`: This non-RESTful route is similar to the `GET /resource/new`, except that it will deliver a web page with a form for editing an existing resource. The form when submitted will "fake" a `PUT` or `PATCH` to `/resource/:id`.

- Why a "fake" `PUT` or `PATCH` you ask...

---
### RESTful Routing in Rails <small>(cont)</small>
<br>

- By default, our web pages can only issue `GET` and `POST` requests unless we utilize the browser's _XMLHttpRequest_ object using JavaScript. So how do we code our Rails apps to issue `PUT`, `PATCH` or `DELETE` requests?

- Well, there's some code known as _Rack middleware_ that Rails is built on top of. This middleware has a mechanism that will allow our normal `GET` or `POST` requests to be changed to a `PUT`, `PATCH` or `DELETE` on the server. We'll learn how to do this next week.

---
### RESTful Routing in Rails - Questions
<br>

- **How many routes are there per resource in a full-CRUD Rails app?**

- **What is one of the two non-RESTful routes and what is it for?**

- **What is the other non-RESTful route and what is it for?**

- **What _action_ will the router call if a `POST /comments` request is received?**

- **What _action_ will the router call if a `GET /comments/:id` request is received?**

---
### RESTful Routing in Rails
#### Individual Practice
<br>

- Create a file named `rails_rest.md` in today's working directory.

- Create a heading, "RESTful Routing in Rails".

- Create a table with the following headings:

  - HTTP Verb
  - URI
  - Rails controller#action
  - Purpose

- Complete all 8 routes for a resource: **_users_**.

---
## Resources
<br>

- [REST Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

- [HTTP Status Codes](http://www.restapitutorial.com/httpstatuscodes.html)

- [Rails Guide - Rails Routing from the Outside In](http://guides.rubyonrails.org/v3.2.8/routing.html)
