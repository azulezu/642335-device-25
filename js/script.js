// ------------------- меню ----------------------
var drop = document.querySelector(".drop-submenu");
var submenu = document.querySelector(".catalog-submenu");

drop.addEventListener("click", function(evt) {
  evt.preventDefault();
  submenu.classList.toggle("visually-hidden");
});

// ------------------- модальные окна ----------------------

var feedback = document.querySelector(".feedback");
var feedback_close = feedback.querySelector(".modal-close");
var feedback_link = document.querySelector(".feedback-link");

// показать форму
feedback_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
});

//  скрыть по крестику
feedback_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
});

//  скрыть по эскейпу
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("modal-show")) {
        feedback.classList.remove("modal-show");
      }
    }
  });

// ----

var map = document.querySelector(".map");
var map_close = map.querySelector(".modal-close");
var map_link = document.querySelector(".map-link");

// показать форму
map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

//  скрыть по крестику
map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

//  скрыть по эскейпу
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");
      }
    }
  });
