// |||||||||||||||||||||||||||
// |||||| MORE EXAMPLES ||||||
// |||||||||||||||||||||||||||

// |||||||||||||||||||||||
// |||||||| SCOPE ||||||||
// |||||||||||||||||||||||

for(var i = 0; i < 10; i++) {
  document.addEventListener('DOMContentLoaded', function() {
    console.log(i); // returns "10" 10 times in the console bc only available
  });               // after finshed loading - scope issue
}

var tiredSoul = "Adam Ewing";
var futureSelf = "Zachry";

(function() {
  var tiredSoul = "Luisa Rey";
  var sensedConnection = "Robert Frobisher";

  console.log(tiredSoul, sensedConnection, futureSelf);
})();

// |||||||||||||||||||||||
// ||||||| CONTEXT |||||||
// |||||||||||||||||||||||

// |||||||||||||||||||
// this Wandering Soul
// |||||||||||||||||||

// this within a method on an object
var frobisher = {
  birthmark: "comet",
  checkBirthmark: function() {
    return this.birthmark;
  }
};

console.log(frobisher.checkBirthmark()); // "comet"

// independent function
var frobisher = {birthmark: "comet"};

function checkBmark() {
  return this.birthmark;
}

frobisher.dermCheck = checkBmark;

console.log(frobisher.dermCheck()); // logs "comet"

// now with object references!

frobisher.derm = {dermCheck: checkBmark, birthmark: "comet with tail"};
console.log(frobisher.derm.dermCheck()); // logs "comet with tail"


// As a constructor (with the new keyword)

function Cavendish() {
  this.ordeal = "ghastly";
}

var sonmi = new Cavendish();
console.log(sonmi.ordeal); // logs "ghastly"


function Timothy(){
  this.ordeal = "ghastly";
  return {ordeal: "truly ghastly"};
}

var sonmi = new Timothy();
console.log(sonmi.ordeal); // logs "truly ghastly"


function Cavendish() {
  this.ordeal = "ghastly";
  return this;
}

var sonmi = new Cavendish();
console.log(sonmi.ordeal); // logs "ghastly"

