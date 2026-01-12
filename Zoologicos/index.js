import { Mamifero } from "./Mamifero.js";
import { Ave } from "./Ave.js";

const leao = new Mamifero("Leão", 5, "Curto", "Savana");
const papagaio = new Ave("Papagaio", 2, "Curvo", "Alta");

console.log(leao.getInfo());
leao.emitirSom();

console.log(papagaio.getInfo());
papagaio.emitirSom();
