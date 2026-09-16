import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ComputerShow() {
    const { id } = useParams();

    // Estado para simular los datos del computador (luego lo cargas con tu API / BD)
    const [computer, setComputer] = useState({
        id: id || 1,
        number: '101',
        brand: 'Lenovo',
        created_at: '2026-06-15T10:30:00Z',
        updated_at: '2026-06-15T10:30:00Z'
    });

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para traer el registro específico
        // Ejemplo: axios.get(`/api/computers/${id}`).then(res => setComputer(res.data));
    }, [id]);

    // Función auxiliar para formatear la fecha igual que Carbon en Laravel
    const formatDate = (dateString) => {
        if (!dateString) return '';
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
                    <h3 className="mb-0">
                        {computer.number}
                    </h3>
                </div>

                <div className="card-body">
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {computer.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Número</label>
                            <div className="form-control bg-light">
                                {computer.number}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Marca</label>
                            <div className="form-control bg-light">
                                {computer.brand}
                            </div>
                        </div>

                    </div>

                    <hr />

                    <div className="row">

                        <div className="col-md-6">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control bg-light">
                                {formatDate(computer.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control bg-light">
                                {formatDate(computer.updated_at)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <Link to="/computer" className="btn btn-success">
                    <i className="bi bi-arrow-left me-1"></i> Volver
                </Link>
            </div>
            <br />
        </div>
    );
}