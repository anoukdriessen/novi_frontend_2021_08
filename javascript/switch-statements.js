// ==========================================
// Opdracht 1: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

console.log("Opdracht 1.");

// Je mag ervanuit gaan dat deze variabele altijd een waarde tussen de 0 en de 4 bevat.
// Deze codes hebben de volgende betekenissen (foutmeldingen):
    // 0: "Geen watertoevoer"
    // 1: "Temperatuur te laag"
    // 2: "Koffiebonen op"
    // 3: "Afvalbak vol"
    // 4: "Geen druk"

// Verwachtte uitkomsten:
    // const errorCode = 0 geeft "Geen watertoevoer" in de terminal
    // const errorCode = 4 geeft "Geen druk" in de terminal
    // etc.

const errorCode = 1;
let out;

switch (errorCode) {
    case 0:
        out = "Geen watertoevoer";
        break;
    case 1:
        out = "Temperatuur te laag";
        break;
    case 2:
        out = "Koffiebonen op";
        break;
    case 3:
        out = "Afvalbak vol";
        break;
    case 4:
        out = "Geen druk";
        break;
    default:
        out = "Error code niet herkend";
}

console.log(out);

// ==========================================
// Opdracht 2: schrijf een switch statement die op basis van de volgende variabele een bijbehorende foutmelding in de console logt.
// ==========================================

console.log("Opdracht 2.");

// Deze variabele zal altijd een kleur bevatten.
// De specifieke kleuren waar een melding bij gemaakt moet worden zijn:
    // "red", "green", "yellow" en "orange"

// Deze codes zijn gelinkt aan de volgende meldingen:
    // "green": "Hartslag stabiel"
    // "yellow": "Hartslag verhoogd"
    // "orange": "Kritieke hartslag, actie vereist!"
    // "red": "Kritieke hartslag, actie vereist!"
    // Bij alle andere kleuren is de status van de hartslag onbekend.

// Verwachtte uitkomsten:
    // const monitorColor = "red" geeft "Kritieke hartslag, actie vereist!" in de terminal
    // const monitorColor = "green" geeft "Hartslag stabiel" in de terminal
    // etc.

const red = "red";
const green = "green";
const yellow = "yellow";
const orange = "orange";

const monitorColor = "blue";

switch (monitorColor) {
    case red:
        out = "Kritieke hartslag, actie vereist!";
        break;
    case green:
        out = "Hartslag stabiel";
        break;
    case yellow:
        out = "Hartslag verhoogd";
        break;
    case orange:
        out = "Kritieke hartslag, actie vereist!";
        break;
    default:
        out = "Status hartslag onbekend!"
}

console.log(out);


// ==========================================
// [BONUSOPDRACHT] - optioneel: kun je de switch-statement uit opdracht 2 ook opschrijven met een aantal if-statements?
// ==========================================
console.log("Opdracht 3. (bonus)");


if (monitorColor === green) {
    out = "Hartslag is stabiel";
} else if (monitorColor === yellow) {
    out = "Hartslag is verhoogd";
} else if (monitorColor === red || monitorColor === orange) {
    out = "Kritieke hartslag, actie is vereist!";
} else {
    out = "Status hartslag is onbekend";
}

console.log(out);