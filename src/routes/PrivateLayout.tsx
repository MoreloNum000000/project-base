// PrivateLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import '../styles/PrivateLayout.css'; // Asegúrate de crear este archivo CSS

export default function PrivateLayout() {
  return (
    <div className="private-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}