console.log("WE LOADED!");

// Current turn holder
var currentTurn;

// Player constructor function
var Player = function(id) {
  this.name = "Player " + (id + 1);
  this.id   = "p" + id;
}

// List of Players
var players = [
                new Player(0),
                new Player(1),
                new Player(2),
                new Player(3)
              ];

// Model the Board
var board = [null, null, null, null];

$('.switch').click(function() {
  nextTurn();
  printPlayers();
  render();
})


// Print to console, "who's up?""
function printPlayers() {
  var print = '';
  board.forEach(function(event, index) {
    event === 1 ? print += " p" + (index + 1) : print += " ___";
  });
  console.log("Who's Up?!\n" + print);
}

// Game Logic - Next Turn
function nextTurn() {

  for (var i = 0; i < board.length; i += 1) {
    if (board[i] === 1) {

      // Set up next turn
      board[i] = null;
      if (i === 3) {
        currentTurn = players[0];
        board[0] = 1;
      } else {
        currentTurn = players[i+1]
        board[i + 1] = 1;
      }

      // Break out if the player has been found
      break;
    }
  }

  // Start Game if no player is found
  if (currentTurn === undefined) {
    currentTurn = players[0];
    board[0] = 1;
  }
}

function render() {
  board.forEach(function(event, index) {
    if (event === 1) {
      $("#" + players[index].id).addClass('selected');
    } else {
      $("#" + players[index].id).removeClass('selected');
    }
  });
  $('.switch').text(currentTurn.name + " is up!");
}
