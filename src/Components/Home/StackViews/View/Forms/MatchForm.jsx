import { React, useState, useEffect } from "react";
import GetTeam from "/src/Logic/Home/GetTeam.js";
import PropTypes from 'prop-types'

export default function MatchForm({category}) {
  const [matchForm, setMatchForm] = useState({
    idLocalMatch: "",
    idVisitorMatch: "",
    DateTime: "",
    Category : category
  });

  const [Teams, setTeams] = useState(undefined);

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

  const SetMatch = (e) => {
    setMatchForm({ ...matchForm, [e.target.name]: e.target.value });
  };

  const PostMatch = () => {};

  return (
    <div className="container w-40 mx-auto flex flex-col">
      <div className="flex flex-col mx-auto">
        <label className="text-center">Equipo local</label>
        <select
          type="text"
          id="idLocalMatch"
          className="text-center w-40"
          onChange={SetMatch}
          name="idLocalMatch"
          selected = {null}
        >
          {Teams &&
            Teams.map((team) => {
              if (team !== undefined) {
                return (
                  <option
                    key={team?.idTeam}
                    value={team?.idTeam}
                  >
                    {team?.name}
                  </option>
                );
              }
            })}
        </select>
      </div>

      <div className="flex flex-col mx-auto">
        <label className="text-center">Equipo visitante</label>
        <select
          type="text"
          id="idVisitorMatch"
          className=" w-40 text-center"
          onChange={SetMatch}
          name="idVisitorMatch"
          selected = {null}
        >
          {Teams &&
            Teams.map((team) => {
              if (team !== undefined) {
                return (
                  <option
                    key={team?.idTeam}
                    value={team?.idTeam}
                  >
                    {team?.name}
                  </option>
                );
              }
            })}
        </select>
      </div>

      <div className = "flex flex-col mx-auto">
        <label className ="text-center">Fecha y hora</label>
        <input type="datetime-local" name="DateTime" id="DateTime" onChange = {SetMatch} className=" w-40 text-center" min={new Date().toISOString().slice(0, 16)} />
      </div>


      <button
        className="mt-6 mx-auto text-xs"
        onClick={() => {
          PostMatch();
        }}
        id="submitForm"
      >
        Agregar
      </button>
    </div>
  );
}

MatchForm.propTypes = {
  category : PropTypes.string
}