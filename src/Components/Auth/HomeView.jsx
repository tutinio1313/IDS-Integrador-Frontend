import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

export default class HomeView extends Component {
    

    render(props) {
        let [option,SetOption] = useState();
        
        useEffect(() => {
          return(
          <div>
            <Login/>
            <button onClick="render(false)">Registrarse</button>
        </div>)
        
          return (return
            (
                <div>
                    <Register/>
                    <p>¿Usted ya tiene una cuenta? <br/> haga click en el siguiente <a onClick="render(true)">link</a>.</p>
                </div>
            );)
        }, [option]);
  }
}
