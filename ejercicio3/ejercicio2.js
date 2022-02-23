/**
 * 
 * En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y 
 * en cada una indique el número de esta. 
 * Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
 * 
 */

const primo = num => {
  if (i == 0 || i == 1 || i == 4) return false;
  for (let i = 2; i < num / 2; i++ ) {
    if (num % i == 0) return false;
  }
  return true;
}

/*  
  un detalle, la consigna no pidio calculara el numero primo, 
  solo que imprimiera determinados números como primos :P
*/

for (i = 0; i < 10; i++) {
  if (primo(i) == false) {
    console.log(`iteracion numero ${i}`);
  } else if (primo(i) == true) {
    console.log(`iteracion numero ${i} es primo`)
  }
}
