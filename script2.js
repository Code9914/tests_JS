function factorielle(n) {
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

let nombre = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"), 10);

if (nombre >= 0) {
    console.log(`La factorielle de ${nombre} est : ${factorielle(nombre)}`);
} else {
    console.log("Veuillez entrer un nombre entier positif.");
}