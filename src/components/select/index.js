import React, { useEffect, useState } from "react";
import { getPokemonTypes } from "../../services/get-types";
import styled from "styled-components";
 

export const Select = () => {
    const [ pokemonType, setPokemonType ] = useState([])
    const [ selectType, setSelectType ] = useState('')

    const onChange = (e) => {
        setSelectType(e.target.value);
        console.log(selectType);
    }

    useEffect(() => {
        async function fetchType() {
            const pokemonTypes = await getPokemonTypes()
            setPokemonType(pokemonTypes)
        }
        fetchType()
    }, []);

    console.log(pokemonType)

    return (
        <>
            <SelectStyle onChange={onChange}>
                <option value="All">Select type</option>

                {pokemonType.map((type) => {
                    // console.log(type)
                    return (
                        <option value={type.name}>{type.name}</option>
                    )
                })}
            </SelectStyle>
        </>
    )
    
}

const SelectStyle = styled.select`
width: 200px;
text-align: center;
height: 25px;
background-color: ;
`