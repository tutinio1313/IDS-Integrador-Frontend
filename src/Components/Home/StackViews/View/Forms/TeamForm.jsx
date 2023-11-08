import { React, useState, useEffect } from "react";
import "/src/Styles/Home/Form.css";
import axios from 'axios';
import Router from '/src/Router/Router.js';
import Response from '/src/Components/Base/ResponseComponent.jsx';

export default function TeamForm() {
  const [Team, setTeam] = useState({
    name: "",
    Image: ""
  });
  const [callApi, setCallApi] = useState(false);
    const [response, setResponse] = useState({
      state : false,
      stateExecution : null,
      message : null});

  useEffect(() => {
    if(callApi){
      const Url = Router("Team");
      axios.Post(Url, Team).then( (response) => {
        if(response.statusCode == 200){
          setResponse(
            {
               state : true,
               stateExecution : response.data.stateExecution,
               message : response.data.message  
            });
          setCallApi(false);
        }  
      })
    }
  }, [callApi])


  const canPost = () => {
    let result = (Team.name != "" && Team.urlImage != "");
    console.log(Team);
    
    const button = document.getElementById('submitForm');

    if(result){
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";
    }
    else{
      button.getAttribute("disabled") == null
      ? button.setAttribute("disabled", "disabled")
      : "";
    }
  };

  const SetTeamState = (e) => {
    setTeam({ ...Team, [e.target.name]: e.target.value });

    canPost();
  };

  return (
    <div>
    <form className = "container flex flex-col">
      <div>
        <div className = "container flex flex-col">
          <label>Nombre del equipo</label>

          <input type="text" className = "mx-auto" name="name" onChange={SetTeamState} />
        </div>

        <div className = "container flex flex-col mx-auto w-fit">
          <label>Imagen</label>

          <input type="file" name="Image" accept="image/png, image/jpeg" className = "mx-0 w-fit"  id = "Image" onChange={SetTeamState} />
        </div>
      </div>

      <button className = "mx-auto text-xs" onClick = {() => setCallApi(true)} id = "submitForm" disabled>
        Añadir
      </button>
    </form>


      {
        response.state ? <Response responseType = {null} 
                                  stateExecution = {response.stateExecution}
                                  message = {response.message}
                                  /> : null
      }
    </div>
  );
}
