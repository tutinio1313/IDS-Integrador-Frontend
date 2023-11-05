import React from "react";
import PropTypes from "prop-types";

export default function ResponseComponent(prop) {
    return(
        <div id = {prop.responseType} className = "w-full container flex flex-col">
          <div className="mx-auto w-max text-center">
            <h2 className = "text-lg text-center">{prop.stateExecution  ? "¡La petición fue exitosa!" : "Ooops, algo ha salido mal."}</h2>
          </div>
          <p className = "text-sm">{prop.message}</p>            
        </div>
    )
}

ResponseComponent.propTypes = {
  responseType : PropTypes.string,
  stateExecution: PropTypes.bool,
  message: PropTypes.string
};
