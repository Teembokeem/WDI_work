# DOMination

The DOM is a **huge** topic. Before we begin, here are resources that
can help you learn about it.

- **[Our cheatsheet][cheatsheet]**
- [A DOM tutorial][tutorial]
- [MDN Docs][mdn-dm]
- [Another DOM cheatsheet][ch-dom]
- [A good, concise list of DOM event][wiki-events]

### What is the DOM?

|: Objectives                                                           |
|-----------------------------------------------------------------------|
| Define DOM and identify where to find it in the browser API. |
| Define what is meant by DOM node (element), and identify nodes on an HTML page. |

**The DOM is the interface (API) that we use to access our web page 
(HTML) from our JavaScript.**

```html
<ul class="cool-list" style="margin: 0;">
    <li>Item 1</li>
    <li>Item 2</li>
    <li class="special">Item 3 (wow)</li>
</ul>
```

> Think about the HTML code above, about what information each element 
> contains and how they relate to each other. How might we represent this 
> information and these relationships as a JavaScript object?

Our browser loads all of the HTML into a JS object that is available on
the global scope, called `document`:

> Open the console in your browser and type the following. What happens
> after each?

```js
document.documentURI
document.body
document.images
document.scripts
document.styles
document.anchors
```

`document` holds the ***Document Object Model***, or the document (web 
page) modeled as a JS object. That means it has a lot of attributes and
methods, and many of these attributes are also JS objects. It's a very
complex structure.

The most important thing to remember is this: what we most need to know
about anything in programming is *why* to use it, and *how* to use it.
For the DOM:

- we locate HTML elements on a web page, edit them, add new ones, and
  make them interactive by writing JavaScript that uses the DOM
- we work with the DOM by calling methods on the global `document`
  object

### Retrieving Elements

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Create a JS reference to a DOM node (elements) using document.getElementById. |
| Create JS references to DOM nodes (elements) using document.querySelectorAll. |

### Editing or Adding Elements

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Use document.createElement to create new DOM nodes (elements). |
| Use Node#appendChild and .Node#nsertBefore to add DOM nodes (elements) to an HTML page. |
| Use Node#remove and Node#replaceChild to remove or replace DOM nodes (elements) on an HTML page. |

### Attaching Events

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Use Node#addEventListener to create "listeners" for DOM events. |
| Have an event handler listen to multiple DOM elements' events. |
| Explain what is meant by "event listener" and "event handler", and identify the parts of an addEventListener expression. |
| Name important DOM events and give use cases for attaching interaction to each: DOMContentLoaded, click, submit, focus, keyup, mouseover. |

### Writing Event Handlers

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Write event handlers as inline anonymous functions. |
| Access DOM event information inside an event handler. |
| Capture data from specific events and manipulate that data. |

### Modifying Events

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Prevent the default DOM event handler from firing. |
| Explain "event bubbling", or propogation, in the DOM. |
| Prevent the propogation of events in through the DOM. |
| Differentiate between using event.stopPropogation and event.preventDefault, and give use cases for each. |

<!-- LINKS -->

[cheatsheet]:  ../../../../../resources/cheatsheets/dom_js_cheatsheets.md
[tutorial]:    http://tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery
[wiki-events]: https://en.wikipedia.org/wiki/DOM_events
[ch-dom]:      https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf
[mdn-dm]:      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
