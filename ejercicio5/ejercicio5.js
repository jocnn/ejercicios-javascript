/** 
 * 
 * En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos 
 * entre 0 y 20 haciendo uso de un bucle.
 * 
 */

for (let i = 0 ; i < 10; i++) {
  console.log(`${i} = ${Math.floor(Math.random() * 20)}`);
}