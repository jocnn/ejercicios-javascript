class Coche {
  static #peso = 0;
  static #potencia = 0;
  static #marca = '';
  
  constructor(peso, potencia, marca) {
    this.#peso = peso;
    this.#potencia = potencia;
    this.#marca = marca;
  }

  get peso() {
    this.#peso;
  }

  get potencia() {
    this.#potencia;
  }

  get marca() {
    this.#marca;
  }

  set peso(value) {
    this.#peso = value;
  }

  set potencia(value) {
    this.#potencia = value;
  }

  set marca(value) {
    this.#marca = value;
  }
}

module.exports = Coche;
