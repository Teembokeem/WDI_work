console.log("loaded")

var arnold = {
  name:  "Arnold",
  health:     10000,
  oneLiners:  [
               "You should not drink and bake.",
               "Stick around!",
               "You're luggage.",
               "What killed de dinosaurs? DE ICE AGE!",
               "Hasta la vista... baby."
              ]
}

var Hero = function(name, health, gun, gunpower, oneLiner) {
this.name = name;
this.health = health;
this.gun = function(enemy) {
   enemy.health -= gunpower;
   return oneLiner;
};
this.oneLiner = oneLiner;
}

var mewTwo = new Hero("MewTwo", 10000, "Hadouken", 1000, "Stupid, human");

var Terminator = function(name, health, gun, gunpower, oneLiner) {
this.name = name;
this.health = health;
this.gun = function(enemy) {
   enemy.health -= gunpower;
   if (enemy.health > 0) return oneLiner[0];
   else if (enemy.health <= 0) return oneLiner[1];
};
this.oneLiner = oneLiner;
}

var T60000 = new Terminator("TI-89", 1000000, "NUKE", 3000, ["I see you have grit", "target terminated"])

