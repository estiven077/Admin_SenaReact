import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Función para manejar la búsqueda global
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        console.log("Buscando módulo o registro:", query);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top" style={{ backgroundColor: '#16780c' }}>
            <div className="container-fluid px-4">

                {/* LOGO INSTITUCIONAL + TÍTULO ADMIN SENA */}
                <Link className="navbar-brand fw-bold d-flex align-items-center text-white nav-link-pill text-decoration-none" to="/">
                    <span className="bg-white rounded p-1 me-2 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <img
                            src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
                            alt="Logo SENA"
                            className="img-fluid"
                            style={{ maxHeight: '32px' }}
                        />
                    </span>
                    <span>Admin SENA</span>
                </Link>

                {/* Botón responsive para dispositivos móviles */}
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* OPCIONES DE LA IZQUIERDA */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center gap-1">

                        {/* MÓDULO DE ADMINISTRACIÓN (Controlado por Estado) */}
                        <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
                            <button
                                className="nav-link dropdown-toggle fw-bold nav-link-pill d-flex align-items-center text-white bg-transparent border-0"
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <i className="bi bi-sliders me-2 opacity-75"></i>Administración
                            </button>

                            <ul className={`dropdown-menu shadow border-0 p-2 rounded-3 mt-2 ${isOpen ? 'show' : ''}`}>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/area" onClick={() => setIsOpen(false)}>Áreas</Link></li>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/training-center" onClick={() => setIsOpen(false)}>Centros de Formación</Link></li>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/computer" onClick={() => setIsOpen(false)}>Computadores</Link></li>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/course" onClick={() => setIsOpen(false)}>Cursos</Link></li>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/teacher" onClick={() => setIsOpen(false)}>Instructores</Link></li>
                                <li><Link className="dropdown-item py-2 px-3 rounded-2" to="/apprentice" onClick={() => setIsOpen(false)}>Aprendices</Link></li>
                            </ul>
                        </li>

                        {/* Quiénes Somos */}
                        <li className="nav-item">
                            <Link className="nav-link fw-bold nav-link-pill d-flex align-items-center text-white text-decoration-none" to="/">
                                Quiénes Somos
                            </Link>
                        </li>
                    </ul>

                    {/* OPCIONES DE LA DERECHA */}
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
                        <form className="d-flex my-1" role="search" onSubmit={handleSearch}>
                            <div className="input-group buscador-sena shadow-sm">
                                <input
                                    className="form-control border-0 px-3 bg-transparent text-white shadow-none"
                                    type="search"
                                    name="query"
                                    placeholder="Buscar módulo o registro..."
                                    aria-label="Buscar"
                                    required
                                />
                                <button className="btn btn-search-sena" type="submit" title="Ejecutar búsqueda">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </form>

                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold nav-link-pill text-decoration-none px-3 py-1 border border-light border-opacity-50 rounded-pill" to="/login">
                                <i className="bi bi-person-circle me-1"></i> Iniciar Sesión
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};