import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeacherIndex() {
    // Estado para simular la lista de profesores (puedes reemplazarlo luego con tu API)
    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: 'Carlos Andrés Pérez',
            email: 'caperez@misena.edu.co',
            age: 35,
            phone: '3112233445',
            profession: 'Ingeniero de Sistemas',
            biography: 'Instructor experto en desarrollo web y gestión de bases de datos.',
            area: { name: 'Desarrollo de Software' },
            training_center: { name: 'Centro de Teleinformática y Producción Industrial' }
        }
    ]);

    // Estado para controlar el profesor seleccionado para el panel de perfil (Offcanvas)
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm('¿Desea eliminar este instructor?')) {
            setTeachers(teachers.filter(teacher => teacher.id !== id));
        }
    };

    // Función para calcular iniciales para el avatar
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

                {/* Botón de acción para redirigir al formulario de creación */}
                <Link to="/teacher/create" className="btn btn-success mb-3">
                    <i className="bi bi-plus-circle me-1"></i> Nuevo Instructor
                </Link>

                <div className="table-responsive">
                    <table id="idTeacher" className="table table-striped table-bordered align-middle" style={{ width: '100%' }}>
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Area</th>
                                <th>Training Center</th>
                                <th>Ficha Técnica</th>
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

                                        {/* Botón para abrir el panel de perfil (Offcanvas simulado o Bootstrap Modal) */}
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-sm text-white btn-perfil"
                                                style={{ backgroundColor: '#16780c', borderColor: '#16780c' }}
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#panelInstructor"
                                                onClick={() => setSelectedTeacher(teacher)}
                                            >
                                                <i className="bi bi-person-badge"></i> Perfil
                                            </button>
                                        </td>

                                        <td>
                                            <Link to={`/teacher/show/${teacher.id}`} className="btn btn-info btn-sm text-white">
                                                Mostrar
                                            </Link>
                                        </td>

                                        <td>
                                            <Link to={`/teacher/edit/${teacher.id}`} className="btn btn-warning btn-sm">
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

            {/* PANEL OFFCANVAS DE BOOTSTRAP */}
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
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle fw-bold border"
                                    style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#f8f9fa', color: '#16780c' }}
                                >
                                    {getInitials(selectedTeacher.name)}
                                </div>
                                <h4 className="fw-bold mb-1">{selectedTeacher.name}</h4>
                                <p className="text-muted small mb-1">{selectedTeacher.email}</p>
                                <p className="small text-muted">
                                    {selectedTeacher.age ? `${selectedTeacher.age} años` : 'Edad no registrada'}
                                </p>
                            </div>

                            <hr />

                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">CENTRO / SEDE DE FORMACIÓN</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.training_center?.name || 'Sin Centro'}</p>
                            </div>

                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">ÁREA TÉCNICA</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.area?.name || 'Sin Área'}</p>
                            </div>

                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">PROFESIÓN Y TÍTULOS</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.profession || 'No especificada'}</p>
                            </div>

                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">TELÉFONO DE CONTACTO</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.phone || 'No registrado'}</p>
                            </div>

                            <div className="mb-3">
                                <label className="fw-bold small text-muted d-block mb-1">BIOGRAFÍA / PERFIL</label>
                                <p className="border p-2 rounded bg-light">{selectedTeacher.biography || 'Sin información de biografía'}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <br />
        </div>
    );
}