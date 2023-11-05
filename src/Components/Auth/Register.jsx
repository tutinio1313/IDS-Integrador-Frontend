import React, { useState, useEffect } from "react";
import ResponseComponent from "/src/Components/Base/ResponseComponent";

import Router from "/src/Router/Router";
import axios from 'axios';

const url = Router("UserRegister");

export default function Register() {
  const [canRegister, SetCanRegister] = useState(false);
  const [user, setUser] = useState({
    UserName : "",
    Password : "",
    Email : "",
    Name : "",
    Lastname : ""
  });  
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState({
    state: false,
    stateExecution: undefined,
    message: ""
  });

  const [postSuccessful, setPostSuccessful] = useState(false);
  const [postState, setPostState] = useState(false);

  useEffect(() => {
    if(canRegister)
    {

      const callApi =  async (canRegister, user) => {
        if(canRegister)
        {
          const response = await axios.post(url, JSON.stringify(user));

          return {state: true,
            stateExecution: response.stateExecution,
            message: response.message};
          }  
        }
        
        let callResponse = callApi(canRegister, user);
        
        setPostSuccessful(callResponse.stateExecution);
        setResponse(callResponse);
        setPostState(false);
      }
  }, [postState]);
  

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

        if (counter == 0) {
          button.addEventListener("click", () => setPostState(true));
          setCounter(1);
        }

        setUser({
          UserName : inputs[2].value,
          Password : inputs[5].value, 
          Name : inputs[7].value,
          Lastname : inputs[8].value,
          Email : inputs[3].value
        });
    } else {
      button.getAttribute("disabled") == null
        ? button.setAttribute("disabled", "disabled")
        : "";
    }
  };

  if(!postSuccessful)
  {
  return (
    <div id="register" style={{ display: "none" }}>
      <div className="mb-6">
        <h2 className="mb-1">Registrarse</h2>
        <hr className="rounded-md mx-auto" style={{ height: "2px" }} />
      </div>

      <div>
        <div id ="Form">
          <div>
            <h3 className="text-sm">Usuario</h3>
            <input id="Username" />
          </div>

          <div className="flex flex-row">
            <div>
              <h3 className="text-sm">Contraseña</h3>
              <input
                type="password"
                id="Password"
                onChange={CompareIfCanRegister}
              />
            </div>

            <div className="-mt-1">
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
              <h3  className="text-sm">Email</h3>
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
            onClick ={() => setPostState(true)}
            disabled
          >
            Ingresar
          </button>

        </div>
      </div>


      <hr className="h-1 rounded-md mx-auto mb-3" />

      {response.state ? (
          <ResponseComponent
            responseType = "egisterResponse"
            stateExecution={response.stateExecution}
            message={response.message}
          />
        ) : null}

    </div>
  );
  }
  else{
    return(
      window.location.href = "http://localhost:5173/home"
      );
  
  }
}


