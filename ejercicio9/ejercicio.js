function suma(a, b) {
  if (isNaN(a) || a <= 0 || Array.isArray(a) || typeof a === 'string') {
    console.log(
      `el primer valor ingresado como \"${a}\" debe de ser un número`
    );
    return;
  }
  if (isNaN(b) || Array.isArray(b) || b <= 0 || typeof b === 'string') {
    console.log(
      `el segundo valor ingresado como \"${b}\" debe ser un número, no un ${typeof b}`
    );
    return;
  }
  return `la suma es: ${a + b}`;
}

/** Datos de prueba */

// var b = [4];
// suma(2, b);

