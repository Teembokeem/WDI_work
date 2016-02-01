console.log("main.js loaded!");

/* MODEL: Data Model ***************************************************
 *
 */

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", // 0, 1, 2
  "", "", "", // 3, 4, 5
  "", "", ""  // 6, 7, 8
];

/* MODEL: Game Behavior ************************************************
 *
 */

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    // currentPlayer = (currentPlayer === "X" ? "O" : "X");
  }
};

var gameWon = function() {
  if (
    ((board[0] === board[1]) && (board[0] === board[2]) && board[0] !== "") ||
    ((board[3] === board[4]) && (board[3] === board[5]) && board[3] !== "") ||
    ((board[6] === board[7]) && (board[6] === board[8]) && board[6] !== "") ||
    ((board[0] === board[3]) && (board[0] === board[6]) && board[0] !== "") ||
    ((board[1] === board[4]) && (board[1] === board[7]) && board[1] !== "") ||
    ((board[2] === board[5]) && (board[2] === board[8]) && board[2] !== "") ||
    ((board[0] === board[4]) && (board[0] === board[8]) && board[0] !== "") ||
    ((board[2] === board[4]) && (board[2] === board[6]) && board[2] !== "")
  ) {
    return true;
  } else {
    return false;
  }
};

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
};


/* VIEW: Helper methods ************************************************
 *
 */

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderBoard = function() {
  for (var i = 0; i < board.length; i++) {
    var cellEl = document.getElementById("cell" + i)
    cellEl.textContent = board[i];

    if (board[i] !== "" || won) {
      cellEl.className =
        "locked " + (board[i] === "X" ? "player-x" : "player-o");
    } else {
      cellEl.className = "";
    }
  }
}

/* VIEW: RENDER ********************************************************
 *
 */

var render = function() {
  // Render turn-counter component.
  var turnEl = document.getElementById("turn");
  turnEl.textContent  = currentPlayer;
  turnBoxEl.className =
    "info turn player-" + (currentPlayer === "X" ? "x" : "o");

  // Render winner component.
  var winnerEl = document.getElementById("winner");
  if (!won) {
    winnerEl.textContent  = "?";
    winnerBoxEl.className = "info winner";
  } else {
    winnerEl.textContent = currentPlayer;
    winnerBoxEl.classList.add("player-" + (currentPlayer === "X" ? "x" : "o"));
  }

  // Render board component.
  renderBoard();
};

/* INTERACTION: User-initiated handlers ********************************
 *
 */

var restartHandler = function(evt) {
  startGame();
  render();
};

var moveHandler = function(evt) {
  var cellEl    = evt.target;
  var cellIndex = cellEl.id.slice(-1);

  if (!won && cellEl.textContent === "") {
    move(cellIndex);
    render();
  }
};

/* STARTUP *************************************************************
 *
 */

// Globally-accesible!
var turnBoxEl,
    winnerBoxEl,
    turnEl,
    winnerEl,
    restartButtonEl,
    boardEl;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // Cache DOM references.
  turnBoxEl       = document.querySelectorAll(".turn")[0];
  winnerBoxEl     = document.querySelectorAll(".winner")[0];
  turnEl          = document.getElementById("turn");
  winnerEl        = document.getElementById("winner");
  restartButtonEl = document.getElementById("restart");
  boardEl         = document.getElementById("board");

  // Register event listeners.
  boardEl.addEventListener("click", moveHandler);
  restartButtonEl.addEventListener("click", restartHandler);
});
