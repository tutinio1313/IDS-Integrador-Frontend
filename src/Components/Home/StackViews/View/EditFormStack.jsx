import React from "react";
import PropTypes from 'prop-types'

import Team from "./Forms/Edit/TeamForm";
import Category from "./Forms/Edit/CategoryForm";
import Player from './Forms/Edit/PlayerForm';
import Match from './Forms/Edit/MatchForm';

export default function AddFormStack({ name, option }) {

  console.log(name);

  switch (name) {
    case "Equipos":
      return <Team
      option = {option}/>;
    
    case "Jugadores":
        return <Player 
        option = {option}/>
    
    case "Tabla":
      return <Player
      option = {option}/>
    
    case "Partidos":
      return <Match 
      option = {option}/>
    
    default:
      return <Category/>;
    }
}

AddFormStack.propTypes = {
  name : PropTypes.string,
  option : PropTypes.object
}