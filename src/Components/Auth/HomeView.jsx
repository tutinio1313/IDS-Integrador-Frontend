import React, { Component, useState, useEffect } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

export default function HomeView() {
  const [option, SetOption] = useState(true);
  const ChangeView = (state) => {
    if (state) {
      document.getElementById("login").style.display = "block";
      document.getElementsByTagName('button')[1].style.display = 'inline-block';
      document.getElementById("register").style.display = "none";
      document.getElementsByTagName('p')[0].style.display = 'none';
    } else {
      document.getElementById("login").style.display = "none";
      document.getElementsByTagName('button')[1].style.display = 'none';
      document.getElementById("register").style.display = 'block';
      document.getElementsByTagName('p')[0].style.display = 'inherit';
    }

    SetOption((option) => !option);
  };

  return (
    <>
     
      <Login id ="login"/>
      <button onClick={() => ChangeView(false)}>Registrarse</button>

      <Register id ="register" />
      
      <p style={{display : "none"}}>
        ¿Usted ya tiene una cuenta? <br /> haga click en el siguiente{" "}
        <a onClick={() => ChangeView(true)}>link</a>.
      </p>
      
    </>
  );
}
