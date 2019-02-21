const querystring = require('querystring');
const {
  sign,
} = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const {
  checkUserData,
} = require('./../database/queries/checkUser');

const handeLogin = (request, response) => {
  let allData = '';
  request.on('data', (chunk) => {
    allData += chunk;
  });
  request.on('end', () => {
    const {
      loginEmail,
      loginPass,
    } = querystring.parse(allData);

    checkUserData(loginEmail, loginPass, (err, res) => {
      if (err) {
        response.end(JSON.stringify(err));
      } else if (res.rows.length === 0) {
        response.end(JSON.stringify('Enter valid Email'));
      } else {
        const userDetails = {
          userId: res.rows[0].id,
          name: res.rows[0].username,
        };
        const cookie = sign(userDetails, process.env.SECRET);
        bcrypt.compare(loginPass, res.rows[0].password, (erro, result) => {
          if (erro) {
            response.end(JSON.stringify('Enter corret password'));
          } else {
            if (result === true) {
              response.writeHead(302, {
                location: '/posts',
                'Set-Cookie': `jwt=${cookie}; HttpOnly`,
              });
              response.end(
                JSON.stringify({
                  err: null,
                  result: JSON.stringify(res),
                }),
              );
            }
            response.writeHead(302, {
              location: '/',
            });
            response.end();
          }
        });
      }
    });
  });
};

const handlesignOut = (req, res) => {

};

module.exports = { handeLogin, handlesignOut };
