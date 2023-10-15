// Segunda opção de código, menor e menos verboso
const pokemonDetail = document.getElementById('pokemonDetail')

function convertPokemonDetailToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                
            </div>

            <div>
            <ol>
                <h2>About</h2>
                <li>Species</li>
                <li>Heigth ${pokemon.height}</li>
                <li>Weigth ${pokemon.weight}</li>
                <li>Abilities ${pokemon.abilities}</li>
            </ol>
        </div>

        </li>
    `
}

function loadPokemonDetail() {
    pokeApi.getPokemon().then((pokemon = []) => {
        const newHtml = pokemon.map(convertPokemonDetailToLi).join('')
        pokemonDetail.innerHTML += newHtml
    })
}

loadPokemonDetail()