import React from "react";
import Team from "./Forms/TeamForm";
import Category from "./Forms/CategoryForm";
import Player from './Forms/PlayerForm';

export default function AddFormStack({ name }) {

  console.log(name);

  switch (name) {
    case "Equipos":
      return <Team/>;
      break;

    case "Jugadores":
        return <Player />
      break;

    case "Tabla":
      return <Player/>
      break;

    case "Partidos":
      return <Player/>
      break;

    default:
      return <Category />;
      break;
  }
}
