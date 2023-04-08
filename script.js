const theme = document.getElementById("theme-switch");

let active_theme = "light";


//changes theme dark to light and vice versa
theme.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
    if(active_theme == "light"){
        theme.src="./images/icon-moon.svg"
        active_theme = "dark"
    } else {
        theme.src="./images/icon-sun.svg"
        active_theme = "light"
    }
})
