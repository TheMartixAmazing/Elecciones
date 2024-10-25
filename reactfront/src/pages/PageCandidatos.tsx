import Card from "../components/candidatoCard/CandidatoCard"

const CandidatosPage = () => {
    return (
        <div className="cand">
            <h1 className="cand-title">Candidatos</h1>
            <div className="cand-cont-candidatos">
                <Card name="Sara camacho" experiencia="15" cargo="Rector"/>
            </div>
        </div>
    )
}

export {CandidatosPage}