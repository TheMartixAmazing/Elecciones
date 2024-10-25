import { Link, NavLink } from "react-router-dom"
import LogoUta from '../../assets/logouta.svg'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navPages}>
                <li><img src={LogoUta} alt="Logo UTA" className={styles.navLogoUTA} /></li>
                <NavLink to={'/'} className={({ isActive }) => isActive ? styles.navPageActive : ''}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/candidatos'} className={({ isActive }) => isActive ? styles.navPageActive : ''}>
                    <li>Candidatos</li>
                </NavLink>
                <NavLink to={'/propuestas'} className={({ isActive }) => isActive ? styles.navPageActive : ''}>
                    <li>Propuestas</li>
                </NavLink>
                <NavLink to={'/eventos'} className={({ isActive }) => isActive ? styles.navPageActive : ''}>
                    <li>Eventos</li>
                </NavLink>
                <NavLink to={'/sugerencias'} className={({ isActive }) => isActive ? styles.navPageActive : ''}>
                    <li>Dejanos tus sugerencias</li>
                </NavLink>
            </ul>
            <div className={styles.navSeparator} />
            <div className={styles.navLogin}>
                <Link to={'/login'}>
                    <button>Iniciar Sesion</button>
                </Link>
            </div>
        </nav>
    )
}

export { NavBar }