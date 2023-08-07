import React, { Component } from "react";
import "./Login.css";
import Register from "./Register.jsx";

export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <div>
          <h2>Iniciar sesión</h2>
        </div>
  
        <div>
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
        </div>
  
        <button type="submit" disabled>Ingresar</button>
  
        <hr />
  

      </div>
    );
  }
}
