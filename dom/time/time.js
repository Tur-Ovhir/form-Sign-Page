let count = 0;
const start = document.querySelector(".neg");
const too = document.querySelector(".too");
const hoyr = document.querySelector(".hoyr");
const gurav = document.querySelector(".gurav");
let id;
start.addEventListener("click", () => {
  id = setInterval(() => {
    too.textContent = count;
    count++;
  }, 1000);
});
hoyr.addEventListener("click", () => {
  clearInterval(id);
});
too.addEventListener("click", () => {
  clearInterval(too);
  id = clearInterval(() => {
    gurav = count;
    count = 0;
  }, 1000);
});
