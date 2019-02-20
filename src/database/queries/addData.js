const bcrypt = require('bcrypt');
const connect = require('../db_connection');

const salt = bcrypt.genSaltSync(8);


const addUser = (userName, userEmail, userPassword, cb) => {
  const hashPassword = bcrypt.hashSync(userPassword, salt);
  const addNewUser = 'insert into users(username,email,password) values($1,$2,$3)';
  const values = [userName, userEmail, hashPassword];
  connect.query(addNewUser, values, cb);
};

const addPost = (description, userid, cb) => {
  const date = new Date().toString().split('GMT+0200')[0];
  const addPostQuery = 'INSERT INTO posts  ( description , postdate , user_id ) values ( $1,$2,$3)';
  const values = [description, date, userid];
  connect.query(addPostQuery, values, cb);
};

// addPost('fjkhf', 1, (err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// });

// addUser('ahmed', 'ahmed@hotmail', 'kannjhjh', (err, res) => {
//   if (err) return (err);
//   return (null, res);
// });

module.exports = { addUser, addPost };
