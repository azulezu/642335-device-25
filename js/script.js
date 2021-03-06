// ------------------- меню ----------------------
var drop = document.querySelector(".drop-submenu");
var submenu = document.querySelector(".catalog-submenu");

drop.addEventListener("click", function(evt) {
  evt.preventDefault();
  submenu.classList.toggle("visually-hidden");
});

// ------------------- модальные окна ----------------------
var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";
var overlay = document.querySelector(".overlay");

var feedback = document.querySelector(".feedback");

if (feedback) {
  var feedback_link = document.querySelector(".feedback-link");

  var feedback_close = feedback.querySelector(".modal-close");
  var form = feedback.querySelector(".feedback-form");
  var login = feedback.querySelector("[name=feedback-name]");
  var email = feedback.querySelector("[name=feedback-email]");
  var text = feedback.querySelector("[name=feedback-text]");

  //  хранилище работает?
  try {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  // показать форму
  feedback_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    feedback.classList.add("modal-show");
    login.focus();
    // если есть запись в хранилище,
    // фокус на следующее поле
    if (storageLogin) {
      login.value = storageLogin;
      email.focus();
      if (storageEmail) {
        email.value = storageEmail;
        text.focus();
      }
    } else {
          login.focus();
    }

    //  проверка и отправка
    form.addEventListener("submit", function(evt) {
      //  если ввод с ошибкой
      if (!login.value || !email.value) {
        evt.preventDefault();
        //  переподключить дрожалку
        // https://css-tricks.com/restart-css-animation
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
      }  // все введено правильно
      else {
        if (isStorageSupport) {
          console.log("Запишу в хранилище " + login.value);
          localStorage.setItem("login", login.value);
          localStorage.setItem("email", email.value);
        }
        overlay.classList.remove("overlay-show");
      }
    });

  });

  //  скрыть по крестику
  feedback_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-error")) {
      feedback.classList.remove("modal-error");
    }
    feedback.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  });

  //  скрыть по эскейпу
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("modal-error")) {
        feedback.classList.remove("modal-error");
      }
      feedback.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  });
}

// --------------------------------------
var map = document.querySelector(".map");

if (map) {
  var map_close = map.querySelector(".modal-close");
  var map_link = document.querySelector(".map-link");

  // показать карту
  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    map.classList.add("modal-show");
  });

  //  скрыть по крестику
  map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  });

  //  скрыть по эскейпу
  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      map.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  });
}
