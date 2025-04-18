import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      <header>Public Header</header>
      <main>
        <Outlet /> {/* Aquí se renderizarán las rutas públicas */}
      </main>
      <footer>Public Footer</footer>
    </div>
  );
};

export default PublicLayout;
