const box = document.querySelector(".buttons h1");
const [minusButton, plusButton] = document.querySelectorAll(".buttons button");
console.log(box.textContent);
let num = 0;
box.textContent = num;
minusButton.addEventListener("click", () => {
  num--;
  box.textContent = num;
});
plusButton.addEventListener("click", () => {
  num++;
  box.textContent = num;
});

// const box = document.getElementsByClassName("box")[0];
// box.addEventListener("click", () => {
//   if (box.style.backgroundColor === "red") {
//     box.style.backgroundColor = "#181818";
//   } else {
//     box.style.backgroundColor = "red";
//   }
// });
