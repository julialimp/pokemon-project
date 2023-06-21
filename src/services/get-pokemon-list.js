const baseUrl = 'https://pokeapi.co/api/v2/'

async function getPokemons(offset) {
    const response = await fetch(`${baseUrl}pokemon?limit=10&offset=${offset}`)
    const data = await response.json()
    // console.log(data)
    const { results } = data

    const pokemonsNames = results.map((pokemon) => {
        return pokemon.name
    })

    const pokemonList = pokemonsNames.map(async (pokemon) => await getPokemonData(pokemon)
    ); //Aqui percorro todos os nomes de cada pokemon para ser usado na função do fetch
    //console.log(pokemonList) //retorna as Promise
    return await Promise.all(pokemonList)
}

async function getPokemonData(name) {
    const response = await fetch(`${baseUrl}pokemon/${name}`)
    return await response.json()
}

export { getPokemons }