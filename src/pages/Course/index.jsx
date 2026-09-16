import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CourseIndex() {
    // Estado para simular la lista de cursos (luego lo cargas con tu API / BD)
    const [courses, setCourses] = useState([
        {
            id: 1,
            course_number: '2827481',
            day: 'Lunes',
            area: { name: 'Desarrollo de Software' },
            training_center: { name: 'Centro de Teleinformática y Producción Industrial' }
        }
    ]);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este curso?")) {
            // Aquí luego harás tu petición DELETE a la API
            setCourses(courses.filter(course => course.id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="fw-bold mb-3">Lista de Cursos</h1>
            <br />

            <div className="container p-0">

                {/* Botón Nuevo Curso */}
                <Link to="/course/create" className="btn btn-success mb-3">
                    <i className="bi bi-plus-circle me-1"></i> Nuevo Curso
                </Link>

                <div className="table-responsive">
                    <table id="idCourse" className="table table-striped table-bordered align-middle" style={{ width: '100%' }}>
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Course Number</th>
                                <th>Day</th>
                                <th>Area</th>
                                <th>Training Center</th>
                                <th colSpan="3" className="text-center">Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {courses.length > 0 ? (
                                courses.map((course) => (
                                    <tr key={course.id}>
                                        <td>{course.id}</td>
                                        <td>{course.course_number}</td>
                                        <td>{course.day}</td>
                                        <td>{course.area?.name}</td>
                                        <td>{course.training_center?.name}</td>

                                        <td>
                                            <Link to={`/course/show/${course.id}`} className="btn btn-info btn-sm text-white">
                                                Mostrar
                                            </Link>
                                        </td>

                                        <td>
                                            <Link to={`/course/edit/${course.id}`} className="btn btn-warning btn-sm">
                                                Editar
                                            </Link>
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => handleDelete(course.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No hay cursos registrados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
            <br />
        </div>
    );
}