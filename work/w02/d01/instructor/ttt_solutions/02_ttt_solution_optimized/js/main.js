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
  players: {
    "X": {
      name: "Player 1",
      markerClasses: "fa fa-times player-x",
      value: 1,
      id: "X"
    },
    "O": {
      name: "Player 2",
      markerClasses: "fa fa-circle-o player-o",
      value: -1,
      id: "O"
    }
  },
  turn: {
    player: "X",
    move:   null,
    number: 0
  },
  playing: true,
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
  console.log("Turn :", game.turn.number, ",", game.turn.move, "\n",
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
  var currentTurn   = game.turn,
      currentPlayer = game.players[currentTurn.player],
      winner;

  // Check if playing, and exit if not.
  if (game.playing === false) return;

  // Update the state of the board and record the move.
  game.board[cellIndex] = currentPlayer.value;
  currentTurn.move = {
    player:    currentPlayer,
    cellIndex: cellIndex
  };
  currentTurn.number++;

  game.print();

  // Check to see if the player won.
  winner = game.isWon();
  if (winner) {                          // This move won the game!
    game.end(winner);
  } else if (currentTurn.number === 9) { // The game is tied!
    game.end();
  } else {                               // Just another move…
    switchPlayer();
  }
};

var switchPlayer = function() {
  game.turn.player = game.turn.player === "X" ? "O" : "X";
}

game.isWon = function() {
  var move = game.turn.move;
  var brd  = game.board;

  if (
    Math.abs(brd[0] + brd[1] + brd[2]) === 3 || // ROW 1
    Math.abs(brd[3] + brd[4] + brd[5]) === 3 || // ROW 2
    Math.abs(brd[6] + brd[7] + brd[8]) === 3 || // ROW 3
    Math.abs(brd[0] + brd[3] + brd[6]) === 3 || // COL 1
    Math.abs(brd[1] + brd[4] + brd[7]) === 3 || // COL 2
    Math.abs(brd[2] + brd[5] + brd[8]) === 3 || // COL 3
    Math.abs(brd[0] + brd[4] + brd[8]) === 3 || // DIA L-to-R
    Math.abs(brd[2] + brd[4] + brd[6]) === 3    // DIA R-to-L
  ) {
    game.playing = false;
    return move.player;
  }
};

game.start = function() {
  game.turn = {
    player: "X",
    move:   null,
    number: 0
  };
  game.playing = true;
  game.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

game.end = function(winner) {
  if (winner) {
    console.log("Game won by", winner.name);
  } else {
    console.log("Game tied!");
  }
};


/* VIEW: Helper methods ************************************************
 *
 */

var insertPlayerMarker = function(id, cellIndex) {
  // HTML for "X" and "O" (from font-awesome icons) assigned as
  // properties of the player objects:
  var markerEl = document.createElement("i");
  markerEl.className = game.players[id].markerClasses;

  cellEls[cellIndex].className = "locked";
  cellEls[cellIndex].appendChild(markerEl);

  return markerEl;
}

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderBoard = function() {
  var move = game.turn.move;
  if (move) {
    insertPlayerMarker(move.player.id, move.cellIndex);
    delete game.turn.move;
  }

  if (!game.playing) {
    // game.turn.player
    // grab all of the player-_s and add winner to them
  }

  // for (var i = 0; i < board.length; i++) {
  // }
};

/* VIEW: RENDER ********************************************************
 *
 */

var render = function() {
  // Render turn-counter component.
  var turnEl = document.getElementById("turn");
  turnEl.textContent  = game.players[game.turn.player].name;
  turnBoxEl.className =
    "info turn player-" + (game.turn.player === "X" ? "x" : "o");

  // Render board component.
  renderBoard();

  // Render winner component.
  var winnerEl = document.getElementById("winner");
  if (game.playing) {
    winnerEl.textContent  = "?";
    winnerBoxEl.className = "info winner";
  } else {
    var cls = "player-" + (game.turn.player === "X" ? "x" : "o");
    var winningEls = document.querySelectorAll("." + cls);

    winnerEl.textContent = game.turn.player;
    winnerBoxEl.classList.add(cls);
    for (var i = 0; i < winningEls.length; i++) {
      winningEls[i].classList.add("winner");
    }
  }
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

  if (game.playing && cellEl.textContent === "") {
    game.move(cellIndex);
    render();
  }
};

/* STARTUP *************************************************************
 *
 */

// Globally-accesible!
var cellEls,
    turnBoxEl,
    winnerBoxEl,
    turnEl,
    winnerEl,
    restartButtonEl,
    boardEl;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // Cache DOM references.
  cellEls         = document.querySelectorAll("#board td");
  turnBoxEl       = document.querySelectorAll(".turn")[0];
  winnerBoxEl     = document.querySelectorAll(".winner")[0];
  turnEl          = document.getElementById("turn");
  winnerEl        = document.getElementById("winner");
  restartButtonEl = document.getElementById("restart");
  boardEl         = document.getElementById("board");

  // Register event listeners.
  boardEl.addEventListener("click", moveHandler);
  // restartButtonEl.addEventListener("click", restartHandler);
});




