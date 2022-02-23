/**
 * 
 * En este ejercicio tienes que rellenar un array con los números del 10 al 20 y mostrarlo por consola.
 * 
 */

let array = [];

for (let i = 0 ; i < 10 ; i++) {
  array.push(Math.floor(Math.random() * (20 - 10)) + 10)
  console.log(`${i} = ${array[i]}` );
}