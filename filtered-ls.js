var fs = require('fs');
var path = require('path')

const directoryPath = process.argv[2];
const extension = process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  filteredFiles = files.filter(f => path.extname(f).slice(1) === extension);
  filteredFiles.map(file => console.log(file));
});