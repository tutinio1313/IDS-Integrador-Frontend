
import Login from './Login.jsx';
import Register from './Register.jsx';
import React, { Component } from 'react'

export class AuthenticationView extends Component 
{

    function render() {
        let login = true;

        if(login)
        {
            return(<Login></Login>);
        }
        else
        {
            return(<Register></Register>);
        }

        
    } 

}

export default AuthenticationView   