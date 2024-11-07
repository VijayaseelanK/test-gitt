function test_age() {
    let age = prompt("Quelle est votre âge ?");
    if (age < 18) {
        document.write("Attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor = "green";
    } else {
        document.write("OK, vous êtes majeur");
        document.body.style.backgroundColor = "yellow";
    }
}

function affichage() {
    let prenom = prompt("Saisir votre prénom");
    let nom = prompt("Saisir votre nom");
    document.write("<div style='border:5px solid blue; width: 400px; height: 50px; margin:auto; font-size:2em;'>");
    document.write("Bonjour " + prenom + " " + nom);
    document.write("</div>");
}

function test_couleur() {
    let couleur = prompt("Donner une couleur");
    if (couleur == "rouge") {
        document.body.style.backgroundColor = "red";
    }
} 