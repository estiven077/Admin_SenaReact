import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: ''
    });

    const [courses, setCourses] = useState([]);
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/courses')
            .then(res => setCourses(res.data))
            .catch(err => console.error('Error al cargar cursos:', err));

        axios.get('http://127.0.0.1:8000/api/computers')
            .then(res => setComputers(res.data))
            .catch(err => console.error('Error al cargar equipos:', err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/apprentice', formData)
            .then(() => {
                alert('Aprendiz guardado con éxito');
                navigate('/apprentice');
            })
            .catch(err => console.error('Error al guardar:', err));
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Formulario Aprendices</h1>

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
                    <label className="form-label fw-bold">Número de teléfono:</label>
                    <input
                        type="number"
                        name="cell_number"
                        className="form-control"
                        value={formData.cell_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="course_id" className="form-label fw-bold">Curso:</label>
                    <select
                        name="course_id"
                        id="course_id"
                        className="form-select"
                        value={formData.course_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un curso</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>
                                {course.course_number}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="computer_id" className="form-label fw-bold">Equipo:</label>
                    <select
                        name="computer_id"
                        id="computer_id"
                        className="form-select"
                        value={formData.computer_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione un equipo</option>
                        {computers.map(computer => (
                            <option key={computer.id} value={computer.id}>
                                {computer.number}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-success fw-bold">
                    Enviar Formulario
                </button>
            </form>
        </div>
    );
}