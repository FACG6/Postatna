const bcrypt = require('bcrypt');
const connect = require('../db_connection');

const salt = bcrypt.genSaltSync(8);


const addUser = (userName, userEmail, userPassword, cb) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  const addNewUser = 'insert into users(username,email,password) values($1,$2,$3)'; const values = [userName, userEmail, hashPassword];
  connect.query(addNewUser, values, cb);
};

// addUser('ahmed', 'ahmed@hotmail', 'kannjhjh', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(null, res);
//   }
// });


module.exports = addUser;
