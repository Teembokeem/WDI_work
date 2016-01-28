console.log("Fellowship loaded.");

var $middleEarth,
    $lands;
//MAKE MIDDLE EARTH

var makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".
  $middleEarth = $('<section id="middle-earth">');

  // 2.  Create an article tag for each land in the lands array.
  $lands = [];

  for (var i = 0; i < lands.length; i++) {
    $("<article>").addClass('land')
                  .append( $("<h1>").text(lands[i]) )
                  .appendTo($middleEarth)
  }
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag
  //        include an h1 tag
  //          with the name of the land as content.
  // 5.  Append each article.land to section#middle-earth.

  // 6.  Append section#middle-earth to the document body.
  $("body").append($middleEarth);
}

// test this in the console (watch the HTML, though) by running:
makeMiddleEarth();

//MAKE HOBBITS

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
  // 2.  Create li tags for each Hobbit in the hobbits array.
  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.
  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).
}

// test this in the console (watch the HTML, though) by running:
makeHobbits();


//KEEP IT SECRET KEEP IT SAFE

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
}

// test this in the console (watch the HTML, though) by running:
keepItSecretKeepItSafe();


//MAKE BUDDIES

var makeBuddies = function() {
  // 1.  Create an aside tag.
  // 2.  Create a ul tag with an id of "buddies" and append it to
  //     the aside tag.
  // 3.  Create li tags for each buddy in the buddies array in
  //     data.js.
  // 4   Give each li tag a class of "buddy" and append them to
  //     "ul#buddies".
  // 5.  Insert the aside tag as a child element of the secion.land
  //     representing "Rivendell."
}

// test this in the console (watch the HTML, though) by running:
makeBuddies();

//BEAUTIFUL STRANGER

var beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
  // 2.  Change the "Strider" text to "Aragorn" and make its
  //     color green.
}

// test this in the console (watch the HTML, though) by running:
beautifulStranger();


//LEAVE THE SHIRE

var leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
}

// test this in the console (watch the HTML, though) by running:
leaveTheShire();

