var mongoose = require("mongoose");

var Owner = require("./models/Owner");
var Puppy = require("./models/Puppy");

mongoose.connect("mongodb://localhost/puppies_app");

var ownerList = [
  { first: "Jane",  last: "Johnson", city: "Los Angeles, CA" },
  { first: "Bob",   last: "Johnson", city: "Los Angeles, CA" },
  { first: "Saeed", last: "Mangal",  city: "Santa Monica, CA" },
  { first: "Jin",   last: "Yu",      city: "Irvine, CA" },
  { first: "Magda", last: "Arroyo",  city: "Pomona, CA" }
];

// remove the puppies
Puppy.remove({}, afterPuppyRemove);

function afterPuppyRemove() {
  // next, remove the owners
  Owner.remove({}, afterOwnerRemove);
}

function afterOwnerRemove(err) {
  // next, create some owners
  if (err) console.log(err);
  console.log("Creating owners...");

  Owner.create(ownerList, afterOwnerCreate);
}

function afterOwnerCreate(err, owners) {
  // next, create some puppies
  if (err) console.log(err);
  console.log(`${owners.length} owners created.`);

  console.log("Creating puppies...");
  var puppyList = [
    { name: "Bilbo",         breed: "Pug",        age: 3,  owner: owners[0], ownerName: owners[0].name },
    { name: "Jackie Chow",   breed: "Chow",       age: 8,  owner: owners[2], ownerName: owners[2].name },
    { name: "Red",           breed: "Bloodhound", age: 15, owner: owners[3], ownerName: owners[3].name },
    { name: "Annabelle",     breed: "Dachsund",   age: 4,  owner: owners[4], ownerName: owners[4].name },
    { name: "Reggie",        breed: "Beagle mix", age: 2,  owner: owners[1], ownerName: owners[1].name },
    { name: "Oscar",         breed: "Frenchie",   age: 3,  owner: owners[1], ownerName: owners[1].name },
    { name: "General Grant", breed: "Chihuahua",  age: 1,  owner: owners[0], ownerName: owners[0].name },
    { name: "Tuco",          breed: "Poodle",     age: 1,  owner: owners[3], ownerName: owners[3].name }
  ];
  Puppy.create(puppyList, afterPuppyCreate);
}

function afterPuppyCreate(err, puppies) {
  // next, close the connection
  if (err) console.log(err);
  console.log(`${puppies.length} puppies created.`);

  mongoose.connection.close();
}
