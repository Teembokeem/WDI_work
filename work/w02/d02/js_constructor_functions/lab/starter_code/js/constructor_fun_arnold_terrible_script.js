//  _____     _        _ _         ____                _ _   _   _
// |_   _|__ | |_ __ _| | |_   _  |  _ \ ___  ___ __ _| | | | |_| |__   ___
//   | |/ _ \| __/ _` | | | | | | | |_) / _ \/ __/ _` | | | | __| '_ \ / _ \
//   | | (_) | || (_| | | | |_| | |  _ <  __/ (_| (_| | | | | |_| | | |  __/
//   |_|\___/ \__\__,_|_|_|\__, | |_| \_\___|\___\__,_|_|_|  \__|_| |_|\___|
//                         |___/
//  _____      _                    ____       ____
// |  ___|   _| |_ _   _ _ __ ___  |___ \ _   / ___|___  _ __   __ _ _ __
// | |_ | | | | __| | | | '__/ _ \   __) (_) | |   / _ \| '_ \ / _` | '_ \
// |  _|| |_| | |_| |_| | | |  __/  / __/ _  | |__| (_) | | | | (_| | | | |
// |_|   \__,_|\__|\__,_|_|  \___| |_____(_)  \____\___/|_| |_|\__,_|_| |_|
//                  _   ____       _           _                  _ _   _
//   __ _ _ __   __| | |  _ \ ___ | |__   ___ | |_ ___  __      _(_) |_| |__
//  / _` | '_ \ / _` | | |_) / _ \| '_ \ / _ \| __/ __| \ \ /\ / / | __| '_ \
// | (_| | | | | (_| | |  _ < (_) | |_) | (_) | |_\__ \  \ V  V /| | |_| | | |
//  \__,_|_| |_|\__,_| |_| \_\___/|_.__/ \___/ \__|___/   \_/\_/ |_|\__|_| |_|
//  ____        _
// | __ )  __ _| |_ _ __ ___   __ _ _ __
// |  _ \ / _` | __| '_ ` _ \ / _` | '_ \
// | |_) | (_| | |_| | | | | | (_| | | | |
// |____/ \__,_|\__|_| |_| |_|\__,_|_| |_|

// by Arnold Schwarzenegger

/* ACT ONE */

/*  One day, a man entered the world that would change the world and everything,
    but especially the world, forever.

    His name was Arnold Schwarzenegger.  */

console.log("connected");

var arnold = {
  firstName: "Arnold",
  lastName:  "Schwarzenegger",
  oneLiners: [
               "You should not drink and bake."
              ],
  health:    10000,
  scream:    "You son of a...",
  puny:      false,
  friends:   [
              "Carl Weathers"
             ],
  punch:     function(enemy) {
               enemy.health -= 50;
               if (enemy.health < 0) return enemy.scream;
  }
}

/* He was the son of Gustav and Aurelia Schwarzenegger. */

	// Create a Schwarzenegger constructor function then create Arnold's parents.

	// Include a health key
	// Include a gender key
	// Include a name key

var Schwarzenegger = function(health, gender, name) {
  this.health = health;
  this.gender = gender;
  this.name = name;
}

var mama = new Schwarzenegger(52, "female", "Mama");
var papa = new Schwarzenegger(57, "male", "Dad");

/* Arnold was a special boy from day one, but he experienced tragedy early on. */

var batman = {
	name: "Bruce Wayne",
	revenge: function(enemies) {
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].health = 0;
    }
	}
}

	// Use the batman object's method revenge to kill both parents (pass them in
  // as an array - e.g. [mom, dad]).

var victims = [mama, papa];

batman.revenge(victims);

/* After that day, at a mere age of 7, Arnold swore revenge. */



	// Add an age key to arnold and set the value to 7
	// Add a swearRevenge key to arnold and set it to the batman variable.

arnold.age = 7;
arnold.swearRevenge = batman;

/* Arnold then moved to the jungle to train for his future fight. He learned much
and grew strong chopping down the vines in the jungle.

With the sword in his hand he decided to change his name to Conan. He knew his future
woudl be as a warrior. */

	// Change arnold's firstName value to "Conan"
	// Push the string "Stick around!" into the arnold.oneLiners array!

arnold.machete = function(enemy) {
  enemy.health -= 500;
  if (enemy.health < 0) {
    console.log(this.oneLiners[1]);
    return enemy.scream;
  }
}

arnold.firstName = "Conan";
arnold.oneLiners.push("Stick Around!");


