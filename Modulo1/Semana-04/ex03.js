class Pessoa{
    constructor(nome, idade, cpf, anoAniversario){
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.anoAniversario = anoAniversario;


    function podeDirigir(){
    if(anoAniversario - idade >= 18){
        return true;
    }else{
    return false;
    }}
}}

 Pessoa pessoa= new Pessoa(
    nome = "Arthur",
    idade = 16,
    cpf = 123123123,
    anoAniversario = 2005,
    podeDirigir()
    );
