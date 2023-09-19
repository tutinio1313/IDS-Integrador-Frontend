import {React, useState, useEffect} from 'react';
import GetTeam from '/src/Logic/Home/GetTeam.js';
import TeamComponent from '/src/Components/Home/StackComponents/TeamComponent.jsx';

export default function TeamView({category}) {

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
    
    return(
        <div id = "TeamView">
            {
                Array.isArray(Teams) ? 
                    Teams.map(
                        (Team) => {
                            return(
                            <TeamComponent 
                                key = {Team.idTeam}
                                name = {Team.name}
                                urlLogo = {Team.urlImage}
                            />);                         
                        })
                        
                        :
                        <h3>No hay equipos cargados.</h3>                       
                            
            }

            <div id = "ButtonContainer">
                <button 
                    id = "Add"
                    className = " bg-green-500 text-xs"
                    >
                Agregar
                </button>            
            </div>
        </div>
    );
}