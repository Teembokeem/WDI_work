console.log("afterhours.js linked!");

////////////////////////////////////////////////
// Part 1: Linking
////////////////////////////////////////////////

// Link this JavaScript file to an HTML document.
// You'll know the file is correctly linked if the console says
// "afterhours.js linked!"

////////////////////////////////////////////////
// Part 2: Working With Data Structures
////////////////////////////////////////////////

var album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
};

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.

var albumLabel = album1.albumDetails.label;


// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

album1.title = "Talking Heads: 77";

var album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
};

var album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: new Date("August 3, 1979"),
    label:    "Sire",
    formats:  ["Cassette"]
  }
};

// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats

album3.albumDetails.formats.push(album2.albumDetails.formats[0]);

// 4. Change the release date of album3 from a string into a Date object

// done already


var album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};

// 5. Add the label "Sire" to album4's details

album4.albumDetails.label = "Sire";

var album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
};

// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"

album5.formats = ["CD", "Cassette", "LP"];

var album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
};

// 7. Make the label "emi" in album6 all uppercase

album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase();

var album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
};

// Convert album7's 'labels' property from the string value "Sire, EMI" into the
// array: ["Sire", "EMI"]

album7.albumDetails.labels = ["Sire", "EMI"];

var album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    label:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
};

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

var num = 0;

if (num%2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Use conditionals to check if a hardcoded number is divisible by 2 or 3 and then console.log that the number is divisible by two or three.

var num = 0;

if (num%2 ===0 || num%3 ===0) {
  console.log("divisible by 2 or 3");
} else {
  console.log("not divisible by 2 or 3");
}

// Use conditionals to check if a hardcoded quantity is 1 or greater than one. If the quantity is one or greater console.log either 1 pet or quantity + " pets" respectively.

var quantity = 0;

if (quantity === 1 || quantity > 1) {
  if (quantity === 1) {
    console.log(quantity + "pet");
  } else if (quantity >1) {
    console.log(quantity + "pets");
  } else {
  console.log("its not 1 or greater");
}

/*There is an event where guests will be sitting in three sections based on their names: "left",
"middle", and "right". If they have a premium ticket they can sit in first 3 rows in their section,
therwise they can take any seat behind row 3. Using hardcoded variables for name and ticketType
print out appropriate seating instructions.
*/
var person1 = {
  name: "B",
  ticketType: "premium"
}

var person2 = {
  name: "N",
  ticketType: "regular"
}

var person3 = {
  name: "V",
  ticketType: "regular"
}

var list = [person1, person2, person3];

for (var i=0; i<list.length; i++) {
  if (list[i].name ==="B") {
    console.log(list[i].name + ", you are sitting in the left section");
  } else if ( list[i].name === "N") {
    console.log(list[i].name + ", you are sitting in the middle section");
  } else if (list[i].name === "V") {
    console.log(list[i].name + ", you are sitting in the right section");
  }
  if (list[i].ticketType === "premium") {
    console.log("Please take a seat in the first 3 rows");
  } else {
    console.log("Please sit after the first three rows. They are VIP");
  }
}


/*// There is an event with ticket prices that are $50, $65, $85 for standard,
premier, and premier plus (for drinks) seating. Seniors, veterans, and students
receive a $10 discount while standard patrons receive no discount. Based on
hardcoded variables for ticketType and discountType, print out a patrons ticketPrice.*/

var munies = {
  discountType: 10,
  ticketType: {
    standard: 50,
    premier: 65,
    premierPlus: 85
  }
}
var ticketPrice = prompt("Standard (type S), Premier (type P), or Premier Plus(comes with open bar) (type PP)?");
var areYouSeniorVeteranStudent = prompt("Are You a Senior, Veteran, or Student? (y/n)");
if (ticketPrice === "S" || "s") {
  ticketPrice = munies.ticketType.standard;
  console.log("Your ticket price comes out to $" + ticketPrice);
} else if (ticketPrice === "p" || "P") {
  console.log("Your ticket price comes out to $" + munies.ticketType.premier);
  ticketPrice = munies.ticketType.premier;
} else if (ticketPrice === "P+" || "p+") {
  console.log("Your ticket price comes out to $" + munies.ticketType.premierPlus);
  ticketPrice = munies.ticketType.premierPlus;
}
if (areYouSeniorVeteranStudent === "y" || "Y") {
  console.log("Your grand total is $" + (ticketPrice - munies.discountType));
} else  if (areYouSeniorVeteranStudent = "n" || "N") {
  console.log("Your grand total is $" + ticketPrice);
}



// 1. print "Talking Heads were a prolific band" to the console IF AND ONLY IF
//    Talking Heads have 6 albums or more. Otherwise, print "Talking heads
//    didn't have much output." Use the array of albums above.

var talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
];

if (talkingHeadsAlbums.length >= 6) {
  console.log("Talking Heads were a prolific band");
} else {
  console.log("Talking heads didn't have much output");
}


/////////////////////////////////////////////////////
// Part 4: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

// 1. Create an object literal called `band`.

{'band'}

// 2. Give it the property `name` and set it to "Talking Heads"

var band = {
  name: "Talking Heads"
}
// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.

band.members = ["David Byrne"];

// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums

band.albums = talkingHeadsAlbums;

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.

band.members.push("Tiny Weymouth", "Chris Franz", "Jerry Harrison");

/////////////////////////////////////////////////////
// Part 5: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album

for (var i=0; i<band.members.length; i++) {
  console.log(band.members[i]);
}


// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!
var album1 = {
  title: "Talking Heads",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
};

var album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
};

