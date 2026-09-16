import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Show() {
    const { id } = useParams();
    const [apprentice, setApprentice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/apprentice/${id}`)
            .then(res => {
                setApprentice(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al obtener la información del aprendiz:', err);
                setLoading(false);
            });
    }, [id]);

    // Función equivalente a Carbon para formatear la fecha (dd/mm/yyyy hh:mm)
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString('es-CO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <p className="fs-5">Cargando detalles del aprendiz...</p>
            </div>
        );
    }

    if (!apprentice) {
        return (
            <div className="container mt-5 text-center">
                <p className="text-danger fs-5">No se encontró la información del aprendiz.</p>
                <Link to="/apprentice" className="btn btn-success mt-2">
                    Volver
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">{apprentice.name}</h3>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control">{apprentice.id}</div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Curso</label>
                            <div className="form-control">
                                {apprentice.course?.course_number || apprentice.course_id || 'N/A'}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Computador</label>
                            <div className="form-control">
                                {apprentice.computer?.number || apprentice.computer_id || 'N/A'}
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Nombre</label>
                        <div className="form-control">{apprentice.name}</div>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Email</label>
                        <div className="form-control">{apprentice.email}</div>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Número de Celular</label>
                        <div className="form-control">{apprentice.cell_number}</div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control">{formatDate(apprentice.created_at)}</div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control">{formatDate(apprentice.updated_at)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4 mb-4">
                <Link to="/apprentice" className="btn btn-success">
                    <i className="bi bi-arrow-left me-1"></i> Volver
                </Link>
            </div>
        </div>
    );
}