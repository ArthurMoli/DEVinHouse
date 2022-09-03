var botao = document.querySelector(".button");

botao.addEventListener("click", () => {
    const options = {
        method: "GET",
    };
    
    let pokemon = document.querySelector(".input__search").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, options)
    
    .then((response) => {
        return response.json();
    })
    .then((pokemon) => {

        console.log(pokemon);

        let image = document.querySelector(".pokemonimage");
        let idPokemon = document.querySelector(".pokemonnumber");
        let namePokemon = document.querySelector(".pokemonname");
        let typePokemon = document.querySelector("#pokemontype");
        let weightPokemon = document.querySelector("#weight");
        let abilityPokemon = document.querySelector("#ability");

        image.setAttribute('src', pokemon.sprites.front_default);
        idPokemon.innerHTML = pokemon.id;
        namePokemon.innerHTML = pokemon.name;
        typePokemon.innerHTML = pokemon.types[0].type.name;
        weightPokemon.innerHTML = pokemon.weight;


        abilityPokemon.innerHTML = '';
        pokemon.abilities.forEach(item => {
            let tagLi = document.createElement('li');
            tagLi.innerHTML = item.ability.name;
            abilityPokemon.appendChild(tagLi)
        });

        console.log(image)
    })
    .catch((err) => {
        window.alert('Pokemon inexistente.')
        console.error(err);
    });

});