import { useState } from 'react'
import './Card.css'

interface Candidato {
    name: string,
    cargo: string
    experiencia: string
    isChoose?: boolean
}

const Card = (candidato: Candidato) => {
    const [isChoose, setIsChoose] = useState(candidato.isChoose)

    const buttonText: string = isChoose 
        ? "Elegido" 
        : "Votar"
    const buttonClass: string = isChoose 
        ? "card-button isChoose" 
        : "card-button"

    const imgSource = "src/assets/react.svg"

    const handleClick = () => {
        setIsChoose(!isChoose)
    }

    return (
        <section className='card'>
            <header className='card-header'>
                <img className='card-img' src={imgSource} alt="Imagen del candidato" />
                <div className="card-header-info">
                    <h3>{candidato.name}</h3>
                    <span className='card-info-exp'>{candidato.experiencia} años de experiencia</span>
                    <p className='card-info-cargo'>Cargo: {candidato.cargo}</p>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={buttonClass}>
                    <span className='card-buttonText'>{buttonText}</span>
                    <span className='card-buttonChangeVote'>Cambiar voto</span>
                </button>
            </aside>
        </section>
    )
}

export default Card