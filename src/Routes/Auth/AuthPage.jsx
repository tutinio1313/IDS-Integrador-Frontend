import React, { Component, useState, useEffect } from "react";
import Login from "/src/Components/Auth/Login.jsx";
import Register from "/src/Components/Auth/Register.jsx";
import "/src/Styles/Auth/AuthPage.css"; 

export default function AuthPage() {
  const [option, SetOption] = useState(true);
  const ChangeView = (state) => {
    if (state) {
      document.getElementById('AuthPageContainer').style.backgroundColor = "#C8CE00";

      document.getElementById("login").style.display = "block";
      document.getElementsByTagName('button')[1].style.display = 'inline-block';
      document.getElementById("register").style.display = "none";
      document.getElementsByTagName('p')[0].style.display = 'none';
    } else {
      document.getElementById('AuthPageContainer').style.backgroundColor = "#E23802";
      
      document.getElementById("login").style.display = "none";
      document.getElementsByTagName('button')[1].style.display = 'none';
      document.getElementById("register").style.display = 'block';
      document.getElementsByTagName('p')[0].style.display = 'inherit';
    }

    SetOption((option) => !option);
  };

  return (
    <>
    <div className=" mx-auto">
      <img alt="logo" className=" mb-6 mx-auto" src="/assets/Images/Logo.svg"></img>
    </div>

     <main id="AuthPageContainer" className="">     
      <Login id ="login"/>
      <button id="RegisterViewButton" className="AuthButton" onClick={() => ChangeView(false)}>Registrarse</button>

      <Register id ="register" />
      
      <p className="pb-4" style={{display : "none"}}>
        ¿Usted ya tiene una cuenta? <br /> haga click en el siguiente{" "}
        <a onClick={() => ChangeView(true)}>link</a>.
      </p>
      </main>
      
    </>
  );
}
