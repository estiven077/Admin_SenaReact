import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TeacherShow() {
    const { id } = useParams();

    // Estado para simular los datos del profesor (puedes reemplazarlo luego con tu API)
    const [teacher, setTeacher] = useState({
        id: id || 1,
        name: 'Carlos Andrés Pérez',
        email: 'caperez@misena.edu.co',
        age: 35,
        phone: '3112233445',
        profession: 'Ingeniero de Sistemas',
        biography: 'Instructor experto en desarrollo web y gestión de bases de datos.',
        area: { name: 'Desarrollo de Software' },
        training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
        created_at: '2026-06-15T10:30:00Z',
        updated_at: '2026-06-15T10:30:00Z'
    });

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para cargar el registro específico
        // Ejemplo: axios.get(`/api/teachers/${id}`).then(res => setTeacher(res.data));
    }, [id]);

    // Función auxiliar para formatear la fecha igual que Carbon en Laravel
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
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

                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">
                        {teacher.name}
                    </h3>
                    <span className="badge bg-light text-dark fs-6">
                        {teacher.profession || 'Instructor'}
                    </span>
                </div>

                <div className="card-body">

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {teacher.id}
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">Área</label>
                            <div className="form-control bg-light">
                                {teacher.area?.name || teacher.area_id || 'No asignada'}
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">Centro de Formación</label>
                            <div className="form-control bg-light">
                                {teacher.training_center?.name || teacher.trainingCenter?.name || teacher.training_center_id || 'No asignado'}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre</label>
                            <div className="form-control bg-light">
                                {teacher.name}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Email</label>
                            <div className="form-control bg-light">
                                {teacher.email}
                            </div>
                        </div>
                    </div>

                    {/* CAMPOS NUEVOS */}
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">Edad</label>
                            <div className="form-control bg-light">
                                {teacher.age ? `${teacher.age} años` : 'No registrada'}
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">Teléfono</label>
                            <div className="form-control bg-light">
                                {teacher.phone || 'No registrado'}
                            </div>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-bold">Profesión / Especialidad</label>
                            <div className="form-control bg-light">
                                {teacher.profession || 'Sin especificar'}
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="fw-bold">Biografía / Perfil Profesional</label>
                        <div className="form-control text-muted bg-light" style={{ minHeight: '80px' }}>
                            {teacher.biography || 'Sin información de biografía disponible.'}
                        </div>
                    </div>
                    {/* FIN CAMPOS NUEVOS */}

                    <hr />

                    <div className="row text-muted small">
                        <div className="col-md-6">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control bg-light">
                                {formatDate(teacher.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="fw-bold">Última actualización</label>
                            <div aclassName="form-control bg-light">
                                {formatDate(teacher.updated_at)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <Link to="/teacher" className="btn btn-success">
                    <i className="bi bi-arrow-left me-1"></i> Volver
                </Link>
            </div>

            <br />
        </div>
    );
}