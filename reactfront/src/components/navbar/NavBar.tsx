import { Link } from "react-router-dom"
import './NavBar.css'
import LogoUta from '../../assets/logouta.svg'

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav-pages">
                {/* <li><Link to="/">Home</Link></li>*/}
                <li><img src={LogoUta} alt="Logo UTA" className="nav-logoUTA"/></li>
                <li>Home</li>
                <li className="nav-pages-here">Candidatos</li>
                <li>Propuestas</li>
                <li>Eventos</li>
                <li>Dejanos tus sugerencias</li>
            </ul>
            <div className="nav-separator" />
            <div className="nav-login">
                <button>Iniciar Sesion</button>
            </div>
        </nav>
    )
}

export default NavBar