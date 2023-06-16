const baseUrl = 'https://pokeapi.co/api/v2/'

async function getPokemonDetails(name) {
    const response = await fetch(`${baseUrl}pokemon/${name}`)
    // console.log(name)
    return await response.json()
}

export { getPokemonDetails }