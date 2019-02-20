
const queryString = require('querystring');
const handelServePages = require('./homeServe');
const addUser = require('./../database/queries/addData');

const handelSignUp = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    const { email, password, username } = queryString.parse(allData);
    console.log(queryString.parse(allData));
    addUser(email, password, username, (err) => {
      if (err) {
        return handelServePages(err, res);
      }
      res.writeHead(302, { location: '/' });
      res.end();
    });
  });
};
module.exports = handelSignUp;
