const modal = document.querySelector(".modal");
const popupBtn = document.querySelector("#new-grid");
const closeBtn = document.querySelector(".close-button");
const createNew = document.querySelector("#create-new");
let gridContainer = document.querySelector("#grid-container");
let gridItem = "<div class='grid-item'></div>";

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

//random RGB color
function randomNumber(){
    let randomValue = Math.floor(Math.random() * 255);
    return randomValue;
}

//create initial grid
function generateInitialGrid(){
    let side = 4;
    let items = side * side;
    document.documentElement.style.setProperty("--side", side);
    for (i = 0; i < items; i++){
        gridContainer.innerHTML += gridItem;
        //set color
        let colorMe = document.querySelectorAll(".grid-item");
        colorMe.forEach(element => {          
            element.addEventListener("mouseenter", () => {
                element.style.setProperty("background-color", "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")");
            });
            element.addEventListener("mouseleave", () => {
                element.addEventListener("mouseenter", () => {
                    element.style.setProperty("background-color", "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")");
                });
            });
        });
    };
};        

window.addEventListener("load", () => {
    generateInitialGrid();
});

//create any grid
function generateAnyGrid(){
    let side = document.querySelector("input").value;
    let items = side * side;
    gridContainer.innerHTML = "";
    document.documentElement.style.setProperty("--side", side);
    for (i = 0; i < items; i++){
        gridContainer.innerHTML += gridItem;
        //set color
        let colorMe = document.querySelectorAll(".grid-item");
        colorMe.forEach(element => {
            //sets random color every time you mouseover
            element.addEventListener("mouseenter", () => {
                element.style.setProperty("background-color", "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")");
            });
            element.addEventListener("mouseleave", () => {
                element.addEventListener("mouseenter", () => {
                    element.style.setProperty("background-color", "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")");
                }); 
            });
        });
    };
}

createNew.addEventListener("click", () => {
    generateAnyGrid();
});






