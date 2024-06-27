const startGameButton = document.getElementById('startGame') as HTMLButtonElement;
const gameBoard = document.getElementById('gameBoard') as HTMLDivElement;

startGameButton.addEventListener('click', startGame);

function startGame() {
    const cols = (document.getElementById('cols') as HTMLInputElement).valueAsNumber;
    const rows = (document.getElementById('rows') as HTMLInputElement).valueAsNumber;

    if (cols > 16 || rows > 9 || cols < 4 || rows < 4) {
        alert('Invalid grid dimensions.');
        return;
    }

    gameBoard.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    gameBoard.style.gridTemplateRows = `repeat(${rows}, 50px)`;
    gameBoard.innerHTML = '';

    createGrid(cols, rows);
}//

function createGrid(cols: number, rows: number) {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.column = col.toString();
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }
}

let currentPlayer = 1;

function handleCellClick(event: MouseEvent) {
    const cell = event.currentTarget as HTMLDivElement;
    const column = cell.dataset.column;

    const cellsInColumn = Array.from(gameBoard.children).filter(
        (child) => (child as HTMLDivElement).dataset.column === column
    );

    for (let i = cellsInColumn.length - 1; i >= 0; i--) {
        const cell = cellsInColumn[i] as HTMLDivElement;
        if (!cell.classList.contains('player1') && !cell.classList.contains('player2')) {
            cell.classList.add(`player${currentPlayer}`);
            if (checkWin(parseInt(column!), cellsInColumn.length - 1 - i)) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
            } else {
                currentPlayer = currentPlayer === 1 ? 2 : 1;
            }
            break;
        }
    }
}

function checkWin(col: number, row: number): boolean {
    // Implement win checking logic here
    return false;
}

function resetGame() {
    gameBoard.innerHTML = '';
    currentPlayer = 1;
}