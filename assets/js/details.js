const pokemonList = document.getElementById('pokemonList')

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <a href="/details.html">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </a>
            </div>
        </li>
    `
}
