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
    return `Yeah, I just got a promotion in ${this.occupation}. Time for people
to start respecting ${this.name}!`;
  }
};

var lenny = new Human("Lenny", "Construction");

console.log(lenny.name);
