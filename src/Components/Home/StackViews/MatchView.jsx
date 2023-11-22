import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Router from "/src/Router/Router.js";
import MatchComponent from "/src/Components/Home/StackComponents/MatchComponent.jsx";

export default function TeamView() {
  const [Matches, setMatches] = useState(undefined);
  const [Teams, setTeams] = useState(undefined);

  useEffect(() => {
    if (Matches === undefined) {
      const LoadMatches = async () => {
        const url = Router("Match");
        await axios.get(url).then((response) => {
          if (response.status == 200) {
            if (response.data.stateExecution) {
              console.log(response.data.matches);
              setMatches(response.data.matches);
            }
          }
        });
      };

      LoadMatches();
    }
  }, [Matches]);

  useEffect(() => {
    if (Matches === undefined) {
      const LoadTeams = async () => {
        const url = Router("Team");
        await axios.get(url).then((response) => {
          if (response.status == 200) {
            if (response.data.stateExecution) {
              console.log(response.data.teams);
              setTeams(response.data.teams);
            }
          }
        });
      };

      LoadTeams();
    }
  }, [Teams]);

  return (
    <div
     id="MatchView"
     className = "flex flex-col">
      {Array.isArray(Matches) && Array.isArray(Teams) ? (
        Matches.map((Match) => {
          return (
            <MatchComponent
              key={Match.idMatch}
              localTeam={Teams[Match.localTeamID - 1]}
              visitorTeam={Teams[Match.visitorTeamID - 1]}
              localTeamGoals = {Match.localTeamGoals}
              visitorTeamGoals = {Match.visitTeamGoals}
              date = {Match.date}
              idMatch = {Match.idMatch}
              
            />
          );
        })
      ) : (
        <>
          <h3 className="text-center">No hay partidos cargados.</h3>
        </>
      )}
    </div>
  );
}

TeamView.propTypes = {
  setSelectedTeam: PropTypes.func
};
