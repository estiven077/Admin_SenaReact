import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 1. Estilos principales de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. JavaScript de Bootstrap (Obligatorio para que funcionen los dropdowns, modales y offcanvas)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Librerías de Iconos (Ambas listas por si usas Bootstrap Icons o FontAwesome)
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// 4. Componente principal de tu aplicación
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)