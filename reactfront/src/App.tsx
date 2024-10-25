import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navBar/NavBar'
import { CandidatosPage } from './pages/PageCandidatos'
import { Login } from './pages/auth/PageLogin'
import { Register } from './pages/auth/PageRegister'

// Importacion de estilos
import './styles/app.css'


function App() {

    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/candidatos" element={<CandidatosPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </main>
        </>
    )
}

export default App
