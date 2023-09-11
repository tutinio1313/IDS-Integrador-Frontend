import "/src/Styles/Home/HomePage.css";
import React from "react";
import ButtonObject from '/src/Router/Paths/HomeCardPaths.json';
import Card from "/src/Components/Home/Card.jsx";

import GetTeams from "/src/Logic/Home/GetTeams.js";

GetTeams();

export default function HomeView(param) {
  //if (param.User != null) {
    var buttons = [];
    for(const [key, body] of Object.entries(ButtonObject)){
      buttons.push(<Card key ={key} Title = {body.Title} URLLogo = {body.URLLogo} />);
    }
      return(
      <>
        <header className="container mx-auto my-auto md:w-fit md:p-10 align-middle text-center">
          <h1 className = "text-xl text-center my-auto md:text-2xl ">
            Bienvenido Andrés Rossini al sistema de
            arbitraje.
          </h1>
        </header>

        <div className="container my-3 mx-auto text-center">
          <hr className="mx-auto w-1/6"/>
          <select className="mx-auto w-1/6" id="CategorySelect"></select>
          <hr className="mx-auto w-1/6"/>
        </div>

        <main className= "flex flex-col md:flex-row">
           {
              buttons.map( (button) => (button))              
           }
        </main>
      
      
            </>);

        /*  <main className= "flex flex-col md:flex-row">
          <Card Title="Equipo" URLLogo = "/src/assets/Images/Card/Teams.svg"/>
          <Card Title="Tabla" URLLogo = "/src/assets/Images/Card/Stats.svg"/>
          <Card Title="Partidos" URLLogo = "/src/assets/Images/Card/Matches.svg"/>
          <Card Title="Jugadores"URLLogo = "/src/assets/Images/Card/Players.svg"/>
        </main>
*/

}