function affichagetab() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    table.border = "2";
    table.style.width = "30%";

    for (let i = 0; i <= 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
    document.body.appendChild(container);
}

function affichagetab2() {
    const lignes = parseInt(prompt("Combien de lignes ?"), 10);
    if (isNaN(lignes) || lignes <= 0) {
        alert("Veuillez entrer un nombre valide !");
        return;
    }

    const container = document.createElement("div");
    const table = document.createElement("table");
    table.border = "2";
    table.style.width = "30%";

    for (let i = 0; i < lignes; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.textContent = j === 0 ? i + 1 : j === 2 ? "*" : "";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
    document.body.appendChild(container);
}

function seconnecter() {
    const login = prompt("Donnez votre nom d'utilisateur");
    const password = prompt("Entrez votre mot de passe");

    if (login === "admin" && password === "admin") {
        const message = document.createElement("p");
        message.textContent = `Bienvenue : ${login}`;
        message.style.color = "green";
        document.body.appendChild(message);
    } else {
        alert("Accès refusé");
    }
}
