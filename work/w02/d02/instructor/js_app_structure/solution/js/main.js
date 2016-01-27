console.log("main.js loaded!");

/* DATA MODEL */

var timer;
var lastAvocado;
var currentAvocado;
var guacs = [];
var mashed = false;

/* BEHAVIOR */

var pickRandomOpenSquare = function() {
  // if (guacs.length === 8) pauseGame(); // for protection

  var avocado = Math.floor(Math.random() * 9);
  var i = 0;

  // continue to generate a random index (avocado) while
  // the new avocado is in the guac array or is the
  // current avocado...
  while (
    guacs.indexOf(avocado) !== -1 ||
    avocado === currentAvocado
  ) {
    console.log("  looking for number…");
    avocado = Math.floor(Math.random() * 8);

    i++;
    if (i > 120) {
      throw "Random picker went in to infinite loop!";
    }
  }
  return avocado;
};

var advanceGame = function() {
  // if the user mashes (clicks on) the avocado
  // then add it to the guac list, else set it
  // as the last avocado for cleanup...
  if (mashed) {
    guacs.push(currentAvocado);
    lastAvocado = undefined; // don't clean up the cell!
    mashed = false;          // reset mashed status
  } else {
    lastAvocado = currentAvocado;
  }

  if (guacs.length === 8) pauseGame();

  // update the avocado
  currentAvocado = pickRandomOpenSquare();
};

/* VIEW HELPERS */

// Create or cache DOM nodes...
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
var gameContainerEl = document.getElementById("game-container");
var boardEl         = document.getElementById("board");
var songEl          = document.getElementById("song");

// Helper functions
var getCellEl = function(index) {
  return document.getElementById("cell" + index);
};

var createAvacadoEl = function() {
  var el = document.createElement("div");
  el.className = "avocado mole animated zoomIn";
  return el;
};

var createGuacEl = function() {
  var el = document.createElement("div");
  el.className = "guac mole animated zoomIn";
  return el;
};

var mashyTup = function(avocadoEl) {
  avocadoEl.className = "guac mole";
};

var openWelcomeScreen = function() {
  gameContainerEl.insertBefore(startCoverEl, boardEl);
  getCellEl(0).appendChild(createAvacadoEl());
  getCellEl(8).appendChild(createGuacEl());

  // play song from start
  songEl.currentTime = 0; songEl.play();
};

var closeWelcomeScreen = function() {
  startCoverEl.remove();
  getCellEl(0).children[0].remove();
  getCellEl(8).children[0].remove();
  songEl.pause();
};

var openWinScreen = function() {
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
  gameContainerEl.insertBefore(replayCoverEl, boardEl);

  // play song from start
  songEl.currentTime = 0; songEl.play();
};

/* VIEW HELPERS */

// Render the game
var render = function() {
  var removeCellEl,
      createCellEl;

  // remove last avocado from board
  if (lastAvocado !== undefined) {
    console.log("  Removing last avocado: ", lastAvocado);
    removeCellEl = getCellEl(lastAvocado);
    removeCellEl.firstChild.classList.remove("zoomIn");
    removeCellEl.firstChild.classList.add("zoomOut");
    setTimeout(function() {
      removeCellEl.innerHTML = "";
    }, 500);
  }

  // add new avocado to the board
  if (currentAvocado !== undefined) {
    createCellEl = getCellEl(currentAvocado);
    createCellEl.appendChild(createAvacadoEl());
  }
};

/* INTERACTION and GAMEPLAY */

var tick = function() {
  if (guacs.length === 9) endGame(); // for protection
  // console.log("ticking...")
  advanceGame();
  // console.log("  game advanced")

  printState();
  render();
  // console.log("  re-renders")
};

var playGame = function() {
  console.log("GAME BEGINS");
  timer = setInterval(tick, 1100);
};

var pauseGame = function() {
  console.log("GAME PAUSED");
  clearInterval(timer);
};

var winGame = function() {
  openWinScreen();
  console.log("YOU WIN!");
};

var loseGame = function() {};

var clickAction = function(evt) {
  var catchEl  = this;       // the element the listener is registered to!
  var targetEl = evt.target; // the element the event targeted!
  var idx      = parseInt(catchEl.id.slice(-1));

  console.log("  * Click: " + idx +" *");

  if (currentAvocado === idx) {
    console.log("   MASH IT UP");
    if (guacs.length === 8) winGame();

    mashyTup(targetEl); // breaking the RENDER RULE!
    mashed = true;
  }
};

var cellEls = document.querySelectorAll(".hole");
for (var i = 0; i < cellEls.length; i++) {
  cellEls[i].addEventListener("click", clickAction);
}

openWelcomeScreen();
setTimeout(closeWelcomeScreen, 3000);
setTimeout(playGame, 3000);
// setTimeout(endGame, 11005);

/* CONSOLE HELPERS */

var printState = function(full) {
  if (full) {
    console.log("");
    console.log("-> Last Idx: " + (lastAvocado === undefined ? "-" : lastAvocado));
    // console.log("-> Mashed?   " + mashed);
    console.log("-> Now Idx:  " + (currentAvocado === undefined ? "-" : currentAvocado));
    console.log("-> Guac:     " + "[" + guacs + "]");
    console.log("");
  } else {
    console.log(
      "-> (L: " + (lastAvocado === undefined ? "-" : lastAvocado),
        ", N: " + (currentAvocado === undefined ? "-" : currentAvocado) + ")",
        ", M: " + mashed,
        ", G: " + "[" + guacs + "]"
    );
  }
};


