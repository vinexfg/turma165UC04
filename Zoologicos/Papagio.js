import { Ave } from "./Ave.js";

export class Papagaio extends Ave {
    #vocabulario;

    constructor(nome, idade, tipoBico, capacidadeVoo, vocabulario = []) {
        super(nome, idade, tipoBico, capacidadeVoo);
        this.#vocabulario = vocabulario;
    }

    emitirSom() {
        console.log("O papagaio fala: " + (this.#vocabulario.length > 0 ? this.#vocabulario.join(", ") : "testando_voz"));
    }

    aprenderPalavra(palavra) {
        this.#vocabulario.push(palavra);
        console.log(`${this.nome} aprendeu a palavra "${palavra}"!`);
    }

    getInfo() {
        return `${super.getInfo()}, Vocabulário: ${this.#vocabulario.join(", ")}`;
    }
}
