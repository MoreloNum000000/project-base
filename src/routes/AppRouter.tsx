// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/not-found/NotFound";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";  // Importa tu componente de dashboard

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Ruta base */}
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirige a /dashboard */}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
