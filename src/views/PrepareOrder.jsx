import React, { useState } from "react";
import menuPeruvian from "../data/menuPeruvian.json";
import menuVenezuelan from "../data/menuVenezuelan.json";
import menuAggregates from "../data/menuAggregates.json";
import "./PrepareOrder.css";

// Material Tailwind Menú: Servir, Perfil y Cerrar Sesión

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const data = [
  {
    label: "Menú Peruano ",
    value: "menuPeruvian",
  },
  {
    label: "Menú Venezolano",
    value: "menuVenezuelan",
  },
  {
    label: "Menú Agregados ",
    value: "menuAggregates",
  },
];

const MenuView = () => {
  const [list, setList] = useState([]);
  const [sum, setSum] = useState(0);

  // Función donde se escucha el click que se hace a cada plato
  const cardClick = (value) => {
    console.log("Detectando click", value);
    let duplicate = list.filter((item) => item.id === value.id);
    if (duplicate.length === 0) {
      value.counter = 1;
      setList([...list, value]);
      console.log("value.precio ", value.precio, value.counter);
      let sumaClick = value.price * value.counter;
      setSum(sum + sumaClick);
    }
  };

  const less = (id) => {
    let update = list.map((item) => {
      if (item.id === id) {
        item.counter -= 1;
        return item;
      }
      return item;
    });
    setList(update);
    sumTotal();
  };
  const more = (id) => {
    let update = list.map((item) => {
      if (item.id === id) {
        item.counter += 1;
        return item;
      }
      return item;
    });
    setList(update);
    sumTotal();
  };

  const remove = (id) => {
    let update = list.filter((item) => item.id !== id);
    setList(update);
    sumTotal();
  };

  const sumTotal = () => {
    let suma = 0;
    list.map((item) => {
      suma += item.price * item.counter;
    });
    console.log(suma, "sumaaa", list);
    setSum(suma);
  };

  // Botones de redirección a las vistas
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

      {/* Componente de los tres menús */}

      {/* componentes de tailwind: es una tabla de 1x3 */}
      <Tabs value="menuPeruvian">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key={"menuPeruvian"} value={"menuPeruvian"}>
            <div className="cont-card">
              {menuPeruvian.map((value, key) => {
                return (
                  <div
                    className="card"
                    key={key + 1}
                    onClick={() => cardClick(value)}
                  >
                    <h3>{value.name}</h3>
                    <div className="cont-img">
                    <img src={value.img} alt="" />
                    </div>
                    <span className="price">{value.price}</span>
                  </div>
                );
              })}
            </div>
          </TabPanel>

          <TabPanel key={"menuVenezuelan"} value={"menuVenezuelan"}>
            <div className="cont-card">
              {menuVenezuelan.map((value, key) => {
                return (
                  <div className="card" key={key + 1}
                  onClick={() => cardClick(value)}>
                    <h3>{value.name}</h3>
                    <div className="cont-img">
                    <img src={value.img} alt="" />
                    </div>
                    <span className="price">{value.price}</span>
                  </div>
                );
              })}
            </div>
          </TabPanel>

          <TabPanel key={"menuAggregates"} value={"menuAggregates"}>
            <div className="cont-card">
              {menuAggregates.map((value, key) => {
                return (
                  <div className="card" key={key + 1}
                  onClick={() => cardClick(value)}>
                    <h3>{value.name}</h3>
                    <div className="cont-img">
                    <img src={value.img} alt="" />
                    </div>
                    <span className="price">{value.price}</span>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>

      <br />
      <br />
      <br />

      <section className="section-menu">
        <table className="table-menu">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Sub total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{list[index].price * list[index].counter} </td>
                  <td>
                    <div className="counter">
                      <button onClick={() => less(item.id)}>
                        <img
                          src="https://i.postimg.cc/hPydq8tr/menos.png"
                          alt=""
                        />
                      </button>
                      <span>{item.counter}</span>
                      <button onClick={() => more(item.id)}>
                        <img
                          src="https://i.postimg.cc/x8kSNSLq/mas.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => remove(item.id)}>
                      <img
                        src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <br />
        <div className="total">
          <h4>Total:</h4>
          <span>{sum}</span>
        </div>
        <br />
        <div className="options">
          <a className="btn" href="">
            COCINAR
          </a>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};
export default MenuView;
