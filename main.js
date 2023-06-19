"use strict";

const logBtn = document.querySelector(".log-btn");
const singBtn = document.querySelector(".sing-btn");

const login = document.querySelector("#sing-up");
const singUp = document.querySelector("#login-box");

const overlay = document.querySelector(".overlay");

const closeLog = document.querySelector(".close-log");
const closeSing = document.querySelector(".close-sing");

const navBar = document.querySelector(".nav-link");

const singUpBtn = document.querySelector(".singup-btn");
const logInBtn = document.querySelector(".logn-btn");

function overlayVisible() {
  overlay.style.visibility = "visible";
  overlay.style.opacity = 1;
  overlay.style.transition = ".5s";
  navBar.style.visibility = "hidden";
}

function overlayHidder() {
  overlay.style.visibility = "hidden";
  overlay.style.opacity = 0;
  overlay.style.transition = ".5s";
  navBar.style.visibility = "visible";
}

function logHidden() {
  login.style.opacity = 0;
  login.style.visibility = "hidden";
  login.style.transition = ".5s";
}

function singHidden() {
  singUp.style.opacity = 0;
  singUp.style.visibility = "hidden";
  singUp.style.transition = ".5s";
}

logBtn.addEventListener("click", function () {
  login.style.visibility = "visible";
  login.style.opacity = 1;

  overlayVisible();
});

singBtn.addEventListener("click", function () {
  singUp.style.visibility = "visible";
  singUp.style.opacity = 1;

  overlayVisible();
});

closeLog.addEventListener("click", function () {
  logHidden();
  overlayHidder();
});

closeSing.addEventListener("click", function () {
  singHidden();
  overlayHidder();
});

overlay.addEventListener("click", function () {
  logHidden();
  singHidden();
  overlayHidder();
});

singUpBtn.addEventListener("click", function () {
  alert("Sign up Successful");
  singHidden();
  overlayHidder();
});

logInBtn.addEventListener("click", function () {
  alert("Login Successful");
  logHidden();
  overlayHidder();
});