var album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: new Date("August 3, 1979"),
    label:    "Sire",
    formats:  ["Cassette"]
  }
};

var album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};

album4.albumDetails.label = "Sire";

var album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire"
  }
};

album5.formats = ["CD", "Cassette", "LP"];

var album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
};

album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase();

var album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
};

album7.albumDetails.labels = ["Sire", "EMI"];

var album8 = {
  title: "Naked",
  albumDetails: {
    released: new Date("March 15, 1988"),
    label:    ["Sire", "EMI"],
    formats:  ["CD", "cassette", "LP"]
  }
};

var talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8
];

var sireTally = 0;
for (var i = 0; i = talkingHeadsAlbums.length; i++) {
  if (talkingHeadsAlbums[i].albumDetails.label = "Sire") {
    sireTally++;
  } else if (talkingHeadsAlbums[i].albumDetails.labels[0] = "Sire") {
    sireTally++;
}
console.log("You have " + sireTally + "albums labeled by Sire");


/////////////////////////////////////////////////////
// Part 6: More Tasks With Arrays and For Loops
/////////////////////////////////////////////////////

var kings = [
  { name: 'Joffrey Baratheon', house: 'Baratheon-Lannister', pretender: "maybe" },
  { name: 'Stannis Baratheon', house: 'Baratheon',           pretender: "maybe" },
  { name: 'Renly Baratheon',   house: 'Baratheon',           pretender: "maybe" },
  { name: 'Balon Greyjoy',     house: 'Greyjoy',             pretender: true },
  { name: 'Robb Stark',        house: 'Stark',               pretender: true }
];

// 1. Create a variable called truePretenders and assign it to an empty array.
//    Then use a for loop to iterate through the 'kings' array, pushing any
//    established pretenders into the waiting truePretenders array.

var truePretenders = [];
for (i = 0; i < kings.length; i++) {
  if (kings[i].pretender = true) {
    truePretenders[i] = kings[i];
  }
}
/////////////////////////////////////////////////////
// Part 7: Basic Functions
/////////////////////////////////////////////////////

  // 1. Define a function 'calculateArea' that takes two arguments, 'height'
  //    and 'width' and returns the area as an integer.
  //
  // Example usage: calculateArea(3, 4) // =>  12

  calculateArea = function(height, width) {
    return height*width;
  }
  calculateArea(2,4);

  // 2. Define a function 'calculateTip' that takes two arguments, 'mealCost'
  //    and 'tip_percentage' and returns the appropriate tip amount as a float.
  //
  // Example usage: calculateTip(20.00, 15) // =>  3.0

  calculateTip = function(mealCost, tip_percentage) {
    var total = mealCost * 0.01 * (tip_percentage);
    return parseFloat(total);
  }
  calculateTip(20, 15);


  // 3. Define a function 'buildFullName' that takes two arguments, 'firstName'
  //    and 'lastName', and returns the full name properly formatted

  //
  // Example usage:
  // buildFullName("Travis", "Vander Hoop") // => "Travis Vander Hoop"


buildFullName = function(firstName, lastName) {
  return firstName + " " + lastName;
}
buildFullName("poop", "mcpooper");


/////////////////////////////////////////////////////
// Part 8: User Validation Functions
/////////////////////////////////////////////////////

// sample data to test the functions outlined below

var marvin = {
  name: "Marvin",
  bornOn: "05/21/1991",
  password: "abc123456",
  passwordConfirmation: "abc123456",
  email: "marvin@pizza.biz"
};

var dave = {
  name: "Dave",
  bornOn: "01/21/2014",
  password: "buffDog",
  passwordConfirmation: "buffDog912",
  email: "dave melby@pizza.biz"
};


// 1. Create a variable called validatePasswordsMatch, and assign it to a
//    function that takes two arguments, `pw` and `pwConf`. Make this function
//    return true if the password and password confirmation match, and false if
//    they don't.

var validatePasswordsMatch = function(pw, pwConf) {
  if (pw === pwConf) {
    return true;
  } else {
    return false;
  }
}
validatePasswordsMatch(marvin.password, marvin.passwordConfirmation);

// 2. Use your function on marvin and dave's password and passwordConfirmation
//    attributes to make sure it works.



// 3. Create a variable called validatePasswordLength, and assign it to a
//    function that takes a single argument, `pw`. Make this function return
//    true if the password length is between 8 and 16 characters, and false
//    otherwise.

var validatePasswordLength = function(pw) {
  if (8 < pw.length && pw.length < 16) {
    return true;
  } else {
    return false;
  }
}
validatePasswordLength(marvin.password);

// 4. Use your function on marvin and dave's respective passwords to make sure
//    it works.

// 5. Create a variable called validateEmail, and assign it to a function that
//    takes a single argument, `email`.

var validateEmail = function(email) {
  var searchValue = email.search("@");
  var searchValue2 = email.search(" ");
  if (searchValue != -1 && searchValue2 === -1) {
    return true;
  } else {
    return false;
  }
}
validateEmail(marvin.email)

//
//    Make this function return true if the email contains an @ symbol and no
//    spaces, and false otherwise

// 6. Use your function on marvin's and dave's email addresses to make sure it
//    works.

// 7. Create a variable called validateAge, and assign it to a function that
//    takes a single argument, `date`. Make this function return true if the
//    user is over 13, and false otherwise.

var validateAge = function(date) {
  var birthYear = new Date(date).getFullYear();
  if (2016 - birthYear > 13) {
    return true;
  } else {
    return false;
  }
}
validateAge(marvin.bornOn);

// 8. Use your function on marvin and dave to make sure it works.

/////////////////////////////////////////////////////
// Part 9: User Validation
/////////////////////////////////////////////////////

// 1. Create a variable called validateUser, and assign it to a function that
//    takes a single argument, `user`. Use the methods you defined above to
//    validate the user's password length and equality, as well as their email
//    and age. If everything checks out, the validateUser function should
//    return true. If anything *doesn't* check out, make the function return
//    false.


var validateUser = function(user) {
  var validatePasswordsMatch = function(pw, pwConf) {
    if (pw === pwConf) {
      return true;
    } else {
      return false;
    }
  }
  var validatePasswordLength = function(pw) {
    if (8 < pw.length && pw.length < 16) {
      return true;
    } else {
      return false;
    }
  }
  var validateEmail = function(email) {
    var searchValue = email.search("@");
    var searchValue2 = email.search(" ");
    if (searchValue != -1 && searchValue2 === -1) {
      return true;
    } else {
      return false;
    }
  }
  var validateAge = function(date) {
    var birthYear = new Date(date).getFullYear();
    if (2016 - birthYear > 13) {
      return true;
    } else {
      return false;
    }
  }
  if (validatePasswordsMatch(user.password, user.passwordConfirmation) && validatePasswordLength(user.password) && validateEmail(user.email) && validateAge(user.bornOn)) {
    return true;
  } else {
    return false;
  }
}
