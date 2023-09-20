import {React, useState} from "react";
import PropTypes from "prop-types";
import Stack from "./Stack.jsx";
import "/src/Styles/Home/Overlay.css";

import Add from './StackViews/View/Add';
import Remove from './StackViews/View/Remove';

export default function Overlay(
              { name,
                onClickFunction, 
                category
              }) 
  {
  
  const [renderOverlay, setRenderOverlay] = useState(false);
  let overlayName = "";

  const SetRender = (state,name) => {
    setRenderOverlay(state);
    overlayName = name;

    console.log(overlayName, renderOverlay);
  };

  const SetOverlay = (status, text) => {
    setRenderOverlay(status);
    overlayName = text;
  };

  

  return (   
    
    <div
    className="w-full h-full md:mx-auto md:my-auto md:top-0 md:left-0 md:bottom-0 md:right-0 md:h-fit md:w-64 p-4 bg-black z-10 absolute"
    id="Overlay"
    >
      {renderOverlay ? <Add 
                          name = {name} 
                          onClickFunction = {SetOverlay}
                        /> : ""}
      
      <div className=" mt-4 p-2">
        <div className=" flex flex-row justify-between items-center">
          <div />
          <h3 className=" ml-8 md:ml-5 text-lg text-center">{name}</h3>
          <button
            id = "Exit"
            className="w-10 h-10 bg-red-600 text-center align-middle text-xs"
            onClick={() => onClickFunction(false, "")}
          >
            x
          </button>
        </div>
        <hr className="mt-8 mx-auto w-1/2 h-1" />
      </div>

      <Stack 
        name = {name}
        category = {category}      
      />

<div 
        id="ButtonContainer"
        className = " mt-14 flex justify-between items-center" 
        >
        <button
            id="Add"
            className=" bg-green-500  md:w-max md:h-max text-xs"
            onClick= {() => {SetRender(true, "Agregar")}}
        >
          Agregar
        </button>

        <button
            id = "Exit"
            className = "bg-red-500 md:w-max md:h-max text-xs"
            onClick= {() => {SetRender(true, "Borrar")}}
        >
            Borrar
        </button>
      </div>

      
    </div>
  );
}
