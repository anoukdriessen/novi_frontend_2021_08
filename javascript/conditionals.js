// ==========================================
// 0. Voorbeeldvraag: declareer een variabele met daarin de vergelijking of 2 gelijk is aan 2.                // geeft true wanneer gelogd
// ==========================================

const equalNumbers = 2 === 2;
console.log('Is 2 gelijk aan 2?', equalNumbers);

let output;

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false wanneer gelogd
// ==========================================

output = 10 > 20;
console.log('Is 10 groter dan 20?', output);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true wanneer gelogd
// ==========================================

output = 10 !== 11;
console.log('Is 10 ongelijk aan 11?', output)

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false wanneer gelogd
// ==========================================

const sweet = 'sweet';
const juicy = 'juicy';
output = sweet === juicy;
console.log('Is ' + sweet + ' hetzelfde als ' + juicy + '?', output)

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!' wanneer gelogd
// ==========================================

const finalGrade = 9;
if (finalGrade > 8) {
    console.log('Cum laude! cijfer is ', finalGrade)
}

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================

let isRaining = false;
let temperature = 23;

if (!isRaining && temperature > 21) {
    console.log('Je kunt een korte broek aan!')
}

isRaining = false;
temperature = 11;

if (isRaining || temperature < 12) {
    console.log('Doe een jas aan!')
}