// console.log('Client side javascript file is loaded!')

// const resetButton = document.getElementsByClassName(".reset-animation");


// resetButton.addEventListener("click", () => {
//   maskedImage.classList.remove("mask-animation");
//   setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
// });

function myfun(){
  var maskedImage = document.querySelector('.color-image');
  maskedImage.classList.toggle("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100); 
}