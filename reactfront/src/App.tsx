import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CompShowUsers from './ShowUsers'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Proyecto</h1>
      <CompShowUsers />
    </>
  )
}

export default App
