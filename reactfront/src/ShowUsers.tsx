import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/users/";

interface User {
    id_use: string;
    nom_use: string;
    cor_use: string;
    pas_use: string;
}

const CompShowUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        getUsers();
    }, []) 

    const getUsers = async () => {
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    return (
        <>
            <h1>Usuarios</h1>
            {users.map((user) => (
                <div key={user.id_use}>
                    <h2>{user.nom_use}</h2>
                    <p>{user.cor_use}</p>
                </div>
            ))}
        </>
    )
}

export default CompShowUsers