
const queryString = require('querystring');

const login = (request, response) => {
  


  // write code here (query get user)

  // let allData = '';
  // request.on('data', (chunk) => {
  //   allData += chunk;
  // });
  // request.on('end', () => {
  //   const convertedData = queryString.parse(allData);
  //   response.writeHead(302, { location: '/', 'Set-Cookie': 'logged_in=true; HttpOnly' });
  //   response.end(JSON.parse(convertedData));
  // });
};

module.exports = login;
