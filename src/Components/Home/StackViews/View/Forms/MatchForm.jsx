import { React, useState } from "react";
import PropTypes from 'prop-types';

export default function MatchForm({teams}) {
  const [matchForm, setMatchForm] = useState({
    idLocalMatch: "",
    idVisitorMatch: "",
    Date: ""
  });

  const SetMatch = (e) => {
    setMatchForm({...matchForm,
    [e.target.name] : e.target.value})
  };

  const PostMatch = () => {};

  return (
    <div className="container w-40 mx-auto flex flex-col">
      <div className = "flex flex-col mx-auto">
        <label className = "text-center">Equipo local</label>
        <select
          type="text"
          id="category"
          className = " w-40"
          onChange={() => SetMatch}
          name="category"
        >
        <option>
        <img src = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5.png"/>
        <p>Boca Juniors</p>
        </option>
        </select>
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
    Teams : PropTypes.array
}