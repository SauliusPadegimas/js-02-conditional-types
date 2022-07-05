console.log("prompt.js is loaded");

// apskaciuoti apskritimo plotą

let r = 19;
let pi = 3.1415926;
//  pi*r^2

// let plotas = pi * r ** 2;

// let resultString = 'Jei spindulys yra ' + r + ' tai apskritimo plotas yra '+ plotas +'.';
// console.log(resultString);

//  ivedam kita spinduli 

r = prompt('koks apskritimo spindulys');
plotas = pi * r ** 2;
resultString = `Jei spindulys yra ${r} tai apskritimo plotas yra ${plotas}.`;
console.log(resultString);

//  iskviesti ivedimo dialoga

// prompt('kiek dabar valandu')
// let valandos = prompt('kiek dabar valandu')
// console.log('valandos ===', valandos);
// ekstra pranesimas vartotojui 

// alert('kazkas kazkur kazkaip')

//  ekstra patvirtinimas

// confirm('ar tikrai norite istrinti faila')