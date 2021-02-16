let mealPrice = 28.75;
let tip = 12.5;

let tipAmount = ( mealPrice * tip ) / 100;

console.log( '£' + (mealPrice + tipAmount).toFixed(2) );