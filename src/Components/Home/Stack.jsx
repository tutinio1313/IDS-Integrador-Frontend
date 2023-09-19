import React from "react";
import PropTypes from "prop-types";

import TeamView from "./StackViews/TeamView.jsx";

export default function Stack({ name, category }) {
  switch (name) {
    case "Equipos":
      return (<TeamView category={category}/>);
      break;

    case "Player":
      break;

    case "Stat":
      break;

    case "Match":
      break;

    default:
      break;
  }
}
