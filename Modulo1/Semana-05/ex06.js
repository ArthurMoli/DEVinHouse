var numParaGerarTabuada = 9;

const imprimirTabuada = (numero) => {
    return numParaGerarTabuada * numero;
}

const gerarTabuada = (num, callBack) => {
    for (let i = 0; i <= 10; i++) {
        const element = callBack([i]);
        console.log(`${i} x ${num} = ${element}`);
    }
}

gerarTabuada(numParaGerarTabuada, imprimirTabuada);