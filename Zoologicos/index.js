import { Mamifero } from "./Mamifero.js";
import { Ave } from "./Ave.js";
import { Papagaio } from "./Papagaio.js";

const leao = new Mamifero("Leão", 5, "Curto", "Savana");
const papagaio = new Ave("Papagaio", 2, "Curvo", "Alta");
const papagaio1 = new Papagaio("Loro", 3, "Curvo", "Alta", []);


// leao.emitirSom();

console.log(papagaio.getInfo());
papagaio.emitirSom();

papagaio1.aprenderPalavra("Oi");
papagaio1.aprenderPalavra("Olá");

console.log(papagaio1.getInfo());
papagaio1.emitirSom();
