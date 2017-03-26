var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var iso = parsedUrl.query.iso;
  var date = new Date(iso);
  
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (parsedUrl.pathname == '/api/parsetime') {
    var result = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds(),
    }
    res.end(JSON.stringify(result));
  } else if (parsedUrl.pathname == '/api/unixtime') {
    var result = {
      'unixtime': date.getTime(),
    }
    res.end(JSON.stringify(result));
  }
});

server.listen(port);