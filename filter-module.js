var fs = require('fs');
var path = require('path');

module.exports = function(directoryPath, extension, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filteredFiles = files.filter(f => path.extname(f).slice(1) === extension);
    callback(null, filteredFiles);
  });
}