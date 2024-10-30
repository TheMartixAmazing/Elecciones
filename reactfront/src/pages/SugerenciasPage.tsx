import React, { useState } from 'react';

const SugerenciaForm = () => {
    const [suggestion, setSuggestion] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setMessage('¡Gracias por tu sugerencia!');
        setSuggestion('');
        setEmail('');
    };

    return (
        <div className="suggestion-form-container">
            <h2>Envía tu Sugerencia</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="suggestion">Sugerencia:</label>
                <textarea
                    id="suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    required
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">Enviar Sugerencia</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export { SugerenciaForm };
