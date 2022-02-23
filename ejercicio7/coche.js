class Coche {
  static peso = 0;
  static potencia = 0;
  static marca = '';
  
  constructor(peso, potencia, marca) {
    this.peso = peso;
    this.potencia = potencia;
    this.marca = marca;
  }
}

module.exports = Coche;
