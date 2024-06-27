var startButton = document.getElementById("startGame");
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", startGame);
function startGame() {
    var cols = document.getElementById('cols').valueAsNumber;
    var rows = document.getElementById('rows').valueAsNumber;
    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }
    console.log("Cols: " + cols);
    console.log("Rows: " + rows);
}
