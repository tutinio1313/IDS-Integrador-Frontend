import { React, useState, useEffect } from "react";
import PostTeam from '/src/Logic/Home/PostTeam.js';
import "/src/Styles/Home/Form.css";

export default function TeamForm() {
  const [Team, setTeam] = useState({
    name: "",
    urlImage: ""
  });
  const [postTeamStatus, setPostTeamStatus] = useState(false);

  const PostTeam = () => {
    const response = PostTeam(Team);

    do {
      console.log(response);
      
    } while (response !== undefined);

    setPostTeamStatus(response.stateExecution);
  } 

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
    <form className = "container flex flex-col">
      <div>
        <div>
          <label>Nombre del equipo</label>

          <input type="text" name="name" onChange={SetTeamState} />
        </div>

        <div>
          <label>URL de la Imagen</label>

          <input type="text" name="urlImage" onChange={SetTeamState} />
        </div>
      </div>

      <button className = "mx-auto text-xs" onClick = {() => {PostTeam}} id = "submitForm" disabled>
        Añadir
      </button>
    </form>
  );
}
