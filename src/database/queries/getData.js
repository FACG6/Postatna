const dbConection = require('../db_connection');

const getUser = (cb) => {
  const sqlquery = 'select id,username, email,password from users';
  dbConection.query(sqlquery, cb);
};

const getPosts = (cb) => {
  const sqlquery = 'select *  from posts join users ON users.id = posts.user_id ;';
  dbConection.query(sqlquery, cb);
};

module.exports = {
  getUser,
  getPosts,
};
