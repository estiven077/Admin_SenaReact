import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CourseShow() {
    const { id } = useParams();

    // Estado para simular los datos del curso (luego lo cargas con tu API / BD)
    const [course, setCourse] = useState({
        id: id || 1,
        course_number: '2827481',
        day: 'Lunes',
        area_id: 'Desarrollo de Software',
        training_center_id: 'Centro de Teleinformática y Producción Industrial',
        created_at: '2026-06-15T10:30:00Z',
        updated_at: '2026-06-15T10:30:00Z'
    });

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para traer el registro específico
        // Ejemplo: axios.get(`/api/courses/${id}`).then(res => setCourse(res.data));
    }, [id]);

    // Función auxiliar para formatear la fecha igual que Carbon en Laravel
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">

                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0">
                        {course.course_number}
                    </h3>
                </div>

                <div className="card-body">
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {course.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Área</label>
                            <div className="form-control bg-light">
                                {course.area_id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Centro de Formación</label>
                            <div className="form-control bg-light">
                                {course.training_center_id}
                            </div>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Número del Curso</label>
                        <div className="form-control bg-light">
                            {course.course_number}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Día</label>
                        <div className="form-control bg-light">
                            {course.day}
                        </div>
                    </div>

                    <hr />

                    <div className="row">

                        <div className="col-md-6">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control bg-light">
                                {formatDate(course.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control bg-light">
                                {formatDate(course.updated_at)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <br />
                <Link to="/course" className="btn btn-success mb-3">
                    <i className="bi bi-arrow-left me-1"></i> Volver
                </Link>
            </div>
            <br />
        </div>
    );
}