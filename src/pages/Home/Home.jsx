import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//imagenes importadas

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import anuncio1 from '../../assets/anuncio1.jpg';
import anuncio2 from '../../assets/anuncio2.jpg';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado con éxito.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <style>{`
        .hover-move {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-move:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
        }
      `}</style>

            <div className="container-fluid px-0 py-3">

                {/* Encabezado principal */}
                <div className="text-center my-4">
                    <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill mb-2">
                        Plataforma Institucional
                    </span>
                    <h1 className="display-5 fw-bold text-dark">
                        Sistema de Administración SENA
                    </h1>
                    <p className="text-muted fs-6">Gestión integral de la formación profesional y recursos académicos</p>
                </div>

                {/* =================== CARRUSEL =================== */}
                <div id="carouselExampleCaptions" className="carousel slide mb-5 shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel">
                    <div className="carousel-indicators mb-3">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100 object-fit-cover" style={{ height: '480px' }} alt="Bienvenido" />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-4 mb-3 shadow">
                                <h5 className="fw-bold fs-4 text-success">Bienvenido</h5>
                                <p className="mb-0 text-light opacity-75">Sistema de Administración SENA.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100 object-fit-cover" style={{ height: '480px' }} alt="Cursos" />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-4 mb-3 shadow">
                                <h5 className="fw-bold fs-4 text-success">Cursos</h5>
                                <p className="mb-0 text-light opacity-75">Consulta todos los cursos.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100 object-fit-cover" style={{ height: '480px' }} alt="Aprendices" />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-4 mb-3 shadow">
                                <h5 className="fw-bold fs-4 text-success">Aprendices</h5>
                                <p className="mb-0 text-light opacity-75">Administra aprendices e instructores.</p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon rounded-circle bg-dark p-3" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon rounded-circle bg-dark p-3" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* =================== SECCIÓN: QUIÉNES SOMOS =================== */}
                <div id="quienes-somos" className="my-5 py-2">
                    <h2 className="text-center fw-bold text-success display-6 mb-4">¿Quiénes Somos?</h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow p-4 p-md-5 rounded-4 bg-white hover-move">
                                <div className="card-body text-center">
                                    <h3 className="fw-bold mb-3 text-dark">
                                        Sistema de Administración SENA
                                    </h3>

                                    <div className="row justify-content-center mb-4">
                                        <div className="col-md-9">
                                            <p className="text-secondary fs-6 mb-3">
                                                Admin SENA es un sistema diseñado para facilitar la
                                                administración y organización de la información
                                                relacionada con la formación del SENA.
                                            </p>
                                            <p className="text-secondary fs-6">
                                                Nuestro sistema permite gestionar de manera sencilla
                                                aprendices, instructores, cursos, áreas, centros de
                                                formación y computadores, manteniendo la información
                                                organizada y accesible.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row g-4 mt-2">
                                        <div className="col-md-4">
                                            <div className="p-4 rounded-4 bg-light border-0 h-100 shadow-sm hover-move">
                                                <i className="fas fa-users text-success fa-2x mb-3"></i>
                                                <h5 className="fw-bold text-dark">Aprendices</h5>
                                                <p className="text-muted small mb-0">
                                                    Administración de la información de los aprendices.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="p-4 rounded-4 bg-light border-0 h-100 shadow-sm hover-move">
                                                <i className="fas fa-chalkboard-teacher text-success fa-2x mb-3"></i>
                                                <h5 className="fw-bold text-dark">Instructores</h5>
                                                <p className="text-muted small mb-0">
                                                    Gestión de instructores y su información relacionada.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="p-4 rounded-4 bg-light border-0 h-100 shadow-sm hover-move">
                                                <i className="fas fa-book text-success fa-2x mb-3"></i>
                                                <h5 className="fw-bold text-dark">Formación</h5>
                                                <p className="text-muted small mb-0">
                                                    Gestión de cursos, áreas y centros de formación.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================== SECCIÓN: MÓDULOS DE ADMINISTRACIÓN SENA =================== */}
                <div className="my-5 py-2">
                    <h2 className="text-center fw-bold text-success display-6 mb-4">Módulos de Gestión</h2>

                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {/* Módulo 1 */}
                        <div className="col">
                            <div className="card h-100 shadow border-0 rounded-4 overflow-hidden hover-move">
                                <img src={anuncio1} className="card-img-top" alt="Cursos" style={{ height: '220px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column p-4">
                                    <h5 className="card-title fw-bold text-dark mb-2">Cursos Disponibles</h5>
                                    <p className="card-text text-secondary small flex-grow-1">
                                        Consulta la lista completa de programas de formación y cursos ofertados en el sistema SENA.
                                    </p>
                                    <Link to="/course" className="btn btn-outline-success mt-3 w-100 fw-bold rounded-pill">
                                        Gestionar Cursos <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Módulo 2 */}
                        <div className="col">
                            <div className="card h-100 shadow border-0 rounded-4 overflow-hidden hover-move">
                                <img src={anuncio2} className="card-img-top" alt="Aprendices" style={{ height: '220px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column p-4">
                                    <h5 className="card-title fw-bold text-dark mb-2">Gestión de Aprendices</h5>
                                    <p className="card-text text-secondary small flex-grow-1">
                                        Administra la información personal, fichas de caracterización y registro de los aprendices.
                                    </p>
                                    <Link to="/apprentice" className="btn btn-outline-success mt-3 w-100 fw-bold rounded-pill">
                                        Gestionar Aprendices <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Módulo 3 */}
                        <div className="col">
                            <div className="card h-100 shadow border-0 rounded-4 overflow-hidden hover-move">
                                <img src={img3} className="card-img-top" alt="Instructores" style={{ height: '220px', objectFit: 'cover' }} />
                                <div className="card-body d-flex flex-column p-4">
                                    <h5 className="card-title fw-bold text-dark mb-2">Gestión de Instructores</h5>
                                    <p className="card-text text-secondary small flex-grow-1">
                                        Consulta y gestiona el cuerpo docente, áreas asignadas e información de contacto.
                                    </p>
                                    <Link to="/teacher" className="btn btn-outline-success mt-3 w-100 fw-bold rounded-pill">
                                        Gestionar Instructores <i className="fas fa-arrow-right ms-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="my-5 opacity-25" />

                {/* =================== SECCIÓN: MISIÓN Y VISIÓN =================== */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white border-start border-success border-4 hover-move">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-bullseye text-success fa-2x me-3"></i>
                                    <h3 className="card-title mb-0 fw-bold text-dark">Misión</h3>
                                </div>
                                <p className="card-text text-secondary small">
                                    El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white border-start border-success border-4 hover-move">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="fas fa-eye text-success fa-2x me-3"></i>
                                    <h3 className="card-title mb-0 fw-bold text-dark">Visión</h3>
                                </div>
                                <p className="card-text text-secondary small">
                                    Consolidar al SENA como una entidad de formación de clase mundial, con un modelo educativo innovador y tecnológico, que responda de manera oportuna y pertinente a los desafíos del sector productivo nacional y global, potenciando el talento humano de la región.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-5 opacity-25" />

                {/* =================== SECCIÓN: CONTÁCTANOS =================== */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8 col-lg-7">
                        <div className="card shadow border-0 p-4 p-md-5 rounded-4 bg-white hover-move">
                            <div className="text-center mb-4">
                                <h3 className="fw-bold text-dark mb-1">Contáctanos</h3>
                                <p className="text-muted small">Escríbenos tu sugerencia o inquietud sobre el sistema</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label fw-semibold small text-secondary">Nombre Completo</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 py-2"
                                            id="name"
                                            placeholder="Ej. Juan Pérez"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label fw-semibold small text-secondary">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control rounded-3 py-2"
                                            id="email"
                                            placeholder="nombre@correo.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subject" className="form-label fw-semibold small text-secondary">Asunto</label>
                                        <input
                                            type="text"
                                            className="form-control rounded-3 py-2"
                                            id="subject"
                                            placeholder="Asunto del mensaje"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label fw-semibold small text-secondary">Mensaje o Sugerencia</label>
                                        <textarea
                                            className="form-control rounded-3"
                                            id="message"
                                            rows="4"
                                            placeholder="Escribe aquí tu consulta..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <button type="submit" className="btn btn-success px-5 py-2 fw-bold rounded-pill shadow-sm hover-move">
                                            Enviar Mensaje <i className="fas fa-paper-plane ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}