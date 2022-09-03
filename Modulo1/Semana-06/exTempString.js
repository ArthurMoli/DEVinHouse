let nome = prompt('Digite seu nome')
let sobrenome = prompt('Digite seu sobrenome')
let idd = parseInt(prompt('Digite sua idade'))

let data = new Date();
let ano = data.getFullYear();
console.log(ano);

console.log(`Eu sou ${nome} ${sobrenome} e nasci em ${ano - idd}`);