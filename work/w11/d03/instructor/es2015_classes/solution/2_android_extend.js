class Human {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 80;
  }

  roboHate(thoughts) {
    return "This is what I think about dirty Robots: " + thoughts;
  }

  retireSkinJob(replicant) {
    replicant.health = 0;
  }

  atAParty() {
    return `Yeah, I just got a promotion to ${this.occupation}. Time for people
to start respecting ${this.name}!`;
  }
};

// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// Extend the Human class. Overwrite health and roboHate with a new value of 4
// and a method that speaks to the Andriod struggle, respectively.

class Android extends Human {
  constructor(name, occupation) {
    super(name, occupation);
    this.health = 4;
  }

  roboHate(thoughts) {
    return '"' + super.roboHate(thoughts) + '" is what the Humans say. I will \
not believe them.'
  }

}

var lenny = new Android("Lenny", "Construction");

console.log(lenny.roboHate("Buncha Losers!"));
