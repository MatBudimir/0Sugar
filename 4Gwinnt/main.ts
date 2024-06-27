let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startGame");

startButton.addEventListener("click", startGame);

function startGame(_event: MouseEvent){
    let cols:number = (document.getElementById('cols') as HTMLInputElement).valueAsNumber;
    let rows:number = (document.getElementById('rows') as HTMLInputElement).valueAsNumber;

    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }

    console.log("Cols: " + cols);
    console.log("Rows: " + rows);
}