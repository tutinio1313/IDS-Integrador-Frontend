import axios from 'axios';

export default async function GetTeam(){
    await axios.get('api/Team').
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