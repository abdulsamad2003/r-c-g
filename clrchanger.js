"strict";
//  js for simple color changing

const colors = ["green", "blue", "pink", "#ff8000"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const mainSection = document.getElementById("main-section");

btn.addEventListener("click", () => {
  //   // get random number between 0 and 3
  const randomNumber = getRandomNumber();

  //   console.log(randomNumber);

  mainSection.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// for getting random number

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// js for hex color changing

const hexColors = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
const hexBtn = document.getElementById("hex-btn");
const hexrandomColor = document.querySelector(".hex-color");
const hexSection = document.getElementById("hex-section");

hexBtn.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hexColors[getRandomHexNo()];
  }
  hexrandomColor.textContent = hexColor;
  hexSection.style.backgroundColor = hexColor;
});
function getRandomHexNo() {
  return Math.floor(Math.random() * hexColors.length);
}
