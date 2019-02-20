const dbConnection = require('../db_connection');

const deletePost = (postId, cb) => {
  const deleteQuery = 'DELETE FROM posts WHERE id = $1';
  const values = [postId];
  dbConnection.query(deleteQuery, values, cb);
};

// deletePost(2, (err, res) => {
//   if (err) return console.log(err);
//   return console.log(res);
// });

module.exports = deletePost;
