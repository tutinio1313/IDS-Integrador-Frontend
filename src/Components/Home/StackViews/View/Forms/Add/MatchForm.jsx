import { React, useState, useEffect } from "react";
import GetTeam from "/src/Logic/Home/GetTeam.js";
import PropTypes from 'prop-types';
import axios from 'axios';
import ResponseComponent from '/src/Components/Base/ResponseComponent.jsx';

export default function MatchForm({category}) {
  const [matchForm, setMatchForm] = useState({
    IDHomeTeam: "0",
    IDVisitorTeam: "1",
    Date: "",
    IDCategory : category
  });

  const [Teams, setTeams] = useState(undefined);
  const [apiCall, setApiCall] = useState(false);
  const [response, setResponse] = useState({state : false, stateExecution : false, message : ""});

  useEffect(() => {
    if (Teams === undefined) {

      const LoadTeams = async() => {
        const teams = await GetTeam();
        console.log(teams);
        setTeams(teams);
      }

      LoadTeams();
    }
  }, [Teams]);

  useEffect(() => {
    if(apiCall){
      axios.post("api/Match", matchForm)
      .then((response) =>{
        if(response.code == 200){
          setResponse({state : true, stateExecution : response.data.stateExecution, message : response.data.messages});          
        }
        else{
          setResponse({state : true, stateExecution : false});            
        }
      })
      setApiCall(false);
    }  
  }, [apiCall])

  const SetMatch = (e) => {
    setMatchForm({ ...matchForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="container w-40 mx-auto flex flex-col">
      <div className="flex flex-col mx-auto">
        <label className="text-center">Equipo local</label>
        <select
          type="text"
          id="IDHomeTeam"
          className="text-center w-40"
          onChange={SetMatch}
          name="IDHomeTeam"
          selected = "1"
        >
          {Teams &&
            Teams.map((team) => {
              if (team !== undefined) {
                if(team.id == 1)
                {
                  return (
                    <option
                      key={team?.idTeam}
                      value={team?.idTeam}
                      selected = "selected"
                    >
                      {team?.name}
                    </option>
                  );  
                }
                else{
                  return (
                    <option
                      key={team?.idTeam}
                      value={team?.idTeam}
                    >
                      {team?.name}
                    </option>
                  );
                }
              }
            })}
        </select>
      </div>

      <div className="flex flex-col mx-auto">
        <label className="text-center">Equipo visitante</label>
        <select
          type="text"
          id="IDVisitorTeam"
          className=" w-40 text-center"
          onChange={SetMatch}
          name="IDVisitorTeam"
          selected = "2"
        >
          {Teams &&
            Teams.map((team) => {
              if (team !== undefined) {
                if(team.id == 2)
                {
                  return (
                    <option
                      key={team?.idTeam}
                      value={team?.idTeam}
                      selected = "selected"
                    >
                      {team?.name}
                    </option>
                  );  
                }
                else{
                  return (
                    <option
                      key={team?.idTeam}
                      value={team?.idTeam}
                    >
                      {team?.name}
                    </option>
                  );
                }
              }
            })}
        </select>
      </div>

      <div className = "flex flex-col mx-auto">
        <label className ="text-center">Fecha y hora</label>
        <input type="datetime-local" name="Date" id="DateTime" onChange = {SetMatch} className=" w-40 text-center" min={new Date().toISOString().slice(0, 16)} />
      </div>


      <button
        className="mt-6 mx-auto text-xs"
        onClick={() => setApiCall(true)}
        id="submitForm"
      >
        Agregar
      </button>

      {response.state ? <ResponseComponent stateExecution = {response.stateExecution} /> : null}
    </div>
  );
}

MatchForm.propTypes = {
  category : PropTypes.string
}