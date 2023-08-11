import React, { Component, useState, useEffect } from "react";

export default function Register() {
  const [canRegister, SetCanRegister] = useState(false);

  
  useEffect(() => {
    CompareIfCanRegister()
    }, [canRegister]);
  

  const CompareIfCanRegister = () => {
    let inputs = document.getElementsByTagName('input');
    let areNotEmpty = true;
    const arePasswordsEquals = inputs[3].value == inputs[4].value;
    const areEmailEquals = inputs[5].value == inputs[6].value;

    for (let index = 2, length = inputs.length; index < length; index += 1) 
    {
      areNotEmpty = inputs[index].value != '';
    }


    SetCanRegister(areNotEmpty);
    const button = document.getElementById('RegisterSubmit');

    if(canRegister && arePasswordsEquals && areEmailEquals)
    {
      (button.getAttribute('disabled') != null ?  button.removeAttribute('disabled') : "");
    }
    else
    {
      (button.getAttribute('disabled') == null ?  button.setAttribute ('disabled','disabled') : "");
    }
  }

  return (
    <div id="register" style={{ display: "none" }}>
      <div className="mb-6">
        <h2 className="mb-1">Registrarse</h2>
        <hr className="rounded-md mx-auto" style={{ height: "2px" }} />
      </div>

      <div>
        <form>
          <div>
            <h3>Usuario</h3>
            <input id="Username" />
          </div>

          <div>
            <h3>Contraseña</h3>
            <input type="password" id="Password" onChange={CompareIfCanRegister} />
          </div>

          <div>
            <h3>Repetir contraseña</h3>
            <input type="password" id="PasswordValidate" onChange={CompareIfCanRegister} />
          </div>
          <div>
            <h3>Email</h3>
            <input type="email" id="email" onChange={CompareIfCanRegister} />
          </div>
          <div>
            <h3>Repetir email</h3>
            <input type="email" id="emailValidate" onChange={CompareIfCanRegister} />
          </div>
        </form>
      </div>

      <button type="submit" id ="RegisterSubmit" className="AuthButton mb-3" disabled>
        Ingresar
      </button>

      <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>
  );
}
