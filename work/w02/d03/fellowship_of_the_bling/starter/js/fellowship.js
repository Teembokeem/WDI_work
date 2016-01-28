console.log("Fellowship loaded.");


var makeMiddleEarth;
var $newSection;
var $newRivendellArticle;
var $newMordorArticle;
var $newShireArticle;
var $newHobbitsUl;
var $newFrodoLi;
var $newSamLi;
var $newMerryLi;
var $newPippinLi;
var keepItSecretKeepItSafe;
var theRingDiv;
var $newAside;
var $newBuddiesUl;
var $newGandalfLi;
var $newLegolasLi;
var $newStriderLi;
var $newBoromirLi;
var $newGimliLi;
var makeBuddies;
var beautifulStranger;
var makeHobbits;
var leaveTheShire;
var forgeTheFellowShip;
var $newFellowshipDiv;
var $newListRivendellUl;
var theBalrog;
/*$(function() {*/



//MAKE MIDDLE EARTH

makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".

  $newSection = $('<section id="middle-earth"></section>');
  // 2.  Create an article tag for each land in the lands array.
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.

  $newShireArticle = $('<article class="land"><h1>The Shire</h1></article>');
  $newRivendellArticle = $('<article class="land"><h1>Rivendell</h1></article>');
      $newMordorArticle = $('<article class="land"><h1>Mordor</h1></article>');
  // 5.  Append each article.land to section#middle-earth.

  $('section').append($newShireArticle);
  $('section').append($newRivendellArticle);
  $('section').append($newMordorArticle);
  // 6.  Append section#middle-earth to the document body.

  $('body').append($newSection);
};
makeMiddleEarth();


//MAKE THE HOBBITS

makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
  // $newHobbitsUl = $('<ul></ul>')
  $newHobbitsUl = $('<ul id="hobbits"></ul>');
  // 2.  Create li tags for each Hobbit in the hobbits array.

  $newFrodoLi = $('<li></li>');
  $newSamLi = $('<li></li>');
  $newMerryLi = $('<li></li>');
  $newPippinLi = $('<li></li>');
  // 3.  Give each li tag a class of "hobbit".

  $newFrodoLi.addClass('hobbit');
  $newSamLi.addClass('hobbit');
  $newMerryLi.addClass('hobbit');
  $newPippinLi.addClass('hobbit');
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.

  $newFrodoLi.text('"Frodo Baggins"')
  $newSamLi.text('"Samwise "Sam" Gamgee"')
  $newMerryLi.text('"Meriadoc "Merry" Brandybuck"')
  $newPippinLi.text('"Peregrin "Pippin" Took')

  // 5.  Append the ul#hobbits to the article.land representing
  //     "The Shire" (the first article tag on the page).

  $($newHobbitsUl).append($newFrodoLi);
  $($newHobbitsUl).append($newSamLi);
  $($newHobbitsUl).append($newMerryLi);
  $($newHobbitsUl).append($newPippinLi);

  ($newShireArticle).append($newHobbitsUl);
};

// test this in the console (watch the HTML, though) by running:
makeHobbits();



//KEEP IT SAFE

keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
  $theRingDiv = $('<div id="the-ring"></div>');
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  $theRingDiv.addClass('magic-imbued-jewelry');
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
  ($newFrodoLi).append($theRingDiv);
};

// test this in the console (watch the HTML, though) by running:
keepItSecretKeepItSafe();



//MAKE BUDDIES

makeBuddies = function() {
  // 1.  Create an aside tag.
  $newAside = $('<aside></aside>');
  // 2.  Create a ul tag with an id of "buddies" and append it to
  //     the aside tag.
  $newBuddiesUl = $('<ul id="buddies"></ul>');
    // 3.  Create li tags for each buddy in the buddies array in
  //     data.js.
  $newGandalfLi = $('<li></li>');
  $newLegolasLi = $('<li></li>');
  $newStriderLi = $('<li></li>');
  $newBoromirLi = $('<li></li>');
  $newGimliLi = $('<li></li>');
  // 4   Give each li tag a class of "buddy" and append them to
  //     "ul#buddies".
  $newGandalfLi.attr('id','buddy');
  ($newBuddiesUl).append($newGandalfLi);
  $newLegolasLi.attr('id', 'buddy');
  ($newBuddiesUl).append($newLegolasLi);
  $newStriderLi.attr('id', 'buddy');
  ($newBuddiesUl).append($newStriderLi);
  $newBoromirLi.attr('id', 'buddy');
  ($newBuddiesUl).append($newBoromirLi);
  $newGimliLi.attr('id', 'buddy');
  ($newBuddiesUl).append($newGimliLi);

  $newGandalfLi.text('"Gandalf the Grey"');
  $newLegolasLi.text('"Legolas"');
  $newStriderLi.text('"Strider"');
  $newBoromirLi.text('"Boromir"');
  $newGimliLi.text('"Gimli"');

  // 5.  Insert the aside tag as a child element of the secion.land
  //     representing "Rivendell."
  ($newAside).append($newBuddiesUl);
  ($newRivendellArticle).append($newAside)

};

// test this in the console (watch the HTML, though) by running:
makeBuddies();



//BEAUTIFUL STRANGER

beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
  $newStriderLi.text("Aragorn").css('color', 'green');
  // 2.  Change the "Strider" text to "Aragorn" and make its
  //     color green.
};

// test this in the console (watch the HTML, though) by running:
beautifulStranger();






//LEAVE THE SHIRE

leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
 /* ($("ul")).appendTo($newRivendellArticle);*/
  ($newRivendellArticle).append($newHobbitsUl);
};

// test this in the console (watch the HTML, though) by running:
leaveTheShire();


//FORGE THE FELLOWSHIP

/*forgeTheFellowShip = function() {
  // 1.  Create a div with an id of "the-fellowship" within the
  //     section.land for "Rivendell". Append a list to it.
  $newFellowshipDiv = $('<div></div>')
  ($newRivendellArticle).append($newFellowshipDiv);
  $newFellowshipDiv.attr('id', 'the-fellowship');
  $newListRivendellUl = $('<ul></ul>')
  ($newFellowshipDiv).append($newListRivendellUl);
  // 2.  Add each hobbit and buddy one at a time to
  //     'div#the-fellowship' list.
  for (i=0; i< $('li').length; i++) {

    $('li:first-child').appendTo('#the-fellowship');
  }
  // 3.  After each character is added make an alert that they
  //     have joined your party.
};

// test this in the console (watch the HTML, though) by running:
forgeTheFellowShip();*/



//THE BALROG
/*
theBalrog = function() {
  // 1.  Select the "li.buddy" for "Gandalf"...
  $newBuddiesUl:eq(0).text("Gandalf the White");
  // 2.  And change its text to "Gandalf the White", and give it
  //     the class "the-white".
  // 3.  Apply style to the element, adding a "3px solid white"
  //     border to it, giving it a border radius of "10px," and
  //     making it's color white.
};

// test this in the console (watch the HTML, though) by running:
theBalrog();*/

var render = function() {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
};

var render2 = function() {
    leaveTheShire();
};
/*
var render3 = function() {
    forgeTheFellowShip();
};*/
/*});*/
