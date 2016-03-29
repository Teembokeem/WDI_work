# Prototypal Inheritance in JavaScript

<img src="http://www.portadownlocksmiths.co.uk/images/uploads/big-key-group.jpg" width=350px>

## The Really Big Key to Unlocking JavaScript's Secrets

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Explain the ways to set a prototype      |
| Identify the difference between constructor and prototype |
| Explain the purpose of a constructor     |
| Use `Object.create()`                    |
| Use constructors with the `new` keyword  |

##### Road Map

1. Prototypal Inheritance - The Last Lock is Always the Biggest
2. Prototypal vs. Classical Inheritance
3. `.constructor`, `.__proto__` and `.prototype`
4. Constructor Functions and `Object.create()`
5. Conclusion - Open Up JavaScript and Listen to Her Whispers

## The Last Lock is Always the Biggest

Prototypal Inheritance in JavaScript is the keystone to understanding the true power available to us as JS programmers. In fact, understanding prototypal inheritance will likely give you the ability to read nearly any JS library and have an idea of what's going on.

JavaScript's prototypal inheritance often gets a bad name, but with greater appreciation of the model we can see that it's actually:

1. Extremely powerful!
2. It's "simple" (but not necessarily easier to comprehend).
3. It Leads to DRY code as there is less need to repeat yourself.
4. It's dynamic and therefore better for a dynamic language like JS.

Let's quickly dive into the differences of Classical and Prototypal Inheritance to see how the models contrast.

## Classical vs Prototypal Inheritance

Often, you'll see `neckbeards` of the JS persuasion claim that prototypal inheritance is "better" than classical inheritance.

While this is clearly subjective, their reasons are often some collection of the following:

| Classical Inheritance                    | Prototypal Inheritance                   |
| :--------------------------------------- | :--------------------------------------- |
| Classes are immutable. You can't modify or add new methods to them at runtime. | Prototypes are flexible. They may be either mutable or immutable. |
| Classes may or may not support multiple inheritance. | Objects can inherit from multiple prototypes. |
| It's verbose and complicated. You have abstract classes, final classes, interfaces, etc. | It's simple. You only have objects and extending objects is the only operation required. |

This table is pointing to the power of JS' prototypal inheritance model. Unlike in a class system, prototypes offer us endless options (remember, it's dynamic and DRY!). It also has the simplicity factor going for it. Where classical inheritance has:

1. Classes.
2. Object.
3. Interfaces.
4. Abstract Classes.
5. Final Classes.
6. Virtual Base Classes.
7. Constructors.
8. Destructors.

Prototypal inheritence only has two ways (it's simple!) to make inheritance work:

1. A way to create a new object (e.g. object literals).
2. A way to extend an existing object (e.g. `Object.create`).

Now that we can see we get a lot of benefits from Prototypal Inheritance, let's talk about JavaScript's brand of Prototypal Inheritance.

##  `.constructor`, `.__proto__` and `.prototype`

These three parts of JS are essential to having complete understanding of the language's inheritance system. Let's look at each:

#### Side Note: JavaScript Got It Wrong...

There are two breeds of Prototypal Inheritance - the prototypal pattern and JS' constructor pattern.

Unfortunately, JS was given the `new` keyword because:

> …we were pushing it as a little brother to Java, as a complementary language like Visual Basic was to C++ in Microsoft’s language families at the time. — Brendan Eich, Creator of JS

This is bad because when people look at JS, they think classical inheritance. Wrong. Wrong wrong wrong.

> This indirection was intended to make the language seem more familiar to classically trained programmers, but failed to do that, as we can see from the very low opinion Java programmers have of JavaScript. JavaScript’s constructor pattern did not appeal to the classical crowd. It also obscured JavaScript’s true prototypal nature. As a result, there are very few programmers who know how to use the language effectively.
>
> — Douglas Crockford, Creator of JSON

##### In prototypal inheritance objects inherit from other objects. Constructors never come into the picture. This is what most confuses people.

#### All about `.__proto__`, `.prototype` and `.constructor`

Now that we've gone through that necessary bit of explanation, let's look at this constructor pattern and see if we can't make sense of it.

###### Quick Definitions:

1. `Object.prototype.constructor` - Returns a reference (<u>**not**</u> a string of the name) to the Object function that created the instance's prototype.
2. `Object.prototype` - the prototype object on the constructor. It is the object that is used to build `__proto__` when you create an object with `new`.
3. [`__proto__`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) - the actual object that is used in the lookup chain to resolve methods. It's similar to an `attr_accessor` in Ruby. In general, **you should never change or overwrite `.__proto__`** - it can lead to a big break in your inheritance chain.

What does all this mean, though!?

Every object has a constructor, all the way up to the Function object constructor. Every constructor function has a prototype that is shared to each of the instances of the constructor. To access the prototype, JS uses `.__proto__` to reach to the constructor's prototype.

Therefore, `prototype` is not available on the instances themselves (or other objects), but only on the constructor functions.

Objects can take from multiple prototypes. This is what is known as the ***Prototype Chain***.

> Allow me to draw this on the board with another Wachowski sisters example.

##### Follow Up Questions:

- What is the purpose of a constructor?
- What does `.__proto__` do for us?
- Where are prototype objects found?

## Constructor Functions vs `Object.create()`

There are two ways to set a prototype (eventually three with ES2015 classes - but for now, we'll focus on these two). A form of constructor function and `Object.create()`.

##### Constructor Functions

An object literal is a succinct way of creating a clone of Object.prototype and extending it with new properties.

Therefore:

``` javascript
var neo = new Object();

var mrAnderson = {};
```

Object literals are nothing but syntactic sugar. Both may now access the prototype of the Object object. Both are constructors as well.

##### `Object.create()`

This method comes to us from the great Douglas Crockford.

``` js
var trinity = {
  kickData: function () {
    console.log("Oh man, so much data is being kicked!");
  }
};

var morpheus = Object.create(trinity);
```

`Object.create()` creates a new object with the specified prototype object and properties. I find this a much more beautiful way to access the prototype, because it does not obfuscate the power of prototypal inheritance with keywords from other inheritance models.  It's also more flexible (mirroring the dynamism of JS!!) making Objects much more configurable!

## Open Up JavaScript and Listen to Her Whispers

<img src="https://s-media-cache-ak0.pinimg.com/736x/af/d4/9f/afd49f25cf0311700f23f062d2ebdb0d.jpg" width=300px>

You've made it through the first jump into prototypal inheritance. Let me tell you, you still have a long way to go as there are endless opinions in how to properly use inheritance in JS - especially when you move into new paradigms of programming.

Make sure to read some of the references at the bottom if you're interested in learning more about JS's inheritance system and how it can be improved upon.

#### Final Questions:

1. What are the two (maybe three with ES2015) ways to set a prototype?
2. `.constructor` is a `_________` to an object's `_________`.
3. Where can one find a `prototype` object?
4. What is the first parameter of `Object.create()`?

##### References

[MDN - Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[Benefits of `Object.create()` for Inheritance](http://stackoverflow.com/questions/17392857/benefits-of-using-object-create-for-inheritance)

[Why Prototypal Inheritance Matters](http://aaditmshah.github.io/why-prototypal-inheritance-matters/)

[Planet Proto](https://github.com/sporto/planetproto)
