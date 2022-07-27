import {Link} from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/TakeOrder">Tomar Pedido</Link>
        <Link to="/PrepareOrder">Preparar Pedido</Link>
        <Link to="/ServeOrder">Servir pedido</Link>
        <Link to="/">Cerrar Sesión</Link>
      </nav>
    </>
  );
}
export default Home;
