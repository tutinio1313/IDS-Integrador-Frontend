import React from "react";
import ErrorPage from "/Components/Error/ErrorPage";

export default function HomeView(param) {
  if (param == null) {
    return;
    <ErrorPage Code={403} />;
  } else {
    if (param.User != null) {
      import Card from "./Card.jsx";
      <>
        <header className="flex flex-row container mx-auto w-5/6 h-1/6">
          <h3>
            Bienvenido {param.user.Name} {param.user.LastName} al sistema de
            arbitraje.
          </h3>
          <hr />
        </header>

        <div className="my-3 mx-auto">
          <hr className="mx-auto w-1/6"/>

          <select className="mx-auto w-1/4" id="CategorySelect"></select>
        </div>

        <main>
          <Card Type="Team" />
          <Card Type="Stats" />
          <Card Type="Match" />
          <Card Type="Players" />
        </main>
      </>;
    } else {
      return <ErrorPage Code={403}></ErrorPage>;
    }
  }
}
