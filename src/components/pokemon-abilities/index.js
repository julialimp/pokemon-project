import { useState, useEffect } from 'react'
import { getPokemonAbilities } from '../../services/get-pokemon-abilities'
import { Description } from '../../styles/infos-style'

function Ability(props) {
    const [pokemonAbility, setPokemonAbility] = useState({
        effect_entries: [{
            effect: '',
            language: {
                name: '',
            },
        }],
        name: '',
    })

    useEffect(() => {
        async function fetchAbility() {
            const pokemonAbility = await getPokemonAbilities(props.ability)
            setPokemonAbility(pokemonAbility)
        }
        fetchAbility()
    }, [])
    
    return (
        <>
            <strong>{pokemonAbility.name}</strong>

            {pokemonAbility.effect_entries.map((abilityInfos) => {

                return (
                    abilityInfos.language.name === 'en' ?
                        <Description key={pokemonAbility.id} > {abilityInfos.effect}</Description >
                        : <p></p>
                )
            })}
        </>
    )
}

export { Ability }