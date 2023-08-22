import React, { Component, useState, useEffect } from "react";
import "./Login.css";
import Router from "/src/Router/Router";

export default function Login() {
  const [canLogin, SetCanLogin] = useState(false);
  const [LoginWasSuccesful, SetLoginWasSuccesful] = useState(false);

  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");

  useEffect(() => {
    CompareIfCanLogin();
  }, [canLogin]);

  useEffect(() => {
    Post();
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
  const Post = () => 
  {
    
    var url = Router("UserLogin");
    var data = [UserName, Password];

    if (canLogin) {
      const result = fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        referrer: "no-referrer",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            SetLoginWasSuccesful(true);
          }
          return Promise.reject(new Error(response.statusText));
        })
        .then((response) => response.json())
        .then((result) => {
          // custom error
        })
        .catch((error) => {
          // common error
          return null;
        });
    }
  };

  var data = [UserName, Password];

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
