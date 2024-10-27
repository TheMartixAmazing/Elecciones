import { FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useField } from '../../util/hooks/useField';
import { loginUser } from '../../util/auth';

import clsx from 'clsx';

interface OnLogin {
    handleOnLogin: Function
}

const Login = ({ handleOnLogin }: OnLogin) => {
    const { state } = useParams()
    const newRegister = state === 'success'

    const [failLogin, setfailLogin] = useState(false)

    const userCredential = useField('text')
    const password = useField('password')
    
    const navigateTo = useNavigate()

    const classError = clsx('cont-message', {
        'show': failLogin || newRegister,
        'cont-message-error': failLogin
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        handleLogin()
    }

    const handleLogin = async () => {
        const { success, data } = await loginUser({
            credential: userCredential.value,
            password: password.value
        })

        setfailLogin(!success)

        if (success) {
            navigateTo(`/user/${data?.id_use}`)
            handleOnLogin(data?.id_use)
        }
    }

    return (
        <section className='form-container'>
            <div className='cont'>
                <h1>Iniciar Sesión</h1>

                <div className={classError}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                    </svg>
                    <span>{
                        newRegister ? "Registrado correctamente. Inicia sesión"
                            : "Credenciales incorrectas."
                    }</span>
                </div>

                <form onSubmit={handleSubmit} className='cont-form'>
                    <div className='cont-form-field'>
                        <label htmlFor='credential'>Email o nombre de usuario</label>
                        <input
                            {...userCredential}
                            name='credential'
                            id='credential'
                        />
                    </div>

                    <div className='cont-form-field'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            {...password}
                            name='password'
                            id='password'
                        />
                    </div>

                    <input className='cont-form-submit' type="submit" value="Iniciar sesión" />
                </form>
                <div className="cont-link">
                    <span>¿No tienes cuenta?</span> <Link to={'/register'}>Regístrate</Link>
                </div>
            </div>

        </section>
    )
}

export { Login }