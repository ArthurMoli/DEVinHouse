var divget = document.getElementById('div1')

let arrayDeTextos = ["Texto1", "Texto2", "Texto3", "Texto4"]

function geraTxt(strings = []){

    for(item of strings){
        let p = document.createElement("p")
    p.innerHTML = item
    divget.appendChild(p)
    }
}
geraTxt(arrayDeTextos);