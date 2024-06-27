addEventListener("load", loadHandeler);
function loadHandeler(_event) {
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
}
function startGame(_event) {
    var cols = document.getElementById('cols').valueAsNumber;
    var rows = document.getElementById('rows').valueAsNumber;
    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }
    drawGrid(cols, rows);
    console.log("Rows: " + rows);
}
function drawGrid(cols, rows) {
    var board = document.getElementById("board");
    board.style.gridTemplateColumns = "repeat(".concat(cols, ", 50px)");
    board.style.gridTemplateRows = "repeat(".concat(rows, ", 50px)");
    board.innerHTML = '';
    for (var c = 0; c < cols; c++) {
        for (var r = 0; r < rows; r++) {
            var cell = document.createElement("div");
            board.appendChild(cell);
            cell.id = "cell";
            console.log(r);
        }
    }
}
