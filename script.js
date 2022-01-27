const modal = document.querySelector(".modal");
const popupBtn = document.querySelector("#new-grid");
const closeBtn = document.querySelector(".close-button");
const createNew = document.querySelector("#create-new");
let gridContainer = document.querySelector("#grid-container");
let gridItem = document.querySelector(".grid-item");

//Toggle Modal
function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
}
popupBtn.addEventListener("click", ()=> {
    toggleModal();
});
closeBtn.addEventListener("click", () => {
    toggleModal();
});

//create initial grid
function generateInitialGrid(){
    let side = 4;
    let items = side * side;
    document.documentElement.style.setProperty("--side", side);
    for (i = 0; i < items; i++){
        gridContainer.innerHTML += "<div class='grid-item'></div>";
    };
}

window.addEventListener("load", () => {
    generateInitialGrid();
});

//create any grid
function generateAnyGrid(){
    let side = document.querySelector("input").value;
    let items = side * side;
    document.documentElement.style.setProperty("--side", side);
    for (i = 0; i < items; i++){
        gridContainer.innerHTML += "<div class='grid-item'></div>";
    };
}

createNew.addEventListener("click", () => {
    generateAnyGrid();
});