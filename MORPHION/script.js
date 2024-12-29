

// script.js
const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restart');
const statusText = document.getElementById('status');

let currentPlayer = 'x';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            gameActive = false;
            setTimeout(() => statusText.textContent = `Le joueur ${currentPlayer.toUpperCase()} a gagné!`, 100);
            return true;
        }
    }

    if (!boardState.includes('')) {
        gameActive = false;
        setTimeout(() => statusText.textContent = "Match nul!", 100);
    }

    return false;
};

const handleCellClick = (e) => {
    const index = [...cells].indexOf(e.target);

    if (boardState[index] || !gameActive) return;

    boardState[index] = currentPlayer;
    e.target.classList.add(currentPlayer);

    if (!checkWinner()) {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        statusText.textContent = `Au tour du joueur ${currentPlayer.toUpperCase()}`;
    }
};

const restartGame = () => {
    gameActive = true;
    currentPlayer = 'x';
    boardState = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.textContent = ''; // Clear text content
    });
    statusText.textContent = `Au tour du joueur ${currentPlayer.toUpperCase()}`;
};

cells.forEach((cell, index) => {
    cell.addEventListener('click', (e) => {
        if (!gameActive || boardState[index]) return;

        boardState[index] = currentPlayer;
        e.target.classList.add(currentPlayer);
        e.target.textContent = currentPlayer.toUpperCase(); // Display X or O

        if (!checkWinner()) {
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            statusText.textContent = `Au tour du joueur ${currentPlayer.toUpperCase()}`;
        }
    });
});

restartButton.addEventListener('click', restartGame);
