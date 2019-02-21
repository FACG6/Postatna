const dbConnection = require('../db_connection');

const deletePost = (postId, cb) => {
  const deleteQuery = 'DELETE FROM posts WHERE id = $1';
  const values = [postId];
  dbConnection.query(deleteQuery, values, cb);
};


module.exports = deletePost;
