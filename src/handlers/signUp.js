
const queryString = require('querystring');
const { addUser } = require('../database/queries/addData');

// const { sign } = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

require('dotenv').config();

const handelSignUp = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    const { username, email, password } = queryString.parse(allData);
    addUser(username, email, password, (err) => {
      if (err) {
        console.log(err);

        res.end(JSON.stringify(err));
      }
      res.writeHead(302, {
        location: '/posts',
      });
      res.end();
    });
  });
};
module.exports = handelSignUp;
