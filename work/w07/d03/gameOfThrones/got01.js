
/********************************
 * CHAPTER 1: Hail to the King! *
 ********************************/
console.log("\n---- Chapter 1 ----\n");

// 1.  Write a function named `hailTo` that takes an argument `name`, and
//     returns the string:
//     "Long live King [name]!"

function hailTo(name) {
  if (name !== undefined) {
    return "Long live King " + name
  } else
    return "Long live King.... wait, who was it again?"
}

//OR
// function hailTo(name) {
//   if (name !== undefined) {
//     return `Long live King $(name)!`
//   } else
//     return "Long live....who?"
//   }
// }

console.log("Number 1: ", hailTo());


// 2.  Create a string called "king" with the name of our one true king: Robert!
//     Print a hail to our king on the console!

var king = "Robert!"

console.log("Number 2:", hailTo(king));


/********************************
 * CHAPTER 2: A Game of Thrones *
 ********************************/
console.log("\n---- Chapter 2 ----\n");

// 1.  Create an array called `kings` and push our king "Robert" on to it...

var kings = [];
kings.push(king);

console.log("Number 1: ", king + "was pushing into King array: " + kings);


// 2.  Print a hail to the king in our kings array, so that it looks like:
//     "Long live King [name]!"
console.log("Number 2: ", hailTo(kings[0]));
console.log("Number 2: ", "Hail to " + kings)


// 3.  Add our future king "Joffrey" to our list of kings, and then we shall
//     hail him as well!

kings.push("Joffrey")
console.log("Number 3: ", kings[1]);


// 4.  An untimely death has come... remove our good king Robert from the array,
//     and store him in a variable named `formerKing`. Now print a hail him and
//     our new, and only, King Joffrey!

var formerKing = kings[0];
kings.splice(0,1);

console.log("Number 4:", hailTo(kings) );


// 5.  What"s this? Our dead king"s brothers now claim the throne! We must add
//     them to the list of kings. Their names are "Stannis" and "Renly"...

kings.push("Stannis", "Renly")

console.log("Number 5:", kings);


// 6.  Woe is us: what a situation... Print to the console the number of kings
//     we currently have, in the line:
//     "What can we do, now that there are [x] kings?"



console.log("Number 6:", `What can we do, now that there are ${kings.length} kings?`);


/*******************************
 * CHAPTER 3: Winter is Coming *
 *******************************/
console.log("\n---- Chapter 3 ----\n");
var kings = [
  "Joffrey",
  "Stannis",
  "Renly",
  "Balon",
  "Robb"
];

// 1.  Print each king"s name using a `while` loop, a `console.log`, and
//     the `hailTo` function, so that it looks like:
//     "Long live King [name]!" (five times...)

console.log("Number 1:");
var i =0;
while(i < kings.length) {
  console.log(hailTo(kings[i]));
  i++;
}


// 2.  Print the above using a `for` loop.
console.log("Number 2:");
for (var i=0;i<kings.length; i++) {
  console.log(hailTo(kings[i]));
}


// 3.  Print the above using a `forEach` enumeration method
console.log("Number 3:");
kings.forEach(function(printdisdude) {
  console.log(hailTo(printdisdude));
})

