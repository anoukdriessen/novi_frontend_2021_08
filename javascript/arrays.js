const ingredients = ["Spinazie", "Tomaat", "Knoflook", "Olijfolie", "Ui", "Lasagne bladen"];

console.log(ingredients);
// arrays beginnen altijd bij index nr. 0
console.log(ingredients[0]);

const step1 = "Stap 1. Doe een beetje " + ingredients[3] + " in de pan";
console.log(step1);

// waardes overschrijven
console.log("voor: " + ingredients[5]);
ingredients[5] = "Volkoren lasagnebladen";
console.log("na: " + ingredients[5]);

// de lengte van de array
const ingredientsLength = ingredients.length;
console.log("Er zitten " + ingredientsLength + " ingredienten in het recept");

// vind het laatste index nr
const lastIndex = ingredients.length - 1;
console.log("het laaste item is " + ingredients[lastIndex] + " met index " + lastIndex)
