var Handlers = require('./handlers');


exports.register = function (server, options, next) {
  var io = require('socket.io')(server.select('chat').listener);

  io.on('connection', function (socket) {
    console.log('New connection!');

    socket.on('hello', Handlers.hello);
    socket.on('newMessage', Handlers.newMessage);
  });

  next();
};

exports.register.attributes = {
  name: 'hapi-chat'
};
