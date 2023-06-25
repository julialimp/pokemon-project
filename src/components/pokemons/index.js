import { useContext, useEffect, useState } from "react"
import { ButtonLoadMore } from "../load-more-button"
import { getPokemons } from "../../services/get-pokemon-list"
import { ThemeContext } from "../../contexts/theme-context"
import { Container, Img, NavLink, PokemonCards, PokemonSection, } from "../../styles/home-style"
import { BodyStyle } from "../../styles/global-style"
import { Select } from "../select"

const PokemonList = () => {
    const [limit, setLimit] = useState(10)
    const [pokemons, setPokemons] = useState([])
    const [value, setValue] = useState('All')
    const [renderAmount, setRenderAmount] = useState(10)

    const { theme } = useContext(ThemeContext)

    const handleSelectChange = (e) => {
        setValue(e.target.value);
    }
    // console.log(value)
    useEffect(() => {
        (value !== ('All' || 'all')) ? setLimit(300) : setLimit(10)
    }, [limit, value])
    // console.log(limit)

    useEffect(() => {
        async function fetchData() {
            const renderPokemons = await getPokemons(limit)
            // console.log(renderPokemons)
            setPokemons([...pokemons, ...renderPokemons])
        }
        fetchData()
    }, [limit]);
    // console.log(pokemons)

    const filteredPokemons = pokemons.filter((pokemon) => {
        // console.log(pokemon.types)
        // console.log(pokemon.types.length)
        if (pokemon.types.length > 1) {
            return (
                (pokemon.types[0].type.name === value) ||
                (pokemon.types[1].type.name === value)
            )
        } else {
            return (
                (pokemon.types[0].type.name === value)
            )
        }
    })
    console.log(filteredPokemons)

    const limitFilteredPokemons = filteredPokemons.slice(0, renderAmount)
    console.log(limitFilteredPokemons)

    return (
        <PokemonSection theme={theme}>
            <BodyStyle theme={theme} />

            <Select value={value} onChange={handleSelectChange} />

            {value === ('All' || 'all') ? (
                <Container >
                    {/* {console.log(pokemons)} */}
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
            ) : (
                <Container >
                    {/* {console.log(pokemonType.pokemon)} */}
                    {limitFilteredPokemons.map((pokemon) => {
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
            )
            }

            <ButtonLoadMore setRenderAmount={setRenderAmount} renderAmount={renderAmount} />
        </PokemonSection>
    )
}

export { PokemonList }