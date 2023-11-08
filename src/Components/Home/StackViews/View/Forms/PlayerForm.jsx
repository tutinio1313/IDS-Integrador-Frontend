import { React, useState, useEffect } from "react";
import axios from "axios";
import Router from "/src/Router/Router.js";
import Response from "/src/Components/Base/ResponseComponent.jsx";
import "/src/Styles/Home/Form.css";

export default function PlayerForm() {
  const [player, setPlayer] = useState({
    name: "",
    lastname: "",
    dorsal: "",
    birthday: "",
    category: "0",
    team: "0"
  });
  const [callApi, setCallApi] = useState(false);
  const [response, setResponse] = useState({
    state: false,
    stateExecution: null,
    message: null
  });

  const [teams, setTeams] = useState(undefined);
  const [categories, setCategories] = useState(undefined);

  useEffect(() => {
    if (callApi) {
      const Url = Router("Player");
      axios.Post(Url, player).then((response) => {
        if (response.statusCode == 200) {
          setResponse({
            state: true,
            stateExecution: response.data.stateExecution,
            message: response.data.message
          });
          setCallApi(false);
        }
      });
    }
  }, [callApi]);

  useEffect(() => {
    if (categories === undefined) {
      const get = async () => {
        axios.get("api/Category").then((response) => {
          setCategories(response.data.categories);
        });
      };
      get();
    }
  }, [categories]);

  useEffect(() => {
    if (teams === undefined) {
      const get = async () => {
        axios.get("api/Team").then((response) => {
          setTeams(response.data.teams);
        });
      };
      get();
    }
  }, [teams]);

  const canPost = () => {
    let result =
      player.name != "" &&
      player.lastname != "" &&
      player.dorsal != "" &&
      player.birthday != "";
    console.log(player);
    console.log(result);
    const button = document.getElementById("submitForm");

    if (result) {
      button.getAttribute("disabled") != null
        ? button.removeAttribute("disabled")
        : "";
    } else {
      button.getAttribute("disabled") == null
        ? button.setAttribute("disabled", "disabled")
        : "";
    }
  };

  const setPlayerState = (e) => {
    if(e.target.name == "name" || e.target.name == "lastname" || e.target.name == "dorsal" || e.target.name == "birthday"){
      setPlayer({ ...player, [e.target.name]: e.target.value });
    }
    else{
      setPlayer({...player, [e.target.name] : e.target.options.selectedIndex.toString()})
    }
    canPost();
  };

  return (
    <div>
      <div>
        <div>
          <div className="container flex flex-col">
            <div>
              <div className="container flex flex-col">
                <label>Nombre</label>

                <input
                  type="text"
                  className="mx-auto"
                  name="name"
                  onChange={setPlayerState}
                />
              </div>

              <div className="container flex flex-col mx-auto w-fit">
                <label>Apellido</label>
                <input
                  type="text"
                  className="mx-auto"
                  name="lastname"
                  onChange={setPlayerState}
                />
              </div>

              <div className="container flex flex-col mx-auto w-fit">
                <label>Dorsal</label>
                <input
                  type="text"
                  className="mx-auto"
                  name="dorsal"
                  onChange={setPlayerState}
                />
              </div>

              <div className="container flex flex-col mx-auto w-fit">
                <label>Fecha de nacimiento</label>
                <input type="date" id="birthday" name="birthday" onChange = {setPlayerState} />
              </div>
              <div className="container flex flex-col mx-auto w-fit">
                <label>Categoria</label>
                <select
                  className=" w-40 text-center"
                  id="category"
                  name = "category"
                  onChange={setPlayerState}
                >
                  {categories &&
                    categories.map((category) => {
                      if (category !== undefined) {
                        return (
                          <option
                            key={category?.idCategory}
                            value={category?.idCategory}
                          >
                            {category?.name}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>

              <div className="container flex flex-col mx-auto w-fit">
                <label>Equipo</label>
                <select
                  type="text"
                  id="team"
                  className=" w-40 text-center"
                  onChange={setPlayerState}
                  name="team"
                  selected={null}
                >
                  {teams &&
                    teams.map((team) => {
                      if (team !== undefined) {
                        return (
                          <option key={team?.idTeam} value={team?.idTeam}>
                            {team?.name}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
            </div>

            <button
              className="mx-auto text-xs"
              onClick={() => setCallApi(true)}
              id="submitForm"
              disabled
            >
              Añadir
            </button>
          </div>

          {response.state ? (
            <Response
              responseType={null}
              stateExecution={response.stateExecution}
              message={response.message}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
