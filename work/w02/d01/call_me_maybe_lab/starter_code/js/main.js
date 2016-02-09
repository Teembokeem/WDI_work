
  var lyrics = [
    {
      stanza: 5,
      lines: [
        "Before you came into my life",
        "I missed you so bad",
        "I missed you so bad",
        "I missed you so so bad",
        "Before you came into my life",
        "I missed you so bad",
        "And you should know that",
        "I missed you so so bad, bad, bad, bad...."
      ]
    }, {
      stanza: 3,
      lines: [
        "Your stare was holdin',",
        "ripped jeans; skin was showin',",
        "hot night, wind was blowin'",
        "where you think you're going baby?"
      ]
    }, {
      stanza: 7,
      lines: [
        "Hey I just met you",
        "And this is crazy",
        "But here's my number",
        "So call me maybe",
        "And all the other boys",
        "Try to chase me",
        "But here's my number",
        "So call me maybe"
      ]
    }, {
      stanza: 4,
      lines: [
        "Hey I just met you",
        "And this is crazy",
        "But here's my number",
        "So call me maybe",
        "It's hard to look right at you baby",
        "But here's my number",
        "So call me maybe"
      ]
    }, {
      stanza: 1,
      lines: [
        "You took your time with the call",
        "I took no time with the fall",
        "You gave me nothing at all",
        "But still you're in my way"
      ]
    }, {
      stanza: 2,
      lines: [
        "I beg and borrow and steal",
        "At first sight and it's real",
        "I didn't know I would feel it",
        "But it's in my way"
      ]
    }, {
      stanza: 8,
      lines: [
        "Before you came into my life",
        "I missed you so bad",
        "I missed you so bad",
        "I missed you so so bad",
        "Before you came into my life",
        "I missed you so bad",
        "And you should know that",
        "So call me, maybe"
      ]
    }, {
      stanza: 6,
      lines: [
        "It's hard to look right at you baby",
        "But here's my number",
        "So call me maybe"
      ]
    }
  ];

  lyrics.sort(function(a,b) {
    return a.stanza - b.stanza;
  });

  setTimeout(function() {
    for(i=0; i < lyrics.length; i++ ) {
      lyrics[i].lines.forEach(singLine)
    };
    }, 2600);

console.log("Ahem...");
console.log("");

// 1.  Write a function called singLine that console.logs() a string.
//     Test it by having it print the contents of the variable
//     opening (ie, call it!).

var singLine = function(something) {
  console.log(something);
}
var opening = "I threw a wish in the well,";
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
singLine(opening);
=======

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js

// !!!
singLine = function(line) {
  console.log(line);
};
singLine(opening);

>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// 2.  Pass the function singLine into the function threeMoreLines below,
//     in order to have it console.log the given lines.

var threeMoreLines = function(callback) {
  callback("don't ask me I'll never tell,");
  callback("I looked to you as it fell,");
  callback("and now you're \"in my way.\"");
};

console.log("");
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
threeMoreLines(singLine);
// 3.  Write a function, doThis, that takes another function as input.
//     doThis simply calls the function! Test it by passing it the
//     function singTradeMySoul.
=======
// // 3.  Write a function, doThis, that takes another function as input.
// //     doThis simply calls the function! Test it by passing it the
// //     function singTradeMySoul.
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
// 3.  Write a function, doThis, that takes another function as input.
//     doThis simply calls the function! Test it by passing it the
//     function singTradeMySoul.
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js

var doThis = function(something) {
  something();
};
var singTradeMySoul = function() {
  console.log("I'd trade my soul for a wish,");
};
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
doThis(singTradeMySoul);
// 4.  Write a function, doThisWithThat, that takes TWO parameters, a
//     a function and a string! It should call the first parameter as a
//     callback, passing it the second parameter (the string).
//
//     Test it with the given examples!

var doThisWithThat = function(what, shat) {
  what(shat);
}; // a function stub. replace it!
=======

// 4.  Write a function, doThisWithThat, that takes TWO parameters, a
//     a function and a string! It should call the first parameter as a
//     callback, passing it the second parameter (the string).
//
//     Test it with the given examples!

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
// var doThisWithThat = function() {}; // a function stub. replace it!
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
var doThisWithThat = function() {}; // a function stub. replace it!
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js

// EXAMPLES:
doThisWithThat(singLine, "pennies and dimes for a kiss,");
doThisWithThat(singLine, "I wasn't looking for this,");

