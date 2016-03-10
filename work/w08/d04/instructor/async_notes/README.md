

## LOs

- Identify the three main structures (patterns) we use to implement
  asynchronous programming. Compare and contrast between these
  structures, and give examples of each.

##### Events

- Create custom events in the DOM and with jQuery.
- Use the Node.js `EventEmitter` constructor to create event listeners
  and dispatchers.

##### Callbacks

- Write a function that uses a callback to invert control and enact
  code asynchronously.
- Use `setTimeout`, `setInterval` and `clearInterval` to implement
  asynchronous activities in JavaScript.

##### Promises

- Explain when you would use a promise instead of a callback.
- Name the states of a promise.
- Create, resolve and settle an A+-style Promise object.
- Differentiate between an A+-style Promise and a jQuery's Deferred
  object.
- Use a `Promise#then` to chain functions in a series.
- Use `Promise.all` and `$.when` to invoke a function after multiple
  others are completed.

##### `async`

- Explain why you would use the `async` library instead of an ES6
  Promise.
- Differentiate between `async.series` and `async.parrallel`.

---

## Events

##### DOM

- [Custom Events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- [Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)

##### jQuery

- [Custom events intro](https://learn.jquery.com/events/introduction-to-custom-events/)
- [Events API](https://api.jquery.com/category/events/)

##### Node

- [Node Events](https://nodejs.org/api/events.html)

##### Signals

> In essence, events are implemented as listeners and dispatchers, while
> signals are implemented as events. It's weird, I know. But we can think
> about how we've created events: did we make an event?
> 
> An Eventable object (like a DOM element) implements events by 
> inheriting the ability to listen and dispatch. We trigger the object,
> which calls the event.
> 
> A Signal object represents an event, and the eventable object has 
> signals associated with it through composition. We trigger the signal
> itself, which then calls the object.

Signals are used when objects want to communicate with eachother, often
in more distributed systems with I/O and inter-process issues happening.

- [Events vs Signals](http://stackoverflow.com/questions/9323888/what-are-the-differences-between-event-and-signal-in-qt)
- [High-level overview](http://blog.millermedeiros.com/callbacks-promises-signals-and-events/)
- [`js-signals` implementation](https://github.com/millermedeiros/js-signals)

---

## Callbacks

- [Callbacks](http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/)

##### Callback Hell

- [Callbck Hell](http://callbackhell.com/)
- [Callbacks vs Promises](https://blog.jcoglan.com/2013/03/30/callbacks-are-imperative-promises-are-functional-nodes-biggest-missed-opportunity/)
   - Node.js design philosophy:
   
      > Everybody uses [callbacks]… If I write my little library, and 
      > it goes and talks to Redis, and that’s the last thing it ever 
      > does, I can just pass the callback that was handed to me off 
      > to Redis.
      >
      > For the 90% case we have this super super simple interface, so
      > when you need to do one thing, you just get one little indent 
      > and then you’re done. And when you have a complicated use case
      > you go and install `async`…

---

## Promises

- [Q Library: Great, airtight explanation](https://github.com/kriskowal/q)
- [Bluebird Library](https://github.com/petkaantonov/bluebird), [RSVP Library](https://github.com/tildeio/rsvp.js)
- [ES6 (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Big Explanation (HTML5 Rocks)](http://www.html5rocks.com/en/tutorials/es6/promises/)

##### Vocabulary

- [States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
- [Cartoon explanation of fulfilled vs success](http://andyshora.com/promises-angularjs-explained-as-cartoon.html)
- [Junky explanation of fulfilled vs resolved](https://jakearchibald.com/2014/resolve-not-opposite-of-reject/)

##### Deferreds

- [Explanation (see answer #2)](http://stackoverflow.com/questions/6801283/what-are-the-differences-between-deferred-promise-and-future-in-javascript)
- [BIG jQuery Explanation](https://msdn.microsoft.com/en-us/magazine/gg723713)
- [jQuery API Docs](https://api.jquery.com/category/deferred-object/)

---

## `async`

- [`async`](https://github.com/caolan/async)
- [Taming Callback Hell](https://blog.engineyard.com/2015/taming-asynchronous-javascript-with-async)
- [Practice with `async`](https://github.com/bulkan/async-you)
