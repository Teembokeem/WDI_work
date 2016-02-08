(function(window) {
  console.log("ttt_model.js loaded!");

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
    turn:       0,
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

    if (game.isStarting()) game.mode = "playing";

    if (!game.isPlaying()) return;

    game.board[cellIndex] = player.value;
    game.lastMove = {
      player:    player,
      cellIndex: cellIndex
    };
    game.turnNumber++;
    // game.print();

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
    // console.log("Resetting game!");
    game.turn       = 0;
    game.turnNumber = 0;
    game.lastMove   = null;
    game.mode       = "starting";
    game.board      = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  };

  game.win = function(player, cells) {
    // console.log(player.name, "wins!");
    game.mode        = "won";
    game.winningMove = cells;
  };

  game.tie = function() {
    // console.log("It's a tie…");
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

  window.game = game;

})(window);
