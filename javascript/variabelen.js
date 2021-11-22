// ==========================================
// 0. Voorbeeldvraag: maak en variabele genaamd start met daarin het woord Let's go!
// ==========================================

const start = "Let's go!";
console.log(start);

// ==========================================
// 1. Declareer een variabele om jouw naam in op te slaan en zet de waarde erin.
//      De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const myName = "Anouk Driessen";
console.log("naam: " + myName);

// ==========================================
// 2. Declareer een variabele om de kleur van jouw ogen in op te slaan en zet de waarde erin.
//  De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const myEyeColor = "groen-bruin";
console.log("kleur van ogen: " + myEyeColor);

// ==========================================
// 3. Declareer een variabele om jouw leeftijd in op te slaan en zet de waarde erin.
//      De variabele moet later overschreven kunnen worden.
// ==========================================

const myBirthYear = 1995;
let thisYear = 2021;
let myAge = thisYear - myBirthYear;
console.log("leeftijd: " + myAge);

// ==========================================
// 4. Declareer een variabele om jouw beroep in op te slaan en zet de waarde erin.
//      De variabele moet later overschreven kunnen worden.
// ==========================================

let myProfession = "Full-Stack Development Student";
console.log("beroep: " + myProfession);

// ==========================================
// 5. Declareer een variabele om jouw schoenmaat in op te slaan en zet de waarde erin.
//      De variabele hoeft niet meer overschreven hoeft te worden.
// ==========================================

const myShoeSize = 39;
console.log("schoenmaat: " + myShoeSize);

// ==========================================
// 6. Declareer een variabele om in op te slaan of je een partner hebt of niet.
//      De variabele moet later overschreven kunnen worden.
// ==========================================

let hasAPartner = true;
if (hasAPartner) {
    console.log("heeft een partner");
} else {
    console.log("heeft geen partner");
}

// ==========================================
// 7. Declareer een variabele om het aantal kinderen in op te slaan.
//      De variabele moet later overschreven kunnen worden.
// ==========================================

let numOfChildren = 0;
if (numOfChildren === 1) {
    console.log("heeft " + numOfChildren + " kind");
} else {
    console.log("heeft " + numOfChildren + " kinderen");
}

// ==========================================
// 8. Gebruik jouw variabelen nu om hun waardes te loggen in de terminal.
// ==========================================