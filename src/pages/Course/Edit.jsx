import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function CourseEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        area_id: '',
        training_center_id: ''
    });

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para cargar los datos del curso a editar:
        // axios.get(`/api/courses/${id}`).then(res => setFormData(res.data));
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí luego conectas tu lógica PUT/PATCH con la API
        console.log("Actualizando curso ID:", id, formData);

        // Redirigir al index de cursos al actualizar
        navigate('/course');
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Actualizar Curso</h2>
                            <Link to="/course" className="btn btn-success btn-sm">
                                <i className="bi bi-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Numero de Curso:</label>
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
                                <label className="form-label fw-semibold">Día:</label>
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
                                <label className="form-label fw-semibold">Área:</label>
                                <input
                                    type="number"
                                    name="area_id"
                                    className="form-control"
                                    value={formData.area_id}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">Centro de Formación:</label>
                                <input
                                    type="number"
                                    name="training_center_id"
                                    className="form-control"
                                    value={formData.training_center_id}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/course" className="btn btn-light px-4">Cancelar</Link>
                                <button type="submit" className="btn btn-success px-4 fw-bold">
                                    Actualizar Curso
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}