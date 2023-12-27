// genero le costanti che mi servono
const min = 1;
const max = 100;
let chosenNumbers = [];

// chiedo all'utente quanti numeri vuole
const numOfElements = parseInt(prompt("Quanti numeri vuoi nell'array?", "50"));
console.log(numOfElements);
// genero tanti numeri casuali quanti ne vuole l'utente
let numbers = "";
for (let i = 0; i < numOfElements; i++){
    numbers = Math.floor(Math.random() * (max + 1 - min )) + min;
    chosenNumbers.push(numbers);
    console.table(chosenNumbers);
}

console.table(chosenNumbers.slice(chosenNumbers.length - 5));
