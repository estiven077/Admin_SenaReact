import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function AreaEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Simula el valor inicial proveniente de $area->name
    const [name, setName] = useState('Sistemas y Desarrollo de Software');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Área actualizada correctamente');
        navigate('/area');
    };

    return (
        <div className="container py-3">
            <h1>Actualizar Area</h1>
            <br />

            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <br />
                    <input
                        type="text"
                        name="name"
                        className="form-control d-inline-block mt-1"
                        style={{ maxWidth: '300px' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <br />

                <button type="submit" className="btn btn-primary me-2">
                    Actualizar Area
                </button>
                <br />
                <br />

                <Link to="/area" className="btn btn-success mb-3">
                    <i className="bi bi-arrow-left"></i> Volver
                </Link>
            </form>
        </div>
    );
}