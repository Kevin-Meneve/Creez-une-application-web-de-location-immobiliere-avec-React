import { Link } from 'react-router-dom'
import logo from "../assets/LOGO.png"
 
function Header() {
    return (
        <header>
            <img className="Header__logo" src={logo} alt="Logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </header>
    )
}

export default Header