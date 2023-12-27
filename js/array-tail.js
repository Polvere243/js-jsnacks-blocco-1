// recupero gli elementi dal DOM
const userNumbers = document.querySelector("input");
const button = document.getElementById("number");
const min = 1;
const max = 100;
const chosenNumbers = [];
// aggancio al bottone un ascoltatore di eventi per ottenere i numeri da aggiungere all'array
button.addEventListener("click", function(){
    const numbers = parseInt(userNumbers.value);
    console.log(numbers);
    let randomNumbers = 0;
    for (let i = 0; i < numbers; i++){
        randomNumbers = Math.floor(Math.random() * max) + 1;
        console.log(randomNumbers);
    }
    chosenNumbers.push("randomNumbers");
    console.table(chosenNumbers);
})



