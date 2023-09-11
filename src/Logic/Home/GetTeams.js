import axios from 'axios';

export default async function GetTeams(){
    await axios.get('api/Team').
    then( 
        (response) => {
            console.log(response);
            if(response.status == 200 && response.data.stateExecution)
            {
                console.table(response.data.teams);
                return(response.data.teams);
            }
        }
    );
}