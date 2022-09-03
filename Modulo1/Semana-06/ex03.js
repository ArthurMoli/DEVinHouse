function parImpar(numero) {
    if (numero % 2 == 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

var promessa = new Promise((resolve, reject)=>{
    let parOuImpar = parImpar(parseInt(window.prompt('Digite um número inteiro.')));
    if (parOuImpar == 'par') {
        resolve('Número válido é par');
    } else {
        reject('Error: número informado é ímpar');
    }
});

promessa.then((retorno)=>{
    console.log(retorno);
}).catch((err)=>{
    console.error(err);
});