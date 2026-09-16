import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AreaIndex() {
    // Datos de prueba imitando la variable $areas de Blade
    const [areas, setAreas] = useState([
        { id: 1, name: 'Sistemas y Desarrollo de Software' },
        { id: 2, name: 'Gestión Administrativa' },
        { id: 3, name: 'Diseño e Innovación' }
    ]);

    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar esta área?')) {
            setAreas(areas.filter((area) => area.id !== id));
        }
    };

    return (
        <div className="container">
            <h1>Lista de Areas</h1>
            <br />

            <Link to="/area/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle"></i> Nueva Area
            </Link>

            <table id="idArea" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th colSpan="3" className="text-center">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {areas.length > 0 ? (
                        areas.map((area) => (
                            <tr key={area.id}>
                                <td>{area.id}</td>
                                <td>{area.name}</td>

                                <td>
                                    <Link to={`/area/show/${area.id}`} className="btn btn-link p-0">
                                        Mostrar
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/area/edit/${area.id}`} className="btn btn-link p-0">
                                        Editar
                                    </Link>
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(area.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No hay áreas registradas.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}