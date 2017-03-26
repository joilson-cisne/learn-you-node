var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer((req, res) => {
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(port);

