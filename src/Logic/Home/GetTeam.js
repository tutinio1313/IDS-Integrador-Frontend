import axios from "axios";

export default async function GetTeam() {
  const response = await axios.get("api/Team");
  return(response.data.teams);
}
