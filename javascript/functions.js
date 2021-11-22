// Functie declareren
// geef de functie een naam, schrijf de statements tussen de accolades {}
function congrats() {
    console.log("Gefeliciteerd!");
}
// Functie aanroepen
// gebruik de gegeven naam in combinatie met ()
congrats();

// functies kun je zo vaak herhalen als je wilt
let name = "Henk";
console.log(name + " is 40 geworden");
congrats();
name = "Piet";
console.log(name + " is 30 geworden");
congrats();

// Een functie die extra informatie nodig heeft beschrijf je met parameters
function congratsTo(name) {
    console.log("Gefeliciteerd " + name + "!")
}
congratsTo("Henk");
congratsTo(name);

// gewone functies vs arrow functies
function getArea1(width, length) {
    return width * length;
}

let thisArea = getArea1(3, 4);
console.log("1. " + thisArea);

// de bovenstaande functie kan omgebouwd worden naar arrow functies
const getArea2 = (width, length) => {
    return width * length;
}

thisArea = getArea2(3, 4);
console.log("2. " + thisArea);

// wanneer je alleen een return-statement in de functie hebt staan mag je het zelfs verkorten tot:
const getArea3 = (width, length) => width * length;

thisAres = getArea3(3, 4);
console.log("3. " + thisArea);