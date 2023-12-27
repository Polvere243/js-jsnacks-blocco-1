const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const button = document.querySelector("button");
const paragraph = document.querySelector("p");

// aggiungo la pesca in coda all'array
fruits.push("pesca");
console.table(fruits);

// aggancio la ricerca del cocomero al bottone
button.addEventListener("click", function() {
    let isWatermelonIn = false; 

for (let i = 0; i < fruits.length && !isWatermelonIn; i++) {
    if ("cocomero" === fruits[i]){
        paragraph.innerText = "Trovato! Devo solo preparare il cocktail." 
        isWatermelonIn = true;       
    } else {
        paragraph.innerText = "Oh no, devo uscire a comprare il cocomero!";

    }
}
})