// 5.  Write a function, doThisWithThese, that takes TWO parameters, a
//     a function and an array of strings! It should concatenate all of
//     the strings in the array with spaces in between them, and then
//     pass that value to the callback function as a parameter.
//
//     Test it with the given example!

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
var doThisWithThese = function(cat, hat) {
  cat(hat.join(' '));
}; // a function stub. replace it!
// EXAMPLE:
=======
// var doThisWithThese = function() {}; // a function stub. replace it!

// //!!
doThisWithThese = function(callback, arry) {
  var param = "";
  for (var i = 0; i < arry.length; i++) {
    param += " " + arry[i];
  }
  // console.log(param);
  callback(param.trim());
};

// // EXAMPLE:
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
var doThisWithThese = function() {}; // a function stub. replace it!

// EXAMPLE:
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
doThisWithThese(singLine, ["but now", "you're in", "my way."]);

console.log("");
// 6.  Call runFunctionsInOrder ONCE, passing it the functions below,
//     such that the console prints:

//> Your stare was holdin',
//> ripped jeans; skin was showin';
//> hot night, wind was blowin'
//> where you think you're going baby?

var runFunctionsInOrder = function(arrayOfFunctions) {
  for (var i = 0; i < arrayOfFunctions.length; i++) {
    arrayOfFunctions[i](); // call the function!
  }
};

var singLine1 = function() {
  console.log("Your stare was holdin',");
};
var singLine2 = function() {
  console.log("ripped jeans; skin was showin',");
};
var singLine3 = function() {
  console.log("hot night, wind was blowin'");
};
var singLine4 = function() {
  console.log("where you think you're going baby?");
};

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
var coolio =[];
coolio.push(singLine1, singLine2, singLine3, singLine4)

runFunctionsInOrder(coolio);

=======
// // !!!
runFunctionsInOrder([singLine1, singLine2, singLine3, singLine4]);
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js

// ******************** BREAK ********************
// GOOD JOB SO FAR! NOW WE'RE GOING TO MOVE IN TO
// THE CHORUS THAT TOOK THE WORLD BY STORM. REM-
// 2012? IF YOU DON'T RIGHT NOW, YOU WILL IN A
// LITTLE BIT. ANYWAY, 2012 ASIDE, YOU'LL NEED TO
// USE setTimeout AND setInterval BELOW. FOR MORE
// INFO, CHECK OUT THE README! READY TO GO? YAY!
//
// ♪ I missed you so bad… And you should know that… ♪

console.log("");
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// 7.  We're working with a chorus now. Write a function, and pass it
//     to setInterval with a period of 1000 (one second), so that you
//     print the following lines OVER AND OVER! Note: this includes the
//     final blank line.

//> Hey, I just met you,
//> and this is crazy,
//> but here's my number,
//> so call me, maybe.
//>

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
/*var hey = function(stupidLine, stupiddd) {
  setTimeout(function() {
    stupidLine.push("Hey, I just met you,");
    stupiddd(stupidLine);
  }, 1000);
}

var crazy = function(stupidLine, stupiddd) {
  setTimeout(function() {
    stupidLine.push("and this is crazy,");
    stupiddd(stupidLine);
  }, 1000);
}
var number = function(stupidLine, stupiddd) {
  setTimeout(function() {
    stupidLine.push("but here's my number");
    stupiddd(stupidLine);
  }, 1000);
}
var maybe = function(stupidLine, stupiddd) {
  setTimeout(function() {
    stupidLine.push("so call me, maybe.");
    stupiddd(stupidLine);
  }, 1000);
}
var umph = function(stupidLine, stupiddd) {
  setTimeout(function() {
    stupidLine.push(" ");
    console.log(stupidLine.join(' '));
  }, 1000);
}

var okay=[];;

hey(okay, function(whaaa) {
  crazy(whaaa, function(woop) {
    number(woop, function(butt) {
      maybe(butt, function(poop) {
        umph(poop, function(oopah) {
        });
      });
    });
  });
});*/

var chorus = setInterval(function() {
  console.log("Hey, I just met you, ");
  console.log("and this is crazy, ");
  console.log("but here's my number, ");
  console.log("so call me, maybe");
  console.log(" ");
}, 1000);



=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// 8.  So we're in the chorus! After the above stanza is printed the
//     first time, but before it's printed the second time (between 1
//     2 seconds, so 1500 milliseconds, eg), use setTimeout to print the
//     following lines, including the final blank line:

