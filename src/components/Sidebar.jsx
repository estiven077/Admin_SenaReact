import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="bg-dark text-white p-3 min-vh-100" style={{ width: '250px' }}>
            <h4 className="fw-bold text-success mb-4">Admin SENA</h4>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item mb-2">
                    <Link to="/" className="nav-link text-white">
                        <i className="fas fa-home me-2"></i> Inicio
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/apprentice" className="nav-link text-white">
                        <i className="fas fa-users me-2"></i> Aprendices
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/area" className="nav-link text-white">
                        <i className="fas fa-layer-group me-2"></i> Áreas
                    </Link>
                </li>
            </ul>
        </div>
    );
}