console.log('linked!')

var Agent = function(name) {
  this.name = name;
};

Agent.prototype.condescend = function(human) {
  console.log(`${human.name}, you pitiful little creature...`);
}


var smith = new Agent("Agent Smith");
var dude = { name: "Mike" };
console.log(smith.condescend(dude));
