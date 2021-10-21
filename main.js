const title = document.querySelector(".hello h1");

console.log(title);

function handleClickEvent() {
    console.log("clicked title");
    title.style.color = "red";
}

function handleMouseEnter() {
    title.innerHTML = "mouse is here";
}

function handleMouseLeave() {
    title.innerHTML = "mouse is gone";
}

title.addEventListener("click", handleClickEvent);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
