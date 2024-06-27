"use strict";
addEventListener("load", loadHandeler);
function loadHandeler(_event) {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
}
function startGame(_event) {
    let cols = document.getElementById('cols').valueAsNumber;
    let rows = document.getElementById('rows').valueAsNumber;
    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }
    drawGrid(cols, rows);
    console.log("Rows: " + rows);
}
function drawGrid(cols, rows) {
    let board = document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    board.style.gridTemplateRows = `repeat(${rows}, 50px)`;
    board.innerHTML = '';
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let cell = document.createElement("div");
            board.appendChild(cell);
            cell.id = "cell";
            console.log(r);
        }
    }
}
