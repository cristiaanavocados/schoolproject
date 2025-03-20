var fs = require('fs');
var path = require('path');

function readFiles() {
  var data = {};
  fs.readdirSync(path.join(__dirname, 'files/').replace(/\\/, '/')).forEach(function (file) {
    if (file === 'index.html' || file === 'node_modules') return;
    data[file] = new Map();
    data[file].set('content', fs.readFileSync(path.join(__dirname, 'files/', file).replace(/\\/, '/')));
  });
  return data;
}

module.exports = readFiles;
