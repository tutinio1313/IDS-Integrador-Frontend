import axios from 'axios';

export default async function GetTeams(){
    await axios.get('api/Category').
    then( 
        (response) => {
            console.log(response);
            if(response.status == 200 && response.data.stateExecution)
            {
                return(response.data.teams);
            }
        }
    );
}