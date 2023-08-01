import React, { Component } from "react";
import "./Login.css";
import Register from "./Register.jsx";

function Login() {
  return (
    <div id="login">
      <header>
        <h2>Iniciar sesión</h2>
        <hr />
      </header>

      <form>
        <div>
          <h3>Usuario</h3>
          <input name="User"/>
        </div>

        <div>
          <h3>Contraseña</h3>
          <input name="password" type="password" />
        </div>
      </form>

      <button type="submit" disabled>Ingresar</button>

      <hr />

      <button href="./register.jsx">Registrarse</button>
    </div>
  );
}


export default Login
