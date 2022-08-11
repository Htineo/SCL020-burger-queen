import { Link } from "react-router-dom"; // dependencia que traemos del router-dom
import { LockClosedIcon } from "@heroicons/react/solid";
import "../index.css";
import { useNavigate } from "react-router-dom";

import React from "react";
function LogIn(props) {
  let navigate = useNavigate();

  const [usuario, setUsuario] = React.useState('')
  const [password, setPassword] = React.useState('')

  const changeUsuario = event => {
    setUsuario(event.target.value);
 };

 const changePassword = event => {
  setPassword(event.target.value);
};

  const submit = () =>{
    if(usuario && password){
      navigate('/prepare-order')
    }
  }
  return (
    <>
      <main className="login">
        <img width="250" src="https://i.postimg.cc/6Q6NKZb9/logo.png" alt="" />
        <form>
          <input type="text" placeholder="Usuario" value={usuario} onChange={changeUsuario}/>
          <input type="password" placeholder="Contraseña"  value={password} onChange={changePassword}/>
          <button onClick={submit}>Ingresar</button>
        </form>
         
      </main>
    </>
  );
}
export default LogIn;
