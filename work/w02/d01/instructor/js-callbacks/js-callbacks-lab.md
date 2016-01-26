![](https://pbs.twimg.com/profile_images/499022165404946432/2Kpm7afx_400x400.png)

# JavaScript Callbacks Lab

## Introduction

This lab provides an opportunity to practice working with callbacks.

>**Note:** This can be a pair programming activity or done independently.

## Exercise

### Setup

1. If you haven't done so already, create an account on _codepen.io_. CodePen is a great place to play with, and keep scratch code that you don't want to push to your GitHub account.
2. Copy each exercise to CodePen
3. Code away!

### Exercises

```js
// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log('Ding!');
}

var dingHandle = setTimeout(writeDing(), 3000);
```

```js
// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write a callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

var words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

var sortedWords = words.sort(/* pass in your callback here */);

// Check that logging sortedWords outputs
// ["nice", "short", "medium", "lengthy", "delicious"]

// Write your sorting callback below (use a function declaration)
```

```js
// Exercise 3
//
// Change Exercise 2 so that:
//   1. The words sort longest to shortest
//   2. Use an anonymous inline function

var longWordsFirst = words.sort(/* write an anonymous inline function here */);

// Check that logging longWordsFirst outputs
// ["delicious", "lengthy", "medium", "short", "nice"]
```

```js
// Exercise 4

// The following are completed functions used to build a sandwich:

function getBread(sandwich, cb) {
  setTimeout(function() {
    sandwich = ['bread'];
    cb(sandwich);
  }, 1000);
}

function addMayo(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('mayo');
    cb(sandwich);
  }, 900);
}

function addTurkey(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('turkey');
    cb(sandwich);
  }, 800);
}

function addCheese(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('cheese');
    cb(sandwich);
  }, 700);
}

// Variable to hold the sandwich's ingredients
var sandwich;

// Assignment: Call the above functions so that logging sandwich
// produces these ingredients in the correct order
// ["bread", "mayo", "turkey", "cheese"]

```

### Solution Code

[This links to a CodePen containing the solution code](http://codepen.io/jim-clark/pen/yYbYBo?editors=001)