import { useContext, useEffect, useState } from "react"
import { ButtonLoadMore, ButtonLoadMoreTypes } from "../load-more-button"
import { getPokemons } from "../../services/get-pokemon-list"
import { ThemeContext } from "../../contexts/theme-context"
import { Container, Img, NavLink, PokemonCards, PokemonSection, } from "../../styles/home-style"
import { BodyStyle } from "../../styles/global-style"
import { Select } from "../select"

const PokemonList = () => {
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [pokemons, setPokemons] = useState([])
    const [value, setValue] = useState('All')
    const [renderAmount, setRenderAmount] = useState(10)

    const { theme } = useContext(ThemeContext)

    const handleSelectChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        async function fetchData() {
            (value !== ('All' || 'all')) ? setLimit(400) : setLimit(limit)

            const renderPokemons = await getPokemons(limit, offset)
            setPokemons([...pokemons, ...renderPokemons])
        }
        fetchData()
    }, [limit, offset, value]);

    const filteredPokemons = pokemons.filter((pokemon) => {
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

    const limitFilteredPokemons = filteredPokemons.slice(0, renderAmount)

    return (
        <PokemonSection theme={theme}>
            <BodyStyle theme={theme} />

            <Select value={value} onChange={handleSelectChange} />

            {value === ('All' || 'all') ? (
                <>
                    <Container >
                        {pokemons.map((pokemon) => {
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
                </>
            ) : (
                <>
                    <Container >
                        {limitFilteredPokemons.map((pokemon) => {
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
                    <ButtonLoadMoreTypes setRenderAmount={setRenderAmount} renderAmount={renderAmount} setOffset={setOffset} offset={offset} />
                </>
            )
            }
        </PokemonSection>
    )
}

export { PokemonList }