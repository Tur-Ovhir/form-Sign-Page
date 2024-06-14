const form = document.querySelector("form");
const titleInput = document.querySelector("input");
const descriptionInput = document.querySelector("textarea");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-container");
openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
const cardTemplate = (title, description) => {
  return `
 <div class="card"><div><h1>${title}</h1><p>${description}</p></div><div class="remove-btn">
 X
 </div></div>
 `;
};
const cards = document.querySelector(".cards");
State;
let data = [];
//  Set State
const setData = (arr) => {
  data = arr;
  render();
};
Render;
const render = () => {
  cards.innerHTML = "";
  data.forEach((item) => {
    cards.innerHTML += cardTemplate(item.title, item.description);
  });
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const newData = [
    ...data,
    {
      title: title,
      description: description,
    },
  ];
  setData(newData);
  modal.classList.remove("open");
});
render();
