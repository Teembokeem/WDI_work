console.log("main.js linked");

var birds = [
  "starling",
  "sparrow",
  "jay",
  "dove"
];

// 1.
var houseEl = document.createElement("div");
houseEl.classList.add("dwelling");

// 2.
document.body.appendChild(houseEl);

//--

// 3.
var topLevelHeaderEl = document.createElement("h1");
var spanEl = document.createElement("span");

// 4.
spanEl.textContent = "Seeming Wasteland";
spanEl.classList.add("shadowed");

// 5.
topLevelHeaderEl.appendChild(spanEl);

// 6.
document.body.appendChild(topLevelHeaderEl);

//--

// 7.
var waldoEl = document.createElement("div");

// 8.
waldoEl.id = "waldo";

// 9.
document.body.appendChild(waldoEl);

//--

// 10.
var birdListEl = document.createElement("ul");

// 11.

