import React from "react";
import PropTypes from 'prop-types'

import Team from "./Forms/TeamForm";
import Category from "./Forms/CategoryForm";
import Player from './Forms/PlayerForm';
import Match from './Forms/MatchForm';

export default function AddFormStack({ name, category }) {

  console.log(name);

  switch (name) {
    case "Equipos":
      return <Team/>;
    
    case "Jugadores":
        return <Player />
    
    case "Tabla":
      return <Player/>
    
    case "Partidos":
      return <Match 
      category = {category}/>
    
    default:
      return <Category />;
    }
}

AddFormStack.propTypes = {
  name : PropTypes.string,
  category : PropTypes.string
}