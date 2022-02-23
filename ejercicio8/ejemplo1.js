/**
 * 
 * En este ejercicio tienes que crear varias funciones. 
 * Las funciones tienen que representar las operaciones básicas de una calculadora: 
 * sumar, restar, multiplicar y dividir.
 * En la función de dividir, tendréis que realizar una comprobación para verificar 
 * que el segundo número no sea un 0, en el caso de que sea un 0 tendréis que mostrar el mensaje 
 * “No se puede dividir por cero”.
 * Tienes que mostrar los resultados por consola.
 * 
 */

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  if (b == 0) {
    return console.log("No se puede dividir por cero");
  }
  return a / b;
}
