import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailsSection = styled.section`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    text-transform: capitalize;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.8fr;
    gap: 20px;
    padding: 20px;
    align-items: center;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const PokemonId = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 40px;
    padding: 20px;
`

export const Img = styled.img`
    width: 50%;
    padding: 20px;
`

export const Name = styled.h2`
    font-size: 30px;
    color: ${(props) => props.theme.infoColor};
`

export const Infos = styled.div`
    border-radius: 10px;
    height: 80vh;
    display: grid;
    grid: "moves type" 20%
          "moves abilities" 80% /
          600px 300px;
    gap: 10px;

    @media(max-width: 1024px) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`

export const Title = styled.h3`
    padding: 10px;
`

export const MoveList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 14px;
    grid-area: moves;
    border: solid 1px ${props => props.theme.color};
    border-radius: 10px;
    padding: 20px 0;
    background-color: ${(props) => props.theme.infoColor};

    @media(max-width: 1024px) {
        max-height: 80vh;
    }

    @media(max-width: 600px) {
        max-height: 90vh;
    }

    @media(max-width: 480px) {
        max-height: 100vh;
    }

    @media(max-width: 400px) {
        flex-wrap: nowrap;
        max-height: 5000px;
    }
`

export const AbilitiesList = styled.ul`
    grid-area: abilities;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${props => props.theme.color};
    border-radius: 10px;
    background-color: ${(props) => props.theme.infoColor};
`

export const TypeList = styled.ul`
    grid-area: type;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${props => props.theme.color};
    border-radius: 10px;
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.infoColor};
`

export const NavLink = styled(Link)`
    color: ${(props) => props.theme.color};
    text-decoration: none;
    font-weight: bold;
    margin: 15px;
    align-self: center;

    &:hover {
        transition: 0.5s ease-in-out;
        font-size: 18px;
    }
`

export const Description = styled.p`
    font-size: 12px;
    padding: 5px 20px;
`