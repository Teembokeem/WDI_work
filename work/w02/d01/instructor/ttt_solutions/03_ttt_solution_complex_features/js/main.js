console.log("main.js loaded!");

/* VIEW: Helper methods ************************************************
 *
 */

var insertPlayerMarker = function(cellIndex) {
  var $cell = $($cells.get(cellIndex));

  $("<i>", {class: game.lastPlayer().markerClasses}).appendTo($cell);
  $cell.addClass("locked");
};

var renderBoard = function() {
  if (game.lastMove) {
    insertPlayerMarker(game.lastMove.cellIndex);
    delete game.lastMove;
  }

  if (game.isStarting()) {
    $cells.removeClass().empty();

  } else if (game.isWon() && game.winningMove) {
    $cells.each(function(i, cell) {
      var $icon    = $($(cell).children(0)),
          isWinner = game.winningMove.indexOf(i) !== -1;

      if      (isWinner)     $icon.addClass("winner");
      else if ($icon.length) $icon.addClass("loser");
    });

    delete game.winningMove;

  } else if (game.isTied()) {
    $cells.children().addClass("loser");
  }
};

/* VIEW: RENDER ********************************************************
 *
 */

game.render = function() {
  var player      = game.currentPlayer(),
      playerClass = "player-" + player.id.toLowerCase();

  renderBoard();

  // $infoBoxes.removeClass().addClass("info " + playerClass);

  if (game.isStarting() || game.isPlaying()) {
    $infoTurn.text(player.name + "'s turn");
    $infoBoxes.removeClass("winner loser player-x player-o");

    $infoTimer.text("8 / 1:00 Total");
    $infoTimer.parent().removeClass("restart");
    // Dynamically remove event listener…
    $infoTimer.parent().off();

    // var $m = $('<div class="modal box"><h1>Welcome to Tic Tac Toe!</h1></div>');
    // $("body").on("click", function() {
    //   console.log("click")
    //   modal.close();
    // });
    // modal.open($m, true, "animated bounceInUp", "bounceOutDown");

  } else if (game.isWon()) {
    $infoTurn.text(player.name + " won!");
    $infoTurn.parent().addClass("winner " + playerClass);

    var $m = $('<div class="modal text">You Win!</div>').addClass(playerClass);
    modal.open($m, false, "animated zoomIn", "blow-past");
    setTimeout(modal.close, 800);

    $infoTimer.text("Restart");
    $infoTimer.parent().addClass("restart");
    // Dynamically add event listener…
    $infoTimer.parent().on("click", restartHandler);

  } else if (game.isTied()) {

    $infoTurn.text("You both tied…");
    $infoTurn.parent().addClass("loser");

    var $m = $('<div class="modal text">You Tied…</div>');
    modal.open($m, false, "animated zoomIn", "blow-past");
    setTimeout(modal.close, 800);

    $infoTimer.text("Restart");
    $infoTimer.parent().addClass("restart");
    // Dynamically add event listener…
    $infoTimer.parent().on("click", restartHandler);
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
  var $cell     = $(evt.target);
  var cellIndex = $cell.attr("id").slice(-1);

  if (!$cell.hasClass("locked")) {
    game.move(cellIndex);
    game.render();
  }
};

/* STARTUP *************************************************************
 *
 */

// Globally-accesible!
var $cells,
    $infoBoxes,
    $infoTurn,
    $infoTimer,
    $board;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // Cache DOM references.
  $cells         = $("#board td");
  $infoBoxes     = $(".info");
  $infoTurn      = $(".info.turn").children();
  $infoTimer     = $(".info.timer").children();
  $board         = $("#board");

  // Register event listeners.
  $board.on("click", moveHandler);

  game.render();
});
