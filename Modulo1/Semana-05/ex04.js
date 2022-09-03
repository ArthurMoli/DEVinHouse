let array = ["Arthur", "Silas", "Marlon", "Camila", "Gabriel", "Nicolas"];

let button = document.getElementById("button");


button.addEventListener("click", function(valor){
    let valor = document.getElementById("valor").value;
    excluirItem(valor);
});
function excluirItem(item){
    let indice = array.indexOf(item);
    array.splice(3,2)
}
