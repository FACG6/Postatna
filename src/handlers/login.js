const querystring = require('querystring');
const checkUserData = require('./../database/queries/checkUser');

const handeLogin = (request, response) => {
   let allData='';
   request.on('data', (chunkData) => {
      allData += chunkData;
    });
  request.on('end', () => {
    const convertedData = querystring.parse(allData);
    checkUserData(convertedData, (err) => {
      if (err) return handelServePages(err, response);
      response.writeHead(302, {
        'Location': '/',
      });
      response.end();
    });
  });
  // let allData = '';
  // return new Promise((resolve, reject) => {
  //   request.on('data', (chunkData) => {
  //     allData += chunkData;
  //   });
  //   request.on('end', () => {
  //     resolve(JSON.parse(allData));
  //     response.writeHead(302, { 'location':'/'});
  //     response.end();
  //   }).on('error', (error) => {
  //     reject(error.message);
  //   });
  // });
};

module.exports = handeLogin;
