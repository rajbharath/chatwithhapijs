var handlers = {};
handlers.hello =  function () {
  console.log('Hi Hello');
};

handlers.newMessage =  function (newMessage) {
  this.emit(newMessage);
};

module.exports  = handlers;
