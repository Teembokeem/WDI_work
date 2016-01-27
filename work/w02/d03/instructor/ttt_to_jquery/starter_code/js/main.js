console.log("main.js loaded!");

/* MODEL */

/* DATA MODEL */

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", // 0, 1, 2
  "", "", "", // 3, 4, 5
  "", "", ""  // 6, 7, 8
];

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
};

/* BEHAVIOR */

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


/* RENDER OUR VIEW */

var render = function() {
  // Render Turn Counter Component
  var turnEl = document.getElementById("turn");
  turnEl.textContent = "Turn: " + currentPlayer;

  // Render Winner Component
  var winnerEl = document.getElementById("winner");
  renderBoard();
  if (!won) {
    winnerEl.textContent = "Winner: ?";
  } else {
    winnerEl.textContent = "Winner: " + currentPlayer;
    alert("Yo dawg, I can't believe " + currentPlayer + " just won!! DAYYUM!")
  }
};

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderBoard = function() {
  document.getElementById("cell0").textContent = board[0];
  document.getElementById("cell1").textContent = board[1];
  document.getElementById("cell2").textContent = board[2];
  document.getElementById("cell3").textContent = board[3];
  document.getElementById("cell4").textContent = board[4];
  document.getElementById("cell5").textContent = board[5];
  document.getElementById("cell6").textContent = board[6];
  document.getElementById("cell7").textContent = board[7];
  document.getElementById("cell8").textContent = board[8];

  // for (var i = 0; i < board.length; i++) {
  //   document.getElementById("cell" + i).textContent = board[i];
  // }
}

/* USER INTERACTION */

document.getElementById("restart")
        .addEventListener("click", function(evt) {
          startGame();
          render();
        });

document.getElementById("board")
        .addEventListener("click", function(evt) {
          var cellEl    = evt.target;
          var cellIndex = cellEl.id.slice(-1);

          if (!won && cellEl.textContent === "") {
            move(cellIndex);
            render();
          } else if (!won && cellEl.textContent !== "") {
            cellEl.classList.add("fade-in");
            setTimeout(function() {
              cellEl.classList.add("fade-out");
            }, 1100);
            setTimeout(function() {
              cellEl.classList.remove("fade-in");
              cellEl.classList.remove("fade-out");
            }, 2000)
          }
        });
