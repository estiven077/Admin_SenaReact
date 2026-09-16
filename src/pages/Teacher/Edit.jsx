import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function TeacherEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        phone: '',
        profession: '',
        photo: '',
        biography: '',
        area_id: '',
        training_center_id: ''
    });

    useEffect(() => {
        // Aquí luego harás tu petición GET a la API para cargar los datos del profesor a editar:
        // axios.get(`/api/teachers/${id}`).then(res => setFormData(res.data));
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
        console.log("Actualizando profesor ID:", id, formData);

        // Redirigir al index de profesores al actualizar
        navigate('/teacher');
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 rounded-4 p-4">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-success m-0">Actualizar Profesor</h2>
                            <Link to="/teacher" className="btn btn-success btn-sm">
                                <i className="bi bi-arrow-left me-1"></i> Volver
                            </Link>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Nombre:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Edad:</label>
                                <input
                                    type="number"
                                    name="age"
                                    className="form-control"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Teléfono:</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Profesión:</label>
                                <input
                                    type="text"
                                    name="profession"
                                    className="form-control"
                                    value={formData.profession}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Foto (URL o ruta):</label>
                                <input
                                    type="text"
                                    name="photo"
                                    className="form-control"
                                    value={formData.photo}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Biografía:</label>
                                <textarea
                                    name="biography"
                                    rows="3"
                                    className="form-control"
                                    value={formData.biography}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Área:</label>
                                <input
                                    type="number"
                                    name="area_id"
                                    className="form-control"
                                    value={formData.area_id}
                                    onChange={handleChange}
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
                                />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <Link to="/teacher" className="btn btn-light px-4">Cancelar</Link>
                                <button type="submit" className="btn btn-success px-4 fw-bold">
                                    Actualizar Profesor
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}