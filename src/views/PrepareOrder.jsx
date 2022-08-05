import React from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import menuPeruvian from '../data/menuPeruvian.json'

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

const MenuView = () => {
  
 
  return (<>
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

      <div className="cont-card">
        {
          menuPeruvian.map( (value, key) =>{
            return(

            <div className="card" key={key+ 1}>
              <h3>{value.name}</h3>
              <img src={value.img} alt="" />
              <span className="price">{value.price}</span>
            </div>
            )
          })
        }
      </div>

      <br />
      <br />
      <br />

      <section className="section-menu">
        <table className="table-menu">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Arepa Reina Pepiada</td>
              <td>$1.200</td>
              <td>
                <div className="counter">
                  <button>
                    <img src="https://i.postimg.cc/hPydq8tr/menos.png" alt="" />
                  </button>
                  <span>2</span>
                  <button>
                    <img src="https://i.postimg.cc/x8kSNSLq/mas.png" alt="" />
                  </button>
                </div>
              </td>
              <td>
                <button>
                  <img
                    src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td>Arepa Reina Pepiada</td>
              <td>$1.200</td>
              <td>
                <div className="counter">
                  <button>
                    <img src="https://i.postimg.cc/hPydq8tr/menos.png" alt="" />
                  </button>
                  <span>2</span>
                  <button>
                    <img src="https://i.postimg.cc/x8kSNSLq/mas.png" alt="" />
                  </button>
                </div>
              </td>
              <td>
                <button>
                  <img
                    src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td>Arepa Reina Pepiada</td>
              <td>$1.200</td>
              <td>
                <div className="counter">
                  <button>
                    <img src="https://i.postimg.cc/hPydq8tr/menos.png" alt="" />
                  </button>
                  <span>2</span>
                  <button>
                    <img src="https://i.postimg.cc/x8kSNSLq/mas.png" alt="" />
                  </button>
                </div>
              </td>
              <td>
                <button>
                  <img
                    src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td>Arepa Reina Pepiada</td>
              <td>$1.200</td>
              <td>
                <div className="counter">
                  <button>
                    <img src="https://i.postimg.cc/hPydq8tr/menos.png" alt="" />
                  </button>
                  <span>2</span>
                  <button>
                    <img src="https://i.postimg.cc/x8kSNSLq/mas.png" alt="" />
                  </button>
                </div>
              </td>
              <td>
                <button>
                  <img
                    src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />

        <div className="total">
          <h4>Total:</h4>
          <span>$10.40</span>
        </div>
        <div className="options">
          <a className="btn" href="">
            COCINAR
          </a>
        </div>
      </section>
    </>
  );
};
export default MenuView;



