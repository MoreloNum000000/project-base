import { Navigate } from 'react-router-dom';
import { useAuthWithAuthCheck } from '../store/useAuth';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthWithAuthCheck();  // Usa el hook que proporciona isAuthenticated

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
