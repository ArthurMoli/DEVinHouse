var botao = document.getElementById('btn');

botao.addEventListener('click', () => {
    var info = document.getElementById('info');
    info.innerHTML = "";
    var input = document.getElementById('cep-entrada').value;
    
    // Verificacao do input
    if (input == '') {
        window.alert('O campo de CEP precisa ser preenchido.')
        cepOk = false;
    } else if (input.length != 8) {
        window.alert('O CEP inserido é inválido. \n\n Verifique o número e digite novamente.')
        cepOk = false;
    } else {
        
        const options = {
            method: "GET",
            header: {'contentType': 'application/json'},
        }
        
        fetch(`https://viacep.com.br/ws/${input}/json/`, options)
        .then((response)=>{
            return response.json(); // o .json() transforma a requisicao em JSON
        }).then((response)=>{ // o segundo .then e para trazer o response em formato de json
            
            info.innerHTML += `<br><br><p>${response.logradouro} ${response.complemento} - ${response.bairro} - ${response.localidade}/${response.uf}</p>`;
        }).catch((err)=>{
            console.error(err)
        });
    }
})