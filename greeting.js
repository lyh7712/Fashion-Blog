const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleLoginSubmit(event) {
  event.preventDefault();

  const userName = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);

  localStorage.setItem(USERNAME_KEY, userName);

  handleGreetings(userName);
}

const handleGreetings = (userName) => {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  handleGreetings(savedUserName);
}
