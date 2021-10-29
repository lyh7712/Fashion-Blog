const optionForm = document.querySelector("#option-form");
const numberScope = document.querySelector("#option-form input");
const guessInput = document.querySelector("#guess-form input");
const guessBtn = document.querySelector("#guess-form button");
const me = document.querySelector(".me");
const bot = document.querySelector(".bot");
const result = document.querySelector(".result");

function setScopeNumber(event) {
    event.preventDefault();

    return numberScope.value;
}

function handlePlayBtn(event) {
    event.preventDefault();

    const scope = numberScope.value;
    const guessNumber = Math.ceil(guessInput.value);
    const randomNumber = Math.floor(Math.random() * scope);

    if (guessNumber > scope || guessNumber < 0) {
        alert(`Your number is over the scope(0 ~ ${scope})`);
    } else {
        result.classList.remove("hidden");

        me.innerText = `Me chose: ${guessNumber}, `;
        bot.innerText = `the Bot chose: ${randomNumber}`;

        if (guessNumber === randomNumber) {
            result.innerText = `You Won!`;
        } else {
            result.innerText = `You lost!`;
        }
    }
}

optionForm.addEventListener("submit", setScopeNumber);
guessBtn.addEventListener("click", handlePlayBtn);
