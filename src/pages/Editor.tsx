// import { useState } from "react";

// const Editor = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSave = () => {
//     const docs = JSON.parse(localStorage.getItem("docs") || "[]");
//     docs.push({ id: Date.now(), title, content });
//     localStorage.setItem("docs", JSON.stringify(docs));
//     alert("Documento guardado 🧠");
//   };

//   return (
//     <div>
//       <h1>Nueva Documentación</h1>
//       <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
//       <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Contenido" />
//       <button onClick={handleSave}>Guardar</button>
//     </div>
//   );
// };

// export default Editor;