/* Conan moved on from the jungle, and met a young, brilliant scientist named
Dr. Larry Arbogast */

	// Create a larry object
	// Add a key doctor and set it to true
	// Add a key health and set it to 30
	// Add a key name and set it to "Dr. Larry Arbogast"

	// Push larry's name into Arnold's friends array

var larry = {
  doctor: true,
  health: 30,
  name: "Dr. Larry Arbogast",
};

arnold.friends.push(larry);

/* They became friends - best friends. That is until batman killed him too!*/


	// Use the revenge method again and kill larry. Remember, pass larry into the
  // method as an array (e.g. [larry]).

batman.revenge([larry]);

/* Conan realized he would never be happy unless he went after batman */


/* ACT 2 */

/* No one knew why Batman hated Conan so much. But Batman had plans to erase
Conan from the planet forever. He was building an army. */

	// Build a henchbat (henchmen, but for batman) constructor function
	// Have a health key
	// Have a boss key set to batman
	// Have a scream key
	// Have a function that damages an enemy signature called shoot
	// Have an alarm function that calls out when an intruder is present

	// Create 3 henchmen

var henchbat = function() {
  this.health = 20;
  this.boss = batman;
  this.scream = "nuuuuuuu..."
  this.shoot = function(enemy) {
    enemy.health -= 100;
    console.log("NYEH!");
  }
  this.alarm = function() {
    console.log("The ENEMY HAS BREACHED THE DINGUS is here!!!!");
  }
}

var henchbat1 = new henchbat();
var henchbat2 = new henchbat();
var henchbat3 = new henchbat();

/* Bruce Wayne knew these henchmen would only slow Conan down - he had another
plan up his sleeve. */

/* Conan came to Gotham, the supposed streets of Batman. He was determined to
defeat the evil Batman. He went to the nearest gun shop and bought a shotgun.*/

	// Push the string "Hasta la Vista... baby." into arnold.oneLiners

	// Create a shotgun method on the arnold object
	// It should take three enemies and reduces their health by 100.
	// If their health goes below 1, make them scream!
	// Log out Hasta La Vista from Arnold's oneLiners array to the console.

arnold.oneLiners.push("Hasta la Vista... baby.");

arnold.shotgun = function(enemy1, enemy2, enemy3) {
  var enemies = [enemy1, enemy2, enemy3];
  for (i = 0; i < enemies.length; i++) {
    enemies[i].health -= 100;
    if (enemies[i].health < 1) {
      console.log(enemies[i].scream);
    }
  }
  console.log(arnold.oneLiners[2]);
};

/* On one of Batman's nightly patrols, he sees Conan roaming his streets with a
shotgun! Batman sends out three henchmen to take out Conan. */

	// Have a gunfight in the streets of gotham!
	// Make sure Conan wins!

henchbat1.shoot(arnold);
henchbat2.shoot(arnold);
henchbat3.shoot(arnold);
arnold.shotgun(henchbat1, henchbat2, henchbat3);

/* Conan was bloodied and bruised, but he was ready for more. Batman looked down
on him from a steeple. He called out

"Hey Arnold! You won't make it out of these streets alive."

"I'm Conan now! But I've done nothing to you! Why all de death, Batman?" replied
Arnold.

"It's not what you've done - it's what you did do in the future."

Conan was confused. How could he have done something in the future?

He realized, if he was going to make it out of this alive, he needed bigger
weapons. */

/* ACT 3 */

/* Conan bought a ton of dynamite for his next encounter with the Batman. */


	// Push "Here's my ticket" into the arnold.oneLiners array

arnold.oneLiners.push("Here's my ticket");

arnold.dynamite = function(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7) {
  enemy1.health -= 300;
  enemy2.health -= 300;
  enemy3.health -= 300;
  enemy4.health -= 300;
  enemy5.health -= 300;
  enemy6.health -= 300;
  enemy7.health -= 300;
  if (enemy1.health < 0) return enemy1.scream;
  if (enemy2.health < 0) return enemy2.scream;
  if (enemy3.health < 0) return enemy3.scream;
  if (enemy4.health < 0) return enemy4.scream;
  if (enemy5.health < 0) return enemy5.scream;
  if (enemy6.health < 0) return enemy6.scream;
  if (enemy7.health < 0) return enemy7.scream;
  console.log(arnold.oneLiners[3]);
}

/* But batman was ready too. He was creating terminators, actual mechanical clones
 of Conan to defeat his nemesis. */

	// Create a terminator constructor function
	// Give them 5 descriptive keys
	// Make sure one is a health key and another is a scream key

	// Create 7 terminators

