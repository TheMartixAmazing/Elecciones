import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Mary, Sara } from '../util/data';
import axios from "axios"
import clsx from "clsx";

const URI = "http://localhost:8000/users/";

interface User {
    nom_use: string
    cor_use: string
}

interface Candidata {
    name: string
    img: string
}

interface UserPageProps {
    handleOnLogout: () => void
}

const UserPage = ({ handleOnLogout }: UserPageProps) => {
    const [user, setUser] = useState<User>()
    const [candidata, setCandidata] = useState<Candidata>()
    const navigateTo = useNavigate()
    const vote = localStorage.getItem('vote')

    const backgroundColor = vote === '0'
        ? ''
        : vote === '1' ? '#0953AA'
            : '#D18'

    const cardClass = clsx('user-vote', {
        'voted': vote !== '0'
    })

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        const vote = localStorage.getItem('vote');
        if (vote === '0') return;
        setCandidata(vote === '1' ? Sara : Mary);
    }, []);

    const getUser = async () => {
        const userId = localStorage.getItem('userId')

        if (!userId) {
            navigateTo('/login/new')
            return
        }

        const { data } = await axios.get<{
            success: boolean,
            user: User
        }>(`${URI}${userId}`)

        if (!data.success) {
            navigateTo('/login/new')
        }

        setUser(data.user)
    }

    return (
        <section className="user-cont">
            <div className="user-card">
                <header className="user-info">
                    <p>Nombre de usuario: <b>{user?.nom_use}</b></p>
                    <p>Correo: <b>{user?.cor_use}</b></p>
                </header>
                <div className={cardClass} style={{
                    backgroundColor: backgroundColor
                }}>
                    {candidata ? (
                        <>
                            <p>Votaste por:</p>
                            <div className="user-vote-card">
                                <img src={candidata?.img} alt="Imagen de la candidata" />
                                <p>{candidata?.name}</p>
                                <Link to={'/candidatos'} className="user-buttonCard">Ver voto</Link>
                            </div>
                        </>
                    ) : <p>Sin voto aún</p>}

                </div>
                <button onClick={handleOnLogout} className="user-buttonLogout">Cerrar la sesión</button>
            </div>
        </section>
    )
}

export { UserPage }