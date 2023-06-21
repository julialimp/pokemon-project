import styled from "styled-components"

export const HeaderStyle = styled.header`
    max-height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: ${(props) => props.theme.headerColor};
`
export const Logo = styled.img`
    width: 150px;
`

export const Button = styled.button`
    padding: 15px;
    margin: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: 2px 2px 10px #cccccc;
    
    &:hover {
        background-color: #cccccc;
        scale: 1.08;
    }
`