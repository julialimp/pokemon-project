import { ThemeTogglerButton } from "../theme-toggler/theme-toggler"
import logo from '../../images/logo-pokemon.png'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Link } from "react-router-dom"
import { HeaderStyle, Logo } from "../../styles/header-style"

const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <HeaderStyle className="App-header" theme={theme}>
            <Link to='/'>
            <Logo src={logo} className="App-logo" alt="logo" /> </Link>
            <ThemeTogglerButton />
        </HeaderStyle>
    )
}

// style={{ backgroundColor: theme.color }}


export { Header }