function verificaSeEPar(numero) {
    if(numero % 2 == 0){
        return true;
    }
}

function verificaSeEImpar(numero) {
    if(numero % 2 != 0){
        return true;
        }
    }
    
var arrayPares=[]
var arrayImpares=[]
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const filtroParImpar = array.filter(item => {
    if (verificaSeEPar(item) == true) {
        return arrayPares.push(item);
    } else {
        arrayImpares.push(item);
    }
});

// Retorno Pares com Callback
console.log(`Estes são os nums pares: ${filtroParImpar}`);

// Retorno Ímpares somente no log
console.log(`Estes são os nums ímpares: ${arrayImpares}`);