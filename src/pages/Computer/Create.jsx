import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ComputerCreate() {
    const [formData, setFormData] = useState({
        number: '',
        brand: ''
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
            // Obtenemos los computadores actuales del localStorage
            const existingComputers = JSON.parse(localStorage.getItem('computers_sena') || '[]');
            
            // Calculamos el ID secuencial (1, 2, 3...)
            const nextId = existingComputers.length > 0 ? existingComputers[existingComputers.length - 1].id + 1 : 1;

            // Creamos el nuevo registro
            const newComputer = {
                id: nextId,
                number: formData.number,
                brand: formData.brand
            };

            // Guardamos en el localStorage
            existingComputers.push(newComputer);
            localStorage.setItem('computers_sena', JSON.stringify(existingComputers));

            alert('Guardado con éxito');
            setLoading(false);
            navigate('/computer'); // Redirige al index de computadores
        }, 300);
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Formulario Registrar Computador</h2>
                            <Link to="/computer" className="btn btn-outline-secondary btn-sm">
                                <i className="fas fa-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Número:</label>
                                <input
                                    type="text"
                                    name="number"
                                    className="form-control"
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">Marca:</label>
                                <input
                                    type="text"
                                    name="brand"
                                    className="form-control"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/computer" className="btn btn-light px-4">Cancelar</Link>
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