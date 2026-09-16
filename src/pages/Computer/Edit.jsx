import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ComputerEdit() {
    const [formData, setFormData] = useState({
        number: '',
        brand: ''
    });

    const { id } = useParams(); // Para capturar el ID del computador desde la URL (ej: /computer/edit/5)
    const navigate = useNavigate();

    // Simulación de carga de datos iniciales del computador a editar
    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para traer los datos del computador con este ID
        // Ejemplo: axios.get(`/api/computers/${id}`).then(res => setFormData(res.data));
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí luego conectas tu lógica de actualización con la API (PUT / PATCH)
        console.log("Actualizando datos del computador ID:", id, formData);

        // Redirigir al index de computadores al actualizar
        navigate('/computer');
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Actualizar Computador</h2>
                            <Link to="/computer" className="btn btn-success btn-sm">
                                <i className="bi bi-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Número:</label>
                                <input
                                    type="number"
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
                                <button type="submit" className="btn btn-success px-4 fw-bold">
                                    Actualizar Computador
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}