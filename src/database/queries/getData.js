const dbConection = require('../db_connection');

const getUser = (cb) => {
  const sqlquery = 'select id,username, email,password from users';
  dbConection.query(sqlquery, cb);
};

const getPosts = (cb) => {
  const sqlquery = 'select id,description,postdate,user_id from posts';
  dbConection.query(sqlquery, cb);
};

// getUser((err, res) => {
//   if (err) return (err);

//   console.log((null, res.rows));

// });

// getPosts((err, res) => {
//   if (err) return (err);
//   return (null, res.rows);
// });

module.exports = {
  getUser,
  getPosts,
};
