import React, { Component, useState, useEffect } from "react";
import PostRegister from '/src/Logic/Auth/Register.js';

export default function Register() {
  const [canRegister, SetCanRegister] = useState(false);
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [Name, SetName] = useState("");
  const [Lastname, SetLastname] = useState("");
  const [RegisterWasSuccesful, SetRegisterWasSuccesful] = useState("");
  

  useEffect(() => {
    CompareIfCanRegister();
  }, [canRegister]);

  useEffect(() => {
    PostRegister(canRegister,UserName,Password,Email,Name,Lastname);
  }, [RegisterWasSuccesful]);

  

  const CompareIfCanRegister = () => {
    let inputs = document.getElementsByTagName("input");
    let areNotEmpty = true;
    const arePasswordsEquals = inputs[3].value == inputs[4].value;
    const areEmailEquals = inputs[5].value == inputs[6].value;

    for (let index = 2, length = inputs.length; index < length; index += 1) {
      areNotEmpty = inputs[index].value != "";
    }

    SetCanRegister(areNotEmpty);
    const button = document.getElementById("RegisterSubmit");

    if (canRegister && arePasswordsEquals && areEmailEquals) {
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";
      SetUserName(inputs[2].value);
      SetEmail(inputs[3].value);
      SetPassword(inputs[5].value);
      SetName(inputs[7].value);
      SetLastname(inputs[8].value);
    } else {
      button.getAttribute("disabled") == null
        ? button.setAttribute("disabled", "disabled")
        : "";
    }
  };

  return (
    <div id="register" style={{ display: "none" }}>
      <div className="mb-6">
        <h2 className="mb-1">Registrarse</h2>
        <hr className="rounded-md mx-auto" style={{ height: "2px" }} />
      </div>

      <div>
        <form onSubmit={() => {PostRegister(canRegister,UserName,Password,Email,Name,Lastname)}}>
          <div>
            <h3>Usuario</h3>
            <input id="Username" />
          </div>

          <div className="flex flex-row">
            <div>
              <h3>Contraseña</h3>
              <input
                type="password"
                id="Password"
                onChange={CompareIfCanRegister}
              />
            </div>

            <div className="ml-1">
              <h3 className="text-sm">Repetir contraseña</h3>
              <input
                type="password"
                id="PasswordValidate"
                onChange={CompareIfCanRegister}
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <h3>Email</h3>
              <input type="email" id="email" onChange={CompareIfCanRegister} />
            </div>
            <div className="ml-1">
              <h3 className="text-sm">Repetir email</h3>
              <input
                type="email"
                id="emailValidate"
                onChange={CompareIfCanRegister}
              />
            </div>
          </div>

          <hr className="h-0 border-2 border-white bg-transparent rounded-md mx-auto mb-3 border-dotted" />

          <div className="flex flex-row">
            <div>
              <h3>Nombre</h3>
              <input type="text" id="Name" onChange={CompareIfCanRegister} />
            </div>

            <div className="ml-1"> 
              <h3>Apellido</h3>
              <input type="text" id="Lastname" onChange={CompareIfCanRegister} />
            </div>
          </div>

          <button
            type="submit"
            id="RegisterSubmit"
            className="AuthButton mb-3"
            disabled
          >
            Ingresar
          </button>

        </form>
      </div>


      <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>
  );
}
