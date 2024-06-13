const header = document.querySelector(".body > div> header");
const back = document.querySelector(".body > div > back");
const next = document.querySelector(".body > div > next");

header.addEventListener("click", () => {
  let num = 0;
  next++;
  back--;
  header = num;
});

back.addEventListener("click", () => {
  let num = 0;
  next--;
  back++;
  header = num;
});

console.log();
