let startButton: HTMLElement = <HTMLElement>document.getElementById("startGame");

startButton?.addEventListener("click", startGame);

function startGame(){
    let gridCols: HTMLInputElement = <HTMLInputElement>document.getElementById("cols");
    let gridRows: HTMLInputElement = <HTMLInputElement>document.getElementById("rows");

    gridCols.innerHTML
}