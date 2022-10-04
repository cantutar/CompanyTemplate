"use strict";
exports.__esModule = true;
require("./style.css");
var Openbtn = document.getElementById("Open");
var Closebtn = document.getElementById("Close");
var Navbar = document.querySelector("#Navbar");
Openbtn.addEventListener("click", function () {
    Navbar.classList.remove("hidden");
});
Closebtn.addEventListener("click", function () {
    Navbar.classList.add("hidden");
});
// const Openbtn = document.getElementById("Open");
// const Closebtn = document.getElementById("Close");
// const Navbar = document.querySelector("#Navbar");
// Openbtn.addEventListener("click", () => {
//   Navbar.classList.remove("hidden");
// });
// Closebtn.addEventListener("click", () => {
//   Navbar.classList.add("hidden");
// });
