// ------------------- меню ----------------------
var drop = document.querySelector(".drop-submenu");
var submenu = document.querySelector(".catalog-submenu");

drop.addEventListener("click", function(evt) {
  evt.preventDefault();
  submenu.classList.toggle("visually-hidden");
});

