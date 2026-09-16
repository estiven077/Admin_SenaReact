import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApprenticeCreate() {
    const navigate = useNavigate();

    // Simulación de las colecciones $courses y $computers enviadas desde Laravel
    const [courses] = useState([
        { id: 1, course_number: '2670123 - ADSO' },
        { id: 2, course_number: '2558941 - Gestión Empresarial' }
    ]);

    const [computers] = useState([
        { id: 1, number: 'Equipo 01' },
        { id: 2, number: 'Equipo 02' }
    ]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Formulario de aprendiz enviado correctamente');
        navigate('/apprentice');
    };

    return (
        <div className="container py-3">
            <h1>Formulario Aprendices</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <br />
                    <input
                        type="text"
                        name="name"
                        className="form-control d-inline-block mt-1"
                        style={{ maxWidth: '300px' }}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <br />

                <label>
                    Email:
                    <br />
                    <input
                        type="email"
                        name="email"
                        className="form-control d-inline-block mt-1"
                        style={{ maxWidth: '300px' }}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <br />

                <label>
                    Numero de telefono:
                    <br />
                    <input
                        type="number"
                        name="cell_number"
                        className="form-control d-inline-block mt-1"
                        style={{ maxWidth: '300px' }}
                        value={formData.cell_number}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <br />

                <label htmlFor="course_id">Curso: </label>
                <select
                    name="course_id"
                    id="course_id"
                    className="form-control d-inline-block mt-1"
                    style={{ maxWidth: '300px' }}
                    value={formData.course_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione un curso</option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.course_number}
                        </option>
                    ))}
                </select>
                <br />
                <br />

                <label htmlFor="computer_id">Equipo: </label>
                <select
                    name="computer_id"
                    id="computer_id"
                    className="form-control d-inline-block mt-1"
                    style={{ maxWidth: '300px' }}
                    value={formData.computer_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione un equipo</option>
                    {computers.map((computer) => (
                        <option key={computer.id} value={computer.id}>
                            {computer.number}
                        </option>
                    ))}
                </select>
                <br />
                <br />

                <button type="submit" className="btn btn-secondary">
                    Enviar Formulario
                </button>
            </form>
        </div>
    );
}