var fs = require('fs');

fs.readFile(process.argv[2], (err, buffer) => {
  var count = buffer.toString().split('\n').length - 1;
  console.log(count);
});