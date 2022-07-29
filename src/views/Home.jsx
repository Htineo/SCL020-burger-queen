import {Link} from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/take-order">Tomar Pedido</Link>
        <Link to="/prepare-Order">Preparar Pedido</Link>
        <Link to="/serve-order">Servir pedido</Link>
        <Link to="/">Cerrar Sesión</Link>
      </nav>
    </>
  );
}
export default Home;