import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function AreaShow() {
    const { id } = useParams();

    // Simulación de los datos del array $area provenientes de Laravel
    const [area] = useState({
        id: id,
        name: 'Sistemas y Desarrollo de Software',
        created_at: '2026-03-10 08:30:00',
        updated_at: '2026-03-15 14:20:00'
    });

    // Formateador equivalente a Carbon::parse()->format('d/m/Y H:i')
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">{area.name}</h3>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control">{area.id}</div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre</label>
                            <div className="form-control">{area.name}</div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-md-6">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control">
                                {formatDate(area.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control">
                                {formatDate(area.updated_at)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <Link to="/area" className="btn btn-success">
                    <i className="bi bi-arrow-left"></i> Volver
                </Link>
            </div>
            <br />
        </div>
    );
}