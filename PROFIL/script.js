// Script pour interagir avec les boutons

document.getElementById('view-cv').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Le CV est en train de s\'afficher...');
    // Ici, vous pouvez ajouter une logique pour afficher le CV en utilisant un modal ou une nouvelle page, si nécessaire.
  });
  
  document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf'; // Remplacez ce chemin par celui du fichier PDF réel
    link.download = 'CV_Nathan_Serror.pdf';
    link.click();
  });
  