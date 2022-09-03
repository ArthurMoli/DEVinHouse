function salvar(){
    var ttl = document.getElementById("titulo").value;
    var skill = document.getElementById("skill").value;
    var select = document.getElementById("select").value;
    var txar = document.getElementById("txar").value;
    var vid = document.getElementById("vid").value;
    
    localStorage.setItem("Título", ttl);
    localStorage.setItem("Linguagem", skill);
    localStorage.setItem("Skill", select);
    localStorage.setItem("Dica", txar);
    localStorage.setItem("Video", vid);

    var conteudo = document.getElementById('print').innerHTML;
    tela_impressao.document.write(conteudo);
    }
    
    function deletar(){
    localStorage.removeItem("Título")
    localStorage.removeItem("Linguagem")
    localStorage.removeItem("Skill")
    localStorage.removeItem("Dica")
    localStorage.removeItem("Video")
    }


     
