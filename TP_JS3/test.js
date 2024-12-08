// Fonction pour tester si une personne est majeure ou mineure
function test_age() {
    let age = prompt("Entrez votre âge :");
    if (age >= 18) {
        alert("Vous êtes majeur(e).");
    } else {
        alert("Vous êtes mineur(e).");
    }
}

// Fonction pour afficher le nom et prénom
function affichage() {
    let nom = prompt("Entrez votre nom :");
    let prenom = prompt("Entrez votre prénom :");
    alert("Bonjour, " + prenom + " " + nom + " !");
}

// Fonction pour calculer la moyenne de 3 notes
function calcul_moyenne() {
    let note1 = parseFloat(prompt("Entrez la première note :"));
    let note2 = parseFloat(prompt("Entrez la deuxième note :"));
    let note3 = parseFloat(prompt("Entrez la troisième note :"));

    if (isNaN(note1) || isNaN(note2) || isNaN(note3)) {
        alert("Veuillez entrer des nombres valides !");
    } else {
        let moyenne = (note1 + note2 + note3) / 3;
        alert("La moyenne est : " + moyenne.toFixed(2));
    }
}

// Fonction pour changer la couleur de fond aléatoirement
function test_couleur() {
    // Couleurs possibles
    let couleurs = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
    // Choisir une couleur aléatoire
    let couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
    // Appliquer la couleur au fond de la page
    document.body.style.backgroundColor = couleurAleatoire;
}
