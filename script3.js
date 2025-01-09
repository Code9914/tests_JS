let taille = parseInt(prompt("Entrez la taille de la pyramide :"), 10);

if (isNaN(taille) || taille <= 0) {
    console.log("Veuillez entrer un nombre entier positif.");
} else {
    for (let i = 1; i <= taille; i++) {
        let espace = " ".repeat(taille - i);
        let marche = "#".repeat(i);
        console.log(espace + marche);
    }
}