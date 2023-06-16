import { createContext, useState } from "react"

export const themes = {
    light: {
        color: '#060c1e',
        headerColor: '#474f5e',
        backgroundColor: '#b6b7ba',
        cardColor: '#4d8269',
        infoColor: '#a6c6b7'
    },

    dark: {
        color: '#060c1e',
        headerColor: '#474f5e',
        backgroundColor: '#282c34',
        cardColor: '#474f5e',
        infoColor: '#6f7a8f'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}