import React from "react";
import PropTypes from "prop-types";

import TeamView from './StackViews/TeamView.jsx';

export default function Stack({name}) {
  
  let response;

    if (name !== undefined || name !== null) {
    switch ({name}) {
      case "Team":
        
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
}
