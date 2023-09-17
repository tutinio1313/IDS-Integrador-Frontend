import React from "react";
import PropTypes from "prop-types";
import Stack from "./Stack.jsx";
import "/src/Styles/Home/Overlay.css";

export default function Overlay(prop) {

  function GoBack() {
    document.getElementById('Overlay').classList.add('hidden');
  }

  return (
    <div
      className="w-full h-full md:mx-auto md:my-auto md:top-0 md:left-0 md:bottom-0 md:right-0 md:h-max md:w-max md:p-10 z-10 absolute bg-green-950"
      id="Overlay"

    >
      <div className =" mt-4 p-2">
        <div className=" flex flex-row justify-between items-center">
          <div/>
          <h3 className ="text-lg text-center">{prop?.name}</h3>
          <button 
              className="w-12 h-12 bg-red-600 p-3 text-center align-middle"
              onClick= {() => GoBack()}
              >
            x
          </button>
        </div>
        <hr className="mt-8 mx-auto w-1/2 h-1" />
      </div>

      <Stack name= {prop?.name} />
    </div>
  );
}

Overlay.propTypes = {
  name: PropTypes?.string,
  show: PropTypes?.bool
};
