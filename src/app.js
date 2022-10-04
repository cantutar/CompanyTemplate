"use strict";
const Openbtn = document.getElementById("Open");
const Closebtn = document.getElementById("Close");
const Navbar = document.querySelector("#Navbar");
Openbtn.addEventListener("click", () => {
    Navbar.classList.remove("hidden");
});
Closebtn.addEventListener("click", () => {
    Navbar.classList.add("hidden");
});
