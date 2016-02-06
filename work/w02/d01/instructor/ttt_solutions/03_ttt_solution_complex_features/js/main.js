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

  $infoBox.removeClass().addClass("info " + playerClass);

  if (game.isStarting() || game.isPlaying()) {
    $info.text(player.name + "'s turn");
    $infoBox.removeClass("winner loser");
    $restartButton.removeClass("over");

  } else if (game.isWon()) {
    $info.text(player.name + " won!");
    $infoBox.addClass("winner");
    $restartButton.addClass("over");

    var $m = $('<div class="modal text">You Win!</div>').addClass(playerClass);
    modal.open($m, false, "animated zoomIn", "blow-past");
    setTimeout(modal.close, 800);

  } else if (game.isTied()) {

    $info.text("You both tied…");
    $infoBox.addClass("loser");
    $restartButton.addClass("over");

    var $m = $('<div class="modal text">You Tied…</div>');
    modal.open($m, false, "animated zoomIn", "blow-past");
    setTimeout(modal.close, 800);
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
    $infoBox,
    $info,
    $restartButton,
    $board;

// Once the DOM loads…
document.addEventListener("DOMContentLoaded", function(evt) {

  // Cache DOM references.
  $cells         = $("#board td");
  $infoBox       = $(".info");
  $info          = $infoBox.children();
  $restartButton = $("#restart");
  $board         = $("#board");

  // Register event listeners.
  $board.on("click", moveHandler);
  $restartButton.on("click", restartHandler);

  game.render();
});
