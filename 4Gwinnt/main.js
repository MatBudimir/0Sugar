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
    console.log("Cols: " + cols);
    console.log("Rows: " + rows);
}
