import { Link } from "react-router-dom"; // dependencia que traemos del router-dom
import { LockClosedIcon } from "@heroicons/react/solid";
import "../index.css";
function LogIn() {
  return (
    <>
      <main class="login">
        <img width="250" src="https://i.postimg.cc/6Q6NKZb9/logo.png" alt="" />
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Ingresar</button>
        </form>
        <nav>
          <Link to="/prepare-order">Home</Link>
        </nav>
      </main>
    </>
  );
}
export default LogIn;
