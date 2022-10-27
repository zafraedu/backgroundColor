var body = document.querySelector("body");
var rojo = document.querySelector(".red");
var verde = document.querySelector(".green");
var azul = document.querySelector(".blue");
var amarillo = document.querySelector(".yellow");
var Magenta = document.querySelector(".magenta");
var naranja = document.querySelector(".orange");
var h1 = document.querySelector("h1");

rojo.addEventListener("click", red);
verde.addEventListener("click", green);
azul.addEventListener("click", blue);
amarillo.addEventListener("click", yellow);
Magenta.addEventListener("click", magenta);
naranja.addEventListener("click", orange);

function red() {
  body.classList.add("red-back");
  body.classList.remove("green-back");
  body.classList.remove("blue-back");
  body.classList.remove("yellow-back");
  body.classList.remove("magenta-back");
  body.classList.remove("orange-back");
  h1.innerHTML = "RED";
}
function green() {
  body.classList.add("green-back");
  body.classList.remove("red-back");
  body.classList.remove("blue-back");
  body.classList.remove("yellow-back");
  body.classList.remove("magenta-back");
  body.classList.remove("orange-back");
  h1.innerHTML = "GREEN";
}
function blue() {
  body.classList.add("blue-back");
  body.classList.remove("green-back");
  body.classList.remove("red-back");
  body.classList.remove("yellow-back");
  body.classList.remove("magenta-back");
  body.classList.remove("orange-back");
  h1.innerHTML = "BLUE";
}
function yellow() {
  body.classList.add("yellow-back");
  body.classList.remove("red-back");
  body.classList.remove("green-back");
  body.classList.remove("blue-back");
  body.classList.remove("magenta-back");
  body.classList.remove("orange-back");
  h1.innerHTML = "YELLOW";
}
function magenta() {
  body.classList.add("magenta-back");
  body.classList.remove("red-back");
  body.classList.remove("green-back");
  body.classList.remove("blue-back");
  body.classList.remove("yellow-back");
  body.classList.remove("orange-back");
  h1.innerHTML = "MAGENTA";
}
function orange() {
  body.classList.add("orange-back");
  body.classList.remove("red-back");
  body.classList.remove("green-back");
  body.classList.remove("blue-back");
  body.classList.remove("yellow-back");
  body.classList.remove("magenta-back");
  h1.innerHTML = "ORANGE";
}
