// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||


var Human = function(name, occupation) {
  this.name         = name;
  this.occupation   = occupation;
  this.health_years = 80;
}

Human.prototype.roboHate = function(thoughts) {
  return "This is what I think about dirty Robots: " + thoughts;
}

Human.prototype.retireSkinJob = function(replicant) {
  return replicant.health_years = 0;
}

Human.prototype.atAParty = function() {
  return "Yeah, I just got a promotion to " + this.occupation + ". Time for \
  people to start respecting " + this.name + "!";
}
