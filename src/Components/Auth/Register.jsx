import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
    <div id = "register" style={{display: "none"}}>
      <div>
         <h2>Registrarse</h2>
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
              <input type="password" id="Password"/>
            </div>

            <div>
              <h3>Repetir contraseña</h3>
              <input type="password" id="PasswordValidate"/>
            </div>
            <div>
              <h3>Email</h3>
              <input type="email" id="email"/>
            </div>
            <div>
              <h3>Repetir email</h3>
              <input type="password" id="emailValidate"/>
            </div>
          </form>
        </div>
  
        <button type="submit" disabled>Ingresar</button>
  
        <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>);
  }
}
