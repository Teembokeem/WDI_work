/* 
 * Define variables globally for access and debugging. 
 */

var playerTurnEl;
var boardEl;
var squareEls;
var timer = 0;
var timerEl;
var timerInterval;
var buttonEl;

/* 
 * Define functions (don't run them, just define them!) 
 */

// a function to add classes/effects for square hovers
var hoverAction = function(event) {
  var squareEl = event.target;
  // console.log("over square: " + squareEl.id); // useful logging
  if (squareEl.textContent === "") {
    squareEl.classList.add("hover","good",nextTurn.toLowerCase());
  } else {
    squareEl.classList.add("hover","bad");
  }
  return true;
};

// a function to remove classes/effects for square hovers
var unHoverAction = function(event) {
  var squareEl = event.target;
  // console.log("left square: " + squareEl.id); // useful logging
  squareEl.className = "square";
  return true;
};

// a function to increment the timer! 
// "tick" is actually a common name for it!
var tick = function() {
  timer++; // increment the timer by one

  // check if 10 seconds
  if (timer === 10) {
    // warning!
    timerEl.classList.add("hover","bad");
  } else
  // check if > 15 seconds
  if (timer === 16) {
    // remove warning class and reset string
    timerEl.className = "";
    timerEl.textContent = "00:00";
    // alert...
    alert("Player " + nextTurn + " took too long to move!");
    // grab the DOM element with a random, unused id
    var emptyEl = document.getElementById(randomEmptySquareCoords().join(","));
    // trigger a click event on that element!
    emptyEl.click();

    return false;
  }

  // update the timer string
  var timeString = "00:";
  if (timer >= 10) {
    timeString += timer;
  } else {
    timeString += "0" + timer;  
  }
  timerEl.textContent = timeString;

  return timer;
}

// a function to start or reset the timer!
var resetTimer = function() {
  // only allow a timer reset during game play
  if (gameIsBeingPlayed) {
    // end any ongoing timer
    clearInterval(timerInterval);
    // create a new timer
    timerInterval = setInterval(tick, 1000);
    timer = -1; // this means that the first tick is 00:00 instead of 00:01
  }
}
var startTimer = resetTimer; // it's the same logic, and we can call it by 
                             // either name!

// a function to start a new game in the DOM!
var startDOMGame = function() {
  beginGame(); // model
  startTimer();

  // hide the button, show the next turn string
  buttonEl.style.visibility = "hidden";
  playerTurnEl.textContent = nextPlayerString();
  return true;
}

// a function for ending the game in the DOM!
var endDOMGame = function() {
  // clear the board's elements
  for (var i = 0; i < squareEls.length; i++) {
    squareEls[i].textContent = "";
  }

  // update the model
  gameIsBeingPlayed = false;
  clearTheBoard(); 

  // clear the turn text, timer and timer text/style
  playerTurnEl.textContent = "";
  clearInterval(timerInterval);
  timerEl.textContent = "";
  timerEl.className = "";

  // return the begin game button!
  buttonEl.style.visibility = "visible";

  return true;
};

// and finally, the function that runs when you click the board!
var clickTheBoard = function(event) {
  // log useful debugging info to the user
  console.log("clicked: ", event, event.target.id);

  var squareEl          = event.target;
  var squareCoordinates = squareEl.id.split(",");
  var squareText        = nextTurn;

  // 1. remove the hover classes (see below)
  unHoverAction(event);

  // 2. reset the timer
  resetTimer();
  timerEl.className = "";

  // 3. move returns true or false, based on if the move was legal or not!
  if (move(squareCoordinates[0],squareCoordinates[1])) {
    // update the DOM!
    squareEl.textContent     = squareText;
    playerTurnEl.textContent = nextPlayerString();
  } else {
    alert("Bad move!");
  }

  // 4. figure out if the game is in an end state (won or tied)
  var winner = gameIsWon();
  if (gameIsWon()) {
    alert("Player " + winner + " has won!");
    endDOMGame();
  } else
  if (gameIsTied()) {
    alert("The game ended in a tie!");
    endDOMGame();
  }

  return true;
};

/* 
 * Remember: all DOM interaction needs to wait to execute until 
 * after the DOM is loaded!
 */

document.addEventListener("DOMContentLoaded", function() {
  // grab references to important DOM elements
  playerTurnEl = document.getElementsByTagName("p")[0];
  boardEl      = document.getElementById("board");
  squareEls    = document.getElementsByClassName("square"); // returns an array
  timerEl      = document.getElementsByTagName("p")[1];
  buttonEl     = document.getElementsByTagName("button")[0];

  // A. add the begin game event to the button!
  buttonEl.addEventListener("click", startDOMGame);
  
  // B. add the click event!
  boardEl.addEventListener("click", clickTheBoard);

  // C. add hover/unhover events to each square!
  for (var i = 0; i < squareEls.length; i++) {
    squareEls[i].addEventListener("mouseover", hoverAction);
    squareEls[i].addEventListener("mouseout", unHoverAction);
  }

  return true;
});
