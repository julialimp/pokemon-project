import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}  

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

`

export const BodyStyle = createGlobalStyle`
    body {
        background-color:  ${(props) => props.theme.backgroundColor};
    }
`