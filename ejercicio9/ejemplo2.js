/**
 * 
 * En el mismo archivo del ejercicio anterior ("ejercicio.js"), 
 * debes hacer uso de la función suma(a, b) que acabas de crear y proteger tu código para que, 
 * intencionadamente, podamos pasar un parámetro que no sea un número sin que salte un error que finalice el programa.
 * En el catch, puedes poner un mensaje de aviso indicando que ese no es el uso correcto de la función.
 *
 */

 function suma(a, b) {
  try {
    if (isNaN(a) || a <= 0 || Array.isArray(a) || typeof a === 'string') {
      throw new Error(
        `el primer valor ingresado como \"${a}\" debe de ser un número > a 0`
      );
    }
    if (isNaN(b) || Array.isArray(b) || b <= 0 || typeof b === 'string') {
      throw new Error(
        `el segundo valor ingresado como \"${b}\" debe ser un número > a 0, no un ${typeof b}`
      );
    }
    return `la suma es: ${a + b}`;
  } catch (e) {
    console.log(`Valor ingresado de forma incorrecta, ${e.message}`);
  }
}

/** Datos de prueba */

// var b = [4];
// suma(2, b);