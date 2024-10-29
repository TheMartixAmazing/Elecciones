import { useState } from 'react'
import clsx from 'clsx';
import styles from './Card.module.css'

interface Candidato {
    name: string,
    cargo: string
    experiencia: string
    isChoose?: boolean | false
    isFirst?: boolean
}

// const Card = ({name, cargo, experiencia, isChoose}: Candidato) => {
//     const [chosen, setChosen] = useState<boolean>(isChoose || false)

//     const buttonText: string = chosen
//         ? "Elegido"
//         : "Votar"

//     const buttonClass: string = clsx(styles.cardButton, {
//         [styles.isChoose] : chosen
//     })

//     const handleClick = () => {
//         setChosen(!chosen)
//     }

//     const imgSource = 'src/assets/react.svg'

//     return (
//         <section className={styles.card}>
//             <header className={styles.cardHeader}>
//                 <img className={styles.cardImg} src={imgSource} alt="Imagen del candidato" />
//                 <div className={styles.cardHeaderInfo}>
//                     <h3>{name}</h3>
//                     <span className={styles.cardInfoExp}>{experiencia} años de experiencia</span>
//                     <p className={styles.cardInfoCargo}>Cargo: {cargo}</p>
//                 </div>
//             </header>

//             <aside>
//                 <button onClick={handleClick} className={buttonClass}>
//                     
//                 </button>
//             </aside>
//         </section>
//     )
// }

const Card = ({ name, cargo, experiencia, isChoose, isFirst }: Candidato) => {
    const [chosen, setChosen] = useState<boolean>(isChoose || false)

    const bgImage: string = isFirst
        ? 'url("/assets/bg1.svg")'
        : 'url("/assets/bg2.svg")'

    const buttonText: string = chosen
        ? "Elegido"
        : "Votar"

    const buttonClass: string = clsx(styles.cardButton, {
        [styles.isChoose]: chosen
    })

    return (
        <section className={styles.card} style={{
            backgroundImage: bgImage
        }} >
            <header className={styles.cardHeader}>
                <img src='https://www.marycruzuta.com/assets/images/Mary.JPG' className={styles.cardImg} alt="Imagen del candidato" />
                <div className={styles.cardInfo}>
                    <h2>SARA CAMACHO</h2>
                    <div className={styles.cardDelegadoCargo}>
                        <p><strong>RECTORA</strong></p>
                    </div>
                    <button className={buttonClass} onClick={() => setChosen(!chosen)}>
                        <span className={styles.cardButtonText}>{buttonText}</span>
                        <span className={styles.cardButtonChangeVote}>Cambiar voto</span>
                    </button>
                </div>
            </header>
            <div className={styles.cardContDelegados}>
                <div className={styles.cardDelegadoCard}>
                    <img src='https://www.marycruzuta.com/assets/images/Juan.JPG' alt="Imagen de delegado" />
                    <p>ALBERTO RIOS</p>
                    <div className={styles.cardDelegadoCargo}>
                        <p>VICERRECTORADO DE INVESTIGACIÓN</p>
                    </div>
                </div>
                <div className={styles.cardDelegadoCard}>
                    <img src='https://www.marycruzuta.com/assets/images/Vinicio.JPG' alt="Imagen de delegado" />
                    <p>SANTIAGO LOPEZ</p>
                    <div className={styles.cardDelegadoCargo}>
                        <p>VICERRECTOR ACADEMICO</p>
                    </div>
                </div>
                <div className={styles.cardDelegadoCard}>
                    <img src='https://www.marycruzuta.com/assets/images/Sandra.JPG' alt="Imagen de delegado" />
                    <p>FERNANDA FLORES</p>
                    <div className={styles.cardDelegadoCargo}>
                        <p>VICERRECTORA ADMINISTRATIVA</p>
                    </div>
                </div>
            </div>
            <aside className={styles.cardAside}>
                <h3>Experiencia</h3>
                <div>
                    <div className={styles.asideP}>
                        <p>CUARTO NIVEL</p>
                    </div>
                    <ul>
                        <li>Doctora o PHD dentro del programa de doctorado en filosofía y ciencias del lenguaje</li>
                        <li>Máster universitario en Lingüistica aplicada al Inglés</li>
                        <li>Magister Tecnología de la Información y Multimedia Educativa</li>
                        <li>Máster en Docencia Universitaria y Administración Educativa</li>
                        <li>Doctora en Jurisprudencia</li>
                        <li>Diplomado Superior en Teoría, Diseño y Evaluación Curricular</li>
                        <li>Diploma Superior en Curriculo por Competencia</li>
                        <li>Diploma superior de la enseñanza de inglés como segunda lengua</li>
                    </ul>
                </div>
                <div>
                    <div className={styles.asideP}>
                        <p>TERCER NIVEL</p>
                    </div>
                    <ul>
                        <li>Doctora En Ciencias De La Educación Mención Gerencia Educativa</li>
                        <li>Licenciada En Ciencias De La Educación Especialidad Inglés</li>
                        <li>Licenciada En Ciencias Políticas Y Sociales</li>
                        <li>Abogada De Los Juzgados Y Tribunales De La República Del Ecuador</li>
                        <li>Ingeniera En Comercio Exterior e Integración</li>
                        <li>Profesora De Segundo Enseñanza En La Especialización De</li>
                        <li>Tecnólogo En Comercio</li>
                    </ul>
                </div>
            </aside>

        </section >
    )
}

export default Card