const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const mainBlock = document.querySelector(".main-block");
burger.addEventListener("click", function () {
  burger.classList.toggle("burger-rotate");
  menu.classList.toggle("visible");
  mainBlock.classList.toggle("vertical-padding-main");
});
