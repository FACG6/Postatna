const dbconnection = require('../db_connection');

const checkUserData = (email, password, cb) => {
  const sqlQuery = 'SELECT * FROM users WHERE email=$1';
  const values = [email];
  dbconnection.query(sqlQuery, values, cb);
};

module.exports = {
  checkUserData,
};
