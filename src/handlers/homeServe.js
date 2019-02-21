const fs = require('fs');
const path = require('path');

const handelHome = (req, res) => {
  const pathFile = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      res.writeHead(500, {
        'content-type': 'text/html',
      });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};


const handelServePages = (req, res) => {
  const endpoint = req.url;
  const conteType = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    json: 'application/json',
  };
  const extention = path.extname(endpoint).split('.')[1];
  const filesPath = path.join(__dirname, '..', '..', ...endpoint.split('/'));

  fs.readFile(filesPath, (err, file) => {
    if (err) {
      res.writeHead(500, {
        'content-type': 'text/html',
      });
      res.end('<h1>Internal Server Error</h1>');
    }
    res.writeHead(200, {
      'content-type': conteType[extention],
    });
    res.end(file);
  });
};

module.exports = {
  handelHome,
  handelServePages,
};
