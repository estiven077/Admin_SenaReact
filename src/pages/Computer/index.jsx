import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ComputerIndex() {
    const [computers, setComputers] = useState([]);

    useEffect(() => {
        // Carga los computadores guardados en el navegador
        const savedComputers = JSON.parse(localStorage.getItem('computers_sena') || '[]');
        setComputers(savedComputers);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de eliminar este computador?")) {
            const updatedComputers = computers.filter(computer => computer.id !== id);
            setComputers(updatedComputers);
            localStorage.setItem('computers_sena', JSON.stringify(updatedComputers));
        }
    };

    return (
        <div className="container">
            <h1>Lista de Computadores</h1>
            <br />

            <Link to="/computer/create" className="btn btn-success mb-3">
                <i className="bi bi-plus-circle"></i> Nuevo Computador
            </Link>

            <table id="idComputador" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
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
                                    <Link to={`/computer/show/${computer.id}`} className="btn btn-link p-0">
                                        Mostrar
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/computer/edit/${computer.id}`} className="btn btn-link p-0">
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
    );
}