import axios from "axios";
import { useState, useEffect } from "react";
import CandidatoList from "../../components/propuestas/CandidatoList";
import PropuestaList from "../../components/propuestas/PropuestaList";
import PubProFilter from "../../components/propuestas/PubProFilter";
import './Propuestas.css';

const URI = "http://localhost:8000/propuestas/";

interface Propuesta {
    nom_cand: string;
    inf_pro: string;
    pub_pro: string;
    nom_pro: string;
}

const CompShowPropuestas = () => {
    const [propuestas, setPropuestas] = useState<Propuesta[]>([]);
    const [filteredPropuestas, setFilteredPropuestas] = useState<Propuesta[]>([]);
    const [error, setError] = useState<string>("");
    const [selectedCandidato, setSelectedCandidato] = useState<string | null>(null);
    const [pubProOptions, setPubProOptions] = useState<string[]>([]);
    const [selectedPubPro, setSelectedPubPro] = useState<string>("");

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;  // Mostrar 5 propuestas por página

    useEffect(() => {
        getPropuestas();
    }, []);

    const getPropuestas = async () => {
        try {
            const res = await axios.get(URI);
            setPropuestas(res.data);
            setFilteredPropuestas(res.data);  // Mostrar todas las propuestas al inicio
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Error desconocido');
        }
    };

    const handleCandidatoClick = (candidato: string) => {
        setSelectedCandidato(candidato);
        setSelectedPubPro("");

        const propuestasFiltradas = propuestas.filter(propuesta => propuesta.nom_cand === candidato);
        setFilteredPropuestas(propuestasFiltradas);
        setCurrentPage(1);

        const uniquePubProOptions = Array.from(
            new Set(propuestasFiltradas.flatMap(propuesta => propuesta.pub_pro.split(',').map(item => item.trim())))
        );
        setPubProOptions(uniquePubProOptions);
    };


    const handlePubProFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const pubPro = event.target.value;
        setSelectedPubPro(pubPro);

        const propuestasFiltradas = propuestas.filter(propuesta =>
            propuesta.nom_cand === selectedCandidato &&
            (pubPro === "" || propuesta.pub_pro.split(',').map(item => item.trim()).includes(pubPro))
        );
        setFilteredPropuestas(propuestasFiltradas);
        setCurrentPage(1);
    };


    const uniqueCandidatos = Array.from(new Set(propuestas.map(propuesta => propuesta.nom_cand)));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPropuestas = filteredPropuestas.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPropuestas.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-5">
            <h1>Propuestas</h1>
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Mostrar lista de candidatos solo si no hay candidato seleccionado */}
            {!selectedCandidato ? (
                <CandidatoList
                    candidatos={uniqueCandidatos}
                    onCandidatoClick={handleCandidatoClick}
                />
            ) : (
                <>
                    <h2>{selectedCandidato}</h2>
                    <PubProFilter
                        pubProOptions={pubProOptions}
                        selectedPubPro={selectedPubPro}
                        onPubProChange={handlePubProFilterChange}
                    />
                    <button
                        className="btn btn-warning mb-3"
                        onClick={() => {
                            setSelectedCandidato(null);
                            setFilteredPropuestas(propuestas); // Mostrar todas las propuestas de nuevo
                            setCurrentPage(1);
                        }}
                    >
                        Regresar a la lista de candidatos
                    </button>
                </>
            )}

            {/* Listado de propuestas según selección */}
            <PropuestaList
                propuestas={currentPropuestas}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default CompShowPropuestas;
