import {Link} from "react-router-dom";

function TakeOrder() {
  return (
    <>
    <Layout>

      <main>
        <h2></h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/">Cerrar Sesión</Link>
      </nav>
    </Layout>
    </>
  );
}
export default TakeOrder