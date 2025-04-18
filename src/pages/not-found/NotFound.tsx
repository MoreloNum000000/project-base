import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">Oops... página no encontrada.</p>
        <p className="mt-2 text-sm text-gray-500">
          La URL que estás buscando no existe o fue movida.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
