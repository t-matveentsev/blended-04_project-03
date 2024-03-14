// const buttonMenuClose = document.querySelector(`.close-menu-btn`);
// const menuBlock = document.querySelector(`.mobile-menu`);
// const buttonMenuOpen = document.querySelector(`.open-menu-btn`);
// const buttonMenuOpenTab = document.querySelector(`.open-menu-btn-tab`);
// buttonMenuOpen.addEventListener("click", function (e) {
//   menuBlock.classList.toggle("is-open");
// });
// buttonMenuOpenTab.addEventListener("click", function (e) {
//   menuBlock.classList.toggle("is-open");
// });
// buttonMenuClose.addEventListener("click", function (e) {
//   menuBlock.classList.toggle("is-open");
// });


const buttonMenuClose = document.querySelector(`.close-menu-btn`);
const menuBlock = document.querySelector(`.mobile-menu`);
const buttonMenuOpen = document.querySelector(`.open-menu-btn`);
const buttonMenuOpenTab = document.querySelector(`.open-menu-btn-tab`);

const closeMenu = document.querySelector(`.about-section`, `.running`)

const listenFoo = () => {
  menuBlock.classList.toggle("is-open")
};
buttonMenuOpen.addEventListener("click", listenFoo);
buttonMenuOpenTab.addEventListener("click", listenFoo);
buttonMenuClose.addEventListener("click", listenFoo);

closeMenu.addEventListener("click", listenFoo)
