const {
  handelHome,
  handelServePages,
} = require('./handlers/homeServe');
const handeLogin = require('./handlers/login');
const handleSignUp = require('./handlers/signUp');
const handleCreatePosts = require('./handlers/createPosts');
const handleDeletePost = require('./handlers/deletePost');
const {
  handelPageNotFound,
} = require('./handlers/notFoundSrver');

const router = (request, response) => {
  const endpoint = request.url;
  const { method } = request;

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
  } else {
    handelPageNotFound(request, response);
  }
};

module.exports = router;
