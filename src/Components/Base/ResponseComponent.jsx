import React from "react";
import PropTypes from "prop-types";

export default function ResponseComponent(prop) {
    return(
        <div className = "w-max flex flex-col">
          <div>
            <h2 className = " text-lg">{prop.stateExecution  ? "¡La petición fue exitosa!" : "Ooops, algo ha salido mal."}</h2>
          </div>
          <p className = "text-sm">{prop.message}</p>            
        </div>
    )
}

ResponseComponent.propTypes = {
  stateExecution: PropTypes.bool,
  message: PropTypes.string
};
