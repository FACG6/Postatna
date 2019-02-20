const bcrypt = require('bcrypt');
const connection = require('../db_connection');

const checkUserData = (userData, callback) => {
  connection.query('SELECT * FROM users WHERE email=$1', [userData.email], (err, res) => {
    if (err) {
      callback(err);
    } else if (!res.rows[0]) {
      callback('Check your email')
    } else {
      bcrypt.compare(userData.password, res.rows[0].password, cb => {
        if (error) {
           cb('Check your password');
        } else {
          cb(null, res.rows[0]);
        } 
      });
    }
  });
}

module.exports = checkUserData;