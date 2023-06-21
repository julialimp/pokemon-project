import { useContext, useEffect, useState } from "react"
import { ButtonLoadMore } from "../load-more-button"
import { getPokemons } from "../../services/get-pokemon-list"
import { ThemeContext } from "../../contexts/theme-context"
import { Container, Img, NavLink, PokemonCards, PokemonSection, } from "../../styles/home-style"
import { BodyStyle } from "../../styles/global-style"
import { Select } from "../select"
import { getPokemonTypes } from "../../services/get-types"


const PokemonList = () => {
    const [offset, setOffset] = useState(0)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const renderPokemons = await getPokemons(offset)
            console.log(renderPokemons)
            setPokemons([...pokemons, ...renderPokemons])
        }
        fetchData()
    }, [offset]);

    const { theme } = useContext(ThemeContext)

    return (
        <PokemonSection theme={theme}>
            <BodyStyle theme={theme} />

            <Select />

            <Container >
                {pokemons.map((pokemon) => {
                    // { console.log(pokemon) }
                    return (
                        <PokemonCards key={pokemon.name} theme={theme}>
                            <NavLink to={`/pokemon/${pokemon.name}`} theme={theme}>
                                <Img src={pokemon.sprites.other.dream_world.front_default} />
                                <h2>{pokemon.name}</h2>
                            </NavLink>
                        </PokemonCards>
                    )
                })}
            </Container>
            <ButtonLoadMore setOffset={setOffset} offset={offset} />
        </PokemonSection>
    )
}

export { PokemonList }