import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import LogoUta from '../../assets/logouta.svg'

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav-pages">
                <li><img src={LogoUta} alt="Logo UTA" className="nav-logoUTA" /></li>
                <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-page-active' : ''}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/candidatos'} className={({isActive}) => isActive ? 'nav-page-active' : ''}>
                    <li>Candidatos</li>
                </NavLink>
                <NavLink to={'/propuestas'} className={({isActive}) => isActive ? 'nav-page-active' : ''}>
                    <li>Propuestas</li>
                </NavLink>
                <NavLink to={'/eventos'} className={({isActive}) => isActive ? 'nav-page-active' : ''}>
                    <li>Eventos</li>
                </NavLink>
                <NavLink to={'/sugerencias'} className={({isActive}) => isActive ? 'nav-page-active' : ''}>
                    <li>Dejanos tus sugerencias</li>
                </NavLink>
            </ul>
            <div className="nav-separator" />
            <div className="nav-login">
                <Link to={'/login'}>
                    <button>Iniciar Sesion</button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar