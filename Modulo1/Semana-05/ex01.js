var botao = document.getElementById('btn');
var contarClicks = 0;

function clicarBotao() {
    contarClicks++;
    console.log(`O botão foi clicado ${contarClicks}X.`)
}

botao.addEventListener('click', clicarBotao)