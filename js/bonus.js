const più = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const meno = [11, 12, 13];

if (meno.length < più.length){
    for (let i = 0; i < più.length && meno.length !== più.length; i++){
        meno.push(13 + i);
    } 
}

console.log(meno);