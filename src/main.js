const buttonMenuClose = document.querySelector(`.mobile-menu-btn`);
const menuBlock = document.querySelector(`.mobile-menu`);
const buttonMenuOpen = document.querySelector(`.menu-btn`);
buttonMenuOpen.addEventListener("click", function(e){
    menuBlock.classList.toggle("is-open");
}
)
buttonMenuClose.addEventListener("click", function(e){    menuBlock.classList.toggle("is-open");
}
)