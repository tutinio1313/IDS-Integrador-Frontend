import React, { Component, useState, useEffect } from "react";
import "./Login.css";
import Register from "./Register.jsx";

export default function Login() {
  
  const [canLogin, SetCanLogin] = useState(false);

  
  useEffect(() => {
    CompareIfCanLogin()
    }, [canLogin]);
  

  const CompareIfCanLogin = () => {
    let inputs = document.getElementsByTagName('input');
    let areNotEmpty = inputs[0].value != "" && inputs[1].value != "";

    SetCanLogin(areNotEmpty);
    const button = document.getElementById('LoginSubmit');

   if(canLogin)
   {
    (button.getAttribute('disabled') != null ?  button.removeAttribute('disabled') : "");
   }
   else
   {
    (button.getAttribute('disabled') == null ?  button.setAttribute ('disabled','disabled') : "");
   }
  }
  
  return (
    <div id="login">
      <div>
        <h2 className="mb-1">Iniciar sesión</h2>
        <hr className="rounded-md mx-auto mb-3" style={{ height: "2px" }} />
      </div>

      <div className="mt-6">
        <form>
          <div>
            <h3>Usuario</h3>
            <input name="User" onChange = {CompareIfCanLogin} />
          </div>

          <div>
            <h3>Contraseña</h3>
            <input name="password" type="password" onChange = {CompareIfCanLogin} />
          </div>
        </form>
      </div>

      <button type="submit" className = "mt-6 mb-3 AuthButton" disabled id = "LoginSubmit">
        Ingresar
      </button>

      <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>
  );
}
