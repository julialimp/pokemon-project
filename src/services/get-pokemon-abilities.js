const baseUrl = 'https://pokeapi.co/api/v2/'

async function getPokemonAbilities(abilityName) {
    const response = await fetch(`${baseUrl}ability/${abilityName}`)
    return await response.json()
}

export { getPokemonAbilities }

