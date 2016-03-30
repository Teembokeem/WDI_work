// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// Create a setter called `free`. It should take the argument `identity`. If the
// `identity` argument is equal to "nothing" or "none", then `this.name` and
// `this.occupation` should be set to "nothing"/"none". Otherwise, it should
// throw an error.

// Create a greeter that returns "I'm still living!" if `this.life` is greater
// than 0.

// Create a static method that takes an instance of the Android class and
// returns: "`We will tell the android:
// You are ${android.name}.
// You are born to be in ${android.occupation}.
// ...and ${android.name} will listen!`"


class Android {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.life = 4;
  }

  set free(identity) {
    if (identity == "nothing" || identity == "none") {
      this.name       = identity;
      this.occupation = identity;
    } else {
      throw new Error(`I do not believe I am ${identity}!`);
    }
  }

  get alive() {
    if (this.life > 0) return "I'm still living!";
  }

  static memories(android) {
    return `We will tell the android:
You are ${android.name}.
You are born to be in ${android.occupation}.
...and ${android.name} will listen!`
  }
}

var len = new Android("Lenny", "Construction");

console.log(Android.memories(len), "\n", len.alive);
