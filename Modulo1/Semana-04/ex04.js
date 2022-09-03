let carros = ["HB20", "Corsa", "Palio", "XC60", "CR-V", "Fox", "Uno Mille"];

// document.write(`<h4> ${carros} <br><br> Digite um ítem da lista acima para ser removido. </h4>`)


var entrada = document.getElementById('input');
const btn01 = document.getElementById('btn01');


btn01.addEventListener("click", function() {
    if(entrada.value === ""){
        window.alert("Insira um valor no campo antes de clickar");
    } else if (carros.indexOf(entrada.value) == -1){
        window.alert(`Este valor não existe dentro da lista. \n\n Digite um dos valores abaixo para remover. \n\n ${carros}.`);
    }
    else{
        carros.splice(carros.indexOf(entrada.value),1);
        entrada = "";
        // splice(3,2), sendo que o primeiro número é onde o corte vai começar e o segundo, a qtd de remoções.
    }
    console.log(carros);
});