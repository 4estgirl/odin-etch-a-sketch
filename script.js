const modal = document.querySelector(".modal");
const popupBtn = document.querySelector("#new-grid");
const closeBtn = document.querySelector(".close-button");
let gridContainer = document.querySelector("#grid-container");
//let gridItem = document.querySelector(".grid-item");

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

//create grid
let side = 4;
let items = side * side;
function generateGrid(){
    document.documentElement.style.setProperty("--side", side);
    for (i = 0; i < items; i++){
        gridContainer.innerHTML += "<div class='grid-item'></div>";
    };
}

window.addEventListener("load", () => {
    generateGrid();
});
