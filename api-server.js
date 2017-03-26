var http = require('http');
var url = require('url');

var port = process.argv[2];

function parsetime(date) {
  return {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds(),
  };
}

function unixtime(date) {
  return {
      'unixtime': date.getTime(),
    };
}

var server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var iso = parsedUrl.query.iso;
  var date = new Date(iso);
  var result;
  
  if (parsedUrl.pathname == '/api/parsetime') {
    result = parsetime(date);
  } else if (parsedUrl.pathname == '/api/unixtime') {
    result = unixtime(date);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);