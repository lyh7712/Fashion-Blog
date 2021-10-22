const title = document.querySelector("div.hello h1");

function handleClick() {
    const clickedClass = "clicked";
    
    title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleClick);
