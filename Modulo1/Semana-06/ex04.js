const myRequest = new XMLHttpRequest(); // Criar uma requisicao - Este comando dever ser primeiro
const imagem = document.getElementById('imagem');

myRequest.onload = () => {

    console.log(myRequest.response.name);
    console.log(myRequest.response.height);
    console.log(myRequest.response.weight);

    imagem.setAttribute("src",myRequest.response.sprites.front_default);
}

myRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
myRequest.responseType = "json";

myRequest.send();