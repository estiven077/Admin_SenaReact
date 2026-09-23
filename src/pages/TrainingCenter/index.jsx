import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrainingCenterIndex() {
    const [centers, setCenters] = useState([]);

    useEffect(() => {
        // Carga los centros de formación guardados en el localStorage
        const savedCenters = JSON.parse(localStorage.getItem('training_centers_sena') || '[]');
        setCenters(savedCenters);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar este centro de formación?')) {
            const updatedCenters = centers.filter((center) => center.id !== id);
            setCenters(updatedCenters);
            localStorage.setItem('training_centers_sena', JSON.stringify(updatedCenters));
        }
    };

    return (
        <div className="container">
            <h1>Lista de Centros de Formación</h1>
            <br />

            <Link to="/training-center/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle"></i> Nuevo Centro de Formación
            </Link>

            <table id="idTrainingCenter" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th colSpan="3" className="text-center">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {centers.length > 0 ? (
                        centers.map((center) => (
                            <tr key={center.id}>
                                <td>{center.id}</td>
                                <td>{center.name}</td>
                                <td>{center.location}</td>

                                <td>
                                    <Link to={`/training-center/show/${center.id}`} className="btn btn-link p-0">
                                        Mostrar
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/training-center/edit/${center.id}`} className="btn btn-link p-0">
                                        Editar
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(center.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No hay centros de formación registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}