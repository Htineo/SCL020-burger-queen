import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function PrepareOrder() {
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
      <div class="cont-card">
        <div class="card">
          <h3>Arepa Reina Pepiada</h3>
          <img src="https://i.postimg.cc/2y4VJJSc/arepa.png" alt="" />
          <span class="price">$1.200</span>
        </div>
        <div class="card">
          <h3>Arepa Reina Pepiada</h3>
          <img src="https://i.postimg.cc/2y4VJJSc/arepa.png" alt="" />
          <span class="price">$1.200</span>
        </div>
        <div class="card">
          <h3>Arepa Reina Pepiada</h3>
          <img src="https://i.postimg.cc/2y4VJJSc/arepa.png" alt="" />
          <span class="price">$1.200</span>
        </div>
      </div>

      <br />
      <br />
      <br />

      <section class="section-menu">
        <table class="table-menu">
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
                <div class="counter">
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
                <div class="counter">
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
                <div class="counter">
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
                <div class="counter">
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

        <div class="total">
          <h4>Total:</h4>
          <span>$10.40</span>
        </div>
        <div class="options">
          <a class="btn" href="">
            COCINAR
          </a>
        </div>
      </section>
    </>
  );
}
export default PrepareOrder;
