import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Example from "../componentes/common/Menu";
import Layout from "./Layout";
import Title from "../componentes/common/Title";
import Card from "../componentes/common/Card";

function PrepareOrder() {
  return (
    <>
      <Layout>
        <Title
          name="Preparación de Pedido"
          description="Menú"
        ></Title>
          <div className="grid grid-cols-3 justify-items-center auto-cols-auto bg-[#858585] w-2/4">
          <Card title={"Arepa de lomo"} image={"./src/assets/arepa.jpg"} price={"2000$"} />
          <Card title={"Arepa Pabellon"} image={"./src/assets/arepa-pabellon.jpeg"} price={"3000$"} />
          <Card title={"Arepa de Carne"} image={"./src/assets/Arepas-carne-mechada.jpg"} price={"4000$"} />
          </div>
        <ul>
        8
          {/* {data.map((val) => {
            return (
              <li>
                <h1>Nombre: {val.name}</h1>
                <p>Precio: {val.precio}</p>
                Imagen: <img src={val.imagen} alt="" />
                 
                <hr />
              </li>
            );
          })} */}
        </ul>

        <main>
          {/* <h2>Prueba de Heike</h2>
          <p>That feels like an existential question, don't you think?</p>
          <Example /> */}
        </main>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/">Cerrar Sesión</Link>
        </nav>
      </Layout>
    </>
  );
}
export default PrepareOrder;
