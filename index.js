var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 4000});

var io = require('socket.io')(server.listener);

io.on('connection', function (socket) {
  socket.emit('Oh hii!');
  socket.on('burp', function () {
    socket.emit('Excuse you!');
  })
});


server.start();
