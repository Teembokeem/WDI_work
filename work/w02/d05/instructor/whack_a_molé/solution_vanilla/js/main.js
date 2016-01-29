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
 *
 * There is also a helpful function for us to print
 * the state!
 */

var pickRandomOpenCell = function() {
  var randomIndex  = Math.floor(Math.random() * openCells.length);
  var splicedValue = openCells.splice(randomIndex, 1);
  return splicedValue[0];
};

var moveTheAvocado = function() {
  var nextAvocadoCell = pickRandomOpenCell();

  // If the avocado was not mashed, return it
  // to the list of open cells!
  if (avocadoCell !== undefined) {
    openCells.push(avocadoCell);
    openCells.sort(); // just to keep it pretty!
  }

  // MOVE THAT THING!
  avocadoCell = nextAvocadoCell;

  blipEl.currentTime = 0;
  blipEl.play(); // Breaking the render rule!!!
};

var mash = function(cellIndex) {
  if (cellIndex === avocadoCell) {
    // MASH IT UP!
    closedCells.push(avocadoCell);
    closedCells.sort(); // Just to keep it pretty!

    // Since it was mashed, it is no longer the avocado.
    avocadoCell = undefined;

    swooshEl.currentTime = 0;
    swooshEl.play(); // Breaking the render rule!!!

    // Are there any open cells left?
    if (openCells.length === 0) gameWon = true;
  }
};

/* VIEW: Helper methods ************************************************
 *
 * Here are methods that either render some spec-
 * ific component on the page, or encapsulate some
 * useful, reusable logic.
 */

var openWelcomeScreen = function() {
  welcomeCoverEl.classList.remove("none");

  renderAvocado(0);
  renderGuac(8);

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 3500);
};

var openWinScreen = function() {
  replayCoverEl.classList.remove("none");

  gamePanelEl.classList.add("hidden");
  welcomePanelEl.classList.remove("hidden");

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 13000);
};

var closeScreen = function() {
  welcomeCoverEl.classList.add("none");
  replayCoverEl.classList.add("none");

  getCellElByIndex(0).innerHTML = "";
  getCellElByIndex(8).innerHTML = "";

  welcomePanelEl.classList.add("hidden");
  gamePanelEl.classList.remove("hidden");

  songEl.pause();
};

// SOOOO IMPORTANT!
var getCellElByIndex = function(index) {
  return document.getElementById("cell" + index);
};

var renderAvocado = function(cellIndex) {
  var el = document.createElement("div");
  el.className = "avocado mole animated zoomIn";
  getCellElByIndex(cellIndex).appendChild(el);
};

var renderGuac = function(cellIndex) {
  var el = document.createElement("div");
  el.className = "guac mole animated zoomIn";
  getCellElByIndex(cellIndex).appendChild(el);
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
  // Render the board.
  for (var i = 0; i < 9; i++) {
    var currentCellEl = getCellElByIndex(i);

    currentCellEl.innerHTML = ""; // clear the cell, always!
    if (i === avocadoCell) {
      renderAvocado(i);
    } else if (closedCells.indexOf(i) !== -1) {
      renderGuac(i);
    }
  }

  // If game won, open the win screen!
  if (gameWon && !gamePaused) {
    openWinScreen();
    return;
  }

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
  var catchEl = this;
  var index   = parseInt(catchEl.id.slice(-1));

  if (!gamePaused) { // Hey, cheater; it's paused!
    mash(index);     // MASH IT UP!

    console.log("  * Click: " + index +" *");
    render();
  }
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
  if (gameWon) {
    pauseGame();      // Stop the timer, or…
  } else {
    moveTheAvocado(); // MOVE THAT THING!
    printState(); render();
  }
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
  gameWon     = false;
  openCells   = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  closedCells = [];
  avocadoCell = undefined;

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

var toggleGame = function(evt) {
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
  startButton.addEventListener("click", function(evt) {
    closeScreen();
    if (gamePaused) startGame(); // Might have already started…
  });
  toggleButton.addEventListener("click",  toggleGame);
  restartButton.addEventListener("click", startGame);

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
  openWelcomeScreen();
});
