// PALINDROMA 
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const utenteParola = prompt("Inserisci una parola");

function parolaPalindroma(text) {
    const cleanedText = text.replace(/\s+/g, '').toLowerCase();

    const paliTextReverse = cleanedText.split('').reverse().join('');
    return paliTextReverse === cleanedText;
}

if (parolaPalindroma(utenteParola)) {
    console.log(`Complimente la parola ${utenteParola} è polidroma`)
} else {
    console.log(`La parola ${utenteParola} non è polidroma`)
}