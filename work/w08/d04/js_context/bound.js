console.log("BOUND!")

// |||||||||||||||||||||||||||
// |||||| MORE EXAMPLES ||||||
// |||||||||||||||||||||||||||

// |||||||||||||||||||||||
// |||||||| SCOPE ||||||||
// |||||||||||||||||||||||

var tiredSoul = "Adam Ewing";
var futureSelf = "Zachry";
var sensedConnection;

function connections() {
  var tiredSoul = "Luisa Rey";
  var sensedConnection = "Frobisher";

  console.log("Connections", tiredSoul, sensedConnection, futureSelf);
}

function nestedConnections() {
  var sensedConnection = "Sonmi-351";

  connections();
  console.log("Nested Connections", tiredSoul, sensedConnection, futureSelf);
}

nestedConnections();

console.log("OUTSIDE Connections", tiredSoul, sensedConnection, futureSelf);
// connections();

// |||||||||||||||||||||||
// ||||||| CONTEXT |||||||
// |||||||||||||||||||||||

// |||||||||||||||||||
// this Wandering Soul
// |||||||||||||||||||

var frobisher = {
  birthmark: "comet",
  checkBirthmark: function() {
    console.log(this.birthmark);
  }
}

//independent function


function checkBmark() {
  return this.birthmark;
}

frobisher.dermCheck = checkBmark;

console.log(frobisher.dermCheck(), frobisher.checkBirthmark())

frobisher.derm = {
  dermCheck: checkBmark,
  birthmark: "comet with a tail"
};

console.log(frobisher.derm.dermCheck());




this.ordeal = "comet";
