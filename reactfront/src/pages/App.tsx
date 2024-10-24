import { Routes, Route } from 'react-router-dom'
import CompShowUsers from '../ShowUsers'
import NavBar from '../components/navbar/NavBar'
import Candidatos from './candidatos/PageCandidatos'
import Login from './login/PageLogin'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/candidatos" element={<Candidatos />} />
          <Route path="/users" element={<CompShowUsers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
