import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const { id } = useParams(); // Captura el ID desde la URL (/apprentice/1/editar)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: ''
    });

    // 1. Cargar los datos del aprendiz cuando el componente se monta
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/apprentice/${id}`)
            .then(res => {
                setFormData({
                    name: res.data.name || '',
                    email: res.data.email || '',
                    cell_number: res.data.cell_number || ''
                });
            })
            .catch(err => console.error('Error al obtener el aprendiz:', err));
    }, [id]);

    // Manejar el cambio de valores en los campos de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 2. Enviar la petición PUT para actualizar
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/apprentice/${id}`, formData)
            .then(() => {
                alert('Aprendiz actualizado con éxito');
                navigate('/apprentice'); // Redirige al index
            })
            .catch(err => console.error('Error al actualizar:', err));
    };

    return (
        <div className="container mt-4">
            <h1>Actualizar Aprendiz</h1>
            <br />

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Número de Celular:</label>
                    <input
                        type="number"
                        name="cell_number"
                        className="form-control"
                        value={formData.cell_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="d-flex gap-2 align-items-center mt-3">
                    <button type="submit" className="btn btn-primary fw-bold">
                        Actualizar Aprendiz
                    </button>

                    <Link to="/apprentice" className="btn btn-success">
                        <i className="bi bi-arrow-left"></i> Volver
                    </Link>
                </div>
            </form>
        </div>
    );
}