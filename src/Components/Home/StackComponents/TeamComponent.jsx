import React from 'react'
import PropTypes from 'prop-types'

export default function TeamComponent({urlLogo, name,func}) {

    return(
        <div className = "container w-4/5 mx-auto my-3 flex flex-row">
            <input onClick = {(e) => func} type = "checkbox"/>
            <img className = " max-h-12 max-w-12 mx-4" src = {urlLogo}/>
            <h3 className = "my-auto w-max">{name}</h3>
        </div>
    )
}

