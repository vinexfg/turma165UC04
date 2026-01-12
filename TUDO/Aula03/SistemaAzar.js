import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

export class SistemaAzar {
    #dado;
    #jogador;

    constructor(dado, jogador) {
        if (!(dado instanceof Dado)) {
            throw new Error("O objeto dado deve ser uma instância de Dado");
        }

        if (!(jogador instanceof Jogador)) {
            throw new Error("O objeto jogador deve ser uma instância de Jogador");
        }

        this.#dado = dado;
        this.#jogador = jogador;
    }

    jogar() {
        const valor = this.#dado.rolar();
        this.#jogador.adicionarPontos(valor);
        return valor;
    }

    get jogador() {
        return this.#jogador;
    }

    get dado() {
        return this.#dado;
    }
}
