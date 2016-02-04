console.log("main.js loaded!");

/* MODEL: Data Model ***************************************************
 *
 */

// Move towards a more realistic modeling of
// the game: players, with all necessary data,
// the turn, the game state (playing, not
// winning, since games can be tied), and a
// board that is optimized for easy solution-
// checking.
var game = {
  players: [
    {
      name: "Player 1",
      markerClasses: "fa fa-times player-x",
      value: 1,
      id: "X"
    },
    {
      name: "Player 2",
      markerClasses: "fa fa-circle-o player-o",
      value: -1,
      id: "O"
    }
  ],
  turn:       0, // represents the index of the above player
  turnNumber: 0,
  lastMove:   null,
  mode:       "starting", // can also be playing, won, or tied
  board: [
     0,  0,  0, // 0, 1, 2
     0,  0,  0, // 3, 4, 5
     0,  0,  0  // 6, 7, 8
  ]
};

game.print = function() {
  var resolveValue = function(val) {
    if (val === 1) return "X";
    if (val === -1) return "O";
    return "_";
  }
  console.log("Turn :", game.turnNumber, ",", game.lastMove, "\n",
    resolveValue(game.board[0]),
    resolveValue(game.board[1]),
    resolveValue(game.board[2]) + "\n",
    resolveValue(game.board[3]),
    resolveValue(game.board[4]),
    resolveValue(game.board[5]) + "\n",
    resolveValue(game.board[6]),
    resolveValue(game.board[7]),
    resolveValue(game.board[8])
  );
};

/* MODEL: Game Behavior ************************************************
 *
 */

game.move = function(cellIndex) {
  var player = game.currentPlayer();

  // Ensure that, if starting a new game, we are now playing.
  if (game.isStarting()) game.mode = "playing";

  // Check if playing, and exit if not.
  if (!game.isPlaying()) return;

  // Update the state of the board and record the move.
  game.board[cellIndex] = player.value;
  game.lastMove = {
    player:    player,
    cellIndex: cellIndex
  };
  game.turnNumber++;

  game.print();

  // Check to see if the game is over. If not, switch the player.
  game.checkBoardforWinOrTie();
  if (game.isPlaying()) game.switchPlayer();
};

game.switchPlayer = function() {
  game.turn = (game.turn === 0 ? 1 : 0);
}

game.currentPlayer = function() {
  return game.players[game.turn];
}

game.lastPlayer = function() {
  return game.lastMove ? game.lastMove.player : game.currentPlayer();
}

game.isStarting = function() {
  return game.mode === "starting";
};

game.isPlaying = function() {
  return game.mode === "playing";
};

game.isWon = function() {
  return game.mode === "won";
};

game.isTied = function() {
  return game.mode === "tied";
};

