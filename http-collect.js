var http = require('http');

var url = process.argv[2];

// solution 1
// http.get(url, (response) => {
//   var result = '';

//   response.setEncoding('utf8');
//   response.on('data', data => {
//     result += data;
//   });
//   response.on('end', () => {
//     console.log(result.length);
//     console.log(result);
//   });
//   response.on('error', console.error);
// }).on('error', console.error);

// solution 2
var bl = require('bl');

http.get(url, response => {
  response.pipe(bl((err, data) => {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});