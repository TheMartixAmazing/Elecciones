import Card from "../components/candidatoCard/CandidatoCard"

const CandidatosPage = () => {
    return (
        <div className="cand">
            <div className="cand-cont">
                <Card name="Sara camacho" experiencia="15" cargo="Rector" isFirst/>
                <Card name="Sara camacho" experiencia="15" cargo="Rector"/>
            </div>
        </div>
    )
}

export {CandidatosPage}