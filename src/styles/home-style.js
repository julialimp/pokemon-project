import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokemonSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    display: flex;
    height: 100%;
    margin-bottom: auto;
    margin-top: 20px;
    flex-direction: column;
    text-transform: initial;
    align-items: center;
`

export const PokemonCards = styled.div`
    background-color: ${(props) => props.theme.cardColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 150px;
    height: 150px;
    padding: 40px;
    border-radius: 50%;
    gap: 30px;
    box-shadow: 4px 4px 20px #000000;
    text-transform: capitalize;
    
    &:hover {
        transition: 0.5s ease-in-out;
        scale: 1.05;
    }
`

export const NavLink = styled(Link)`
    color: ${(props) => props.theme.color};
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 30px 30px 0px 30px;
    
`

export const Img = styled.img`
    width: 70%;
`

export const DivBtn = styled.div`
    text-align: center;
`

export const Button = styled.button`
    padding: 12px 30px;
    margin: 35px 0;
    font-weigth: bold;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover {
        scale: 1.08;
    }
`