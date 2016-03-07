/*****************************************
 * CHAPTER 4: You Either Win, or You Die *
 *****************************************/
console.log("\n---- Chapter 4 ----\n");


var kings = [
  {name: "Joffrey", house: "Baratheon-Lannister", ironThrone: true},
  {name: "Stannis", house: "Baratheon",           ironThrone: false},
  {name: "Renly",   house: "Baratheon",           ironThrone: false},
  {name: "Balon",   house: "Greyjoy",             ironThrone: false},
  {name: "Robb",    house: "Stark",               ironThrone: false}
];

// 1.  We must acclaim the five kings: print to the console a hail to each,
//     using a new `hailTo` function and the `forEach` method:
//     "Long live King [name] of House [house]!" (five times...)
console.log("Number 1:");

function hailTo(pooper) {
    console.log("Long live King " + pooper.name + " of House " + pooper.house + "!");
};

// hailTo();

// 2.  Now we must be sure to print the correct salute... For a "king" not on
//     the Iron Throne we must write a function `declaim` that returns the line:
//     "Woe be to the pretender [name] of the house [house]..."
console.log("Number 2:");

function declaim(pooper) {
    if (!pooper.ironThrone) {
      console.log("Woe be to the pretender " + pooper.name + " of the house " + pooper.house + "...");
    }
}

// declaim();

// 3.  Now we must hail all of the kings. Give a true hail only to the king on
//     the Iron Throne (where ironThrone is true), but not the others; instead we
//     must declaim them.
console.log("Number 3:");

function equalizer() {
  kings.forEach(function(poopers) {
    if (!poopers.ironThrone) {
      declaim(poopers);
    } else {
      hailTo(poopers);
    }
  })
}

equalizer();

// 4.  Write a function expression named `kneel` that prints:
//     "The [king/pretender] [name] of house [house] must kneel!"
console.log("Number 4:");



var kneel = function(poop) {
  if (!poop.ironThrone) {
    console.log("The pretender " + poop.name + " of house " + poop.house + " must kneel!");
  } else {
    console.log("The king " + poop.name + " of house " + poop.house + " must kneel!")
  }
}






// 5.  Finally, the struggle begins: Loop over the list of kings, either hailing
//     or declaiming them as above (depending if they are on the Iron Throne);
//     at the end of each loop, remove one king at random and print the line
//     from #4 (that they must *kneel*), and then loop over the list again. Do
//     this until there is only one king left. If at any time the king on the
//     Iron Throne is removed, ensure that the next in line (the first king in
//     the list) is now placed upon it (their ironThrone property is set to
//     true).
console.log("Number 5:");



/* STEP 1: "PLAIN-ENGLISH" PSEUDO-CODE. Explain what must happen. */


/* STEP 2: WRITE THE CODE THAT IS INSIDE THE LOOPS as functions. */

function everybodyButOneDies() {
  while (kings.length > 1) {
    equalizer();
    var frickindie = Math.floor(Math.random() * (kings.length));
    console.log(frickindie);
    kneel(kings[frickindie])
    kings.splice(frickindie, 1);
    if (frickindie === 0) {
      kings[0].ironThrone = true;
    }
  };
  hailTo(kings[0]);
}

everybodyButOneDies();

/* STEP 3: INCORPORATE THE LOOPS WITH THE CODE. */
