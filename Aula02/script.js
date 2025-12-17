


export default class Usuario {
  constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.rg = rg;
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
