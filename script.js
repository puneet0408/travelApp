// for search btn-------------------------------------------------
let searchBtn = document.getElementById("search");
let searchBar = document.querySelector(".search-bar-container");

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

//  // for login ---------------------------------------

let loginBtn = document.getElementById("user");
let loginForm = document.querySelector(".login-form");
loginBtn.addEventListener("click", () => {
  loginForm.classList.toggle("login");
});

let closeForm = document
  .getElementById("form-close")
  .addEventListener("click", () => {
    loginForm.classList.remove("login");
  });

// for menu bar -------------------------

let menuBtn = document.getElementById("menu-bar");
let nav = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  nav.classList.toggle("navigation");
});

// removing searchbar while scrolling ----------

window.onscroll = () => {
  // searchBtn.classList.remove('fa-times');
  // searchBar.classList.remove('active');
  menuBtn.classList.remove("fa-times");
  nav.classList.remove("navigation");
  // loginForm.classList.remove('login');
};

// ---------------------- vedio btn -------------------

let videoBtn = document.querySelectorAll(".vid-btn");
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
