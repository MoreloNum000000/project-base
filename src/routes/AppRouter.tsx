// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/not-found/NotFound";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
// import Dashboard from "../pages/Dashboard";  // Importa tu componente de dashboard
import DocumentationPage from "../pages/DocumentationPage";
import DocumentView from "../pages/DocumentView";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<ProtectedRoute><PrivateLayout /></ProtectedRoute>}>
          <Route path="/documentaciones" element={<DocumentationPage />} />
          <Route path="/document/:id" element={<DocumentView  />} /> 
          <Route path="/editor" element={<h1>Editor</h1>} /> 
          <Route path="/profile" element={<h1>Perfil</h1>} /> 
          <Route path="/settings" element={<h1>Ajustes</h1>} /> 
        </Route>

        {/* Ruta base */}
        <Route path="/" element={<Navigate to="/documentaciones" />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
