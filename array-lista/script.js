const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const button = document.querySelector("button");
const paragraph = document.querySelector("p");


fruits.push("pesca");
console.table(fruits);

let isWatermelonIn = false; 

for (let i = 0; i < fruits.length && !isWatermelonIn; i++) {
    if ("cocomero" === fruits[i]){
        console.log("Trovato! Devo solo preparare il cocktail.") 
        isWatermelonIn = true;       
    } else {
        console.log("Oh no, devo uscire a comprare il cocomero!");
    }
       


}