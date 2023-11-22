import React from "react";
import PropTypes from 'prop-types';

import TeamView from "./StackViews/TeamView.jsx";
import MatchView from './StackViews/MatchView.jsx';
import AddCategoryView from './StackViews/AddCategoryView'

// eslint-disable-next-line no-unused-vars
export default function Stack({ name, category }) {
  switch (name) {
    case "Equipos":
      return (<TeamView/>);

    case "Jugadores":
      break;

    case "Tabla":
      break;

    case "Partidos":
      return(<MatchView/>);

    default:
      return(<AddCategoryView/>)
  }
}

Stack.propTypes = {
  name : PropTypes.string,
  category : PropTypes.string
}
