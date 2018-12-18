// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

// Game Dependencies
var player = require('./game_modules/player.js');

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));
// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/static/index.html'));
});
// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});


// Add the WebSocket handlers
io.on('connection', function(socket) {
});

io.on('connection', function(socket) {
  socket.on('new player', function() {
    player.new(socket);
  });
  socket.on('movement', function(data) {
    player.move(data, socket);
  });
});
