import React from 'react'
import PropTypes from 'prop-types'

import EditFormStack from './EditFormStack'

export default function Edit({
                            name,
                            onClickFunction,
                            option
                        }) {
  return (
    <div 
    className="w-full h-full md:mx-auto md:my-auto md:top-0 md:left-0 md:bottom-0 md:right-0 md:h-fit md:w-full p-4 bg-black z-20 absolute"
    id="Overlay"
    >
        <div className=" mt-4 p-2">
        <div className=" flex flex-row justify-between items-center">
          {
            name == "Categorias" || name == "Tabla" ? <h3 className=" ml-8 md:ml-5 text-lg text-center">Editar una {name}</h3> 
            : <h3 className=" ml-8 md:ml-5 text-lg text-center">Editar un partido</h3>
          }
          
          <button
            id = "Exit"
            className="w-9 h-9 bg-red-600 text-center align-middle text-xs border-white border-1"
            onClick={() => onClickFunction(false)}
          >
            x
          </button>
        </div>
        <hr className="mt-8 mx-auto w-1/2 h-1" />
      </div>
      <div />

      <EditFormStack 
        name = {name}
        option = {option}
        />

    </div>
  )
}

Edit.propTypes = {
  name : PropTypes.string,
  onClickFunction : PropTypes.func,
  option : PropTypes.object

}
