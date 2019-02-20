const connect = require('../db_connection');

const addUser = (userName, userEmail, userPassword, cb) => {
  const addNewUser = 'insert into users(username,email,password) values($1,$2,$3)'; const values = [userName, userEmail, userPassword];
  connect.query(addNewUser, values, cb);
};
// adduser('ahmed', 'ahmed@hotmail', 'kannjhjh', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(null, res);
//   }
// });


module.exports = addUser;
