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
  var $turnEl = $("#turn")
  $turnEl.text("Turn: " + currentPlayer);

  // Render Winner Component
  var $winnerEl = $("#winner");
  renderBoard();
  if (!won) {
    $winnerEl.text("Winner: ?");
  } else {
    $winnerEl.text("Winner: " + currentPlayer);
    alert("Yo dawg, I can't believe " + currentPlayer + " just won!! DAYYUM!")
  }
};

// As an example, we can "render" a component separately
// in a function, just calling it above. This can help
// us test it, or even just deal with REALLY long render
// functions, breaking them up in to smaller ones.
var renderBoard = function() {
  $("#cell0").text(board[0]);
  $("#cell1").text(board[1]);
  $("#cell2").text(board[2]);
  $("#cell3").text(board[3]);
  $("#cell4").text(board[4]);
  $("#cell5").text(board[5]);
  $("#cell6").text(board[6]);
  $("#cell7").text(board[7]);
  $("#cell8").text(board[8]);

  // for (var i = 0; i < board.length; i++) {
  //   $("cell" + i).text(board[i]);
  // }
}

/* USER INTERACTION */

$("#restart").click(function(evt) {
  startGame();
  render();
});

$("#board").delegate("td", "click", function() {
  var $cellEl    = $(this);
  var cellIndex = $cellEl.attr('id').slice(-1);

  if (!won && $cellEl.text() === "") {
    move(cellIndex);
    render();
  } else if (!won && $cellEl.text() !== "") {
    $cellEl.addClass("fade-in");
    setTimeout(function() {
      $cellEl.addClass("fade-out");
    }, 1000);
    setTimeout(function() {
      $cellEl.removeClass("fade-in");
      $cellEl.removeClass("fade-out");
    }, 2000);
  }
});
