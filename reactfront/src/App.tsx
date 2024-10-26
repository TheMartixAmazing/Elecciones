import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar'
import { CandidatosPage } from './pages/PageCandidatos'
import { Login } from './pages/auth/PageLogin'
import { Register } from './pages/auth/PageRegister'
import { UserPage } from './pages/PageUser'
import { useState } from 'react'

// Importacion de estilos
import './styles/app.css'


function App() {
    const [userId, setUserId] = useState<string>('')

    const onLogin = (userId: string) => {
        setUserId(userId)
    }

    return (
        <>
            <NavBar userId={userId}/>
            <main>
                <Routes>
                    <Route path="/candidatos" element={<CandidatosPage />} />
                    <Route path="/login/:state" element={<Login handleOnLogin={onLogin}/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user/:userId" element={<UserPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App
