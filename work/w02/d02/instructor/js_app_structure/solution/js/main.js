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
};

var whack = function(cellIndex) {
  if (cellIndex === avocadoCell) {
    // MASH IT UP!
    closedCells.push(avocadoCell);
    closedCells.sort(); // just to keep it pretty!

    // Since it was mashed, it is no longer the
    // avocado.
    avocadoCell = undefined;

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
      "\n   Closed:  " + "[" + closedCells + "]",
      "\n   View:    " + "[" + currentViewState + "]"
    );
  }
};

/* VIEW: Cache-ing DOM references **************************************
 *
 * ... TODO: WCPhil
 */

var gameContainerEl = document.getElementById("game-container");
var boardEl         = document.getElementById("board");
var songEl          = document.getElementById("song");
var welcomePanelEl  = document.getElementById("panel-welcome");
var gamePanelEl     = document.getElementById("panel-game");
var startButton     = document.getElementById("start");
var toggleButton    = document.getElementById("toggle");
var restartButton   = document.getElementById("restart");

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

var getCellElByIndex = function(index) {
  return document.getElementById("cell" + index);
};

var openWelcomeScreen = function() {
  gameContainerEl.insertBefore(startCoverEl, boardEl);

  renderAddAvocado(0);
  renderAddGuac(8);

  // play song from start
  songEl.currentTime = 0; songEl.play();
};

var closeWelcomeScreen = function() {
  startCoverEl.remove();

  getCellElByIndex(0).innerHTML = "";
  getCellElByIndex(8).innerHTML = "";

  welcomePanelEl.classList.add("hidden");
  gamePanelEl.classList.remove("hidden");

  songEl.pause();
};

var openWinScreen = function() {
  gameContainerEl.insertBefore(replayCoverEl, boardEl);

  // play song from start
  songEl.currentTime = 0; songEl.play();
};

/* VIEW: RENDER ********************************************************
 *
 * ... TODO: WCPhil
 */

var renderAddAvocado = function(cellIndex) {
  var el = document.createElement("div");
  el.className = "avocado mole animated zoomIn";
  getCellElByIndex(cellIndex).appendChild(el);
};

var renderAddGuac = function(cellIndex) {
  var el = document.createElement("div");
  el.className = "guac mole animated zoomIn";
  getCellElByIndex(cellIndex).appendChild(el);
};

var renderRemoveMole = function(cellIndex) {
  var currentCellEl = getCellElByIndex(cellIndex);
  // currentCellEl.firstChild.classList.remove("zoomIn");
  // currentCellEl.firstChild.classList.add("animated", "zoomOut");
  // setTimeout(function() {
    currentCellEl.innerHTML = "";
  // }, 500);
};

var renderMashItUp = function(cellIndex) {
  getCellElByIndex(cellIndex).firstChild.className = "guac mole";
};

// // E: empty, A: avocado, G: guac
// var currentViewState = [
//   "E", "E", "E",
//   "E", "E", "E",
//   "E", "E", "E"
// ]; // We be diffin' bru!

// var render = function() {
//   // render the board
//   for (var i = 0; i < 9; i++) {
//     currentCellState = currentViewState[i];

//     // E -> A
//     if ((currentCellState === "E") && (i === avocadoCell)) {
//       console.log("   - adding av " + i);
//       renderAddAvocado(i);
//       currentViewState[i] = "A";
//     // A -> E, G -> E
//     } else if (
//         (currentCellState === "A" ||
//         currentCellState === "G") &&
//         openCells.indexOf(i) !== -1
//       ) {
//       console.log("   - removing " + i);
//       renderRemoveMole(i);
//       currentCellState = "E";
//     // E -> G
//     } else if (
//        (currentCellState === "E") &&
//        (closedCells.indexOf(i) !== -1)
//       ) {
//       console.log("   - adding gu" + i);
//       renderAddGuac(i);
//       currentCellState = "G";
//     // A -> G MASH IT UP!
//     } else if (
//         currentCellState === "A" &&
//         closedCells.indexOf(i) !== -1
//       ) {
//       console.log("   - mashitup " + i);
//       renderMashItUp(i);
//       currentCellState = "G";
//     // E -> E, A -> A, G -> G
//     } else {
//       // nothing...
//     }
//   }

//   // Add the right text to the toggle button
//   toggleButton.textContent = gamePaused ? "Play" : "Pause";
// };

var render = function() {
  // render the board
  for (var i = 0; i < 9; i++) {

    // E -> A
    if ((currentViewState[i] === "E") && (i === avocadoCell)) {
      console.log("   - adding av " + i);
      renderAddAvocado(i);
      currentViewState[i] = "A";
    // A -> E, G -> E
    } else if (
        (currentViewState[i] === "A" ||
        currentViewState[i] === "G") &&
        openCells.indexOf(i) !== -1
      ) {
      console.log("   - removing " + i);
      renderRemoveMole(i);
      currentViewState[i] = "E";
    // E -> G
    } else if (
       (currentViewState[i] === "E") &&
       (closedCells.indexOf(i) !== -1)
      ) {
      console.log("   - adding gu" + i);
      renderAddGuac(i);
      currentViewState[i] = "G";
    // A -> G MASH IT UP!
    } else if (
        currentViewState[i] === "A" &&
        closedCells.indexOf(i) !== -1
      ) {
      console.log("   - mashitup " + i);
      renderMashItUp(i);
      currentViewState[i] = "G";
    // E -> E, A -> A, G -> G
    } else {
      // nothing...
    }
  }

  // Add the right text to the toggle button
  toggleButton.textContent = gamePaused ? "Play" : "Pause";
};

/* INTERACTION: User-initiated  */

var swing = function(evt) {
  var catchEl  = this;       // the element the listener is registered to!
  // var targetEl = evt.target; // the element the event targeted!
  var idx      = parseInt(catchEl.id.slice(-1));

  console.log("  * Click: " + idx +" *");
  whack(idx);
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

/* INTERACTION: Game-play */

var startGame = function() {
  clearInterval(timer);

  console.log("* RESETTING GAME STATE.");
  gameWon     = false;
  openCells   = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  closedCells = [];
  avocadoCell = undefined;

  playGame();
  // setTimeout(playGame, 5000);
};

var playGame = function() {
  gamePaused = false;
  // setTimeout(tick, ); // run the first tick sooner!
  timer = setInterval(tick, 1100);

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

// var winGame = function() {
//   openWinScreen();        // breaking rules!
//   console.log("YOU WIN!");
// };

// var loseGame = function() {};

/* STARTUP */

startButton.addEventListener("click", function(evt) {
  closeWelcomeScreen();
  setTimeout(startGame, 1000);
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
// setTimeout(closeWelcomeScreen, 3000);
// setTimeout(playGame, 3000);
// setTimeout(endGame, 11005);


