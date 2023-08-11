import React, { Component } from 'react'
import logoSrc from '/Images/Logo.svg';

export default class Logo extends Component {
  render() {
    return (
        <div className="mb-5 mx-auto">
            <img alt="logo" className="mx-auto" src={logoSrc}></img>
        </div>
    )
  }
}
