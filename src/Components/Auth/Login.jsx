import { React,  useState} from "react";
import Post from '/src/Logic/Auth/Login.js';
import ResponseComponent from '/src/Components/Base/ResponseComponent';

export default function Login() {
  const [canLogin, SetCanLogin] = useState(false);
  const [LoginWasSuccesful, SetLoginWasSuccesful] = useState(undefined);
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState({state : false
                                            , stateExecution : undefined
                                            , message : "" });

  const OnClickButton = async () => {
    const res = Post(canLogin, UserName, Password);
    SetLoginWasSuccesful(res.stateExecution);
    setResponse({state : true, stateExecution : res.stateExecution, message : res.messages});
  }   

  const CompareIfCanLogin = () => {
    let inputs = document.getElementsByTagName("input");
    let areNotEmpty = inputs[0].value != "" && inputs[1].value != "";

    SetCanLogin(areNotEmpty);
    const button = document.getElementById("LoginSubmit");

    if (canLogin) {
      SetUserName(inputs[0].value);
      SetPassword(inputs[1].value);
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";

        if(counter == 0)
        {
          button.addEventListener('click', OnClickButton);
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
    <div id="login">

      
      
      
      <div>
        <h2 className="mb-1">Iniciar sesión</h2>
        <hr className="rounded-md mx-auto mb-3" style={{ height: "2px" }} />
      </div>

      <div className="mt-6">
        <div id ="Form">
          <div>
            <h3>Usuario</h3>
            <input name="User" onChange={CompareIfCanLogin} />
          </div>

          <div>
            <h3>Contraseña</h3>
            <input
              name="password"
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

      {response ? <ResponseComponent/> : null}

      <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>
  );
}
}

