console.log('convertisseur js activé');

let vm1 = document.querySelector('.radioF1'); // FRCFA
let vm2 = document.querySelector('.radioU1'); // EURO

let Ce1 = document.querySelector('.radioF2'); // FRCFA
let Ce2 = document.querySelector('.radioU2'); // EURO

let form = document.querySelector('form');
let inp = document.querySelector('input[type="text"]');
let resultat = document.querySelector('.resultat');

function verifie() {
    const valueBasse = 650.50;

    // Vérification champ vide
    if (!inp.value.trim()) {
        resultat.textContent = "Erreur de saisie";
        return;
    }

    // Conversion en nombre
    let recupInput = Number(inp.value.trim());

    // Vérification nombre valide
    if (isNaN(recupInput)) {
        resultat.textContent = "Veuillez entrer un nombre valide";
        return;
    }

    // FRCFA ➜ EURO
    if (vm1.checked && Ce2.checked) {
        let conver = (recupInput / valueBasse).toFixed(2);
        resultat.textContent = conver + " EURO";
    }
    // EURO ➜ FRCFA
    else if (vm2.checked && Ce1.checked) {
        let conver = (recupInput * valueBasse).toFixed(2);
        resultat.textContent = conver + " FRCFA";
    }
    // FRCFA ➜ FRCFA
    else if (vm1.checked && Ce1.checked) {
        resultat.textContent = "C'est la même somme : " + recupInput + " FRCFA";
    }
    // EURO ➜ EURO
    else if (vm2.checked && Ce2.checked) {
        resultat.textContent = "C'est la même somme : " + recupInput + " EURO";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    verifie();
});
