// pages/DocumentView.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, FolderCog } from "lucide-react";
import ScrollSpyNav from "../components/ScrollSpyNav";

const DocumentView = () => {
    const { id } = useParams();
    const docs = JSON.parse(localStorage.getItem("docs") || "[]");
    const doc = docs.find((d: any) => d.id.toString() === id);

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({ ...doc });

    if (!doc) return <div className="p-10 text-center text-xl">📄 Documento no encontrado</div>;

    const sections = [
        { id: "overview", label: "Resumen general" },
        { id: "developer", label: "Desarrollador" },
        { id: "project", label: "Proyecto" },
        { id: "module", label: "Módulo" },
        { id: "content", label: "Contenido Comercial" },
        { id: "technical", label: "Documentación Técnica" },
        { id: "files", label: "Archivos Adjuntos" },
        { id: "updates", label: "Historial" },
    ];

    const handleChange = (field: string, value: string) => {
        setForm((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange(field, reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex">
            <ScrollSpyNav sections={sections} className="w-48" />

            <main className="flex-1 p-6 space-y-10">
                <div className="flex justify-between items-center mb-6">
                    <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                        <ArrowLeft /> Volver
                    </a>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="inline-flex gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        <FolderCog /> {isEditing ? "Ver como lectura" : "Editar documentación"}
                    </button>
                </div>

                <section id="overview">
                    <h1 className="text-3xl font-bold text-center">{doc.title}</h1>
                    {isEditing ? (
                        <input type="file" onChange={(e) => handleFileChange(e, "imagen")} />
                    ) : null}
                    <img
                        src={form.imagen || "https://via.placeholder.com/600x300"}
                        alt="Vista del documento"
                        className="w-full max-h-[300px] object-cover rounded-lg shadow-lg my-4"
                    />
                </section>

                <section id="developer">
                    <h2 className="text-xl font-semibold">👨‍💻 Desarrollador</h2>
                    {isEditing ? (
                        <input
                            className="border p-2 w-full"
                            value={form.desarrollador}
                            onChange={(e) => handleChange("desarrollador", e.target.value)}
                        />
                    ) : (
                        <p>{doc.desarrollador}</p>
                    )}
                </section>

                <section id="project">
                    <h2 className="text-xl font-semibold">📁 Proyecto</h2>
                    {isEditing ? (
                        <input
                            className="border p-2 w-full"
                            value={form.proyecto}
                            onChange={(e) => handleChange("proyecto", e.target.value)}
                        />
                    ) : (
                        <p>{doc.proyecto}</p>
                    )}
                </section>

                <section id="module">
                    <h2 className="text-xl font-semibold">🧩 Módulo</h2>
                    {isEditing ? (
                        <input
                            className="border p-2 w-full"
                            value={form.modulo}
                            onChange={(e) => handleChange("modulo", e.target.value)}
                        />
                    ) : (
                        <p>{doc.modulo}</p>
                    )}
                </section>

                <section id="content">
                    <h2 className="text-xl font-semibold">📄 Contenido Comercial</h2>
                    {isEditing ? (
                        <textarea
                            className="border p-2 w-full min-h-[150px]"
                            value={form.content}
                            onChange={(e) => handleChange("content", e.target.value)}
                        />
                    ) : (
                        <p className="whitespace-pre-wrap">{doc.content}</p>
                    )}
                    {isEditing ? (
                        <input type="file" multiple onChange={(e) => console.log("Cargar adjuntos", e.target.files)} />
                    ) : (
                        <p>No hay archivos adjuntos visibles en esta demo.</p>
                    )}
                </section>

                <section id="technical">
                    <h2 className="text-xl font-semibold">🛠 Documentación Técnica</h2>
                    {isEditing ? (
                        <textarea
                            className="border p-2 w-full min-h-[150px]"
                            value={form.tecnica || ""}
                            onChange={(e) => handleChange("tecnica", e.target.value)}
                        />
                    ) : (
                        <p className="whitespace-pre-wrap">{doc.tecnica || "Sin información técnica aún."}</p>
                    )}
                    {isEditing ? (
                        <input type="file" multiple onChange={(e) => console.log("Cargar adjuntos", e.target.files)} />
                    ) : (
                        <p>No hay archivos adjuntos visibles en esta demo.</p>
                    )}
                </section>

                <section id="files">
                    <h2 className="text-xl font-semibold">📎 Archivos Adjuntos</h2>
                    {isEditing ? (
                        <input type="file" multiple onChange={(e) => console.log("Cargar adjuntos", e.target.files)} />
                    ) : (
                        <p>No hay archivos adjuntos visibles en esta demo.</p>
                    )}
                </section>

                <section id="updates">
                    <h2 className="text-xl font-semibold">🕒 Historial</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div><strong>📅 Creado:</strong><br />{new Date(doc.createdAt).toLocaleString()}</div>
                        <div><strong>🔄 Actualizado:</strong><br />{new Date(doc.updatedAt).toLocaleString()}</div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DocumentView;
