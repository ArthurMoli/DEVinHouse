var nome = window.prompt('Digite seu nome?');
var sobrenome = window.prompt('Digite seu sobrenome');
var idade = parseFloat(window.prompt('Digite sua idade'));
var aniversario = window.confirm('Já fez aniversário?');

if (aniversario == true) {
    document.write(`<h1>Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade}.</h1>`);
} else {
    document.write(`<h1>Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022-idade-1}.</h1>`);
}