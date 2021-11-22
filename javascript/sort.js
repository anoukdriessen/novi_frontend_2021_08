const numbers = [3, 1, 5, 4, 2];

// before
console.log(numbers);

// numbers.sort((a, b) => {
//     // als a groter is dan b, geef een positief getal terug
//     if (a > b) {
//         return 1;
//     }
//     // als a kleiner is dan b, geef een negatief getal terug
//     if (a <  b) {
//         return -1;
//     }
//
//     // als bovenstaande condities allebei niet waar zijn,
//     // zijn de waardes even groot
//     return 0;
// })
//
// console.log(numbers);

// // verkorte versie
// numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(numbers);

// of zelfs nog korter, omdat we slechts één regel in onze functie hebben staan:
numbers.sort((a, b) => a - b);
console.log(numbers);

// sorteren van hoog naar laag
numbers.sort((a, b) => b - a);
console.log(numbers);
