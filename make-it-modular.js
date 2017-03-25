var getFilteredFiles = require('./filter-module');

const directoryPath = process.argv[2];
const extension = process.argv[3];

getFilteredFiles(directoryPath, extension, (err, files) => {
  if (err) {
    return console.error(err);
  }
  
  files.map(file => console.log(file));
});