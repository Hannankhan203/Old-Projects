const body = document.querySelector("body");
const themeCheckbox = document.querySelector("#theme-checkbox");
const check = document.querySelector(".check");
const botn = document.querySelector(".botn");

body.classList.add("light-mode");
check.classList.add("light-mode");
botn.classList.add("light-mode");

function toggle() {
  check.classList.toggle("dark-mode");
  botn.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
}

themeCheckbox.addEventListener("click", toggle);
