import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Mary, Sara } from '../../util/data';
import clsx from 'clsx';
import styles from './Card.module.css'



interface Candidato {
    isFirst?: boolean
    isLocked?: boolean
    isLoged: boolean
    handleLock: (isFirst: boolean) => void
}

const Card = ({
    isFirst = false, isLocked = false, handleLock, isLoged = false
}: Candidato) => {
    const [chosen, setChosen] = useState<boolean>(false)
    const navigateTo = useNavigate()    

    const bgImage: string = isFirst
        ? 'url("/assets/bg1.svg")'
        : 'url("/assets/bg2.svg")'

    const buttonText: string = chosen
        ? "Elegido"
        : "Votar"

    const buttonClass: string = clsx(styles.cardButton, {
        [styles.isChoose]: chosen,
        [styles.isLocked]: isLocked
    })

    const handleVote = () => {
        if (isLocked) return

        if (!isLoged) {
            navigateTo('/login/new')
        }
        setChosen(!chosen)
        handleLock(isFirst)
    }

    useEffect(() => {
        const vote = localStorage.getItem('vote')
        if (vote === '0') return

        if (isFirst && vote === '1') {
            setChosen(true)
        } else if (!isFirst && vote === '2') {
            setChosen(true)
        }
    }, [])

    const candidato = isFirst ? Sara : Mary

    return (
        <section className={styles.card} style={{
            backgroundImage: bgImage
        }} >
            <header className={styles.cardHeader}>
                <img src={candidato.img} className={styles.cardImg} alt='Imagen del candidato' />
                <div className={styles.cardInfo}>
                    <h2 className={styles.cardInfoH2}>{candidato.name}</h2>
                    <div className={styles.cardDelegadoCargo}>
                        <p><strong>{candidato.cargo}</strong></p>
                    </div>
                    <button className={buttonClass} onClick={handleVote}>
                        {isLocked
                            ? <svg className='bi' width='32' height='32' fill='currentColor'>
                                <use href='/assets/icons.svg#lock'></use>
                            </svg>
                            : <span className={styles.cardButtonText}>{buttonText}</span>
                        }
                        <span className={styles.cardButtonChangeVote}>
                            Cambiar voto
                        </span>
                    </button>
                </div>
            </header>
            <div className={styles.cardContDelegados}>
                {candidato.delegados.map((delegado, index) => (
                    <div key={index} className={styles.cardDelegadoCard}>
                        <img src={delegado.img} alt='Imagen de delegado' />
                        <p>{delegado.name}</p>
                        <div className={styles.cardDelegadoCargo}>
                            <p>{delegado.cargo}</p>
                        </div>
                    </div>
                ))}
            </div>
            <aside className={styles.cardAside}>
                <h3>Experiencia</h3>
                <div>
                    <div className={styles.asideP}>
                        <p>CUARTO NIVEL</p>
                    </div>
                    <ul>
                        {candidato.experiencia.cuartoNivel.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className={styles.asideP}>
                        <p>TERCER NIVEL</p>
                    </div>
                    <ul>
                        {candidato.experiencia.tercerNivel.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
            </aside>

        </section >
    )
}

export default Card