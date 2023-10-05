
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    //details
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.ability = pokeDetail.abilities
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url) //requisição de lista de pokemons
        .then((response) => response.json()) //converteu o http response pra json
        .then((jsonBody) => jsonBody.results) //devolveu o resultado em json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //convertou a lista de pokemons em nova lista de detalhes
        .then((detailRequests) => Promise.all(detailRequests)) //lista de json de detalhes
        .then((pokemonsDetails) => pokemonsDetails) //modelo da pokeapi
}

pokeApi.getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/${id}`

    return fetch(url) //requisição do id do pokemon
        .then((response) => response.json()) //converteu o http response pra json
        .then((jsonBody) => jsonBody.results) //devolveu o resultado em json
        .then((pokemon) => pokemon.map(pokeApi.getPokemonDetail)) //convertou a lista de pokemons em nova lista de detalhes
        
}

//utilizando arrow fuction, ajuda a reduzir a verbozidade do codigo
