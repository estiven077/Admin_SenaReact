import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TeacherIndex() {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    useEffect(() => {
        // Carga los instructores guardados en el navegador
        const savedTeachers = JSON.parse(localStorage.getItem('teachers_sena') || '[]');
        setTeachers(savedTeachers);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este instructor?")) {
            const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
            setTeachers(updatedTeachers);
            localStorage.setItem('teachers_sena', JSON.stringify(updatedTeachers));
        }
    };

    const getInitials = (name) => {
        if (!name) return '--';
        return name
            .trim()
            .split(/\s+/)
            .map((n) => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    return (
        <div className="container mt-4">
            <h1 className="fw-bold mb-3">Lista de Instructores</h1>
            <br />

            <div className="container p-0">

                {/* Botón Nuevo Instructor */}
                <Link to="/teacher/create" className="btn btn-success mb-3">
                    <i className="bi bi-plus-circle me-1"></i> Nuevo Instructor
                </Link>

                <div className="table-responsive">
                    <table className="table table-striped table-bordered align-middle" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Area</th>
                                <th>Training Center</th>
                                <th className="text-center">Ficha Técnica</th>
                                <th colSpan="3" className="text-center">Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teachers.length > 0 ? (
                                teachers.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.email}</td>
                                        <td>{teacher.area?.name || 'Sin Área'}</td>
                                        <td>{teacher.training_center?.name || 'Sin Centro'}</td>

                                        <td className="text-center">
                                            <button
                                                type="button"
                                                className="btn btn-sm text-white shadow-sm"
                                                style={{ backgroundColor: '#16780c', borderColor: '#16780c' }}
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#panelInstructor"
                                                onClick={() => setSelectedTeacher(teacher)}
                                            >
                                                <i className="bi bi-person-badge me-1"></i> Perfil
                                            </button>
                                        </td>

                                        <td>
                                            <Link to={`/teacher/show/${teacher.id}`} className="btn btn-link p-0">
                                                Mostrar
                                            </Link>
                                        </td>

                                        <td>
                                            <Link to={`/teacher/edit/${teacher.id}`} className="btn btn-link p-0">
                                                Editar
                                            </Link>
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => handleDelete(teacher.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center">No hay instructores registrados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
            <br />

            {/* PANEL OFFCANVAS PARA EL PERFIL DEL INSTRUCTOR */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="panelInstructor" style={{ width: '400px' }}>
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fw-bold">
                        <i className="bi bi-person-lines-fill me-2"></i>Perfil del Instructor
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body p-4">
                    {selectedTeacher && (
                        <>
                            <div className="text-center mb-4">
                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle fw-bold border shadow-sm"
                                    style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#f8f9fa', color: '#16780c' }}
                                >
                                    {getInitials(selectedTeacher.name)}
                                </div>
                                <h4 className="fw-bold mb-1">{selectedTeacher.name}</h4>
                                <p className="text-muted small mb-1">{selectedTeacher.email}</p>
                            </div>
                            <hr />
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">CENTRO DE FORMACIÓN</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.training_center?.name || 'Sin Centro'}</p>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">ÁREA TÉCNICA</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.area?.name || 'Sin Área'}</p>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">PROFESIÓN</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.profession || 'No especificada'}</p>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">EDAD</label>
                                <p className="border p-2 rounded bg-light">
                                    {selectedTeacher.age ? `${selectedTeacher.age} años` : 'No registrada'}
                                </p>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">TELÉFONO</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.phone || 'No registrado'}</p>
                            </div>
                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">BIOGRAFÍA</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.biography || 'Sin información'}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}