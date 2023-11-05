import { React, useState, useEffect } from "react";
import ResponseComponent from "/src/Components/Base/ResponseComponent";
import Router from "/src/Router/Router";
import axios from 'axios';

export default function Login() {
  const [canLogin, SetCanLogin] = useState(false);
  const [LoginWasSuccesful, SetLoginWasSuccesful] = useState(undefined);
  const [loginPost, setLoginPost] = useState(undefined);
  let [user, setUser] = useState({ UserName: "", Password: "" });
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState({
    state: false,
    stateExecution: undefined,
    message: ""
  });

  useEffect(() => {
    if(loginPost){

      const OnClickButton = async () => {
        const url = Router("UserLogin");
        const result = await axios.post(url, user).then((response) => response.data);
  
        if(result.stateExecution) {
          localStorage.setItem("cookie", result.jwt);
          
          const jwt = localStorage.getItem("cookie");
          console.log(jwt);
        }

      SetLoginWasSuccesful(result.stateExecution);
      setResponse({
        state: true,
        stateExecution: result.stateExecution,
        message: result.messages
      });
      setLoginPost(false);  
    };
    OnClickButton();    
  }
  }, [loginPost])

  const CompareIfCanLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    let inputs = document.getElementsByTagName("input");
    let areNotEmpty = inputs[0].value != "" && inputs[1].value != "";

    SetCanLogin(areNotEmpty);
    const button = document.getElementById("LoginSubmit");

    if (canLogin) {
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";

      if (counter == 0) {
        button.addEventListener("click", () => setLoginPost(true));
      }
      setCounter(1);
    } else {
      button.getAttribute("disabled") == null
        ? button.setAttribute("disabled", "disabled")
        : "";
      setCounter(0);
    }
  };

  if (!LoginWasSuccesful) {
    return (
      <div>
        <div id="login">
          <div>
            <h2 className="mb-1">Iniciar sesión</h2>
            <hr className="rounded-md mx-auto mb-3" style={{ height: "2px" }} />
          </div>

          <div className="mt-6">
            <div id="Form">
              <div>
                <h3>Usuario</h3>
                <input name="UserName" onChange={CompareIfCanLogin} />
              </div>

              <div>
                <h3>Contraseña</h3>
                <input
                  name="Password"
                  type="password"
                  onChange={CompareIfCanLogin}
                />
              </div>
              <button
                type="submit"
                className="mt-6 mb-3 AuthButton"
                disabled
                id="LoginSubmit"
              >
                Ingresar
              </button>
            </div>
          </div>

          <hr className="h-1 rounded-md mx-auto mb-3" />
        </div>
        {response.state ? (
          <ResponseComponent
            responseType = "loginResponse"
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
