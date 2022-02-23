/**
 * 
 * En el mismo archivo del ejercicio 2, modifica la función para que alerte al usuario cuando el parámetro 
 * no sea un array o este esté vacío.
 * Si el parámetro es un array con más de un elemento, la función debe realizar lo descrito en el ejercicio anterior.
 * 
 */

 function eliminarUltimo(miArray) {
  if (Array.isArray(miArray) && miArray.length > 1) {
    miArray.splice(-1, 1);
  } else if (!Array.isArray(miArray)) {
    return console.log('Alerta: Debe ingresar un array');
  } else if (miArray.length > 1 || miArray == 0) {
    return console.log(
      'Alerta: Debe tener mas de un elemento o debe de estar vacio'
    );
  }
  return miArray;
}

/** Datos de prueba **/

// let array = [1, 5, 9, 32, 56, 8];
// array = [3, '76'];
// array = [];
// array = 'hola mucho gusto';

// eliminarUltimo(array);