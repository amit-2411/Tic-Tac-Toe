const board = document.getElementById("board");
const cells = document.querySelectorAll("[data-cell]");
const winnerMessage = document.getElementById("winner");

let currentPlayer = "";
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            gameActive = false;
            winnerMessage.textContent = `Player ${currentPlayer} wins!`;
        }
    }
};

const handleCellClick = (e) => {
    const cell = e.target;
    if (cell.textContent || !gameActive) return;
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
};

cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});