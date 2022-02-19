const DEFAULT_SIZE = 16;

let size = DEFAULT_SIZE;

const grid = document.getElementById("grid");
const gridSquare = document.createElement("div");
gridSquare.setAttribute("class", "gridSquare");
const newGridBtn = document.getElementById("newGrid");

let mouseDown = false;
window.addEventListener("mousedown", () => mouseDown = true);
window.addEventListener("mouseup", () => mouseDown = false);

newGridBtn.addEventListener("click", () => {
    size = window.prompt("enter number 1-100");
    if (size < 1 || size > 100) {
        window.alert("The number is not valid.");
        size = DEFAULT_SIZE;
    }
    clearGrid(); 
    newGrid(size);
});

function squareSize(size){
    return ("calc(100% / " + size + " - 1px)");
}

function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

function newGrid(size){
    for (let i = 0; i < (size * size); i++){
        gridSquare.style.width = squareSize(size);
        grid.appendChild(gridSquare.cloneNode(true));
    }
    draw();
}

function draw(){
    let squares = grid.querySelectorAll("div");
    squares.forEach(square => {   
        square.addEventListener("mousemove", (e) => {
            if (mouseDown){
                e.target.style.backgroundColor = "transparent";
            }
        });
    });
}

window.onload(newGrid(size));