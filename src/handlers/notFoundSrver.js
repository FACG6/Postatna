const fs = require('fs');
const path = require('path');

const handelServerError = (response) => {
  response.writeHead(500, {
    'content-type': 'text/html',
  });
  response.end('<h1>Internal Server Error</h1>');
};

const handelPageNotFound = (request, response) => {
  const filepath = path.join(__dirname, '..', 'public', 'pages', 'notFound.html');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      handelServerError(response);
    } else {
      response.writeHead(200, {
        'content-type': 'text/html',
      });
      response.end(file);
    }
  });
};


module.exports = {
  handelPageNotFound,
  handelServerError,
};
