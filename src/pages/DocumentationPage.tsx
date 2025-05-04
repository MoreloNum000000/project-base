import React, { useState, useEffect } from 'react';
import { Document } from '../schemas/documentSchema';
import Search from '../components/Search';
import Card from '../components/Card';
import '../styles/DocumentationPage.css';

const initialDocuments: Document[] = [
    {
        id: "1",
        imagen: "https://picsum.photos/400/250?random=1",
        title: "Gestión de Contratos",
        desarrollador: "JORGE ANDRÉS MORELO HINESTROZA",
        proyecto: "Sistema Legal de Contratos",
        modulo: "Contratos",
        descripcion: "Administra contratos legales con opciones de firma electrónica.",
        observaciones: "Funcional en modo local y en la nube.",
        updatedAt: new Date(),
        createdAt: "2025-03-15",
    },
    {
        id: "2",
        imagen: "https://picsum.photos/400/250?random=2",
        title: "Gestión de Inventarios",
        desarrollador: "DANIELA GARCÍA",
        proyecto: "Control de Inventarios y Almacén",
        modulo: "Inventarios",
        descripcion: "Controla entradas, salidas y alertas de stock mínimo.",
        observaciones: "Incluye exportación a Excel y PDF.",
        updatedAt: new Date(),
        createdAt: "2024-08-22",
    },
    {
        id: "3",
        imagen: "https://picsum.photos/400/250?random=3",
        title: "Panel de Reportes",
        desarrollador: "LUIS PÉREZ",
        proyecto: "Dashboard Financiero",
        modulo: "Reportes",
        descripcion: "Genera reportes financieros automáticos en tiempo real.",
        observaciones: "Con gráficos interactivos y filtros personalizados.",
        updatedAt: new Date(),
        createdAt: "2023-12-10",
    },
    {
        id: "4",
        imagen: "https://picsum.photos/400/250?random=4",
        title: "Gestión de Usuarios",
        desarrollador: "JORGE ANDRÉS MORELO HINESTROZA",
        proyecto: "Sistema de Administración",
        modulo: "Usuarios",
        descripcion: "Permite crear, editar y eliminar cuentas de usuario.",
        observaciones: "Sistema con roles y autenticación por token.",
        updatedAt: new Date(),
        createdAt: "2025-01-05",
    },
    {
        id: "5",
        imagen: "https://picsum.photos/400/250?random=5",
        title: "Módulo de Soporte",
        desarrollador: "ANA LÓPEZ",
        proyecto: "Portal de Soporte Técnico",
        modulo: "Soporte",
        descripcion: "Permite registrar, gestionar y cerrar tickets.",
        observaciones: "Incluye sistema de notificaciones por correo.",
        updatedAt: new Date(),
        createdAt: "2023-11-30",
    },
    {
        id: "6",
        imagen: "https://picsum.photos/400/250?random=6",
        title: "Gestión de Tareas",
        desarrollador: "JORGE ANDRÉS MORELO HINESTROZA",
        proyecto: "Sistema de Proyectos Ágiles",
        modulo: "Tareas",
        descripcion: "Organiza tareas por sprint, prioridades y estado.",
        observaciones: "Integrado con tablero tipo Kanban.",
        updatedAt: new Date(),
        createdAt: "2022-06-18",
    },
];


const DocumentationPage: React.FC = () => {
    const [documents, setDocuments] = useState<Document[]>(initialDocuments);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("docs", JSON.stringify(documents));
    }, [documents]);

    const filteredDocuments = documents.filter((doc) =>
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.descripcion.toLowerCase().includes(query.toLowerCase()) ||
        doc.createdAt.toString().includes(query) ||
        doc.desarrollador.toLowerCase().includes(query.toLowerCase()) ||
        doc.proyecto.toLowerCase().includes(query.toLowerCase()) ||
        doc.modulo.toLowerCase().includes(query.toLowerCase()) ||
        doc.observaciones.toLowerCase().includes(query.toLowerCase()) ||
        doc.desarrollador.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="documentation-page">
            <h2>Documentaciónes</h2>
            <Search query={query} onQueryChange={setQuery} placeholder='Buscar documentación...' />

            <div className="doc-list">
                {filteredDocuments.map((doc) => (
                    <Card key={doc.id} data={doc} />
                ))}
            </div>
        </div>
    );
};


export default DocumentationPage;
