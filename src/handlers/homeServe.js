const fs = require('fs');
const path = require('path');
const { handelServerError } = require('./notFoundSrver');

const handelHome = (req, res) => {
  const pathFile = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      handelServerError(res);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = { handelHome };
