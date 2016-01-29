(function() {
  console.log("main.js loaded!");

  /* MODEL: Data Model **************************************************/
  // make a single global-level object on window for the game…
  window.game = {
    timer: undefined,
    speed: 900,
    isWon: false,
    isPaused: true,
    board: {
      openCells:   [0, 1, 2, 3, 4, 5, 6, 7, 8],
      closedCells: [],
      avocadoCell: undefined
    },
    printState: function() {
      // console.log(this)
      if (game.won) {
        console.log("YOU WON!");
      } else {
        console.log(
          "-> Avocado: " + (game.avocadoCell === undefined ? "-" : game.avocadoCell),
          " (P: " + game.isPaused + ")",
          "\n   Open:    " + "[" + game.openCells + "]",
          "\n   Closed:  " + "[" + game.closedCells + "]"
        );
      }
    }
  };

  /* MODEL: Game Behavior ***********************************************/

  game.pickRandomOpenCell = function() {
    var randomIndex  = Math.floor(Math.random() * game.openCells.length);
    var splicedValue = game.openCells.splice(randomIndex, 1);
    return splicedValue[0];
  };

  game.moveTheAvocado = function() {
    var nextAvocadoCell = game.pickRandomOpenCell();

    if (game.avocadoCell !== undefined) game.openCells.push(game.avocadoCell);
    game.avocadoCell = nextAvocadoCell;

    game.playAudio(blipEl, 0);
  };

  game.mash = function(cellIndex) {
    if (cellIndex === game.avocadoCell) {
      game.closedCells.push(game.avocadoCell);
      game.avocadoCell = undefined;

      game.playAudio(swooshEl, 0);

      if (game.openCells.length === 0) game.isWon = true;
    }
  };

/* VIEW: Helper methods ***********************************************/

  game.playAudio = function(audioEl, startTime, playTime) {
    if (startTime !== undefined) audioEl.currentTime = startTime;

    audioEl.play();

    if (playTime) {
      setTimeout(function() {
        audioEl.pause();
      }, playTime);
    }
  };

  game.openWelcomeScreen = function() {
    $welcomeCover.show();
    game.renderAvocado(0);
    game.renderGuac(8);

    game.playAudio(songEl, 0, 3500);
  };

  game.openWinScreen = function() {
    $replayCover.show();

    $gamePanel.hide();
    $welcomePanel.show();

    game.playAudio(songEl, 0, 13000);
  };

  game.closeScreen = function() {
    $welcomeCover.hide();
    $replayCover.hide();

    $cells.eq(0).empty();
    $cells.eq(8).empty();

    $welcomePanel.hide();
    $gamePanel.show();

    songEl.pause();
  };

  game.renderAvocado = function(cellIndex) {
    $("<div>", {class: "avocado mole animated zoomIn"})
      .appendTo($cells.eq(cellIndex));
  };

  game.renderGuac = function(cellIndex) {
    $("<div>", {class: "guac mole animated zoomIn"})
      .appendTo($cells.eq(cellIndex));
  };

  game.removeMole = function(cellIndex) {
    var $mole = $cells.eq(cellIndex)
                      .children()
                      .removeClass("zoomIn")
                      .addClass("zoomOut");
    setTimeout(function() {
      $mole.remove();
    }, 500);
  };

  game.clearBoard = function() {
    $cells.empty();
  };

/* VIEW: RENDER *******************************************************/

  game.render = function() {
    // Render the board.
    $cells.each(function(i, c) {                  // c / $c === each cell ...
      var $c = $(c);                              //
      if ($c.children().hasClass("avocado")) {    // when there is an avocado
        if (game.closedCells.indexOf(i) !== -1) { //   if
          $c.children()                           //   it is IN the closed cells
            .removeClass("avocado")               //     then MASH IT UP!
            .addClass("guac");                    //   else if
        } else if (i !== game.avocadoCell) {      //   it is not the avocado
          game.removeMole(i);                     //     then fade out avocado
        }                                         // else if (no avocado and)
      } else if (i === game.avocadoCell) {        // this is the avocado in state
        game.renderAvocado(i);                    //   then fade in avocado
      }
    });

    // If game won, open the win screen!
    if (game.isWon && !game.isPaused) {
      game.openWinScreen();
      return;
    }

    // Add the right text to the toggle button.
    game.isPaused ? $toggleButton.text("Play") : $toggleButton.text("Pause");
  };

/* INTERACTION: User-initiated handlers *******************************/

  game.swing = function(evt) {
    // Get the last character from the cell's id:
    var index = parseInt($(evt.currentTarget).attr("id").slice(-1));

    if (!game.isPaused) {
      game.mash(index);
      game.render();
    }
  };

/* INTERACTION: Timer-initiated handlers ******************************/

  game.tick = function() {
    if (game.isWon) {
      game.pause();
    } else {
      game.moveTheAvocado();
      game.render(); // game.printState();
    };
  };

/* INTERACTION: Other gameplay functions ******************************/

  game.start = function() {
    clearInterval(game.timer);

    game.isWon       = false;
    game.openCells   = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    game.closedCells = [];
    game.avocadoCell = undefined;

    game.clearBoard();

    game.play();
  };

  game.play = function() {
    game.isPaused = false;
    game.tick(); // One time right away;
    game.timer = setInterval(game.tick, game.speed);
    game.render();
  };

  game.pause = function() {
    game.isPaused = true
    clearInterval(game.timer);
    game.render();
  };

  game.toggle = function() {
    game.isPaused ? game.play() : game.pause();
  }

/* STARTUP ************************************************************/

  var $cells,
      $gameContainer,
      $welcomeCover,
      $replayCover,
      $board,
      $welcomePanel,
      $gamePanel,
      $startButton,
      $toggleButton,
      $restartButton,
      songEl,
      blipEl,
      swooshEl;

  $(function() {
    // cache DOM references as jQuery objects
    $cells         = $("td");
    $gameContainer = $("#game-container");
    $welcomeCover  = $("#welcome-cover");
    $replayCover   = $("#replay-cover");
    $board         = $("#board");
    $welcomePanel  = $("#panel-welcome");
    $gamePanel     = $("#panel-game");
    $startButton   = $("#start");
    $toggleButton  = $("#toggle");
    $restartButton = $("#restart");

    // audio API not on jQuery
    songEl   = document.getElementById("song");
    blipEl   = document.getElementById("blip");
    swooshEl = document.getElementById("swoosh");

    game.$cells = $cells; // Make $cells available globally…

    $startButton.on("click", function(evt) {
      game.closeScreen();
      if (game.isPaused) game.start();
    });
    $toggleButton.on("click",  game.toggle);
    $restartButton.on("click", game.start);
    $cells.on("click",         game.swing);

    // Start the game!
    game.openWelcomeScreen();
  });
})();
