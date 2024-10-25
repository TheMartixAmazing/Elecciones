import { useState } from 'react'
import clsx from 'clsx';
import styles from './Card.module.css'

interface Candidato {
    name: string,
    cargo: string
    experiencia: string
    isChoose?: boolean | false
}

const Card = ({name, cargo, experiencia, isChoose}: Candidato) => {
    const [chosen, setChosen] = useState<boolean>(isChoose || false)

    const buttonText: string = chosen
        ? "Elegido"
        : "Votar"
        
    const buttonClass: string = clsx(styles.cardButton, {
        [styles.isChoose] : chosen
    })

    const handleClick = () => {
        setChosen(!chosen)
    }

    const imgSource = 'src/assets/react.svg'

    return (
        <section className={styles.card}>
            <header className={styles.cardHeader}>
                <img className={styles.cardImg} src={imgSource} alt="Imagen del candidato" />
                <div className={styles.cardHeaderInfo}>
                    <h3>{name}</h3>
                    <span className={styles.cardInfoExp}>{experiencia} años de experiencia</span>
                    <p className={styles.cardInfoCargo}>Cargo: {cargo}</p>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={buttonClass}>
                    <span className={styles.cardButtonText}>{buttonText}</span>
                    <span className={styles.cardButtonChangeVote}>Cambiar voto</span>
                </button>
            </aside>
        </section>
    )
}

export default Card