const baseUrl = 'https://pokeapi.co/api/v2/'

async function getPokemonAbilities(abilityName) {
    const response = await fetch (`${baseUrl}ability/${abilityName}`)
    // console.log(abilityName)
    return await response.json()
}

export { getPokemonAbilities }

