const fs = require('fs');
const path = require('path');

const handelServerError = (response) => {
    response.writeHead(500, {
        'content-type': 'text/html'
    });
    response.end('<h1>Internal Server Error</h1>');
}

const handlePageNotFound = (request, response) => {
    const filepath = path.join(__dirname, '..', 'public', 'pages', 'notFound.html');
    fs.readFile(filepath, (error, file) => {
        if (error) {
            handelServerError(response);
        } else {
            response.writeHead(404, {
                'content-type': 'text/html'
            });
            response.end(file);
        };
    });
};

const handelServerError = (response) => {
    response.writeHead(500, {
        'content-type': 'text/html'
    });
    response.end('<h1>Internal Server Error</h1>');
}


module.exports = {
    handlePageNotFound,
    handelServerError,
}