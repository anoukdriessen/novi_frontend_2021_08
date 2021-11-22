console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');
let sum;

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================

sum = 4 + 5;
console.log("1. uitkomst = " + sum);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================

sum = 7 * 52;
console.log("2. uitkomst = " + sum);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================

sum = (4 + 3) * 7;
console.log("3. uitkomst = " + sum);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================

sum = (36 / 6) * 2;
console.log("4. uitkomst = " + sum);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================

const sweet = 'zoet';
const juicy = 'sappig';
const together = sweet + juicy;
console.log("5. uitkomst = " + together);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================

const firstName = "Anouk";
const lastName = "Driessen";
const fullName = firstName + " " + lastName;
console.log("6. uitkomst = " + fullName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================

const residence = "Steenwijk";
const province = "Overijsel";
const full = residence + ", " + province;
console.log("7. uitkomst = " + full);