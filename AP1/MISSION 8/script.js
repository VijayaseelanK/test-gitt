const exercices = [
    // 5 exercices SQL
    {
        titre: "1. Récupérer des données",
        description: "Récupérez tous les enregistrements de la table `Employes`.",
        correction: `SELECT * FROM Employes;`
    },
    {
        titre: "2. Filtrage avec WHERE",
        description: "Affichez les employés ayant un salaire supérieur à 2500.",
        correction: `SELECT * FROM Employes WHERE salaire > 2500;`
    },
    {
        titre: "3. Fonction d'agrégation",
        description: "Calculez la somme des salaires des employés.",
        correction: `SELECT SUM(salaire) AS total_salaire FROM Employes;`
    },
    {
        titre: "4. Jointure simple",
        description: "Récupérez le nom et le département de chaque employé.",
        correction: `SELECT Employes.nom, Departements.nom FROM Employes INNER JOIN Departements ON Employes.id_departement = Departements.id;`
    },
    {
        titre: "5. Tri des données",
        description: "Listez les employés par ordre décroissant de salaire.",
        correction: `SELECT * FROM Employes ORDER BY salaire DESC;`
    },

    // 5 exercices Python
    {
        titre: "6. Vérifier un palindrome",
        description: "Écrivez une fonction pour vérifier si une chaîne est un palindrome.",
        correction: `def est_palindrome(chaine):\n    return chaine == chaine[::-1]\nprint(est_palindrome("radar"))`
    },
    {
        titre: "7. Somme d'une liste",
        description: "Calculez la somme des éléments d'une liste de nombres.",
        correction: `def somme_liste(liste):\n    return sum(liste)\nprint(somme_liste([1, 2, 3, 4]))`
    },
    {
        titre: "8. Conversion de température",
        description: "Convertissez une température de Celsius à Fahrenheit.",
        correction: `def celsius_to_fahrenheit(celsius):\n    return (celsius * 9/5) + 32\nprint(celsius_to_fahrenheit(25))`
    },
    {
        titre: "9. Recherche d'un élément",
        description: "Recherchez un élément dans une liste et renvoyez son index.",
        correction: `def recherche_element(liste, element):\n    return liste.index(element) if element in liste else -1\nprint(recherche_element([1, 2, 3], 2))`
    },
    {
        titre: "10. Factorielle récursive",
        description: "Écrivez une fonction récursive pour calculer la factorielle d'un nombre.",
        correction: `def factorielle(n):\n    return 1 if n == 0 else n * factorielle(n - 1)\nprint(factorielle(5))`
    },

    // 5 exercices SFTP
    {
        titre: "11. Connexion SFTP",
        description: "Établissez une connexion SFTP à un serveur distant.",
        correction: `from paramiko import Transport, SFTPClient\ntransport = Transport(('host', port))\ntransport.connect(username='user', password='pass')\nsftp = SFTPClient.from_transport(transport)`
    },
    {
        titre: "12. Liste des fichiers",
        description: "Récupérez la liste des fichiers dans un répertoire distant.",
        correction: `files = sftp.listdir('/remote/path')\nprint(files)`
    },
    {
        titre: "13. Téléchargement de fichier",
        description: "Téléchargez un fichier depuis un serveur SFTP.",
        correction: `sftp.get('/remote/path/file.txt', 'local/path/file.txt')`
    },
    {
        titre: "14. Téléversement de fichier",
        description: "Envoyez un fichier local vers un serveur SFTP.",
        correction: `sftp.put('local/path/file.txt', '/remote/path/file.txt')`
    },
    {
        titre: "15. Fermeture de connexion",
        description: "Fermez correctement la connexion SFTP.",
        correction: `sftp.close()\ntransport.close()`
    }
];

function afficherExercices() {
    const container = document.getElementById("exercices");
    exercices.forEach((exercice, index) => {
        const div = document.createElement("div");
        div.className = "exercice-container";

        div.innerHTML = `
            <h2>${exercice.titre}</h2>
            <p>${exercice.description}</p>
            <button class="neon-button" onclick="voirSolution(${index})">Voir la solution</button>
            <button class="neon-button" onclick="voirDemonstration(${index})">Voir la démonstration</button>
            <div class="code-display" id="code-${index}" style="display:none;"></div>
        `;

        container.appendChild(div);
    });
}

function voirSolution(index) {
    alert(`Solution :\n\n${exercices[index].correction}`);
}

function voirDemonstration(index) {
    const codeDiv = document.getElementById(`code-${index}`);
    codeDiv.textContent = exercices[index].correction;
    codeDiv.style.display = "block";
}

afficherExercices();
