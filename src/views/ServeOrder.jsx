import { Link } from "react-router-dom";

function ServeOrder() {
  return (
  
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Servir Pedido</h1>
          </div>
        </header>
        <main>
          <h2></h2>
          <p>That feels like an existential question, don't you think?</p>
        </main>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/">Cerrar Sesión</Link>
        </nav>
      
    </>
  );
}
export default ServeOrder;
