console.log("main.js loaded!");

/* MODEL: Data Model ***************************************************
 *
 * While the WaM board is laid out as a grid, like
 * tic-tac-toe or other board games, we aren't going
 * to use the same model (a single array of the
 * values of the board). Why?
 *
 * ... TODO: WCPhil
 */

// A globally accessible variable to hold the "interval"
// for the timer. This allows us to play or pause games
// whenever we want. For more, see the "tick" section.
var timer;

// The state of the board, stored as a list of
// indices for cells that have yet to be whacked
// and cells that have been whacked, and wher-
// ever the avocado is.
var openCells   = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var closedCells = [];
var avocadoCell;

var gameWon    = false;
var gamePaused = true;

/* MODEL: Game Behavior ************************************************
 *
 * ... TODO: WCPhil
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
  blipEl.play(); // breaking the render rule!!!
};

var whack = function(cellIndex) {
  if (cellIndex === avocadoCell) {
    // MASH IT UP!
    closedCells.push(avocadoCell);
    closedCells.sort(); // just to keep it pretty!

    // Since it was mashed, it is no longer the avocado.
    avocadoCell = undefined;

    swooshEl.currentTime = 0;
    swooshEl.play(); // breaking the render rule!!!

    // Are there any open cells left?
    if (openCells.length === 0) gameWon = true;
  }
};

// Console helper: print the state!
var printState = function() {
  if (gameWon) {
    console.log("YOU WON!");
  } else {
    console.log(
        "-> Avocado: " + (avocadoCell === undefined ? "-" : avocadoCell),
        " (P: " + gamePaused + ", W: " + gameWon + ")",
      "\n   Open:    " + "[" + openCells + "]",
      "\n   Closed:  " + "[" + closedCells + "]" //,
      // "\n   View:    " + "[" + currentViewState + "]"
    );
  }
};

/* VIEW: Cache-ing DOM references **************************************
 *
 * ... TODO: WCPhil
 */

var gameContainerEl = document.getElementById("game-container");
var boardEl         = document.getElementById("board");
var welcomePanelEl  = document.getElementById("panel-welcome");
var gamePanelEl     = document.getElementById("panel-game");
var startButton     = document.getElementById("start");
var toggleButton    = document.getElementById("toggle");
var restartButton   = document.getElementById("restart");

var songEl   = document.getElementById("song");
var blipEl   = document.getElementById("blip");
var swooshEl = document.getElementById("swoosh");

// Dyanmically create elements and their children...
var startCoverEl = document.createElement("div");
  startCoverEl.id        = "start-cover";
  startCoverEl.className = "cover cover-dark"
  startCoverEl.innerHTML = `
    <h1 class="animated zoomIn">
      <span class="show-first infinite swing animated">Whack</span><br>
      <span class="show-second infinite swing animated">– a –</span><br>
      <span class="show-third infinite swing animated">molé!</span>
    </h1>
    <!-- <button>Play!</button> -->
  `;
var replayCoverEl = document.createElement("div");
  replayCoverEl.id        = "start-cover";
  replayCoverEl.className = "cover cover-dark"
  replayCoverEl.innerHTML = `
    <h1 class="animated zoomIn">
      <span class="show-first infinite swing animated">You</span><br>
      <span class="show-second infinite swing animated">Win!</span>
    </h1>
    <!-- <button>Play Again!</button> -->
  `;

/* VIEW: Helper methods ************************************************
 *
 * ... TODO: WCPhil
 */

// SOOOO IMPORTANT!
var getCellElByIndex = function(index) {
  return document.getElementById("cell" + index);
};

var openWelcomeScreen = function() {
  gameContainerEl.insertBefore(startCoverEl, boardEl);

  renderAvocado(0);
  renderGuac(8);

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 3500);
};

var openWinScreen = function() {
  gameContainerEl.insertBefore(replayCoverEl, boardEl);

  gamePanelEl.classList.add("hidden");
  welcomePanelEl.classList.remove("hidden");

  songEl.currentTime = 0; songEl.play();
  setTimeout(function() {
    songEl.pause();
  }, 13000);
};

var closeScreen = function() {
  startCoverEl.remove();
  replayCoverEl.remove();

  getCellElByIndex(0).innerHTML = "";
  getCellElByIndex(8).innerHTML = "";

  welcomePanelEl.classList.add("hidden");
  gamePanelEl.classList.remove("hidden");

  songEl.pause();
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
 * ... TODO: WCPhil
 */

var render = function() {
  // render the board
  for (var i = 0; i < 9; i++) {
    var currentCellEl = getCellElByIndex(i);

    currentCellEl.innerHTML = ""; // clear the cell, always!
    if (i === avocadoCell) {
      renderAvocado(i);
    } else if (closedCells.indexOf(i) !== -1) {
      renderGuac(i);
    }
  }

  // if game won, open the win screen!
  if (gameWon && !gamePaused) {
    openWinScreen();
    return;
  }

  // Add the right text to the toggle button
  toggleButton.textContent = gamePaused ? "Play" : "Pause";
};

/* INTERACTION: User-initiated  */

var swing = function(evt) {
  // find the element the listener is registered to!
  var catchEl = this;
  var index   = parseInt(catchEl.id.slice(-1));

  // hey, cheater!
  if (!gamePaused) {
    console.log("  * Click: " + index +" *");
    whack(index);
    render();
  }
};

/* INTERACTION: Timer-initiated  */

var tick = function() {
  console.log("* TICK…");
  if (gameWon) {
    pauseGame();
    printState(); render();
  } else {
    moveTheAvocado();
    printState(); render();
  }
};

/* INTERACTION: helper methods */

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
  tick(); // run the first tick sooner!
  timer = setInterval(tick, 700);

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

/* STARTUP */

startButton.addEventListener("click", function(evt) {
  closeScreen();
  if (gamePaused) startGame(); // might have already started, etc.
});
toggleButton.addEventListener("click", toggleGame);
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

openWelcomeScreen();
