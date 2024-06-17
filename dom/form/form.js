const modal = document.querySelector(".modal-container");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const form = document.querySelector(".form");
const cards = document.querySelector(".cards");
const titleInput = document.querySelector("input");
const descInput = document.querySelector("textarea");
const card = () => {
  return `
   <div class="add-card">
              <button class="Add">Add Card</button>
              <form action="Modal">
                <label for="priority"></label>
                <select name="priority" id="priority">
                 <h1>${Low}</h1>
                  <p>${High}</p>
                  <p>${Medium}</p>
                </select>
                <input type"Submit" value="Submit">
              </form>
            </div>
            `;
};
const cardTemplate = () => {
  return `
    <div class="card">
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      <div class="remove-btn">
        X
      </div>
    </div>
  `;
};
openModalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});
add.addEventListener("click", () => {
  add.classList.remove("add");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value;
  const description = descInput.value;

  const card = cardTemplate(title, description);

  cards.innerHTML += card;

  modal.classList.remove("open");

  const deleteButtons = document.querySelectorAll(".remove-btn");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
  });
});
