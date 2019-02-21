const signUphref = document.getElementById('gotosignup');
const sigupForm = document.querySelector('.signUpForm');
const signInForm = document.querySelector('.signInForm');

signUphref.addEventListener('click', () => {
  signInForm.style.display = 'none';
  sigupForm.style.display = 'block';
});
