const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
    event.preventDefault();

    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.innerText = `Hello ${userName}`;

    if (localStorage.getItem("username") === undefined) {
        localStorage.setItem("username", userName);
    } else {
        // form을 지우고 user를 보여준다.
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);
