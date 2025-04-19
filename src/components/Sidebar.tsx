import { useEffect, useState } from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <aside className="sidebar">
      <h2>Panel</h2>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Usuarios</a></li>
          <li><a href="#">Reportes</a></li>
        </ul>
      </nav>
      <button onClick={() => setIsDark(!isDark)}
        title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
        Tema {isDark ? "Claro ☀️" : "Oscuro 🌙"}
      </button>
    </aside>
  );
};

export default Sidebar;
