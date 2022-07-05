console.log('conditionals');

/*
if (salyga) {
    vykdom jei true
} else {
    vykdom jei false
}
*/

let isUserAdmin = true;

if (isUserAdmin == 'true') {
    console.log('useris yra adminas');
} else {
    console.log('useris nera adminas');
}

// sukuriam kintamaji amzius 
// priklausomai nuo amziaus ispausdinam
// suauges arba nesuauges
// gaunam amziu is promt ir paziurim kad veiktu

let amzius = prompt('iveskite savo amziu')
amzius = Number(amzius)
console.log(typeof amzius);
if (amzius <= 18) {
    console.log(`Jusu amzius ${amzius} ir esate nepilnametis`);
} 