game.start = function() {
  console.log("Resetting game!");
  game.turn       = 0;
  game.turnNumber = 0;
  game.lastMove   = null;
  game.mode       = "starting";
  game.board      = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

game.win = function(player, cells) {
  console.log(player.name, "wins!");
  game.mode        = "won";
  game.winningMove = cells;
};

game.tie = function() {
  console.log("It's a tie…");
  game.mode = "tied";
}

game.checkBoardforWinOrTie = function() {
  var brd  = game.board;
  var plyr = game.currentPlayer();

  if      (Math.abs(brd[0]+brd[1]+brd[2]) === 3) game.win(plyr, [0,1,2]);
  else if (Math.abs(brd[3]+brd[4]+brd[5]) === 3) game.win(plyr, [3,4,5]);
  else if (Math.abs(brd[6]+brd[7]+brd[8]) === 3) game.win(plyr, [6,7,8]);
  else if (Math.abs(brd[0]+brd[3]+brd[6]) === 3) game.win(plyr, [0,3,6]);
  else if (Math.abs(brd[1]+brd[4]+brd[7]) === 3) game.win(plyr, [1,4,7]);
  else if (Math.abs(brd[2]+brd[5]+brd[8]) === 3) game.win(plyr, [2,5,8]);
  else if (Math.abs(brd[0]+brd[4]+brd[8]) === 3) game.win(plyr, [0,4,8]);
  else if (Math.abs(brd[2]+brd[4]+brd[6]) === 3) game.win(plyr, [2,4,6]);
  else if (game.turnNumber === 9) game.tie();
  else return false;
};

/* VIEW: Helper methods ************************************************
 *
 */

var insertPlayerMarker = function(cellIndex) {
  // HTML for the "X"s and "O"s, from font-awesome icons,
  // is created here as an <i> tag:
  var markerEl = document.createElement("i");
  markerEl.className = game.lastPlayer().markerClasses;

  // We append the new icon to the cell and "lock" it from
  // triggering further moves.
  cellEls[cellIndex].className = "locked";
  cellEls[cellIndex].appendChild(markerEl);
};

var renderBoard = function() {
  // This is a fundamentally different way to render than the
  // simple one-way rendering we've used in other examples.
  // "Diff" rendering only runs when there's been a change to
  // some part of the state, which it renders and then resets.

  if (game.lastMove) {
    insertPlayerMarker(game.lastMove.cellIndex);
    game.lastMove = null; // tell the state that this change was rendered
  }

  if (game.isStarting()) {
    for (var i = 0, cellEl; i < cellEls.length; i++) {
      cellEl = cellEls[i];
      cellEl.className = "";
      cellEl.innerHTML = "";
    }
  } else if (game.isWon() && game.winningMove) {
    for (var i = 0, iconEl; i < cellEls.length; i++) {
      iconEl = cellEls[i].firstElementChild;
      if (game.winningMove.indexOf(i) !== -1) {
        iconEl.classList.add("winner");
      } else if (iconEl) {
        iconEl.classList.add("loser");
      }
    }
    delete game.winningMove; // tell the state that this change was rendered
  } else if (game.isTied()) {
    for (var i = 0, iconEl; i < cellEls.length; i++) {
      iconEl = cellEls[i].firstElementChild;
      iconEl.classList.add("loser");
    }
  }
};

/* VIEW: RENDER ********************************************************
 *
 */

game.render = function() {
  var player = game.currentPlayer();

  // Render board component.
  renderBoard();

  // Render turn-counter and button components.
  infoBoxEl.className =
    "info player-" + player.id.toLowerCase();
  if (game.isStarting() || game.isPlaying()) {
    infoEl.textContent  = player.name + "'s turn";
    restartButtonEl.classList.remove("over");
  } else if (game.isWon()) {
    infoEl.textContent  = player.name + " won!";
    infoBoxEl.classList.add("winner");
    restartButtonEl.classList.add("over");
  } else if (game.isTied()) {
    infoEl.textContent  = "You both tied…";
    infoBoxEl.className = "info loser";
    restartButtonEl.classList.add("over");
  }
};

/* INTERACTION: User-initiated handlers ********************************
 *
 */

var restartHandler = function(evt) {
  game.start();
  game.render();
};

var moveHandler = function(evt) {
  var cellEl    = evt.target;
  var cellIndex = cellEl.id.slice(-1);

  if (!cellEl.classList.contains("locked")) {
    console.log("clicked")
    game.move(cellIndex);
    game.render();
  }
};

/* STARTUP *************************************************************
 *
 */

// Globally-accesible!
var cellEls,
    infoBoxEl,
    infoEl,
    restartButtonEl,
    boardEl;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // Cache DOM references.
  cellEls         = document.querySelectorAll("#board td");
  infoBoxEl       = document.querySelectorAll(".info")[0];
  infoEl          = infoBoxEl.firstElementChild;
  restartButtonEl = document.getElementById("restart");
  boardEl         = document.getElementById("board");

  // Register event listeners.
  boardEl.addEventListener("click", moveHandler);
  restartButtonEl.addEventListener("click", restartHandler);

  game.render();
});
