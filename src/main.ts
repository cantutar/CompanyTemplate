import "./style.css";

const Openbtn = document.getElementById("Open")! as HTMLButtonElement;
const Closebtn = document.getElementById("Close")! as HTMLButtonElement;

const Navbar = document.querySelector("#Navbar")! as HTMLDivElement;

Openbtn.addEventListener("click", () => {
  Navbar.classList.remove("hidden");
});

Closebtn.addEventListener("click", () => {
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
