// /components/DocEditor/DocEditor.tsx
import React, { useState } from 'react';
import { Document, documentSchema } from '../../schemas/documentSchema';

interface DocEditorProps {
  initialDocument: Document;
  onSave: (updatedDoc: Document) => void;
}

const DocEditor: React.FC<DocEditorProps> = ({ initialDocument, onSave }) => {
  const [document, setDocument] = useState(initialDocument);

  const handleChange = (field: string, value: string) => {
    setDocument({ ...document, [field]: value });
  };

  const handleSave = () => {
    const result = documentSchema.safeParse(document);

    if (result.success) {
      onSave(result.data);
    } else {
      alert("Error en los datos del documento");
    }
  };

  return (
    <div className="doc-editor">
      <input
        type="text"
        value={document.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Título del documento"
      />
      <textarea
        value={document.content}
        onChange={(e) => handleChange("content", e.target.value)}
        placeholder="Contenido del documento"
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default DocEditor;
