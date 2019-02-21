const {
  handelHome,
  handelServePages,
} = require('./handlers/homeServe');
const { handeLogin, handlesignOut } = require('./handlers/login');
const handleSignUp = require('./handlers/signUp');
const handleCreatePosts = require('./handlers/createPosts');
const handleDeletePost = require('./handlers/deletePost');
const {
  handlePosts,
  getDataPost,
} = require('./handlers/handlePosts');
const {
  handelPageNotFound,
} = require('./handlers/notFoundSrver');

const router = (request, response) => {
  const endpoint = request.url;
  const {
    method,
  } = request;

  if (endpoint === '/') {
    handelHome(request, response);
  } else if (endpoint.includes('/public/')) {
    handelServePages(request, response);
  } else if (endpoint === '/login' && method === 'POST') {
    handeLogin(request, response);
  } else if (endpoint === '/signUp' && method === 'POST') {
    handleSignUp(request, response);
  } else if (endpoint === '/createPosts' && method === 'POST') {
    handleCreatePosts(request, response);
  } else if (endpoint === '/deletePost' && method === 'POST') {
    handleDeletePost(request, response);
  } else if (endpoint === '/posts' && method === 'GET') {
    handlePosts(request, response);
  } else if (endpoint === '/getposts' && method === 'GET') {
    getDataPost(request, response);
  } else if (endpoint === '/signOut') {
    handlesignOut(request, response);
  } else {
    handelPageNotFound(request, response);
  }
};

module.exports = router;
