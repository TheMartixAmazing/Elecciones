import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CompShowUsers from '../ShowUsers'
import NavBar from '../components/navbar/NavBar'
import Candidatos from '../pages/candidatos/Candidatos'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Candidatos></Candidatos>
      </main>
    </>
  )
}

export default App
