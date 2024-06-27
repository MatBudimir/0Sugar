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
    let cell = document.createElement("div");
    let board = document.getElementById("board");
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            board === null || board === void 0 ? void 0 : board.appendChild(cell);
        }
    }
}
