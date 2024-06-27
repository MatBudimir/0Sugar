addEventListener("load", loadHandeler);

function loadHandeler(_event: Event) {
    let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");

    startButton.addEventListener("click", startGame);
}



function startGame(_event: MouseEvent) {
    let cols: number = (document.getElementById('cols') as HTMLInputElement).valueAsNumber;
    let rows: number = (document.getElementById('rows') as HTMLInputElement).valueAsNumber;

    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }

    drawGrid(cols, rows);
    console.log("Rows: " + rows);
}

function drawGrid(cols: number, rows: number) {

    let board: HTMLDivElement = <HTMLDivElement>document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    board.style.gridTemplateRows = `repeat(${rows}, 50px)`;
    board.innerHTML = '';

    

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let cell: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            board.appendChild(cell);
            cell.id = "cell"
            console.log(r);
        }
    }

}