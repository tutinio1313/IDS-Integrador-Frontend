import React from 'react'
import PropTypes from 'prop-types'

export default function TeamComponent({urlLogo, name}) {

    return(
        <div className = "container w-4/5 mx-auto my-3 flex flex-row">
            <img className = " max-h-12 max-w-12" src = {urlLogo}/>
            <h3 className = "my-auto w-max">{name}</h3>
        </div>
    )
}

