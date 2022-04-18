const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-rotate");
  menu.classList.toggle("visible");
});
