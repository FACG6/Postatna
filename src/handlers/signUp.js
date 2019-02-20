
const queryString = require('querystring');
const handelSignUp = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
    
  });
  req.on('end', () => {
    const convertedData = queryString.parse(allData);
   
      if (error) {
        res.writeHead(500, { 'content-type': 'text/html' });
        res.end('<h1>Server/Database Error</h1>');
      } else {
        res.writeHead(302, { location: '/' });
        res.end();
      }
    
  });
};
module.exports = handelSignUp;
