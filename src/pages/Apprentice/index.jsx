import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ApprenticeIndex() {
    const [apprentices, setApprentices] = useState([]);

    useEffect(() => {
        // Carga los aprendices combinando localStorage y API
        const localApprentices = JSON.parse(localStorage.getItem('apprentices_sena') || '[]');

        axios.get('http://127.0.0.1:8000/api/apprentice')
            .then(res => {
                const apiData = res.data || [];
                const combined = [...localApprentices, ...apiData.filter(apiItem => !localApprentices.some(loc => loc.id === apiItem.id))];
                setApprentices(combined);
            })
            .catch(err => {
                console.warn('Error al conectar con la API, usando datos locales:', err);
                setApprentices(localApprentices);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar este aprendiz?')) {
            const localApprentices = JSON.parse(localStorage.getItem('apprentices_sena') || '[]');
            const updatedLocal = localApprentices.filter((app) => app.id !== id);
            localStorage.setItem('apprentices_sena', JSON.stringify(updatedLocal));

            setApprentices(apprentices.filter((app) => app.id !== id));

            axios.delete(`http://127.0.0.1:8000/api/apprentice/${id}`).catch(() => {});
        }
    };

    return (
        <div className="container mt-4">
            <h1>Lista de Aprendices</h1>
            <br />

            <Link to="/apprentice/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle me-1"></i> Nuevo Aprendiz
            </Link>

            <table id="idApprentice" className="table table-striped table-bordered align-middle" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Cell_number</th>
                        <th>Course_id</th>
                        <th>Computer_id</th>
                        <th colSpan="3" className="text-center">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {apprentices.length > 0 ? (
                        apprentices.map((apprentice) => (
                            <tr key={apprentice.id}>
                                <td>{apprentice.id}</td>
                                <td>{apprentice.name}</td>
                                <td>{apprentice.email}</td>
                                <td>{apprentice.cell_number}</td>
                                <td>{apprentice.course?.course_number || apprentice.course_id || 'N/A'}</td>
                                <td>{apprentice.computer?.number || apprentice.computer_id || 'N/A'}</td>

                                <td>
                                    <Link to={`/apprentice/show/${apprentice.id}`} className="btn btn-link p-0 text-decoration-none">
                                        Mostrar
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/apprentice/${apprentice.id}/editar`} className="btn btn-link p-0 text-decoration-none">
                                        Editar
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(apprentice.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No hay registros de aprendices.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}