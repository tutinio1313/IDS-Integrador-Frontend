import React from "react";
import PropTypes from "prop-types";

export default function ResponseComponent({responseType, stateExecution, message }) {
    return(
        <div id = {responseType} className = "w-full container flex flex-col">
          <div className="mx-auto w-max text-center">
            <h2 className = "text-lg text-center">{stateExecution  ? "¡La petición fue exitosa!" : "Ooops, algo ha salido mal."}</h2>
          </div>
          <p className = "text-sm">{message}</p>            
        </div>
    )
}

ResponseComponent.propTypes = {
  responseType : PropTypes.string,
  stateExecution: PropTypes.bool,
  message: PropTypes.string
};
