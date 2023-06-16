import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonDetails } from "../../services/get-pokemon-details"
import { Ability } from "../pokemon-abilities"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { AbilitiesList, Container, DetailsSection, Img, Infos, MoveList, Name, NavLink, PokemonId, Title, TypeList } from "../../styles/infos-style"
import { BodyStyle } from "../../styles/global-style"


const PokemonDetails = () => {
    const [pokemonDetails, setPokemonDetails] = useState({
        sprites: {
            other: {
                dream_world: {
                    front_default: ''
                }
            }
        },
        moves: [],
        abilities: [],
        types: []
    })

    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            const pokemon = await getPokemonDetails(name)
            // console.log(pokemon)
            setPokemonDetails(pokemon)
            // console.log(pokemon.abilities[0].ability)
        }
        fetchData()
    }, [])

    // console.log(pokemonDetails)
    const { theme } = useContext(ThemeContext)

    return (
        <DetailsSection theme={theme} >
            <BodyStyle theme={theme} />
            <Container>
                <PokemonId theme={theme}>
                    {<Img src={pokemonDetails.sprites.other.dream_world.front_default} alt="pokemon" />}
                    <Name>{name}</Name>
                </PokemonId>

                <Infos>
                    <MoveList theme={theme}>
                        <Title>Moves:</Title>

                        {pokemonDetails.moves.map((pokemon) => {
                            return (
                                <li key={pokemonDetails.id}>{pokemon.move.name}</li>
                            )
                        })}
                    </MoveList>

                    <AbilitiesList theme={theme}>
                        <Title>Abilities:</Title>
                        {pokemonDetails.abilities.map((pokemon) => {
                            return (
                                <li key={pokemonDetails.id}>
                                    <Ability ability={pokemon.ability.name} />
                                </li>
                            )
                        })}
                    </AbilitiesList>

                    <TypeList theme={theme}>
                        <Title theme={theme}>Type:</Title>
                        {pokemonDetails.types.map((pokemon) => {
                            return (
                                <li key={pokemonDetails.id}>{pokemon.type.name}</li>
                            )
                        })}
                    </TypeList>
                </Infos>
            </Container>
            <NavLink to='/' theme={theme}>Go back to home page </NavLink>
        </DetailsSection>
    )
}

export { PokemonDetails }