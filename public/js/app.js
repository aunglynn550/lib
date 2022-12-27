// console.log('Client side javascript file is loaded!')

// function myfun(){
// var resetButton = document.querySelector(".reset-animation");
// const maskedImage = document.querySelector(".color-image");

// resetButton.addEventListener("click", () => {
//   maskedImage.classList.remove("mask-animation");
//   setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
// });
// }

const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");

resetButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
})
// function myfun(){
//   var maskedImage = document.querySelector('.color-image');
//   maskedImage.classList.toggle("mask-animation");
//   setTimeout(() => maskedImage.classList.add("mask-animation"), 100); 
// }