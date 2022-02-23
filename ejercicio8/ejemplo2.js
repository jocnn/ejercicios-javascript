/**
 * 
 * En este ejercicio tienes que crear un archivo javascript que contenga una función llamada eliminarUltimo() 
 * que reciba como parámetro un array y elimine el último elemento de este.
 * 
 */

 function eliminarUltimo(array) {
  array.splice(-1, 1);
	return array;
}

/** Datos de prueba */

// let array = [1, 5, 9, 32, 56, 8];

// eliminarUltimo(array)