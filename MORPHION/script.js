const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const restartButton = document.getElementById('restart');
const statusText = document.getElementById('status');

let currentPlayer = 'x';  // Le joueur X commence
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];  // Tableau pour garder l'état du jeu

// Vérifie s'il y a un gagnant
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

// Gestion du clic sur une case
const handleCellClick = (e) => {
    const index = [...cells].indexOf(e.target);

    if (boardState[index] || !gameActive) return;  // Si la case est déjà occupée ou si le jeu est fini

    boardState[index] = currentPlayer;
    e.target.classList.add(currentPlayer);  // Ajoute la classe (X ou O) à la cellule

    // Vérifie s'il y a un gagnant, sinon change de joueur
    if (!checkWinner()) {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';  // Change de joueur
        statusText.textContent = `Au tour du joueur ${currentPlayer.toUpperCase()}`;
    }
};

// Redémarrer le jeu
const restartGame = () => {
    gameActive = true;
    currentPlayer = 'x';
    boardState = ['', '', '', '', '', '', '', '', ''];  // Réinitialise l'état du jeu
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');  // Retire les classes X et O des cases
    });
    statusText.textContent = `Au tour du joueur ${currentPlayer.toUpperCase()}`;
};

// Ajout des écouteurs d'événements
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);
