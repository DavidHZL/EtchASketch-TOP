const container = document.getElementById("container");
const resetBtn = document.querySelector(".resetBtn");

var colorWell;
var defaultColor ="000000";
let currentColor;

window.addEventListener("load", startup, false);

function startup() {
    createGrid(16, 16);

    colorWell = document.querySelector(".colorWell");
    colorWell.value = defaultColor;
    currentColor = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    currentColor = event.target.value;
}

function updateAll(event) {
    currentColor = event.target.value;
}

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c= 0; c< (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).id = "gridItem";
    }
}

function changeGrid() {
    let gridValue = document.querySelector("#txtGridSize").value;

    gridValue = parseInt(gridValue);

    gridValue.textContent = "";

    container.innerHTML = "";
    createGrid(gridValue, gridValue);
}

function resetGrid() {
    container.innerHTML = "";
    createGrid(16, 16);
}

container.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = currentColor;
});
