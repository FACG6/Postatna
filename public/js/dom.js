const email = document.querySelectorAll('#email');
const pass = document.querySelectorAll('#password');
const loginBtn = document.querySelectorAll('#login-btn');

pass.addEventListener('click', (e) => {
  e.preventDefault();
  const userData = JSON.stringify({
    email: email.value,
    password: password.value,
  });
console.log(userData);
  // fetch('/login', 'POST', userData, cb)
});

