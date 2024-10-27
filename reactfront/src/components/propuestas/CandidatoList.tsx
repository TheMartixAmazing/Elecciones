import React from 'react';
import "./CandidatoList.css";

interface CandidatoListProps {
    candidatos: string[];
    onCandidatoClick: (candidato: string) => void;
}

const CandidatoList: React.FC<CandidatoListProps> = ({ candidatos, onCandidatoClick }) => {
    return (
        <div className="candidato-list">
            <h3>Selecciona un candidato:</h3>
            <div className="name-container">
                {candidatos.map((candidato, index) => (
                    <button
                        key={index}
                        onClick={() => onCandidatoClick(candidato)}
                    >
                        {candidato}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CandidatoList;
