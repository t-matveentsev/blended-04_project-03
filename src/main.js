const buttonMenuClose = document.querySelector(`.close-menu-btn`);
const menuBlock = document.querySelector(`.mobile-menu`);
const buttonMenuOpen = document.querySelector(`.open-menu-btn`);
const buttonMenuOpenTab = document.querySelector(`.open-menu-btn-tab`);
buttonMenuOpen.addEventListener("click", function (e) {
  menuBlock.classList.toggle("is-open");
});
buttonMenuOpenTab.addEventListener("click", function (e) {
  menuBlock.classList.toggle("is-open");
});
buttonMenuClose.addEventListener("click", function (e) {
  menuBlock.classList.toggle("is-open");
});