//> It's hard to look right,
//> at you ba-aby,
//> but here's my number,
//> so call me, maybe.

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
  setTimeout(function() {
=======
// // 7.  We're working with a chorus now. Write a function, and pass it
// //     to setInterval with a period of 1000 (one second), so that you
// //     print the following lines OVER AND OVER! Note: this includes the
// //     final blank line.

// //> Hey, I just met you,
// //> and this is crazy,
// //> but here's my number,
// //> so call me, maybe.
// //>

// //!
var chorus = setInterval(function() {
  console.log("Hey, I just met you,");
  console.log("and this is crazy,");
  console.log("but here's my number,");
  console.log("so call me, maybe.");
  console.log("");
}, 1000);

// // 8.  So we're in the chorus! After the above stanza is printed the
// //     first time, but before it's printed the second time (between 1
// //     2 seconds, so 1500 milliseconds, eg), use setTimeout to print the
// //     following lines, including the final blank line:

// //> It's hard to look right,
// //> at you ba-aby,
// //> but here's my number,
// //> so call me, maybe.

// //!
setTimeout(function() {
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
  console.log("It's hard to look right,");
  console.log("at you ba-aby,");
  console.log("but here's my number,");
  console.log("so call me, maybe.");
<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
  console.log(" ");
}, 1500)


=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// 9.  Ok, ok, ok. You're like a Top 40 DJ over here, putting this on
//     infinite repeat! Let's make sure it stops after printing *twice*!
//     This means we'll need to "clear" the interval, and we'll need to
//     do that after it's run twice (so, between 2 and 3 seconds in the
//     future).
//
//     Save the return value of the above set interval as a variable
//     `chorus`. Use setTimeout to call clearInterval on `chorus` at
//     2500 milliseconds.

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
=======
  console.log("");
}, 1500);

// // 9.  Ok, ok, ok. You're like a Top 40 DJ over here, putting this on
// //     infinite repeat! Let's make sure it stops after printing *twice*!
// //     This means we'll need to "clear" the interval, and we'll need to
// //     do that after it's run twice (so, between 2 and 3 seconds in the
// //     future).
// //
// //     Save the return value of the above set interval as a variable
// //     `chorus`. Use setTimeout to call clearInterval on `chorus` at
// //     2500 milliseconds.

// //!!
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
setTimeout(function() {
  clearInterval(chorus);
}, 2500);

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// 10.  Great! We're almost there! Now, we have to print the last part
//      of the chorus. Look up the Array#forEach method on MDN, and
//      use it on the array below to print all of the lines to the
//      console!
//      - MDN Link: https://goo.gl/Qb6lQc
//
//      Oh, and do that *as the final stanza*! That means use another
//      setTimeout to place it after 2500 milliseconds have passed.

var finalStanza = [
  "And all the other boys,",
  "try to chase me,",
  "but here's my number,",
  "so call me, maybe.",
  "",
  "https://www.youtube.com/watch?v=zwDvF0NtgdU"
];

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
setTimeout(function() {
  finalStanza.forEach(singLine);
}, 2500);
=======
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
// WELL DONE, EH!

// BONUS!
// 11. Use the Array#sort method to arrange the below data structure to
//     print the stanzas in the correct order. Remember: you should use
//     both setTimeout and .forEach to print it all out after all the
//     above stanzas!

<<<<<<< HEAD:work/w02/d01/call_me_maybe_lab/starter_code/js/main.js
=======
// // 10.  Great! We're almost there! Now, we have to print the last part
// //      of the chorus. Look up the Array#forEach method on MDN, and
// //      use it on the array below to print all of the lines to the
// //      console!
// //      - MDN Link: https://goo.gl/Qb6lQc
// //
// //      Oh, and do that *as the final stanza*! That means use another
// //      setTimeout to place it after 2500 milliseconds have passed.

// var finalStanza = [
//   "And all the other boys,",
//   "try to chase me,",
//   "but here's my number,",
//   "so call me, maybe.",
//   "",
//   "https://www.youtube.com/watch?v=zwDvF0NtgdU"
// ];

// //!!
// setTimeout(function() {
//   finalStanza.forEach(singLine);
// }, 3000);

// // WELL DONE, EH!

// // BONUS!
// // 11. Use the Array#sort method to arrange the below data structure to
// //     print the stanzas in the correct order. Remember: you should use
// //     both setTimeout and .forEach to print it all out after all the
// //     above stanzas!

