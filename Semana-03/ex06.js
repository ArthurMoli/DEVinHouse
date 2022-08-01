function adicionaItem() {
    var input = document.getElementById("inpToDo").value;
    localStorage.setItem("Tarefa", input);

    var texto = "";

    var lista = document.getElementById("lista")

    for(i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    texto = localStorage.getItem(key);
    }
    event.preventDefault();

    console.log(input);
    lista.innerHTML = texto;
}