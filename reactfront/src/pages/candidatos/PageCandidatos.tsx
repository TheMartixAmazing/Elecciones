import Card from "../../components/candidatoCard/CandidatoCard"
import './Candidatos.css'


const Candidatos = () => {
    return (
        <div className="cand">
            <h1 className="cand-title">Candidatos</h1>
            <div className="cand-cont-candidatos">
                <Card name="Sara camacho" experiencia="15" cargo="Rector" />
            </div>
        </div>
    )
}

export default Candidatos