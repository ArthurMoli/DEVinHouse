class Serie{
    nome;
    anoLancamento;
    qttTemporada;
    
    constructor(nome, anoLancamento, qttTemporada){
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.qttTemporada = qttTemporada;
    }
}
let anoMaisAntiga, nomeAntigo;

for(let i = 0; i < 2; i++){
    let nome = window.prompt(`Digite o nome da ${i+1}ª série.`);
    let anolancamento = parseInt(window.prompt("Digite o ano de lançamento da série."));
    let qttTemporada = parseInt(window.prompt("Digite a quantidade de temporadas da série."));

    // Instanciar a classe 4 vezes
    const serie = new Serie(nome, anolancamento, qttTemporada);

    if(i == 0){ // Na primeira rodada o valor do primeiro lançamento é inserido
        anoMaisAntiga = serie.anolancamento;
        nomeAntigo = serie.nome;
    } else if(serie.anolancamento < anoMaisAntiga){
        anoMaisAntiga = serie.anoLancamento;
        nomeAntigo = serie.nome;
    }
}

let tagH1 = document.getElementById("h1");

tagH1.innerHTML += nomeAntigo;
console.log(nomeAntigo)