// objecten worden gedefineerd met {} en bestaan altijd uit een KEY en VALUE
const recipe = {
    name: "Spinazie lasagne",
    cookingTime: 45,
    isGlutenFree: false,
    ingredients: ["Spinazie", "Tomaat", "Knoflook", "Olijfolie", "Ui", "Lasagne bladen"],
//    functie aan object toevoegen
    printInfo: () => { console.log("Dit is een functie van object recept die de info zal printen") },
//    object toevoegen aan object
    nutritionInfo: {
        natrium: 15,
        calories: 600,
    },
}

// het aanspreken van child-properties van object
console.log("Recept: " + recipe.name)
console.log("Duur: " + recipe.cookingTime)

if (recipe.isGlutenFree) {
    console.log("Recept is glutenvrij")
} else {
    console.log("Recept is niet glutenvrij")
}

console.log("Dit recept heeft " + recipe.ingredients.length + " Ingredienten:")
for (let i = 0 ; i < recipe.ingredients.length; i++) {
    console.log(i +" " + recipe.ingredients[i]);
}

// de print info methode
recipe.printInfo();

// niveau dieper is de nutritionInfo die calories bevat
console.log("Dit recept bevat " + recipe.nutritionInfo.calories + " calorieen")