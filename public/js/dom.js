const login = document.getElementById('login');
const email = document.getElementById('email');
const pass = document.getElementById('password');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const userData = JSON.stringify({
    email: email.value,
    password: password.value,
  });
  fetch('/login', 'POST', userData)
});

