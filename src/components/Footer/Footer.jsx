//import React from 'react';
import './Footer.css'; // <-- Importas el CSS de este componente

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Centro de Formación SENA</p>
        <small>
          <a href="#" className="footer-link me-3">Soporte</a>
          <a href="#" className="footer-link">Términos y Condiciones</a>
        </small>
      </div>
    </footer>
  );
}