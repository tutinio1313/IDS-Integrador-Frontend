import React from "react";
import Login from "/src/Components/Auth/Login.jsx";
import Register from "/src/Components/Auth/Register.jsx";
import "/src/Styles/Auth/AuthPage.css"; 

export default function AuthPage() {
  const ChangeView = (state) => {
    if (state) {
      document.getElementById('AuthPageContainer').style.backgroundColor = "#C8CE00";

      document.getElementById("login").style.display = "block";
      document.getElementsByTagName('button')[1].style.display = 'inline-block';
      document.getElementById("loginResponse") !== null ? document.getElementById("loginResponse").style.display = "inherit" : "";
      document.getElementById("registerResponse") !== null ? document.getElementById("registerResponse").style.display = "none" : "";
      document.getElementById("register").style.display = "none";
      document.getElementById('GoToLogin').style.display = 'none';
    } else {
      document.getElementById('AuthPageContainer').style.backgroundColor = "#E23802";      
      document.getElementById("login").style.display = "none";
      document.getElementsByTagName('button')[1].style.display = 'none';
      document.getElementById("registerResponse") !== null ? document.getElementById("registerResponse").style.display = "inherit" : "";
      document.getElementById("loginResponse") !== null ? document.getElementById("loginResponse").style.display = "none" : "";     
      document.getElementById("register").style.display = 'block';
      document.getElementById('GoToLogin').style.display = 'inherit';
    }
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
      
      <p id = "GoToLogin" className="pb-4" style={{display : "none"}}>
        ¿Usted ya tiene una cuenta? <br /> haga click en el siguiente{" "}
        <a onClick={() => ChangeView(true)}>link</a>.
      </p>
      </main>
      
    </>
  );
}
