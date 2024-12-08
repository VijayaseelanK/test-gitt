function calculer() {
    const prix1 = document.getElementById('prix1').value;
    const quantite1 = document.getElementById('quantite1').value;
    const resultat1 = prix1 * quantite1;
    document.getElementById('resultat1').value = resultat1;

    const prix2 = document.getElementById('prix2').value;
    const quantite2 = document.getElementById('quantite2').value;
    const resultat2 = prix2 * quantite2;
    document.getElementById('resultat2').value = resultat2;

    const prix3 = document.getElementById('prix3').value;
    const quantite3 = document.getElementById('quantite3').value;
    const resultat3 = prix3 * quantite3;
    document.getElementById('resultat3').value = resultat3;

    const total = resultat1 + resultat2 + resultat3;
    document.getElementById('total').value = total;
}

function reinitialiser() {
    document.getElementById('resultat1').value = '';
    document.getElementById('resultat2').value = '';
    document.getElementById('resultat3').value = '';
    document.getElementById('total').value = '';
}
function calculer() {
    document.getElementById('resultat1').value = document.getElementById('prix1').value * document.getElementById('quantite1').value;
    document.getElementById('resultat2').value = document.getElementById('prix2').value * document.getElementById('quantite2').value;
    document.getElementById('resultat3').value = document.getElementById('prix3').value * document.getElementById('quantite3').value;

    document.getElementById('total').value =
        Number(document.getElementById('resultat1').value) +
        Number(document.getElementById('resultat2').value) +
        Number(document.getElementById('resultat3').value);
}

function reinitialiser() {
    document.getElementById('resultat1').value = '';
    document.getElementById('resultat2').value = '';
    document.getElementById('resultat3').value = '';
    document.getElementById('total').value = '';
}
