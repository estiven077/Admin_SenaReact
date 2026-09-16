import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* CSS de movimiento rápido para íconos y enlaces del footer */}
      <style>{`
        .footer-hover {
            transition: transform 0.25s ease, color 0.25s ease;
            display: inline-block;
            cursor: default;
        }
        .footer-hover:hover {
            transform: translateY(-4px) scale(1.1);
            color: #198754 !important;
        }
        .footer-link {
            transition: color 0.2s ease, padding-left 0.2s ease;
            text-decoration: none;
        }
        .footer-link:hover {
            color: #198754 !important;
            padding-left: 4px;
        }
      `}</style>

      {/* Footer Institucional */}
      <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-success border-3">
        <div className="container">
          <div className="row g-4">

            {/* Columna 1: Información Institucional / Contacto */}
            <div className="col-lg-5 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div className="p-2 bg-success bg-opacity-25 rounded-circle me-2 text-success">
                  <i className="fas fa-graduation-cap fa-lg"></i>
                </div>
                <h5 className="fw-bold mb-0 text-white">Sistema de Administración SENA</h5>
              </div>
              <p className="text-secondary small leading-relaxed mb-3">
                Plataforma integral para la gestión de formación profesional, aprendices, instructores y recursos académicos.
              </p>
              <ul className="list-unstyled text-secondary small mb-0">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt text-success me-2"></i> Popayán, Colombia
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone-alt text-success me-2"></i> +57 3205195429
                </li>
                <li className="mb-0">
                  <i className="fas fa-envelope text-success me-2"></i> mquinayas07@gmail.com
                </li>
              </ul>
            </div>

            {/* Columna 2: Enlaces Rápidos del Sistema */}
            <div className="col-lg-3 col-md-6 ms-auto">
              <h5 className="fw-bold text-white mb-3">Navegación</h5>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <Link to="/course" className="text-secondary footer-link">
                    <i className="fas fa-chevron-right text-success small me-1"></i> Cursos Ofertados
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/apprentice" className="text-secondary footer-link">
                    <i className="fas fa-chevron-right text-success small me-1"></i> Aprendices
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/teacher" className="text-secondary footer-link">
                    <i className="fas fa-chevron-right text-success small me-1"></i> Instructores
                  </Link>
                </li>
                <li className="mb-0">
                  <a href="/#quienes-somos" className="text-secondary footer-link">
                    <i className="fas fa-chevron-right text-success small me-1"></i> ¿Quiénes Somos?
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Redes Sociales */}
            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold text-white mb-3">Síguenos</h5>
              <p className="text-secondary small mb-3">Conéctate con nosotros en nuestras redes oficiales:</p>

              <div className="d-flex gap-3">
                <a href="#!" onClick={(e) => e.preventDefault()} className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center footer-hover" style={{ width: '42px', height: '42px' }}>
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#!" onClick={(e) => e.preventDefault()} className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center footer-hover" style={{ width: '42px', height: '42px' }}>
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#!" onClick={(e) => e.preventDefault()} className="btn btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center footer-hover" style={{ width: '42px', height: '42px' }}>
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>

          </div>

          <hr className="my-4 border-secondary opacity-25" />

          {/* Copyright */}
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p className="text-secondary small mb-0">
                &copy; {new Date().getFullYear()} <span className="text-success fw-bold">SENA</span> - Todos los derechos reservados.
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}