let arrayMusicas = [
    {
                nome: "Believer",
                banda: "Imagine Dragons",
                anoDeLancamento: 2017,
                isGood: false
            },
            {
                nome: "Losing my Religion",
                banda: "R.E.M",
                anoDeLancamento: 1991,
                isGood: false
            },
            {
                nome: "Duality",
                banda: "Slipknot",
                anoDeLancamento: 2004,
                isGood: false
            },
            {
                nome: "Imagination",
                banda: "Foster the People",
                anoDeLancamento: 2019,
                isGood: false
            },
            {
                nome: "Without me",
                banda: "Halsey",
                anoDeLancamento: 2018,
                isGood: false
            },
            {
                nome: "DiE4u",
                banda: "Bring me the horizon",
                anoDeLancamento: 2021,
                isGood: false,
            },
            {
                nome: "Hail to the king",
                banda: "Avenged Sevenfold",
                anoDeLancamento: 2013,
                isGood: false
            },
            {
                nome: "Rock you like a hurricane",
                banda: "Scorpions",
                anoDeLancamento: 1984,
                isGood: false
            },
            {
                nome: "Misery business",
                banda: "Paramore",
                anoDeLancamento: 2007,
                isGood: false
            },
            {
                nome: "Brianstorm",
                banda: "Arctic Monkeys",
                anoDeLancamento: 2007,
                isGood: false
            }
        ];
    
    // altere todos os valores do atributo isGood que atualmente esta false para true - _Dica: utilize o .map para isso.
    arrayMusicas.map(function (item) {
      item.isGood = true;
    });
    console.log(arrayMusicas)
    
    // Imprima em uma lista não ordenada apenas os nomes das músicas (DOM)
    arrayMusicas.forEach(function(item){
      var listaUL = document.createElement("li");
      listaUL.innerHTML += item.nome;
      divPrincipal.appendChild(listaUL);
    });