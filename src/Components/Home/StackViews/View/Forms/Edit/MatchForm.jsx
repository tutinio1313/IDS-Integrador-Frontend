import { React, useState, useEffect } from "react";
import GetTeam from "/src/Logic/Home/GetTeam.js";
import PropTypes from "prop-types";
import axios from "axios";
import ResponseComponent from "/src/Components/Base/ResponseComponent.jsx";


export default function MatchForm({ option }) {
  const [matchForm, setMatchForm] = useState(option);

  const [Teams, setTeams] = useState(undefined);
  const [localPlayersScanned, setLocalPlayersScanned] = useState(undefined);
  const [visitorPlayersScanned, setVisitorPlayersScanned] = useState(undefined);
  const [apiCall, setApiCall] = useState(false);
  const [response, setResponse] = useState({
    state: false,
    stateExecution: false,
    message: ""
  });

  const validateInputNumber = (e) => {
    const value = e.target.value;

    if (!Number.isNaN(value)) {
      if (e.target.value > 0) {
        setMatchForm({ ...matchForm, [e.target.name]: e.target.value });
        return;
      }
    }
    e.target.value = 0;
  };

  useEffect(() => {
    if (Teams === undefined) {
      const LoadTeams = async () => {
        const teams = await GetTeam();
        console.log(teams);
        setTeams(teams);
      };

      LoadTeams();
    }
  }, [Teams]);

  useEffect(() => {
    if (apiCall) {
      axios.post("api/Match", matchForm).then((response) => {
        if (response.code == 200) {
          setResponse({
            state: true,
            stateExecution: response.data.stateExecution,
            message: response.data.messages
          });
        } else {
          setResponse({ state: true, stateExecution: false });
        }
      });
      setApiCall(false);
    }
  }, [apiCall]);

  const SetMatch = (e) => {
    setMatchForm({ ...matchForm, [e.target.name]: e.target.value });
  };

  const SetLocalPlayersScanned = async (event) => {
    const teamName = event.target.files[0].name;
    const emptyPlayer = {dorsal : null, name : null}
    let players;
    console.log(event);
    
    console.log(teamName);
    setTimeout(() => {
      console.log("adentro");
      if(teamName == 'Boca.png') {
      players = [{dorsal : 1, name : "Sergio Romero"}, {dorsal : 17, name : "Luis Advincula"}, {dorsal : 4, name : "Jorge Figal"}, emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer];            
    }

    else{
      players = [{dorsal : 1, name : "Franco Armani"}, {dorsal : 13, name : "Enzo Diaz"},emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer,emptyPlayer];
    }

    if(event.target.id == "localPhoto") {
      setLocalPlayersScanned(players);
    }
    else{
      setVisitorPlayersScanned(players);
    }

    console.log(players);}, 14000);

    
  }

  return (
    <div className="container w-full flex flex-col">
      <div className="flex flex-col w-full container mx-auto">
        <label className="text-center">Fecha y hora</label>
        <input
          type="datetime-local"
          name="Date"
          id="DateTime"
          onChange={SetMatch}
          defaultValue={option.date}
          className=" w-fit mx-auto text-center"
          min={new Date().toISOString().slice(0, 16)}
        />
      </div>
      <div className="container flex flex-row justify-between">
        <div className="flex flex-col mx-auto">
          <label className="text-center">Equipo local</label>
          <select
            type="text"
            id="IDHomeTeam"
            className="text-center w-32"
            onChange={SetMatch}
            name="IDHomeTeam"
            value="1"
            disabled
          >
            {Teams &&
              Teams.map((team) => {
                if (team !== undefined) {
                  return (
                    <option key={team?.idTeam} value={team?.idTeam}>
                      {team?.name}
                    </option>
                  );
                }
              })}
          </select>

          <label className="text-center">Goles locales</label>
          <input
            type="number"
            name="localTeamGoals"
            id="localTeamGoals"
            defaultValue={option.localTeamGoals}
            className="text-center w-32"
            onChange={validateInputNumber}
          />

          <div className = "mt-5 flex flex-col">
            <label className = "text-center">Foto del plantel</label>
            <input type="file" id = "localPhoto" onChange = {(event) => SetLocalPlayersScanned(event)} accept="image/png, image/jpeg" className = "mx-auto w-24" />

            <label className = 'text-sm mt-8 mb-3' >Plantel equipo local</label>
            <hr className = "mx-auto w-6" />
          
            {
              localPlayersScanned ? <div className = "flex flex-col">
                 {localPlayersScanned.map( (player) => {
                    return(<p key = {player.dorsal}> {player.dorsal} | {player.name} </p>)
                  })}
                </div>:

                <>
                <h6>ingrese la foto.</h6>
                </>
            }
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <label className="text-center">Equipo visitante</label>
          <select
            type="text"
            id="IDVisitorTeam"
            className="text-center w-32"
            onChange={SetMatch}
            name="IDVisitorTeam"
            value="2"
            disabled
          >
            {Teams &&
              Teams.map((team) => {
                if (team !== undefined) {
                  return (
                    <option key={team?.idTeam} value={team?.idTeam}>
                      {team?.name}
                    </option>
                  );
                }
              })}
          </select>

          <label className="text-center">Goles visitantes</label>
          <input
            type="number"
            name="visitorTeamGoals"
            id="visitorTeamGoals"
            defaultValue={option.visitorTeamGoals}
            onChange={validateInputNumber}
            className="text-center w-32"
          />
          
          <div className = "mt-5 flex flex-col">
            <label className = "text-center">Foto del plantel</label>
            <input type="file" accept="image/png, image/jpeg" id = "visitorPhoto" onChange = {(event) => SetLocalPlayersScanned(event)} className = "mx-auto w-24" />
                
            <label className = "text-sm mt-8 mb-3">Plantel equipo visitante</label>
            <hr className = "mx-auto w-6" />
            {
              visitorPlayersScanned != undefined ? 
              <div className = "flex flex-col">
                  {visitorPlayersScanned.map( (player) => {
                    return(<p key = {player.dorsal}> {player.dorsal} | {player.name} </p>)
                  })}
              </div>:

                <>
                <h6>ingrese la foto.</h6>
                </>
            }
          </div>
        </div>
      </div>

      <button
        className="mt-6 text-xs mx-auto"
        onClick={() => setApiCall(true)}
        id="submitForm"
      >
        Actualizar
      </button>

      {response.state ? (
        <ResponseComponent stateExecution={response.stateExecution} />
      ) : null}
    </div>
  );
}

MatchForm.propTypes = {
  option: PropTypes.object,
  toggleView: PropTypes.func
};
