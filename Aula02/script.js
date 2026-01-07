


export default class Usuario {
  #nome
  constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
    this.#nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.rg = rg;
    Object.freeze(this)
  }
  get getNome(){
    return this.#nome; 
  }

  reproduzir(){
    console.log(`
        ${this.nome }
        ${this.idade }
        ${this.genero }
        ${this.telefone }
        ${this.email }
        ${this.cpf }
        ${this.cep }
        ${this.rg }        
    `);

  }
}
