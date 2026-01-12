export class Animal {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        this.#nome = valor;
    }

    get idade() {
        return this.#idade;
    }

    set idade(valor) {
        this.#idade = valor;
    }

    emitirSom() {
        console.log("O animal emite um som genérico.");
    }

    getInfo() {
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}
