import React from 'react';
import './PubProFilter.css';

interface PubProFilterProps {
    pubProOptions: string[];
    selectedPubPro: string;
    onPubProChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PubProFilter: React.FC<PubProFilterProps> = ({ pubProOptions, selectedPubPro, onPubProChange }) => {
    return (
        <div className="pub-pro-filter mb-3">
            <label htmlFor="pubProFilter">Filtrar por destinatario de la propuesta:</label>
            <select
                id="pubProFilter"
                className="form-select"
                value={selectedPubPro}
                onChange={onPubProChange}
            >
                <option value="">Mostrar todos</option>
                {pubProOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PubProFilter;
