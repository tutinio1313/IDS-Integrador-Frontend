import React, { Component } from "react";
import "./Login.css";
import Register from "./Register.jsx";

export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <div>
          <h2>Iniciar sesión</h2>
          <hr className="rounded-md mx-auto mb-3" style={{height: "2px"}} />
        </div>
  
        <div>
          <form>
            <div>
              <h3>Usuario</h3>
              <input name="User"/>
            </div>
    
            <div>
              <h3>Contraseña</h3>
              <input name="password" type="password"/>
            </div>
          </form>
        </div>
  
        <button type="submit" disabled>Ingresar</button>
  
        <hr className="h-1 rounded-md mx-auto mb-3" />
  

      </div>
    );
  }
}
