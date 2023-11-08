import React from 'react'
import PropTypes from 'prop-types'

import AddFormStack from './AddFormStack'

export default function Add({
                            name,
                            onClickFunction,
                            category
                        }) {
  return (
    <div 
    className="w-full h-full md:mx-auto md:my-auto md:top-0 md:left-0 md:bottom-0 md:right-0 md:h-fit md:w-64 p-4 bg-black z-20 absolute"
    id="Overlay"
    >
        <div className=" mt-4 p-2">
        <div className=" flex flex-row justify-between items-center">
          {
            name == "Categorias" || name == "Tabla" ? <h3 className=" ml-8 md:ml-5 text-lg text-center">Agregar una {name}</h3> 
            : <h3 className=" ml-8 md:ml-5 text-lg text-center">Agregar un {name}</h3>
          }
          
          <button
            id = "Exit"
            className="w-9 h-9 bg-red-600 text-center align-middle text-xs border-white border-1"
            onClick={() => onClickFunction(false, "")}
          >
            x
          </button>
        </div>
        <hr className="mt-8 mx-auto w-1/2 h-1" />
      </div>
      <div />

      <AddFormStack 
        name = {name}
        category = {category}
        />

    </div>
  )
}

Add.propTypes = {
  name : PropTypes.string,
  onClickFunction : PropTypes.func,
  category : PropTypes.string

}