var Terminator = function(name, defense, build, health, attack, power, oneLiner, scream) {
  this.scream = scream;
  this.defense = defense;
  this.build = build;
  this.health = health;
  this.attack = function(enemy) {
    enemy.health -= power;
    console.log(oneLiner);
    if (enemy.health < 1) return console.log(enemy.name + " has fainted cause he was weakshit.");
  }
};

var r2D2 = new Terminator("R2D2", 20, "stuff from tatooine", 500, "BEEP BEEP BOO BOP", 2000, "WOOOOO BLOP", "blargh");
var tI89 = new Terminator("TI-89", 5, "your high school project", 500, "calculus", 2000, "DERIVATE OF 0/0", "blargh");
var doomsday = new Terminator("DoomsDay Device", 1000, "Impossible Alloys", 500, "YOUR BASE ARE BELONG TO US", 5999, "YOUR BASE ARE BELONG TO US", "blargh");



/* Conan received a mysterious letter in the mail from a CW that showed a map
to the Batcave.  With dynamite in hand, Conan felt ready to take on the Batman.

However, just to be safe, he decided to have a cell phone where he could call his
friends. */

	// Add cellphone key to the arnold object and set it to true.

	// Create a constructor function for Conan's friends.
	// Make 5 distinct keys
	// Ensure they have a function that affects an enemy
	// Make sure they have a scream and a health key.
	// Make sure each reference the arnold object as a bestFriend property

	// Create 3 friends
	// Make sure one of them is Carl Weathers

arnold.cellphone = true;

var Friends = function(name, health, attack, power, oneLiner) {
  this.name = name;
  this.scream = "omg im dying, cause im generic."
  this.health = health;
  this.bestFriend = arnold;
  this.attack = function(enemy) {
    enemy.health = power - enemy.defense;
    console.log(oneLiner);
    console.log(name + " did " + power + " damage, but " + enemy.defense + " less.")
  }
};

var carlWeathers = new Friends("Carl Weathers", 100, "mmph", 500, "mmph");
var basic1 = new Friends("Basic Friend 1", 100, "mmph", 500, "mmph");
var basic2 = new Friends("Basic Friend 2", 100, "mmph", 500, "mmph");

/* Conan goes to the batcave with his cellphone and dynamite. And an enormous
battle ensues. */


	// Create a fight between Conan and terminators
	// When Conan's health gets low, bring in his friends!

	// Defeat the terminators (bring their health down to 0).

r2D2.attack(arnold);
tI89.attack(arnold);
doomsday.attack(arnold);

console.log(carlWeathers.name + ", " + basic1.name + ", and " + basic2.name + " came to the rescue.....");

carlWeathers.attack(r2D2);
basic1.attack(tI89);
basic2.attack(doomsday);

console.log("The terminators are wtf.");


r2D2.attack(carlWeathers);
tI89.attack(tI89);
doomsday.attack(doomsday);

console.log(carlWeathers.name + "got raped and had ")
console.log("Conan only had " + arnold.health + " health...but he gets up and finishes it. cause hes boss.");

arnold.shotgun(r2D2, tI89, doomsday);

/* Conan has batman cornered. He's hurt, and isn't going anywhere.

"Why did you kill my parents? Why are you so set on fighting me?" bellowed Arnold.

"You ruined me Conan Arnold - you destroyed the idea of Batman. You will turn us
into a joke when you play Mr. Freeze!"

Conan was hurt - he had no idea his future would hurt Batman so bad.

In fact, he was so hurt, he decided to ice Batman.
*/

arnold.oneLiners.push("What killed de Dinosaurs? DE ICE AGE!");
arnold.ice = function(enemy) {
  enemy.health = 0;
  console.log(arnold.oneLiners[4]);
}

arnold.ice(batman);

	// push "What killed de Dinosaurs? DE ICE AGE!" to arnold.oneLiners
	// Add an ice method to arnold that brings an enemy down to zero and
	// logs out arnold.oneLiners[4]

/* Then Carl Weathers high fived Arnold and the world was saved from Batman.

	http://media.giphy.com/media/pHb82xtBPfqEg/giphy.gif

*/

//  _____ _            _____           _               ___
// |_   _| |__   ___  | ____|_ __   __| |             |__ \
//   | | | '_ \ / _ \ |  _| | '_ \ / _` |               / /
//   | | | | | |  __/ | |___| | | | (_| |  _   _   _   |_|
//   |_| |_| |_|\___| |_____|_| |_|\__,_| (_) (_) (_)  (_)

