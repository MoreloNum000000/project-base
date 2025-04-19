// // src/store/AuthStore.ts
// import { create } from 'zustand';

// interface AuthState {
//   token: string | null;
//   setToken: (token: string | null) => void;
//   isAuthenticated: boolean;  // Agrega isAuthenticated
// }

// export const useAuth = create<AuthState>((set) => ({
//   token: null,
//   setToken: (token) => set({ token }),
//   isAuthenticated: false, // Inicializa como false
// }));

// // Opcionalmente, puedes actualizar `isAuthenticated` basado en `token`:
// export const useAuthWithAuthCheck = () => {
//   const { token, setToken } = useAuth();

//   // Actualiza `isAuthenticated` dinámicamente
//   return {
//     token,
//     setToken,
//     isAuthenticated: !!token, // Si token existe, el usuario está autenticado
//   };
// };
