import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ComputerIndex() {
    // Estado para simular la lista de computadores (luego lo cargas con tu API / BD)
    const [computers, setComputers] = useState([
        { id: 1, number: '101', brand: 'Lenovo' },
        { id: 2, number: '102', brand: 'HP' },
    ]);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este computador?")) {
            // Aquí luego harás tu petición DELETE a la API
            setComputers(computers.filter(computer => computer.id !== id));
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="fw-bold mb-3">Lista de Computadores</h1>
            <br />

            <div className="container p-0">

                {/* Botón Nuevo Computador */}
                <Link to="/computer/create" className="btn btn-success mb-3">
                    <i className="bi bi-plus-circle me-1"></i> Nuevo Computador
                </Link>

                <div className="table-responsive">
                    <table id="idComputador" className="table table-striped table-bordered align-middle" style={{ width: '100%' }}>
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Number</th>
                                <th>Brand</th>
                                <th colSpan="3" className="text-center">Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {computers.length > 0 ? (
                                computers.map((computer) => (
                                    <tr key={computer.id}>
                                        <td>{computer.id}</td>
                                        <td>{computer.number}</td>
                                        <td>{computer.brand}</td>

                                        <td>
                                            <Link to={`/computer/show/${computer.id}`} className="btn btn-info btn-sm text-white">
                                                Mostrar
                                            </Link>
                                        </td>

                                        <td>
                                            <Link to={`/computer/edit/${computer.id}`} className="btn btn-warning btn-sm">
                                                Editar
                                            </Link>
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => handleDelete(computer.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No hay computadores registrados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}