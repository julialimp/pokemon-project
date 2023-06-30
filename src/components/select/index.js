import React, { useEffect, useState } from "react";
import { getPokemonTypes } from "../../services/get-types";
import { SelectStyle } from "../../styles/select-style";

export const Select = ({ value, onChange }) => {
    const [pokemonType, setPokemonType] = useState([])

    useEffect(() => {
        async function fetchType() {
            const pokemonTypes = await getPokemonTypes()
            setPokemonType(pokemonTypes)
        }
        fetchType()
    }, []);

    return (
        <>
            <label>
                <SelectStyle name="selectedType" value={value} onChange={onChange}>
                    <option value="All">Select type</option>

                    {pokemonType.map((type) => {
                        return (
                            <option key={type.id} value={type.name}>{type.name}</option>
                        )
                    })}
                </SelectStyle>
            </label>
        </>
    )

}

