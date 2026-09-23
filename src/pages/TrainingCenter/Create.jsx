import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TrainingCenterCreate() {
    const [formData, setFormData] = useState({
        name: '',
        location: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            // Obtenemos los centros de formación actuales del localStorage
            const existingCenters = JSON.parse(localStorage.getItem('training_centers_sena') || '[]');
            
            // Calculamos el ID secuencial (1, 2, 3...)
            const nextId = existingCenters.length > 0 ? existingCenters[existingCenters.length - 1].id + 1 : 1;

            // Creamos el nuevo registro
            const newCenter = {
                id: nextId,
                name: formData.name,
                location: formData.location
            };

            // Guardamos en el localStorage
            existingCenters.push(newCenter);
            localStorage.setItem('training_centers_sena', JSON.stringify(existingCenters));

            alert('Guardado con éxito');
            setLoading(false);
            navigate('/training-center'); // Redirige a la lista
        }, 300);
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Formulario Registrar Centro de Formación</h2>
                            <Link to="/training-center" className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">Ubicación:</label>
                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/training-center" className="btn btn-light px-4">Cancelar</Link>
                                <button 
                                    type="submit" 
                                    className="btn btn-success px-4 fw-bold"
                                    disabled={loading}
                                >
                                    {loading ? 'Guardando...' : 'Enviar Formulario'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}