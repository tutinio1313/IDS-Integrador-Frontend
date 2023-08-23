import React, { Component, useState, useEffect } from "react";
import Post from '/src/Logic/Auth/Login.js';
import "./Login.css";


export default function Login() {
  const [canLogin, SetCanLogin] = useState(false);
  const [LoginWasSuccesful, SetLoginWasSuccesful] = useState(false);

  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");

  useEffect(() => {
    CompareIfCanLogin();
  }, [canLogin]);

  useEffect(() => {
    Post(canLogin, UserName, Password);
  }, [SetLoginWasSuccesful]);

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
    } else {
      button.getAttribute("disabled") == null
        ? button.setAttribute("disabled", "disabled")
        : "";
    }
  };
  
  if (LoginWasSuccesful) {
  }
  return (
    <div id="login">
      <div>
        <h2 className="mb-1">Iniciar sesión</h2>
        <hr className="rounded-md mx-auto mb-3" style={{ height: "2px" }} />
      </div>

      <div className="mt-6">
        <form
          method="post"
          onSubmit={(e) => {
            Post;
          }}
        >
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
        </form>
      </div>

      

      <hr className="h-1 rounded-md mx-auto mb-3" />
    </div>
  );
}
