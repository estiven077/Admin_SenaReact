import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CourseCreate() {
    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        area_id: '',
        training_center_id: ''
    });

    // Estados para simular las listas desplegables (áreas y centros de formación)
    const [areas, setAreas] = useState([
        { id: 1, name: 'Desarrollo de Software' },
        { id: 2, name: 'Redes y Telecomunicaciones' }
    ]);

    const [trainingCenters, setTrainingCenters] = useState([
        { id: 1, name: 'Centro de Teleinformática y Producción Industrial (CTPI)' }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        // Aquí luego puedes hacer peticiones GET a tu API para cargar dinámicamente las áreas y centros reales:
        // axios.get('/api/areas').then(res => setAreas(res.data));
        // axios.get('/api/training-centers').then(res => setTrainingCenters(res.data));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí luego conectas tu lógica POST con la API
        console.log("Enviando datos del curso:", formData);

        // Redirigir al index de cursos al guardar
        navigate('/course');
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
                                    type="date"
                                    name="day"
                                    className="form-control"
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
                                <button type="submit" className="btn btn-success px-4 fw-bold">
                                    Enviar Formulario
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}