// //create empty winner / loser objects for use in announceWinner()
// var winner = null;
// var loser = null;


// //start with player1's turn
// var whoseTurn = player1;

// //set clear button
// var clearBtn = document.querySelector('#btn-clear-board');


// //make a move
// function playMove(){
// 	if(!this.classList.contains('played')){
// 		markPlayed(this, whoseTurn);
// 	}
// 	if(plays == 1) {
// 		clearBtn.addEventListener('click', initTicTacToe);
// 		clearBtn.className = 'btn-clear-active';
// 	}
// }


// //square is played
// function markPlayed(what,who) {
// 	//assign the current player's id as the p property of the square that was just played
// 	what.p = who.id;

// 	//add HTML class accordingly
// 	what.className = 'played by ';
// 	what.className += who.id;

// 	//add an 'X' or 'O' to the square
// 	if(who == player1) {
// 		what.innerHTML = player1.marker;
// 	} else {
// 		what.innerHTML = player2.marker;
// 	}

// 	//add 1 to number of plays:
// 	plays ++;

// 	checkForWinner();
// }



// function checkForWinner() {
// 	//check rows for a winner
// 	if((squares[0].p == squares[1].p && squares[0].p == squares[2].p) || (squares[3].p == squares[4].p && squares[3].p == squares[5].p) || squares[6].p == squares[7].p && squares[6].p == squares[8].p) {
// 		announceWinner(whoseTurn);
// 	}
// 	//check columns for a winner
// 	else if((squares[0].p == squares[3].p && squares[0].p == squares[6].p) || (squares[1].p == squares[4].p && squares[1].p == squares[7].p) || (squares[2].p == squares[5].p && squares[2].p == squares[8].p)) {
// 		announceWinner(whoseTurn);
// 	}
// 	//check diagonals for a winner
// 	else if((squares[0].p == squares[4].p && squares[0].p == squares[8].p) || (squares[2].p == squares[4].p && squares[2].p == squares[6].p)) {
// 		announceWinner(whoseTurn);
// 	}
// 	//check for tie game
// 	else if(plays == gridCount) {
// 		announceTie();
// 	}
// 	//toggle player turn if the game should keep going
// 	else {
// 		if(whoseTurn == player1) {
// 			whoseTurn = player2;
// 		} else {
// 			whoseTurn = player1;
// 		}
// 	}
// }

// //Announce Winner
// function announceWinner(player) {
// 	//Change #title to read winning player
// 	winner = player;
// 	h1.textContent = (winner.name + ' wins!');

// 	//set loser:
// 	if(winner == player1) {
// 		loser = player2;
// 	} else {
// 		loser = player1;
// 	}

// 	//Loop through square divs and attach winner/loser classes to each
// 	for(i = 0; i < squares.length; i ++) {
// 		if(squares[i].classList.contains(winner.id)){
// 			squares[i].firstChild.className += ' winner';
// 		} else if(squares[i].classList.contains(loser.id)) {
// 			squares[i].firstChild.className += ' loser';
// 		}
// 	}
// 	lockBoard();
// }

// //Announce Tie
// function announceTie() {
// 	h1.textContent = ("Tie game!");
// 	lockBoard();
// }

// //Lock the board
// function lockBoard(){
// 	for(var i = 0; i < gridCount; i ++) {
// 		squares[i].removeEventListener('click', playMove);
// 	}
// 	clearBtn.className = 'cta';
// 	board.className += 'locked';
// }

// //Clear board, reset
// function initTicTacToe() {

// 	//reset h1 to default gameName text:
// 	h1.textContent = gameName;

// 	//remove 'locked' class:
// 	board.className = "";

// 	//stop animation class from clear button:
// 	clearBtn.className = "btn-clear-inactive";

// 	//reset board and square classes to ""
// 	for(var i = 0; i < gridCount; i ++) {
// 		squares[i].className = "";
// 		squares[i].innerHTML = "";
// 		//add click listeners to all squares:
// 		squares[i].addEventListener('click', playMove);
// 		//make sure none of the board[i].p are equivalent:
// 		squares[i].p = i;
// 	}

// 	//Reset play count, player turn to Player 1, and reset clear btn
// 	plays = 0;
// 	whoseTurn = player1;
// }

// initTicTacToe();
