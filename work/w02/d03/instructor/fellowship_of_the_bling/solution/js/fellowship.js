console.log("Fellowship loaded.");

// Here are some global variables to make it easier
// to access the DOM nodes from the console, *for testing*.
//
// In the solution, we will not dereference these (re-use)
// them from the global scope -- again, they are there for
// testing!
var $bodyEl = $('body'),
    $frodoLi,
    $gollumDiv,
    $hobbitsUl,
    $mordorArticle,
    $ringDiv,
    $rivendellArticle,
    $samLi,
    $shireArticle,
    $soulmatesUl;

var makeMiddleEarth = function () {
  var $landH1,
      $landArticle,
      $middleEarthSection;

  $middleEarthSection = $('<section>', {id: 'middle-earth'});

  for (var i = 0, len = lands.length; i < len; i++) {
    $landArticle = $('<article>');
    $landH1      = $('<h1>', {text: lands[i]});

    $landArticle.append($landH1);
    $middleEarthSection.append($landArticle);
  }

  $bodyEl = $('body');
  $bodyEl.append($middleEarthSection);

  setTimeout(makeHobbits, 2000);
}

var makeHobbits = function () {
  var $hobbitLi;

  // cache global refs to the DOM
  $shireArticle = $('article').eq(0);
  $hobbitsUl    = $('<ul>', {id: 'hobbits'});

  for (var i = 0, len = hobbits.length; i < len; i++) {
    $hobbitLi = $('<li>', {class: 'hobbit', text: hobbits[i]});
    $hobbitsUl.append($hobbitLi);
  }

  $shireArticle.append($hobbitsUl);

  setTimeout(keepItSecretKeepItSafe, 2000);
}

var keepItSecretKeepItSafe = function () {
  $frodoLi = $('li').eq(0);
  $ringDiv = $('<div>', {
    id:    'the-ring',
    class: 'magic-imbued-jewelry'
  });

  $ringDiv.on('click', nazgulScreech);

  $frodoLi.append($ringDiv);
  setTimeout(makeBuddies, 2000);
}

var makeBuddies = function () {
  var $aside,
      $buddyLi,
      $buddiesUl;

  $rivendellArticle = $('article').eq(1);

  $aside     = $('<aside>');
  $buddiesUl = $('<ul>');

  for (var i = 0, len = buddies.length; i < len; i++) {
    $buddyLi = $('<li>', {text: buddies[i]});
    $buddiesUl.append($buddyLi);
  }

  $aside.append($buddiesUl);
  $rivendellArticle.append($aside);

  setTimeout(beautifulStranger, 2000);
}

var beautifulStranger = function () {
  var $strider = $('li').eq(-3);

  // this is a common format for "chaining" methods
  $strider
    .text('Aragorn')
    .css("color", "green");

  setTimeout(leaveTheShire, 2000);
}

var leaveTheShire = function () {
  $hobbitsUl = $('#hobbits');

  $rivendellArticle
    .find('aside')
    .prepend($hobbitsUl);

  setTimeout(forgeTheFellowShip, 2000);
}

var forgeTheFellowShip = function () {
  var $fellowshipDiv,
      $fellowsUl,
      $allHobbitsAndBuddiesLis,
      $currentLi,
      message;

  $fellowshipDiv = $('<div>', {id: 'the-fellowship'});
  $fellowsUl     = $('<ul>');
  $fellowshipDiv.append($fellowsUl);

  $rivendellArticle = $('article').eq(1);
  $rivendellArticle.append($fellowshipDiv);

  $allHobbitsAndBuddiesLis = $('li');
  for (var i = 0, len = $allHobbitsAndBuddiesLis.length; i < len; i++) {
    $currentLi = $allHobbitsAndBuddiesLis.eq(i);
    $fellowsUl.append($currentLi);

    message = $currentLi.text() + ' has joined the Fellowship!';

    if ($currentLi.text() === 'Gimli') message = 'Gimli: AND MY AXE!';
    alert(message);
  }

  setTimeout(theBalrog, 2000);
}

var theBalrog = function () {
  var $gandalfLi = $('li').eq(4);

  $gandalfLi
    .text('Gandalf the White')
    .addClass('the-white')
    .css({
      color:  'white',
      border: '3px solid white',
      borderRadius: '10px'
    });


  setTimeout(hornOfGondor, 2000);
}

var hornOfGondor = function () {
  var boromirLi;

  alert('The Horn of Gondor has blown!');

  $boromirLi = $('li').eq(-2);
  $boromirLi.css({
    textDecoration: 'line-through',
    opacity:        0.3,
    color:          'black'
  });

  setTimeout(itsDangerousToGoAlone, 2000);
}

var itsDangerousToGoAlone = function (){
  var $hobbitLis = $('.hobbit'),
      $articles  = $('article');

  $frodoLi       = $hobbitLis.first();
  $samLi         = $frodoLi.next();
  $mordorArticle = $articles.last();

  $soulmatesUl = $('<ul>', {class: 'soulmates'});

  $soulmatesUl.append($frodoLi);
  $soulmatesUl.append($samLi);
  $mordorArticle.append($soulmatesUl);

  $mountDoomDiv = $('<div>', {id: 'mount-doom'});
  $mordorArticle.append($mountDoomDiv);

  setTimeout(weWantsIt, 2000);
}

var weWantsIt = function () {
  $gollumDiv = $('<div>', {id: 'gollum'});

  $ringDiv      = $('#the-ring');
  $mountDoomDiv = $('#mount-doom');

  $gollumDiv.append($ringDiv);
  $mountDoomDiv.append($gollumDiv);

  setTimeout(thereAndBackAgain, 2000);
}

var thereAndBackAgain = function () {
  var $hobbitLis = $('.hobbit'),
      $articles  = $('article');

  $gollumDiv = $('#gollum');

  $shireArticle  = $articles.first();
  $mordorArticle = $articles.last();

  $gollumDiv.remove();
  $mordorArticle.addClass('collapse');

  $('<ul>')
    .append($hobbitLis)
    .appendTo($shireArticle)
}

$(document).ready(function() {
  document.querySelector("#hobbit-theme").play();
  setTimeout(makeMiddleEarth, 2000);
});

