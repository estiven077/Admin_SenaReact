import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ApprenticeCreate() {
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
        // Cargamos los datos desde localStorage (siguiendo la misma lógica de los otros módulos)
        const savedCourses = JSON.parse(localStorage.getItem('courses_sena') || '[]');
        const savedComputers = JSON.parse(localStorage.getItem('computers_sena') || '[{"id": 1, "number": "PC-01"}, {"id": 2, "number": "PC-02"}]');
        
        setCourses(savedCourses);
        setComputers(savedComputers);
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

        // Obtenemos los aprendices actuales del localStorage
        const savedApprentices = JSON.parse(localStorage.getItem('apprentices_sena') || '[]');
        
        // Generamos el ID automático (el último ID + 1 o 1 si está vacío)
        const newId = savedApprentices.length > 0 ? savedApprentices[savedApprentices.length - 1].id + 1 : 1;

        // Buscamos los nombres del curso y equipo seleccionados para que se muestren bien en la tabla
        const selectedCourse = courses.find(c => c.id.toString() === formData.course_id.toString());
        const selectedComputer = computers.find(comp => comp.id.toString() === formData.computer_id.toString());

        const newApprentice = {
            id: newId,
            ...formData,
            course: selectedCourse || { id: formData.course_id, course_number: 'Sin curso' },
            computer: selectedComputer || { id: formData.computer_id, number: 'Sin equipo' }
        };

        // Guardamos en el array y actualizamos el localStorage
        const updatedApprentices = [...savedApprentices, newApprentice];
        localStorage.setItem('apprentices_sena', JSON.stringify(updatedApprentices));

        alert('Aprendiz guardado con éxito');
        navigate('/apprentice');
    };

    return (
        <div className="container mt-4 mb-5" style={{ maxWidth: '700px' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="fw-bold text-success mb-1">
                        <i className="bi bi-person-plus-fill me-2"></i>Nuevo Aprendiz
                    </h1>
                    <p className="text-muted small mb-0">Complete el formulario para registrar un nuevo aprendiz.</p>
                </div>
                <Link to="/apprentice" className="btn btn-outline-secondary btn-sm fw-bold">
                    <i className="bi bi-arrow-left me-1"></i> Volver
                </Link>
            </div>

            <div className="card shadow-sm border-0 rounded-4 p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold small text-muted">NOMBRE</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Ej. Juan Pérez"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-muted">EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Ej. juan@sena.edu.co"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-muted">NÚMERO DE TELÉFONO</label>
                        <input
                            type="number"
                            name="cell_number"
                            className="form-control"
                            placeholder="Ej. 3001234567"
                            value={formData.cell_number}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="course_id" className="form-label fw-bold small text-muted">CURSO</label>
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
                                    {course.course_number || `Curso ${course.id}`}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="computer_id" className="form-label fw-bold small text-muted">EQUIPO</label>
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
                                    {computer.number || `Equipo ${computer.id}`}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                        <Link to="/apprentice" className="btn btn-light border fw-bold px-4">
                            Cancelar
                        </Link>
                        <button type="submit" className="btn btn-success fw-bold px-4">
                            <i className="bi bi-check-circle me-1"></i> Guardar Aprendiz
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}