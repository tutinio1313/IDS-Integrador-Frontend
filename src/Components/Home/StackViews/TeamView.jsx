import { React, useState, useEffect } from "react";
import PropTypes from 'prop-types'

import GetTeam from "/src/Logic/Home/GetTeam.js";
import TeamComponent from "/src/Components/Home/StackComponents/TeamComponent.jsx";

export default function TeamView({ setSelectedTeam }) {
  const [Teams, setTeams] = useState(undefined);

  useEffect(() => {
    if (Teams === undefined) {
      LoadTeams();
    }
  }, [Teams]);

  async function LoadTeams() {
    const teams = await GetTeam();
    console.log(teams);
    setTeams(teams);
  }

  return (
    <div id="TeamView">
      {Array.isArray(Teams) ? (
        Teams.map((Team) => {
          return (
            <TeamComponent
              key = {Team.idTeam}
              idTeam={Team.idTeam}
              name={Team.name}
              urlLogo={Team.urlImage}
              func = {setSelectedTeam}
            />
          );
        })
      ) : (
        <div className = "container mx-auto">
          <h3>No hay equipos cargados.</h3>
        </div>
      )}

      
    </div>
  );
}

TeamView.propTypes = {
  setSelectedTeam : PropTypes.func
}