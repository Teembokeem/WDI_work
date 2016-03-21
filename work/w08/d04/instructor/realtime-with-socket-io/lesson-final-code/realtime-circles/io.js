var io = require('socket.io')();

// object to hold player's initials as keys
var players = {};

io.on('connection', function (socket) {

    socket.on('register-player', function (data) {
      // assigning true is arbitrary, we just need to create a key
      players[data.initials] = true;
      socket.initials = data.initials;
      io.emit('update-player-list', Object.keys(players));
    });

    socket.on('add-circle', function (data) {
      io.emit('add-circle', data);
    });

    socket.on('clear-display', function () {
      io.emit('clear-display');
    });

    // when the player disconnects, remove key & notify clients
    socket.on('disconnect', function (data) {
      delete players[socket.initials];
      io.emit('update-player-list', Object.keys(players));
    });

});

module.exports = io;