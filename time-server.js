var net = require('net');
var strftime = require('strftime');

var server = net.createServer((socket) => {
  var now = strftime('%Y-%m-%d %H:%M\n', new Date());
  socket.end(now);
})

server.listen(process.argv[2]);
