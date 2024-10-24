import { FormEvent } from 'react'
import { Link, NavLink } from "react-router-dom"
import './Login.css'

const Login = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className='login-section'>
            <div className='login'>
                <h1>Iniciar Sesión</h1>

                <form onSubmit={handleSubmit} className='login-form'>
                    <div className='login-form-field'>
                        <label htmlFor='email'>Email o nombre de usuario</label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                        />
                    </div>

                    <div className='login-form-field'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                        />
                    </div>

                    <input className='login-form-submit' type="submit" value="Iniciar sesión" />
                </form>
                <div className="login-toRegister">
                    
                    <span>¿No tienes cuenta?</span> <Link to={'/register'}>Regístrate</Link>
                </div>
            </div>

        </section>
    )
}

export default Login