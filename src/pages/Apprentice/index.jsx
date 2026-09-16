import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Index() {
    const [apprentices, setApprentices] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Cargar la lista de aprendices desde la API
    const fetchApprentices = () => {
        axios.get('http://127.0.0.1:8000/api/apprentice')
            .then(res => {
                setApprentices(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al cargar la lista de aprendices:', err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchApprentices();
    }, []);

    // 2. Función para eliminar un aprendiz
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este aprendiz?')) {
            axios.delete(`http://127.0.0.1:8000/api/apprentice/${id}`)
                .then(() => {
                    // Filtrar la lista local para remover el ítem eliminado sin recargar
                    setApprentices(apprentices.filter(item => item.id !== id));
                })
                .catch(err => console.error('Error al eliminar:', err));
        }
    };

    return (
        <div className="container mt-4">
            <h1>Lista de Aprendices</h1>
            <br />

            <Link to="/apprentice/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle me-1"></i> Nuevo Aprendiz
            </Link>

            <div className="table-responsive">
                <table id="idApprentice" className="table table-striped table-bordered w-100">
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
                        {loading ? (
                            <tr>
                                <td colSpan="9" className="text-center py-3">Cargando aprendices...</td>
                            </tr>
                        ) : apprentices.length === 0 ? (
                            <tr>
                                <td colSpan="9" className="text-center py-3">No hay registros de aprendices.</td>
                            </tr>
                        ) : (
                            apprentices.map((apprentice) => (
                                <tr key={apprentice.id}>
                                    <td>{apprentice.id}</td>
                                    <td>{apprentice.name}</td>
                                    <td>{apprentice.email}</td>
                                    <td>{apprentice.cell_number}</td>
                                    <td>{apprentice.course?.course_number || 'N/A'}</td>
                                    <td>{apprentice.computer?.number || 'N/A'}</td>

                                    <td className="text-center">
                                        <Link to={`/apprentice/show/${apprentice.id}`} className="btn btn-info btn-sm text-white">
                                            Mostrar
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to={`/apprentice/${apprentice.id}/editar`} className="btn btn-warning btn-sm">
                                            Editar
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleDelete(apprentice.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}