import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false; // Aquí se debe comprobar si el usuario está autenticado

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirige al login si no está autenticado
  }

  return <>{children}</>; // Renderiza las rutas privadas si está autenticado
};

export default ProtectedRoute;
