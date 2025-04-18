import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <header>Private Header</header>
      <main>
        <Outlet /> {/* Aquí se renderizarán las rutas privadas */}
      </main>
      <footer>Private Footer</footer>
    </div>
  );
};

export default PrivateLayout;
