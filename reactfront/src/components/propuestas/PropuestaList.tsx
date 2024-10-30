import React from 'react';
import './PropuestaList.css';
interface Propuesta {
    nom_cand: string;
    inf_pro: string;
    pub_pro: string;
    nom_pro: string;
}

interface PropuestaListProps {
    propuestas: Propuesta[];
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const PropuestaList: React.FC<PropuestaListProps> = ({ propuestas, currentPage, totalPages, onPageChange }) => {
    return (
        <div className="propuesta-list">
            {propuestas.length === 0 ? (
                <p>No hay propuestas disponibles</p>
            ) : (
                <>
                    {propuestas.map((propuesta, index) => (
                        <div key={index} className="card mb-3">
                            <div className="card-body">
                                <div className="propuesta-header">
                                    <h2 className="card-title">{propuesta.nom_pro}</h2>
                                </div>
                                <div className="propuesta-content">
                                    <p className="propuesta-text">{propuesta.inf_pro}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Botones de paginación */}
                    <nav>
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => onPageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
};

export default PropuestaList;
