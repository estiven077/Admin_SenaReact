import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrainingCenterIndex() {
    // Estado para simular la lista de centros de formación (puedes reemplazarlo luego con tu API)
    const [trainingCenters, setTrainingCenters] = useState([
        {
            id: 1,
            name: 'Centro de Teleinformática y Producción Industrial',
            location: 'Popayán, Cauca'
        },
        {
            id: 2,
            name: 'Centro Agropecuario',
            location: 'Inzá, Cauca'
        }
    ]);

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para cargar la lista real
        // Ejemplo: axios.get('/api/training-centers').then(res => setTrainingCenters(res.data));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este centro de formación?')) {
            // Lógica para eliminar mediante API (ej: axios.delete(`/api/training-centers/${id}`))
            setTrainingCenters(trainingCenters.filter(tc => tc.id !== id));
        }
    };

    return (
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 fw-bold text-dark m-0">Lista de Centros de Formación</h1>
                <Link to="/training-center/create" className="btn btn-success">
                    <i className="bi bi-plus-circle me-1"></i> Nuevo Centro de Formación
                </Link>
            </div>

            <div className="card shadow-sm border-0 rounded-4 p-3">
                <div className="table-responsive">
                    <table id="idTraining_center" className="table table-striped table-bordered align-middle mb-0" style={{ width: '100%' }}>
                        <thead className="table-light">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th colSpan="3" className="text-center">Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {trainingCenters.length > 0 ? (
                                trainingCenters.map((tc) => (
                                    <tr key={tc.id}>
                                        <td>{tc.id}</td>
                                        <td className="fw-semibold">{tc.name}</td>
                                        <td>{tc.location}</td>

                                        <td className="text-center" style={{ width: '80px' }}>
                                            <Link to={`/training-center/${tc.id}`} className="btn btn-info btn-sm text-white w-100">
                                                Mostrar
                                            </Link>
                                        </td>

                                        <td className="text-center" style={{ width: '80px' }}>
                                            <Link to={`/training-center/${tc.id}/edit`} className="btn btn-warning btn-sm text-dark w-100">
                                                Editar
                                            </Link>
                                        </td>

                                        <td className="text-center" style={{ width: '80px' }}>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(tc.id)}
                                                className="btn btn-danger btn-sm w-100"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted py-4">
                                        No hay centros de formación registrados.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <br />
        </div>
    );
}