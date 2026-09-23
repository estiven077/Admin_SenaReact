import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CourseCreate() {
    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        area_id: '',
        training_center_id: ''
    });

    const [areas, setAreas] = useState([]);
    const [trainingCenters, setTrainingCenters] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Cargar las áreas y centros de formación reales creados en el localStorage
        const savedAreas = JSON.parse(localStorage.getItem('areas_sena') || '[]');
        const savedCenters = JSON.parse(localStorage.getItem('training_centers_sena') || '[]');

        setAreas(savedAreas);
        setTrainingCenters(savedCenters);
    }, []);

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
            // Obtenemos los cursos actuales del localStorage
            const existingCourses = JSON.parse(localStorage.getItem('courses_sena') || '[]');
            
            // Calculamos el ID secuencial (1, 2, 3...)
            const nextId = existingCourses.length > 0 ? existingCourses[existingCourses.length - 1].id + 1 : 1;

            // Buscamos los objetos completos de área y centro para guardarlos relacionados
            const selectedArea = areas.find(a => a.id.toString() === formData.area_id.toString()) || { name: 'Sin área' };
            const selectedCenter = trainingCenters.find(tc => tc.id.toString() === formData.training_center_id.toString()) || { name: 'Sin centro' };

            // Creamos el nuevo registro de curso
            const newCourse = {
                id: nextId,
                course_number: formData.course_number,
                day: formData.day,
                area: selectedArea,
                training_center: selectedCenter
            };

            // Guardamos en el localStorage
            existingCourses.push(newCourse);
            localStorage.setItem('courses_sena', JSON.stringify(existingCourses));

            alert('Curso guardado con éxito');
            setLoading(false);
            navigate('/course'); // Redirige a la lista de cursos
        }, 300);
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Formulario Cursos</h2>
                            <Link to="/course" className="btn btn-outline-secondary btn-sm">
                                <i className="fas fa-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Numero de curso:</label>
                                <input
                                    type="number"
                                    name="course_number"
                                    className="form-control"
                                    value={formData.course_number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Dia:</label>
                                <input
                                    type="text"
                                    name="day"
                                    className="form-control"
                                    placeholder="Ej. Lunes o Lunes a Viernes"
                                    value={formData.day}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="area_id" className="form-label fw-semibold">Area:</label>
                                <select
                                    name="area_id"
                                    id="area_id"
                                    className="form-control"
                                    value={formData.area_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione área</option>
                                    {areas.map((area) => (
                                        <option key={area.id} value={area.id}>
                                            {area.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="training_center_id" className="form-label fw-semibold">Centro de Formacion:</label>
                                <select
                                    name="training_center_id"
                                    id="training_center_id"
                                    className="form-control"
                                    value={formData.training_center_id}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione un centro de formacion</option>
                                    {trainingCenters.map((tc) => (
                                        <option key={tc.id} value={tc.id}>
                                            {tc.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/course" className="btn btn-light px-4">Cancelar</Link>
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