import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AreaCreate() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            // Obtenemos las áreas actuales del localStorage
            const existingAreas = JSON.parse(localStorage.getItem('areas_sena') || '[]');
            
            // Calculamos el ID secuencial: si ya hay áreas, toma el ID de la última y le suma 1, si no, empieza en 1.
            const nextId = existingAreas.length > 0 ? existingAreas[existingAreas.length - 1].id + 1 : 1;

            // Creamos el nuevo registro con el ID ordenado
            const newArea = {
                id: nextId,
                name: formData.name
            };

            // Agregamos el nuevo registro al listado y lo guardamos
            existingAreas.push(newArea);
            localStorage.setItem('areas_sena', JSON.stringify(existingAreas));

            alert('Guardado con éxito');
            setLoading(false);
            navigate('/area'); // Redirige a la lista
        }, 300);
    };

    return (
        <div className="container mt-4">
            <h1 className="fw-bold mb-4">Formulario Área</h1>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <div className="mb-3">
                    <label className="form-label fw-bold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Desarrollo de Software"
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn text-white fw-bold"
                    style={{ backgroundColor: '#16780c', borderColor: '#16780c' }}
                    disabled={loading}
                >
                    {loading ? 'Guardando...' : 'Enviar Formulario'}
                </button>
            </form>
        </div>
    );
}