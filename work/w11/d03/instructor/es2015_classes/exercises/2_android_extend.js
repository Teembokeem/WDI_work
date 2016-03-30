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
// and a method that speaks to the Andriod struggle, respectively. Add a method
// freakOut that returns a string that represents the Android's anger with his
// or her lifespan.

class Android {

}
