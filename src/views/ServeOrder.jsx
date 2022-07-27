import {Link} from "react-router-dom";

function ServeOrder() {
  return (
    <>
      <main>
        <h2></h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/">Cerrar Sesión</Link>
      </nav>
    </>
  );
}
export default ServeOrder