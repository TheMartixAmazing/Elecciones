import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useField } from "../../util/hooks/useField";
import { createNewUser } from "../../util/auth";
import clsx from "clsx";

const Register = () => {
    const [failRegister, setfailRegister] = useState(false)

    const userName = useField('text')
    const email = useField('email')
    const password = useField('password')

    const navigateTo = useNavigate()

    const classError = clsx(['cont-message', 'cont-message-error'], {
        'show': failRegister
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        const { success } = await createNewUser({
            nom_use: userName.value,
            cor_use: email.value,
            pas_use: password.value
        })

        setfailRegister(!success)

        if (success) {
            navigateTo(`/login/success`)
        }

    }

    return (
        <section className='form-container'>
            <div className='cont'>
                <h1>Regístrate</h1>

                <div className={classError}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                    </svg>
                    <span>El usuario ya existe.</span>
                </div>

                <form onSubmit={handleSubmit} className='cont-form'>
                    <div className='cont-form-field'>
                        <label htmlFor='name'>Nombre de usuario</label>
                        <input
                            {...userName}
                            name='name'
                            id='name'
                            required
                            minLength={5}
                        />
                    </div>

                    <div className='cont-form-field'>
                        <label htmlFor='email'>Email</label>
                        <input
                            {...email}
                            name='email'
                            id='email'
                            required
                        />
                    </div>

                    <div className='cont-form-field'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            {...password}
                            name='password'
                            id='password'
                            required
                            min={5}
                        />
                    </div>

                    <input className='cont-form-submit' type="submit" value="Registrarse" />
                </form>
                <div className="cont-link">
                    <span>¿Ya tienes una cuenta?</span> <Link to={'/login/new'}>Inicia sesión</Link>
                </div>
            </div>

        </section>
    );
}

export { Register };