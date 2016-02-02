/*
 * # Tic Tac Toe
 */

/*
 * ## State (Data Model)
 *
 * These are the data points and collections that we can use to represent the
 * game at any point.
 *
 */

var gameIsBeingPlayed = false; // true
var nextTurn = "X";            // "O"
var board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

/*
 * State-related helper functions can help us to understand the state of the
 * game at any point in time.
 * 
 * 1. Get a square's value.
 * 2. Get a nice print out of the next user.
 * 3. Get a row's value.
 * 4. Get a column's value.
 * 5. Print the board (console.log).
 * 6. Print the whole state of the game (console.log).
 * 7. Clear the board model.
 * 8. Find a random, empty square's coordinates.
 *
 */

// Get a square's value (change null to "_" so that it's easier to see...)
var getValueOf = function(y, x){
  var value = board[y][x];
  if (value) {
    return value;
  } else {
    return "_";
  }
  return true;
};

//  Get a nice print out of the next user.
var nextPlayerString = function() {
  return "It is player " + nextTurn + "'s turn.";
}

// Print the board.
var printTheBoard = function(){
  console.log( "  0 1 2");
  for (var i = 0; i < 3; i++) {
    console.log(
      i + " " + 
      getValueOf(i, 0) + " " + 
      getValueOf(i, 1) + " " + 
      getValueOf(i, 2)
    );
  }
  return true;
};

// Get a row's value.
var getRow = function(y){
  var row = 
    getValueOf(y, 0) + 
    getValueOf(y, 1) + 
    getValueOf(y, 2);
  return row;
};

// Get a column's value.
var getColumn = function(x){
  var column = 
    getValueOf(0, x) + 
    getValueOf(1, x) + 
    getValueOf(2, x);
  return column;
};

// Print the whole state of the game.
var printTheGame = function(){
  if (gameIsBeingPlayed) {
    printTheBoard();
    console.log(nextPlayerString());
  } else {
    console.log("The game is not currently being played.");
  }
  return true;
};

// Clear the board model.
var clearTheBoard = function() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      board[i][j] = null;
    }
  }
  nextTurn = "X"; // reset to first player!
  return true;
};

// Find a random, empty square's coordinates.
var randomEmptySquareCoords = function() {
  var squareValue = true;
  var y;
  var x;

  // as long as the square's value is not null, guess again
  while (squareValue) {
    // this is the code to generate a random integer btwn 0 and 2
    y = Math.floor(Math.random() * 3);
    x = Math.floor(Math.random() * 3);
    squareValue = board[y][x]; // from the model!
  }

  return [y, x];
};

/*
 * ## Game (Problem Model)
 *
 * 1. The game begins.
 * 2. A player makes a move.
 * 3. Decide if the move is legal or not.
 * 4. Decide if the move wins or not.
 * 5. Decide if the game is tied or not.
 *
 */

// The game begins.
var beginGame = function() {
  gameIsBeingPlayed = true;
  console.log("Beginning a new game. " + nextPlayerString());
  return true;
};

// A player makes a move.
var move = function(y, x) {
  // decide if a move is legal
  if (!moveIsLegal(y, x)) {
    console.log("This is not a legal move!");
    return false;
  }
  
  // update the board model
  board[y][x] = nextTurn;

  // check to see if the game is over
  var winner = gameIsWon();
  if (winner) {
    console.log("Player " + winner + " has won!");
  } else
  if (gameIsTied()) {
    console.log("The game ended in a tie!");
  } else {
    // alternate the players for the next turn
    if (nextTurn === "X") {
      nextTurn = "O";
    } else {
      nextTurn = "X";
    }

    // print out the game state for debugging
    printTheGame();
  }
  
  return true;
};

// Decide if the move is legal or not.
var moveIsLegal = function(y, x) {
  if (gameIsBeingPlayed === false) {
    return false; // game hasn't begun...
  } else
  if (y > 2 || y < 0 || x > 2 || x < 0) {
    return false; // squares not in play...
  } else
  if (getValueOf(y, x) !== "_") {
    return false; // move has already been made...
  } else {
    return true;
  }
}

// Decide if the move wins or not.
var gameIsWon = function() {
  if (
    // if there are three of the same kind in a row
    getRow(0) === "XXX" ||
    getRow(0) === "OOO" ||
    getRow(1) === "XXX" ||
    getRow(1) === "OOO" ||
    getRow(2) === "XXX" ||
    getRow(2) === "OOO" ||
    // if there are three of the same kind in a column
    getColumn(0) === "XXX" ||
    getColumn(0) === "OOO" ||
    getColumn(1) === "XXX" ||
    getColumn(1) === "OOO" ||
    getColumn(2) === "XXX" ||
    getColumn(2) === "OOO" ||    
    // if there are three on a diagonal (ie they are the same but not null)
    (
      board[0][0] !== null &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) ||
    (
      board[0][2] !== null &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    )
  ) {
    // return the player who made the last turn, ie the winning turn
    return nextTurn;
  } else {
    return false;
  }
}; // ignore the fact that we have a conditional returning true/false... :)

// Decide if the game is tied or not.
var gameIsTied = function() {
  if (
    (board[0].indexOf(null) === -1) &&
    (board[1].indexOf(null) === -1) &&
    (board[2].indexOf(null) === -1)
  ) {
    return true;
  } else {
    return false;
  }
}; // ignore the fact that we have a conditional returning true/false... :)
