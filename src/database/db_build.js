const fs = require('fs');
const path = require('path');
const connection = require('./db_connection');

const rebuildData = () => {
  const filepathSQL = path.join(__dirname, 'db_build.sql');
  const sql = fs.readFileSync(filepathSQL).toString();
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log('The result', result);
      connection.end(() => {
        console.log('connection closed');
      });
    }
  });
};
rebuildData();

module.exports = rebuildData;
