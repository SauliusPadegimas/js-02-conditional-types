let username = "James";
let age = 22;
let town = 'London';

// Student James is 22 years old and he live in Minsk.
let sentence = 'Student '+ username +' is '+ age +' years old and he live in '+ town +'.'

sentence = `Student ${username} is ${age} years old and he live in ${town}.`
console.log(sentence);

/*
cia yra pirma eilute.
cia yra antra eilute.
paskutine eilute.
*/

let str = '';
str +=  'cia yra pirma eilute.'
str +=  'cia yra antra eilute.'
str +=  'paskutine eilute.'

str = `
cia yra pirma eilute.
cia yra antra eilute.
paskutine eilute.
`;


console.log('str ===', str);

//  suzinoti kiek metu bus username'ui po 5 metu

let after5y = `${username} will be ${age + 5} in 5 years`
// console.log('after5y ===', after5y);

// gauti is vartotojo amziaus pokyti ir atspausdinti kiek bus metu po to pokycio

let pokytis = prompt('kiek metu praejo')

// paziureti kintamojo tipa galima su typeof
console.log(`pokytis tipas yra ${typeof pokytis}`);
let pokytisNuber = Number(pokytis);
after5y = `${username} will be ${age + pokytisNuber} in ${pokytis} years.`;
console.log('after5y ===', after5y);