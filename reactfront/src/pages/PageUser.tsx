import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const URI = "http://localhost:8000/users/";

interface User {
    nom_use: string
    cor_use: string
}

const UserPage = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const user = await axios.get(`${URI}${userId}`)
        setUser(user.data)
    }

    return (
        <section className="user-cont">
            <div className="user-card">
                <header className="user-info">
                    <p>Nombre de usuario: <b>{user?.nom_use}</b></p>
                    <p>Correo: <b>{user?.cor_use}</b></p>
                </header>
                <div className="user-vote">
                    <p>Sin voto aún</p>
                </div>
            </div>
        </section>
    )
}

export { UserPage }