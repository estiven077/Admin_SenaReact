import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AreaIndex() {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        // Carga las áreas guardadas en el navegador
        const savedAreas = JSON.parse(localStorage.getItem('areas_sena') || '[]');
        setAreas(savedAreas);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar esta área?')) {
            const updatedAreas = areas.filter((area) => area.id !== id);
            setAreas(updatedAreas);
            localStorage.setItem('areas_sena', JSON.stringify(updatedAreas));
        }
    };

    return (
        <div className="container">
            <h1>Lista de Areas</h1>
            <br />

            <Link to="/area/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle"></i> Nueva Area
            </Link>

            <table id="idArea" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colSpan="3" className="text-center">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {areas.length > 0 ? (
                        areas.map((area) => (
                            <tr key={area.id}>
                                <td>{area.id}</td>
                                <td>{area.name}</td>

                                <td>
                                    <Link to={`/area/show/${area.id}`} className="btn btn-link p-0">
                                        Mostrar
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/area/edit/${area.id}`} className="btn btn-link p-0">
                                        Editar
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(area.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No hay áreas registradas.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}