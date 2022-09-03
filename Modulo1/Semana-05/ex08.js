class Serie{
        nome;
        anoLancamento;
        qttTemp;

    constructor(nome, anoLancamento, qttTemp){
this.nome = nome;
this.anoLancamento = anoLancamento;
this.qttTemp = qttTemp;
    }
}
let maisAntiga, nomeantiga;
let array = [0,0,0,0]
for(let i = 0; i <= 3; i++){
    let nome = prompt("Qual o nome da série?");
    let anoLancamento = prompt("Qual o ano de lançamento?") 
    let qttTemp = parseInt(prompt("Qual a quantidade de temporadas?"))

const serie = new Serie(nome, anoLancamento, qttTemp);

if(i == 0){
maisAntiga = serie.anoLancamento;
}
if(serie.anoLancamento < maisAntiga){
    maisAntiga = serie.anoLancamento;

}
}
console.log(maisAntiga);
console.log(nomeantiga);
let tagH1 = document.getElementById("h1");
tagH1.innerHTML +=  nomeantiga;