import { FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useField } from "../../util/hooks/useField";

const Register = () => {
    const userName = useField('text')
    const email = useField('email')
    const password = useField('password')

    useEffect(() => {
        console.log('userName')
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const formData = {
            userName: userName.value,
            email: email.value,
            password: password.value
        };
        console.log(JSON.stringify(formData));
    }

    return (
        <section className='form-container'>
            <div className='cont'>
                <h1>Regístrate</h1>

                <form onSubmit={handleSubmit} className='cont-form'>
                    <div className='cont-form-field'>
                        <label htmlFor='name'>Nombre de usuario</label>
                        <input
                            {...userName}
                            name='name'
                            id='name'
                        />
                    </div>

                    <div className='cont-form-field'>
                        <label htmlFor='email'>Email</label>
                        <input
                            {...email}
                            name='email'
                            id='email'
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

                    <input className='cont-form-submit' type="submit" value="Registrarse" />
                </form>
                <div className="cont-link">
                    <span>¿Ya tienes una cuenta?</span> <Link to={'/login'}>Inicia sesión</Link>
                </div>
            </div>

        </section>
    );
}

export { Register };