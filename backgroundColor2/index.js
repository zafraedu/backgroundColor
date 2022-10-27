"use strict";
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  const colorPicker = document.querySelector("#colorPicker").value;
  const hex = document.querySelector("#hex");
  hex.innerHTML = colorPicker;
  document.body.style.backgroundColor = colorPicker;
});
