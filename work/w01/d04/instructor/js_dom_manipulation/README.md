# DOMination

### Contents

**[What is the DOM](what-is-the-dom)**   
  - [The `document` object](the-document-object)
  - [DOM Node objects (HTML elements)](dom-node-objects)
**[Retrieving Elements](retrieving-elements)**   
**[Editing Elements](editing-elements)**   
**[Adding Elements](adding-elements)**   
**[Attaching Events](attaching-events)**   
**[Writing Event Handlers](writing-event-handlers)**   
**[Modifying Events](modifying-events)**   

The DOM is a **huge** topic. Before we begin, here are resources that
can help you learn about it.

- **[Our cheatsheet][cheatsheet]**
- [A DOM tutorial][tutorial]
- [MDN Docs][mdn-dm]
- [Another DOM cheatsheet][ch-dom]
- [A good, concise list of DOM events][wiki-events]

### What is the DOM?

| Objectives                                                                      |
|---------------------------------------------------------------------------------|
| Define DOM and identify where to find it in the browser API.                    |
| Define what is meant by DOM node (element), and identify nodes on an HTML page. |

**The DOM is the interface (API) that we use to access our web page 
(HTML/CSS) from our JavaScript.**

```html
<ul class="cool-list hotness" style="margin: 0;">
    <li>Item 1</li>
    <li>Item 2 <span>(more?)</span></li>
    <li class="special">Item 3 (wow!)</li>
</ul>
```

> Think about the HTML code above, about what information each element 
> contains and how they relate to each other. How might we represent this 
> information and these relationships as a JavaScript object?

As we've learned, usually we model things in JavaScript as objects. These
may be modeled as:

```javascript
var html = { 
  // the HTML Element, or Node, <ul>
  tag: "ul",
  classList: [
    "cool-list", 
    "hotness"
  ],
  styles: {
    margin: 0
  },
  children: [
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 1"
    },
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 2",
      children: [
        { // the HTML Element, or Node, <span>
          tag: "span",
          text: "(more?)"
        }
      ]
    },
    { // the HTML Element, or Node, <li>
      tag: "li",
      text: "Item 3 (wow!)",
      classList: ["special"]
    }
  ]
};
```

> **And, in fact, this is what happens!**

Our browser loads all of the HTML into a JS object that is available on
the global scope, called `document`.

#### The `document` object

> Open the console in your browser and type the following. What happens
> after each?

```js
document.documentURI
document.body
document.images
document.scripts
document.styleSheets
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

#### DOM "Node" objects

Every single part of web page is represented by a DOM Node JavaScript 
object. "Node" is a type of object that has certain properties
and methods, which [you can explore on MDN][node-api], including:
  - `.textContent`,
  - `.parentNode`,
  - `.appendChild()`,
  - `.insertBefore()`,
  - and more…

Nodes which represent HTML elements also have 
[Element-specific properties and methods][element-api], including:
  - `.tagName`,
  - `.id`,
  - `.classList` & `.className`,
  - `.innerHTML`,
  - `.children`,
  - `.remove()`,
  - `.addEventListener()`,
  - and more…

Using all of these properties and methods we can interact with our
web page! 

### Retrieving Elements

| Objectives                                                                    |
|:------------------------------------------------------------------------------|
| Create a JS reference to a DOM Node/element using `document.getElementById`.  |
| Create JS references to DOM Nodes/elements using `document.querySelectorAll`. |

### Editing Elements

| Objectives                                                          |
|:--------------------------------------------------------------------|
| Directly edit the attributes of DOM Nodes/elements, including `id`. |
| Access and edit the text of DOM Node/elements.                      |
| Find, add or remove classes on DOM Nodes/elements.                  |


### Adding Elements

| Objectives                                                                                |
|:------------------------------------------------------------------------------------------|
| Use `document.createElement` to create new DOM Nodes/elements.                            |
| Use `Node#appendChild` and `Node#insertBefore` to add DOM Nodes/elements to an HTML page. |
| Use `Node#remove` and `Node#replaceChild` to remove or replace DOM Nodes/elements.        |

### Attaching Events

| Objectives                                                                                  |
|:--------------------------------------------------------------------------------------------|
| Use `Node#addEventListener` to create "listeners" for DOM events.                           |
| Have an event handler listen to multiple DOM elements' events.                              |
| Explain what is meant by "event listener" and "event handler", and identify the parts of an `.addEventListener()` expression. |
| Name important DOM events and give use cases for attaching interaction to each: `DOMContentLoaded`, `click`, `submit`, `focus`, `keyup`, `mouseover`. |

### Writing Event Handlers

| Objectives                                                                          |
|:------------------------------------------------------------------------------------|
| Write event handlers as inline anonymous functions.                                 |
| Access and edit DOM event information inside an event handler from an event object. |

### Modifying Events

| Objectives                                                           |
|:---------------------------------------------------------------------|
| Prevent the default DOM event handler from firing.                   |
| Explain "event bubbling", or propogation, in the DOM.                |
| Use event bubbling / propogation to write "smart" event handlers.    |
| Prevent the propogation of events in through the DOM.                |
| Differentiate between using `event.stopPropogation` and `event.preventDefault`, and give use cases for each. |

<!-- LINKS -->

[cheatsheet]:  ../../../../../resources/cheatsheets/dom_js_cheatsheet.md
[tutorial]:    http://tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery
[wiki-events]: https://en.wikipedia.org/wiki/DOM_events
[ch-dom]:      https://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf
[mdn-dm]:      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
[node-api]:    https://developer.mozilla.org/en-US/docs/Web/API/Node
[element-api]: https://developer.mozilla.org/en-US/docs/Web/API/Element