// var lyrics = [
//   {
//     stanza: 5,
//     lines: [
//       "Before you came into my life",
//       "I missed you so bad",
//       "I missed you so bad",
//       "I missed you so so bad",
//       "Before you came into my life",
//       "I missed you so bad",
//       "And you should know that",
//       "I missed you so so bad, bad, bad, bad...."
//     ]
//   }, {
//     stanza: 3,
//     lines: [
//       "Your stare was holdin',",
//       "ripped jeans; skin was showin',",
//       "hot night, wind was blowin'",
//       "where you think you're going baby?"
//     ]
//   }, {
//     stanza: 7,
//     lines: [
//       "Hey I just met you",
//       "And this is crazy",
//       "But here's my number",
//       "So call me maybe",
//       "And all the other boys",
//       "Try to chase me",
//       "But here's my number",
//       "So call me maybe"
//     ]
//   }, {
//     stanza: 4,
//     lines: [
//       "Hey I just met you",
//       "And this is crazy",
//       "But here's my number",
//       "So call me maybe",
//       "It's hard to look right at you baby",
//       "But here's my number",
//       "So call me maybe"
//     ]
//   }, {
//     stanza: 1,
//     lines: [
//       "You took your time with the call",
//       "I took no time with the fall",
//       "You gave me nothing at all",
//       "But still you're in my way"
//     ]
//   }, {
//     stanza: 2,
//     lines: [
//       "I beg and borrow and steal",
//       "At first sight and it's real",
//       "I didn't know I would feel it",
//       "But it's in my way"
//     ]
//   }, {
//     stanza: 8,
//     lines: [
//       "Before you came into my life",
//       "I missed you so bad",
//       "I missed you so bad",
//       "I missed you so so bad",
//       "Before you came into my life",
//       "I missed you so bad",
//       "And you should know that",
//       "So call me, maybe"
//     ]
//   }, {
//     stanza: 6,
//     lines: [
//       "It's hard to look right at you baby",
//       "But here's my number",
//       "So call me maybe"
//     ]
//   }
// ];

// //!!
// setTimeout(function() {
//   console.log("");
//   lyrics.sort(function(stanzaA, stanzaB) {
//     return stanzaA.stanza - stanzaB.stanza;
//   }).forEach(function(stanza) {
//     stanza.lines.forEach(singLine);
//     console.log("");
//   });
// }, 3500);
>>>>>>> da08df596f6c5feb59ffa8fdefc47020a5bdc380:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
=======
var lyrics = [
  {
    stanza: 5,
    lines: [
      "Before you came into my life",
      "I missed you so bad",
      "I missed you so bad",
      "I missed you so so bad",
      "Before you came into my life",
      "I missed you so bad",
      "And you should know that",
      "I missed you so so bad, bad, bad, bad...."
    ]
  }, {
    stanza: 3,
    lines: [
      "Your stare was holdin',",
      "ripped jeans; skin was showin',",
      "hot night, wind was blowin'",
      "where you think you're going baby?"
    ]
  }, {
    stanza: 7,
    lines: [
      "Hey I just met you",
      "And this is crazy",
      "But here's my number",
      "So call me maybe",
      "And all the other boys",
      "Try to chase me",
      "But here's my number",
      "So call me maybe"
    ]
  }, {
    stanza: 4,
    lines: [
      "Hey I just met you",
      "And this is crazy",
      "But here's my number",
      "So call me maybe",
      "It's hard to look right at you baby",
      "But here's my number",
      "So call me maybe"
    ]
  }, {
    stanza: 1,
    lines: [
      "You took your time with the call",
      "I took no time with the fall",
      "You gave me nothing at all",
      "But still you're in my way"
    ]
  }, {
    stanza: 2,
    lines: [
      "I beg and borrow and steal",
      "At first sight and it's real",
      "I didn't know I would feel it",
      "But it's in my way"
    ]
  }, {
    stanza: 8,
    lines: [
      "Before you came into my life",
      "I missed you so bad",
      "I missed you so bad",
      "I missed you so so bad",
      "Before you came into my life",
      "I missed you so bad",
      "And you should know that",
      "So call me, maybe"
    ]
  }, {
    stanza: 6,
    lines: [
      "It's hard to look right at you baby",
      "But here's my number",
      "So call me maybe"
    ]
  }
];
>>>>>>> 6c390aafeacd041218f978875e5ec358544ebd78:work/w02/d01/instructor/call_me_maybe_lab/starter_code/js/main.js
