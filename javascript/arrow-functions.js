// opdrachten uit functions-exercise geschreven in arrow functions

// Opdracht 0: Schrijf een functie die de string "Goedemorgen" teruggeeft
const morningGreeter = () => "Goedemorgen";
const greeting = morningGreeter();
console.log(greeting);

// Opdracht 1: Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
const getSchool = () => "Novi Hoogeschool";
const school = getSchool();
console.log(school);

// Opdracht 2: Schrijf een functie genaamd compliment, die jou een complimentje geeft!
const compliment = (name) => "Lekker bezig met die arrow functies " + name + "!";
const myCompliment = compliment("Anouk");
console.log(myCompliment);

// Opdracht 3: Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
const getGrades = (grades) => grades;
const myGrades = getGrades([8,8.5,6,7]);
console.log(myGrades);
