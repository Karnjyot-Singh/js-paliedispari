// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Scegli tra pari e dispari");
const userNumber = prompt("Dimmi un numero tra 1 e 5"); 
if(isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
  console.log("Inserisci numero compreso tra 1 e 5");
} else {
  console.log(userChoice, userNumber);
  const computerNumber = getRandomInt(1, 5);
  
  const sum = userNumber + computerNumber;
  
  console.log(computerNumber, sum);
  
  const sumResult = evenOdd(sum);
  console.log(sumResult);
  
  if(userChoice === sumResult) {
    console.log("Hai vinto, non lavi piatti oggi");
  } else {
    console.log("Vai subito a lavare i piatti");
  }
}
//////////////
// functions
/**
 * Genera un numero intero randomico compreso tra min e max inclusi
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Se numero è pari ritorna "pari" altrimenti ritorna "dispari"
 * @param {number} numToCheck
 * @returns {string}
 */
function evenOdd(numToCheck) {
  let result = "dispari";
  if(numToCheck % 2 === 0) {
    result = "pari";
  }
  return result;
}