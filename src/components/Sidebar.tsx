import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <aside className="sidebar p-4 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h2 className="text-xl font-bold mb-4">IntraDocs 📘</h2>

      <nav className="mb-4">
        <ul className="space-y-2">
          <li><Link to="/">Documentaciones</Link></li>
          <li><Link to="/new">Nueva Doc</Link></li>
        </ul>
      </nav>

      {/* Toggle de tema */}
      <div className="theme-toggle flex items-center space-x-2">
        <Switch
          id="dark-mode-toggle"
          checked={isDark}
          onCheckedChange={setIsDark}
        />
        <Label htmlFor="dark-mode-toggle">
          Tema {isDark ? "Oscuro 🌙" : "Claro ☀️"}
        </Label>
      </div>

      <Link to="/about" className="block mt-4 text-blue-500 hover:underline">
        Acerca de
      </Link>
    </aside>
  );
};

export default Sidebar;
