const fs = require('fs');
const path = require('path');
const { handelServerError } = require('./notFoundSrver');
const { getPosts } = require('../database/queries/getData');

const getDataPost = (request, response) => {
  getPosts((err, posts) => {
    if (err) {
      handelServerError(response);
    } else {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify(posts));
    }
  });
};

const handlePosts = (req, res) => {
  const pathFile = path.join(__dirname, '..', '..', 'public', 'pages', 'posts.html');
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      handelServerError(res);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = { handlePosts, getDataPost };
