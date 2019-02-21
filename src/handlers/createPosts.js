const queryString = require('querystring');

const { verify } = require('jsonwebtoken');
const { parse } = require('cookie');
const { addPost } = require('../database/queries/addData');

const createPost = (request, response) => {
  let allData = '';
  request.on('data', (chunk) => {
    allData += chunk;
  });
  request.on('end', () => {
    const { jwt } = parse(request.headers.cookie);
    verify(jwt, process.env.SECRET, (err, JWT) => {
      if (err) return response.end(err);
      const userid = JWT.userId;
      const { description } = queryString.parse(allData);

      addPost(description, userid, (error, result) => {
        if (error) {
          response.end(JSON.stringify(error));
        } else {
          response.writeHead(302, { location: '/posts' });
          response.end();
        }
      });
    });
  });
};
module.exports = createPost;
