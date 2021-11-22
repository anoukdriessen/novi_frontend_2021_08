// console.log(true);      // waar
// console.log(false)      // niet waar
//
// console.log(5 > 2);     // waar
// console.log(5 > 10);    // niet waar
//
// console.log(1 == '1');  // omzet naar nummers zijn ze hetzelfde
// console.log(1 == '2');  // niet waar
// console.log(1 === '1'); // niet waar typen zijn anders
//
// console.log(1 == [1]);  // omzet naar nummers zijn ze hetzelfde
// console.log(1 == [2]);  // niet waar
// console.log(1 === [1]); // niet waar typen zijn anders
//
// console.log('1' == [1]);    // omzet naar nummers zijn ze hetzelfde
// console.log('1' == [2]);    // niet waar
// console.log('1' === [1]);   // niet waar typen zijn anders

// waardes die omgezet worden naar een truthy waarde -> soort van waar
console.log('truthy');
if ('hallo') {
    console.log('hallo');
}
if ('false') {
    console.log('woord false');
}
if (1) {
    console.log('numerieke waarde die niet 0 is');
}
if ([]) {
    console.log('lege array');
}
if ({}) {
    console.log('leeg object');
}
if (function (){}) {
    console.log('lege function');
}

console.log();

// waardes die omgezet worden naar een falsy waarde -> soort van niet waar
console.log('falsy');
if (0) {
} else {
    console.log('het getal 0');
}
if ('') {
} else {
    console.log('een lege string');
}
if (null) {
} else {
    console.log('de lege waarde null');
}
if (undefined) {
} else {
    console.log('niet-toegewezen waarde');
}
if (NaN) {
} else {
    console.log('Not a Number');
}
