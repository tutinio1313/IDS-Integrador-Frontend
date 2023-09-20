import React from "react";
import PropTypes from "prop-types";

import TeamView from "./StackViews/TeamView.jsx";
import AddCategoryView from './StackViews/AddCategoryView'

export default function Stack({ name, category }) {
  switch (name) {
    case "Equipos":
      return (<TeamView category={category}/>);
      break;

    case "Jugadores":
      break;

    case "Tabla":
      break;

    case "Partidos":
      break;

    default:
      return(<AddCategoryView/>)
      break;
  }
}
