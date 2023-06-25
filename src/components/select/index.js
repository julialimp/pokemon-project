import React, { useEffect, useState } from "react";
import { getPokemonTypes } from "../../services/get-types";
import styled from "styled-components";

export const Select = ({value, onChange}) => {
    const [pokemonType, setPokemonType] = useState([])

    useEffect(() => {
        async function fetchType() {
            const pokemonTypes = await getPokemonTypes()
            setPokemonType(pokemonTypes)
        }
        fetchType()
    }, []);
    // console.log(pokemonType)

    return (
        <>
            <label>
                <SelectStyle name="selectedType" value={value} onChange={onChange}>
                    <option value="All">Select type</option>

                    {pokemonType.map((type) => {
                        // console.log(type)
                        return (
                            <option key={type.id} value={type.name}>{type.name}</option>
                        )
                    })}
                </SelectStyle>
            </label>
        </>
    )

}

const SelectStyle = styled.select`
width: 200px;
text-align: center;
height: 25px;
`