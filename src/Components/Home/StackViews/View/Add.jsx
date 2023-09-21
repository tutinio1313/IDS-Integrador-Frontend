import React from 'react'
import AddFormStack from './AddFormStack'

export default function Add({
                            name,
                            onClickFunction
                        }) {
  return (
    <div 
    className="w-full h-full md:mx-auto md:my-auto md:top-0 md:left-0 md:bottom-0 md:right-0 md:h-fit md:w-64 p-4 bg-black z-20 absolute"
    id="Overlay"
    >
         <div className=" mt-4 p-2">
        <div className=" flex flex-row justify-between items-center">
          <div />
          {
            name == "Categorias" || name == "Tabla" ? <h3 className=" ml-8 md:ml-5 text-lg text-center">Agregar una {name}</h3> 
            : <h3 className=" ml-8 md:ml-5 text-lg text-center">Agregar un {name}</h3>
          }
          
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

      <AddFormStack 
        name = {name}
        />

    </div>
  )
}
