![](http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png
)
# Intro to JavaScript Data Types, Variables & Arrays

| Learning Objectives |
| :--- |
| Identify JavaScript's Data Types |
| Define Variables |
| Create and Manipulate Arrays |

## Roadmap
1. Intro to JavaScript (5 mins)
2. Explore JavaScript's Datatypes (25 mins)
3. Variables (10 mins)
4. Arrays (35 mins)
5. Further Study

### 1. Intro to JavaScript<small> (5 mins)</small>

> "JavaScript is the world's most popular programming language."<br>
> _\- someone on the Internet that knows..._

**? - Any thoughts as to why JavaScript has become so popular?**

#### JavaScript's Role

The purpose of JavaScript is to provide behavior to our web applications via client-side script.

![](http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/47548d/introduction-of-javascript/Images/JavaScript%20Introduction.jpg)

>The popularity of a technology known as _Node.js_ has resulted in JavaScript also being used on the server-side. We'll learn more about _Node.js_ in week 7.

#### A Few Facts About JavaScript:

- Created in 10 days in 1995 by Brendan Eich.
- Not to be confused with Java (although both have syntaxes based upon the "C" programming language).
- JavaScript is an implementation of ECMAScript, a standard maintained by the European Computer Manufacturers Association).
- Currently, the version that is **fully** implemented by browsers is ECMAScript 5. However, the newest version, ES2015 (formerly known as ES6), is gradually being implemented right now. [This website](http://kangax.github.io/compat-table/es6/) reports the implementation status in all major browsers. ES2015 adds lots of new features and we will briefly cover a tidbit of them in WDI.
- JavaScript's an object oriented programming (OOP) language despite not having _classes_ used in "classical" OOP languages. However, JS has recently jumped on the "class" bandwagon with ES2015.

### 2. Explore JavaScript's Datatypes<small> (25 mins)</small>

JavaScript is an _untyped_ language. This means that we do not explicitly specify the _type_ of data we are working with. In _strongly typed_ languages such as Java, datatypes are explicitly specified. 

However, although we don't specify datatypes in JavaScript, every piece of data still has a **type**!  The type being defined by the actual type of data we are using in a given scenario.  For example, when we assign some text to a variable like this:

```js
var myName = "Joe Cool";
```
the variable `myName` would have a datatype of **string**.

Currently, JavaScript has six datatypes (ES2015 adds a new _symbol_ data type).

![](http://slidenerd.com/wp-content/uploads/2014/09/Snap-2014-09-27-at-10.28.06.png)

Let's examine each of these...

#### Setup

We are going to use Chrome's DevTools in this lesson to inspect and manipulate data.

Open Chrome and press `command+option+j` to open the _console_. The _console_ allows us to enter JS expressions and statements.

#### Explore JavaScript's Data Types

##### string

A _string_ represents textual data with zero or more characters wrapped by single or double quotation marks such as `"John"` or `'Jane'`. A pair of quotes with nothing between them is still a _string_ - an _empty string_.

```
> 'Hello World'
< "Hello World"
> typeof "I'm a string"
< "string"
```

Notice that the `typeof` operator itself always returns a string.

>ES2015 Note: In addition to using single and double quotes to delimit a string, ES2015 adds a a third way by using the back-tick character to create what's called a _template string_.

##### number

A _number_ represents a numeric value.

Unlike many other programming languages, there is no distinction between integer (`15`, `3`, etc.) and floating-point/decimal types (`17.24`, `3.1416`, etc.).

Internally, JS represents all numbers as floating-point values.

```
> 15
< 15
> typeof 15
< "number"
> typeof 12.34
< "number"
> typeof '12.34'  // what will this return as the type?  
```

##### boolean

Whereas strings and numbers can have a virtually unlimited number of different values, the _boolean_ data type only has two: __true__ and __false__.

<hr>
**Before moving on to more data types, lets pair up and think of a couple examples where we might use each of the three data types we've covered thus far (string, number & boolean) to represent data in our programs.<br><br>For example, we would represent a person's name in our program using a _string_ - right?<br><br>In five minutes, I'll ask you to share what you've come up with...**
<br>

**? - If we needed to store a person's _social security number_, would you use a number or a string? Why?**

<hr>

Let's continue looking at the other data types...

##### null

The _null_ data type has only one value: __null__.

We often assign the value _null_ to a variable to represent the fact that it has no "real" value :)

```
> typeof null
< "object"  // Fail! Remember, JS was written in 10 days by one dude!
```

##### undefined

A variable that has not been assigned a value is of type _undefined_.

Also, a function returns _undefined_ if a value was not returned by it.

Lastly, you will see _undefined_ a lot in the console when it evaluates an expression or statement that does not return a value.

```
> typeof undefined
< "undefined"
```

##### object

Virtually all programming languages have the concept of two classifications of datatypes:

- **Primitive** datatypes
- **Complex** datatypes

Variables that hold a _primitive_ datatype can hold only one value at a time. Therefore, the five data types that we've looked at thus far are classified as _primitive_ datatypes.

That brings us to _complex_ datatypes. _Complex_ datatypes can be thought of as containers capable of holding several pieces of data.

Accordingly, in JavaScript, the **object** datatype is a _complex_ type.

Typically, when we discuss _objects_ in JS, we are referring to plain vanilla _objects_ that have a collection of zero or more properties (key/value pairs). However, there are several other types of data we will work with that are special versions of the JS object.  Here they are:

- **Object**<br>`{name: 'Joe Cool'}`
- **Array**<br>`[1, 2, 3]`
- **Date**<br>`new Date()`
- **RegExp**<br>`\.*\`
- **Function**<br>`function() {}`

We will discuss _objects_ in detail in the next lesson.

For now, let's just verify what `typeof` returns:

```
> typeof {course: 'WDI', cohort: 8}
< "object"
```

Yay, that's all six datatypes!

>Note: There's an important concept of **value types** and **reference types**. These are discussed in the Further Study section of this lesson.

**? - Do all variables have a data type?**

### 3. Variables<small> (10 mins)</small>

_Variables_ are ubiquitous in computer programming. Think of them as containers in memory for storing data.

We name variables with _identifiers_ and we declare variables using the `var` keyword:

```js
var myVar;
```

**? - What is the identifier (name) of the variable above?**

We can also assign a value to a variable at the time we declare it by using the assignment operator `=`:

```js
var name = "Fred Flintstone";  // two birds with one stone!
```

and change it's value later...

```js
name = "Barney";  // note that we only use "var" once to declare the same variable
```

Multiple variables can be defined on a single line:

```js
var name = 'Wilma', age, town = 'Bedrock'

// above is equivalent to
var name = 'Wilma';
var age;
var town = 'Bedrock';
```

**? - What does the variable `age` equal?**

##### Naming Variables

When naming variables, the convention is to use _Lower Camel Case_ naming, e.g.,  `myLittleHouse`.

Identifiers in JS:

- Are case-sensitive!
- Must begin with a letter
- Can contain letters, digits, underscores, and dollar signs

**? - Are the following valid variable declarations?**

```
var hello;
Var car1 = 'BMW';
var good_bye = "Adios " + "Muchacho";
var car-2 = 'Toyota';
var 1_person = 'Sally';
```

**Any questions regarding variables?**

### 4. Arrays<small> (25 mins)</small>

#### What are Arrays?

- In JS, there is no "array" datatype. Arrays are actually a special type of object.
- Arrays are often the data structure of choice to hold a "list" of data.
- Each item in an array is called an element.
- Elements can contain data of the same or different types, however, they most commonly hold the same type of data such as a list of strings.
- Arrays dynamically grow and shrink in size as we add data to, and remove data from them.

#### Creating Arrays

There are two ways to create an array...

```js
// using a Constructor Function (less common syntax)
var nums = new Array(2, 4, 18);

// using Array Literal syntax (recommended best practice)
var nums = [2, 4, 18];
```

**As mentioned yesterday, we will often show you alternative ways of doing things, including ways that are not necessarily the best or recommended way. Do we do this to confuse you?**

#### Accessing the Elements in an Array

We access elements in an array using **bracket notation**, passing in the "index" of the element you want to access:

```js
var superheroes = ['Batman', 'Swamp Thing', 'Captain Marvel'];
var firstHero = superheroes[0];  // 'Batman'
```

Since when is `0` the first item in anything?  Since computer science came along! Internally, programs loves to think in terms of "offsets" and we access the first item using an offset of zero - this is referred to as being "zero-based".

**? - How would we access the element that contains the value "Captain Marvel"?**

>FYI, the individual characters in a string can be accessed using bracket notation also - try it!

#### Working with Arrays

It's time to practice working with arrays.

To start, in the console, create an array with several elements containing your favorite sports teams, animals, baby names, or whatever... Be sure to assign your array to a variable. You have 3 minutes...

The following are most, but not all, of the methods available on array objects:

1. `Array.push()`
2. `Array.pop()`
3. `Array.shift()`
4. `Array.unshift()`
5. `Array.sort()`
6. `Array.concat()`
7. `Array.indexOf()`
8. `Array.lastIndexOf()`
9. `Array.join()`
10. `Array.split()`
11. `Array.slice()`
12. `Array.splice()`

Let's pair up and I'll assign one of these methods per pair.

Each pair will then have 5 minutes to research their assigned method and prepare a brief demo using one of their laptops.

Be aware of the fact that some methods will modify the existing array and others will not, returning a new array instead.

After the demos are ready, I will pick on a few teams to come up front and demo their demo for as long as time permits...

## Further Study

### Data Type Classifications

Part of becoming a developer is learning to talk like one. This of course requires learning the vocabulary of programming.

When hanging with devs, you may hear some of the following lingo in regards to datatypes...

#### Primitive Data Types

Variables holding a **primitive** datatype can hold only one value at a time.

In JS, we can further group primitive datatypes into two sub-types:

- Simple Data Types
  - string
  - number
  - boolean

- Special Data Types
  - undefined
  - null

#### Complex Data Types

Complex datatypes can be thought of as containers consisting of primitive data type values.

Accordingly, the **object** datatype is a complex type.

>Note: You will come across **arrays** being referred to as a datatype - and that's cool. In fact, your instructors may refer to arrays as if they are a datatype. However, be aware that technically, arrays in JS are just special objects (as are functions).

Complex datatypes are also referred to as **reference types**. This is because when we assign one object to another, we are simply assigning a "reference" to the original object, whereas primitive types copy their value when assigning one variable to another. Let's see this in action by copying the following in to the console:

```js
// primitives (value type)
var x = 5;
var y = x;
console.log(x, y);
x = 10;
console.log(x, y);  // y is still equal to 5

// complex (reference type)
var o = {x: 5};
var p = o;
console.log(o, p);
o.x = 10;
console.log(o, p);  // p.x changed too!
```

Notice how the value of `y` did not change, yet object `p` did. Again, this is because `p` simply holds a reference, or points to, `o`.

### Type Conversion

JavaScript is very relaxed when it comes to data types. Contrary to non-dynamic languages, a variable can change its type.

```js
var m = 15;  // I'm a number
m = 'hey';   // Now I'm a string!
```

#### Beware of Implicit Conversion

JavaScript is friendly and tries to help us whenever it can. However, we all know that sometimes its better to be left alone.

__Try adding a string to a number.  What did JS do?__

__Now try comparing a number and a string containing the same digits using the equality (`==`) comparison operator__

```js
13 == "13"  // returns true!
```

This is why, unless there's a reason not to, use the _strict equality operator_ (`===`) as it will not perform type conversion. 

#### Explicit Type Conversion

We can easily convert a number to a string using the `toString()` and `toFixed()` methods:

```js
var n = 123.456;
var s1 = n.toString();  // "123.456"
var s2 = n.toFixed(2);  // "123.46"
```

There are a couple of handy methods used to convert strings to numbers: `parseInt()` and `parseFloat()`

```js
var s = "1234.567";
var n1 = parseInt(s);  // 1234
var n2 = parseFloat(s);  // 1234.456
```
Remember however, that the data type for both flavors, integer and float (short for floating-point), is _number_.

### Array - Practice

#### Simple Iteration with a `for` loop

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```js
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

#### Iterating Over an Array's Elements

JavaScript arrays have several advanced _iterator methods_.

Several of these methods require a function be supplied as an argument.

As an example, lets look at the `forEach` method that we can use instead of a `for` loop to iterate the elements:

```js
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Clippers'];
teams.forEach(function(el) {
    console.log(el);
});
```

Would you agree that this code's intention is clearer than that of the for loop?

Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`

Use these arrays to practice with:

```js
var names1 = ["Plato", "Linus", "Rashad", "Aidan", "Hunter", "Rudyard", "Kaseem", "Armand", "Clayton"];
var names2 = ["Ferris", "Erich", "Alvin", "Brody", "Justin"];
```

## References

[MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

