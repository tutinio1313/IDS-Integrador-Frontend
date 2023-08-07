import React, { Component } from 'react'
import logoSrc from '/Images/Logo.svg';

export default class Logo extends Component {
  render() {
    return (
        <div className="mb-5">
            <img alt="logo"  src={logoSrc}></img>
        </div>
    )
  }
}
