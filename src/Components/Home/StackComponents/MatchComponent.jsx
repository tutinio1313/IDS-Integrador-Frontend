import { React, useState } from "react";
import PropTypes from "prop-types";
import Edit from "/src/Components/Home/StackViews/View/Edit.jsx";

const MatchContentStyle = {
  background: "linear-gradient(180deg, #077105 0%, #2D712C 100%)",
  border: "1px solid #FFF",
  borderRadius: "9px"
};

const CounterStyle = {
  background: "#1B441A",
  border: "1px solid #FFF",
  borderRadius: "8px",
  height: "fit-content",
  padding: "3px"
};

const EditButtonStyle = {
  background: "linear-gradient(180deg, #077105 0%, #2D712C 100%)",
  cursor: "pointer"
};

export default function MatchComponent({
  localTeam,
  visitorTeam,
  localTeamGoals,
  visitorTeamGoals,
  date,
  idMatch
}) {
  var dateConverted = new Date(date);
  const [toggleEditView, setToggleEditView] = useState(false);

  const SetToggleEdit = (state) => {
    setToggleEditView(state);
  }

  return (
    <div>
      <h6 className="text-center text-sm">
        {dateConverted.getUTCDay() +
          "/" +
          dateConverted.getUTCMonth() +
          "/" +
          dateConverted.getUTCFullYear()}
      </h6>
      <div
        key={idMatch}
        className="w-full h-fit py-6 px-2 flex flex-row mx-auto justify-between"
        style={MatchContentStyle}
      >
        <div className="flex ">
          <div className="flex flex-col justify-center">
            <img
              src={localTeam.urlImage}
              alt={"local Team, " + localTeam.name}
              className=" max-h-10 w-10 mx-auto"
            />
            <p className="text-center">{localTeam.name}</p>
          </div>

          <p style={CounterStyle}>{localTeamGoals}</p>
        </div>

        <div className="flex flex-row mt-8">
          <div style={CounterStyle} id="hours">
            <p className="text-center">
              {new Date(date).getHours() < 10
                ? "0" + new Date(date).getHours()
                : new Date(date).getHours()}
            </p>
          </div>
          <p>:</p>

          <div style={CounterStyle} id="minutes">
            <p className="text-center">
              {new Date(date).getMinutes() < 10
                ? "0" + new Date(date).getMinutes()
                : new Date(date).getMinutes()}
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="flex flex-col">
            <img
              src={visitorTeam.urlImage}
              alt={"visitor Team, " + visitorTeam.name}
              className=" max-h-10 w-10 mx-auto"
            />
            <p className="text-center">{visitorTeam.name}</p>
          </div>

          <p style={CounterStyle}>{visitorTeamGoals}</p>
        </div>
      </div>
      <div
        className="mx-auto mt-1 w-fit h-fit p-0.5 container"
        style={EditButtonStyle}
      >
        <img
          src="/assets/Images/edit.svg"
          className="m-auto w-6 h-6 filter invert hover:invert-0 transition-all duration-500"
          onClick = {() => SetToggleEdit(true)}
        />
      </div>

      {toggleEditView ?  
        <div>
            <Edit
               name="Partidos"
               onClickFunction={SetToggleEdit}
               option={{
                 localTeam,
                 visitorTeam,
                 localTeamGoals,
                 visitorTeamGoals,
                 date,
                 idMatch
               }}
             />
        </div> : null}
    </div>
  );
}

MatchComponent.propTypes = {
  localTeam: PropTypes.object,
  visitorTeam: PropTypes.object,
  localTeamGoals: PropTypes.number,
  visitorTeamGoals: PropTypes.number,
  date: PropTypes.string,
  idMatch: PropTypes.number
};
