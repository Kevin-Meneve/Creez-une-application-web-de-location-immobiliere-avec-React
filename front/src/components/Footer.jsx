import logo from "../assets/Logo_footer.png"
 
function Footer() {
    return (
        <footer>
            <img className="footer__logo" src={logo} alt="Logo Kasa" />
            <p className="footer__content">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer