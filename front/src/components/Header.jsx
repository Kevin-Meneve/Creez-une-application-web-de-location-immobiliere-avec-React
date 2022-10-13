import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
            <img className="Header__logo" src="../../public/LOGO.png" alt="Logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </header>
    )
}

export default Header