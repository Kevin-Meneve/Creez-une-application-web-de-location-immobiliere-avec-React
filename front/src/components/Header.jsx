import { Link } from 'react-router-dom'
import logo from "../assets/LOGO.png"
 
function Header() {
    return (
        <header>
            <img className="header__logo" src={logo} alt="Logo Kasa" />
            <nav>
                <Link to="/" className='nav__link'>Accueil</Link>
                <Link to="/About" className='nav__link'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header