var drop=document.querySelector(".drop-submenu"),submenu=document.querySelector(".catalog-submenu");drop.addEventListener("click",function(e){e.preventDefault(),submenu.classList.toggle("visually-hidden")});var isStorageSupport=!0,storageLogin="",storageEmail="",overlay=document.querySelector(".overlay"),feedback=document.querySelector(".feedback");if(feedback){var feedback_link=document.querySelector(".feedback-link"),feedback_close=feedback.querySelector(".modal-close"),form=feedback.querySelector(".feedback-form"),login=feedback.querySelector("[name=feedback-name]"),email=feedback.querySelector("[name=feedback-email]"),text=feedback.querySelector("[name=feedback-text]");try{storageLogin=localStorage.getItem("login"),storageEmail=localStorage.getItem("email")}catch(e){isStorageSupport=!1}feedback_link.addEventListener("click",function(e){e.preventDefault(),overlay.classList.add("overlay-show"),feedback.classList.add("modal-show"),login.focus(),storageLogin?(login.value=storageLogin,email.focus(),storageEmail&&(email.value=storageEmail,text.focus())):login.focus(),form.addEventListener("submit",function(e){login.value&&email.value?(isStorageSupport&&(console.log("Запишу в хранилище "+login.value),localStorage.setItem("login",login.value),localStorage.setItem("email",email.value)),overlay.classList.remove("overlay-show")):(e.preventDefault(),feedback.classList.remove("modal-error"),feedback.offsetWidth=feedback.offsetWidth,feedback.classList.add("modal-error"))})}),feedback_close.addEventListener("click",function(e){e.preventDefault(),feedback.classList.contains("modal-error")&&feedback.classList.remove("modal-error"),feedback.classList.remove("modal-show"),overlay.classList.remove("overlay-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),feedback.classList.contains("modal-error")&&feedback.classList.remove("modal-error"),feedback.classList.remove("modal-show"),overlay.classList.remove("overlay-show"))})}var map=document.querySelector(".map");if(map){var map_close=map.querySelector(".modal-close"),map_link=document.querySelector(".map-link");map_link.addEventListener("click",function(e){e.preventDefault(),overlay.classList.add("overlay-show"),map.classList.add("modal-show")}),map_close.addEventListener("click",function(e){e.preventDefault(),map.classList.remove("modal-show"),overlay.classList.remove("overlay-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),map.classList.remove("modal-show"),overlay.classList.remove("overlay-show"))})}