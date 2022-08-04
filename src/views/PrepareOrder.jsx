import React from "react";
import { Link } from "react-router-dom";
import "./PrepareOrder.css";
import menuPeruano from "../data/data.json";
import menuVenezolano from "../data/data2.json";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Menu = () => {
  
  const data = [
    {
      label: "Menú Peruano ",
      value: "MenuPeruano",
    },
    {
      label: "Menú Venezolano",
      value: "MenuVenezolano",
    },
  ];
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="">Servir</a>
          </li>
          <li>
            <a href="">Perfil</a>
          </li>
          <li>
            <a href="">Cerrar sesión</a>
          </li>
        </ul>
      </header>
      <Tabs value="MenuPeruano">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key={"MenuPeruano"} value={"MenuPeruano"}>
            <div class="cont-card">
              {menuPeruano.map((item) => (
                <div class="card">
                  <h3>{item.name}</h3>
                  <img src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              ;
            </div>
          </TabPanel>

          <TabPanel key={"MenuVenezolano"} value={"MenuVenezolano"}>
            <div class="cont-card">
              {menuVenezolano.map((item) => (
                <div class="card">
                  <h3>{item.name}</h3>
                  <img src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              ;
            </div>
          </TabPanel>

          
        </TabsBody>
      </Tabs>

      <nav>
          <Link to="/delivery">Pedidos listos</Link>
        </nav>
    </>
  );
};
export default Menu;

































// / import { Fragment } from "react";
// import { Link } from "react-router-dom";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";


// function PrepareOrder() {
//   return (
//     <>
     
//         <header className="bg-white shadow">
//           <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold text-gray-900">Servir Pedido</h1>
//           </div>
//         </header>
//         <main>
//           <h2></h2>
//           <p>That feels like an existential question, don't you think?</p>
//         </main>
//         <nav>
//           <Link to="/home">Home</Link>
//           <Link to="/">Cerrar Sesión</Link>
//         </nav>
     
//     </>
//   );
// }
// export default PrepareOrder;
