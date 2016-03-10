# Context Atlas

![true true](http://www2.pictures.zimbio.com/mp/3YN8yZYv5dMl.jpg)

## Context and Scope in JavaScript

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Explain the difference between Context and Scope |
| Explain `this` and its implementations   |

##### Road Map

1. Context & Scope, [a Frame Tale](https://en.wikipedia.org/wiki/Frame_story)
2. The Difference Between Context and Scope
3. `this` Wandering Soul
4. Outro

## Context and Scope - A Frame Tale

![halle berry](http://www.cityoffilms.com/wp-content/uploads/2012/08/Cloud-Atlas-berry.jpg)



A Frame Tale is a story within a story; a nested tale, if you will. Some famous examples include *The Sandman*, *One Thousand and One Nights*, *The Neverending Story*, *The Princess Bride*, and *The Cantebury Tales*. 

Today we'll be considering Scope and Context using *Cloud Atlas*, an extremely nested frame tale (six stories in all), as a guide to understanding Context.

## The Difference Between Context and Scope

It's important to understand the distinction between Context and Scope. Many JS developers muddy the two meanings, but they are absolutely not the same.

Every function invocation contains both a scope and a context associated with it. Fundamentally, scope is *function-based* while context is **object-based**. We can see why this is confusing, as functions are, of course, objects in JS.

Scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the `this` keyword which is a reference to the object that “owns” the currently executing code.

Another way to think about it is:

- Context is exactly where we are, as in which object we are within, and refers to `this`
- Scope is where we are, as well as all variables that are availabe in enclosing functions/global

**Remember**: 

1. Local variables exist only within the function body of which they are defined and will have a different scope for every call of that function. 
2. Any defined global variable, meaning any variable declared outside of a function body will live throughout runtime and can be accessed and altered in any scope.

##  `this` Wandering Soul

![comet birthmark](http://4.bp.blogspot.com/-3ByLUi8BEYA/Uf-0Y2EL4eI/AAAAAAAAUBg/Sewr-M3MOag/s1600/9.jpg)

Context is all about `this` and `this` is generally determined by how a function is invoked.

For instance, when a method on an object:

``` javascript
var goodSoul = {
    frobisher: function(){
        return this === goodSoul;    
    }
};

goodSoul.frobisher(); // true
```

However, when detached from an object (AKA an unbound function):

``` javascript
var birthmark = function() {
  return this;
};

birthmark(); // window
```

 Using `'use strict'` changes the value of `this` (when on the global scope) from `window` to `undefined`. See the table below for a better understanding of `this` on the global scope:

| ES5      | ES5 'use strict' | ES2015 'use strict' |
| -------- | ---------------- | ------------------- |
| `window` | `undefined`      | `undefined`         |

> Can anyone tell me why this is such a necessary update to JavaScript?

Taking the same `birthmark` function from earlier, we see that when we invoke it with the `new` keyword, making it act as a constructor, `this` will no longer be on the global scope, but on the newly created instance of birthmark.

``` javascript
new birthmark(); // birthmark {}
```

But let's take this a bit farther. With constructors, if the function has a return statement that returns an object, that object will be the result of the `new` expression.  Otherwise, the result of the expression is the object currently bound to `this` (generally how constructors work).

## Outro

There's more to learn about context (specifically binding context functionally), but this should assist you in dealing with event handlers in your projects next week. I'll go over the more in depth view of binding context functionally another morning.

Let's close with a few questions:

1. What's the big difference between scope and context?
2. What is `this`?
3. How does `'use strict';` effect `this`?

#### References

[Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)