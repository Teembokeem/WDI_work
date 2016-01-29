console.log("main.js loaded!");

/* MODEL: Data Model ***************************************************
 *
 * While the WaM board is laid out as a grid, like
 * tic-tac-toe or other board games, we aren't going
 * to use the same model (a single array of the
 * values of the board). Why?
 *
 * Well, because I've found through trial-and-error
 * that having a list of board indices makes for easier
 * code. It's something you may have to discover while
 * building your app! Since this is an example, tho,
 * we'll skip right to the cleanest format.
 */

// A globally accessible variable to hold the "interval"
// for the timer. This allows us to play or pause games
// whenever we want. For more, see the "tick" section.
var timer;
var speed = 700;

// The state of the board, stored as a list of
// indices for cells that have yet to be mashed
// and cells that have been mashed, and wher-
// ever the avocado is.
var openCells   = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var closedCells = [];
var avocadoCell;

// The state of the game.
var gameWon    = false;
var gamePaused = true;

// Console helper: print the state!
var printState = function() {
  if (gameWon) {
    console.log("YOU WON!");
  } else {
    console.log(
        "-> Avocado: " + (avocadoCell === undefined ? "-" : avocadoCell),
        " (P: " + gamePaused + ")",
      "\n   Open:    " + "[" + openCells + "]",
      "\n   Closed:  " + "[" + closedCells + "]"
    );
  }
};

/* MODEL: Game Behavior ************************************************
 *
 * This is pretty straightforward: you can mash the
 * avocado. The end.
 *
 * The game itself (tick) advances by moving that
 * avocado. In order to do that, it must find a
 * random open cell.
 */

var pickRandomOpenCell = function() {
  var randomIndex  = Math.floor(Math.random() * openCells.length);
  var splicedValue = openCells.splice(randomIndex, 1);
  return splicedValue[0];
};

var moveTheAvocado = function() {
  // ...
};

var mash = function(cellIndex) {
  // ...
};

/* VIEW: Helper methods ************************************************
 *
 * Here are methods that either render some spec-
 * ific component on the page, or encapsulate some
 * useful, reusable logic.
 */

var openWelcomeScreen = function() {
  // ...

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 3500);
};

var openWinScreen = function() {
  // ...

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 13000);
};

var closeScreen = function() {
  // ...

  songEl.pause();
};

/* VIEW: RENDER ********************************************************
 *
 * The master view renderer, this renders every
 * possible state, except for the intro screen.
 *
 * If you want to animate the images more, this
 * becomes significantly more complex, needing
 * to be aware of its current "state" (ie, what
 * is on the screen when its called) in order to
 * draw the correct transitions.
 */

var render = function() {
  // ...

  // Add the right text to the toggle button.
  toggleButton.textContent = gamePaused ? "Play" : "Pause";
};

/* INTERACTION: User-initiated handlers ********************************
 *
 * Like with turn-based games, tick-based games
 * handle some user interactions! Here is the
 * handler for the one user interaction with the
 * game model: swinging your masher at a cell!
 */

var swing = function(evt) {
  // Find the element the listener is registered to!
  // Different than the target:
  // - http://stackoverflow.com/questions/12077859/difference-between-this-and-event-target
  console.log("(( event.target:        ", evt.target);
  console.log("(( event.currentTarget: ", evt.currentTarget);
  console.log("(( this:                ", this);

  // ...
};

/* INTERACTION: Timer-initiated handlers *******************************
 *
 * Unlike turn-based games, tick-based games
 * advance the game state on a regular interval
 * known as a "tick." Thus, every tick-based
 * game (or timer game) must have a tick
 * function that advances the game state and
 * triggers a re-render.
 */

var tick = function() {
  console.log("* TICK…");

  // ...
};

/* INTERACTION: Other gameplay functions *******************************
 *
 * Every tick-based / timer game needs to
 * have methods that handle the tick, either
 * starting or clearing the given interval.
 *
 * We can also have a start/reset here to
 * reset the state.
 */

var startGame = function() {
  clearInterval(timer);

  console.log("* RESETTING GAME STATE.");
  // ...

  playGame();
};

var playGame = function() {
  gamePaused = false;

  tick(); // Run the first tick right away!
  timer = setInterval(tick, speed);

  console.log("* PLAY GAME!");
  printState(); render();
};

var pauseGame = function() {
  clearInterval(timer);
  gamePaused = true;

  console.log("* PAUSE GAME…");
  printState(); render();
};

var toggleGame = function() {
  if (!gamePaused) {
    pauseGame();
  } else {
    playGame();
  }
}

/* STARTUP *************************************************************
 *
 * Finally, we get to the actions we must perform
 * once the DOM has been loaded! Here we define
 * and "cache" references to elements on the DOM
 * for our View section, attach the interactions
 * (ie, events) to them, and start the game!
 */

// Globally-accesible!
var gameContainerEl,
    welcomeCoverEl,
    replayCoverEl,
    boardEl,
    welcomePanelEl,
    gamePanelEl,
    startButton,
    toggleButton,
    restartButton,
    songEl,
    blipEl,
    swooshEl;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // cache DOM references
  gameContainerEl = document.getElementById("game-container");
  welcomeCoverEl  = document.getElementById("welcome-cover");
  replayCoverEl   = document.getElementById("replay-cover");
  boardEl         = document.getElementById("board");
  welcomePanelEl  = document.getElementById("panel-welcome");
  gamePanelEl     = document.getElementById("panel-game");
  startButton     = document.getElementById("start");
  toggleButton    = document.getElementById("toggle");
  restartButton   = document.getElementById("restart");
  songEl          = document.getElementById("song");
  blipEl          = document.getElementById("blip");
  swooshEl        = document.getElementById("swoosh");

  // Register listeners
  // ...

  var cellEls = document.querySelectorAll("td");
  cellEls[0].addEventListener("click", swing);
  cellEls[1].addEventListener("click", swing);
  cellEls[2].addEventListener("click", swing);
  cellEls[3].addEventListener("click", swing);
  cellEls[4].addEventListener("click", swing);
  cellEls[5].addEventListener("click", swing);
  cellEls[6].addEventListener("click", swing);
  cellEls[7].addEventListener("click", swing);
  cellEls[8].addEventListener("click", swing);

  // Start the game!
  // openWelcomeScreen();
});
